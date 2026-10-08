import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ZapierPreview } from './ZapierPreview';
import { zapierPreviews } from './registry';

describe('ZapierPreview', () => {
  it('keeps account identity out of the fictional shell', () => {
    const { container } = render(<ZapierPreview variant="application-shell" />);
    expect(container).not.toHaveTextContent('@');
    expect(
      screen.getByRole('heading', { name: 'What would you like to automate?' })
    ).toBeInTheDocument();
  });

  it('opens the guarded creation menu without starting a product', async () => {
    const user = userEvent.setup();
    render(<ZapierPreview variant="application-shell" />);
    await user.click(screen.getByRole('button', { name: /create/i }));
    expect(screen.getByLabelText('Fictional creation menu')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Agents/i }));
    expect(screen.getByRole('status')).toHaveTextContent('Agents creation was not started.');
  });

  it('shows distinct trigger and action availability', async () => {
    const user = userEvent.setup();
    render(<ZapierPreview variant="trigger-action-picker" />);
    expect(screen.getByRole('button', { name: /PathsNo trigger available/i })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'Action' }));
    expect(screen.getByRole('button', { name: /PathsBuild different steps/i })).toBeEnabled();
    expect(screen.getByRole('button', { name: /ScheduleNo action available/i })).toBeDisabled();
  });

  it('does not enable AI prompt submission', () => {
    render(<ZapierPreview variant="zap-editor-canvas" />);
    expect(screen.getByRole('button', { name: 'Start building' })).toBeDisabled();
    expect(screen.getByLabelText('Fictional editor Copilot prompt')).toHaveValue('');
  });

  it('marks action testing as a guarded source-reviewed boundary', async () => {
    const user = userEvent.setup();
    render(<ZapierPreview variant="data-mapping-testing" />);
    await user.click(screen.getByRole('button', { name: 'Test' }));
    expect(screen.getByRole('button', { name: 'Test step' })).toBeDisabled();
    expect(screen.getByText(/can create data in a connected app/i)).toBeInTheDocument();
  });

  it('keeps approval submission disabled', async () => {
    const user = userEvent.setup();
    render(<ZapierPreview variant="flow-controls-approvals" />);
    await user.click(screen.getByRole('button', { name: 'Human in the Loop' }));
    expect(screen.getByRole('button', { name: 'Send approval request' })).toBeDisabled();
  });

  it('does not expose sensitive settings values', () => {
    const { container } = render(<ZapierPreview variant="settings-catalogue" />);
    expect(container).not.toHaveTextContent('@');
    expect(screen.getByRole('button', { name: 'Save changes' })).toBeDisabled();
  });

  it('renders every registered Zapier component without a missing state', () => {
    for (const [id, preview] of Object.entries(zapierPreviews)) {
      if (preview.type !== 'reconstructed') continue;
      const { container, unmount } = render(<preview.Component {...preview.fixtures[0].props} />);
      expect(container, id).not.toBeEmptyDOMElement();
      unmount();
    }
  });

  it('keeps the connection authorization boundary disabled', async () => {
    const user = userEvent.setup();
    render(<ZapierPreview variant="connection-management-states" />);
    await user.click(screen.getByRole('button', { name: 'Create connection' }));
    expect(screen.getByRole('dialog', { name: 'Fictional add connection' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Continue to authorization' })).toBeDisabled();
  });

  it('shows the complete observed run-status taxonomy', () => {
    render(<ZapierPreview variant="history-status-filter" />);
    for (const status of [
      'Errored',
      'Handled error',
      'Needs review',
      'On hold',
      'Safely halted',
      'Filtered',
      'Successful',
      'Delayed',
      'Scheduled',
      'Running',
    ]) {
      expect(screen.getByRole('button', { name: new RegExp(status, 'i') })).toBeInTheDocument();
    }
  });
});

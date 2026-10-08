import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { MakePreview } from './MakePreview';

describe('MakePreview', () => {
  it('keeps live account identity and organization ids out of the shell', () => {
    const { container } = render(<MakePreview variant="application-shell" />);
    expect(container).not.toHaveTextContent('@centilio.com');
    expect(container).not.toHaveTextContent('9226530');
    expect(screen.getByRole('heading', { name: 'What are we automating?' })).toBeInTheDocument();
  });

  it('keeps scenario creation disabled', () => {
    render(<MakePreview variant="scenarios-empty" />);
    expect(
      screen
        .getAllByRole('button', { name: /create scenario/i })
        .every((button) => button.hasAttribute('disabled'))
    ).toBe(true);
  });

  it('keeps role permissions read-only', () => {
    render(<MakePreview variant="role-permissions" />);
    expect(
      screen.getAllByRole('checkbox').every((checkbox) => checkbox.hasAttribute('disabled'))
    ).toBe(true);
  });

  it('switches between fictional mapping and schedule panels', async () => {
    const user = userEvent.setup();
    render(<MakePreview variant="mapping-schedule-panel" />);
    expect(screen.getByRole('heading', { name: 'Action module' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Schedule settings' }));
    expect(screen.getByRole('heading', { name: 'Schedule settings' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Save schedule' })).toBeDisabled();
  });

  it('shows fictional run details without enabling replay', async () => {
    const user = userEvent.setup();
    render(<MakePreview variant="run-history-inspector" />);
    await user.click(screen.getAllByRole('button', { name: 'Details' })[1]);
    expect(screen.getByRole('heading', { name: 'Run 1041' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Replay run' })).toBeDisabled();
  });

  it('keeps recovery and deletion controls disabled', () => {
    render(<MakePreview variant="incomplete-executions-errors" />);
    expect(screen.getByRole('button', { name: 'Retry selected' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Delete selected' })).toBeDisabled();
  });

  it('keeps global quick actions disabled', () => {
    render(<MakePreview variant="global-search-palette" />);
    expect(screen.getByRole('button', { name: /create a scenario/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /create an ai agent/i })).toBeDisabled();
  });

  it('keeps profile security actions disabled', () => {
    render(<MakePreview variant="profile-security-actions" />);
    for (const action of [
      'Enable Two Factor Auth',
      'Change password',
      'Change email',
      'Delete profile',
      'Affiliate settings',
      'Sign out',
    ]) {
      expect(screen.getByRole('button', { name: action })).toBeDisabled();
    }
  });

  it('does not expose live billing or profile identity in new surfaces', () => {
    const { container } = render(<MakePreview variant="subscription-overview" />);
    expect(container).not.toHaveTextContent('@centilio.com');
    expect(container).not.toHaveTextContent('Seetha');
    expect(container).not.toHaveTextContent('9226530');
  });
});

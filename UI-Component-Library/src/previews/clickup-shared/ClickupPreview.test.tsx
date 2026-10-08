import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ClickupPreview } from './ClickupPreview';

describe('ClickupPreview', () => {
  it('renders a fictional shell without provider identity', () => {
    const { container } = render(<ClickupPreview variant="application-shell" />);
    expect(screen.getByText('Northstar Studio')).toBeInTheDocument();
    expect(container).not.toHaveTextContent(/130044|ravisessions/i);
  });
  it('opens and closes local search', async () => {
    const user = userEvent.setup();
    render(<ClickupPreview variant="application-shell" />);
    await user.click(screen.getByRole('button', { name: /search/i }));
    expect(screen.getByRole('dialog', { name: 'Fictional global search' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(
      screen.queryByRole('dialog', { name: 'Fictional global search' })
    ).not.toBeInTheDocument();
  });
  it('switches My Work tabs locally', async () => {
    const user = userEvent.setup();
    render(<ClickupPreview variant="my-work-tabs" />);
    await user.click(screen.getByRole('button', { name: 'Done' }));
    expect(
      screen.getByRole('heading', { name: 'Completed work appears here' })
    ).toBeInTheDocument();
  });
  it('keeps reply sending disabled', async () => {
    const user = userEvent.setup();
    render(<ClickupPreview variant="replies-center" />);
    await user.click(screen.getByRole('button', { name: 'Read' }));
    expect(screen.getByRole('button', { name: 'Send' })).toBeDisabled();
  });
  it('keeps AI prompt submission disabled', () => {
    render(<ClickupPreview variant="ai-onboarding" />);
    expect(screen.getByRole('button', { name: 'Send' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Personalize Brain²' })).toBeDisabled();
  });
});

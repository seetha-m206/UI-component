import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushToastBanner } from './SemrushToastBanner';

describe('SemrushToastBanner', () => {
  it('dismisses and restores feedback locally', async () => {
    const user = userEvent.setup();
    render(<SemrushToastBanner />);
    await user.click(screen.getByRole('button', { name: 'Dismiss feedback' }));
    expect(screen.getByRole('status')).toHaveTextContent(/dismissed locally/i);
    await user.click(screen.getByRole('button', { name: 'Show feedback' }));
    expect(screen.getByText('Report updated')).toBeInTheDocument();
  });

  it('uses an assertive alert for the synthetic error and keeps retry local', async () => {
    const user = userEvent.setup();
    render(<SemrushToastBanner initialKind="error" />);
    expect(screen.getByRole('alert')).toHaveTextContent(/synthetic failure/i);
    await user.click(screen.getByRole('button', { name: 'Retry' }));
    expect(screen.getByRole('alert')).toHaveTextContent(/Retried locally 1 time/i);
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsActionButton } from './AhrefsActionButton';
describe('AhrefsActionButton', () => {
  it('guards the action locally', async () => {
    render(<AhrefsActionButton label="See pricing" />);
    await userEvent.click(screen.getByRole('button', { name: 'See pricing' }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
  it('renders loading as disabled', () => {
    render(<AhrefsActionButton loading />);
    expect(screen.getByRole('button', { name: 'Working…' })).toBeDisabled();
  });
});

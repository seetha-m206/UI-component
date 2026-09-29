import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsSmmChannelOnboarding } from './AhrefsSmmChannelOnboarding';
describe('AhrefsSmmChannelOnboarding', () => {
  it('renders the observed first-channel state', () => {
    render(<AhrefsSmmChannelOnboarding />);
    expect(screen.getByRole('heading', { name: 'Connect your first channel' })).toBeInTheDocument();
    expect(screen.getByLabelText('Supported social channels')).toBeInTheDocument();
  });
  it('guards connection locally', async () => {
    render(<AhrefsSmmChannelOnboarding />);
    await userEvent.click(screen.getByRole('button', { name: /Connect channel/ }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
  it('dismisses the local announcement', async () => {
    render(<AhrefsSmmChannelOnboarding />);
    await userEvent.click(screen.getByRole('button', { name: 'Dismiss announcement' }));
    expect(screen.queryByLabelText('Product announcement')).not.toBeInTheDocument();
  });
});

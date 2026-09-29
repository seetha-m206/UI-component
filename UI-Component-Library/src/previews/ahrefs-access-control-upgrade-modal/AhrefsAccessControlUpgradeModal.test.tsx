import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsAccessControlUpgradeModal } from './AhrefsAccessControlUpgradeModal';
describe('AhrefsAccessControlUpgradeModal', () => {
  it('closes and reopens locally', async () => {
    render(<AhrefsAccessControlUpgradeModal />);
    await userEvent.click(screen.getByRole('button', { name: 'Close access-control modal' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Manage access' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
  it('guards upgrade navigation', async () => {
    render(<AhrefsAccessControlUpgradeModal />);
    await userEvent.click(screen.getByRole('button', { name: 'Upgrade plan' }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
});

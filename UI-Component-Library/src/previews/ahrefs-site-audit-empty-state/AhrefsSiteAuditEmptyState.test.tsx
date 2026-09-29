import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsSiteAuditEmptyState } from './AhrefsSiteAuditEmptyState';

describe('AhrefsSiteAuditEmptyState', () => {
  it('renders the observed first-project state and update', () => {
    render(<AhrefsSiteAuditEmptyState />);
    expect(screen.getByRole('heading', { name: 'Add your first project' })).toBeInTheDocument();
    expect(screen.getByText(/website that you own/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add project/ })).toBeInTheDocument();
    expect(screen.getByRole('dialog', { name: 'Product update' })).toBeInTheDocument();
  });

  it('guards project creation locally', async () => {
    render(<AhrefsSiteAuditEmptyState />);
    await userEvent.click(screen.getByRole('button', { name: /Add project/ }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });

  it('dismisses and restores the local update surface', async () => {
    render(<AhrefsSiteAuditEmptyState />);
    await userEvent.click(screen.getByRole('button', { name: 'Dismiss product update' }));
    expect(screen.queryByRole('dialog', { name: 'Product update' })).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Open help and product updates' }));
    expect(screen.getByRole('dialog', { name: 'Product update' })).toBeInTheDocument();
  });

  it('marks update navigation as unverified', async () => {
    render(<AhrefsSiteAuditEmptyState />);
    await userEvent.click(screen.getByRole('button', { name: 'Try now' }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { FreshserviceAdminKnowledge } from './FreshserviceAdminKnowledge';

afterEach(() => vi.unstubAllGlobals());
describe('Freshservice Admin and Knowledge boundaries', () => {
  it('keeps role permission editing local and guards Save', async () => {
    const fetch = vi.fn(); vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    render(<FreshserviceAdminKnowledge variant="admin-role-form" />);
    expect(screen.getByRole('checkbox', { name: 'Send reply to a ticket' })).toBeDisabled();
    await user.click(screen.getByRole('checkbox', { name: 'View tickets' }));
    expect(screen.getByRole('checkbox', { name: 'Send reply to a ticket' })).toBeEnabled();
    await user.type(screen.getByRole('textbox', { name: 'Role Name *' }), 'Fictional role');
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
    expect(fetch).not.toHaveBeenCalled();
  });
  it('changes article filters locally without applying them', async () => {
    const fetch = vi.fn(); vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    render(<FreshserviceAdminKnowledge variant="knowledge-category-filter" />);
    await user.click(screen.getByRole('checkbox', { name: 'Published' }));
    await user.selectOptions(screen.getByLabelText('Article review date status'), 'Past review date');
    await user.click(screen.getByRole('button', { name: 'Apply' }));
    expect(screen.getByRole('checkbox', { name: 'Published' })).toBeChecked();
    expect(screen.getByLabelText('Article review date status')).toHaveValue('Past review date');
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
    expect(fetch).not.toHaveBeenCalled();
  });
  it('shows the three observed empty Trash tabs', async () => {
    const user = userEvent.setup();
    render(<FreshserviceAdminKnowledge variant="knowledge-trash" />);
    expect(screen.getByText('No articles in Trash')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Folders' }));
    expect(screen.getByText('No folders in Trash')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Categories' }));
    expect(screen.getByText('No categories in Trash')).toBeVisible();
  });
  it('keeps import disabled without a file', () => {
    render(<FreshserviceAdminKnowledge variant="knowledge-import" />);
    expect(screen.getByRole('button', { name: 'Import' })).toBeDisabled();
    expect(screen.getByText(/\.docx, \.txt, \.xml, \.csv, \.xlsx/)).toBeVisible();
  });
});

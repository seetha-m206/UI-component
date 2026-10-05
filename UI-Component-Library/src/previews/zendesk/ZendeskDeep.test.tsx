import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ZendeskDeepPreview } from './ZendeskDeep';

describe('Zendesk deeper local reference', () => {
  it('shows search facets and applies an observed status chip locally', async () => {
    const u = userEvent.setup();
    render(<ZendeskDeepPreview kind="global-search" initialOpen />);
    await u.type(screen.getByRole('textbox', { name: 'Search support' }), 'refund');
    await u.click(screen.getByRole('button', { name: 'Tickets' }));
    await u.click(screen.getByRole('button', { name: 'Status' }));
    await u.click(screen.getByRole('menuitem', { name: 'Open' }));
    expect(screen.getByText(/Status: Open/)).toBeVisible();
    await u.click(screen.getByRole('button', { name: 'Clear status' }));
    expect(screen.queryByText(/Status: Open/)).not.toBeInTheDocument();
  });
  it('reproduces and clears the empty internal-note state', async () => {
    const u = userEvent.setup();
    render(<ZendeskDeepPreview kind="conversation-filter" />);
    await u.click(screen.getByRole('button', { name: 'Filter: All' }));
    await u.click(screen.getByRole('menuitemradio', { name: 'Internal notes' }));
    expect(screen.getByText(/No internal notes in sight/)).toBeVisible();
    await u.click(screen.getByRole('button', { name: 'Clear filter' }));
    expect(screen.getByText(/Please help with our team subscription/)).toBeVisible();
  });
  it('guards ticket and approval actions without network calls', async () => {
    const u = userEvent.setup(),
      fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    render(<ZendeskDeepPreview kind="ticket-actions" initialOpen />);
    await u.click(screen.getByRole('menuitem', { name: 'Delete' }));
    expect(screen.getByRole('status')).toHaveTextContent('No provider request or saved change');
    expect(fetch).not.toHaveBeenCalled();
    vi.unstubAllGlobals();
  });
  it('shows the macro filter drawer and column choices', async () => {
    const u = userEvent.setup();
    render(<ZendeskDeepPreview kind="admin-macro-list" />);
    await u.click(screen.getByRole('button', { name: 'Filter' }));
    expect(screen.getByRole('combobox', { name: 'Available for' })).toBeVisible();
    await u.click(screen.getByRole('button', { name: 'Cancel' }));
    await u.click(screen.getByRole('button', { name: 'Show and hide columns' }));
    expect(screen.getByText('Sort by usage (30d)')).toBeVisible();
  });
  it('keeps macro creation local and shows discard confirmation', async () => {
    const u = userEvent.setup(),
      fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    render(<ZendeskDeepPreview kind="admin-macro-editor" empty />);
    expect(screen.getByRole('button', { name: /^Create$/ })).toBeDisabled();
    await u.type(screen.getByRole('textbox', { name: 'Macro name*' }), 'Fictional follow up');
    await u.click(screen.getByRole('button', { name: 'Add action' }));
    expect(screen.getByRole('button', { name: /^Create$/ })).toBeEnabled();
    await u.click(screen.getByRole('button', { name: 'Cancel' }));
    const dialog = screen.getByRole('dialog', { name: 'Unsaved changes' });
    expect(within(dialog).getByText(/All unsaved changes will be lost/)).toBeVisible();
    await u.click(within(dialog).getByRole('button', { name: 'Yes, discard changes' }));
    expect(screen.getByRole('heading', { name: 'Follow up after no response' })).toBeVisible();
    expect(fetch).not.toHaveBeenCalled();
    vi.unstubAllGlobals();
  });
  it('keeps an existing macro unchanged until an edit and guards its save', async () => {
    const u = userEvent.setup(),
      fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    render(<ZendeskDeepPreview kind="admin-macro-editor" />);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    await u.type(screen.getByRole('textbox', { name: 'Description' }), 'Fictional note');
    expect(screen.getByRole('button', { name: 'Save' })).toBeEnabled();
    await u.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByRole('status')).toHaveTextContent('No provider request or saved change');
    expect(fetch).not.toHaveBeenCalled();
    vi.unstubAllGlobals();
  });
  it('opens the blank macro form from the inventory preview', async () => {
    const u = userEvent.setup();
    render(<ZendeskDeepPreview kind="admin-macro-list" />);
    await u.click(screen.getByRole('button', { name: 'Create macro' }));
    expect(screen.getByRole('heading', { name: 'Add new macro' })).toBeVisible();
    expect(screen.getByRole('button', { name: /^Create$/ })).toBeDisabled();
  });
});

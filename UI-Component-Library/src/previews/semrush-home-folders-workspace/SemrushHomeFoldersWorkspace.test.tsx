import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SemrushHomeFoldersWorkspace } from './SemrushHomeFoldersWorkspace';

describe('SemrushHomeFoldersWorkspace', () => {
  it('shows and clears a recoverable search empty state', async () => {
    render(<SemrushHomeFoldersWorkspace />);
    await userEvent.type(screen.getByRole('textbox', { name: 'Website or folder name' }), 'no-match-example.invalid');
    expect(screen.getByRole('status')).toHaveTextContent(/No results found/i);
    await userEvent.click(screen.getByRole('button', { name: 'Clear filters' }));
    expect(screen.getAllByText('northstar.example').length).toBeGreaterThan(0);
  });

  it('exposes ownership and tags filter states', async () => {
    render(<SemrushHomeFoldersWorkspace initialState="ownership-menu" />);
    expect(screen.getByRole('listbox', { name: 'Ownership' })).toHaveTextContent(/Owned by me/i);
    await userEvent.click(screen.getByRole('combobox', { name: 'Tags' }));
    expect(screen.getByRole('listbox', { name: 'Tags' })).toHaveTextContent(/No tags here yet/i);
  });

  it('moves through table loading into the SEO grid', async () => {
    render(<SemrushHomeFoldersWorkspace />);
    await userEvent.click(screen.getByRole('switch', { name: 'Table view (SEO only)' }));
    const grid = screen.getByRole('grid', { name: 'Folders table' });
    expect(grid).toHaveAttribute('aria-busy', 'true');
    await waitFor(() => expect(grid).toHaveAttribute('aria-busy', 'false'));
    expect(within(grid).getByRole('columnheader', { name: 'Backlink Prospects' })).toBeInTheDocument();
  });

  it('opens the guarded folder settings menu', () => {
    render(<SemrushHomeFoldersWorkspace initialState="settings-menu" />);
    const menu = screen.getByRole('menu', { name: 'Folder settings' });
    expect(within(menu).getByRole('menuitem', { name: /Delete/ })).toBeDisabled();
  });

  it('opens and cancels the create-folder modal without creating data', async () => {
    render(<SemrushHomeFoldersWorkspace />);
    await userEvent.click(screen.getByRole('button', { name: /Create Folder/ }));
    const dialog = screen.getByRole('dialog', { name: 'Create folder' });
    await userEvent.click(within(dialog).getByRole('combobox', { name: 'Website' }));
    expect(within(dialog).getByRole('listbox', { name: 'Website suggestions' })).toBeInTheDocument();
    await userEvent.click(within(dialog).getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('dialog', { name: 'Create folder' })).not.toBeInTheDocument();
  });

  it('collapses and restores the filter controls', async () => {
    render(<SemrushHomeFoldersWorkspace />);
    await userEvent.click(screen.getByRole('button', { name: 'Hide filters and view' }));
    expect(screen.queryByRole('textbox', { name: 'Website or folder name' })).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Show filters and view' }));
    expect(screen.getByRole('textbox', { name: 'Website or folder name' })).toBeInTheDocument();
  });
});

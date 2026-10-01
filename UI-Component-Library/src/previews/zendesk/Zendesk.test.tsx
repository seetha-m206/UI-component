import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ZendeskPreview } from './Zendesk';

describe('Zendesk local reference behavior', () => {
  it('filters the home queue and restores the ticket with clear filters', async () => {
    const u = userEvent.setup();
    render(<ZendeskPreview kind="home" />);
    await u.click(screen.getByRole('button', { name: 'Status' }));
    await u.click(screen.getByRole('menuitemcheckbox', { name: 'Pending' }));
    expect(screen.getByText('No tasks match your filters')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Status 1' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    await u.click(screen.getByRole('menuitem', { name: 'Clear filters' }));
    expect(screen.getByRole('button', { name: /Help with our team subscription/ })).toBeVisible();
    await u.keyboard('{Escape}');
    expect(screen.getByRole('button', { name: 'Status' })).toHaveFocus();
  });
  it('supports keyboard menu navigation and returns focus after selection', async () => {
    const u = userEvent.setup();
    render(<ZendeskPreview kind="priority" />);
    screen.getByRole('button', { name: 'Normal' }).focus();
    await u.keyboard('{ArrowDown}{End}{Enter}');
    expect(screen.getByRole('button', { name: 'Urgent' })).toHaveFocus();
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
  it('keeps a fictional draft when a submit action is guarded and makes no request', async () => {
    const u = userEvent.setup(),
      fetch = vi.fn(),
      open = vi.spyOn(window, 'open');
    vi.stubGlobal('fetch', fetch);
    render(<ZendeskPreview kind="ticket" />);
    await u.type(
      screen.getByRole('textbox', { name: 'Public reply composer' }),
      'A fictional draft'
    );
    await u.click(screen.getByRole('button', { name: 'Submit as Open' }));
    expect(screen.getByRole('status')).toHaveTextContent('No provider request or saved change');
    expect(screen.getByRole('textbox', { name: 'Public reply composer' })).toHaveValue(
      'A fictional draft'
    );
    expect(fetch).not.toHaveBeenCalled();
    expect(open).not.toHaveBeenCalled();
    vi.unstubAllGlobals();
    open.mockRestore();
  });
  it('changes reply mode locally and retains draft text', async () => {
    const u = userEvent.setup();
    render(<ZendeskPreview kind="composer" />);
    await u.type(
      screen.getByRole('textbox', { name: 'Public reply composer' }),
      'Private fixture text'
    );
    await u.click(screen.getByRole('button', { name: 'Public reply' }));
    await u.click(screen.getByRole('menuitemradio', { name: 'Internal note' }));
    expect(screen.getByRole('textbox', { name: 'Internal note composer' })).toHaveValue(
      'Private fixture text'
    );
    expect(screen.getByText('Visible to your team')).toBeVisible();
  });
  it('contains dialog focus and restores the creation trigger on Escape', async () => {
    const u = userEvent.setup();
    render(<ZendeskPreview kind="customer-modal" />);
    await u.click(screen.getByRole('button', { name: 'Add customer' }));
    const dialog = screen.getByRole('dialog', { name: 'Add new customer' });
    expect(dialog).toHaveFocus();
    await u.keyboard('{Shift>}{Tab}{/Shift}');
    expect(within(dialog).getByRole('button', { name: 'Add' })).toHaveFocus();
    await u.keyboard('{Tab}');
    expect(within(dialog).getByRole('button', { name: 'Close Add new customer' })).toHaveFocus();
    await u.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add customer' })).toHaveFocus();
  });
  it('guards customer creation and leaves fictional directory data unchanged', async () => {
    const u = userEvent.setup();
    render(<ZendeskPreview kind="customers" />);
    await u.click(screen.getByRole('button', { name: 'Add customer' }));
    await u.type(screen.getByRole('textbox', { name: 'Name' }), 'New fixture');
    await u.click(screen.getByRole('button', { name: 'Add' }));
    expect(screen.getByRole('status')).toHaveTextContent('Add customer: local preview only');
    await u.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.getByText('1 customer')).toBeVisible();
    expect(screen.queryByText('New fixture')).not.toBeInTheDocument();
  });
  it('reveals guarded bulk actions and clears all selection', async () => {
    const u = userEvent.setup();
    render(<ZendeskPreview kind="views" />);
    await u.click(screen.getByRole('checkbox', { name: 'Select all tickets' }));
    expect(screen.getByRole('checkbox', { name: 'Select ticket 101' })).toBeChecked();
    await u.click(screen.getByRole('button', { name: 'Delete' }));
    expect(screen.getByRole('status')).toHaveTextContent('Delete: local preview only');
    expect(screen.getByText('Help with our team subscription')).toBeVisible();
    await u.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.getByRole('checkbox', { name: 'Select all tickets' })).not.toBeChecked();
    expect(screen.queryByRole('button', { name: 'Delete' })).not.toBeInTheDocument();
  });
  it('cancels view filtering and keeps the original table', async () => {
    const u = userEvent.setup();
    render(<ZendeskPreview kind="views" />);
    await u.click(screen.getByRole('button', { name: 'Filter' }));
    await u.type(screen.getByRole('textbox', { name: 'Subject' }), 'fixture query');
    await u.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.getByText('Help with our team subscription')).toBeVisible();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
  it('exposes the knowledge empty view and changes columns only locally', async () => {
    const u = userEvent.setup();
    render(<ZendeskPreview kind="knowledge" />);
    await u.click(screen.getByRole('button', { name: 'Show and hide columns' }));
    await u.click(screen.getByRole('menuitemcheckbox', { name: 'Publication status' }));
    await u.keyboard('{Escape}');
    expect(screen.getByRole('columnheader', { name: 'Publication status' })).toBeVisible();
    await u.click(screen.getByRole('button', { name: 'Archived 0' }));
    expect(screen.getByText('There are currently no results')).toBeVisible();
    await u.click(screen.getByRole('button', { name: 'All articles 3' }));
    expect(screen.getByRole('button', { name: 'Getting started with Northstar' })).toBeVisible();
  });
  it('changes shell pages and reversibly collapses secondary navigation', async () => {
    const u = userEvent.setup();
    render(<ZendeskPreview kind="shell" />);
    await u.click(screen.getByRole('button', { name: 'Toggle subnavigation' }));
    expect(screen.getByRole('button', { name: 'Toggle subnavigation' })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
    await u.click(screen.getByRole('button', { name: 'Customers' }));
    expect(screen.getByRole('heading', { name: 'Customers' })).toBeVisible();
    await u.click(screen.getByRole('button', { name: 'Toggle subnavigation' }));
    expect(screen.getByText('Shared work')).toBeVisible();
  });
  it('switches contextual knowledge without losing the ticket', async () => {
    const u = userEvent.setup();
    render(<ZendeskPreview kind="ticket" />);
    await u.click(screen.getByRole('button', { name: 'Knowledge' }));
    expect(screen.getByRole('heading', { name: 'Suggested content' })).toBeVisible();
    await u.type(screen.getByRole('textbox', { name: 'Search knowledge' }), 'no-match-fixture');
    expect(screen.getByText('No matching local articles')).toBeVisible();
    await u.clear(screen.getByRole('textbox', { name: 'Search knowledge' }));
    expect(
      screen.getByRole('button', { name: /Getting started with Northstar.*General/ })
    ).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'Public reply composer' })).toBeVisible();
    await u.click(screen.getByRole('button', { name: 'Customer context' }));
    expect(screen.getByText('alex@northstar.example')).toBeVisible();
  });
  it('keeps zero-count saved views empty and restores the unsolved table', async () => {
    const u = userEvent.setup();
    render(<ZendeskPreview kind="views" />);
    await u.click(screen.getByRole('button', { name: 'Unassigned tickets 0' }));
    expect(screen.queryByRole('checkbox', { name: 'Select ticket 101' })).not.toBeInTheDocument();
    await u.click(screen.getByRole('button', { name: 'All unsolved tickets 1' }));
    expect(screen.getByRole('checkbox', { name: 'Select ticket 101' })).toBeVisible();
  });
  it('keeps disabled provider actions inert', async () => {
    const u = userEvent.setup();
    render(<ZendeskPreview kind="submission" disabled />);
    const submit = screen.getByRole('button', { name: 'Submit as Open' });
    expect(submit).toBeDisabled();
    await u.click(submit);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
});

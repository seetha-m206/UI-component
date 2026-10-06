import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SalesforceActions } from './SalesforceActions';
import { salesforceActionComponents } from './actionCatalogue';
import { salesforceComponents } from './catalogue';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
describe('Salesforce screen and action local fixtures', () => {
  it('registers 25 additions without duplicate component or variant identifiers', () => {
    expect(salesforceActionComponents).toHaveLength(25);
    expect(salesforceComponents).toHaveLength(117);
    expect(new Set(salesforceComponents.map((x) => x.id)).size).toBe(117);
    expect(new Set(salesforceComponents.map((x) => x.variant)).size).toBe(117);
  });
  it('keeps visibility choices mutually exclusive and guards save', async () => {
    const user = userEvent.setup();
    const fetch = vi.spyOn(globalThis, 'fetch');
    render(<SalesforceActions variant="new-list-view" />);
    await user.type(screen.getByRole('textbox', { name: 'List Name' }), 'Team examples');
    await user.click(screen.getByRole('radio', { name: 'All users can see this list view' }));
    expect(screen.getByRole('radio', { name: 'Only I can see this list view' })).not.toBeChecked();
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(within(screen.getByRole('dialog')).getByRole('note')).toHaveTextContent(
      'No provider request was sent'
    );
    expect(fetch).not.toHaveBeenCalled();
  });
  it('preserves rename API name as disabled', () => {
    render(<SalesforceActions variant="rename-list-view" />);
    expect(screen.getByRole('textbox', { name: 'List API Name' })).toBeDisabled();
    expect(screen.getByRole('textbox', { name: 'List Name' })).toHaveValue('All Open Cases');
  });
  it('traps dialog focus and returns it to the opener', async () => {
    const user = userEvent.setup();
    render(<SalesforceActions variant="clone-list-view" initialState="closed" />);
    const opener = screen.getByRole('button', { name: 'Open Clone List View' });
    await user.click(opener);
    const close = screen.getByRole('button', { name: 'Close Clone List View' });
    expect(close).toHaveFocus();
    await user.tab({ shift: true });
    expect(screen.getByRole('button', { name: 'Save' })).toHaveFocus();
    await user.tab();
    expect(close).toHaveFocus();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(opener).toHaveFocus();
  });
  it('transfers fields, changes order, and preserves selection without duplication', async () => {
    const user = userEvent.setup();
    render(<SalesforceActions variant="list-field-display" />);
    const available = screen.getByRole('listbox', { name: 'Available Fields' }),
      visible = screen.getByRole('listbox', { name: 'Visible Fields' });
    await user.selectOptions(available, 'Account Name');
    await user.click(screen.getByRole('button', { name: 'Move to Visible Fields' }));
    expect(
      within(available).queryByRole('option', { name: 'Account Name' })
    ).not.toBeInTheDocument();
    await user.selectOptions(visible, 'Account Name');
    await user.click(screen.getByRole('button', { name: 'Move field up' }));
    expect(within(visible).getAllByRole('option').at(-2)).toHaveTextContent('Account Name');
    await user.click(screen.getByRole('button', { name: 'Move to Available Fields' }));
    expect(within(visible).queryByRole('option', { name: 'Account Name' })).not.toBeInTheDocument();
    expect(within(available).getAllByRole('option', { name: 'Account Name' })).toHaveLength(1);
  });
  it('edits chart options locally without implying a saved chart', async () => {
    const user = userEvent.setup();
    render(<SalesforceActions variant="case-chart-drawer" />);
    await user.click(screen.getByRole('button', { name: 'New Chart' }));
    await user.selectOptions(screen.getByRole('combobox', { name: 'Chart Type' }), 'Donut Chart');
    await user.selectOptions(screen.getByRole('combobox', { name: 'Grouping Field' }), 'Priority');
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByRole('dialog')).toBeVisible();
    expect(screen.getByRole('note')).toHaveTextContent('NOT OBSERVED');
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.getByText('This list doesn’t have any charts yet.')).toBeVisible();
  });
  it('keeps filter Done temporary and cancels the draft', async () => {
    const user = userEvent.setup();
    render(<SalesforceActions variant="case-filter-editor" />);
    await user.selectOptions(screen.getByRole('combobox', { name: 'Field' }), 'Subject');
    await user.selectOptions(screen.getByRole('combobox', { name: 'Operator' }), 'contains');
    await user.type(screen.getByRole('textbox', { name: 'Value' }), 'example');
    await user.click(screen.getByRole('button', { name: 'Done' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByText('New Filter*')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByText('New Filter*')).not.toBeInTheDocument();
    expect(screen.getByText(/Closed equals False/)).toBeVisible();
  });
  it('removes temporary logic without changing the base filters', async () => {
    const user = userEvent.setup();
    render(<SalesforceActions variant="filter-logic-editor" />);
    await user.clear(screen.getByRole('textbox', { name: 'Filter Logic' }));
    await user.type(screen.getByRole('textbox', { name: 'Filter Logic' }), '1 OR 2');
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    await user.click(screen.getByRole('button', { name: 'Add Filter Logic' }));
    expect(screen.getByRole('textbox', { name: 'Filter Logic' })).toHaveValue('1 AND 2');
  });
  it('reorders navigation locally and returns to defaults', async () => {
    const user = userEvent.setup();
    render(<SalesforceActions variant="service-navigation-editor" />);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'Move Cases down' }));
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('Contacts');
    expect(screen.getByRole('button', { name: 'Save' })).toBeEnabled();
    await user.click(screen.getByRole('button', { name: 'Reset Navigation to Default' }));
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('Cases');
  });
  it('filters item catalogue and guards adding selected items', async () => {
    const user = userEvent.setup();
    render(<SalesforceActions variant="navigation-item-catalogue" />);
    expect(screen.getByRole('button', { name: 'Add Nav Items' })).toBeDisabled();
    await user.type(screen.getByRole('textbox', { name: 'Search available items' }), 'Reports');
    await user.click(screen.getByRole('checkbox', { name: 'Reports' }));
    expect(screen.getByText('1 items selected')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Add Nav Items' }));
    expect(screen.getByRole('note')).toHaveTextContent('guarded');
  });
  it('cancels color edits and applies a local color only on Done', async () => {
    const user = userEvent.setup();
    render(<SalesforceActions variant="new-collection-dialog" />);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    await user.type(screen.getByRole('textbox', { name: 'Name' }), 'Example collection');
    await user.click(screen.getByRole('button', { name: 'Choose color' }));
    await user.click(screen.getByRole('button', { name: '#ff538a' }));
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.getByRole('button', { name: 'Choose color' })).toHaveTextContent('#1b96ff');
    await user.click(screen.getByRole('button', { name: 'Choose color' }));
    await user.click(screen.getByRole('button', { name: '#ff538a' }));
    await user.click(screen.getByRole('button', { name: 'Done' }));
    expect(screen.getByRole('button', { name: 'Choose color' })).toHaveTextContent('#ff538a');
  });
  it('keeps collection membership separate from persisted Save', async () => {
    const user = userEvent.setup();
    render(<SalesforceActions variant="add-to-collections-dialog" />);
    await user.click(screen.getByRole('button', { name: 'Add to Service' }));
    expect(screen.getByRole('button', { name: 'Remove from Service' })).toHaveTextContent('Added');
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByRole('note')).toHaveTextContent('No provider request');
  });
  it('searches fictional reports from Favorites, filters type, and tracks selection', async () => {
    const user = userEvent.setup();
    render(<SalesforceActions variant="analytics-favorites-screen" />);
    expect(screen.getByText('No items to display.')).toBeVisible();
    await user.type(
      screen.getByRole('textbox', { name: 'Search reports, dashboards, and more' }),
      'Case{Enter}'
    );
    expect(screen.getByRole('table', { name: 'Analytics keyword results' })).toBeVisible();
    await user.click(screen.getByRole('checkbox', { name: 'Select Case Library · Example' }));
    expect(screen.getByText('1 Items Selected (Limit 50)')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Dashboards' }));
    expect(screen.getByText('No items to display.')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Reports' }));
    expect(screen.getByRole('checkbox', { name: 'Select Case Library · Example' })).toBeChecked();
  });
  it('guards Copy Link without exposing a tenant URL or writing clipboard', async () => {
    const user = userEvent.setup();
    const fetch = vi.spyOn(globalThis, 'fetch');
    const copy = vi.spyOn(navigator.clipboard, 'writeText');
    render(<SalesforceActions variant="report-url-dialog" />);
    expect(screen.getByRole('textbox', { name: 'Report URL' })).toHaveValue(
      'https://example.invalid/reports/fictional-case-library'
    );
    await user.click(screen.getByRole('button', { name: 'Copy Link' }));
    expect(copy).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
    expect(screen.getByRole('note')).toHaveTextContent('Copy Link is guarded');
  });
  it('dismisses and reopens the selection warning', async () => {
    const user = userEvent.setup();
    render(<SalesforceActions variant="bulk-selection-toast" />);
    await user.click(screen.getByRole('button', { name: 'Dismiss selection warning' }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Change Owner' }));
    expect(screen.getByRole('alert')).toHaveTextContent('Select at least one record');
  });
  it('disables all local inputs using the fixture toggle', () => {
    render(<SalesforceActions variant="new-list-view" disabled />);
    expect(screen.getByRole('textbox', { name: 'List Name' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
  });
});

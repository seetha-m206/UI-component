import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SalesforceIndividuals } from './SalesforceIndividuals';
import { salesforceIndividualComponents } from './individualCatalogue';
import { salesforceComponents } from './catalogue';
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
describe('Individual Salesforce controls', () => {
  it('mounts each control separately with a parent and distinct ID', () => {
    expect(salesforceIndividualComponents).toHaveLength(17);
    expect(salesforceComponents).toHaveLength(117);
    expect(new Set(salesforceComponents.map((x) => x.id)).size).toBe(117);
    expect(new Set(salesforceComponents.map((x) => x.variant)).size).toBe(117);
    for (const entry of salesforceIndividualComponents) {
      expect(salesforceComponents.some((x) => x.id === entry.parent)).toBe(true);
      render(<SalesforceIndividuals variant={entry.variant} />);
      expect(
        screen.getByRole('region', { name: 'Salesforce fictional reconstruction' })
      ).toBeVisible();
      cleanup();
    }
  });
  it('renders the chart type options and changes only the local selection', async () => {
    const user = userEvent.setup();
    const fetch = vi.spyOn(globalThis, 'fetch');
    render(<SalesforceIndividuals variant="chart-type-picker" />);
    const list = screen.getByRole('listbox', { name: 'Chart Type' });
    expect(within(list).getAllByRole('option')).toHaveLength(3);
    expect(within(list).getByRole('option', { name: 'Horizontal Bar Chart' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
    await user.click(within(list).getByRole('option', { name: 'Donut Chart' }));
    expect(screen.getByRole('combobox', { name: 'Chart Type' })).toHaveTextContent('Donut Chart');
    expect(fetch).not.toHaveBeenCalled();
  });
  it('shows Count as the only observed aggregate option', () => {
    render(<SalesforceIndividuals variant="chart-aggregate-picker" />);
    expect(
      within(screen.getByRole('listbox', { name: 'Aggregate Type' })).getAllByRole('option')
    ).toHaveLength(1);
    expect(screen.getByRole('option', { name: 'Count' })).toHaveAttribute('aria-selected', 'true');
  });
  it('provides a scrollable grouping and filter field inventory', () => {
    render(<SalesforceIndividuals variant="chart-grouping-picker" />);
    expect(
      within(screen.getByRole('listbox', { name: 'Grouping Field' })).getAllByRole('option')
    ).toHaveLength(22);
    cleanup();
    render(<SalesforceIndividuals variant="filter-field-picker" />);
    expect(
      within(screen.getByRole('listbox', { name: 'Field' })).getAllByRole('option')
    ).toHaveLength(24);
  });
  it('lists nine filter operators independently', () => {
    render(<SalesforceIndividuals variant="filter-operator-picker" />);
    expect(
      within(screen.getByRole('listbox', { name: 'Operator' })).getAllByRole('option')
    ).toHaveLength(9);
  });
  it('transfers one field then reorders it locally', async () => {
    const user = userEvent.setup();
    render(<SalesforceIndividuals variant="visible-field-transfer" />);
    await user.click(screen.getByRole('button', { name: 'Move to Visible Fields' }));
    expect(
      within(screen.getByRole('listbox', { name: 'Visible Fields' })).getByRole('option', {
        name: 'Account Name',
      })
    ).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Move selected field up' }));
    expect(
      within(screen.getByRole('listbox', { name: 'Visible Fields' }))
        .getAllByRole('option')
        .at(-2)
    ).toHaveTextContent('Account Name');
  });
  it('reorders one Service navigation row locally', async () => {
    const user = userEvent.setup();
    render(<SalesforceIndividuals variant="navigation-reorder-item" />);
    await user.click(screen.getByRole('button', { name: 'Move Cases down' }));
    expect(
      within(screen.getByRole('listbox', { name: 'Service navigation order' })).getAllByRole(
        'option'
      )[0]
    ).toHaveTextContent('Contacts');
  });
  it('keeps analytics row and bulk selection separate', async () => {
    const user = userEvent.setup();
    render(<SalesforceIndividuals variant="analytics-report-row" />);
    await user.click(screen.getByRole('checkbox', { name: 'Select Case Library · Example' }));
    expect(screen.getByRole('checkbox', { name: 'Select Case Library · Example' })).toBeChecked();
    cleanup();
    render(<SalesforceIndividuals variant="analytics-bulk-selector" />);
    await user.click(screen.getByRole('checkbox', { name: 'Case Library · Example' }));
    expect(screen.getByText('1 Items Selected (Limit 50)')).toBeVisible();
  });
  it('uses separate show and pin controls with a guarded save', async () => {
    const user = userEvent.setup();
    const fetch = vi.spyOn(globalThis, 'fetch');
    render(<SalesforceIndividuals variant="collection-display-toggle" />);
    expect(screen.getByRole('checkbox', { name: 'Show Service' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Pin Service' })).not.toBeChecked();
    await user.click(screen.getByRole('checkbox', { name: 'Pin Service' }));
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByRole('status')).toHaveTextContent('No provider request was sent');
    expect(fetch).not.toHaveBeenCalled();
  });
  it('keeps all thirteen color swatches in the isolated palette', async () => {
    const user = userEvent.setup();
    render(<SalesforceIndividuals variant="collection-color-swatch" />);
    expect(
      within(screen.getByRole('group', { name: 'Collection colors' })).getAllByRole('button')
    ).toHaveLength(13);
    await user.click(screen.getByRole('button', { name: '#ff538a' }));
    expect(screen.getByText('Selected local swatch: #ff538a')).toBeVisible();
  });
  it('guards report copying without touching clipboard or network', async () => {
    const user = userEvent.setup();
    const fetch = vi.spyOn(globalThis, 'fetch');
    const clipboard = vi.spyOn(navigator.clipboard, 'writeText');
    render(<SalesforceIndividuals variant="report-copy-link" />);
    expect(screen.getByRole('textbox', { name: 'Report URL' })).toHaveValue(
      'https://example.invalid/reports/fictional-case-library'
    );
    await user.click(screen.getByRole('button', { name: 'Copy Link' }));
    expect(fetch).not.toHaveBeenCalled();
    expect(clipboard).not.toHaveBeenCalled();
    expect(screen.getByRole('status')).toHaveTextContent('Copy Link is guarded');
  });
  it('preserves disabled empty selection and task defaults', async () => {
    const user = userEvent.setup();
    render(<SalesforceIndividuals variant="case-select-all" />);
    expect(screen.getByRole('checkbox', { name: 'Select All' })).toBeDisabled();
    cleanup();
    render(<SalesforceIndividuals variant="task-state-controls" />);
    expect(screen.getByRole('button', { name: /Not Started/ })).toBeVisible();
    expect(screen.getByRole('button', { name: /Normal/ })).toBeVisible();
    await user.click(screen.getByRole('button', { name: /Not Started/ }));
    expect(screen.getByRole('status')).toHaveTextContent('NOT OBSERVED');
  });
  it('disables the isolated control fixture', () => {
    render(<SalesforceIndividuals variant="report-copy-link" disabled />);
    expect(screen.getByRole('button', { name: 'Copy Link' })).toBeDisabled();
  });
});

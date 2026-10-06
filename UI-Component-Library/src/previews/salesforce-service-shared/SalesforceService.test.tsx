import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SalesforceService } from './SalesforceService';
import { salesforcePreviews } from './registry';
import { salesforceComponents } from './catalogue';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
describe('Salesforce fictional boundary and interaction contracts', () => {
  it.each(salesforceComponents)('$id has a usable labelled reconstruction', ({ id, variant }) => {
    render(<SalesforceService variant={variant} />);
    expect(
      screen.getByRole('region', { name: 'Salesforce fictional reconstruction' })
    ).toBeVisible();
    expect(screen.getByText(/RECONSTRUCTION · Fictional local data/)).toBeVisible();
    const entry = salesforcePreviews[id];
    expect(entry.type).toBe('reconstructed');
    if (entry.type === 'reconstructed') expect(entry.propsSchema.length).toBeGreaterThan(0);
  });
  it('guards valid and invalid saves and never calls the provider', async () => {
    const user = userEvent.setup();
    const fetch = vi.spyOn(globalThis, 'fetch');
    render(<SalesforceService variant="case-form" initialState="missing" />);
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByRole('status')).toHaveTextContent('Local fixture validation');
    await user.selectOptions(screen.getByRole('combobox', { name: 'Status' }), 'New');
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByRole('status')).toHaveTextContent('Save is guarded');
    expect(fetch).not.toHaveBeenCalled();
    expect(screen.getByRole('dialog', { name: 'New Case' })).toBeVisible();
  });
  it('supports Escape cancellation with trigger focus restored', async () => {
    const user = userEvent.setup();
    render(<SalesforceService variant="cases" />);
    const trigger = screen.getByRole('button', { name: 'New' });
    await user.click(trigger);
    expect(screen.getByRole('dialog', { name: 'New Case' })).toBeVisible();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
  it('filters fictional saved views, selects locally and closes on Escape', async () => {
    const user = userEvent.setup();
    render(<SalesforceService variant="views" />);
    await user.type(screen.getByRole('textbox', { name: 'Search lists' }), 'unassigned');
    const section = screen.getByRole('region', { name: 'Case views' });
    expect(within(section).getAllByRole('button')).toHaveLength(1);
    await user.click(within(section).getByRole('button', { name: 'Unassigned' }));
    expect(screen.queryByRole('region', { name: 'Case views' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Unassigned' })).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Select a List View: Cases' }));
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('region', { name: 'Case views' })).not.toBeInTheDocument();
  });
  it('transfers channels only in local fixture state', async () => {
    const user = userEvent.setup();
    render(<SalesforceService variant="channels" />);
    await user.selectOptions(screen.getByRole('listbox', { name: 'Available' }), 'Knowledge');
    await user.click(screen.getByRole('button', { name: 'Move to Selected' }));
    expect(
      within(screen.getByRole('listbox', { name: 'Selected' })).getByRole('option', {
        name: 'Knowledge',
      })
    ).toBeInTheDocument();
    await user.selectOptions(screen.getByRole('listbox', { name: 'Selected' }), 'Knowledge');
    await user.click(screen.getByRole('button', { name: 'Move to Available' }));
    expect(
      within(screen.getByRole('listbox', { name: 'Available' })).getByRole('option', {
        name: 'Knowledge',
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Fictional channel selection');
  });
  it('does not turn list management or display selection into provider success', async () => {
    const user = userEvent.setup();
    render(<SalesforceService variant="controls" />);
    await user.click(screen.getByRole('button', { name: 'Delete' }));
    expect(screen.getByRole('status')).toHaveTextContent('Delete is guarded');
    await user.keyboard('{Escape}');
    await user.click(screen.getByRole('button', { name: 'Display' }));
    await user.click(screen.getByRole('button', { name: 'Kanban' }));
    expect(screen.getByRole('status')).toHaveTextContent('Kanban layout is guarded');
    expect(screen.getByRole('button', { name: '✓ Table' })).toHaveAttribute('aria-pressed', 'true');
  });
  it('guards article save and retains explicit required-field boundary', async () => {
    const user = userEvent.setup();
    render(<SalesforceService variant="knowledge-form" />);
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByRole('status')).toHaveTextContent('Provider validation was not tested');
    await user.type(screen.getByRole('textbox', { name: '*Title' }), 'Fictional article');
    await user.type(screen.getByRole('textbox', { name: '*URL Name' }), 'fictional-article');
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
  });
});

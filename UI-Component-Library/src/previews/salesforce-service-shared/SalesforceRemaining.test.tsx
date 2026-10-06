import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SalesforceRemaining } from './SalesforceRemaining';
import { salesforceComponents, salesforceInitialComponents } from './catalogue';
import { salesforceRemainingComponents } from './remainingCatalogue';
import { salesforcePreviews } from './registry';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('Remaining Salesforce local research interactions', () => {
  it('preserves the first batch and registers every new component once', () => {
    expect(salesforceInitialComponents).toHaveLength(28);
    expect(salesforceRemainingComponents).toHaveLength(47);
    expect(new Set(salesforceComponents.map((x) => x.id)).size).toBe(salesforceComponents.length);
    for (const entry of salesforceComponents) {
      const registered = salesforcePreviews[entry.id];
      expect(registered.type).toBe('reconstructed');
      if (registered.type === 'reconstructed') {
        expect(registered.runtimeVerified).toBe(false);
        expect(registered.fixtures[0].props.variant).toBe(entry.variant);
      }
    }
  });

  it('filters analytics assets locally, switches type and preserves selected rows', async () => {
    const user = userEvent.setup();
    render(<SalesforceRemaining variant="analytics-browser" />);
    await user.click(screen.getByRole('checkbox', { name: 'Select Open Cases · Example' }));
    expect(screen.getByText(/1 items selected/)).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Dashboards' }));
    const table = screen.getByRole('table', { name: 'Analytics assets' });
    expect(within(table).getByText('Service Metrics · Example')).toBeVisible();
    expect(within(table).queryByText('Open Cases · Example')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'All Items' }));
    expect(screen.getByRole('checkbox', { name: 'Select Open Cases · Example' })).toBeChecked();
    await user.type(
      screen.getByRole('textbox', { name: 'Search reports, dashboards, and more' }),
      'Article'
    );
    expect(within(table).getAllByRole('row')).toHaveLength(2);
  });

  it('opens and cancels report chooser with keyboard focus restored', async () => {
    const user = userEvent.setup();
    render(<SalesforceRemaining variant="analytics-create-menu" />);
    const trigger = screen.getByRole('button', { name: 'Choose report type' });
    await user.click(trigger);
    const dialog = screen.getByRole('dialog', { name: 'Choose Report Type' });
    await user.type(within(dialog).getByRole('textbox', { name: 'Search Report Types' }), 'emails');
    expect(within(dialog).getByRole('button', { name: 'Cases with Emails' })).toBeVisible();
    expect(within(dialog).queryByRole('button', { name: 'Case History' })).not.toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('keeps modal keyboard focus inside its controls', async () => {
    const user = userEvent.setup();
    render(<SalesforceRemaining variant="report-type-chooser" />);
    const dialog = screen.getByRole('dialog', { name: 'Choose Report Type' });
    const close = within(dialog).getByRole('button', { name: 'Close Choose Report Type' });
    expect(close).toHaveFocus();
    await user.tab({ shift: true });
    expect(within(dialog).getByRole('button', { name: 'Continue' })).toHaveFocus();
    await user.tab();
    expect(close).toHaveFocus();
  });

  it('filters fictional connectors and guards any setup action', async () => {
    const user = userEvent.setup();
    const fetch = vi.spyOn(globalThis, 'fetch');
    render(<SalesforceRemaining variant="connector-catalogue" />);
    const dialog = screen.getByRole('dialog', { name: 'Browse Connectors' });
    await user.type(within(dialog).getByRole('textbox', { name: 'Search Connectors' }), 'cedar');
    expect(within(dialog).getByText('1 fictional connectors')).toBeVisible();
    await user.click(within(dialog).getByRole('button', { name: /Cedar Support/ }));
    expect(screen.getByRole('status')).toHaveTextContent('No provider request was sent');
    expect(fetch).not.toHaveBeenCalled();
    expect(within(dialog).getByRole('note')).toHaveTextContent(
      'This action does not contact Salesforce'
    );
    await user.click(within(dialog).getByRole('button', { name: 'Close' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('filters flow categories without opening or executing a builder', async () => {
    const user = userEvent.setup();
    render(<SalesforceRemaining variant="automation-type-chooser" />);
    const dialog = screen.getByRole('dialog', { name: 'New Automation' });
    await user.click(within(dialog).getByRole('button', { name: 'Triggered' }));
    expect(within(dialog).getByRole('heading', { name: 'Triggered Automations' })).toBeVisible();
    await user.click(within(dialog).getByRole('button', { name: /Platform Event-Triggered Flow/ }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'Choose Platform Event-Triggered Flow is guarded'
    );
    expect(dialog).toBeVisible();
  });

  it('switches action Usage and Parameters views and filters the action inventory', async () => {
    const user = userEvent.setup();
    const first = render(<SalesforceRemaining variant="action-usage-detail" />);
    await user.click(screen.getByRole('button', { name: 'Parameters' }));
    expect(screen.getByRole('table', { name: 'Action inputs' })).toHaveTextContent('Connection');
    expect(screen.getByRole('table', { name: 'Action outputs' })).toBeVisible();
    first.unmount();
    render(<SalesforceRemaining variant="action-hub-inventory" />);
    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Action Type' }),
      'External Connector'
    );
    expect(screen.getByRole('table', { name: 'Action catalogue' })).toHaveTextContent(
      'Lookup Record'
    );
    expect(screen.getByRole('table', { name: 'Action catalogue' })).not.toHaveTextContent(
      'Route Case'
    );
  });

  it.each(['new-contact-form', 'new-account-form'])(
    'edits %s only in memory and cancels cleanly',
    async (variant) => {
      const user = userEvent.setup();
      const fetch = vi.spyOn(globalThis, 'fetch');
      render(<SalesforceRemaining variant={variant} />);
      await user.type(screen.getByRole('textbox', { name: 'Account Name' }), 'Example Ltd');
      await user.click(screen.getByRole('button', { name: 'Save' }));
      expect(screen.getByRole('status')).toHaveTextContent('Save is guarded');
      expect(fetch).not.toHaveBeenCalled();
      await user.click(screen.getByRole('button', { name: 'Cancel' }));
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    }
  );

  it('navigates December into January and selects a local calendar day', async () => {
    const user = userEvent.setup();
    render(<SalesforceRemaining variant="task-date-picker" />);
    await user.click(screen.getByRole('button', { name: 'Next month' }));
    await user.click(screen.getByRole('button', { name: 'Next month' }));
    expect(screen.getByRole('heading', { name: 'December 2026' })).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Next month' }));
    expect(screen.getByRole('heading', { name: 'January 2027' })).toBeVisible();
    const day = screen.getByRole('button', { name: 'January 5, 2027' });
    await user.click(day);
    expect(day).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('Date selected in the local fixture only.')).toBeVisible();
  });

  it('keeps task filter cancellation from closing the underlying task utility', async () => {
    const user = userEvent.setup();
    render(<SalesforceRemaining variant="todo-filter-dialog" />);
    await user.click(screen.getByRole('checkbox', { name: 'Email' }));
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'To Do List' })).toBeVisible();
  });

  it('guards help prompts and typed messages without generating a fake response', async () => {
    const user = userEvent.setup();
    const fetch = vi.spyOn(globalThis, 'fetch');
    render(<SalesforceRemaining variant="help-agent-panel" />);
    expect(screen.getByRole('button', { name: 'Send message' })).toBeDisabled();
    await user.type(screen.getByRole('textbox', { name: 'Ask Agentforce' }), 'Fictional question');
    await user.click(screen.getByRole('button', { name: 'Send message' }));
    expect(screen.getByRole('status')).toHaveTextContent('Send message is guarded');
    expect(fetch).not.toHaveBeenCalled();
    expect(screen.getByRole('textbox', { name: 'Ask Agentforce' })).toHaveValue(
      'Fictional question'
    );
  });

  it.each([
    ['agentforce-enable-panel', 'Agree and Enable'],
    ['analytics-asset-actions', 'Delete'],
    ['dashboard-actions', 'Download'],
    ['new-task-composer', 'Save'],
  ])('guards consequential control %s / %s', async (variant, action) => {
    const user = userEvent.setup();
    const fetch = vi.spyOn(globalThis, 'fetch');
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    const xhr = vi.spyOn(XMLHttpRequest.prototype, 'open');
    render(<SalesforceRemaining variant={variant} />);
    await user.click(screen.getByRole('button', { name: action }));
    expect(screen.getByRole('status')).toHaveTextContent('Provider outcome NOT OBSERVED');
    expect(fetch).not.toHaveBeenCalled();
    expect(open).not.toHaveBeenCalled();
    expect(xhr).not.toHaveBeenCalled();
  });
});

import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { FreshserviceMore } from './FreshserviceMore';

afterEach(() => vi.unstubAllGlobals());

describe('Freshservice catalogue and administrative boundaries', () => {
  it('switches between four captured knowledge views without creating content', async () => {
    const user = userEvent.setup();
    render(<FreshserviceMore variant="knowledge-workspace" />);
    expect(screen.getByRole('heading', { name: 'Create your first article' })).toBeVisible();
    for (const [view, empty] of [['Article Templates', 'No templates created yet'], ['Approvals', 'No approvals found.'], ['Articles to review', 'No articles to review']]) {
      await user.click(screen.getByRole('button', { name: view }));
      expect(screen.getByRole('heading', { name: empty })).toBeVisible();
    }
    await user.click(screen.getByRole('button', { name: 'New Article' }));
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
  });
  it('distinguishes reports and folders and labels fictional dates', async () => {
    const user = userEvent.setup();
    render(<FreshserviceMore variant="analytics-catalogue" />);
    expect(within(screen.getByRole('table')).getAllByRole('row')).toHaveLength(11);
    expect(screen.getByText(/Dates below are fictional/)).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Folders' }));
    expect(within(screen.getByRole('table')).getAllByRole('row')).toHaveLength(5);
    expect(screen.getByRole('button', { name: 'Enterprise Service Management' })).toBeVisible();
  });
  it('sorts local report names and restores focus when the menu closes', async () => {
    const user = userEvent.setup();
    render(<FreshserviceMore variant="analytics-catalogue" />);
    const trigger = screen.getByRole('button', { name: 'Sort by: Last modified date' });
    await user.click(trigger);
    await user.click(screen.getByRole('radio', { name: 'Name' }));
    await user.click(screen.getByRole('radio', { name: 'Ascending' }));
    expect(screen.getByRole('radio', { name: 'Name' })).toBeChecked();
    expect(within(screen.getByRole('table')).getAllByRole('row')[1]).toHaveTextContent('AI Agent Performance Report');
    await user.keyboard('{Escape}');
    expect(trigger).toHaveFocus();
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
  it('filters and clears the local settings subset', async () => {
    const user = userEvent.setup();
    render(<FreshserviceMore variant="admin-settings-search" />);
    await user.type(screen.getByRole('textbox', { name: 'Search admin settings' }), 'workflow');
    expect(screen.getByRole('button', { name: /Workflow Automator/ })).toBeVisible();
    expect(screen.queryByRole('button', { name: /^Agents / })).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Workflow Automator/ }));
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
    await user.click(screen.getByRole('button', { name: 'Clear' }));
    expect(screen.getByRole('textbox', { name: 'Search admin settings' })).toHaveValue('');
    expect(screen.getByRole('button', { name: /^Agents / })).toBeVisible();
  });
  it('never enables provider workflow switches or submits create actions', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    render(<FreshserviceMore variant="workflow-inventory" />);
    await user.click(screen.getByRole('button', { name: 'Create subflow' }));
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
    await user.click(screen.getByRole('button', { name: 'Event Based Workflows' }));
    const control = screen.getByRole('switch', { name: 'Activate Prioritize VIP tickets' });
    await user.click(control);
    expect(control).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('status')).toHaveTextContent('local demonstration only');
    expect(fetch).not.toHaveBeenCalled();
  });
  it('does not treat sample dismissal as a settings change', async () => {
    const user = userEvent.setup();
    render(<FreshserviceMore variant="sample-dashboard" />);
    await user.click(screen.getByRole('button', { name: 'Dismiss' }));
    expect(screen.getByRole('img', { name: /Fictional dashboard illustration/ })).toBeVisible();
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
  });
});

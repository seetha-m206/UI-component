import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Freshservice } from './Freshservice';
import { freshservicePreviews } from './registry';

afterEach(() => vi.unstubAllGlobals());

describe('Freshservice safe local reconstruction', () => {
  it('keeps independently expanded onboarding sections and marks unseen contents', async () => {
    const user = userEvent.setup();
    render(<Freshservice variant="feature-accordion" />);
    await user.click(screen.getByRole('button', { name: 'Service Management' }));
    expect(screen.getByRole('region', { name: 'Ticketing' })).toBeVisible();
    expect(screen.getByRole('region', { name: 'Service Management' })).toHaveTextContent(
      'Create a workflow'
    );
    await user.click(screen.getByRole('button', { name: 'Workspaces' }));
    expect(screen.getByRole('region', { name: 'Workspaces' })).toHaveTextContent('not inspected');
  });
  it('supports keyboard launcher open, guarded actions and Escape focus restoration', async () => {
    const user = userEvent.setup();
    render(<Freshservice variant="create-menu" />);
    const trigger = screen.getByRole('button', { name: 'Create' });
    trigger.focus();
    await user.keyboard('{Enter}');
    expect(
      within(screen.getByRole('group', { name: 'Create options' })).getAllByRole('button')
    ).toHaveLength(14);
    await user.click(screen.getByRole('button', { name: 'Agents: Invite your team' }));
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
    await user.keyboard('{Escape}');
    expect(trigger).toHaveFocus();
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
  it('reveals and hides Cc without a provider lookup', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    render(<Freshservice variant="cc-disclosure" />);
    expect(screen.queryByRole('textbox', { name: 'Cc' })).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Add Cc' }));
    await user.type(screen.getByRole('textbox', { name: 'Cc' }), 'test@example.invalid');
    await user.click(screen.getByRole('button', { name: 'Hide Cc' }));
    expect(screen.queryByRole('textbox', { name: 'Cc' })).not.toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });
  it('guards sample generation and returns from the local ticket form', async () => {
    const user = userEvent.setup();
    render(<Freshservice variant="ticket-empty-state" />);
    await user.click(screen.getByRole('button', { name: /Get started with sample data/ }));
    expect(screen.getByRole('heading', { name: 'Create your first ticket' })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('local demonstration only');
    await user.click(screen.getByRole('button', { name: /Create tickets manually/ }));
    expect(screen.getByRole('heading', { name: 'New Incident' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.getByRole('heading', { name: 'Create your first ticket' })).toBeInTheDocument();
  });
  it('prevents both click and keyboard form submission, even with plausible input', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const user = userEvent.setup();
    const { container } = render(<Freshservice variant="new-incident-form" />);
    await user.type(screen.getByRole('textbox', { name: 'Requester' }), 'Casey Example');
    await user.type(screen.getByRole('textbox', { name: 'Subject' }), 'Fictional access request');
    await user.type(screen.getByRole('textbox', { name: 'Description' }), 'Fixture only');
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'Submit incident: local demonstration only'
    );
    await user.click(screen.getByRole('button', { name: 'Dismiss preview notice' }));
    const form = container.querySelector('form')!;
    const event = new Event('submit', { bubbles: true, cancelable: true });
    form.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(fetch).not.toHaveBeenCalled();
    expect(container.querySelector('[action]')).toBeNull();
  });
  it('makes the empty template boundary explicit and guards template creation', async () => {
    const user = userEvent.setup();
    render(<Freshservice variant="template-picker" initialExpanded />);
    expect(screen.getByText('No template has been created')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Create new template' }));
    expect(screen.getByRole('status')).toHaveTextContent('No request was sent');
  });
  it('changes local classifications while keeping source defaults', async () => {
    const user = userEvent.setup();
    render(<Freshservice variant="status-priority-fields" />);
    expect(screen.getByRole('combobox', { name: 'Status' })).toHaveValue('Open');
    await user.selectOptions(screen.getByRole('combobox', { name: 'Priority' }), 'Urgent');
    expect(screen.getByRole('combobox', { name: 'Priority' })).toHaveValue('Urgent');
    expect(screen.getByRole('combobox', { name: 'Status' })).toHaveValue('Open');
  });
  it('guards attachments and does not expose a file upload input', async () => {
    const user = userEvent.setup();
    const { container } = render(<Freshservice variant="attachment-zone" />);
    await user.click(screen.getByRole('button', { name: /Attach files/ }));
    expect(screen.getByRole('status')).toHaveTextContent('Attach files: local demonstration only');
    expect(container.querySelector('input[type=file]')).toBeNull();
  });
  it.each(Object.entries(freshservicePreviews))(
    '%s renders with an evidence boundary',
    (_id, entry) => {
      expect(entry.type).toBe('reconstructed');
      if (entry.type !== 'reconstructed') return;
      const Component = entry.Component;
      render(<Component {...entry.fixtures[0].props} />);
      expect(screen.getByText('FRESHSERVICE REFERENCE')).toBeInTheDocument();
      expect(screen.getByRole('status')).toHaveTextContent('observed Freshservice screens');
      expect(entry.runtimeVerified).toBe(false);
    }
  );
});

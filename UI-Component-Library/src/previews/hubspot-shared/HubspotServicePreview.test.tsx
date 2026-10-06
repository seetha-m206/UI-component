import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { HubspotServicePreview } from './HubspotServicePreview';

describe('HubspotServicePreview', () => {
  it('switches the fictional Unassigned view between board and table', async () => {
    const user = userEvent.setup();
    render(<HubspotServicePreview variant="unassigned-view" initialState="board" />);
    expect(screen.getByRole('radio', { name: 'Board view' })).toHaveAttribute('aria-checked', 'true');
    await user.click(screen.getByRole('radio', { name: 'Table view' }));
    expect(screen.getByRole('radio', { name: 'Table view' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByLabelText('Ticket table headings')).toBeInTheDocument();
  });

  it('exposes the observed Priority values without applying them', () => {
    render(<HubspotServicePreview variant="ticket-filters" initialState="priority" />);
    expect(screen.getByText(/Low — A low priority ticket/)).toBeInTheDocument();
    expect(screen.getByText(/Urgent — An urgent priority ticket/)).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')).toHaveLength(4);
  });

  it('guards ticket creation instead of producing a provider success state', async () => {
    const user = userEvent.setup();
    render(<HubspotServicePreview variant="ticket-object-add" initialState="add" />);
    await user.click(screen.getByRole('button', { name: 'Create new' }));
    expect(screen.getByRole('status')).toHaveTextContent('Ticket creation is disabled');
  });

  it('guards every item in the fictional global Create menu', async () => {
    const user = userEvent.setup();
    render(<HubspotServicePreview variant="global-create" initialState="open" />);
    await user.click(screen.getByRole('button', { name: 'Contact' }));
    expect(screen.getByRole('status')).toHaveTextContent('Contact creation is disabled');
    await user.click(screen.getByRole('button', { name: /Create new/ }));
    expect(screen.queryByRole('button', { name: 'Contact' })).not.toBeInTheDocument();
  });

  it('keeps support and marketplace actions inside local guard states', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<HubspotServicePreview variant="contextual-help" initialState="open" />);
    await user.click(screen.getByRole('button', { name: 'Start a chat' }));
    expect(screen.getByRole('status')).toHaveTextContent('No support chat was started');
    rerender(<HubspotServicePreview variant="marketplace-menu" initialState="open" />);
    await user.click(screen.getByRole('button', { name: 'Connected Apps' }));
    expect(screen.getByRole('status')).toHaveTextContent('no provider navigation');
  });

  it('enables a fictional Breeze send control but never sends the local text', async () => {
    const user = userEvent.setup();
    render(<HubspotServicePreview variant="breeze-assistant" initialState="open" />);
    const send = screen.getByRole('button', { name: 'Send' });
    expect(send).toBeDisabled();
    await user.type(screen.getByPlaceholderText('Ask about this ticket'), 'Summarize this fictional ticket');
    expect(send).toBeEnabled();
    await user.click(send);
    expect(screen.getByRole('status')).toHaveTextContent('No assistant message was sent');
  });

  it('guards calling and preserves the ticket empty state across header collapse', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<HubspotServicePreview variant="calling-gate" initialState="open" />);
    await user.click(screen.getByRole('button', { name: 'Learn how to unlock calling' }));
    expect(screen.getByRole('status')).toHaveTextContent('upgrade destination was not opened');
    rerender(<HubspotServicePreview variant="ticket-collapsible-header" initialState="expanded" />);
    expect(screen.getByText('No Tickets match the current filters.')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Collapse ticket header' }));
    expect(screen.getByRole('button', { name: /Unassigned tickets/ })).toBeInTheDocument();
    expect(screen.getByText('No Tickets match the current filters.')).toBeInTheDocument();
  });

  it('filters compact pinned views locally and guards view switching', async () => {
    const user = userEvent.setup();
    render(<HubspotServicePreview variant="ticket-compact-view-selector" initialState="open" />);
    await user.type(screen.getByRole('textbox', { name: 'Search pinned views' }), 'open');
    expect(screen.getByRole('button', { name: 'My open tickets' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'All tickets' })).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'My open tickets' }));
    expect(screen.getByRole('status')).toHaveTextContent('View switching was not executed');
  });

  it('keeps navigation management instructional controls local', async () => {
    const user = userEvent.setup();
    render(<HubspotServicePreview variant="navigation-manager" initialState="open" />);
    await user.click(screen.getByRole('button', { name: 'Switch navigation' }));
    expect(screen.getByRole('status')).toHaveTextContent('Navigation switching was not started');
    await user.click(screen.getByRole('button', { name: 'Close navigation manager' }));
    expect(screen.getByRole('button', { name: 'Manage navigation' })).toBeInTheDocument();
  });

  it('preserves the observed untouched status-details boundary', async () => {
    render(<HubspotServicePreview variant="ticket-status-details" initialState="open" />);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    expect(screen.getByRole('textbox', { name: 'Status name' })).toHaveValue('New');
    expect(screen.getByRole('radio', { name: '#016DE1' })).toBeChecked();
    expect(screen.getAllByRole('radio')).toHaveLength(20);
  });

  it('keeps default ticket-view changes local with Save disabled', async () => {
    const user = userEvent.setup();
    render(<HubspotServicePreview variant="ticket-views-manager" initialState="defaults" />);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'All tickets' }));
    expect(screen.getByRole('status')).toHaveTextContent('Pinned-view changes are disabled');
  });

  it('renders Ticket object setup without allowing configuration edits', async () => {
    const user = userEvent.setup();
    render(<HubspotServicePreview variant="ticket-object-setup" />);
    expect(screen.getByRole('checkbox')).toBeChecked();
    await user.click(screen.getByRole('button', { name: /Properties/ }));
    expect(screen.getByRole('status')).toHaveTextContent('Properties editing was not opened');
  });

  it('renders all four observed pipeline stages and guards additions', async () => {
    const user = userEvent.setup();
    render(<HubspotServicePreview variant="ticket-pipeline-settings" initialState="configure" />);
    expect(screen.getByRole('table', { name: 'Pipeline stages' })).toHaveTextContent('Waiting on contact');
    expect(screen.getByRole('table', { name: 'Pipeline stages' })).toHaveTextContent('#EBEBEB');
    await user.click(screen.getByRole('button', { name: 'Add status' }));
    expect(screen.getByRole('status')).toHaveTextContent('Adding a status is disabled');
  });

  it('preserves the record-customization inventory boundary', async () => {
    const user = userEvent.setup();
    render(<HubspotServicePreview variant="ticket-record-customization" />);
    expect(screen.getByRole('table', { name: 'Record Customization views' })).toHaveTextContent('All unassigned teams and users');
    await user.click(screen.getByRole('button', { name: 'Default view' }));
    expect(screen.getByRole('status')).toHaveTextContent('layout editor was not opened');
  });

  it('distinguishes disabled and available preview-card editors', async () => {
    const user = userEvent.setup();
    render(<HubspotServicePreview variant="ticket-preview-customization" initialState="cards" />);
    expect(screen.getByRole('button', { name: /Edit Ticket associations card/ })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: /Edit Ticket property list/ }));
    expect(screen.getByRole('status')).toHaveTextContent('property-list editor was not opened');
  });

  it('keeps index defaults visible while preventing changes', async () => {
    const user = userEvent.setup();
    render(<HubspotServicePreview variant="ticket-index-customization" initialState="defaults" />);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'Unassigned tickets' }));
    expect(screen.getByRole('status')).toHaveTextContent('Default view changes are disabled');
  });

  it('reconstructs the observed pipeline action and stage type menus', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<HubspotServicePreview variant="ticket-pipeline-actions" initialState="open" />);
    expect(screen.getByRole('button', { name: 'Delete' })).toBeDisabled();
    rerender(<HubspotServicePreview variant="ticket-stage-type-menu" initialState="open" />);
    expect(screen.getByRole('option', { name: 'Open' })).toHaveAttribute('aria-selected', 'true');
    await user.click(screen.getByRole('option', { name: 'Closed' }));
    expect(screen.getByRole('status')).toHaveTextContent('Changing the stage type is disabled');
  });

  it('keeps customization view actions locked and layout actions local', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<HubspotServicePreview variant="ticket-customization-view-actions" initialState="record" />);
    expect(screen.getByRole('button', { name: /Create team view/ })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Clone view' })).toBeDisabled();
    rerender(<HubspotServicePreview variant="ticket-record-layout-editor" initialState="actions" />);
    await user.click(screen.getByRole('button', { name: 'Set conditional logic' }));
    expect(screen.getByRole('status')).toHaveTextContent('Set conditional logic is disabled');
  });
});

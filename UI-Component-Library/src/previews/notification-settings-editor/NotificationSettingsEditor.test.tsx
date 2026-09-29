import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NotificationSettingsEditor } from './NotificationSettingsEditor';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('NotificationSettingsEditor', () => {
  it('renders the true empty state with a single Configure button', () => {
    render(<NotificationSettingsEditor {...getFixture('empty')} />);
    expect(
      screen.getByText('Configure emails to be sent when a response is added')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Configure' })).toBeInTheDocument();
    expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
  });

  it('clicking Configure opens the template editor modal', async () => {
    const user = userEvent.setup();
    render(<NotificationSettingsEditor {...getFixture('empty')} />);
    await user.click(screen.getByRole('button', { name: 'Configure' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByLabelText('From Name')).toBeInTheDocument();
  });

  it('a populated tab shows two trigger tabs and independent template cards with toggles', () => {
    render(<NotificationSettingsEditor {...getFixture('new-record-populated')} />);
    expect(screen.getByRole('tab', { name: 'New Record' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('New response received')).toBeInTheDocument();
    expect(screen.getByText('Archive copy')).toBeInTheDocument();
    const switches = screen.getAllByRole('switch');
    expect(switches).toHaveLength(2);
    expect(switches[0]).toHaveAttribute('aria-checked', 'true');
    expect(switches[1]).toHaveAttribute('aria-checked', 'false');
  });

  it('toggling a template card switch flips only that template\'s enabled state', async () => {
    const user = userEvent.setup();
    render(<NotificationSettingsEditor {...getFixture('new-record-populated')} />);
    const enabledSwitch = screen.getByRole('switch', { name: /Disable template "New response received"/ });
    await user.click(enabledSwitch);
    expect(enabledSwitch).toHaveAttribute('aria-checked', 'false');
  });

  it('switching to a tab with zero templates shows the in-tab empty message and a "+ New Template" button', () => {
    render(<NotificationSettingsEditor {...getFixture('updated-record-empty-tab')} />);
    expect(screen.getByRole('tab', { name: 'Updated Record' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('No templates configured for Updated Record.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+ New Template' })).toBeInTheDocument();
  });

  it('a pre-seeded invalid recipient chip shows the exact "Invalid email address specified" banner', () => {
    render(<NotificationSettingsEditor {...getFixture('editor-open-invalid-chip')} />);
    expect(screen.getByText('not-an-email')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid email address specified');
  });

  it('typing a non-email recipient and pressing Enter adds an invalid chip and shows the banner, without blocking the rest of the form', async () => {
    const user = userEvent.setup();
    render(<NotificationSettingsEditor {...getFixture('empty')} />);
    await user.click(screen.getByRole('button', { name: 'Configure' }));
    const chipInput = screen.getByPlaceholderText('Type or paste email addresses…');
    await user.type(chipInput, 'not-valid{Enter}');
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid email address specified');
    // The rest of the form (Subject) stays editable.
    const subject = screen.getByLabelText('Subject');
    await user.type(subject, 'Still editable');
    expect(subject).toHaveValue('Still editable');
  });

  it('typing a comma/space-separated list of emails auto-splits into individual chips', async () => {
    const user = userEvent.setup();
    render(<NotificationSettingsEditor {...getFixture('empty')} />);
    await user.click(screen.getByRole('button', { name: 'Configure' }));
    const chipInput = screen.getByPlaceholderText('Type or paste email addresses…');
    await user.type(chipInput, 'a@example.com,b@example.com,');
    expect(screen.getByText('a@example.com')).toBeInTheDocument();
    expect(screen.getByText('b@example.com')).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('the Field Labels popup lists documented merge-field tokens under Form Fields and System Fields', () => {
    render(<NotificationSettingsEditor {...getFixture('editor-open-field-labels')} />);
    expect(screen.getByRole('dialog', { name: 'Field Labels' })).toBeInTheDocument();
    expect(screen.getByText('${zf:Rating}')).toBeInTheDocument();
    expect(screen.getByText('${zf:MultiLine}')).toBeInTheDocument();
    expect(screen.getByText('System Fields')).toBeInTheDocument();
    expect(screen.getByText('${zf:REFERRER_NAME}')).toBeInTheDocument();
    expect(screen.getByText('${zf:ADDED_EMAILID}')).toBeInTheDocument();
  });

  it('clicking a Field Labels row is a confirmed no-op: Subject is unchanged', async () => {
    const user = userEvent.setup();
    render(<NotificationSettingsEditor {...getFixture('editor-open-field-labels')} />);
    const subject = screen.getByLabelText('Subject');
    const before = (subject as HTMLInputElement).value;
    const row = screen.getByText('${zf:Rating}').closest('button');
    expect(row).not.toBeNull();
    await user.click(row!);
    expect((subject as HTMLInputElement).value).toBe(before);
  });

  it('Cancel closes the editor without creating a template', async () => {
    const user = userEvent.setup();
    render(<NotificationSettingsEditor {...getFixture('empty')} />);
    await user.click(screen.getByRole('button', { name: 'Configure' }));
    await user.type(screen.getByLabelText('Subject'), 'Discard me');
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByText('Discard me')).not.toBeInTheDocument();
    expect(
      screen.getByText('Configure emails to be sent when a response is added')
    ).toBeInTheDocument();
  });

  it('Save persists a new template card under the active tab, fires onSaveTemplate, and closes the editor', async () => {
    const user = userEvent.setup();
    const onSaveTemplate = vi.fn();
    render(<NotificationSettingsEditor {...getFixture('empty')} onSaveTemplate={onSaveTemplate} />);
    await user.click(screen.getByRole('button', { name: 'Configure' }));
    await user.type(screen.getByLabelText('Subject'), 'Welcome email');
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(onSaveTemplate).toHaveBeenCalledTimes(1);
    expect(onSaveTemplate).toHaveBeenCalledWith(
      'new-record',
      expect.objectContaining({ subject: 'Welcome email' })
    );
    expect(screen.getByRole('tab', { name: 'New Record' })).toBeInTheDocument();
    expect(screen.getByText('Welcome email')).toBeInTheDocument();
  });

  it('never calls fetch/XHR across configure -> edit -> save', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<NotificationSettingsEditor {...getFixture('empty')} />);
    await user.click(screen.getByRole('button', { name: 'Configure' }));
    await user.type(screen.getByLabelText('Subject'), 'No network');
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});

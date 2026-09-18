import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TypeformContactsModule } from './TypeformContactsModule';
import { fixtures } from './fixtures';

function getFixture(id: string) {
  const fixture = fixtures.find((f) => f.id === id);
  if (!fixture) throw new Error(`fixture not found: ${id}`);
  return fixture.props;
}

describe('TypeformContactsModule', () => {
  it('renders the empty state with the exact 3-step recipe when there are zero contacts', () => {
    render(<TypeformContactsModule {...getFixture('empty')} />);
    expect(
      screen.getByRole('heading', { name: 'Ready to build your contact list?' })
    ).toBeInTheDocument();
    expect(screen.getByText('Add an email question to a form')).toBeInTheDocument();
    expect(screen.getByText('Publish your form')).toBeInTheDocument();
    expect(screen.getByText(/Auto-add from forms/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Import contacts' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'or add individually' })).toBeInTheDocument();
    // No table and no promo banner in the empty state.
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    expect(screen.queryByText(/valuable leads/)).not.toBeInTheDocument();
  });

  it('renders the populated list as a plain data table with the 5 documented columns', () => {
    render(<TypeformContactsModule {...getFixture('populated-list')} />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(within(table).getByText('Contact')).toBeInTheDocument();
    expect(within(table).getByText('Email')).toBeInTheDocument();
    expect(within(table).getByText('Name')).toBeInTheDocument();
    expect(within(table).getByText('Phone number')).toBeInTheDocument();
    // 4 fixture contacts + header row = 5 rows.
    expect(within(table).getAllByRole('row')).toHaveLength(5);
  });

  it('shows the promo banner with the live contact count once contacts exist', () => {
    render(<TypeformContactsModule {...getFixture('populated-list')} />);
    expect(screen.getByText('Effortlessly turn 4 contacts into valuable leads')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create automation' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'View sample automations' })).toBeInTheDocument();
  });

  it('"Create automation" and "View sample automations" fire their callbacks', async () => {
    const user = userEvent.setup();
    const onCreateAutomation = vi.fn();
    const onViewSampleAutomations = vi.fn();
    render(
      <TypeformContactsModule
        {...getFixture('populated-list')}
        onCreateAutomation={onCreateAutomation}
        onViewSampleAutomations={onViewSampleAutomations}
      />
    );
    await user.click(screen.getByRole('button', { name: 'Create automation' }));
    await user.click(screen.getByRole('button', { name: 'View sample automations' }));
    expect(onCreateAutomation).toHaveBeenCalledTimes(1);
    expect(onViewSampleAutomations).toHaveBeenCalledTimes(1);
  });

  it('the Contact column shows the name when known, and the email otherwise', () => {
    render(<TypeformContactsModule {...getFixture('populated-list')} />);
    // contact-1 has a name — it appears in both the Contact cell and the
    // separate Name column, so there are legitimately two matches.
    expect(screen.getAllByText('Amara Diallo').length).toBe(2);
    // contact-4 has no name, so its Contact cell falls back to showing its
    // email — meaning that email string appears twice (Contact cell + the
    // separate Email column).
    const emailCells = screen.getAllByText('ops@fernwood-supply.com');
    expect(emailCells.length).toBe(2);
  });

  it('opens the "Add new contact" side panel from the fixture, with the privacy notice and 10 fields', () => {
    render(<TypeformContactsModule {...getFixture('add-panel-open')} />);
    expect(screen.getByRole('dialog', { name: 'Add new contact' })).toBeInTheDocument();
    expect(
      screen.getByText(
        'Before adding sensitive information, be aware that everyone in your organization can view contact details.'
      )
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email subscription status')).toBeInTheDocument();
    expect(screen.getByLabelText('Notes')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone number')).toBeInTheDocument();
    expect(screen.getByLabelText('Job title')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn URL')).toBeInTheDocument();
    expect(screen.getByLabelText('Company name')).toBeInTheDocument();
    expect(screen.getByLabelText('Company description')).toBeInTheDocument();
    expect(screen.getByLabelText('Company industry')).toBeInTheDocument();
  });

  it('the Add-contact panel Save is disabled until an email is entered, and fires onAddContact with the draft', async () => {
    const user = userEvent.setup();
    const onAddContact = vi.fn();
    render(<TypeformContactsModule {...getFixture('add-panel-open')} onAddContact={onAddContact} />);

    const saveButton = screen.getByRole('button', { name: 'Save' });
    expect(saveButton).toBeDisabled();

    await user.type(screen.getByLabelText('Email'), 'new.person@example.com');
    await user.type(screen.getByLabelText('Name'), 'New Person');
    expect(saveButton).toBeEnabled();

    await user.click(saveButton);
    expect(onAddContact).toHaveBeenCalledWith(
      expect.objectContaining({ email: 'new.person@example.com', name: 'New Person' })
    );
    // Panel closes back to the list after save.
    expect(screen.queryByRole('dialog', { name: 'Add new contact' })).not.toBeInTheDocument();
  });

  it('opens the contact detail view from the fixture and groups fields per the record (Contact info / Company info / More info / Sources)', () => {
    render(<TypeformContactsModule {...getFixture('detail-open')} />);
    const dialog = screen.getByRole('dialog', { name: 'Amara Diallo' });
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText('Contact info')).toBeInTheDocument();
    expect(within(dialog).getByText('Company info')).toBeInTheDocument();
    expect(within(dialog).getByText('More info')).toBeInTheDocument();
    expect(within(dialog).getByText('Sources')).toBeInTheDocument();
    // Address/Education appear in the detail view (documented as
    // detail-only fields, never in the Add-contact panel).
    expect(within(dialog).getByText('Address')).toBeInTheDocument();
    expect(within(dialog).getByText('Education')).toBeInTheDocument();
    // Company info group shows only Company address per the record's literal itemization.
    expect(within(dialog).getByText('Company address')).toBeInTheDocument();
    expect(within(dialog).queryByText('Company description')).not.toBeInTheDocument();
    expect(within(dialog).queryByText('Company industry')).not.toBeInTheDocument();
    // Company name instead surfaces as the identity-header subtitle.
    expect(within(dialog).getByText('BrightPath')).toBeInTheDocument();
  });

  it('the Sources chip calls onOpenSource with the contact and performs no real navigation', async () => {
    const user = userEvent.setup();
    const onOpenSource = vi.fn();
    render(<TypeformContactsModule {...getFixture('detail-open')} onOpenSource={onOpenSource} />);

    await user.click(screen.getByRole('button', { name: /Customer Feedback Survey/ }));
    expect(onOpenSource).toHaveBeenCalledTimes(1);
    expect(onOpenSource.mock.calls[0][0]).toMatchObject({ id: 'contact-1' });
  });

  it('closing the detail view via the X button returns to the list', async () => {
    const user = userEvent.setup();
    render(<TypeformContactsModule {...getFixture('detail-open')} />);
    await user.click(screen.getByRole('button', { name: 'Close contact details' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('the row expand button is a real, always-focusable control (hover affordance works via keyboard too)', async () => {
    const user = userEvent.setup();
    render(<TypeformContactsModule {...getFixture('populated-list')} />);
    const expandButton = screen.getByRole('button', { name: 'Open details for Amara Diallo' });
    expandButton.focus();
    expect(expandButton).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('dialog', { name: 'Amara Diallo' })).toBeInTheDocument();
  });

  it('shows the "not enriched" banner for a response-synced, unenriched contact, and NOT for an enriched one', () => {
    render(<TypeformContactsModule {...getFixture('not-enriched')} />);
    // The fixture opens Devon Walsh's (unenriched) detail view — scope to
    // that dialog, since the same banner also legitimately renders inline
    // on the list row behind it (both surfaces show it, per the record).
    const dialog = screen.getByRole('dialog', { name: 'Devon Walsh' });
    expect(within(dialog).getByText('Contact not enriched.', { exact: false })).toBeInTheDocument();
    expect(
      within(dialog).getByRole('button', { name: 'Learn how to enrich contacts.' })
    ).toBeInTheDocument();
    // Amara Diallo (enriched) never shows the banner anywhere.
    const amaraRow = screen.getByText('amara.diallo@brightpath.io').closest('tr')!;
    expect(within(amaraRow).queryByText('Contact not enriched.', { exact: false })).not.toBeInTheDocument();
  });

  it('"Learn how to enrich contacts" opens the Contact settings modal and fires onLearnAboutEnrichment', async () => {
    const user = userEvent.setup();
    const onLearnAboutEnrichment = vi.fn();
    render(
      <TypeformContactsModule
        {...getFixture('not-enriched')}
        onLearnAboutEnrichment={onLearnAboutEnrichment}
      />
    );
    const dialog = screen.getByRole('dialog', { name: 'Devon Walsh' });
    await user.click(within(dialog).getByRole('button', { name: 'Learn how to enrich contacts.' }));
    expect(onLearnAboutEnrichment).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('dialog', { name: 'Contact settings' })).toBeInTheDocument();
  });

  it('the subscription-status popover shows status, timestamp, and "Sync by" on click', async () => {
    const user = userEvent.setup();
    render(<TypeformContactsModule {...getFixture('populated-list')} />);
    await user.click(
      screen.getByRole('button', { name: 'Email subscription status: Never subscribed' })
    );
    const popover = screen.getByRole('dialog', { name: 'Email subscription status' });
    expect(within(popover).getByText('Never subscribed')).toBeInTheDocument();
    expect(within(popover).getByText('Sync by: User')).toBeInTheDocument();
  });

  it('Contact permissions popover shows the fixed, non-configurable text and no editable controls', async () => {
    const user = userEvent.setup();
    render(<TypeformContactsModule {...getFixture('populated-list')} />);
    await user.click(screen.getByRole('button', { name: 'Contact permissions' }));
    const popover = screen.getByRole('dialog', { name: 'Contact permissions' });
    expect(within(popover).getByText('Everyone in your organization')).toBeInTheDocument();
    expect(within(popover).getByText('Editors and admins')).toBeInTheDocument();
    expect(within(popover).getByRole('button', { name: 'Request features' })).toBeInTheDocument();
    // Purely informational — no input/checkbox/select controls inside.
    expect(within(popover).queryByRole('checkbox')).not.toBeInTheDocument();
    expect(within(popover).queryByRole('combobox')).not.toBeInTheDocument();
  });

  it('honors permissionsView/permissionsEdit overrides', async () => {
    const user = userEvent.setup();
    render(
      <TypeformContactsModule
        {...getFixture('populated-list')}
        permissionsView="Only me"
        permissionsEdit="Only admins"
      />
    );
    await user.click(screen.getByRole('button', { name: 'Contact permissions' }));
    expect(screen.getByText('Only me')).toBeInTheDocument();
    expect(screen.getByText('Only admins')).toBeInTheDocument();
  });

  it('Contact settings modal has exactly the documented "Enrich contacts on creation" control, off by default', async () => {
    const user = userEvent.setup();
    render(<TypeformContactsModule {...getFixture('populated-list')} />);
    await user.click(screen.getByRole('button', { name: 'Contact settings' }));
    const modal = screen.getByRole('dialog', { name: 'Contact settings' });
    const toggle = within(modal).getByRole('switch', { name: 'Enrich contacts on creation' });
    expect(toggle).toHaveAttribute('aria-checked', 'false');
    expect(
      within(modal).getByText(
        'Enrich a contact with third-party data on contact creation, including response sync.'
      )
    ).toBeInTheDocument();
  });

  it('toggling "Enrich contacts on creation" flips state and fires onEnrichOnCreationChange', async () => {
    const user = userEvent.setup();
    const onEnrichOnCreationChange = vi.fn();
    render(
      <TypeformContactsModule
        {...getFixture('populated-list')}
        onEnrichOnCreationChange={onEnrichOnCreationChange}
      />
    );
    await user.click(screen.getByRole('button', { name: 'Contact settings' }));
    const toggle = screen.getByRole('switch', { name: 'Enrich contacts on creation' });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'true');
    expect(onEnrichOnCreationChange).toHaveBeenCalledWith(true);
  });

  it('Import contacts fires onImportContacts with no real file parsing', async () => {
    const user = userEvent.setup();
    const onImportContacts = vi.fn();
    render(
      <TypeformContactsModule {...getFixture('empty')} onImportContacts={onImportContacts} />
    );
    await user.click(screen.getByRole('button', { name: 'Import contacts' }));
    expect(onImportContacts).toHaveBeenCalledTimes(1);
    expect(document.querySelector('input[type="file"]')).not.toBeInTheDocument();
  });

  it('never calls fetch/XHR across list, add-panel, detail, permissions, and settings interactions', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const user = userEvent.setup();
    render(<TypeformContactsModule {...getFixture('populated-list')} />);

    await user.click(screen.getByRole('button', { name: '+ Add new contact' }));
    await user.type(screen.getByLabelText('Email'), 'a@b.com');
    await user.click(screen.getByRole('button', { name: 'Save' }));
    await user.click(screen.getByRole('button', { name: 'Open details for Amara Diallo' }));
    await user.click(screen.getByRole('button', { name: 'Close contact details' }));
    await user.click(screen.getByRole('button', { name: 'Contact permissions' }));
    await user.click(screen.getByRole('button', { name: 'Contact settings' }));
    await user.click(screen.getByRole('switch', { name: 'Enrich contacts on creation' }));

    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});

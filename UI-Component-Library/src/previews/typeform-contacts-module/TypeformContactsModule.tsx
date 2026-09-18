import { useId, useRef, useState } from 'react';
import styles from './TypeformContactsModule.module.css';

export type SubscriptionStatus = 'subscribed' | 'unsubscribed' | 'never-subscribed';

export interface ContactSource {
  /** The originating form's name, e.g. "Customer Feedback Survey". */
  formName: string;
  /** Display-only date string, e.g. "Sep 12, 2026". */
  date: string;
}

export interface Contact {
  id: string;
  email: string;
  name?: string;
  phoneNumber?: string;
  jobTitle?: string;
  linkedinUrl?: string;
  companyName?: string;
  companyDescription?: string;
  companyIndustry?: string;
  notes?: string;
  /**
   * Detail-view-only fields per the source record: "Address" and
   * "Education" appear in the Contact detail slide-over's "Contact info"
   * group but are NOT offered as fields in the manual "Add new contact"
   * panel — the two surfaces genuinely don't expose an identical field
   * set. Modeled here as data-only fields a contact can carry (e.g. via
   * enrichment) that the Add-contact form never writes to. See README.
   */
  address?: string;
  education?: string;
  /**
   * Also detail-view-only per the record's literal itemization of the
   * "Company info" group ("Company address"). Not offered in the
   * Add-contact panel either.
   */
  companyAddress?: string;
  subscriptionStatus: SubscriptionStatus;
  /** Display-only timestamp string shown in the subscription popover. */
  subscriptionUpdatedAt?: string;
  /** e.g. "User" — shown as "Sync by: {value}" in the subscription popover. */
  subscriptionSyncedBy?: string;
  /**
   * Whether this contact has gone through the (separate, paid, off-by-default)
   * data-enrichment pipeline. Only meaningful for `source`-having contacts —
   * manually-added contacts were never observed to carry this banner.
   * Defaults to treated-as-enriched (no banner) when omitted.
   */
  enriched?: boolean;
  /** Present only for contacts created via a mapped form response. */
  source?: ContactSource;
}

/** The exact 10 fields documented on the "Add new contact" side panel. */
export interface NewContactDraft {
  email: string;
  name: string;
  emailSubscriptionStatus: SubscriptionStatus;
  notes: string;
  phoneNumber: string;
  jobTitle: string;
  linkedinUrl: string;
  companyName: string;
  companyDescription: string;
  companyIndustry: string;
}

export type ContactsModuleView = 'list' | 'add-panel' | 'detail';

export interface TypeformContactsModuleProps {
  /**
   * The contacts to render. This is a static docs preview, not a live
   * GraphQL integration (see README's "Deliberate scoping decision") — a
   * contact created by a mapped form response is modeled by simply
   * including it in this array with a `source`, not by simulating a live
   * submission.
   */
  contacts: Contact[];
  /** Which screen/panel is showing at mount. Defaults to 'list'. This
   * component owns its own view/selection state itself via internal
   * useState from that point on — see `new-form-chooser`'s README for the
   * precedent this follows. */
  initialView?: ContactsModuleView;
  /** Required when `initialView` is 'detail' — which contact's slide-over
   * to open at mount. */
  initialSelectedContactId?: string;
  /** Fired when the Add-contact panel's Save is clicked. No real contact
   * is appended to `contacts` — this is a static-props preview, matching
   * this repo's established pattern of exposing intent via a callback
   * rather than mutating the caller's array. */
  onAddContact?: (draft: NewContactDraft) => void;
  /** Fired by a contact's "Sources" chip. No real navigation is
   * implemented (the real product opens the source form's builder
   * screen). */
  onOpenSource?: (contact: Contact) => void;
  /** Fired by the "Import contacts" button. No real CSV parsing. */
  onImportContacts?: () => void;
  /** Fired by the promo banner's "Create automation" button. */
  onCreateAutomation?: () => void;
  /** Fired by the promo banner's "View sample automations" link. */
  onViewSampleAutomations?: () => void;
  /** Fired by the "not enriched" banner's "Learn how to enrich contacts"
   * link — opens the Contact settings modal in this reconstruction (a
   * reasonable inferred destination, since that's literally where the
   * enrichment toggle lives; not independently confirmed in the record). */
  onLearnAboutEnrichment?: () => void;
  /** Display-only text for the (fixed, non-configurable) permissions
   * popover. Defaults to the record's exact captured copy. */
  permissionsView?: string;
  permissionsEdit?: string;
  /** Fired by the permissions popover's "Request features" link. */
  onRequestFeatures?: () => void;
  /** Initial value of the Contact settings modal's "Enrich contacts on
   * creation" toggle. Defaults to false (off), matching the record. */
  initialEnrichOnCreation?: boolean;
  onEnrichOnCreationChange?: (value: boolean) => void;
}

const SUBSCRIPTION_LABEL: Record<SubscriptionStatus, string> = {
  subscribed: 'Subscribed',
  unsubscribed: 'Unsubscribed',
  'never-subscribed': 'Never subscribed',
};

const SUBSCRIPTION_OPTIONS: { value: SubscriptionStatus; label: string }[] = [
  { value: 'subscribed', label: 'Subscribed' },
  { value: 'unsubscribed', label: 'Unsubscribed' },
  { value: 'never-subscribed', label: 'Never subscribed' },
];

const EMPTY_DRAFT: NewContactDraft = {
  email: '',
  name: '',
  emailSubscriptionStatus: 'never-subscribed',
  notes: '',
  phoneNumber: '',
  jobTitle: '',
  linkedinUrl: '',
  companyName: '',
  companyDescription: '',
  companyIndustry: '',
};

function initialFor(contact: Contact): string {
  const source = contact.name?.trim() || contact.email;
  return source.charAt(0).toUpperCase() || '?';
}

function primaryLabel(contact: Contact): string {
  return contact.name?.trim() || contact.email;
}

interface NotEnrichedBannerProps {
  onLearnMore?: () => void;
}

function NotEnrichedBanner({ onLearnMore }: NotEnrichedBannerProps) {
  return (
    <p className={styles.notEnrichedBanner} role="note">
      Contact not enriched.{' '}
      <button type="button" className={styles.inlineLink} onClick={onLearnMore}>
        Learn how to enrich contacts.
      </button>
    </p>
  );
}

interface SubscriptionIndicatorProps {
  contact: Contact;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}

/**
 * The small dashed-circle status indicator on a contact's email. Per the
 * task's Structure spec this is click-triggered (not hover), so no
 * hover/keyboard-parity concern applies here — it's already a plain
 * button.
 */
function SubscriptionIndicator({ contact, open, onToggle, onClose }: SubscriptionIndicatorProps) {
  const popoverId = useId();
  return (
    <span className={styles.subscriptionWrap}>
      <button
        type="button"
        className={styles.subscriptionDot}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? popoverId : undefined}
        aria-label={`Email subscription status: ${SUBSCRIPTION_LABEL[contact.subscriptionStatus]}`}
        onClick={onToggle}
      />
      {open && (
        <div
          id={popoverId}
          role="dialog"
          aria-label="Email subscription status"
          className={styles.subscriptionPopover}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              event.preventDefault();
              onClose();
            }
          }}
        >
          <p className={styles.subscriptionStatusLine}>
            {SUBSCRIPTION_LABEL[contact.subscriptionStatus]}
          </p>
          {contact.subscriptionUpdatedAt && (
            <p className={styles.subscriptionMeta}>{contact.subscriptionUpdatedAt}</p>
          )}
          <p className={styles.subscriptionMeta}>
            Sync by: {contact.subscriptionSyncedBy ?? 'User'}
          </p>
        </div>
      )}
    </span>
  );
}

/**
 * Reconstructed from Typeform's "Contacts" tab (CRM-lite): a plain data
 * table (not cards/Kanban), an empty-state recipe, an "Add new contact"
 * side panel, a contact detail slide-over, a fixed/non-configurable
 * permissions popover, and a Contact settings modal with a single
 * data-enrichment toggle. All interactions are client-side against the
 * `contacts` prop — see this folder's README for the full evidence trail,
 * in particular the two-surface field-set inconsistency (Address/Education
 * only ever shown in the detail view, never in the Add-contact form) that
 * the record explicitly calls out.
 */
export function TypeformContactsModule({
  contacts,
  initialView = 'list',
  initialSelectedContactId,
  onAddContact,
  onOpenSource,
  onImportContacts,
  onCreateAutomation,
  onViewSampleAutomations,
  onLearnAboutEnrichment,
  permissionsView = 'Everyone in your organization',
  permissionsEdit = 'Editors and admins',
  onRequestFeatures,
  initialEnrichOnCreation = false,
  onEnrichOnCreationChange,
}: TypeformContactsModuleProps) {
  const headingId = useId();
  const addPanelHeadingId = useId();
  const detailHeadingId = useId();
  const settingsHeadingId = useId();
  const permissionsPopoverId = useId();

  const [view, setView] = useState<ContactsModuleView>(initialView);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(
    initialSelectedContactId ?? null
  );
  const [draft, setDraft] = useState<NewContactDraft>(EMPTY_DRAFT);
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set());
  const [openSubscriptionId, setOpenSubscriptionId] = useState<string | null>(null);
  const [permissionsOpen, setPermissionsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [enrichOnCreation, setEnrichOnCreation] = useState(initialEnrichOnCreation);

  const permissionsTriggerRef = useRef<HTMLButtonElement>(null);

  const selectedContact = contacts.find((c) => c.id === selectedContactId) ?? null;

  function openAddPanel() {
    setDraft(EMPTY_DRAFT);
    setView('add-panel');
  }

  function closeAddPanel() {
    setView('list');
  }

  function submitAddPanel() {
    if (!draft.email.trim()) return; // Email is the one field every surface treats as required.
    onAddContact?.(draft);
    setView('list');
  }

  function openDetail(contact: Contact) {
    setSelectedContactId(contact.id);
    setView('detail');
  }

  function closeDetail() {
    setView('list');
  }

  function toggleRow(id: string) {
    setSelectedRowIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleAllRows() {
    setSelectedRowIds((prev) =>
      prev.size === contacts.length ? new Set() : new Set(contacts.map((c) => c.id))
    );
  }

  function toggleSubscriptionPopover(id: string) {
    setOpenSubscriptionId((prev) => (prev === id ? null : id));
  }

  function togglePermissions() {
    setPermissionsOpen((prev) => !prev);
  }

  function closePermissions() {
    setPermissionsOpen(false);
    permissionsTriggerRef.current?.focus();
  }

  function handleEnrichToggle() {
    const next = !enrichOnCreation;
    setEnrichOnCreation(next);
    onEnrichOnCreationChange?.(next);
  }

  function handleLearnMore() {
    setSettingsOpen(true);
    onLearnAboutEnrichment?.();
  }

  const allSelected = contacts.length > 0 && selectedRowIds.size === contacts.length;

  return (
    <div className={styles.root}>
      <div className={styles.headerRow}>
        <div>
          <h2 id={headingId} className={styles.heading}>
            Contacts
          </h2>
          <p className={styles.contactCount}>
            {contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'}
          </p>
        </div>
        <div className={styles.toolbar}>
          {/* Only shown once contacts exist — the empty state has its own
              "Import contacts" button (see below), and the record only
              ever documents this button inside that empty state; showing
              both at once here would just be a duplicate control. See
              README's "Import contacts placement" assumption. */}
          {contacts.length > 0 && (
            <button type="button" className={styles.secondaryButton} onClick={onImportContacts}>
              Import contacts
            </button>
          )}
          <span className={styles.popoverAnchor}>
            <button
              ref={permissionsTriggerRef}
              type="button"
              className={styles.secondaryButton}
              aria-haspopup="dialog"
              aria-expanded={permissionsOpen}
              aria-controls={permissionsOpen ? permissionsPopoverId : undefined}
              onClick={togglePermissions}
            >
              Contact permissions
            </button>
            {permissionsOpen && (
              <div
                id={permissionsPopoverId}
                role="dialog"
                aria-label="Contact permissions"
                className={styles.permissionsPopover}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    event.preventDefault();
                    closePermissions();
                  }
                }}
              >
                <p className={styles.permissionLine}>
                  <strong>View contacts:</strong> {permissionsView}
                </p>
                <p className={styles.permissionLine}>
                  <strong>Edit contacts:</strong> {permissionsEdit}
                </p>
                <button
                  type="button"
                  className={styles.inlineLink}
                  onClick={() => {
                    onRequestFeatures?.();
                  }}
                >
                  Request features
                </button>
              </div>
            )}
          </span>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={() => setSettingsOpen(true)}
          >
            Contact settings
          </button>
          <button type="button" className={styles.primaryButton} onClick={openAddPanel}>
            + Add new contact
          </button>
        </div>
      </div>

      {contacts.length === 0 ? (
        <div className={styles.emptyState}>
          <h3 className={styles.emptyHeading}>Ready to build your contact list?</h3>
          <ol className={styles.emptySteps}>
            <li>Add an email question to a form</li>
            <li>Publish your form</li>
            <li>Click &ldquo;Auto-add from forms&rdquo;</li>
          </ol>
          <div className={styles.emptyActions}>
            <button type="button" className={styles.primaryButton} onClick={onImportContacts}>
              Import contacts
            </button>
            <button type="button" className={styles.inlineLink} onClick={openAddPanel}>
              or add individually
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.promoBanner}>
            <p className={styles.promoText}>
              Effortlessly turn {contacts.length} contacts into valuable leads
            </p>
            <div className={styles.promoActions}>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={onCreateAutomation}
              >
                Create automation
              </button>
              <button
                type="button"
                className={styles.inlineLink}
                onClick={onViewSampleAutomations}
              >
                View sample automations
              </button>
            </div>
          </div>

          <table className={styles.table} aria-labelledby={headingId}>
            <thead>
              <tr>
                <th className={styles.checkboxCell} scope="col">
                  <input
                    type="checkbox"
                    aria-label="Select all contacts"
                    checked={allSelected}
                    onChange={toggleAllRows}
                  />
                </th>
                <th scope="col">Contact</th>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Phone number</th>
                <th scope="col" className={styles.expandHeaderCell}>
                  <span className={styles.visuallyHidden}>Open details</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className={styles.row}>
                  <td className={styles.checkboxCell}>
                    <input
                      type="checkbox"
                      aria-label={`Select ${primaryLabel(contact)}`}
                      checked={selectedRowIds.has(contact.id)}
                      onChange={() => toggleRow(contact.id)}
                    />
                  </td>
                  <td>
                    <div className={styles.contactCell}>
                      <span className={styles.avatar} aria-hidden="true">
                        {initialFor(contact)}
                      </span>
                      <div className={styles.contactCellText}>
                        <span className={styles.contactPrimary}>{primaryLabel(contact)}</span>
                        {contact.source && contact.enriched === false && (
                          <NotEnrichedBanner onLearnMore={handleLearnMore} />
                        )}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={styles.emailCell}>
                      {contact.email}
                      <SubscriptionIndicator
                        contact={contact}
                        open={openSubscriptionId === contact.id}
                        onToggle={() => toggleSubscriptionPopover(contact.id)}
                        onClose={() => setOpenSubscriptionId(null)}
                      />
                    </span>
                  </td>
                  <td>{contact.name || <span className={styles.dash}>—</span>}</td>
                  <td>{contact.phoneNumber || <span className={styles.dash}>—</span>}</td>
                  <td className={styles.expandCell}>
                    <button
                      type="button"
                      className={styles.expandButton}
                      aria-label={`Open details for ${primaryLabel(contact)}`}
                      onClick={() => openDetail(contact)}
                    >
                      &#8250;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {view === 'add-panel' && (
        <div className={styles.overlay}>
          <div
            className={styles.sidePanel}
            role="dialog"
            aria-modal="true"
            aria-labelledby={addPanelHeadingId}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                closeAddPanel();
              }
            }}
          >
            <h2 id={addPanelHeadingId} className={styles.panelHeading}>
              Add new contact
            </h2>
            <p className={styles.privacyNotice} role="note">
              Before adding sensitive information, be aware that everyone in your organization
              can view contact details.
            </p>

            <label className={styles.fieldLabel} htmlFor={`${addPanelHeadingId}-email`}>
              Email
            </label>
            <input
              id={`${addPanelHeadingId}-email`}
              type="email"
              className={styles.textInput}
              value={draft.email}
              onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}
            />

            <label className={styles.fieldLabel} htmlFor={`${addPanelHeadingId}-name`}>
              Name
            </label>
            <input
              id={`${addPanelHeadingId}-name`}
              type="text"
              className={styles.textInput}
              value={draft.name}
              onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
            />

            <label
              className={styles.fieldLabel}
              htmlFor={`${addPanelHeadingId}-subscription`}
            >
              Email subscription status
            </label>
            <select
              id={`${addPanelHeadingId}-subscription`}
              className={styles.selectInput}
              value={draft.emailSubscriptionStatus}
              onChange={(e) =>
                setDraft((d) => ({
                  ...d,
                  emailSubscriptionStatus: e.target.value as SubscriptionStatus,
                }))
              }
            >
              {SUBSCRIPTION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <label className={styles.fieldLabel} htmlFor={`${addPanelHeadingId}-notes`}>
              Notes
            </label>
            <textarea
              id={`${addPanelHeadingId}-notes`}
              className={styles.textareaInput}
              value={draft.notes}
              onChange={(e) => setDraft((d) => ({ ...d, notes: e.target.value }))}
            />

            <label className={styles.fieldLabel} htmlFor={`${addPanelHeadingId}-phone`}>
              Phone number
            </label>
            <input
              id={`${addPanelHeadingId}-phone`}
              type="tel"
              className={styles.textInput}
              value={draft.phoneNumber}
              onChange={(e) => setDraft((d) => ({ ...d, phoneNumber: e.target.value }))}
            />

            <label className={styles.fieldLabel} htmlFor={`${addPanelHeadingId}-title`}>
              Job title
            </label>
            <input
              id={`${addPanelHeadingId}-title`}
              type="text"
              className={styles.textInput}
              value={draft.jobTitle}
              onChange={(e) => setDraft((d) => ({ ...d, jobTitle: e.target.value }))}
            />

            <label className={styles.fieldLabel} htmlFor={`${addPanelHeadingId}-linkedin`}>
              LinkedIn URL
            </label>
            <input
              id={`${addPanelHeadingId}-linkedin`}
              type="url"
              className={styles.textInput}
              value={draft.linkedinUrl}
              onChange={(e) => setDraft((d) => ({ ...d, linkedinUrl: e.target.value }))}
            />

            <label className={styles.fieldLabel} htmlFor={`${addPanelHeadingId}-company`}>
              Company name
            </label>
            <input
              id={`${addPanelHeadingId}-company`}
              type="text"
              className={styles.textInput}
              value={draft.companyName}
              onChange={(e) => setDraft((d) => ({ ...d, companyName: e.target.value }))}
            />

            <label
              className={styles.fieldLabel}
              htmlFor={`${addPanelHeadingId}-company-description`}
            >
              Company description
            </label>
            <textarea
              id={`${addPanelHeadingId}-company-description`}
              className={styles.textareaInput}
              value={draft.companyDescription}
              onChange={(e) =>
                setDraft((d) => ({ ...d, companyDescription: e.target.value }))
              }
            />

            <label
              className={styles.fieldLabel}
              htmlFor={`${addPanelHeadingId}-company-industry`}
            >
              Company industry
            </label>
            <input
              id={`${addPanelHeadingId}-company-industry`}
              type="text"
              className={styles.textInput}
              value={draft.companyIndustry}
              onChange={(e) => setDraft((d) => ({ ...d, companyIndustry: e.target.value }))}
            />

            <div className={styles.panelActions}>
              <button type="button" className={styles.secondaryButton} onClick={closeAddPanel}>
                Cancel
              </button>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={submitAddPanel}
                disabled={!draft.email.trim()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {view === 'detail' && selectedContact && (
        <div className={styles.overlay}>
          <div
            className={styles.sidePanel}
            role="dialog"
            aria-modal="true"
            aria-labelledby={detailHeadingId}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                closeDetail();
              }
            }}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeDetail}
              aria-label="Close contact details"
            >
              &#10005;
            </button>

            <div className={styles.detailIdentity}>
              <span className={styles.avatarLarge} aria-hidden="true">
                {initialFor(selectedContact)}
              </span>
              <div>
                <h2 id={detailHeadingId} className={styles.panelHeading}>
                  {primaryLabel(selectedContact)}
                </h2>
                {selectedContact.companyName && (
                  <p className={styles.detailSubtitle}>{selectedContact.companyName}</p>
                )}
              </div>
            </div>

            {selectedContact.source && selectedContact.enriched === false && (
              <NotEnrichedBanner onLearnMore={handleLearnMore} />
            )}

            <section className={styles.detailSection}>
              <h3 className={styles.detailSectionHeading}>Contact info</h3>
              <dl className={styles.detailFieldList}>
                <dt>Email</dt>
                <dd>{selectedContact.email}</dd>
                <dt>Phone number</dt>
                <dd>{selectedContact.phoneNumber || '—'}</dd>
                <dt>Address</dt>
                <dd>{selectedContact.address || '—'}</dd>
                <dt>Education</dt>
                <dd>{selectedContact.education || '—'}</dd>
              </dl>
            </section>

            <section className={styles.detailSection}>
              <h3 className={styles.detailSectionHeading}>Company info</h3>
              <dl className={styles.detailFieldList}>
                <dt>Company address</dt>
                <dd>{selectedContact.companyAddress || '—'}</dd>
              </dl>
            </section>

            <section className={styles.detailSection}>
              <h3 className={styles.detailSectionHeading}>More info</h3>
              <dl className={styles.detailFieldList}>
                <dt>Notes</dt>
                <dd>{selectedContact.notes || '—'}</dd>
              </dl>
            </section>

            {selectedContact.source && (
              <section className={styles.detailSection}>
                <h3 className={styles.detailSectionHeading}>Sources</h3>
                <button
                  type="button"
                  className={styles.sourceChip}
                  onClick={() => onOpenSource?.(selectedContact)}
                >
                  {selectedContact.source.formName} &middot; {selectedContact.source.date}
                </button>
              </section>
            )}
          </div>
        </div>
      )}

      {settingsOpen && (
        <div className={styles.overlay}>
          <div
            className={styles.settingsModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={settingsHeadingId}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                setSettingsOpen(false);
              }
            }}
          >
            <h2 id={settingsHeadingId} className={styles.panelHeading}>
              Contact settings
            </h2>
            <div className={styles.settingsRow}>
              <div className={styles.settingsRowText}>
                <span className={styles.settingsLabel}>
                  Data enrichment
                  <span className={styles.badge}>Paid plan</span>
                </span>
                <span className={styles.settingsSubLabel}>Enrich contacts on creation</span>
                <p className={styles.settingsDescription}>
                  Enrich a contact with third-party data on contact creation, including response
                  sync.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={enrichOnCreation}
                aria-label="Enrich contacts on creation"
                className={
                  enrichOnCreation
                    ? `${styles.toggleSwitch} ${styles.toggleSwitchOn}`
                    : styles.toggleSwitch
                }
                onClick={handleEnrichToggle}
              >
                <span className={styles.toggleThumb} />
              </button>
            </div>
            <div className={styles.panelActions}>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={() => setSettingsOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useId, useRef, useState } from 'react';
import styles from './NotificationSettingsEditor.module.css';

export type NotificationTrigger = 'new-record' | 'updated-record';

export interface RecipientChip {
  id: string;
  value: string;
  valid: boolean;
}

export interface NotificationTemplate {
  id: string;
  fromName: string;
  to: RecipientChip[];
  cc: string;
  bcc: string;
  subject: string;
  body: string;
  enabled: boolean;
}

interface TemplateDraft {
  fromName: string;
  to: RecipientChip[];
  cc: string;
  bcc: string;
  subject: string;
  body: string;
}

const TRIGGER_LABEL: Record<NotificationTrigger, string> = {
  'new-record': 'New Record',
  'updated-record': 'Updated Record',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Documented merge-field tokens, verbatim from the source's Technical Data
 * ("observed tokens: ${zf:Rating}, ${zf:Dropdown}, ${zf:Radio},
 * ${zf:MultipleChoice}, ${zf:DecisionBox}, ${zf:MultiLine}, plus a "System
 * Fields" section: ${zf:REFERRER_NAME}, ${zf:IP_ADDRESS}, ${zf:ADDED_TIME},
 * ${zf:ADDED_EMAILID}"). The token strings themselves are exact; the
 * paired "question text" shown next to each one is this reconstruction's
 * own representative placeholder — the source never captured which literal
 * question text was paired with which token on the real form under test,
 * only the field-type-derived token strings.
 */
const FIELD_TOKENS: { questionText: string; token: string }[] = [
  { questionText: 'How would you rate our service?', token: '${zf:Rating}' },
  { questionText: 'Which plan are you on?', token: '${zf:Dropdown}' },
  { questionText: 'How did you hear about us?', token: '${zf:Radio}' },
  { questionText: 'Which features do you use?', token: '${zf:MultipleChoice}' },
  { questionText: 'I agree to the terms', token: '${zf:DecisionBox}' },
  { questionText: 'Additional comments', token: '${zf:MultiLine}' },
];

const SYSTEM_FIELD_TOKENS: { questionText: string; token: string }[] = [
  { questionText: 'Referrer Name', token: '${zf:REFERRER_NAME}' },
  { questionText: 'IP Address', token: '${zf:IP_ADDRESS}' },
  { questionText: 'Added Time', token: '${zf:ADDED_TIME}' },
  { questionText: 'Added Email ID', token: '${zf:ADDED_EMAILID}' },
];

let idSeq = 0;
function nextId(prefix: string): string {
  idSeq += 1;
  return `${prefix}-${idSeq}`;
}

function emptyDraft(): TemplateDraft {
  return { fromName: '', to: [], cc: '', bcc: '', subject: '', body: '' };
}

export interface NotificationSettingsEditorProps {
  /** Which trigger tab is active at mount. Defaults to 'new-record'. */
  initialActiveTrigger?: NotificationTrigger;
  /** Starting templates per trigger. Defaults to both empty (the true empty state). */
  initialTemplates?: Record<NotificationTrigger, NotificationTemplate[]>;
  /** Fixed, verified sender address shown read-only in the editor's "From" field. */
  fromAddress?: string;
  /** Mounts with the template editor modal already open. */
  initialEditorOpen?: boolean;
  /** Seeds the editor draft when initialEditorOpen is true (e.g. to show an invalid recipient chip up front). */
  initialEditorDraft?: Partial<TemplateDraft>;
  /** Mounts with the read-only "Field Labels" popup already open (only meaningful alongside initialEditorOpen). */
  initialFieldLabelsOpen?: boolean;
  /** Fired when Save persists a new template. No real network call is made — see this preview's evidence notes. */
  onSaveTemplate?: (trigger: NotificationTrigger, template: NotificationTemplate) => void;
}

function recipientSummary(chips: RecipientChip[]): string {
  if (chips.length === 0) return '(no recipients)';
  return chips.map((c) => c.value).join(', ');
}

/**
 * Reconstructed from Zoho Forms' Settings -> Email & Notifications -> Email
 * screen: two fixed trigger tabs (New Record / Updated Record), each
 * holding zero or more independently-toggleable template cards, and a
 * full-modal template editor. Confirmed-real behavior reproduced
 * faithfully: Save is explicit (nothing persists on typing/toggling), a
 * non-email recipient chip is flagged but never blocks editing the rest of
 * the form, and the "Field Labels" reference popup is a confirmed no-op —
 * clicking a token row does nothing to Subject/body. No real
 * `POST .../notifications/email` call is made; Save calls `onSaveTemplate`
 * and updates local state only, matching this repo's static-preview
 * convention of exposing intent via a callback rather than a real network
 * round-trip.
 */
export function NotificationSettingsEditor({
  initialActiveTrigger = 'new-record',
  initialTemplates,
  fromAddress = 'noreply@zohoforms.example.com',
  initialEditorOpen = false,
  initialEditorDraft,
  initialFieldLabelsOpen = false,
  onSaveTemplate,
}: NotificationSettingsEditorProps) {
  const editorHeadingId = useId();
  const fieldLabelsHeadingId = useId();

  const [activeTrigger, setActiveTrigger] = useState<NotificationTrigger>(initialActiveTrigger);
  const [templates, setTemplates] = useState<Record<NotificationTrigger, NotificationTemplate[]>>(
    () => initialTemplates ?? { 'new-record': [], 'updated-record': [] }
  );
  const [editorOpen, setEditorOpen] = useState(initialEditorOpen);
  const [draft, setDraft] = useState<TemplateDraft>(() => ({
    ...emptyDraft(),
    ...initialEditorDraft,
  }));
  const [toInputValue, setToInputValue] = useState('');
  const [fieldLabelsOpen, setFieldLabelsOpen] = useState(initialFieldLabelsOpen);
  const subjectInputRef = useRef<HTMLInputElement>(null);

  const configured = templates['new-record'].length > 0 || templates['updated-record'].length > 0;
  const activeTemplates = templates[activeTrigger];
  const hasInvalidChip = draft.to.some((chip) => !chip.valid);

  function commitToChips(text: string) {
    const parts = text
      .split(/[\s,]+/)
      .map((p) => p.trim())
      .filter(Boolean);
    if (parts.length === 0) return;
    setDraft((d) => ({
      ...d,
      to: [...d.to, ...parts.map((value) => ({ id: nextId('chip'), value, valid: EMAIL_RE.test(value) }))],
    }));
  }

  function handleToInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const val = event.target.value;
    if (/[\s,]$/.test(val)) {
      commitToChips(val);
      setToInputValue('');
    } else {
      setToInputValue(val);
    }
  }

  function handleToKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
      commitToChips(toInputValue);
      setToInputValue('');
    } else if (event.key === 'Backspace' && toInputValue === '' && draft.to.length > 0) {
      setDraft((d) => ({ ...d, to: d.to.slice(0, -1) }));
    }
  }

  function handleToPaste(event: React.ClipboardEvent<HTMLInputElement>) {
    const text = event.clipboardData.getData('text');
    if (text && /[\s,]/.test(text)) {
      event.preventDefault();
      commitToChips(text);
    }
  }

  function removeChip(id: string) {
    setDraft((d) => ({ ...d, to: d.to.filter((c) => c.id !== id) }));
  }

  function openEditorForCurrentTab() {
    setDraft(emptyDraft());
    setToInputValue('');
    setFieldLabelsOpen(false);
    setEditorOpen(true);
  }

  function closeEditor() {
    setEditorOpen(false);
    setFieldLabelsOpen(false);
  }

  function saveTemplate() {
    const template: NotificationTemplate = {
      id: nextId('template'),
      fromName: draft.fromName,
      to: draft.to,
      cc: draft.cc,
      bcc: draft.bcc,
      subject: draft.subject,
      body: draft.body,
      enabled: true,
    };
    setTemplates((prev) => ({
      ...prev,
      [activeTrigger]: [...prev[activeTrigger], template],
    }));
    onSaveTemplate?.(activeTrigger, template);
    closeEditor();
  }

  function toggleTemplate(id: string) {
    setTemplates((prev) => ({
      ...prev,
      [activeTrigger]: prev[activeTrigger].map((t) => (t.id === id ? { ...t, enabled: !t.enabled } : t)),
    }));
  }

  // Confirmed no-op: clicking a Field Labels row does nothing to
  // Subject/body — placeholders must be typed or copy-pasted by hand. This
  // handler is intentionally empty; it exists so the row is a genuine,
  // clickable element (matching the source's own affordance-vs-behavior
  // gap) rather than a plain non-interactive list item.
  function handleFieldLabelRowClick() {
    // Deliberately does nothing — see doc comment above.
  }

  return (
    <div className={styles.root}>
      {!configured ? (
        <div className={styles.emptyState}>
          <p className={styles.emptyStateText}>
            Configure emails to be sent when a response is added
          </p>
          <button type="button" className={styles.primaryButton} onClick={openEditorForCurrentTab}>
            Configure
          </button>
        </div>
      ) : (
        <>
          <div className={styles.triggerTabs} role="tablist" aria-label="Notification trigger">
            {(['new-record', 'updated-record'] as NotificationTrigger[]).map((trigger) => (
              <button
                key={trigger}
                type="button"
                role="tab"
                aria-selected={activeTrigger === trigger}
                className={
                  activeTrigger === trigger
                    ? `${styles.triggerTab} ${styles.triggerTabActive}`
                    : styles.triggerTab
                }
                onClick={() => setActiveTrigger(trigger)}
              >
                {TRIGGER_LABEL[trigger]}
              </button>
            ))}
          </div>

          <div className={styles.tabPanel}>
            {activeTemplates.length === 0 ? (
              <p className={styles.tabEmptyText}>
                No templates configured for {TRIGGER_LABEL[activeTrigger]}.
              </p>
            ) : (
              <ul className={styles.templateList}>
                {activeTemplates.map((template) => (
                  <li key={template.id} className={styles.templateCard}>
                    <div className={styles.templateCardText}>
                      <p className={styles.templateSubject}>{template.subject || '(no subject)'}</p>
                      <p className={styles.templateMeta}>To: {recipientSummary(template.to)}</p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={template.enabled}
                      aria-label={`${template.enabled ? 'Disable' : 'Enable'} template "${template.subject || 'Untitled template'}"`}
                      className={
                        template.enabled
                          ? `${styles.toggleSwitch} ${styles.toggleSwitchOn}`
                          : styles.toggleSwitch
                      }
                      onClick={() => toggleTemplate(template.id)}
                    >
                      <span className={styles.toggleThumb} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button type="button" className={styles.secondaryButton} onClick={openEditorForCurrentTab}>
              + New Template
            </button>
          </div>
        </>
      )}

      {editorOpen && (
        <div className={styles.overlay}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={editorHeadingId}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                closeEditor();
              }
            }}
          >
            <div className={styles.modalHeader}>
              <h2 id={editorHeadingId} className={styles.modalHeading}>
                {TRIGGER_LABEL[activeTrigger]} email template
              </h2>
              <button
                type="button"
                className={styles.closeButton}
                aria-label="Close template editor"
                onClick={closeEditor}
              >
                &#10005;
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.fieldRow}>
                <span className={styles.fieldLabel}>From</span>
                <span className={styles.readOnlyValue}>{fromAddress}</span>
              </div>

              <label className={styles.fieldLabel} htmlFor={`${editorHeadingId}-fromName`}>
                From Name
              </label>
              <input
                id={`${editorHeadingId}-fromName`}
                type="text"
                className={styles.textInput}
                value={draft.fromName}
                onChange={(e) => setDraft((d) => ({ ...d, fromName: e.target.value }))}
              />

              <label className={styles.fieldLabel} htmlFor={`${editorHeadingId}-to`}>
                To
              </label>
              <div className={styles.chipField}>
                {draft.to.map((chip) => (
                  <span
                    key={chip.id}
                    className={chip.valid ? styles.chip : `${styles.chip} ${styles.chipInvalid}`}
                  >
                    {chip.value}
                    <button
                      type="button"
                      className={styles.chipRemove}
                      aria-label={`Remove recipient ${chip.value}`}
                      onClick={() => removeChip(chip.id)}
                    >
                      &#10005;
                    </button>
                  </span>
                ))}
                <input
                  id={`${editorHeadingId}-to`}
                  type="text"
                  className={styles.chipInput}
                  value={toInputValue}
                  placeholder={draft.to.length === 0 ? 'Type or paste email addresses…' : ''}
                  onChange={handleToInputChange}
                  onKeyDown={handleToKeyDown}
                  onPaste={handleToPaste}
                />
              </div>
              {hasInvalidChip && (
                <p className={styles.errorBanner} role="alert">
                  Invalid email address specified
                </p>
              )}

              <label className={styles.fieldLabel} htmlFor={`${editorHeadingId}-cc`}>
                CC
              </label>
              <input
                id={`${editorHeadingId}-cc`}
                type="text"
                className={styles.textInput}
                value={draft.cc}
                onChange={(e) => setDraft((d) => ({ ...d, cc: e.target.value }))}
              />

              <label className={styles.fieldLabel} htmlFor={`${editorHeadingId}-bcc`}>
                BCC
              </label>
              <input
                id={`${editorHeadingId}-bcc`}
                type="text"
                className={styles.textInput}
                value={draft.bcc}
                onChange={(e) => setDraft((d) => ({ ...d, bcc: e.target.value }))}
              />

              <label className={styles.fieldLabel} htmlFor={`${editorHeadingId}-subject`}>
                Subject
              </label>
              <input
                ref={subjectInputRef}
                id={`${editorHeadingId}-subject`}
                type="text"
                className={styles.textInput}
                value={draft.subject}
                onChange={(e) => setDraft((d) => ({ ...d, subject: e.target.value }))}
              />

              <span className={styles.fieldLabel}>Message</span>
              {/*
                Simplified rich-text-style editor: a real toolbar row of
                decorative, disabled buttons (Bold/Italic/Underline/Strike/
                Font/Size/Colour/Align/Themes/AI-assist), none of which is
                wired up — this reconstruction only implements the one
                functional item in that row, "Field Labels", per the task's
                explicit scoping to a "simplified rich-text-style body
                textarea".
              */}
              <div className={styles.toolbar}>
                {['B', 'I', 'U', 'S', 'Font', 'Size', 'Colour', 'Align', 'Themes', 'AI'].map((label) => (
                  <button key={label} type="button" className={styles.toolbarButton} disabled>
                    {label}
                  </button>
                ))}
                <span className={styles.popoverAnchor}>
                  <button
                    type="button"
                    className={styles.toolbarButtonActive}
                    onClick={() => setFieldLabelsOpen((prev) => !prev)}
                  >
                    Field Labels
                  </button>
                  {fieldLabelsOpen && (
                    <div
                      role="dialog"
                      aria-labelledby={fieldLabelsHeadingId}
                      className={styles.fieldLabelsPopover}
                      onKeyDown={(event) => {
                        if (event.key === 'Escape') {
                          event.preventDefault();
                          setFieldLabelsOpen(false);
                        }
                      }}
                    >
                      <h3 id={fieldLabelsHeadingId} className={styles.popoverHeading}>
                        Field Labels
                      </h3>
                      <p className={styles.popoverHint}>
                        Reference only — type or paste a token into Subject/Message. Clicking a row
                        does nothing.
                      </p>
                      <ul className={styles.tokenList}>
                        {FIELD_TOKENS.map((entry) => (
                          <li key={entry.token}>
                            <button
                              type="button"
                              className={styles.tokenRow}
                              onClick={handleFieldLabelRowClick}
                            >
                              <span className={styles.tokenQuestion}>{entry.questionText}</span>
                              <span className={styles.tokenValue}>{entry.token}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                      <p className={styles.popoverSectionHeading}>System Fields</p>
                      <ul className={styles.tokenList}>
                        {SYSTEM_FIELD_TOKENS.map((entry) => (
                          <li key={entry.token}>
                            <button
                              type="button"
                              className={styles.tokenRow}
                              onClick={handleFieldLabelRowClick}
                            >
                              <span className={styles.tokenQuestion}>{entry.questionText}</span>
                              <span className={styles.tokenValue}>{entry.token}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </span>
              </div>
              <textarea
                className={styles.bodyTextarea}
                aria-label="Email message body"
                value={draft.body}
                onChange={(e) => setDraft((d) => ({ ...d, body: e.target.value }))}
              />
            </div>

            <div className={styles.modalFooter}>
              <button type="button" className={styles.secondaryButton} onClick={closeEditor}>
                Cancel
              </button>
              <button type="button" className={styles.primaryButton} onClick={saveTemplate}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

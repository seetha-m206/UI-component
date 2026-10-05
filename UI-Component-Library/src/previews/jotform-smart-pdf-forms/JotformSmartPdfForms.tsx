import { useEffect, useId, useRef, useState } from 'react';
import styles from './JotformSmartPdfForms.module.css';

export type SmartPdfMode = 'upload' | 'build' | 'settings' | 'publish';
export type SmartPdfView = 'form' | 'preview';

export interface SmartPdfInitialValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  dateOfBirth?: string;
  dateSigned?: string;
  checkboxOptions?: string[];
  signed?: boolean;
}

export interface JotformSmartPdfFormsProps {
  /** Which mode tab is active on mount. Defaults to 'upload'. */
  initialMode?: SmartPdfMode;
  /**
   * Skips straight past the upload pipeline as if a document had already
   * been converted — used by the BUILD and Preview PDF fixtures so they
   * don't have to replay the animation first.
   */
  initialFormGenerated?: boolean;
  /** Opens directly on the Preview PDF round-trip view instead of the live form. */
  initialView?: SmartPdfView;
  /** Pre-fills the generated form's field values. */
  initialValues?: SmartPdfInitialValues;
  /**
   * Delay (ms) between each of the 4 simulated pipeline steps. Kept small in
   * tests; the default approximates the felt pacing of the real product's
   * upload → convert animation without being a literal timing capture.
   */
  stepDelayMs?: number;
  disabled?: boolean;
}

const PIPELINE_STEPS = [
  'Processing your document',
  'Detecting fields and content',
  'Building your online form',
  'Finalizing everything…',
];

const CHECKBOX_OPTIONS = ['Sign me up for the weekly newsletter', 'I agree to the Terms & Conditions'];

const MODE_TABS: SmartPdfMode[] = ['upload', 'build', 'settings', 'publish'];

function formatTimestamp(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(
    date.getHours()
  )}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

/**
 * Reconstructed from JotForm's Smart PDF Forms feature (see
 * Research-Library/04-Component-Library/jotform/jotform-smart-pdf-forms.md,
 * JF9, 2026-10-05).
 *
 * Confirmed and reproduced faithfully:
 * - The distinct dark-navy 4-tab UPLOAD / BUILD / SETTINGS / PUBLISH mode bar
 *   (differentiated from Form Builder's own orange bar and Jotform Sign's
 *   green bar, per the source record).
 * - The 4-step sequential "AI pipeline" checklist shown on upload
 *   ("Processing your document" → "Detecting fields and content" →
 *   "Building your online form" → "Finalizing everything…"), landing on
 *   BUILD once complete.
 * - The confirmed field-inference accuracy test: a compound Full Name field
 *   (First Name + Last Name sub-inputs), an Email field, two Date fields,
 *   and — the confirmed real semantic nuance, reproduced deliberately, not
 *   "fixed" — two independently-labeled checkbox lines from the source
 *   document merged into ONE multi-option Checkbox field rather than two
 *   separate boolean fields.
 * - The confirmed round-trip fidelity on "Preview PDF": the split First
 *   Name / Last Name values are shown re-merged into one "{First} {Last}"
 *   line, and a drawn signature gets an unprompted "Signed at: {timestamp}"
 *   audit stamp beneath it.
 * - The confirmed minor friction point: returning from Preview PDF back to
 *   the live form clears the drawn signature (it has to be redrawn before a
 *   real submission) — reproduced here rather than "improved."
 *
 * Deliberate scope reduction (see this folder's README): the upload step is
 * fully simulated. No file is read or parsed — clicking "Upload a Document"
 * runs a timed checklist animation and then reveals a hardcoded fixture
 * result, matching this codebase's established "reconstruction, not live
 * AI" precedent (e.g. jotform-app-shell-builder, typeform-ai-chat-to-create).
 */
export function JotformSmartPdfForms({
  initialMode = 'upload',
  initialFormGenerated = false,
  initialView = 'form',
  initialValues,
  stepDelayMs = 450,
  disabled = false,
}: JotformSmartPdfFormsProps) {
  const [mode, setMode] = useState<SmartPdfMode>(initialMode);
  const [formGenerated, setFormGenerated] = useState(initialFormGenerated);
  const [view, setView] = useState<SmartPdfView>(initialView);
  const [running, setRunning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(0);

  const [firstName, setFirstName] = useState(initialValues?.firstName ?? '');
  const [lastName, setLastName] = useState(initialValues?.lastName ?? '');
  const [email, setEmail] = useState(initialValues?.email ?? '');
  const [dateOfBirth, setDateOfBirth] = useState(initialValues?.dateOfBirth ?? '');
  const [dateSigned, setDateSigned] = useState(initialValues?.dateSigned ?? '');
  const [checkboxSelections, setCheckboxSelections] = useState<string[]>(
    initialValues?.checkboxOptions ?? []
  );
  const [signed, setSigned] = useState(Boolean(initialValues?.signed));
  const [signedAt, setSignedAt] = useState<Date | null>(initialValues?.signed ? new Date() : null);
  const [submitted, setSubmitted] = useState(false);

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const titleId = useId();

  useEffect(() => {
    return () => {
      timers.current.forEach(clearTimeout);
    };
  }, []);

  function startUpload() {
    if (disabled || running) return;
    setSubmitted(false);
    setRunning(true);
    setCompletedSteps(0);
    PIPELINE_STEPS.forEach((_, index) => {
      const timer = setTimeout(() => {
        setCompletedSteps(index + 1);
        if (index === PIPELINE_STEPS.length - 1) {
          setRunning(false);
          setFormGenerated(true);
          setMode('build');
        }
      }, stepDelayMs * (index + 1));
      timers.current.push(timer);
    });
  }

  function resetUpload() {
    if (disabled) return;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setRunning(false);
    setCompletedSteps(0);
    setFormGenerated(false);
    setView('form');
    setMode('upload');
    setFirstName('');
    setLastName('');
    setEmail('');
    setDateOfBirth('');
    setDateSigned('');
    setCheckboxSelections([]);
    setSigned(false);
    setSignedAt(null);
    setSubmitted(false);
  }

  function selectMode(next: SmartPdfMode) {
    if (disabled) return;
    if (next !== 'upload' && !formGenerated) return;
    setMode(next);
  }

  function toggleCheckboxOption(option: string) {
    if (disabled) return;
    setCheckboxSelections((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  }

  function toggleSignature() {
    if (disabled) return;
    setSigned((prev) => {
      const next = !prev;
      setSignedAt(next ? new Date() : null);
      return next;
    });
  }

  function openPreview() {
    if (disabled) return;
    setView('preview');
  }

  function backToForm() {
    if (disabled) return;
    // Confirmed real friction point, reproduced deliberately: returning from
    // Preview PDF clears the drawn signature rather than preserving it.
    setSigned(false);
    setSignedAt(null);
    setView('form');
  }

  function handleSubmit() {
    if (disabled) return;
    setSubmitted(true);
  }

  const fullName = `${firstName} ${lastName}`.trim();

  return (
    <div className={styles.root} data-disabled={disabled}>
      <div className={styles.modeTabBar} role="tablist" aria-label="Smart PDF Forms mode">
        {MODE_TABS.map((tab) => {
          const tabDisabled = disabled || (tab !== 'upload' && !formGenerated);
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={mode === tab}
              aria-disabled={tabDisabled}
              className={mode === tab ? `${styles.modeTab} ${styles.modeTabActive}` : styles.modeTab}
              disabled={tabDisabled}
              onClick={() => selectMode(tab)}
            >
              {tab.toUpperCase()}
            </button>
          );
        })}
      </div>

      <div className={styles.body}>
        {mode === 'upload' && (
          <div className={styles.uploadPane}>
            {!formGenerated && !running && (
              <>
                <p className={styles.uploadHint}>
                  Upload a PDF, DOCX, JPEG, PNG, or HEIC document and Smart PDF Forms converts it into a
                  fillable online form.
                </p>
                <button type="button" className={styles.uploadButton} onClick={startUpload} disabled={disabled}>
                  Upload a Document
                </button>
              </>
            )}

            {running && (
              <ul className={styles.pipelineList} aria-live="polite">
                {PIPELINE_STEPS.map((step, index) => {
                  const done = index < completedSteps;
                  const current = index === completedSteps;
                  return (
                    <li
                      key={step}
                      className={styles.pipelineItem}
                      data-done={done}
                      data-current={current}
                    >
                      <span className={styles.pipelineCheck} aria-hidden="true">
                        {done ? '✓' : current ? '…' : ''}
                      </span>
                      <span>{step}</span>
                    </li>
                  );
                })}
              </ul>
            )}

            {formGenerated && !running && (
              <div className={styles.uploadDone}>
                <ul className={styles.pipelineList}>
                  {PIPELINE_STEPS.map((step) => (
                    <li key={step} className={styles.pipelineItem} data-done="true">
                      <span className={styles.pipelineCheck} aria-hidden="true">
                        ✓
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" className={styles.secondaryButton} onClick={resetUpload} disabled={disabled}>
                  Upload a different document
                </button>
              </div>
            )}
          </div>
        )}

        {mode === 'build' && formGenerated && view === 'form' && (
          <div className={styles.buildPane}>
            {submitted && (
              <div className={styles.successBanner} role="status">
                Thank You! Your submission has been received.
              </div>
            )}
            <h3 id={titleId} className={styles.formTitle}>
              Coffee Club Membership Signup
            </h3>

            <fieldset className={styles.fieldGroup}>
              <legend>Full Name</legend>
              <div className={styles.fieldRow}>
                <label className={styles.subField}>
                  First Name
                  <input
                    type="text"
                    value={firstName}
                    disabled={disabled}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className={styles.subField}>
                  Last Name
                  <input
                    type="text"
                    value={lastName}
                    disabled={disabled}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </div>
            </fieldset>

            <label className={styles.field}>
              Email Address
              <input
                type="email"
                placeholder="example@example.com"
                value={email}
                disabled={disabled}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className={styles.field}>
              Date of Birth
              <input
                type="date"
                value={dateOfBirth}
                disabled={disabled}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </label>

            {/* Confirmed real semantic quirk, reproduced deliberately: both
                source checkbox lines became ONE multi-option field, not two
                independent boolean fields. */}
            <fieldset className={styles.fieldGroup}>
              <legend>Checkbox</legend>
              {CHECKBOX_OPTIONS.map((option) => (
                <label key={option} className={styles.checkboxOption}>
                  <input
                    type="checkbox"
                    checked={checkboxSelections.includes(option)}
                    disabled={disabled}
                    onChange={() => toggleCheckboxOption(option)}
                  />
                  {option}
                </label>
              ))}
            </fieldset>

            <div className={styles.field}>
              <span className={styles.fieldLabel}>Signature</span>
              {signed ? (
                <div className={styles.signatureBlock}>
                  <span className={styles.signatureMark}>{fullName || 'Signed'}</span>
                  <button type="button" className={styles.secondaryButton} onClick={toggleSignature} disabled={disabled}>
                    Clear
                  </button>
                </div>
              ) : (
                <button type="button" className={styles.signaturePad} onClick={toggleSignature} disabled={disabled}>
                  ✍ Click to draw your signature
                </button>
              )}
            </div>

            <label className={styles.field}>
              Date Signed
              <input
                type="date"
                value={dateSigned}
                disabled={disabled}
                onChange={(e) => setDateSigned(e.target.value)}
              />
            </label>

            <div className={styles.actionsRow}>
              <button type="button" className={styles.previewButton} onClick={openPreview} disabled={disabled}>
                Preview PDF
              </button>
              <button type="button" className={styles.submitButton} onClick={handleSubmit} disabled={disabled}>
                Submit
              </button>
            </div>
          </div>
        )}

        {mode === 'build' && formGenerated && view === 'preview' && (
          <div className={styles.previewPane}>
            <p className={styles.previewNotice}>
              Preview PDF — a live, not-yet-submitted rendering merged back into the original document's
              layout.
            </p>
            <div className={styles.previewDocument}>
              <h3 className={styles.previewTitle}>Coffee Club Membership Signup</h3>
              {/* Confirmed round-trip fidelity: the split First Name / Last
                  Name fields are re-merged into one line here, matching the
                  source document's original single "Full Name:" line. */}
              <p className={styles.previewLine}>Full Name: {fullName || '—'}</p>
              <p className={styles.previewLine}>Email Address: {email || '—'}</p>
              <p className={styles.previewLine}>Date of Birth: {dateOfBirth || '—'}</p>
              <p className={styles.previewLine}>
                Checkbox:{' '}
                {checkboxSelections.length > 0 ? checkboxSelections.join(', ') : '—'}
              </p>
              <p className={styles.previewLine}>Date Signed: {dateSigned || '—'}</p>
              <div className={styles.previewSignatureBlock}>
                <p className={styles.previewLine}>
                  Signature: {signed ? fullName || 'Signed' : 'Not yet signed'}
                </p>
                {signed && signedAt && (
                  <p className={styles.signatureStamp}>Signed at: {formatTimestamp(signedAt)}</p>
                )}
              </div>
            </div>
            <button type="button" className={styles.secondaryButton} onClick={backToForm} disabled={disabled}>
              Back to Form
            </button>
          </div>
        )}

        {mode === 'settings' && formGenerated && (
          <div className={styles.settingsPane}>
            <h4 className={styles.settingsHeading}>Form Settings</h4>
            <label className={styles.settingsRow}>
              <input type="checkbox" defaultChecked disabled={disabled} />
              Uploaded document connection to your Online Form
            </label>
            <label className={styles.settingsRow}>
              <input type="checkbox" defaultChecked disabled={disabled} />
              Show the document thumbnail on the welcome page
            </label>
            <label className={styles.settingsRow}>
              <input type="checkbox" defaultChecked disabled={disabled} />
              Enable Preview PDF button at the end of the form
            </label>
            <label className={styles.settingsRow}>
              <input type="checkbox" disabled={disabled} />
              Add download PDF button on thank you page
            </label>
          </div>
        )}

        {mode === 'publish' && formGenerated && (
          <div className={styles.publishPane}>
            <p>Publish this form the same way as any other Jotform — Quick Share, Embed, or Platforms.</p>
            <p className={styles.previewNotice}>
              Once published, submissions can be downloaded per-row as the filled "Original PDF," matching
              this filename pattern setting from SETTINGS.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

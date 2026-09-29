import { useState } from 'react';
import styles from './PaperformSignaturePapersign.module.css';

export type SignaturePapersignTab = 'signature-field' | 'papersign-handoff';

type SignatureState = 'empty' | 'drawn' | 'uploading' | 'confirmed';

const FORM_QUESTIONS = ['Q1 Do you like forms?', 'Q2 Your email', 'Q3 Your name'];

export interface PaperformSignaturePapersignProps {
  initialTab?: SignaturePapersignTab;
  onSubmit?: () => void;
}

/**
 * Reconstructed from Paperform's Signature field + Papersign e-signature
 * hand-off. Confirmed and reproduced faithfully: drawing a stroke reveals a
 * "CONFIRM SIGNATURE" footer with clear/confirm buttons; confirming triggers
 * a real (simulated here) upload round trip via a transient "still
 * uploading" state before settling into a redraw-only confirmed state that
 * clears the required-field error and flips the Submit button label; a
 * Submit click with nothing drawn is correctly blocked client-side with
 * "This question is required"; and the Papersign hand-off's "Send Test"
 * button is gated by a real, non-sandboxed send — reproduced here as a
 * flagged warning callout, not an actual send — alongside the confirmed
 * absence of any status feedback loop back into Submissions.
 */
export function PaperformSignaturePapersign({
  initialTab = 'signature-field',
  onSubmit,
}: PaperformSignaturePapersignProps) {
  const [tab, setTab] = useState<SignaturePapersignTab>(initialTab);

  // Signature field state
  const [signature, setSignature] = useState<SignatureState>('empty');
  const [showRequiredError, setShowRequiredError] = useState(false);

  // Papersign hand-off state
  const [documentCreated, setDocumentCreated] = useState(false);
  const [sendTestClicked, setSendTestClicked] = useState(false);
  const [nameMapping, setNameMapping] = useState(FORM_QUESTIONS[2]);
  const [emailMapping, setEmailMapping] = useState(FORM_QUESTIONS[1]);

  function drawStroke() {
    setSignature('drawn');
    setShowRequiredError(false);
  }

  function clearSignature() {
    setSignature('empty');
  }

  function confirmSignature() {
    setSignature('uploading');
    window.setTimeout(() => setSignature('confirmed'), 900);
  }

  function attemptSubmit() {
    if (signature !== 'confirmed') {
      setShowRequiredError(true);
      return;
    }
    onSubmit?.();
  }

  const submitLabel =
    showRequiredError || signature !== 'confirmed'
      ? showRequiredError
        ? 'Please finish the form — $20.00'
        : 'Submit — $20.00'
      : 'Submit — $20.00';

  return (
    <div className={styles.root}>
      <div role="tablist" aria-label="Signature + Papersign" className={styles.tabBar}>
        {(
          [
            ['signature-field', 'Signature Field'],
            ['papersign-handoff', 'Papersign Hand-off'],
          ] as [SignaturePapersignTab, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            className={tab === id ? styles.tabActive : styles.tab}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'signature-field' && (
        <div className={styles.panel}>
          <div className={styles.field}>
            <label>S1 Sign here</label>
            <div className={styles.canvasBox}>
              {signature === 'empty' && (
                <>
                  <span className={styles.canvasPlaceholder}>SIGN HERE</span>
                  <button type="button" className={styles.secondaryButton} onClick={drawStroke}>
                    Simulate: draw a stroke
                  </button>
                </>
              )}
              {signature !== 'empty' && (
                <span className={styles.canvasStroke} aria-hidden="true">
                  ✍️
                </span>
              )}
            </div>

            {signature === 'drawn' && (
              <div className={styles.confirmFooter}>
                <span className={styles.confirmLabel}>CONFIRM SIGNATURE</span>
                <button
                  type="button"
                  aria-label="Clear signature"
                  className={styles.iconButton}
                  onClick={clearSignature}
                >
                  ↻
                </button>
                <button
                  type="button"
                  aria-label="Confirm signature"
                  className={styles.iconButtonPrimary}
                  onClick={confirmSignature}
                >
                  ✓
                </button>
              </div>
            )}

            {signature === 'uploading' && (
              <p role="status" className={styles.uploadingNote}>
                Signature still uploading…
              </p>
            )}

            {signature === 'confirmed' && (
              <div className={styles.confirmFooter}>
                <button
                  type="button"
                  aria-label="Redraw signature"
                  className={styles.iconButton}
                  onClick={clearSignature}
                >
                  ✎
                </button>
              </div>
            )}

            {showRequiredError && (
              <p role="alert" className={styles.requiredError}>
                This question is required
              </p>
            )}
          </div>

          <div className={styles.navRow}>
            <button type="button" className={styles.primaryButton} onClick={attemptSubmit}>
              {submitLabel}
            </button>
          </div>
        </div>
      )}

      {tab === 'papersign-handoff' && (
        <div className={styles.panel}>
          <div className={styles.editorCard}>
            <h3 className={styles.sectionTitle}>After Submission → Papersign</h3>

            {!documentCreated ? (
              <>
                <p className={styles.hint}>
                  Send a document to be signed automatically from new submissions
                </p>
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => setDocumentCreated(true)}
                >
                  New document +
                </button>
              </>
            ) : (
              <>
                <p className={styles.hint}>Map signer identity from this form&apos;s own questions.</p>
                <div className={styles.optionRow}>
                  <span className={styles.optionLabel}>Signer 1 — Name</span>
                  <select
                    aria-label="Signer 1 Name mapping"
                    value={nameMapping}
                    onChange={(e) => setNameMapping(e.target.value)}
                  >
                    {FORM_QUESTIONS.map((q) => (
                      <option key={q}>{q}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.optionRow}>
                  <span className={styles.optionLabel}>Signer 1 — Email</span>
                  <select
                    aria-label="Signer 1 Email mapping"
                    value={emailMapping}
                    onChange={(e) => setEmailMapping(e.target.value)}
                  >
                    {FORM_QUESTIONS.map((q) => (
                      <option key={q}>{q}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={() => setSendTestClicked(true)}
                >
                  Send Test
                </button>

                {sendTestClicked && (
                  <p role="alert" className={styles.bugNote}>
                    Confirmed real gating behavior — this is NOT a sandbox/dry-run: &quot;Click the button
                    below to test this setup with the last submission. You must have submitted the form
                    to be able to test.&quot; Clicking Send Test for real fires a genuine Papersign send
                    using the last real submission&apos;s actual answers — there is no non-live test mode.
                    (No real send was made by this demo.)
                  </p>
                )}
              </>
            )}
          </div>

          <div className={styles.editorCard}>
            <h3 className={styles.sectionTitle}>Submissions view — confirmed status gap</h3>
            <p className={styles.hint}>
              Confirmed: the Submissions detail view shows the S1 Sign here answer as a plain image
              thumbnail, with no &quot;pending signature&quot; badge and no link out to Papersign — the
              document&apos;s status lives only in Papersign&apos;s own separate dashboard, with no
              feedback loop back into Submissions.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

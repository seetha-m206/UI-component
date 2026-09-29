import { useEffect, useRef, useState } from 'react';
import styles from './GoogleFormsFeedbackPatterns.module.css';

export type SaveStatus = 'idle' | 'saving' | 'saved';

export interface GoogleFormsFeedbackPatternsProps {
  disabled?: boolean;
  onDeleteQuestion?: () => void;
  onDeleteForm?: () => void;
  onDeleteSection?: () => void;
  onUnlinkForm?: () => void;
}

/**
 * Reconstructed from Google Forms' Feedback patterns (see
 * Research-Library/04-Component-Library/google-forms/google-forms-feedback-patterns.md,
 * GF10, 2026-09-28).
 *
 * Confirmed and reproduced faithfully: TWO distinct, easily-conflated
 * notification mechanisms — a persistent save-status line that never
 * auto-dismisses (only restarts on the next edit) and a snackbar toast that
 * ALSO never auto-dismisses on any observed timer (the source confirmed it
 * on-screen after 17+ seconds and an in-app tab switch) — reproduced here
 * with no dismiss timer on the toast, only a manual close; both carry no
 * role/aria-live, reproduced as a deliberate accessibility gap, not fixed.
 * The confirmed scope-of-consequence modal-gating rule is reproduced
 * exactly: deleting a single question skips any modal and goes straight to
 * the toast, while deleting a whole form or a whole section opens a
 * confirmation modal first. The inline required-field error is reproduced
 * with a real role="alert". "Unlink form" is reproduced as a genuinely
 * silent action (no toast, no banner) per the confirmed finding. The
 * confirmed-real "Blank form isn't actually empty" and "empty state always
 * shows a loading spinner first" findings are both reproduced in the
 * Responses-tab demo.
 *
 * Scope notes: the visual tooltip bubble itself could not be observed in
 * the source (a captured limitation, not a confirmed absence) and is not
 * reconstructed here — only the underlying aria-label/data-tooltip pairing
 * is demonstrated via a native title-less button with a matching aria-label.
 * No network calls are made by this client-side preview.
 */
export function GoogleFormsFeedbackPatterns({
  disabled = false,
  onDeleteQuestion,
  onDeleteForm,
  onDeleteSection,
  onUnlinkForm,
}: GoogleFormsFeedbackPatternsProps) {
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
  const [toast, setToast] = useState<string | null>(null);
  const [dashboardModalOpen, setDashboardModalOpen] = useState(false);
  const [sectionModalOpen, setSectionModalOpen] = useState(false);
  const [requiredErrorVisible, setRequiredErrorVisible] = useState(false);
  const [responsesView, setResponsesView] = useState<'idle' | 'loading' | 'empty'>('idle');
  const [linked, setLinked] = useState(true);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, []);

  function editField() {
    if (disabled) return;
    setSaveStatus('saving');
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => setSaveStatus('saved'), 500);
  }

  function deleteQuestion() {
    if (disabled) return;
    setToast('Item deleted');
    onDeleteQuestion?.();
  }

  function confirmDeleteForm() {
    setDashboardModalOpen(false);
    setToast('Moved to trash');
    onDeleteForm?.();
  }

  function confirmDeleteSection() {
    setSectionModalOpen(false);
    onDeleteSection?.();
  }

  function submitBlankRequired() {
    if (disabled) return;
    setRequiredErrorVisible(true);
  }

  function viewResponses() {
    if (disabled) return;
    setResponsesView('loading');
    setTimeout(() => setResponsesView('empty'), 500);
  }

  function unlinkForm() {
    if (disabled) return;
    setLinked(false);
    onUnlinkForm?.();
  }

  return (
    <div className={styles.root} data-disabled={disabled}>
      <section className={styles.panel} aria-label="Toast and save status">
        <h3 className={styles.panelTitle}>Toast / notification</h3>
        <div className={styles.saveStatus} data-save-status={saveStatus}>
          {saveStatus === 'idle' && 'Untitled form'}
          {saveStatus === 'saving' && 'Saving…'}
          {saveStatus === 'saved' && 'All changes saved in Drive'}
        </div>
        <div className={styles.buttonRow}>
          <button type="button" disabled={disabled} onClick={editField}>
            Edit a field
          </button>
          <button type="button" disabled={disabled} onClick={deleteQuestion}>
            Delete question (trash-can icon)
          </button>
        </div>
      </section>

      <section className={styles.panel} aria-label="Confirmation modals">
        <h3 className={styles.panelTitle}>Confirmation modal — gated by scope of consequence</h3>
        <div className={styles.buttonRow}>
          <button type="button" disabled={disabled} onClick={() => setDashboardModalOpen(true)}>
            Delete form (dashboard)
          </button>
          <button type="button" disabled={disabled} onClick={() => setSectionModalOpen(true)}>
            Delete section
          </button>
        </div>
      </section>

      <section className={styles.panel} aria-label="Validation">
        <h3 className={styles.panelTitle}>Inline validation error</h3>
        <div className={styles.buttonRow}>
          <button type="button" disabled={disabled} onClick={submitBlankRequired}>
            Submit blank required question
          </button>
        </div>
        {requiredErrorVisible && (
          <p className={styles.inlineError} role="alert">
            ⚠ This is a required question
          </p>
        )}
      </section>

      <section className={styles.panel} aria-label="Empty and loading states">
        <h3 className={styles.panelTitle}>Empty state / loading state</h3>
        <div className={styles.buttonRow}>
          <button type="button" disabled={disabled} onClick={viewResponses}>
            Open Responses tab (0 responses)
          </button>
          <button type="button" disabled={disabled} onClick={unlinkForm}>
            Unlink form (no feedback at all)
          </button>
        </div>
        {responsesView === 'loading' && (
          <p className={styles.loadingRow}>
            <span className={styles.spinner} aria-hidden="true" /> Loading responses…
          </p>
        )}
        {responsesView === 'empty' && (
          <p className={styles.emptyState}>No responses. Publish your form to start accepting responses.</p>
        )}
        <p className={styles.linkStatus}>
          {linked ? 'View in Sheets' : 'Link to Sheets'} (unlink gives no toast/banner)
        </p>
      </section>

      {toast && (
        <div className={styles.toast} role="status" aria-label="Notification (no role/aria-live in source)">
          <span>{toast}</span>
          {toast === 'Item deleted' && <button type="button">UNDO</button>}
          <button type="button" aria-label="Dismiss notification" onClick={() => setToast(null)}>
            ×
          </button>
        </div>
      )}

      {dashboardModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal} role="alertdialog" aria-labelledby="gf-trash-title">
            <h2 id="gf-trash-title">Move to trash?</h2>
            <p>&ldquo;Untitled form&rdquo; will be moved to Drive trash and deleted forever after 30 days.</p>
            <p>
              If this file is shared, collaborators can still make a copy of it until it&apos;s permanently
              deleted.
            </p>
            <div className={styles.modalActions}>
              <button type="button" onClick={() => setDashboardModalOpen(false)}>
                Cancel
              </button>
              <button type="button" className={styles.primaryButton} onClick={confirmDeleteForm}>
                Move to trash
              </button>
            </div>
          </div>
        </div>
      )}

      {sectionModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal} role="alertdialog" aria-labelledby="gf-section-title">
            <h2 id="gf-section-title">Delete questions and section?</h2>
            <p>
              Deleting a section also deletes the questions and responses it contains. To preserve the
              questions, choose &ldquo;Merge section up&rdquo; from the section options.
            </p>
            <div className={styles.modalActions}>
              <button type="button" onClick={() => setSectionModalOpen(false)}>
                Cancel
              </button>
              <button type="button" className={styles.primaryButton} onClick={confirmDeleteSection}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

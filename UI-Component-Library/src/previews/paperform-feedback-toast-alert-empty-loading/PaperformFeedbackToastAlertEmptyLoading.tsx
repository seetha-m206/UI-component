import { useEffect, useRef, useState } from 'react';
import styles from './PaperformFeedbackToastAlertEmptyLoading.module.css';

export interface PaperformFeedbackToastAlertEmptyLoadingProps {
  disabled?: boolean;
  onRestoreForm?: () => void;
  onExportSubmissions?: () => void;
  onDeleteSubmission?: () => void;
  onDeleteForm?: () => void;
}

/**
 * Reconstructed from Paperform's Feedback family — Toast, two destructive-
 * confirm modals, Alert/upsell modal, Empty state, Loading state (see
 * Research-Library/04-Component-Library/paperform/paperform-feedback-toast-alert-empty-loading.md,
 * PF14, 2026-09-28).
 *
 * Confirmed and reproduced faithfully: exactly ONE toast component
 * (`PFToast`, styled full-width/bottom, no close button, auto-dismissing) —
 * reserved for success/status only. There is deliberately NO error-toast
 * path reproduced here, matching the confirmed finding that Paperform's
 * validation/submission errors always use inline messaging instead. The two
 * confirmed-real, structurally DIFFERENT destructive-confirm modals are
 * both reproduced with visibly different styling (a titled, primary-colored
 * MUI-style dialog for submission delete vs. a title-less, plain-pill-button
 * bespoke dialog for form delete) — and, critically, form-delete is
 * reproduced giving NO toast on confirm, while submission-restore DOES
 * toast, per the confirmed asymmetry. The richer Alert/upsell modal (icon +
 * headline/subtext + two asymmetric CTAs) is reproduced as a fourth, visibly
 * distinct pattern from the two plain confirm dialogs. The empty-state and
 * skeleton-loading patterns are reproduced as toggleable demo states.
 *
 * Scope notes: real Stripe/plan billing is not reconstructed — the
 * "Upgrade" CTA is a callback only. No network calls are made by this
 * client-side preview.
 */
export function PaperformFeedbackToastAlertEmptyLoading({
  disabled = false,
  onRestoreForm,
  onExportSubmissions,
  onDeleteSubmission,
  onDeleteForm,
}: PaperformFeedbackToastAlertEmptyLoadingProps) {
  const [toast, setToast] = useState<string | null>(null);
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  function fireToast(message: string) {
    setToast(message);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => setToast(null), 2000);
  }

  function restoreForm() {
    if (disabled) return;
    fireToast('Restored form');
    onRestoreForm?.();
  }

  function exportSubmissions() {
    if (disabled) return;
    fireToast('Exporting submissions. Please check your downloads window.');
    onExportSubmissions?.();
  }

  function confirmDeleteSubmission() {
    setSubmissionModalOpen(false);
    onDeleteSubmission?.();
    // Confirmed: no toast/feedback was observed for this action in the
    // source (it was cancelled before confirming) — no toast fired here.
  }

  function confirmDeleteForm() {
    setFormModalOpen(false);
    onDeleteForm?.();
    // Confirmed: silent removal, no toast, no banner — deliberately not
    // fired here, unlike restoreForm() above.
  }

  return (
    <div className={styles.root} data-disabled={disabled}>
      <section className={styles.panel} aria-label="Toast">
        <h3 className={styles.panelTitle}>Toast — success/status only, no error variant</h3>
        <div className={styles.buttonRow}>
          <button type="button" disabled={disabled} onClick={restoreForm}>
            Restore form from Trash
          </button>
          <button type="button" disabled={disabled} onClick={exportSubmissions}>
            Export submissions
          </button>
        </div>
      </section>

      <section className={styles.panel} aria-label="Destructive confirm modals">
        <h3 className={styles.panelTitle}>Two structurally different confirm modals</h3>
        <div className={styles.buttonRow}>
          <button type="button" disabled={disabled} onClick={() => setSubmissionModalOpen(true)}>
            Delete submission (MUI-style)
          </button>
          <button type="button" disabled={disabled} onClick={() => setFormModalOpen(true)}>
            Delete form (bespoke, no toast on confirm)
          </button>
        </div>
      </section>

      <section className={styles.panel} aria-label="Alert / upsell modal">
        <h3 className={styles.panelTitle}>Alert / plan-limit upsell modal</h3>
        <div className={styles.buttonRow}>
          <button type="button" disabled={disabled} onClick={() => setAlertOpen(true)}>
            Create a 2nd Space (over plan limit)
          </button>
        </div>
      </section>

      <section className={styles.panel} aria-label="Empty and loading states">
        <h3 className={styles.panelTitle}>Empty state / loading state</h3>
        <div className={styles.buttonRow}>
          <button
            type="button"
            disabled={disabled}
            onClick={() => {
              setShowLoading(true);
              setTimeout(() => {
                setShowLoading(false);
                setShowEmptyState(true);
              }, 500);
            }}
          >
            Open submission detail panel
          </button>
        </div>
        {showLoading && (
          <div className={styles.skeletonPanel} aria-label="Loading submission detail">
            <div className={styles.skeletonBar} />
            <div className={styles.skeletonBlock} />
          </div>
        )}
        {showEmptyState && <p className={styles.emptyState}>No submissions found</p>}
      </section>

      {toast && (
        <div className={styles.toast} role="status">
          {toast}
        </div>
      )}

      {submissionModalOpen && (
        <div className={styles.overlay}>
          <div className={`${styles.modal} ${styles.muiStyleModal}`} role="alertdialog" aria-labelledby="pf-sub-title">
            <h2 id="pf-sub-title">Delete Submission</h2>
            <p>Are you sure you want to delete this submission?</p>
            <div className={styles.modalActions}>
              <button type="button" className={styles.outlinedButton} onClick={() => setSubmissionModalOpen(false)}>
                Cancel
              </button>
              <button type="button" className={styles.primaryButton} onClick={confirmDeleteSubmission}>
                Ok
              </button>
            </div>
          </div>
        </div>
      )}

      {formModalOpen && (
        <div className={styles.overlay}>
          <div className={`${styles.modal} ${styles.bespokeModal}`} role="alertdialog" aria-label="Delete form confirmation">
            <p>Are you sure you want to delete this form?</p>
            <div className={styles.modalActions}>
              <button type="button" className={styles.pillButtonLight} onClick={() => setFormModalOpen(false)}>
                Cancel
              </button>
              <button type="button" className={styles.pillButtonDark} onClick={confirmDeleteForm}>
                Ok
              </button>
            </div>
          </div>
        </div>
      )}

      {alertOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal} role="alertdialog" aria-labelledby="pf-alert-title">
            <p className={styles.alertEyebrow}>Platform · Billing</p>
            <h2 id="pf-alert-title">⚠ You&apos;ve reached your Spaces limit</h2>
            <p>Upgrade your plan to create additional Spaces for your team.</p>
            <div className={styles.modalActions}>
              <button type="button" className={styles.outlinedButton} onClick={() => setAlertOpen(false)}>
                Maybe later
              </button>
              <button type="button" className={styles.primaryButton} onClick={() => setAlertOpen(false)}>
                Upgrade to Business — $1,488/year
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

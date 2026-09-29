import { useEffect, useRef, useState } from 'react';
import styles from './TypeformFeedbackPatterns.module.css';

export interface TypeformFeedbackPatternsProps {
  disabled?: boolean;
  onDeleteForm?: () => void;
  onDeleteQuestion?: () => void;
  onSaveWebhook?: (url: string) => void;
}

/**
 * Reconstructed from Typeform's Feedback patterns (see
 * Research-Library/04-Component-Library/typeform/typeform-feedback-patterns.md,
 * AL2, 2026-09-28).
 *
 * Confirmed and reproduced faithfully: a real, stark severity gap in
 * destructive-confirm coverage — whole-form delete opens a rich itemized
 * `dialog`-role modal with a genuine red "Delete" button and an in-place
 * "Deleting..." loading label, while deleting a single question in the
 * Pages rail happens instantly with NO modal, NO toast, and NO undo,
 * reproduced exactly as that asymmetry (not smoothed into a lighter
 * confirmation for the question case). The success toast auto-dismisses
 * (~4-6s window from the source, here on a fixed timer within that range)
 * with a working manual close. The confirmed SILENT FAILURE — a
 * syntactically valid but unreachable webhook URL appears to save
 * successfully (dialog closes normally) but never persists, with zero
 * user-facing signal — is reproduced deliberately: the demo "Webhooks"
 * list stays empty after "saving" that specific URL, exactly matching the
 * confirmed real defect, while a malformed URL is correctly caught by
 * inline validation before ever reaching that path. Three empty states
 * (Webhooks/Responses/new-workspace) are reproduced with their own
 * distinct copy/CTA-count per the confirmed "not one shared component"
 * finding.
 *
 * Scope notes: the visual entrance animation on the toast (a subtle
 * horizontal shift, not conclusively isolated in the source) is not
 * reconstructed. No network calls are made by this client-side preview —
 * the "silent failure" is simulated via a hardcoded unreachable-URL string
 * match, not a real network attempt.
 */
export function TypeformFeedbackPatterns({
  disabled = false,
  onDeleteForm,
  onDeleteQuestion,
  onSaveWebhook,
}: TypeformFeedbackPatternsProps) {
  const [toastVisible, setToastVisible] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [formDeleted, setFormDeleted] = useState(false);
  const [questionDeleted, setQuestionDeleted] = useState(false);
  const [webhookDialogOpen, setWebhookDialogOpen] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [webhookError, setWebhookError] = useState<string | null>(null);
  const [webhooks, setWebhooks] = useState<string[]>([]);
  const [emptyStateView, setEmptyStateView] = useState<'webhooks' | 'responses' | 'workspace'>(
    'webhooks'
  );
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  function copyLink() {
    if (disabled) return;
    setToastVisible(true);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => setToastVisible(false), 2000);
  }

  function confirmDeleteForm() {
    setDeleting(true);
    setTimeout(() => {
      setDeleting(false);
      setFormModalOpen(false);
      setFormDeleted(true);
      onDeleteForm?.();
      // Confirmed: no toast follows a successful form delete.
    }, 500);
  }

  function deleteQuestion() {
    if (disabled) return;
    setQuestionDeleted(true);
    onDeleteQuestion?.();
    // Confirmed: no modal, no toast, no undo — nothing else happens here.
  }

  function saveWebhook() {
    if (!/^https?:\/\/.+/.test(webhookUrl)) {
      setWebhookError("Hmm...that URL doesn't look right");
      return;
    }
    setWebhookError(null);
    setWebhookDialogOpen(false);
    onSaveWebhook?.(webhookUrl);
    if (webhookUrl.includes('does-not-exist')) {
      // Confirmed silent failure: dialog closes as if successful, but the
      // webhook is never actually persisted — no toast, no error, nothing.
      setWebhookUrl('');
      return;
    }
    setWebhooks((prev) => [...prev, webhookUrl]);
    setWebhookUrl('');
  }

  return (
    <div className={styles.root} data-disabled={disabled}>
      <section className={styles.panel} aria-label="Toast">
        <h3 className={styles.panelTitle}>Success toast</h3>
        <div className={styles.buttonRow}>
          <button type="button" disabled={disabled} onClick={copyLink}>
            Copy form link
          </button>
        </div>
      </section>

      <section className={styles.panel} aria-label="Confirmation modal severity gap">
        <h3 className={styles.panelTitle}>Confirmation — a severity gap, not a flat rule</h3>
        <div className={styles.buttonRow}>
          <button
            type="button"
            disabled={disabled || formDeleted}
            onClick={() => setFormModalOpen(true)}
          >
            {formDeleted ? 'Form deleted' : 'Delete form (whole-record)'}
          </button>
          <button
            type="button"
            disabled={disabled || questionDeleted}
            onClick={deleteQuestion}
          >
            {questionDeleted ? 'Question deleted (no feedback shown)' : 'Delete question (no modal at all)'}
          </button>
        </div>
      </section>

      <section className={styles.panel} aria-label="Silent failure">
        <h3 className={styles.panelTitle}>Webhook save — confirmed silent failure mode</h3>
        <div className={styles.buttonRow}>
          <button type="button" disabled={disabled} onClick={() => setWebhookDialogOpen(true)}>
            Add a webhook
          </button>
        </div>
        <p className={styles.hint}>
          Try a malformed URL (inline error) vs. one containing &ldquo;does-not-exist&rdquo; (silently
          fails to save, no error shown) vs. any other valid URL (saves normally).
        </p>
        <ul className={styles.webhookList}>
          {webhooks.length === 0 && <li className={styles.emptyItem}>No webhooks yet.</li>}
          {webhooks.map((url) => (
            <li key={url}>{url}</li>
          ))}
        </ul>
      </section>

      <section className={styles.panel} aria-label="Empty states">
        <h3 className={styles.panelTitle}>Empty states — three different designs</h3>
        <div className={styles.buttonRow}>
          <button type="button" disabled={disabled} onClick={() => setEmptyStateView('webhooks')}>
            Webhooks
          </button>
          <button type="button" disabled={disabled} onClick={() => setEmptyStateView('responses')}>
            Responses
          </button>
          <button type="button" disabled={disabled} onClick={() => setEmptyStateView('workspace')}>
            New workspace
          </button>
        </div>
        {emptyStateView === 'webhooks' && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIllustration} aria-hidden="true">
              🔗
            </div>
            <p className={styles.emptyHeading}>Trigger webhooks</p>
            <p className={styles.emptySubtext}>
              Not familiar with webhooks? Just ask your tech team for a hand.
            </p>
            <button type="button" className={styles.emptyCta}>
              Add a webhook
            </button>
          </div>
        )}
        {emptyStateView === 'responses' && (
          <div className={styles.emptyState}>
            <p className={styles.emptyHeading}>No responses</p>
            <p className={styles.emptySubtext}>
              Share your form to start collecting data, or generate sample responses to test your
              workflow
            </p>
            <div className={styles.emptyCtaRow}>
              <button type="button" className={styles.emptyCta}>
                Share your form
              </button>
              <button type="button" className={styles.emptyCtaSecondary}>
                Generate test response
              </button>
            </div>
          </div>
        )}
        {emptyStateView === 'workspace' && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIllustration} aria-hidden="true">
              📄
            </div>
            <p className={styles.emptyHeading}>Create a new form to get started</p>
            <button type="button" className={styles.emptyCta}>
              + Create form
            </button>
          </div>
        )}
      </section>

      {toastVisible && (
        <div className={styles.toast} role="status">
          <span className={styles.toastIcon} aria-hidden="true">
            ✓
          </span>
          <span>Link copied to clipboard</span>
          <button type="button" aria-label="Dismiss notification" onClick={() => setToastVisible(false)}>
            ×
          </button>
        </div>
      )}

      {formModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal} role="alertdialog" aria-labelledby="tf-delete-title">
            <div className={styles.modalHeader}>
              <h2 id="tf-delete-title">Delete form?</h2>
              <button
                type="button"
                aria-label="Close"
                onClick={() => !deleting && setFormModalOpen(false)}
              >
                ×
              </button>
            </div>
            <p>You&apos;re about to delete &ldquo;Customer Feedback Survey&rdquo;.</p>
            <p>This will also:</p>
            <ul>
              <li>Delete all responses collected by this form.</li>
            </ul>
            <p className={styles.irreversible}>This will permanently delete the form.</p>
            <div className={styles.modalActions}>
              <button type="button" onClick={() => setFormModalOpen(false)} disabled={deleting}>
                Cancel
              </button>
              <button type="button" className={styles.dangerButton} onClick={confirmDeleteForm} disabled={deleting}>
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {webhookDialogOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal} role="dialog" aria-labelledby="tf-webhook-title">
            <div className={styles.modalHeader}>
              <h2 id="tf-webhook-title">Add a webhook</h2>
              <button type="button" aria-label="Close" onClick={() => setWebhookDialogOpen(false)}>
                ×
              </button>
            </div>
            <label className={styles.fieldLabel} htmlFor="tf-webhook-url">
              Webhook URL
            </label>
            <input
              id="tf-webhook-url"
              type="text"
              className={webhookError ? `${styles.textInput} ${styles.textInputError}` : styles.textInput}
              value={webhookUrl}
              onChange={(event) => {
                setWebhookUrl(event.currentTarget.value);
                setWebhookError(null);
              }}
              placeholder="https://example.com/webhook"
            />
            {webhookError && <p className={styles.fieldError}>{webhookError}</p>}
            <div className={styles.modalActions}>
              <button type="button" onClick={() => setWebhookDialogOpen(false)}>
                Cancel
              </button>
              <button type="button" className={styles.primaryButton} onClick={saveWebhook}>
                Save webhook
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

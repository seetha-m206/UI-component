import { useState } from 'react';
import styles from '../ahrefs-expanded/ahrefs-expanded.module.css';
export interface AhrefsAccessControlUpgradeModalProps {
  initialOpen?: boolean;
  disabled?: boolean;
}
export function AhrefsAccessControlUpgradeModal({
  initialOpen = true,
  disabled = false,
}: AhrefsAccessControlUpgradeModalProps) {
  const [open, setOpen] = useState(initialOpen);
  const [status, setStatus] = useState('');
  return (
    <div className={styles.root}>
      <div className={styles.shell}>
        <div className={styles.buttonStage}>
          <button
            className={styles.secondary}
            type="button"
            disabled={disabled}
            onClick={() => setOpen(true)}
          >
            Manage access
          </button>
        </div>
        {open && (
          <div className={styles.backdrop}>
            <section
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-labelledby="access-title"
            >
              <button
                className={styles.modalClose}
                type="button"
                aria-label="Close access-control modal"
                disabled={disabled}
                onClick={() => setOpen(false)}
              >
                ×
              </button>
              <h2 id="access-title">Upgrade to unlock access control</h2>
              <p>
                With access control, you can manage who can access what by granting permissions to
                selected team members. This feature is only available on the Enterprise plan.
              </p>
              <button
                className={styles.primary}
                type="button"
                disabled={disabled}
                onClick={() =>
                  setStatus(
                    'Upgrade plan needs verification. No pricing or account action was run.'
                  )
                }
              >
                Upgrade plan
              </button>
              <div className={styles.peopleMock} aria-label="Illustrative team list">
                <span>Alex Morgan</span>
                <span>Jordan Lee · Guest</span>
                <span>Sam Rivera</span>
              </div>
              {status && (
                <p className={styles.status} role="status">
                  {status}
                </p>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

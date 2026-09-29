import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export interface SemrushToastBannerProps {
  initialKind?: 'success' | 'info' | 'warning' | 'error';
  surface?: 'toast' | 'banner';
  initiallyVisible?: boolean;
}

const messages = {
  success: ['Report updated', 'Fresh fictional metrics are ready.'],
  info: ['Database update', 'The next local refresh is scheduled for seven days.'],
  warning: ['Coverage is limited', 'Only the configured page allowance is represented.'],
  error: ['Refresh could not complete', 'This is a synthetic failure fixture.'],
} as const;

export function SemrushToastBanner({
  initialKind = 'success',
  surface = 'toast',
  initiallyVisible = true,
}: SemrushToastBannerProps) {
  const [visible, setVisible] = useState(initiallyVisible);
  const [retryCount, setRetryCount] = useState(0);
  const [title, detail] = messages[initialKind];
  const role = initialKind === 'error' ? 'alert' : 'status';

  return (
    <div className={styles.stage}>
      <section className={styles.card} aria-label="Toast and banner specimen">
        <div className={styles.row}>
          <button className={`${styles.button} ${styles.secondary}`} type="button" onClick={() => setVisible(true)}>
            Show feedback
          </button>
          <span className={styles.muted}>All feedback is local-only.</span>
        </div>
        <div className={styles.feedbackStack}>
          {visible ? (
            <div
              className={`${styles.feedback} ${styles[`feedback${initialKind[0].toUpperCase()}${initialKind.slice(1)}`]} ${surface === 'toast' ? styles.feedbackToast : ''}`}
              role={role}
              aria-live={initialKind === 'error' ? 'assertive' : 'polite'}
            >
              <span aria-hidden="true">{initialKind === 'success' ? '✓' : initialKind === 'error' ? '!' : 'i'}</span>
              <span className={styles.feedbackContent}>
                <strong>{title}</strong>
                <small>{detail}</small>
                {retryCount > 0 && <small>Retried locally {retryCount} time.</small>}
              </span>
              <span className={styles.row}>
                {initialKind === 'error' && (
                  <button className={styles.feedbackAction} type="button" onClick={() => setRetryCount((count) => count + 1)}>
                    Retry
                  </button>
                )}
                <button className={styles.feedbackClose} type="button" aria-label="Dismiss feedback" onClick={() => setVisible(false)}>
                  ×
                </button>
              </span>
            </div>
          ) : (
            <p className={styles.status} role="status">Feedback dismissed locally.</p>
          )}
        </div>
      </section>
    </div>
  );
}

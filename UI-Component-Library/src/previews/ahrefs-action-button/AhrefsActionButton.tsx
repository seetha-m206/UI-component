import { useState } from 'react';
import styles from '../ahrefs-expanded/ahrefs-expanded.module.css';

export interface AhrefsActionButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  label?: string;
  loading?: boolean;
  disabled?: boolean;
}
export function AhrefsActionButton({
  variant = 'primary',
  label = 'Continue',
  loading = false,
  disabled = false,
}: AhrefsActionButtonProps) {
  const [status, setStatus] = useState('');
  const className =
    variant === 'primary'
      ? styles.primary
      : variant === 'secondary'
        ? styles.secondary
        : styles.ghost;
  return (
    <div className={styles.root}>
      <div className={styles.buttonStage}>
        <div>
          <div className={styles.buttonRow}>
            <button
              type="button"
              className={`${className} ${loading ? styles.loading : ''}`}
              disabled={disabled || loading}
              onClick={() => setStatus(`${label} needs verification. No live action was run.`)}
            >
              {loading ? 'Working…' : label}
            </button>
          </div>
          {status && (
            <p className={styles.status} role="status">
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

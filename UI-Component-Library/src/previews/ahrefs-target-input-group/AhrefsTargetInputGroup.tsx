import { useState } from 'react';
import styles from '../ahrefs-expanded/ahrefs-expanded.module.css';
export interface AhrefsTargetInputGroupProps {
  initialValue?: string;
  disabled?: boolean;
}
export function AhrefsTargetInputGroup({
  initialValue = '',
  disabled = false,
}: AhrefsTargetInputGroupProps) {
  const [value, setValue] = useState(initialValue);
  const [status, setStatus] = useState('');
  const guard = (action: string) => {
    if (!disabled) setStatus(`${action} needs verification. No live target was submitted.`);
  };
  return (
    <div className={styles.root}>
      <div className={styles.primitiveStage}>
        <div>
          <div className={styles.targetGroup} aria-label="Target input group">
            <button type="button" disabled={disabled} onClick={() => guard('Protocol selector')}>
              http + https⌄
            </button>
            <label>
              <span className="sr-only">Domain or path</span>
              <input
                value={value}
                disabled={disabled}
                placeholder="Domain or path"
                onChange={(event) => setValue(event.target.value)}
              />
            </label>
            <button type="button" disabled={disabled} onClick={() => guard('Scope selector')}>
              Subdomains⌄
            </button>
            <button
              className={styles.primary}
              type="button"
              disabled={disabled}
              aria-label="Continue with target"
              onClick={() => guard('Target submission')}
            >
              →
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

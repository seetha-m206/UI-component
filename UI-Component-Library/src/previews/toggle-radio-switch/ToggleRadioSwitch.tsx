import { useId, useState } from 'react';
import styles from './ToggleRadioSwitch.module.css';

export interface ToggleRadioSwitchProps {
  initialEnabled?: boolean;
}

export function ToggleRadioSwitch({ initialEnabled = false }: ToggleRadioSwitchProps) {
  const [enabled, setEnabled] = useState(initialEnabled);
  const groupName = useId();
  const enableId = `${groupName}-enable`;
  const disableId = `${groupName}-disable`;
  const labelId = `${groupName}-save-label`;

  return (
    <div className={styles.root}>
      <div className={styles.optionRow}>
        <span>
          <input
            type="radio"
            name={groupName}
            id={enableId}
            value="enabled"
            checked={enabled}
            onChange={() => setEnabled(true)}
            className={styles.nativeInput}
          />
          <label htmlFor={enableId} className={styles.switchLabel} aria-label="Enable" />
        </span>
        <span className={styles.optionText}>Enable</span>

        <span>
          <input
            type="radio"
            name={groupName}
            id={disableId}
            value="disabled"
            checked={!enabled}
            onChange={() => setEnabled(false)}
            className={styles.nativeInput}
          />
          <label htmlFor={disableId} className={styles.switchLabel} aria-label="Disable" />
        </span>
        <span className={styles.optionText}>Disable</span>
      </div>

      <div
        className={
          enabled ? `${styles.dependentBlock} ${styles.dependentBlockOpen}` : styles.dependentBlock
        }
        aria-hidden={!enabled}
      >
        <label htmlFor={labelId} className={styles.fieldLabel}>
          Save Button Label <span className={styles.required}>*</span>
        </label>
        <input id={labelId} type="text" className={styles.textInput} defaultValue="Save" />
      </div>
    </div>
  );
}

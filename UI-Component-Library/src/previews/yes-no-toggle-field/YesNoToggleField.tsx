import { useId } from 'react';
import styles from './YesNoToggleField.module.css';

export type YesNoValue = 'yes' | 'no' | null;

export interface YesNoToggleFieldProps {
  value: YesNoValue;
  onChange?: (value: YesNoValue) => void;
  disabled?: boolean;
  required?: boolean;
  label: string;
  description?: string;
  error?: string;
}

/**
 * Reconstructed from Zoho Forms' Yes/No field (button-pair binary choice).
 * Source uses `<a href="javascript:;">` with manually-applied role="radio" —
 * this version uses a native <button role="radio"> instead (same ARIA
 * contract, no javascript: URL), and adds roving-tabindex arrow-key
 * navigation, which was not captured in the source (no keydown handler was
 * observed) and is implemented here as a standard accessible radiogroup
 * pattern, not a verified reproduction of Zoho's own keyboard behavior.
 */
export function YesNoToggleField({
  value,
  onChange,
  disabled = false,
  required = false,
  label,
  description,
  error,
}: YesNoToggleFieldProps) {
  const labelId = useId();
  const descId = useId();
  const errorId = useId();

  function select(option: 'yes' | 'no') {
    if (disabled) return;
    // Observed behavior: clicking the already-selected option deselects it.
    onChange?.(value === option ? null : option);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, option: 'yes' | 'no') {
    if (disabled) return;
    if (
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowRight' ||
      event.key === 'ArrowUp' ||
      event.key === 'ArrowDown'
    ) {
      event.preventDefault();
      const other = option === 'yes' ? 'no' : 'yes';
      select(other);
      const group = event.currentTarget.closest(`[role="radiogroup"]`);
      (group?.querySelector(`[data-option="${other}"]`) as HTMLElement | null)?.focus();
    }
  }

  const describedBy =
    [description ? descId : null, error ? errorId : null].filter(Boolean).join(' ') || undefined;
  const focusedOption = value ?? 'yes';

  return (
    <div className={styles.root}>
      <span id={labelId} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </span>
      {description && (
        <p id={descId} className={styles.description}>
          {description}
        </p>
      )}
      <div
        className={styles.group}
        role="radiogroup"
        aria-labelledby={labelId}
        aria-describedby={describedBy}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
      >
        {(['yes', 'no'] as const).map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              data-option={option}
              aria-checked={selected}
              tabIndex={disabled ? -1 : focusedOption === option ? 0 : -1}
              disabled={disabled}
              className={
                selected
                  ? `${styles.option} ${styles[option]} ${styles.optionSelected}`
                  : `${styles.option} ${styles[option]}`
              }
              onClick={() => select(option)}
              onKeyDown={(event) => handleKeyDown(event, option)}
            >
              {option === 'yes' ? 'Yes' : 'No'}
            </button>
          );
        })}
      </div>
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

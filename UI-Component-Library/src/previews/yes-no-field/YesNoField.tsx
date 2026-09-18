import { useId, useState } from 'react';
import styles from './YesNoField.module.css';

export type YesNoValue = 'yes' | 'no' | null;

export interface YesNoFieldProps {
  value: YesNoValue;
  onChange?: (value: YesNoValue) => void;
  disabled?: boolean;
  required?: boolean;
  label: string;
  description?: string;
  error?: string;
}

/**
 * Reconstructed from Typeform's Yes/No field — built on Radix UI's headless
 * `RadioGroup` primitive (`role="radiogroup"` wrapper, `role="radio"` on
 * each `<button type="button">`), traced in Typeform's "Universal mode"
 * multi-question rendering.
 *
 * Two confirmed behaviors this reconstruction deliberately does NOT add,
 * unlike its Zoho sibling `yes-no-toggle-field`:
 * - No deselect/toggle-off. Clicking the already-selected option is a
 *   confirmed no-op in the source (a true hard radio group) — see README.
 * - No "Y"/"N" letter-key shortcuts. The source visually displays key-hint
 *   badges but they were confirmed NOT to function in the tested render
 *   mode — see README.
 */
export function YesNoField({
  value,
  onChange,
  disabled = false,
  required = false,
  label,
  description,
  error,
}: YesNoFieldProps) {
  const labelId = useId();
  const descId = useId();
  const errorId = useId();
  // Tracks which option currently owns the roving tab stop. Distinct from
  // `value`: arrow-key navigation moves focus without changing selection
  // (confirmed real behavior), so focus and selection can point at
  // different options at the same time.
  const [focused, setFocused] = useState<'yes' | 'no'>(value ?? 'yes');

  function select(option: 'yes' | 'no') {
    if (disabled) return;
    // Confirmed one-way radio group: clicking the already-selected option
    // is a no-op — aria-checked stays "true", there is no deselect.
    if (value === option) return;
    onChange?.(option);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, option: 'yes' | 'no') {
    if (disabled) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const other = option === 'yes' ? 'no' : 'yes';
      // Confirmed: arrow keys move focus between options without changing
      // selection (standard ARIA radiogroup pattern) — no onChange here.
      setFocused(other);
      const group = event.currentTarget.closest(`[role="radiogroup"]`);
      (group?.querySelector(`[data-option="${other}"]`) as HTMLElement | null)?.focus();
    }
    // Space/Enter are left to native <button> semantics, which fire onClick
    // for the focused button — this is how "Space selects the focused
    // option" is satisfied without a bespoke keydown branch.
  }

  const describedBy =
    [description ? descId : null, error ? errorId : null].filter(Boolean).join(' ') || undefined;

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
              data-state={selected ? 'checked' : 'unchecked'}
              aria-checked={selected}
              aria-disabled={disabled || undefined}
              tabIndex={disabled ? -1 : focused === option ? 0 : -1}
              disabled={disabled}
              className={selected ? `${styles.option} ${styles.optionSelected}` : styles.option}
              onClick={() => select(option)}
              onKeyDown={(event) => handleKeyDown(event, option)}
              onFocus={() => setFocused(option)}
            >
              <span className={styles.keyBadge} aria-hidden="true">
                {option === 'yes' ? 'Y' : 'N'}
              </span>
              <span className={styles.optionLabel}>{option === 'yes' ? 'Yes' : 'No'}</span>
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

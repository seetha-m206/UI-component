import { useId, useState } from 'react';
import styles from './GoogleFormsLinearScaleField.module.css';

export type LinearScaleValue = number | null;

export interface GoogleFormsLinearScaleFieldProps {
  value: LinearScaleValue;
  onChange?: (value: LinearScaleValue) => void;
  disabled?: boolean;
  label?: string;
  min?: number;
  max?: number;
  minLabel?: string;
  maxLabel?: string;
}

const DEFAULT_MIN = 1;
const DEFAULT_MAX = 5;

/**
 * Reconstructed from Google Forms' Linear Scale field. Confirmed-real
 * behavior reproduced faithfully: a genuine role="radiogroup" with a
 * correct aria-labelledby pointing at the actual question text (a stark,
 * confirmed contrast with the sibling google-forms-rating-field, which has
 * no group-level accessible name at all); selection is exclusive
 * (aria-checked=true on exactly one option); clicking the already-selected
 * option a first time is a no-op that leaves it selected.
 *
 * The confirmed reproducible bug this preview exists to demonstrate: a
 * SECOND click on the same already-selected option leaves the option
 * still visually selected but flips aria-checked to false on every
 * option, including the one still shown selected — a permanent
 * visual/ARIA disagreement, not a momentary render-timing artifact (the
 * source record re-queried it seconds apart with no change). This is
 * modeled here as two separate pieces of state: `value` (what's visually
 * selected) and `ariaCheckedValue` (which option, if any, currently
 * reports aria-checked=true) — they intentionally diverge after a second
 * click on the same option, exactly like the real product. A debug
 * readout below the row makes the live aria-checked value visible so the
 * disagreement is directly observable, not just inferred from markup.
 */
export function GoogleFormsLinearScaleField({
  value,
  onChange,
  disabled = false,
  label = 'How likely are you to recommend us',
  min = DEFAULT_MIN,
  max = DEFAULT_MAX,
  minLabel,
  maxLabel,
}: GoogleFormsLinearScaleFieldProps) {
  const labelId = useId();
  // Tracks which option (if any) currently reports aria-checked=true.
  // Diverges from `value` after a confirmed second click on the same option.
  const [ariaCheckedValue, setAriaCheckedValue] = useState<LinearScaleValue>(value);

  const options = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  function handleSelect(option: number) {
    if (disabled) return;
    if (value !== option) {
      // Normal, correct exclusive selection.
      onChange?.(option);
      setAriaCheckedValue(option);
    } else {
      // Confirmed bug: a second click on the already-selected option is a
      // visual no-op, but aria-checked goes stale/false on every option.
      setAriaCheckedValue(null);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>, option: number) {
    if (disabled) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const delta = event.key === 'ArrowLeft' ? -1 : 1;
      const next = Math.min(max, Math.max(min, option + delta));
      const group = event.currentTarget.closest('[role="radiogroup"]');
      (group?.querySelector(`[data-option="${next}"]`) as HTMLElement | null)?.focus();
    } else if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleSelect(option);
    }
  }

  const focusedOption = value ?? min;

  return (
    <div className={styles.root}>
      <p id={labelId} className={styles.label}>
        {label}
      </p>
      <div className={styles.scale} role="radiogroup" aria-labelledby={labelId}>
        {minLabel && <span className={styles.endpointLabel}>{minLabel}</span>}
        <div className={styles.row}>
          {options.map((option) => {
            const isVisuallySelected = value === option;
            const isAriaChecked = ariaCheckedValue === option;
            const isStale = isVisuallySelected && !isAriaChecked;
            return (
              <div key={option} className={styles.column}>
                <div
                  data-option={option}
                  role="radio"
                  aria-checked={isAriaChecked}
                  aria-label={String(option)}
                  tabIndex={disabled ? -1 : focusedOption === option ? 0 : -1}
                  className={disabled ? `${styles.circle} ${styles.circleDisabled}` : styles.circle}
                  data-selected={isVisuallySelected}
                  title={
                    isStale
                      ? 'Confirmed bug: this option is still visually selected, but aria-checked has gone stale/false after a second click.'
                      : undefined
                  }
                  onClick={() => handleSelect(option)}
                  onKeyDown={(event) => handleKeyDown(event, option)}
                />
                <span className={styles.number}>{option}</span>
              </div>
            );
          })}
        </div>
        {maxLabel && <span className={styles.endpointLabel}>{maxLabel}</span>}
      </div>
      <p className={styles.debugReadout}>
        Live aria-checked value:{' '}
        <strong>
          {ariaCheckedValue == null
            ? value != null
              ? 'none (confirmed stale-ARIA bug — visually selected option no longer reports checked)'
              : 'none'
            : ariaCheckedValue}
        </strong>
      </p>
    </div>
  );
}

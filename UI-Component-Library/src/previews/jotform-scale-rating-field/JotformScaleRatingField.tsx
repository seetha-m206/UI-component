import { useId } from 'react';
import styles from './JotformScaleRatingField.module.css';

export type RatingValue = number | null;

export interface JotformScaleRatingFieldProps {
  value: RatingValue;
  onChange?: (value: RatingValue) => void;
  disabled?: boolean;
  label?: string;
  min?: number;
  max?: number;
}

/**
 * Reconstructed from JotForm's Scale Rating field (see
 * Research-Library/04-Component-Library/jotform/jotform-scale-rating-field.md,
 * JF1, 2026-09-30).
 *
 * Confirmed and reproduced faithfully: genuine NATIVE <input type="radio">
 * elements (not a custom ARIA widget, unlike this product's own sibling
 * Star Rating field) with a real <label for> per option, giving correct
 * exclusive selection and keyboard operability for free. The confirmed
 * accessibility defect is reproduced exactly: each input also carries an
 * explicit aria-labelledby pointing at the shared question text, which
 * takes accessible-name precedence over the native label per spec — so
 * this preview deliberately sets BOTH the correct per-option <label for>
 * AND the group-pointing aria-labelledby on every input, to demonstrate
 * the real override rather than silently fixing it. Selecting an option
 * highlights the whole field block (not just the chosen circle), matching
 * the confirmed panel-highlight behavior.
 */
export function JotformScaleRatingField({
  value,
  onChange,
  disabled = false,
  label = 'How would you rate this?',
  min = 1,
  max = 5,
}: JotformScaleRatingFieldProps) {
  const questionId = useId();
  const groupName = useId();
  const points = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  const hasSelection = value !== null;

  function select(point: number) {
    if (disabled) return;
    onChange?.(point);
  }

  return (
    <div className={styles.root} data-disabled={disabled} data-has-selection={hasSelection}>
      <span id={questionId} className={styles.label}>
        {label}
      </span>
      <div className={styles.scaleRow}>
        <span className={styles.endpoint}>Worst</span>
        {points.map((point) => {
          const inputId = `${groupName}-${point}`;
          return (
            <span key={point} className={styles.item}>
              <input
                type="radio"
                id={inputId}
                name={groupName}
                className={styles.radio}
                checked={value === point}
                disabled={disabled}
                // Confirmed real defect, reproduced deliberately: this
                // aria-labelledby overrides the correct <label for> below
                // in accessible-name computation, per spec precedence.
                aria-labelledby={questionId}
                onChange={() => select(point)}
              />
              <label htmlFor={inputId} className={styles.radioLabel} title={String(point)}>
                {point}
              </label>
            </span>
          );
        })}
        <span className={styles.endpoint}>Best</span>
      </div>
    </div>
  );
}

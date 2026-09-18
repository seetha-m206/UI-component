import { useId } from 'react';
import styles from './RatingStarField.module.css';

export type RatingValue = number | null;

export interface RatingStarFieldProps {
  value: RatingValue;
  onChange?: (value: RatingValue) => void;
  disabled?: boolean;
  required?: boolean;
  label: string;
  description?: string;
  error?: string;
}

const STAR_COUNT = 5;
const STARS = Array.from({ length: STAR_COUNT }, (_, i) => i + 1);

/**
 * Reconstructed from Zoho Forms' 5-star Rating field. Source uses
 * `<a href="javascript:;" role="radio">` with index-comparison fill logic
 * (star N fills stars 1..N) and a toggle-off branch when re-clicking the
 * current boundary star — both reproduced here. Two deliberate deviations
 * from what was actually observed, documented in this folder's README:
 * (1) hover-preview fill is NOT implemented — the source's own capture
 * called this "inconclusive" (handler fired, no visible change confirmed),
 * so it's left out rather than guessed; (2) `aria-checked` here correctly
 * flips to true on the selected star — the real Zoho markup was confirmed
 * to never do this, a genuine accessibility bug, not a design choice.
 */
export function RatingStarField({
  value,
  onChange,
  disabled = false,
  required = false,
  label,
  description,
  error,
}: RatingStarFieldProps) {
  const labelId = useId();
  const descId = useId();
  const errorId = useId();
  const countId = useId();

  function selectByClick(star: number) {
    if (disabled) return;
    // Observed behavior: clicking the current boundary star again clears the group.
    onChange?.(value === star ? null : star);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, star: number) {
    if (disabled) return;
    if (
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowDown' ||
      event.key === 'ArrowRight' ||
      event.key === 'ArrowUp'
    ) {
      event.preventDefault();
      const delta = event.key === 'ArrowLeft' || event.key === 'ArrowDown' ? -1 : 1;
      const next = Math.min(STAR_COUNT, Math.max(1, star + delta));
      // Arrow movement always sets the value directly — it must never reuse
      // the click toggle-off behavior, or moving onto an already-clamped
      // boundary star (e.g. ArrowRight while already on star 5) would
      // incorrectly clear the rating instead of leaving it unchanged.
      onChange?.(next);
      const group = event.currentTarget.closest(`[role="radiogroup"]`);
      (group?.querySelector(`[data-star="${next}"]`) as HTMLElement | null)?.focus();
    }
  }

  const describedBy = [description ? descId : null, error ? errorId : null, countId]
    .filter(Boolean)
    .join(' ');
  const focusedStar = value ?? 1;

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
        {STARS.map((star) => {
          const filled = value != null && star <= value;
          const selected = value === star;
          return (
            <button
              key={star}
              type="button"
              role="radio"
              data-star={star}
              aria-checked={selected}
              aria-label={`${star} ${star === 1 ? 'Star' : 'Stars'}`}
              tabIndex={disabled ? -1 : focusedStar === star ? 0 : -1}
              disabled={disabled}
              className={filled ? `${styles.star} ${styles.starFilled}` : styles.star}
              onClick={() => selectByClick(star)}
              onKeyDown={(event) => handleKeyDown(event, star)}
            >
              <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
                <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.8L5.8 21l1.6-7-5.4-4.7 7.1-.7L12 2z" />
              </svg>
            </button>
          );
        })}
      </div>
      <p id={countId} className={styles.count} aria-live="polite">
        {value ?? 0} out of {STAR_COUNT}
      </p>
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

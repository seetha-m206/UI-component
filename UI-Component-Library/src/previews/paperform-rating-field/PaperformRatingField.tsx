import { useId, useState } from 'react';
import styles from './PaperformRatingField.module.css';

export type RatingValue = number | null;

export interface PaperformRatingFieldProps {
  value: RatingValue;
  onChange?: (value: RatingValue) => void;
  disabled?: boolean;
  required?: boolean;
  label: string;
  description?: string;
  error?: string;
  maxRating?: number;
}

const DEFAULT_MAX = 5;

/**
 * Reconstructed from Paperform's Rating field. Confirmed-real behavior
 * reproduced faithfully: hover preview is `max(hoveredStar, value)` — hovering
 * a star below the committed value shows no change, only hovering higher
 * extends the fill; re-clicking the already-selected star is a no-op (no
 * deselect); the fill is an opacity cross-fade between a filled and an
 * outline icon layer (0.25s), not a color/clip swap; `aria-checked` is
 * correctly wired to the committed value only, while a separate
 * `data-selected` attribute reflects the (hover-inclusive) preview state.
 *
 * Two deliberate accessibility fixes over the confirmed-broken source,
 * flagged here rather than silently reproduced (same precedent as this
 * project's rating-star-field and paperform-yes-no-field previews): the real
 * field has zero keyboard support (not focusable, no keydown handlers at
 * all) and an unnamed radiogroup (no aria-labelledby/aria-label). This
 * reconstruction adds a roving tabindex + arrow-key/Space/Enter support, and
 * links the group to the visible label via aria-labelledby.
 */
export function PaperformRatingField({
  value,
  onChange,
  disabled = false,
  required = false,
  label,
  description,
  error,
  maxRating = DEFAULT_MAX,
}: PaperformRatingFieldProps) {
  const labelId = useId();
  const descId = useId();
  const errorId = useId();
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const stars = Array.from({ length: maxRating }, (_, i) => i + 1);
  // Confirmed rule: preview never goes below the committed value.
  const previewValue = Math.max(hoveredStar ?? 0, value ?? 0) || null;
  const focusedStar = value ?? 1;

  function selectStar(star: number) {
    if (disabled) return;
    // Confirmed: re-clicking the already-selected star is a no-op, not a toggle-off.
    if (value === star) return;
    onChange?.(star);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>, star: number) {
    if (disabled) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const delta = event.key === 'ArrowLeft' ? -1 : 1;
      const next = Math.min(maxRating, Math.max(1, star + delta));
      const group = event.currentTarget.closest('[role="radiogroup"]');
      (group?.querySelector(`[data-star="${next}"]`) as HTMLElement | null)?.focus();
    } else if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      selectStar(star);
    }
  }

  const describedBy = [description ? descId : null, error ? errorId : null].filter(Boolean).join(' ');

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
        aria-describedby={describedBy || undefined}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        onMouseLeave={() => setHoveredStar(null)}
      >
        {stars.map((star) => {
          const isSelected = value === star;
          const isPreviewFilled = previewValue != null && star <= previewValue;
          return (
            <div
              key={star}
              data-star={star}
              data-selected={isPreviewFilled}
              role="radio"
              aria-checked={isSelected}
              aria-label={String(star)}
              tabIndex={disabled ? -1 : focusedStar === star ? 0 : -1}
              className={disabled ? `${styles.star} ${styles.starDisabled}` : styles.star}
              onClick={() => selectStar(star)}
              onMouseEnter={() => !disabled && setHoveredStar(star)}
              onKeyDown={(event) => handleKeyDown(event, star)}
            >
              <svg
                viewBox="0 0 24 24"
                className={`${styles.icon} ${styles.iconOutline}`}
                aria-hidden="true"
              >
                <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.8L5.8 21l1.6-7-5.4-4.7 7.1-.7L12 2z" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                className={`${styles.icon} ${styles.iconFilled} ${isPreviewFilled ? styles.iconFilledOn : ''}`}
                aria-hidden="true"
              >
                <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.8L5.8 21l1.6-7-5.4-4.7 7.1-.7L12 2z" />
              </svg>
            </div>
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

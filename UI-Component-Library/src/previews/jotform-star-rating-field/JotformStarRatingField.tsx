import { useState } from 'react';
import styles from './JotformStarRatingField.module.css';

export type RatingValue = number | null;

export interface JotformStarRatingFieldProps {
  value: RatingValue;
  onChange?: (value: RatingValue) => void;
  disabled?: boolean;
  label?: string;
  maxValue?: number;
}

const DEFAULT_MAX = 5;

/**
 * Reconstructed from JotForm's Star Rating field (see
 * Research-Library/04-Component-Library/jotform/jotform-star-rating-field.md,
 * JF1, 2026-09-30).
 *
 * Confirmed and reproduced faithfully: a cumulative "filled up to N" visual
 * on both hover (a distinct preview frame) and commit (a third, visually
 * separate frame), paired with a genuinely EXCLUSIVE aria-checked (only the
 * clicked star reports true) — matching the source's own confirmed finding
 * that this resolves Zoho's rating-star-field's confirmed aria-checked bug.
 * Arrow keys commit immediately, no separate activation step. The confirmed
 * real bug is reproduced deliberately, not silently fixed: a MOUSE click
 * updates aria-checked/the committed value correctly but leaves the roving
 * tabindex on the originally-focusable star — tabindex only re-syncs to the
 * selected star once an arrow key is pressed. Re-clicking the already
 * selected star is reproduced per the source's own flagged, not-fully-
 * confirmed finding (decrements by one) rather than a clean no-op or
 * deselect, with the source's own caveat that this needs manual
 * re-verification preserved in this preview's evidence string.
 */
export function JotformStarRatingField({
  value,
  onChange,
  disabled = false,
  label = 'Rate your experience',
  maxValue = DEFAULT_MAX,
}: JotformStarRatingFieldProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  // Reproduces the confirmed real bug: tabindex only follows keyboard
  // interaction, not mouse clicks, so it is tracked independently of value.
  const [tabbableStar, setTabbableStar] = useState(1);

  const stars = Array.from({ length: maxValue }, (_, i) => i + 1);

  function commit(star: number) {
    if (disabled) return;
    if (value === star) {
      // Confirmed (not fully explained) finding: re-clicking the selected
      // star decrements rather than no-ops or deselects.
      onChange?.(star > 1 ? star - 1 : null);
      return;
    }
    onChange?.(star);
    // Deliberately NOT updating tabbableStar here — reproduces the
    // confirmed mouse-click/tabindex desync.
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>, star: number) {
    if (disabled) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const delta = event.key === 'ArrowRight' ? 1 : -1;
      const next = Math.min(maxValue, Math.max(1, star + delta));
      onChange?.(next);
      setTabbableStar(next);
      const group = event.currentTarget.closest('[data-starfield-group]');
      (group?.querySelector(`[data-star="${next}"]`) as HTMLElement | null)?.focus();
    }
  }

  const displayFill = hovered ?? value ?? 0;

  return (
    <div className={styles.root} data-disabled={disabled}>
      <span className={styles.label}>{label}</span>
      <div
        className={styles.group}
        role="radiogroup"
        aria-label={label}
        data-starfield-group
        onMouseLeave={() => setHovered(null)}
      >
        {stars.map((star) => {
          const checked = value === star;
          const filled = star <= displayFill;
          const isHoverPreview = hovered !== null && star <= hovered && star > (value ?? 0);
          return (
            <div
              key={star}
              role="radio"
              aria-checked={checked}
              aria-label={`${star} star${star === 1 ? '' : 's'}`}
              tabIndex={disabled ? -1 : star === tabbableStar ? 0 : -1}
              data-star={star}
              data-fill-state={filled ? (isHoverPreview ? 'hover' : 'committed') : 'empty'}
              className={styles.star}
              onMouseEnter={() => !disabled && setHovered(star)}
              onClick={() => commit(star)}
              onKeyDown={(e) => handleKeyDown(e, star)}
            >
              ★
            </div>
          );
        })}
      </div>
      <span className={styles.debugValue} data-testid="committed-value">
        {value ?? 'none'}
      </span>
    </div>
  );
}

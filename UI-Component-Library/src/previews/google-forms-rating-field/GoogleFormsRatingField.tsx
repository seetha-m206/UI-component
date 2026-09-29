import { useState } from 'react';
import styles from './GoogleFormsRatingField.module.css';

export type RatingValue = number | null;
export type RatingIconStyle = 'star' | 'heart' | 'thumbs-up';

export interface GoogleFormsRatingFieldProps {
  value: RatingValue;
  onChange?: (value: RatingValue) => void;
  disabled?: boolean;
  label?: string;
  maxValue?: number;
  iconStyle?: RatingIconStyle;
}

const DEFAULT_MAX = 5;

const ICON_PATHS: Record<RatingIconStyle, string> = {
  star: 'M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.8L5.8 21l1.6-7-5.4-4.7 7.1-.7L12 2z',
  heart:
    'M12 21s-7.5-4.6-10-9.3C0.6 8.3 2.3 5 5.6 5c1.9 0 3.4 1 4.4 2.5C11 6 12.5 5 14.4 5c3.3 0 5 3.3 3.6 6.7C19.5 16.4 12 21 12 21z',
  'thumbs-up':
    'M2 21h3V10H2v11zM22 11c0-1.1-.9-2-2-2h-6.3l1-4.6.03-.32c0-.41-.17-.79-.44-1.06L13.17 2 6.59 8.59A2 2 0 0 0 6 10v9a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.9z',
};

/**
 * Reconstructed from Google Forms' icon-based Rating field. Confirmed-real
 * behavior reproduced faithfully, not "fixed": no hover-preview-fill at all
 * (a confirmed absence, unlike Typeform/Paperform's rating fields);
 * clicking icon N marks aria-checked=true on icons 1..N simultaneously
 * (non-exclusive "fill" semantics on a role="radio" set); clicking the
 * already-selected icon deselects everything and shows/hides a "Clear
 * selection" text link; Left/Right arrow keys move AND commit the value
 * immediately (no separate confirm step), with wraparound; Space on the
 * selected icon deselects; Enter is a no-op; there is no role="radiogroup"
 * and no group-level accessible name anywhere, and each icon's own
 * accessible name is just the bare number, not tied to the question text.
 * This last point is a confirmed real accessibility defect in the source,
 * not silently patched here — following the same precedent set by this
 * project's own paperform-rating-field sibling for its own unnamed-group
 * finding, which documented rather than fixed it (see the registry
 * `evidence` string for the fuller citation).
 */
export function GoogleFormsRatingField({
  value,
  onChange,
  disabled = false,
  label = 'Rate your experience',
  maxValue = DEFAULT_MAX,
  iconStyle = 'star',
}: GoogleFormsRatingFieldProps) {
  const [focusedIcon, setFocusedIcon] = useState<number | null>(null);

  const icons = Array.from({ length: maxValue }, (_, i) => i + 1);
  const focusTarget = focusedIcon ?? value ?? 1;
  const path = ICON_PATHS[iconStyle];

  function toggleIcon(icon: number) {
    if (disabled) return;
    // Confirmed: re-clicking the already-selected icon deselects everything.
    onChange?.(value === icon ? null : icon);
  }

  function moveAndCommit(event: React.KeyboardEvent<HTMLDivElement>, from: number, delta: number) {
    if (disabled) return;
    const next = ((from - 1 + delta + maxValue) % maxValue) + 1;
    setFocusedIcon(next);
    onChange?.(next);
    const row = event.currentTarget.parentElement;
    (row?.querySelector(`[data-icon="${next}"]`) as HTMLElement | null)?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>, icon: number) {
    if (disabled) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveAndCommit(event, icon, -1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveAndCommit(event, icon, 1);
    } else if (event.key === ' ') {
      event.preventDefault();
      // Confirmed: Space on the selected icon deselects, same as click.
      toggleIcon(icon);
    }
    // Enter is a confirmed no-op — deliberately no handler branch for it.
  }

  return (
    <div className={styles.root}>
      {/* Plain visible text, deliberately NOT wired via aria-labelledby to
          the icon row below — the source has no group-level accessible
          name at all. */}
      <p className={styles.label}>{label}</p>
      <div className={styles.row}>
        {icons.map((icon) => {
          const isChecked = value != null && icon <= value;
          return (
            <div
              key={icon}
              data-icon={icon}
              role="radio"
              aria-checked={isChecked}
              aria-label={String(icon)}
              tabIndex={disabled ? -1 : focusTarget === icon ? 0 : -1}
              className={disabled ? `${styles.icon} ${styles.iconDisabled}` : styles.icon}
              onFocus={() => setFocusedIcon(icon)}
              onClick={() => toggleIcon(icon)}
              onKeyDown={(event) => handleKeyDown(event, icon)}
            >
              <svg viewBox="0 0 24 24" className={`${styles.svg} ${styles.svgOutline}`} aria-hidden="true">
                <path d={path} />
              </svg>
              <svg
                viewBox="0 0 24 24"
                className={`${styles.svg} ${styles.svgFilled} ${isChecked ? styles.svgFilledOn : ''}`}
                aria-hidden="true"
              >
                <path d={path} />
              </svg>
              <span className={styles.number}>{icon}</span>
            </div>
          );
        })}
        {value != null && (
          <button
            type="button"
            className={styles.clearLink}
            disabled={disabled}
            onClick={() => onChange?.(null)}
          >
            Clear selection
          </button>
        )}
      </div>
    </div>
  );
}

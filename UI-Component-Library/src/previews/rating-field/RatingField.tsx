import { useId, useState } from 'react';
import styles from './RatingField.module.css';

export type RatingValue = number | null;

export interface RatingFieldProps {
  value: RatingValue;
  onChange?: (value: RatingValue) => void;
  disabled?: boolean;
  required?: boolean;
  label: string;
  description?: string;
  error?: string;
}

const SCALE = 5;
const STEPS = Array.from({ length: SCALE }, (_, i) => i + 1);

/**
 * Reconstructed from Typeform's configurable icon Rating field. Built on the
 * same Radix UI `RadioGroup` primitive as Typeform's Yes/No field
 * ([[yes-no-toggle-field]]): `role="radiogroup"`/`role="radio"`, one-way
 * selection (no deselect on re-click), inline `<svg>` icons rather than font
 * icons. Two behaviors the record confirms are genuinely present in
 * Typeform's markup (and thus faithfully reproduced here, not "improvements"
 * needing justification the way they were for Zoho's sibling component):
 * (1) a real hover-preview — hovering icon N fills icons 1..N at 0.2 alpha,
 * reverting on mouse-out without committing — confirmed working, unlike
 * Zoho's rating-star-field where this was inconclusive and deliberately left
 * out; (2) `aria-checked` correctly flips to `true` on exactly the selected
 * icon, confirmed across multiple selections, unlike Zoho's confirmed bug
 * where it never flips.
 *
 * The record also captures two extra custom data attributes beyond a plain
 * ARIA radio: `data-filled` (is this icon part of the current filled run,
 * from either hover-preview or committed selection) and `data-hovered` (is
 * the pointer currently at or before this position) — tracked separately
 * from `aria-checked`, which reflects only the committed answer.
 *
 * The scale is configurable 1-10 in the real product; this reconstruction
 * fixes it at 5 to stay directly comparable with Zoho's fixed 5-star field.
 * Icon shape is configurable (17 icons in Typeform); a star is used here as
 * a reasonable stand-in for the default, matching rating-star-field's visual
 * language for side-by-side comparison (see README for the exact caveat).
 */
export function RatingField({
  value,
  onChange,
  disabled = false,
  required = false,
  label,
  description,
  error,
}: RatingFieldProps) {
  const labelId = useId();
  const descId = useId();
  const errorId = useId();

  // Tracks the currently-hovered step, purely for the preview fill; never
  // commits a value. Kept as component state (not just CSS :hover) because
  // the fill run depends on comparing the hovered index against every icon,
  // the same index-comparison approach used for the committed selection.
  const [hovered, setHoveredState] = useState<number | null>(null);

  function setHovered(step: number | null) {
    if (disabled) return;
    setHoveredState(step);
  }

  function selectByClick(step: number) {
    if (disabled) return;
    // Confirmed one-way behavior: re-clicking the already-selected icon does
    // NOT deselect it. aria-checked stays "true" on that icon.
    if (value === step) return;
    onChange?.(step);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, step: number) {
    if (disabled) return;
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      selectByClick(step);
      return;
    }
    if (
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowDown' ||
      event.key === 'ArrowRight' ||
      event.key === 'ArrowUp'
    ) {
      event.preventDefault();
      const delta = event.key === 'ArrowLeft' || event.key === 'ArrowDown' ? -1 : 1;
      const next = Math.min(SCALE, Math.max(1, step + delta));
      // Arrow movement roams focus only — it does not select. This matches
      // the standard accessible radiogroup keyboard pattern used by
      // yes-no-toggle-field/rating-star-field; the record did not capture
      // Typeform's own keydown handling, so roving-tabindex focus movement
      // without auto-select is used here (Space commits explicitly above).
      const group = event.currentTarget.closest(`[role="radiogroup"]`);
      (group?.querySelector(`[data-step="${next}"]`) as HTMLElement | null)?.focus();
    }
  }

  const describedBy =
    [description ? descId : null, error ? errorId : null].filter(Boolean).join(' ') || undefined;
  const focusedStep = value ?? 1;

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
        onMouseLeave={() => setHovered(null)}
      >
        {STEPS.map((step) => {
          const selected = value === step;
          const isHovering = hovered != null;
          // While the pointer is over the group, the hover-preview fill run
          // (1..hovered) fully governs the display — icons beyond it render
          // outlined even if part of a committed selection, exactly as the
          // record describes ("icons after N stay outlined"), reverting to
          // the committed run the instant the pointer leaves. This is a
          // literal reading of the recorded behavior, not a merge of the two
          // fill states.
          const filled = isHovering ? step <= hovered : value != null && step <= value;
          const isHovered = isHovering && step <= hovered;

          return (
            <button
              key={step}
              type="button"
              role="radio"
              data-step={step}
              data-state={selected ? 'checked' : 'unchecked'}
              data-filled={filled}
              data-hovered={isHovered}
              aria-checked={selected}
              tabIndex={disabled ? -1 : focusedStep === step ? 0 : -1}
              disabled={disabled}
              className={styles.step}
              onMouseEnter={() => setHovered(step)}
              onClick={() => selectByClick(step)}
              onKeyDown={(event) => handleKeyDown(event, step)}
            >
              <span className={styles.iconWrap}>
                <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
                  <path
                    className={styles.symbolFill}
                    d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.8L5.8 21l1.6-7-5.4-4.7 7.1-.7L12 2z"
                  />
                </svg>
              </span>
              {step}
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

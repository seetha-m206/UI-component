import { useId } from 'react';
import styles from './PaperformYesNoField.module.css';

export type PaperformYesNoValue = 'yes' | 'no' | null;

export interface PaperformYesNoFieldProps {
  value: PaperformYesNoValue;
  onChange?: (value: PaperformYesNoValue) => void;
  disabled?: boolean;
  required?: boolean;
  label: string;
  description?: string;
  error?: string;
  /** Stands in for the record's "theme Active color" concept (Behavior &
   * States table: "theme Active color — not hard-coded, follows the theme
   * token"). Wired as a CSS custom property rather than a literal hex value
   * so that finding is structurally represented, not just asserted in
   * prose. Defaults to the exact value observed in the tested theme. */
  activeColor?: string;
}

/**
 * Reconstructed from Paperform's Yes/No field (see
 * Research-Library/04-Component-Library/paperform/paperform-yes-no-field.md).
 * Two equal-width raised buttons in a `role="radiogroup"`, matching the
 * source's confirmed DOM shape (`div.YesNo[role="radiogroup"]` containing
 * two `div[role="radio"]`s) — reimplemented here as native `<button>`s for
 * real keyboard semantics.
 *
 * Deliberately REPRODUCED, not fixed — confirmed real product behavior:
 * - No deselect once answered. Re-clicking the selected option, or pressing
 *   Delete/Backspace/Escape while an option is focused, is a confirmed
 *   no-op — the only way back to "no answer" the source record found was a
 *   full page reload.
 * - Arrow Left/Right and Up/Down move focus between the two options WITHOUT
 *   changing the selection — a focus-only model, NOT the standard
 *   WAI-ARIA radio pattern where arrows both move focus and select.
 *   (Contrast with the Typeform sibling `yes-no-field`, which is built on
 *   Radix UI and both moves focus and selects on arrow keys — do not copy
 *   that behavior here.)
 * - Fixed, non-roving tabindex: YES always carries tabindex=0 and NO always
 *   carries tabindex=-1, even when NO is the checked option — confirmed via
 *   DOM capture. Shift+Tab out and back in always lands on YES regardless
 *   of which option is actually selected.
 * - No Y/N letter-key shortcut exists at all — nothing is wired to those
 *   keys (distinct from Typeform's, which exists but is confirmed
 *   flaky/broken; Paperform simply has no such affordance).
 *
 * Deliberately FIXED — confirmed broken ARIA wiring, not a behavior worth
 * reproducing (same precedent as `rating-star-field`'s aria-checked fix):
 * the source's `<label for="field-yesNo-...">` references an id that does
 * not exist anywhere in the DOM, and its group `aria-labelledby` also
 * references a description id that is never rendered when the question has
 * no help text — a dangling reference. This reconstruction gives the
 * visible label a real, always-rendered id and wires the radiogroup's
 * `aria-labelledby`/`aria-describedby` to it directly, only joining in the
 * description id when a description is actually rendered — a working
 * association, never a dangling one.
 */
export function PaperformYesNoField({
  value,
  onChange,
  disabled = false,
  required = false,
  label,
  description,
  error,
  activeColor = '#1b1b1c',
}: PaperformYesNoFieldProps) {
  const labelId = useId();
  const descId = useId();
  const errorId = useId();

  function select(option: 'yes' | 'no') {
    if (disabled) return;
    // Confirmed no-op: once answered, the option cannot be deselected or
    // re-triggered by clicking it again.
    if (value === option) return;
    onChange?.(option);
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
      // Confirmed: arrows move DOM focus between the two options only —
      // selection is untouched. Tabindex stays fixed (yes=0/no=-1); only
      // real focus moves here, via a direct .focus() call.
      const other = option === 'yes' ? 'no' : 'yes';
      const group = event.currentTarget.closest('[role="radiogroup"]');
      (group?.querySelector(`[data-option="${other}"]`) as HTMLElement | null)?.focus();
      return;
    }
    if (event.key === 'Delete' || event.key === 'Backspace' || event.key === 'Escape') {
      // Confirmed no-op: no keyboard path clears an existing answer.
      event.preventDefault();
      return;
    }
    // Space/Enter are left to native <button> activation semantics, which
    // fire onClick for the focused button — this is how "Space/Enter
    // selects the focused option" is satisfied. Deliberately NO 'y'/'n'
    // handling: no letter-key shortcut exists in the source at all.
  }

  const describedBy =
    [description ? descId : null, error ? errorId : null].filter(Boolean).join(' ') || undefined;

  return (
    <div
      className={styles.root}
      style={{ '--paperform-active-color': activeColor } as React.CSSProperties}
    >
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
              tabIndex={disabled ? -1 : option === 'yes' ? 0 : -1}
              disabled={disabled}
              className={selected ? `${styles.option} ${styles.optionSelected}` : styles.option}
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

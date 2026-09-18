import { useId, type ReactNode } from 'react';
import styles from './ThemeIconButtonGroupSelector.module.css';

export interface ThemeIconOption {
  /** Stable identifier, e.g. mirrors Zoho's `themeprop_val`. */
  id: string;
  /** Inline SVG icon shown inside the tile/button. */
  icon: ReactNode;
  /** Accessible name, and — for the `tile` variant — the hover tooltip text (Zoho's `tooltip-title`). */
  label: string;
}

export type ThemeIconButtonGroupVariant = 'tile' | 'icon';

export interface ThemeIconButtonGroupSelectorProps {
  /** Currently selected option id. Unlike the source's two other captured controls
   * (Yes/No, Rating), no toggle-off click behavior was observed here — the record
   * documents a `.selected`-class swap between siblings only, never a return to
   * "none selected" from a click. `value` is therefore never re-set to null by
   * this component itself. */
  value: string | null;
  onChange?: (value: string) => void;
  options: ThemeIconOption[];
  disabled?: boolean;
  /** Group label (rendered visually and used for aria-labelledby). */
  label: string;
  /**
   * Which of the two visual sub-styles documented in the research record to
   * render: `tile` = ~80x80px image-preview tiles with a hover tooltip (Form
   * Layout / Container Style / Header Style tabs); `icon` = ~35x35px compact
   * icon-only buttons, no tooltip observed (Text Alignment tab). Defaults to
   * `tile`.
   */
  variant?: ThemeIconButtonGroupVariant;
}

/**
 * Reconstructed from Zoho Forms' Theme editor icon-button group selector
 * (the shared `setThemesStyles()` engine — see
 * Research-Library/04-Component-Library/zoho-forms/theme-icon-button-group-selector.md).
 * The record confirms this pattern backs at least four visually-distinct
 * groups (Form Layout, Container Style, Header Style, Text Alignment) via
 * thin per-group `onclick` wrappers that all delegate to one shared
 * selection-state engine, with byte-for-byte identical CSS across every
 * group checked.
 *
 * Deliberate deviation from the literal source markup: the real DOM is a
 * `<ul>` of `<li themeprop_key=... onclick=...>` elements with **zero ARIA
 * attributes** (no `role`, no `aria-selected`/`aria-pressed`) — a confirmed
 * accessibility gap in the "Rules & Validation" section of the record, not
 * an inference. Per this repo's established precedent (see
 * `yes-no-toggle-field/README.md` and `rating-star-field/README.md`, both of
 * which fix confirmed defects rather than reproduce them), this
 * reconstruction renders a proper `role="radiogroup"` /
 * `role="radio"` + `aria-checked` single-select semantic instead, and uses
 * native `<button>` elements instead of `onclick`-bearing `<li>`s. The
 * visual behavior being reconstructed (single-select via a `.selected`-class
 * swap between siblings, byte-identical border/box-shadow/transition values)
 * is preserved exactly; only the (missing) accessibility semantics differ,
 * on purpose.
 */
export function ThemeIconButtonGroupSelector({
  value,
  onChange,
  options,
  disabled = false,
  label,
  variant = 'tile',
}: ThemeIconButtonGroupSelectorProps) {
  const labelId = useId();

  function select(id: string) {
    if (disabled) return;
    onChange?.(id);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (disabled) return;
    if (
      event.key !== 'ArrowLeft' &&
      event.key !== 'ArrowRight' &&
      event.key !== 'ArrowUp' &&
      event.key !== 'ArrowDown'
    ) {
      return;
    }
    event.preventDefault();
    const delta = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
    const nextIndex = (index + delta + options.length) % options.length;
    const nextOption = options[nextIndex];
    select(nextOption.id);
    const group = event.currentTarget.closest(`[role="radiogroup"]`);
    (group?.querySelector(`[data-option-id="${nextOption.id}"]`) as HTMLElement | null)?.focus();
  }

  const focusedId = value ?? options[0]?.id;

  return (
    <div className={styles.root}>
      <span id={labelId} className={styles.label}>
        {label}
      </span>
      <div
        className={
          variant === 'tile'
            ? `${styles.group} ${styles.groupTile}`
            : `${styles.group} ${styles.groupIcon}`
        }
        role="radiogroup"
        aria-labelledby={labelId}
      >
        {options.map((option, index) => {
          const selected = value === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              data-option-id={option.id}
              aria-checked={selected}
              aria-label={option.label}
              title={variant === 'tile' ? option.label : undefined}
              tabIndex={disabled ? -1 : focusedId === option.id ? 0 : -1}
              disabled={disabled}
              className={
                selected
                  ? `${styles.option} ${variant === 'tile' ? styles.optionTile : styles.optionIcon} ${styles.optionSelected}`
                  : `${styles.option} ${variant === 'tile' ? styles.optionTile : styles.optionIcon}`
              }
              onClick={() => select(option.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className={styles.icon} aria-hidden="true">
                {option.icon}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

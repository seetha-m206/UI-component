import { useId, type ReactNode } from 'react';
import styles from './CardListSelector.module.css';

export interface CardListSelectorItem {
  id: string;
  /** Icon content for the card. Zoho's own implementations render icons from
   * CSS sprite sheets (two separate, product-specific sprite assets — see
   * this folder's README); this reconstruction takes an icon as a React
   * node instead, since the original sprite images aren't available in this
   * repository. */
  icon: ReactNode;
  title: string;
  description: string;
}

export interface CardListSelectorProps {
  /** The list of cards to render. */
  items: CardListSelectorItem[];
  /** The currently selected card's id, or null if nothing is selected. */
  value: string | null;
  onChange?: (id: string) => void;
  disabled?: boolean;
  /** Accessible name for the group (rendered visually above the cards). */
  label: string;
  /** 'list' stacks cards in a single column (Share sidebar pattern, the
   * variant with a confirmed selected-state treatment). 'grid' arranges them
   * in a responsive multi-column grid (New-Form chooser pattern). Defaults
   * to 'list'. */
  layout?: 'list' | 'grid';
}

/**
 * Reconstructed from Zoho Forms' "card-list selector" visual pattern
 * (icon + title + description card). The source research record found this
 * pattern independently re-implemented in three separate screens (New Form
 * chooser, Share sidebar, Create-From-Scratch form-type picker) with three
 * different DOM structures, click-binding mechanisms, and icon sprite
 * sheets — not one shared component. This reconstruction builds ONE
 * general, reusable version of the pattern itself, modeled most closely on
 * the Share sidebar variant, since it is the only one of the three with a
 * confirmed, capturable selected-vs-unselected visual state (a `select`
 * class toggle — background/border color change, no hover-state
 * difference was measurable on any of the three variants). See this
 * folder's README for the full evidence breakdown and every deviation.
 */
export function CardListSelector({
  items,
  value,
  onChange,
  disabled = false,
  label,
  layout = 'list',
}: CardListSelectorProps) {
  const labelId = useId();

  function select(id: string) {
    if (disabled) return;
    // Observed behavior (Share sidebar): clicking a card swaps the `select`
    // class from the previously active card to the clicked one — there is
    // no re-click-to-deselect branch documented anywhere in the source
    // record (unlike yes-no-toggle-field / rating-star-field, which do
    // toggle off). This pattern behaves like a tab list: exactly one card
    // is normally selected, and re-clicking the already-selected card is a
    // no-op rather than clearing it.
    onChange?.(id);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (disabled) return;
    const isNext = event.key === 'ArrowDown' || event.key === 'ArrowRight';
    const isPrev = event.key === 'ArrowUp' || event.key === 'ArrowLeft';
    if (!isNext && !isPrev) return;
    event.preventDefault();
    // Clamped, not wrapping — not observed in the source (no keydown
    // handler was found on any of the three variants; this is a deliberate
    // accessibility addition, not a verified reproduction of Zoho's
    // keyboard behavior, which may have none at all — see README).
    const nextIndex = Math.min(items.length - 1, Math.max(0, index + (isNext ? 1 : -1)));
    const nextItem = items[nextIndex];
    if (!nextItem) return;
    select(nextItem.id);
    const group = event.currentTarget.closest(`[role="radiogroup"]`);
    (group?.querySelector(`[data-item-id="${nextItem.id}"]`) as HTMLElement | null)?.focus();
  }

  const focusedId = value ?? items[0]?.id;

  return (
    <div className={styles.root}>
      <span id={labelId} className={styles.label}>
        {label}
      </span>
      <div
        className={layout === 'grid' ? `${styles.group} ${styles.grid}` : styles.group}
        role="radiogroup"
        aria-labelledby={labelId}
      >
        {items.map((item, index) => {
          const selected = value === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              data-item-id={item.id}
              aria-checked={selected}
              tabIndex={disabled ? -1 : focusedId === item.id ? 0 : -1}
              disabled={disabled}
              className={selected ? `${styles.card} ${styles.cardSelected}` : styles.card}
              onClick={() => select(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className={styles.icon} aria-hidden="true">
                {item.icon}
              </span>
              <span className={styles.text}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.description}>{item.description}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

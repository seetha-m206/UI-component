import { useEffect, useId, useRef, useState } from 'react';
import styles from './FormOverflowMenu.module.css';

export interface FormOverflowMenuItem {
  id: string;
  label: string;
  /** Renders the item's label in the destructive (red) treatment — observed
   *  scoped to the inner <span>, not the row background (see Technical Data
   *  in the research record). */
  destructive?: boolean;
  /** Draws a divider line above this item, matching the three visual
   *  clusters documented in the source: {Info, Duplicate, Enable/Disable},
   *  {Move to Folder, Change Ownership, Change Form Type}, {Trash}. */
  dividerBefore?: boolean;
}

/** The 7 desktop-visible items and grouping documented in the research
 * record's Structure/Technical Data sections. The 4 mobile-only items
 * (Edit, All Entries, Mail, Quick Share) that share the same underlying
 * `<ul>` but are hidden via CSS on desktop are intentionally not
 * reconstructed here — this preview models the desktop overflow menu. */
export const DEFAULT_FORM_OVERFLOW_ITEMS: FormOverflowMenuItem[] = [
  { id: 'info', label: 'Info' },
  { id: 'duplicate', label: 'Duplicate' },
  { id: 'change_status', label: 'Enable / Disable' },
  { id: 'moveToFolder', label: 'Move to Folder', dividerBefore: true },
  { id: 'change_owner', label: 'Change Ownership' },
  { id: 'switchLayoutType', label: 'Change Form Type' },
  { id: 'trash', label: 'Trash', destructive: true, dividerBefore: true },
];

export interface FormOverflowMenuProps {
  /** Name of the form the menu acts on; used in the trigger's accessible name. */
  formName: string;
  /** Menu items to render. Defaults to the 7 desktop items documented in the
   * research record. */
  items?: FormOverflowMenuItem[];
  /** Disables the trigger entirely (e.g. a locked/archived form row). */
  disabled?: boolean;
  /** Seeds the menu's initial open/closed state (this is an uncontrolled
   * widget — open/close state lives inside the component, same as the real
   * Zoho menu, which was observed to open/close with 0 network requests). */
  initialOpen?: boolean;
  /** Called when any non-destructive, non-status item is selected. */
  onSelect?: (itemId: string) => void;
  /**
   * Called instead of onSelect when the "Enable / Disable" item is chosen.
   * In the real product this opens a confirmation modal (fetches current
   * status via GET, then a `cusRadioButton` Enable/Disable radio pair) —
   * modeled here as a callback rather than a rebuilt modal, matching the
   * scoping decision made for onDelete below.
   */
  onEnableDisable?: () => void;
  /**
   * Called instead of onSelect when the destructive "Trash" item is chosen.
   * In the real product this would trigger a confirmation dialog; that
   * dialog is intentionally out of scope for this preview — the callback
   * stands in for "hand off to the next screen/state."
   */
  onDelete?: () => void;
}

/**
 * Reconstructed from Zoho Forms' per-form "⋮" overflow ("More Actions")
 * menu. Source markup is a single shared `<ul>` with 15 `<li>` covering both
 * a desktop and a CSS-hidden mobile variant; this preview reconstructs the
 * 7 desktop-visible items and their divider grouping. The source's trigger
 * click handler was not decoded (likely event-delegated, no direct
 * `onclick` found), so the open/close mechanics here are a standard
 * accessible menu-button implementation, not a literal reproduction of
 * Zoho's own JS — see README for the full evidence breakdown.
 */
export function FormOverflowMenu({
  formName,
  items = DEFAULT_FORM_OVERFLOW_ITEMS,
  disabled = false,
  initialOpen = false,
  onSelect,
  onEnableDisable,
  onDelete,
}: FormOverflowMenuProps) {
  const [open, setOpen] = useState(initialOpen);
  const [activeIndex, setActiveIndex] = useState(0);
  // Set when the menu should move DOM focus onto activeIndex as soon as its
  // items exist (e.g. just-opened via click/keyboard) — consumed by the
  // effect below, rather than a requestAnimationFrame callback, so focus
  // lands deterministically once React has committed the open menu's DOM.
  const [pendingFocus, setPendingFocus] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const menuId = useId();
  const triggerId = useId();

  useEffect(() => {
    if (open && pendingFocus) {
      itemRefs.current[activeIndex]?.focus();
      setPendingFocus(false);
    }
  }, [open, pendingFocus, activeIndex]);

  function openMenu(startIndex = 0) {
    if (disabled) return;
    setOpen(true);
    setActiveIndex(startIndex);
    setPendingFocus(true);
  }

  function closeMenu(refocusTrigger = true) {
    setOpen(false);
    if (refocusTrigger) triggerRef.current?.focus();
  }

  function selectItem(item: FormOverflowMenuItem) {
    if (item.id === 'trash') {
      onDelete?.();
    } else if (item.id === 'change_status') {
      onEnableDisable?.();
    } else {
      onSelect?.(item.id);
    }
    closeMenu();
  }

  function handleTriggerKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openMenu(0);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      openMenu(items.length - 1);
    }
  }

  function handleMenuKeyDown(event: React.KeyboardEvent<HTMLUListElement>) {
    // Arrow-key / Home / End roving navigation is a standard accessible
    // menu pattern, not verified from the source — the record notes the
    // menu's open trigger wasn't decoded beyond "likely delegated," and no
    // keydown handling was captured for the item list at all. Flagged in
    // README as an assumption, same precedent as yes-no-toggle-field and
    // rating-star-field's arrow-key handling.
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        closeMenu();
        break;
      case 'ArrowDown': {
        event.preventDefault();
        const next = (activeIndex + 1) % items.length;
        setActiveIndex(next);
        itemRefs.current[next]?.focus();
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        const prev = (activeIndex - 1 + items.length) % items.length;
        setActiveIndex(prev);
        itemRefs.current[prev]?.focus();
        break;
      }
      case 'Home': {
        event.preventDefault();
        setActiveIndex(0);
        itemRefs.current[0]?.focus();
        break;
      }
      case 'End': {
        event.preventDefault();
        setActiveIndex(items.length - 1);
        itemRefs.current[items.length - 1]?.focus();
        break;
      }
      case 'Tab':
        // Tabbing out of the menu is treated as a close, matching standard
        // menu-button expectations.
        closeMenu(false);
        break;
      default:
        break;
    }
  }

  // Outside-click dismissal.
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        closeMenu(false);
      }
    }
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        id={triggerId}
        ref={triggerRef}
        className={styles.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={`More actions for ${formName}`}
        disabled={disabled}
        onClick={() => (open ? closeMenu() : openMenu())}
        onKeyDown={handleTriggerKeyDown}
      >
        <svg viewBox="0 0 24 24" className={styles.dotsIcon} aria-hidden="true">
          <circle cx="12" cy="5" r="1.8" />
          <circle cx="12" cy="12" r="1.8" />
          <circle cx="12" cy="19" r="1.8" />
        </svg>
      </button>

      {open && (
        <ul
          id={menuId}
          role="menu"
          aria-labelledby={triggerId}
          className={styles.menu}
          onKeyDown={handleMenuKeyDown}
        >
          {items.map((item, index) => (
            <li
              key={item.id}
              role="none"
              className={item.dividerBefore ? `${styles.dividerGroup}` : undefined}
            >
              <button
                type="button"
                role="menuitem"
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                tabIndex={activeIndex === index ? 0 : -1}
                className={
                  item.destructive ? `${styles.item} ${styles.itemDestructive}` : styles.item
                }
                onClick={() => selectItem(item)}
                onFocus={() => setActiveIndex(index)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

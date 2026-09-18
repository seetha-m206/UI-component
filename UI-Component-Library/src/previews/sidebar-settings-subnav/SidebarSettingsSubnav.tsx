import { useId } from 'react';
import styles from './SidebarSettingsSubnav.module.css';

export interface SidebarNavItem {
  /** Stable identifier for the section (e.g. matches Zoho's `<sectionId>LI`/`<sectionId>link` pair). */
  id: string;
  /** Visible nav item text. */
  label: string;
  /** Optional decorative glyph shown before the label (aria-hidden). Source uses a sprite-based icon `<div>`; this reconstruction accepts any short glyph/character in its place. */
  icon?: string;
}

export interface SidebarSettingsSubnavProps {
  /** Ordered list of settings-category nav items. */
  items: SidebarNavItem[];
  /** id of the currently active item. */
  value: string;
  /** Called with the clicked item's id. Not called when clicking the already-active item (observed: real component has no toggle-off/deselect state — exactly one item is always active). */
  onChange?: (id: string) => void;
  /** Prevents any interaction when true. Defaults to false. */
  disabled?: boolean;
  /** Accessible name for the nav landmark. Defaults to "Settings". */
  label?: string;
}

/**
 * Reconstructed from Zoho Forms' Form Settings sidebar sub-navigation
 * (`#storageSettingsUL` / `.formSettingsList`, driven by the shared
 * `ZFForm.formSetting.formSettings(sectionId)` handler). The real product
 * click handler does two things this preview deliberately keeps separate:
 * (1) an instant client-side `select` class toggle — reproduced here as the
 * `value`/`onChange` active-item swap; and (2) two server fetches (a panel
 * HTML template + that section's saved settings JSON) that re-render the
 * content pane to the right of/below the list — NOT reproduced, since this
 * is a static docs preview with no backend. `onChange` stands in for "the
 * host application would now fetch and swap the content pane"; it never
 * calls fetch/XHR itself.
 *
 * The source record also documents a real-product anomaly: two overlapping
 * sidebar DOM trees at the same screen position, one of them dead
 * (0x0, non-interactive leftover markup from an in-progress redesign). That
 * is a defect in Zoho's markup, not a pattern to preserve — this
 * reconstruction renders a single, clean nav-item list.
 */
export function SidebarSettingsSubnav({
  items,
  value,
  onChange,
  disabled = false,
  label = 'Settings',
}: SidebarSettingsSubnavProps) {
  const navId = useId();

  function select(id: string) {
    if (disabled) return;
    // Observed behavior: unlike the toggle/rating fields in this product,
    // the settings nav has no deselect state — clicking the already-active
    // item is a no-op (nothing to fetch/swap; it's already showing).
    if (id === value) return;
    onChange?.(id);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (disabled) return;
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
    event.preventDefault();
    const delta = event.key === 'ArrowUp' ? -1 : 1;
    const nextIndex = (index + delta + items.length) % items.length;
    const nextItem = items[nextIndex];
    select(nextItem.id);
    const list = event.currentTarget.closest(`[data-subnav-list]`);
    (list?.querySelector(`[data-item-id="${nextItem.id}"]`) as HTMLElement | null)?.focus();
  }

  const hasActiveItem = items.some((item) => item.id === value);
  const focusedId = hasActiveItem ? value : items[0]?.id;

  return (
    <nav className={styles.root} aria-label={label} id={navId}>
      <ul className={styles.list} data-subnav-list>
        {items.map((item, index) => {
          const active = item.id === value;
          return (
            <li key={item.id} className={styles.listItem}>
              <button
                type="button"
                data-item-id={item.id}
                aria-current={active ? 'true' : undefined}
                tabIndex={disabled ? -1 : item.id === focusedId ? 0 : -1}
                disabled={disabled}
                className={active ? `${styles.link} ${styles.linkActive}` : styles.link}
                onClick={() => select(item.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {item.icon && (
                  <span className={styles.icon} aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                <span className={styles.label}>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

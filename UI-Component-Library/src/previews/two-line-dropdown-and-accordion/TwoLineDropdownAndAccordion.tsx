import { useEffect, useId, useRef, useState } from 'react';
import styles from './TwoLineDropdownAndAccordion.module.css';

export interface TwoLineOption {
  value: string;
  /** Primary label line, e.g. "Modify Form". */
  title: string;
  /** Smaller secondary description line, e.g. "Modify form & configurations, Submit form". */
  subtitle: string;
}

export interface AccordionSectionInput {
  id: string;
  title: string;
  content: string;
}

export interface TwoLineDropdownAndAccordionProps {
  // ---- Two-line dropdown (e.g. the Share -> Specific Users Permission selector) ----
  dropdownOptions: TwoLineOption[];
  dropdownValue: string;
  onDropdownChange?: (value: string) => void;
  dropdownLabel?: string;
  /** Disables the dropdown trigger. Named `disabled` (not `dropdownDisabled`) so this preview's harness "Disabled/Enabled" toggle control can drive it directly. */
  disabled?: boolean;

  // ---- Accordion (e.g. the Theme editor's Container tab) ----
  accordionSections: AccordionSectionInput[];
  /** Which section ids start open. Defaults to just the first section's id (matching the source's "Container" open-by-default, all others closed). */
  initialOpenSectionIds?: string[];
  onAccordionToggle?: (id: string, open: boolean) => void;
}

/**
 * Reconstructed from two unrelated Zoho Forms controls the source record
 * bundles into one component file: (1) the two-line-per-option Permission
 * dropdown from Share -> Specific Users (a Select2-styled widget with a
 * genuine title+subtitle wrapper per option, not two text nodes in one
 * element — see the source's captured DOM snippet), and (2) the
 * collapsible accordion sections on the Theme editor's Container tab.
 *
 * The accordion's real implementation uses jQuery's `.slideDown()`/
 * `.slideUp()` with a content-height-adaptive duration (400-800ms,
 * confirmed via the extracted `toggleOfElemCont` handler source) — a
 * genuine HEIGHT animation, explicitly documented as mechanically
 * different from the opacity-only fadeIn/fadeOut pattern used elsewhere in
 * this product (see [[toggle-radio-switch]]). This reconstruction cannot
 * replicate jQuery's per-pixel-scaled duration in plain CSS, so it
 * substitutes a fixed-duration CSS `grid-template-rows: 0fr -> 1fr`
 * transition instead — a different mechanism that preserves the
 * documented, meaningful contrast (height, not opacity) without claiming
 * the exact same timing curve.
 */
export function TwoLineDropdownAndAccordion({
  dropdownOptions,
  dropdownValue,
  onDropdownChange,
  dropdownLabel = 'Permission',
  disabled = false,
  accordionSections,
  initialOpenSectionIds,
  onAccordionToggle,
}: TwoLineDropdownAndAccordionProps) {
  const listboxId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Set<string>>(
    () => new Set(initialOpenSectionIds ?? (accordionSections[0] ? [accordionSections[0].id] : []))
  );

  const selected = dropdownOptions.find((o) => o.value === dropdownValue) ?? dropdownOptions[0];

  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (triggerRef.current && !triggerRef.current.parentElement?.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  function toggleDropdown() {
    if (disabled) return;
    setDropdownOpen((prev) => !prev);
  }

  function chooseOption(value: string) {
    setDropdownOpen(false);
    if (value !== dropdownValue) onDropdownChange?.(value);
    triggerRef.current?.focus();
  }

  function toggleSection(id: string) {
    setOpenSections((prev) => {
      const next = new Set(prev);
      const willBeOpen = !next.has(id);
      if (willBeOpen) next.add(id);
      else next.delete(id);
      onAccordionToggle?.(id, willBeOpen);
      return next;
    });
  }

  return (
    <div className={styles.root}>
      <section className={styles.dropdownSection}>
        <span className={styles.dropdownCaption}>{dropdownLabel}</span>
        <div className={styles.dropdownWrap}>
          <button
            ref={triggerRef}
            type="button"
            className={styles.dropdownTrigger}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
            aria-controls={listboxId}
            disabled={disabled}
            onClick={toggleDropdown}
            onKeyDown={(event) => {
              if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setDropdownOpen(true);
              }
            }}
          >
            <span>{selected?.title ?? ''}</span>
            <span className={styles.chevron} aria-hidden="true">
              &#9662;
            </span>
          </button>
          {dropdownOpen && (
            <ul
              id={listboxId}
              role="listbox"
              aria-label={dropdownLabel}
              className={styles.optionsList}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  event.preventDefault();
                  setDropdownOpen(false);
                  triggerRef.current?.focus();
                }
              }}
            >
              {dropdownOptions.map((option) => {
                const isSelected = option.value === dropdownValue;
                return (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={isSelected}
                    aria-label={option.title}
                    tabIndex={-1}
                    className={
                      isSelected ? `${styles.option} ${styles.optionSelected}` : styles.option
                    }
                    onClick={() => chooseOption(option.value)}
                  >
                    <span className={styles.optionTitle}>{option.title}</span>
                    <span className={styles.optionSubtitle}>{option.subtitle}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      <section className={styles.accordion}>
        {accordionSections.map((section) => {
          const open = openSections.has(section.id);
          return (
            <div key={section.id} className={styles.accordionItem}>
              <button
                type="button"
                className={open ? `${styles.accordionHeader} ${styles.accordionHeaderOpen}` : styles.accordionHeader}
                aria-expanded={open}
                aria-controls={`${section.id}-panel`}
                onClick={() => toggleSection(section.id)}
              >
                <span
                  className={open ? `${styles.accordionChevron} ${styles.accordionChevronOpen}` : styles.accordionChevron}
                  aria-hidden="true"
                >
                  &#9656;
                </span>
                {section.title}
              </button>
              {/*
                Genuine height-based reveal via CSS grid-template-rows
                (0fr -> 1fr), not an opacity fade and not display:none/block
                toggling — content stays mounted at all times, matching the
                source's own "content stays in the DOM at all times" note.
              */}
              <div
                id={`${section.id}-panel`}
                className={open ? `${styles.accordionPanel} ${styles.accordionPanelOpen}` : styles.accordionPanel}
              >
                <div className={styles.accordionPanelInner}>
                  <p className={styles.accordionContentText}>{section.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

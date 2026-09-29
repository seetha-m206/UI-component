import { useEffect, useRef, useState } from 'react';
import styles from './PaperformTooltip.module.css';

export interface PaperformTooltipProps {
  disabled?: boolean;
}

/**
 * Reconstructed from Paperform's icon-only info affordances (see
 * Research-Library/04-Component-Library/paperform/paperform-tooltip.md,
 * PF14, 2026-09-28).
 *
 * Confirmed and reproduced faithfully: hovering either icon does NOTHING —
 * no `onMouseEnter`/`onMouseOver` handler is wired to show anything, matching
 * the source's confirmed (tested twice per icon) absence of any hover
 * reveal. Clicking opens a small floating text box anchored to the icon,
 * dismissed by clicking anywhere else (a plain `MuiPopover`-style
 * click-away, not a hover-out or timeout) — reproduced via a
 * document-level click listener. No keyboard/focus-triggered variant was
 * confirmed in the source, so none is added here beyond native button
 * focusability.
 */
export function PaperformTooltip({ disabled = false }: PaperformTooltipProps) {
  const [openPopover, setOpenPopover] = useState<'columns' | 'visibility' | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!openPopover) return;
    function handleClick(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpenPopover(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openPopover]);

  function toggle(icon: 'columns' | 'visibility') {
    if (disabled) return;
    setOpenPopover((current) => (current === icon ? null : icon));
  }

  return (
    <div className={styles.root} data-disabled={disabled} ref={rootRef}>
      <div className={styles.row}>
        <span>Make question one of two columns</span>
        <span className={styles.iconWrap}>
          <button
            type="button"
            className={styles.infoIcon}
            aria-label="More info about columns"
            aria-expanded={openPopover === 'columns'}
            disabled={disabled}
            onClick={() => toggle('columns')}
          >
            ⓘ
          </button>
          {openPopover === 'columns' && (
            <div className={styles.popover} role="tooltip">
              Two questions must be next to each other for this to be enabled. Columns aren&apos;t
              visible in the editor.
            </div>
          )}
        </span>
      </div>

      <div className={styles.row}>
        <span>Question visibility logic</span>
        <span className={styles.iconWrap}>
          <button
            type="button"
            className={styles.infoIcon}
            aria-label="More info about question visibility"
            aria-expanded={openPopover === 'visibility'}
            disabled={disabled}
            onClick={() => toggle('visibility')}
          >
            ⓘ
          </button>
          {openPopover === 'visibility' && (
            <div className={styles.popover} role="tooltip">
              Question is always visible.
            </div>
          )}
        </span>
      </div>

      <p className={styles.hint}>Hovering either ⓘ icon does nothing — click to reveal, click away to dismiss.</p>
    </div>
  );
}

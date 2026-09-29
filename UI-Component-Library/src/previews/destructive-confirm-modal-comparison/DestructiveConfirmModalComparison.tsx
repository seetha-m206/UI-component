import { useEffect, useId, useRef, useState } from 'react';
import styles from './DestructiveConfirmModalComparison.module.css';

export type ActiveModal = 'closed' | 'trash' | 'exit-warning';

export interface DestructiveConfirmModalComparisonProps {
  /** Which modal (if any) is open on mount. Defaults to 'closed' (just the
   * two trigger buttons). Both modals are uncontrolled after mount, same
   * pattern as new-form-chooser/form-overflow-menu. */
  initialActiveModal?: ActiveModal;
  /** Name shown in Modal 1's body next to the document icon. */
  formName?: string;
  /** Count shown in Modal 1's gray "Submitted Entries" info box. */
  submittedEntries?: number;
  /** Prevents either trigger from opening its modal. Not documented in the
   * source (no disabled state was observed for either trigger) — included
   * for harness/fixture consistency with other previews in this repo. */
  disabled?: boolean;
  /** Modal 1 "No" (`hideTrashFormPopUp`) — dismiss, form stays untouched. */
  onTrashCancel?: () => void;
  /** Modal 1 "Yes" (`#trashbtn`) — NOT exercised in the source record
   * (destructive, never actually clicked during research); stands in for
   * the real trash action. */
  onTrashConfirm?: () => void;
  /** Modal 2 "No" (`cancelCloseCustomTheme` — a plain jQuery `.fadeOut()`
   * one-liner) — dismiss, unsaved theme change stays visible. */
  onExitCancel?: () => void;
  /** Modal 2 "Yes" (`confirmCancelThemeBuilder(true)`) — discards the
   * unsaved change and returns to the Themes tab. */
  onExitConfirm?: () => void;
}

/**
 * Reconstructed from the Zoho Forms record documenting TWO independently
 * built destructive-confirmation modal systems in the same product: the
 * dashboard "⋮" → Trash confirmation ("Move to Trash?"), and the full-screen
 * Theme editor's close-with-unsaved-changes warning ("Alert: Changes are not
 * applied..."). The record's central, decisive finding is that these are NOT
 * a shared component with two skins — different backdrop/card classes,
 * different CSS transition strategies (a property-scoped transition driving
 * a class-toggled "activeAnimate" entrance vs. a generic/inherited
 * `transition: all` with no transform-based entrance, closed via an
 * imperative jQuery `.fadeOut()`), different icon/button markup, and
 * handlers living in namespaces (`ZFForm.manager.*` vs. bare globals) that
 * aren't even both reachable from the same page execution context (`ZFForm`
 * does not exist inside the theme editor at all). This reconstruction keeps
 * that structural gap visible rather than building two lookalike dialogs:
 * Modal 1 animates in (opacity/transform, 0.5s) matching its `activeAnimate`
 * naming; Modal 2 appears instantly with no scoped entrance transition,
 * matching its "generic inherited `transition: all`" computed style. See
 * the registry evidence string for what's directly captured vs. assumed.
 */
export function DestructiveConfirmModalComparison({
  initialActiveModal = 'closed',
  formName = 'Customer Feedback Form',
  submittedEntries = 128,
  disabled = false,
  onTrashCancel,
  onTrashConfirm,
  onExitCancel,
  onExitConfirm,
}: DestructiveConfirmModalComparisonProps) {
  const [activeModal, setActiveModal] = useState<ActiveModal>(initialActiveModal);

  function openTrash() {
    if (disabled) return;
    setActiveModal('trash');
  }

  function openExitWarning() {
    if (disabled) return;
    setActiveModal('exit-warning');
  }

  function closeAll() {
    setActiveModal('closed');
  }

  function handleTrashNo() {
    onTrashCancel?.();
    closeAll();
  }

  function handleTrashYes() {
    onTrashConfirm?.();
    closeAll();
  }

  function handleExitNo() {
    onExitCancel?.();
    closeAll();
  }

  function handleExitYes() {
    onExitConfirm?.();
    closeAll();
  }

  return (
    <div className={styles.root}>
      <div className={styles.triggerRow}>
        <button type="button" className={styles.triggerButton} onClick={openTrash} disabled={disabled}>
          Trigger Trash Delete
        </button>
        <button
          type="button"
          className={styles.triggerButton}
          onClick={openExitWarning}
          disabled={disabled}
        >
          Trigger Exit Warning
        </button>
      </div>

      {activeModal === 'trash' && (
        <TrashModal
          formName={formName}
          submittedEntries={submittedEntries}
          onNo={handleTrashNo}
          onYes={handleTrashYes}
        />
      )}

      {activeModal === 'exit-warning' && (
        <ExitWarningModal onNo={handleExitNo} onYes={handleExitYes} />
      )}
    </div>
  );
}

interface TrashModalProps {
  formName: string;
  submittedEntries: number;
  onNo: () => void;
  onYes: () => void;
}

/**
 * Mounted fresh every time Modal 1 opens (the parent conditionally renders
 * it), so its own `active` state always starts at `false` on mount with no
 * synchronous reset needed — the rAF callback below is the only state
 * update, one tick after mount, so the opacity/transform CSS transition
 * declared in the stylesheet actually runs (the "activeAnimate" pattern
 * implied by the source's own class name).
 */
function TrashModal({ formName, submittedEntries, onNo, onYes }: TrashModalProps) {
  const [active, setActive] = useState(false);
  const headingId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const raf = requestAnimationFrame(() => setActive(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      onNo();
    }
  }

  return (
    <div className={active ? `${styles.trashOverlay} ${styles.trashOverlayActive}` : styles.trashOverlay}>
      <div
        className={active ? `${styles.trashCard} ${styles.trashCardActive}` : styles.trashCard}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        onKeyDown={handleKeyDown}
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.trashCloseButton}
          onClick={onNo}
          aria-label="Close"
        >
          <CloseIcon />
        </button>

        <div className={styles.trashHeader}>
          <span className={styles.trashIconCircle} aria-hidden="true">
            <TrashIcon />
            <span className={styles.sparkleDot} />
            <span className={`${styles.sparkleDot} ${styles.sparkleDot2}`} />
            <span className={`${styles.sparkleDot} ${styles.sparkleDot3}`} />
          </span>
          <h2 id={headingId} className={styles.trashHeadline}>
            Move to Trash?
          </h2>
        </div>

        <div className={styles.trashBody}>
          <p className={styles.trashFormName}>
            <DocIcon /> {formName}
          </p>
          <ul className={styles.trashWarningList}>
            <li>This form will be moved to Trash and permanently deleted after 15 days.</li>
            <li>
              All entries and reports associated with this form will become inaccessible while
              it&rsquo;s in Trash.
            </li>
          </ul>
          <div className={styles.trashInfoBox}>Submitted Entries: {submittedEntries}</div>
        </div>

        <div className={styles.trashFooter}>
          <button type="button" className={styles.trashNoButton} onClick={onNo}>
            No
          </button>
          <button type="button" className={styles.trashYesButton} onClick={onYes}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

interface ExitWarningModalProps {
  onNo: () => void;
  onYes: () => void;
}

/**
 * Deliberately has NO equivalent entrance-animation state to TrashModal
 * above — it renders at full opacity/scale the instant it mounts, matching
 * the source's "no transform-based entrance registered" / generic
 * `transition: all` finding for this modal.
 */
function ExitWarningModal({ onNo, onYes }: ExitWarningModalProps) {
  const headingId = useId();
  const noRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    noRef.current?.focus();
  }, []);

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      onNo();
    }
  }

  return (
    <div className={styles.exitOverlay}>
      <div
        className={styles.exitCard}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.exitHeader}>
          <span className={styles.exitIcon} aria-hidden="true">
            <WarningTriangleIcon />
          </span>
          <h2 id={headingId} className={styles.exitHeadline}>
            Alert
          </h2>
        </div>

        <div className={styles.exitBody}>
          <p>
            Changes are not applied. Are you sure you want to exit without saving your theme
            changes?
          </p>
        </div>

        <div className={styles.exitFooter}>
          <button ref={noRef} type="button" className={styles.exitNoButton} onClick={onNo}>
            No
          </button>
          <button type="button" className={styles.exitYesButton} onClick={onYes}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.closeIcon} aria-hidden="true">
      <path
        d="M3 3l10 10M13 3L3 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.trashIcon} aria-hidden="true">
      <path
        d="M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.docIcon} aria-hidden="true">
      <path
        d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm7 0v4h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function WarningTriangleIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.warningIcon} aria-hidden="true">
      <path
        d="M12 4 2 20h20L12 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M12 10v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" />
    </svg>
  );
}

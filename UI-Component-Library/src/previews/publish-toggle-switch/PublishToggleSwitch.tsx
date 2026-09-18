import { useEffect, useId, useRef, useState } from 'react';
import styles from './PublishToggleSwitch.module.css';

export type PublishStatus = 'enabled' | 'disabled';

export interface PublishToggleSwitchProps {
  status: PublishStatus;
  onChange?: (status: PublishStatus) => void;
  disabled?: boolean;
  label: string;
  description?: string;
}

/**
 * Reconstructed from Zoho Forms' Share-workflow "Publish"/public-sharing
 * switch (`label.switchContainer` + `span.textOn`/`span.textOff` + a
 * separate `<i class="switch">` knob element, module `ZFShare.zfShare`).
 *
 * This is a fourth, structurally distinct toggle implementation in the same
 * product (see the research record's Cross-Component Pattern Note) and the
 * only one of the four with a captured asymmetric confirm-gate: turning
 * sharing OFF (Enabled -> Disabled) opens a client-side-only confirm dialog
 * (`confirmDisablePerma()`, `reqCount: 0` at open time — confirmed via a
 * request-count hook, no network call yet); turning it back ON is a direct,
 * ungated call (`enableFormPerma()`). That asymmetry is reproduced exactly.
 *
 * Deviations from the literal source markup are documented in this folder's
 * README (two separately-onclick-bound `<span>`s collapsed into one
 * `role="switch"` button; exact CSS values assumed since the source record
 * did not capture computed styles for this component, only a screenshot
 * description of "a standard green pill-switch with a sliding knob").
 */
export function PublishToggleSwitch({
  status,
  onChange,
  disabled = false,
  label,
  description,
}: PublishToggleSwitchProps) {
  const labelId = useId();
  const descId = useId();
  const modalTitleId = useId();
  const modalDescId = useId();

  const switchRef = useRef<HTMLButtonElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);

  // Local UI-only state (does not change `status` by itself): whether the
  // disable confirmation dialog is currently open.
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    if (confirmOpen) {
      cancelRef.current?.focus();
    }
  }, [confirmOpen]);

  function handleActivate() {
    if (disabled) return;
    if (status === 'enabled') {
      // Gated direction: observed source opens a confirm modal instead of
      // disabling immediately.
      setConfirmOpen(true);
    } else {
      // Ungated direction: observed source calls enableFormPerma() directly.
      onChange?.('enabled');
    }
  }

  function confirmDisable() {
    onChange?.('disabled');
    setConfirmOpen(false);
    switchRef.current?.focus();
  }

  function cancelDisable() {
    setConfirmOpen(false);
    switchRef.current?.focus();
  }

  function handleModalKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      event.preventDefault();
      cancelDisable();
      return;
    }
    // Minimal focus trap: only two focusable elements in the dialog (No,
    // Yes) — Tab/Shift+Tab cycle between them rather than escaping to the
    // page behind it. Not captured in the source (no keyboard behavior was
    // observed for this modal); a standard accessible dialog pattern.
    if (event.key === 'Tab') {
      event.preventDefault();
      const focusOnCancel = document.activeElement === cancelRef.current;
      (focusOnCancel ? confirmRef.current : cancelRef.current)?.focus();
    }
  }

  const describedBy = description ? descId : undefined;
  const enabled = status === 'enabled';

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <span id={labelId} className={styles.label}>
          {label}
        </span>
        {description && (
          <p id={descId} className={styles.description}>
            {description}
          </p>
        )}
      </div>

      <button
        ref={switchRef}
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-labelledby={labelId}
        aria-describedby={describedBy}
        disabled={disabled}
        className={
          enabled ? `${styles.switch} ${styles.switchOn}` : `${styles.switch} ${styles.switchOff}`
        }
        onClick={handleActivate}
      >
        <span className={styles.knob} aria-hidden="true" />
        <span className={`${styles.text} ${styles.textOn}`} aria-hidden="true">
          Enabled
        </span>
        <span className={`${styles.text} ${styles.textOff}`} aria-hidden="true">
          Disabled
        </span>
      </button>

      {confirmOpen && (
        <div className={styles.modalOverlay} onKeyDown={handleModalKeyDown}>
          <div
            className={styles.modal}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby={modalTitleId}
            aria-describedby={modalDescId}
          >
            <h2 id={modalTitleId} className={styles.modalTitle}>
              Disable public sharing?
            </h2>
            <p id={modalDescId} className={styles.modalMessage}>
              This form will no longer be accessible through its Permalink URL and social media
              links. Forms embedded on websites will also be disabled.
            </p>
            <div className={styles.modalActions}>
              <button
                ref={cancelRef}
                type="button"
                className={styles.modalButtonSecondary}
                onClick={cancelDisable}
              >
                No
              </button>
              <button
                ref={confirmRef}
                type="button"
                className={styles.modalButtonDanger}
                onClick={confirmDisable}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

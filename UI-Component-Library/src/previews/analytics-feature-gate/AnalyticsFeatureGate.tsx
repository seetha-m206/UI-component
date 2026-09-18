import { useEffect, useId, useRef, useState } from 'react';
import styles from './AnalyticsFeatureGate.module.css';

export type GateType = 'free-toggle' | 'paywall';

export interface AnalyticsFeatureGateProps {
  /** Whether the gated content is currently hidden behind the blur+lock overlay. */
  locked: boolean;
  /**
   * Which real gate mechanism this instance represents. Both share the
   * *exact same* blur+lock visual treatment in the source product — see
   * this folder's README for why that is a real, documented ambiguity in
   * Zoho Forms itself, not a simplification introduced here.
   * - 'free-toggle': a genuine opt-in feature switch (the visible
   *   `switchAdvBtnElem` path). Confirming "Enable" in the modal calls
   *   `onUnlock` and is expected to flip `locked` to false.
   * - 'paywall': a plan-upgrade CTA (the dormant `upgradeAdvBtnElem` path,
   *   hidden in the source account but sharing the same
   *   `ZFUtil.upgradeAndshowReloadPopup` handler as the standalone
   *   Upgrade Now button). Clicking it calls `onUnlock` to hand off to the
   *   host app, but never unlocks the content itself — the caller decides
   *   whether/when `locked` ever becomes false for a paywall gate.
   */
  gateType: GateType;
  /**
   * Called when the user completes the gate's primary action: confirming
   * "Enable" in the free-toggle modal, or clicking the CTA on a paywall
   * gate. This component never changes its own `locked` state — the
   * caller decides what happens next (e.g. set `locked={false}` for
   * free-toggle; open a real upgrade flow for paywall).
   */
  onUnlock?: (gateType: GateType) => void;
  /**
   * Disables the gate's CTA button. Not observed in the source record
   * ("Loading/error/disabled states: not observed") — included for API
   * completeness as a flagged assumption, see README.
   */
  disabled?: boolean;
  /** Feature name shown in the gate overlay, e.g. "Advanced Metrics". */
  label: string;
  /** Helper copy shown under the label, describing what unlocking provides. */
  description: string;
}

interface DemoMetricRow {
  field: string;
  clicks: number;
  starts: number;
}

/**
 * Deterministic synthetic demo data standing in for the real structured
 * field-metric rows the source record confirms are genuine DOM text (not a
 * placeholder image), blurred via `filter: blur(6px)`. These exact numbers
 * are invented for this preview, not reproduced from the captured session.
 */
const DEMO_ROWS: DemoMetricRow[] = [
  { field: 'Single Line', clicks: 182, starts: 164 },
  { field: 'Multi Line', clicks: 201, starts: 193 },
  { field: 'Number', clicks: 96, starts: 88 },
  { field: 'Dropdown', clicks: 147, starts: 129 },
  { field: 'Checkbox', clicks: 73, starts: 61 },
];

/**
 * Reconstructed from Zoho Forms' Analytics → Deep Insights blur+lock gate
 * (`div.popAnalystics`). The source record documents two mechanisms sharing
 * one visual treatment: a visible opt-in toggle (`showAnalyticsProPopup` →
 * confirmation modal → `switchToAdvAnalytics`, zero network calls) and a
 * dormant paywall CTA (`upgradeAndshowReloadPopup`, never visible in the
 * tested account). `gateType` reproduces that split explicitly instead of
 * resolving it away — see README.
 *
 * The confirmation modal's copy is reproduced verbatim from the captured
 * DOM ("Enabling this will start collecting advanced metrics for this
 * form..."), since the record notes this is a genuine data-collection
 * consent notice, not monetization copy.
 */
export function AnalyticsFeatureGate({
  locked,
  gateType,
  onUnlock,
  disabled = false,
  label,
  description,
}: AnalyticsFeatureGateProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [ctaStatus, setCtaStatus] = useState<string | null>(null);
  const titleId = useId();
  const descId = useId();
  const dialogTitleId = useId();
  const ctaButtonRef = useRef<HTMLButtonElement>(null);
  const enableButtonRef = useRef<HTMLButtonElement>(null);

  // Note: no effect is needed to clear transient UI on unlock —
  // `confirmOpen` is already set false synchronously in
  // handleEnable/handleCancel before `onUnlock` ever fires, and `ctaStatus`
  // is only ever rendered inside the `{locked && ...}` overlay below, so a
  // stale value while unlocked is never shown.
  useEffect(() => {
    if (confirmOpen) {
      enableButtonRef.current?.focus();
    }
  }, [confirmOpen]);

  function handleCtaClick() {
    if (disabled) return;
    if (gateType === 'free-toggle') {
      setCtaStatus(null);
      setConfirmOpen(true);
      return;
    }
    // paywall: no modal — hands off immediately, mirroring the real
    // dormant upgradeAdvBtnElem handler, which never toggles the gate by
    // itself. The content stays locked until (and unless) the host decides
    // otherwise in response to onUnlock.
    setCtaStatus('Redirecting to upgrade… (no real navigation performed in this preview)');
    onUnlock?.('paywall');
  }

  function handleCancel() {
    setConfirmOpen(false);
    ctaButtonRef.current?.focus();
  }

  function handleEnable() {
    setConfirmOpen(false);
    onUnlock?.('free-toggle');
  }

  function handleDialogKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      handleCancel();
    }
  }

  const ctaLabel = gateType === 'paywall' ? 'Upgrade Now' : 'Enable Advanced Metrics';

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <div
          className={locked ? `${styles.content} ${styles.contentBlurred}` : styles.content}
          aria-hidden={locked || undefined}
        >
          <div className={styles.contentHeader}>
            <span>Field</span>
            <span>Clicks</span>
            <span>Starts</span>
          </div>
          {DEMO_ROWS.map((row) => (
            <div className={styles.contentRow} key={row.field}>
              <span>{row.field}</span>
              <span>{row.clicks}</span>
              <span>{row.starts}</span>
            </div>
          ))}
        </div>

        {locked && (
          <div
            className={styles.overlay}
            role="region"
            aria-labelledby={titleId}
            aria-describedby={descId}
          >
            <svg
              className={styles.lockIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6 10V8a6 6 0 1 1 12 0v2h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1zM8 10h8V8a4 4 0 1 0-8 0v2z" />
            </svg>
            <p id={titleId} className={styles.overlayTitle}>
              {label}
            </p>
            <p id={descId} className={styles.overlayDescription}>
              {description}
            </p>
            <button
              ref={ctaButtonRef}
              type="button"
              className={
                gateType === 'paywall'
                  ? `${styles.ctaButton} ${styles.ctaButtonPaywall}`
                  : styles.ctaButton
              }
              disabled={disabled}
              onClick={handleCtaClick}
            >
              {ctaLabel}
            </button>
            {ctaStatus && (
              <p className={styles.ctaStatus} role="status">
                {ctaStatus}
              </p>
            )}
          </div>
        )}
      </div>

      {confirmOpen && (
        <div className={styles.modalBackdrop}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            onKeyDown={handleDialogKeyDown}
          >
            <h4 id={dialogTitleId} className={styles.modalTitle}>
              Enable Advanced Metrics
            </h4>
            <p className={styles.modalBody}>
              Enabling this will start collecting advanced metrics for this form. Data will be
              collected from this point forward.
            </p>
            <div className={styles.modalActions}>
              <button type="button" className={styles.modalCancel} onClick={handleCancel}>
                Cancel
              </button>
              <button
                ref={enableButtonRef}
                type="button"
                className={styles.modalEnable}
                onClick={handleEnable}
              >
                Enable
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

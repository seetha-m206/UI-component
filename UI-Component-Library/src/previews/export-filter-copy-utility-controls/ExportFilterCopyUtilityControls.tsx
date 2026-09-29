import { useEffect, useId, useRef, useState } from 'react';
import styles from './ExportFilterCopyUtilityControls.module.css';

export type FormStatusFilter = 'all' | 'enabled' | 'disabled';

export interface ExportCsvDetails {
  fileName: string;
  passwordProtected: boolean;
}

export interface ExportFilterCopyUtilityControlsProps {
  /** Name of the form the Export/CSV modal acts on; also seeds the CSV
   * modal's pre-filled File Name (`<FormName>_Report`). */
  formName?: string;
  /** Shown in the CSV modal's info panel as the selected-entry count. */
  entryCount?: number;
  /** Shown in the CSV modal's info panel. The record confirms this note
   * exists ("the org's daily export-limit note") but not its exact wording
   * — this default text is a reasonable placeholder, not a captured string. */
  dailyExportLimitNote?: string;
  /** The readonly permalink text shown/copied by the copy-to-clipboard field. */
  permalink?: string;
  /** Starting selected status filter. Defaults to 'all'. */
  initialStatus?: FormStatusFilter;
  initialExportMenuOpen?: boolean;
  initialCsvModalOpen?: boolean;
  initialStatusMenuOpen?: boolean;
  /** Disables all three controls. Not documented in the source — included
   * for harness/fixture consistency with other previews in this repo. */
  disabled?: boolean;
  /** Fired when the CSV export modal's "Done" is clicked. Mirrors the
   * modal's two real inputs (File Name, "Protect with a password"). No real
   * export/download is implemented — the source itself was never taken past
   * this point ("Done" was not clicked, per the record's safety constraint). */
  onExportCsv?: (details: ExportCsvDetails) => void;
  /** Fired when "Export as PDF" is selected. The source only captured this
   * item's function name (`ZFReportLive.showExportPDFOptions()`), not its
   * modal's structure, so — matching form-overflow-menu's precedent for an
   * untraced follow-up screen — this is a callback only, no rebuilt modal. */
  onExportPdf?: () => void;
  /** Fired when a status filter option is chosen. In the real product this
   * triggers a real paginated server refetch (confirmed via network
   * capture); this reconstruction only updates local UI state — see the
   * registry evidence string. */
  onStatusChange?: (status: FormStatusFilter) => void;
  /** Fired with the copied text once the copy action completes. */
  onCopy?: (text: string) => void;
}

const STATUS_LABELS: Record<FormStatusFilter, string> = {
  all: 'All Forms',
  enabled: 'Active Forms',
  disabled: 'Disabled Forms',
};

const STATUS_ORDER: FormStatusFilter[] = ['all', 'enabled', 'disabled'];

/** Dismisses an open panel on outside click — same pattern already
 * established in form-overflow-menu. */
function useOutsideDismiss(
  ref: React.RefObject<HTMLElement | null>,
  open: boolean,
  onDismiss: () => void
) {
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) {
        onDismiss();
      }
    }
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
}

/**
 * Reconstructed from Zoho Forms' "Dashboard/Entries Utility Controls" record
 * — three controls the record bundles as one component even though they
 * live on three different real screens (Entries toolbar's Export icon, the
 * dashboard listing's "All Forms" status filter, and the Share → Public
 * tab's permalink field). That grouping is preserved here with clear
 * section captions, not implying the three sit together in the real
 * product. Two event-wiring conventions the record calls out are preserved
 * conceptually: the Export menu opens/closes with zero requests (confirmed:
 * even the CSV modal fires no request until a real "Done" click, never
 * exercised in the source), while status-filter selection is documented as
 * a real server round-trip — this reconstruction still only updates local
 * state (no live network calls ship in this static docs site), flagged in
 * the registry evidence string. The copy-to-clipboard field's confirmed
 * `document.execCommand('copy')` mechanism and its exact 600ms-shown +
 * 600ms-fade confirmation timing are reproduced structurally, using
 * `navigator.clipboard.writeText` instead of the legacy API — see evidence.
 */
export function ExportFilterCopyUtilityControls({
  formName = 'Customer Feedback Form',
  entryCount = 42,
  dailyExportLimitNote = "You've used 2 of 5 exports allowed today for your organization.",
  permalink = 'https://forms.zohopublic.in/acme/form/CustomerFeedbackForm/formperma/AbCdEf1234567890GhIjKl',
  initialStatus = 'all',
  initialExportMenuOpen = false,
  initialCsvModalOpen = false,
  initialStatusMenuOpen = false,
  disabled = false,
  onExportCsv,
  onExportPdf,
  onStatusChange,
  onCopy,
}: ExportFilterCopyUtilityControlsProps) {
  const exportHeadingId = useId();
  const statusHeadingId = useId();
  const csvModalHeadingId = useId();

  // ---- Export menu + CSV modal ----
  const exportRootRef = useRef<HTMLDivElement>(null);
  const [exportMenuOpen, setExportMenuOpen] = useState(initialExportMenuOpen);
  const [csvModalOpen, setCsvModalOpen] = useState(initialCsvModalOpen);
  const [csvFileName, setCsvFileName] = useState(`${formName}_Report`);
  const [csvPasswordProtected, setCsvPasswordProtected] = useState(false);
  useOutsideDismiss(exportRootRef, exportMenuOpen, () => setExportMenuOpen(false));

  function toggleExportMenu() {
    if (disabled) return;
    setExportMenuOpen((open) => !open);
  }

  function selectExportCsv() {
    setExportMenuOpen(false);
    setCsvFileName(`${formName}_Report`);
    setCsvPasswordProtected(false);
    setCsvModalOpen(true);
  }

  function selectExportPdf() {
    setExportMenuOpen(false);
    onExportPdf?.();
  }

  function cancelCsvModal() {
    setCsvModalOpen(false);
  }

  function confirmCsvModal() {
    onExportCsv?.({ fileName: csvFileName, passwordProtected: csvPasswordProtected });
    setCsvModalOpen(false);
  }

  // ---- Status filter ----
  const statusRootRef = useRef<HTMLDivElement>(null);
  const [statusMenuOpen, setStatusMenuOpen] = useState(initialStatusMenuOpen);
  const [status, setStatus] = useState<FormStatusFilter>(initialStatus);
  useOutsideDismiss(statusRootRef, statusMenuOpen, () => setStatusMenuOpen(false));

  function toggleStatusMenu() {
    if (disabled) return;
    setStatusMenuOpen((open) => !open);
  }

  function chooseStatus(next: FormStatusFilter) {
    setStatus(next);
    setStatusMenuOpen(false);
    onStatusChange?.(next);
  }

  // ---- Copy-to-clipboard permalink ----
  // Mirrors the source's confirmed jQuery mechanism — .show() immediately,
  // then .delay(600).fadeOut(600) — as a two-phase state machine instead of
  // the legacy document.execCommand('copy') call itself (see props doc /
  // registry evidence for why).
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [copyPhase, setCopyPhase] = useState<'idle' | 'shown' | 'fading'>('idle');
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(
    () => () => {
      clearTimeout(fadeTimeoutRef.current);
      clearTimeout(hideTimeoutRef.current);
    },
    []
  );

  function performCopy() {
    if (disabled) return;
    textAreaRef.current?.select();
    // navigator.clipboard may be unavailable (older browsers, some
    // sandboxed test environments) — the real implementation's own reason
    // for using the legacy execCommand('copy') API instead. Swallowing a
    // failure here only affects whether the OS clipboard was actually
    // written; the UI confirmation below is the reconstructed behavior.
    void navigator.clipboard?.writeText(permalink).catch(() => {});
    onCopy?.(permalink);

    clearTimeout(fadeTimeoutRef.current);
    clearTimeout(hideTimeoutRef.current);
    setCopyPhase('shown');
    fadeTimeoutRef.current = setTimeout(() => {
      setCopyPhase('fading');
      hideTimeoutRef.current = setTimeout(() => setCopyPhase('idle'), 600);
    }, 600);
  }

  return (
    <div className={styles.root}>
      <div className={styles.section} ref={exportRootRef}>
        <p className={styles.sectionCaption}>Entries toolbar — Export</p>
        <button
          type="button"
          className={styles.exportTrigger}
          aria-haspopup="menu"
          aria-expanded={exportMenuOpen}
          disabled={disabled}
          onClick={toggleExportMenu}
        >
          <ExportIcon />
          Export
        </button>
        {exportMenuOpen && (
          <ul id={exportHeadingId} role="menu" aria-label="Export options" className={styles.exportMenu}>
            <li role="none">
              <button type="button" role="menuitem" className={styles.exportMenuItem} onClick={selectExportCsv}>
                Export as CSV
              </button>
            </li>
            <li role="none">
              <button type="button" role="menuitem" className={styles.exportMenuItem} onClick={selectExportPdf}>
                Export as PDF
              </button>
            </li>
          </ul>
        )}

        {csvModalOpen && (
          <div className={styles.modalOverlay}>
            <div
              className={styles.csvModal}
              role="dialog"
              aria-modal="true"
              aria-labelledby={csvModalHeadingId}
            >
              <h2 id={csvModalHeadingId} className={styles.csvModalHeading}>
                Export as CSV
              </h2>

              <label className={styles.fieldLabel} htmlFor={`${csvModalHeadingId}-filename`}>
                File Name
              </label>
              <input
                id={`${csvModalHeadingId}-filename`}
                type="text"
                className={styles.textInput}
                value={csvFileName}
                onChange={(event) => setCsvFileName(event.currentTarget.value)}
              />

              <label className={styles.checkboxRow}>
                <input
                  type="checkbox"
                  checked={csvPasswordProtected}
                  onChange={(event) => setCsvPasswordProtected(event.currentTarget.checked)}
                />
                Protect with a password
              </label>

              <div className={styles.csvInfoPanel}>
                <p>{entryCount} entries selected.</p>
                <p>{dailyExportLimitNote}</p>
              </div>

              <div className={styles.csvModalActions}>
                <button type="button" className={styles.cancelButton} onClick={cancelCsvModal}>
                  Cancel
                </button>
                <button type="button" className={styles.doneButton} onClick={confirmCsvModal}>
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.section} ref={statusRootRef}>
        <p className={styles.sectionCaption}>Dashboard listing — Status filter</p>
        <button
          type="button"
          className={styles.statusTrigger}
          aria-haspopup="listbox"
          aria-expanded={statusMenuOpen}
          disabled={disabled}
          onClick={toggleStatusMenu}
        >
          {STATUS_LABELS[status]}
          <ChevronIcon />
        </button>
        {statusMenuOpen && (
          <ul id={statusHeadingId} role="listbox" aria-label="Filter forms by status" className={styles.statusMenu}>
            {STATUS_ORDER.map((option) => (
              <li key={option} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={status === option}
                  className={
                    status === option
                      ? `${styles.statusMenuItem} ${styles.statusMenuItemSelected}`
                      : styles.statusMenuItem
                  }
                  onClick={() => chooseStatus(option)}
                >
                  {STATUS_LABELS[option]}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.section}>
        <p className={styles.sectionCaption}>Share tab — Copy permalink</p>
        <div className={styles.copyFieldRow}>
          <textarea
            ref={textAreaRef}
            readOnly
            disabled={disabled}
            className={styles.copyTextArea}
            value={permalink}
            aria-label="Public form permalink"
            onClick={performCopy}
          />
          <button
            type="button"
            className={styles.copyButton}
            disabled={disabled}
            onClick={performCopy}
            aria-label="Copy permalink to clipboard"
          >
            Copy
          </button>
        </div>
        <span
          className={
            copyPhase === 'shown'
              ? `${styles.copyConfirmation} ${styles.copyConfirmationShown}`
              : copyPhase === 'fading'
                ? `${styles.copyConfirmation} ${styles.copyConfirmationFading}`
                : styles.copyConfirmation
          }
          role="status"
        >
          {copyPhase !== 'idle' ? 'Copied to clipboard.' : ''}
        </span>
      </div>
    </div>
  );
}

function ExportIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
      <path
        d="M12 3v12m0-12 4 4m-4-4-4 4M5 15v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.chevronIcon} aria-hidden="true">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

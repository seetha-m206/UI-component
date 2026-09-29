import { useId, useRef, useState } from 'react';
import styles from './FileUploadField.module.css';

export type FileUploadView = 'respondent' | 'entries';
export type RespondentUploadStatus = 'empty' | 'uploaded' | 'invalid';

export interface UploadedFileInfo {
  name: string;
  size: string;
}

export interface FileUploadFieldProps {
  /** Which documented surface to render: the respondent-facing published
   * form field, or the Entries-table hover/lightbox interaction. */
  view?: FileUploadView;
  /** Field label shown above the widget in 'respondent' view. */
  label?: string;
  /** Allowed file extensions (lowercase, no dot), e.g. ['pdf']. An empty
   * array means "all file types accepted" — the record's own documented
   * default. */
  allowedExtensions?: string[];
  disabled?: boolean;

  // ---- Respondent view ----
  /** Starting upload status on mount. Defaults to 'empty'. */
  initialStatus?: RespondentUploadStatus;
  /** File shown when initialStatus is 'uploaded'. */
  initialFile?: UploadedFileInfo;
  /** File name shown in the error row when initialStatus is 'invalid'. */
  initialRejectedFileName?: string;
  /** Fired once a valid file is accepted and the "uploaded" row appears. */
  onFileUploaded?: (file: UploadedFileInfo) => void;
  /** Fired when a selected file fails the allowed-extensions check. */
  onInvalidFileRejected?: (fileName: string) => void;
  /** Fired when the uploaded row's "×" remove control is used. */
  onFileRemoved?: () => void;
  /** Fired when Submit is clicked while status is 'uploaded' (or 'empty').
   * NEVER fired while status is 'invalid' — the record confirms this is
   * genuinely blocking, not cosmetic. */
  onSubmit?: () => void;

  // ---- Entries view ----
  /** The single completed-upload row shown in Entries view. */
  entriesFile?: UploadedFileInfo;
  /** Seeds the lightbox already open on mount. */
  initialLightboxOpen?: boolean;
  /** Fired when the Entries row's download icon (or the lightbox's own
   * download button) is used. */
  onDownload?: () => void;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(kb >= 10 ? 0 : 1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

function extensionOf(fileName: string): string {
  const parts = fileName.split('.');
  return parts.length > 1 ? (parts.pop() ?? '').toLowerCase() : '';
}

/**
 * Reconstructed from Zoho Forms' File Upload field record, covering the two
 * surfaces the task scoped in: the respondent-facing published-form widget
 * (`view="respondent"`) and the Entries-table hover/lightbox interaction
 * (`view="entries"`). The builder's Properties-panel configuration UI
 * (Allowed File Format(s), Upload Limit, File Size Min/Max, File Name
 * pattern, privacy toggles) is documented in the source record but
 * deliberately not reconstructed here — out of scope for this preview.
 *
 * Respondent view reproduces two confirmed findings precisely: a valid
 * upload shows an immediate "uploaded" row with NO progress bar (the
 * record's own XHR-interceptor capture found the real progress event fires
 * once, already at 100%, for small files — too fast for any determinate
 * progress UI to matter), and an invalid-type selection is genuinely
 * blocking at the UI level — Submit no-ops while the error row shows, even
 * though the record also found the raw bytes still reach the server before
 * the type check runs (a technical-architecture finding, not reproduced
 * here since no real upload endpoint exists in this static docs site — see
 * registry evidence).
 *
 * Entries view reproduces the confirmed hidden-until-hover affordance: the
 * eye/download icons only render while the row is hovered or
 * keyboard-focused, and the eye opens a lightbox with a filename header, a
 * mock zoom control, and a filmstrip strip — matching the record's
 * described structure. No real thumbnail image exists (the record itself
 * found only a generic gray file-icon placeholder, never a real thumbnail).
 */
export function FileUploadField({
  view = 'respondent',
  label = 'Upload a file',
  allowedExtensions = [],
  disabled = false,
  initialStatus = 'empty',
  initialFile,
  initialRejectedFileName,
  onFileUploaded,
  onInvalidFileRejected,
  onFileRemoved,
  onSubmit,
  entriesFile = { name: 'invoice_march.pdf', size: '184 KB' },
  initialLightboxOpen = false,
  onDownload,
}: FileUploadFieldProps) {
  const inputId = useId();
  const errorId = useId();
  const lightboxHeadingId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ---- Respondent view state ----
  const [status, setStatus] = useState<RespondentUploadStatus>(initialStatus);
  const [file, setFile] = useState<UploadedFileInfo | undefined>(
    initialStatus === 'uploaded' ? (initialFile ?? { name: 'resume.pdf', size: '212 KB' }) : undefined
  );
  const [rejectedFileName, setRejectedFileName] = useState<string | undefined>(
    initialStatus === 'invalid' ? (initialRejectedFileName ?? 'photo.png') : undefined
  );

  function handleFileSelected(selected: File) {
    if (disabled) return;
    const ext = extensionOf(selected.name);
    const allowed = allowedExtensions.length === 0 || allowedExtensions.includes(ext);
    if (allowed) {
      const info: UploadedFileInfo = { name: selected.name, size: formatBytes(selected.size) };
      setFile(info);
      setRejectedFileName(undefined);
      setStatus('uploaded');
      onFileUploaded?.(info);
    } else {
      setRejectedFileName(selected.name);
      setStatus('invalid');
      onInvalidFileRejected?.(selected.name);
    }
  }

  function removeFile() {
    if (disabled) return;
    setFile(undefined);
    setRejectedFileName(undefined);
    setStatus('empty');
    onFileRemoved?.();
  }

  function handleSubmit() {
    // Genuinely blocking, not cosmetic — the source record confirms Submit
    // is a no-op (no request, no navigation) while a type error is showing.
    if (disabled || status === 'invalid') return;
    onSubmit?.();
  }

  const errorMessage =
    allowedExtensions.length > 0
      ? `The following file types are supported: ${allowedExtensions.join(', ')}.`
      : 'This file type is not supported.';

  // ---- Entries view state ----
  const [hovered, setHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(initialLightboxOpen);
  const [zoomPercent, setZoomPercent] = useState(100);

  function openLightbox() {
    setZoomPercent(100);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function zoomIn() {
    setZoomPercent((z) => Math.min(200, z + 25));
  }

  function zoomOut() {
    setZoomPercent((z) => Math.max(50, z - 25));
  }

  if (view === 'entries') {
    return (
      <div className={styles.root}>
        <ul className={styles.entriesList}>
          <li
            className={styles.entryRow}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setHovered(false);
              }
            }}
          >
            <span className={styles.entryIcon} aria-hidden="true">
              <FileIcon />
            </span>
            <span className={styles.entryFileName}>{entriesFile.name}</span>
            <span className={styles.entryFileSize}>{entriesFile.size}</span>
            {/* Always mounted (never conditionally rendered) and hidden via
                aria-hidden/CSS opacity rather than removed from the DOM —
                deliberately, so the row stays a single stable node through a
                hover-then-click interaction (a conditionally-mounted button
                here would unmount mid-click under simulated pointer
                movement). This still faithfully reproduces the record's
                finding: no persistent affordance signals the cell is
                interactive at rest, and the controls are unreachable by
                keyboard/AT until hovered/focused. */}
            <span
              className={
                hovered ? `${styles.hoverIcons} ${styles.hoverIconsVisible}` : styles.hoverIcons
              }
              aria-hidden={!hovered}
            >
              <button
                type="button"
                className={styles.hoverIconButton}
                aria-label="Preview file"
                tabIndex={hovered ? 0 : -1}
                onClick={openLightbox}
              >
                <EyeIcon />
              </button>
              <button
                type="button"
                className={styles.hoverIconButton}
                aria-label="Download file"
                tabIndex={hovered ? 0 : -1}
                onClick={() => onDownload?.()}
              >
                <DownloadIcon />
              </button>
            </span>
          </li>
        </ul>

        {lightboxOpen && (
          <div className={styles.lightboxOverlay}>
            <div
              className={styles.lightboxCard}
              role="dialog"
              aria-modal="true"
              aria-labelledby={lightboxHeadingId}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  event.preventDefault();
                  closeLightbox();
                }
              }}
            >
              <div className={styles.lightboxHeader}>
                <h2 id={lightboxHeadingId} className={styles.lightboxFileName}>
                  {entriesFile.name}
                </h2>
                <div className={styles.lightboxHeaderActions}>
                  <button
                    type="button"
                    className={styles.lightboxIconButton}
                    aria-label="Download file"
                    onClick={() => onDownload?.()}
                  >
                    <DownloadIcon />
                  </button>
                  <button
                    type="button"
                    className={styles.lightboxIconButton}
                    aria-label="Close preview"
                    onClick={closeLightbox}
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>

              <div className={styles.lightboxBody}>
                <div className={styles.lightboxImagePlaceholder} style={{ transform: `scale(${zoomPercent / 100})` }}>
                  <FileIcon />
                  <span>No real thumbnail available — generic placeholder, per the source record</span>
                </div>
              </div>

              <div className={styles.lightboxFooter}>
                <div className={styles.zoomControl}>
                  <button
                    type="button"
                    className={styles.zoomButton}
                    aria-label="Zoom out"
                    onClick={zoomOut}
                    disabled={zoomPercent <= 50}
                  >
                    −
                  </button>
                  <span className={styles.zoomLevel}>{zoomPercent}%</span>
                  <button
                    type="button"
                    className={styles.zoomButton}
                    aria-label="Zoom in"
                    onClick={zoomIn}
                    disabled={zoomPercent >= 200}
                  >
                    +
                  </button>
                </div>
                <div className={styles.filmstrip}>
                  <div className={`${styles.filmstripThumb} ${styles.filmstripThumbActive}`}>
                    <FileIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ---- view === 'respondent' ----
  return (
    <div className={styles.root}>
      <label className={styles.fieldLabel} htmlFor={inputId}>
        {label}
      </label>

      <input
        ref={fileInputRef}
        id={inputId}
        type="file"
        className={styles.hiddenFileInput}
        disabled={disabled}
        onChange={(event) => {
          const selected = event.target.files?.[0];
          if (selected) handleFileSelected(selected);
          event.target.value = '';
        }}
      />

      {status === 'empty' && (
        <button
          type="button"
          className={styles.dropzone}
          disabled={disabled}
          onClick={() => fileInputRef.current?.click()}
        >
          <UploadArrowIcon />
          <span className={styles.dropzoneLabel}>Choose File</span>
        </button>
      )}

      {status === 'uploaded' && file && (
        <div className={styles.fileRow}>
          <span className={styles.entryIcon} aria-hidden="true">
            <FileIcon />
          </span>
          <span className={styles.entryFileName}>{file.name}</span>
          <span className={styles.entryFileSize}>{file.size}</span>
          <button
            type="button"
            className={styles.removeButton}
            aria-label={`Remove ${file.name}`}
            disabled={disabled}
            onClick={removeFile}
          >
            ×
          </button>
        </div>
      )}

      {status === 'invalid' && (
        <div className={`${styles.fileRow} ${styles.fileRowError}`} aria-invalid="true">
          <span className={styles.entryIcon} aria-hidden="true">
            <FileIcon />
          </span>
          <span className={styles.entryFileName}>{rejectedFileName}</span>
          <button
            type="button"
            className={styles.removeButton}
            aria-label="Remove rejected file"
            disabled={disabled}
            onClick={removeFile}
          >
            ×
          </button>
        </div>
      )}

      {status === 'invalid' && (
        <button
          type="button"
          className={styles.chooseAnotherButton}
          disabled={disabled}
          onClick={() => fileInputRef.current?.click()}
        >
          Choose a different file
        </button>
      )}

      {status === 'invalid' && (
        <p id={errorId} className={styles.errorText} role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="button"
        className={styles.submitButton}
        aria-describedby={status === 'invalid' ? errorId : undefined}
        disabled={disabled}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

function UploadArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.uploadArrowIcon} aria-hidden="true">
      <path
        d="M12 16V4m0 0 4 4m-4-4-4 4M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.fileIcon} aria-hidden="true">
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

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.smallIcon} aria-hidden="true">
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.smallIcon} aria-hidden="true">
      <path
        d="M12 4v11m0 0 4-4m-4 4-4-4M5 18v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.smallIcon} aria-hidden="true">
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

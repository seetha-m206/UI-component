import { useId, useRef, useState } from 'react';
import styles from './SmartScanAiField.module.css';

export type SmartScanMode = 'builder' | 'live';
export type SmartScanBuilderState = 'empty' | 'sample-selected' | 'extracted';
export type SmartScanLiveState =
  'empty' | 'uploaded-scan-failed' | 'uploaded-scan-failed-dismissed';

export interface SmartScanExtractedField {
  key: string;
  value: string;
}

export interface SmartScanMappingRow {
  id: string;
  extractedKey: string;
  targetField: string;
}

export interface SmartScanAiFieldProps {
  /**
   * Which of the two documented surfaces to render — the builder's
   * "Configure Smart Scan" modal (dropzone + extract + field mapping), or
   * the canvas/live-form upload control (visually identical on canvas and
   * on the published form, per the record).
   */
  mode: SmartScanMode;

  // ---- Builder mode ----
  /** Starting state when the fixture mounts. Defaults to 'empty'. */
  initialBuilderState?: SmartScanBuilderState;
  /** Filename shown once a sample image is selected. Defaults to 'sample-test-form.png'. */
  sampleImageName?: string;
  /**
   * The canned key-value result "Extract data" produces — stands in for
   * real OCR/AI (there is none here, see README). Defaults to a 5-field
   * demo set mirroring the record's own tested sample image (Name, Email,
   * Phone, Company, City).
   */
  sampleExtractionResult?: SmartScanExtractedField[];
  /** Target-field dropdown options for the Field Mapping table's right column. */
  targetFields?: string[];
  /** Starting Field Mapping rows once in the 'extracted' state. Defaults to one empty row. */
  initialMappings?: SmartScanMappingRow[];
  /** Called with the canned result whenever "Extract data" completes (simulated, not real OCR). */
  onExtract?: (result: SmartScanExtractedField[]) => void;

  // ---- Live mode ----
  /** Starting state when the fixture mounts. Defaults to 'empty'. */
  initialLiveState?: SmartScanLiveState;
  /** Uploaded file display name for the thumbnail. Defaults to 'sample-test-form.png'. */
  uploadedFileName?: string;
  /** Uploaded file display size for the thumbnail. Defaults to '184 KB'. */
  uploadedFileSize?: string;
}

const DEFAULT_EXTRACTION: SmartScanExtractedField[] = [
  { key: 'Name', value: 'Jane Doe' },
  { key: 'Email', value: 'jane@example.com' },
  { key: 'Phone', value: '(555) 012-3456' },
  { key: 'Company', value: 'Acme Corp' },
  { key: 'City', value: 'Austin' },
];

const DEFAULT_TARGET_FIELDS = ['Single Line', 'Email', 'Phone Number', 'Company', 'City'];

let mappingRowCounter = 0;
function nextMappingRowId(): string {
  mappingRowCounter += 1;
  return `mapping-${mappingRowCounter}`;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(kb >= 10 ? 0 : 1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

/**
 * Reconstructed from Zoho Forms' "AI Smart Scan" field — a File Upload
 * field family variant with an OCR/AI extraction-and-mapping layer bolted
 * on. Two documented surfaces, selected via `mode`:
 *
 * - `mode="builder"`: the "Configure Smart Scan" modal (dropzone → Extract
 *   data → Extracted Data panel → Field Mapping table). The record
 *   confirms this path WORKS and extracts accurately.
 * - `mode="live"`: the canvas/live-form upload control. The record
 *   confirms the raw file upload succeeds but the AI scan call
 *   (`performscan`) FAILS with an HTTP 400 and an explicit error dialog —
 *   a confirmed, currently-broken production bug, reproduced here as a
 *   genuine failure state, not simulated success. See README.
 */
export function SmartScanAiField({
  mode,
  initialBuilderState = 'empty',
  sampleImageName = 'sample-test-form.png',
  sampleExtractionResult = DEFAULT_EXTRACTION,
  targetFields = DEFAULT_TARGET_FIELDS,
  initialMappings,
  onExtract,
  initialLiveState = 'empty',
  uploadedFileName = 'sample-test-form.png',
  uploadedFileSize = '184 KB',
}: SmartScanAiFieldProps) {
  const headingId = useId();
  const sampleInputRef = useRef<HTMLInputElement>(null);
  const liveInputRef = useRef<HTMLInputElement>(null);

  // ---- Builder-mode state ----
  const [builderState, setBuilderState] = useState<SmartScanBuilderState>(initialBuilderState);
  const [selectedImageName, setSelectedImageName] = useState<string>(sampleImageName);
  const [extractedData, setExtractedData] = useState<SmartScanExtractedField[]>(
    initialBuilderState === 'extracted' ? sampleExtractionResult : []
  );
  const [mappings, setMappings] = useState<SmartScanMappingRow[]>(
    initialMappings ?? [{ id: nextMappingRowId(), extractedKey: '', targetField: '' }]
  );

  function handleSampleSelected(file: File) {
    setSelectedImageName(file.name);
    setBuilderState('sample-selected');
  }

  function handleExtract() {
    setExtractedData(sampleExtractionResult);
    setBuilderState('extracted');
    onExtract?.(sampleExtractionResult);
  }

  function updateMapping(id: string, patch: Partial<Omit<SmartScanMappingRow, 'id'>>) {
    setMappings((rows) => rows.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  }

  function addMappingRow() {
    setMappings((rows) => [...rows, { id: nextMappingRowId(), extractedKey: '', targetField: '' }]);
  }

  // ---- Live-mode state ----
  const [liveState, setLiveState] = useState<SmartScanLiveState>(initialLiveState);
  const [liveFileName, setLiveFileName] = useState(uploadedFileName);
  const [liveFileSize, setLiveFileSize] = useState(uploadedFileSize);

  function handleLiveFileSelected(file: File) {
    setLiveFileName(file.name);
    setLiveFileSize(formatBytes(file.size));
    // Confirmed bug, not a togglable outcome: every live-form upload's AI
    // scan call fails (HTTP 400) — the base upload itself still succeeds
    // (the file is retained), only the AI enhancement layer errors out.
    setLiveState('uploaded-scan-failed');
  }

  function dismissLiveError() {
    setLiveState('uploaded-scan-failed-dismissed');
  }

  if (mode === 'builder') {
    const extractDisabled = builderState === 'empty';
    return (
      <div className={styles.root}>
        <div className={styles.modalHeader}>
          <h2 id={headingId} className={styles.heading}>
            Configure Smart Scan
          </h2>
          <p className={styles.modalSubtitle}>
            Automatically extract data from the uploaded image using our in-house AI model, map it
            to form fields, and let respondents auto-fill forms with ease.
          </p>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.leftPane}>
            <div
              className={
                builderState === 'empty'
                  ? `${styles.dropzone} ${styles.dropzoneEmpty}`
                  : styles.dropzone
              }
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (file) handleSampleSelected(file);
              }}
            >
              <input
                ref={sampleInputRef}
                type="file"
                accept="image/*"
                className={styles.hiddenFileInput}
                aria-label="Upload a sample image"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleSampleSelected(file);
                  e.target.value = '';
                }}
              />
              {builderState === 'empty' ? (
                <>
                  <span className={styles.dropzoneIcon} aria-hidden="true">
                    &#128247;
                  </span>
                  <p className={styles.dropzoneTitle}>Upload an Image</p>
                  <button
                    type="button"
                    className={styles.chooseImageButton}
                    onClick={() => sampleInputRef.current?.click()}
                  >
                    Choose Image
                  </button>
                </>
              ) : (
                <div className={styles.selectedImage}>
                  <span className={styles.selectedImageIcon} aria-hidden="true">
                    &#128247;
                  </span>
                  <span className={styles.selectedImageName}>{selectedImageName}</span>
                  <button
                    type="button"
                    className={styles.changeImageButton}
                    onClick={() => sampleInputRef.current?.click()}
                  >
                    Change
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              className={styles.extractButton}
              disabled={extractDisabled}
              onClick={handleExtract}
            >
              Extract data
            </button>

            {builderState === 'extracted' && (
              <div className={styles.extractedPanel}>
                <h3 className={styles.extractedHeading}>Extracted Data</h3>
                <dl className={styles.extractedList}>
                  {extractedData.map((field) => (
                    <div key={field.key} className={styles.extractedRow}>
                      <dt className={styles.extractedKey}>{field.key}</dt>
                      <dd className={styles.extractedValue}>{field.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          <div className={styles.rightPane}>
            <h3 className={styles.mappingHeading}>Field Mapping</h3>
            <div className={styles.mappingTable} role="table" aria-label="Field Mapping">
              <div className={styles.mappingHeaderRow} role="row">
                <span role="columnheader">Extracted key</span>
                <span role="columnheader">Target field</span>
              </div>
              {mappings.map((row, index) => (
                <div key={row.id} className={styles.mappingRow} role="row">
                  <select
                    className={styles.mappingSelect}
                    aria-label={`Mapping row ${index + 1} extracted key`}
                    value={row.extractedKey}
                    disabled={builderState !== 'extracted'}
                    onChange={(e) => updateMapping(row.id, { extractedKey: e.target.value })}
                  >
                    <option value="">Select extracted key</option>
                    {extractedData.map((field) => (
                      <option key={field.key} value={field.key}>
                        {field.key}
                      </option>
                    ))}
                  </select>
                  <select
                    className={styles.mappingSelect}
                    aria-label={`Mapping row ${index + 1} target field`}
                    value={row.targetField}
                    disabled={builderState !== 'extracted'}
                    onChange={(e) => updateMapping(row.id, { targetField: e.target.value })}
                  >
                    <option value="">Select target field</option>
                    {targetFields.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <button
              type="button"
              className={styles.addMappingButton}
              disabled={builderState !== 'extracted'}
              onClick={addMappingRow}
              aria-label="Add mapping row"
            >
              + Add mapping row
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- mode === 'live' ----
  const showThumbnail = liveState !== 'empty';
  const showError = liveState === 'uploaded-scan-failed';

  return (
    <div className={styles.root}>
      <div
        className={styles.liveControl}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files?.[0];
          if (file) handleLiveFileSelected(file);
        }}
      >
        <input
          ref={liveInputRef}
          type="file"
          accept="image/*"
          className={styles.hiddenFileInput}
          aria-label="Choose file to upload"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleLiveFileSelected(file);
            e.target.value = '';
          }}
        />
        {!showThumbnail ? (
          <div className={styles.liveEmptyRow}>
            <span className={styles.scanFrameIcon} aria-hidden="true">
              &#9678;
            </span>
            <button
              type="button"
              className={styles.chooseFileText}
              onClick={() => liveInputRef.current?.click()}
            >
              Choose File
            </button>
            <span className={styles.liveIconGroup}>
              <button
                type="button"
                className={styles.uploadIconButton}
                aria-label="Upload file"
                onClick={() => liveInputRef.current?.click()}
              >
                &#8593;
              </button>
              {/* Camera capture is mobile-app only per the record's Rules &
                  Validation section (Scanner Input – Mobile App); rendered
                  here as an inert, non-functional icon for visual fidelity
                  only — see README. */}
              <span
                className={styles.cameraIconButton}
                aria-hidden="true"
                title="Camera capture (mobile app only — not functional in this web reconstruction)"
              >
                &#128247;
              </span>
            </span>
          </div>
        ) : (
          <div className={styles.liveThumbnailRow}>
            <span className={styles.scanFrameIcon} aria-hidden="true">
              &#9678;
            </span>
            <span className={styles.liveFileName}>{liveFileName}</span>
            <span className={styles.liveFileSize}>{liveFileSize}</span>
          </div>
        )}
      </div>

      {showError && (
        <div className={styles.errorDialog} role="alert">
          <p className={styles.errorTitle}>Error Occurred!</p>
          <p className={styles.errorMessage}>Unable to process the upload, kindly try again.</p>
          <button type="button" className={styles.errorDismissButton} onClick={dismissLiveError}>
            OK
          </button>
        </div>
      )}

      {liveState === 'uploaded-scan-failed-dismissed' && (
        <p className={styles.retainedNote}>
          File retained as a normal attachment — the AI scan could not process it.
        </p>
      )}
    </div>
  );
}

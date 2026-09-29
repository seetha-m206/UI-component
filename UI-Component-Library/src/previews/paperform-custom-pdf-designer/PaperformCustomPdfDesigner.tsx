import { useId, useState } from 'react';
import styles from './PaperformCustomPdfDesigner.module.css';

export type DesignerView = 'list' | 'designer';
export type SummaryPreset = 'Public' | 'Private' | 'Custom' | 'Receipt';
export type SummaryLayout = 'Table' | 'List';

interface MergeField {
  key: string;
  label: string;
}

const AVAILABLE_FIELDS: MergeField[] = [
  { key: 'submitted_at', label: 'Submitted At' },
  { key: '8rbgg', label: 'Q1 Do you like forms?' },
  { key: '3ftmg', label: 'Q3 Your name' },
  { key: 'dm15t', label: 'Q4 Rate us' },
  { key: 'cmlfb', label: 'N1 Quantity' },
  { key: '17gdk', label: 'N2 Unit price' },
  { key: 'total_amount', label: 'Total Amount' },
  { key: 'submission_id', label: 'Submission ID' },
];

interface InsertedToken {
  id: string;
  field: MergeField;
}

export interface PaperformCustomPdfDesignerProps {
  initialView?: DesignerView;
  initialSlashAttempted?: boolean;
  onAddPdf?: () => void;
  onDownloadSample?: () => void;
}

/**
 * Reconstructed from Paperform's Custom PDF designer (After Submission ->
 * Custom PDFs -> Add PDF). Confirmed and reproduced faithfully: it is
 * another Draft.js-style document canvas (same editor family as
 * document-canvas-editor-shell and paperform-calculation-field-ai-helper's
 * code pane, not a template-upload tool); the starter template's Summary
 * config block (Public/Private/Custom/Receipt preset, Table/List layout);
 * a genuinely working "+" gutter -> Insert answer picker that inserts a
 * real {{ key }} merge token on click (the confirmed positive counter-
 * example to Zoho's inert Field Labels popup); and the confirmed absence of
 * the "/" slash-command menu in this specific Draft.js context (typing "/"
 * is just a literal character here, unlike the main form canvas). No fake
 * PDF is actually rendered/downloaded by "Download sample" -- the record
 * deliberately never clicked the real one (it triggers a file download),
 * so this reconstruction only fires a callback, not a real file.
 */
export function PaperformCustomPdfDesigner({
  initialView = 'list',
  initialSlashAttempted = false,
  onAddPdf,
  onDownloadSample,
}: PaperformCustomPdfDesignerProps) {
  const [view, setView] = useState<DesignerView>(initialView);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [tokens, setTokens] = useState<InsertedToken[]>([]);
  const [summaryPreset, setSummaryPreset] = useState<SummaryPreset>('Public');
  const [summaryLayout, setSummaryLayout] = useState<SummaryLayout>('Table');
  const [slashDraft, setSlashDraft] = useState(initialSlashAttempted ? '/' : '');
  const fileNameId = useId();

  function handleAddPdf() {
    setView('designer');
    onAddPdf?.();
  }

  function insertField(field: MergeField) {
    setTokens((prev) => [...prev, { id: `${field.key}-${prev.length}`, field }]);
    setPickerOpen(false);
  }

  if (view === 'list') {
    return (
      <div className={styles.root}>
        <table className={styles.pdfTable}>
          <thead>
            <tr>
              <th>PDF Name</th>
              <th>Edit</th>
              <th>Copy</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className={styles.emptyRow}>
                No custom PDFs yet.
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" className={styles.addButton} onClick={handleAddPdf}>
          Add PDF +
        </button>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.designerHeader}>
        <button type="button" className={styles.backButton} onClick={() => setView('list')}>
          ← Back to editor
        </button>
        <label htmlFor={fileNameId} className={styles.fileNameLabel}>
          File name
        </label>
        <input id={fileNameId} className={styles.fileNameInput} defaultValue="Submission Results" />
      </div>

      <div className={styles.canvas}>
        <h1 className={styles.canvasHeading}>Here are your results</h1>
        <p className={styles.canvasParagraph} />

        <div className={styles.summaryBlock} role="group" aria-label="Submission Summary">
          <h3 className={styles.summaryTitle}>Submission Summary</h3>
          <p className={styles.summaryDesc}>
            Shows all of the visible questions and answers, suitable to send to customers.
          </p>
          <div className={styles.summaryRow}>
            <span className={styles.summaryFieldLabel}>Preset</span>
            <select
              className={styles.select}
              value={summaryPreset}
              onChange={(e) => setSummaryPreset(e.target.value as SummaryPreset)}
            >
              <option>Public</option>
              <option>Private</option>
              <option>Custom</option>
              <option>Receipt</option>
            </select>
          </div>
          <div className={styles.summaryRow}>
            <span className={styles.summaryFieldLabel}>Summary Layout</span>
            <div className={styles.radioRow} role="radiogroup" aria-label="Summary Layout">
              {(['Table', 'List'] as SummaryLayout[]).map((layout) => (
                <label key={layout} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="summary-layout"
                    checked={summaryLayout === layout}
                    onChange={() => setSummaryLayout(layout)}
                  />
                  {layout}
                </label>
              ))}
            </div>
          </div>
        </div>

        <p className={styles.canvasParagraph}>
          {tokens.map((t) => (
            <span key={t.id} className={styles.mergeChip}>
              {t.field.label}
            </span>
          ))}
        </p>

        <div className={styles.slashDemo}>
          <label htmlFor={`${fileNameId}-slash`} className={styles.slashLabel}>
            Type &quot;/&quot; here — confirmed no slash-menu in this editor
          </label>
          <input
            id={`${fileNameId}-slash`}
            className={styles.slashInput}
            value={slashDraft}
            onChange={(e) => setSlashDraft(e.target.value)}
            placeholder="/"
          />
        </div>
      </div>

      <div className={styles.gutter}>
        <button type="button" className={styles.gutterButton} onClick={() => setPickerOpen((v) => !v)}>
          + Insert answer
        </button>
        {pickerOpen && (
          <ul className={styles.fieldPicker} role="listbox" aria-label="Insert answer">
            {AVAILABLE_FIELDS.map((field) => (
              <li key={field.key}>
                <button
                  type="button"
                  role="option"
                  aria-selected={false}
                  className={styles.fieldOption}
                  onClick={() => insertField(field)}
                >
                  {field.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button type="button" className={styles.downloadSampleButton} onClick={onDownloadSample}>
        Download sample
      </button>
    </div>
  );
}

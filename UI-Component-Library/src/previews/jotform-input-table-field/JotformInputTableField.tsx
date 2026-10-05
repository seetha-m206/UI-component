import { useId, useRef, useState } from 'react';
import styles from './JotformInputTableField.module.css';

export type ColumnType = 'radio' | 'text';

export interface JotformInputTableFieldProps {
  /** Row labels. Defaults match the confirmed real pre-populated template. */
  rows?: string[];
  /** Column labels. Defaults match the confirmed real pre-populated template. */
  columns?: string[];
  /**
   * Per-column cell type. Defaults to 'radio' for EVERY column, deliberately
   * reproducing the confirmed real default-template mismatch — the "Any
   * thoughts?" column renders as radio circles, not free text, until a
   * builder manually switches it.
   */
  columnTypes?: ColumnType[];
  /**
   * Mirrors the real GENERAL tab's Required dropdown. Only 'every-row' is
   * wired to visible validation — the source record confirmed this mode
   * end-to-end; the other two non-'No' modes exist in the real dropdown but
   * were never live-tested, so this preview deliberately doesn't invent
   * their behavior (see this folder's README).
   */
  requiredMode?: 'none' | 'every-row';
  disabled?: boolean;
  label?: string;
}

interface Selections {
  [rowIndex: number]: { [colIndex: number]: string };
}

let rowIdCounter = 0;
let colIdCounter = 0;

/**
 * Reconstructed from JotForm's Input Table field (see
 * Research-Library/04-Component-Library/jotform/jotform-input-table-field.md,
 * JF3, 2026-10-05).
 *
 * Confirmed and reproduced faithfully: a genuine semantic <table> with real
 * <th scope="row"/"col"> headers (not a div-grid), a per-cell aria-label
 * composed from both row+column axes, and — the confirmed real defect —
 * every cell getting its OWN unique `name`, so selection exclusivity is
 * entirely React-state-managed (per row) rather than native same-name
 * radiogroup behavior. That means, exactly as confirmed live, arrow keys do
 * not move focus/selection within a row and every cell is its own Tab stop;
 * this preview does not silently add arrow-key navigation the real product
 * doesn't have. The Submit validation flow also reproduces a confirmed
 * imprecision: a blocked submit outlines EVERY cell in the table in red,
 * not just the incomplete row, matching the real product's un-scoped error
 * styling.
 */
export function JotformInputTableField({
  rows = ['Service Quality', 'Cleanliness', 'Responsiveness', 'Friendliness'],
  columns = ['Not Satisfied', 'Somewhat Satisfied', 'Satisfied', 'Any thoughts?'],
  columnTypes,
  requiredMode = 'none',
  disabled = false,
  label = 'Input Table',
}: JotformInputTableFieldProps) {
  const labelId = useId();
  const [rowLabels, setRowLabels] = useState(rows);
  const [colLabels, setColLabels] = useState(columns);
  const [types, setTypes] = useState<ColumnType[]>(
    columnTypes ?? columns.map<ColumnType>(() => 'radio')
  );
  const [selections, setSelections] = useState<Selections>({});
  const [submitted, setSubmitted] = useState(false);
  const rowRefs = useRef<Array<HTMLTableRowElement | null>>([]);

  function selectCell(rowIndex: number, colIndex: number, colLabel: string) {
    if (disabled) return;
    setSelections((prev) => ({
      ...prev,
      [rowIndex]: { [colIndex]: colLabel },
    }));
  }

  function setText(rowIndex: number, colIndex: number, text: string) {
    if (disabled) return;
    setSelections((prev) => ({
      ...prev,
      [rowIndex]: { ...prev[rowIndex], [colIndex]: text },
    }));
  }

  function addRow() {
    if (disabled) return;
    rowIdCounter += 1;
    setRowLabels((prev) => [...prev, `New Row ${rowIdCounter}`]);
  }

  function removeRow(index: number) {
    if (disabled) return;
    setRowLabels((prev) => prev.filter((_, i) => i !== index));
    setSelections((prev) => {
      const next: Selections = {};
      Object.entries(prev).forEach(([key, val]) => {
        const i = Number(key);
        if (i < index) next[i] = val;
        else if (i > index) next[i - 1] = val;
      });
      return next;
    });
  }

  function addColumn() {
    if (disabled) return;
    colIdCounter += 1;
    setColLabels((prev) => [...prev, `New Column ${colIdCounter}`]);
    setTypes((prev) => [...prev, 'radio']);
  }

  // Radio-type columns only — the source record's own second-pass flag notes
  // an empty text-type cell did not block "every row" submission once a
  // radio was chosen, so this demo validates against radio columns only.
  const radioColIndexes = types
    .map((t, i) => (t === 'radio' ? i : -1))
    .filter((i) => i >= 0);

  function rowIsAnswered(rowIndex: number): boolean {
    if (radioColIndexes.length === 0) return true;
    return radioColIndexes.some((c) => Boolean(selections[rowIndex]?.[c]));
  }

  const invalidRowIndexes =
    requiredMode === 'every-row' && submitted
      ? rowLabels.map((_, i) => i).filter((i) => !rowIsAnswered(i))
      : [];
  const hasErrors = invalidRowIndexes.length > 0;

  function handleSubmit() {
    if (disabled) return;
    setSubmitted(true);
  }

  function jumpToFirstError() {
    const target = rowRefs.current[invalidRowIndexes[0]];
    target?.focus();
    target?.scrollIntoView({ block: 'center' });
  }

  return (
    <div className={styles.root} data-disabled={disabled}>
      {hasErrors && (
        <div className={styles.errorBanner} role="alert">
          <span>There is (1) error on this page. Please correct it before moving on.</span>
          <button type="button" className={styles.seeErrors} onClick={jumpToFirstError}>
            See Errors
          </button>
        </div>
      )}
      {submitted && !hasErrors && (
        <div className={styles.successBanner} role="status">
          Thank You! Your submission has been received.
        </div>
      )}

      <span id={labelId} className={styles.label}>
        {label}
      </span>

      <div className={styles.tableScroll}>
        <table
          role="table"
          aria-labelledby={labelId}
          data-component="matrix"
          className={styles.table}
          data-invalid={hasErrors}
        >
          <tbody>
            <tr>
              <th scope="col" className={styles.cornerCell}>
                Rows
              </th>
              {colLabels.map((col, c) => (
                <th key={c} scope="col" className={styles.colHeader}>
                  {col}
                </th>
              ))}
            </tr>
            {rowLabels.map((row, r) => (
              <tr
                key={r}
                ref={(el) => {
                  rowRefs.current[r] = el;
                }}
                tabIndex={-1}
                className={styles.bodyRow}
              >
                <th scope="row" className={styles.rowHeader}>
                  {row}
                  <button
                    type="button"
                    className={styles.removeRow}
                    aria-label={`Remove row ${row}`}
                    onClick={() => removeRow(r)}
                    disabled={disabled}
                  >
                    ×
                  </button>
                </th>
                {colLabels.map((col, c) => {
                  const type = types[c] ?? 'radio';
                  const cellLabel = `${row} ${col}`;
                  if (type === 'text') {
                    return (
                      <td key={c} className={styles.cell}>
                        <input
                          type="text"
                          className={styles.textInput}
                          aria-label={cellLabel}
                          value={selections[r]?.[c] ?? ''}
                          disabled={disabled}
                          onChange={(e) => setText(r, c, e.target.value)}
                        />
                      </td>
                    );
                  }
                  const checked = selections[r]?.[c] === col;
                  return (
                    <td key={c} className={styles.cell}>
                      <input
                        type="radio"
                        // Confirmed real defect, reproduced deliberately: a
                        // unique name per cell, not shared per row — so this
                        // is NOT a native radiogroup, and arrow keys do
                        // nothing within a row.
                        name={`cell-${r}-${c}`}
                        className={styles.radio}
                        aria-label={cellLabel}
                        checked={checked}
                        disabled={disabled}
                        onChange={() => selectCell(r, c, col)}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hasErrors && <p className={styles.inlineError}>⊘ Every row is required.</p>}

      <div className={styles.toolbarRow}>
        <button type="button" className={styles.addButton} onClick={addRow} disabled={disabled}>
          + add row
        </button>
        <button type="button" className={styles.addButton} onClick={addColumn} disabled={disabled}>
          + add column
        </button>
        <button type="button" className={styles.submitButton} onClick={handleSubmit} disabled={disabled}>
          Submit
        </button>
      </div>
    </div>
  );
}

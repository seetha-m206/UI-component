import { useEffect, useId, useRef } from 'react';
import styles from './MatrixChoicesField.module.css';

export interface MatrixChoicesFieldProps {
  /** Row (question) labels, top to bottom. Position in this array is the
   * row's identity — see this folder's README ("Why index-keyed value, not
   * ids") for why, and for the tradeoff that comes with it. */
  rowLabels: string[];
  /** Column (answer option) labels, left to right. Same index-is-identity
   * note as rowLabels. */
  columnLabels: string[];
  /** Called with the full next array when a row is added, removed, or
   * relabeled via the Properties panel. Mirrors choices-list-editor's
   * whole-array `onChange` contract rather than separate onAddRow/
   * onRemoveRow/onRowLabelChange callbacks — see README for why. */
  onRowLabelsChange?: (next: string[]) => void;
  /** Same contract as onRowLabelsChange, for columns. */
  onColumnLabelsChange?: (next: string[]) => void;
  /** Selection map: `{ [rowIndex]: columnIndex }`, both stringified. A row
   * absent from this map has no selection. Each row is independent — see
   * README for why index strings were chosen over generated row/column ids. */
  value?: Record<string, string>;
  onChange?: (value: Record<string, string>) => void;
  disabled?: boolean;
  /** No confirmed client-side ceiling was found in the source (tested to at
   * least 8 rows); undefined (no limit) by default, per the record's Rules
   * & Validation section. */
  maxRows?: number;
  maxColumns?: number;
  /** Floor below which the per-item remove control disables itself, so the
   * grid can never shrink to zero rows/columns. Not from the source record
   * (no minimum was documented) — a deliberate, conservative addition for
   * consistency with choices-list-editor's `minChoices` guard. Defaults to 1. */
  minRows?: number;
  minColumns?: number;
  /** Heading text above the whole component. Defaults to "Matrix Choices". */
  label?: string;
}

let idCounter = 0;
function nextInsertKey(): string {
  idCounter += 1;
  return `mcf-${idCounter}-${Date.now().toString(36)}`;
}

function insertAfter(list: string[], index: number, item = ''): string[] {
  return [...list.slice(0, index + 1), item, ...list.slice(index + 1)];
}

function removeAt(list: string[], index: number): string[] {
  return list.filter((_, i) => i !== index);
}

/**
 * Reconstructed from Zoho Forms' "Matrix Choices" field — Radio variant only
 * (the default of 7 documented sub-variants: Radio/Checkbox/Dropdown/
 * Textbox/Number/Currency/Multi-Type). The other six only swap the per-cell
 * control type, not the grid architecture, and were out of scope for this
 * pass — see this folder's README.
 *
 * Two documented surfaces are reproduced in one component, matching the
 * source record's own Structure/Actions split:
 * - a builder-time **Properties panel** (row/column label lists, each with
 *   its own +/- insert-after/remove icon, new items auto-focused), and
 * - the **live-form grid** itself: a real `<table>`, one independent radio
 *   group per row (native `<input type="radio">`, visually hidden, with a
 *   sibling label drawing the circle+dot), no cross-row interaction.
 */
export function MatrixChoicesField({
  rowLabels,
  columnLabels,
  onRowLabelsChange,
  onColumnLabelsChange,
  value,
  onChange,
  disabled = false,
  maxRows,
  maxColumns,
  minRows = 1,
  minColumns = 1,
  label = 'Matrix Choices',
}: MatrixChoicesFieldProps) {
  const uid = useId();
  const headingId = useId();
  const propsHeadingId = useId();
  const gridHeadingId = useId();

  const rowInputRefs = useRef(new Map<number, HTMLInputElement>());
  const colInputRefs = useRef(new Map<number, HTMLInputElement>());
  const pendingFocus = useRef<{ axis: 'row' | 'column'; index: number } | null>(null);

  // Stable per-row/per-column React keys, tracked in parallel to
  // rowLabels/columnLabels. This component doesn't own that array (the
  // caller does), so a plain index-based `key` would make React reuse the
  // wrong DOM node's `defaultValue` across a mid-list insertion (the newly
  // inserted slot would inherit whatever text used to render at that
  // index). These refs are spliced in lockstep with rowLabels/columnLabels
  // inside addRowAfter/removeRow/addColumnAfter/removeColumn below, so a
  // genuinely new row/column always gets a genuinely new key. If the
  // length ever changes for a reason other than those handlers (e.g. the
  // caller swaps in an entirely different rowLabels array), the keys are
  // regenerated wholesale on the next render — safe because there's no
  // insertion-continuity to preserve across an unrelated prop swap.
  const rowKeysRef = useRef<string[]>(rowLabels.map(() => nextInsertKey()));
  const colKeysRef = useRef<string[]>(columnLabels.map(() => nextInsertKey()));
  if (rowKeysRef.current.length !== rowLabels.length) {
    rowKeysRef.current = rowLabels.map(() => nextInsertKey());
  }
  if (colKeysRef.current.length !== columnLabels.length) {
    colKeysRef.current = columnLabels.map(() => nextInsertKey());
  }

  useEffect(() => {
    const pending = pendingFocus.current;
    if (!pending) return;
    const refs = pending.axis === 'row' ? rowInputRefs.current : colInputRefs.current;
    refs.get(pending.index)?.focus();
    pendingFocus.current = null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowLabels, columnLabels]);

  const rowAtMax = maxRows !== undefined && rowLabels.length >= maxRows;
  const rowAtMin = rowLabels.length <= minRows;
  const colAtMax = maxColumns !== undefined && columnLabels.length >= maxColumns;
  const colAtMin = columnLabels.length <= minColumns;

  function addRowAfter(index: number) {
    if (disabled || rowAtMax) return;
    rowKeysRef.current = insertAfter(rowKeysRef.current, index, nextInsertKey());
    pendingFocus.current = { axis: 'row', index: index + 1 };
    onRowLabelsChange?.(insertAfter(rowLabels, index));
  }

  function removeRow(index: number) {
    if (disabled || rowAtMin) return;
    rowKeysRef.current = removeAt(rowKeysRef.current, index);
    onRowLabelsChange?.(removeAt(rowLabels, index));
  }

  function addColumnAfter(index: number) {
    if (disabled || colAtMax) return;
    colKeysRef.current = insertAfter(colKeysRef.current, index, nextInsertKey());
    pendingFocus.current = { axis: 'column', index: index + 1 };
    onColumnLabelsChange?.(insertAfter(columnLabels, index));
  }

  function removeColumn(index: number) {
    if (disabled || colAtMin) return;
    colKeysRef.current = removeAt(colKeysRef.current, index);
    onColumnLabelsChange?.(removeAt(columnLabels, index));
  }

  function commitRowLabel(index: number, text: string) {
    if (!onRowLabelsChange) return;
    const next = [...rowLabels];
    next[index] = text;
    onRowLabelsChange(next);
  }

  function commitColumnLabel(index: number, text: string) {
    if (!onColumnLabelsChange) return;
    const next = [...columnLabels];
    next[index] = text;
    onColumnLabelsChange(next);
  }

  function selectCell(rowIndex: number, columnIndex: number) {
    if (disabled) return;
    const next = { ...(value ?? {}) };
    next[String(rowIndex)] = String(columnIndex);
    onChange?.(next);
  }

  return (
    <div className={styles.root}>
      <h3 id={headingId} className={styles.heading}>
        {label}
      </h3>

      <section className={styles.propertiesSection} aria-labelledby={propsHeadingId}>
        <h4 id={propsHeadingId} className={styles.sectionHeading}>
          Properties
        </h4>
        <div className={styles.propertiesGrid}>
          <div>
            <span className={styles.listLabel} id={`${uid}-rows-label`}>
              Rows (questions)
            </span>
            <ul className={styles.list} aria-labelledby={`${uid}-rows-label`}>
              {rowLabels.map((rowLabel, index) => (
                <li key={rowKeysRef.current[index]} className={styles.listRow}>
                  <input
                    ref={(el) => {
                      if (el) rowInputRefs.current.set(index, el);
                      else rowInputRefs.current.delete(index);
                    }}
                    type="text"
                    className={styles.listInput}
                    defaultValue={rowLabel}
                    placeholder={`Question ${index + 1}`}
                    disabled={disabled}
                    aria-label={`Question ${index + 1} label`}
                    onBlur={(e) => commitRowLabel(index, e.currentTarget.value)}
                  />
                  <div className={styles.listActions}>
                    <button
                      type="button"
                      className={styles.iconButton}
                      onClick={() => addRowAfter(index)}
                      disabled={disabled || rowAtMax}
                      aria-label={`Add question after ${index + 1}`}
                    >
                      <PlusIcon />
                    </button>
                    <button
                      type="button"
                      className={styles.iconButton}
                      onClick={() => removeRow(index)}
                      disabled={disabled || rowAtMin}
                      aria-label={`Remove question ${index + 1}`}
                    >
                      <MinusIcon />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className={styles.listLabel} id={`${uid}-cols-label`}>
              Columns (answer options)
            </span>
            <ul className={styles.list} aria-labelledby={`${uid}-cols-label`}>
              {columnLabels.map((colLabel, index) => (
                <li key={colKeysRef.current[index]} className={styles.listRow}>
                  <input
                    ref={(el) => {
                      if (el) colInputRefs.current.set(index, el);
                      else colInputRefs.current.delete(index);
                    }}
                    type="text"
                    className={styles.listInput}
                    defaultValue={colLabel}
                    placeholder={`Answer ${String.fromCharCode(65 + index)}`}
                    disabled={disabled}
                    aria-label={`Answer option ${index + 1} label`}
                    onBlur={(e) => commitColumnLabel(index, e.currentTarget.value)}
                  />
                  <div className={styles.listActions}>
                    <button
                      type="button"
                      className={styles.iconButton}
                      onClick={() => addColumnAfter(index)}
                      disabled={disabled || colAtMax}
                      aria-label={`Add answer option after ${index + 1}`}
                    >
                      <PlusIcon />
                    </button>
                    <button
                      type="button"
                      className={styles.iconButton}
                      onClick={() => removeColumn(index)}
                      disabled={disabled || colAtMin}
                      aria-label={`Remove answer option ${index + 1}`}
                    >
                      <MinusIcon />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.gridSection} aria-labelledby={gridHeadingId}>
        <h4 id={gridHeadingId} className={styles.sectionHeading}>
          Live form preview
        </h4>
        <div className={styles.tableScroll}>
          <table className={styles.table} aria-labelledby={headingId}>
            <thead>
              <tr>
                <th className={styles.cornerCell} scope="col">
                  <span className={styles.srOnly}>Question</span>
                </th>
                {columnLabels.map((colLabel, colIndex) => (
                  <th key={`colhead-${colIndex}`} className={styles.colHeadCell} scope="col">
                    {colLabel || `Answer ${String.fromCharCode(65 + colIndex)}`}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowLabels.map((rowLabel, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                  <th className={styles.rowHeadCell} scope="row">
                    {rowLabel || `Question ${rowIndex + 1}`}
                  </th>
                  {columnLabels.map((colLabel, colIndex) => {
                    const cellId = `${uid}-cell-${rowIndex}-${colIndex}`;
                    const selected = value?.[String(rowIndex)] === String(colIndex);
                    const rowName = rowLabel || `Question ${rowIndex + 1}`;
                    const colName = colLabel || `Answer ${String.fromCharCode(65 + colIndex)}`;
                    return (
                      <td key={`cell-${rowIndex}-${colIndex}`} className={styles.cell}>
                        <span className={styles.radioWrap}>
                          <input
                            id={cellId}
                            type="radio"
                            className={styles.radioInput}
                            name={`matrix-row-${uid}-${rowIndex}`}
                            checked={selected}
                            disabled={disabled}
                            onChange={() => selectCell(rowIndex, colIndex)}
                            aria-label={`${rowName}: ${colName}`}
                          />
                          <label htmlFor={cellId} className={styles.radioLabel} />
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.icon} aria-hidden="true">
      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.icon} aria-hidden="true">
      <path d="M2 8h12" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

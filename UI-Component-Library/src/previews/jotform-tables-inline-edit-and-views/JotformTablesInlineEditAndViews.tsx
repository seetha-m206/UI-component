import { useId, useMemo, useRef, useState } from 'react';
import styles from './JotformTablesInlineEditAndViews.module.css';

export type ViewId = 'table' | 'calendar' | 'boards';

export interface TableRowData {
  id: string;
  /** Short Text field — fully inline-editable in the grid (confirmed). */
  favoriteDrink: string;
  /** Email field — fully inline-editable in the grid (confirmed). */
  email: string;
  /** Single Choice field — inline-editable via a real dropdown (confirmed). */
  visitFrequency: string;
  /** Star Rating field — NOT inline-editable in the grid (confirmed defect); panel-only. */
  starRating: number;
  /** Submission Date — grid-read-only (confirmed; panel editability unverified). */
  submissionDate: string;
  /** Used only by the optional computed-column demo (quantity in stock). */
  quantity: number;
  /** Used only by the optional computed-column demo (reorder level). */
  reorderLevel: number;
}

export interface JotformTablesInlineEditAndViewsProps {
  /** Which view tab is active on first render. Defaults to 'table'. */
  initialView?: ViewId;
  /** Row data. Defaults to the 3 real confirmed test-submission rows from the source record. */
  rows?: TableRowData[];
  /** The workspace's accessible label. */
  label?: string;
}

/** The Single Choice field's real answer options, in the order confirmed observed (color-tag-coded). */
const VISIT_FREQUENCY_OPTIONS = ['Rarely', 'Weekly', 'Daily'] as const;

const OPTION_COLOR_CLASS: Record<string, string> = {
  Rarely: styles.chipRarely,
  Weekly: styles.chipWeekly,
  Daily: styles.chipDaily,
};

const DEFAULT_ROWS: TableRowData[] = [
  {
    id: 'row-1',
    favoriteDrink: 'Cappuccino',
    email: 'ana@example.com',
    visitFrequency: 'Weekly',
    starRating: 4,
    submissionDate: 'Oct 5, 2026',
    quantity: 42,
    reorderLevel: 10,
  },
  {
    id: 'row-2',
    favoriteDrink: 'Espresso',
    email: 'ben@example.com',
    visitFrequency: 'Daily',
    starRating: 5,
    submissionDate: 'Oct 5, 2026',
    quantity: 125,
    reorderLevel: 25,
  },
  {
    id: 'row-3',
    favoriteDrink: 'Iced Latte',
    email: 'cleo@example.com',
    visitFrequency: 'Rarely',
    starRating: 3,
    submissionDate: 'Oct 5, 2026',
    quantity: 18,
    reorderLevel: 5,
  },
];

type ColumnId =
  | 'favoriteDrink'
  | 'email'
  | 'visitFrequency'
  | 'starRating'
  | 'submissionDate'
  | 'computed';

interface ColumnDef {
  id: ColumnId;
  label: string;
  icon: string;
  type: 'text' | 'email' | 'choice' | 'rating' | 'date';
}

const BASE_COLUMNS: ColumnDef[] = [
  { id: 'favoriteDrink', label: 'Favorite Drink', icon: 'Aa', type: 'text' },
  { id: 'email', label: 'Email', icon: '@', type: 'email' },
  { id: 'visitFrequency', label: 'Visit Frequency', icon: '\u{1F3F7}', type: 'choice' },
  { id: 'starRating', label: 'Satisfaction', icon: '★', type: 'rating' },
  { id: 'submissionDate', label: 'Submission Date', icon: '\u{1F4C5}', type: 'date' },
];

interface CellPos {
  rowId: string;
  colId: ColumnId;
}

function samePos(a: CellPos | null, b: CellPos | null): boolean {
  return Boolean(a && b && a.rowId === b.rowId && a.colId === b.colId);
}

function Stars({
  value,
  onRate,
  readOnly,
}: {
  value: number;
  onRate?: (rating: number) => void;
  readOnly?: boolean;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const display = hovered ?? value;
  return (
    <span className={styles.stars} onMouseLeave={() => setHovered(null)}>
      {[1, 2, 3, 4, 5].map((n) =>
        readOnly ? (
          <span key={n} aria-hidden="true" className={styles.starGlyph} data-filled={n <= display}>
            ★
          </span>
        ) : (
          <button
            key={n}
            type="button"
            className={styles.starButton}
            aria-label={`Set rating to ${n} star${n === 1 ? '' : 's'}`}
            aria-pressed={n <= value}
            onMouseEnter={() => setHovered(n)}
            onFocus={() => setHovered(n)}
            onBlur={() => setHovered(null)}
            onClick={() => onRate?.(n)}
          >
            <span aria-hidden="true" className={styles.starGlyph} data-filled={n <= display}>
              ★
            </span>
          </button>
        )
      )}
    </span>
  );
}

/**
 * Reconstructed from JotForm Tables' spreadsheet-style grid, "View" row-detail
 * panel, and Calendar/Boards view reflows (see
 * Research-Library/04-Component-Library/jotform/jotform-tables-inline-edit-and-views.md,
 * JF7, 2026-10-05).
 *
 * Confirmed and reproduced faithfully: Short Text/Email cells are fully
 * inline-editable (click to select, click again to enter an active edit
 * state, type, Tab/blur commits, Escape cancels); Single Choice cells reveal
 * a real dropdown of the field's own options on the second click; Star
 * Rating is genuinely NOT editable by clicking stars directly in the grid
 * cell — this is a confirmed real defect in the source product, reproduced
 * deliberately as a no-op rather than "fixed." Star Rating IS editable from
 * the row-detail "View" panel, with a real hover-preview highlight, exactly
 * as confirmed live. Calendar and Boards views reflow the SAME row state
 * (not separate sample data) — Boards auto-derives one column per actual
 * Visit Frequency answer option, mirroring the confirmed "from a field"
 * auto-column-generation finding.
 */
export function JotformTablesInlineEditAndViews({
  initialView = 'table',
  rows: initialRows,
  label = 'Coffee Shop Feedback Form — Tables',
}: JotformTablesInlineEditAndViewsProps) {
  const labelId = useId();
  const [rows, setRows] = useState<TableRowData[]>(initialRows ?? DEFAULT_ROWS);
  const [activeView, setActiveView] = useState<ViewId>(initialView);
  const [selectedCell, setSelectedCell] = useState<CellPos | null>(null);
  const [editingCell, setEditingCell] = useState<CellPos | null>(null);
  const [draft, setDraft] = useState('');
  const [detailRowId, setDetailRowId] = useState<string | null>(null);
  const [computedColumnAdded, setComputedColumnAdded] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const columns = useMemo<ColumnDef[]>(
    () =>
      computedColumnAdded
        ? [...BASE_COLUMNS, { id: 'computed', label: 'Qty − Reorder', icon: 'Σ', type: 'text' }]
        : BASE_COLUMNS,
    [computedColumnAdded]
  );

  function startEditOrSelect(rowId: string, colId: ColumnId, col: ColumnDef) {
    if (col.type === 'rating' || col.type === 'date') {
      // Confirmed real behavior: these two column types never enter an edit
      // state from the grid cell, no matter how many times you click.
      setSelectedCell({ rowId, colId });
      setEditingCell(null);
      return;
    }
    const pos = { rowId, colId };
    if (samePos(selectedCell, pos) && !samePos(editingCell, pos)) {
      const row = rows.find((r) => r.id === rowId);
      const current =
        col.type === 'choice'
          ? row?.visitFrequency ?? ''
          : col.id === 'email'
            ? row?.email ?? ''
            : row?.favoriteDrink ?? '';
      setDraft(current);
      setEditingCell(pos);
      setSelectedCell(pos);
    } else {
      setSelectedCell(pos);
      setEditingCell(null);
    }
  }

  function commitEdit(rowId: string, colId: ColumnId, value: string) {
    setRows((prev) =>
      prev.map((r) => {
        if (r.id !== rowId) return r;
        if (colId === 'favoriteDrink') return { ...r, favoriteDrink: value };
        if (colId === 'email') return { ...r, email: value };
        if (colId === 'visitFrequency') return { ...r, visitFrequency: value };
        return r;
      })
    );
    setEditingCell(null);
  }

  function cancelEdit() {
    setEditingCell(null);
  }

  function rateRow(rowId: string, rating: number) {
    setRows((prev) => prev.map((r) => (r.id === rowId ? { ...r, starRating: rating } : r)));
  }

  const detailIndex = detailRowId ? rows.findIndex((r) => r.id === detailRowId) : -1;
  const detailRow = detailIndex >= 0 ? rows[detailIndex] : null;

  function openDetail(rowId: string) {
    setDetailRowId(rowId);
  }
  function closeDetail() {
    setDetailRowId(null);
  }
  function stepDetail(delta: number) {
    if (detailIndex < 0) return;
    const next = rows[detailIndex + delta];
    if (next) setDetailRowId(next.id);
  }

  const boardColumns = VISIT_FREQUENCY_OPTIONS.map((option) => ({
    option,
    cards: rows.filter((r) => r.visitFrequency === option),
  }));

  return (
    <div className={styles.root} aria-labelledby={labelId}>
      <span id={labelId} className={styles.visuallyHidden}>
        {label}
      </span>

      <div className={styles.viewSwitcher} role="tablist" aria-label="Table view">
        {(
          [
            { id: 'table' as ViewId, title: 'Table' },
            { id: 'calendar' as ViewId, title: 'Calendar' },
            { id: 'boards' as ViewId, title: 'Boards' },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeView === tab.id}
            className={activeView === tab.id ? `${styles.tab} ${styles.tabActive}` : styles.tab}
            onClick={() => setActiveView(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {activeView === 'table' && (
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col" className={styles.viewColHeader}>
                  <span className={styles.visuallyHidden}>Row actions</span>
                </th>
                {columns.map((col) => (
                  <th key={col.id} scope="col" className={styles.colHeader}>
                    <span aria-hidden="true" className={styles.colIcon}>
                      {col.icon}
                    </span>{' '}
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className={styles.bodyRow}>
                  <td className={styles.viewCell}>
                    <button
                      type="button"
                      className={styles.viewBadge}
                      onClick={() => openDetail(row.id)}
                    >
                      View
                    </button>
                  </td>
                  {columns.map((col) => {
                    const pos: CellPos = { rowId: row.id, colId: col.id };
                    const isSelected = samePos(selectedCell, pos);
                    const isEditing = samePos(editingCell, pos);
                    const cellLabel = `${col.label}, row ${row.favoriteDrink}`;

                    if (col.id === 'computed') {
                      return (
                        <td key={col.id} className={styles.cell} data-type="computed">
                          <span className={styles.computedValue}>
                            {row.quantity - row.reorderLevel}
                          </span>
                        </td>
                      );
                    }

                    if (col.type === 'text' || col.type === 'email') {
                      const value = col.id === 'email' ? row.email : row.favoriteDrink;
                      return (
                        <td
                          key={col.id}
                          className={styles.cell}
                          data-selected={isSelected}
                          data-type={col.type}
                        >
                          {isEditing ? (
                            <input
                              ref={inputRef}
                              type={col.type === 'email' ? 'email' : 'text'}
                              className={styles.cellInput}
                              aria-label={cellLabel}
                              value={draft}
                              onChange={(e) => setDraft(e.target.value)}
                              onBlur={() => commitEdit(row.id, col.id, draft)}
                              onKeyDown={(e) => {
                                if (e.key === 'Escape') {
                                  e.preventDefault();
                                  cancelEdit();
                                } else if (e.key === 'Tab') {
                                  commitEdit(row.id, col.id, draft);
                                }
                              }}
                            />
                          ) : (
                            <button
                              type="button"
                              className={styles.cellButton}
                              aria-label={cellLabel}
                              onClick={() => startEditOrSelect(row.id, col.id, col)}
                            >
                              {value}
                            </button>
                          )}
                        </td>
                      );
                    }

                    if (col.type === 'choice') {
                      return (
                        <td
                          key={col.id}
                          className={styles.cell}
                          data-selected={isSelected}
                          data-type="choice"
                        >
                          {isEditing ? (
                            <select
                              ref={inputRef as unknown as React.RefObject<HTMLSelectElement>}
                              className={styles.cellSelect}
                              aria-label={cellLabel}
                              value={draft}
                              onChange={(e) => {
                                setDraft(e.target.value);
                                commitEdit(row.id, col.id, e.target.value);
                              }}
                              onBlur={cancelEdit}
                            >
                              {VISIT_FREQUENCY_OPTIONS.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <button
                              type="button"
                              className={styles.cellButton}
                              aria-label={cellLabel}
                              onClick={() => startEditOrSelect(row.id, col.id, col)}
                            >
                              <span className={`${styles.chip} ${OPTION_COLOR_CLASS[row.visitFrequency] ?? ''}`}>
                                {row.visitFrequency}
                              </span>
                            </button>
                          )}
                        </td>
                      );
                    }

                    if (col.type === 'rating') {
                      // Confirmed real defect, reproduced deliberately: the
                      // whole cell is a single click target that only ever
                      // selects the cell. It never enters an edit state and
                      // clicking the stars never changes the value — see
                      // this folder's README.
                      return (
                        <td
                          key={col.id}
                          className={styles.cell}
                          data-selected={isSelected}
                          data-type="rating"
                        >
                          <button
                            type="button"
                            className={styles.cellButton}
                            aria-label={`${cellLabel} (read-only in this view — rating ${row.starRating} of 5)`}
                            onClick={() => startEditOrSelect(row.id, col.id, col)}
                          >
                            <Stars value={row.starRating} readOnly />
                            {isSelected && (
                              <span aria-hidden="true" className={styles.clearIcon}>
                                ×
                              </span>
                            )}
                          </button>
                        </td>
                      );
                    }

                    // Submission Date: grid-read-only (confirmed).
                    return (
                      <td key={col.id} className={styles.cell} data-selected={isSelected} data-type="date">
                        <button
                          type="button"
                          className={styles.cellButton}
                          aria-label={`${cellLabel} (read-only in grid — ${row.submissionDate})`}
                          onClick={() => startEditOrSelect(row.id, col.id, col)}
                        >
                          {row.submissionDate}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.toolbarRow}>
            <button
              type="button"
              className={styles.computedButton}
              disabled={computedColumnAdded}
              onClick={() => setComputedColumnAdded(true)}
            >
              {computedColumnAdded ? 'Computed column added' : '+ Add Computed Column'}
            </button>
          </div>
        </div>
      )}

      {activeView === 'calendar' && (
        <div className={styles.calendarView} role="region" aria-label="Calendar view">
          <h3 className={styles.calendarHeading}>Oct 5, 2026</h3>
          <ul className={styles.calendarList}>
            {rows.map((row) => (
              <li key={row.id} className={styles.calendarEvent}>
                <span className={styles.calendarDot} aria-hidden="true" />
                <span className={styles.calendarTitle}>{row.favoriteDrink}</span>
                <span className={styles.calendarMeta}>{row.email}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeView === 'boards' && (
        <div className={styles.boardsView} role="region" aria-label="Boards view">
          {boardColumns.map(({ option, cards }) => (
            <section key={option} className={styles.boardColumn} aria-label={`${option} column`}>
              <header className={`${styles.boardColumnHeading} ${OPTION_COLOR_CLASS[option] ?? ''}`}>
                {option} ({cards.length})
              </header>
              <div className={styles.boardColumnBody}>
                {cards.length === 0 ? (
                  <p className={styles.boardEmpty}>No entries</p>
                ) : (
                  cards.map((card) => (
                    <article key={card.id} className={styles.boardCard}>
                      <p className={styles.boardCardTitle}>{card.favoriteDrink}</p>
                      <span className={`${styles.chip} ${OPTION_COLOR_CLASS[card.visitFrequency] ?? ''}`}>
                        {card.visitFrequency}
                      </span>
                      <Stars value={card.starRating} readOnly />
                    </article>
                  ))
                )}
              </div>
            </section>
          ))}
        </div>
      )}

      {detailRow && (
        <div className={styles.panelOverlay} role="dialog" aria-label={`${detailIndex + 1} of ${rows.length} Entries`}>
          <div className={styles.panel}>
            <header className={styles.panelHeader}>
              <span>
                {detailIndex + 1} of {rows.length} Entries
              </span>
              <div className={styles.panelNav}>
                <button
                  type="button"
                  className={styles.panelNavButton}
                  disabled={detailIndex <= 0}
                  onClick={() => stepDetail(-1)}
                  aria-label="Previous entry"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className={styles.panelNavButton}
                  disabled={detailIndex >= rows.length - 1}
                  onClick={() => stepDetail(1)}
                  aria-label="Next entry"
                >
                  ›
                </button>
                <button type="button" className={styles.panelClose} onClick={closeDetail} aria-label="Close">
                  ×
                </button>
              </div>
            </header>
            <dl className={styles.panelFields}>
              <div className={styles.panelField}>
                <dt>Favorite Drink</dt>
                <dd>{detailRow.favoriteDrink}</dd>
              </div>
              <div className={styles.panelField}>
                <dt>Email</dt>
                <dd>{detailRow.email}</dd>
              </div>
              <div className={styles.panelField}>
                <dt>Visit Frequency</dt>
                <dd>
                  <span className={`${styles.chip} ${OPTION_COLOR_CLASS[detailRow.visitFrequency] ?? ''}`}>
                    {detailRow.visitFrequency}
                  </span>
                </dd>
              </div>
              <div className={styles.panelField}>
                <dt>Satisfaction</dt>
                <dd>
                  <Stars value={detailRow.starRating} onRate={(n) => rateRow(detailRow.id, n)} />
                </dd>
              </div>
              <div className={styles.panelField}>
                <dt>Submission Date</dt>
                <dd>{detailRow.submissionDate}</dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}

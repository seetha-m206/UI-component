import { useId } from 'react';
import styles from './EntriesKanbanView.module.css';

export interface KanbanColumn {
  id: string;
  name: string;
  /** Cycles through the source's small header palette (kanbanCardColor1/2/3…). */
  colorIndex: 1 | 2 | 3;
}

export interface KanbanCardField {
  label: string;
  value: string;
}

export interface KanbanCard {
  id: string;
  columnId: string;
  /** The grouping field's own value text — reconstructs `em.kanbanCardName`. */
  title: string;
  /** Up to 4 extra fields configured in the setup modal to surface on the card. */
  fields: KanbanCardField[];
}

export interface EntriesKanbanViewProps {
  columns: KanbanColumn[];
  cards: KanbanCard[];
  /** Called when a card is moved to a different column via the "Move to…" control. */
  onMoveCard?: (cardId: string, newColumnId: string) => void;
  /** Disables every card's move control (e.g. a read-only Kanban view). Defaults to false. */
  disabled?: boolean;
}

/**
 * Reconstructed from Zoho Forms' Entries "Kanban View" (see
 * Research-Library/04-Component-Library/zoho-forms/entries-kanban-view.md).
 * The source record could never verify real card drag-and-drop between
 * columns — the automated test tooling's synthetic drag gesture wasn't
 * granular enough for what's very likely a jQuery UI Sortable-based drag,
 * and no drop ever registered. Rather than guess at unverified drag
 * mechanics (network payload, ghost-element CSS, drop animation — all
 * explicitly NOT OBSERVED in the source), this reconstruction implements
 * the same end-user capability — regroup a card into another column —
 * through a confirmed-accessible "Move to…" <select> on each card. See
 * this folder's README for the full rationale.
 */
export function EntriesKanbanView({
  columns,
  cards,
  onMoveCard,
  disabled = false,
}: EntriesKanbanViewProps) {
  const headingId = useId();

  return (
    <div className={styles.root} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.visuallyHidden}>
        Entries Kanban view
      </h2>
      <div className={styles.board}>
        {columns.map((column) => {
          const columnCards = cards.filter((card) => card.columnId === column.id);
          const otherColumns = columns.filter((c) => c.id !== column.id);
          const columnHeadingId = `${headingId}-col-${column.id}`;
          return (
            <section key={column.id} className={styles.column} aria-labelledby={columnHeadingId}>
              <header className={`${styles.columnHeading} ${styles[`color${column.colorIndex}`]}`}>
                <h3 id={columnHeadingId} className={styles.columnTitle}>
                  {column.name}
                </h3>
              </header>
              <div className={styles.columnBody}>
                {columnCards.length === 0 ? (
                  <div className={styles.emptyState} role="status">
                    <svg viewBox="0 0 64 48" className={styles.emptyIcon} aria-hidden="true">
                      <rect x="8" y="10" width="48" height="30" rx="3" />
                      <path d="M8 20h48" />
                      <circle cx="20" cy="30" r="3" />
                      <path d="M28 30h20" />
                    </svg>
                    <p className={styles.emptyText}>No Entries</p>
                  </div>
                ) : (
                  <ul className={styles.cardList}>
                    {columnCards.map((card) => {
                      const moveLabelId = `${headingId}-move-${card.id}`;
                      return (
                        <li key={card.id} className={styles.card}>
                          <em className={styles.cardTitle}>{card.title}</em>
                          {card.fields.length > 0 && (
                            <dl className={styles.cardFields}>
                              {card.fields.map((field) => (
                                <div key={field.label} className={styles.cardField}>
                                  <dt className={styles.cardFieldLabel}>{field.label}</dt>
                                  <dd className={styles.cardFieldValue}>{field.value}</dd>
                                </div>
                              ))}
                            </dl>
                          )}
                          <div className={styles.moveControl}>
                            <label id={moveLabelId} className={styles.moveLabel}>
                              Move to…
                            </label>
                            <select
                              className={styles.moveSelect}
                              aria-labelledby={`${moveLabelId} ${columnHeadingId}`}
                              disabled={disabled || otherColumns.length === 0}
                              value=""
                              onChange={(event) => {
                                const newColumnId = event.target.value;
                                if (newColumnId) {
                                  onMoveCard?.(card.id, newColumnId);
                                }
                              }}
                            >
                              <option value="" disabled>
                                Move to…
                              </option>
                              {otherColumns.map((target) => (
                                <option key={target.id} value={target.id}>
                                  {target.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

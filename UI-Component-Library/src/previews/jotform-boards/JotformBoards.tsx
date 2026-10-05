import { useId, useState } from 'react';
import styles from './JotformBoards.module.css';

export type BoardEntryMode = 'create' | 'workflow';

export interface JotformBoardsProps {
  /**
   * Which entry point this preview starts on: "create" reconstructs
   * "+ CREATE → Board → Start from scratch" (a generic, standalone
   * Kanban board); "workflow" reconstructs the shared app-shell
   * mode-switcher opened from inside an active Workflow (an
   * auto-scoped, auto-named run-tracking board). Defaults to "create".
   * The preview itself is uncontrolled after mount — the toggle below
   * switches modes locally, this prop only sets the initial state.
   */
  initialMode?: BoardEntryMode;
}

interface DemoCard {
  id: string;
  title: string;
  date: string;
}

const GENERIC_COLUMNS: { id: string; name: string; cards: DemoCard[] }[] = [
  {
    id: 'backlog',
    name: 'Backlog',
    cards: [
      { id: 'c1', title: 'Create new tasks on your board', date: 'Oct 5' },
      { id: 'c2', title: 'Edit your groups', date: 'Oct 6' },
    ],
  },
  {
    id: 'waiting',
    name: 'Waiting',
    cards: [{ id: 'c3', title: 'Review vendor quote', date: 'Oct 7' }],
  },
  {
    id: 'in-progress',
    name: 'In Progress',
    cards: [{ id: 'c4', title: 'Draft onboarding email', date: 'Oct 8' }],
  },
  {
    id: 'done',
    name: 'Done',
    cards: [],
  },
];

/**
 * Reconstructed from JotForm Boards' confirmed dual identity (see
 * Research-Library/04-Component-Library/jotform/jotform-boards.md,
 * Behavior & States finding 3): opening Boards via "+ CREATE" and via
 * the Workflow Builder's mode-switcher produce two structurally
 * different board instances, not the same board restyled. This preview
 * is self-contained/uncontrolled — the mode toggle below switches
 * between the two reconstructed states locally; there is no drag-and-
 * drop here (see this folder's README for why that's out of scope).
 */
export function JotformBoards({ initialMode = 'create' }: JotformBoardsProps) {
  const [mode, setMode] = useState<BoardEntryMode>(initialMode);
  const headingId = useId();
  const summaryId = useId();

  const isWorkflow = mode === 'workflow';

  return (
    <div className={styles.root} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.visuallyHidden}>
        Jotform Boards
      </h2>

      <div
        className={styles.modeSwitcher}
        role="radiogroup"
        aria-label="Board entry point"
      >
        <button
          type="button"
          role="radio"
          aria-checked={!isWorkflow}
          className={!isWorkflow ? `${styles.modeButton} ${styles.modeButtonActive}` : styles.modeButton}
          onClick={() => setMode('create')}
        >
          Open via + CREATE (generic board)
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={isWorkflow}
          className={isWorkflow ? `${styles.modeButton} ${styles.modeButtonActive}` : styles.modeButton}
          onClick={() => setMode('workflow')}
        >
          Open via Workflow mode-switcher (workflow-scoped board)
        </button>
      </div>

      <p id={summaryId} className={styles.summary} role="status">
        {isWorkflow
          ? '1 column · "Completed" only · no cards · run counter present — a workflow-execution monitor, not a task list.'
          : '4 columns · Backlog, Waiting, In Progress, Done · demo task cards · no run counter — a generic, standalone task board.'}
      </p>

      <div className={styles.stage} aria-describedby={summaryId}>
        <div className={styles.boardHeader}>
          <h3 className={styles.boardTitle}>
            {isWorkflow ? 'Workflow Board' : 'Untitled Board'}
          </h3>
          {isWorkflow && (
            <span className={styles.workflowBadge}>Auto-scoped to this workflow</span>
          )}
        </div>

        <div className={styles.boardCanvas}>
          {isWorkflow ? (
            <div className={styles.columns}>
              <section className={styles.column} aria-label="Completed">
                <header className={styles.columnHeading}>
                  <svg
                    className={styles.checkIcon}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="10" cy="10" r="9" />
                    <path d="M6 10.5l2.5 2.5L14 7.5" />
                  </svg>
                  <span className={styles.columnTitle}>Completed</span>
                </header>
                <div className={styles.columnBody}>
                  <div className={styles.emptyState} role="status">
                    <p className={styles.emptyText}>No runs yet</p>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div className={styles.columns}>
              {GENERIC_COLUMNS.map((column) => (
                <section key={column.id} className={styles.column} aria-label={column.name}>
                  <header className={styles.columnHeading}>
                    <span className={styles.columnTitle}>{column.name}</span>
                    <span className={styles.columnCount}>{column.cards.length}</span>
                  </header>
                  <div className={styles.columnBody}>
                    {column.cards.length === 0 ? (
                      <div className={styles.emptyState} role="status">
                        <p className={styles.emptyText}>No tasks</p>
                      </div>
                    ) : (
                      <ul className={styles.cardList}>
                        {column.cards.map((card) => (
                          <li key={card.id} className={styles.card}>
                            <span className={styles.cardAvatar} aria-hidden="true" />
                            <div className={styles.cardBody}>
                              <span className={styles.cardTitle}>{card.title}</span>
                              <span className={styles.cardDate}>{card.date}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          )}

          {isWorkflow && (
            <div className={styles.runCounter} role="status">
              0 runs
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

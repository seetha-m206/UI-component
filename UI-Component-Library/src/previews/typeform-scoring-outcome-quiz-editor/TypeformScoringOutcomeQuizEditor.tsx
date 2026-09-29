import { useEffect, useId, useRef, useState } from 'react';
import styles from './TypeformScoringOutcomeQuizEditor.module.css';

export type WorkflowTab = 'logic' | 'scoring' | 'tagging' | 'outcome_quiz';

export interface QuizChoice {
  id: string;
  label: string;
}

export interface ScoringRule {
  choiceId: string;
  score: number;
}

export interface OutcomeEnding {
  id: string;
  name: string;
  /** Choice ids this ending is wired to — each renders as a removable chip
   * once selected, per the source record's confirmed "Choose answers"
   * combobox behavior. */
  answerChoiceIds: string[];
}

export interface TypeformScoringOutcomeQuizEditorProps {
  /** Which Workflow sub-nav tab is active. Defaults to 'logic' — the mock
   * canvas behind the modals. */
  initialTab?: WorkflowTab;
  /** The single rating-style question's answer choices used by both
   * modals, matching the source record's own "a 1-5 rating: A=1...E=5"
   * example — the record's shorthand for a Rating field whose real, on-
   * screen choice labels are the numbers 1-5 themselves. */
  choices?: QuizChoice[];
  /** Which question number the `choices` belong to, used only to build the
   * "Choose answers" chip label (see CHIP FORMAT note below). Defaults to 1
   * — the source record traced a single-question test form. */
  questionNumber?: number;
  initialScoringRules?: ScoringRule[];
  initialEndings?: OutcomeEnding[];
  disabled?: boolean;
  /** Fired when either modal's Save is clicked — after the toast is
   * scheduled. Real edits are already applied to internal state before
   * Save (no separate HTTP mutation is simulated here — see this preview's
   * evidence string for why: the source record found no HTTP PUT/PATCH/
   * POST fired for either action, and inferred, not confirmed, a WebSocket
   * mechanism). */
  onSave?: (tab: 'scoring' | 'outcome_quiz') => void;
}

// The record's own shorthand ("a 1-5 rating: A=1...E=5") explains VALUES,
// not on-screen labels — the real Rating field's choices are the numbers
// 1-5 themselves, so that's what's rendered here.
const DEFAULT_CHOICES: QuizChoice[] = [
  { id: 'choice-1', label: '1' },
  { id: 'choice-2', label: '2' },
  { id: 'choice-3', label: '3' },
  { id: 'choice-4', label: '4' },
  { id: 'choice-5', label: '5' },
];

let endingCounter = 0;

/**
 * Reconstructed from Typeform's Workflow tab Scoring / Outcome quiz editors
 * (see
 * Research-Library/04-Component-Library/typeform/typeform-scoring-outcome-quiz-editor.md).
 *
 * The source record directly tested (and REFUTED) the hypothesis that these
 * two editors share the React Flow node-graph engine used by
 * typeform-automations-builder: an isolated DOM check found 0
 * react-flow-classed elements and 0 <canvas> elements inside either modal's
 * own subtree, vs. 41 on the same page's underlying Logic tab mounted
 * behind it. Both modals are confirmed to be a separate, purpose-built
 * list-and-modal editor bolted ON TOP of the Logic canvas, not an extension
 * of it — so this reconstruction renders only a small placeholder "Logic
 * canvas" backdrop (NOT a node-graph) behind each modal, deliberately not
 * reusing typeform-automations-builder's canvas shape here.
 *
 * Both modals share the confirmed footer pattern ("Delete all rules" left,
 * Cancel/Save right) and the confirmed Save behavior: closes the modal and
 * shows a toast with the EXACT source copy "Edits are always autosaved." —
 * reproduced verbatim, not paraphrased. The source record found no visible
 * network mutation for either the answer-selection click or the Save click
 * (an INFERENCE, not a confirmed fact, is that persistence likely travels
 * over WebSocket); this reconstruction does not simulate any network call,
 * consistent with that.
 */
export function TypeformScoringOutcomeQuizEditor({
  initialTab = 'logic',
  choices = DEFAULT_CHOICES,
  questionNumber = 1,
  initialScoringRules,
  initialEndings,
  disabled = false,
  onSave,
}: TypeformScoringOutcomeQuizEditorProps) {
  const [tab, setTab] = useState<WorkflowTab>(initialTab);
  const [scoringRules, setScoringRules] = useState<ScoringRule[]>(
    () => initialScoringRules ?? choices.map((choice) => ({ choiceId: choice.id, score: 0 }))
  );
  const [endings, setEndings] = useState<OutcomeEnding[]>(() => initialEndings ?? []);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headingId = useId();

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  function showToast(message: string) {
    setToast(message);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => setToast(null), 4000);
  }

  function openTab(next: WorkflowTab) {
    if (disabled) return;
    setTab(next);
  }

  function closeModal() {
    setTab('logic');
  }

  function handleScoreChange(choiceId: string, rawScore: string) {
    if (disabled) return;
    const score = Number(rawScore);
    setScoringRules((prev) =>
      prev.map((rule) => (rule.choiceId === choiceId ? { ...rule, score } : rule))
    );
  }

  function handleDeleteAllScoringRules() {
    if (disabled) return;
    setScoringRules(choices.map((choice) => ({ choiceId: choice.id, score: 0 })));
  }

  function handleSaveScoring() {
    if (disabled) return;
    closeModal();
    onSave?.('scoring');
    showToast('Edits are always autosaved.');
  }

  function handleAddEnding() {
    if (disabled) return;
    endingCounter += 1;
    setEndings((prev) => [
      ...prev,
      { id: `ending-${endingCounter}`, name: `New Ending (${prev.length + 1})`, answerChoiceIds: [] },
    ]);
  }

  function handleToggleEndingChoice(endingId: string, choiceId: string) {
    if (disabled) return;
    setEndings((prev) =>
      prev.map((ending) => {
        if (ending.id !== endingId) return ending;
        const already = ending.answerChoiceIds.includes(choiceId);
        return {
          ...ending,
          answerChoiceIds: already
            ? ending.answerChoiceIds.filter((id) => id !== choiceId)
            : [...ending.answerChoiceIds, choiceId],
        };
      })
    );
  }

  function handleRemoveEnding(endingId: string) {
    if (disabled) return;
    setEndings((prev) => prev.filter((ending) => ending.id !== endingId));
  }

  function handleDeleteAllEndings() {
    if (disabled) return;
    setEndings([]);
  }

  function handleSaveOutcomeQuiz() {
    if (disabled) return;
    closeModal();
    onSave?.('outcome_quiz');
    showToast('Edits are always autosaved.');
  }

  return (
    <div className={styles.root}>
      <div className={styles.subnav} role="tablist" aria-label="Workflow">
        {(['logic', 'scoring', 'tagging', 'outcome_quiz'] as WorkflowTab[]).map((tabId) => (
          <button
            key={tabId}
            type="button"
            role="tab"
            aria-selected={tab === tabId}
            className={tab === tabId ? `${styles.subnavItem} ${styles.subnavItemActive}` : styles.subnavItem}
            disabled={disabled}
            onClick={() => openTab(tabId)}
          >
            {tabId === 'logic' && 'Logic'}
            {tabId === 'scoring' && 'Scoring'}
            {tabId === 'tagging' && 'Tagging'}
            {tabId === 'outcome_quiz' && 'Outcome quiz'}
          </button>
        ))}
      </div>

      {/* Deliberately NOT a node-graph: the source record confirmed 0
          react-flow-classed elements / 0 <canvas> inside either modal's own
          subtree. This placeholder only demonstrates that the modals are
          layered ON TOP of some canvas, not what that canvas contains. */}
      <div className={styles.logicBackdrop} aria-hidden={tab !== 'logic'}>
        <div className={styles.logicNode}>Start</div>
        <div className={styles.logicConnectorLine} />
        <div className={styles.logicNode}>Question: Rating</div>
        <div className={styles.logicConnectorLine} />
        <div className={styles.logicNode}>End</div>
      </div>

      {tab === 'tagging' && (
        <p className={styles.notImplementedNote}>
          Tagging is out of scope for this reconstruction — the source record only traced Scoring
          and Outcome quiz in depth (see the component record).
        </p>
      )}

      {tab === 'scoring' && (
        <Modal titleId={`${headingId}-scoring`} title="Score quiz" onRequestClose={closeModal}>
          <p className={styles.modalSubheading}>Assign points to answers</p>
          <ul className={styles.choiceList}>
            {choices.map((choice) => {
              const rule = scoringRules.find((r) => r.choiceId === choice.id);
              return (
                <li key={choice.id} className={styles.choiceRow}>
                  <span className={styles.choiceLabel}>{choice.label}</span>
                  <label className={styles.scoreLabel}>
                    <span className={styles.visuallyHidden}>Score for {choice.label}</span>
                    <input
                      type="number"
                      className={styles.scoreInput}
                      value={rule?.score ?? 0}
                      disabled={disabled}
                      onChange={(event) => handleScoreChange(choice.id, event.currentTarget.value)}
                    />
                  </label>
                </li>
              );
            })}
          </ul>
          <ModalFooter
            disabled={disabled}
            onDeleteAll={handleDeleteAllScoringRules}
            onCancel={closeModal}
            onSave={handleSaveScoring}
          />
        </Modal>
      )}

      {tab === 'outcome_quiz' && (
        <Modal
          titleId={`${headingId}-outcome`}
          title="Outcome quiz"
          onRequestClose={closeModal}
        >
          <p className={styles.modalSubheading}>Show different quiz endings based on how people answer</p>
          <ul className={styles.endingList}>
            {endings.map((ending) => (
              <li key={ending.id} className={styles.endingRow}>
                <div className={styles.endingHeader}>
                  <span id={`${headingId}-ending-${ending.id}`} className={styles.endingName}>
                    {ending.name}
                  </span>
                  <button
                    type="button"
                    className={styles.removeEndingButton}
                    aria-label={`Remove ${ending.name}`}
                    disabled={disabled}
                    onClick={() => handleRemoveEnding(ending.id)}
                  >
                    <RemoveIcon />
                  </button>
                </div>
                <ChooseAnswersCombobox
                  ending={ending}
                  choices={choices}
                  questionNumber={questionNumber}
                  disabled={disabled}
                  labelledById={`${headingId}-ending-${ending.id}`}
                  onToggle={(choiceId) => handleToggleEndingChoice(ending.id, choiceId)}
                />
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={styles.addEndingButton}
            disabled={disabled}
            onClick={handleAddEnding}
          >
            <PlusIcon /> Add Ending
          </button>
          <ModalFooter
            disabled={disabled}
            onDeleteAll={handleDeleteAllEndings}
            onCancel={closeModal}
            onSave={handleSaveOutcomeQuiz}
          />
        </Modal>
      )}

      {toast && (
        <div className={styles.toast} role="status">
          {toast}
        </div>
      )}
    </div>
  );
}

function Modal({
  titleId,
  title,
  onRequestClose,
  children,
}: {
  titleId: string;
  title: string;
  onRequestClose: () => void;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstFocusable = dialogRef.current?.querySelector<HTMLElement>(
      'input, button, [tabindex]'
    );
    firstFocusable?.focus();
  }, []);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      event.preventDefault();
      onRequestClose();
    }
  }

  return (
    <div className={styles.overlay}>
      <div
        ref={dialogRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.modalHeader}>
          <h2 id={titleId} className={styles.modalTitle}>
            {title}
          </h2>
          <button
            type="button"
            className={styles.closeButton}
            aria-label={`Close ${title} dialog`}
            onClick={onRequestClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}

function ModalFooter({
  disabled,
  onDeleteAll,
  onCancel,
  onSave,
}: {
  disabled: boolean;
  onDeleteAll: () => void;
  onCancel: () => void;
  onSave: () => void;
}) {
  return (
    <div className={styles.modalFooter}>
      <button type="button" className={styles.deleteAllButton} disabled={disabled} onClick={onDeleteAll}>
        Delete all rules
      </button>
      <div className={styles.footerRight}>
        <button type="button" className={styles.cancelButton} disabled={disabled} onClick={onCancel}>
          Cancel
        </button>
        <button type="button" className={styles.saveButton} disabled={disabled} onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  );
}

function ChooseAnswersCombobox({
  ending,
  choices,
  questionNumber,
  disabled,
  labelledById,
  onToggle,
}: {
  ending: OutcomeEnding;
  choices: QuizChoice[];
  questionNumber: number;
  disabled: boolean;
  /** id of the visible ending-name element this combobox belongs to —
   * wired via aria-describedby so screen readers announce which ending a
   * given "Choose answers" control affects, without duplicating that text
   * into a second, redundant DOM node. */
  labelledById: string;
  onToggle: (choiceId: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open]);

  return (
    <div className={styles.comboboxWrap} ref={wrapRef}>
      <div className={styles.comboboxField}>
        {ending.answerChoiceIds.map((choiceId) => {
          const choice = choices.find((c) => c.id === choiceId);
          if (!choice) return null;
          return (
            // CHIP FORMAT — a reasonable inference, not a verbatim-confirmed
            // rule: the source record's own single captured example was the
            // literal string "1 · 5 ×" for a form with one question (a 1-5
            // Rating field) and choice value 5 selected. "<question#> · <choice
            // value>" is the simplest rule that reproduces that exact example
            // (question 1, value 5 -> "1 · 5") and generalizes sensibly to a
            // multi-question outcome quiz, where a chip needs to identify BOTH
            // which question and which answer it refers to. Flagged here
            // rather than presented as directly observed.
            <span key={choiceId} className={styles.chip}>
              {questionNumber} · {choice.label}
              <button
                type="button"
                className={styles.chipRemove}
                aria-label={`Remove ${choice.label} from ${ending.name}`}
                disabled={disabled}
                onClick={() => onToggle(choiceId)}
              >
                ×
              </button>
            </span>
          );
        })}
        <button
          type="button"
          className={styles.comboboxTrigger}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-describedby={labelledById}
          disabled={disabled}
          onClick={() => setOpen((current) => !current)}
        >
          Choose answers
        </button>
      </div>
      {open && (
        <ul className={styles.comboboxMenu} role="listbox" aria-label={`Choose answers for ${ending.name}`}>
          {choices.map((choice) => {
            const selected = ending.answerChoiceIds.includes(choice.id);
            return (
              <li key={choice.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={selected ? `${styles.comboboxOption} ${styles.comboboxOptionSelected}` : styles.comboboxOption}
                  onClick={() => onToggle(choice.id)}
                >
                  {choice.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.smallIcon} aria-hidden="true">
      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function RemoveIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.smallIcon} aria-hidden="true">
      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

import { useEffect, useId, useRef, useState } from 'react';
import styles from './TypeformFormModePicker.module.css';

export type FormMode = 'universal' | 'lead_qualification' | 'knowledge_quiz' | 'match_quiz';

export interface FormQuestion {
  id: string;
  title: string;
  type: string;
}

interface ModeOption {
  id: FormMode;
  label: string;
  locked: boolean;
}

/** Exact 4-option preset picker from the source record — a mode PRESET
 * picker for the builder's own editing canvas, NOT a respondent-layout
 * toggle. Knowledge quiz / Match quiz render locked/paywalled, matching the
 * record's "not tested — both paywalled on this account's plan" finding. */
const MODE_OPTIONS: ModeOption[] = [
  { id: 'universal', label: 'Universal', locked: false },
  { id: 'lead_qualification', label: 'Lead qualification', locked: false },
  { id: 'knowledge_quiz', label: 'Knowledge quiz', locked: true },
  { id: 'match_quiz', label: 'Match quiz', locked: true },
];

const MODE_LABEL: Record<FormMode, string> = {
  universal: 'Universal',
  lead_qualification: 'Lead qualification',
  knowledge_quiz: 'Knowledge quiz',
  match_quiz: 'Match quiz',
};

export interface TypeformFormModePickerProps {
  /** Starting questions shown in the normal editing canvas (Universal
   * mode). Defaults to a 4-question set mirroring the source record's own
   * test form ("Customer Feedback Survey"). */
  initialQuestions?: FormQuestion[];
  /** Starting ending name shown in the Workflow-tab summary, to match the
   * record's confirmed round-trip check ("4 questions + 1 outcome ending,
   * all intact after switching back"). */
  initialEndingName?: string;
  /** Which mode the picker starts on. Defaults to 'universal'. */
  initialMode?: FormMode;
  disabled?: boolean;
  /** Fired whenever a mode is actually switched to (never fired for a
   * click on a locked/paywalled option, which is a confirmed no-op). */
  onModeChange?: (mode: FormMode) => void;
}

/**
 * Reconstructed from Typeform's Form Mode Picker (see
 * Research-Library/04-Component-Library/typeform/typeform-form-mode-picker.md).
 *
 * The source record directly tested and REFUTED a prior hypothesis that
 * "Universal mode" is a binary toggle between Typeform's one-question-per-
 * screen respondent rendering and a scrollable all-questions-on-one-page
 * alternative. It is not — there is no such alternative reachable anywhere
 * in the tested account/plan. This is a 4-option BUILDER TOOLING preset
 * picker: switching to "Lead qualification" replaces the builder's own
 * editing canvas with an AI-drafted "Review your form" scoring-rules
 * screen; it does NOT change how the respondent-facing form renders. This
 * reconstruction deliberately does not add a respondent-preview toggle for
 * that reason — see this preview's evidence string.
 *
 * Switching back to Universal from any other mode is confirmed to restore
 * the ordinary canvas with no data loss (all questions + the Workflow tab's
 * outcome ending intact) — the fixtures below are built to demonstrate that
 * exact round trip.
 *
 * Knowledge quiz / Match quiz are rendered visibly locked (paywalled on the
 * tested plan) and clicking them is a no-op — their real canvas behavior is
 * genuinely untested in the source and is NOT invented here.
 */
export function TypeformFormModePicker({
  initialQuestions,
  initialEndingName = 'Thank you screen',
  initialMode = 'universal',
  disabled = false,
  onModeChange,
}: TypeformFormModePickerProps) {
  const [mode, setMode] = useState<FormMode>(initialMode);
  const [open, setOpen] = useState(false);
  const [questions] = useState<FormQuestion[]>(
    () =>
      initialQuestions ?? [
        { id: 'q1', title: 'What is your full name?', type: 'Short text' },
        { id: 'q2', title: 'How satisfied are you with our product?', type: 'Rating' },
        { id: 'q3', title: 'Would you recommend us to a friend?', type: 'Yes/No' },
        { id: 'q4', title: 'Any other comments?', type: 'Long text' },
      ]
  );
  const [endingName] = useState(initialEndingName);

  const headingId = useId();
  const listboxId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Auto-focus the current option (or the first item) when the menu opens —
  // same standard menu-focus-management pattern used by
  // typeform-automations-builder's connector "+" menu, so Escape/ArrowUp/
  // ArrowDown are immediately keyboard-operable without a prior Tab.
  useEffect(() => {
    if (!open) return;
    const current = menuRef.current?.querySelector<HTMLElement>('[aria-selected="true"]');
    const first = menuRef.current?.querySelector<HTMLElement>('[role="option"]');
    (current ?? first)?.focus();
  }, [open]);

  function toggleOpen() {
    if (disabled) return;
    setOpen((current) => !current);
  }

  function closeMenu() {
    setOpen(false);
  }

  function selectMode(option: ModeOption) {
    if (disabled || option.locked) return;
    setMode(option.id);
    onModeChange?.(option.id);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function handleMenuKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      buttonRef.current?.focus();
      return;
    }
    const isNext = event.key === 'ArrowDown';
    const isPrev = event.key === 'ArrowUp';
    if (!isNext && !isPrev) return;
    event.preventDefault();
    const items = Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>('[role="option"]') ?? []
    );
    if (items.length === 0) return;
    const currentIndex = items.indexOf(document.activeElement as HTMLElement);
    const nextIndex = (currentIndex + (isNext ? 1 : -1) + items.length) % items.length;
    items[nextIndex]?.focus();
  }

  return (
    <div className={styles.root}>
      <div className={styles.toolbar}>
        <div className={styles.pickerWrap}>
          <button
            ref={buttonRef}
            type="button"
            className={styles.trigger}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-labelledby={`${headingId} ${headingId}-value`}
            disabled={disabled}
            onClick={toggleOpen}
          >
            <span id={headingId} className={styles.visuallyHidden}>
              Form mode
            </span>
            <span id={`${headingId}-value`} className={styles.triggerValue}>
              {MODE_LABEL[mode]}
            </span>
            <ChevronIcon />
          </button>

          {open && (
            <div
              ref={menuRef}
              id={listboxId}
              className={styles.menu}
              role="listbox"
              aria-label="Form mode"
              onKeyDown={handleMenuKeyDown}
            >
              {MODE_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  role="option"
                  aria-selected={mode === option.id}
                  aria-disabled={option.locked || undefined}
                  className={
                    mode === option.id
                      ? `${styles.menuItem} ${styles.menuItemSelected}`
                      : styles.menuItem
                  }
                  onClick={() => selectMode(option)}
                >
                  <span>{option.label}</span>
                  {option.locked && (
                    <span className={styles.lockBadge} aria-label="Locked, requires a paid plan">
                      <LockIcon />
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {mode === 'lead_qualification' ? (
        <div className={styles.reviewScreen} data-canvas="lead-qualification">
          <h2 className={styles.reviewHeading}>Review your form</h2>
          <p className={styles.reviewSubheading}>
            We drafted lead-scoring rules from your existing questions. Review and adjust before
            publishing.
          </p>
          <ul className={styles.rulesList}>
            {questions.map((question) => (
              <li key={question.id} className={styles.ruleRow}>
                <span className={styles.ruleQuestion}>{question.title}</span>
                <span className={styles.ruleBadge}>AI-drafted rule</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.canvas} data-canvas="universal">
          <ul className={styles.questionList}>
            {questions.map((question, index) => (
              <li key={question.id} className={styles.questionRow}>
                <span className={styles.questionIndex}>{index + 1}</span>
                <div className={styles.questionBody}>
                  <span className={styles.questionTitle}>{question.title}</span>
                  <span className={styles.questionType}>{question.type}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.endingRow}>
            <span className={styles.endingLabel}>Ending</span>
            <span className={styles.endingName}>{endingName}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 12 8" className={styles.chevron} aria-hidden="true">
      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.lockIcon} aria-hidden="true">
      <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

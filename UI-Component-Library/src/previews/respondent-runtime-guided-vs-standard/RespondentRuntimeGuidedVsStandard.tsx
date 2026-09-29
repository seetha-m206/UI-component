import { useState } from 'react';
import styles from './RespondentRuntimeGuidedVsStandard.module.css';

export type RuntimeMode = 'guided' | 'standard';

export type MockQuestionType = 'yes_no' | 'short_text';

export interface MockQuestion {
  id: string;
  /** Free-text prose Draft block that appears just before this question in
   * the document — confirmed to land on the SAME guided-mode screen as the
   * question that follows it (linear document order maps directly onto
   * screen boundaries). */
  precedingProse?: string;
  title: string;
  type: MockQuestionType;
}

export interface RespondentRuntimeGuidedVsStandardProps {
  /** Which of the two respondent layout modes the component starts in.
   * Both render the SAME underlying mock document — reconstructing the
   * record's central finding that this is one document with two
   * renderers, not two separate form schemas. Defaults to 'guided'. */
  initialMode?: RuntimeMode;
  questions?: MockQuestion[];
  disabled?: boolean;
  onModeChange?: (mode: RuntimeMode) => void;
  /** Fired once, when the last screen's Submit is actually clicked (guided
   * mode) or the single end-of-page Submit is clicked (standard mode). */
  onSubmit?: (answers: Record<string, string>) => void;
}

const DEFAULT_QUESTIONS: MockQuestion[] = [
  { id: 'q1', title: 'Excited to get started?', type: 'yes_no' },
  {
    id: 'q2',
    precedingProse: "Great! Let's collect a few more details before we begin.",
    title: 'What should we call you?',
    type: 'short_text',
  },
  { id: 'q3', title: 'Do you agree to the terms and conditions?', type: 'yes_no' },
  { id: 'q4', title: 'Any other comments?', type: 'short_text' },
];

/**
 * Reconstructed from Paperform's respondent runtime (see
 * Research-Library/04-Component-Library/paperform/respondent-runtime-guided-vs-standard.md).
 *
 * CORRECTED UNDERSTANDING (per this record's own Cross-Component Pattern
 * Note, which corrects [[document-canvas-editor-shell]]'s original Network
 * finding): the builder's autosave is a steady ~15-second interval that
 * fires only when state is dirty, NOT a debounce restarted by each
 * keystroke — and, more significantly, a structural edit (inserting a
 * question card / a page break) can show "SAVED DRAFT" while genuinely
 * unsaved, with at least one CONFIRMED case of real data loss (a page
 * break that never reached the server). This preview's sibling,
 * document-canvas-editor-shell, models that corrected understanding
 * directly; this component covers the READ side (the published,
 * respondent-facing runtime) and does not re-simulate the builder's save
 * timing, but both previews' evidence strings reflect the corrected
 * finding, not the original superseded one.
 *
 * One runtime, two layout modes, both reading the SAME document:
 * - Guided: a sliding window shows one question at a time; Yes/No-style
 *   answers auto-advance; text answers advance on Enter or a → button; a
 *   thin top progress bar reads `screenIndex / (N - 1)` as a percentage
 *   (confirmed: 0% -> 33% -> 67% -> 100% across 4 screens); prose between
 *   questions in the document appears on the screen of the question that
 *   FOLLOWS it; there is CONFIRMED NO back-navigation control anywhere in
 *   guided mode (not scroll, not a button) — this reconstruction
 *   deliberately does not add one.
 * - Standard: all questions mount at once, normal page scroll, one Submit
 *   button at the end.
 */
export function RespondentRuntimeGuidedVsStandard({
  initialMode = 'guided',
  questions = DEFAULT_QUESTIONS,
  disabled = false,
  onModeChange,
  onSubmit,
}: RespondentRuntimeGuidedVsStandardProps) {
  const [mode, setInternalMode] = useState<RuntimeMode>(initialMode);
  const [screenIndex, setScreenIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function setMode(next: RuntimeMode) {
    if (disabled) return;
    setInternalMode(next);
    setScreenIndex(0);
    setSubmitted(false);
    onModeChange?.(next);
  }

  function answer(questionId: string, value: string) {
    if (disabled) return;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  // Confirmed: selecting a Yes/No-style answer auto-advances immediately —
  // no explicit "Next" needed. Text/Email advance via Enter or the -> button
  // instead (handled separately below).
  function answerAndAdvance(questionId: string, value: string) {
    if (disabled) return;
    answer(questionId, value);
    advance();
  }

  function advance() {
    if (screenIndex >= questions.length - 1) {
      handleSubmit();
      return;
    }
    setScreenIndex((index) => index + 1);
  }

  function handleSubmit() {
    if (disabled) return;
    setSubmitted(true);
    onSubmit?.(answers);
  }

  const progressPercent =
    questions.length > 1 ? Math.round((screenIndex / (questions.length - 1)) * 100) : 100;
  const isLastScreen = screenIndex === questions.length - 1;
  const currentQuestion = questions[screenIndex];

  return (
    <div className={styles.root}>
      <div className={styles.modeSwitch} role="radiogroup" aria-label="Form Experience">
        <button
          type="button"
          role="radio"
          aria-checked={mode === 'guided'}
          className={mode === 'guided' ? `${styles.modeButton} ${styles.modeButtonActive}` : styles.modeButton}
          disabled={disabled}
          onClick={() => setMode('guided')}
        >
          One-at-a-time (Guided)
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={mode === 'standard'}
          className={mode === 'standard' ? `${styles.modeButton} ${styles.modeButtonActive}` : styles.modeButton}
          disabled={disabled}
          onClick={() => setMode('standard')}
        >
          Classic (Standard)
        </button>
      </div>

      {mode === 'guided' ? (
        <div
          className={styles.guidedShell}
          data-mode="guided"
          data-body-class={submitted ? undefined : '__guidedMode'}
        >
          <div
            className={styles.progressTrack}
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Form progress"
          >
            <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
          </div>

          {submitted ? (
            <div className={styles.submittedPanel} role="status">
              Form submitted.
            </div>
          ) : (
            <div className={styles.guidedScreen} key={currentQuestion.id}>
              {currentQuestion.precedingProse && (
                <p className={styles.prose}>{currentQuestion.precedingProse}</p>
              )}
              <GuidedQuestion
                question={currentQuestion}
                value={answers[currentQuestion.id] ?? ''}
                disabled={disabled}
                isLast={isLastScreen}
                onAnswerAndAdvance={(value) => answerAndAdvance(currentQuestion.id, value)}
                onTextChange={(value) => answer(currentQuestion.id, value)}
                onAdvance={advance}
              />
            </div>
          )}

          {/* Confirmed in the source: scrolling up in guided mode is a
              no-op, and no back-navigation control exists anywhere in this
              mode. Deliberately absent here, not an oversight. */}
        </div>
      ) : (
        <div className={styles.standardShell} data-mode="standard" data-body-class="__standardMode">
          {submitted ? (
            <div className={styles.submittedPanel} role="status">
              Form submitted.
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
              <ul className={styles.standardList}>
                {questions.map((question) => (
                  <li key={question.id} className={styles.standardItem}>
                    {question.precedingProse && (
                      <p className={styles.prose}>{question.precedingProse}</p>
                    )}
                    <StandardQuestion
                      question={question}
                      value={answers[question.id] ?? ''}
                      disabled={disabled}
                      onChange={(value) => answer(question.id, value)}
                    />
                  </li>
                ))}
              </ul>
              <button type="submit" className={styles.submitButton} disabled={disabled}>
                Submit
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

function GuidedQuestion({
  question,
  value,
  disabled,
  isLast,
  onAnswerAndAdvance,
  onTextChange,
  onAdvance,
}: {
  question: MockQuestion;
  value: string;
  disabled: boolean;
  isLast: boolean;
  onAnswerAndAdvance: (value: string) => void;
  onTextChange: (value: string) => void;
  onAdvance: () => void;
}) {
  if (question.type === 'yes_no') {
    return (
      <div className={styles.questionBlock}>
        <p className={styles.questionTitle}>{question.title}</p>
        <div className={styles.yesNoGroup} role="group" aria-label={question.title}>
          {(['Yes', 'No'] as const).map((label) => (
            <button
              key={label}
              type="button"
              className={value === label ? `${styles.yesNoButton} ${styles.yesNoButtonSelected}` : styles.yesNoButton}
              disabled={disabled}
              onClick={() => onAnswerAndAdvance(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.questionBlock}>
      <label className={styles.questionTitle} htmlFor={`guided-${question.id}`}>
        {question.title}
      </label>
      <div className={styles.textRow}>
        <input
          id={`guided-${question.id}`}
          type="text"
          className={styles.textInput}
          value={value}
          disabled={disabled}
          onChange={(event) => onTextChange(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              onAdvance();
            }
          }}
        />
        <button
          type="button"
          className={styles.advanceButton}
          aria-label={isLast ? 'Submit' : 'Next question'}
          disabled={disabled}
          onClick={onAdvance}
        >
          {isLast ? <CheckIcon /> : <ArrowIcon />}
        </button>
      </div>
    </div>
  );
}

function StandardQuestion({
  question,
  value,
  disabled,
  onChange,
}: {
  question: MockQuestion;
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
}) {
  if (question.type === 'yes_no') {
    return (
      <div className={styles.questionBlock}>
        <p className={styles.questionTitle}>{question.title}</p>
        <div className={styles.yesNoGroup} role="group" aria-label={question.title}>
          {(['Yes', 'No'] as const).map((label) => (
            <button
              key={label}
              type="button"
              className={value === label ? `${styles.yesNoButton} ${styles.yesNoButtonSelected}` : styles.yesNoButton}
              disabled={disabled}
              onClick={() => onChange(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.questionBlock}>
      <label className={styles.questionTitle} htmlFor={`standard-${question.id}`}>
        {question.title}
      </label>
      <input
        id={`standard-${question.id}`}
        type="text"
        className={styles.textInput}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.smallIcon} aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className={styles.smallIcon} aria-hidden="true">
      <path d="M3 8l4 4 6-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

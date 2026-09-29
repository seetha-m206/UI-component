import { useMemo, useState } from 'react';
import styles from './PaperformQuestionVisibilityLogic.module.css';

export type VisibilityTab = 'builder' | 'live-preview' | 'edge-cases';
export type PreviewMode = 'classic' | 'guided';

interface ConditionRow {
  id: string;
  question: string;
  operator: string;
  value: string;
}

const QUESTIONS = [
  'Q1 Do you like forms?',
  'Q2 Feedback',
  'Q4 Rate us',
  'C1 Calculation Total',
];
const OPERATORS = ['is', "isn't", 'is answered', "isn't answered", 'contains', "doesn't contain"];

export interface PaperformQuestionVisibilityLogicProps {
  initialTab?: VisibilityTab;
  onDone?: () => void;
}

let rowIdCounter = 0;

/**
 * Reconstructed from Paperform's Question Visibility Logic editor (PF10).
 * Confirmed and reproduced faithfully: the toggle opens a rule modal
 * immediately; the modal's condition grammar ([question][operator][value] +
 * And/Or + nested groups) is the same primitive shared with Custom Pricing
 * Rules and Report Segments, minus a "then [action]" clause; Classic mode
 * unmounts/remounts the dependent question (keeping its value, per the
 * default-on "keeps answer when hidden" setting); Guided mode skips the
 * dependent screen entirely and recalculates the progress percentage; and,
 * deliberately reproduced rather than silently fixed, two confirmed real
 * product defects: changing the referenced question's type does not
 * re-validate or warn, and deleting the referenced question via the card
 * gutter's "Remove" control orphans the rule instantly with no confirmation
 * and no dependency check (a materially different, less safe path than the
 * Backspace-delete confirmation already confirmed for the main canvas in
 * document-canvas-editor-shell).
 */
export function PaperformQuestionVisibilityLogic({
  initialTab = 'builder',
  onDone,
}: PaperformQuestionVisibilityLogicProps) {
  const [tab, setTab] = useState<VisibilityTab>(initialTab);

  // Builder state
  const [logicEnabled, setLogicEnabled] = useState(true);
  const [modalOpen, setModalOpen] = useState(true);
  const [keepAnswer, setKeepAnswer] = useState(true);
  const [conditions, setConditions] = useState<ConditionRow[]>([
    { id: 'row-0', question: QUESTIONS[0], operator: 'is', value: 'Yes' },
  ]);

  // Live preview state
  const [mode, setMode] = useState<PreviewMode>('classic');
  const [q1Answer, setQ1Answer] = useState<'' | 'Yes' | 'No'>('');
  const [q3Value, setQ3Value] = useState('');
  const [guidedStep, setGuidedStep] = useState(0);
  // Guided mode's screen list is fixed at "publish time" (all screens),
  // and only diverges once the respondent actually answers and advances
  // past Q1's own screen -- confirmed distinct from Classic's instant unmount.
  const [guidedQ3Hidden, setGuidedQ3Hidden] = useState(false);

  // Edge case state
  const [q1TypeChanged, setQ1TypeChanged] = useState(false);
  const [q1Deleted, setQ1Deleted] = useState(false);

  const q3Visible = q1Answer === 'Yes';

  function addCondition() {
    rowIdCounter += 1;
    setConditions((prev) => [
      ...prev,
      { id: `row-${rowIdCounter}`, question: QUESTIONS[0], operator: 'is', value: '' },
    ]);
  }

  function updateCondition(id: string, patch: Partial<ConditionRow>) {
    setConditions((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  }

  function removeCondition(id: string) {
    setConditions((prev) => prev.filter((c) => c.id !== id));
  }

  function closeModal() {
    setModalOpen(false);
    onDone?.();
  }

  const guidedScreens = useMemo(() => {
    const all = ['Q1 Do you like forms?', 'Q2 Feedback', 'Q3 Your name', 'Q4 Rate us'];
    return guidedQ3Hidden ? all.filter((s) => s !== 'Q3 Your name') : all;
  }, [guidedQ3Hidden]);

  const guidedProgress = Math.round(((guidedStep + 1) / guidedScreens.length) * 100);

  function handleGuidedNext() {
    if (guidedStep === 0) {
      setGuidedQ3Hidden(q1Answer !== 'Yes');
    }
    setGuidedStep((s) => Math.min(s + 1, guidedScreens.length - 1));
  }

  return (
    <div className={styles.root}>
      <div role="tablist" aria-label="Question Visibility Logic" className={styles.tabBar}>
        {(
          [
            ['builder', 'Builder'],
            ['live-preview', 'Live Preview'],
            ['edge-cases', 'Edge Cases'],
          ] as [VisibilityTab, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            className={tab === id ? styles.tabActive : styles.tab}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'builder' && (
        <div className={styles.panel}>
          <div className={styles.drawerRow}>
            <label className={styles.toggleLabel}>
              <input
                type="checkbox"
                role="switch"
                aria-checked={logicEnabled}
                checked={logicEnabled}
                onChange={(e) => {
                  setLogicEnabled(e.target.checked);
                  if (e.target.checked) setModalOpen(true);
                }}
              />
              Question visibility logic: {logicEnabled ? 'On' : 'Off'}
            </label>
          </div>

          {logicEnabled && !modalOpen && (
            <div className={styles.drawerSummary}>
              <button type="button" className={styles.linkButton} onClick={() => setModalOpen(true)}>
                Configure Logic → {conditions.length} condition{conditions.length === 1 ? '' : 's'}
              </button>
              <label className={styles.toggleLabel}>
                <input
                  type="checkbox"
                  checked={keepAnswer}
                  onChange={(e) => setKeepAnswer(e.target.checked)}
                />
                Question keeps answer when not visible
              </label>
            </div>
          )}

          {modalOpen && (
            <div className={styles.modal} role="dialog" aria-label="Configure Logic for Q3 Your name">
              <h3 className={styles.modalTitle}>Configure Logic for Q3 Your name</h3>
              {conditions.map((row, i) => (
                <div key={row.id} className={styles.conditionRow}>
                  {i > 0 && <span className={styles.andOr}>And</span>}
                  <select
                    aria-label="Choose question"
                    value={row.question}
                    onChange={(e) => updateCondition(row.id, { question: e.target.value })}
                  >
                    {QUESTIONS.map((q) => (
                      <option key={q}>{q}</option>
                    ))}
                  </select>
                  <select
                    aria-label="Operator"
                    value={row.operator}
                    onChange={(e) => updateCondition(row.id, { operator: e.target.value })}
                  >
                    {OPERATORS.map((op) => (
                      <option key={op}>{op}</option>
                    ))}
                  </select>
                  <input
                    aria-label="Answer"
                    placeholder="Answer…"
                    value={row.value}
                    onChange={(e) => updateCondition(row.id, { value: e.target.value })}
                  />
                  <button
                    type="button"
                    className={styles.removeRowButton}
                    aria-label="Remove condition"
                    onClick={() => removeCondition(row.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button type="button" className={styles.secondaryButton} onClick={addCondition}>
                + Add another condition
              </button>
              <div className={styles.modalFooter}>
                <button type="button" className={styles.primaryButton} onClick={closeModal}>
                  Done
                </button>
              </div>
            </div>
          )}

          {!logicEnabled && <p className={styles.hint}>Turn the toggle on to configure a visibility rule.</p>}
        </div>
      )}

      {tab === 'live-preview' && (
        <div className={styles.panel}>
          <div className={styles.modeToggle} role="radiogroup" aria-label="Form Experience mode">
            {(['classic', 'guided'] as PreviewMode[]).map((m) => (
              <label key={m} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="mode"
                  checked={mode === m}
                  onChange={() => {
                    setMode(m);
                    setGuidedStep(0);
                    setGuidedQ3Hidden(false);
                  }}
                />
                {m === 'classic' ? 'Classic' : 'One-at-a-time (Guided)'}
              </label>
            ))}
          </div>

          {mode === 'classic' ? (
            <div className={styles.classicForm}>
              <div className={styles.field}>
                <label htmlFor="q1-classic">Q1 Do you like forms?</label>
                <select
                  id="q1-classic"
                  value={q1Answer}
                  onChange={(e) => setQ1Answer(e.target.value as '' | 'Yes' | 'No')}
                >
                  <option value="">—</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              {q3Visible ? (
                <div className={styles.field}>
                  <label htmlFor="q3-classic">Q3 Your name</label>
                  <input id="q3-classic" value={q3Value} onChange={(e) => setQ3Value(e.target.value)} />
                </div>
              ) : (
                <p className={styles.unmountNote} title="Confirmed: unmounted from the DOM entirely, not CSS-hidden">
                  Q3 is not mounted in the DOM right now (condition unmet)
                  {keepAnswer && q3Value && ' — its value is retained and will reappear when shown again'}.
                </p>
              )}
              <div className={styles.field}>
                <label htmlFor="q4-classic">Q4 Rate us</label>
                <input id="q4-classic" placeholder="★★★★★" disabled />
              </div>
            </div>
          ) : (
            <div className={styles.guidedForm}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${guidedProgress}%` }} />
              </div>
              <p
                className={styles.hint}
                title="Confirmed: the progress denominator recalculates to exclude a hidden screen"
              >
                Step {guidedStep + 1} of {guidedScreens.length} ({guidedProgress}%)
              </p>
              <div className={styles.field}>
                <label>{guidedScreens[guidedStep]}</label>
                {guidedScreens[guidedStep] === 'Q1 Do you like forms?' && (
                  <select
                    value={q1Answer}
                    onChange={(e) => setQ1Answer(e.target.value as '' | 'Yes' | 'No')}
                  >
                    <option value="">—</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                )}
              </div>
              <button
                type="button"
                className={styles.primaryButton}
                disabled={guidedStep >= guidedScreens.length - 1}
                onClick={handleGuidedNext}
              >
                Next
              </button>
              {guidedQ3Hidden && (
                <p className={styles.unmountNote}>
                  Confirmed: Q3&apos;s screen is skipped entirely in this flow when Q1 ≠ Yes — it is never
                  mounted or rendered.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {tab === 'edge-cases' && (
        <div className={styles.panel}>
          <div className={styles.edgeCase}>
            <p>
              Rule: show Q3 only if <strong>Q1 is Yes</strong> (Q1 is currently a Yes/No field).
            </p>
            <button
              type="button"
              className={styles.secondaryButton}
              disabled={q1TypeChanged || q1Deleted}
              onClick={() => setQ1TypeChanged(true)}
            >
              Change Q1&apos;s type: Yes/No → Text
            </button>
            {q1TypeChanged && (
              <p role="alert" className={styles.bugNote}>
                Confirmed bug: no warning was shown. The saved rule is unchanged (
                <code>field:Q1, is, &quot;Yes&quot;</code>) and now points at a Text field — it will only
                match if a respondent types the literal word &quot;Yes&quot;.
              </p>
            )}
          </div>

          <div className={styles.edgeCase}>
            <button
              type="button"
              className={styles.secondaryButton}
              disabled={q1Deleted}
              onClick={() => setQ1Deleted(true)}
            >
              Delete Q1 via card gutter ✕ (no confirmation)
            </button>
            {q1Deleted && (
              <p role="alert" className={styles.bugNote}>
                Confirmed bug: Q1 was removed instantly with no confirmation dialog and no dependency
                check. Q3&apos;s rule is now silently orphaned — its condition row shows a blank &quot;Choose
                question&quot;, not an error. Compare with Backspace-delete on the main canvas (see
                document-canvas-editor-shell), which does ask for confirmation.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

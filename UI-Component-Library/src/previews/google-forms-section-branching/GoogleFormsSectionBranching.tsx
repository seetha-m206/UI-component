import { useState } from 'react';
import styles from './GoogleFormsSectionBranching.module.css';

export type BranchingTab = 'respondent' | 'editor';

type Answer = '' | 'no' | 'yes';

const DESTINATIONS_INITIAL = [
  'Continue to next section',
  'Go to section 1 (Section 1)',
  'Go to section 2 (Section 2)',
  'Go to section 3 (Section 3)',
  'Submit form',
];

export interface GoogleFormsSectionBranchingProps {
  initialTab?: BranchingTab;
  onSubmit?: () => void;
}

/**
 * Reconstructed from Google Forms' Section-Based Branching (Conditional
 * Navigation) component. Confirmed and reproduced faithfully: a
 * Multiple-choice question with "Go to section based on answer" gives each
 * option its own destination dropdown; picking "skip" on the live
 * /viewform performs a real navigation jump straight to Section 3 with
 * Section 2 never mounted at all; the Back button is skip-aware and returns
 * directly to Section 1 (not Section 2), with the prior answer still shown
 * selected; and deleting the referenced Section 3 does not warn about the
 * rules pointing at it and instead silently resets the per-option dropdown
 * display value back to "Continue to next section" with no error state.
 */
export function GoogleFormsSectionBranching({
  initialTab = 'respondent',
  onSubmit,
}: GoogleFormsSectionBranchingProps) {
  const [tab, setTab] = useState<BranchingTab>(initialTab);

  // Respondent-view state
  const [step, setStep] = useState<'section1' | 'section2' | 'section3'>('section1');
  const [answer, setAnswer] = useState<Answer>('');
  const [arrivedViaSkip, setArrivedViaSkip] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Editor state
  const [destinations, setDestinations] = useState({
    no: 'Continue to next section',
    yes: 'Go to section 3 (Section 3)',
  });
  const [section3Deleted, setSection3Deleted] = useState(false);

  function handleNext() {
    if (step === 'section1') {
      if (answer === 'yes') {
        setArrivedViaSkip(true);
        setStep('section3');
      } else {
        setArrivedViaSkip(false);
        setStep('section2');
      }
      return;
    }
    if (step === 'section2') {
      setStep('section3');
      return;
    }
    setSubmitted(true);
    onSubmit?.();
  }

  function handleBack() {
    if (step === 'section3') {
      // Confirmed: skip-aware Back — returns directly to Section 1 when
      // arrived at Section 3 via the skip branch, not to Section 2.
      setStep(arrivedViaSkip ? 'section1' : 'section2');
      return;
    }
    if (step === 'section2') {
      setStep('section1');
    }
  }

  function deleteSection3() {
    setSection3Deleted(true);
    // Confirmed: no warning about the two rules referencing Section 3, and
    // the per-option dropdown display value silently resets to the safe
    // default — no error state, no broken-reference indicator.
    setDestinations({
      no: 'Continue to next section',
      yes: 'Continue to next section',
    });
  }

  const availableDestinations = section3Deleted
    ? DESTINATIONS_INITIAL.filter((d) => d !== 'Go to section 3 (Section 3)')
    : DESTINATIONS_INITIAL;

  return (
    <div className={styles.root}>
      <div role="tablist" aria-label="Section Branching" className={styles.tabBar}>
        {(
          [
            ['respondent', 'Respondent View'],
            ['editor', 'Editor'],
          ] as [BranchingTab, string][]
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

      {tab === 'respondent' && (
        <div className={styles.panel}>
          {step === 'section1' && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Section 1 of 3</h3>
              <fieldset className={styles.field}>
                <legend>Do you want to skip section 2?</legend>
                <label className={styles.radioRow}>
                  <input
                    type="radio"
                    name="skip-question"
                    checked={answer === 'no'}
                    onChange={() => setAnswer('no')}
                  />
                  No, go through section 2
                </label>
                <label className={styles.radioRow}>
                  <input
                    type="radio"
                    name="skip-question"
                    checked={answer === 'yes'}
                    onChange={() => setAnswer('yes')}
                  />
                  Yes, skip to section 3
                </label>
              </fieldset>
              <div className={styles.navRow}>
                <button
                  type="button"
                  className={styles.primaryButton}
                  disabled={!answer}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 'section2' && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Section 2 of 3</h3>
              <p className={styles.hint}>(This section is intentionally empty in the source form.)</p>
              <div className={styles.navRow}>
                <button type="button" className={styles.secondaryButton} onClick={handleBack}>
                  Back
                </button>
                <button type="button" className={styles.primaryButton} onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 'section3' && !submitted && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Section 3 of 3</h3>
              {arrivedViaSkip && (
                <p
                  className={styles.unmountNote}
                  title="Confirmed: a real navigation jump — Section 2 was never sent to or painted in the respondent's view"
                >
                  Arrived here directly from Section 1 — Section 2 was never mounted.
                </p>
              )}
              <div className={styles.field}>
                <label>Feedback</label>
                <input placeholder="Your feedback…" disabled />
              </div>
              <div className={styles.field}>
                <label>Satisfaction Rating</label>
                <input placeholder="★★★★★" disabled />
              </div>
              <div className={styles.navRow}>
                <button type="button" className={styles.secondaryButton} onClick={handleBack}>
                  Back
                </button>
                <button type="button" className={styles.primaryButton} onClick={handleNext}>
                  Submit
                </button>
              </div>
            </div>
          )}

          {submitted && (
            <div className={styles.section}>
              <p role="status" className={styles.hint}>
                Your response has been recorded.
              </p>
            </div>
          )}
        </div>
      )}

      {tab === 'editor' && (
        <div className={styles.panel}>
          <div className={styles.editorCard}>
            <h3 className={styles.sectionTitle}>Section 1 — "Do you want to skip section 2?"</h3>
            <p className={styles.hint}>Go to section based on answer: On</p>

            <div className={styles.optionRow}>
              <span className={styles.optionLabel}>No, go through section 2</span>
              <select
                aria-label="Destination for 'No, go through section 2'"
                value={destinations.no}
                onChange={(e) => setDestinations((prev) => ({ ...prev, no: e.target.value }))}
              >
                {availableDestinations.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className={styles.optionRow}>
              <span className={styles.optionLabel}>Yes, skip to section 3</span>
              <select
                aria-label="Destination for 'Yes, skip to section 3'"
                value={destinations.yes}
                onChange={(e) => setDestinations((prev) => ({ ...prev, yes: e.target.value }))}
              >
                {availableDestinations.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.editorCard}>
            <h3 className={styles.sectionTitle}>Edge case: deleting a referenced section</h3>
            <button
              type="button"
              className={styles.secondaryButton}
              disabled={section3Deleted}
              onClick={deleteSection3}
            >
              Delete Section 3
            </button>
            {section3Deleted && (
              <p role="alert" className={styles.bugNote}>
                Confirmed: Section 3 was deleted with only the generic confirmation copy — no mention of
                the two branching rules that referenced it, no count, no extra warning step. Both
                options&apos; destination dropdowns above have silently reset their display value to
                &quot;Continue to next section&quot; — no error state, no broken-reference indicator.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

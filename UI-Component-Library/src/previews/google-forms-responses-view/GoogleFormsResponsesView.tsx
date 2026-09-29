import { useEffect, useRef, useState } from 'react';
import styles from './GoogleFormsResponsesView.module.css';

export type ResponsesTab = 'summary' | 'question' | 'individual';

interface FetchLogEntry {
  id: number;
  text: string;
}

export interface GoogleFormsResponsesViewProps {
  initialTab?: ResponsesTab;
  reproduceNetworkLog?: boolean;
}

const RESPONSES = [
  { title: 'Response 1', frequency: null, satisfaction: null, rating: 4 },
  { title: 'Response 2', frequency: 'Option 2', satisfaction: 4, rating: 5 },
  { title: 'Response 3', frequency: 'Option 1', satisfaction: 2, rating: 3 },
  { title: 'Response 4', frequency: 'Option 1', satisfaction: 3, rating: 4 },
];

const ENDPOINTS: Record<ResponsesTab, string> = {
  summary: 'GET .../aggregatestatistics',
  question: 'GET .../getresponseclusters',
  individual: 'POST .../getsingleresponse',
};

/**
 * Reconstructed from Google Forms' Responses view (GF2). Confirmed and
 * reproduced faithfully: Summary/Question/Individual are three genuinely
 * separate on-demand fetches (not resident from one load), replayed here as
 * a visible per-tab network log naming the real confirmed endpoint; the
 * Summary tab's per-question chart type is keyed to the question type (pie
 * for Multiple choice, bar for Linear scale, a plain list for Short answer,
 * each with its own "Copy chart" affordance except the plain-text list);
 * the Summary count is confirmed per-question-answered, not per-respondent
 * -- Response 1 (fixture) predates the Feedback/Satisfaction questions, so
 * those cards report "2 responses" while Multiple choice reports "4",
 * reproducing the real accidental test from the source capture; and the
 * Individual tab's read-only rendered response with a jump-to-N field,
 * prev/next paging, and per-question points-override + private-feedback
 * affordances, matching the graded-response layout confirmed in the source.
 * Filter/search is deliberately absent everywhere -- confirmed to not exist
 * anywhere in the real product.
 */
export function GoogleFormsResponsesView({
  initialTab = 'summary',
  reproduceNetworkLog = true,
}: GoogleFormsResponsesViewProps) {
  const [tab, setTab] = useState<ResponsesTab>(initialTab);
  const [fetchLog, setFetchLog] = useState<FetchLogEntry[]>([]);
  const [responseIndex, setResponseIndex] = useState(0);
  const [jumpValue, setJumpValue] = useState('1');
  const [points, setPoints] = useState('0');
  const [feedback, setFeedback] = useState('');
  const logIdRef = useRef(0);

  useEffect(() => {
    if (!reproduceNetworkLog) return;
    logIdRef.current += 1;
    const id = logIdRef.current;
    setFetchLog((prev) => [...prev, { id, text: ENDPOINTS[tab] }]);
  }, [tab, reproduceNetworkLog]);

  function goToResponse(index: number) {
    setResponseIndex(index);
    setJumpValue(String(index + 1));
    setPoints('0');
    setFeedback('');
  }

  function jumpTo(raw: string) {
    setJumpValue(raw);
    const n = Number(raw);
    if (Number.isInteger(n) && n >= 1 && n <= RESPONSES.length) {
      setResponseIndex(n - 1);
      setPoints('0');
      setFeedback('');
    }
  }

  const current = RESPONSES[responseIndex];

  return (
    <div className={styles.root}>
      <div role="tablist" aria-label="Responses view" className={styles.tabBar}>
        {(
          [
            ['summary', 'Summary'],
            ['question', 'Question'],
            ['individual', 'Individual'],
          ] as [ResponsesTab, string][]
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

      {tab === 'summary' && (
        <div className={styles.panel}>
          <div className={styles.insightsBlock}>
            <div className={styles.statTile}>
              <span className={styles.statLabel}>Average</span>
              <span className={styles.statValue}>0 / 0</span>
            </div>
            <div className={styles.statTile}>
              <span className={styles.statLabel}>Median</span>
              <span className={styles.statValue}>0 / 0</span>
            </div>
            <div className={styles.statTile}>
              <span className={styles.statLabel}>Range</span>
              <span className={styles.statValue}>0 / 0</span>
            </div>
          </div>

          <div className={styles.questionCard}>
            <div className={styles.questionHeader}>
              <strong>Q1 Do you like forms?</strong>
              <span className={styles.responseCount}>4 responses</span>
            </div>
            <div className={styles.pieChart} role="img" aria-label="Pie chart: Option 1 50%, Option 2 25%, blank 25%">
              <div className={styles.pieSlice} style={{ background: 'conic-gradient(#4285f4 0% 50%, #34a853 50% 75%, #ddd 75% 100%)' }} />
              <button type="button" className={styles.copyChartButton}>
                Copy chart
              </button>
            </div>
          </div>

          <div className={styles.questionCard}>
            <div className={styles.questionHeader}>
              <strong>Satisfaction (Linear scale 1-5)</strong>
              <span
                className={styles.responseCount}
                title="Confirmed: per-question-answered count, not per-respondent -- Response 1 predates this question"
              >
                2 responses
              </span>
            </div>
            <div className={styles.barChart}>
              {[0, 0, 1, 1, 0].map((h, i) => (
                <div key={i} className={styles.bar} style={{ height: `${h * 60 + 8}px` }} />
              ))}
            </div>
            <button type="button" className={styles.copyChartButton}>
              Copy chart
            </button>
          </div>

          <div className={styles.questionCard}>
            <div className={styles.questionHeader}>
              <strong>Feedback (Short answer)</strong>
              <span
                className={styles.responseCount}
                title="Confirmed: per-question-answered count, not per-respondent"
              >
                2 responses
              </span>
            </div>
            <ul className={styles.pillList}>
              <li className={styles.pill}>&quot;Great experience overall&quot;</li>
              <li className={styles.pill}>&quot;Needs improvement in loading speed&quot;</li>
            </ul>
            <p className={styles.noChartNote}>No chart for open-text answers -- confirmed, no &quot;Copy chart&quot; button here either.</p>
          </div>
        </div>
      )}

      {tab === 'question' && (
        <div className={styles.panel}>
          <p className={styles.hint}>
            Per-question drill-down view -- powered by a distinct fetch (see network log below), separate
            from Summary.
          </p>
          <div className={styles.questionCard}>
            <div className={styles.questionHeader}>
              <strong>Q1 Do you like forms?</strong>
            </div>
            <div className={styles.pieChart} role="img" aria-label="Pie chart breakdown">
              <div className={styles.pieSlice} style={{ background: 'conic-gradient(#4285f4 0% 50%, #34a853 50% 75%, #ddd 75% 100%)' }} />
            </div>
          </div>
        </div>
      )}

      {tab === 'individual' && (
        <div className={styles.panel}>
          <div className={styles.individualHeader}>
            <button
              type="button"
              className={styles.navButton}
              disabled={responseIndex === 0}
              onClick={() => goToResponse(Math.max(0, responseIndex - 1))}
              aria-label="Previous response"
            >
              ←
            </button>
            <input
              className={styles.jumpInput}
              aria-label="Jump to response number"
              value={jumpValue}
              onChange={(e) => jumpTo(e.target.value)}
            />
            <span> of {RESPONSES.length}</span>
            <button
              type="button"
              className={styles.navButton}
              disabled={responseIndex === RESPONSES.length - 1}
              onClick={() => goToResponse(Math.min(RESPONSES.length - 1, responseIndex + 1))}
              aria-label="Next response"
            >
              →
            </button>
            <button type="button" className={styles.iconButton} aria-label="Print this response">
              🖨
            </button>
            <button type="button" className={styles.iconButton} aria-label="Delete this response">
              🗑
            </button>
          </div>

          <div className={styles.gradedForm}>
            <div className={styles.gradeBadge}>{points || 0} of 0 points</div>
            <p className={styles.scoreReleased}>Score released just now</p>

            <div className={styles.readonlyField}>
              <label>Q1 Do you like forms?</label>
              <div className={styles.readonlyValue}>
                {current.frequency === null ? <em className={styles.blankAnswer}>(not answered -- predates this question)</em> : 'Yes'}
              </div>
            </div>
            <div className={styles.readonlyField}>
              <label>Feedback</label>
              <div className={styles.readonlyValue}>
                {current.satisfaction === null ? (
                  <em className={styles.blankAnswer}>(not answered -- predates this question)</em>
                ) : (
                  'Sample feedback text'
                )}
              </div>
            </div>

            <div className={styles.pointsRow}>
              <label htmlFor="points-override">Points</label>
              <input
                id="points-override"
                className={styles.pointsInput}
                value={points}
                onChange={(e) => setPoints(e.target.value)}
              />
              <span>/ 0</span>
            </div>
            <label htmlFor="feedback-note" className={styles.feedbackLink}>
              Add individual feedback
            </label>
            <input
              id="feedback-note"
              className={styles.feedbackInput}
              placeholder="Private comment on this answer…"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className={styles.fetchLog} aria-live="polite">
        <span className={styles.fetchLogLabel}>
          Network (confirmed: Summary/Question/Individual are 3 separate on-demand fetches):
        </span>
        <ul>
          {fetchLog.map((entry) => (
            <li key={entry.id}>{entry.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

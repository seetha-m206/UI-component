import { useEffect, useRef, useState } from 'react';
import styles from './PaperformSubmissionsResultsView.module.css';

export type ResultsTab = 'submissions' | 'partials' | 'products' | 'reports';

interface FetchLogEntry {
  id: number;
  text: string;
}

interface RuleRow {
  id: string;
  question: string;
  operator: string;
  value: string;
}

export interface PaperformSubmissionsResultsViewProps {
  initialTab?: ResultsTab;
  /** When true, mounting the Submissions tab logs the confirmed duplicate GET on mount. */
  reproduceDuplicateFetch?: boolean;
  /**
   * When true (the default, reflecting the confirmed PF9 end state), the
   * Submissions tab shows the real populated row from a completed
   * submission. When false, it shows the original PF8 blocked-submission
   * empty state, before the account owner's email was verified.
   */
  hasCompletedSubmission?: boolean;
  onSubmitAttempt?: () => void;
  onExportClick?: () => void;
}

const QUESTIONS = ['Q1 Do you like forms?', 'Q2 Feedback', 'Q3 Your name', 'Q4 Rate us'];
const OPERATORS = ['is', "isn't", 'is less than', 'is more than'];

let ruleIdCounter = 0;

/**
 * Reconstructed from Paperform's Share -> Results panel and the full
 * /submissions/<slug>/ app. Confirmed and reproduced faithfully: the
 * Submissions list fetch fires twice on mount in the editor's Results panel
 * specifically (a genuine duplicate-request bug, not a demo artifact, and
 * confirmed in PF9 to NOT reproduce on the full app's own /submissions/table
 * endpoint); a real completed submission (PF9) is shown with Total 22.00,
 * Customer "-", no Score column (scoring is off), and a PDFs menu with two
 * real options; its detail view is a full inbox-style page (not a modal like
 * the partial's) with a metadata card and a "Total Charged: 22.00" card --
 * with no unpaid/no-gateway indicator anywhere, even though payment:null was
 * confirmed in the submit payload (this is the single most important PF9
 * finding, flagged inline below); export is confirmed CSV-only, delivered
 * via a signed-URL click rather than fetch/XHR; the Partial Submissions
 * detail view shows a real evaluated Calculation total (21.6, reconfirmed on
 * the completed submission too) confirming the engine runs on live answers,
 * a "Last answered: Q1" display bug even though every field was answered,
 * and Products rendered by SKU rather than product name; the Reports ->
 * Segments tab hosts the product's only real condition-based query builder
 * (question/operator/value, And/Or, nested groups), structurally separate
 * from the plain search+date filter on the raw Submissions list itself.
 */
export function PaperformSubmissionsResultsView({
  initialTab = 'submissions',
  reproduceDuplicateFetch = true,
  hasCompletedSubmission = true,
  onSubmitAttempt,
  onExportClick,
}: PaperformSubmissionsResultsViewProps) {
  const [tab, setTab] = useState<ResultsTab>(initialTab);
  const [fetchLog, setFetchLog] = useState<FetchLogEntry[]>([]);
  const [submitBlocked, setSubmitBlocked] = useState(false);
  const [analyticsEventFired, setAnalyticsEventFired] = useState(false);
  const [partialOpen, setPartialOpen] = useState(false);
  const [submissionDetailOpen, setSubmissionDetailOpen] = useState(false);
  const [pdfMenuOpen, setPdfMenuOpen] = useState(false);
  const [exportToast, setExportToast] = useState(false);
  const [rules, setRules] = useState<RuleRow[]>([]);
  const loggedRef = useRef(false);

  useEffect(() => {
    if (tab !== 'submissions' || !reproduceDuplicateFetch || loggedRef.current) return;
    loggedRef.current = true;
    const endpoint = hasCompletedSubmission
      ? 'GET /api/v1/form/<slug>/submissions?page=1&order=desc&count=10  (editor Results panel)'
      : 'GET /api/v1/form/<formId>/submissions?page=1&order=desc&count=10';
    const entries: FetchLogEntry[] = [
      { id: 1, text: endpoint },
      { id: 2, text: `${endpoint}  (duplicate — same params, ~1s later)` },
    ];
    entries.forEach((entry, i) => {
      window.setTimeout(() => setFetchLog((prev) => [...prev, entry]), i * 400);
    });
  }, [tab, reproduceDuplicateFetch, hasCompletedSubmission]);

  function attemptSubmit() {
    setSubmitBlocked(true);
    onSubmitAttempt?.();
    window.setTimeout(() => setAnalyticsEventFired(true), 900);
  }

  function handleExportClick() {
    setExportToast(true);
    onExportClick?.();
    window.setTimeout(() => setExportToast(false), 3000);
  }

  function addRule() {
    ruleIdCounter += 1;
    setRules((prev) => [
      ...prev,
      { id: `rule-${ruleIdCounter}`, question: QUESTIONS[0], operator: OPERATORS[0], value: '' },
    ]);
  }

  function updateRule(id: string, patch: Partial<RuleRow>) {
    setRules((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  }

  return (
    <div className={styles.root}>
      <div role="tablist" aria-label="Submissions app" className={styles.tabBar}>
        {(
          [
            ['submissions', 'Submissions'],
            ['partials', 'Partial Submissions'],
            ['products', 'Products'],
            ['reports', 'Reports'],
          ] as [ResultsTab, string][]
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

      {tab === 'submissions' && (
        <div className={styles.panel}>
          <div className={styles.toolbar}>
            <input className={styles.search} placeholder="Search" aria-label="Search submissions" />
            <button type="button" className={styles.secondaryButton} onClick={handleExportClick}>
              Export All
            </button>
          </div>
          {exportToast && (
            <p className={styles.analyticsNote} role="status">
              Exporting submissions… (confirmed CSV only, delivered via a signed-URL click, not fetch/XHR)
            </p>
          )}

          {hasCompletedSubmission ? (
            <>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" aria-label="Select all" />
                    </th>
                    <th>Submission</th>
                    <th>Total</th>
                    <th>Customer</th>
                    <th>Q1</th>
                    <th>PDFs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" aria-label="Select this submission" />
                    </td>
                    <td>
                      <button type="button" className={styles.linkButton} onClick={() => setSubmissionDetailOpen((v) => !v)}>
                        test@example.com — 2026-09-23 12:25
                      </button>
                    </td>
                    <td
                      className={styles.confirmedCell}
                      title="Confirmed: payment:null in the submit payload -- no gateway connected"
                    >
                      22.00
                    </td>
                    <td>-</td>
                    <td>Yes</td>
                    <td className={styles.pdfCell}>
                      <button
                        type="button"
                        className={styles.pdfMenuButton}
                        aria-haspopup="menu"
                        aria-expanded={pdfMenuOpen}
                        onClick={() => setPdfMenuOpen((v) => !v)}
                      >
                        ⋮
                      </button>
                      {pdfMenuOpen && (
                        <ul className={styles.pdfMenu} role="menu">
                          <li role="menuitem">Download PDF summary</li>
                          <li role="menuitem">Submission Results</li>
                        </ul>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              {submissionDetailOpen && (
                <div className={styles.submissionDetail}>
                  <div className={styles.metaCard}>
                    <span>Submission ID: sub_dcfb…</span>
                    <span>Submitted At: 2026-09-23 12:25:20</span>
                    <span>IP Address: •••.•••.•••.•••</span>
                    <span>Device: desktop</span>
                    <span>Platform: Linux</span>
                    <span>Browser: Chrome</span>
                  </div>
                  <div
                    className={styles.chargedCard}
                    title="Confirmed bug: no gateway is connected, yet no unpaid/no-gateway indicator appears anywhere in this UI"
                  >
                    Total Charged: 22.00
                    <span className={styles.chargedWarning}>⚠ no unpaid indicator shown</span>
                  </div>
                  <dl className={styles.detailGrid}>
                    <dt>Q1 Do you like forms?</dt>
                    <dd>Yes</dd>
                    <dt>P2 Products</dt>
                    <dd className={styles.bugCell} title="Confirmed: shown by SKU, not product name">
                      dlf3j × 1
                    </dd>
                    <dt>C1 Total</dt>
                    <dd className={styles.confirmedCell} title="Reconfirmed on a real completed submission">
                      21.6
                    </dd>
                  </dl>
                </div>
              )}
            </>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" aria-label="Select all" disabled />
                  </th>
                  <th>Submission</th>
                  <th>Q1</th>
                  <th>Q2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className={styles.emptyRow}>
                    No Submissions
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          <div className={styles.fetchLog} aria-live="polite">
            <span className={styles.fetchLogLabel}>
              Network (confirmed duplicate fetch on mount, editor Results panel only — the full app&apos;s
              own /submissions/table endpoint fires once):
            </span>
            <ul>
              {fetchLog.map((entry) => (
                <li key={entry.id} className={entry.text.includes('duplicate') ? styles.fetchLogBug : undefined}>
                  {entry.text}
                </li>
              ))}
            </ul>
          </div>

          {!hasCompletedSubmission && (
            <div className={styles.submitDemo}>
              <button type="button" className={styles.primaryButton} onClick={attemptSubmit}>
                Submit test response — $22.00
              </button>
              {submitBlocked && (
                <p role="alert" className={styles.errorBar}>
                  Forms can&apos;t be submitted until the owner&apos;s email address has been verified.
                  <span className={styles.errorMeta}>POST /api/v1/form/&lt;id&gt;/submit → 400</span>
                </p>
              )}
              {analyticsEventFired && (
                <p className={styles.analyticsNote}>
                  PUT …/event {'{'}"event":"SubmittedForm"{'}'} fired anyway — a rejected submission still
                  counts as a completed-submission analytics event.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {tab === 'partials' && (
        <div className={styles.panel}>
          <p className={styles.banner}>Partial submissions are stored for 30 days.</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Started at</th>
                <th>Last answered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button
                    type="button"
                    className={styles.expandButton}
                    aria-expanded={partialOpen}
                    onClick={() => setPartialOpen((v) => !v)}
                  >
                    {partialOpen ? '▾' : '▸'}
                  </button>
                </td>
                <td>test@example.com — 2026-09-23 14:02</td>
                <td>2026-09-23 14:02</td>
                <td className={styles.bugCell} title="Confirmed bug: every field was actually answered">
                  Q1
                </td>
              </tr>
            </tbody>
          </table>

          {partialOpen && (
            <div className={styles.partialDetail}>
              <dl className={styles.detailGrid}>
                <dt>Partial ID</dt>
                <dd>prtl_8fq2m1 <button type="button" className={styles.copyButton}>Copy</button></dd>
                <dt>Q1 Do you like forms?</dt>
                <dd>Yes</dd>
                <dt>Q2 Feedback</dt>
                <dd>test@example.com</dd>
                <dt>Q3 Your name</dt>
                <dd>PF8 Tester</dd>
                <dt>Q4 Rate us</dt>
                <dd>4 ★</dd>
                <dt>P2 Products</dt>
                <dd className={styles.bugCell} title="Confirmed: shown by SKU, not product name">
                  dlf3j × 1
                </dd>
                <dt>N1 Quantity / N2 Unit price</dt>
                <dd>6 / 4</dd>
                <dt>C1 Total</dt>
                <dd className={styles.confirmedCell} title="Confirmed: calculation engine runs on real submitted answers">
                  21.6
                </dd>
              </dl>
            </div>
          )}
        </div>
      )}

      {tab === 'products' && (
        <div className={styles.panel}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>SKU</th>
                <th>Total Stock</th>
                <th>Remaining</th>
                <th>Allocated</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Test Mug</td>
                <td>dlf3j</td>
                <td>3</td>
                <td>{hasCompletedSubmission ? 2 : 3}</td>
                <td
                  className={styles.confirmedCell}
                  title={
                    hasCompletedSubmission
                      ? 'Confirmed: allocated by a real completed submission, even though no payment was taken'
                      : 'Confirmed: unaffected by a partial submission'
                  }
                >
                  {hasCompletedSubmission ? 1 : 0}
                </td>
                <td>{hasCompletedSubmission && <button type="button" className={styles.secondaryButton}>Reset</button>}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {tab === 'reports' && (
        <div className={styles.panel}>
          <p className={styles.hint}>
            Segments — the product&apos;s only real condition-based query builder. It filters report
            aggregates, not the raw Submissions list above.
          </p>
          <div className={styles.segmentBuilder}>
            <span className={styles.segmentLabel}>All data</span>
            <button type="button" className={styles.secondaryButton} onClick={addRule}>
              + Add Rule
            </button>
          </div>
          {rules.map((rule, i) => (
            <div key={rule.id} className={styles.ruleRow}>
              {i > 0 && <span className={styles.andOr}>And</span>}
              <select
                aria-label="Question"
                value={rule.question}
                onChange={(e) => updateRule(rule.id, { question: e.target.value })}
              >
                {QUESTIONS.map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>
              <select
                aria-label="Operator"
                value={rule.operator}
                onChange={(e) => updateRule(rule.id, { operator: e.target.value })}
              >
                {OPERATORS.map((op) => (
                  <option key={op}>{op}</option>
                ))}
              </select>
              <input
                aria-label="Answer"
                placeholder="Answer…"
                value={rule.value}
                onChange={(e) => updateRule(rule.id, { value: e.target.value })}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

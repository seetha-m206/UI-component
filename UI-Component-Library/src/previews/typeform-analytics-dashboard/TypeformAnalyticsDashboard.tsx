import { useEffect, useId, useRef, useState } from 'react';
import styles from './TypeformAnalyticsDashboard.module.css';

export type DashboardTabId = 'smart-insights' | 'form-performance' | 'response-summary' | 'responses';
export type DateRangeId = 'all-time' | 'today' | 'last-week' | 'last-month' | 'last-year';
export type ResponseViewMode = 'table' | 'horizontal' | 'vertical';

export interface KpiRangeData {
  views: number;
  starts: number;
  submissions: number;
  /** Whole-number percent, e.g. 40 for "40%". */
  completionRate: number;
  /** "MM:SS" display string, e.g. "00:16". */
  timeToComplete: string;
}

const TABS: { id: DashboardTabId; label: string }[] = [
  { id: 'smart-insights', label: 'Smart Insights' },
  { id: 'form-performance', label: 'Form performance' },
  { id: 'response-summary', label: 'Response summary' },
  { id: 'responses', label: 'Responses' },
];

const DATE_RANGE_OPTIONS: { id: DateRangeId; label: string }[] = [
  { id: 'all-time', label: 'All time' },
  { id: 'today', label: 'Today' },
  { id: 'last-week', label: 'Last week' },
  { id: 'last-month', label: 'Last month' },
  { id: 'last-year', label: 'Last year' },
];

const VIEW_MODES: { id: ResponseViewMode; label: string; icon: string }[] = [
  { id: 'table', label: 'Table', icon: '▤' },
  { id: 'horizontal', label: 'Horizontal', icon: '▬' },
  { id: 'vertical', label: 'Vertical', icon: '▮' },
];

/**
 * The real captured numbers: 8 views / 5 starts / 2 submissions / 40%
 * completion / 00:16 time-to-complete, with the source confirming all
 * observed activity fell inside the "last week" window. Reused as-is for
 * all-time/last-week/last-month/last-year (a window that includes "last
 * week" necessarily includes the same activity); "today" is zeroed since
 * the activity wasn't confirmed to have happened today specifically — this
 * split is this reconstruction's own reasonable inference, not literally
 * re-confirmed per range in the source.
 */
const ACTIVITY: KpiRangeData = {
  views: 8,
  starts: 5,
  submissions: 2,
  completionRate: 40,
  timeToComplete: '00:16',
};
const ZERO_ACTIVITY: KpiRangeData = {
  views: 0,
  starts: 0,
  submissions: 0,
  completionRate: 0,
  timeToComplete: '00:00',
};

export const DEFAULT_KPI_DATA: Record<DateRangeId, KpiRangeData> = {
  'all-time': ACTIVITY,
  today: ZERO_ACTIVITY,
  'last-week': ACTIVITY,
  'last-month': ACTIVITY,
  'last-year': ACTIVITY,
};

/** One example choice-type question for the simplified Response summary tab. */
interface ChoiceOptionDatum {
  label: string;
  count: number;
}

const RESPONSE_QUESTION = 'How did you hear about us?';
const RESPONSE_OPTIONS: ChoiceOptionDatum[] = [
  { label: 'Social media', count: 5 },
  { label: 'Friend referral', count: 3 },
  { label: 'Search engine', count: 2 },
  { label: 'Other', count: 1 },
];

export interface TypeformAnalyticsDashboardProps {
  /** Which of the 4 tabs starts active. Defaults to 'form-performance'. */
  initialTab?: DashboardTabId;
  /** Which date-range preset starts selected. Defaults to 'all-time'. */
  initialDateRange?: DateRangeId;
  /** Per-date-range KPI figures. Defaults to DEFAULT_KPI_DATA (the real
   * captured 8/5/2/40%/00:16 figures for all-time/last-week/last-month/
   * last-year, zeroed for today). Switching ranges re-reads this map
   * synchronously client-side — no network round-trip, no loading state,
   * matching the confirmed real behavior. */
  kpiData?: Record<DateRangeId, KpiRangeData>;
  /** Which view mode the Response summary tab's chart starts in. Defaults
   * to 'table'. */
  initialResponseView?: ResponseViewMode;
}

function parseTimeToSeconds(display: string): number {
  const [mm, ss] = display.split(':').map((n) => Number.parseInt(n, 10) || 0);
  return mm * 60 + ss;
}

interface KpiTileProps {
  label: string;
  display: string;
  fraction: number;
}

const TILE_SVG_WIDTH = 96;
const TILE_SVG_HEIGHT = 40;
const TILE_BAR_WIDTH = 28;

/**
 * A genuine, hand-composed SVG bar (rect + baseline line) per KPI tile —
 * NOT canvas, NOT a <table>. This is the deliberate, meaningful contrast
 * with the Zoho sibling preview analytics-dashboard-kpi-bar-map, whose bar
 * chart is a literal <table> with inline pixel heights, matching that
 * product's own confirmed DOM architecture. No entrance animation is
 * applied — the confirmed real finding is values render at final value
 * immediately with zero load-in motion.
 */
function KpiTile({ label, display, fraction }: KpiTileProps) {
  const clamped = Math.max(0, Math.min(1, fraction));
  const barHeight = Math.max(clamped * (TILE_SVG_HEIGHT - 8), 2);
  const x = (TILE_SVG_WIDTH - TILE_BAR_WIDTH) / 2;
  const y = TILE_SVG_HEIGHT - 1 - barHeight;
  return (
    <li className={styles.kpiTile}>
      <span className={styles.kpiLabel}>{label}</span>
      <span className={styles.kpiValue}>{display}</span>
      <svg
        className={styles.kpiTileChart}
        viewBox={`0 0 ${TILE_SVG_WIDTH} ${TILE_SVG_HEIGHT}`}
        role="img"
        aria-label={`${label}: ${display}`}
      >
        <line
          x1={0}
          y1={TILE_SVG_HEIGHT - 1}
          x2={TILE_SVG_WIDTH}
          y2={TILE_SVG_HEIGHT - 1}
          className={styles.kpiTileAxis}
        />
        <rect x={x} y={y} width={TILE_BAR_WIDTH} height={barHeight} className={styles.kpiTileBar} />
      </svg>
    </li>
  );
}

interface ChoiceBarChartProps {
  options: ChoiceOptionDatum[];
  orientation: 'horizontal' | 'vertical';
}

const CHART_BAR_THICKNESS = 28;
const CHART_BAR_GAP = 14;
const CHART_LENGTH = 220;

/** Genuine hand-composed SVG <rect>/<line> bar chart, computing x/width or
 * y/height from the fixture data — no charting library, no canvas. */
function ChoiceBarChart({ options, orientation }: ChoiceBarChartProps) {
  const max = Math.max(...options.map((o) => o.count), 1);
  const thickness = options.length * (CHART_BAR_THICKNESS + CHART_BAR_GAP) + CHART_BAR_GAP;

  if (orientation === 'horizontal') {
    const width = CHART_LENGTH + 120;
    return (
      <svg
        className={styles.choiceChart}
        viewBox={`0 0 ${width} ${thickness}`}
        role="img"
        aria-label={`${RESPONSE_QUESTION}: ${options.map((o) => `${o.label} ${o.count}`).join(', ')}`}
      >
        <line
          x1={110}
          y1={0}
          x2={110}
          y2={thickness}
          className={styles.choiceChartAxis}
        />
        {options.map((option, i) => {
          const barWidth = Math.max((option.count / max) * CHART_LENGTH, 2);
          const y = CHART_BAR_GAP + i * (CHART_BAR_THICKNESS + CHART_BAR_GAP);
          return (
            <g key={option.label}>
              <text x={104} y={y + CHART_BAR_THICKNESS / 2 + 4} textAnchor="end" className={styles.choiceChartLabel}>
                {option.label}
              </text>
              <rect x={110} y={y} width={barWidth} height={CHART_BAR_THICKNESS} className={styles.choiceChartBar} />
              <text
                x={110 + barWidth + 6}
                y={y + CHART_BAR_THICKNESS / 2 + 4}
                className={styles.choiceChartValue}
              >
                {option.count}
              </text>
            </g>
          );
        })}
      </svg>
    );
  }

  const width = thickness;
  const height = CHART_LENGTH + 40;
  return (
    <svg
      className={styles.choiceChart}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={`${RESPONSE_QUESTION}: ${options.map((o) => `${o.label} ${o.count}`).join(', ')}`}
    >
      <line x1={0} y1={height - 24} x2={width} y2={height - 24} className={styles.choiceChartAxis} />
      {options.map((option, i) => {
        const barHeight = Math.max((option.count / max) * CHART_LENGTH, 2);
        const x = CHART_BAR_GAP + i * (CHART_BAR_THICKNESS + CHART_BAR_GAP);
        const y = height - 24 - barHeight;
        return (
          <g key={option.label}>
            <rect x={x} y={y} width={CHART_BAR_THICKNESS} height={barHeight} className={styles.choiceChartBar} />
            <text x={x + CHART_BAR_THICKNESS / 2} y={y - 6} textAnchor="middle" className={styles.choiceChartValue}>
              {option.count}
            </text>
            <text
              x={x + CHART_BAR_THICKNESS / 2}
              y={height - 8}
              textAnchor="middle"
              className={styles.choiceChartLabel}
            >
              {option.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Reconstructed from Typeform's Results/Analytics dashboard. Real confirmed
 * behavior reproduced faithfully: the "At a glance" KPI tiles and the
 * Response summary chart are genuine hand-composed SVG <rect>/<line>
 * primitives (a deliberate contrast with the Zoho sibling's literal
 * <table>-based bar chart), the date-range control re-filters the KPI
 * tiles synchronously client-side with zero network round-trip or loading
 * state, the drop-off funnel card is a static teaser with fixed non-live
 * numbers even on this free-plan view (confirmed marketing chrome), Smart
 * Insights is a paywalled placeholder with no real AI content, and no
 * count-up/bar-grow-in entrance animation is applied anywhere. See this
 * preview's registry evidence string for the full scoping/assumption
 * breakdown.
 */
export function TypeformAnalyticsDashboard({
  initialTab = 'form-performance',
  initialDateRange = 'all-time',
  kpiData = DEFAULT_KPI_DATA,
  initialResponseView = 'table',
}: TypeformAnalyticsDashboardProps) {
  const [tab, setTab] = useState<DashboardTabId>(initialTab);
  const [dateRange, setDateRange] = useState<DateRangeId>(initialDateRange);
  const [rangeMenuOpen, setRangeMenuOpen] = useState(false);
  const [responseView, setResponseView] = useState<ResponseViewMode>(initialResponseView);

  const tablistId = useId();
  const headingId = useId();
  const tabRefs = useRef<Record<DashboardTabId, HTMLButtonElement | null>>({
    'smart-insights': null,
    'form-performance': null,
    'response-summary': null,
    responses: null,
  });
  const rangeRootRef = useRef<HTMLDivElement>(null);
  const rangeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!rangeMenuOpen) return;
    function handlePointerDown(event: MouseEvent) {
      if (!rangeRootRef.current?.contains(event.target as Node)) {
        setRangeMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [rangeMenuOpen]);

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const idx = TABS.findIndex((t) => t.id === tab);
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const nextIdx = event.key === 'ArrowRight' ? (idx + 1) % TABS.length : (idx - 1 + TABS.length) % TABS.length;
      const nextTab = TABS[nextIdx].id;
      setTab(nextTab);
      tabRefs.current[nextTab]?.focus();
    }
  }

  function selectRange(id: DateRangeId) {
    // Synchronous, client-side only — no fetch, no loading state, matching
    // the confirmed real behavior.
    setDateRange(id);
    setRangeMenuOpen(false);
    rangeButtonRef.current?.focus();
  }

  const data = kpiData[dateRange] ?? ZERO_ACTIVITY;
  const countMax = Math.max(data.views, data.starts, data.submissions, 1);
  const timeSeconds = parseTimeToSeconds(data.timeToComplete);

  return (
    <div className={styles.root}>
      <h2 id={headingId} className={styles.heading}>
        Results
      </h2>

      <div id={tablistId} role="tablist" aria-labelledby={headingId} className={styles.tabList}>
        {TABS.map((t) => (
          <button
            key={t.id}
            ref={(el) => {
              tabRefs.current[t.id] = el;
            }}
            type="button"
            role="tab"
            id={`${tablistId}-tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`${tablistId}-panel-${t.id}`}
            tabIndex={tab === t.id ? 0 : -1}
            className={tab === t.id ? `${styles.tab} ${styles.tabActive}` : styles.tab}
            onClick={() => setTab(t.id)}
            onKeyDown={handleTabKeyDown}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ---- Smart Insights (paywalled) ---- */}
      <section
        id={`${tablistId}-panel-smart-insights`}
        role="tabpanel"
        aria-labelledby={`${tablistId}-tab-smart-insights`}
        hidden={tab !== 'smart-insights'}
        className={styles.panel}
      >
        <div className={styles.paywallPane}>
          <span className={styles.diamondBadge} aria-hidden="true">
            &#9670;
          </span>
          <h3 className={styles.paywallHeading}>Smart Insights</h3>
          <p className={styles.paywallText}>
            AI-generated summaries of how your form is performing are available on paid plans.
          </p>
          <button type="button" className={styles.upgradeButton}>
            Upgrade plan
          </button>
        </div>
      </section>

      {/* ---- Form performance ---- */}
      <section
        id={`${tablistId}-panel-form-performance`}
        role="tabpanel"
        aria-labelledby={`${tablistId}-tab-form-performance`}
        hidden={tab !== 'form-performance'}
        className={styles.panel}
      >
        <div className={styles.panelHeaderRow}>
          <h3 className={styles.sectionHeading}>At a glance</h3>
          <div className={styles.dateRangeWrap} ref={rangeRootRef}>
            <button
              ref={rangeButtonRef}
              type="button"
              className={styles.dateRangeButton}
              aria-haspopup="listbox"
              aria-expanded={rangeMenuOpen}
              onClick={() => setRangeMenuOpen((o) => !o)}
            >
              {DATE_RANGE_OPTIONS.find((o) => o.id === dateRange)?.label}
              <span aria-hidden="true" className={styles.chevron}>
                &#8964;
              </span>
            </button>
            {rangeMenuOpen && (
              <ul className={styles.dateRangeMenu} role="listbox" aria-label="Date range">
                {DATE_RANGE_OPTIONS.map((opt) => (
                  <li key={opt.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={dateRange === opt.id}
                      className={
                        dateRange === opt.id
                          ? `${styles.dateRangeOption} ${styles.dateRangeOptionActive}`
                          : styles.dateRangeOption
                      }
                      onClick={() => selectRange(opt.id)}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <ul className={styles.kpiRow} aria-label="At a glance">
          <KpiTile label="Views" display={String(data.views)} fraction={data.views / countMax} />
          <KpiTile label="Starts" display={String(data.starts)} fraction={data.starts / countMax} />
          <KpiTile
            label="Submissions"
            display={String(data.submissions)}
            fraction={data.submissions / countMax}
          />
          <KpiTile
            label="Completion rate"
            display={`${data.completionRate}%`}
            fraction={data.completionRate / 100}
          />
          <KpiTile
            label="Time to complete"
            display={data.timeToComplete}
            fraction={Math.min(timeSeconds / 300, 1)}
          />
        </ul>

        <section className={styles.funnelSection} aria-labelledby={`${headingId}-funnel`}>
          <div className={styles.funnelHeader}>
            <h3 id={`${headingId}-funnel`} className={styles.sectionHeading}>
              See where users drop off
            </h3>
            <span className={styles.diamondBadge} aria-hidden="true">
              &#9670;
            </span>
          </div>
          {/*
            Static teaser with fixed placeholder numbers — the confirmed
            real finding is that even the free-plan UI shows fake/non-live
            numbers here, purely as marketing chrome for the paid Drop-off
            feature. These specific numbers are this reconstruction's own
            placeholders, not captured real values.
          */}
          <div className={styles.funnelCards}>
            <div className={styles.funnelCard}>
              <span className={styles.funnelCardLabel}>Biggest drop-off</span>
              <span className={styles.funnelCardValue}>Question 2</span>
              <span className={styles.funnelCardSub}>32% of respondents leave here</span>
            </div>
            <div className={styles.funnelCard}>
              <span className={styles.funnelCardLabel}>Average time spent</span>
              <span className={styles.funnelCardValue}>00:09</span>
              <span className={styles.funnelCardSub}>per question</span>
            </div>
          </div>
          <button type="button" className={styles.upgradeButton}>
            Upgrade plan
          </button>
        </section>
      </section>

      {/* ---- Response summary (simplified) ---- */}
      <section
        id={`${tablistId}-panel-response-summary`}
        role="tabpanel"
        aria-labelledby={`${tablistId}-tab-response-summary`}
        hidden={tab !== 'response-summary'}
        className={styles.panel}
      >
        <div className={styles.panelHeaderRow}>
          <h3 className={styles.sectionHeading}>{RESPONSE_QUESTION}</h3>
          <div className={styles.viewToggle} role="radiogroup" aria-label="Chart view">
            {VIEW_MODES.map((mode) => (
              <button
                key={mode.id}
                type="button"
                role="radio"
                aria-checked={responseView === mode.id}
                aria-label={mode.label}
                title={mode.label}
                className={
                  responseView === mode.id
                    ? `${styles.viewToggleButton} ${styles.viewToggleButtonActive}`
                    : styles.viewToggleButton
                }
                onClick={() => setResponseView(mode.id)}
              >
                <span aria-hidden="true">{mode.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {responseView === 'table' ? (
          <table className={styles.responseTable}>
            <thead>
              <tr>
                <th scope="col">Choice</th>
                <th scope="col">Responses</th>
                <th scope="col">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {RESPONSE_OPTIONS.map((option) => {
                const total = RESPONSE_OPTIONS.reduce((sum, o) => sum + o.count, 0);
                const pct = total > 0 ? (option.count / total) * 100 : 0;
                return (
                  <tr key={option.label}>
                    <td>{option.label}</td>
                    <td>{option.count}</td>
                    <td>{pct.toFixed(1)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <ChoiceBarChart
            options={RESPONSE_OPTIONS}
            orientation={responseView === 'horizontal' ? 'horizontal' : 'vertical'}
          />
        )}
      </section>

      {/* ---- Responses (simple placeholder table) ---- */}
      <section
        id={`${tablistId}-panel-responses`}
        role="tabpanel"
        aria-labelledby={`${tablistId}-tab-responses`}
        hidden={tab !== 'responses'}
        className={styles.panel}
      >
        <p className={styles.responsesHint}>
          Individual-response browsing is a simplified placeholder in this reconstruction — not a
          full reproduction of Typeform&rsquo;s Responses grid.
        </p>
        <table className={styles.responsesPlaceholderTable}>
          <thead>
            <tr>
              <th scope="col">Submitted</th>
              <th scope="col">{RESPONSE_QUESTION}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2026-09-12 09:41</td>
              <td>Social media</td>
            </tr>
            <tr>
              <td>2026-09-13 14:05</td>
              <td>Friend referral</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

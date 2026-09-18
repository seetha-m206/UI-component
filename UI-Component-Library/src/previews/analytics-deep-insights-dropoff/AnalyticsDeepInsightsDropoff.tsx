import { useId, useRef, useState } from 'react';
import styles from './AnalyticsDeepInsightsDropoff.module.css';

export interface FieldMetricDatum {
  id: string;
  label: string;
  clicks: number;
  starts: number;
  dropoffs: number;
}

export interface PageMetricDatum {
  id: string;
  label: string;
  views: number;
}

export type DeepInsightsTabId = 'field' | 'page' | 'dropoff';

export interface AnalyticsDeepInsightsDropoffProps {
  /** Every field on the form, driving both the Field Metrics and Drop-off Count tabs. */
  fields: FieldMetricDatum[];
  /**
   * Per-page view counts, driving the Page Metrics tab. Omit (or pass an
   * empty array) for a single-page form — see `isSinglePage`.
   */
  pages?: PageMetricDatum[];
  /**
   * Forces the documented "No data available." empty state on the Page
   * Metrics tab (a single-page form has no per-page breakdown to show). If
   * omitted, it's derived from `pages`: true when `pages` is missing/empty.
   */
  isSinglePage?: boolean;
  /** Display-only period label shown in the shared selector, e.g. "Sep 2026". */
  periodLabel?: string;
  /**
   * Called when the prev/next period control is used. There is no live data
   * source behind this reconstruction, so this is a decorative/no-op hook
   * unless the caller wires it up to swap fixtures externally — see README
   * ("Deliberate scoping decision: no live period refetch").
   */
  onPeriodChange?: (direction: 'prev' | 'next') => void;
}

const TABS: { id: DeepInsightsTabId; label: string }[] = [
  { id: 'field', label: 'Field Metrics' },
  { id: 'page', label: 'Page Metrics' },
  { id: 'dropoff', label: 'Drop-off Count' },
];

function maxOf(values: number[]): number {
  return values.reduce((m, v) => Math.max(m, v), 0);
}

function barWidth(value: number, max: number): number {
  if (max <= 0) return 0;
  return Math.min(100, Math.round((value / max) * 100));
}

interface InfoTooltipProps {
  id: string;
  label: string;
  text: string;
}

/** Header ⓘ icon — opens on hover AND keyboard focus, per this library's hard accessibility rule for hover-triggered UI. */
function InfoTooltip({ id, label, text }: InfoTooltipProps) {
  const [open, setOpen] = useState(false);
  const tooltipId = `${id}-tip`;
  return (
    <span className={styles.infoTooltipWrap}>
      <button
        type="button"
        className={styles.infoIcon}
        aria-label={`${label} column info`}
        aria-describedby={open ? tooltipId : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        &#9432;
      </button>
      {open && (
        <span id={tooltipId} role="tooltip" className={styles.infoTooltip}>
          {text}
        </span>
      )}
    </span>
  );
}

interface MetricBarProps {
  value: number;
  max: number;
  tone: 'clicks' | 'starts' | 'dropoff';
  ariaLabel: string;
}

/**
 * Literal div-based percentage bar: a track `<div>` with a fill `<div>`
 * sized via an inline `width: N%` style, matching the record's captured
 * `b.selectedCount[style="width: N%"]` markup — a genuinely different
 * architecture from analytics-dashboard-kpi-bar-map's `<table>`-based bar
 * chart (see README).
 */
function MetricBar({ value, max, tone, ariaLabel }: MetricBarProps) {
  const toneClass =
    tone === 'clicks'
      ? styles.fillClicks
      : tone === 'starts'
        ? styles.fillStarts
        : styles.fillDropoff;
  return (
    <div className={styles.barCell}>
      <div className={styles.barTrack} role="img" aria-label={ariaLabel}>
        <div
          className={`${styles.barFill} ${toneClass}`}
          style={{ width: `${barWidth(value, max)}%` }}
        />
      </div>
      <span className={styles.barValue}>{value}</span>
    </div>
  );
}

/** Generic per-row field icon — the record confirms an icon renders per row but not which glyph set per field type, so one neutral glyph stands in for all of them (see README). */
function FieldIcon() {
  return (
    <span className={styles.fieldIcon} aria-hidden="true">
      &#9635;
    </span>
  );
}

/**
 * Reconstructed from Zoho Forms' "Deep Insights" (Field Metrics / Page
 * Metrics) and "Drop-off Count" analytics tabs — siblings of the Form
 * Metrics dashboard (`analytics-dashboard-kpi-bar-map`), gated behind the
 * same "Enable Advanced Metrics" toggle. Unlike that dashboard's literal
 * `<table>`-based bar chart, the record's Technical Data section documents
 * a *different*, div-based row/bar pattern here
 * (`div.analyticsTableView` → `.anaFocusCountBar`/`.anaStartedCountBar`/
 * `.anaDropCountBar` → a percentage-width `<b>` fill + `<em>` count) — this
 * reconstruction reproduces that div-based architecture, not a table. See
 * this folder's README for the full evidence trail.
 */
export function AnalyticsDeepInsightsDropoff({
  fields,
  pages,
  isSinglePage,
  periodLabel = 'Sep 2026',
  onPeriodChange,
}: AnalyticsDeepInsightsDropoffProps) {
  const headingId = useId();
  const tablistId = useId();
  const [activeTab, setActiveTab] = useState<DeepInsightsTabId>('field');
  const [fieldQuery, setFieldQuery] = useState('');
  const [pageQuery, setPageQuery] = useState('');
  const [dropoffQuery, setDropoffQuery] = useState('');
  const tabRefs = useRef<Record<DeepInsightsTabId, HTMLButtonElement | null>>({
    field: null,
    page: null,
    dropoff: null,
  });

  const pageRows = pages ?? [];
  const effectiveSinglePage = isSinglePage ?? pageRows.length === 0;

  const maxClicks = maxOf(fields.map((f) => f.clicks));
  const maxStarts = maxOf(fields.map((f) => f.starts));
  const maxDropoffs = maxOf(fields.map((f) => f.dropoffs));
  const maxViews = maxOf(pageRows.map((p) => p.views));

  const filteredFields = fields.filter((f) =>
    f.label.toLowerCase().includes(fieldQuery.trim().toLowerCase())
  );
  const filteredPages = pageRows.filter((p) =>
    p.label.toLowerCase().includes(pageQuery.trim().toLowerCase())
  );
  const filteredDropoffFields = fields.filter((f) =>
    f.label.toLowerCase().includes(dropoffQuery.trim().toLowerCase())
  );

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const idx = TABS.findIndex((t) => t.id === activeTab);
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const nextIdx =
        event.key === 'ArrowRight'
          ? (idx + 1) % TABS.length
          : (idx - 1 + TABS.length) % TABS.length;
      const nextTab = TABS[nextIdx].id;
      setActiveTab(nextTab);
      tabRefs.current[nextTab]?.focus();
    }
  }

  const periodSelector = (
    <div className={styles.periodSelector}>
      <button
        type="button"
        className={styles.periodNavButton}
        aria-label="Previous period"
        onClick={() => onPeriodChange?.('prev')}
      >
        &#8249;
      </button>
      <span className={styles.periodLabel}>{periodLabel}</span>
      <button
        type="button"
        className={styles.periodNavButton}
        aria-label="Next period"
        onClick={() => onPeriodChange?.('next')}
      >
        &#8250;
      </button>
    </div>
  );

  return (
    <div className={styles.root}>
      <div className={styles.headerRow}>
        <h2 id={headingId} className={styles.heading}>
          Deep Insights
        </h2>
        {periodSelector}
      </div>

      <div id={tablistId} role="tablist" aria-labelledby={headingId} className={styles.tabList}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[tab.id] = el;
            }}
            type="button"
            role="tab"
            id={`${tablistId}-tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`${tablistId}-panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            className={activeTab === tab.id ? `${styles.tab} ${styles.tabActive}` : styles.tab}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={handleTabKeyDown}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ---- Field Metrics ---- */}
      <section
        id={`${tablistId}-panel-field`}
        role="tabpanel"
        aria-labelledby={`${tablistId}-tab-field`}
        hidden={activeTab !== 'field'}
        className={styles.panel}
      >
        <div className={styles.searchRow}>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search fields"
            aria-label="Search fields by name"
            value={fieldQuery}
            onChange={(e) => setFieldQuery(e.target.value)}
          />
        </div>
        <div className={styles.tableWrap}>
          <div className={`${styles.row} ${styles.headerRowInner}`}>
            <span className={styles.colHeaderName}>FIELDS</span>
            <span className={styles.colHeader}>
              CLICKS
              <InfoTooltip
                id={`${headingId}-clicks`}
                label="Clicks"
                text="Number of times respondents interacted with this field."
              />
            </span>
            <span className={styles.colHeader}>
              STARTS
              <InfoTooltip
                id={`${headingId}-starts`}
                label="Starts"
                text="Number of respondents who began filling this field."
              />
            </span>
          </div>
          {filteredFields.length === 0 ? (
            <p className={styles.noMatch}>No fields match &ldquo;{fieldQuery}&rdquo;.</p>
          ) : (
            filteredFields.map((f) => (
              <div key={f.id} className={styles.row}>
                <span className={styles.rowName}>
                  <FieldIcon />
                  {f.label}
                </span>
                <MetricBar
                  value={f.clicks}
                  max={maxClicks}
                  tone="clicks"
                  ariaLabel={`${f.label}: ${f.clicks} clicks`}
                />
                <MetricBar
                  value={f.starts}
                  max={maxStarts}
                  tone="starts"
                  ariaLabel={`${f.label}: ${f.starts} starts`}
                />
              </div>
            ))
          )}
        </div>
      </section>

      {/* ---- Page Metrics ---- */}
      <section
        id={`${tablistId}-panel-page`}
        role="tabpanel"
        aria-labelledby={`${tablistId}-tab-page`}
        hidden={activeTab !== 'page'}
        className={styles.panel}
      >
        {effectiveSinglePage ? (
          <div className={styles.emptyState} role="status">
            <p className={styles.emptyText}>No data available.</p>
          </div>
        ) : (
          <>
            <div className={styles.searchRow}>
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Search pages"
                aria-label="Search pages by name"
                value={pageQuery}
                onChange={(e) => setPageQuery(e.target.value)}
              />
            </div>
            <div className={styles.tableWrap}>
              <div className={`${styles.row} ${styles.rowOneMetric} ${styles.headerRowInner}`}>
                <span className={styles.colHeaderName}>PAGES</span>
                <span className={styles.colHeader}>
                  PAGE VIEWS
                  <InfoTooltip
                    id={`${headingId}-views`}
                    label="Page views"
                    text="Number of times respondents viewed this page."
                  />
                </span>
              </div>
              {filteredPages.length === 0 ? (
                <p className={styles.noMatch}>No pages match &ldquo;{pageQuery}&rdquo;.</p>
              ) : (
                filteredPages.map((p) => (
                  <div key={p.id} className={`${styles.row} ${styles.rowOneMetric}`}>
                    <span className={styles.rowName}>
                      <FieldIcon />
                      {p.label}
                    </span>
                    <MetricBar
                      value={p.views}
                      max={maxViews}
                      tone="clicks"
                      ariaLabel={`${p.label}: ${p.views} page views`}
                    />
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </section>

      {/* ---- Drop-off Count ---- */}
      <section
        id={`${tablistId}-panel-dropoff`}
        role="tabpanel"
        aria-labelledby={`${tablistId}-tab-dropoff`}
        hidden={activeTab !== 'dropoff'}
        className={styles.panel}
      >
        <h3 className={styles.subHeading}>Drop-off Count: Form Fields</h3>
        <div className={styles.searchRow}>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search fields"
            aria-label="Search drop-off fields by name"
            value={dropoffQuery}
            onChange={(e) => setDropoffQuery(e.target.value)}
          />
        </div>
        <div className={styles.tableWrap}>
          <div className={`${styles.row} ${styles.rowOneMetric} ${styles.headerRowInner}`}>
            <span className={styles.colHeaderName}>FIELDS</span>
            <span className={styles.colHeader}>
              DROP-OFFS
              <InfoTooltip
                id={`${headingId}-dropoffs`}
                label="Drop-offs"
                text="Total Count Of Respondents Who Started Filling Up The Field But Exited Without Submitting The Form."
              />
            </span>
          </div>
          {filteredDropoffFields.length === 0 ? (
            <p className={styles.noMatch}>No fields match &ldquo;{dropoffQuery}&rdquo;.</p>
          ) : (
            filteredDropoffFields.map((f) => (
              <div
                key={f.id}
                className={`${styles.row} ${styles.rowOneMetric} ${styles.dropoffRow}`}
              >
                <span className={styles.rowName}>
                  <FieldIcon />
                  {f.label}
                </span>
                <MetricBar
                  value={f.dropoffs}
                  max={maxDropoffs}
                  tone="dropoff"
                  ariaLabel={`${f.label}: ${f.dropoffs} drop-offs`}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

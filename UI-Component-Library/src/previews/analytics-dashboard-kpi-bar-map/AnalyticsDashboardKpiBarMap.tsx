import { useId, useState } from 'react';
import styles from './AnalyticsDashboardKpiBarMap.module.css';

export interface KpiValues {
  formViews: number;
  starts: number;
  submissions: number;
  errorScore: number;
  conversionRate: number;
}

export interface DayDatum {
  day: number;
  count: number;
}

export interface RegionDatum {
  region: string;
  label: string;
  count: number;
  percent: number;
}

export interface AnalyticsDashboardData {
  /** Label for the period being shown, e.g. "Sep 2026". Display-only. */
  periodLabel: string;
  kpis: KpiValues;
  /**
   * Sparse day data — only days with nonzero views need to be present, matching
   * the record's finding that the API response's `day` object only carries keys
   * for nonzero days. The component fills in the dense 1..daysInPeriod grid
   * client-side, reproducing that documented client-responsibility split.
   */
  days: DayDatum[];
  /**
   * How many day columns the bar chart renders. The real dashboard renders a
   * full calendar month (28-31); a smaller number (7-10) is used by the
   * fixtures here for a readable preview, per the task's own scoping note.
   */
  daysInPeriod: number;
  regions: RegionDatum[];
}

export interface AnalyticsDashboardKpiBarMapProps {
  data: AnalyticsDashboardData;
  /**
   * Gates the "Starts" KPI card behind a blur + lock treatment, matching the
   * source's "Enable Advanced Metrics" gate observed on the Starts card and
   * the Desktop/Mobile donut chart (donut not reconstructed here — out of
   * scope, see README).
   */
  advancedMetricsEnabled?: boolean;
  /**
   * Forces the documented empty state (bar chart markup swapped for a
   * "No data available" placeholder). If omitted, it's derived from the data:
   * true when formViews is 0 and every day in `days` is 0.
   */
  isEmpty?: boolean;
}

function buildDenseDays(days: DayDatum[], daysInPeriod: number): DayDatum[] {
  const byDay = new Map(days.map((d) => [d.day, d.count]));
  return Array.from({ length: daysInPeriod }, (_, i) => {
    const day = i + 1;
    return { day, count: byDay.get(day) ?? 0 };
  });
}

/**
 * Y-axis max + gridline step. The record documents a fixed "0-10, every 2
 * units" axis on the real dashboard; this keeps that 5-gridline shape but
 * scales the max up (to the next even number) when the synthetic data
 * actually exceeds 10, so fixtures with larger counts don't clip.
 */
function computeAxisMax(denseDays: DayDatum[]): number {
  const max = denseDays.reduce((m, d) => Math.max(m, d.count), 0);
  if (max <= 10) return 10;
  return Math.ceil(max / 2) * 2;
}

function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

/**
 * Reconstructed from Zoho Forms' Form Metrics analytics dashboard. The real
 * dashboard is entirely hand-built HTML with no charting library: the bar
 * chart is a literal `<table>` (one `<td>` per day, an inline pixel `height`
 * per bar, a static `background-color: rgb(33, 81, 243)` tag-selector rule),
 * and the "region map" is a static decorative world-map PNG with no
 * data-driven coloring — every real regional value lives in the parallel
 * progress-bar list, not the map image. Per the task's scope decision, this
 * reconstruction faithfully rebuilds the KPI cards, the table-based bar
 * chart, and the region progress list, and renders a labeled placeholder
 * where the map image would go instead of recreating the PNG. See this
 * folder's README for the full evidence trail and deviations.
 */
export function AnalyticsDashboardKpiBarMap({
  data,
  advancedMetricsEnabled = false,
  isEmpty,
}: AnalyticsDashboardKpiBarMapProps) {
  const headingId = useId();
  const tooltipIdBase = useId();
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const denseDays = buildDenseDays(data.days, data.daysInPeriod);
  const axisMax = computeAxisMax(denseDays);
  const axisSteps = 5;
  const stepValue = axisMax / axisSteps;
  const gridlineLabels = Array.from({ length: axisSteps + 1 }, (_, i) => axisMax - i * stepValue);

  const effectiveEmpty =
    isEmpty ?? (data.kpis.formViews === 0 && denseDays.every((d) => d.count === 0));

  const completionPct =
    data.kpis.formViews > 0 ? (data.kpis.submissions / data.kpis.formViews) * 100 : 0;

  return (
    <div className={styles.root}>
      <h2 id={headingId} className={styles.heading}>
        Form Metrics — {data.periodLabel}
      </h2>

      <ul className={styles.kpiRow} aria-label="Key metrics">
        <li className={`${styles.kpiCard} ${styles.kpiCardHighlighted}`}>
          <span className={styles.kpiLabel}>Form Views</span>
          <span className={styles.kpiValue}>{data.kpis.formViews}</span>
        </li>

        <li className={styles.kpiCard}>
          <span className={styles.kpiLabel}>Starts</span>
          {advancedMetricsEnabled ? (
            <span className={styles.kpiValue}>{data.kpis.starts}</span>
          ) : (
            <span className={styles.kpiLockedWrap}>
              <span className={styles.kpiValue} aria-hidden="true">
                {data.kpis.starts}
              </span>
              <span className={styles.kpiLockOverlay}>
                <span className={styles.kpiLockIcon} aria-hidden="true">
                  &#128274;
                </span>
                <span>Enable Advanced Metrics</span>
              </span>
              <span className={styles.srOnly}>Starts metric locked — enable Advanced Metrics</span>
            </span>
          )}
        </li>

        <li className={styles.kpiCard}>
          <span className={styles.kpiLabel}>Submissions</span>
          <span className={styles.kpiValue}>{data.kpis.submissions}</span>
          <span className={styles.kpiSub}>{formatPercent(completionPct)} of views</span>
        </li>

        <li className={styles.kpiCard}>
          <span className={styles.kpiLabel}>Error Score</span>
          <span className={styles.kpiValue}>{formatPercent(data.kpis.errorScore)}</span>
        </li>

        <li className={styles.kpiCard}>
          <span className={styles.kpiLabel}>Conversion Rate</span>
          <span className={styles.kpiValue}>{formatPercent(data.kpis.conversionRate)}</span>
        </li>
      </ul>

      <section className={styles.chartSection} aria-labelledby={`${headingId}-chart`}>
        <h3 id={`${headingId}-chart`} className={styles.sectionHeading}>
          Form Views
        </h3>

        {effectiveEmpty ? (
          <div className={styles.emptyState} role="status">
            <span className={styles.emptyIcon} aria-hidden="true">
              &#128202;
            </span>
            <p className={styles.emptyText}>No data available.</p>
          </div>
        ) : (
          <table className={styles.barTable}>
            <tbody>
              <tr>
                <td className={styles.axisCell}>
                  <div className={styles.axisLabels}>
                    {gridlineLabels.map((label) => (
                      <span key={label} className={styles.axisLabel}>
                        {Math.round(label)}
                      </span>
                    ))}
                  </div>
                </td>
                {denseDays.map((d) => {
                  const tooltipId = `${tooltipIdBase}-tip-${d.day}`;
                  const active = activeDay === d.day;
                  return (
                    <td key={d.day} className={styles.dayCell}>
                      <div className={styles.barTrack}>
                        {active && (
                          <span id={tooltipId} className={styles.tooltip} role="tooltip">
                            {data.periodLabel} {d.day} / {d.count} / Views
                          </span>
                        )}
                        <button
                          type="button"
                          className={styles.bar}
                          style={{ height: `${(d.count / axisMax) * 100}%` }}
                          aria-describedby={active ? tooltipId : undefined}
                          aria-label={`${data.periodLabel} ${d.day}: ${d.count} views`}
                          onMouseEnter={() => setActiveDay(d.day)}
                          onMouseLeave={() => setActiveDay((cur) => (cur === d.day ? null : cur))}
                          onFocus={() => setActiveDay(d.day)}
                          onBlur={() => setActiveDay((cur) => (cur === d.day ? null : cur))}
                        />
                      </div>
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className={styles.axisCell} aria-hidden="true" />
                {denseDays.map((d) => (
                  <td key={d.day} className={styles.dayLabel}>
                    {d.day}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        )}
      </section>

      <section className={styles.regionSection} aria-labelledby={`${headingId}-region`}>
        <h3 id={`${headingId}-region`} className={styles.sectionHeading}>
          Form Views by Region
        </h3>
        <div className={styles.regionLayout}>
          <div
            className={styles.mapPlaceholder}
            role="img"
            aria-label="Region map (static image in the real product — not reconstructed, see README)"
          >
            Region map (static image in the real product — not reconstructed, see README)
          </div>
          <ul className={styles.regionList}>
            {data.regions.map((r) => (
              <li key={r.region} className={styles.regionRow}>
                <span className={styles.regionLabel}>{r.label}</span>
                <span className={styles.regionCount}>{r.count}</span>
                <span className={styles.regionPercent}>({formatPercent(r.percent)})</span>
                <div className={styles.regionBarStrip}>
                  <span
                    className={styles.regionBarFill}
                    style={{ width: `${Math.min(100, r.percent)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

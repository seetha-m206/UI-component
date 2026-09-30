import { useMemo, useState } from 'react';
import styles from './SemrushPositionTrackingBatch.module.css';

export type PositionTrackingSpecimen =
  'projects' | 'target-filter' | 'date-range' | 'landscape' | 'rankings-table';

export interface SemrushPositionTrackingBatchProps {
  specimen: PositionTrackingSpecimen;
  loading?: boolean;
}

type Target = 'All targets' | 'AI Search' | 'SEO';

const ranges = ['Last 2 days', 'Last 7 days', 'Last 30 days', 'Last 60 days', 'Last 90 days'];
const reports = [
  'Landscape',
  'Overview',
  'Rankings Distribution',
  'Tags',
  'Pages',
  'Cannibalization',
  'Competitors Discovery',
  'Devices & Locations',
  'Featured Snippets',
];

function TargetFilter({ value, onChange }: { value: Target; onChange: (target: Target) => void }) {
  return (
    <div className={styles.segments} role="radiogroup" aria-label="Campaign type">
      {(['All targets', 'AI Search', 'SEO'] as Target[]).map((target) => (
        <button
          key={target}
          role="radio"
          aria-checked={value === target}
          onClick={() => onChange(target)}
        >
          {target}
        </button>
      ))}
    </div>
  );
}

function DateRange({ value, onChange }: { value: string; onChange: (range: string) => void }) {
  return (
    <label className={styles.dateControl}>
      <span>Date range</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {ranges.map((range) => (
          <option key={range}>{range}</option>
        ))}
      </select>
    </label>
  );
}

function TargetFilterSpecimen() {
  const [target, setTarget] = useState<Target>('All targets');
  return (
    <div className={styles.compact}>
      <TargetFilter value={target} onChange={setTarget} />
      <p role="status">
        {target === 'AI Search'
          ? 'Prompt columns active.'
          : target === 'SEO'
            ? 'Keyword columns active.'
            : 'All campaign targets active.'}
      </p>
    </div>
  );
}

function DateRangeSpecimen() {
  const [range, setRange] = useState('Last 7 days');
  return (
    <div className={styles.compact}>
      <DateRange value={range} onChange={setRange} />
      <p role="status">{range} selected. Data refresh is reconstructed locally.</p>
    </div>
  );
}

function Projects({ loading = false }: { loading?: boolean }) {
  const [query, setQuery] = useState('');
  const [target, setTarget] = useState<Target>('All targets');
  const [range, setRange] = useState('Last 7 days');
  const promptMode = target === 'AI Search';
  const rows = useMemo(
    () =>
      [
        {
          project: 'northstar.example',
          location: 'Canada · Google, English',
          visibility: '20.69%',
          diff: '+9.99',
          improved: 2,
          declined: 2,
          total: 10,
          updated: '16h ago',
          ready: true,
        },
        {
          project: 'mapleleaf.example',
          location: 'Setup required',
          visibility: '—',
          diff: '—',
          improved: 0,
          declined: 0,
          total: 0,
          updated: '—',
          ready: false,
        },
      ].filter((row) => row.project.includes(query.toLowerCase())),
    [query]
  );
  return (
    <section className={styles.stage}>
      <nav className={styles.breadcrumbs}>
        Home <span>›</span> SEO <span>›</span> Position Tracking
      </nav>
      <div className={styles.titleRow}>
        <h2>Position Tracking</h2>
        <button className={styles.guarded}>+ Create SEO project</button>
      </div>
      <div className={styles.toolbar}>
        <label className={styles.search}>
          <span className={styles.srOnly}>Project name or domain</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Project name or domain"
          />
          {query && (
            <button aria-label="Clear project search" onClick={() => setQuery('')}>
              ×
            </button>
          )}
        </label>
        <TargetFilter value={target} onChange={setTarget} />
        <DateRange value={range} onChange={setRange} />
      </div>
      <div className={styles.rangeStatus} role="status">
        {range} · {target}
      </div>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Device &amp; Location</th>
              <th>Visibility</th>
              <th>Diff</th>
              <th>Improved {promptMode ? 'prompts' : 'keywords'}</th>
              <th>Declined {promptMode ? 'prompts' : 'keywords'}</th>
              <th>All {promptMode ? 'prompts' : 'keywords'}</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.project}>
                <td>
                  <strong>{row.project}</strong>
                  <small>{row.project}</small>
                </td>
                <td>
                  {row.ready ? row.location : <button className={styles.setup}>Set up</button>}
                </td>
                {loading && row.ready ? (
                  <td colSpan={6}>
                    <span className={styles.skeleton}>Loading campaign metrics…</span>
                  </td>
                ) : (
                  <>
                    <td>{row.visibility}</td>
                    <td className={styles.positive}>{row.diff}</td>
                    <td>↑ {row.improved}</td>
                    <td className={styles.negative}>↓ {row.declined}</td>
                    <td>{row.total || '—'}</td>
                    <td>{row.updated}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && <div className={styles.empty}>No campaigns match “{query}”.</div>}
      </div>
      <div className={styles.pagination}>
        Page: <input aria-label="Page" value="1" disabled readOnly /> of 1
      </div>
    </section>
  );
}

function Landscape({ loading = false }: { loading?: boolean }) {
  const [report, setReport] = useState('Landscape');
  const [notice, setNotice] = useState('No provider action sent.');
  const [banner, setBanner] = useState(true);
  return (
    <section className={styles.stage}>
      <nav className={styles.breadcrumbs}>
        Home <span>›</span> SEO <span>›</span> Position Tracking
      </nav>
      <div className={styles.titleRow}>
        <div>
          <h2>northstar.example</h2>
          <small>Canada (Google) · English · Updated 16 hours ago</small>
        </div>
        <div className={styles.actions}>
          <button onClick={() => setNotice('Export is guarded locally · needs verification.')}>
            Export
          </button>
          <button onClick={() => setNotice('Share is guarded locally · needs verification.')}>
            Share
          </button>
          <button onClick={() => setNotice('Alert setup is guarded locally · needs verification.')}>
            Alerts
          </button>
        </div>
      </div>
      <div className={styles.metadata}>
        <span>
          Keywords: <strong>10</strong>
        </span>
        <span>
          Competitors: <strong>13</strong>
        </span>
        <span>SERP features</span>
        <label>
          <input type="checkbox" /> Share of Voice
        </label>
      </div>
      <div className={styles.reportTabs} role="tablist" aria-label="Position Tracking reports">
        {reports.map((item) => (
          <button
            key={item}
            role="tab"
            aria-selected={report === item}
            onClick={() => setReport(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.filterRow}>
        <button>northstar.example⌄</button>
        <DateRange value="Last 30 days" onChange={() => undefined} />
      </div>
      <div className={styles.metricGrid}>
        {[
          ['Visibility', '1.75%', '-0.30%'],
          ['Estimated Traffic', '17.29', '+0.31'],
          ['Average Position', '56.60', '↓ 1.80'],
        ].map(([label, value, diff]) => (
          <article key={label}>
            <small>{label}</small>
            {loading ? (
              <span className={styles.metricSkeleton} aria-label="Loading" />
            ) : (
              <>
                <strong>{value}</strong>
                <span>{diff}</span>
              </>
            )}
          </article>
        ))}
      </div>
      {report === 'Landscape' ? (
        <>
          <article className={styles.card}>
            <div className={styles.cardHead}>
              <h3>Summary</h3>
              <button onClick={() => setNotice('Summary copied locally.')}>Copy all</button>
            </div>
            {loading ? (
              <div className={styles.chartSkeleton} aria-label="Loading summary" />
            ) : (
              <ul>
                <li>Visibility changed during the selected period.</li>
                <li>A competitor gained a new top-three keyword.</li>
                <li>One landing page gained estimated traffic.</li>
              </ul>
            )}
          </article>
          {banner && (
            <aside className={styles.notice}>
              <button
                aria-label="Close local visibility notification"
                onClick={() => setBanner(false)}
              >
                ×
              </button>
              <strong>Local Visibility Gaps</strong>
              <span>Online presence needs attention</span>
              <small>Listings to fix 40 / 47 · Total reviews 758</small>
            </aside>
          )}
        </>
      ) : (
        <RankingsTable />
      )}
      <div className={styles.status} role="status">
        {notice}
      </div>
    </section>
  );
}

function RankingsTable() {
  const [query, setQuery] = useState('');
  const [metric, setMetric] = useState('Positions');
  const [ascending, setAscending] = useState(true);
  const rows = [
    ['local seo platform', 'I', '18', '12', '↑ 6', '2.40%'],
    ['rank tracking dashboard', 'C', '27', '24', '↑ 3', '1.82%'],
    ['seo reporting suite', 'T', '15', '19', '↓ 4', '1.20%'],
  ].filter((row) => row[0].includes(query.toLowerCase()));
  return (
    <article className={styles.card}>
      <div className={styles.cardHead}>
        <div>
          <h3>Rankings Overview</h3>
          <small>{rows.length} synthetic keywords</small>
        </div>
        <div>
          <button>Table settings</button>
          <button className={styles.guarded}>Add keywords</button>
        </div>
      </div>
      <div className={styles.tableTools}>
        <input
          aria-label="Search keywords"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search keywords"
        />
        <button>Top positions &amp; changes</button>
        <button>SERP Features</button>
        <button>Tags</button>
        <button>Intent</button>
        <button>Advanced filters</button>
      </div>
      <div className={styles.segments} role="tablist" aria-label="Ranking metric">
        {['Positions', 'Est. Traffic', 'Visibility'].map((item) => (
          <button
            key={item}
            role="tab"
            aria-selected={metric === item}
            onClick={() => setMetric(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" aria-label="Select all keywords" />
              </th>
              <th>
                <button onClick={() => setAscending((value) => !value)}>
                  Keyword {ascending ? '↑' : '↓'}
                </button>
              </th>
              <th>Intent</th>
              <th>Sep 1</th>
              <th>Sep 30</th>
              <th>Diff</th>
              <th>{metric}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                <td>
                  <input type="checkbox" aria-label={`Select ${row[0]}`} />
                </td>
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${index}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

export function SemrushPositionTrackingBatch({
  specimen,
  loading = false,
}: SemrushPositionTrackingBatchProps) {
  if (specimen === 'projects') return <Projects loading={loading} />;
  if (specimen === 'target-filter') return <TargetFilterSpecimen />;
  if (specimen === 'date-range') return <DateRangeSpecimen />;
  if (specimen === 'landscape') return <Landscape loading={loading} />;
  return (
    <div className={styles.compact}>
      <RankingsTable />
    </div>
  );
}

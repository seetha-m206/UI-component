import { useMemo, useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export type DomainOverviewSpecimen =
  | 'entry'
  | 'query-bar'
  | 'scope-selector'
  | 'report'
  | 'filter-cluster'
  | 'trend-controls'
  | 'upgrade-gate'
  | 'recovery';

export interface SemrushDomainOverviewBatchProps {
  specimen: DomainOverviewSpecimen;
  loading?: boolean;
  error?: boolean;
}

const scopes = ['Root Domain', 'Exact URL', 'Subdomain', 'Subfolder'];
const ranges = ['1M', '6M', '1Y', '2Y', 'All time'];
const countries = ['Worldwide', 'US', 'UK', 'DE'];

function QueryBar({ standalone = false }: { standalone?: boolean }) {
  const [domain, setDomain] = useState('northstar.example');
  const [scope, setScope] = useState('Root Domain');
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState('No provider request sent.');

  return <div className={standalone ? styles.domainQueryCard : styles.domainQueryBar}>
    <label className={styles.domainInput}>
      <span className={styles.srOnly}>Domain, subdomain or URL</span>
      <input value={domain} onChange={(event) => setDomain(event.target.value)} placeholder="Enter domain, subdomain or URL" />
      {domain && <button aria-label="Clear domain" onClick={() => setDomain('')}>×</button>}
    </label>
    <div className={styles.scopeMenu}>
      <button aria-expanded={open} onClick={() => setOpen((value) => !value)}>{scope}<span>⌄</span></button>
      {open && <div className={styles.scopeOptions} role="listbox" aria-label="Domain scope">
        {scopes.map((item) => <button key={item} role="option" aria-selected={scope === item} onClick={() => { setScope(item); setOpen(false); }}>{domain || 'example.com'}<strong>{item}</strong></button>)}
      </div>}
    </div>
    <button className={`${styles.button} ${styles.primary}`} disabled={!domain} onClick={() => setNotice(`Analyze is guarded locally for ${domain}.`)}>Analyze</button>
    {standalone && <div className={styles.status} role="status">{notice}</div>}
  </div>;
}

function ReportFilters() {
  const [country, setCountry] = useState('US');
  const [device, setDevice] = useState('Desktop');
  const [date, setDate] = useState('Sep 29, 2026');
  return <section className={styles.reportFilters} aria-label="Report filters">
    <div className={styles.countrySegments} role="radiogroup" aria-label="Country database">
      {countries.map((item) => <button key={item} role="radio" aria-checked={country === item} onClick={() => setCountry(item)}>{item}</button>)}
      <button aria-label="More countries" onClick={() => setCountry('More')}>•••</button>
    </div>
    <label>Device<select value={device} onChange={(event) => setDevice(event.target.value)}><option>Desktop</option><option>Mobile</option></select></label>
    <label>Time period<select value={date} onChange={(event) => setDate(event.target.value)}><option>Sep 29, 2026</option><option>Aug 29, 2026</option></select></label>
    <span className={styles.currency}>USD</span>
  </section>;
}

function MetricCards({ loading = false }: { loading?: boolean }) {
  const metrics = [
    ['Authority Score', '28'], ['Organic Traffic', '1.2K'], ['Paid Traffic', '0'], ['Ref. Domains', '84'],
    ['Traffic Share', '11%'], ['Organic Keywords', '312'], ['Paid Keywords', '0'], ['Backlinks', '1.9K'],
  ];
  return <section className={styles.metricGrid} aria-label="Domain summary">
    {metrics.map(([label, value]) => <article key={label}><small>{label}</small>{loading ? <span className={styles.skeleton} aria-label="Loading" /> : <strong>{value}</strong>}</article>)}
  </section>;
}

function TrendControls({ loading = false }: { loading?: boolean }) {
  const [range, setRange] = useState('2Y');
  const [aggregation, setAggregation] = useState('Days');
  const [series, setSeries] = useState(() => new Set(['Organic Traffic', 'Paid Traffic', 'Branded Traffic']));
  const toggleSeries = (item: string) => setSeries((current) => {
    const next = new Set(current);
    if (next.has(item)) next.delete(item); else next.add(item);
    return next;
  });
  return <section className={styles.trendCard}>
    <div className={styles.trendToolbar}>
      <div className={styles.flatTabs} role="tablist" aria-label="Time period">{ranges.map((item) => <button key={item} role="tab" aria-selected={range === item} onClick={() => setRange(item)}>{item}</button>)}</div>
      <div className={styles.flatTabs} role="radiogroup" aria-label="Aggregation">{['Days', 'Months'].map((item) => <button key={item} role="radio" aria-checked={aggregation === item} onClick={() => setAggregation(item)}>{item}</button>)}</div>
      <button className={`${styles.button} ${styles.secondary}`} onClick={() => undefined}>⇧ Export</button>
    </div>
    <h3>Traffic</h3>
    <div className={styles.legendChecks}>{['Organic Traffic', 'Paid Traffic', 'Branded Traffic'].map((item) => <label key={item}><input type="checkbox" checked={series.has(item)} onChange={() => toggleSeries(item)} />{item}</label>)}</div>
    {loading ? <div className={styles.chartSkeleton} aria-label="Loading chart" /> : <div className={styles.syntheticChart} role="img" aria-label={`${range} ${aggregation} synthetic traffic trend`}><span /><span /><span /></div>}
  </section>;
}

function EntryScreen() {
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('No provider request sent.');
  return <section className={styles.domainWorkspace}>
    <nav className={styles.breadcrumbs}>Home <span>›</span> SEO <span>›</span> Domain Overview</nav>
    <h2>Domain Overview</h2>
    <p>Get instant insights into strengths and weaknesses of your competitor or prospective customer.</p>
    <div className={styles.entryForm}>
      <input aria-label="Enter domain, subdomain or URL" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Enter domain, subdomain or URL" />
      <select aria-label="Select country"><option>Worldwide</option><option>United States</option></select>
      <button className={`${styles.button} ${styles.primary}`} disabled={!query} onClick={() => setNotice('Search is guarded in this local fixture.')}>Search</button>
    </div>
    <div className={styles.lastChecked}><span>Last checked:</span><button onClick={() => setQuery('northstar.example')}>Analyze northstar.example</button></div>
    <div className={styles.status} role="status">{notice}</div>
    <div className={styles.benefitGrid}>{['Complete analysis', 'Compare domains', 'Growth report', 'Compare by countries'].map((title) => <article key={title}><strong>{title}</strong><small>Reusable explanatory content card.</small></article>)}</div>
  </section>;
}

function ReportScreen({ loading = false }: { loading?: boolean }) {
  const [tab, setTab] = useState('Overview');
  return <section className={styles.domainWorkspace}>
    <QueryBar />
    <nav className={styles.breadcrumbs}>Home <span>›</span> SEO <span>›</span> Domain Overview</nav>
    <div className={styles.reportTitle}><h2>Domain Overview: northstar.example</h2><button className={`${styles.button} ${styles.secondary}`} onClick={() => undefined}>⇧ Export to PDF</button></div>
    <ReportFilters />
    <div className={styles.tabs} role="tablist">{['Overview', 'Growth report', 'Compare by countries'].map((item) => <button className={styles.tab} key={item} role="tab" aria-selected={tab === item} onClick={() => setTab(item)}>{item}</button>)}</div>
    {tab === 'Overview' ? <><MetricCards loading={loading} /><div className={styles.reportColumns}><article className={styles.tableCard}><h3>Distribution by Country</h3><div className={styles.dataRows}>{['Worldwide', 'US', 'CA', 'UK'].map((item) => <div key={item}><span>{item}</span><strong>{loading ? '…' : '0'}</strong><a href="#mentions">{loading ? '…' : '0 mentions'}</a></div>)}</div></article><TrendControls loading={loading} /></div></> : <UpgradeGate />}
  </section>;
}

function UpgradeGate() {
  const [notice, setNotice] = useState('Upgrade was not opened.');
  return <section className={styles.upgradeGate}>
    <div className={styles.upgradeArt} aria-hidden="true">▥</div>
    <h2>Get more with Guru plan</h2>
    <p>Please switch to the Guru plan to open new possibilities and features.</p>
    <div className={styles.upgradeBenefits}><span>▥ <strong>5K reports per day</strong></span><span>▤ <strong>Historical data</strong></span></div>
    <button className={`${styles.button} ${styles.upgradeButton}`} onClick={() => setNotice('Upgrade action is guarded locally · needs verification.')}>Upgrade to Guru</button>
    <div className={styles.status} role="status">{notice}</div>
  </section>;
}

function RecoveryState() {
  const [state, setState] = useState<'error' | 'loading' | 'ready'>('error');
  const content = useMemo(() => state === 'error' ? 'Something went wrong' : state === 'loading' ? 'Reloading report…' : 'Report restored locally', [state]);
  return <section className={styles.recoveryState}>
    <div className={styles.recoveryIcon} aria-hidden="true">⚠</div>
    <h2>{content}</h2>
    {state === 'error' && <p>Try to reload. If the problem persists, contact support.</p>}
    {state === 'loading' && <div className={styles.chartSkeleton} aria-label="Loading report" />}
    {state === 'ready' && <p>This ready state is synthetic and local only.</p>}
    <button className={`${styles.button} ${styles.secondary}`} onClick={() => { setState('loading'); queueMicrotask(() => setState('ready')); }}>↻ Try again</button>
  </section>;
}

export function SemrushDomainOverviewBatch({ specimen, loading = false, error = false }: SemrushDomainOverviewBatchProps) {
  if (specimen === 'entry') return <div className={styles.stage}><EntryScreen /></div>;
  if (specimen === 'query-bar') return <div className={styles.stage}><QueryBar standalone /></div>;
  if (specimen === 'scope-selector') return <div className={styles.stage}><div className={styles.domainQueryCard}><QueryBar /><p className={styles.guardedNote}>Open the scope control to inspect Root Domain, Exact URL, Subdomain, and Subfolder. Analyze stays guarded.</p></div></div>;
  if (specimen === 'report') return <div className={styles.stage}>{error ? <RecoveryState /> : <ReportScreen loading={loading} />}</div>;
  if (specimen === 'filter-cluster') return <div className={styles.stage}><div className={styles.card}><h3>Domain Overview filters</h3><ReportFilters /></div></div>;
  if (specimen === 'trend-controls') return <div className={styles.stage}><TrendControls loading={loading} /></div>;
  if (specimen === 'upgrade-gate') return <div className={styles.stage}><UpgradeGate /></div>;
  return <div className={styles.stage}><RecoveryState /></div>;
}

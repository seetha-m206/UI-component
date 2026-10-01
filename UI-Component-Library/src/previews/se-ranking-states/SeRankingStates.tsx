import { useState } from 'react';
import styles from './se-ranking-states.module.css';

export type MetricsState = 'observed' | 'settings-open' | 'loading' | 'unavailable';

export function SeRankingKeyMetricsStrip({ initialState = 'observed' }: { initialState?: MetricsState }) {
  const metrics = [
    ['AI Presence', '0.06%'],
    ['Organic Traffic', '12'],
    ['Organic Keywords', '517'],
    ['Referring Domains', '82'],
    ['Search Visibility', '—'],
  ];
  return (
    <section className={styles.card} aria-label="Key metrics">
      <header><h2>Key metrics</h2><button type="button" aria-label="Metric settings">⚙</button></header>
      <div className={styles.metrics}>
        {metrics.map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            {initialState === 'loading' ? <i className={styles.skeleton} aria-label={`${label} loading`} /> : <strong>{initialState === 'unavailable' ? '—' : value}</strong>}
            {label === 'Search Visibility' && initialState === 'observed' && <small>Add keywords</small>}
          </article>
        ))}
      </div>
      {initialState === 'settings-open' && (
        <div className={styles.metricSettings} role="menu" aria-label="Metric settings options">
          {['AI Presence', 'Organic traffic', 'Organic keywords', 'Referring Domains', 'Search Visibility'].map((label) => <label key={label}><input type="checkbox" defaultChecked />{label}</label>)}
          {['Health Score', 'Backlinks'].map((label) => <label key={label}><input type="checkbox" />{label}</label>)}
        </div>
      )}
      {initialState === 'unavailable' && <p className={styles.note}>Synthetic unavailable specimen · needs verification.</p>}
    </section>
  );
}

export type EngineState = 'observed' | 'detail-open' | 'no-data';

export function SeRankingAiEngineCards({ initialState = 'observed' }: { initialState?: EngineState }) {
  const engines = ['AI Overview', 'AI Mode', 'ChatGPT', 'Gemini', 'Perplexity'];
  const [selected, setSelected] = useState(initialState === 'detail-open' ? 'AI Overview' : '');
  return (
    <section className={styles.card} aria-label="AI engine presence">
      <header><div><h2>Competitive Research · AI Search</h2><p>Presence across answer engines</p></div></header>
      <div className={styles.engines}>
        {engines.map((engine, index) => {
          const hasCitation = initialState !== 'no-data' && index === 0;
          return (
            <button type="button" key={engine} aria-pressed={selected === engine} onClick={() => setSelected(engine)}>
              <strong>{engine}</strong>
              <span>0 mentions</span>
              <small>{hasCitation ? '4 link-presence citations' : '0 link presence'}</small>
            </button>
          );
        })}
      </div>
      {selected && <div className={styles.aiDetail}><strong>Overall Presence 0.06%</strong><span>Mention Presence 0%</span><span>Link Presence 0.06%</span><span>Citations 4</span><small>Observed destination: AI Search Overview</small></div>}
      <p className={styles.note} role="status">{selected ? `${selected} drill-down screen observed in a new tab.` : 'Select an engine to inspect the observed drill-down state.'}</p>
    </section>
  );
}

export function SeRankingRankingsEmptyState({ disabled = false }: { disabled?: boolean }) {
  const [status, setStatus] = useState('');
  return (
    <section className={`${styles.card} ${styles.empty}`} aria-label="Rankings empty state">
      <div className={styles.emptyIcon} aria-hidden="true">⌁</div>
      <h2>No tracked keywords</h2>
      <p>Add keywords to start monitoring rankings.</p>
      <button type="button" disabled={disabled} onClick={() => setStatus('Add keywords is guarded locally. No project change was sent.')}>Add keywords</button>
      <p className={styles.note} role="status">{status || 'Local fixture. Provider navigation is disabled.'}</p>
    </section>
  );
}

export function SeRankingAnnouncementBanner({ initiallyOpen = true }: { initiallyOpen?: boolean }) {
  const [open, setOpen] = useState(initiallyOpen);
  const [status, setStatus] = useState('');
  if (!open) return <button type="button" className={styles.restore} onClick={() => setOpen(true)}>Restore announcement fixture</button>;
  return (
    <section className={styles.banner} aria-label="Workshop announcement">
      <strong>Where does your brand sit in AI answers? Workshop, Oct 6.</strong>
      <span>A live look inside SE Visible: how brands track their presence in AI answers.</span>
      <button type="button" onClick={() => setStatus('Register is guarded locally. No registration request was sent.')}>Register</button>
      <button type="button" aria-label="Close banner" onClick={() => setOpen(false)}>×</button>
      <p role="status">{status}</p>
    </section>
  );
}

const featurePages = [
  [
    ['Difficulty score', 'Estimate how difficult it is to rank at the top of Google.'],
    ['Search volume', 'Review average monthly organic searches.'],
  ],
  [
    ['CPC and paid competition', 'Review paid-search click price and competition.'],
    ['Global Volume', 'Compare monthly searches across available regions.'],
  ],
];

export function SeRankingFeatureCarousel({ initialPage = 0 }: { initialPage?: number }) {
  const [page, setPage] = useState(Math.max(0, Math.min(1, initialPage)));
  return (
    <section className={styles.card} aria-label="Keyword parameter carousel">
      <header><h2>Investigate keyword parameters down to the core</h2></header>
      <div className={styles.featureGrid}>
        {featurePages[page].map(([title, description]) => <article key={title}><div aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}
      </div>
      <footer className={styles.carouselControls}>
        <button type="button" aria-label="Previous feature page" disabled={page === 0} onClick={() => setPage(0)}>‹</button>
        <span>{page + 1}–{page + 2} of 4</span>
        <button type="button" aria-label="Next feature page" disabled={page === 1} onClick={() => setPage(1)}>›</button>
      </footer>
    </section>
  );
}

export type SetupAction = 'AI tracking' | 'Analytics' | 'Keywords';

export type SetupState = 'actions' | 'ai-setup' | 'analytics-options';
export function SeRankingSetupActions({ disabled = false, initialState = 'actions' }: { disabled?: boolean; initialState?: SetupState }) {
  const [status, setStatus] = useState('');
  const actions: Array<[SetupAction, string, string]> = [
    ['AI tracking', 'Track brand visibility across answer engines', 'Set up AI tracking'],
    ['Analytics', 'Connect traffic data to the project overview', 'Connect analytics'],
    ['Keywords', 'Add tracked search terms to Rankings', 'Add keywords'],
  ];
  if (initialState === 'ai-setup') return <section className={styles.setupScreen} aria-label="AI search engine setup"><header><div><strong>centilio.com</strong><span>Settings</span></div><button type="button">Back to project</button></header><h2>Set up search engines</h2><p>Track website and brand rankings on classic and AI search engines.</p><div className={styles.engineTabs}>{['Google', 'Google AI Overviews', 'Google AI Mode', 'ChatGPT'].map(label => <button type="button" key={label}>{label}</button>)}</div><dl><dt>Country</dt><dd>Canada</dd><dt>Location</dt><dd>Choose location · Optional</dd><dt>Google interface language</dt><dd>English</dd><dt>Brand name</dt><dd>Shared across all search engines</dd></dl><p>99 more search engines available to add</p><table><thead><tr><th>Search engine (1)</th><th>Location</th><th>Language</th></tr></thead><tbody><tr><td>Google India</td><td>India</td><td>EN</td></tr></tbody></table></section>;
  return (
    <section className={styles.setupGrid} aria-label="Setup actions">
      {actions.map(([name, description, label]) => (
        <article key={name}><span aria-hidden="true">＋</span><div><h2>{name}</h2><p>{description}</p></div><button type="button" disabled={disabled} onClick={() => setStatus(`${name} is guarded locally. No provider setup was started.`)}>{label}</button></article>
      ))}
      {initialState === 'analytics-options' && <div className={styles.analyticsOptions}><strong>Analytics and statistics services</strong><p>Connect services to get detailed website information.</p>{['Connect Google Analytics', 'Connect Google Search Console', 'Connect Matomo Analytics'].map(label => <button type="button" key={label}>{label}</button>)}</div>}
      <p className={styles.note} role="status">{status || 'Local actions. No provider setup is submitted.'}</p>
    </section>
  );
}

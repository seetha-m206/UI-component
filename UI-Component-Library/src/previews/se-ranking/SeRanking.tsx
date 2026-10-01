import { useState } from 'react';
import styles from './se-ranking.module.css';

export type SeRankingView = 'shell' | 'overview' | 'keyword' | 'query' | 'survey' | 'toast';
export type SeRankingState =
  | 'default'
  | 'dropdown-open'
  | 'account-open'
  | 'survey-open'
  | 'toast-open'
  | 'loading'
  | 'empty'
  | 'disabled';

export interface SeRankingProps {
  view?: SeRankingView;
  initialState?: SeRankingState;
  disabled?: boolean;
  surveyInitiallyOpen?: boolean;
  toastInitiallyOpen?: boolean;
}

const railItems = [
  ['⌂', 'Projects'],
  ['▣', 'Research'],
  ['↗', 'Backlinks'],
  ['✓', 'Audit'],
  ['✦', 'AI Search'],
  ['✎', 'Content Marketing'],
  ['◎', 'Local Marketing'],
  ['◔', 'Report Builder'],
  ['▦', 'Agency Pack'],
  ['⌘', 'API'],
  ['♧', 'SMM'],
];

const topItems = [
  'Rankings',
  'Website Audit (Projects)',
  'Competitive Research',
  'Keyword Research',
];
const locations = ['Canada', 'United States of America', 'United Kingdom of Great Britain and Northern Ireland', 'Germany', 'India'];

function AppChrome({ active = 'Research', accountOpen = false }: { active?: string; accountOpen?: boolean }) {
  return (
    <>
      <aside className={styles.rail} aria-label="SE Ranking product navigation">
        <div className={styles.logo} aria-hidden="true">
          ϟ
        </div>
        {railItems.map(([icon, label]) => (
          <button
            key={label}
            type="button"
            className={label === active ? styles.activeRail : undefined}
          >
            <span aria-hidden="true">{icon}</span>
            {label}
            {label === 'AI Search' && <small>New</small>}
          </button>
        ))}
      </aside>
      <header className={styles.topbar}>
        <span className={styles.appGrid} aria-hidden="true">
          ⠿
        </span>
        {topItems.map((item) => (
          <button
            key={item}
            type="button"
            className={item === 'Keyword Research' ? styles.activeTop : undefined}
          >
            {item}
          </button>
        ))}
        <span className={styles.topSpacer} />
        <button type="button" aria-label="Help">
          ?
        </button>
        <button type="button" aria-label="Notifications">
          ●
        </button>
        <button type="button" aria-label="Account menu" aria-expanded={accountOpen}>
          SL
        </button>
        {accountOpen && (
          <div className={styles.accountMenu} role="menu" aria-label="Account menu options">
            <strong>Seetha Lakshmi</strong>
            {['Settings', 'Users', 'White Label', 'Billing', 'Bonus Offers', 'Affiliate Program', 'Log Out'].map((item) => (
              <button key={item} type="button" role="menuitem">{item}</button>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

function PromoBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className={styles.promo} role="region" aria-label="Workshop announcement">
      <strong>Where does your brand sit in AI answers? Workshop, Oct 6.</strong>
      <span>A live look inside SE Visible: how brands track their presence in AI answers.</span>
      <button type="button" onClick={() => setVisible(false)}>
        Register
      </button>
      <button type="button" aria-label="Close banner" onClick={() => setVisible(false)}>
        ×
      </button>
    </div>
  );
}

function KeywordQueryBar({
  initialState = 'default',
  disabled = false,
}: Pick<SeRankingProps, 'initialState' | 'disabled'>) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(initialState === 'dropdown-open');
  const [status, setStatus] = useState('');
  const blocked = disabled || initialState === 'disabled';

  return (
    <div className={styles.queryWrap}>
      <div className={styles.queryBar}>
        <label className={styles.srOnly} htmlFor="se-ranking-keywords">
          Keywords
        </label>
        <input
          id="se-ranking-keywords"
          value={query}
          disabled={blocked}
          placeholder="Enter keywords or drop a TXT/CSV file"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          type="button"
          className={styles.location}
          aria-expanded={open}
          disabled={blocked}
          onClick={() => setOpen((value) => !value)}
        >
          India <span aria-hidden="true">▾</span>
        </button>
        <button
          type="button"
          className={styles.analyze}
          disabled={blocked || query.trim().length === 0}
          onClick={() => setStatus('Analyze is guarded locally. No SE Ranking request was sent.')}
        >
          ⌕ Analyze
        </button>
      </div>
      {open && (
        <div className={styles.locationMenu} role="listbox" aria-label="Keyword database">
          <p>Observed searchable country database · India selected</p>
          {locations.map((location) => (
            <button
              role="option"
              aria-selected={location === 'India'}
              type="button"
              key={location}
              onClick={() => {
                setOpen(false);
                setStatus(`${location} selected in the local evidence fixture.`);
              }}
            >
              {location}
            </button>
          ))}
        </div>
      )}
      <p className={styles.status} role="status">
        {status || 'Local reconstruction. Files and keyword queries are never submitted.'}
      </p>
    </div>
  );
}

function FeatureCard({ title, children }: { title: string; children: string }) {
  return (
    <article className={styles.featureCard}>
      <div className={styles.featureThumb} aria-hidden="true">
        <span />
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function KeywordScreen({ state, disabled }: { state: SeRankingState; disabled: boolean }) {
  return (
    <main className={styles.keywordPage}>
      <section className={styles.heroCard}>
        <h1>Keyword Research</h1>
        <p>Find the most profitable keywords to rank for</p>
        <KeywordQueryBar initialState={state} disabled={disabled} />
      </section>
      <section className={styles.featureSection}>
        <h2>Investigate keyword parameters down to the core</h2>
        <div className={styles.featureGrid}>
          <FeatureCard title="Difficulty score">
            See how difficult it will be to rank a web page at the top of Google for a specific
            keyword.
          </FeatureCard>
          <FeatureCard title="Search volume">
            Find out how many monthly organic searches the selected keyword gets on Google.
          </FeatureCard>
          <FeatureCard title="CPC and paid competition">
            Discover the average price of a click for a pay-per-click campaign.
          </FeatureCard>
          <FeatureCard title="Global Volume">
            See average monthly searches across regions available on the platform.
          </FeatureCard>
        </div>
        <div className={styles.carouselMeta}>
          <button type="button">‹</button>
          <span>1–2 of 4</span>
          <button type="button">›</button>
        </div>
      </section>
      <section className={styles.featureSection}>
        <h2>Get the most out of keywords with our platform</h2>
        <div className={styles.featureGrid}>
          <FeatureCard title="Bulk keyword analysis">
            Analyze large keyword lists in one workspace.
          </FeatureCard>
          <FeatureCard title="Keyword Manager">
            Save lists for regions and monitor metric changes.
          </FeatureCard>
          <FeatureCard title="Expand Database">
            Add keyword ideas to the research database.
          </FeatureCard>
          <FeatureCard title="Historical Data">
            Review earlier research reports and trends.
          </FeatureCard>
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <article className={styles.metric}>
      <span>{label}</span>
      <strong>{value}</strong>
      {note && <small>{note}</small>}
    </article>
  );
}

function OverviewScreen({ state }: { state: SeRankingState }) {
  return (
    <main className={styles.overviewPage}>
      <div className={styles.breadcrumb}>
        centilio.com <span>›</span> Project Overview
      </div>
      <div className={styles.pageTitle}>
        <div>
          <h1>Overview</h1>
          <p>centilio.com</p>
        </div>
        <button type="button">Widgets ▾</button>
      </div>
      <section className={styles.widget}>
        <header>
          <h2>Key metrics</h2>
          <button type="button" aria-label="Metric settings">
            ⚙
          </button>
        </header>
        <div className={styles.metricGrid}>
          <Metric label="AI Presence" value="0.06%" />
          <Metric label="Organic Traffic" value="5" />
          <Metric label="Organic Keywords" value="516" />
          <Metric label="Referring Domains" value="82" />
          <Metric label="Search Visibility" value="—" note="Add keywords" />
        </div>
      </section>
      <section className={styles.widget}>
        <header>
          <div>
            <h2>Competitive Research · AI Search</h2>
            <p>Presence across answer engines</p>
          </div>
          <button type="button">Set up AI tracking</button>
        </header>
        <div className={styles.engineGrid}>
          {['AI Overview', 'AI Mode', 'ChatGPT', 'Gemini', 'Perplexity'].map((name, index) => (
            <article key={name}>
              <strong>{name}</strong>
              <span>{index === 0 ? '1 mention' : '0 mentions'}</span>
              <small>{index === 0 ? 'Link presence observed' : 'No data yet'}</small>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.widgetColumns}>
        <section className={styles.widget}>
          <header>
            <h2>Rankings</h2>
            <button type="button">Google · Last 7 days ▾</button>
          </header>
          <div className={styles.empty}>
            <strong>No tracked keywords</strong>
            <p>Add keywords to start monitoring rankings.</p>
            <button type="button">Add keywords</button>
          </div>
        </section>
        <section className={styles.widget}>
          <header>
            <h2>Website Audit</h2>
          </header>
          {state === 'loading' ? (
            <div className={styles.loading}>
              <span />
              <span />
              <span />
              Loading audit data
            </div>
          ) : (
            <div className={styles.auditScore}>
              <strong>80</strong>
              <span>Health Score</span>
              <button type="button">Review issues</button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function SurveyDialog({ initiallyOpen = true }: { initiallyOpen?: boolean }) {
  const [open, setOpen] = useState(initiallyOpen);
  const [selected, setSelected] = useState('');
  const [status, setStatus] = useState('');
  if (!open)
    return (
      <button type="button" onClick={() => setOpen(true)}>
        Open survey specimen
      </button>
    );
  return (
    <div className={styles.scrim}>
      <section
        className={styles.survey}
        role="dialog"
        aria-modal="true"
        aria-labelledby="survey-title"
      >
        <header>
          <h2 id="survey-title">How did you hear about us?</h2>
          <button type="button" aria-label="Close survey" onClick={() => setOpen(false)}>
            ×
          </button>
        </header>
        <div className={styles.options}>
          {[
            'Organic search (Google, Bing)',
            'AI search (ChatGPT, AI Mode etc.)',
            'Social media (LinkedIn, YouTube etc.)',
            'Paid ad (Google ad, Social ad, etc.)',
            'Friends or colleagues',
            'Article or blog post',
            'Planable',
            'SE Ranking webinar or podcast',
            'Influencer',
            'Conference or meetup',
            'Other',
          ].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="survey"
                checked={selected === option}
                onChange={() => setSelected(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <footer>
          <button
            type="button"
            onClick={() => setStatus('Skip is guarded locally. No survey response was sent.')}
          >
            Skip
          </button>
          <button
            type="button"
            disabled={!selected}
            onClick={() => setStatus('Complete is guarded locally. No survey response was sent.')}
          >
            Complete
          </button>
        </footer>
        <p role="status" className={styles.status}>
          {status || 'Local specimen. Submission is disabled.'}
        </p>
      </section>
    </div>
  );
}

function AuditToast({ initiallyOpen = true }: { initiallyOpen?: boolean }) {
  const [open, setOpen] = useState(initiallyOpen);
  if (!open)
    return (
      <button type="button" onClick={() => setOpen(true)}>
        Show audit notification
      </button>
    );
  return (
    <aside className={styles.toast} aria-label="Audit completed notification">
      <button type="button" aria-label="Close notification" onClick={() => setOpen(false)}>
        ×
      </button>
      <strong>Audit Completed!</strong>
      <p>
        Check your initial audit results for <b>centilio.com</b>. Health Score: <b>80</b>.
      </p>
      <button type="button" onClick={() => undefined}>
        Review and plan improvements
      </button>
    </aside>
  );
}

export function SeRanking({
  view = 'keyword',
  initialState = 'default',
  disabled = false,
  surveyInitiallyOpen = true,
  toastInitiallyOpen = true,
}: SeRankingProps) {
  if (view === 'query')
    return (
      <div className={styles.isolated}>
        <KeywordQueryBar initialState={initialState} disabled={disabled} />
      </div>
    );
  if (view === 'survey') {
    return (
      <div className={styles.isolated}>
        <SurveyDialog initiallyOpen={surveyInitiallyOpen} />
      </div>
    );
  }
  if (view === 'toast')
    return (
      <div className={styles.isolated}>
        <AuditToast initiallyOpen={toastInitiallyOpen} />
      </div>
    );

  return (
    <div className={styles.stage}>
      <PromoBanner />
      <AppChrome active={view === 'overview' ? 'Projects' : 'Research'} accountOpen={initialState === 'account-open'} />
      <div className={styles.content}>
        {view === 'overview' ? (
          <OverviewScreen state={initialState} />
        ) : view === 'shell' ? (
          <div className={styles.shellBlank}>
            <h1>Application workspace</h1>
            <p>
              Representative authenticated shell with top product navigation and the persistent left
              rail.
            </p>
          </div>
        ) : (
          <KeywordScreen state={initialState} disabled={disabled} />
        )}
      </div>
      {initialState === 'survey-open' && <SurveyDialog />}
      {initialState === 'toast-open' && <AuditToast />}
    </div>
  );
}

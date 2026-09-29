import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import styles from '../semrush-shared.module.css';

export type SiteAuditProjectsState =
  | 'default'
  | 'searching'
  | 'no-results'
  | 'sort-toggled'
  | 'row-actions'
  | 'crawl-limit'
  | 'create-modal'
  | 'page-size-menu';

export interface SemrushSiteAuditProjectsProps {
  initialState?: SiteAuditProjectsState;
  disabled?: boolean;
}

type Project = {
  domain: string;
  updated: string;
  age: number;
  pages: string;
  pageLimit?: boolean;
  siteHealth: number;
  aiHealth: number;
  errors: number;
  warnings: number;
  crawlability: number;
  https: number;
  international?: number;
};

const projects: Project[] = [
  {
    domain: 'northstar.example',
    updated: '4h ago',
    age: 4,
    pages: '142 / 20,000',
    siteHealth: 94,
    aiHealth: 88,
    errors: 1,
    warnings: 7,
    crawlability: 99,
    https: 100,
  },
  {
    domain: 'harbor.example',
    updated: '18w ago',
    age: 3024,
    pages: '5,000 / 5,000',
    pageLimit: true,
    siteHealth: 68,
    aiHealth: 61,
    errors: 184,
    warnings: 526,
    crawlability: 72,
    https: 96,
    international: 91,
  },
];

const auditSettings = [
  'Scope: harbor.example',
  'Subdomains included: yes',
  'Pages to crawl: website',
  'Google Analytics: not connected',
  'Page limit: 5,000',
  'User agent: SiteAuditBot (Mobile)',
  'Crawl-delay: minimum',
  'JS rendering: disabled',
  'Allow/disallow rules',
  'Parameters to ignore: 0',
  'Bypass rules: no',
  'Crawl with credentials: no',
  'Crawl with Web Bot Auth signature: no',
  'Exclude checks',
  'Schedule: once',
];

const scoreTone = (score: number) => {
  if (score >= 90) return styles.auditScoreGood;
  if (score >= 70) return styles.auditScoreWarn;
  return styles.auditScoreBad;
};

export function SemrushSiteAuditProjects({
  initialState = 'default',
  disabled = false,
}: SemrushSiteAuditProjectsProps) {
  const seededQuery = initialState === 'searching' ? 'northstar' : initialState === 'no-results' ? 'no-match-example.invalid' : '';
  const [query, setQuery] = useState(seededQuery);
  const [sortOldestFirst, setSortOldestFirst] = useState(initialState === 'sort-toggled');
  const [openState, setOpenState] = useState<SiteAuditProjectsState>(initialState);
  const [pageSize, setPageSize] = useState(10);
  const [domain, setDomain] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const visibleProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const matches = projects.filter((project) => project.domain.includes(normalized));
    return [...matches].sort((a, b) => sortOldestFirst ? b.age - a.age : a.age - b.age);
  }, [query, sortOldestFirst]);

  const toggle = (state: SiteAuditProjectsState) => {
    if (disabled) return;
    setOpenState((current) => current === state ? 'default' : state);
  };

  const guardCreate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('No SEO project was created. This reconstruction keeps the submission local.');
  };

  const metricLink = (label: string, value: number) => (
    <button
      className={`${styles.auditMetricLink} ${scoreTone(value)}`}
      type="button"
      disabled={disabled}
      onClick={() => setStatus(`${label} details were not opened in this reconstruction.`)}
    >
      <strong>{value}%</strong><small>0%</small>
    </button>
  );

  return (
    <div className={styles.root}>
      <div className={styles.auditShell}>
        <header className={styles.auditTopbar}>
          <button type="button" aria-label="Open product navigation" disabled={disabled}>☰</button>
          <label>
            <span className={styles.srOnly}>Go to tool</span>
            <input placeholder="Go to tool…" disabled={disabled} />
          </label>
          <nav aria-label="Account navigation"><span>Invite users</span><span>Pricing</span><span>Enterprise</span><span>More⌄</span></nav>
        </header>
        <aside className={styles.auditRail} aria-label="Primary products">
          {['Home', 'SEO', 'AI', 'Traffic & Market', 'Local', 'Content', 'Ad', 'AI PR', 'Social', 'Reports', 'Apps'].map((item) => (
            <span className={item === 'AI' ? styles.auditRailActive : ''} key={item}>{item}</span>
          ))}
        </aside>
        <aside className={styles.auditSidebar} aria-label="AI Visibility navigation">
          <strong>AI Visibility</strong>
          <span className={styles.auditGroup}>AI Analysis</span>
          <span>Visibility Overview</span><span>Competitor Research</span><span>Prompt Research</span>
          <span className={styles.auditGroup}>Brand Performance</span>
          <span>Brand Performance</span><span>Perception</span><span>Narrative Drivers</span><span>Questions</span>
          <span className={styles.auditGroup}>Boost & Monitor</span>
          <span className={styles.auditNavActive}>Site Audit</span><span>Prompt Tracking</span><span>Content Creation</span>
        </aside>

        <main className={styles.auditMain}>
          <div className={styles.auditBreadcrumbs}>Home <span>›</span> SEO <span>›</span> Site Audit</div>
          <div className={styles.auditTitleRow}><h2>Site Audit</h2><button className={styles.inlineLink} type="button" disabled={disabled} onClick={() => setStatus('Feedback email was not opened.')}>Send feedback</button></div>

          <section className={styles.auditCard} aria-label="Projects list">
            <div className={styles.auditToolbar}>
              <label className={styles.auditSearch}>
                <span className={styles.srOnly}>Project name or domain</span>
                <span aria-hidden="true">⌕</span>
                <input
                  value={query}
                  placeholder="Project name or domain"
                  disabled={disabled}
                  onChange={(event) => setQuery(event.target.value)}
                />
                {query && <button type="button" aria-label="Clear input" disabled={disabled} onClick={() => setQuery('')}>×</button>}
              </label>
              <button className={styles.auditCreate} type="button" disabled={disabled} onClick={() => setOpenState('create-modal')}>＋ Create SEO project</button>
            </div>

            <div className={styles.auditTableScroller}>
              <div className={styles.auditGrid} role="grid" aria-label="Site Audit projects">
                <div className={styles.auditHeader} role="row">
                  <span role="columnheader">Project</span>
                  <span role="columnheader">Last Update <button type="button" aria-label={sortOldestFirst ? 'descending' : 'ascending'} disabled={disabled} onClick={() => setSortOldestFirst((value) => !value)}>{sortOldestFirst ? '≡' : '≡'}</button></span>
                  <span role="columnheader">Pages Crawled</span><span role="columnheader">Site Health</span><span role="columnheader">AI Search Health</span>
                  <span role="columnheader">Errors</span><span role="columnheader">Warnings</span><span role="columnheader">Crawlability</span><span role="columnheader">HTTPS</span><span role="columnheader">Int. SEO</span>
                </div>

                {visibleProjects.map((project) => (
                  <div className={styles.auditRow} role="row" key={project.domain}>
                    <div role="gridcell" className={styles.auditProjectCell}>
                      <button type="button" disabled={disabled} onClick={() => setStatus('Project navigation was not run in this reconstruction.')}>{project.domain}</button>
                      <small>{project.domain}</small>
                      <button type="button" aria-label={`Open settings for ${project.domain} project`} aria-expanded={openState === 'row-actions' && project.pageLimit === true} disabled={disabled} onClick={() => project.pageLimit && toggle('row-actions')}>⚙</button>
                      {openState === 'row-actions' && project.pageLimit && (
                        <section className={styles.auditActionMenu} role="dialog" aria-label={`Open settings for ${project.domain} project`}>
                          <button type="button" disabled onClick={() => undefined}>↻ Rerun campaign <small>needs verification</small></button>
                          <button type="button" disabled>■ Stop and save results</button>
                          <button type="button" disabled>× Cancel crawling</button>
                          <strong>Audit settings</strong>
                          <div className={styles.auditSettingsList}>{auditSettings.map((setting) => <span key={setting}>{setting}</span>)}</div>
                          <label><input type="checkbox" checked disabled /> Send an email once an audit is complete</label>
                        </section>
                      )}
                    </div>
                    <span role="gridcell">{project.updated}</span>
                    <div role="gridcell" className={styles.auditPagesCell}>
                      {project.pageLimit && <button type="button" aria-label="Pages crawled issue" disabled={disabled} onClick={() => toggle('crawl-limit')}>⚠</button>}
                      {project.pages}
                    </div>
                    <div role="gridcell">{metricLink('Site Health', project.siteHealth)}</div>
                    <div role="gridcell">{metricLink('AI Search Health', project.aiHealth)}</div>
                    <button role="gridcell" type="button" className={styles.auditCount} disabled={disabled} onClick={() => setStatus('Error details were not opened.')}>{project.errors}<small>0</small></button>
                    <button role="gridcell" type="button" className={styles.auditCount} disabled={disabled} onClick={() => setStatus('Warning details were not opened.')}>{project.warnings}<small>0</small></button>
                    <div role="gridcell">{metricLink('Crawlability', project.crawlability)}</div>
                    <div role="gridcell">{metricLink('HTTPS', project.https)}</div>
                    <div role="gridcell">{project.international ? metricLink('International SEO', project.international) : <span className={styles.auditNotImplemented}>Not implemented</span>}</div>
                  </div>
                ))}

                {visibleProjects.length === 0 && (
                  <div className={styles.auditEmpty} role="status">
                    <span aria-hidden="true">⌕</span>
                    <strong>Nothing found</strong>
                    <p>Your search “{query}” did not match any projects.</p>
                    <p>Search by the project domain or try another name.</p>
                    <button type="button" disabled={disabled} onClick={() => setQuery('')}>Show all projects</button>
                  </div>
                )}
              </div>
            </div>

            {openState === 'crawl-limit' && (
              <section className={styles.auditLimitDialog} role="dialog" aria-label="Page crawl limit">
                <div><strong>You’ve reached your page crawl limit for this audit</strong><strong>⚠ 5,000 /5,000 pages</strong></div>
                <p>You will only see results regarding these pages. To check all pages and get a full picture of website health, change the checked-page limit.</p>
                <button type="button" disabled>Change your page limit · needs verification</button>
              </section>
            )}

            <nav className={styles.auditPagination} aria-label="Pagination">
              <span>Page:</span><input aria-label="Page" value="1" disabled /><span>of 1</span>
              <button type="button" aria-haspopup="listbox" aria-expanded={openState === 'page-size-menu'} disabled={disabled} onClick={() => toggle('page-size-menu')}>{pageSize}⌄</button>
              {openState === 'page-size-menu' && <div className={styles.auditPageMenu} role="listbox" aria-label="Rows per page">{[10, 20, 50, 100].map((size) => <button role="option" aria-selected={pageSize === size} type="button" key={size} onClick={() => { setPageSize(size); setOpenState('default'); }}>{size}</button>)}</div>}
            </nav>
          </section>

          {status && openState !== 'create-modal' && <p className={styles.actionStatus} role="status">{status}</p>}
        </main>
      </div>

      {openState === 'create-modal' && (
        <div className={`${styles.drawerBackdrop} ${styles.centerBackdrop}`}>
          <form className={styles.auditCreateModal} role="dialog" aria-modal="true" aria-label="Create SEO project" onSubmit={guardCreate}>
            <div className={styles.auditTitleRow}><h3>Create SEO project</h3><button type="button" aria-label="Close" onClick={() => setOpenState('default')}>×</button></div>
            <label>Domain <span title="Enter a domain or subdomain">ⓘ</span><small>Enter a domain or subdomain. Subfolders not supported.</small><input value={domain} placeholder="domain.com" disabled={disabled} onChange={(event) => setDomain(event.target.value)} /></label>
            <label>Name <small>(optional)</small><input value={name} placeholder="Auto-generated if left blank" disabled={disabled} onChange={(event) => setName(event.target.value)} /></label>
            {status && <p role="status" className={styles.actionStatus}>{status}</p>}
            <div className={styles.actions}><button className={styles.auditCreate} type="submit" disabled={disabled}>Create SEO project</button><button type="button" disabled={disabled} onClick={() => setOpenState('default')}>Cancel</button></div>
          </form>
        </div>
      )}
    </div>
  );
}

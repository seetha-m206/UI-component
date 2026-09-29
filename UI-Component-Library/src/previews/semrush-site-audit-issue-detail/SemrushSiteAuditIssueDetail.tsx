import { useState } from 'react';
import styles from '../semrush-shared.module.css';

export type SiteAuditIssueDetailState =
  | 'default'
  | 'how-to-fix'
  | 'hidden-loading'
  | 'hidden-empty'
  | 'search-empty'
  | 'advanced-filters'
  | 'filter-two'
  | 'selected-row'
  | 'project-menu'
  | 'page-size-menu';

export interface SemrushSiteAuditIssueDetailProps {
  initialState?: SiteAuditIssueDetailState;
  disabled?: boolean;
}

type FilterCondition = { operator: 'Include' | 'Exclude'; field: 'Page URL'; value: string };

const reportTabs = ['Overview', 'Issues', 'Crawled Pages', 'Statistics', 'Compare Crawls', 'Progress', 'JS Impact'];

export function SemrushSiteAuditIssueDetail({
  initialState = 'default',
  disabled = false,
}: SemrushSiteAuditIssueDetailProps) {
  const [openState, setOpenState] = useState<SiteAuditIssueDetailState>(initialState);
  const [activeList, setActiveList] = useState<'issues' | 'hidden'>(initialState.startsWith('hidden-') ? 'hidden' : 'issues');
  const [search, setSearch] = useState(initialState === 'search-empty' ? 'no-match-example.invalid' : '');
  const [searchApplied, setSearchApplied] = useState(initialState === 'search-empty');
  const [selected, setSelected] = useState(initialState === 'selected-row');
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState<FilterCondition[]>(initialState === 'filter-two'
    ? [{ operator: 'Include', field: 'Page URL', value: '' }, { operator: 'Include', field: 'Page URL', value: '' }]
    : [{ operator: 'Include', field: 'Page URL', value: '' }]);
  const [status, setStatus] = useState('');

  const toggle = (state: SiteAuditIssueDetailState) => {
    if (disabled) return;
    setOpenState((current) => current === state ? 'default' : state);
  };

  const chooseList = (list: 'issues' | 'hidden') => {
    if (disabled) return;
    setActiveList(list);
    setSearch('');
    setSearchApplied(false);
    if (list === 'hidden') {
      setOpenState('hidden-loading');
      window.setTimeout(() => setOpenState('hidden-empty'), 250);
    } else {
      setOpenState('default');
    }
  };

  const clearSearch = () => {
    setSearch('');
    setSearchApplied(false);
    setOpenState('default');
  };

  const applySearch = () => {
    if (!search.trim()) return;
    setSearchApplied(true);
    setOpenState('search-empty');
  };

  const showGuard = (label: string) => setStatus(`${label} was not run. This reconstruction keeps the action local.`);

  const rowsVisible = activeList === 'issues' && !searchApplied;
  const hiddenLoading = activeList === 'hidden' && openState === 'hidden-loading';
  const hiddenEmpty = activeList === 'hidden' && !hiddenLoading;

  return (
    <div className={styles.root}>
      <div className={styles.auditShell}>
        <header className={styles.auditTopbar}>
          <button type="button" aria-label="Open product navigation" disabled={disabled}>☰</button>
          <label><span className={styles.srOnly}>Go to tool</span><input placeholder="Go to tool…" disabled={disabled} /></label>
          <nav aria-label="Account navigation"><span>Invite users</span><span>Pricing</span><span>Enterprise</span><span>More⌄</span></nav>
        </header>
        <aside className={styles.auditRail} aria-label="Primary products">
          {['Home', 'SEO', 'AI', 'Traffic & Market', 'Local', 'Content', 'Ad', 'AI PR', 'Social', 'Reports', 'Apps'].map((item) => <span className={item === 'AI' ? styles.auditRailActive : ''} key={item}>{item}</span>)}
        </aside>
        <aside className={styles.auditSidebar} aria-label="AI Visibility navigation">
          <strong>AI Visibility</strong><span className={styles.auditGroup}>AI Analysis</span><span>Visibility Overview</span><span>Competitor Research</span><span>Prompt Research</span>
          <span className={styles.auditGroup}>Brand Performance</span><span>Brand Performance</span><span>Perception</span><span>Narrative Drivers</span><span>Questions</span>
          <span className={styles.auditGroup}>Boost & Monitor</span><span className={styles.auditNavActive}>Site Audit</span><span>Prompt Tracking</span><span>Content Creation</span>
        </aside>

        <main className={`${styles.auditMain} ${styles.issueMain}`}>
          <section className={styles.issueHeader} aria-label="Site Audit Header">
            <div className={styles.auditBreadcrumbs}>Home <span>›</span> SEO <span>›</span> Site Audit</div>
            <div className={styles.issueUtility}><button type="button" onClick={() => showGuard('Help center')}>Help center</button><button type="button" onClick={() => showGuard('Feedback')}>Send feedback</button></div>
            <div className={styles.issueTitleRow}>
              <div className={styles.issueProjectPicker}>
                <h2>Site Audit:</h2>
                <button type="button" role="combobox" aria-label="Project: northstar.example" aria-expanded={openState === 'project-menu'} disabled={disabled} onClick={() => toggle('project-menu')}>northstar.example⌄</button>
                {openState === 'project-menu' && (
                  <div className={styles.issueProjectMenu} role="listbox" aria-label="Site Audit projects">
                    <button type="button" role="option" aria-selected="true" onClick={() => setOpenState('default')}><strong>northstar.example</strong><small>northstar.example</small></button>
                    <button type="button" role="option" aria-selected="false" onClick={() => setOpenState('default')}><strong>harbor.example</strong><small>harbor.example</small></button>
                    <button type="button" disabled>Create new SEO project · needs verification</button>
                  </div>
                )}
              </div>
              <div className={styles.issueHeaderActions}>
                <button type="button" disabled={disabled} onClick={() => showGuard('Rerun campaign')}>↻ Rerun campaign</button>
                <button type="button" disabled={disabled} onClick={() => showGuard('PDF export')}>⇧ PDF</button>
                <button type="button" disabled={disabled} onClick={() => showGuard('Spreadsheet export')}>⇧ Export</button>
                <button type="button" disabled={disabled} onClick={() => showGuard('Share')}>Share</button>
                <button type="button" disabled={disabled} onClick={() => showGuard('Settings')}>⚙</button>
              </div>
            </div>
            <div className={styles.issueMeta}><strong>northstar.example</strong><span>Updated: Sep 28, 2026</span><span>▣ Desktop</span><span>JS rendering: Disabled</span><span>Pages crawled: 142/20,000</span></div>
            <div className={styles.issueReportTabs} role="tablist" aria-label="Site Audit reports">
              {reportTabs.map((tab) => <button type="button" role="tab" aria-selected={tab === 'Issues'} disabled={disabled} key={tab} onClick={() => tab === 'Issues' ? undefined : showGuard(`${tab} report navigation`)}>{tab}</button>)}
            </div>
          </section>

          <button className={styles.issueBack} type="button" disabled={disabled} onClick={() => showGuard('All issues navigation')}>← All issues</button>

          <section className={styles.issueCard} aria-label="Issue details">
            <div className={styles.issueCardTitle}>
              <div><h3>1 page doesn’t have an h1 heading</h3><span className={styles.issueWarning}>Warning</span></div>
              <div><button type="button" disabled onClick={() => undefined}>Send to…</button><button type="button" disabled={disabled} onClick={() => showGuard('Site Structure navigation')}>Site Structure</button><button type="button" disabled>Exclude check</button></div>
            </div>
            <div className={styles.issueExplanationRow}>
              <button type="button" aria-expanded={openState === 'how-to-fix'} disabled={disabled} onClick={() => toggle('how-to-fix')}>ⓘ How to fix</button>
              <div><span>Failed: <strong>1</strong></span><span>Successful: <strong>0</strong></span><i aria-label="One failed check" /></div>
            </div>

            {openState === 'how-to-fix' && (
              <section className={styles.issueFixPopover} aria-label="How to fix this issue">
                <div><strong>About the issue</strong><p>Missing or empty h1 headings weaken page-topic structure for search engines and users.</p><p><strong>Category:</strong> Meta tags, Indexability, Content</p></div>
                <div><strong>How to fix</strong><p>Provide a concise, relevant h1 heading for each page.</p><span>Work on the project with co-workers and keep everything organized.</span><button type="button" disabled>Share · needs verification</button></div>
              </section>
            )}

            <div className={styles.issueControls}>
              <div role="tablist" aria-label="Issue visibility">
                <button type="button" role="tab" aria-selected={activeList === 'issues'} disabled={disabled} onClick={() => chooseList('issues')}>Issues <strong>1</strong></button>
                <button type="button" role="tab" aria-selected={activeList === 'hidden'} disabled={disabled} onClick={() => chooseList('hidden')}>Hidden <strong>0</strong></button>
              </div>
              <label className={styles.issueSearch}><span className={styles.srOnly}>Search</span><input value={search} placeholder="Search" disabled={disabled} onChange={(event) => setSearch(event.target.value)} />{search && <button type="button" aria-label="Clear" onClick={clearSearch}>×</button>}<button type="button" aria-label="Search" disabled={disabled} onClick={applySearch}>⌕</button></label>
              <div className={styles.issueFilterWrap}>
                <button type="button" role="combobox" aria-label="Select advanced filters" aria-expanded={openState === 'advanced-filters' || openState === 'filter-two'} disabled={disabled} onClick={() => toggle('advanced-filters')}>Advanced filters⌄</button>
                {(openState === 'advanced-filters' || openState === 'filter-two') && (
                  <section className={styles.issueFilterPanel} role="dialog" aria-label="Advanced filters">
                    {filters.map((filter, index) => (
                      <div className={styles.issueFilterRow} key={index}>
                        <select aria-label={`Filter ${index + 1} operator`} value={filter.operator} onChange={(event) => setFilters((items) => items.map((item, itemIndex) => itemIndex === index ? { ...item, operator: event.target.value as 'Include' | 'Exclude' } : item))}><option>Include</option><option>Exclude</option></select>
                        <select aria-label={`Filter ${index + 1} field`} value={filter.field} disabled={disabled} onChange={() => undefined}><option>Page URL</option></select>
                        <input aria-label={`Filter ${index + 1} value`} value={filter.value} onChange={(event) => setFilters((items) => items.map((item, itemIndex) => itemIndex === index ? { ...item, value: event.target.value } : item))} />
                        {index > 0 && <button type="button" aria-label={`Remove filter ${index + 1}`} onClick={() => setFilters((items) => items.filter((_, itemIndex) => itemIndex !== index))}>×</button>}
                      </div>
                    ))}
                    <button className={styles.inlineLink} type="button" aria-label="Add condition" onClick={() => { setFilters((items) => [...items, { operator: 'Include', field: 'Page URL', value: '' }]); setOpenState('filter-two'); }}>＋ Add condition</button>
                    <div className={styles.issueFilterActions}><button type="button" disabled>Apply filters · needs verification</button><button type="button" aria-label="Clear all" onClick={() => { setFilters([{ operator: 'Include', field: 'Page URL', value: '' }]); setOpenState('default'); }}>× Clear all</button></div>
                  </section>
                )}
              </div>
            </div>

            {selected && (
              <div className={styles.issueBulkBar} role="region" aria-label="Selected issue rows"><strong>1 row selected</strong><button type="button" disabled={disabled} onClick={() => setSelected(false)}>Deselect all</button><button type="button" disabled>Hide · needs verification</button></div>
            )}

            <div className={styles.issueGrid} role="grid" aria-label="Affected pages">
              <div className={styles.issueGridHeader} role="row"><span role="columnheader"><input type="checkbox" aria-label="All items" checked={selected} disabled={disabled} onChange={(event) => setSelected(event.target.checked)} /></span><span role="columnheader">Page URL</span><span role="columnheader">Discovered</span><span role="columnheader" /></div>
              {rowsVisible && (
                <div className={styles.issueGridRow} role="row">
                  <span role="gridcell"><input type="checkbox" aria-label="Select Northstar homepage" checked={selected} disabled={disabled} onChange={(event) => setSelected(event.target.checked)} /></span>
                  <div role="gridcell"><strong>Northstar — Search visibility workspace</strong><button type="button" onClick={() => showGuard('Page report navigation')}>https://northstar.example/</button><button type="button" aria-label="Open external page" onClick={() => showGuard('External page navigation')}>↗</button></div>
                  <span role="gridcell">Sep 28, 2026, 11:37</span><button role="gridcell" type="button" disabled>◉<span className={styles.srOnly}>Hide page from audit results</span></button>
                </div>
              )}
              {hiddenLoading && <div className={styles.issueGridEmpty} role="row"><span role="gridcell" aria-live="polite">Loading…</span></div>}
              {hiddenEmpty && <div className={styles.issueGridEmpty} role="row"><span role="gridcell"><span role="status"><strong>No hidden issues</strong></span></span></div>}
              {activeList === 'issues' && searchApplied && <div className={styles.issueGridEmpty} role="row"><span role="gridcell"><span role="status"><strong>Nothing found</strong><small>Try changing your filters.</small></span><button type="button" onClick={clearSearch}>Clear filters</button></span></div>}
            </div>

            {(rowsVisible || openState === 'page-size-menu') && (
              <nav className={styles.auditPagination} aria-label="Pagination"><span>Page:</span><input aria-label="Page" value="1" disabled /><span>of 1</span><button type="button" aria-haspopup="listbox" aria-expanded={openState === 'page-size-menu'} disabled={disabled} onClick={() => toggle('page-size-menu')}>{pageSize}⌄</button>{openState === 'page-size-menu' && <div className={styles.auditPageMenu} role="listbox" aria-label="Rows per page">{[10, 20, 50, 100].map((size) => <button type="button" role="option" aria-selected={pageSize === size} key={size} onClick={() => { setPageSize(size); setOpenState('default'); }}>{size}</button>)}</div>}</nav>
            )}
          </section>
          {status && <p className={styles.actionStatus} role="status">{status}</p>}
        </main>
      </div>
    </div>
  );
}

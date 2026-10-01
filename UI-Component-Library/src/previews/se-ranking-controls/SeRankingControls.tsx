import { useState } from 'react';
import styles from './se-ranking-controls.module.css';

export function SeRankingProjectPageHeader({
  initialMenuOpen = false,
  initialWidgetOrder = 'default',
}: {
  initialMenuOpen?: boolean;
  initialWidgetOrder?: 'default' | 'content-before-insights';
}) {
  const [open, setOpen] = useState(initialMenuOpen);
  const widgetNames = [
    'Key metrics',
    'Competitive Research - AI Search',
    'AI Results Tracker',
    'Rankings',
    'Analytics and traffic',
    'Website Audit',
    'Backlink Checker',
    'Competitive Research',
    'Marketing Plan',
    'Insights',
    'Content',
  ];
  const initialOrder =
    initialWidgetOrder === 'content-before-insights'
      ? [...widgetNames.slice(0, 9), 'Content', 'Insights']
      : widgetNames;
  const [widgetOrder, setWidgetOrder] = useState(initialOrder);
  const [visibleWidgets, setVisibleWidgets] = useState(widgetNames);
  const [status, setStatus] = useState('');
  const moveUp = (item: string) => {
    setWidgetOrder((current) => {
      const index = current.indexOf(item);
      if (index <= 0) return current;
      const next = [...current];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
    setStatus(`${item} moved up locally. Live drag ordering and reload persistence were verified.`);
  };
  return (
    <section className={styles.pageHeader} aria-label="Project page header">
      <nav aria-label="Breadcrumb">
        <button
          type="button"
          onClick={() => setStatus('Project breadcrumb navigation is guarded locally.')}
        >
          centilio.com
        </button>
        <span>›</span>
        <span>Project Overview</span>
      </nav>
      <div>
        <div>
          <h1>Overview</h1>
          <p>centilio.com</p>
        </div>
        <button type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          Widgets ▾
        </button>
      </div>
      {open && (
        <div className={`${styles.menu} ${styles.widgetMenu}`}>
          <p>Live-observed widget visibility menu</p>
          {widgetOrder.map((item, index) => (
            <div className={styles.widgetRow} key={item}>
              <button
                type="button"
                aria-label={`Move ${item} up`}
                disabled={index === 0}
                onClick={() => moveUp(item)}
              >
                ⋮⋮
              </button>
              <label>
                <input
                  type="checkbox"
                  checked={visibleWidgets.includes(item)}
                  onChange={() => {
                    setVisibleWidgets((current) =>
                      current.includes(item)
                        ? current.filter((name) => name !== item)
                        : [...current, item]
                    );
                    setStatus(`${item} visibility changed in this local fixture.`);
                  }}
                />
                {item}
              </label>
            </div>
          ))}
        </div>
      )}
      <p role="status" className={styles.status}>
        {status}
      </p>
    </section>
  );
}

export function SeRankingRankingsFilters({
  initiallyOpen = '',
}: {
  initiallyOpen?: '' | 'engine' | 'range';
}) {
  const [open, setOpen] = useState(initiallyOpen);
  const [engine, setEngine] = useState('Google India · EN');
  const [range, setRange] = useState('Past 30 days');
  const [status, setStatus] = useState('');
  const select = (kind: 'engine' | 'range', value: string) => {
    if (kind === 'engine') setEngine(value);
    else setRange(value);
    setOpen('');
    setStatus(
      `${value} selected locally. The live app showed a loading transition before refreshing the widget.`
    );
  };
  return (
    <section className={styles.filters} aria-label="Rankings filters">
      <h2>Rankings</h2>
      <div className={styles.filterControl}>
        <button
          type="button"
          aria-expanded={open === 'engine'}
          onClick={() => setOpen(open === 'engine' ? '' : 'engine')}
        >
          {engine} ▾
        </button>
        {open === 'engine' && (
          <div role="menu" className={styles.menu}>
            <p>Configured search engine</p>
            <button
              role="menuitem"
              type="button"
              onClick={() => select('engine', 'Google India · EN')}
            >
              Google India · EN
            </button>
          </div>
        )}
      </div>
      <div className={styles.filterControl}>
        <button
          type="button"
          aria-expanded={open === 'range'}
          onClick={() => setOpen(open === 'range' ? '' : 'range')}
        >
          {range} ▾
        </button>
        {open === 'range' && (
          <div role="menu" className={styles.menu}>
            <p>Live-observed ranges</p>
            {[
              'Today',
              'Yesterday',
              'Last Week',
              'Last month',
              'Past 7 days',
              'Past 30 days',
              'Past 6 months',
              'Year',
            ].map((value) => (
              <button
                role="menuitem"
                type="button"
                key={value}
                onClick={() => select('range', value)}
              >
                {value}
              </button>
            ))}
          </div>
        )}
      </div>
      <p role="status" className={styles.status}>
        {status || 'Live-observed Google India and Past 30 days state.'}
      </p>
    </section>
  );
}

export type AuditLoadingState = 'launch' | 'progress' | 'retry-unavailable';

export function SeRankingAuditLoadingPanel({
  initialState = 'progress',
}: {
  initialState?: AuditLoadingState;
}) {
  const [status, setStatus] = useState('');
  if (initialState === 'retry-unavailable')
    return (
      <section className={styles.auditCard} aria-label="Website Audit retry boundary">
        <h2>Retry state unavailable</h2>
        <p>
          The observed audit completed successfully, so SE Ranking did not expose a failure Retry.
        </p>
        <p role="status" className={styles.status}>
          Refresh opened Launch website audit for a new run.
        </p>
      </section>
    );
  if (initialState === 'launch')
    return (
      <section className={styles.launchDialog} aria-label="Launch website audit">
        <h2>Launch website audit</h2>
        <p>Are you sure you want to run the audit? This will not impact the scanning frequency.</p>
        <label>
          <input type="checkbox" /> Don’t ask again
        </label>
        <footer>
          <button type="button" onClick={() => setStatus('Launch cancelled locally.')}>
            Cancel
          </button>
          <button
            type="button"
            onClick={() =>
              setStatus(
                'Launch Audit is represented locally. The live action was verified separately.'
              )
            }
          >
            Launch Audit
          </button>
        </footer>
        <p role="status" className={styles.status}>
          {status}
        </p>
      </section>
    );
  return (
    <section className={styles.auditCard} aria-label="Website Audit loading">
      <header>
        <h2>Website Audit is in progress</h2>
        <span>00 : 00 : 05</span>
      </header>
      <p>We’ll send you an email when it’s ready</p>
      <div className={styles.auditCounters}>
        {[
          ['Pages crawled', '1'],
          ['URLs', '0'],
          ['Errors', '0'],
          ['Warnings', '0'],
          ['Notices', '0'],
        ].map(([label, value]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setStatus('Stop Audit is guarded in the local fixture.')}
      >
        Stop Audit
      </button>
      <p role="status" className={styles.status}>
        {status || 'Live-observed manual audit progress state.'}
      </p>
    </section>
  );
}

export function SeRankingAuditHealthScore({
  score = 80,
  disabled = false,
}: {
  score?: number;
  disabled?: boolean;
}) {
  const [status, setStatus] = useState('');
  return (
    <section className={styles.auditCard} aria-label="Website Audit score">
      <header>
        <h2>Website Audit</h2>
      </header>
      <div className={styles.score}>
        <strong>{score}</strong>
        <span>Health Score</span>
      </div>
      <button
        type="button"
        disabled={disabled}
        onClick={() =>
          setStatus('Issue Report route observed with filters, category totals, and issue tables.')
        }
      >
        Review issues
      </button>
      <p role="status" className={styles.status}>
        {status || 'Observed score summary and issue-report destination.'}
      </p>
    </section>
  );
}

export type DropState =
  | 'empty'
  | 'selected'
  | 'success'
  | 'duplicate'
  | 'invalid-type'
  | 'disabled';

export function SeRankingKeywordFileDrop({ initialState = 'empty' }: { initialState?: DropState }) {
  const [status, setStatus] = useState('');
  const [duplicateRemoved, setDuplicateRemoved] = useState(false);
  const disabled = initialState === 'disabled';
  return (
    <section className={styles.uploadDialog} aria-label="Import keywords">
      <h2>Import keywords</h2>
      <label>
        Format
        <select disabled={disabled} defaultValue="csv">
          <option value="csv">CSV / Text</option>
          <option value="columns">CSV / Text with additional columns (; separator)</option>
        </select>
      </label>
      <p>Make an import file in UTF-8 encoding. Place each keyword on a new line.</p>
      <label>
        <input type="checkbox" disabled={disabled} /> File contains target links
      </label>
      <label>
        Search engine
        <select disabled={disabled}>
          <option>Select search engines</option>
        </select>
      </label>
      <label>
        Import to group
        <select disabled={disabled}>
          <option>General</option>
        </select>
      </label>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setStatus('File chooser is guarded in this local fixture.')}
      >
        {initialState === 'empty'
          ? 'Drag-and-drop file here or upload'
          : initialState === 'invalid-type'
            ? 'se-ranking-invalid-upload-evidence.json'
            : 'se-ranking-keywords-evidence.txt'}
      </button>
      {initialState === 'invalid-type' && (
        <div className={styles.errorState}>
          Unsupported file type. The live file input accepts only .csv and .txt.
        </div>
      )}
      {initialState === 'success' && (
        <div className={styles.success}>Import finished successfully! Added: 1, updated: 0.</div>
      )}
      {initialState === 'duplicate' && !duplicateRemoved && (
        <div role="dialog" aria-label="Keyword list contains duplicates" className={styles.errorState}>
          <strong>Keyword list contains duplicates</strong>
          <p>Duplicates found: 1.</p>
          <p>Remove duplicates from the keyword list?</p>
          <button
            type="button"
            onClick={() =>
              setStatus('The add-with-duplicates provider outcome was not exercised.')
            }
          >
            No, add keywords with duplicates
          </button>
          <button
            type="button"
            onClick={() => {
              setDuplicateRemoved(true);
              setStatus('Added keywords: 0. Keyword limits remain 1 / 750.');
            }}
          >
            Yes, remove duplicates
          </button>
        </div>
      )}
      {initialState === 'duplicate' && duplicateRemoved && (
        <div className={styles.success}>Added keywords: 0</div>
      )}
      <footer>
        <button type="button" disabled={disabled}>
          Back to list
        </button>
        <button
          type="button"
          disabled={
            disabled ||
            initialState === 'empty' ||
            initialState === 'invalid-type' ||
            initialState === 'duplicate'
          }
          onClick={() =>
            setStatus('Local import action. Live import success was observed separately.')
          }
        >
          Import
        </button>
      </footer>
      <p role="status" className={styles.status}>
        {status ||
          (initialState === 'invalid-type'
            ? 'Live accept restriction observed. Unsupported JSON was blocked before import.'
            : initialState === 'selected'
              ? 'Live-observed selected-file state.'
              : initialState === 'success'
                ? 'Live-observed import success state.'
                : initialState === 'duplicate'
                  ? 'Live-observed duplicate confirmation state.'
                : 'Live-observed empty upload state.')}
      </p>
    </section>
  );
}

const surveyOptions = [
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
];

export function SeRankingSurveyOptionGroup({
  initialSelection = '',
  disabled = false,
}: {
  initialSelection?: string;
  disabled?: boolean;
}) {
  const [selection, setSelection] = useState(initialSelection);
  return (
    <fieldset className={styles.optionGroup} disabled={disabled}>
      <legend>How did you hear about us?</legend>
      {surveyOptions.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="survey-source"
            checked={selection === option}
            onChange={() => setSelection(option)}
          />
          {option}
        </label>
      ))}
      {selection === 'Other' && (
        <input aria-label="Type your answer" placeholder="Type your answer" />
      )}
      <p role="status" className={styles.status}>
        {selection
          ? `${selection} selected locally. The live survey accepted Complete and stayed dismissed after reload.`
          : 'No response selected.'}
      </p>
    </fieldset>
  );
}

export function SeRankingSurveyActionFooter({
  hasSelection = false,
  disabled = false,
  persistedDismissal = false,
}: {
  hasSelection?: boolean;
  disabled?: boolean;
  persistedDismissal?: boolean;
}) {
  const [status, setStatus] = useState('');
  return (
    <section className={styles.surveyFooter} aria-label="Survey actions">
      <button
        type="button"
        disabled={disabled || persistedDismissal}
        onClick={() => setStatus('Skip is guarded locally.')}
      >
        Skip
      </button>
      <button
        type="button"
        disabled={disabled || persistedDismissal}
        onClick={() =>
          setStatus(
            'Complete is guarded locally. Live completion and reload persistence were verified.'
          )
        }
      >
        Complete
      </button>
      <p role="status" className={styles.status}>
        {status ||
          (persistedDismissal
            ? 'The completed survey remained absent after reload. Skip persistence cannot be replayed in this account.'
            : hasSelection
              ? 'Live-observed selected response state.'
              : 'Observed action state. Complete remained visually available.')}
      </p>
    </section>
  );
}

export function SeRankingAuditIssueReport({
  initialScope = 'Current',
}: {
  initialScope?: 'Current' | 'Fixed' | 'New' | 'All tracked' | 'Turned off';
}) {
  const [scope, setScope] = useState(initialScope);
  const scopeCounts: Record<string, string> = {
    Current: '1600',
    Fixed: '0',
    New: '9',
    'All tracked': '0',
    'Turned off': '0',
  };
  const categories = [
    ['Crawling & Indexing', '59', '0'],
    ['Redirects', '0', '1'],
    ['Meta Tags', '43', '0'],
    ['Content', '0', '63'],
    ['Localization', '3', '0'],
    ['CSS', '0', '0'],
    ['Links', '18', '74'],
  ];
  return (
    <section className={styles.issueReport} aria-label="Audit issue report">
      <h2>
        Issue Report <span>centilio.com</span>
      </h2>
      <div className={styles.issueScopes}>
        {(['Current', 'Fixed', 'New', 'All tracked', 'Turned off'] as const).map((item) => (
          <button
            type="button"
            aria-pressed={scope === item}
            onClick={() => setScope(item)}
            key={item}
          >
            {item} {scopeCounts[item]}
          </button>
        ))}
      </div>
      <button type="button" className={styles.typeFilter}>
        All types selected ▾
      </button>
      <div className={styles.issueBody}>
        <nav>
          {categories.map(([name, errors, warnings]) => (
            <button type="button" key={name}>
              <strong>{name}</strong>
              <span>
                Errors {errors} · Warnings {warnings}
              </span>
            </button>
          ))}
        </nav>
        <article>
          <header>
            <h3>Crawling &amp; Indexing</h3>
            <span>+8 pts</span>
          </header>
          <table>
            <thead>
              <tr>
                <th>Issues</th>
                <th>Current</th>
                <th>Fixed</th>
                <th>New</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>4XX HTTP Status Codes</td>
                <td>59</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <p>Issue URL details are available by subscription.</p>
          <button type="button">Unlock Audit</button>
        </article>
      </div>
      <p role="status" className={styles.status}>
        {scope} issue scope selected locally.
      </p>
    </section>
  );
}

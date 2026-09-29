import { useState } from 'react';
import { AhrefsExpandedShell } from '../ahrefs-expanded/AhrefsExpandedShell';
import styles from './ahrefs-remaining.module.css';

export interface AhrefsRemainingProps {
  disabled?: boolean;
}

function Status({ value }: { value: string }) {
  return value ? (
    <p className={styles.status} role="status">
      {value}
    </p>
  ) : null;
}

function useGuard(disabled = false) {
  const [status, setStatus] = useState('');
  const guard = (action: string) => {
    if (!disabled)
      setStatus(
        `${action} needs verification. This local preview did not run an account, pricing, export, alert, or provider action.`
      );
  };
  return { status, guard };
}

function EmptyWorkspace({
  title,
  heading,
  copy,
  action,
  disabled = false,
}: AhrefsRemainingProps & { title: string; heading: string; copy: string; action?: string }) {
  const { status, guard } = useGuard(disabled);
  return (
    <AhrefsExpandedShell disabled={disabled} onGuard={guard}>
      <main className={styles.centerStage}>
        <p className={styles.eyebrow}>{title}</p>
        <div className={styles.illustration} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <h1>{heading}</h1>
        <p>{copy}</p>
        {action && (
          <button
            className={styles.primary}
            type="button"
            disabled={disabled}
            onClick={() => guard(action)}
          >
            {action}
          </button>
        )}
        <Status value={status} />
      </main>
    </AhrefsExpandedShell>
  );
}

export function AhrefsBotAnalyticsEmptyState(props: AhrefsRemainingProps) {
  return (
    <EmptyWorkspace
      {...props}
      title="Bot Analytics"
      heading="No projects available for Bot Analytics"
      copy="Add a project before bot traffic can be inspected."
    />
  );
}

const projectViews = ['Overview', 'Web Analytics', 'Rank Tracker', 'GSC Insights'] as const;
export function AhrefsProjectViewRadioGroup({ disabled = false }: AhrefsRemainingProps) {
  const [selected, setSelected] = useState<(typeof projectViews)[number]>('Rank Tracker');
  return (
    <section className={styles.primitiveStage}>
      <fieldset className={styles.radioGroup} disabled={disabled}>
        <legend>Project view</legend>
        {projectViews.map((view) => (
          <label key={view} className={selected === view ? styles.radioSelected : ''}>
            <input
              type="radio"
              name="project-view"
              value={view}
              checked={selected === view}
              onChange={() => setSelected(view)}
            />
            <span>{view}</span>
          </label>
        ))}
      </fieldset>
      <p className={styles.selection} role="status">
        Selected: {selected}
      </p>
    </section>
  );
}

export function AhrefsRankTrackerPlanGate({ disabled = false }: AhrefsRemainingProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <AhrefsExpandedShell disabled={disabled} onGuard={guard}>
      <main className={styles.dashboardStage}>
        <h1>Projects</h1>
        <AhrefsProjectViewRadioGroup disabled={disabled} />
        <section className={styles.gateCard}>
          <div className={styles.videoMock} aria-hidden="true">
            ▶
          </div>
          <h2>Upgrade to unlock Rank Tracker</h2>
          <p>
            Monitor rankings over time and chart performance against competitors. Get scheduled
            reports straight to your inbox.
          </p>
          <div className={styles.actions}>
            <button
              className={styles.primary}
              type="button"
              disabled={disabled}
              onClick={() => guard('See pricing')}
            >
              See pricing
            </button>
            <button type="button" disabled={disabled} onClick={() => guard('Learn more')}>
              Learn more
            </button>
          </div>
        </section>
        <Status value={status} />
      </main>
    </AhrefsExpandedShell>
  );
}

export function AhrefsPortfolioEmptyState(props: AhrefsRemainingProps) {
  return (
    <EmptyWorkspace
      {...props}
      title="Portfolios"
      heading="Add your first portfolio"
      copy="Set up a portfolio to analyze a list of URLs in Site Explorer."
      action="Create portfolio"
    />
  );
}

export function AhrefsReportBuilderEmptyState(props: AhrefsRemainingProps) {
  return (
    <EmptyWorkspace
      {...props}
      title="Reports"
      heading="Create your first report"
      copy="Build custom SEO reports with Ahrefs data."
      action="Create report"
    />
  );
}

const alertTabs = ['Backlinks', 'New keywords', 'Mentions', 'Rank Tracker'];
export function AhrefsAlertsWorkspace({ disabled = false }: AhrefsRemainingProps) {
  const [active, setActive] = useState('Backlinks');
  return (
    <AhrefsExpandedShell disabled={disabled} onGuard={() => undefined}>
      <main className={styles.workspace}>
        <div className={styles.tabs} role="tablist" aria-label="Alert type">
          {alertTabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              disabled={disabled}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.alertBar}>
          <button type="button" disabled>
            ＋ New alert
          </button>
          <span>You have reached the maximum number of alerts. Please upgrade your plan.</span>
          <strong>0 alerts</strong>
        </div>
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                {[
                  'Project',
                  'Target URL',
                  'Scope',
                  'DR',
                  'Domain traffic',
                  'Send email',
                  'Last sent',
                  'Created',
                ].map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8}>No results found</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={styles.selection} role="status">
          Showing {active} alerts
        </p>
      </main>
    </AhrefsExpandedShell>
  );
}

export function AhrefsGbpMonitorAccessGate({ disabled = false }: AhrefsRemainingProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <AhrefsExpandedShell disabled={disabled} onGuard={guard}>
      <main className={styles.gbpStage}>
        <div>
          <h1>Protect your Google Business Profiles</h1>
          <p>Monitor changes, catch unwanted edits and keep your info accurate and consistent.</p>
          <button
            className={styles.primary}
            type="button"
            disabled={disabled}
            onClick={() => guard('See pricing')}
          >
            See pricing
          </button>
          <Status value={status} />
        </div>
        <div className={styles.mapMock} aria-label="Local SEO illustration">
          <i />
          <i />
          <i />
        </div>
      </main>
    </AhrefsExpandedShell>
  );
}

const ranks = [
  ['1', 'facebook.com', '1'],
  ['2', 'instagram.com', '2'],
  ['3', 'google.com', '3'],
  ['4', 'youtube.com', '4'],
  ['5', 'linkedin.com', '5'],
  ['6', 'twitter.com', '6'],
  ['7', 'whatsapp.com', '7'],
  ['8', 'wikipedia.org', '15'],
];
export function AhrefsRankTable({ disabled = false }: AhrefsRemainingProps) {
  const { status, guard } = useGuard(disabled);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const filtered = ranks.filter((row) => row[1].includes(query.toLowerCase()));
  return (
    <AhrefsExpandedShell disabled={disabled} onGuard={guard}>
      <main className={styles.workspace}>
        <h1>Ahrefs Rank</h1>
        <p>Domain rating based on backlink profile strength</p>
        <div className={styles.toolbar}>
          <button disabled={disabled} onClick={() => guard('Add filter')}>
            ＋ Add filter
          </button>
          <button disabled={disabled} onClick={() => guard('Changes range')}>
            Changes: Last 3 months⌄
          </button>
          <input
            aria-label="Search domains"
            value={query}
            disabled={disabled}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search domains"
          />
          <button disabled={disabled} onClick={() => guard('Export')}>
            ⇩ Export
          </button>
        </div>
        <h2>1,000,001 domains</h2>
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Domain</th>
                <th>Ahrefs Rank</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r[1]}>
                  <td>{r[0]}</td>
                  <td>{r[1]}</td>
                  <td>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.pagination} aria-label="Pagination">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              aria-pressed={page === n}
              disabled={disabled}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}
          <span>… 20,001</span>
        </div>
        <Status value={status} />
      </main>
    </AhrefsExpandedShell>
  );
}

export function AhrefsAppsDirectoryInfo({ disabled = false }: AhrefsRemainingProps) {
  const { status, guard } = useGuard(disabled);
  return (
    <AhrefsExpandedShell disabled={disabled} onGuard={guard}>
      <main className={styles.infoStage}>
        <span className={styles.dataIcon}>↗</span>
        <h1>Ahrefs Data in SEO Tools</h1>
        <h2>Get Ahrefs backlinks data in other SEO tools.</h2>
        <p>
          This directory helps developers showcase applications built with Ahrefs data and lets
          subscribers extend their workflows through third-party applications.
        </p>
        <button type="button" disabled={disabled} onClick={() => guard('Developer information')}>
          Developer information
        </button>
        <Status value={status} />
      </main>
    </AhrefsExpandedShell>
  );
}

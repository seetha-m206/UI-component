import { useMemo, useState } from 'react';
import {
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronDown,
  Circle,
  LayoutGrid,
  LockKeyhole,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Sparkles,
  Table2,
} from 'lucide-react';
import styles from './hubspot-suite.module.css';

export interface HubspotFixtureField {
  key: string;
  label: string;
  value: string;
}

export interface HubspotSuiteRecord {
  id: string;
  brand: string;
  title: string;
  category: string;
  product: string;
  summary: string;
  status: string;
  fields: HubspotFixtureField[];
  actions: string[];
  reconstruction: string;
}

export interface HubspotSuitePreviewProps {
  record: HubspotSuiteRecord;
  mode?: 'documented' | 'guarded';
  disabled?: boolean;
}

type LayoutKind = 'analytics' | 'board' | 'gate' | 'onboarding' | 'settings' | 'table';

function layoutFor(record: HubspotSuiteRecord): LayoutKind {
  const value = `${record.id} ${record.title} ${record.category}`.toLowerCase();
  if (/entitlement|gate|locked|unavailable|access state/.test(value)) return 'gate';
  if (/dashboard|analytics|overview|usage|scoring/.test(value)) return 'analytics';
  if (/pipeline|board|calendar|scheduling/.test(value)) return 'board';
  if (/onboarding|introduction|empty|projects|listings/.test(value)) return 'onboarding';
  if (/settings|editor|model|domain|migration|brand kit|context/.test(value)) return 'settings';
  return 'table';
}

function compactValue(value: string) {
  return value
    .replace(/^\[|\]$/g, '')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function primaryAction(record: HubspotSuiteRecord) {
  const value = `${record.id} ${record.title}`.toLowerCase();
  if (/gate|locked|entitlement/.test(value)) return 'Review access';
  if (/onboarding|introduction|empty/.test(value)) return 'Get started';
  if (/report|dashboard|analytics/.test(value)) return 'Create report';
  if (/settings|editor|model|domain/.test(value)) return 'Configure';
  if (/marketplace|listing/.test(value)) return 'Create listing';
  return 'Create new';
}

function StatusBadge({ status }: { status: string }) {
  const normalized = status.toLowerCase();
  const tone = /locked|unavailable|inaccessible|missing|unverified/.test(normalized)
    ? styles.statusWarning
    : /draft|pending|not|empty|preview/.test(normalized)
      ? styles.statusNeutral
      : styles.statusPositive;
  return <span className={`${styles.status} ${tone}`}>{compactValue(status)}</span>;
}

function AnalyticsView({ record }: { record: HubspotSuiteRecord }) {
  const metrics = record.fields.slice(0, 4);
  return (
    <div className={styles.analytics}>
      <div className={styles.metricGrid}>
        {metrics.map((field, index) => (
          <article className={styles.metricCard} key={field.key}>
            <span>{field.label}</span>
            <strong>{compactValue(field.value)}</strong>
            <small>{index % 2 === 0 ? 'Fictional fixture value' : 'Local preview only'}</small>
          </article>
        ))}
      </div>
      <article className={styles.chartCard} aria-label="Fictional trend chart">
        <div className={styles.cardHeading}><div><span>Trend</span><strong>Fixture activity</strong></div><BarChart3 size={18} /></div>
        <div className={styles.bars}>{[42, 68, 51, 82, 61, 74, 88].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div>
      </article>
    </div>
  );
}

function BoardView({ record }: { record: HubspotSuiteRecord }) {
  const columns = ['Planned', 'In progress', 'Review', 'Complete'];
  return (
    <div className={styles.board} aria-label="Fictional workflow board">
      {columns.map((column, index) => (
        <section className={styles.boardColumn} key={column}>
          <header><strong>{column}</strong><span>{index === 1 ? 1 : 0}</span></header>
          {index === 1 && <article className={styles.boardCard}><b>{record.fields[0]?.value || record.title}</b><span>{record.fields[1]?.label || 'Status'} · {compactValue(record.status)}</span></article>}
        </section>
      ))}
    </div>
  );
}

function GateView({ record }: { record: HubspotSuiteRecord }) {
  return (
    <section className={styles.gateCard}>
      <span className={styles.gateIcon}><LockKeyhole size={24} /></span>
      <div>
        <span className={styles.eyebrow}>Access boundary</span>
        <h3>{record.title}</h3>
        <p>This fictional fixture preserves the observed locked state. It does not start a trial, upgrade, or provider workflow.</p>
      </div>
      <ul>{record.fields.slice(0, 4).map((field) => <li key={field.key}><CheckCircle2 size={15} /><span>{field.label}</span><b>{compactValue(field.value)}</b></li>)}</ul>
    </section>
  );
}

function OnboardingView({ record }: { record: HubspotSuiteRecord }) {
  return (
    <section className={styles.onboarding}>
      <div className={styles.onboardingMark}><Sparkles size={28} /></div>
      <span className={styles.eyebrow}>Fictional setup state</span>
      <h3>{record.fields[0]?.value || record.title}</h3>
      <p>{record.summary}</p>
      <div className={styles.stepList}>
        {record.fields.slice(1, 5).map((field, index) => (
          <div key={field.key}><span>{index === 0 ? <CheckCircle2 size={16} /> : <Circle size={16} />}</span><div><b>{field.label}</b><small>{compactValue(field.value)}</small></div></div>
        ))}
      </div>
    </section>
  );
}

function SettingsView({ record }: { record: HubspotSuiteRecord }) {
  return (
    <div className={styles.settingsGrid}>
      <aside>{['Overview', 'Configuration', 'Permissions', 'Review'].map((item, index) => <button type="button" className={index === 0 ? styles.sideActive : ''} key={item}>{item}</button>)}</aside>
      <section>
        <h3>Configuration</h3>
        {record.fields.map((field) => <label key={field.key}><span>{field.label}</span><input value={compactValue(field.value)} readOnly /></label>)}
      </section>
    </div>
  );
}

function TableView({ record, query }: { record: HubspotSuiteRecord; query: string }) {
  const fields = record.fields.filter((field) => `${field.label} ${field.value}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className={styles.tableWrap}>
      <div className={styles.tableHeader} role="row"><span>Property</span><span>Fixture value</span><span>State</span><span /></div>
      {fields.map((field, index) => (
        <div className={styles.tableRow} role="row" key={field.key}>
          <span><b>{field.label}</b><small>{record.product}</small></span>
          <span>{compactValue(field.value)}</span>
          <span><StatusBadge status={index === 0 ? record.status : 'local fixture'} /></span>
          <button type="button" aria-label={`Actions for ${field.label}`}><MoreHorizontal size={16} /></button>
        </div>
      ))}
      {fields.length === 0 && <div className={styles.noResults}>No fictional fixture properties match this search.</div>}
    </div>
  );
}

export function HubspotSuitePreview({ record, mode = 'documented', disabled = false }: HubspotSuitePreviewProps) {
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState(mode === 'guarded' ? 'Provider actions are disabled. This state remains local.' : '');
  const [layout, setLayout] = useState<'grid' | 'table'>('grid');
  const kind = useMemo(() => layoutFor(record), [record]);
  const action = primaryAction(record);
  const runGuardedAction = (label: string) => setNotice(`${label} was not sent to HubSpot. The fictional fixture remains local.`);

  return (
    <div className={styles.canvas} data-testid={`hubspot-suite-preview-${record.id}`}>
      <header className={styles.topbar}>
        <div className={styles.brand}><span>◆</span><b>HubSpot</b></div>
        <label className={styles.globalSearch}><Search size={15} /><input disabled={disabled} aria-label="Search fictional HubSpot preview" placeholder="Search HubSpot" /></label>
        <div className={styles.topActions}><button type="button" disabled={disabled}><Sparkles size={15} /> Breeze</button><button type="button" aria-label="Notifications" disabled={disabled}><Bell size={16} /></button><button type="button" aria-label="Settings" disabled={disabled}><Settings size={16} /></button><span>NS</span></div>
      </header>
      <div className={styles.body}>
        <aside className={styles.sidebar} aria-label="Fictional HubSpot navigation">
          <b>{record.product}</b>
          {['Overview', record.category.split('>')[0]?.trim() || 'Workspace', 'Records', 'Automation', 'Reporting'].map((item, index) => <button type="button" className={index === 1 ? styles.navActive : ''} disabled={disabled} key={`${item}-${index}`}>{item}</button>)}
        </aside>
        <main className={styles.main}>
          <div className={styles.pageHead}>
            <div><span className={styles.eyebrow}>{record.category}</span><h2>{record.title}</h2><p>{record.summary}</p></div>
            <div className={styles.pageActions}><button type="button" disabled={disabled} onClick={() => runGuardedAction('Secondary action')}>Actions <ChevronDown size={14} /></button><button type="button" className={styles.primary} disabled={disabled} onClick={() => runGuardedAction(action)}><Plus size={15} />{action}</button></div>
          </div>
          <div className={styles.toolbar}>
            <label><Search size={15} /><input value={query} disabled={disabled} onChange={(event) => setQuery(event.target.value)} aria-label="Filter fictional fixture properties" placeholder="Search this fixture" /></label>
            <div role="radiogroup" aria-label="Fixture layout"><button type="button" role="radio" aria-checked={layout === 'grid'} disabled={disabled} onClick={() => setLayout('grid')}><LayoutGrid size={15} />Cards</button><button type="button" role="radio" aria-checked={layout === 'table'} disabled={disabled} onClick={() => setLayout('table')}><Table2 size={15} />Table</button></div>
            <StatusBadge status={record.status} />
          </div>
          {notice && <div className={styles.guard} role="status"><LockKeyhole size={16} /><span>{notice}</span><button type="button" aria-label="Dismiss local notice" onClick={() => setNotice('')}>×</button></div>}
          <section className={styles.workspace} aria-label={`${record.title} fictional fixture`}>
            {layout === 'table' ? <TableView record={record} query={query} /> : kind === 'analytics' ? <AnalyticsView record={record} /> : kind === 'board' ? <BoardView record={record} /> : kind === 'gate' ? <GateView record={record} /> : kind === 'onboarding' ? <OnboardingView record={record} /> : kind === 'settings' ? <SettingsView record={record} /> : <TableView record={record} query={query} />}
          </section>
          <footer className={styles.boundary}><b>Local reconstruction</b><span>{record.reconstruction}</span></footer>
        </main>
      </div>
    </div>
  );
}

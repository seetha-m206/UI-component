import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  AlertTriangle,
  Braces,
  CheckCircle2,
  CircleDashed,
  Layers3,
  MousePointerClick,
  Network,
  Search,
} from 'lucide-react';
import styles from './hubspot-deep-audit.module.css';

export interface DeepAuditEvidence {
  state: string;
  detail: string;
}

export interface DeepAuditRecord {
  id: string;
  brand: string;
  parentId: string;
  parentTitle: string;
  level: string;
  component: string;
  category: string;
  product: string;
  lastVerified: string;
  evidenceState: string;
  observed: boolean;
  summary: string;
  observations: readonly string[];
  actions: readonly string[];
  dom: readonly DeepAuditEvidence[];
  network: readonly DeepAuditEvidence[];
  fixture: Readonly<Record<string, string>>;
}

interface HubspotDeepAuditPreviewProps {
  record: DeepAuditRecord;
  mode?: 'evidence' | 'boundary';
  disabled?: boolean;
}

function EvidenceList({
  title,
  items,
  icon,
}: {
  title: string;
  items: readonly DeepAuditEvidence[];
  icon: ReactNode;
}) {
  return (
    <section className={styles.evidenceCard}>
      <div className={styles.cardTitle}>
        {icon}
        <h3>{title}</h3>
      </div>
      <ul>
        {items.slice(0, 5).map((item, index) => (
          <li key={item.state + '-' + index}>
            <span className={item.state === 'OBSERVED' ? styles.observed : styles.notObserved}>
              {item.state}
            </span>
            <p>{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function StateCanvas({
  record,
  disabled,
  onAction,
}: {
  record: DeepAuditRecord;
  disabled: boolean;
  onAction: (label: string) => void;
}) {
  if (record.level === 'loading') {
    return (
      <div className={styles.loadingState} aria-label="Fictional loading state">
        <CircleDashed />
        <span />
        <span />
        <span />
      </div>
    );
  }
  if (record.level === 'empty') {
    return (
      <div className={styles.emptyState}>
        <Search />
        <strong>No fictional results</strong>
        <p>This state is local and does not query HubSpot.</p>
      </div>
    );
  }
  if (record.level === 'error') {
    return (
      <div className={styles.errorState} role="alert">
        <AlertTriangle />
        <div>
          <strong>Fictional retryable error</strong>
          <p>No provider request was made.</p>
        </div>
        <button type="button" disabled={disabled} onClick={() => onAction('Retry')}>
          Retry locally
        </button>
      </div>
    );
  }
  if (record.level === 'atomic') {
    return (
      <div className={styles.atomicGrid}>
        {['Button', 'Field', 'Menu', 'Card', 'Row', 'Status'].map((item) => (
          <button type="button" disabled={disabled} onClick={() => onAction(item)} key={item}>
            {item}
          </button>
        ))}
      </div>
    );
  }
  if (record.level === 'action' || record.level === 'interaction') {
    return (
      <div className={styles.actionStrip}>
        {record.actions.slice(0, 4).map((action, index) => (
          <button
            type="button"
            disabled={disabled}
            onClick={() => onAction('Action ' + (index + 1))}
            key={action + '-' + index}
          >
            {action.split('|')[0]?.trim() || 'Local action'}
          </button>
        ))}
      </div>
    );
  }
  if (record.level === 'state') {
    return (
      <div className={styles.stateStrip}>
        {['Default', 'Selected', 'Disabled', 'Expanded'].map((state, index) => (
          <button
            type="button"
            disabled={disabled}
            aria-pressed={index === 1}
            onClick={() => onAction(state)}
            key={state}
          >
            {state}
          </button>
        ))}
      </div>
    );
  }
  return (
    <div className={styles.screenShell}>
      <aside>
        <span />
        <span />
        <span />
        <span />
      </aside>
      <main>
        <div className={styles.toolbar}>
          <span />
          <span />
          <button type="button" disabled={disabled} onClick={() => onAction('Primary action')}>
            Local action
          </button>
        </div>
        <div className={styles.screenBody}>
          <span />
          <span />
          <span />
        </div>
      </main>
    </div>
  );
}

export function HubspotDeepAuditPreview({
  record,
  mode = 'evidence',
  disabled = false,
}: HubspotDeepAuditPreviewProps) {
  const [notice, setNotice] = useState(
    mode === 'boundary' ? 'Boundary fixture active. No provider request is allowed.' : ''
  );
  const [query, setQuery] = useState('');
  const filteredFixture = Object.entries(record.fixture).filter(([key, value]) =>
    (key + ' ' + value).toLowerCase().includes(query.toLowerCase())
  );
  const act = (label: string) =>
    setNotice(label + ' changed only this fictional local fixture. Nothing was sent to HubSpot.');

  return (
    <div className={styles.canvas}>
      <header className={styles.header}>
        <div className={styles.brandMark}>H</div>
        <div>
          <span className={styles.eyebrow}>
            {record.product} · {record.level} level
          </span>
          <h2>{record.parentTitle}</h2>
          <p>{record.summary}</p>
        </div>
        <div className={record.observed ? styles.statusObserved : styles.statusPending}>
          {record.observed ? <CheckCircle2 /> : <CircleDashed />}
          {record.observed ? 'Source reviewed' : 'Reconstruction'}
        </div>
      </header>

      <div className={styles.stage}>
        <StateCanvas record={record} disabled={disabled} onAction={act} />
      </div>

      {notice && (
        <p className={styles.notice} role="status">
          {notice}
        </p>
      )}

      <div className={styles.evidenceGrid}>
        <EvidenceList title="DOM structure" items={record.dom} icon={<Braces />} />
        <section className={styles.evidenceCard}>
          <div className={styles.cardTitle}>
            <MousePointerClick />
            <h3>User actions</h3>
          </div>
          <ol>
            {record.actions.slice(0, 5).map((action, index) => (
              <li key={action + '-' + index}>
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => act('Action ' + (index + 1))}
                >
                  {action}
                </button>
              </li>
            ))}
          </ol>
        </section>
        <EvidenceList title="Network / API" items={record.network} icon={<Network />} />
      </div>

      <section className={styles.fixturePanel}>
        <div className={styles.cardTitle}>
          <Layers3 />
          <h3>Registered fictional fixture</h3>
        </div>
        <input
          aria-label="Filter fixture properties"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Filter fixture properties"
        />
        <dl>
          {filteredFixture.map(([key, value]) => (
            <div key={key}>
              <dt>{key.replace(/_/g, ' ')}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        {filteredFixture.length === 0 && <p>No fixture properties match this filter.</p>}
      </section>
    </div>
  );
}

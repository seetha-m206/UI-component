import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  AlertTriangle,
  Braces,
  CheckCircle2,
  CircleDashed,
  Database,
  Layers3,
  MousePointerClick,
  Search,
} from 'lucide-react';
import styles from './freshsales-deep-audit.module.css';

export interface FreshsalesAuditEvidence {
  state: string;
  detail: string;
}

export interface FreshsalesAuditRecord {
  id: string;
  parentId: string;
  parentTitle: string;
  level: string;
  component: string;
  category: string;
  observed: boolean;
  summary: string;
  actions: readonly string[];
  dom: readonly FreshsalesAuditEvidence[];
  network: readonly FreshsalesAuditEvidence[];
  fixture: Readonly<Record<string, string>>;
}

interface Props {
  record: FreshsalesAuditRecord;
  mode?: 'evidence' | 'boundary';
  disabled?: boolean;
}

function EvidenceCard({
  title,
  items,
  icon,
}: {
  title: string;
  items: readonly FreshsalesAuditEvidence[];
  icon: ReactNode;
}) {
  return (
    <section className={styles.evidenceCard}>
      <header>
        {icon}
        <h3>{title}</h3>
      </header>
      <ul>
        {items.map((item, index) => (
          <li key={`${item.state}-${index}`}>
            <b className={item.state === 'OBSERVED' ? styles.observed : styles.reconstructed}>
              {item.state}
            </b>
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FixtureCanvas({
  record,
  disabled,
  act,
}: {
  record: FreshsalesAuditRecord;
  disabled: boolean;
  act: (label: string) => void;
}) {
  if (record.level === 'loading') {
    return (
      <div className={styles.loading} aria-label="Fictional Freshsales loading state">
        <CircleDashed />
        <span />
        <span />
        <span />
      </div>
    );
  }
  if (record.level === 'empty') {
    return (
      <div className={styles.empty}>
        <Search />
        <strong>No fictional records yet</strong>
        <p>This local state does not query Freshsales.</p>
        <button type="button" disabled={disabled} onClick={() => act('Empty-state action')}>
          Explore locally
        </button>
      </div>
    );
  }
  if (record.level === 'error') {
    return (
      <div className={styles.error} role="alert">
        <AlertTriangle />
        <div>
          <strong>User-facing error was not observed</strong>
          <p>
            This is a guarded fictional boundary. Runtime console findings are documented
            separately.
          </p>
        </div>
        <button type="button" disabled={disabled} onClick={() => act('Retry')}>
          Retry locally
        </button>
      </div>
    );
  }
  if (record.level === 'atomic') {
    return (
      <div className={styles.atomic}>
        {['Button', 'Field', 'Menu', 'Card', 'Row', 'Status'].map((label) => (
          <button type="button" disabled={disabled} onClick={() => act(label)} key={label}>
            {label}
          </button>
        ))}
      </div>
    );
  }
  if (record.level === 'action') {
    return (
      <div className={styles.actions}>
        {record.actions.map((action, index) => (
          <button
            type="button"
            disabled={disabled}
            onClick={() => act(`Action ${index + 1}`)}
            key={action}
          >
            {action.split('|').slice(1).join('|')}
          </button>
        ))}
      </div>
    );
  }
  if (record.level === 'state') {
    return (
      <div className={styles.states}>
        {['Default', 'Selected', 'Disabled', 'Expanded'].map((label, index) => (
          <button
            type="button"
            disabled={disabled || index === 2}
            aria-pressed={index === 1}
            onClick={() => act(label)}
            key={label}
          >
            {label}
          </button>
        ))}
      </div>
    );
  }
  if (record.level === 'interaction') {
    return (
      <div className={styles.interaction}>
        <button
          type="button"
          aria-expanded="true"
          disabled={disabled}
          onClick={() => act('Trigger')}
        >
          View options
        </button>
        <aside>
          <input aria-label="Search fictional options" placeholder="Search" />
          <button type="button" disabled={disabled} onClick={() => act('Option')}>
            Fictional option
          </button>
          <button type="button" disabled>
            Provider write disabled
          </button>
        </aside>
      </div>
    );
  }
  return (
    <div className={styles.screen}>
      <aside>
        <b>f</b>
        {['Da', 'Co', 'Ac', 'De'].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </aside>
      <main>
        <header>
          <strong>{record.parentTitle}</strong>
          <input aria-label="Search fictional CRM" placeholder="Search your CRM" disabled />
        </header>
        <section>
          <div className={styles.toolbar}>
            <span />
            <span />
            <button type="button" disabled={disabled} onClick={() => act('Primary action')}>
              Local action
            </button>
          </div>
          <div className={styles.rows}>
            <span />
            <span />
            <span />
          </div>
        </section>
      </main>
    </div>
  );
}

export function FreshsalesDeepAuditPreview({ record, mode = 'evidence', disabled = false }: Props) {
  const [notice, setNotice] = useState(
    mode === 'boundary' ? 'Boundary fixture active. No provider request is allowed.' : ''
  );
  const [query, setQuery] = useState('');
  const act = (label: string) =>
    setNotice(
      `${label} changed only this fictional local fixture. Nothing was sent to Freshsales.`
    );
  const fixture = Object.entries(record.fixture).filter(([key, value]) =>
    `${key} ${value}`.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className={styles.canvas}>
      <header className={styles.hero}>
        <span className={styles.logo}>f</span>
        <div>
          <small>
            {record.category} · {record.level} level
          </small>
          <h2>{record.parentTitle}</h2>
          <p>{record.summary}</p>
        </div>
        <div className={record.observed ? styles.statusObserved : styles.statusReconstructed}>
          {record.observed ? <CheckCircle2 /> : <CircleDashed />}
          {record.observed ? 'Observed' : 'Reconstruction'}
        </div>
      </header>
      <section className={styles.stage}>
        <FixtureCanvas record={record} disabled={disabled} act={act} />
      </section>
      {notice && (
        <p className={styles.notice} role="status">
          {notice}
        </p>
      )}
      <div className={styles.evidenceGrid}>
        <EvidenceCard title="DOM structure" items={record.dom} icon={<Braces />} />
        <section className={styles.evidenceCard}>
          <header>
            <MousePointerClick />
            <h3>User actions</h3>
          </header>
          <ol>
            {record.actions.map((action, index) => (
              <li key={action}>
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => act(`Action ${index + 1}`)}
                >
                  {action}
                </button>
              </li>
            ))}
          </ol>
        </section>
        <EvidenceCard title="Network and API" items={record.network} icon={<Database />} />
      </div>
      <section className={styles.fixture}>
        <header>
          <Layers3 />
          <h3>Registered fictional fixture</h3>
        </header>
        <input
          aria-label="Filter fixture properties"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Filter fixture metadata"
        />
        {fixture.map(([key, value]) => (
          <div key={key}>
            <b>{key.replaceAll('_', ' ')}</b>
            <span>{value}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

import { useState } from 'react';
import styles from './ahrefs-states.module.css';

export interface AhrefsStatePrimitiveProps {
  disabled?: boolean;
}

function GuardStatus({ value }: { value: string }) {
  return value ? (
    <p className={styles.status} role="status">
      {value}
    </p>
  ) : null;
}

function useLocalGuard(disabled = false) {
  const [status, setStatus] = useState('');
  return {
    status,
    guard: (action: string) =>
      !disabled &&
      setStatus(`${action} needs live verification. No Ahrefs account action was run.`),
  };
}

const alertTypes = ['Backlinks', 'New keywords', 'Mentions', 'Rank Tracker'];
export function AhrefsAlertCategoryTabs({ disabled = false }: AhrefsStatePrimitiveProps) {
  const [active, setActive] = useState('Backlinks');
  return (
    <section className={styles.stage}>
      <div className={styles.tabs} role="tablist" aria-label="Alert category">
        {alertTypes.map((tab) => (
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
      <p className={styles.selection} role="status">
        Showing {active} alerts
      </p>
    </section>
  );
}

export function AhrefsAlertQuotaState({ disabled = false }: AhrefsStatePrimitiveProps) {
  return (
    <section className={styles.stage}>
      <div className={styles.quotaRow}>
        <button type="button" disabled>
          ＋ New alert
        </button>
        <p>You have reached the maximum number of alerts. Please upgrade your plan.</p>
        <strong>0 alerts</strong>
      </div>
      {disabled && <p className={styles.selection}>Preview controls disabled</p>}
    </section>
  );
}

export function AhrefsEmptyResultsRow({ disabled = false }: AhrefsStatePrimitiveProps) {
  return (
    <section className={styles.stage}>
      <div className={styles.tableFrame} aria-disabled={disabled}>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Target URL</th>
              <th>Scope</th>
              <th>DR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>
                <span className={styles.emptyIcon}>⌕</span>No results found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function AhrefsDateRangeFilter({ disabled = false }: AhrefsStatePrimitiveProps) {
  const { status, guard } = useLocalGuard(disabled);
  return (
    <section className={styles.stage}>
      <button
        className={styles.control}
        type="button"
        disabled={disabled}
        onClick={() => guard('Changes range')}
      >
        Changes: Last 3 months⌄
      </button>
      <GuardStatus value={status} />
    </section>
  );
}

export function AhrefsDomainSearchField({ disabled = false }: AhrefsStatePrimitiveProps) {
  const [query, setQuery] = useState('');
  return (
    <section className={styles.stage}>
      <label className={styles.search}>
        <span aria-hidden="true">⌕</span>
        <span className={styles.srOnly}>Search domains</span>
        <input
          value={query}
          disabled={disabled}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search domains"
        />
      </label>
      <p className={styles.selection} role="status">
        {query ? `Filtering for ${query}` : 'All domains'}
      </p>
    </section>
  );
}

export function AhrefsExportAction({ disabled = false }: AhrefsStatePrimitiveProps) {
  const { status, guard } = useLocalGuard(disabled);
  return (
    <section className={styles.stage}>
      <button
        className={styles.control}
        type="button"
        disabled={disabled}
        onClick={() => guard('Export')}
      >
        ⇩ Export
      </button>
      <GuardStatus value={status} />
    </section>
  );
}

export function AhrefsRankPagination({ disabled = false }: AhrefsStatePrimitiveProps) {
  const [page, setPage] = useState(1);
  return (
    <section className={styles.stage}>
      <nav className={styles.pagination} aria-label="Ahrefs Rank pages">
        {[1, 2, 3, 4, 5].map((item) => (
          <button
            key={item}
            type="button"
            aria-current={page === item ? 'page' : undefined}
            disabled={disabled}
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        ))}
        <span>…</span>
        <button type="button" disabled={disabled} onClick={() => setPage(20001)}>
          20,001
        </button>
        <button
          type="button"
          aria-label="Next page"
          disabled={disabled || page === 20001}
          onClick={() => setPage(Math.min(20001, page + 1))}
        >
          ›
        </button>
      </nav>
      <p className={styles.selection} role="status">
        Page {page}
      </p>
    </section>
  );
}

export function AhrefsCreateEmptyStateAction({ disabled = false }: AhrefsStatePrimitiveProps) {
  const { status, guard } = useLocalGuard(disabled);
  const [kind, setKind] = useState<'portfolio' | 'report'>('portfolio');
  return (
    <section className={styles.stage}>
      <div className={styles.segmented} role="group" aria-label="Empty-state action type">
        <button
          type="button"
          aria-pressed={kind === 'portfolio'}
          disabled={disabled}
          onClick={() => setKind('portfolio')}
        >
          Portfolio
        </button>
        <button
          type="button"
          aria-pressed={kind === 'report'}
          disabled={disabled}
          onClick={() => setKind('report')}
        >
          Report
        </button>
      </div>
      <button
        className={styles.primary}
        type="button"
        disabled={disabled}
        onClick={() => guard(`Create ${kind}`)}
      >
        ＋ Create {kind}
      </button>
      <GuardStatus value={status} />
    </section>
  );
}

export function AhrefsDataTableHeader({ disabled = false }: AhrefsStatePrimitiveProps) {
  return (
    <section className={styles.stage}>
      <div className={styles.tableFrame} aria-disabled={disabled}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Domain</th>
              <th>
                <button type="button" disabled={disabled}>
                  Ahrefs Rank ↕
                </button>
              </th>
              <th>
                <button type="button" disabled={disabled}>
                  Change ↕
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>atlas.example</td>
              <td>1</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function AhrefsRankToolbar({ disabled = false }: AhrefsStatePrimitiveProps) {
  const { status, guard } = useLocalGuard(disabled);
  const [query, setQuery] = useState('');
  return (
    <section className={styles.stage}>
      <div className={styles.toolbar}>
        <button type="button" disabled={disabled} onClick={() => guard('Add filter')}>
          ＋ Add filter
        </button>
        <button type="button" disabled={disabled} onClick={() => guard('Changes range')}>
          Changes: Last 3 months⌄
        </button>
        <label className={styles.search}>
          <span aria-hidden="true">⌕</span>
          <span className={styles.srOnly}>Search domains</span>
          <input
            value={query}
            disabled={disabled}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search domains"
          />
        </label>
        <button type="button" disabled={disabled} onClick={() => guard('Export')}>
          ⇩ Export
        </button>
      </div>
      <p className={styles.selection}>{query ? `Query: ${query}` : '1,000,001 domains'}</p>
      <GuardStatus value={status} />
    </section>
  );
}

import type { PropsWithChildren } from 'react';
import styles from './ahrefs-expanded.module.css';

interface AhrefsExpandedShellProps extends PropsWithChildren {
  active?: string;
  disabled?: boolean;
  onGuard?: (action: string) => void;
  minimal?: boolean;
}

const tools = [
  'Dashboard',
  'Brand Radar',
  'AI Content Helper',
  'SMM',
  'Site Explorer',
  'Keywords Explorer',
];

export function AhrefsExpandedShell({
  children,
  active,
  disabled = false,
  onGuard,
  minimal = false,
}: AhrefsExpandedShellProps) {
  const guard = (action: string) => {
    if (!disabled) onGuard?.(action);
  };
  return (
    <div className={styles.root}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <strong className={styles.logo}>
            a<span>h</span>refs
          </strong>
          {!minimal && (
            <nav aria-label="Ahrefs products">
              <button type="button" disabled={disabled} onClick={() => guard('All tools menu')}>
                ▦ All tools
              </button>
              {tools.map((tool) => (
                <button
                  type="button"
                  key={tool}
                  disabled={disabled}
                  className={tool === active ? styles.active : ''}
                  onClick={() => guard(`${tool} navigation`)}
                >
                  {tool}
                </button>
              ))}
              <button type="button" disabled={disabled} onClick={() => guard('More menu')}>
                More⌄
              </button>
            </nav>
          )}
          <button
            className={styles.cancel}
            type="button"
            disabled={disabled}
            onClick={() => guard(minimal ? 'Cancel project setup' : 'Workspace menu')}
          >
            {minimal ? '× Cancel' : 'Atlas workspace⌄'}
          </button>
        </header>
        {children}
      </div>
    </div>
  );
}

export function AhrefsGatePanel({
  title,
  description,
  actionLabel,
  preview = 'report',
  disabled = false,
  onGuard,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  preview?: 'report' | 'batch' | 'none';
  disabled?: boolean;
  onGuard?: (action: string) => void;
}) {
  return (
    <main className={styles.gateMain}>
      <section className={styles.gateHero}>
        <h1>{title}</h1>
        <p>{description}</p>
        {actionLabel && (
          <button
            className={styles.primary}
            type="button"
            disabled={disabled}
            onClick={() => onGuard?.(actionLabel)}
          >
            {actionLabel}
          </button>
        )}
      </section>
      {preview !== 'none' && (
        <div
          className={`${styles.reportPreview} ${preview === 'batch' ? styles.batchPreview : ''}`}
          aria-label={`${title} tutorial preview`}
        >
          <div className={styles.previewToolbar}>
            <span>ahrefs</span>
            <i />
            <i />
            <i />
          </div>
          <div className={styles.previewFilters}>
            <span>Monthly volume⌄</span>
            <span>United States⌄</span>
            <span>＋ More filters</span>
          </div>
          <div className={styles.previewTable}>
            {Array.from({ length: 42 }, (_, index) => (
              <span key={index} className={(index + 1) % 8 === 0 ? styles.highlightCell : ''}>
                {index % 7 === 0 ? 'Target' : index % 5 === 0 ? '42,680' : '—'}
              </span>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

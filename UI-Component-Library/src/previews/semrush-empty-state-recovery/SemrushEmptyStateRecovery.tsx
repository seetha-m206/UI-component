import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export type SemrushEmptyStateVariant = 'search' | 'hidden' | 'country';
export interface SemrushEmptyStateRecoveryProps { variant?: SemrushEmptyStateVariant; query?: string; recoverable?: boolean; }
const copy = {
  search: { title: 'Nothing found', body: 'Try another project name or domain.', icon: '⌕' },
  hidden: { title: 'No hidden issues', body: 'Hidden audit issues will appear here.', icon: '✓' },
  country: { title: 'No mentions in this location', body: 'Try Worldwide or another available market.', icon: '◎' },
};
export function SemrushEmptyStateRecovery({ variant = 'search', query = 'fictional-query', recoverable = true }: SemrushEmptyStateRecoveryProps) {
  const [restored, setRestored] = useState(false);
  const state = copy[variant];
  return <div className={styles.stage}><section className={styles.card} aria-label="Empty state specimen"><h3>Result state</h3>{restored ? <div className={styles.asyncPanel} role="status"><strong>Results restored locally.</strong><span className={styles.muted}>No live report request was made.</span></div> : <div className={styles.empty} role="status"><span className={styles.emptyIcon} aria-hidden="true">{state.icon}</span><strong>{state.title}</strong>{variant === 'search' && <span>“{query}”</span>}<small>{state.body}</small>{recoverable && <button className={`${styles.button} ${styles.secondary}`} type="button" onClick={() => setRestored(true)}>{variant === 'search' ? 'Show all projects' : variant === 'country' ? 'View Worldwide' : 'Return to Issues'}</button>}</div>}</section></div>;
}

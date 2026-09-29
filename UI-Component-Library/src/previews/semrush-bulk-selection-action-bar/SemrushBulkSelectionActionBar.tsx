import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export interface SemrushBulkSelectionActionBarProps { initialCount?: number; disabled?: boolean; }
export function SemrushBulkSelectionActionBar({ initialCount = 1, disabled = false }: SemrushBulkSelectionActionBarProps) {
  const [count, setCount] = useState(initialCount);
  return <div className={styles.stage}><section className={styles.card} aria-label="Bulk selection specimen"><h3>Bulk selection action bar</h3>{count > 0 ? <div className={styles.bulk} role="region" aria-label="Selected rows"><strong>{count}</strong><span>{count === 1 ? 'row selected' : 'rows selected'}</span><button className={`${styles.button} ${styles.ghost}`} type="button" disabled={disabled} onClick={() => setCount(0)}>Deselect all</button><button className={`${styles.button} ${styles.secondary}`} type="button" disabled>Hide · needs verification</button></div> : <p className={styles.status} role="status">Selection cleared.</p>}</section></div>;
}

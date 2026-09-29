import styles from '../semrush-action-primitives.module.css';

export type SemrushAsyncState = 'loading' | 'loaded' | 'error';
export type SemrushAsyncSurface = 'table' | 'chart' | 'card';
export interface SemrushAsyncStatusStateProps { state?: SemrushAsyncState; surface?: SemrushAsyncSurface; }
export function SemrushAsyncStatusState({ state = 'loading', surface = 'table' }: SemrushAsyncStatusStateProps) {
  return <div className={styles.stage}><section className={styles.card} aria-label="Asynchronous status specimen"><h3>{surface === 'table' ? 'Affected pages' : surface === 'chart' ? 'Visibility trend' : 'Folder metrics'}</h3>{state === 'loading' && <div className={styles.asyncPanel} role="status" aria-live="polite" aria-busy="true" aria-label={`${surface} loading`}><strong>Loading</strong><span className={styles.skeleton} /><span className={styles.skeleton} /><span className={styles.skeleton} /></div>}{state === 'loaded' && <div className={styles.asyncPanel} role="status"><strong>Data ready</strong><span className={styles.muted}>Synthetic content is available for this {surface}.</span></div>}{state === 'error' && <div className={styles.asyncPanel} role="alert"><strong>Unable to load data</strong><span className={styles.muted}>Synthetic error fixture. Live failure copy was not observed.</span></div>}</section></div>;
}

import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export type SearchClearState = 'empty' | 'populated' | 'no-results';
export interface SemrushSearchClearActionProps { initialState?: SearchClearState; placeholder?: string; disabled?: boolean; }
export function SemrushSearchClearAction({ initialState = 'empty', placeholder = 'Website or folder name', disabled = false }: SemrushSearchClearActionProps) {
  const initial = initialState === 'empty' ? '' : initialState === 'populated' ? 'northstar.example' : 'no-match-example.invalid';
  const [value, setValue] = useState(initial);
  const [applied, setApplied] = useState(initialState === 'no-results');
  const clear = () => { setValue(''); setApplied(false); };
  return <div className={styles.stage}><section className={styles.card} aria-label="Search and clear specimen"><h3>Search and clear</h3><label className={styles.search}><span aria-hidden="true">⌕</span><input aria-label="Search" value={value} placeholder={placeholder} disabled={disabled} onChange={(event) => { setValue(event.target.value); setApplied(false); }} />{value && <button type="button" aria-label="Clear search" onClick={clear}>×</button>}<button type="button" aria-label="Apply search" disabled={disabled || !value.trim()} onClick={() => setApplied(true)}>↵</button></label>{applied && <div className={styles.empty} role="status"><strong>No results found</strong><small>Try to modify your search to view results.</small><button className={`${styles.button} ${styles.secondary}`} type="button" onClick={clear}>Clear filters</button></div>}</section></div>;
}

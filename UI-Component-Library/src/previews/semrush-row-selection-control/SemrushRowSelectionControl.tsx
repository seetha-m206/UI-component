import { useEffect, useRef, useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export interface SemrushRowSelectionControlProps { initialSelected?: number; disabled?: boolean; indeterminate?: boolean; }
const rows = ['Homepage audit', 'Pricing page audit', 'Documentation audit'];
export function SemrushRowSelectionControl({ initialSelected = 0, disabled = false, indeterminate = false }: SemrushRowSelectionControlProps) {
  const [selected, setSelected] = useState(() => new Set(rows.slice(0, initialSelected)));
  const selectAllRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (selectAllRef.current) selectAllRef.current.indeterminate = indeterminate || (selected.size > 0 && selected.size < rows.length); }, [indeterminate, selected]);
  const toggle = (row: string) => setSelected((current) => { const next = new Set(current); if (next.has(row)) next.delete(row); else next.add(row); return next; });
  return <div className={styles.stage}><section className={styles.card} aria-label="Row selection specimen"><div className={styles.row}><input ref={selectAllRef} type="checkbox" aria-label="Select all rows" checked={selected.size === rows.length} disabled={disabled} onChange={(event) => setSelected(new Set(event.target.checked ? rows : []))} /><strong>{selected.size} selected</strong></div><div className={styles.selectionList}>{rows.map((row) => <label className={styles.selectionRow} data-selected={selected.has(row)} key={row}><input type="checkbox" aria-label={row} checked={selected.has(row)} disabled={disabled} onChange={() => toggle(row)} /><span>{row}</span><small aria-hidden="true">Fictional URL</small></label>)}</div>{selected.size > 1 && <p className={styles.status} role="status">Multi-row action behavior needs verification.</p>}</section></div>;
}

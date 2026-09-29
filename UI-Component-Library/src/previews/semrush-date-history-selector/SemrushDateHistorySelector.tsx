import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export interface SemrushDateHistorySelectorProps { initialPeriod?: 'current' | 'previous' | 'older'; disabled?: boolean; }

const periods = [
  { id: 'current', label: 'Sep 29, 2026', note: 'Current' },
  { id: 'previous', label: 'Sep 22, 2026', note: 'Historical' },
  { id: 'older', label: 'Sep 15, 2026', note: 'Historical' },
] as const;

export function SemrushDateHistorySelector({ initialPeriod = 'current', disabled = false }: SemrushDateHistorySelectorProps) {
  const [selected, setSelected] = useState(initialPeriod);
  const [open, setOpen] = useState(false);
  const period = periods.find((item) => item.id === selected) ?? periods[0];

  return <div className={styles.stage}><section className={styles.card} aria-label="Date history selector specimen">
    <h3>Historical update</h3>
    <div className={styles.historyControl}>
      <button className={styles.historyTrigger} type="button" aria-haspopup="listbox" aria-expanded={open} disabled={disabled} onClick={() => setOpen((value) => !value)}>
        <span><strong>{period.label}</strong><br /><small>{period.note}</small></span><span aria-hidden="true">⌄</span>
      </button>
      {open && <div className={`${styles.menu} ${styles.historyMenu}`} role="listbox" aria-label="Available historical updates">
        {periods.map((item) => <button className={styles.historyOption} type="button" role="option" aria-selected={selected === item.id} key={item.id} onClick={() => { setSelected(item.id); setOpen(false); }}><span>{item.label}</span><small>{item.note}</small></button>)}
        <button className={styles.historyOption} type="button" role="option" aria-selected="false" disabled><span>Sep 08, 2026</span><small>Unavailable</small></button>
      </div>}
    </div>
    <p className={styles.status} role="status">Showing the {period.note.toLowerCase()} snapshot from {period.label}.</p>
  </section></div>;
}

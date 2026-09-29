import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export interface SemrushPageSizeControlProps { initialSize?: 10 | 20 | 50 | 100; initiallyOpen?: boolean; disabled?: boolean; }
export function SemrushPageSizeControl({ initialSize = 10, initiallyOpen = false, disabled = false }: SemrushPageSizeControlProps) {
  const [size, setSize] = useState(initialSize);
  const [open, setOpen] = useState(initiallyOpen);
  return <div className={styles.stage}><section className={styles.card} aria-label="Pagination specimen"><h3>Page-size pagination</h3><nav className={styles.pagination} aria-label="Pagination"><span>Page:</span><input aria-label="Page" value="1" disabled /><span>of 1</span><div className={styles.menuWrap}><button className={`${styles.button} ${styles.secondary}`} type="button" aria-haspopup="listbox" aria-expanded={open} disabled={disabled} onClick={() => setOpen((value) => !value)}>{size}⌄</button>{open && <div className={`${styles.menu} ${styles.pageMenu}`} role="listbox" aria-label="Rows per page">{[10, 20, 50, 100].map((option) => <button type="button" role="option" aria-selected={size === option} key={option} onClick={() => { setSize(option as 10 | 20 | 50 | 100); setOpen(false); }}>{option}</button>)}</div>}</div></nav></section></div>;
}

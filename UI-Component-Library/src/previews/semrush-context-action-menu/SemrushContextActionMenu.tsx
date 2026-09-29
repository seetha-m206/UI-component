import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export interface SemrushContextActionMenuProps { initiallyOpen?: boolean; disabled?: boolean; }
export function SemrushContextActionMenu({ initiallyOpen = false, disabled = false }: SemrushContextActionMenuProps) {
  const [open, setOpen] = useState(initiallyOpen);
  const [status, setStatus] = useState('');
  const choose = (label: string) => { setStatus(`${label} needs verification.`); setOpen(false); };
  return <div className={styles.stage}><section className={styles.card} aria-label="Context action menu specimen"><h3>Context action menu</h3><div className={styles.menuWrap}><button className={`${styles.button} ${styles.icon}`} type="button" aria-haspopup="menu" aria-expanded={open} aria-label="Open folder actions" disabled={disabled} onClick={() => setOpen((value) => !value)}>⋮</button>{open && <div className={styles.menu} role="menu" aria-label="Folder actions">{['Share', 'Pin', 'Tags', 'Settings'].map((item) => <button type="button" role="menuitem" onClick={() => choose(item)} key={item}>{item}</button>)}<button className={styles.dangerItem} type="button" role="menuitem" onClick={() => choose('Delete')}>Delete</button></div>}</div>{status && <p className={styles.status} role="status">{status}</p>}</section></div>;
}

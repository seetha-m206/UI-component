import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export interface SemrushCampaignActionGroupProps { compact?: boolean; disabled?: boolean; }
const actions = ['Rerun audit', 'PDF', 'Export', 'Share', 'Settings'];
export function SemrushCampaignActionGroup({ compact = false, disabled = false }: SemrushCampaignActionGroupProps) {
  const [message, setMessage] = useState('No action selected.');
  return <div className={styles.stage}><section className={styles.card} aria-label="Campaign action group specimen"><h3>Campaign actions</h3><div className={styles.actionGroup}>{actions.map((action, index) => <button className={`${styles.button} ${index === 0 ? styles.danger : index < 3 ? styles.secondary : styles.ghost}`} type="button" disabled={disabled} key={action} aria-label={compact ? action : undefined} onClick={() => setMessage(`${action} needs verification before it can run.`)}>{compact && index > 0 ? action === 'Settings' ? '⚙' : action === 'Share' ? '↗' : action : action}{compact && index > 0 && <span className={styles.srOnly}>{action}</span>}</button>)}</div><p className={styles.status} role="status">{message}</p></section></div>;
}

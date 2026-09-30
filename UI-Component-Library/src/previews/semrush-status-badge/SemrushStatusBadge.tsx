import styles from '../semrush-action-primitives.module.css';

export type SemrushStatusTone = 'good' | 'warning' | 'critical' | 'neutral' | 'loading';
export interface SemrushStatusBadgeProps { tone?: SemrushStatusTone; label?: string; }
const defaultLabels: Record<SemrushStatusTone, string> = { good: 'Healthy', warning: 'Needs attention', critical: 'Critical', neutral: 'Not configured', loading: 'Updating' };

export function SemrushStatusBadge({ tone = 'good', label }: SemrushStatusBadgeProps) {
  const text = label ?? defaultLabels[tone];
  return <div className={styles.stage}><section className={styles.card} aria-label="Status badge specimen"><h3>Semantic status</h3><span className={`${styles.statusBadge} ${styles[`status${tone[0].toUpperCase()}${tone.slice(1)}`]}`} role="status">{text}</span><p className={styles.muted}>Color is paired with text and a status announcement.</p></section></div>;
}

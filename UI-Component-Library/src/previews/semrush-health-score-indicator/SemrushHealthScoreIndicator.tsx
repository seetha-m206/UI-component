import styles from '../semrush-action-primitives.module.css';

export interface SemrushHealthScoreIndicatorProps { score?: number | null; label?: string; loading?: boolean; }
export function SemrushHealthScoreIndicator({ score = 84, label = 'Site Health', loading = false }: SemrushHealthScoreIndicatorProps) {
  const bounded = score == null ? 0 : Math.min(100, Math.max(0, score));
  const tone = bounded >= 80 ? '#2f9b58' : bounded >= 50 ? '#d58a16' : '#c94540';
  if (loading) return <div className={styles.stage}><section className={styles.card} aria-label="Health score specimen"><h3>{label}</h3><div className={styles.skeleton} aria-label="Loading score" /><div className={styles.skeleton} /></section></div>;
  return <div className={styles.stage}><section className={styles.card} aria-label="Health score specimen"><h3>{label}</h3>{score == null ? <div className={styles.empty}><strong>No score yet</strong><small>Set up or rerun the analysis to populate this metric. Action needs verification.</small></div> : <div className={styles.scoreLayout}><div className={styles.scoreRing} style={{ '--score': bounded, '--score-color': tone } as React.CSSProperties} role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={bounded}><span className={styles.scoreValue}><strong>{bounded}</strong><small>/ 100</small></span></div><div className={styles.scoreDetails}><strong>{bounded >= 80 ? 'Healthy' : bounded >= 50 ? 'Needs attention' : 'Critical'}</strong><progress value={bounded} max={100}>{bounded}%</progress><span className={styles.muted}>Higher scores represent fewer detected issues in this fixture.</span></div></div>}</section></div>;
}

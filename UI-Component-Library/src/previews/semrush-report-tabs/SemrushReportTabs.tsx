import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export type SemrushReportTabsKind = 'site-audit' | 'visibility' | 'metric';
export interface SemrushReportTabsProps { kind?: SemrushReportTabsKind; initialTab?: string; disabled?: boolean; }
const tabSets: Record<SemrushReportTabsKind, string[]> = {
  'site-audit': ['Overview', 'Issues', 'Crawled Pages', 'Statistics', 'Compare Crawls', 'Progress', 'JS Impact'],
  visibility: ['Performing Topics', 'Topic Opportunities', 'Cited Sources', 'Source Opportunities', 'Cited Pages'],
  metric: ['AI Visibility', 'Mentions', 'Average Position'],
};
export function SemrushReportTabs({ kind = 'site-audit', initialTab, disabled = false }: SemrushReportTabsProps) {
  const tabs = tabSets[kind];
  const [selected, setSelected] = useState(initialTab && tabs.includes(initialTab) ? initialTab : tabs[0]);
  return <div className={styles.stage}><section className={styles.card} aria-label="Report tabs specimen"><h3>Report navigation</h3><div className={styles.tabs} role="tablist" aria-label={`${kind} report tabs`}>{tabs.map((tab) => <button className={styles.tab} type="button" role="tab" aria-selected={selected === tab} key={tab} disabled={disabled} onClick={() => setSelected(tab)}>{tab}</button>)}</div><p className={styles.status} role="status">{selected} selected locally. Report navigation needs verification.</p></section></div>;
}

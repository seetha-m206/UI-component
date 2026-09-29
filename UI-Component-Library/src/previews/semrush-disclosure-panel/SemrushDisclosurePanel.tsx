import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export type SemrushDisclosureVariant = 'faq' | 'remediation' | 'recommendations';
export interface SemrushDisclosurePanelProps {
  variant?: SemrushDisclosureVariant;
  initialOpen?: string[];
  disabled?: boolean;
}

const content = {
  faq: [
    ['coverage', 'Which AI platforms are covered?', 'Coverage depends on the selected report and available provider data.'],
    ['updates', 'How often is the data updated?', 'The observed report described an approximately seven-day update cycle.'],
    ['score', 'How is visibility calculated?', 'The interface combines observed mentions and position signals into a comparative score.'],
  ],
  remediation: [
    ['fix', 'How to fix', 'Review the affected pages, confirm the issue context, and apply the documented remediation before rerunning the audit.'],
  ],
  recommendations: [
    ['recommendations', 'Recommendations', 'Prioritized opportunities appear here when enough evidence is available.'],
  ],
} as const;

export function SemrushDisclosurePanel({ variant = 'faq', initialOpen = [], disabled = false }: SemrushDisclosurePanelProps) {
  const [openIds, setOpenIds] = useState<string[]>(initialOpen);
  const toggle = (id: string) => setOpenIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  return <div className={styles.stage}><section className={styles.card} aria-label="Disclosure panel specimen"><h3>{variant === 'faq' ? 'Frequently asked questions' : variant === 'remediation' ? 'Issue guidance' : 'Report recommendations'}</h3><div className={styles.disclosureList}>{content[variant].map(([id, title, body]) => { const open = openIds.includes(id); const panelId = `semrush-disclosure-${id}`; return <div className={styles.disclosure} key={id}><button type="button" aria-expanded={open} aria-controls={panelId} disabled={disabled} onClick={() => toggle(id)}><span>{title}</span><span aria-hidden="true">{open ? '−' : '+'}</span></button>{open && <div className={styles.disclosurePanel} id={panelId} role="region" aria-label={title}>{body}</div>}</div>; })}</div></section></div>;
}

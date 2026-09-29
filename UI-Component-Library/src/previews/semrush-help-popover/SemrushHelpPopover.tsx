import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export type SemrushHelpTopic = 'target' | 'updates' | 'methodology';
export interface SemrushHelpPopoverProps { topic?: SemrushHelpTopic; initialOpen?: boolean; disabled?: boolean; }
const help = {
  target: ['Target settings', 'Location and language shape the analysis. Another target requires a separate brand profile.'],
  updates: ['Update frequency', 'Observed report data is updated approximately every 7 days.'],
  methodology: ['Data methodology', 'Questions are collected, run across available AI platforms, and combined into report evidence and recommendations.'],
} as const;
export function SemrushHelpPopover({ topic = 'updates', initialOpen = false, disabled = false }: SemrushHelpPopoverProps) {
  const [open, setOpen] = useState(initialOpen); const [title, body] = help[topic]; const id = `semrush-help-${topic}`;
  return <div className={styles.stage}><section className={styles.card} aria-label="Help popover specimen"><h3>{title}</h3><div className={styles.tooltipWrap}><button className={styles.helpTrigger} type="button" aria-label={`About ${title}`} aria-expanded={open} aria-controls={id} disabled={disabled} onClick={() => setOpen((value) => !value)}>?</button>{open && <div className={styles.tooltip} id={id} role="tooltip">{body}</div>}</div></section></div>;
}

import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export interface SemrushProjectSelectorProps { initialOpen?: boolean; initialProject?: string; disabled?: boolean; }
const projects = [{ name: 'Northstar Workspace', domain: 'northstar.example' }, { name: 'Harbor Research', domain: 'harbor.example' }];
export function SemrushProjectSelector({ initialOpen = false, initialProject = projects[0].name, disabled = false }: SemrushProjectSelectorProps) {
  const [open, setOpen] = useState(initialOpen);
  const [selected, setSelected] = useState(initialProject);
  return <div className={styles.stage}><section className={styles.card} aria-label="Project selector specimen"><h3>Site Audit project</h3><div className={styles.menuWrap}><button className={styles.trigger} type="button" role="combobox" aria-label={`Select Site Audit project. Current project: ${selected}`} aria-expanded={open} aria-controls="semrush-project-options" disabled={disabled} onClick={() => setOpen((value) => !value)}><span>{selected}</span><span aria-hidden="true">⌄</span></button>{open && <div className={`${styles.menu} ${styles.selectorPanel}`} id="semrush-project-options" role="listbox" aria-label="Projects">{projects.map((project) => <button className={styles.selectorOption} type="button" role="option" aria-selected={selected === project.name} key={project.name} onClick={() => { setSelected(project.name); setOpen(false); }}><strong>{project.name}</strong><small>{project.domain}</small></button>)}<button className={`${styles.selectorOption} ${styles.ghost}`} type="button" disabled>＋ Create new SEO project · needs verification</button></div>}</div><p className={styles.status} role="status">Current project: {selected}</p></section></div>;
}

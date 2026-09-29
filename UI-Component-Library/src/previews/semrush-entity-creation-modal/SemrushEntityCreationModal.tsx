import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export type EntityCreationModalState = 'default' | 'website-menu' | 'validation-error';
export interface SemrushEntityCreationModalProps { initialState?: EntityCreationModalState; disabled?: boolean; }
export function SemrushEntityCreationModal({ initialState = 'default', disabled = false }: SemrushEntityCreationModalProps) {
  const [visible, setVisible] = useState(true);
  const [websiteOpen, setWebsiteOpen] = useState(initialState === 'website-menu');
  const [name, setName] = useState('');
  if (!visible) return <div className={styles.stage}><p className={styles.status} role="status">Creation cancelled. No data was created.</p></div>;
  return <div className={styles.dialogBackdrop}><section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="entity-modal-title"><div className={styles.dialogTitle}><h3 id="entity-modal-title">Create folder</h3><button type="button" aria-label="Close" onClick={() => setVisible(false)}>×</button></div><label className={styles.field}>Website<button type="button" role="combobox" aria-expanded={websiteOpen} disabled={disabled} onClick={() => setWebsiteOpen((value) => !value)}>Select a website⌄</button></label>{websiteOpen && <div className={styles.menu} role="listbox" aria-label="Website suggestions"><button type="button" role="option" aria-selected="false">northstar.example</button><button type="button" role="option" aria-selected="false">harbor.example</button></div>}<p>Don’t have a website? <button className={styles.ghost} type="button" disabled>Add a competitor</button></p><label className={styles.field}>Name<input value={name} disabled={disabled} onChange={(event) => setName(event.target.value)} /></label>{initialState === 'validation-error' && <span className={styles.error} role="alert">Choose a website before creating the folder. Synthetic validation state.</span>}<label className={styles.checkbox}><input type="checkbox" disabled />Share once created</label><div className={styles.actions}><button className={`${styles.button} ${styles.primary}`} type="button" disabled>Create · needs verification</button><button className={`${styles.button} ${styles.secondary}`} type="button" onClick={() => setVisible(false)}>Cancel</button></div></section></div>;
}

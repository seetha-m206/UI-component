import { useState } from 'react';
import styles from '../semrush-action-primitives.module.css';

export type BacklinkWizardStep = 'scope' | 'brand' | 'categories' | 'countries';
export interface SemrushBacklinkAuditSetupWizardProps { initialStep?: BacklinkWizardStep; showAlert?: boolean; }
const steps: Array<{ id: BacklinkWizardStep; label: string; optional?: boolean }> = [{ id: 'scope', label: 'Campaign scope' }, { id: 'brand', label: 'Brand settings', optional: true }, { id: 'categories', label: 'Domain categories', optional: true }, { id: 'countries', label: 'Target countries', optional: true }];

export function SemrushBacklinkAuditSetupWizard({ initialStep = 'scope', showAlert = false }: SemrushBacklinkAuditSetupWizardProps) {
  const [step, setStep] = useState<BacklinkWizardStep>(initialStep); const [closed, setClosed] = useState(false);
  if (closed) return <div className={styles.stage}><section className={styles.card}><strong>Setup closed without saving.</strong><button className={`${styles.button} ${styles.secondary}`} onClick={() => setClosed(false)}>Reopen wizard</button></section></div>;
  return <div className={styles.dialogBackdrop}><section className={styles.wizard} role="dialog" aria-modal="true" aria-labelledby="backlink-wizard-title">
    <div className={styles.wizardRail} role="tablist" aria-orientation="vertical"><strong id="backlink-wizard-title">Backlink Audit Settings</strong>{steps.map((item, index) => <button key={item.id} className={styles.wizardStep} role="tab" aria-selected={step === item.id} onClick={() => setStep(item.id)}>{index + 1}  {item.label}{item.optional && <small> · optional</small>}</button>)}</div>
    <div className={styles.wizardPanel}><div className={styles.panelTitle}><h2>{steps.find((item) => item.id === step)?.label}</h2><button className={styles.feedbackClose} aria-label="Close" onClick={() => setClosed(true)}>×</button></div>
      {showAlert && <div className={`${styles.feedback} ${styles.feedbackWarning}`} role="alert"><span>!</span><span>Connecting another source is recommended. Fixture copy needs verification.</span></div>}
      {step === 'scope' && <><p>Select a scope for the fictional backlink profile audit.</p><div className={styles.choiceList}><label className={styles.choice}><input type="radio" defaultChecked name="wizard-scope" /><span><strong>Root domain</strong><small>24,580 backlinks · 832 domains</small></span></label><label className={styles.choice}><input type="radio" name="wizard-scope" /><span><strong>Subdomain</strong><small>8,410 backlinks · 311 domains</small></span></label></div></>}
      {step === 'brand' && <><p>Brand names improve matching across backlink mentions.</p><label className={styles.field}>Brand name 1<input defaultValue="Northstar" /></label><span className={styles.counter}>1 / 10 added</span></>}
      {step === 'categories' && <><p>Select themes associated with the domain.</p><div className={styles.checkboxGrid}>{['Business', 'Technology', 'Education', 'News'].map((item, index) => <label key={item} className={styles.checkboxOption}><input type="checkbox" defaultChecked={index < 2} />{item}</label>)}</div></>}
      {step === 'countries' && <><p>Choose countries associated with the target audience.</p><div className={styles.chipSet}><span className={styles.chip}>Canada ×</span><span className={styles.chip}>United States ×</span></div><label className={styles.search}><input placeholder="Search countries" aria-label="Search countries" /></label></>}
      <div className={styles.wizardFooter}><span className={styles.guardedNote}>Submission disabled · needs verification</span><button className={`${styles.button} ${styles.primary}`} disabled>Start Backlink Audit</button></div>
    </div></section></div>;
}

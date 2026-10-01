import { useState } from 'react';
import styles from '../writesonic-shared/writesonic.module.css';
export function WritesonicPlanSelectionBoundary({ disabled = false }: { disabled?: boolean }) {
  const [annual, setAnnual] = useState(true);
  const [notice, setNotice] = useState('');
  const guard = () =>
    setNotice(
      'Stopped locally. No trial, subscription, payment, account change or external navigation was started.'
    );
  return (
    <div className={styles.root}>
      <div className={styles.evidence}>FICTIONAL PLAN FIXTURE · LIVE ACTIONS NOT EXERCISED</div>
      <div className={styles.topbar}>
        <strong>
          <span>〰</span> Writesonic
        </strong>
        <button type="button" disabled={disabled} onClick={guard}>
          ↪ Log out
        </button>
      </div>
      <div className={styles.planReport}>
        <header className={styles.reportHeader}>
          <h2>Select a plan</h2>
          <p>Trial promotion observed. Pricing and terms omitted from this local fixture.</p>
        </header>
        <div className={styles.tabs} role="group" aria-label="Illustrative billing period">
          <button
            type="button"
            aria-pressed={!annual}
            disabled={disabled}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={annual}
            disabled={disabled}
            onClick={() => setAnnual(true)}
          >
            Annually
          </button>
        </div>
        <p className={styles.planNote}>
          Local selection only: {annual ? 'Annual' : 'Monthly'} · live billing toggle unexercised
        </p>
        <div className={styles.plans}>
          {['Sample starter', 'Sample team', 'Sample growth'].map((tier, i) => (
            <article className={styles.planCard} key={tier}>
              <span className={styles.you}>{i === 1 ? 'Example emphasis' : 'Fictional tier'}</span>
              <h3>{tier}</h3>
              <strong>Pricing omitted</strong>
              <p>No provider limits or commercial terms reproduced.</p>
              <button
                type="button"
                className={i === 1 ? styles.primary : undefined}
                disabled={disabled}
                onClick={guard}
              >
                Start free trial
              </button>
              <dl>
                <dt>Prompts</dt>
                <dd>Illustrative allowance</dd>
                <dt>Projects</dt>
                <dd>Illustrative allowance</dd>
                <dt>Action items</dt>
                <dd>Illustrative availability</dd>
                <dt>AI platforms</dt>
                <dd>Gemini · Google · ChatGPT</dd>
              </dl>
              <button
                type="button"
                className={styles.textButton}
                disabled={disabled}
                onClick={guard}
              >
                View all features
              </button>
            </article>
          ))}
        </div>
        <button type="button" disabled={disabled} onClick={guard}>
          Back to report
        </button>
      </div>
      {notice && (
        <div className={styles.notice} role="status">
          {notice}
          <button type="button" onClick={() => setNotice('')} aria-label="Dismiss local notice">
            ×
          </button>
        </div>
      )}
    </div>
  );
}

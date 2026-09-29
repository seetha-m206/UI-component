import { useState } from 'react';
import styles from '../semrush-shared.module.css';

export interface SemrushAiCompetitorSetupProps {
  ownDomain?: string;
  disabled?: boolean;
  onAnalyze?: (competitors: string[]) => void;
}

export function SemrushAiCompetitorSetup({
  ownDomain = 'example.test',
  disabled = false,
  onAnalyze,
}: SemrushAiCompetitorSetupProps) {
  const [competitors, setCompetitors] = useState(['', '', '', '']);
  const [submitted, setSubmitted] = useState(false);
  const update = (index: number, value: string) =>
    setCompetitors((items) => items.map((item, i) => (i === index ? value : item)));
  const clear = () => {
    if (!disabled) {
      setCompetitors(['', '', '', '']);
      setSubmitted(false);
    }
  };
  const analyze = () => {
    const filled = competitors.filter(Boolean);
    if (!disabled && filled.length) {
      setSubmitted(true);
      onAnalyze?.(filled);
    }
  };
  return (
    <div className={styles.root}>
      <header className={styles.topbar}>
        <strong className={styles.brand}>AI Visibility</strong>
        <span className={styles.crumb}>Competitor Research</span>
      </header>
      <main className={styles.main}>
        <h2 className={styles.pageTitle}>Competitor Research</h2>
        <p className={styles.subtle}>Compare one domain with up to four competitors.</p>
        <div className={styles.setupRow}>
          <label>
            You
            <input className={styles.input} value={ownDomain} readOnly aria-label="Your domain" />
          </label>
          {competitors.map((value, index) => (
            <label key={index}>
              Competitor {index + 1}
              <input
                className={styles.input}
                value={value}
                disabled={disabled}
                placeholder="competitor.test"
                aria-label={`Competitor ${index + 1}`}
                onChange={(event) => update(index, event.target.value)}
              />
            </label>
          ))}
        </div>
        <div className={styles.actions}>
          <button
            className={styles.button}
            disabled={disabled || !competitors.some(Boolean)}
            onClick={analyze}
          >
            Analyze
          </button>
          <button
            className={styles.ghost}
            disabled={disabled || !competitors.some(Boolean)}
            onClick={clear}
          >
            Clear
          </button>
        </div>
        <section className={styles.card} style={{ marginTop: 18 }}>
          {submitted ? (
            <div className={styles.success} role="status">
              <strong>Comparison ready</strong>
              <br />
              Synthetic preview prepared for {competitors.filter(Boolean).length} competitor
              {competitors.filter(Boolean).length === 1 ? '' : 's'}. No request was sent.
            </div>
          ) : (
            <div className={styles.empty}>
              <span>
                <strong>Add competitors to view the report</strong>
                <br />
                The comparison workspace stays empty until at least one competitor is supplied.
              </span>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

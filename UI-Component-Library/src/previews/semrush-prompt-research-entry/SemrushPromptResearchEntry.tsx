import { useState } from 'react';
import styles from '../semrush-shared.module.css';

export interface SemrushPromptResearchEntryProps {
  initialTopic?: string;
  disabled?: boolean;
  onAnalyze?: (topic: string) => void;
}

export function SemrushPromptResearchEntry({
  initialTopic = '',
  disabled = false,
  onAnalyze,
}: SemrushPromptResearchEntryProps) {
  const [topic, setTopic] = useState(initialTopic);
  const [analyzed, setAnalyzed] = useState(false);
  const submit = () => {
    if (!disabled && topic.trim()) {
      setAnalyzed(true);
      onAnalyze?.(topic.trim());
    }
  };
  return (
    <div className={styles.root}>
      <header className={styles.topbar}>
        <strong className={styles.brand}>AI Visibility</strong>
        <span className={styles.crumb}>Prompt Research</span>
      </header>
      <main className={styles.widePanel}>
        <p className={styles.subtle}>Prompt intelligence</p>
        <h2 className={styles.pageTitle}>Uncover the prompts where your brand should be</h2>
        <p className={styles.subtle}>
          Start with a market topic to explore how people ask AI tools for recommendations.
        </p>
        <div className={styles.heroInput}>
          <input
            className={styles.input}
            aria-label="Topic"
            placeholder="Enter a topic"
            value={topic}
            disabled={disabled}
            onChange={(event) => {
              setTopic(event.target.value);
              setAnalyzed(false);
            }}
          />
          <button className={styles.button} disabled={disabled || !topic.trim()} onClick={submit}>
            Analyze
          </button>
        </div>
        {analyzed && (
          <div className={styles.success} role="status">
            Local demo ready for “{topic}”. No Semrush query or network request was made.
          </div>
        )}
        <div className={styles.benefits}>
          {[
            ['AI Volume', 'Estimate how often a topic appears in AI conversations.'],
            ['Topic Difficulty', 'Understand competitive pressure around the topic.'],
            ['Intent Analysis', 'Group prompts by the user need behind them.'],
          ].map(([title, body]) => (
            <article className={styles.benefit} key={title}>
              <strong>{title}</strong>
              <p className={styles.subtle}>{body}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

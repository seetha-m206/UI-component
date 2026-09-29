import { useState } from 'react';
import styles from '../semrush-shared.module.css';
export interface SemrushQuestionIntentAnalysisProps {
  disabled?: boolean;
  compact?: boolean;
}
const topics = {
  'Core e-signature': [
    'Can recipients sign without an account?',
    'Which tools support mobile signing?',
  ],
  'Agreement lifecycle': [
    'How does contract automation improve efficiency?',
    'What is intelligent agreement management?',
  ],
  Integrations: [
    'Which tools connect agreements to CRM?',
    'Can signing work inside productivity suites?',
  ],
  'Security & compliance': [
    'Are remote signatures legally valid?',
    'Which platforms provide audit trails?',
  ],
};
export function SemrushQuestionIntentAnalysis({
  disabled = false,
  compact = false,
}: SemrushQuestionIntentAnalysisProps) {
  const [topic, setTopic] = useState(Object.keys(topics)[0]);
  const [intent, setIntent] = useState('Product features');
  const distributions = [
    ['Product features', 29],
    ['Security & legal validity', 23],
    ['Integrations & APIs', 10],
    ['Comparison', 8],
    ['Education', 7],
    ['Onboarding & support', 7],
  ];
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <h2 className={styles.pageTitle}>Questions analysis</h2>
        <section className={styles.card}>
          <h3>Topic Distribution</h3>
          <div className={styles.topicCloud}>
            {Object.keys(topics).map((item) => (
              <button
                key={item}
                className={topic === item ? styles.chipActive : ''}
                onClick={() => setTopic(item)}
                disabled={disabled}
              >
                {item}
              </button>
            ))}
          </div>
        </section>
        <div className={styles.grid2} style={{ marginTop: 14 }}>
          <section className={styles.card}>
            <h3>Query Intent Distribution</h3>
            <div className={styles.barList}>
              {distributions.slice(0, compact ? 3 : 6).map(([name, value]) => (
                <button
                  className={styles.barRow}
                  style={{ border: 0, background: 'transparent', padding: 0, textAlign: 'left' }}
                  key={name}
                  onClick={() => setIntent(String(name))}
                >
                  <span>{name}</span>
                  <span className={styles.barTrack}>
                    <span style={{ width: `${Number(value) * 3}%` }} />
                  </span>
                  <strong>{value}%</strong>
                </button>
              ))}
            </div>
          </section>
          <section className={styles.card}>
            <h3>Intent by Topic</h3>
            <div className={styles.metric}>{topic === 'Core e-signature' ? '45%' : '37%'}</div>
            <p role="status">
              <strong>{intent}</strong> is the active analytical slice.
            </p>
            <p className={styles.subtle}>
              Select an intent bar or topic chip to update the questions below.
            </p>
          </section>
        </div>
        <section className={styles.card} style={{ marginTop: 14 }}>
          <h3>{topic}</h3>
          <div className={styles.questionList}>
            {topics[topic as keyof typeof topics].map((question) => (
              <div className={styles.questionItem} key={question}>
                <span className={styles.intent}>{intent}</span>
                <p>{question}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.card} style={{ marginTop: 14 }}>
          <div className={styles.opportunity}>
            <span className={styles.timeframe}>medium timeframe</span>
            <h3>Turn question demand into a content plan</h3>
            <p className={styles.subtle}>
              Use dominant intent and topic clusters to prioritize explainers, comparison pages, and
              proof-led security content.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

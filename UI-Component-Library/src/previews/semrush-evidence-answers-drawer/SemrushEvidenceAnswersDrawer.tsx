import { useState } from 'react';
import styles from '../semrush-shared.module.css';
export interface SemrushEvidenceAnswersDrawerProps {
  disabled?: boolean;
  initialOpen?: boolean;
}
const answers = [
  {
    question: 'Which capabilities improve agreement workflows?',
    bullets: [
      'Automated routing reduces handoffs and review time.',
      'Audit trails provide a verifiable history of every action.',
    ],
    sources: [
      ['Workflow automation guide', 'research.example/workflow'],
      ['Agreement trust report', 'insights.example/trust'],
    ],
  },
  {
    question: 'How do connected workflows reduce errors?',
    bullets: [
      'Validated templates keep fields consistent across systems.',
      'CRM synchronization limits duplicate entry.',
    ],
    sources: [['Connected operations study', 'research.example/connected']],
  },
];
export function SemrushEvidenceAnswersDrawer({
  disabled = false,
  initialOpen = false,
}: SemrushEvidenceAnswersDrawerProps) {
  const [open, setOpen] = useState(initialOpen);
  const [index, setIndex] = useState(0);
  const [scope, setScope] = useState('My brand');
  const answer = answers[index];
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <section className={styles.card}>
          <h2>Evidence-backed driver</h2>
          <p>Advanced workflow automation and analytics accelerate agreement cycles.</p>
          <button className={styles.primary} disabled={disabled} onClick={() => setOpen(true)}>
            Show answers
          </button>
        </section>
      </main>
      {open && (
        <div className={styles.drawerBackdrop} role="presentation">
          <aside
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Answers evidence"
          >
            <div className={styles.drawerHeader}>
              <div>
                <span className={styles.subtle}>2 answers are shown</span>
                <h2>Answers for: workflow automation</h2>
              </div>
              <button
                className={styles.ghost}
                onClick={() => setOpen(false)}
                aria-label="Close answers"
              >
                Close
              </button>
            </div>
            <label>
              <span className={styles.controlLabel}>Show</span>
              <select
                className={styles.select}
                value={scope}
                onChange={(event) => setScope(event.target.value)}
                aria-label="Answer scope"
              >
                <option>My brand</option>
                <option>All brands</option>
              </select>
            </label>
            <article>
              <h3>{answer.question}</h3>
              <ul>
                {answer.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3>Sources</h3>
              <div className={styles.sourceList}>
                {answer.sources.map(([title, url]) => (
                  <div className={styles.source} key={url}>
                    <strong>{title}</strong>
                    <small>{url}</small>
                  </div>
                ))}
              </div>
              <h3>Brands mentioned</h3>
              <span className={styles.chip}>Northstar</span>
              <p className={styles.subtle}>Answer collected on: Sep 22, 2026 · {scope}</p>
            </article>
            <div className={styles.actions}>
              <button
                className={styles.ghost}
                disabled={index === 0}
                onClick={() => setIndex((value) => value - 1)}
              >
                Previous
              </button>
              <strong>
                {index + 1} of {answers.length}
              </strong>
              <button
                className={styles.ghost}
                disabled={index === answers.length - 1}
                onClick={() => setIndex((value) => value + 1)}
              >
                Next
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

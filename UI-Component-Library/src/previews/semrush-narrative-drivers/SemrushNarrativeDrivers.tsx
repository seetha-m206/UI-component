import { useState } from 'react';
import styles from '../semrush-shared.module.css';
export interface SemrushNarrativeDriversProps {
  disabled?: boolean;
  startEmpty?: boolean;
}
const questions = [
  ['Which platforms provide audit trails?', '4/4', '1.0', '90%'],
  ['How can teams collect signatures remotely?', '4/4', '1.5', '100%'],
  ['What integrations connect agreements to CRM?', '3/4', '2.0', '86%'],
];
export function SemrushNarrativeDrivers({
  disabled = false,
  startEmpty = false,
}: SemrushNarrativeDriversProps) {
  const [metric, setMetric] = useState('Share of Voice');
  const [mode, setMode] = useState('Answers · Non-branded');
  const [expanded, setExpanded] = useState<number | null>(0);
  const [search, setSearch] = useState('');
  const rows = startEmpty
    ? []
    : questions.filter((row) => row[0].toLowerCase().includes(search.toLowerCase()));
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <h2 className={styles.pageTitle}>Narrative Drivers</h2>
        <section className={styles.card}>
          <div className={styles.sectionHeader}>
            <div>
              <h3>Share of Voice by Platform</h3>
              <p className={styles.subtle}>
                Measured evidence stays separate from generated overview.
              </p>
            </div>
            <div className={styles.segmented}>
              {['Share of Voice', 'Mentions', 'Average Position'].map((item) => (
                <button
                  key={item}
                  className={metric === item ? styles.selected : ''}
                  onClick={() => setMetric(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <p>
            <strong>Leading in cited answers</strong> · Improve ChatGPT visibility while protecting
            cross-platform strength.
          </p>
          <div className={styles.barList}>
            {[
              ['Google AI Mode', 22],
              ['ChatGPT', 18],
              ['Perplexity', 27],
              ['Gemini', 21],
            ].map(([name, value]) => (
              <div className={styles.barRow} key={name}>
                <span>{name}</span>
                <div className={styles.barTrack}>
                  <span style={{ width: `${Number(value) * 3}%` }} />
                </div>
                <strong>
                  {value}
                  {metric === 'Share of Voice' ? '%' : ''}
                </strong>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.card} style={{ marginTop: 14 }}>
          <h3>Breakdown by Question</h3>
          <div className={styles.radioCards}>
            {[
              'Answers · Non-branded',
              'Answers · Branded',
              'Citations · Non-branded',
              'Citations · Branded',
            ].map((item) => (
              <label className={styles.radioCard} key={item}>
                <input
                  type="radio"
                  checked={mode === item}
                  onChange={() => setMode(item)}
                  disabled={disabled}
                />
                <strong> {item}</strong>
              </label>
            ))}
          </div>
          <input
            className={styles.input}
            style={{ marginTop: 12 }}
            placeholder="Filter questions"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {rows.length === 0 ? (
            <p className={`${styles.status} ${styles.statusEmpty}`}>
              No questions match the selected filters.
            </p>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Presence</th>
                    <th>Avg. position</th>
                    <th>Sentiment</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row[0]}>
                      <td>
                        <button
                          className={styles.textLink}
                          aria-expanded={expanded === index}
                          onClick={() => setExpanded(expanded === index ? null : index)}
                        >
                          {expanded === index ? '▾' : '▸'} {row[0]}
                        </button>
                        {expanded === index && (
                          <div className={styles.details}>
                            <strong>Platform details</strong>
                            <p>Google AI Mode · Show answers · position 1 · favorable</p>
                            <p>ChatGPT · Show answers · position 2 · neutral</p>
                          </div>
                        )}
                      </td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
        <section className={styles.card} style={{ marginTop: 14 }}>
          <div className={styles.opportunity}>
            <span className={styles.timeframe}>urgent timeframe</span>
            <h3>Own the agreement lifecycle story</h3>
            <p className={styles.subtle}>
              Connect signing, workflow automation, integrations, and analytics in one outcome-led
              narrative.
            </p>
            <ul>
              <li>Publish use-case explainers.</li>
              <li>Pair claims with current customer evidence.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

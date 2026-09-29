import { useState } from 'react';
import styles from '../semrush-shared.module.css';

export type VisibilityMetric = 'main' | 'audience' | 'visibility';
export interface SemrushAiVisibilityDashboardProps {
  initialMetric?: VisibilityMetric;
  disabled?: boolean;
}

export function SemrushAiVisibilityDashboard({
  initialMetric = 'main',
  disabled = false,
}: SemrushAiVisibilityDashboardProps) {
  const [metric, setMetric] = useState(initialMetric);
  const [range, setRange] = useState('6M');
  const values =
    metric === 'main'
      ? ['24', '38', '12']
      : metric === 'audience'
        ? ['8.4K', '12.1K', '9.7K']
        : ['18%', '27%', '31%'];
  return (
    <div className={styles.root}>
      <header className={styles.topbar}>
        <strong className={styles.brand}>AI Visibility</strong>
        <span className={styles.crumb}>example.test</span>
        <button className={styles.ghost} disabled={disabled}>
          Export PDF
        </button>
      </header>
      <main className={styles.main}>
        <h2 className={styles.pageTitle}>Visibility Overview</h2>
        <div className={styles.filterbar}>
          <select className={styles.select} aria-label="Region" disabled={disabled}>
            <option>Worldwide</option>
            <option>United States</option>
          </select>
          <select className={styles.select} aria-label="Platform" disabled={disabled}>
            <option>All AI platforms</option>
            <option>ChatGPT</option>
            <option>Gemini</option>
          </select>
          <select className={styles.select} aria-label="Date" disabled={disabled}>
            <option>Sep 2026</option>
            <option>Aug 2026</option>
          </select>
        </div>
        <div className={styles.grid2}>
          <section className={styles.card}>
            <h3>AI Visibility</h3>
            <div className={styles.gauge}>
              <span className={styles.gaugeFill} />
            </div>
            <div className={styles.metric}>27%</div>
            <div className={styles.metricLabel}>Synthetic demo score</div>
          </section>
          <section className={styles.card}>
            <div className={styles.tabs} role="tablist" aria-label="Trend metric">
              {(
                [
                  ['main', 'Main Metrics'],
                  ['audience', 'Monthly Audience'],
                  ['visibility', 'AI Visibility'],
                ] as [VisibilityMetric, string][]
              ).map(([id, label]) => (
                <button
                  key={id}
                  role="tab"
                  aria-selected={metric === id}
                  className={`${styles.tab} ${metric === id ? styles.tabActive : ''}`}
                  disabled={disabled}
                  onClick={() => setMetric(id)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className={styles.pillRow}>
              {['1M', '6M', 'All time'].map((item) => (
                <button
                  key={item}
                  className={`${styles.chip} ${range === item ? styles.chipActive : ''}`}
                  disabled={disabled}
                  onClick={() => setRange(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className={styles.grid3}>
              {['Mentions', 'Citations', 'Cited pages'].map((label, index) => (
                <div key={label}>
                  <div className={styles.metric}>{values[index]}</div>
                  <div className={styles.metricLabel}>{label}</div>
                </div>
              ))}
            </div>
            <div className={styles.spark}>
              {[28, 45, 36, 62, 52, 78, 68, 86].map((height, index) => (
                <span key={index} className={styles.bar} style={{ height: `${height}%` }} />
              ))}
            </div>
          </section>
        </div>
        <div className={styles.grid2} style={{ marginTop: 14 }}>
          <section className={styles.card}>
            <h3>Distribution by LLM</h3>
            <div className={styles.list}>
              {[
                ['ChatGPT', 42],
                ['AI Overview', 31],
                ['Gemini', 18],
                ['AI Mode', 9],
              ].map(([label, value]) => (
                <div className={styles.listRow} key={label}>
                  <span>{label}</span>
                  <strong>{value}%</strong>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.card}>
            <h3>Mentions by country</h3>
            <div className={styles.empty}>
              No geographic breakdown is available for this synthetic fixture.
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

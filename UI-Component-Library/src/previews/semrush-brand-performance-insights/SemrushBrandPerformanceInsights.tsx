import { useState } from 'react';
import styles from '../semrush-shared.module.css';

export interface SemrushBrandPerformanceInsightsProps {
  brandName?: string;
  disabled?: boolean;
}

export function SemrushBrandPerformanceInsights({
  brandName = 'Northstar',
  disabled = false,
}: SemrushBrandPerformanceInsightsProps) {
  const [platform, setPlatform] = useState('All AI platforms');
  const [competitors, setCompetitors] = useState(['Orbit', 'Beacon']);
  return (
    <div className={styles.root}>
      <header className={styles.topbar}>
        <strong className={styles.brand}>Brand Performance</strong>
        <span className={styles.crumb}>{brandName}</span>
        <button className={styles.ghost} disabled={disabled}>
          Export PDF
        </button>
      </header>
      <main className={styles.main}>
        <div className={styles.actions}>
          <div>
            <h2 className={styles.pageTitle}>{brandName}</h2>
            <span className={styles.subtle}>Worldwide · English</span>
          </div>
        </div>
        <div className={styles.pillRow}>
          <button className={`${styles.chip} ${styles.chipActive}`}>● {brandName}</button>
          {competitors.map((item) => (
            <button
              key={item}
              className={styles.chip}
              disabled={disabled}
              aria-label={`Remove ${item}`}
              onClick={() => setCompetitors((values) => values.filter((value) => value !== item))}
            >
              ● {item} ×
            </button>
          ))}
        </div>
        <div className={styles.filterbar}>
          <select
            className={styles.select}
            aria-label="AI platform"
            disabled={disabled}
            value={platform}
            onChange={(event) => setPlatform(event.target.value)}
          >
            <option>All AI platforms</option>
            <option>ChatGPT</option>
            <option>Gemini</option>
          </select>
          <select className={styles.select} aria-label="Date" disabled={disabled}>
            <option>September 2026</option>
          </select>
        </div>
        <div className={styles.grid2}>
          <section className={styles.card}>
            <h3>Insights</h3>
            <div className={styles.list}>
              <div className={styles.insight}>
                <strong>Strengthen comparison content</strong>
                <p className={styles.subtle}>
                  Clarify where the product wins for specific buyer needs.
                </p>
              </div>
              <div className={styles.insight}>
                <strong>Expand trusted citations</strong>
                <p className={styles.subtle}>
                  Earn mentions from sources already used by answer engines.
                </p>
              </div>
              <div className={styles.insight}>
                <strong>Close category gaps</strong>
                <p className={styles.subtle}>
                  Cover high-intent questions competitors currently own.
                </p>
              </div>
            </div>
          </section>
          <section className={styles.card}>
            <h3>Share of Voice vs Sentiment</h3>
            <div
              className={styles.bubbleChart}
              aria-label="Synthetic share of voice versus sentiment chart"
            >
              <span
                className={styles.bubble}
                style={{ left: '62%', top: '28%', background: '#ff642d' }}
              >
                {brandName.slice(0, 1)}
              </span>
              <span className={styles.bubble} style={{ left: '29%', top: '58%' }}>
                O
              </span>
              <span
                className={styles.bubble}
                style={{ left: '44%', top: '42%', background: '#18a999' }}
              >
                B
              </span>
            </div>
          </section>
        </div>
        <div className={styles.grid2} style={{ marginTop: 14 }}>
          <section className={styles.card}>
            <h3>Overall Sentiment</h3>
            <div className={styles.metric}>74%</div>
            <p className={styles.subtle}>AI-powered overview based on synthetic sample data.</p>
            <div className={styles.progress}>
              <span style={{ width: '74%' }} />
            </div>
          </section>
          <section className={styles.card}>
            <h3>Share of Voice</h3>
            <div className={styles.list}>
              {[
                [brandName, 36],
                ['Orbit', 29],
                ['Beacon', 21],
              ].map(([name, value]) => (
                <div className={styles.listRow} key={name}>
                  <span>{name}</span>
                  <strong>{value}%</strong>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

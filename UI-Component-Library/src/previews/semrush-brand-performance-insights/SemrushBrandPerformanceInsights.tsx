import { useState, type CSSProperties } from 'react';
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
            <div className={styles.legend}>
              <span>🟠 {brandName}</span>
              <span>🟣 Orbit</span>
              <span>🟢 Beacon</span>
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
        <section className={styles.card} style={{ marginTop: 14 }}>
          <div className={styles.sectionHeader}>
            <div>
              <h3>Key Business Drivers by Frequency</h3>
              <span className={styles.subtle}>
                How often answer engines associate each brand with a buyer priority
              </span>
            </div>
          </div>
          <div className={styles.driverGrid} role="table" aria-label="Business-driver frequency">
            {['Business driver', brandName, 'Orbit', 'Beacon'].map((label) => (
              <strong className={styles.driverCell} role="columnheader" key={label}>
                {label}
              </strong>
            ))}
            {[
              ['Ease of implementation', 78, 64, 51],
              ['Reporting depth', 71, 69, 58],
              ['Integration coverage', 62, 74, 55],
              ['Customer support', 67, 49, 72],
            ].flatMap(([driver, ...scores]) => [
              <span className={styles.driverCell} role="rowheader" key={`${driver}-label`}>
                {driver}
              </span>,
              ...scores.map((score, index) => (
                <span
                  className={`${styles.driverCell} ${styles.driverScore}`}
                  style={{ '--heat': `${score}%` } as CSSProperties}
                  role="cell"
                  key={`${driver}-${index}`}
                >
                  {score}%
                </span>
              )),
            ])}
          </div>
        </section>
        <div className={styles.grid2} style={{ marginTop: 14 }}>
          <section className={styles.card}>
            <h3>{brandName} vs Orbit</h3>
            {[
              ['Share of Voice', '36%', '29%'],
              ['Positive sentiment', '74%', '68%'],
              ['Key driver wins', '3', '1'],
            ].map(([label, left, right]) => (
              <div className={styles.comparisonRow} key={label}>
                <div>
                  <span className={styles.metricLabel}>{label}</span>
                  <div className={styles.comparisonValue}>{left}</div>
                </div>
                <span className={styles.versus}>vs</span>
                <div style={{ textAlign: 'right' }}>
                  <span className={styles.metricLabel}>Orbit</span>
                  <div className={styles.comparisonValue}>{right}</div>
                </div>
              </div>
            ))}
          </section>
          <section className={styles.card}>
            <h3>Driver trend</h3>
            <p className={styles.subtle}>Frequency across the selected reporting period</p>
            <div className={styles.miniChart} aria-label="Synthetic business-driver trend">
              {[32, 45, 41, 58, 64, 60, 76, 72].map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className={styles.legend}>
              <span>Measured frequency</span>
              <span>AI-generated overview shown separately above</span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

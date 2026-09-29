import { useState, type CSSProperties } from 'react';
import styles from '../semrush-shared.module.css';
export interface SemrushPerceptionAnalysisProps {
  disabled?: boolean;
  startLoading?: boolean;
}
const brands = ['Northstar', 'Orbit', 'Beacon'];
const categories = [
  ['Workflow automation', 93, 88, 76],
  ['Security & compliance', 92, 79, 86],
  ['Core experience', 91, 83, 89],
  ['Pricing & reliability', 85, 90, 81],
] as const;
export function SemrushPerceptionAnalysis({
  disabled = false,
  startLoading = false,
}: SemrushPerceptionAnalysisProps) {
  const [range, setRange] = useState('All time');
  const [visible, setVisible] = useState(brands);
  const [mode, setMode] = useState('Non-branded');
  const [expanded, setExpanded] = useState<number | null>(null);
  const [page, setPage] = useState('1');
  const invalid = Number(page) < 1 || Number(page) > 29 || !Number.isInteger(Number(page));
  const [loading, setLoading] = useState(startLoading);
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.actions}>
          <div>
            <h2 className={styles.pageTitle}>Perception analysis</h2>
            <span className={styles.subtle}>Charts, heatmaps, descriptors and status states</span>
          </div>
          <button className={styles.ghost} onClick={() => setLoading((value) => !value)}>
            Toggle loading
          </button>
        </div>
        <section className={styles.card}>
          <div className={styles.sectionHeader}>
            <h3>Favorable Sentiment</h3>
            <div className={styles.segmented}>
              {['1 M', 'All time'].map((item) => (
                <button
                  key={item}
                  className={range === item ? styles.selected : ''}
                  onClick={() => setRange(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {loading ? (
            <p className={`${styles.status} ${styles.statusLoading}`} role="status">
              Generating AI-powered overview…
            </p>
          ) : (
            <p>
              <strong>Sentiment opportunity</strong> · Northstar is strongest on workflow trust in
              the selected {range} range.
            </p>
          )}
          <div className={styles.legend}>
            {brands.map((brand, index) => (
              <button
                key={brand}
                className={`${styles.legendButton} ${visible.includes(brand) ? '' : styles.disabledLegend}`}
                onClick={() =>
                  setVisible((items) =>
                    items.includes(brand)
                      ? items.filter((item) => item !== brand)
                      : [...items, brand]
                  )
                }
              >
                <span
                  style={
                    { '--legend-color': ['#ff642d', '#7b61ff', '#18a999'][index] } as CSSProperties
                  }
                />
                {brand}
              </button>
            ))}
          </div>
          <div className={styles.miniChart}>
            {[48, 62, 55, 74, 69, 82, 77, 88].map((height, index) => (
              <span
                key={index}
                style={{ height: `${height}%`, opacity: visible.length ? 1 : 0.2 }}
              />
            ))}
          </div>
        </section>
        <section className={styles.card} style={{ marginTop: 14 }}>
          <h3>Sentiment by Feature Category</h3>
          <div className={styles.tableWrap}>
            <div className={styles.heatmap} role="table" aria-label="Feature sentiment heatmap">
              <strong className={`${styles.heatCell} ${styles.heatLabel}`}>Category</strong>
              {brands.map((brand) => (
                <strong className={styles.heatCell} key={brand}>
                  {brand}
                </strong>
              ))}
              {categories.flatMap(([name, ...values]) => [
                <button
                  className={`${styles.heatCell} ${styles.heatLabel}`}
                  key={name}
                  onClick={() => setExpanded(categories.findIndex((item) => item[0] === name))}
                >
                  {name} · Show answers
                </button>,
                ...values.map((value, index) => (
                  <span
                    className={styles.heatCell}
                    style={{ '--heat': `${value}%` } as CSSProperties}
                    key={`${name}-${index}`}
                  >
                    {value}%
                  </span>
                )),
              ])}
            </div>
          </div>
          {expanded !== null && (
            <div className={styles.details} role="status">
              Evidence drawer ready for “{categories[expanded][0]}”.
            </div>
          )}
        </section>
        <section className={styles.card} style={{ marginTop: 14 }}>
          <div className={styles.radioCards}>
            {['Non-branded', 'Branded'].map((item) => (
              <label className={styles.radioCard} key={item}>
                <input type="radio" checked={mode === item} onChange={() => setMode(item)} />
                <strong> Feature descriptions · {item}</strong>
                <p className={styles.subtle}>
                  Specific phrases used in {item.toLowerCase()} answers.
                </p>
              </label>
            ))}
          </div>
          <h3>AI Feature Descriptions</h3>
          {['Comprehensive audit trails', 'Connected workflow automation'].map((name, index) => (
            <div className={styles.expandRow} key={name}>
              <div className={styles.expandHeader}>
                <button
                  className={styles.textLink}
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  aria-expanded={expanded === index}
                >
                  ▸ {name}
                </button>
                <span>{29 - index * 8}</span>
                <span>{97 - index * 5}%</span>
                <button className={styles.ghost}>Answers</button>
              </div>
              {expanded === index && (
                <div className={styles.details}>
                  <strong>Descriptions by brand</strong>
                  <p>
                    Northstar {29 - index * 8} · Orbit {14 - index * 3} · Beacon {12 - index * 2}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div className={styles.actions}>
            <button className={styles.ghost} disabled>
              Prev
            </button>
            <label>
              Page{' '}
              <input
                className={styles.input}
                style={{ width: 60 }}
                value={page}
                onChange={(event) => setPage(event.target.value)}
                aria-invalid={invalid}
              />
            </label>
            <span>of 29</span>
            <button className={styles.ghost} disabled={disabled}>
              Next
            </button>
          </div>
          {invalid && (
            <p role="alert" className={`${styles.status} ${styles.statusError}`}>
              Enter a whole page number from 1 to 29.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

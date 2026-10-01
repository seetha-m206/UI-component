import styles from './se-ranking-rankings-detail-report.module.css';

export function SeRankingRankingsDetailReport({ guideOpen = false }: { guideOpen?: boolean }) {
  return <section className={styles.screen} aria-label="Rankings detailed report">
    <header><span>centilio.com › Rankings › Detailed</span><div><strong>Manual rechecks: 0 / 750</strong><strong>Keyword limits: 1 / 750</strong></div></header>
    <nav><button type="button">India EN ▾</button><button type="button">1 Oct 2026 - 1 Oct 2026</button><button type="button">Data Studio</button><button type="button">Export</button><button type="button">Settings ▾</button><button type="button">Add Keywords</button><button type="button">Recheck data ▾</button></nav>
    <div className={styles.filters}><strong>Position filters</strong>{['All 1', 'Top 1 0', 'Top 3 0', 'Top 5 0', 'Top 10 0', 'Top 30 0', '>100 1'].map(item => <span key={item}>{item}</span>)}</div>
    <section className={styles.insights}><h2>Insights</h2><article><strong>0 pages recommended for monitoring</strong><span>Content</span></article><article><strong>194 backlinks from 82 domains found</strong><span>Backlinks</span></article><article><strong>High-impact keywords found</strong><span>Opportunities</span></article></section>
    <section className={styles.chart}><h2>Google India</h2><div>{['Average position 100', 'Traffic forecast 0', 'Search visibility 0', 'SERP features 0', '% in Top 10 0'].map(item => <strong key={item}>{item}</strong>)}</div><p>Current · 7D · 1M · 3M · 6M · 1Y · 2Y</p></section>
    <table><thead><tr><th>Keywords (1 - 1 out of 1)</th><th>URL</th><th>Search vol.</th><th>SERP features</th><th>Content Score</th><th>Oct-01</th></tr></thead><tbody><tr><td>centilio upload evidence 2026-10-01</td><td>link</td><td>0</td><td>—</td><td>—</td><td>—</td></tr></tbody></table>
    {guideOpen && <aside role="dialog" aria-label="Rankings table guide"><button type="button" aria-label="Close guide">×</button><h2>Rankings table</h2><p>Here you can find important information on rankings that includes ranking jumps and drops, target URL and its ranking dynamics.</p><p>By clicking on a metric, you will see a cached copy of the SERP for the day the rankings were checked.</p><footer><span>1 of 5</span><button type="button">Next ›</button></footer></aside>}
  </section>;
}

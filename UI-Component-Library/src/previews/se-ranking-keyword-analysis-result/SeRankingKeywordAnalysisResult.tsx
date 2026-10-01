import styles from './se-ranking-keyword-analysis-result.module.css';

export function SeRankingKeywordAnalysisResult({ loading = false }: { loading?: boolean }) {
  const cards = ['Difficulty', 'Search volume', 'Search Intent', 'CPC', 'Global volume'];
  return <section className={styles.screen} aria-label="Keyword analysis result">
    <header><span>Keyword Research › Overview</span><strong>1 / 10 account limit</strong></header>
    <div className={styles.query}><input aria-label="Enter a keyword" value="centilio" readOnly /><button type="button">Analyze</button><button type="button">September 2026</button><span>$ USD</span></div>
    <div className={styles.cards}>{cards.map(label => <article key={label}><h2>{label}</h2><strong>—</strong></article>)}</div>
    <div className={styles.panels}>{['Similar keywords', 'Related keywords', 'Questions', 'SERP Overview', 'Ranking dynamics'].map(label => <article key={label}><h3>{label}</h3><button type="button" disabled>View detailed report (0)</button></article>)}</div>
    <div className={styles.empty} role="status"><strong>{loading ? 'Loading data' : 'No results found'}</strong><span>{loading ? 'Please wait while we collect search results and similar search queries.' : 'We haven’t found any data in the search results.'}</span></div>
  </section>;
}

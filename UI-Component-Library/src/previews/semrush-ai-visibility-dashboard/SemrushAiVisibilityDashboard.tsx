import { useState } from 'react';
import styles from '../semrush-shared.module.css';

export type VisibilityMetric = 'main' | 'audience' | 'visibility';
type TopicView = 'performing' | 'opportunities' | 'sources' | 'source-opportunities' | 'pages';
type TableMode = 'topics' | 'prompts';

export interface SemrushAiVisibilityDashboardProps {
  initialMetric?: VisibilityMetric;
  disabled?: boolean;
}

const howItWorks = [
  ['What is AI Visibility?', 'A benchmark score from 0 to 100 showing how consistently a brand appears in AI-generated answers.'],
  ['How can I get more mentions?', 'Use topic and source gaps to prioritize content and distribution work.'],
  ['How can I track a specific prompt?', 'Open the prompt table and choose a prompt-monitoring action.'],
  ['How is the data calculated?', 'The report combines topic coverage, mentions, citations, and relative visibility.'],
];

export function SemrushAiVisibilityDashboard({ initialMetric = 'main', disabled = false }: SemrushAiVisibilityDashboardProps) {
  const [metric, setMetric] = useState(initialMetric);
  const [range, setRange] = useState('All time');
  const [region, setRegion] = useState('Worldwide');
  const [distribution, setDistribution] = useState<'mentions' | 'pages'>('mentions');
  const [topicView, setTopicView] = useState<TopicView>('performing');
  const [tableMode, setTableMode] = useState<TableMode>('topics');
  const [recommendationsOpen, setRecommendationsOpen] = useState(true);
  const [howOpen, setHowOpen] = useState(false);
  const [howSection, setHowSection] = useState(0);
  const [responseOpen, setResponseOpen] = useState(false);

  const values = metric === 'main' ? ['24', '38', '12'] : metric === 'audience' ? ['8.4K', '12.1K', '9.7K'] : ['18%', '27%', '31%'];
  const chartEmpty = metric === 'visibility' && range === '1M';
  const reportEmpty = region === 'United States';

  return (
    <div className={styles.root}>
      <header className={styles.topbar}>
        <strong className={styles.brand}>AI Visibility</strong>
        <span className={styles.crumb}>example.test</span>
        <div className={styles.actions}>
          <button className={styles.ghost} disabled={disabled} onClick={() => setHowOpen(true)}>How it works</button>
          <button className={styles.ghost} disabled={disabled}>Export PDF</button>
        </div>
      </header>
      <main className={styles.main}>
        <h2 className={styles.pageTitle}>Visibility Overview</h2>
        <div className={styles.filterbar}>
          <select className={styles.select} aria-label="Region" value={region} disabled={disabled} onChange={(event) => setRegion(event.target.value)}>
            <option>Worldwide</option><option>United States</option>
          </select>
          <select className={styles.select} aria-label="Platform" disabled={disabled}><option>All AI platforms</option><option>ChatGPT</option><option>Gemini</option></select>
          <select className={styles.select} aria-label="Date" disabled={disabled}><option>Sep 2026</option><option>Aug 2026</option></select>
        </div>

        {reportEmpty ? (
          <section className={styles.card}><div className={styles.empty}><div><strong>Your brand is not present on AI platforms yet</strong><p>Change the country filter or explore the brand-performance workflow.</p><button className={styles.button} disabled={disabled}>Get insights in Brand Performance</button></div></div></section>
        ) : (
          <>
            <div className={styles.grid2}>
              <section className={styles.card}><h3>AI Visibility</h3><div className={styles.gauge}><span className={styles.gaugeFill} /></div><div className={styles.metric}>27%</div><div className={styles.metricLabel}>Synthetic demo score</div></section>
              <section className={styles.card}>
                <div className={styles.tabs} role="tablist" aria-label="Trend metric">
                  {([['main', 'Main Metrics'], ['audience', 'Monthly Audience'], ['visibility', 'AI Visibility']] as [VisibilityMetric, string][]).map(([id, label]) => <button key={id} role="tab" aria-selected={metric === id} className={`${styles.tab} ${metric === id ? styles.tabActive : ''}`} disabled={disabled} onClick={() => setMetric(id)}>{label}</button>)}
                </div>
                <div className={styles.pillRow} aria-label="Reporting range">{['1M', '6M', 'All time'].map((item) => <button key={item} aria-pressed={range === item} className={`${styles.chip} ${range === item ? styles.chipActive : ''}`} disabled={disabled} onClick={() => setRange(item)}>{item}</button>)}</div>
                {chartEmpty ? <div className={styles.empty}><div><strong>We have no data to show</strong><p>Try changing your filters.</p></div></div> : <><div className={styles.grid3}>{['Mentions', 'Citations', 'Cited pages'].map((label, index) => <div key={label}><div className={styles.metric}>{values[index]}</div><div className={styles.metricLabel}>{label}</div></div>)}</div><div className={styles.spark}>{[28, 45, 36, 62, 52, 78, 68, 86].map((height, index) => <span key={index} className={styles.bar} style={{ height: `${height}%` }} />)}</div></>}
              </section>
            </div>

            <div className={styles.grid2} style={{ marginTop: 14 }}>
              <section className={styles.card}>
                <div className={styles.sectionHeader}><h3>Distribution by LLM</h3><div className={styles.segmented} role="radiogroup" aria-label="Distribution metric"><button role="radio" aria-checked={distribution === 'mentions'} className={distribution === 'mentions' ? styles.selected : ''} onClick={() => setDistribution('mentions')}>Mentions</button><button role="radio" aria-checked={distribution === 'pages'} className={distribution === 'pages' ? styles.selected : ''} onClick={() => setDistribution('pages')}>Cited Pages</button></div></div>
                <div className={styles.list}>{([['ChatGPT', distribution === 'mentions' ? 42 : 100], ['AI Overview', 0], ['Gemini', 0], ['AI Mode', 0]] as [string, number][]).map(([label, value]) => <div className={styles.listRow} key={label}><span>{label}</span><strong>{value}%</strong></div>)}</div>
              </section>
              <section className={styles.card}><h3>Mentions by country</h3><div className={styles.empty}>We have no data to show<br />Try changing your filters.</div></section>
            </div>

            <section className={styles.card} style={{ marginTop: 14 }}>
              <div className={styles.sectionHeader}><div><h3>What&apos;s Next?</h3><span className={styles.subtle}>Recommended actions from the current report</span></div><button className={styles.ghost} aria-expanded={recommendationsOpen} disabled={disabled} onClick={() => setRecommendationsOpen((open) => !open)}>{recommendationsOpen ? 'Collapse' : 'Expand'}</button></div>
              {recommendationsOpen && <div className={styles.recommendations}>{[['Find hot topics', 'Discover high-potential topics where your brand is missing.'], ['Explore competitor strategies', 'See which topics competitors dominate and where they publish.'], ['Optimize your domain for AI', 'Check whether answer engines can crawl priority content.']].map(([title, body]) => <article className={styles.recommendation} key={title}><div><strong>{title}</strong><p className={styles.subtle}>{body}</p></div><button className={styles.textLink} disabled={disabled}>Review opportunity →</button></article>)}</div>}
            </section>

            <section className={styles.card} style={{ marginTop: 14 }}>
              <div className={styles.sectionHeader}><div><h3>Topics &amp; Sources</h3><span className={styles.subtle}>Synthetic rows representing the captured table structure</span></div><button className={styles.ghost} disabled={disabled}>Export</button></div>
              <div className={styles.tabs} role="tablist" aria-label="Topics and sources">{([['performing', 'Your Performing Topics'], ['opportunities', 'Topic Opportunities'], ['sources', 'Cited Sources'], ['source-opportunities', 'Source Opportunities'], ['pages', 'Cited Pages']] as [TopicView, string][]).map(([id, label]) => <button key={id} role="tab" aria-selected={topicView === id} className={`${styles.tab} ${topicView === id ? styles.tabActive : ''}`} disabled={disabled} onClick={() => setTopicView(id)}>{label}</button>)}</div>
              {topicView === 'performing' && <div className={styles.segmented} role="radiogroup" aria-label="Performing topic detail"><button role="radio" aria-checked={tableMode === 'topics'} className={tableMode === 'topics' ? styles.selected : ''} onClick={() => setTableMode('topics')}>Topics 1</button><button role="radio" aria-checked={tableMode === 'prompts'} className={tableMode === 'prompts' ? styles.selected : ''} onClick={() => setTableMode('prompts')}>Prompts 2</button></div>}
              <div className={styles.tableWrap}>
                {topicView === 'pages' ? <table className={styles.table}><thead><tr><th>URL</th><th>Number of prompts</th><th>Action</th></tr></thead><tbody>{['/overview', '/guides'].map((path) => <tr key={path}><td><strong>https://example.test{path}</strong></td><td>1</td><td><button className={styles.textLink}>Show details</button></td></tr>)}</tbody></table>
                  : tableMode === 'prompts' && topicView === 'performing' ? <table className={styles.table}><thead><tr><th>Prompt</th><th>AI response</th><th>Your brand</th><th>Sources</th><th>Actions</th></tr></thead><tbody>{['How should teams compare workflow tools?', 'Which reporting platform fits a growing company?'].map((prompt) => <tr key={prompt}><td><strong>{prompt}</strong></td><td><button className={styles.textLink} onClick={() => setResponseOpen(true)}>View full response</button></td><td><span className={styles.intent}>Cited</span></td><td>12</td><td><button className={styles.textLink}>Monitor</button></td></tr>)}</tbody></table>
                    : <table className={styles.table}><thead><tr><th>{topicView.includes('source') ? 'Source' : 'Topic'}</th><th>Visibility</th><th>Mentions</th><th>AI Volume</th><th>Intent</th><th>Action</th></tr></thead><tbody>{[['Workflow automation', '34%', '28', '2.4K', 'Commercial'], ['Customer data platform', '27%', '19', '1.8K', 'Informational'], ['AI reporting software', '21%', '14', '980', 'Transactional']].map((row) => <tr key={`${topicView}-${row[0]}`}><td><strong>{topicView === 'sources' ? `${row[0].toLowerCase().replaceAll(' ', '-')}.example` : row[0]}</strong></td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td><span className={styles.intent}>{row[4]}</span></td><td><button className={styles.textLink}>Open</button></td></tr>)}</tbody></table>}
              </div>
            </section>
          </>
        )}
      </main>

      {howOpen && <div className={styles.drawerBackdrop} role="presentation" onMouseDown={() => setHowOpen(false)}><aside className={styles.drawer} role="dialog" aria-modal="true" aria-labelledby="visibility-how-title" onMouseDown={(event) => event.stopPropagation()}><div className={styles.drawerHeader}><h3 id="visibility-how-title">How it works</h3><button className={styles.ghost} aria-label="Close how it works" onClick={() => setHowOpen(false)}>×</button></div>{howItWorks.map(([title, body], index) => <div className={styles.expandRow} key={title}><button className={styles.accordionButton} aria-expanded={howSection === index} onClick={() => setHowSection(index)}>{title}</button>{howSection === index && <div className={styles.details}>{body}</div>}</div>)}</aside></div>}

      {responseOpen && <div className={`${styles.drawerBackdrop} ${styles.centerBackdrop}`} role="presentation" onMouseDown={() => setResponseOpen(false)}><section className={styles.responseModal} role="dialog" aria-modal="true" aria-labelledby="response-title" onMouseDown={(event) => event.stopPropagation()}><div className={styles.drawerHeader}><h3 id="response-title">Prompt response</h3><button className={styles.ghost} aria-label="Close response" onClick={() => setResponseOpen(false)}>×</button></div><div className={styles.responseGrid}><div><strong>Prompt</strong><p>How should teams compare workflow tools?</p><strong>Brands mentioned</strong><div className={styles.tagList}><span className={styles.tag}>Example</span><span className={styles.tag}>Northstar</span></div><strong>Response</strong><p className={styles.subtle}>Synthetic answer text demonstrates the full-response reading surface without reproducing authenticated account data.</p></div><div><strong>Sources</strong><div className={styles.sourceList}><div className={styles.source}>example.test/guide<small>Your domain</small></div><div className={styles.source}>reference.example/report<small>External source</small></div></div></div></div></section></div>}
    </div>
  );
}

import { useMemo, useState } from 'react';
import styles from './otterly.module.css';

export type OtterlyVariant =
  | 'shell' | 'competitors' | 'selection' | 'filters' | 'processing'
  | 'prompt-table' | 'citations' | 'recommendations' | 'agents'
  | 'research' | 'inventory' | 'audit' | 'advanced-audit' | 'fanout' | 'detail'
  | 'coverage' | 'visibility' | 'citation-changes' | 'domain-sources'
  | 'overview-screen' | 'top-prompts' | 'source-categories' | 'citation-trends';

type Props = { variant: OtterlyVariant; initialState?: 'default' | 'empty' | 'loading' };
const samplePrompts = [
  'Which platform helps a small team manage its work?',
  'What tools combine documents and approvals?',
  'How can a growing company organize projects?',
];
const sampleSites = ['orbit.example', 'harbor.example', 'spruce.example'];
const engines = ['All Engines', 'ChatGPT', 'Google AI Overview', 'Perplexity', 'Microsoft Copilot'];
const modes = ['SEO keywords', 'Specific URL', 'Brainstorm from brand'];

export function OtterlyExtracted({ variant, initialState = 'default' }: Props) {
  const [menu, setMenu] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('All Engines');
  const [selectedDate, setSelectedDate] = useState('Last 14 days');
  const [query, setQuery] = useState('');
  const [competitors, setCompetitors] = useState(['Orbit', 'Harbor']);
  const [selectedPrompts, setSelectedPrompts] = useState<string[]>(samplePrompts);
  const [mode, setMode] = useState(0);
  const [advanced, setAdvanced] = useState(false);
  const [selectedCrawler, setSelectedCrawler] = useState('ChatGPT-User');
  const [page, setPage] = useState(1);
  const [detailTab, setDetailTab] = useState('Overview');
  const [changeTab, setChangeTab] = useState('Top');
  const [comparisonScope, setComparisonScope] = useState('Me + Top 5 competitors');
  const [citationSort, setCitationSort] = useState('Sort by cited');
  const [sourceCategory, setSourceCategory] = useState('');
  const [notice, setNotice] = useState('');
  const filteredPrompts = useMemo(
    () => samplePrompts.filter((prompt) => prompt.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  const openMenu = (name: string) => setMenu(menu === name ? '' : name);
  const localAction = (message: string) => setNotice(message + ' · fictional local preview');
  const menuButton = (name: string, label: string, options: string[], select: (value: string) => void) => (
    <span className={styles.menuWrap}>
      <button type="button" onClick={() => openMenu(name)} aria-expanded={menu === name}>{label} <span aria-hidden="true">⌄</span></button>
      {menu === name && <span className={styles.menu} role="menu">
        {options.map((option) => <button type="button" role="menuitem" key={option} onClick={() => { select(option); setMenu(''); }}>{option}</button>)}
      </span>}
    </span>
  );
  const feedback = notice && <p className={styles.notice} role="status">{notice}</p>;
  const frame = (title: string, content: React.ReactNode) => (
    <section className={styles.frame}>
      <div className={styles.kicker}>OtterlyAI pattern · fictional data</div>
      <h2>{title}</h2>
      {content}
      {feedback}
    </section>
  );
  if (variant === 'shell') return frame('Application shell',
    <div className={styles.shell}>
      <aside className={styles.side}>
        <strong>OtterlyAI</strong>
        <small>Northstar Workspace</small>
        <span>BRAND REPORT</span>
        {['Overview', 'Prompts', 'Citations', 'Recommendations', 'Agent analytics'].map((label) =>
          <button type="button" key={label} className={menu === label ? styles.active : ''} onClick={() => setMenu(label)}>{label}</button>)}
        <span>GENERAL</span>
        {['AI prompt research', 'Search prompts', 'GEO audit tools', 'Data sources'].map((label) =>
          <button type="button" key={label} onClick={() => localAction(label + ' selected')}>{label}</button>)}
      </aside>
      <main className={styles.main}><small>Brand report / Northstar / {menu || 'Overview'}</small><h3>{menu || 'Overview'}</h3><p>Report content changes with the selected navigation item.</p></main>
    </div>);
  if (variant === 'competitors') return frame('Competitor review',
    <><p>Review suggested competitors before a brand report begins.</p>
      {competitors.map((name, index) => <div className={styles.row} key={name + index}>
        <input aria-label={'Competitor ' + (index + 1) + ' name'} value={name} onChange={(event) => setCompetitors(competitors.map((value, i) => i === index ? event.target.value : value))} />
        <input aria-label={'Competitor ' + (index + 1) + ' domain'} defaultValue={sampleSites[index] || 'new.example'} />
        <button type="button" aria-label={'Remove competitor ' + name} onClick={() => setCompetitors(competitors.filter((_, i) => i !== index))}>×</button>
      </div>)}
      <button type="button" onClick={() => setCompetitors([...competitors, ''])}>+ Add competitor</button>
      <div className={styles.footer}><button type="button" onClick={() => localAction('Back')}>Back</button><button type="button" className={styles.primary} onClick={() => localAction('Next')}>Next</button></div></>);
  if (variant === 'selection') return frame('Prompt selection',
    <><p>{selectedPrompts.length} / {samplePrompts.length} prompts selected</p>
      {samplePrompts.map((prompt) => <label className={styles.checkrow} key={prompt}><input type="checkbox" checked={selectedPrompts.includes(prompt)}
        onChange={() => setSelectedPrompts(selectedPrompts.includes(prompt) ? selectedPrompts.filter((item) => item !== prompt) : [...selectedPrompts, prompt])} />{prompt}</label>)}
      <button type="button" onClick={() => localAction('Add Prompt')}>+ Add Prompt</button>
      <div className={styles.footer}><button type="button" onClick={() => localAction('Back')}>Back</button><button type="button" className={styles.primary} onClick={() => localAction('Next')}>Next</button></div></>);
  if (variant === 'filters') return frame('Report filters',
    <div className={styles.toolbar}>
      {menuButton('date', selectedDate, ['Month to date', 'Last month', 'Last 14 days', 'Last 30 days', 'Last 60 days', 'Last 90 days'], setSelectedDate)}
      {menuButton('tags', 'All tags', ['All tags', 'Editorial', 'Product'], () => localAction('Tag filter changed'))}
      {menuButton('engines', selectedEngine, engines, setSelectedEngine)}
      {menuButton('country', 'Canada', ['Canada'], () => localAction('Country filter opened'))}
      <p className={styles.note}>Google AI Mode, Google Gemini, and Claude API appeared as add-ons in the observed engine menu.</p>
    </div>);
  if (variant === 'processing') return frame('Report preparing',
    <><p className={styles.processing}>ⓘ We are still preparing this report. Data will appear here as soon as it is ready.</p>
      <div className={styles.toolbar}><button type="button">Last 14 days</button><button type="button">All Engines</button><button type="button" disabled>Export</button></div>
      <div className={styles.grid}><div className={styles.card}><h3>Brand coverage over time</h3><div className={styles.skeleton} /></div>
      <div className={styles.card}><h3>Your brand mentions</h3><div className={styles.skeleton} /></div></div></>);
  if (variant === 'prompt-table' || variant === 'inventory') return frame(variant === 'inventory' ? 'Search prompts inventory' : 'Brand Report prompts',
    <><div className={styles.toolbar}><input type="search" aria-label="Search prompts" placeholder="Search prompts" value={query} onChange={(event) => setQuery(event.target.value)} />
      <button type="button" onClick={() => localAction('Filter opened')}>Filter</button>
      {variant === 'prompt-table' && <button type="button" onClick={() => localAction('CSV export preview')}>Export as CSV</button>}</div>
      <div className={styles.tableWrap}><table><thead><tr><th>Prompt</th><th>{variant === 'inventory' ? 'Country' : 'Brand coverage'}</th><th>{variant === 'inventory' ? 'Intent Volume' : 'Brand mentions'}</th><th>Actions</th></tr></thead>
      <tbody>{(initialState === 'empty' ? [] : filteredPrompts).map((prompt, index) => <tr key={prompt}><td>{prompt}</td><td>{variant === 'inventory' ? 'Canada' : '0%'}</td><td>{variant === 'inventory' ? 'calculating…' : '0'}</td>
      <td><button type="button" onClick={() => openMenu('row' + index)} aria-label={'More actions for prompt ' + (index + 1)}>•••</button>
      {menu === 'row' + index && <span className={styles.menu} role="menu">{['Edit Prompt', 'Similar prompts', 'Delete'].map((action) => <button type="button" key={action} onClick={() => { localAction(action); setMenu(''); }}>{action}</button>)}</span>}</td></tr>)}</tbody></table></div>
      {initialState === 'empty' && <p>No prompts in this fictional fixture.</p>}
      <div className={styles.footer}><span>Viewing {initialState === 'empty' ? 0 : filteredPrompts.length} results</span><button type="button" onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}>Previous</button><span>{page}</span><button type="button" onClick={() => setPage(page + 1)}>Next</button></div></>);
  if (variant === 'citations') return frame('Citations table',
    <><div className={styles.grid}><div className={styles.card}>Top Winners<br /><small>Today’s data is still processing.</small></div><div className={styles.card}>Top Losers<br /><small>Today’s data is still processing.</small></div></div>
      <div className={styles.toolbar}><input type="search" aria-label="Search cited URLs" placeholder="Search cited URLs" value={query} onChange={(event) => setQuery(event.target.value)} />
      <button type="button" onClick={() => localAction('Citation filter opened')}>Filter</button></div>
      <div className={styles.tableWrap}><table><thead><tr><th>URL</th><th>Cited</th><th>Brand mentioned</th><th>Domain category</th></tr></thead>
      <tbody>{sampleSites.filter((site) => site.includes(query)).map((site, index) => <tr key={site}><td>https://{site}/guide</td><td>{index + 1}</td><td>No</td><td>Blogs/Personal Sites</td></tr>)}</tbody></table></div></>);
  if (variant === 'detail') return frame('Prompt details',
    <><div className={styles.toolbar}><span>Last 14 days</span><span>All engines</span><span>Canada</span></div>
      <p><strong>Prompt:</strong> Which platform helps a small team manage its work?</p>
      <div className={styles.toolbar} role="tablist" aria-label="Prompt evidence">
        {['Overview', 'Responses', 'Citations'].map((label) => <button type="button" role="tab" aria-selected={detailTab === label} key={label}
          className={detailTab === label ? styles.active : ''} onClick={() => setDetailTab(label)}>{label}</button>)}
      </div>
      {detailTab === 'Overview' && <><div className={styles.grid}>{['Intent volume', 'My brand mentions', 'Brand sentiment', 'My domain citations', 'Total citations', 'Competitors'].map((label) =>
        <div className={styles.card} key={label}><strong>{label}</strong><span>{label === 'Brand sentiment' ? 'N/A' : '0'}</span></div>)}</div><h3>Competitor ranking</h3><div className={styles.empty}>Awaiting report data</div></>}
      {detailTab === 'Responses' && <div className={styles.tableWrap}><table><thead><tr><th>AI responses</th><th>Brand sentiment</th><th>Brand mentioned</th><th>Run date</th></tr></thead>
        <tbody><tr><td>Fictional example response with no provider claim.</td><td>N/A</td><td>No</td><td>Today</td></tr></tbody></table></div>}
      {detailTab === 'Citations' && <div className={styles.tableWrap}><table><thead><tr><th>URL</th><th>Brand mentioned on cited page</th><th>Cited</th><th>Domain category</th></tr></thead>
        <tbody><tr><td>https://orbit.example/guide</td><td>No</td><td>1</td><td>Blogs/Personal Sites</td></tr></tbody></table></div>}</>);
  if (variant === 'coverage') return frame('Brand coverage and ranking',
    <><div className={styles.toolbar}>{menuButton('comparison', comparisonScope,
      ['Me + all competitors', 'Me + Top 5 competitors'], setComparisonScope)}</div>
      <div className={styles.grid}><div className={styles.card}><h3>Brand coverage over time</h3><div className={styles.chart}><span>Northstar</span><span>Orbit</span><span>Harbor</span></div></div>
      <div className={styles.card}><h3>Your brand mentions</h3><strong>0</strong><p>Orbit 2 · Harbor 1</p><h3>Your average brand position</h3><strong>0</strong></div></div>
      <div className={styles.card}><div className={styles.footer}><h3>Brand ranking</h3><button type="button" onClick={() => localAction('More Detected Brands')}>More Detected Brands</button></div>
      <div className={styles.tableWrap}><table><thead><tr><th>#</th><th>Name</th><th>Sentiment</th><th>Mentions</th><th>Coverage</th><th>Share of voice</th></tr></thead>
      <tbody>{['Orbit', 'Harbor', 'Northstar'].map((name,index)=><tr key={name}><td>{index+1}</td><td>{name}</td><td>{index===0?'+20':'N/A'}</td><td>{2-index}</td><td>{index===0?'3.3%':'0%'}</td><td>{index===0?'67%':'0%'}</td></tr>)}</tbody></table></div></div></>);
  if (variant === 'overview-screen') return frame('Brand Report overview screen',
    <><div className={styles.toolbar}><span>Last 14 days</span><span>All tags</span><span>All Engines</span><span>Canada</span></div>
      <p className={styles.note}>Screen composition with fictional values. Report filters scope every section.</p>
      <div className={styles.grid}><div className={styles.card}><h3>Brand coverage over time</h3><div className={styles.chart}><span>Northstar</span><span>Orbit</span><span>Harbor</span></div></div>
      <div className={styles.card}><h3>Your brand mentions</h3><strong>0</strong><h3>Your average brand position</h3><strong>0</strong></div></div>
      <div className={styles.card}><h3>Brand ranking</h3><p>Sentiment · Mentions · Coverage · Share of voice</p></div>
      <div className={styles.grid}><div className={styles.card}><h3>Top prompts by brand mentions</h3><p>Fictional prompt summary</p></div>
      <div className={styles.card}><h3>Brand visibility index</h3><p>Coverage × likelihood to buy</p></div></div>
      <div className={styles.grid}><div className={styles.card}><h3>Citation changes</h3><p>Top · New · Increased · Stable · Decreased · Lost</p></div>
      <div className={styles.card}><h3>Domain sources</h3><p>Category distribution and linked domain table</p></div></div></>);
  if (variant === 'top-prompts') return frame('Top prompts by brand mentions',
    <><div className={styles.tableWrap}><table><thead><tr><th>Rank</th><th>Prompt</th><th># of my brand mentions</th></tr></thead>
      <tbody>{samplePrompts.map((prompt,index)=><tr key={prompt}><td>{index+1}</td><td>{prompt}</td><td>0</td></tr>)}</tbody></table></div>
      <div className={styles.footer}><button type="button" onClick={() => localAction('View full report')}>View full report</button></div></>);
  if (variant === 'source-categories') return frame('Domain source categories',
    <><p>Select a category to scope the adjacent domain table.</p><div className={styles.sourceLayout}>
      <div className={styles.card}><div className={styles.donut}>12<br /><small>citations</small></div>
      {['Brand','Social Media','Blogs/Personal Sites','Education'].map((category)=><label className={styles.checkrow} key={category}>
        <input type="checkbox" checked={sourceCategory===category} onChange={()=>setSourceCategory(sourceCategory===category?'':category)} />{category}</label>)}</div>
      <div className={styles.tableWrap}><table><thead><tr><th>Domain</th><th>Category</th><th>Coverage</th></tr></thead>
      <tbody>{[['orbit.example','Brand'],['harbor.example','Social Media'],['spruce.example','Blogs/Personal Sites']]
        .filter(([,category])=>!sourceCategory||category===sourceCategory).map(([site,category])=><tr key={site}><td>{site}</td><td>{category}</td><td>12%</td></tr>)}</tbody></table>
      {sourceCategory==='Education'&&<p>No domains in this fictional category.</p>}</div></div></>);
  if (variant === 'citation-trends') return frame('Citation winners and losers',
    <><div className={styles.grid}><div className={styles.card}><h3>Top Winners</h3><p>Today’s data is still processing. Select an earlier date to view complete results.</p></div>
      <div className={styles.card}><h3>Top Losers</h3><p>Today’s data is still processing. Select an earlier date to view complete results.</p></div></div>
      <p className={styles.note}>The cited URL table can be populated while these trend panels remain pending.</p></>);
  if (variant === 'visibility') return frame('Brand visibility index',
    <><p>Coverage and likelihood to buy appear on separate axes with named quadrants.</p>
      <div className={styles.scatter}><span>Niche</span><span>Leaders</span><span>Low performance</span><span>Low conversion</span>
      <b className={styles.pointOne}>Orbit</b><b className={styles.pointTwo}>Harbor</b><b className={styles.pointThree}>Northstar</b></div>
      <div className={styles.tableWrap}><table><thead><tr><th>Brand</th><th>Brand coverage</th><th>Likelihood to buy</th></tr></thead>
      <tbody><tr><td>Orbit · Leader</td><td>3.3%</td><td>100%</td></tr><tr><td>Northstar · Low performance</td><td>0%</td><td>10%</td></tr></tbody></table></div></>);
  if (variant === 'citation-changes') return frame('Citation changes',
    <><div className={styles.toolbar}>{menuButton('sort', citationSort, ['Sort by cited','Sort by change'], setCitationSort)}
      <button type="button" onClick={() => localAction('View full list')}>View full list</button></div>
      <div className={styles.toolbar} role="tablist" aria-label="Citation change scope">{['Top','New','Increased','Stable','Decreased','Lost'].map((label)=>
        <button type="button" role="tab" aria-selected={changeTab===label} className={changeTab===label?styles.active:''} key={label} onClick={()=>setChangeTab(label)}>{label}</button>)}</div>
      <div className={styles.tableWrap}><table><thead><tr><th>URL</th><th>Cited</th><th>Change</th></tr></thead>
      <tbody><tr><td>https://orbit.example/guide</td><td>2</td><td>{changeTab==='Lost'?'−1':' +2 New'}</td></tr></tbody></table></div></>);
  if (variant === 'domain-sources') return frame('Domain sources',
    <><div className={styles.toolbar}>{menuButton('domainScope',selectedEngine==='All Engines'?'All domains':selectedEngine,
      ['All domains','Brand','Social Media','Blogs/Personal Sites','News/Media'],setSelectedEngine)}</div>
      <div className={styles.grid}><div className={styles.card}><div className={styles.donut}>12<br /><small>citations</small></div>
      <p>Brand · Social Media · Blogs/Personal Sites · News/Media</p></div>
      <div className={styles.tableWrap}><table><thead><tr><th>Domain</th><th>Category</th><th>Coverage</th></tr></thead>
      <tbody>{sampleSites.map((site,index)=><tr key={site}><td>{site}</td><td>{index===0?'Brand':'Blogs/Personal Sites'}</td><td>{12-index*3}%</td></tr>)}</tbody></table></div></div></>);
  if (variant === 'recommendations') return frame('Recommendations',
    <><div className={styles.toolbar}><button type="button" className={styles.active}>Suggested</button><button type="button" disabled>To-Do</button><button type="button" disabled>Archive</button></div>
      <div className={styles.empty}><strong>Your brand analysis is in progress…</strong><p>Patterns are being collected over time. Recommendations can take up to 3 days.</p></div></>);
  if (variant === 'agents') return frame('Agent analytics',
    <div className={styles.empty}><strong>See which AI engines are reading your site</strong><p>Connect a data source to view bot visits, pages read, and citation conversions.</p><button type="button" className={styles.primary} onClick={() => localAction('Data source connection entry')}>Connect a data source</button></div>);
  if (variant === 'research') return frame('AI Prompt Research',
    <><p>How would you like to get started?</p>{modes.map((label, index) => <label className={styles.checkrow} key={label}><input type="radio" name="mode" checked={mode === index} onChange={() => setMode(index)} />{label}</label>)}
      {mode === 0 && <><label>SEO keywords<textarea aria-label="SEO keywords" placeholder="One keyword per line" /></label><small>Enter up to 20 keywords, one per line</small></>}
      {mode === 1 && <label>URL<input type="url" placeholder="https://northstar.example/page" /></label>}
      {mode === 2 && <><label>Brand Name<input placeholder="Northstar" /></label><label>Brand Domain<input placeholder="northstar.example" /></label><label>Brand Industry<input placeholder="Software" /></label></>}
      <div className={styles.toolbar}><label>Language<select><option>Select</option><option>English</option></select></label><label>Country<select><option>Select your primary market</option><option>Canada</option></select></label></div>
      <div className={styles.footer}><button type="button" onClick={() => localAction('Cancel')}>Cancel</button><button type="button" className={styles.primary} onClick={() => localAction('Next step')}>Next step</button></div></>);
  if (variant === 'audit' || variant === 'advanced-audit') return frame(variant === 'audit' ? 'Crawlability checker' : 'Content checker',
    <><p>{variant === 'audit' ? 'Check whether a page is crawlable by AI search engines.' : 'Assess page structure, metadata, and technical signals.'}</p>
      <div className={styles.card}><strong>New URL Audit</strong><small>0 / 100 GEO URL Audits used this month</small><input type="url" placeholder="https://northstar.example" value={query} onChange={(event) => setQuery(event.target.value)} />
      <button type="button" className={styles.primary} disabled={!query} onClick={() => localAction('Start audit')}>Start audit</button>
      {variant === 'advanced-audit' && <><button type="button" onClick={() => setAdvanced(!advanced)}>Advanced Audit ⌄</button>{advanced && <div className={styles.card}><label>Crawler Identity<select value={selectedCrawler} onChange={(event) => setSelectedCrawler(event.target.value)}>{['ChatGPT-User', 'OAI-Searchbot', 'PerplexityCrawler', 'GoogleBot'].map((name) => <option key={name}>{name}</option>)}</select></label><label className={styles.checkrow}><input type="checkbox" />Send X-OtterlyAI-Crawler header with requests</label></div>}</>}</div>
      <h3>Audit history</h3><div className={styles.empty}>No audits yet.</div></>);
  return frame('Query fan-out',
    <><p>Generate related queries from a single search prompt.</p><label>Query or search prompt<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="How do teams manage approvals?" /></label>
      <div className={styles.toolbar}>{['ChatGPT', 'Google AI Overview', 'Google AI Mode'].map((name) => <span className={styles.pill} key={name}>{name}</span>)}</div>
      <button type="button" className={styles.primary} disabled={!query} onClick={() => localAction('Generate')}>Generate</button>
      <h3>Run history</h3><div className={styles.empty}>No runs yet.</div></>);
}

import { useEffect, useState } from 'react';
import styles from './semrush-home-folders-workspace.module.css';

export type SemrushHomeFoldersState =
  | 'cards'
  | 'search-empty'
  | 'ownership-menu'
  | 'tags-empty'
  | 'seo-table-loading'
  | 'seo-table'
  | 'settings-menu'
  | 'create-folder'
  | 'filters-hidden';

export interface SemrushHomeFoldersWorkspaceProps {
  initialState?: SemrushHomeFoldersState;
  disabled?: boolean;
}

const products = ['Home', 'SEO', 'AI', 'Traffic & Market', 'Local', 'Content', 'Ad', 'AI PR', 'Social', 'Reports', 'Apps'];
const recommendations = [
  ['Pulse Map', 'See what drives visibility across search experiences.'],
  ['Traffic & Market', 'Track competitors, analyze markets, and uncover growth opportunities.'],
  ['Local', 'Manage reviews, boost local visibility, and track competitors.'],
  ['Content', 'Create search-ready content with AI and competitive data.'],
];
const folders = [
  { domain: 'northstar.example', ai: '15', mentions: '12', health: '95%', visibility: '14.34%', traffic: '18.5K', keywords: '2.7K', backlinks: '24.6K' },
  { domain: 'harbor.example', ai: '37', mentions: '11.8K', health: '66%', visibility: 'Set up', traffic: '1.8M', keywords: '810K', backlinks: '1.9M' },
];

export function SemrushHomeFoldersWorkspace({
  initialState = 'cards',
  disabled = false,
}: SemrushHomeFoldersWorkspaceProps) {
  const [search, setSearch] = useState(initialState === 'search-empty' ? 'no-match-example.invalid' : '');
  const [filtersVisible, setFiltersVisible] = useState(initialState !== 'filters-hidden');
  const [tableView, setTableView] = useState(initialState === 'seo-table' || initialState === 'seo-table-loading');
  const [tableLoading, setTableLoading] = useState(initialState === 'seo-table-loading');
  const [open, setOpen] = useState<SemrushHomeFoldersState | 'none'>(
    ['ownership-menu', 'tags-empty', 'settings-menu', 'create-folder'].includes(initialState) ? initialState : 'none',
  );
  const [websiteMenu, setWebsiteMenu] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (!tableLoading) return;
    const timer = window.setTimeout(() => setTableLoading(false), 250);
    return () => window.clearTimeout(timer);
  }, [tableLoading]);

  const showGuard = (label: string) => setStatus(`${label} was not run. This reconstruction keeps the action local.`);
  const toggle = (next: SemrushHomeFoldersState) => {
    if (disabled) return;
    setOpen((current) => current === next ? 'none' : next);
  };
  const toggleTable = () => {
    if (disabled) return;
    const next = !tableView;
    setTableView(next);
    setOpen('none');
    if (next) setTableLoading(true);
  };
  const visibleFolders = search.trim()
    ? folders.filter((folder) => folder.domain.includes(search.trim().toLowerCase()))
    : folders;

  return (
    <div className={styles.root}>
      <header className={styles.topbar}>
        <label><span className={styles.srOnly}>Enter website or keyword</span><input placeholder="Enter website or keyword" disabled={disabled} /></label>
        <button type="button" disabled={disabled} onClick={() => showGuard('Analyze')}>Analyze</button>
        <nav aria-label="Account navigation"><button type="button" disabled onClick={() => undefined}>＋ Invite users</button><span>Pricing</span><span>Enterprise</span><span>More⌄</span><span className={styles.avatar}>N</span></nav>
      </header>

      <aside className={styles.rail} aria-label="Primary products">
        {products.map((product) => <span className={product === 'Home' ? styles.activeProduct : ''} key={product}>{product}</span>)}
      </aside>

      <main className={styles.main}>
        <section className={styles.recommendations} aria-label="Recommended toolkits and apps">
          {recommendations.map(([name, description], index) => (
            <article key={name}><span>{index === 0 ? 'For you' : 'Toolkit'}</span><strong>{name}</strong><p>{description}</p></article>
          ))}
          <button type="button" disabled={disabled} onClick={() => showGuard('Recommendation carousel')}>›<span className={styles.srOnly}>Scroll right</span></button>
        </section>

        <section className={styles.folders} aria-label="Folders workspace">
          <div className={styles.folderTitle}>
            <div><h2>Folders</h2><button type="button" disabled={disabled} onClick={() => setFiltersVisible((visible) => !visible)}>{filtersVisible ? 'Hide filters and view' : 'Show filters and view'}</button></div>
            <div><button type="button" disabled onClick={() => undefined}>Share · needs verification</button><button type="button" disabled={disabled} onClick={() => setOpen('create-folder')}>＋ Create Folder</button></div>
          </div>

          {filtersVisible && (
            <div className={styles.filters}>
              <label className={styles.search}><span aria-hidden="true">⌕</span><input aria-label="Website or folder name" value={search} placeholder="Website or folder name" disabled={disabled} onChange={(event) => setSearch(event.target.value)} />{search && <button type="button" aria-label="Clear folder search" onClick={() => setSearch('')}>×</button>}</label>
              <div className={styles.menuWrap}>
                <button type="button" role="combobox" aria-label="Ownership" aria-expanded={open === 'ownership-menu'} disabled={disabled} onClick={() => toggle('ownership-menu')}>Ownership⌄</button>
                {open === 'ownership-menu' && <div className={styles.menu} role="listbox" aria-label="Ownership"><button type="button" role="option" aria-selected="true" onClick={() => setOpen('none')}>Owned by me</button><button type="button" role="option" aria-selected="false" onClick={() => setOpen('none')}>Shared with me</button></div>}
              </div>
              <div className={styles.menuWrap}>
                <button type="button" role="combobox" aria-label="Tags" aria-expanded={open === 'tags-empty'} disabled={disabled} onClick={() => toggle('tags-empty')}>Tags⌄</button>
                {open === 'tags-empty' && <div className={styles.menu} role="listbox" aria-label="Tags"><span>No tags here yet</span></div>}
              </div>
              <label className={styles.switch}><input type="checkbox" role="switch" checked={tableView} disabled={disabled} onChange={toggleTable} /><span>Table view (SEO only)</span></label>
            </div>
          )}

          {visibleFolders.length === 0 ? (
            <div className={styles.empty} role="status"><strong>No results found</strong><p>Try to modify your search to view results.</p><button type="button" onClick={() => setSearch('')}>Clear filters</button></div>
          ) : tableView ? (
            <div className={styles.table} role="grid" aria-label="Folders table" aria-busy={tableLoading}>
              <div className={styles.tableHeader} role="row">{['Folder', 'Site Health', 'Visibility', 'Toxic Domains', 'Ideas to Do', 'Backlink Prospects', 'Organic Sessions', ''].map((heading, index) => <span role="columnheader" key={`${heading}-${index}`}>{heading}</span>)}</div>
              {folders.map((folder, index) => (
                <div className={styles.tableRow} role="row" key={folder.domain}>
                  <div role="gridcell"><strong>{folder.domain}</strong><small>{folder.domain}</small></div>
                  <span role="gridcell">{folder.health}</span><span role="gridcell">{folder.visibility}</span>
                  {['Toxic Domains', 'Ideas to Do', 'Backlink Prospects', 'Organic Sessions'].map((item) => <span role="gridcell" key={item}>{tableLoading ? 'Loading…' : <button type="button" disabled>Set up</button>}</span>)}
                  <span className={styles.menuWrap} role="gridcell"><button type="button" aria-haspopup="menu" aria-expanded={open === 'settings-menu' && index === 0} disabled={disabled} onClick={() => index === 0 ? toggle('settings-menu') : showGuard('Folder settings')}>⋮<span className={styles.srOnly}>Settings for {folder.domain}</span></button>{open === 'settings-menu' && index === 0 && <div className={`${styles.menu} ${styles.settingsMenu}`} role="menu" aria-label="Folder settings">{['Share', 'Pin', 'Tags', 'Settings', 'Delete'].map((item) => <button type="button" role="menuitem" disabled onClick={() => undefined} key={item}>{item}{item === 'Delete' ? ' · needs verification' : ''}</button>)}</div>}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.cardList}>
              {folders.map((folder, index) => (
                <article className={styles.folderCard} key={folder.domain}>
                  <header><div><strong>{folder.domain}</strong><small>{folder.domain}</small></div><button type="button" aria-haspopup="menu" aria-expanded={open === 'settings-menu' && index === 0} disabled={disabled} onClick={() => index === 0 ? toggle('settings-menu') : showGuard('Folder settings')}>⋮<span className={styles.srOnly}>Settings for {folder.domain}</span></button></header>
                  <div className={styles.metrics}>{[['AI Visibility', folder.ai], ['Mentions', folder.mentions], ['Site Health', folder.health], ['Visibility', folder.visibility], ['Organic Traffic', folder.traffic], ['Organic Keywords', folder.keywords], ['Backlinks', folder.backlinks]].map(([label, value]) => <div key={label}><span>{label}</span><button type="button" disabled onClick={() => undefined}>{value}</button></div>)}</div>
                  {index === 0 && <footer><div><span>Local: Online Presence</span><strong>Poor</strong></div><div><span>Listings to Fix</span><strong>40</strong></div><div><span>Local Growth</span><p>Improve business info in directories</p><button type="button" disabled>Set up</button></div></footer>}
                  {open === 'settings-menu' && index === 0 && <div className={`${styles.menu} ${styles.cardSettings}`} role="menu" aria-label="Folder settings">{['Share', 'Pin', 'Tags', 'Settings', 'Delete'].map((item) => <button type="button" role="menuitem" disabled onClick={() => undefined} key={item}>{item}{item === 'Delete' ? ' · needs verification' : ''}</button>)}</div>}
                </article>
              ))}
            </div>
          )}
        </section>

        <section className={styles.monitoring}><h3>Domains for monitoring</h3><button type="button" disabled={disabled} onClick={() => showGuard('Domains for monitoring')}>Open</button></section>
        {status && <p className={styles.status} role="status">{status}</p>}
      </main>

      {open === 'create-folder' && (
        <div className={styles.modalBackdrop} role="presentation">
          <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="create-folder-title">
            <div className={styles.modalTitle}><h2 id="create-folder-title">Create folder</h2><button type="button" aria-label="Close" onClick={() => setOpen('none')}>×</button></div>
            <label>Website<button type="button" role="combobox" aria-expanded={websiteMenu} onClick={() => setWebsiteMenu((visible) => !visible)}>Select a website⌄</button></label>
            {websiteMenu && <div className={styles.websiteMenu} role="listbox" aria-label="Website suggestions"><button type="button" role="option" aria-selected="false">northstar.example</button><button type="button" role="option" aria-selected="false">harbor.example</button></div>}
            <p>Don’t have a website? <button type="button" disabled>Add a competitor</button></p>
            <label>Name<input value={folderName} disabled={disabled} onChange={(event) => setFolderName(event.target.value)} /></label>
            <label className={styles.shareCheck}><input type="checkbox" disabled />Share once created</label>
            <div className={styles.modalActions}><button type="button" disabled>Create · needs verification</button><button type="button" onClick={() => setOpen('none')}>Cancel</button></div>
          </section>
        </div>
      )}
    </div>
  );
}

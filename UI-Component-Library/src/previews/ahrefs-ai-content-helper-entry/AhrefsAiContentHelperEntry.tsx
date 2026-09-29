import { useState } from 'react';
import styles from '../ahrefs-shared.module.css';

export interface AhrefsAiContentHelperEntryProps {
  initialState?: 'documents' | 'brand-kits';
  disabled?: boolean;
}
const tools = [
  'Dashboard',
  'Brand Radar',
  'AI Content Helper',
  'SMM',
  'Site Explorer',
  'Keywords Explorer',
];

export function AhrefsAiContentHelperEntry({
  initialState = 'documents',
  disabled = false,
}: AhrefsAiContentHelperEntryProps) {
  const [tab, setTab] = useState(initialState);
  const [competitors, setCompetitors] = useState(1);
  const [status, setStatus] = useState('');
  const guard = (action: string) => {
    if (!disabled)
      setStatus(
        `${action} needs verification. No live document, AI generation, quota, or external action was run.`
      );
  };
  return (
    <div className={styles.root}>
      <div className={styles.appShell}>
        <header className={styles.header}>
          <nav className={styles.globalNav} aria-label="Ahrefs products">
            <strong className={styles.logo}>
              a<span>h</span>refs
            </strong>
            <button type="button" disabled={disabled} onClick={() => guard('All tools menu')}>
              ▦ All tools
            </button>
            <div className={styles.toolLinks}>
              {tools.map((tool) => (
                <button
                  type="button"
                  key={tool}
                  disabled={disabled}
                  className={tool === 'AI Content Helper' ? styles.activeTool : ''}
                  onClick={() => guard(`${tool} navigation`)}
                >
                  {tool}
                </button>
              ))}
              <button type="button" disabled={disabled} onClick={() => guard('More menu')}>
                More⌄
              </button>
            </div>
            <button
              className={styles.upgrade}
              type="button"
              disabled={disabled}
              onClick={() => guard('Upgrade navigation')}
            >
              ✦ Upgrade
            </button>
            <button
              className={styles.workspace}
              type="button"
              disabled={disabled}
              onClick={() => guard('Workspace menu')}
            >
              Atlas workspace⌄
            </button>
          </nav>
        </header>
        <main className={styles.productEntryMain}>
          <section className={styles.productHero} aria-labelledby="content-helper-title">
            <h1 id="content-helper-title">AI Content Helper</h1>
            <p>
              Align your content with search intent, analyze competitors, and get guidance to
              optimize your writing.
            </p>
          </section>
          <section
            className={`${styles.entryCard} ${styles.helperCard}`}
            aria-label="Document setup"
          >
            <label>
              Target keyword
              <input disabled={disabled} placeholder="Enter keyword you want to rank for" />
            </label>
            <label>
              Article URL
              <input disabled={disabled} placeholder="Enter URL you want to import content from" />
            </label>
            <div className={styles.twoColumns}>
              <label>
                Location
                <select disabled={disabled} defaultValue="United States">
                  <option>United States</option>
                </select>
              </label>
              <label>
                Brand kit
                <select disabled={disabled} defaultValue="Not selected">
                  <option>Not selected</option>
                </select>
              </label>
            </div>
            {Array.from({ length: competitors }, (_, index) => (
              <label key={index}>
                Competitor {index + 1}
                <input disabled={disabled} placeholder="Enter URL you want to compete with" />
              </label>
            ))}
            <button
              className={styles.inlineAction}
              type="button"
              disabled={disabled}
              onClick={() => setCompetitors((value) => Math.min(value + 1, 3))}
            >
              ＋ Add competitor
            </button>
            <div className={styles.actionRow}>
              <button
                className={styles.primaryAction}
                type="button"
                disabled={disabled}
                onClick={() => guard('Document creation')}
              >
                Create document
              </button>
              <button type="button" disabled={disabled} onClick={() => guard('Letaido AI writing')}>
                ◇ Ask Letaido to write it
              </button>
              <span>1 / 1 document available this month</span>
              <button type="button" disabled={disabled} onClick={() => guard('Plan upgrade')}>
                Get more from $99/mo
              </button>
            </div>
          </section>
          <div className={styles.tabs} role="tablist" aria-label="Content Helper sections">
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'documents'}
              onClick={() => setTab('documents')}
            >
              Documents
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'brand-kits'}
              onClick={() => setTab('brand-kits')}
            >
              Brand kits <small>Beta</small>
            </button>
          </div>
          <section className={styles.emptyPanel}>
            <span aria-hidden="true">▤</span>
            <h2>{tab === 'documents' ? 'Add your first document' : 'Add your first brand kit'}</h2>
            <p>
              {tab === 'documents'
                ? 'Align your content with search intent, analyze competitors, and get guidance to optimize your writing.'
                : 'Create a reusable voice and brand context for future documents.'}
            </p>
          </section>
          {status && (
            <p className={styles.explorerStatus} role="status">
              {status}
            </p>
          )}
        </main>
        <footer className={styles.footer}>
          <span>
            About · Team · Our data · Blog · Robot · Jobs · Plans &amp; pricing · API · Help ·
            Contact us
          </span>
          <span>English⌄ · Legal info</span>
        </footer>
        <button
          className={styles.help}
          type="button"
          aria-label="Open help"
          disabled={disabled}
          onClick={() => guard('Help')}
        >
          ?
        </button>
      </div>
    </div>
  );
}

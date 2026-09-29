import { useState } from 'react';
import styles from '../ahrefs-shared.module.css';

export interface AhrefsBrandRadarEntryProps {
  initialState?: 'default' | 'manual';
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

export function AhrefsBrandRadarEntry({
  initialState = 'default',
  disabled = false,
}: AhrefsBrandRadarEntryProps) {
  const [manual, setManual] = useState(initialState === 'manual');
  const [status, setStatus] = useState('');
  const guard = (action: string) => {
    if (!disabled)
      setStatus(
        `${action} needs verification. No live analysis, report, quota, or external action was run.`
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
                  className={tool === 'Brand Radar' ? styles.activeTool : ''}
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
          <section className={styles.productHero} aria-labelledby="brand-radar-title">
            <h1 id="brand-radar-title">Brand Radar 2.0</h1>
            <p>Explore what people and AI say about any brand, topic or niche.</p>
            <button
              type="button"
              className={styles.inlineAction}
              disabled={disabled}
              onClick={() => guard('How to use')}
            >
              ◉ How to use
            </button>
          </section>
          <p className={styles.infoBanner}>
            <strong>New:</strong> Track your own prompts to monitor brand mentions in AI responses.{' '}
            <button type="button" disabled={disabled} onClick={() => guard('Pricing navigation')}>
              See pricing
            </button>
          </p>
          <section className={styles.entryCard} aria-label="Brand analysis setup">
            {!manual ? (
              <>
                <label>
                  Enter your website or brand name
                  <input disabled={disabled} placeholder="e.g. atlas.example or Atlas" />
                </label>
                <p>
                  or{' '}
                  <button type="button" disabled={disabled} onClick={() => setManual(true)}>
                    add your brand and competitors manually
                  </button>
                </p>
              </>
            ) : (
              <div className={styles.manualGrid}>
                <label>
                  Your brand
                  <input disabled={disabled} placeholder="Atlas" />
                </label>
                <label>
                  Competitors
                  <input disabled={disabled} placeholder="Competitor names" />
                </label>
                <button type="button" disabled={disabled} onClick={() => setManual(false)}>
                  Use website instead
                </button>
              </div>
            )}
            <button
              className={styles.primaryAction}
              type="button"
              disabled={disabled}
              onClick={() => guard('Brand analysis')}
            >
              ⌕ Analyze
            </button>
            <p className={styles.demoLinks}>
              Try demo:{' '}
              <button type="button" disabled={disabled} onClick={() => guard('PlayStation demo')}>
                PlayStation vs Xbox, Nintendo
              </button>{' '}
              ·{' '}
              <button type="button" disabled={disabled} onClick={() => guard('Salesforce demo')}>
                Salesforce vs HubSpot, Zoho
              </button>
            </p>
          </section>
          <h2 className={styles.sectionLabel}>MY REPORTS</h2>
          <section className={styles.emptyPanel}>
            <span aria-hidden="true">▥</span>
            <h2>Add your first report</h2>
            <p>Save your setup and revisit whenever you need latest results.</p>
            <button type="button" disabled={disabled} onClick={() => guard('Report creation')}>
              ＋ Report
            </button>
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

import { useState } from 'react';
import styles from '../ahrefs-shared.module.css';

export type AhrefsContentExplorerGateState = 'default' | 'video-playing';

export interface AhrefsContentExplorerAccessGateProps {
  initialState?: AhrefsContentExplorerGateState;
  disabled?: boolean;
}

const tools = [
  'Dashboard',
  'Brand Radar',
  'AI Content Helper',
  'SMM',
  'Site Explorer',
  'Keywords Explorer',
  'Content Explorer',
  'Site Audit',
];

export function AhrefsContentExplorerAccessGate({
  initialState = 'default',
  disabled = false,
}: AhrefsContentExplorerAccessGateProps) {
  const [playing, setPlaying] = useState(initialState === 'video-playing');
  const [status, setStatus] = useState('');

  const needsVerification = (action: string) => {
    if (disabled) return;
    setStatus(
      `${action} needs verification. No pricing, account, or external navigation action was run.`
    );
  };

  return (
    <div className={styles.root}>
      <div className={`${styles.appShell} ${styles.keywordsGateShell}`}>
        <header className={styles.header}>
          <nav className={styles.globalNav} aria-label="Ahrefs products">
            <strong className={styles.logo}>
              a<span>h</span>refs
            </strong>
            <button
              type="button"
              disabled={disabled}
              onClick={() => needsVerification('All tools menu')}
            >
              ▦ All tools
            </button>
            <div className={styles.toolLinks}>
              {tools.map((tool) => (
                <button
                  type="button"
                  className={tool === 'Content Explorer' ? styles.activeTool : ''}
                  disabled={disabled}
                  onClick={() => needsVerification(`${tool} navigation`)}
                  key={tool}
                >
                  {tool}
                </button>
              ))}
              <button
                type="button"
                disabled={disabled}
                onClick={() => needsVerification('More menu')}
              >
                More⌄
              </button>
            </div>
            <button
              className={styles.upgrade}
              type="button"
              disabled={disabled}
              onClick={() => needsVerification('Upgrade navigation')}
            >
              ✦ Upgrade
            </button>
            <button
              className={styles.workspace}
              type="button"
              disabled={disabled}
              onClick={() => needsVerification('Workspace menu')}
            >
              Atlas workspace⌄
            </button>
          </nav>
        </header>

        <main className={styles.keywordsGateMain}>
          <section className={styles.keywordsGateHero} aria-labelledby="content-explorer-title">
            <h1 id="content-explorer-title">Content Explorer</h1>
            <p>
              Discover and analyze top-performing content in your niche. Find link building
              prospects and low competition topics, or reverse engineer your competitor’s content
              marketing strategy.
            </p>
            <button
              className={styles.pricingCta}
              type="button"
              disabled={disabled}
              onClick={() => needsVerification('Pricing navigation')}
            >
              See pricing
            </button>
          </section>

          <section
            className={`${styles.keywordsVideo} ${styles.contentExplorerVideo}`}
            aria-label="Content Explorer tutorial"
          >
            <div className={styles.contentDemoHeader}>
              woodworking tools · Everywhere · How to use
            </div>
            <div className={styles.contentFilters}>
              Publication date · Platform · All languages · Live &amp; broken · Add filter
            </div>
            <div className={styles.contentChart}>
              <strong>Pages over time</strong>
              <div aria-hidden="true">
                {Array.from({ length: 25 }, (_, index) => (
                  <i key={index} style={{ height: `${18 + ((index * 19) % 112)}px` }} />
                ))}
              </div>
            </div>
            <div className={styles.contentAuthors}>
              <strong>Top authors</strong>
              <span>Author · Pages · Traffic</span>
              <span>H. Builder · 5 · 356K</span>
              <span>J. Framework · 81 · 74K</span>
            </div>
            <div className={styles.contentResults}>
              <strong>419,884 pages</strong>
              <span>Best woodworking tools and carpentry guides</span>
              <small>DR 61 · Ref. domains 226 · Page traffic 32.1K</small>
            </div>
            <button
              className={styles.videoPlay}
              type="button"
              aria-label={
                playing ? 'Pause Content Explorer tutorial' : 'Play Content Explorer tutorial'
              }
              disabled={disabled}
              onClick={() => {
                setPlaying((current) => !current);
                setStatus(
                  playing
                    ? 'Tutorial paused locally. No live media state was changed.'
                    : 'Tutorial playing locally. No live media request was made.'
                );
              }}
            >
              {playing ? 'Ⅱ' : '▶'}
            </button>
            <div className={styles.videoControls} aria-hidden="true">
              <span>{playing ? 'Ⅱ' : '▶'}</span>
              <span>0:00 / 2:56</span>
              <span>▤ · ◇ · ⛶</span>
            </div>
          </section>

          {status && (
            <p className={styles.keywordsGateStatus} role="status">
              {status}
            </p>
          )}
        </main>
      </div>
    </div>
  );
}

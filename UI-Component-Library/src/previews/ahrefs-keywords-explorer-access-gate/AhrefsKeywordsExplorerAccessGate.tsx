import { useState } from 'react';
import styles from '../ahrefs-shared.module.css';

export type AhrefsKeywordsExplorerGateState = 'default' | 'video-playing';

export interface AhrefsKeywordsExplorerAccessGateProps {
  initialState?: AhrefsKeywordsExplorerGateState;
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

export function AhrefsKeywordsExplorerAccessGate({
  initialState = 'default',
  disabled = false,
}: AhrefsKeywordsExplorerAccessGateProps) {
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
                  className={tool === 'Keywords Explorer' ? styles.activeTool : ''}
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
          <section className={styles.keywordsGateHero} aria-labelledby="keywords-explorer-title">
            <h1 id="keywords-explorer-title">Keywords Explorer</h1>
            <p>
              Get thousands of keyword ideas, calculate their traffic potential, and find out how
              difficult it is to rank for them.
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

          <section className={styles.keywordsVideo} aria-label="Keywords Explorer tutorial">
            <div className={styles.keywordDifficultyCard}>
              <strong>Keyword Difficulty</strong>
              <span className={styles.difficultyGauge}>40</span>
              <b>Hard</b>
              <small>~56 referring domains to rank in top 10</small>
            </div>
            <div className={styles.searchVolumeCard}>
              <strong>Search volume</strong>
              <span>18K</span>
              <small>Mobile 11K · Desktop 7K</small>
              <i aria-hidden="true">╱╲╱╲╱╲</i>
            </div>
            <button
              className={styles.videoPlay}
              type="button"
              aria-label={
                playing ? 'Pause Keywords Explorer tutorial' : 'Play Keywords Explorer tutorial'
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
              <span>0:00 / 4:10</span>
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

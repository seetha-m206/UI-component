import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from '../ahrefs-shared.module.css';

export type AhrefsSiteExplorerState =
  'default' | 'target-filled' | 'notice-dismissed' | 'update-dismissed';

export interface AhrefsSiteExplorerEntryProps {
  initialState?: AhrefsSiteExplorerState;
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

export function AhrefsSiteExplorerEntry({
  initialState = 'default',
  disabled = false,
}: AhrefsSiteExplorerEntryProps) {
  const [target, setTarget] = useState(initialState === 'target-filled' ? 'northstar.example' : '');
  const [noticeVisible, setNoticeVisible] = useState(initialState !== 'notice-dismissed');
  const [updateVisible, setUpdateVisible] = useState(initialState !== 'update-dismissed');
  const [status, setStatus] = useState('');

  const needsVerification = (action: string) => {
    if (disabled) return;
    setStatus(
      `${action} needs verification. No live account or external navigation action was run.`
    );
  };

  const guardAnalysis = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (disabled) return;
    setStatus(
      `No Site Explorer analysis was submitted for ${target || 'an empty target'}. This reconstruction stays local.`
    );
  };

  return (
    <div className={styles.root}>
      <div className={`${styles.appShell} ${styles.explorerShell}`}>
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
                  className={tool === 'Site Explorer' ? styles.activeTool : ''}
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

        {noticeVisible && (
          <section className={styles.serpNotice} aria-label="SERP data notice">
            <span aria-hidden="true">ⓘ</span>
            <p>
              <strong>29 Sep</strong> We’re currently seeing changes in how Google serves search
              results, which may cause inconsistencies in some SERP data. Our team is actively
              working to minimize the impact and improve data accuracy.
            </p>
            <button
              type="button"
              aria-label="Dismiss SERP data notice"
              disabled={disabled}
              onClick={() => setNoticeVisible(false)}
            >
              ×
            </button>
          </section>
        )}

        <main className={styles.explorerMain}>
          <section className={styles.explorerEntry} aria-labelledby="site-explorer-title">
            <h1 id="site-explorer-title">Site Explorer</h1>
            <p>
              Get an in-depth look at the backlink profile and search traffic of any website or URL.
            </p>
            <form aria-label="Explore a domain or URL" onSubmit={guardAnalysis}>
              <button
                type="button"
                disabled={disabled}
                onClick={() => needsVerification('Protocol menu')}
              >
                http + https⌄
              </button>
              <label>
                <span className={styles.srOnly}>Domain or URL</span>
                <input
                  value={target}
                  placeholder="Domain or URL"
                  disabled={disabled}
                  onChange={(event) => setTarget(event.target.value)}
                />
              </label>
              <button
                type="button"
                disabled={disabled}
                onClick={() => needsVerification('Scope menu')}
              >
                Subdomains⌄
              </button>
              <button
                className={styles.explorerSubmit}
                type="submit"
                aria-label="Run Site Explorer analysis"
                disabled={disabled}
              >
                →
              </button>
            </form>
            {status && (
              <p className={styles.explorerStatus} role="status">
                {status}
              </p>
            )}
          </section>
        </main>

        <footer className={`${styles.footer} ${styles.explorerFooter}`}>
          <span>
            About · Team · Our data · Blog · Robot · Jobs · Plans &amp; pricing · API · Help ·
            Contact us
          </span>
          <span>English⌄ · Legal info</span>
        </footer>

        {updateVisible && (
          <aside className={styles.updatePanel} role="dialog" aria-label="Product update">
            <div className={styles.updateVisual}>
              <span>BOT ANALYTICS</span>
              <strong>Vercel · CloudFront · Fastly</strong>
            </div>
            <small>29 SEPTEMBER</small>
            <h3>Bot Analytics platform integrations</h3>
            <p>
              Connect supported hosting and delivery platforms to understand how bots crawl your
              pages.
            </p>
            <div>
              <button
                type="button"
                disabled={disabled}
                onClick={() => needsVerification('Try now navigation')}
              >
                Try now
              </button>
              <button
                type="button"
                disabled={disabled}
                onClick={() => needsVerification('Learn more navigation')}
              >
                Learn more
              </button>
            </div>
          </aside>
        )}

        <button
          className={styles.help}
          type="button"
          aria-label={updateVisible ? 'Dismiss product update' : 'Open help and product updates'}
          disabled={disabled}
          onClick={() => setUpdateVisible((visible) => !visible)}
        >
          {updateVisible ? '×' : '?'}
          <span>1</span>
        </button>
      </div>
    </div>
  );
}

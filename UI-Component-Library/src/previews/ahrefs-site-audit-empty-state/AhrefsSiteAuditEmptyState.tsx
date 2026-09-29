import { useState } from 'react';
import styles from '../ahrefs-shared.module.css';

export type AhrefsSiteAuditEmptyStateName = 'default' | 'update-dismissed';

export interface AhrefsSiteAuditEmptyStateProps {
  initialState?: AhrefsSiteAuditEmptyStateName;
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

export function AhrefsSiteAuditEmptyState({
  initialState = 'default',
  disabled = false,
}: AhrefsSiteAuditEmptyStateProps) {
  const [updateVisible, setUpdateVisible] = useState(initialState !== 'update-dismissed');
  const [status, setStatus] = useState('');

  const needsVerification = (action: string) => {
    if (disabled) return;
    setStatus(`${action} needs verification. No live project or external action was run.`);
  };

  return (
    <div className={styles.root}>
      <div className={`${styles.appShell} ${styles.auditEmptyShell}`}>
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
                  className={tool === 'Site Audit' ? styles.activeTool : ''}
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

        <main className={styles.auditEmptyMain}>
          <section aria-labelledby="site-audit-empty-title">
            <div className={styles.auditEmptyIcon} aria-hidden="true">
              ◇
            </div>
            <h1 id="site-audit-empty-title">Add your first project</h1>
            <p>Set up a website that you own to analyze it across Ahrefs tools.</p>
            <button
              className={styles.auditAddProject}
              type="button"
              disabled={disabled}
              onClick={() => needsVerification('Project creation')}
            >
              ＋ Add project
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

        {updateVisible && (
          <aside className={styles.updatePanel} role="dialog" aria-label="Product update">
            <div className={`${styles.updateVisual} ${styles.auditUpdateVisual}`}>
              <span>BOT ANALYTICS</span>
              <strong>Vercel · Amazon CloudFront · Fastly</strong>
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

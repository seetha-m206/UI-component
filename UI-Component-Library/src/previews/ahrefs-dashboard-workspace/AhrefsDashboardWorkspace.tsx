import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from '../ahrefs-shared.module.css';

export type AhrefsDashboardState =
  'default' | 'target-focused' | 'project-search' | 'welcome-dismissed' | 'update-dismissed';

export interface AhrefsDashboardWorkspaceProps {
  initialState?: AhrefsDashboardState;
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

const collections = ['Projects', 'Portfolios', 'Reports', 'Keyword lists', 'Starred'];

export function AhrefsDashboardWorkspace({
  initialState = 'default',
  disabled = false,
}: AhrefsDashboardWorkspaceProps) {
  const [target, setTarget] = useState(
    initialState === 'target-focused' ? 'northstar.example' : ''
  );
  const [projectSearch, setProjectSearch] = useState(
    initialState === 'project-search' ? 'northstar' : ''
  );
  const [welcomeVisible, setWelcomeVisible] = useState(initialState !== 'welcome-dismissed');
  const [updateVisible, setUpdateVisible] = useState(initialState !== 'update-dismissed');
  const [status, setStatus] = useState('');

  const needsVerification = (action: string) => {
    if (disabled) return;
    setStatus(
      `${action} needs verification. No live account or external navigation action was run.`
    );
  };

  const guardTarget = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (disabled) return;
    setStatus(
      `No analysis was submitted for ${target || 'an empty target'}. This reconstruction stays local.`
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
                  className={tool === 'Dashboard' ? styles.activeTool : ''}
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

          <form
            className={styles.targetBar}
            aria-label="Analyze a domain or URL"
            onSubmit={guardTarget}
          >
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
              className={styles.searchButton}
              type="submit"
              aria-label="Analyze target"
              disabled={disabled}
            >
              ⌕
            </button>
            <button
              className={styles.howTo}
              type="button"
              disabled={disabled}
              onClick={() => needsVerification('How to use navigation')}
            >
              ? How to use
            </button>
          </form>
        </header>

        {welcomeVisible && (
          <section className={styles.welcome} aria-label="Welcome and learning resources">
            <button
              className={styles.close}
              type="button"
              aria-label="Dismiss welcome resources"
              disabled={disabled}
              onClick={() => setWelcomeVisible(false)}
            >
              ×
            </button>
            <article className={styles.welcomeIntro}>
              <div className={styles.star}>★</div>
              <strong>Welcome to Ahrefs!</strong>
              <span>Watch a 4-minute tour</span>
            </article>
            <button
              className={styles.videoCard}
              type="button"
              disabled={disabled}
              onClick={() => needsVerification('Welcome video playback')}
              aria-label="Play Ahrefs introduction video"
            >
              <span>INTRO TO</span>
              <strong>AWT</strong>
              <i>▶</i>
            </button>
            <button
              type="button"
              disabled={disabled}
              onClick={() => needsVerification('SEO hub navigation')}
            >
              <b>SEO</b>
              <span>Learn SEO</span>
              <strong>Ahrefs SEO hub ›</strong>
            </button>
            <button
              type="button"
              disabled={disabled}
              onClick={() => needsVerification('Academy navigation')}
            >
              <b>🎓</b>
              <span>Take a course</span>
              <strong>Ahrefs Academy ›</strong>
            </button>
            <button
              type="button"
              disabled={disabled}
              onClick={() => needsVerification('Tutorial navigation')}
            >
              <b>▶</b>
              <span>Watch tutorials</span>
              <strong>Ahrefs TV ›</strong>
            </button>
          </section>
        )}

        <div className={styles.workspaceBody}>
          <aside className={styles.collectionRail} aria-label="Workspace collections">
            <div className={styles.railActions}>
              <button
                className={styles.create}
                type="button"
                disabled={disabled}
                onClick={() => needsVerification('Create menu')}
              >
                ＋ Create⌄
              </button>
              <button
                type="button"
                aria-label="Workspace settings"
                disabled={disabled}
                onClick={() => needsVerification('Workspace settings')}
              >
                ⚙
              </button>
              <button
                type="button"
                aria-label="Collapse workspace navigation"
                disabled={disabled}
                onClick={() => needsVerification('Navigation collapse')}
              >
                ☰
              </button>
            </div>
            <label className={styles.railSearch}>
              <span aria-hidden="true">⌕</span>
              <span className={styles.srOnly}>Search workspace collections</span>
              <input
                value={projectSearch}
                placeholder="Search"
                disabled={disabled}
                onChange={(event) => setProjectSearch(event.target.value)}
              />
            </label>
            <nav aria-label="Saved work">
              {collections.map((item) => (
                <button
                  className={item === 'Projects' ? styles.activeCollection : ''}
                  type="button"
                  disabled={disabled}
                  onClick={() => needsVerification(`${item} collection`)}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className={styles.folderHeading}>
              <strong>Folders</strong>
              <button
                type="button"
                aria-label="Add folder"
                disabled={disabled}
                onClick={() => needsVerification('Folder creation')}
              >
                ＋
              </button>
            </div>
            <span className={styles.muted}>No folders</span>
          </aside>

          <main className={styles.main}>
            <h2>Projects</h2>
            <section className={styles.emptyState} aria-label="Empty projects workspace">
              <div>
                <div className={styles.emptyIcon}>◇</div>
                <h3>{projectSearch ? 'No projects found' : 'Add your first project'}</h3>
                <p>
                  {projectSearch
                    ? `No project matches “${projectSearch}”.`
                    : 'Set up a project to analyze it across Ahrefs tools'}
                </p>
                {projectSearch ? (
                  <button type="button" disabled={disabled} onClick={() => setProjectSearch('')}>
                    Clear project search
                  </button>
                ) : (
                  <button
                    className={styles.primary}
                    type="button"
                    disabled={disabled}
                    onClick={() => needsVerification('Project creation')}
                  >
                    ＋ Create project
                  </button>
                )}
              </div>
              <button
                className={styles.projectVideo}
                type="button"
                disabled={disabled}
                onClick={() => needsVerification('Projects tutorial playback')}
                aria-label="Play Projects tutorial"
              >
                <span>PROJECT SETUP</span>
                <i>▶</i>
                <small>Scope · Ownership · Site Audit · Rank Tracker</small>
              </button>
            </section>
            {status && (
              <p className={styles.status} role="status">
                {status}
              </p>
            )}
          </main>
        </div>

        <footer className={styles.footer}>
          About · Team · Our data · Blog · Robot · Jobs · Plans & pricing · API · Help · Contact us{' '}
          <span>English⌄</span>
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

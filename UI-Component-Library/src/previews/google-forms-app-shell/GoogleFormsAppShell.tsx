import { useId, useState } from 'react';
import styles from './GoogleFormsAppShell.module.css';

export type Screen = 'dashboard' | 'builder';
export type BuilderTab = 'questions' | 'responses' | 'settings';

export interface GoogleFormsAppShellProps {
  /** Which of the two screens is shown. Defaults to 'dashboard'. */
  initialScreen?: Screen;
  /** Whether the form is published — drives the conditional row-3 banner in the builder header. Defaults to true. */
  initialPublished?: boolean;
  disabled?: boolean;
  onScreenChange?: (screen: Screen) => void;
  onTabChange?: (tab: BuilderTab) => void;
  onPublishedChange?: (published: boolean) => void;
}

const RECENT_FORMS = ['Customer Feedback', 'Event RSVP', 'Team Retro'];

/**
 * Reconstructed from Google Forms' Application Shell / Header / Main Content
 * Area (see Research-Library/04-Component-Library/google-forms/google-forms-app-shell.md,
 * GF9, 2026-09-28).
 *
 * Confirmed and reproduced faithfully: the dashboard and builder ship two
 * genuinely distinct top bars (not one shell reused across screens) sharing
 * only the brand icon and account avatar; the dashboard has NO docked
 * sidebar, only a hamburger-triggered overlay drawer (rendered here as a
 * fixed-position panel over the content, matching the source's confirmed
 * `position: fixed`); the builder's 2-row sticky header (document controls +
 * tab strip with a live response-count badge and an always-visible "Total
 * points" — confirmed NOT tab-conditional, reproduced here as always
 * rendered regardless of active tab) plus a conditional row-3 unpublished
 * banner; and the sticky-header-over-independently-scrolling-canvas
 * structure, reproduced here with a real internal scroll container (the
 * `.canvas` pane) so the header visibly stays fixed while question cards
 * scroll underneath, matching the source's own direct scroll test.
 *
 * Scope notes: the Template gallery screen, Preview/Theme/Share/More dialogs,
 * and the Responses tab's Summary/Question/Individual sub-tabs are not
 * reconstructed — out of scope for this structural/shell pass. Tab bodies
 * are lightweight representative stand-ins, not full reconstructions of
 * those already-documented components ([[google-forms-responses-view]],
 * etc.). No network calls are made by this client-side preview.
 */
export function GoogleFormsAppShell({
  initialScreen = 'dashboard',
  initialPublished = true,
  disabled = false,
  onScreenChange,
  onTabChange,
  onPublishedChange,
}: GoogleFormsAppShellProps) {
  const [screen, setScreen] = useState<Screen>(initialScreen);
  const [tab, setTab] = useState<BuilderTab>('questions');
  const [published, setPublished] = useState(initialPublished);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerId = useId();

  function goToScreen(next: Screen) {
    if (disabled) return;
    setScreen(next);
    setDrawerOpen(false);
    onScreenChange?.(next);
  }

  function selectTab(next: BuilderTab) {
    if (disabled) return;
    setTab(next);
    onTabChange?.(next);
  }

  function togglePublished() {
    if (disabled) return;
    const next = !published;
    setPublished(next);
    onPublishedChange?.(next);
  }

  function handleDrawerKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      setDrawerOpen(false);
    }
  }

  const responseCount = 5;

  return (
    <div className={styles.root} data-disabled={disabled}>
      {screen === 'dashboard' ? (
        <div className={styles.screen}>
          <header className={styles.dashboardTopBar}>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="Main menu"
              aria-haspopup="true"
              aria-expanded={drawerOpen}
              aria-controls={drawerId}
              disabled={disabled}
              onClick={() => setDrawerOpen((open) => !open)}
            >
              ☰
            </button>
            <span className={styles.brand}>
              <span className={styles.brandIcon} aria-hidden="true">
                ▤
              </span>
              Forms
            </span>
            <div className={styles.searchWrap}>
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Search"
                aria-label="Search"
                disabled={disabled}
              />
            </div>
            <span className={styles.iconButton} aria-hidden="true" title="Google apps">
              ⣿
            </span>
            <span className={styles.avatar} aria-label="Account" title="Account">
              A
            </span>
          </header>

          {drawerOpen && (
            <div
              id={drawerId}
              className={styles.overlayDrawer}
              role="menu"
              aria-label="Main menu"
              tabIndex={-1}
              onKeyDown={handleDrawerKeyDown}
            >
              <ul className={styles.drawerList}>
                {['Docs', 'Sheets', 'Slides', 'Vids', 'Forms', 'Settings', 'Help & Feedback', 'Drive'].map(
                  (item) => (
                    <li key={item}>
                      <button type="button" className={styles.drawerItem} role="menuitem">
                        {item}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
          {drawerOpen && (
            <button
              type="button"
              className={styles.overlayBackdrop}
              aria-label="Close menu"
              onClick={() => setDrawerOpen(false)}
            />
          )}

          <div className={styles.dashboardBody}>
            <div className={styles.templateRow}>
              <span className={styles.sectionLabel}>Start a new form</span>
              <div className={styles.templateCards}>
                <div className={styles.templateCard}>Blank</div>
                <div className={styles.templateCard}>Contact info</div>
                <div className={styles.templateCard}>RSVP</div>
              </div>
            </div>

            <div className={styles.recentHeader}>
              <span className={styles.pageHeading}>Recent forms</span>
              <div className={styles.recentControls}>
                <select className={styles.filterSelect} aria-label="Owned by" disabled={disabled}>
                  <option>Owned by anyone</option>
                  <option>Owned by me</option>
                </select>
                <span className={styles.iconButton} aria-hidden="true" title="List view">
                  ☰
                </span>
                <span className={styles.iconButton} aria-hidden="true" title="Sort">
                  A↓
                </span>
              </div>
            </div>
            <ul className={styles.formGrid}>
              {RECENT_FORMS.map((name) => (
                <li key={name}>
                  <button
                    type="button"
                    className={styles.formCard}
                    disabled={disabled}
                    onClick={() => goToScreen('builder')}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.screen}>
          <div className={styles.builderHeaderStack}>
            <header className={styles.builderRow1}>
              <button
                type="button"
                className={styles.iconButton}
                aria-label="Forms Home"
                disabled={disabled}
                onClick={() => goToScreen('dashboard')}
              >
                ▤
              </button>
              <input
                type="text"
                className={styles.titleInput}
                defaultValue="Customer Feedback"
                aria-label="Form title"
                disabled={disabled}
              />
              <span className={styles.row1Actions}>
                <span className={styles.iconButton} aria-hidden="true" title="Customize theme">
                  🎨
                </span>
                <span className={styles.iconButton} aria-hidden="true" title="Preview">
                  👁
                </span>
                <span className={styles.iconButton} aria-hidden="true" title="Copy responder link">
                  🔗
                </span>
                <button type="button" className={styles.shareButton} disabled={disabled}>
                  Share
                </button>
                <button
                  type="button"
                  className={published ? styles.publishedPill : styles.unpublishedPill}
                  disabled={disabled}
                  aria-pressed={published}
                  onClick={togglePublished}
                >
                  {published ? 'Published' : 'Unpublished'}
                </button>
                <span className={styles.avatar} aria-label="Account" title="Account">
                  A
                </span>
              </span>
            </header>

            <div className={styles.builderRow2} role="tablist" aria-label="Form sections">
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'questions'}
                className={tab === 'questions' ? `${styles.tab} ${styles.tabActive}` : styles.tab}
                disabled={disabled}
                onClick={() => selectTab('questions')}
              >
                Questions
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'responses'}
                className={tab === 'responses' ? `${styles.tab} ${styles.tabActive}` : styles.tab}
                disabled={disabled}
                onClick={() => selectTab('responses')}
              >
                Responses
                <span className={styles.badge}>{responseCount}</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'settings'}
                className={tab === 'settings' ? `${styles.tab} ${styles.tabActive}` : styles.tab}
                disabled={disabled}
                onClick={() => selectTab('settings')}
              >
                Settings
              </button>
              <span className={styles.totalPoints}>Total points: 0</span>
            </div>

            {!published && (
              <div className={styles.unpublishedBanner} role="status">
                ⚠ This form isn&apos;t accepting responses.{' '}
                <button
                  type="button"
                  className={styles.bannerLink}
                  disabled={disabled}
                  onClick={togglePublished}
                >
                  Manage
                </button>
              </div>
            )}
          </div>

          <div className={styles.mainContent}>
            {tab === 'questions' && (
              <div className={styles.canvas} data-testid="builder-canvas">
                {['What is your name?', 'How likely are you to recommend us?', 'Any additional feedback?'].map(
                  (q) => (
                    <div key={q} className={styles.questionCard}>
                      {q}
                    </div>
                  )
                )}
              </div>
            )}
            {tab === 'responses' && (
              <div className={styles.canvas}>
                <p className={styles.pageHeading}>{responseCount} responses</p>
                <p className={styles.placeholderNote}>
                  Summary / Question / Individual sub-tabs — see [[google-forms-responses-view]].
                </p>
              </div>
            )}
            {tab === 'settings' && (
              <div className={styles.canvas}>
                <p className={styles.placeholderNote}>Quiz, Responses, and Presentation settings.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

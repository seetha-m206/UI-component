import { useState } from 'react';
import styles from './TypeformApplicationLayout.module.css';

export type Shell = 'workspace' | 'builder';
export type WorkspaceTab = 'forms' | 'contacts' | 'automations';
export type BuilderTab = 'content' | 'workflow' | 'connect';

export interface TypeformApplicationLayoutProps {
  initialShell?: Shell;
  disabled?: boolean;
  onShellChange?: (shell: Shell) => void;
  onWorkspaceTabChange?: (tab: WorkspaceTab) => void;
  onBuilderTabChange?: (tab: BuilderTab) => void;
}

/**
 * Reconstructed from Typeform's Application Layout — workspace dashboard
 * and form builder shells (see
 * Research-Library/04-Component-Library/typeform/typeform-application-layout.md,
 * AL1, 2026-09-28).
 *
 * Confirmed and reproduced faithfully: NO single persistent sidebar exists —
 * each workspace tab (Forms/Contacts/Automations reconstructed here; Insights
 * and Research Flow noted as an open gap, not reconstructed) renders its own
 * genuinely different sidebar content, and each builder tab
 * (Content/Workflow/Connect) defines its own structurally distinct
 * main-content shell (a Pages outline rail + re-rendering canvas, vs. a
 * flow-diagram canvas with no left rail, vs. a filterable integration list
 * with no left rail) rather than one shared layout. The floating "Ask
 * Typeform AI" / "Chat to create" input is reproduced as the one element
 * that persists across every shell and tab. The confirmed naming trap ("Share"
 * button, not "Publish") and the confirmed real finding that "Hide question
 * panel" collapses the RIGHT settings panel, not the left Pages rail, are
 * both reproduced deliberately, not silently corrected.
 *
 * Scope notes: Insights and Research Flow workspace tabs, the AI generation
 * modal itself (see [[typeform-ai-chat-to-create]]), and full drag-reorder
 * of the Pages rail are not reconstructed here — out of scope for this
 * structural/shell pass. No network calls are made by this client-side
 * preview.
 */
export function TypeformApplicationLayout({
  initialShell = 'workspace',
  disabled = false,
  onShellChange,
  onWorkspaceTabChange,
  onBuilderTabChange,
}: TypeformApplicationLayoutProps) {
  const [shell, setShell] = useState<Shell>(initialShell);
  const [workspaceTab, setWorkspaceTab] = useState<WorkspaceTab>('forms');
  const [builderTab, setBuilderTab] = useState<BuilderTab>('content');
  const [usageBannerDismissed, setUsageBannerDismissed] = useState(false);
  const [settingsPanelHidden, setSettingsPanelHidden] = useState(false);

  function goToShell(next: Shell) {
    if (disabled) return;
    setShell(next);
    onShellChange?.(next);
  }

  function selectWorkspaceTab(tab: WorkspaceTab) {
    if (disabled) return;
    setWorkspaceTab(tab);
    onWorkspaceTabChange?.(tab);
  }

  function selectBuilderTab(tab: BuilderTab) {
    if (disabled) return;
    setBuilderTab(tab);
    onBuilderTabChange?.(tab);
  }

  return (
    <div className={styles.root} data-disabled={disabled}>
      {shell === 'workspace' ? (
        <div className={styles.screen}>
          {!usageBannerDismissed && (
            <div className={styles.usageBanner}>
              <span>You&apos;ve used 40% of your Free plan&apos;s 10 responses a month</span>
              <span className={styles.usageBannerActions}>
                <button type="button" className={styles.linkButton} disabled={disabled}>
                  Get more responses
                </button>
                <button
                  type="button"
                  className={styles.iconButton}
                  aria-label="Remove banner"
                  disabled={disabled}
                  onClick={() => setUsageBannerDismissed(true)}
                >
                  ×
                </button>
              </span>
            </div>
          )}

          <header className={styles.topBar}>
            <span className={styles.orgMenu}>◆ seethalakshmim293</span>
            <div className={styles.tabList} role="tablist" aria-label="Workspace">
              {(['forms', 'contacts', 'automations'] as WorkspaceTab[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={workspaceTab === tab}
                  className={
                    workspaceTab === tab ? `${styles.tab} ${styles.tabActive}` : styles.tab
                  }
                  disabled={disabled}
                  onClick={() => selectWorkspaceTab(tab)}
                >
                  {tab === 'forms' ? 'Forms' : tab === 'contacts' ? 'Contacts' : 'Automations'}
                </button>
              ))}
              <span className={styles.tabDisabled} title="Not reconstructed in this preview">
                Insights 🔒
              </span>
              <span className={styles.tabDivider} aria-hidden="true" />
              <span className={styles.tabDisabled} title="Not reconstructed in this preview">
                Research Flow
              </span>
            </div>
            <span className={styles.topBarActions}>
              <button type="button" className={styles.pillButton} disabled={disabled}>
                {usageBannerDismissed ? 'View plans' : 'Get more responses'}
              </button>
              <span className={styles.avatar}>A</span>
            </span>
          </header>

          <div className={styles.body}>
            <aside className={styles.sidebar} aria-label={`${workspaceTab} sidebar`}>
              {workspaceTab === 'forms' && (
                <>
                  <button type="button" className={styles.primaryAction} disabled={disabled}>
                    + Create form
                  </button>
                  <input
                    type="search"
                    className={styles.sidebarSearch}
                    placeholder="Search"
                    aria-label="Search forms"
                    disabled={disabled}
                  />
                  <div className={styles.sidebarSectionLabel}>Workspaces</div>
                  <div className={styles.sidebarItem}>My workspace</div>
                  <div className={styles.quotaMeter}>Responses collected: 6 / 10</div>
                </>
              )}
              {workspaceTab === 'contacts' && (
                <>
                  <button type="button" className={styles.primaryAction} disabled={disabled}>
                    + Add contact
                  </button>
                  <div className={styles.sidebarSectionLabel}>Contact lists</div>
                  <div className={styles.sidebarItem}>All contacts</div>
                  <div className={styles.sidebarItem}>Contact permissions</div>
                  <div className={styles.sidebarItem}>Contact settings</div>
                </>
              )}
              {workspaceTab === 'automations' && (
                <>
                  <button type="button" className={styles.primaryAction} disabled={disabled}>
                    + Create automation
                  </button>
                  <div className={styles.sidebarItem}>Form submissions</div>
                  <div className={styles.sidebarItem}>Contact activity/updates</div>
                  <div className={styles.sidebarItem}>Specific date/time</div>
                </>
              )}
            </aside>
            <div className={styles.mainContent}>
              <div className={styles.pageHeader}>
                <span className={styles.pageHeading}>
                  {workspaceTab === 'forms'
                    ? 'My workspace'
                    : workspaceTab === 'contacts'
                      ? 'All contacts'
                      : 'Form submissions'}
                </span>
              </div>
              <button
                type="button"
                className={styles.formCard}
                disabled={disabled}
                onClick={() => goToShell('builder')}
              >
                Customer Feedback Survey
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.screen}>
          <header className={styles.builderTopBar}>
            <span className={styles.breadcrumb}>
              <button
                type="button"
                className={styles.linkButton}
                disabled={disabled}
                onClick={() => goToShell('workspace')}
              >
                Forms
              </button>
              <span aria-hidden="true"> › </span>
              <span>Customer Feedback Survey</span>
            </span>
            <div className={styles.tabList} role="tablist" aria-label="Form builder">
              {(['content', 'workflow', 'connect'] as BuilderTab[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={builderTab === tab}
                  className={builderTab === tab ? `${styles.tab} ${styles.tabActive}` : styles.tab}
                  disabled={disabled}
                  onClick={() => selectBuilderTab(tab)}
                >
                  {tab === 'content' ? 'Content' : tab === 'workflow' ? 'Workflow' : 'Connect'}
                </button>
              ))}
            </div>
            <span className={styles.topBarActions}>
              <button type="button" className={styles.shareButton} disabled={disabled}>
                ▷ Share
              </button>
              <span className={styles.avatar}>A</span>
            </span>
          </header>

          {builderTab === 'content' && (
            <div className={styles.body}>
              <aside className={styles.pagesRail} aria-label="Pages">
                <div className={styles.sidebarSectionLabel}>Pages</div>
                {['1. Welcome Screen', '2. Rating', '3. Long text'].map((page) => (
                  <div key={page} className={styles.pageRailItem} draggable={!disabled}>
                    <span aria-hidden="true" title="Drag to reorder">
                      ⠿
                    </span>
                    {page}
                  </div>
                ))}
                <div className={styles.sidebarSectionLabel}>Endings</div>
                <div className={styles.pageRailItem}>New Ending (1)</div>
              </aside>
              <div className={styles.canvas}>
                <div className={styles.contentCard}>Welcome Screen — editable heading</div>
              </div>
              {!settingsPanelHidden && (
                <aside className={styles.settingsPanel} aria-label="Question settings">
                  <div className={styles.sidebarSectionLabel}>Settings</div>
                  <div className={styles.sidebarItem}>Screen type: Welcome Screen</div>
                  <div className={styles.sidebarItem}>Button label</div>
                  <div className={styles.sidebarItem}>Logic</div>
                </aside>
              )}
              <button
                type="button"
                className={styles.collapseToggle}
                aria-label={settingsPanelHidden ? 'Show question panel' : 'Hide question panel'}
                aria-pressed={settingsPanelHidden}
                disabled={disabled}
                onClick={() => setSettingsPanelHidden((hidden) => !hidden)}
              >
                {settingsPanelHidden ? '‹' : '›'}
              </button>
            </div>
          )}

          {builderTab === 'workflow' && (
            <div className={styles.body}>
              <div className={styles.flowCanvas} data-testid="workflow-canvas">
                <span className={styles.flowNode}>Welcome</span>
                <span aria-hidden="true">→</span>
                <span className={styles.flowNode}>Rating</span>
                <span aria-hidden="true">→</span>
                <span className={styles.flowNode}>Ending</span>
              </div>
              <aside className={styles.actionsPanel} aria-label="Actions">
                <div className={styles.sidebarItem}>Pull data in</div>
                <div className={styles.sidebarItem}>Connect</div>
                <div className={styles.sidebarItem}>Automations</div>
              </aside>
            </div>
          )}

          {builderTab === 'connect' && (
            <div className={styles.body}>
              <div className={styles.connectFilters} aria-label="Integration categories">
                <div className={styles.pageHeader}>
                  <span className={styles.pageHeading}>Connect Typeform to your favorite apps</span>
                </div>
                <input
                  type="search"
                  className={styles.sidebarSearch}
                  placeholder="Search integrations"
                  aria-label="Search integrations"
                  disabled={disabled}
                />
                <div className={styles.sidebarItem}>All</div>
                <div className={styles.sidebarItem}>Automation</div>
                <div className={styles.sidebarItem}>Developer tools</div>
              </div>
              <div className={styles.connectList} data-testid="connect-list">
                <div className={styles.integrationCard}>Google Sheets</div>
                <div className={styles.integrationCard}>Zapier AI — Generate a custom flow</div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className={styles.aiInput} aria-label={shell === 'workspace' ? 'Ask Typeform AI' : 'Chat to create'}>
        <span aria-hidden="true">🎤</span>
        <input
          type="text"
          placeholder={shell === 'workspace' ? 'Ask Typeform AI…' : 'Chat to create…'}
          disabled={disabled}
        />
        <span aria-hidden="true">➤</span>
      </div>
    </div>
  );
}

import { useMemo, useState, type CSSProperties } from 'react';
import styles from './trello.module.css';

export type TrelloVariant =
  | 'application-shell'
  | 'boards-home'
  | 'workspace-overview'
  | 'workspace-collaborators'
  | 'workspace-settings'
  | 'board-workspace'
  | 'board-views-menu'
  | 'board-filter-panel'
  | 'board-menu-and-settings'
  | 'list-actions-menu'
  | 'card-detail-dialog'
  | 'card-action-menus'
  | 'board-switcher'
  | 'inbox-controls'
  | 'planner-agenda'
  | 'planner-controls'
  | 'templates-gallery'
  | 'template-category'
  | 'template-detail'
  | 'home-onboarding'
  | 'global-create-menu'
  | 'app-switcher'
  | 'information-menu'
  | 'global-search'
  | 'advanced-search'
  | 'feedback-dialog'
  | 'notifications-panel'
  | 'account-settings'
  | 'ai-settings'
  | 'labs'
  | 'personal-cards'
  | 'personal-activity'
  | 'profile-visibility'
  | 'workspace-power-ups'
  | 'workspace-export'
  | 'closed-boards'
  | 'account-menu'
  | 'keyboard-shortcuts'
  | 'workspace-boards-controls'
  | 'personal-card-filters'
  | 'jira-recommendation-drawer';

export interface TrelloPreviewProps {
  variant: TrelloVariant;
  initialState?: string;
  disabled?: boolean;
}

const cards = [
  { title: 'Shape launch brief', meta: '1 attachment · 2/5 checklist', tone: 'coral' },
  { title: 'Review prototype notes', meta: 'Description · 4/6 checklist', tone: 'blue' },
  { title: 'Prepare stakeholder update', meta: '1 attachment · 0/3 checklist', tone: 'green' },
];

function Boundary({ children }: { children: string }) {
  return (
    <p className={styles.boundary} role="status">
      {children}
    </p>
  );
}

function Topbar({ onNotice }: { onNotice: (value: string) => void }) {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <header className={styles.topbar}>
        <button
          type="button"
          aria-label="Switch products"
          onClick={() => onNotice('Product switcher stayed local.')}
        >
          ⠿
        </button>
        <b className={styles.logo}>▣</b>
        <button className={styles.search} type="button" onClick={() => setSearchOpen(!searchOpen)}>
          ⌕ Search
        </button>
        <button type="button" disabled>
          ✦ Create
        </button>
        <button
          type="button"
          aria-label="Feedback"
          onClick={() => onNotice('Feedback was not submitted.')}
        >
          ⚑
        </button>
        <button
          type="button"
          aria-label="Notifications"
          onClick={() => onNotice('Notification state stayed unchanged.')}
        >
          ♧
        </button>
        <button
          type="button"
          aria-label="Help"
          onClick={() => onNotice('Help stayed inside the fixture.')}
        >
          ?
        </button>
        <button className={styles.avatar} type="button" aria-label="Fictional profile">
          A
        </button>
      </header>
      {searchOpen && (
        <div className={styles.searchPanel} role="dialog" aria-label="Fictional Trello search">
          <input
            aria-label="Search fictional Trello data"
            placeholder="Search boards and cards"
            autoFocus
          />
          <p>No provider query will be sent.</p>
          <button type="button" onClick={() => setSearchOpen(false)}>
            Close
          </button>
        </div>
      )}
    </>
  );
}

function HomeSidebar({ active }: { active: string }) {
  return (
    <aside className={styles.homeSidebar} aria-label="Workspace navigation">
      {['Boards', 'Templates', 'Home'].map((item) => (
        <button type="button" key={item} aria-current={active === item ? 'page' : undefined}>
          {item === 'Boards' ? '▥' : item === 'Templates' ? '✦' : '⌁'} {item}
        </button>
      ))}
      <small>WORKSPACES</small>
      <button type="button" className={styles.workspaceButton}>
        <span>A</span> Atlas Studio⌃
      </button>
      <button type="button" aria-current={active === 'Workspace boards' ? 'page' : undefined}>
        ▥ Boards
      </button>
      <button type="button">♙ Members</button>
      <button type="button">⚙ Settings</button>
      <button type="button" disabled>
        ◇ Billing
      </button>
    </aside>
  );
}

function BoardsHome() {
  return (
    <main className={styles.homeMain}>
      <section>
        <div className={styles.sectionHeading}>
          <h1>Most popular templates</h1>
          <select aria-label="Template category" defaultValue="all">
            <option value="all">Choose a category</option>
          </select>
        </div>
        <div className={styles.templateGrid}>
          {['Project planning', 'Editorial calendar', 'Bug triage', 'Campaign launch'].map(
            (item) => (
              <article key={item}>
                <div />
                <b>{item}</b>
              </article>
            )
          )}
        </div>
      </section>
      <section>
        <h2>Recently viewed</h2>
        <BoardTile />
      </section>
      <section>
        <div className={styles.sectionHeading}>
          <h2>Your workspaces</h2>
          <span>▥ Boards　♙ Members　⚙ Settings</span>
        </div>
        <div className={styles.boardTiles}>
          <BoardTile />
          <button type="button" disabled className={styles.createTile}>
            Create new board
          </button>
        </div>
      </section>
    </main>
  );
}

function BoardTile() {
  return (
    <article className={styles.boardTile}>
      <div />
      <b>Atlas launch</b>
    </article>
  );
}

function WorkspaceOverview() {
  return (
    <main className={styles.homeMain}>
      <header className={styles.workspaceHeader}>
        <span>A</span>
        <div>
          <h1>Atlas Studio</h1>
          <p>PREMIUM　🔒 PRIVATE</p>
        </div>
      </header>
      <BoardsHome />
    </main>
  );
}

function WorkspaceBoardsControls() {
  const [panel, setPanel] = useState<'sort' | 'collection' | ''>('collection');
  return (
    <main className={styles.settingsMain}>
      <h1>Boards</h1>
      <section className={styles.boardControlGrid} aria-label="Workspace board controls">
        <label>
          Sort by
          <button
            type="button"
            aria-label="Sort workspace boards: Most recently active"
            onClick={() => setPanel(panel === 'sort' ? '' : 'sort')}
          >
            Most recently active　⌄
          </button>
        </label>
        <label>
          Filter by
          <button
            type="button"
            aria-label="Filter workspace boards by collection"
            onClick={() => setPanel(panel === 'collection' ? '' : 'collection')}
          >
            Choose a collection　⌄
          </button>
        </label>
        <label>
          Search
          <input aria-label="Search fictional workspace boards" placeholder="Search boards" />
        </label>
      </section>
      {panel === 'sort' && (
        <section className={styles.inlineMenu} role="dialog" aria-label="Workspace board sorting">
          <h2>Sort boards</h2>
          {[
            'Most recently active',
            'Least recently active',
            'Alphabetically A-Z',
            'Alphabetically Z-A',
          ].map((item) => (
            <button type="button" key={item} onClick={() => setPanel('')}>
              {item}
            </button>
          ))}
        </section>
      )}
      {panel === 'collection' && (
        <section className={styles.inlineMenu} role="dialog" aria-label="Workspace collections">
          <h2>Collections</h2>
          <b>Organize your boards with collections</b>
          <p>Group fictional boards by department, topic, team, and more.</p>
          <button type="button" disabled>
            Create a collection
          </button>
        </section>
      )}
      <div className={styles.boardTiles}>
        <BoardTile />
        <button type="button" disabled className={styles.createTile}>
          Create new board
        </button>
      </div>
      <Boundary>Sorting, filtering, collections and board data stay local.</Boundary>
    </main>
  );
}

function SettingsSidebar({ active }: { active: string }) {
  return (
    <aside className={styles.settingsSidebar}>
      <h2>Personal settings</h2>
      {['Profile and visibility', 'Activity', 'Cards', 'Settings', 'AI settings', 'Labs'].map(
        (item) => (
          <button type="button" key={item}>
            {item}
          </button>
        )
      )}
      <hr />
      <h2>Workspace</h2>
      <b>🅰 Atlas Studio</b>
      {['Boards', 'Members', 'Settings', 'Power-Ups · PREMIUM', 'Export · PREMIUM', 'Billing'].map(
        (item) => (
          <button type="button" key={item} aria-current={item === active ? 'page' : undefined}>
            {item}
          </button>
        )
      )}
    </aside>
  );
}

function Collaborators() {
  const [tab, setTab] = useState('Members');
  return (
    <main className={styles.settingsMain}>
      <h1>Collaborators (2)</h1>
      <div className={styles.tabs}>
        {['Members', 'Single-board guests', 'Multi-board guests', 'Join requests'].map((item) => (
          <button type="button" key={item} aria-pressed={tab === item} onClick={() => setTab(item)}>
            {item} {item === 'Members' ? '(2)' : '(0)'}
          </button>
        ))}
      </div>
      <p>
        Workspace members can view and join workspace-visible boards. Adding members may update
        billing.
      </p>
      <button type="button" disabled className={styles.primaryButton}>
        Invite workspace members
      </button>
      <input aria-label="Filter fictional collaborators" placeholder="Filter by name" />
      <div className={styles.memberRow}>
        <span>AR</span>
        <div>
          <b>Alex Rivera</b>
          <small>alex@example.test</small>
        </div>
        <button type="button" disabled>
          Boards (1)
        </button>
        <button type="button" disabled>
          Admin
        </button>
      </div>
    </main>
  );
}

const policies = [
  ['Workspace visibility', 'Private — not indexed or visible outside this workspace.'],
  ['Workspace membership restrictions', 'Anyone can be added to this workspace.'],
  [
    'Board creation restrictions',
    'Members can create public, workspace-visible and private boards.',
  ],
  [
    'Board deletion restrictions',
    'Members can delete public, workspace-visible and private boards.',
  ],
  ['Sharing boards with guests', 'Invitations are allowed for boards in this workspace.'],
  ['Slack workspace restrictions', 'Members can link and unlink Slack workspaces.'],
];

function WorkspaceSettings() {
  return (
    <main className={styles.settingsMain}>
      <h1>Workspace settings</h1>
      <header className={styles.workspaceHeader}>
        <span>A</span>
        <div>
          <h2>Atlas Studio</h2>
          <p>PREMIUM　🔒 PRIVATE</p>
        </div>
      </header>
      <section className={styles.aiSetting}>
        <div>
          <h2>
            ✦ AI <em>PREMIUM</em>
          </h2>
          <p>AI is activated for all boards in this fictional workspace.</p>
        </div>
        <input type="checkbox" checked readOnly aria-label="AI active" />
      </section>
      {policies.map(([title, copy]) => (
        <section className={styles.policy} key={title}>
          <div>
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
          <button type="button" disabled>
            Change
          </button>
        </section>
      ))}
      <Boundary>No provider setting can change in this fixture.</Boundary>
    </main>
  );
}

const templateCards = [
  ['Weekly focus', 'Plan focused work with a private weekly board.'],
  ['Creative review', 'Coordinate review rounds and evidence.'],
  ['Launch readiness', 'Keep owners, risks and deadlines visible.'],
  ['Team onboarding', 'Help a fictional team start strong.'],
];

function TemplateCards({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={styles.galleryGrid}>
      {templateCards.map(([title, copy], index) => (
        <article key={title}>
          <div className={styles.galleryArt} data-tone={index % 3} />
          <b>{title}</b>
          {detailed && <p>{copy}</p>}
          <small>by Atlas Studio · fictional</small>
        </article>
      ))}
    </div>
  );
}

function TemplateGallery({ variant }: { variant: TrelloVariant }) {
  if (variant === 'template-detail') {
    return (
      <main className={styles.dashboardMain}>
        <p className={styles.breadcrumb}>Template gallery / Productivity / Weekly focus</p>
        <section className={styles.templateHero}>
          <div>
            <small>ATLAS STUDIO</small>
            <h1>Weekly focus</h1>
            <p>Track priorities, deadlines and the work that matters most.</p>
            <button type="button" disabled>
              Use template
            </button>
          </div>
          <div className={styles.miniBoard}>
            {['Getting started', 'To do', 'Doing', 'Done'].map((list) => (
              <section key={list}>
                <b>{list}</b>
                <span>{list === 'Getting started' ? 'Plan the week' : 'No cards'}</span>
              </section>
            ))}
          </div>
        </section>
        <h2>Related templates</h2>
        <TemplateCards />
        <Boundary>Template copying is intentionally disabled in this reconstruction.</Boundary>
      </main>
    );
  }
  const category = variant === 'template-category';
  return (
    <main className={styles.dashboardMain}>
      <div className={styles.sectionHeading}>
        <div>
          <small>{category ? 'TEMPLATE GALLERY / PRODUCTIVITY' : 'TEMPLATE GALLERY'}</small>
          <h1>{category ? 'Productivity templates' : 'Featured categories'}</h1>
        </div>
        <input aria-label="Find fictional templates" placeholder="Find template" />
      </div>
      {!category && (
        <div className={styles.categoryRow}>
          {['Business', 'Design', 'Engineering', 'Marketing', 'Project management'].map((item) => (
            <button type="button" key={item}>
              ✦ {item}
            </button>
          ))}
        </div>
      )}
      <h2>{category ? 'Productivity templates' : 'New and notable templates'}</h2>
      <TemplateCards detailed />
      {category && (
        <button type="button" disabled className={styles.secondaryButton}>
          Start with a blank board
        </button>
      )}
    </main>
  );
}

const personalVariants = new Set<TrelloVariant>([
  'account-settings',
  'ai-settings',
  'labs',
  'personal-cards',
  'personal-card-filters',
  'personal-activity',
  'profile-visibility',
  'workspace-power-ups',
  'workspace-export',
]);

function SettingsScreen({ variant }: { variant: TrelloVariant }) {
  const active: Record<string, string> = {
    'account-settings': 'Settings',
    'ai-settings': 'AI settings',
    labs: 'Labs',
    'personal-cards': 'Cards',
    'personal-activity': 'Activity',
    'profile-visibility': 'Profile and visibility',
    'workspace-power-ups': 'Power-Ups · PREMIUM',
    'workspace-export': 'Export · PREMIUM',
    'personal-card-filters': 'Cards',
    'workspace-boards-controls': 'Boards',
  };
  return (
    <>
      <SettingsSidebar active={active[variant]} />
      <main className={styles.settingsMain}>
        <SettingsScreenBody variant={variant} />
      </main>
    </>
  );
}

function SettingsScreenBody({ variant }: { variant: TrelloVariant }) {
  if (variant === 'personal-card-filters') {
    return <PersonalCardFilters />;
  }
  if (variant === 'personal-cards') {
    return (
      <>
        <h1>Cards</h1>
        <div className={styles.toolbar}>
          <button type="button">Sort by due date</button>
          <button type="button">Filter cards</button>
        </div>
        <div className={styles.emptyState}>
          <b>No visible cards</b>
          <p>You must be added to a card for it to appear here.</p>
        </div>
      </>
    );
  }
  if (variant === 'personal-activity') {
    return (
      <>
        <h1>Activity</h1>
        <p>Recent actions across fictional workspace boards.</p>
        <div className={styles.activityList}>
          {[
            'Alex attached Launch brief.png',
            'Morgan added Planner',
            'Jamie created Atlas launch',
          ].map((item) => (
            <article key={item}>
              <span>AR</span>
              <div>
                <b>{item}</b>
                <small>24 minutes ago · Atlas launch</small>
              </div>
            </article>
          ))}
        </div>
      </>
    );
  }
  if (variant === 'profile-visibility') {
    return (
      <>
        <h1>Profile and visibility</h1>
        <h2>Manage your personal information</h2>
        <p>Public profile fields are managed through an Atlassian account.</p>
        <label className={styles.fieldLabel}>
          Username · always public
          <input value="atlas-user" readOnly />
        </label>
        <label className={styles.fieldLabel}>
          Bio · always public
          <textarea value="Fictional product team." readOnly />
        </label>
        <button type="button" disabled>
          Save
        </button>
      </>
    );
  }
  if (variant === 'ai-settings') {
    return (
      <>
        <h1>AI settings</h1>
        <h2>Scheduling</h2>
        <section className={styles.settingCard}>
          <div>
            <b>Proactive suggestions</b>
            <p>Suggest fictional cards to schedule as focus time.</p>
          </div>
          <input type="checkbox" readOnly aria-label="Proactive suggestions" />
        </section>
        <section className={styles.settingCard}>
          <div>
            <b>Sources</b>
            <p>Inbox is selected. Additional board selection is disabled.</p>
          </div>
          <input type="checkbox" checked readOnly aria-label="Inbox source" />
        </section>
        <label className={styles.fieldLabel}>
          Add rule
          <input placeholder="Specify cards to schedule…" />
        </label>
        <button type="button" disabled>
          Start scheduling focus time
        </button>
        <Boundary>No AI prompt or scheduling action can leave this fixture.</Boundary>
      </>
    );
  }
  if (variant === 'labs') {
    return (
      <>
        <h1>Labs</h1>
        <p>Preview experimental features before wider release.</p>
        <article className={styles.labCard}>
          <div className={styles.labArt}>WIDGET</div>
          <div>
            <h2>Custom Widget Cards</h2>
            <p>Generate visual card fronts from fictional web information.</p>
            <label>
              <input type="checkbox" readOnly /> No preference set
            </label>
          </div>
        </article>
      </>
    );
  }
  if (variant === 'workspace-power-ups') {
    return (
      <>
        <h1>
          Power-Ups enabled on workspace boards　<em>PREMIUM</em>
        </h1>
        <div className={styles.emptyState}>
          <b>No Power-Ups enabled</b>
          <p>Power-Ups are not enabled on any fictional workspace board.</p>
        </div>
      </>
    );
  }
  if (variant === 'workspace-export') {
    return (
      <>
        <h1>
          Export　<em>PREMIUM</em>
        </h1>
        <button type="button" disabled>
          Create new export
        </button>
        <label>
          <input type="checkbox" disabled /> Include raw attachments
        </label>
        <h2>Exports</h2>
        <div className={styles.emptyState}>No exports. Export generation is disabled.</div>
      </>
    );
  }
  return (
    <>
      <h1>Settings</h1>
      <h2>Email notifications</h2>
      <div className={styles.radioRow}>
        {['Never', 'Periodically', 'Instantly'].map((item) => (
          <label key={item}>
            <input type="radio" name="frequency" checked={item === 'Periodically'} readOnly />
            {item}
          </label>
        ))}
      </div>
      {['Comments', 'Due dates', 'Cards created', 'Cards moved', 'Attachments added'].map(
        (item) => (
          <label className={styles.checkRow} key={item}>
            <input type="checkbox" checked readOnly /> {item}
          </label>
        )
      )}
      <h2>Accessibility</h2>
      <label className={styles.checkRow}>
        <input type="checkbox" checked readOnly /> Enable keyboard shortcuts
      </label>
      <Boundary>Account preferences are displayed read-only.</Boundary>
    </>
  );
}

function PersonalCardFilters() {
  const [panel, setPanel] = useState<'filter' | 'sort' | ''>('filter');
  return (
    <>
      <h1>Cards</h1>
      <div className={styles.toolbar}>
        <button type="button" onClick={() => setPanel(panel === 'sort' ? '' : 'sort')}>
          Sort by due date
        </button>
        <button type="button" onClick={() => setPanel(panel === 'filter' ? '' : 'filter')}>
          Filter cards
        </button>
        <button type="button" disabled>
          Clear filters
        </button>
      </div>
      {panel === 'sort' && (
        <section className={styles.inlineMenu} role="dialog" aria-label="Personal card sorting">
          <h2>Sort cards</h2>
          <button type="button" onClick={() => setPanel('')}>
            Sort by board
          </button>
          <button type="button" onClick={() => setPanel('')}>
            Sort by due date
          </button>
        </section>
      )}
      {panel === 'filter' && (
        <section className={styles.filterSheet} role="dialog" aria-label="Personal card filters">
          <h2>Filter cards</h2>
          <label>
            Card
            <input aria-label="Filter fictional cards by name" placeholder="Card name keyword" />
          </label>
          {[
            ['Card status', ['Marked as complete', 'Not marked as complete']],
            [
              'Due date',
              ['No dates', 'Overdue', 'Due in the next day', 'Due in the next seven days'],
            ],
            [
              'Activity',
              ['Active in the last day', 'Active in the last week', 'Active in the last month'],
            ],
          ].map(([title, options]) => (
            <fieldset key={title as string}>
              <legend>{title}</legend>
              {(options as string[]).map((item) => (
                <label key={item}>
                  <input type="checkbox" /> {item}
                </label>
              ))}
            </fieldset>
          ))}
          <label>
            Board
            <select aria-label="Filter fictional cards by board" defaultValue="all">
              <option value="all">Filter by board…</option>
              <option value="atlas">Atlas launch</option>
            </select>
          </label>
        </section>
      )}
      <div className={styles.emptyState}>
        <b>No visible cards</b>
        <p>You must be added to a card for it to appear here.</p>
      </div>
      <Boundary>Filter and sort interactions affect only fictional fixture state.</Boundary>
    </>
  );
}

function KeyboardShortcuts() {
  const groups = [
    ['Navigate cards', '←　↓ / J　↑ / K　→'],
    ['Copy card', '⌘ / Ctrl + C　then　⌘ / Ctrl + V'],
    ['Move card', '⌘ / Ctrl + X　then　⌘ / Ctrl + V'],
    ['Open board menu', ']'],
    ['Focus search', '/'],
    ['Open card filter', 'F'],
    ['Close menu or cancel', 'Esc'],
    ['Open shortcuts page', '?'],
  ];
  return (
    <main className={styles.shortcutPage}>
      <header>
        <div>
          <h1>Keyboard shortcuts</h1>
          <p>Reference for navigation and board actions.</p>
        </div>
        <label>
          Shortcuts enabled <input type="checkbox" checked readOnly />
        </label>
      </header>
      <div className={styles.shortcutGrid}>
        {groups.map(([title, keys]) => (
          <article key={title}>
            <h2>{title}</h2>
            <kbd>{keys}</kbd>
          </article>
        ))}
      </div>
      <Boundary>The provider shortcut setting is shown read-only.</Boundary>
    </main>
  );
}

function JiraRecommendationDrawer() {
  return (
    <section className={styles.jiraDrawer} role="dialog" aria-label="Jira recommendation">
      <header>
        <b>▣ Jira</b>
        <button type="button" disabled>
          Try it free
        </button>
      </header>
      <div className={styles.jiraHero}>
        <h1>Project management for teams template</h1>
        <p>Plan work with a timeline, project views and configurable workflows.</p>
        <button type="button" disabled>
          Try it free
        </button>
        <div className={styles.timelineMock} aria-label="Fictional Jira timeline">
          {['Define scope', 'Review milestones', 'Prepare launch', 'Gather feedback'].map(
            (item, index) => (
              <span key={item} style={{ '--offset': index } as CSSProperties}>
                {item}
              </span>
            )
          )}
        </div>
      </div>
      <Boundary>The cross-product trial action is disabled.</Boundary>
    </section>
  );
}

const overlayVariants = new Set<TrelloVariant>([
  'global-create-menu',
  'app-switcher',
  'information-menu',
  'global-search',
  'feedback-dialog',
  'notifications-panel',
  'closed-boards',
  'account-menu',
]);

function DashboardOverlay({ variant }: { variant: TrelloVariant }) {
  const content: Record<string, { title: string; items: string[] }> = {
    'global-create-menu': {
      title: 'Create',
      items: ['Create board with AI', 'Create board', 'Start with a template'],
    },
    'app-switcher': {
      title: 'Atlassian app switcher',
      items: ['Home', 'Trello', 'Jira · Project tracking', 'Confluence · Documents'],
    },
    'information-menu': {
      title: 'Information',
      items: ['Trello playbooks', 'Pricing', 'Apps', 'Blog', 'Privacy', 'Help', 'Developers'],
    },
    'global-search': {
      title: 'Recent boards',
      items: ['Atlas launch · Atlas Studio', 'Editorial roadmap · Private', 'Advanced search'],
    },
    'notifications-panel': {
      title: 'Notifications',
      items: ['Only show unread · On', 'Notification settings', 'No unread notifications'],
    },
    'closed-boards': {
      title: 'Closed boards',
      items: ['All boards', 'No boards have been closed'],
    },
    'account-menu': {
      title: 'Account',
      items: [
        'Fictional account',
        'Profile and visibility',
        'Activity',
        'Cards',
        'Theme · Match system',
      ],
    },
  };
  if (variant === 'feedback-dialog') {
    return (
      <div className={styles.dashboardOverlay}>
        <section className={styles.feedbackPanel} role="dialog" aria-label="Fictional feedback">
          <h2>Share your thoughts on your Trello experience</h2>
          <label className={styles.fieldLabel}>
            What&apos;s on your mind?
            <textarea placeholder="Feedback is not submitted" />
          </label>
          <label>
            <input type="checkbox" disabled /> Atlassian teams can reply
          </label>
          <button type="button" disabled>
            Send feedback
          </button>
        </section>
      </div>
    );
  }
  const panel = content[variant];
  return (
    <section className={styles.dashboardPopover} role="dialog" aria-label={panel.title}>
      <h2>{panel.title}</h2>
      {variant === 'global-search' && <input placeholder="Search fictional boards" />}
      {panel.items.map((item) => (
        <button type="button" key={item} disabled={/Create|Jira|Confluence|settings/i.test(item)}>
          {item}
        </button>
      ))}
      <Boundary>No provider action is available in this reconstruction.</Boundary>
    </section>
  );
}

function AdvancedSearch() {
  return (
    <main className={styles.dashboardMain}>
      <h1>Search</h1>
      <input className={styles.searchInput} placeholder="Enter your search keyword here" />
      <div className={styles.operatorGrid}>
        {[
          ['@name', 'Cards assigned to a member'],
          ['#label', 'Cards with a label'],
          ['board:keyword', 'Cards on matching boards'],
          ['due:week', 'Cards due in the next week'],
          ['has:attachments', 'Cards with attachments'],
          ['sort:due', 'Sort cards by due date'],
        ].map(([operator, copy]) => (
          <article key={operator}>
            <code>{operator}</code>
            <span>{copy}</span>
          </article>
        ))}
      </div>
      <h2>Recent boards</h2>
      <TemplateCards />
    </main>
  );
}

function HomeOnboarding() {
  return (
    <main className={styles.onboardingMain}>
      <div className={styles.onboardingArt}>▣</div>
      <h1>Organize anything</h1>
      <p>Put everything in one place and start moving work forward with your first board.</p>
      <button type="button" disabled>
        Create a workspace board
      </button>
    </main>
  );
}

function Inbox({ controls }: { controls?: boolean }) {
  const [panel, setPanel] = useState(controls ? 'filter' : '');
  const [sortOpen, setSortOpen] = useState(false);
  return (
    <section className={styles.inbox}>
      <header>
        <h2>▣ Inbox</h2>
        <button
          type="button"
          aria-pressed={panel === 'filter'}
          onClick={() => setPanel(panel === 'filter' ? '' : 'filter')}
        >
          ≡
        </button>
        <button
          type="button"
          aria-pressed={panel === 'menu'}
          onClick={() => setPanel(panel === 'menu' ? '' : 'menu')}
        >
          •••
        </button>
      </header>
      <button type="button" disabled className={styles.addCard}>
        Add a card
      </button>
      <div className={styles.inboxEmpty}>
        <h3>Consolidate your to-dos</h3>
        <p>Email it, say it, forward it — capture work here first.</p>
        <div>✉　◉　▣　◍</div>
      </div>
      <small>🔒 Inbox is only visible to you</small>
      {panel === 'filter' && <InboxFilter />}
      {panel === 'menu' && (
        <Popover title={sortOpen ? 'Sort' : 'Menu'} onClose={() => setPanel('')}>
          {sortOpen ? (
            <>
              {['Newest first', 'Oldest first', 'Alphabetically'].map((item) => (
                <button type="button" key={item} onClick={() => setSortOpen(false)}>
                  {item}
                </button>
              ))}
            </>
          ) : (
            <>
              <button type="button" onClick={() => setSortOpen(true)}>
                Sort　›
              </button>
              <button type="button" disabled>
                View archived cards
              </button>
              <button type="button" disabled>
                Add from　›
              </button>
              <button type="button" disabled>
                Change background　›
              </button>
              <button type="button" disabled>
                Settings　›
              </button>
            </>
          )}
        </Popover>
      )}
    </section>
  );
}

function InboxFilter() {
  return (
    <Popover title="Filter">
      <label>
        Keyword
        <input placeholder="Enter a keyword" />
      </label>
      {[
        'Created in the last week',
        'Created in the last month',
        'Marked as complete',
        'Not marked as complete',
        'No dates',
        'Overdue',
        'Due in the next week',
      ].map((item) => (
        <label key={item}>
          <input type="checkbox" />
          {item}
        </label>
      ))}
    </Popover>
  );
}

function Planner({ controls }: { controls?: boolean }) {
  const [panel, setPanel] = useState(controls ? 'view' : '');
  const [more, setMore] = useState(false);
  const [view, setView] = useState('Agenda');
  return (
    <section className={styles.planner}>
      <header>
        <button type="button">▣ Oct⌄</button>
        <button type="button">‹</button>
        <button type="button">Today</button>
        <button type="button">›</button>
        <button type="button" onClick={() => setPanel(panel === 'view' ? '' : 'view')}>
          ☷⌄
        </button>
        <button type="button" onClick={() => setPanel(panel === 'menu' ? '' : 'menu')}>
          •••
        </button>
      </header>
      <div className={styles.connectCalendar}>
        <b>Connect your calendar account</b>
        <p>See events and schedule fictional to-dos.</p>
        <button type="button" disabled>
          Connect an account
        </button>
      </div>
      {[
        'Today · Oct 8',
        'Tomorrow · Oct 9',
        'Sat · Oct 10',
        'Sun · Oct 11',
        'Mon · Oct 12',
        'Tue · Oct 13',
      ].map((date) => (
        <div className={styles.agendaRow} key={date}>
          <b>{date}</b>
          <span>Nothing planned</span>
        </div>
      ))}
      {panel === 'view' && (
        <Popover title="Change view" onClose={() => setPanel('')}>
          {['Fit to screen size', 'Day', 'Week', 'Month', 'Custom', 'Agenda'].map((item) => (
            <label key={item}>
              <input
                type="radio"
                name="view"
                checked={view === item}
                onChange={() => setView(item)}
              />
              {item}
            </label>
          ))}
        </Popover>
      )}
      {panel === 'menu' && (
        <Popover title={more ? 'Filter due cards shown' : 'Menu'} onClose={() => setPanel('')}>
          {more ? (
            <>
              <label>
                <input type="checkbox" defaultChecked />
                Cards assigned to me
              </label>
              <label>
                <input type="checkbox" defaultChecked />
                Cards on personal boards
              </label>
              <button type="button" onClick={() => setMore(true)}>
                More options
              </button>
              <select aria-label="Board exception" defaultValue="">
                <option value="">Search for boards</option>
              </select>
              <button type="button" disabled>
                Add
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={() => setMore(true)}>
                Filter due cards shown
              </button>
              <button type="button" disabled>
                Add account
              </button>
            </>
          )}
        </Popover>
      )}
    </section>
  );
}

function Popover({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}) {
  return (
    <section className={styles.popover} role="dialog" aria-label={title}>
      <header>
        <h3>{title}</h3>
        {onClose && (
          <button type="button" onClick={onClose}>
            ×
          </button>
        )}
      </header>
      <div className={styles.popoverBody}>{children}</div>
    </section>
  );
}

function Board({
  variant,
  onNotice,
}: {
  variant: TrelloVariant;
  onNotice: (value: string) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [cardOpen, setCardOpen] = useState(
    variant === 'card-detail-dialog' || variant === 'card-action-menus'
  );
  const [cardMenu, setCardMenu] = useState(variant === 'card-action-menus' ? 'add' : '');
  const [boardPanel, setBoardPanel] = useState(
    variant === 'board-views-menu'
      ? 'views'
      : variant === 'board-filter-panel'
        ? 'filter'
        : variant === 'board-menu-and-settings'
          ? 'menu'
          : ''
  );
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [listMenu, setListMenu] = useState(variant === 'list-actions-menu');
  const [switcher, setSwitcher] = useState(variant === 'board-switcher');
  const showPlanner = variant === 'planner-agenda' || variant === 'planner-controls';
  return (
    <main className={styles.boardSurface}>
      <Inbox controls={variant === 'inbox-controls'} />
      {showPlanner && <Planner controls={variant === 'planner-controls'} />}
      <section className={styles.boardPane}>
        <header className={styles.boardHeader}>
          <h1>Atlas launch</h1>
          <button
            type="button"
            onClick={() => setBoardPanel(boardPanel === 'views' ? '' : 'views')}
          >
            ☷ Views
          </button>
          <button
            type="button"
            onClick={() => setBoardPanel(boardPanel === 'filter' ? '' : 'filter')}
          >
            ≡ Filter
          </button>
          <span>☆　🔒 Private</span>
          <button type="button" disabled>
            Share
          </button>
          <button type="button" onClick={() => setBoardPanel(boardPanel === 'menu' ? '' : 'menu')}>
            •••
          </button>
        </header>
        <div className={styles.lists}>
          <section className={styles.list}>
            <header>
              <button type="button" onClick={() => setCollapsed(!collapsed)}>
                Launch guide　{cards.length}
              </button>
              <button type="button" onClick={() => setListMenu(!listMenu)}>
                •••
              </button>
            </header>
            {!collapsed &&
              cards.map((card) => (
                <button
                  className={styles.card}
                  type="button"
                  key={card.title}
                  onClick={() => setCardOpen(true)}
                >
                  <span className={styles[card.tone]} />
                  <b>{card.title}</b>
                  <small>{card.meta}</small>
                </button>
              ))}
            <button type="button" disabled className={styles.addCard}>
              ＋ Add a card
            </button>
            {listMenu && <ListMenu onNotice={onNotice} />}
          </section>
          {['Today', 'This week', 'Later'].map((item) => (
            <section className={styles.list} key={item}>
              <header>
                <b>{item}</b>
                <span>0　•••</span>
              </header>
              <button type="button" disabled className={styles.addCard}>
                ＋ Add a card
              </button>
            </section>
          ))}
        </div>
        <nav className={styles.island} aria-label="Board panes">
          <button type="button">▣ Inbox</button>
          <button type="button">▣ Planner</button>
          <button type="button">▥ Board</button>
          <button type="button" onClick={() => setSwitcher(true)}>
            ▤ Switch boards
          </button>
        </nav>
        {boardPanel === 'views' && <ViewsMenu onClose={() => setBoardPanel('')} />}
        {boardPanel === 'filter' && <BoardFilter onClose={() => setBoardPanel('')} />}
        {boardPanel === 'menu' && (
          <BoardMenu
            settings={settingsOpen}
            setSettings={setSettingsOpen}
            onClose={() => setBoardPanel('')}
          />
        )}
      </section>
      {cardOpen && (
        <CardDialog mode={cardMenu} setMode={setCardMenu} onClose={() => setCardOpen(false)} />
      )}
      {switcher && <BoardSwitcher onClose={() => setSwitcher(false)} />}
    </main>
  );
}

function ViewsMenu({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState('Board');
  return (
    <Popover title="Views" onClose={onClose}>
      <em>PREMIUM</em>
      <b>See your work in a new way</b>
      <p>Views are available to Premium workspaces.</p>
      {['Board', 'Table', 'Calendar', 'Dashboard', 'Timeline', 'Map'].map((item) => (
        <button
          type="button"
          key={item}
          aria-pressed={selected === item}
          onClick={() => setSelected(item)}
        >
          {item}
        </button>
      ))}
    </Popover>
  );
}

function BoardFilter({ onClose }: { onClose: () => void }) {
  return (
    <Popover title="Filter" onClose={onClose}>
      <label>
        Keyword
        <input placeholder="Enter a keyword" />
      </label>
      {[
        'No members',
        'Cards assigned to me',
        'Marked as complete',
        'Not marked as complete',
        'No dates',
        'Overdue',
        'Due in the next week',
        'No labels',
        'Active in the last week',
      ].map((item) => (
        <label key={item}>
          <input type="checkbox" />
          {item}
        </label>
      ))}
      <label>
        <input type="checkbox" />
        Collapse lists with no matching cards
      </label>
      <select aria-label="Filter match mode" defaultValue="any">
        <option value="any">Any match</option>
        <option value="all">All match</option>
      </select>
    </Popover>
  );
}

function BoardMenu({
  settings,
  setSettings,
  onClose,
}: {
  settings: boolean;
  setSettings: (value: boolean) => void;
  onClose: () => void;
}) {
  const menuItems = [
    'Share',
    'About this board',
    'Visibility: Private',
    'Print, export, and share',
    'Star',
    'Settings',
    'Change background',
    'Custom Fields',
    'Automation',
    'Power-Ups · 0',
    'Labels',
    'Stickers',
    'Activity',
    'Archived items',
    'Watch',
    'Copy board',
    'Email-to-board',
    'Close board',
  ];
  return (
    <Popover title={settings ? 'Settings' : 'Menu'} onClose={onClose}>
      {settings ? (
        <>
          <button type="button" onClick={() => setSettings(false)}>
            ‹ Back
          </button>
          <b>Workspace</b>
          <p>Atlas Studio</p>
          <b>Permissions</b>
          <p>Commenting · Members</p>
          <p>Adding and removing members · Members</p>
          <label>
            <input type="checkbox" checked readOnly />
            Show complete status on card front
          </label>
          <label>
            <input type="checkbox" checked readOnly />
            Card covers enabled
          </label>
          <button type="button" disabled>
            Add to collection · PREMIUM
          </button>
        </>
      ) : (
        menuItems.map((item) => (
          <button
            type="button"
            key={item}
            disabled={item !== 'Settings'}
            onClick={() => item === 'Settings' && setSettings(true)}
          >
            {item}
          </button>
        ))
      )}
    </Popover>
  );
}

function ListMenu({ onNotice }: { onNotice: (value: string) => void }) {
  const [color, setColor] = useState('purple');
  return (
    <Popover title="List actions">
      {[
        'Add card',
        'Copy list',
        'Move list',
        'Move all cards in this list',
        'Sort by',
        'Pin list',
        'Watch',
      ].map((item) => (
        <button type="button" disabled key={item}>
          {item}
        </button>
      ))}
      <b>Change list color · PREMIUM</b>
      <div className={styles.colors}>
        {['green', 'yellow', 'orange', 'red', 'purple', 'blue'].map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={color === item}
            onClick={() => {
              setColor(item);
              onNotice(`List color changed to ${item} in the fixture only.`);
            }}
            style={{ background: item }}
            aria-label={item}
          />
        ))}
      </div>
      <b>Automation</b>
      <button type="button" disabled>
        When a card is added
      </button>
      <button type="button" disabled>
        Create a rule
      </button>
      <button type="button" disabled>
        Archive this list
      </button>
    </Popover>
  );
}

function CardDialog({
  mode,
  setMode,
  onClose,
}: {
  mode: string;
  setMode: (value: string) => void;
  onClose: () => void;
}) {
  return (
    <div className={styles.overlay}>
      <section className={styles.cardDialog} role="dialog" aria-label="Fictional card detail">
        <div className={styles.cover}>ATLAS</div>
        <header>
          <button type="button">Launch guide⌄</button>
          <button type="button" onClick={() => setMode(mode === 'actions' ? '' : 'actions')}>
            ••• Actions
          </button>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </header>
        <div className={styles.cardContent}>
          <div>
            <h1>Shape launch brief</h1>
            <div className={styles.cardToolbar}>
              <button type="button" onClick={() => setMode(mode === 'add' ? '' : 'add')}>
                ＋ Add
              </button>
              {['Labels', 'Dates', 'Checklist', 'Members'].map((item) => (
                <button type="button" disabled key={item}>
                  {item}
                </button>
              ))}
            </div>
            <h2>Description</h2>
            <p>Align the launch story, owners and evidence before the fictional review.</p>
            <div className={styles.fakeMedia}>
              ▶<small>Fictional walkthrough</small>
            </div>
            <h2>Attachments</h2>
            <div className={styles.attachment}>
              ▧ Launch-brief.png　<small>Cover</small>
            </div>
            <h2>Launch checklist</h2>
            <progress value={2} max={5} />
            <label>
              <input type="checkbox" checked readOnly />
              Confirm audience
            </label>
            <label>
              <input type="checkbox" checked readOnly />
              Review risks
            </label>
            <label>
              <input type="checkbox" />
              Approve narrative
            </label>
          </div>
          <aside>
            <h2>Comments and activity</h2>
            <button type="button" disabled>
              Write a comment…
            </button>
            <p>
              <b>Alex</b> added this fictional card.
            </p>
          </aside>
        </div>
        {mode === 'actions' && <CardActions />}
        {mode === 'add' && <AddToCard />}
      </section>
    </div>
  );
}

function CardActions() {
  return (
    <Popover title="Actions">
      {[
        'Join',
        'Move',
        'Create Jira work item',
        'Mirror',
        'Make template',
        'Watch',
        'Share',
        'Archive',
      ].map((item) => (
        <button type="button" disabled key={item}>
          {item}
        </button>
      ))}
    </Popover>
  );
}

function AddToCard() {
  return (
    <Popover title="Add to card">
      {['Labels', 'Dates', 'Checklist', 'Members', 'Attachment', 'Location', 'Custom Fields'].map(
        (item) => (
          <button type="button" disabled key={item}>
            {item}
          </button>
        )
      )}
    </Popover>
  );
}

function BoardSwitcher({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');
  const boards = useMemo(
    () =>
      ['Atlas launch', 'Editorial roadmap'].filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );
  return (
    <div className={styles.overlay}>
      <section className={styles.switcher} role="dialog" aria-label="Fictional board switcher">
        <header>
          <h2>Switch boards</h2>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </header>
        <input
          aria-label="Search fictional boards"
          placeholder="Search your boards"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className={styles.tabs}>
          <button type="button" aria-pressed>
            All
          </button>
          <button type="button">Atlas Studio</button>
        </div>
        <h3>Recent</h3>
        {boards.map((item) => (
          <button type="button" key={item}>
            {item}　☆
          </button>
        ))}
      </section>
    </div>
  );
}

function DashboardContinuation({ variant }: { variant: TrelloVariant }) {
  if (variant === 'keyboard-shortcuts') return <KeyboardShortcuts />;
  if (variant === 'workspace-boards-controls') {
    return (
      <>
        <SettingsSidebar active="Boards" />
        <WorkspaceBoardsControls />
      </>
    );
  }
  if (personalVariants.has(variant)) return <SettingsScreen variant={variant} />;
  if (
    variant === 'templates-gallery' ||
    variant === 'template-category' ||
    variant === 'template-detail'
  ) {
    return (
      <>
        <HomeSidebar active="Templates" />
        <div className={styles.withHomeSidebar}>
          <TemplateGallery variant={variant} />
        </div>
      </>
    );
  }
  if (variant === 'advanced-search') return <AdvancedSearch />;
  if (variant === 'home-onboarding') {
    return (
      <>
        <HomeSidebar active="Home" />
        <HomeOnboarding />
      </>
    );
  }
  return (
    <>
      <HomeSidebar active="Boards" />
      <BoardsHome />
      {overlayVariants.has(variant) && <DashboardOverlay variant={variant} />}
      {variant === 'jira-recommendation-drawer' && <JiraRecommendationDrawer />}
    </>
  );
}

export function TrelloPreview({ variant, disabled = false }: TrelloPreviewProps) {
  const [notice, setNotice] = useState('');
  const homeVariant = ['application-shell', 'boards-home', 'workspace-overview'].includes(variant);
  const settingsVariant = variant === 'workspace-collaborators' || variant === 'workspace-settings';
  const continuationVariant =
    personalVariants.has(variant) ||
    overlayVariants.has(variant) ||
    [
      'templates-gallery',
      'template-category',
      'template-detail',
      'home-onboarding',
      'advanced-search',
      'keyboard-shortcuts',
      'workspace-boards-controls',
      'jira-recommendation-drawer',
    ].includes(variant);
  return (
    <div className={styles.app} data-disabled={disabled || undefined}>
      <Topbar onNotice={setNotice} />
      {continuationVariant && <DashboardContinuation variant={variant} />}
      {homeVariant && (
        <HomeSidebar
          active={
            variant === 'boards-home'
              ? 'Boards'
              : variant === 'workspace-overview'
                ? 'Workspace boards'
                : 'Home'
          }
        />
      )}
      {homeVariant && (variant === 'workspace-overview' ? <WorkspaceOverview /> : <BoardsHome />)}
      {settingsVariant && (
        <SettingsSidebar active={variant === 'workspace-collaborators' ? 'Members' : 'Settings'} />
      )}
      {variant === 'workspace-collaborators' && <Collaborators />}
      {variant === 'workspace-settings' && <WorkspaceSettings />}
      {!homeVariant && !settingsVariant && !continuationVariant && (
        <Board variant={variant} onNotice={setNotice} />
      )}
      {notice && <Boundary>{notice}</Boundary>}
    </div>
  );
}

import { useState } from 'react';
import styles from './monday.module.css';
import { mondayLeafFixtures, type MondayLeafVariant } from './leafFixtures';

export type MondayVariant =
  | 'application-shell'
  | 'workspace-overview'
  | 'global-search'
  | 'board-table'
  | 'board-controls'
  | 'dashboard-reporting'
  | 'ai-workflows-onboarding'
  | 'agent-directory'
  | 'vibe-app-builder'
  | 'notetaker-onboarding'
  | MondayLeafVariant;

export interface MondayPreviewProps {
  variant: MondayVariant;
  initialState?: string;
  disabled?: boolean;
}

const tasks = [
  ['Define launch brief', 'Alex', 'Working on it', 'Nov 12'],
  ['Review prototypes', 'Unassigned', 'Done', 'Nov 13'],
  ['Approve rollout', 'Unassigned', 'Stuck', 'Nov 14'],
];

const agentGroups = {
  'Project management': ['Project Lead', 'Priority Guide', 'Schedule Planner', 'Status Reporter'],
  Marketing: ['Market Monitor', 'Campaign Writer', 'Visual Creator', 'Launch Coordinator'],
  Operations: ['Process Guide', 'Approval Router', 'Goal Manager', 'Meeting Partner'],
};

function Boundary({ children }: { children: string }) {
  return (
    <p className={styles.boundary} role="status">
      {children}
    </p>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [scope, setScope] = useState('All');
  return (
    <div className={styles.overlay}>
      <section className={styles.searchDialog} role="dialog" aria-label="Fictional global search">
        <header>
          <input aria-label="Search fictional workspace" placeholder="Search everything" />
          <button type="button" onClick={onClose}>
            Close
          </button>
        </header>
        <div className={styles.pills}>
          {['All', 'Cross boards', 'Updates', 'Files', 'People', 'Tags', 'Docs'].map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={scope === item}
              onClick={() => setScope(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.searchGrid}>
          <article>
            <h2>Related to me</h2>
            <button type="button">I’m assigned to</button>
            <button type="button">My files</button>
            <button type="button">Archived boards</button>
            <button type="button">I was mentioned</button>
          </article>
          <article>
            <h2>Saved searches</h2>
            <p>Save searches for quick access.</p>
            <h2>Recent searches</h2>
            <p>No recent searches in this fixture.</p>
          </article>
        </div>
        <footer>↑ ↓ Select　↩ Open　⌘ K Quick search</footer>
      </section>
    </div>
  );
}

function Shell({ variant, children }: { variant: MondayVariant; children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(variant === 'global-search');
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.app} data-disabled={undefined}>
      <div className={styles.promo}>
        Explore connected work with fictional data.
        <button type="button" onClick={() => setNotice('The promotional banner stayed visible.')}>
          Dismiss
        </button>
      </div>
      <header className={styles.topbar}>
        <b className={styles.logo}>m.</b>
        <button type="button">◇ See plans</button>
        <button className={styles.searchButton} type="button" onClick={() => setSearchOpen(true)}>
          ⌕ Search for anything…
        </button>
        <button type="button" aria-label="Notifications">
          ♧
        </button>
        <button type="button" aria-label="Updates">
          ▱
        </button>
        <button type="button" aria-label="Invite">
          ＋
        </button>
        <button type="button" aria-label="Help">
          ?
        </button>
        <button type="button" aria-label="Fictional profile">
          AR
        </button>
      </header>
      <aside className={styles.rail} aria-label="Product navigation">
        {[
          'Workspace',
          'Sidekick',
          'Agents',
          'Vibe',
          'Workflows',
          'Notetaker',
          'Favorites',
          'More',
        ].map((item) => (
          <button
            type="button"
            key={item}
            aria-current={variant.includes(item.toLowerCase().split(' ')[0]) ? 'page' : undefined}
            onClick={() => setNotice(`${item} stayed inside this fictional preview.`)}
          >
            <span>{item.slice(0, 1)}</span>
            {item}
          </button>
        ))}
      </aside>
      <aside className={styles.workspaceNav}>
        <header>
          <b>Workspace</b>
          <span>⌕　≪</span>
        </header>
        <button type="button" className={styles.workspace}>
          ◆ Acme Studio⌄
        </button>
        <small>CONTENT</small>
        <button type="button">⌘ Manage workspace</button>
        <button type="button" className={variant.includes('board') ? styles.selected : ''}>
          ▣ Atlas launch
        </button>
        <button type="button" className={variant.includes('dashboard') ? styles.selected : ''}>
          ▥ Dashboard and reporting
        </button>
      </aside>
      <main className={styles.main}>
        {children}
        {notice && <Boundary>{notice}</Boundary>}
      </main>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  );
}

function WorkspaceOverview() {
  const [tab, setTab] = useState('Recents');
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <div className={styles.workspaceMark}>A</div>
        <div>
          <h1>Acme Studio</h1>
          <p>A fictional workspace for local interaction testing.</p>
        </div>
        <button type="button">Members</button>
        <button type="button">•••</button>
      </header>
      <div className={styles.tabs}>
        {['Recents', 'Content', 'Collaborators'].map((item) => (
          <button type="button" key={item} aria-pressed={tab === item} onClick={() => setTab(item)}>
            {item}
          </button>
        ))}
        <button type="button" disabled>
          Permissions
        </button>
      </div>
      <h2>{tab}</h2>
      <div className={styles.cards}>
        <article>
          <small>BOARD</small>
          <h3>Atlas launch</h3>
          <button type="button">☆ Favorite</button>
        </article>
        <article>
          <small>DASHBOARD</small>
          <h3>Dashboard and reporting</h3>
          <button type="button">☆ Favorite</button>
        </article>
      </div>
    </section>
  );
}

function BoardTable({ controls = false }: { controls?: boolean }) {
  const [panel, setPanel] = useState(controls ? 'Filter' : '');
  const [collapsed, setCollapsed] = useState(false);
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <div>
          <h1>Atlas launch⌄</h1>
          <div className={styles.viewTab}>Main table　•••　＋</div>
        </div>
        <button type="button">Discussion</button>
        <button type="button">Invite / 3</button>
        <button type="button">•••</button>
      </header>
      <div className={styles.toolbar}>
        <button type="button" onClick={() => setPanel('New task')}>
          ＋ New task
        </button>
        <input aria-label="Search fictional board" placeholder="Search" />
        <button type="button">Person</button>
        {['Filter', 'Sort', 'Hide', 'Group by'].map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={panel === item}
            onClick={() => setPanel(panel === item ? '' : item)}
          >
            {item}
          </button>
        ))}
      </div>
      {panel && <ControlPanel panel={panel} onBoundary={() => setPanel('Boundary')} />}
      {panel === 'Boundary' && <Boundary>No board setting was changed.</Boundary>}
      <div className={styles.group}>
        <button type="button" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? '›' : '⌄'} To-Do
        </button>
        <b>3 tasks</b>
      </div>
      {!collapsed && (
        <table>
          <thead>
            <tr>
              <th>□　Task</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Due date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(([task, owner, status, date]) => (
              <tr key={task}>
                <td>□　{task}</td>
                <td>{owner}</td>
                <td>
                  <span className={styles[status.replaceAll(' ', '').toLowerCase()]}>{status}</span>
                </td>
                <td>{date}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td />
              <td>
                <i className={styles.summary} />
              </td>
              <td>Nov 12–14</td>
            </tr>
          </tfoot>
        </table>
      )}
      <div className={styles.group}>
        <button type="button">⌄ Completed</button>
        <b>No tasks</b>
      </div>
      <button type="button" onClick={() => setPanel('Boundary')}>
        ＋ Add new group
      </button>
    </section>
  );
}

function ControlPanel({ panel, onBoundary }: { panel: string; onBoundary: () => void }) {
  if (panel === 'Filter')
    return (
      <section className={styles.popover}>
        <h2>Quick filters</h2>
        <small>Showing all of 3 tasks</small>
        {['Name', 'Owner', 'Status', 'Due date', 'Group'].map((item) => (
          <button type="button" key={item} onClick={onBoundary}>
            {item}
            <span>›</span>
          </button>
        ))}
        <button type="button" disabled>
          Save as new view
        </button>
      </section>
    );
  if (panel === 'Hide')
    return (
      <section className={styles.popover}>
        <h2>Display columns</h2>
        {['Owner', 'Status', 'Due date'].map((item) => (
          <label key={item}>
            <input type="checkbox" defaultChecked readOnly />
            {item}
          </label>
        ))}
        <button type="button" disabled>
          Save as new view
        </button>
      </section>
    );
  if (panel === 'Group by')
    return (
      <section className={styles.popover}>
        <h2>Group items by</h2>
        <select defaultValue="">
          <option value="">Select column</option>
        </select>
        <select disabled>
          <option>Select sorting option</option>
        </select>
        <label>
          <input type="checkbox" disabled />
          Show empty groups
        </label>
        <button type="button" disabled>
          Save as new view
        </button>
      </section>
    );
  return <Boundary>No task, sort, or board action was performed.</Boundary>;
}

function Dashboard() {
  const [filter, setFilter] = useState(false);
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Dashboard and reporting</h1>
        <button type="button" onClick={() => setFilter(false)}>
          Export
        </button>
        <button type="button">Invite</button>
        <button type="button">•••</button>
      </header>
      <div className={styles.toolbar}>
        <button type="button">＋ Add widget</button>
        <button type="button">▣ 1 connected board</button>
        <input aria-label="Filter fictional dashboard" placeholder="Type to filter" />
        <button type="button">People</button>
        <button type="button" onClick={() => setFilter(!filter)}>
          Filter
        </button>
        <button type="button">⚙</button>
      </div>
      {filter && (
        <section className={styles.filterPanel}>
          <h2>Advanced filters</h2>
          <label>
            Board
            <select>
              <option>All boards</option>
            </select>
          </label>
          <label>
            Where
            <select>
              <option>Column</option>
            </select>
          </label>
          <label>
            Condition
            <select>
              <option>Select condition</option>
            </select>
          </label>
          <button type="button" disabled>
            Apply
          </button>
        </section>
      )}
      <div className={styles.kpis}>
        {[
          ['All tasks', '3'],
          ['In progress', '1'],
          ['Stuck', '1'],
          ['Done', '1'],
        ].map(([label, value]) => (
          <article key={label}>
            <h2>{label}</h2>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
      <div className={styles.charts}>
        <article>
          <h2>Tasks by status</h2>
          <div className={styles.pie} role="img" aria-label="Fictional equal status distribution" />
          <p>● Working　● Done　● Stuck</p>
        </article>
        <article>
          <h2>Tasks by owner</h2>
          <div className={styles.bar}>
            <span>1</span>
          </div>
          <p>Alex Rivera</p>
        </article>
      </div>
    </section>
  );
}

function WorkflowOnboarding() {
  const [tab, setTab] = useState('Chat to build');
  const content: Record<string, string> = {
    'Chat to build': 'Describe what you need and watch a fictional workflow take shape.',
    'Add agents': 'Bring task-focused agents into multi-step workflows.',
    'New capabilities': 'Loop, webhook, MCP and approval steps are introduced.',
    'Run before publishing': 'Exercise a workflow before it goes live.',
  };
  return (
    <section className={styles.modalPage}>
      <div className={styles.modal}>
        <h1>Smarter workflows, powered by agents</h1>
        <div className={styles.onboardingTabs}>
          {Object.keys(content).map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={tab === item}
              onClick={() => setTab(item)}
            >
              <b>{item}</b>
              <span>{content[item]}</span>
            </button>
          ))}
        </div>
        <p>{content[tab]}</p>
        <button type="button" disabled>
          Got it
        </button>
        <Boundary>The provider onboarding was not dismissed.</Boundary>
      </div>
    </section>
  );
}

function AgentDirectory() {
  const [group, setGroup] = useState('Project management');
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <div>
          <h1>Meet your agents</h1>
          <p>Pick a fictional prebuilt agent or describe one.</p>
        </div>
        <button type="button" disabled>
          Bring your agent
        </button>
        <button type="button" disabled>
          Start from blank
        </button>
      </header>
      <div className={styles.prompt}>
        <textarea
          aria-label="Describe a fictional agent"
          placeholder="Describe what your agent should do"
        />
        <footer>
          <button type="button" disabled>
            Add context
          </button>
          <button type="button" disabled>
            Add files
          </button>
          <button type="button" disabled>
            Submit
          </button>
        </footer>
      </div>
      <div className={styles.pills}>
        {Object.keys(agentGroups).map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={group === item}
            onClick={() => setGroup(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.agentGrid}>
        {agentGroups[group as keyof typeof agentGroups].map((item, index) => (
          <article key={item}>
            <div className={styles.avatar}>{item.slice(0, 1)}</div>
            <h2>{item}</h2>
            <p>
              {
                [
                  'Keeps projects aligned and flags blockers.',
                  'Surfaces urgent work before it slips.',
                  'Balances capacity across the week.',
                  'Creates concise progress summaries.',
                ][index]
              }
            </p>
            <small>{index + 2}k+ installs</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function VibeBuilder() {
  const [theme, setTheme] = useState('Highlighter');
  return (
    <section className={styles.page}>
      <header>
        <h1>Build your ideas with Vibe</h1>
        <p>Create a fictional workspace app from a prompt.</p>
      </header>
      <div className={styles.prompt}>
        <textarea aria-label="Build a fictional application" placeholder="Describe your app" />
        <footer>
          <button type="button" disabled>
            Connect boards
          </button>
          <button type="button" disabled>
            Add integrations
          </button>
          <button type="button" disabled>
            Upload files
          </button>
          <button type="button" disabled>
            Send
          </button>
        </footer>
      </div>
      <h2>App templates</h2>
      <div className={styles.cards}>
        {['Resource planner', 'Asset inventory', 'Shipment tracker'].map((item) => (
          <article key={item}>
            <small>BY MONDAY</small>
            <h3>{item}</h3>
            <p>Fictional template description.</p>
          </article>
        ))}
      </div>
      <h2>Choose your app look and feel</h2>
      <div className={styles.themeGrid}>
        {['Highlighter', 'Pastel pop', 'Monochrome', 'Neon dark'].map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={theme === item}
            onClick={() => setTheme(item)}
          >
            {item}
            <span>{item === theme ? 'Selected locally' : 'Preview'}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function NotetakerOnboarding() {
  return (
    <section className={styles.modalPage}>
      <div className={styles.modal}>
        <h1>Welcome to monday Notetaker</h1>
        <p>Turn fictional meetings into clear next steps.</p>
        {[
          ['Actionable summaries', 'Chapter recaps, highlights and action items.'],
          ['Instant answers', 'Ask about next steps, missing details and owners.'],
          ['Built into workflows', 'Share summaries and activate local follow-up patterns.'],
        ].map(([title, copy]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
        <button type="button" disabled>
          Watch a demo
        </button>
        <Boundary>No meeting or calendar access is represented.</Boundary>
      </div>
    </section>
  );
}

function LeafShowcase({ variant }: { variant: MondayLeafVariant }) {
  const fixture = mondayLeafFixtures[variant];
  const [selection, setSelection] = useState<string>(fixture.components[0]);
  return (
    <section className={styles.leafPage}>
      <header className={styles.leafHeader}>
        <div>
          <div className={styles.eyebrow}>
            {fixture.ai && <span className={styles.aiBadge}>AI</span>}
            <span>{fixture.category}</span>
          </div>
          <h1>{fixture.title}</h1>
          <p>{fixture.route}</p>
        </div>
        <button type="button" disabled>
          Provider action disabled
        </button>
      </header>

      <div className={styles.leafLayout}>
        <nav className={styles.componentList} aria-label={`${fixture.title} components`}>
          <h2>Individual components</h2>
          {fixture.components.map((component, index) => (
            <button
              type="button"
              key={component}
              aria-pressed={selection === component}
              onClick={() => setSelection(component)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {component}
            </button>
          ))}
        </nav>

        <article className={styles.componentStage}>
          <div className={styles.stageTopline}>
            <span>FICTIONAL LOCAL FIXTURE</span>
            <span>Observed 2026-10-08</span>
          </div>
          <div className={styles.componentMock}>
            <div className={styles.mockIcon}>{fixture.ai ? '✦' : '◇'}</div>
            <small>SELECTED COMPONENT</small>
            <h2>{selection}</h2>
            <p>
              Reconstructed from an authenticated read-only observation. Labels and data are
              fictionalized.
            </p>
            <div className={styles.mockControls}>
              <button type="button">Inspect locally</button>
              <button type="button" disabled>
                Continue in provider
              </button>
            </div>
          </div>
          <Boundary>{fixture.boundary}</Boundary>
        </article>
      </div>
    </section>
  );
}

export function MondayPreview({ variant }: MondayPreviewProps) {
  const content =
    variant in mondayLeafFixtures ? (
      <LeafShowcase variant={variant as MondayLeafVariant} />
    ) : variant === 'board-table' ? (
      <BoardTable />
    ) : variant === 'board-controls' ? (
      <BoardTable controls />
    ) : variant === 'dashboard-reporting' ? (
      <Dashboard />
    ) : variant === 'ai-workflows-onboarding' ? (
      <WorkflowOnboarding />
    ) : variant === 'agent-directory' ? (
      <AgentDirectory />
    ) : variant === 'vibe-app-builder' ? (
      <VibeBuilder />
    ) : variant === 'notetaker-onboarding' ? (
      <NotetakerOnboarding />
    ) : (
      <WorkspaceOverview />
    );
  return <Shell variant={variant}>{content}</Shell>;
}

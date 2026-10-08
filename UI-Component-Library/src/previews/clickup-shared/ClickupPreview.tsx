import { useMemo, useState } from 'react';
import styles from './clickup.module.css';

export type ClickupVariant =
  | 'application-shell'
  | 'space-overview'
  | 'overview-card-grid'
  | 'space-list'
  | 'grouping-menu'
  | 'filter-builder'
  | 'space-board-empty'
  | 'timezone-suggestion'
  | 'planner-onboarding'
  | 'my-tasks-dashboard'
  | 'my-work-tabs'
  | 'assigned-to-me-table'
  | 'inbox'
  | 'inbox-filter-menu'
  | 'replies-center'
  | 'assigned-comments'
  | 'all-tasks-list'
  | 'all-tasks-board'
  | 'all-tasks-calendar'
  | 'global-search'
  | 'teams-hub'
  | 'people-directory'
  | 'ai-onboarding'
  | 'meetings-hub';

export interface ClickupPreviewProps {
  variant: ClickupVariant;
  disabled?: boolean;
}

const tasks = [
  ['Draft launch brief', 'TO DO', 'Nov 12', 'High'],
  ['Review component inventory', 'IN PROGRESS', 'Nov 14', 'Normal'],
  ['Confirm research scope', 'TO DO', 'Nov 18', 'Low'],
  ['Prepare usability summary', 'COMPLETE', 'Nov 20', 'Normal'],
];

const nav = [
  'Inbox',
  'Replies',
  'Assigned Comments',
  'Skills',
  'Artifacts',
  'Meetings',
  'My Tasks',
  'AI Chats',
  'Super Agents',
];

function Boundary({ children }: { children: string }) {
  return (
    <p className={styles.boundary} role="status">
      {children}
    </p>
  );
}

function Tabs({
  items,
  active,
  onChange,
}: {
  items: string[];
  active: string;
  onChange: (item: string) => void;
}) {
  return (
    <div className={styles.tabs}>
      {items.map((item) => (
        <button
          type="button"
          key={item}
          aria-pressed={active === item}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function Shell({ variant, children }: { variant: ClickupVariant; children: React.ReactNode }) {
  const [notice, setNotice] = useState('');
  const [search, setSearch] = useState(variant === 'global-search');
  return (
    <div className={styles.app} data-disabled="true">
      <header className={styles.topbar}>
        <b className={styles.logo}>✓</b>
        <button type="button" className={styles.search} onClick={() => setSearch(true)}>
          ⌕ Search
        </button>
        <button
          type="button"
          onClick={() => setNotice('Build stayed inside this fictional preview.')}
        >
          Build
        </button>
        <button type="button" disabled>
          ＋ Create task
        </button>
        <button type="button" disabled>
          Record Clip
        </button>
        <button type="button" disabled>
          Talk to Text
        </button>
        <span className={styles.avatar}>AC</span>
      </header>
      <aside className={styles.rail} aria-label="Global navigation">
        {['Home', 'Teams', 'Docs', 'Dashboards', 'More'].map((item) => (
          <button type="button" key={item} onClick={() => setNotice(`${item} stayed local.`)}>
            <span>{item.slice(0, 1)}</span>
            {item}
          </button>
        ))}
      </aside>
      <aside className={styles.sidebar}>
        <button type="button" className={styles.workspace}>
          ◆ Northstar Studio⌄
        </button>
        {nav.map((item) => (
          <button
            type="button"
            key={item}
            className={variant.includes(item.toLowerCase().split(' ')[0]) ? styles.selected : ''}
            onClick={() => setNotice(`${item} stayed local.`)}
          >
            {item}
          </button>
        ))}
        <small>SPACES</small>
        <button type="button" className={variant.startsWith('space') ? styles.selected : ''}>
          ▣ Product Launch
        </button>
        <small>CHANNELS</small>
        <button type="button"># studio-updates</button>
      </aside>
      <main className={styles.main}>
        {children}
        {notice && <Boundary>{notice}</Boundary>}
      </main>
      {search && <SearchDialog onClose={() => setSearch(false)} />}
    </div>
  );
}

function PageHeader({
  title,
  tabs,
  activeTab,
}: {
  title: string;
  tabs?: string[];
  activeTab?: string;
}) {
  return (
    <>
      <header className={styles.pageHeader}>
        <div>
          <small>Northstar Studio</small>
          <h1>{title}</h1>
        </div>
        <button type="button">•••</button>
        <button type="button" disabled>
          ＋ Add
        </button>
      </header>
      {tabs && (
        <div className={styles.viewTabs}>
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab}
              aria-current={(activeTab ? tab === activeTab : index === 0) ? 'page' : undefined}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function Overview({ cardsOnly = false }: { cardsOnly?: boolean }) {
  const cards = [
    'Recent',
    'Docs',
    'Bookmarks',
    'Folders',
    'Lists',
    'Resources',
    'Workload by Status',
  ];
  return (
    <section className={styles.page}>
      <PageHeader
        title={cardsOnly ? 'Overview cards' : 'Product Launch'}
        tabs={cardsOnly ? undefined : ['Overview', 'List', 'Board', '＋ Add View']}
      />
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <article key={card}>
            <header>
              <b>{card}</b>
              <span>•••</span>
            </header>
            {index === 0 ? (
              <>
                <strong>Website Refresh</strong>
                <p>Updated recently · 4 tasks</p>
              </>
            ) : (
              <p>No {card.toLowerCase()} yet</p>
            )}
            <button type="button" disabled>
              ＋ Add
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Toolbar({
  grouping = false,
  filtering = false,
}: {
  grouping?: boolean;
  filtering?: boolean;
}) {
  return (
    <>
      <div className={styles.toolbar}>
        <button type="button">Group by: Status</button>
        <button type="button">Subtasks: Collapsed</button>
        <button type="button">Filter</button>
        <button type="button">Closed</button>
        <button type="button">Assignee</button>
        <input aria-label="Search fictional tasks" placeholder="Search" />
      </div>
      {grouping && (
        <section className={styles.popover}>
          <h2>Group by</h2>
          <button type="button" className={styles.active}>
            ✓ Status
          </button>
          <label>
            <span>Ascending</span>
            <input type="checkbox" defaultChecked readOnly />
          </label>
          <button type="button" disabled>
            Remove primary grouping
          </button>
          <label>
            <span>Also group by List</span>
            <input type="checkbox" readOnly />
          </label>
        </section>
      )}
      {filtering && (
        <section className={styles.popover}>
          <h2>Filter</h2>
          <input aria-label="Describe a fictional filter" placeholder="Ask AI to filter" />
          <button type="button">Select filter</button>
          {[
            'Status',
            'Tags',
            'Due date',
            'Priority',
            'Assignee',
            'Archived',
            'Created by',
            'Date updated',
            'Dependency',
            'Recurring',
          ].map((item) => (
            <button type="button" key={item}>
              {item}
              <span>›</span>
            </button>
          ))}
          <button type="button" disabled>
            ＋ Add filter
          </button>
        </section>
      )}
    </>
  );
}

function EmptySpace({ board = false }: { board?: boolean }) {
  return (
    <section className={styles.page}>
      <PageHeader
        title="Product Launch"
        tabs={['Overview', board ? 'Board' : 'List', '＋ Add View']}
        activeTab={board ? 'Board' : 'List'}
      />
      <Toolbar />
      <div className={styles.empty}>
        <span>▦</span>
        <h2>This Space is empty</h2>
        <p>Create a Folder, List, or Doc to organize fictional work.</p>
        <div>
          <button type="button" disabled>
            ＋ Folder
          </button>
          <button type="button" disabled>
            ＋ List
          </button>
          <button type="button" disabled>
            ＋ Doc
          </button>
        </div>
      </div>
    </section>
  );
}

function TaskTable({
  all = false,
  space = false,
  grouping = false,
  filtering = false,
}: {
  all?: boolean;
  space?: boolean;
  grouping?: boolean;
  filtering?: boolean;
}) {
  const title = all ? 'All Tasks' : space ? 'Product Launch' : 'Assigned to me';
  return (
    <section className={styles.page}>
      <PageHeader
        title={title}
        tabs={all ? ['List', 'Board', 'Calendar'] : space ? ['List', 'Board'] : undefined}
        activeTab="List"
      />
      <Toolbar grouping={grouping} filtering={filtering} />
      <div className={styles.groupLabel}>
        <b>⌄ TO DO</b>
        <span>3</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Due date</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.slice(0, all ? 4 : 3).map(([name, status, date, priority]) => (
            <tr key={name}>
              <td>□ {name}</td>
              <td>
                <span className={styles.status}>{status}</span>
              </td>
              <td>{date}</td>
              <td>{priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" disabled>
        ＋ Add task
      </button>
    </section>
  );
}

function Board() {
  return (
    <section className={styles.page}>
      <PageHeader title="All Tasks" tabs={['List', 'Board', 'Calendar']} activeTab="Board" />
      <Toolbar />
      <div className={styles.board}>
        {['TO DO', 'IN PROGRESS', 'COMPLETE'].map((status) => (
          <section key={status}>
            <header>
              <b>{status}</b>
              <span>{tasks.filter((task) => task[1] === status).length}</span>
            </header>
            {tasks
              .filter((task) => task[1] === status)
              .map((task) => (
                <article key={task[0]}>
                  <b>{task[0]}</b>
                  <p>
                    {task[2]} · {task[3]}
                  </p>
                  <span className={styles.avatar}>AC</span>
                </article>
              ))}
            <button type="button" disabled>
              ＋ Add task
            </button>
          </section>
        ))}
      </div>
    </section>
  );
}

function Calendar() {
  const days = Array.from({ length: 35 }, (_, index) => (index < 3 ? '' : String(index - 2)));
  return (
    <section className={styles.page}>
      <PageHeader title="All Tasks" tabs={['List', 'Board', 'Calendar']} activeTab="Calendar" />
      <div className={styles.toolbar}>
        <button type="button">Today</button>
        <button type="button">November 2026</button>
        <button type="button">‹</button>
        <button type="button">›</button>
        <button type="button">Filter</button>
        <button type="button">Closed</button>
      </div>
      <div className={styles.calendar}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <b key={day}>{day}</b>
        ))}
        {days.map((day, index) => (
          <div key={`${day}-${index}`}>
            <small>{day}</small>
            {day === '12' && <span>Draft launch brief</span>}
            {day === '14' && <span>Review inventory</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

function MyTasks() {
  const cards = [
    'Recents',
    'Agenda',
    'My Work',
    'Assigned to me',
    'Personal List',
    'Assigned comments',
    'Priorities',
    'AI StandUp',
  ];
  return (
    <section className={styles.page}>
      <PageHeader title="My Tasks" />
      <div className={styles.cardGrid}>
        {cards.map((card) => (
          <article key={card}>
            <h2>{card}</h2>
            <p>
              {card === 'My Work' ? '2 tasks need attention' : 'A focused view of fictional work.'}
            </p>
            <button type="button">Open locally</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function MyWork() {
  const [active, setActive] = useState('To Do');
  return (
    <section className={styles.page}>
      <PageHeader title="My Work" />
      <Tabs items={['To Do', 'Done', 'Delegated']} active={active} onChange={setActive} />
      {active === 'To Do' ? (
        <div className={styles.list}>
          {tasks.slice(0, 2).map((task) => (
            <article key={task[0]}>
              <b>{task[0]}</b>
              <span>{task[2]}</span>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <h2>
            {active === 'Done' ? 'Completed work appears here' : 'Delegated reminders appear here'}
          </h2>
          <p>This fictional state is empty.</p>
        </div>
      )}
    </section>
  );
}

function Inbox({ filterOpen = false }: { filterOpen?: boolean }) {
  const [active, setActive] = useState('Primary');
  return (
    <section className={styles.page}>
      <PageHeader title="Inbox" />
      <Tabs items={['Primary', 'Other', 'Later', 'Cleared']} active={active} onChange={setActive} />
      <div className={styles.toolbar}>
        <button type="button">Filter</button>
        <button type="button" disabled>
          Clear all
        </button>
      </div>
      {filterOpen && (
        <section className={styles.popover}>
          <h2>Filter inbox</h2>
          {['Mentions', 'Assigned to me', 'Unread', 'Reminders'].map((item) => (
            <label key={item}>
              <span>{item}</span>
              <input type="checkbox" readOnly />
            </label>
          ))}
        </section>
      )}
      <div className={styles.empty}>
        <span>✦</span>
        <h2>{active === 'Primary' ? 'Looking to collaborate?' : `Nothing in ${active}`}</h2>
        <p>Inbox activity for the fictional workspace appears here.</p>
      </div>
    </section>
  );
}

function Replies() {
  const [active, setActive] = useState('Unread');
  return (
    <section className={styles.page}>
      <PageHeader title="Replies" />
      <Tabs items={['Unread', 'Read']} active={active} onChange={setActive} />
      {active === 'Unread' ? (
        <div className={styles.empty}>
          <h2>You’re all caught up</h2>
          <button type="button">Read old replies</button>
        </div>
      ) : (
        <div className={styles.thread}>
          <h2>Welcome thread</h2>
          <p>A teammate replied to a fictional onboarding message.</p>
          <textarea aria-label="Reply to fictional thread" placeholder="Write a reply" />
          <button type="button" disabled>
            Send
          </button>
        </div>
      )}
    </section>
  );
}

function AssignedComments() {
  const [active, setActive] = useState('Assigned to me');
  return (
    <section className={styles.page}>
      <PageHeader title="Assigned Comments" />
      <Tabs items={['Assigned to me', 'Delegated by me']} active={active} onChange={setActive} />
      <div className={styles.toolbar}>
        <button type="button">Filter</button>
        <label>
          <input type="checkbox" readOnly /> Resolved
        </label>
        <button type="button">Last 90 Days</button>
        <input aria-label="Search fictional comments" placeholder="Search" />
      </div>
      <div className={styles.empty}>
        <h2>No assigned comments</h2>
        <p>{active} is empty in this fixture.</p>
      </div>
    </section>
  );
}

function Planner() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <span>◫</span>
        <h1>You, but better organized</h1>
        <p>Connect a calendar to plan focus time, meetings, and team schedules.</p>
        <button type="button" disabled>
          Connect Google Calendar
        </button>
        <button type="button" disabled>
          Connect Microsoft Outlook
        </button>
      </div>
      <div className={styles.featureGrid}>
        {[
          'Join meetings with AI notes',
          'Block time for priorities',
          'See team schedules',
          'Protect focus automatically',
        ].map((item) => (
          <article key={item}>
            <h2>{item}</h2>
            <p>Calendar access is not enabled in this reconstruction.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Teams({ people = false }: { people?: boolean }) {
  return (
    <section className={styles.page}>
      <PageHeader title={people ? 'All People' : 'Teams'} />
      {people ? (
        <>
          <div className={styles.toolbar}>
            {['Status', 'Team', 'Account type', 'Manager', 'Sort'].map((item) => (
              <button type="button" key={item}>
                {item}
              </button>
            ))}
            <input aria-label="Search fictional people" placeholder="Search" />
            <button type="button" disabled>
              Export
            </button>
            <button type="button" disabled>
              Invite
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Person</th>
                <th>Team</th>
                <th>Account type</th>
                <th>Manager</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className={styles.avatar}>AC</span> Avery Chen
                </td>
                <td>Product Design</td>
                <td>Member</td>
                <td>Unassigned</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <>
          <div className={styles.hero}>
            <span>♙</span>
            <h1>Align teams and visualize their work</h1>
            <button type="button" disabled>
              Create Team
            </button>
            <button type="button">Browse People</button>
          </div>
          <div className={styles.featureGrid}>
            {['Teams Hub', 'Member management', 'Priorities and capacity', 'Activity feed'].map(
              (item) => (
                <article key={item}>
                  <h2>{item}</h2>
                  <p>Bring fictional people and priorities together.</p>
                </article>
              )
            )}
          </div>
        </>
      )}
    </section>
  );
}

function Meetings() {
  return (
    <section className={styles.page}>
      <PageHeader title="Meetings" />
      <div className={styles.hero}>
        <h1>Ready to dive into your meetings?</h1>
        <textarea
          aria-label="Ask about fictional meetings"
          placeholder="Ask about a meeting or paste notes"
        />
        <div>
          <button type="button" disabled>
            Send AI Notetaker
          </button>
          <button type="button">Open Calendar</button>
          <button type="button" disabled>
            Connect Calendar
          </button>
        </div>
      </div>
      <div className={styles.toolbar}>
        <input aria-label="Search fictional meetings" placeholder="Search meeting notes" />
        <button type="button">Filters</button>
        <button type="button">Tags</button>
        <button type="button">My notes</button>
      </div>
      <div className={styles.empty}>
        <h2>No meeting notes yet</h2>
        <p>Connected meeting notes would appear here.</p>
      </div>
    </section>
  );
}

function SearchDialog({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');
  const results = useMemo(
    () => tasks.filter((task) => task[0].toLowerCase().includes(query.toLowerCase())),
    [query]
  );
  return (
    <div className={styles.overlay}>
      <section className={styles.dialog} role="dialog" aria-label="Fictional global search">
        <header>
          <input
            autoFocus
            aria-label="Search fictional workspace"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search everything"
          />
          <button type="button" onClick={onClose}>
            Close
          </button>
        </header>
        <Tabs
          items={['All', 'ClickUp', 'Google Drive', 'Gmail', 'SharePoint', 'Apps']}
          active="All"
          onChange={() => undefined}
        />
        <div className={styles.chips}>
          {['Tasks', 'Docs', 'Agents', 'Channels', 'Messages'].map((item) => (
            <button type="button" key={item}>
              {item}
            </button>
          ))}
        </div>
        <h2>{query ? 'Results' : 'Quick actions'}</h2>
        {query
          ? results.map((task) => (
              <button type="button" key={task[0]}>
                {task[0]}
              </button>
            ))
          : [
              'Open Planner',
              'Set ClickUp Status',
              'Open My Priorities',
              'Connect Apps',
              'Recent Activity',
              'Time Tracking',
            ].map((item) => (
              <button type="button" key={item}>
                {item}
              </button>
            ))}
      </section>
    </div>
  );
}

function TimezoneDialog() {
  return (
    <div className={styles.overlay}>
      <section className={styles.modal} role="dialog" aria-label="Fictional timezone suggestion">
        <h1>Update timezone?</h1>
        <p>Your detected timezone is America/Toronto.</p>
        <label>
          <input type="checkbox" readOnly /> Don’t show again
        </label>
        <footer>
          <button type="button">Don’t update</button>
          <button type="button" disabled>
            Update timezone
          </button>
        </footer>
      </section>
    </div>
  );
}

function AiOnboarding() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1>Brain²</h1>
        <p>Meet your AI work partner.</p>
        <textarea aria-label="Fictional AI prompt" placeholder="Ask anything about your work" />
        <button type="button" disabled>
          Send
        </button>
      </div>
      <div className={styles.overlay}>
        <section className={styles.modal} role="dialog" aria-label="Fictional AI onboarding">
          <span>✦</span>
          <h1>Meet your AI work partner</h1>
          <p>Personalize suggestions using fictional data only.</p>
          <button type="button" disabled>
            Personalize Brain²
          </button>
          <button type="button">Maybe later</button>
        </section>
      </div>
    </section>
  );
}

export function ClickupPreview({ variant }: ClickupPreviewProps) {
  let content: React.ReactNode;
  switch (variant) {
    case 'space-overview':
      content = <Overview />;
      break;
    case 'overview-card-grid':
      content = <Overview cardsOnly />;
      break;
    case 'space-list':
      content = <EmptySpace />;
      break;
    case 'grouping-menu':
      content = <TaskTable space grouping />;
      break;
    case 'filter-builder':
      content = <TaskTable space filtering />;
      break;
    case 'space-board-empty':
      content = <EmptySpace board />;
      break;
    case 'planner-onboarding':
      content = <Planner />;
      break;
    case 'my-tasks-dashboard':
      content = <MyTasks />;
      break;
    case 'my-work-tabs':
      content = <MyWork />;
      break;
    case 'assigned-to-me-table':
      content = <TaskTable />;
      break;
    case 'inbox':
      content = <Inbox />;
      break;
    case 'inbox-filter-menu':
      content = <Inbox filterOpen />;
      break;
    case 'replies-center':
      content = <Replies />;
      break;
    case 'assigned-comments':
      content = <AssignedComments />;
      break;
    case 'all-tasks-list':
      content = <TaskTable all />;
      break;
    case 'all-tasks-board':
      content = <Board />;
      break;
    case 'all-tasks-calendar':
      content = <Calendar />;
      break;
    case 'teams-hub':
      content = <Teams />;
      break;
    case 'people-directory':
      content = <Teams people />;
      break;
    case 'ai-onboarding':
      content = <AiOnboarding />;
      break;
    case 'meetings-hub':
      content = <Meetings />;
      break;
    default:
      content = <Overview />;
  }
  return (
    <Shell variant={variant}>
      {content}
      {variant === 'timezone-suggestion' && <TimezoneDialog />}
    </Shell>
  );
}

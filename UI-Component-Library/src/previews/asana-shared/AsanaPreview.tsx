import { useState } from 'react';
import styles from './asana.module.css';

export type AsanaVariant =
  | 'application-shell'
  | 'global-create-menu'
  | 'home-dashboard'
  | 'home-my-tasks-widget'
  | 'home-timeframe-menu'
  | 'home-widget-gallery'
  | 'my-tasks-list'
  | 'my-tasks-view-controls'
  | 'projects-directory'
  | 'projects-filter-popover'
  | 'inbox-activity'
  | 'portfolios-preview'
  | 'project-board'
  | 'project-view-tabs'
  | 'board-toolbar'
  | 'board-task-card'
  | 'default-view-onboarding'
  | 'ai-teammates-hub'
  | 'workflow-library'
  | 'strategy-goals'
  | 'strategy-reporting'
  | 'strategy-resourcing'
  | 'knowledge-meetings'
  | 'knowledge-pages'
  | 'people-directory'
  | 'project-overview'
  | 'project-list'
  | 'project-timeline'
  | 'project-dashboard'
  | 'project-calendar'
  | 'dash-assistant'
  | 'help-center'
  | 'settings-dialog'
  | 'project-actions-menu'
  | 'project-customize-panel'
  | 'new-project-flow'
  | 'project-view-picker'
  | 'task-lifecycle'
  | 'project-gantt'
  | 'project-workload'
  | 'project-timesheets'
  | 'project-files'
  | 'project-messages'
  | 'project-embed'
  | 'project-page'
  | 'project-custom-field'
  | 'project-form-builder'
  | 'project-automation-builder'
  | 'project-emails'
  | 'project-apps-catalogue'
  | 'project-task-types'
  | 'project-bundles'
  | 'project-status-templates'
  | 'ai-teammate-suggestion-result'
  | 'project-settings'
  | 'project-permissions'
  | 'project-appearance-picker'
  | 'project-duplicate-template-dialogs'
  | 'project-portfolio-assignment'
  | 'project-import-export-sync'
  | 'project-status-update'
  | 'project-sharing'
  | 'project-tab-catalogue'
  | 'project-page-actions'
  | 'global-more-menu';

export interface AsanaPreviewProps {
  variant: AsanaVariant;
  initialState?: string;
  disabled?: boolean;
}

const primaryNav = ['Home', 'Inbox', 'My tasks', 'Projects', 'Portfolios'];
const workspaceNav = ['Work', 'Agents', 'Strategy', 'Knowledge', 'People', 'More'];
const fictionalTasks = [
  ['Investigate token refresh failures', 'Critical', 'API', 'Tomorrow'],
  ['Reduce analytics query latency', 'High', 'Database', 'Friday'],
  ['Repair signup notification retries', 'High', 'Jobs', 'Oct 15'],
];

function GuardNotice({ children }: { children: string }) {
  return <div className={styles.guard} role="status">{children}</div>;
}

function Shell({ children, active = 'Home' }: { children: React.ReactNode; active?: string }) {
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.shell}>
      <aside className={styles.rail} aria-label="Product areas">
        <b className={styles.logo}>a</b>
        {workspaceNav.map((item) => <button key={item} type="button" onClick={() => setNotice(`${item} navigation stays local in this reconstruction.`)}>{item}</button>)}
      </aside>
      <aside className={styles.sidebar} aria-label="Workspace navigation">
        <strong>Fictional workspace</strong>
        {primaryNav.map((item) => <button key={item} type="button" className={active === item ? styles.active : ''} onClick={() => setNotice(`${item} navigation is disabled in this fixture.`)}>{item}</button>)}
        <div className={styles.divider} />
        <span className={styles.caption}>WORK</span>
        <button type="button" onClick={() => setNotice('Project navigation was not activated.')}>🪲 Reliability tracker</button>
        <div className={styles.trial}>Advanced trial<br /><b>14 days left</b></div>
      </aside>
      <header className={styles.topbar}>
        <button type="button" onClick={() => setNotice('Create is represented by its own fixture.')}>＋ Create</button>
        <label className={styles.search}><span className="sr-only">Search fictional workspace</span><input disabled placeholder="Search fictional workspace" /></label>
        <button type="button" onClick={() => setNotice('Dash was not opened.')}>Work with Dash</button>
      </header>
      <main className={styles.main}>{children}{notice && <GuardNotice>{notice}</GuardNotice>}</main>
    </div>
  );
}

function CreateMenu() {
  const [notice, setNotice] = useState('');
  return <section className={styles.centerStage}><div className={styles.menu} role="menu" aria-label="Create menu">{['Task', 'Project', 'Page', 'Message', 'Team', 'Portfolio', 'Goal', 'AI teammate trial', 'Invite'].map((item) => <button role="menuitem" type="button" key={item} onClick={() => setNotice(`No ${item.toLowerCase()} was created.`)}>{item}</button>)}</div>{notice && <GuardNotice>{notice}</GuardNotice>}</section>;
}

function HomeTasks() {
  const [tab, setTab] = useState('Upcoming');
  return <section className={styles.card} aria-label="My tasks widget"><div className={styles.cardTitle}><h3>My tasks</h3><span>•••</span></div><div className={styles.tabs}>{['Upcoming', 'Overdue', 'Completed'].map((item) => <button type="button" className={tab === item ? styles.activeTab : ''} onClick={() => setTab(item)} key={item}>{item}</button>)}</div>{tab === 'Upcoming' ? <ul className={styles.taskList}><li>Review authentication timeout <span>Friday</span></li><li>Triage reporting regression <span>Monday</span></li></ul> : <div className={styles.empty}>No {tab.toLowerCase()} tasks in this fictional fixture.</div>}</section>;
}

function HomeDashboard() {
  const [widgets, setWidgets] = useState(false);
  return <Shell active="Home"><div className={styles.pageHeader}><div><span>Thursday, October 8</span><h1>Good morning, Jordan</h1></div><button type="button" onClick={() => setWidgets(!widgets)}>＋ Add widgets</button></div><div className={styles.dashboardGrid}><HomeTasks /><section className={styles.card}><div className={styles.cardTitle}><h3>Projects</h3><span>Recents</span></div><div className={styles.projectRow}><b>🪲 Reliability tracker</b><small>3 tasks due soon</small></div></section><section className={`${styles.card} ${styles.wide}`}><h3>Learn Asana</h3><div className={styles.learning}><article>🚀<b>Getting started</b><span>3 min</span></article><article>💡<b>Maximize productivity</b><span>5 min read</span></article><article>🧭<b>Track and fix bugs</b><span>10 min read</span></article></div></section></div>{widgets && <WidgetGallery />}</Shell>;
}

function TimeframeMenu() {
  const [value, setValue] = useState('My week');
  return <section className={styles.centerStage}><div className={styles.popover}><span className={styles.caption}>SELECT TIMEFRAME</span>{['My week', 'My month'].map((item) => <button type="button" className={value === item ? styles.selected : ''} onClick={() => setValue(item)} key={item}>{item}{value === item && ' ✓'}</button>)}</div></section>;
}

function WidgetGallery() {
  const [notice, setNotice] = useState('');
  return <aside className={styles.drawer} aria-label="Add widgets"><div className={styles.cardTitle}><h3>Add widgets</h3><span>×</span></div>{['Goals', 'Portfolios', 'Status updates', 'Private notepad', 'Draft comments', 'Forms', 'Comments mentioning me', 'Dash'].map((item) => <div className={styles.widgetRow} key={item}><span>{item}</span><button type="button" onClick={() => setNotice(`The ${item} widget was not added.`)}>＋</button></div>)}{notice && <GuardNotice>{notice}</GuardNotice>}</aside>;
}

function ViewControls() {
  const [panel, setPanel] = useState('Filter');
  const options: Record<string, string[]> = {
    Filter: ['Incomplete tasks', 'Completed tasks', 'Due this week', 'Due next week', 'Add filter'],
    Sort: ['Start date', 'Due date', 'Created by', 'Created on', 'Last modified', 'Completed on', 'Likes', 'Alphabetical', 'Project'],
    Group: ['Sections', 'Custom order', 'Add subgroup'],
    Options: ['View name', 'Show or hide columns', 'Filters', 'Sorts', 'Groups'],
  };
  return <section className={styles.controlDemo}><div className={styles.toolbar}>{Object.keys(options).map((item) => <button type="button" key={item} className={panel === item ? styles.activeControl : ''} onClick={() => setPanel(item)}>{item}</button>)}</div><div className={styles.popover}><h3>{panel}</h3>{options[panel].map((item) => <button type="button" key={item}>{item}</button>)}</div></section>;
}

function MyTasksList() {
  return <Shell active="My tasks"><div className={styles.projectHeader}><h1>My tasks</h1><button type="button">Share</button><button type="button">Customize</button></div><div className={styles.viewTabs}>{['List', 'Board', 'Calendar', 'Dashboard', 'Files'].map((item) => <button type="button" className={item === 'List' ? styles.activeTab : ''} key={item}>{item}</button>)}</div><div className={styles.toolbar}><button type="button">＋ Add task</button><span /><button type="button">Filter</button><button type="button">Sort</button><button type="button">Group</button><button type="button">Options</button></div><div className={styles.table}><div className={styles.tableHead}><b>Name</b><b>Due date</b><b>Collaborators</b><b>Projects</b></div><h3>⌄ Recently assigned</h3>{fictionalTasks.slice(0, 2).map((task) => <div className={styles.tableRow} key={task[0]}><span>○ {task[0]}</span><span>{task[3]}</span><span>＋</span><span className={styles.pill}>Reliability tracker</span></div>)}{['Do today', 'Do next week', 'Do later'].map((group) => <div className={styles.emptyGroup} key={group}><b>⌄ {group}</b><span>Add task</span></div>)}</div></Shell>;
}

function ProjectsDirectory({ showFilter = false }: { showFilter?: boolean }) {
  const [filter, setFilter] = useState(showFilter);
  return <Shell active="Projects"><div className={styles.projectHeader}><h1>Browse projects</h1><button type="button">＋ Create project</button></div><input className={styles.find} disabled placeholder="Find a project" /><div className={styles.filterRow}>{['Owner', 'Members', 'Teams', 'Portfolios', 'Status'].map((item) => <button type="button" onClick={() => item === 'Owner' && setFilter(!filter)} key={item}>{item}⌄</button>)}</div><div className={styles.table}><div className={styles.tableHead}><b>Name</b><b>Members</b><b>Portfolios</b><b>Last modified</b></div><div className={styles.tableRow}><b>🪲 Reliability tracker</b><span>JD</span><span>—</span><span>Recently</span></div></div><section className={styles.templates}><h2>Explore ready-made templates to jumpstart your next project</h2><div><article>Engineering project plan</article><article>Kanban board</article><article>Ticketing</article></div></section>{filter && <div className={styles.filterPopover}><label>Filter projects by owner<input disabled placeholder="Search people" /></label><button type="button">Jordan Diaz · jordan@example.test</button></div>}</Shell>;
}

function InboxActivity() {
  return <Shell active="Inbox"><div className={styles.projectHeader}><h1>Inbox</h1><button type="button">Manage notifications</button></div><div className={styles.viewTabs}>{['Activity', 'Bookmarks', 'Archive', '@Mentioned'].map((item) => <button type="button" className={item === 'Activity' ? styles.activeTab : ''} key={item}>{item}</button>)}</div><div className={styles.inbox}><h3>Today</h3><article><b>Teamwork makes work happen!</b><span>Asana · 8 minutes ago</span><p>Inbox is where updates, notifications and messages from teammates appear.</p></article><button type="button">Archive all notifications</button></div></Shell>;
}

function PortfoliosPreview() {
  return <Shell active="Portfolios"><section className={styles.portfolioHero}><h1>Track progress across every project with portfolios</h1><p>Track progress, bottlenecks, and capacity across every initiative.</p><button type="button">Create portfolio</button></section><section className={styles.portfolioCard}><h2>📁 Active platform projects</h2><span className={styles.caption}>ASANA-PRESENTED EXAMPLE · FICTIONALIZED LOCALLY</span><div className={styles.tableHead}><b>Name</b><b>Status</b><b>Owner</b><b>System area</b></div>{[['API reliability', 'On track', 'Jordan D.', 'Infrastructure'], ['Query optimization', 'At risk', 'Maya K.', 'Performance'], ['Payments integration', 'Off track', 'Noah A.', 'Integration']].map((row) => <div className={styles.tableRow} key={row[0]}>{row.map((cell, index) => <span className={index > 0 ? styles.pill : ''} key={cell}>{cell}</span>)}</div>)}</section></Shell>;
}

function BoardToolbar() {
  const [notice, setNotice] = useState('');
  return <section><div className={styles.toolbar}><button type="button" onClick={() => setNotice('No task was created.')}>＋ Add task</button><span /><button type="button" onClick={() => setNotice('Filter changes were not persisted.')}>Filter</button><button type="button" onClick={() => setNotice('Sort changes were not persisted.')}>Sort</button><button type="button" onClick={() => setNotice('Grouping changes were not persisted.')}>Group</button><button type="button" onClick={() => setNotice('View options stayed local.')}>Options</button></div>{notice && <GuardNotice>{notice}</GuardNotice>}</section>;
}

function TaskCard({ task = fictionalTasks[0] }: { task?: string[] }) {
  const [notice, setNotice] = useState('');
  return <article className={styles.taskCard}><div className={styles.cardTitle}><b>{task[0]}</b><button type="button" onClick={() => setNotice('The task was not completed.')}>○</button></div><div className={styles.badges}><span>{task[1]}</span><span>{task[2]}</span></div><footer><span>JD</span><time>{task[3]}</time></footer>{notice && <GuardNotice>{notice}</GuardNotice>}</article>;
}

function ProjectBoard() {
  return <Shell><div className={styles.projectHeader}><h1>🪲 Reliability tracker</h1><button type="button">Share</button><button type="button">Customize</button></div><ProjectTabs /><BoardToolbar /><div className={styles.board}>{['Reported', 'In progress', 'Resolved'].map((column, index) => <section className={styles.column} key={column}><div className={styles.cardTitle}><h3>{column}</h3><span>{index === 2 ? 1 : 2}</span></div>{fictionalTasks.slice(index, index + (index === 2 ? 1 : 2)).map((task) => <TaskCard task={task} key={task[0]} />)}<button type="button">＋ Add task</button></section>)}</div></Shell>;
}

function ProjectTabs() {
  const [active, setActive] = useState('Board');
  return <div className={styles.viewTabs}>{['Overview', 'List', 'Board', 'Timeline', 'Dashboard', 'Gantt', 'Calendar', 'Page', 'Workload', 'Files', 'Messages', 'Embed', 'Timesheets'].map((item) => <button type="button" className={active === item ? styles.activeTab : ''} onClick={() => setActive(item)} key={item}>{item}</button>)}</div>;
}

function DefaultViewOnboarding() {
  const [view, setView] = useState('Board');
  const [notice, setNotice] = useState('');
  return <section className={styles.modal} role="dialog" aria-label="Select a default view"><h2>Welcome to your first project in Asana!</h2><p>Select a default view.</p><div className={styles.viewChoices}>{['Board', 'List', 'Calendar', 'Timeline'].map((item) => <button type="button" className={view === item ? styles.selected : ''} onClick={() => setView(item)} key={item}>{item}</button>)}</div><button type="button" onClick={() => setNotice('Default view was not saved in this fictional fixture.')}>Continue</button>{notice && <GuardNotice>{notice}</GuardNotice>}</section>;
}

const workflowCards = [
  ['Automations', 'Automate routine steps and keep work moving'],
  ['Project templates', 'Start repeatable projects from a shared structure'],
  ['Forms', 'Turn incoming requests into organized tasks'],
  ['Custom fields', 'Track the details that matter to your team'],
  ['Bundles', 'Apply shared workflow elements across projects'],
  ['Task types', 'Tailor tasks to fit specialized work'],
  ['Status templates', 'Standardize project and portfolio updates'],
];

function AreaPage({ title, description, action, children, active = 'Work' }: { title: string; description: string; action?: string; children?: React.ReactNode; active?: string }) {
  const [notice, setNotice] = useState('');
  return <Shell><div className={styles.projectHeader}><div><span className={styles.caption}>{active.toUpperCase()}</span><h1>{title}</h1><p>{description}</p></div>{action && <button type="button" onClick={() => setNotice(`${action} was not started.`)}>{action}</button>}</div>{children}{notice && <GuardNotice>{notice}</GuardNotice>}</Shell>;
}

function AITeammatesHub() {
  const [tab, setTab] = useState('AI Teammates');
  return <AreaPage active="Agents" title="AI Teammates" description="AI teammates, their work, and reusable skills in one hub." action="Create AI Teammate"><div className={styles.viewTabs}>{['AI Teammates', 'Work', 'Skills'].map((item) => <button type="button" className={tab === item ? styles.activeTab : ''} onClick={() => setTab(item)} key={item}>{item}</button>)}</div><div className={styles.toolbar}><button type="button">Filter</button><button type="button">Sort</button><span /><button type="button">Search</button></div><section className={styles.emptyPanel}><h2>{tab === 'Work' ? 'No work to display yet' : tab === 'Skills' ? 'No shared skills yet' : 'Introducing AI Teammates'}</h2><p>{tab === 'Work' ? 'Teammate executions you can access appear here.' : tab === 'Skills' ? 'Skills you create or receive appear here.' : 'Purpose-built AI collaborators can work with shared context.'}</p></section></AreaPage>;
}

function WorkflowLibrary() {
  const [selected, setSelected] = useState('Automations');
  return <AreaPage active="Agents" title="Workflow" description="Organization-level workflow tools and reusable building blocks."><div className={styles.featureGrid}>{workflowCards.map(([name, detail]) => <button type="button" className={selected === name ? styles.selectedCard : ''} onClick={() => setSelected(name)} key={name}><b>{name}</b><span>{detail}</span></button>)}</div><section className={styles.emptyPanel}><h2>{selected}</h2><div className={styles.toolbar}><button type="button">Filter</button><button type="button">Sort</button><span /><button type="button">Search</button></div><p>No {selected.toLowerCase()} exist in this fictional fixture. Creation remains disabled.</p></section></AreaPage>;
}

const strategyRows = [['Reduce request latency', 'On track', '65%'], ['Complete service migration', 'At risk', '33%'], ['Improve platform uptime', 'Off track', '10%']];

function StrategySurface({ kind }: { kind: 'goals' | 'reporting' | 'resourcing' }) {
  if (kind === 'goals') return <AreaPage active="Strategy" title="Goals" description="Connect work to measurable outcomes." action="Create goal"><section className={styles.card}><span className={styles.caption}>FICTIONAL EXAMPLE</span><div className={styles.tableHead}><b>Name</b><b>Status</b><b>Progress</b><b>Team</b></div>{strategyRows.map((row) => <div className={styles.tableRow} key={row[0]}><span>{row[0]}</span><span className={styles.pill}>{row[1]}</span><span>{row[2]}</span><span>Platform</span></div>)}</section></AreaPage>;
  if (kind === 'reporting') return <AreaPage active="Strategy" title="Reporting" description="Turn project work into live operational insights." action="Create dashboard"><div className={styles.metricGrid}>{['Open work 24', 'At risk 3', 'Completed 18', 'On track 82%'].map((item) => <article key={item}>{item}</article>)}</div><div className={styles.chartBars}><i /><i /><i /><i /><i /></div></AreaPage>;
  return <AreaPage active="Strategy" title="Resourcing" description="See capacity and staffing across initiatives." action="Contact sales"><div className={styles.capacity}><span>Platform reliability</span><b>Jordan</b><meter min="0" max="100" value="72" /><b>Maya</b><meter min="0" max="100" value="46" /><span>Data migration</span><b>Noah</b><meter min="0" max="100" value="88" /></div></AreaPage>;
}

function KnowledgeSurface({ kind }: { kind: 'meetings' | 'pages' }) {
  const meetings = kind === 'meetings';
  return <AreaPage active="Knowledge" title={meetings ? 'Meetings' : 'Pages'} description={meetings ? 'Turn meeting transcripts into summaries and connected action items.' : 'Keep notes, plans, and decisions connected to work.'} action={meetings ? 'Join waitlist' : 'Create page'}><section className={styles.emptyPanel}><span className={styles.pill}>{meetings ? 'Coming soon' : 'Knowledge'}</span><h2>{meetings ? 'Conversation to action' : 'Docs connected to delivery'}</h2><p>{meetings ? 'Summaries, decisions, and tasks are represented as a preview only.' : 'No pages were created during authenticated observation.'}</p></section></AreaPage>;
}

function PeopleDirectory() {
  const [tab, setTab] = useState('Profile');
  return <AreaPage active="People" title="People" description="Profile, teams, work, goals, collaborators, and learning progress."><div className={styles.viewTabs}>{['Profile', 'Teams'].map((item) => <button type="button" className={tab === item ? styles.activeTab : ''} onClick={() => setTab(item)} key={item}>{item}</button>)}</div>{tab === 'Profile' ? <div className={styles.profileGrid}><section className={styles.card}><h2>Jordan Diaz</h2><p>Platform engineer · fictional identity</p><button type="button">Edit profile</button></section>{['My tasks', 'Recent projects', 'Frequent collaborators', 'My goals', 'Learning', 'Teams'].map((item) => <section className={styles.card} key={item}><h3>{item}</h3><p>Sanitized local example</p></section>)}</div> : <div className={styles.table}><div className={styles.tableHead}><b>Teams</b><b>Members</b><b /><b /></div><div className={styles.tableRow}><b>Platform reliability</b><span>3</span><span /><span>View</span></div></div>}</AreaPage>;
}

function ProjectSurface({ kind }: { kind: 'overview' | 'list' | 'timeline' | 'dashboard' | 'calendar' }) {
  if (kind === 'overview') return <AreaPage title="Reliability tracker" description="Project overview"><ProjectTabs /><div className={styles.overviewGrid}>{['AI summary', 'Project description', 'Project roles', 'Connected goals', 'Connected portfolios', 'Key resources', 'Milestones', 'Project status'].map((item) => <section className={styles.card} key={item}><h3>{item}</h3><p>Fictional project detail</p></section>)}</div></AreaPage>;
  if (kind === 'list') return <AreaPage title="Reliability tracker" description="Project list"><ProjectTabs /><div className={styles.toolbar}><button type="button">＋ Add task</button><span /><button type="button">Filter</button><button type="button">Sort</button><button type="button">Group</button><button type="button">Options</button></div><div className={styles.table}><div className={styles.tableHead}><b>Name</b><b>Assignee</b><b>Due date</b><b>Severity</b></div>{fictionalTasks.map((task) => <div className={styles.tableRow} key={task[0]}><span>○ {task[0]}</span><span>JD</span><span>{task[3]}</span><span className={styles.pill}>{task[1]}</span></div>)}</div></AreaPage>;
  if (kind === 'timeline') return <AreaPage title="Reliability tracker" description="Project timeline"><ProjectTabs /><div className={styles.timeline}><div className={styles.timelineScale}>September · October · November</div>{fictionalTasks.map((task, index) => <div className={styles.timelineRow} key={task[0]}><b>{task[0]}</b><span style={{ marginLeft: `${index * 12}%`, width: `${28 - index * 3}%` }}>{task[3]}</span></div>)}</div></AreaPage>;
  if (kind === 'dashboard') return <AreaPage title="Reliability tracker" description="Project dashboard"><ProjectTabs /><div className={styles.metricGrid}>{['Completed 0', 'Incomplete 5', 'Overdue 0', 'Total 5'].map((item) => <article key={item}>{item}</article>)}</div><div className={styles.dashboardCharts}><section className={styles.card}><h3>Tasks by section</h3><div className={styles.chartBars}><i /><i /><i /></div></section><section className={styles.card}><h3>Completion status</h3><div className={styles.donut}>5</div></section></div></AreaPage>;
  return <AreaPage title="Reliability tracker" description="Project calendar"><ProjectTabs /><div className={styles.calendarHeader}><button type="button">‹</button><b>October 2026</b><button type="button">Today</button><button type="button">›</button></div><div className={styles.calendarGrid}>{['Sun','Mon','Tue','Wed','Thu','Fri','Sat',...Array.from({length:28},(_,i)=>String(i+1))].map((item,index) => <div key={`${item}-${index}`}>{item}{index > 12 && index < 18 && <span>{fictionalTasks[(index-13)%fictionalTasks.length][0]}</span>}</div>)}</div></AreaPage>;
}

function DashAssistant() {
  const [notice, setNotice] = useState('');
  return <section className={styles.centerStage}><aside className={styles.assistant}><div className={styles.cardTitle}><h2>Hi, I’m Dash</h2><span className={styles.pill}>Public preview</span></div><p>I can help surface priorities and draft updates from fictional work.</p>{['What should I work on today?', 'Draft my weekly status update', 'How do I work with Dash?', 'Connect your apps'].map((item) => <button type="button" onClick={() => setNotice('No prompt was sent and no app was connected.')} key={item}>{item}</button>)}<textarea disabled aria-label="Dash prompt" placeholder="Ask about fictional work" /><button type="button" disabled>Send</button>{notice && <GuardNotice>{notice}</GuardNotice>}</aside></section>;
}

function HelpCenter() {
  return <section className={styles.centerStage}><div className={styles.dialog}><h2>Help & getting started</h2><input disabled placeholder="Search help articles" />{['Help with features', 'Contact support', 'Privacy statement', 'Apps and integrations', 'Keyboard shortcuts', 'Download the desktop app'].map((item) => <button type="button" key={item}>{item}</button>)}<h3>Video tutorials</h3><div className={styles.featureGrid}><button type="button">Getting started</button><button type="button">Asana hierarchy</button></div><h3>Popular topics</h3><p>App integrations · Recommended use cases · Live training · Asana Academy</p></div></section>;
}

function SettingsDialog() {
  const [tab, setTab] = useState('Profile');
  const tabs = ['Profile', 'Personalization', 'Notifications', 'Email forwarding', 'Account', 'Display', 'Navigation', 'Apps', 'Hacks'];
  const detail: Record<string,string> = {Profile:'Photo, name, pronouns, role, about, certifications and out of office',Personalization:'Role details, use cases, company details and browser preferences',Notifications:'Browser, Slack, Teams, project, portfolio, goal, email and do-not-disturb controls','Email forwarding':'Workspace-specific forwarding addresses and task creation guidance',Account:'Password and account access controls',Display:'Theme, language, week start, compact mode, accessibility and celebrations',Navigation:'Sidebar style, visibility and ordering for product areas',Apps:'Desktop, mobile, authorized apps, discovery and developer tools',Hacks:'Experimental delight, recurring-task and due-date notification options'};
  return <section className={styles.centerStage}><div className={`${styles.dialog} ${styles.settings}`}><h2>Settings</h2><div className={styles.settingsBody}><nav>{tabs.map((item) => <button type="button" className={tab === item ? styles.selected : ''} onClick={() => setTab(item)} key={item}>{item}</button>)}</nav><section><h3>{tab}</h3><p>{detail[tab]}</p><GuardNotice>Values are fictional and controls do not save.</GuardNotice></section></div></div></section>;
}

function ProjectMenu({ customize = false }: { customize?: boolean }) {
  const actions = customize ? ['Suggest AI Teammate', 'Automations', 'Fields', 'Forms', 'Emails', 'Apps', 'Task types and templates', 'Bundles', 'Status templates'] : ['Edit project settings', 'Manage project permissions', 'Set color & icon', 'Copy project link', 'Duplicate', 'Save as template', 'Add to portfolio', 'Import', 'Export or sync', 'Archive', 'Delete project'];
  return <section className={styles.centerStage}><div className={customize ? styles.drawerStatic : styles.menu}><h2>{customize ? 'Customize' : 'Project actions'}</h2>{actions.map((item) => <button type="button" key={item}>{item}</button>)}</div></section>;
}

function GlobalMoreMenu() {
  return <section className={styles.centerStage}><div className={styles.menu}><h2>More</h2><button type="button">StackAI by Asana <small>Cross-system agentic workflows</small></button><button type="button">Customize navigation</button><GuardNotice>StackAI opens an external site. Navigation customization was not changed.</GuardNotice></div></section>;
}

function NewProjectFlow({ picker = false }: { picker?: boolean }) {
  const views = ['Overview', 'List', 'Board', 'Timeline', 'Dashboard', 'Gantt', 'Calendar', 'Page', 'Workload', 'Timesheets', 'Files', 'Messages', 'Embed'];
  return <section className={styles.centerStage}><div className={styles.modal}><span className={styles.caption}>FICTIONAL RECONSTRUCTION</span><h2>{picker ? 'Choose project views' : 'Create a blank project'}</h2>{picker ? <div className={styles.viewChoices}>{views.map((view) => <button type="button" className={styles.selected} key={view}>{view} ✓</button>)}</div> : <><label>Project name<input className={styles.find} disabled value="Reliability research fixture" readOnly /></label><div className={styles.viewChoices}><button type="button" className={styles.selected}>Private to project members</button><button type="button">Shared with team</button></div></>}<GuardNotice>No provider project is created by this local fixture.</GuardNotice></div></section>;
}

function TaskLifecycle() {
  const [done, setDone] = useState(true);
  return <Shell><div className={styles.projectHeader}><div><h1>Reliability research fixture</h1><p>Private fictional project</p></div><button type="button">Customize</button></div><ProjectTabs /><div className={styles.table}><div className={styles.tableHead}><b>Name</b><b>Section</b><b>Due date</b><b>Research state</b></div><div className={styles.tableRow}><button type="button" onClick={() => setDone(!done)}>{done ? '✓' : '○'} Verify lifecycle behavior</button><span>Verified</span><span>Saturday</span><span className={styles.pill}>Observed</span></div></div><section className={styles.card}><h3>Task details</h3><p>Temporary fictional fixture. Safe to delete.</p><p>Created, described, dated, moved between sections and completed during the bounded provider exercise.</p><GuardNotice>Local completion is reversible and does not call Asana.</GuardNotice></section></Shell>;
}

function ExtendedProjectSurface({ kind }: { kind: 'gantt' | 'workload' | 'timesheets' | 'files' | 'messages' | 'embed' | 'page' }) {
  if (kind === 'gantt') return <AreaPage title="Reliability research fixture" description="Gantt"><ProjectTabs /><div className={styles.timeline}><div className={styles.timelineScale}>Q3 2026 · Q4 2026 · Q1 2027</div><div className={styles.timelineRow}><b>Verify lifecycle behavior</b><span>Saturday</span></div></div></AreaPage>;
  if (kind === 'workload') return <AreaPage title="Reliability research fixture" description="Workload"><ProjectTabs /><div className={styles.capacity}><span>October capacity</span><b>Unassigned</b><meter min="0" max="100" value="35" /><b>Total tasks</b><meter min="0" max="100" value="35" /></div></AreaPage>;
  if (kind === 'timesheets') return <AreaPage title="Reliability research fixture" description="Timesheets"><ProjectTabs /><section className={styles.emptyPanel}><h2>Unlock time tracking for this project</h2><p>Log hours, compare them to budget, and report on billable work.</p><button type="button">Add to plan</button></section></AreaPage>;
  if (kind === 'files') return <AreaPage title="Reliability research fixture" description="Files"><ProjectTabs /><div className={styles.toolbar}><button type="button">Add file</button><span /><button type="button">Filter</button><button type="button">View as tiles</button></div><section className={styles.card}><h3>Research notes</h3><p>Asana Page · fictional fixture</p></section></AreaPage>;
  if (kind === 'messages') return <AreaPage title="Reliability research fixture" description="Messages"><ProjectTabs /><section className={styles.emptyPanel}><h2>Connect your words to your work</h2><p>Send a message to project members or discuss tasks.</p><button type="button">Send message to members</button></section></AreaPage>;
  if (kind === 'embed') return <AreaPage title="Reliability research fixture" description="Embed"><ProjectTabs /><h2>Add an embed</h2><div className={styles.featureGrid}>{['Page', 'Google Sheets', 'Google Docs', 'Google Slides', 'YouTube', 'Vimeo', 'Canva', 'Figma', 'SharePoint', 'Tableau', 'Loom', 'Airtable', 'Other website'].map((item) => <button type="button" key={item}><b>{item}</b><span>No account connected</span></button>)}</div></AreaPage>;
  return <AreaPage title="Reliability research fixture" description="Page"><ProjectTabs /><section className={styles.card}><span className={styles.caption}>SAVED AUTOMATICALLY</span><h2>Research notes</h2><p>Temporary fictional fixture. Safe to delete.</p></section></AreaPage>;
}

function CustomFieldFixture() {
  return <section className={styles.centerStage}><div className={styles.dialog}><span className={styles.caption}>PROJECT-ONLY FICTIONAL FIELD</span><h2>Research state</h2><p>Single-select</p><div className={styles.featureGrid}>{['Observed', 'Verified'].map((item) => <button type="button" className={styles.selectedCard} key={item}><b>{item}</b></button>)}</div><GuardNotice>Organization field-library and notifications stay off.</GuardNotice></div></section>;
}

function FormBuilderFixture() {
  return <section className={styles.centerStage}><div className={styles.dialog}><span className={styles.caption}>UNPUBLISHED · ORGANIZATION ONLY</span><h2>Reliability research fixture</h2><div className={styles.settingsBody}><nav><button type="button" className={styles.selected}>Questions</button><button type="button">Settings</button></nav><section><label>Name *<input disabled /></label><label>Email address *<input disabled /></label><p>Task section: First project section</p><p>Copy responses to task description: On</p></section></div><button type="button" disabled>Publish</button><GuardNotice>No form submission, sharing or email delivery occurs locally.</GuardNotice></div></section>;
}

function AutomationBuilderFixture() {
  return <section className={styles.centerStage}><div className={styles.dialog}><span className={styles.caption}>DRAFT AUTOMATION</span><h2>What starts this workflow?</h2><div className={styles.featureGrid}>{['Asana event', 'Another app', 'Manual', 'Scheduled', 'Webhook'].map((item) => <button type="button" key={item}><b>{item}</b><span>Choose a trigger</span></button>)}</div><button type="button" disabled>Publish</button><GuardNotice>The observed provider draft was not published and no external app was authorized.</GuardNotice></div></section>;
}

const projectDiscoveryFixtures: Record<string, { eyebrow: string; title: string; items: string[]; notice: string }> = {
  'project-emails': { eyebrow: 'ADD TASKS VIA EMAIL', title: 'Project email settings', items: ['Project email address', 'Send recipients task updates', 'Add email participants as collaborators', 'Manage email forwarding', 'Automate email replies'], notice: 'The provider address is omitted. No email was sent and no setting was changed.' },
  'project-apps-catalogue': { eyebrow: 'GET STARTED WITH APPS', title: 'Apps catalogue', items: ['Featured apps', 'New & noteworthy', 'Communication', 'Reporting', 'File sharing', 'Marketing & Design', 'Product Management', 'Sales', 'Operations', 'Productivity', 'Made by Developers'], notice: 'No app was selected, connected, or authorized.' },
  'project-task-types': { eyebrow: 'TASK TYPES AND TEMPLATES', title: 'Project task types', items: ['Task · default', 'Milestone', 'Approval', 'Create new'], notice: 'No custom task type or template was created.' },
  'project-bundles': { eyebrow: 'ENTITLEMENT BOUNDARY', title: 'Bundles', items: ['Standardize project creation', 'Standardize project updates', 'Contact sales'], notice: 'The upgrade and sales actions remain inert.' },
  'project-status-templates': { eyebrow: 'STATUS TEMPLATES', title: 'Get started with status templates', items: ['Create new', 'Browse library'], notice: 'No status template was created or selected.' },
  'ai-teammate-suggestion-result': { eyebrow: 'PROVIDER AI RESULT', title: 'No AI Teammate suggestions found', items: ['Add more relevant project work', 'Try again'], notice: 'The provider analysis returned no suggestion. No teammate was created or applied.' },
  'project-settings': { eyebrow: 'PROJECT SETTINGS', title: 'Project configuration', items: ['Project details', 'Dependencies · Consume buffer', 'Scheduling · Monday to Friday', 'Choose work hours', 'Notifications · Slack and Microsoft Teams'], notice: 'All values are fictional and unsaved. No integration was connected.' },
  'project-permissions': { eyebrow: 'ENTERPRISE CONTROLS', title: 'Project permissions', items: ['General workflow permissions', 'Membership permissions', 'Field restrictions', 'Sharing tasks with other projects', 'Upgrade banner'], notice: 'Permission controls remain disabled and no access changed.' },
  'project-appearance-picker': { eyebrow: 'COLOR AND ICON', title: 'Project appearance', items: ['Color palette', 'Icon library', 'Upload tab'], notice: 'No color, icon, or upload was applied.' },
  'project-duplicate-template-dialogs': { eyebrow: 'REUSE PROJECT STRUCTURE', title: 'Duplicate or save as template', items: ['Project details', 'Project tabs', 'Task details', 'Template title', 'Team selection', 'Template access'], notice: 'Neither Duplicate project nor Create template was activated.' },
  'project-portfolio-assignment': { eyebrow: 'ADD TO PORTFOLIO', title: 'Portfolio assignment', items: ['Search portfolios', 'No connected portfolios', 'Add'], notice: 'No portfolio was selected or changed.' },
  'project-import-export-sync': { eyebrow: 'DATA MOVEMENT', title: 'Import, export, and sync', items: ['Import · Any file', 'Import · CSV', 'Export · Project tasks CSV/XLSX', 'Export · Time entries CSV', 'Export · JSON', 'Sync · Outlook Calendar', 'Sync · Google Calendar', 'Sync · iCal', 'Sync · Google Sheets', 'Print', 'Create a public link · unavailable'], notice: 'No file was uploaded, downloaded, exported, synchronized, printed, or shared.' },
  'project-status-update': { eyebrow: 'STATUS UPDATE DRAFT', title: 'Create a status update', items: ['On track', 'At risk', 'Off track', 'On hold', 'Complete', 'Dropped', 'Draft update with AI', 'Summary', 'Next steps', 'Highlights'], notice: 'The composer was closed without posting, adding recipients, or running AI drafting.' },
  'project-sharing': { eyebrow: 'PRIVATE PROJECT', title: 'Share project', items: ['Invite with email', 'Editor role', 'Notify on added tasks', 'Access settings', 'Who has access', 'Manage notifications', 'Copy project link'], notice: 'Identity is omitted. No invitation, role, notification, or access setting changed.' },
  'project-tab-catalogue': { eyebrow: 'ADD TAB', title: 'Available project tabs', items: ['List', 'Page', 'Gantt', 'Board', 'Calendar', 'Timeline', 'Workload', 'Dashboard', 'Files', 'Embed'], notice: 'No additional tab was added or removed.' },
  'project-page-actions': { eyebrow: 'PAGE ACTIONS', title: 'Page actions menu', items: ['Attach to', 'Duplicate page', 'Share', 'Copy link', 'Width options', 'Version history', 'Remove tab', 'Delete page'], notice: 'No page action was executed.' },
};

function ProjectDiscoveryFixture({ kind }: { kind: keyof typeof projectDiscoveryFixtures }) {
  const fixture = projectDiscoveryFixtures[kind];
  return <section className={styles.centerStage}><div className={styles.dialog}><span className={styles.caption}>{fixture.eyebrow}</span><h2>{fixture.title}</h2><div className={styles.featureGrid}>{fixture.items.map((item) => <button type="button" key={item}><b>{item}</b></button>)}</div><GuardNotice>{fixture.notice}</GuardNotice></div></section>;
}

export function AsanaPreview({ variant }: AsanaPreviewProps) {
  switch (variant) {
    case 'application-shell': return <Shell><div className={styles.placeholder}><h1>Reliability tracker</h1><p>Fictional workspace content</p></div></Shell>;
    case 'global-create-menu': return <CreateMenu />;
    case 'home-dashboard': return <HomeDashboard />;
    case 'home-my-tasks-widget': return <div className={styles.standalone}><HomeTasks /></div>;
    case 'home-timeframe-menu': return <TimeframeMenu />;
    case 'home-widget-gallery': return <div className={styles.standalone}><WidgetGallery /></div>;
    case 'my-tasks-list': return <MyTasksList />;
    case 'my-tasks-view-controls': return <ViewControls />;
    case 'projects-directory': return <ProjectsDirectory />;
    case 'projects-filter-popover': return <ProjectsDirectory showFilter />;
    case 'inbox-activity': return <InboxActivity />;
    case 'portfolios-preview': return <PortfoliosPreview />;
    case 'project-board': return <ProjectBoard />;
    case 'project-view-tabs': return <section className={styles.standalone}><ProjectTabs /></section>;
    case 'board-toolbar': return <section className={styles.standalone}><BoardToolbar /></section>;
    case 'board-task-card': return <section className={styles.standalone}><TaskCard /></section>;
    case 'default-view-onboarding': return <section className={styles.centerStage}><DefaultViewOnboarding /></section>;
    case 'ai-teammates-hub': return <AITeammatesHub />;
    case 'workflow-library': return <WorkflowLibrary />;
    case 'strategy-goals': return <StrategySurface kind="goals" />;
    case 'strategy-reporting': return <StrategySurface kind="reporting" />;
    case 'strategy-resourcing': return <StrategySurface kind="resourcing" />;
    case 'knowledge-meetings': return <KnowledgeSurface kind="meetings" />;
    case 'knowledge-pages': return <KnowledgeSurface kind="pages" />;
    case 'people-directory': return <PeopleDirectory />;
    case 'project-overview': return <ProjectSurface kind="overview" />;
    case 'project-list': return <ProjectSurface kind="list" />;
    case 'project-timeline': return <ProjectSurface kind="timeline" />;
    case 'project-dashboard': return <ProjectSurface kind="dashboard" />;
    case 'project-calendar': return <ProjectSurface kind="calendar" />;
    case 'dash-assistant': return <DashAssistant />;
    case 'help-center': return <HelpCenter />;
    case 'settings-dialog': return <SettingsDialog />;
    case 'project-actions-menu': return <ProjectMenu />;
    case 'project-customize-panel': return <ProjectMenu customize />;
    case 'new-project-flow': return <NewProjectFlow />;
    case 'project-view-picker': return <NewProjectFlow picker />;
    case 'task-lifecycle': return <TaskLifecycle />;
    case 'project-gantt': return <ExtendedProjectSurface kind="gantt" />;
    case 'project-workload': return <ExtendedProjectSurface kind="workload" />;
    case 'project-timesheets': return <ExtendedProjectSurface kind="timesheets" />;
    case 'project-files': return <ExtendedProjectSurface kind="files" />;
    case 'project-messages': return <ExtendedProjectSurface kind="messages" />;
    case 'project-embed': return <ExtendedProjectSurface kind="embed" />;
    case 'project-page': return <ExtendedProjectSurface kind="page" />;
    case 'project-custom-field': return <CustomFieldFixture />;
    case 'project-form-builder': return <FormBuilderFixture />;
    case 'project-automation-builder': return <AutomationBuilderFixture />;
    case 'project-emails': return <ProjectDiscoveryFixture kind="project-emails" />;
    case 'project-apps-catalogue': return <ProjectDiscoveryFixture kind="project-apps-catalogue" />;
    case 'project-task-types': return <ProjectDiscoveryFixture kind="project-task-types" />;
    case 'project-bundles': return <ProjectDiscoveryFixture kind="project-bundles" />;
    case 'project-status-templates': return <ProjectDiscoveryFixture kind="project-status-templates" />;
    case 'ai-teammate-suggestion-result': return <ProjectDiscoveryFixture kind="ai-teammate-suggestion-result" />;
    case 'project-settings': return <ProjectDiscoveryFixture kind="project-settings" />;
    case 'project-permissions': return <ProjectDiscoveryFixture kind="project-permissions" />;
    case 'project-appearance-picker': return <ProjectDiscoveryFixture kind="project-appearance-picker" />;
    case 'project-duplicate-template-dialogs': return <ProjectDiscoveryFixture kind="project-duplicate-template-dialogs" />;
    case 'project-portfolio-assignment': return <ProjectDiscoveryFixture kind="project-portfolio-assignment" />;
    case 'project-import-export-sync': return <ProjectDiscoveryFixture kind="project-import-export-sync" />;
    case 'project-status-update': return <ProjectDiscoveryFixture kind="project-status-update" />;
    case 'project-sharing': return <ProjectDiscoveryFixture kind="project-sharing" />;
    case 'project-tab-catalogue': return <ProjectDiscoveryFixture kind="project-tab-catalogue" />;
    case 'project-page-actions': return <ProjectDiscoveryFixture kind="project-page-actions" />;
    case 'global-more-menu': return <GlobalMoreMenu />;
  }
}

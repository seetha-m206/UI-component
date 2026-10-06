import { useState } from 'react';
import actionStyles from './hubspot-actions.module.css';
import baseStyles from './hubspot.module.css';

const styles = { ...baseStyles, ...actionStyles };

export type HubspotVariant =
  | 'application-shell'
  | 'inbox-empty'
  | 'inbox-actions'
  | 'tickets-empty-board'
  | 'tickets-filtered-empty'
  | 'ticket-object-add'
  | 'ticket-view-settings'
  | 'ticket-filters'
  | 'ticket-automation'
  | 'unassigned-view'
  | 'notifications'
  | 'global-create'
  | 'contextual-help'
  | 'marketplace-menu'
  | 'breeze-assistant'
  | 'calling-gate'
  | 'ticket-collapsible-header'
  | 'ticket-compact-view-selector'
  | 'navigation-manager'
  | 'ticket-status-details'
  | 'ticket-views-manager'
  | 'ticket-object-setup'
  | 'ticket-pipeline-settings'
  | 'ticket-pipeline-actions'
  | 'ticket-stage-type-menu'
  | 'ticket-record-customization'
  | 'ticket-preview-customization'
  | 'ticket-index-customization'
  | 'ticket-customization-view-actions'
  | 'ticket-record-layout-editor';

export interface HubspotServicePreviewProps {
  variant: HubspotVariant;
  initialState?: string;
  disabled?: boolean;
}

const ticketColumns = ['New', 'Waiting on contact', 'Waiting on us', 'Closed'];
const navItems = ['Home', 'Contacts', 'Companies', 'Deals', 'Segments'];

function GuardNotice({ message }: { message: string }) {
  return (
    <div className={styles.guard} role="status">
      {message}
    </div>
  );
}

function EmptyTickets({ layout }: { layout: 'board' | 'table' }) {
  return (
    <div className={styles.results}>
      {layout === 'board' ? (
        <div className={styles.board} aria-label="Ticket status columns">
          {ticketColumns.map((column) => (
            <section className={styles.column} key={column}>
              <strong>{column}</strong>
              <span>0</span>
            </section>
          ))}
        </div>
      ) : (
        <div className={styles.tableHeader} aria-label="Ticket table headings">
          <span>Ticket name</span><span>Status</span><span>Owner</span><span>Priority</span>
        </div>
      )}
      <div className={styles.empty}>
        <div className={styles.emptyMark}>◎</div>
        <h3>No Tickets match the current filters.</h3>
        <p>Expecting to see new Tickets? Try again in a few seconds as the system catches up.</p>
      </div>
      <div className={styles.footer}><span>0 tickets</span><button type="button">Refresh</button><button type="button">Export</button><button type="button">Clone</button></div>
    </div>
  );
}

function TicketToolbar({ onGuard }: { onGuard: (message: string) => void }) {
  return (
    <>
      <div className={styles.toolbar}>
        <label className={styles.search}><span className="sr-only">Search tickets</span><input placeholder="Search" /></label>
        <button type="button">Filter (1)</button>
        <button type="button">Sort by</button>
        <button type="button" onClick={() => onGuard('Pipeline changes are disabled in this fictional fixture.')}>Support Pipeline ▾</button>
      </div>
      <div className={styles.chips}>
        {['Ticket owner', 'Create date', 'Last activity date', 'Priority'].map((label) => <button type="button" key={label}>{label} ▾</button>)}
        <button type="button">Clear all</button>
        <button type="button">Advanced filters</button>
      </div>
    </>
  );
}

function TicketShell({ children, active = 'Unassigned tickets' }: { children: React.ReactNode; active?: string }) {
  return (
    <div className={styles.ticketShell}>
      <div className={styles.ticketHead}>
        <h2>Tickets⌄</h2>
        <div><button type="button">Automate</button><button className={styles.primary} type="button">Add tickets ▾</button></div>
      </div>
      <div className={styles.tabs} role="tablist" aria-label="Ticket views">
        {['All tickets', 'My open tickets', 'Unassigned tickets'].map((label) => <button key={label} role="tab" aria-selected={label === active}>{label}</button>)}
      </div>
      {children}
    </div>
  );
}

function ApplicationShell({ notificationsOpen, onNotifications }: { notificationsOpen: boolean; onNotifications: () => void }) {
  return (
    <div className={styles.appShell}>
      <header className={styles.topbar}><b className={styles.logo}>◆</b><input aria-label="Find in HubSpot" placeholder="Find in HubSpot" /><span>Breeze Assistant</span><button type="button">Upgrade</button><button type="button" aria-expanded={notificationsOpen} onClick={onNotifications}>Notifications</button><span className={styles.avatar}>SL</span></header>
      <aside className={styles.sidebar}><b>HubSpot</b>{navItems.map((item) => <button type="button" key={item}>{item}</button>)}<span className={styles.navGroup}>Marketing</span><button type="button">Forms</button><span className={styles.navGroup}>Platform</span><button type="button">Workflows</button><button type="button">More</button></aside>
      <main className={styles.shellMain}><TicketShell><EmptyTickets layout="board" /></TicketShell></main>
      {notificationsOpen && <div className={styles.overlayDrawer}><h2>Notifications</h2><p>You don’t have any unread notifications</p></div>}
    </div>
  );
}

function InboxEmpty({ initialState = 'closed' }: { initialState?: string }) {
  const [more, setMore] = useState(initialState === 'more');
  const [actions, setActions] = useState(initialState === 'actions');
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.inbox}>
      <div className={styles.inboxNav}>
        <h2>Inbox</h2>
        {['Unassigned 0', 'Assigned to me 0', 'All open 0'].map((item) => <button type="button" key={item}>{item}</button>)}
        <button type="button" aria-expanded={more} onClick={() => setMore(!more)}>{more ? 'Less' : 'More'}</button>
        {more && <div className={styles.submenu}>{['Email', 'Calls', 'All closed', 'Sent', 'Spam', 'Trash'].map((item) => <button type="button" key={item}>{item}</button>)}</div>}
        <button type="button" aria-expanded={actions} onClick={() => setActions(!actions)}>Actions ▾</button>
        {actions && <div className={styles.menu}><button type="button" onClick={() => setNotice('Availability management is outside this local fixture.')}>Manage team availability</button><button type="button" onClick={() => setNotice('Channel connection is disabled in this local fixture.')}>Connect a channel</button></div>}
      </div>
      <div className={styles.inboxMain}><span className={styles.bigIcon}>✉</span><h3>Connect a channel to start conversations</h3><p>Choose a channel when you are ready to configure the provider.</p><div className={styles.channelGrid}>{['Team email', 'Chat', 'Forms', 'Calling', 'Facebook Messenger', 'WhatsApp'].map((item) => <button type="button" onClick={() => setNotice(`${item} setup is disabled in this fictional fixture.`)} key={item}>{item}</button>)}</div>{notice && <GuardNotice message={notice} />}</div>
    </div>
  );
}

function TicketMenus({ initialState = 'objects' }: { initialState?: string }) {
  const [menu, setMenu] = useState(initialState);
  const [notice, setNotice] = useState('');
  return <TicketShell active="All tickets"><div className={styles.menuDemo}><div className={styles.toolbar}><button type="button" aria-expanded={menu === 'objects'} onClick={() => setMenu(menu === 'objects' ? 'closed' : 'objects')}>Tickets ▾</button><button type="button" aria-expanded={menu === 'add'} onClick={() => setMenu(menu === 'add' ? 'closed' : 'add')}>Add tickets ▾</button></div>{menu === 'objects' && <div className={styles.largeMenu}><input aria-label="Search objects" placeholder="Search" />{['Calls', 'Companies', 'Contacts', 'Deals', 'Invoices', 'Notes', 'Orders', 'Tasks', 'Tickets'].map((item) => <button type="button" onClick={() => setNotice('Object switching is disabled in this fictional fixture.')} key={item}>{item}</button>)}</div>}{menu === 'add' && <div className={styles.menu}><button type="button" onClick={() => setNotice('Ticket creation is disabled in this fictional fixture.')}>Create new</button><button type="button" onClick={() => setNotice('Import is disabled in this fictional fixture.')}>Import</button></div>}{notice && <GuardNotice message={notice} />}</div></TicketShell>;
}

function ViewSettings({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  return <TicketShell active="My open tickets"><TicketToolbar onGuard={() => undefined} /><EmptyTickets layout="table" />{open ? <aside className={styles.drawer} aria-label="View settings"><div className={styles.drawerHead}><h2>View settings</h2><button type="button" aria-label="Close view settings" onClick={() => setOpen(false)}>×</button></div><label>Name<input value="My open tickets" disabled readOnly /></label><fieldset><legend>View type</legend><label><input type="radio" checked readOnly /> Table view</label><label><input type="radio" readOnly /> Board view</label></fieldset><h3>Data</h3>{['Pipeline', 'Filters', 'Sort by'].map((item) => <button type="button" key={item}>{item}</button>)}<h3>Sharing</h3><button type="button">Copy link to view</button><button type="button" disabled>Manage sharing</button><button type="button">Export</button><h3>Actions</h3><button type="button" disabled>Save changes</button><button type="button" disabled>Reset to last save</button><button type="button">Clone to new view</button><button type="button" disabled>Delete view</button></aside> : <button className={styles.reopen} type="button" onClick={() => setOpen(true)}>Open view settings</button>}</TicketShell>;
}

function TicketFilters({ initialState = 'advanced' }: { initialState?: string }) {
  const [panel, setPanel] = useState(initialState);
  const options: Record<string, string[]> = {
    priority: ['Low — A low priority ticket', 'Medium — A medium priority ticket', 'High — A high priority ticket', 'Urgent — An urgent priority ticket'],
    date: ['is', 'is equal to', 'is before', 'is after', 'is between', 'is more than', 'is less than', 'is known', 'is unknown'],
    pipeline: ['All Pipelines', 'Support Pipeline'],
  };
  return <TicketShell active="My open tickets"><div className={styles.toolbar}><button type="button" onClick={() => setPanel('advanced')}>Advanced filters</button><button type="button" onClick={() => setPanel('priority')}>Priority</button><button type="button" onClick={() => setPanel('date')}>Create date</button><button type="button" onClick={() => setPanel('pipeline')}>Support Pipeline</button></div>{panel === 'advanced' ? <aside className={styles.filterPanel}><h2>All filters</h2><h3>Filter by associated object</h3><button type="button">Add filter</button><div className={styles.and}>AND</div><h3>Advanced filters</h3><div className={styles.rule}><b>Group 1</b><p>Ticket status is none of All closed</p><button type="button">and Add filter</button><button type="button">or Add filter group</button></div></aside> : <div className={styles.optionPanel}><b>{panel === 'priority' ? 'is any of' : panel === 'date' ? 'Create date operator' : 'Pipeline'}</b>{options[panel]?.map((item) => <label key={item}><input type={panel === 'priority' ? 'checkbox' : 'radio'} name={panel} /> {item}</label>)}</div>}<EmptyTickets layout="table" /></TicketShell>;
}

function AutomationDrawer({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  return <TicketShell>{open ? <aside className={styles.drawer}><div className={styles.drawerHead}><h2>Automate Tickets</h2><button type="button" aria-label="Close automation" onClick={() => setOpen(false)}>×</button></div><p>Automate what happens when a Ticket is created or updated</p><button className={styles.primary} type="button" onClick={() => setNotice('Workflow creation is plan-gated and disabled in this fixture.')}>🔒 Automate your workflows</button><p className={styles.muted}>Suggested automations available at Starter</p><h3>Suggested for you</h3>{['Notify sales team when a new contact is created', 'Set lead status to New when a new contact is created', 'Send a follow-up email to new contacts'].map((item) => <button type="button" disabled key={item}>{item}</button>)}{notice && <GuardNotice message={notice} />}</aside> : <button className={styles.reopen} type="button" onClick={() => setOpen(true)}>Open automation</button>}<EmptyTickets layout="board" /></TicketShell>;
}

function UnassignedView({ initialState = 'board' }: { initialState?: string }) {
  const [layout, setLayout] = useState<'board' | 'table'>(initialState === 'table' ? 'table' : 'board');
  const [notice, setNotice] = useState('');
  return <TicketShell><TicketToolbar onGuard={setNotice} /><div className={styles.layoutSwitch} role="radiogroup" aria-label="Ticket layout"><button type="button" role="radio" aria-checked={layout === 'board'} onClick={() => setLayout('board')}>Board view</button><button type="button" role="radio" aria-checked={layout === 'table'} onClick={() => setLayout('table')}>Table view</button></div>{notice && <GuardNotice message={notice} />}<EmptyTickets layout={layout} /></TicketShell>;
}

function Notifications({ initialState = 'unread' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [tab, setTab] = useState(initialState === 'all' || initialState === 'trash' ? initialState : 'unread');
  if (!open) return <button type="button" onClick={() => setOpen(true)}>Open Notifications</button>;
  return <aside className={styles.notificationDrawer}><div className={styles.drawerHead}><h2>Notifications</h2><button type="button" aria-label="Close notifications" onClick={() => setOpen(false)}>×</button></div><div className={styles.tabs} role="tablist">{['unread', 'all', 'trash'].map((item) => <button type="button" role="tab" aria-selected={tab === item} onClick={() => setTab(item)} key={item}>{item === 'unread' ? 'Unread (0)' : item[0].toUpperCase() + item.slice(1)}</button>)}</div>{tab === 'unread' ? <div className={styles.empty}><h3>You don’t have any unread notifications</h3><h2>Get notified when a member of your team mentions you</h2><p>Here, you’ll get real-time notifications whenever someone mentions you, assigns a contact to you, or when there’s a new unassigned email.</p><button type="button">Invite your team</button></div> : <GuardNotice message={`${tab === 'all' ? 'All' : 'Trash'} contents were not observed. This tab is a local boundary state.`} />}</aside>;
}

function GlobalCreate({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  return <div className={styles.actionStage}><button className={styles.primary} type="button" aria-expanded={open} onClick={() => setOpen(!open)}>Create new ▾</button>{open && <div className={styles.menu} aria-label="Create new menu">{['Contact', 'Company', 'Deal', 'Ticket', 'Task'].map((item) => <button type="button" key={item} onClick={() => setNotice(`${item} creation is disabled in this fictional fixture.`)}>{item}</button>)}</div>}{notice && <GuardNotice message={notice} />}</div>;
}

function ContextualHelp({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  if (!open) return <div className={styles.actionStage}><button type="button" onClick={() => setOpen(true)}>Open Help Center</button></div>;
  return <aside className={styles.helpPanel} aria-label="Help Center"><div className={styles.drawerHead}><h2>Help Center</h2><button type="button" aria-label="Close Help Center" onClick={() => setOpen(false)}>×</button></div><label className={styles.helpSearch}>Search the Academy<input placeholder="Search HubSpot Academy" /></label><h3>Recommended for this page</h3>{['Set up and manage ticket pipelines · 4 min', 'Create and manage tickets · 6 min', 'Route tickets to your team · 5 min'].map((item) => <button type="button" key={item} onClick={() => setNotice('Academy content was not opened. This fictional fixture stays local.')}>{item}</button>)}<h3>Contact support</h3><button type="button" onClick={() => setNotice('No support question was submitted.')}>Ask a question</button><button type="button" onClick={() => setNotice('No support chat was started.')}>Start a chat</button>{notice && <GuardNotice message={notice} />}</aside>;
}

function MarketplaceMenu({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  const items = ['HubSpot Marketplace', 'Connected Apps', 'Marketplace Downloads', 'Added Agents'];
  return <div className={styles.actionStage}><button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>Marketplace ▾</button>{open && <div className={styles.largeMenu} aria-label="Marketplace menu">{items.map((item) => <button type="button" key={item} onClick={() => setNotice(`${item} was not opened. This fictional fixture has no provider navigation.`)}>{item}</button>)}</div>}{notice && <GuardNotice message={notice} />}</div>;
}

function BreezeAssistant({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [message, setMessage] = useState('');
  const [notice, setNotice] = useState('');
  if (!open) return <div className={styles.actionStage}><button type="button" onClick={() => setOpen(true)}>Open Breeze Assistant</button></div>;
  const guard = (text: string) => setNotice(text);
  return <div className={styles.breeze}><aside className={styles.breezeNav}><div className={styles.drawerHead}><b>Breeze Assistant</b><button type="button" aria-label="Close Breeze Assistant" onClick={() => setOpen(false)}>×</button></div>{['New chat', 'Chats', 'Artifacts', 'Projects', 'Memories', 'Prompts'].map((item) => <button type="button" key={item} onClick={() => guard(`${item} is a fictional local navigation state.`)}>{item}</button>)}<p className={styles.muted}>No recent chats</p></aside><main className={styles.breezeMain}><h2>How can I help, Avery?</h2><p>Try a ticket-aware prompt</p><div className={styles.suggestionGrid}>{['Summarize this ticket', 'Create a follow-up task', 'How do I route this ticket?', 'Find related meetings'].map((item) => <button type="button" key={item} onClick={() => guard('Assistant suggestions are display-only. No prompt was sent.')}>{item}</button>)}</div><label className={styles.composer}>Ask Breeze Assistant<textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ask about this ticket" /><span><button type="button" onClick={() => guard('Tools were not opened in the provider.')}>Tools</button><button type="button" onClick={() => guard('Dictation was not started.')}>Dictate</button><button className={styles.primary} type="button" disabled={!message.trim()} onClick={() => guard('No assistant message was sent. The typed text remains local.')}>Send</button></span></label>{notice && <GuardNotice message={notice} />}<small>AI-generated content may be inaccurate.</small></main></div>;
}

function CallingGate({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  if (!open) return <div className={styles.actionStage}><button type="button" onClick={() => setOpen(true)}>Open calling</button></div>;
  return <section className={styles.callingGate} aria-label="Calling access gate"><div className={styles.drawerHead}><h2>Make a call</h2><button type="button" aria-label="Close calling" onClick={() => setOpen(false)}>×</button></div><div className={styles.callIcon}>☎</div><h3>Unlock calling in HubSpot</h3><p>Calling access depends on the account plan and setup. This fixture does not place calls.</p><button type="button" onClick={() => setNotice('The calling provider selector is local-only.')}>Calling provider: HubSpot ▾</button><button className={styles.primary} type="button" onClick={() => setNotice('The upgrade destination was not opened.')}>Learn how to unlock calling</button>{notice && <GuardNotice message={notice} />}</section>;
}

function CollapsibleTicketHeader({ initialState = 'expanded' }: { initialState?: string }) {
  const [expanded, setExpanded] = useState(initialState !== 'collapsed');
  const [notice, setNotice] = useState('');
  return <div className={styles.ticketShell}>{expanded ? <><div className={styles.ticketHead}><h2>Tickets⌄</h2><div><button type="button" onClick={() => setNotice('Automation remains a fictional local state.')}>Automate</button><button className={styles.primary} type="button" onClick={() => setNotice('Ticket creation is disabled in this fictional fixture.')}>Add tickets ▾</button><button type="button" aria-label="Collapse ticket header" onClick={() => setExpanded(false)}>⌃</button></div></div><div className={styles.tabs} role="tablist" aria-label="Pinned ticket views">{['All tickets', 'My open tickets', 'Unassigned tickets'].map((label) => <button type="button" role="tab" aria-selected={label === 'Unassigned tickets'} key={label}>{label}</button>)}</div></> : <div className={styles.compactHeader}><button type="button" aria-expanded="true" onClick={() => setNotice('The selected view menu is a fictional local disclosure.')}>Unassigned tickets ▾</button><button type="button" aria-label="Expand ticket header" onClick={() => setExpanded(true)}>⌄</button></div>}<TicketToolbar onGuard={setNotice} /><div className={styles.layoutSwitch}><button type="button">Board view</button><button type="button">Table view</button></div>{notice && <GuardNotice message={notice} />}<EmptyTickets layout="board" /></div>;
}

function CompactViewSelector({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('');
  const views = ['All tickets', 'My open tickets', 'Unassigned tickets'].filter((view) => view.toLowerCase().includes(query.toLowerCase()));
  return <div className={styles.ticketShell}><div className={styles.compactHeader}><button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>Unassigned tickets ▾</button><button type="button">Expand header</button></div>{open && <div className={styles.savedViewMenu}><label>Search pinned views<input value={query} onChange={(event) => setQuery(event.target.value)} /></label>{views.map((view) => <button type="button" key={view} onClick={() => setNotice('View switching was not executed in the provider. This selection stays local.')}>{view}</button>)}<button type="button" onClick={() => setNotice('The All views destination was not opened.')}>All views</button></div>}{notice && <GuardNotice message={notice} />}<TicketToolbar onGuard={setNotice} /><EmptyTickets layout="board" /></div>;
}

function NavigationManager({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  if (!open) return <div className={styles.actionStage}><button type="button" onClick={() => setOpen(true)}>Manage navigation</button></div>;
  return <section className={styles.navigationGuide} aria-label="Manage navigation"><div className={styles.drawerHead}><h2>Manage navigation</h2><button type="button" aria-label="Close navigation manager" onClick={() => setOpen(false)}>×</button></div><div className={styles.guideActions}><button type="button" onClick={() => setNotice('Customization help was not opened in the provider.')}>How to customize</button><button type="button" onClick={() => setNotice('Navigation switching was not started.')}>Switch navigation</button></div><div className={styles.videoPlaceholder} aria-label="Embedded HubSpot navigation video">▶</div><div className={styles.tip}><b>Tip</b><p>Organize your tools with groups. Open a tool menu, then choose Create new group.</p></div>{notice && <GuardNotice message={notice} />}</section>;
}

function TicketStatusDetails({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [name, setName] = useState('New');
  const [description, setDescription] = useState('');
  if (!open) return <div className={styles.actionStage}><button type="button" onClick={() => setOpen(true)}>Open New status details</button></div>;
  const colors = ['#141414', '#AC0020', '#C93700', '#F7C03E', '#00823A', '#007C7D', '#016DE1', '#7D53E9', '#D20688', '#EBEBEB', '#FBDDD8', '#FBDDD2', '#FBEECE', '#DAEFE1', '#CDF8F5', '#D0E8F5', '#E5E1FA', '#FBDBE9'];
  return <aside className={styles.statusPanel} aria-label="Ticket status details"><h2>Sort by</h2><div className={styles.sortRow}><button type="button">Create date ▾</button><label><input type="radio" checked readOnly /> Most recent</label><label><input type="radio" readOnly /> Oldest</label></div><h3>Edit status details</h3><GuardNotice message="Any pipeline status changes made here will apply across HubSpot." /><label>Status name<input value={name} onChange={(event) => setName(event.target.value)} /></label><label>Status description<textarea value={description} onChange={(event) => setDescription(event.target.value)} /></label><fieldset><legend>Status color</legend><div className={styles.colorGrid}>{colors.map((color) => <label key={color} title={color} style={{ backgroundColor: color }}><input type="radio" name="status-color" checked={color === '#016DE1'} readOnly /><span className="sr-only">{color}</span></label>)}</div></fieldset><div className={styles.panelActions}><button type="button" disabled>Save</button><button type="button" onClick={() => setOpen(false)}>Cancel</button></div><p className={styles.muted}>Editing is local. Provider Save enablement and persistence were not observed.</p></aside>;
}

function TicketViewsManager({ initialState = 'all' }: { initialState?: string }) {
  const [state, setState] = useState(initialState === 'defaults' ? 'defaults' : 'all');
  const [notice, setNotice] = useState('');
  return <section className={styles.settingsFrame}>{state === 'all' ? <><div className={styles.settingsHead}><h2>All Views</h2><button type="button" onClick={() => setNotice('Back navigation stays inside this fictional fixture.')}>Back</button></div><div className={styles.settingsTabs}><button type="button">All views</button><button type="button" onClick={() => setState('defaults')}>Default views</button></div><div className={styles.settingsFilters}><input aria-label="Search views" placeholder="Search views" /><button type="button">Tickets ▾</button><button type="button">Owner ▾</button><button type="button">Clear All</button><button type="button">Standard views</button></div><div className={styles.empty}><h3>No matches for the current filters.</h3><p>Expecting to see something different? Try again in a few seconds as the system catches up.</p></div></> : <><div className={styles.settingsHead}><h2>Manage Views</h2><button type="button" disabled>Save</button></div><div className={styles.settingsGrid}><section><h3>Standard Views</h3>{['All tickets', 'My open tickets', 'Unassigned tickets'].map((view) => <label key={view}><input type="checkbox" checked readOnly /> {view}</label>)}<h3>Custom Views</h3><input aria-label="Search custom views" placeholder="Search" /></section><section><h3>Tickets</h3><div className={styles.tabs}>{['All tickets', 'My open tickets', 'Unassigned tickets'].map((view) => <button type="button" key={view} onClick={() => setNotice('Pinned-view changes are disabled in this fictional fixture.')}>{view}</button>)}</div><div className={styles.tip}><b>Note</b><p>Default pinned views apply only to users who have not customized their own views.</p></div></section></div><button type="button" onClick={() => setState('all')}>Return to All Views</button></>}{notice && <GuardNotice message={notice} />}</section>;
}

function TicketObjectSetup() {
  const [notice, setNotice] = useState('');
  const guard = (label: string) => setNotice(`${label} editing was not opened. This fixture is local-only.`);
  return <section className={styles.settingsFrame}><h2>Tickets</h2><div className={styles.settingsTabs}>{['Setup', 'Pipelines', 'Record Customization', 'Preview Customization', 'Index Customization'].map((tab) => <button type="button" key={tab}>{tab}</button>)}</div><p>Where customer questions and support requests are tracked and resolved.</p><div className={styles.cardGrid}>{[['Properties','Manage the information collected about Tickets.'],['Associations','Manage relationships between Tickets and other objects.'],['Creating Tickets',"Customize the 'Create Ticket' form."]].map(([title, copy]) => <button type="button" className={styles.configCard} key={title} onClick={() => guard(title)}><b>{title}</b><span>{copy}</span></button>)}</div><h3>Automation</h3><label className={styles.settingRow}><input type="checkbox" checked readOnly /><span><b>Associate Ticket to a Contact&apos;s Primary Company</b><small>When a Ticket is associated to a Contact, also associate the Contact&apos;s primary Company if one exists.</small></span></label>{notice && <GuardNotice message={notice} />}</section>;
}

const pipelineStages = [
  ['New', '#016DE1', 'Open', '1'],
  ['Waiting on contact', '#F7C03E', 'Open', '2'],
  ['Waiting on us', '#C93700', 'Open', '3'],
  ['Closed', '#EBEBEB', 'Closed', '4'],
];

function TicketPipelineSettings({ initialState = 'overview' }: { initialState?: string }) {
  const [state, setState] = useState(initialState === 'configure' ? 'configure' : 'overview');
  const [notice, setNotice] = useState('');
  if (state === 'overview') return <section className={styles.settingsFrame}><div className={styles.settingsHead}><h2>Ticket pipelines</h2><button type="button" disabled>Create pipeline</button></div><fieldset><legend>Set pipeline display colors</legend>{['Text (no color)', 'Text with colored dot', 'Text in colored badge'].map((label, index) => <label key={label}><input type="radio" checked={index === 2} readOnly /> {label}</label>)}</fieldset><div className={styles.configTable} role="table" aria-label="Pipeline overview"><b>Pipeline</b><b>Description</b><b>Color</b><b>Stages</b><button type="button" onClick={() => setState('configure')}>Support Pipeline</button><span>--</span><span>#EBEBEB</span><span>4</span></div></section>;
  return <section className={styles.settingsFrame}><div className={styles.settingsHead}><h2>Support Pipeline</h2><button type="button" onClick={() => setState('overview')}>Back to Pipelines</button></div><div className={styles.settingsTabs}><button type="button">Configure</button><button type="button" onClick={() => setNotice('Pipeline automation was not opened.')}>Automate</button></div><h3>Configure pipeline stages</h3><div className={styles.stageTable} role="table" aria-label="Pipeline stages"><b>Status</b><b>Color</b><b>Type</b><b>ID</b>{pipelineStages.flatMap(([name, color, type, id]) => [<button type="button" key={`${name}-name`} onClick={() => setNotice('Stage editing is disabled in this fictional fixture.')}>{name}</button>,<span key={`${name}-color`}>{color}</span>,<span key={`${name}-type`}>{type}</span>,<span key={`${name}-id`}>{id}</span>])}</div><button type="button" onClick={() => setNotice('Adding a status is disabled in this fictional fixture.')}>Add status</button>{notice && <GuardNotice message={notice} />}</section>;
}

function TicketPipelineActions({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  return <section className={styles.settingsFrame}><h2>Ticket pipelines</h2><div className={styles.configTable} role="table" aria-label="Pipeline action menu"><b>Pipeline</b><b>Color</b><b>Stages</b><b>Actions</b><span>Support Pipeline</span><span>#EBEBEB</span><span>4</span><div><button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>Actions for Support Pipeline</button>{open && <div className={styles.menu} aria-label="Support Pipeline actions"><button type="button" disabled>Delete</button></div>}</div></div><p className={styles.muted}>Delete was disabled for the portal&apos;s only pipeline.</p></section>;
}

function TicketStageTypeMenu({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  return <section className={styles.settingsFrame}><h2>Configure pipeline stages</h2><div className={styles.stageTable} role="table" aria-label="Stage type action"><b>Status</b><b>Color</b><b>Open or closed</b><b>Status ID</b><span>New</span><span>#016DE1</span><div><button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>Open ▾</button>{open && <div className={styles.menu} role="listbox" aria-label="Open or closed"><button type="button" role="option" aria-selected="true">Open</button><button type="button" role="option" aria-selected="false" onClick={() => setNotice('Changing the stage type is disabled in this fictional fixture.')}>Closed</button></div>}</div><span>1</span></div>{notice && <GuardNotice message={notice} />}<p className={styles.muted}>The options were observed. No stage type was changed.</p></section>;
}

function CustomizationInventory({ title, copy, onGuard }: { title: string; copy: string; onGuard: (message: string) => void }) {
  return <section className={styles.settingsFrame}><h2>{title}</h2><p>{copy}</p><div className={styles.settingsHead}><input aria-label="Search by view name" placeholder="Search by view name" /><button type="button" onClick={() => onGuard('Team-view creation is disabled in this fictional fixture.')}>Create team view</button></div><div className={styles.configTable} role="table" aria-label={`${title} views`}><b>View name</b><b>Assigned to</b><b>Last updated</b><b>Actions</b><button type="button" onClick={() => onGuard('The layout editor was not opened.')}>Default view</button><span>All unassigned teams and users</span><span>--</span><button type="button" onClick={() => onGuard('Row actions were not opened.')}>Actions ▾</button></div></section>;
}

function TicketRecordCustomization() {
  const [notice, setNotice] = useState('');
  return <><CustomizationInventory title="Record Customization" copy="Create views to customize the layout and content of Ticket records." onGuard={setNotice} />{notice && <GuardNotice message={notice} />}</>;
}

function TicketPreviewCustomization({ initialState = 'views' }: { initialState?: string }) {
  const [cards, setCards] = useState(initialState === 'cards');
  const [notice, setNotice] = useState('');
  if (!cards) return <><CustomizationInventory title="Preview Customization" copy="Customize the preview panel for Ticket records." onGuard={setNotice} /><button className={styles.reopen} type="button" onClick={() => setCards(true)}>Update preview cards</button>{notice && <GuardNotice message={notice} />}</>;
  return <section className={styles.settingsFrame}><div className={styles.settingsHead}><h2>Update preview cards</h2><button type="button" aria-label="Close preview cards" onClick={() => setCards(false)}>×</button></div><div className={styles.cardGrid}><button type="button" className={styles.configCard} disabled><b>Edit Ticket associations card</b><span>Choose properties for associated Tickets.</span></button><button type="button" className={styles.configCard} onClick={() => setNotice('The property-list editor was not opened.')}><b>Edit Ticket property list</b><span>Choose properties shown in previews.</span></button></div>{notice && <GuardNotice message={notice} />}</section>;
}

function TicketIndexCustomization({ initialState = 'landing' }: { initialState?: string }) {
  const [defaults, setDefaults] = useState(initialState === 'defaults');
  const [notice, setNotice] = useState('');
  if (!defaults) return <section className={styles.settingsFrame}><h2>Customize Index Page</h2><div className={styles.cardGrid}><button type="button" className={styles.configCard} onClick={() => setNotice('All Views was observed separately and is not opened here.')}><b>All Views</b><span>See and take action on all views in one place.</span></button><button type="button" className={styles.configCard} onClick={() => setDefaults(true)}><b>Default view customization</b><span>Set the account-wide default tab configuration.</span></button></div>{notice && <GuardNotice message={notice} />}</section>;
  return <section className={styles.settingsFrame}><div className={styles.settingsHead}><h2>Manage Views</h2><button type="button" disabled>Save</button></div><div className={styles.settingsGrid}><section><h3>Standard Views</h3>{['All tickets', 'My open tickets', 'Unassigned tickets'].map((view) => <label key={view}><input type="checkbox" checked readOnly /> {view}</label>)}<h3>Custom Views</h3><input aria-label="Search custom views" placeholder="Search" /></section><section><h3>Tickets</h3><div className={styles.tabs}>{['All tickets', 'My open tickets', 'Unassigned tickets'].map((view) => <button type="button" key={view} onClick={() => setNotice('Default view changes are disabled in this fictional fixture.')}>{view}</button>)}</div><div className={styles.tip}><b>Note</b><p>These defaults apply only to users who have not customized their own pinned views.</p></div></section></div><button type="button" onClick={() => setDefaults(false)}>Back</button>{notice && <GuardNotice message={notice} />}</section>;
}

function TicketCustomizationViewActions({ initialState = 'record' }: { initialState?: string }) {
  const [open, setOpen] = useState(true);
  const title = initialState === 'preview' ? 'Preview Customization' : 'Record Customization';
  return <section className={styles.settingsFrame}><h2>{title}</h2><div className={styles.settingsHead}><input aria-label="Search by view name" placeholder="Search by view name" /><button type="button" disabled>Create team view 🔒</button></div><div className={styles.configTable} role="table" aria-label={`${title} action menu`}><b>View name</b><b>Assigned to</b><b>Last updated</b><b>Actions</b><span>Default view</span><span>All unassigned teams and users</span><span>--</span><div><button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>Default view actions</button>{open && <div className={styles.menu} aria-label="Default view actions"><button type="button" disabled>Clone view</button><button type="button" disabled>Reset default view</button></div>}</div></div><GuardNotice message="Upgrade to clone the default view to a team view." /></section>;
}

function TicketRecordLayoutEditor({ initialState = 'actions' }: { initialState?: string }) {
  const [menuOpen, setMenuOpen] = useState(initialState === 'actions');
  const [notice, setNotice] = useState('');
  const guard = (action: string) => setNotice(`${action} is disabled in this fictional fixture.`);
  return <section className={styles.editorShell} aria-label="Ticket record page editor"><header className={styles.editorToolbar}><button type="button" onClick={() => guard('Exit')}>Exit</button><button type="button" disabled>Undo</button><button type="button" disabled>Redo</button><div><b>Ticket record page</b><span>Default view</span></div><button type="button" onClick={() => guard('Save')}>Save</button><button type="button" onClick={() => guard('Save and exit')}>Save and exit</button></header><div className={styles.settingsTabs}><button type="button">Edit layout</button><button type="button" onClick={() => guard('Settings')}>Settings</button></div><div className={styles.layoutColumns}><aside><span>Ticket name</span><button type="button" onClick={() => guard('Add card')}>Add card</button><article className={styles.editorCard}><h3>About this ticket</h3><small>About this ticket (default)</small><button type="button" onClick={() => guard('Edit card')}>Edit card</button><button type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>More card actions</button>{menuOpen && <div className={styles.menu} aria-label="More card actions"><button type="button" onClick={() => guard('Set conditional logic')}>Set conditional logic</button><button type="button" onClick={() => guard('Remove card')}>Remove card</button></div>}</article></aside><main><div className={styles.tabs}><button type="button">Activities</button><button type="button" onClick={() => guard('Create new tab')}>Create new tab</button><button type="button" onClick={() => guard('Change tab order')}>Change tab order</button></div><div className={styles.empty}><h3>Your customer activity timeline.</h3><p>This tab is not customizable in the observed editor.</p></div></main><aside>{['Contacts', 'Companies', 'Deals', 'Attachments'].map((card) => <article className={styles.editorCard} key={card}><h3>{card}</h3><small>{card} {card === 'Attachments' ? '' : 'Association card '}(default)</small></article>)}</aside></div>{notice && <GuardNotice message={notice} />}</section>;
}

export function HubspotServicePreview({ variant, initialState, disabled = false }: HubspotServicePreviewProps) {
  const [notice, setNotice] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(initialState === 'notifications');
  if (disabled) return <div className={styles.frame} aria-disabled="true"><GuardNotice message="This fictional fixture is disabled." /></div>;
  let content: React.ReactNode;
  switch (variant) {
    case 'application-shell': content = <ApplicationShell notificationsOpen={notificationsOpen} onNotifications={() => setNotificationsOpen(!notificationsOpen)} />; break;
    case 'inbox-empty': content = <InboxEmpty initialState={initialState} />; break;
    case 'inbox-actions': content = <InboxEmpty initialState={initialState ?? 'actions'} />; break;
    case 'tickets-empty-board': content = <TicketShell active="All tickets"><EmptyTickets layout="board" /></TicketShell>; break;
    case 'tickets-filtered-empty': content = <TicketShell active="My open tickets"><TicketToolbar onGuard={setNotice} />{notice && <GuardNotice message={notice} />}<EmptyTickets layout="table" /></TicketShell>; break;
    case 'ticket-object-add': content = <TicketMenus initialState={initialState} />; break;
    case 'ticket-view-settings': content = <ViewSettings initialState={initialState} />; break;
    case 'ticket-filters': content = <TicketFilters initialState={initialState} />; break;
    case 'ticket-automation': content = <AutomationDrawer initialState={initialState} />; break;
    case 'unassigned-view': content = <UnassignedView initialState={initialState} />; break;
    case 'notifications': content = <Notifications initialState={initialState} />; break;
    case 'global-create': content = <GlobalCreate initialState={initialState} />; break;
    case 'contextual-help': content = <ContextualHelp initialState={initialState} />; break;
    case 'marketplace-menu': content = <MarketplaceMenu initialState={initialState} />; break;
    case 'breeze-assistant': content = <BreezeAssistant initialState={initialState} />; break;
    case 'calling-gate': content = <CallingGate initialState={initialState} />; break;
    case 'ticket-collapsible-header': content = <CollapsibleTicketHeader initialState={initialState} />; break;
    case 'ticket-compact-view-selector': content = <CompactViewSelector initialState={initialState} />; break;
    case 'navigation-manager': content = <NavigationManager initialState={initialState} />; break;
    case 'ticket-status-details': content = <TicketStatusDetails initialState={initialState} />; break;
    case 'ticket-views-manager': content = <TicketViewsManager initialState={initialState} />; break;
    case 'ticket-object-setup': content = <TicketObjectSetup />; break;
    case 'ticket-pipeline-settings': content = <TicketPipelineSettings initialState={initialState} />; break;
    case 'ticket-pipeline-actions': content = <TicketPipelineActions initialState={initialState} />; break;
    case 'ticket-stage-type-menu': content = <TicketStageTypeMenu initialState={initialState} />; break;
    case 'ticket-record-customization': content = <TicketRecordCustomization />; break;
    case 'ticket-preview-customization': content = <TicketPreviewCustomization initialState={initialState} />; break;
    case 'ticket-index-customization': content = <TicketIndexCustomization initialState={initialState} />; break;
    case 'ticket-customization-view-actions': content = <TicketCustomizationViewActions initialState={initialState} />; break;
    case 'ticket-record-layout-editor': content = <TicketRecordLayoutEditor initialState={initialState} />; break;
  }
  return <div className={styles.frame}>{content}</div>;
}

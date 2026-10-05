import { useState, type CSSProperties } from 'react';
import './zendesk-screens.css';

export type ScreenKind =
  | 'search-results'
  | 'work-queues'
  | 'knowledge-history'
  | 'arrange-articles'
  | 'themes'
  | 'help-center-settings'
  | 'team-members'
  | 'messaging-channels'
  | 'ai-agents'
  | 'agent-workspace'
  | 'ticket-forms'
  | 'support-apps'
  | 'it-assets'
  | 'admin-launchpad'
  | 'admin-home'
  | 'account-subscription';
export interface ScreenProps {
  kind?: ScreenKind;
  initialOpen?: boolean;
  empty?: boolean;
  disabled?: boolean;
}

const screenTitles: Record<ScreenKind, string> = {
  'search-results': 'Search',
  'work-queues': 'Agent Home',
  'knowledge-history': 'History',
  'arrange-articles': 'Arrange articles',
  themes: 'Themes',
  'help-center-settings': 'Help center settings',
  'team-members': 'Team members',
  'messaging-channels': 'Messaging',
  'ai-agents': 'AI agents',
  'agent-workspace': 'Agent Workspace',
  'ticket-forms': 'Ticket forms',
  'support-apps': 'Zendesk Support apps',
  'it-assets': 'IT asset management',
  'admin-launchpad': 'Launchpad',
  'admin-home': 'Admin home',
  'account-subscription': 'Subscription',
};

const adminScreens: Partial<
  Record<
    ScreenKind,
    {
      section: string;
      description: string;
      actions: string[];
      columns?: string[];
      rows?: string[][];
    }
  >
> = {
  'messaging-channels': {
    section: 'Channels',
    description: 'Embed messaging in websites and apps and connect social channels.',
    actions: ['Manage settings', 'Add channel'],
    columns: ['Name', 'Channel', 'Status', 'Response type'],
    rows: [['Northstar Help', 'Web Widget', 'Active', 'AI agent']],
  },
  'ai-agents': {
    section: 'AI',
    description: 'Automatically resolve customer requests using generative AI capabilities.',
    actions: ['View automation potential', 'Create AI agent'],
    columns: ['Name', 'Channels', 'Row actions'],
    rows: [['Northstar assistant', 'Web Widget', 'More']],
  },
  'agent-workspace': {
    section: 'Workspaces',
    description: 'Agent Workspace brings tools, conversations and channels into one place.',
    actions: ['Learn about Agent Workspace'],
    rows: [['Status', 'On']],
  },
  'ticket-forms': {
    section: 'Objects and rules',
    description: 'Ticket forms organize fields shown to agents and requesters.',
    actions: ['Add form'],
    columns: ['Name', 'Status', 'Updated'],
    rows: [['General support', 'Active', 'Today']],
  },
  'support-apps': {
    section: 'Apps and integrations',
    description: 'Manage apps installed for Zendesk Support.',
    actions: ['Upload private app', 'Marketplace'],
    columns: ['App', 'Status', 'Location'],
    rows: [['Customer context', 'Enabled', 'Ticket sidebar']],
  },
  'it-assets': {
    section: 'IT assets',
    description: 'Centralize and update an inventory of assets used by the team.',
    actions: ['Turn on IT asset management'],
    rows: [['Status', 'Inactive']],
  },
  'admin-launchpad': {
    section: 'Launchpad',
    description: 'Set up plan essentials and follow the account go-live checklist.',
    actions: ['Go-live checklist', 'AI tools in my plan', 'Using test tickets'],
    rows: [
      ['Account basics', '1 of 4 completed'],
      ['Channels', 'Not started'],
      ['Workflows', 'Not started'],
    ],
  },
  'admin-home': {
    section: 'Home',
    description:
      'Admin Center home collects recent setup guidance and product administration entry points.',
    actions: ['Explore account', 'Open help center'],
    rows: [
      ['Get started', 'Account setup'],
      ['Products', 'Support and Knowledge'],
    ],
  },
  'account-subscription': {
    section: 'Account',
    description: 'Subscription summarizes the current plan, trial status and billing entry points.',
    actions: ['Compare plans', 'Buy your trial'],
    columns: ['Product', 'Plan', 'Details'],
    rows: [['Zendesk Suite', 'Professional', 'Trial']],
  },
};

export function ZendeskScreensPreview({
  kind = 'search-results',
  initialOpen = false,
  empty = false,
  disabled = false,
}: ScreenProps) {
  const adminScreen = adminScreens[kind];
  const [drawer, setDrawer] = useState(initialOpen ? 'Filters' : '');
  const [menu, setMenu] = useState('');
  const [queue, setQueue] = useState("CC'd");
  const [search, setSearch] = useState('');
  const [notice, setNotice] = useState('');
  const [columns, setColumns] = useState([
    'Status',
    'ID',
    'Subject',
    'Requested',
    'Updated',
    'Requester',
    'Assignee',
    'Group',
  ]);
  const [themeTab, setThemeTab] = useState('Live theme');
  const action = (label: string) =>
    setNotice(`${label} is shown as a local preview. No Zendesk change was made.`);
  const button = (label: string, onClick: () => void, active = false) => (
    <button
      key={label}
      type="button"
      aria-pressed={active || undefined}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
  return (
    <section className="zd-screen" aria-label={`Zendesk ${screenTitles[kind]} preview`}>
      <div className="zd-screen-label">Authenticated structure · fictional local data</div>
      <header className="zd-screen-top">
        <strong>Zendesk</strong>
        <span>
          {kind.startsWith('knowledge') ||
          ['arrange-articles', 'themes', 'help-center-settings'].includes(kind)
            ? 'Knowledge'
            : kind === 'team-members'
              ? 'Admin center'
              : 'Support'}
        </span>
        <span className="zd-screen-spacer" />
        {button('Search', () => setMenu(menu === 'Search' ? '' : 'Search'))}
        {button('Notifications', () => setMenu(menu === 'Notifications' ? '' : 'Notifications'))}
      </header>
      <div className="zd-screen-layout">
        <aside className="zd-screen-rail" aria-label="Product rail">
          <span>⌂</span>
          <span>▤</span>
          <span>☷</span>
          <span>⚙</span>
        </aside>
        <aside className="zd-screen-sidebar" aria-label={`${screenTitles[kind]} navigation`}>
          <strong>{screenTitles[kind]}</strong>
          {adminScreen && (
            <>
              <h4>{adminScreen.section}</h4>
              {[screenTitles[kind], 'Settings', 'Overview'].map((x, index) =>
                button(x, () => setMenu(x), index === 0)
              )}
            </>
          )}
          {kind === 'search-results' && (
            <>
              <h4>Filter by</h4>
              {[
                'Tickets 1',
                'Articles 0',
                'Users 0',
                'Organizations 0',
                'Side conversations 0',
              ].map((x) => button(x, () => setMenu(x), menu === x))}
              <h4>Saved searches</h4>
              <p>No saved searches</p>
            </>
          )}
          {kind === 'work-queues' &&
            ['Assigned to me', "CC'd", 'Following', 'Last 30 days'].map((x) =>
              button(x, () => setQueue(x), queue === x)
            )}
          {kind === 'knowledge-history' &&
            ['All articles', 'Published', 'Drafts', 'AI-generated', 'Archived', 'History'].map(
              (x) => button(x, () => setMenu(x), x === 'History')
            )}
          {kind === 'team-members' && (
            <>
              <h4>Team</h4>
              {['Team members', 'Roles', 'Groups'].map((x) =>
                button(x, () => setMenu(x), x === 'Team members')
              )}
              <h4>Configuration</h4>
              {[
                'User fields',
                'Organization fields',
                'Events',
                'Profiles',
                'End users',
                'Tags',
              ].map((x) => button(x, () => setMenu(x)))}
            </>
          )}
          {kind === 'help-center-settings' &&
            [
              'Content management',
              'External content',
              'Service catalog',
              'Security',
              'Requests',
              'Integrations',
              'Deactivation',
            ].map((x) => button(x, () => setMenu(x)))}
          {kind === 'arrange-articles' && <p>Content · Arrange content</p>}
          {kind === 'themes' && <p>Customize design</p>}
        </aside>
        <main className="zd-screen-main">
          {adminScreen && (
            <>
              <p className="zd-screen-subtitle">Admin center · {adminScreen.section}</p>
              <div className="zd-screen-heading">
                <div>
                  <h2>{screenTitles[kind]}</h2>
                  <p>{adminScreen.description}</p>
                </div>
                <div className="zd-screen-actions">
                  {adminScreen.actions.map((x) => button(x, () => action(x)))}
                </div>
              </div>
              {kind === 'admin-launchpad' && (
                <div className="zd-screen-card">
                  <strong>Set up your plan essentials</strong>
                  <p>1 of 4 completed</p>
                </div>
              )}
              {adminScreen.columns && (
                <div
                  className="zd-screen-table zd-screen-admin-table"
                  style={{ '--zd-columns': adminScreen.columns.length } as CSSProperties}
                  role="table"
                  aria-label={`Fictional ${screenTitles[kind]} data`}
                >
                  <div role="row" className="zd-screen-tablehead">
                    {adminScreen.columns.map((x) => (
                      <span role="columnheader" key={x}>
                        {x}
                      </span>
                    ))}
                  </div>
                  {adminScreen.rows?.map((row, i) => (
                    <div role="row" key={i}>
                      {row.map((x) => (
                        <span key={x}>{x}</span>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              {!adminScreen.columns &&
                adminScreen.rows?.map(([label, value]) => (
                  <div className="zd-screen-card" key={label}>
                    <strong>{label}</strong>
                    <p>{value}</p>
                  </div>
                ))}
            </>
          )}
          {kind === 'search-results' && (
            <>
              <div className="zd-screen-heading">
                <h2>Tickets</h2>
                {button('Actions', () => setMenu(menu === 'Actions' ? '' : 'Actions'))}
              </div>
              <label className="zd-screen-search">
                Search tickets
                <input
                  aria-label="Search tickets"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                />
              </label>
              <div className="zd-screen-actions">
                {button('Filters', () => setDrawer('Filters'))}
                {button('Customize columns', () => setDrawer('Manage columns'))}
              </div>
              <div className="zd-screen-table" role="table" aria-label="Fictional ticket results">
                <div role="row" className="zd-screen-tablehead">
                  {[
                    'Ticket status',
                    'ID',
                    'Subject',
                    'Requested',
                    'Updated',
                    'Requester',
                    'Assignee',
                    'Group',
                  ].map((x) => (
                    <span role="columnheader" key={x}>
                      {x}
                    </span>
                  ))}
                </div>
                {!empty && (
                  <div role="row">
                    <span>Open</span>
                    <span>#1042</span>
                    <span>Help with a team subscription</span>
                    <span>Today</span>
                    <span>Today</span>
                    <span>Morgan Lee</span>
                    <span>Avery Chen</span>
                    <span>Support</span>
                  </div>
                )}
              </div>
              {empty && <p>No matching tickets</p>}
              {menu === 'Actions' && (
                <div role="menu" className="zd-screen-pop">
                  {button('Save', () => action('Save search'))}
                </div>
              )}
            </>
          )}
          {kind === 'work-queues' && (
            <>
              <h2>{queue}</h2>
              <div className="zd-screen-empty">
                <span aria-hidden="true">□</span>
                <h3>
                  {queue === "CC'd"
                    ? "No CC'd work"
                    : queue === 'Following'
                      ? 'No work to follow'
                      : queue === 'Last 30 days'
                        ? 'No completed work'
                        : 'No assigned work'}
                </h3>
                <p>
                  {queue === "CC'd"
                    ? "Work you're CC'd on will appear here."
                    : queue === 'Following'
                      ? "Work you're following will appear here."
                      : queue === 'Last 30 days'
                        ? "Work you've completed will appear here."
                        : 'Your assigned work will appear here.'}
                </p>
              </div>
            </>
          )}
          {kind === 'knowledge-history' && (
            <>
              <h2>History</h2>
              <p className="zd-screen-subtitle">Recent content activity</p>
              {[
                ['Published', 'About the service', 'Body updated'],
                ['Draft', 'Subscription help', 'Created'],
                ['Published', 'Getting started', 'Promoted'],
              ].map(([status, title, event]) => (
                <article className="zd-screen-event" key={title}>
                  <small>{status}</small>
                  <strong>{title}</strong>
                  <span>English (United States) · {event}</span>
                  {button('View revision', () => action('View revision'))}
                </article>
              ))}
            </>
          )}
          {kind === 'arrange-articles' && (
            <>
              <h2>Arrange articles</h2>
              <p>Organize the order of your help center content.</p>
              <h3>Categories (1)</h3>
              <div className="zd-screen-card">
                <span>⋮⋮</span>
                <strong>General information</strong>
                {button('Expand', () => setMenu(menu === 'Category' ? '' : 'Category'))}
              </div>
              {menu === 'Category' && (
                <div className="zd-screen-card">Getting started · Billing</div>
              )}
            </>
          )}
          {kind === 'themes' && (
            <>
              <h2>Themes</h2>
              <div className="zd-screen-actions">
                {['Live theme', 'Theme library'].map((x) =>
                  button(x, () => setThemeTab(x), themeTab === x)
                )}
              </div>
              <h3>{themeTab}</h3>
              <div className="zd-screen-theme">
                <div className="zd-screen-theme-art" aria-hidden="true">
                  <div />
                  <div />
                  <div />
                </div>
                <strong>Help center theme</strong>
                <p>Local fictional preview</p>
                {button('Customize', () => action('Customize theme'))}
              </div>
            </>
          )}
          {kind === 'help-center-settings' && (
            <>
              <h2>Help center settings</h2>
              {[
                'Content management',
                'External content (Early Access Program)',
                'Service catalog',
                'Security',
                'Requests',
                'Integrations',
                'Deactivation',
              ].map((x) => (
                <section className="zd-screen-setting" key={x}>
                  <h3>{x}</h3>
                  <p>Configuration group visible in the authenticated settings screen.</p>
                  {button('View settings', () => setMenu(menu === x ? '' : x))}
                  {menu === x && (
                    <p>Inspect settings here. This preview cannot change the provider.</p>
                  )}
                </section>
              ))}
            </>
          )}
          {kind === 'team-members' && (
            <>
              <div className="zd-screen-heading">
                <div>
                  <h2>Team members</h2>
                  <p>Find and manage team members, from agents to admins.</p>
                </div>
                {button('Actions', () => setMenu(menu === 'Actions' ? '' : 'Actions'))}
                {button('Add team member', () => action('Add team member'))}
              </div>
              <div className="zd-screen-card">
                Seats remaining · Zendesk Suite 4 of 5 · Light agents 100 of 100
              </div>
              <label className="zd-screen-search">
                Search team members
                <input value={search} onChange={(e) => setSearch(e.target.value)} />
              </label>
              {button('Filter', () => setDrawer('Filter team members'))}
              <p>1 team member</p>
              <div className="zd-screen-table" role="table" aria-label="Fictional team members">
                <div role="row" className="zd-screen-tablehead">
                  {['Team member', 'Group', 'Product access', 'Support role', 'Last sign-in'].map(
                    (x) => (
                      <span role="columnheader" key={x}>
                        {x}
                      </span>
                    )
                  )}
                </div>
                <div role="row">
                  <span>Avery Chen</span>
                  <span>Support</span>
                  <span>Support, Knowledge</span>
                  <span>Admin</span>
                  <span>Today</span>
                </div>
              </div>
            </>
          )}
          {menu && !['Actions', 'Category', ...['Live theme', 'Theme library']].includes(menu) && (
            <p className="zd-screen-notice">{menu} selected locally</p>
          )}
          {notice && (
            <p className="zd-screen-notice" role="status">
              {notice}
            </p>
          )}
        </main>
      </div>
      {drawer && (
        <div className="zd-screen-overlay">
          <button
            className="zd-screen-backdrop"
            aria-label="Close drawer"
            onClick={() => setDrawer('')}
          />
          <section className="zd-screen-drawer" role="dialog" aria-label={drawer}>
            <div className="zd-screen-heading">
              <h2>{drawer}</h2>
              {button('Close', () => setDrawer(''))}
            </div>
            {drawer === 'Filters' ? (
              <>
                <p>Refine ticket results</p>
                {[
                  'Status',
                  'Type',
                  'Tags',
                  'Assignee',
                  'Support type',
                  'Updated',
                  'Include closed tickets',
                ].map((x) => (
                  <label key={x}>
                    {x}
                    <input aria-label={x} placeholder={x} />
                  </label>
                ))}
              </>
            ) : drawer === 'Manage columns' ? (
              <>
                <p>Add, remove or reorder columns within ticket results</p>
                <p>{10 - columns.length} of 10 columns remaining</p>
                {columns.map((x) => (
                  <div className="zd-screen-column" key={x}>
                    <span>⋮⋮ {x}</span>
                    {button(`Remove ${x}`, () => setColumns(columns.filter((y) => y !== x)))}
                  </div>
                ))}
                {button('Add column', () => setMenu('Add column'))}
                {menu === 'Add column' && (
                  <div>
                    {['Priority', 'Type'].map((x) =>
                      button(x, () => {
                        setColumns([...columns, x]);
                        setMenu('');
                      })
                    )}
                  </div>
                )}
              </>
            ) : (
              <>
                <p>Filter team members</p>
                <label>
                  Role
                  <input aria-label="Role" />
                </label>
                <label>
                  Group
                  <input aria-label="Group" />
                </label>
              </>
            )}
            <footer>
              {button('Cancel', () => setDrawer(''))}
              {button('Apply', () => {
                setDrawer('');
                setNotice('Filters and columns changed only in this local preview.');
              })}
            </footer>
          </section>
        </div>
      )}
    </section>
  );
}

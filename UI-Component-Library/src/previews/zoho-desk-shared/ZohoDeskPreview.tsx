import { useState } from 'react';
import { zohoDeskComponents, type ZohoDeskKind } from './catalogue';
import styles from './zohoDesk.module.css';

export interface ZohoDeskPreviewProps {
  componentId: string;
  initialState?: string;
  disabled?: boolean;
}

const menuOptions: Record<string, string[]> = {
  'zoho-desk-ticket-view-picker': [
    '★ All Tickets',
    'My Open Tickets',
    'Unassigned Tickets',
    'All Views',
  ],
  'zoho-desk-ticket-layout-menu': [
    '✓ Classic View',
    'Compact View',
    'Table View',
    'Status Mode',
    'Priority Mode',
  ],
  'zoho-desk-ticket-sort-menu': [
    'Due Date',
    '✓ Recent Thread',
    'Modified Time',
    'Created Time',
    'Show Latest First',
  ],
  'zoho-desk-quick-action-menu': [
    'Ticket',
    'Article',
    'Topic',
    'Account',
    'Contact',
    'Report',
    'Task',
    'Event',
  ],
  'zoho-desk-global-search': [
    'All modules',
    'Tickets',
    'Knowledge Base',
    'Accounts',
    'Contacts',
    'Activities',
  ],
  'zoho-desk-editor-insert-menu': [
    'Insert link',
    'Insert HTML',
    'Insert table',
    'Insert horizontal rule',
    'Insert code',
    'Insert quote',
  ],
  'zoho-desk-contact-picker': ['Taylor Reed', 'Northwind Demo', 'taylor@example.test'],
  'zoho-desk-reply-action-menu': ['Reply All', 'Reply', 'Forward'],
  'zoho-desk-ticket-action-menu': [
    'Edit',
    'Follow',
    'Mark as Unread',
    'Mark Spam',
    'Delete',
    'Clone',
  ],
};

function Guard({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.guard} role="status">
      {children}
    </div>
  );
}

function Header({ onSearch, onQuick }: { onSearch: () => void; onQuick: () => void }) {
  return (
    <header className={styles.header}>
      <b className={styles.logo}>Z</b>
      <b>Northwind Demo</b>
      <nav>
        {['Tickets', 'Knowledge Base', 'Community', 'Customers', 'Analytics', 'Activities'].map(
          (item) => (
            <button key={item} type="button">
              {item}
            </button>
          )
        )}
      </nav>
      <button type="button" aria-label="Open global search" onClick={onSearch}>
        ⌕
      </button>
      <button type="button" aria-label="Open quick actions" onClick={onQuick}>
        ＋
      </button>
      <span className={styles.avatar}>AM</span>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Ticket navigation">
      <b>HQ</b>
      {['Team Feeds', 'Views', 'Agent Queue', 'Team Queue', 'Tags', 'Scheduled Replies'].map(
        (item) => (
          <button className={item === 'Views' ? styles.active : ''} type="button" key={item}>
            {item}
          </button>
        )
      )}
    </aside>
  );
}

function TicketList({ compact = false }: { compact?: boolean }) {
  return (
    <section className={styles.list}>
      <div className={styles.pageHead}>
        <div>
          <small>Tickets</small>
          <h2>
            All Tickets <span>1</span>
          </h2>
        </div>
        <button type="button">＋</button>
      </div>
      {!compact && (
        <div className={styles.toolbar}>
          <button type="button">All Tickets⌄</button>
          <button type="button">Filter</button>
          <button type="button">Classic View⌄</button>
          <button type="button">Recent Thread⌄</button>
        </div>
      )}
      <article className={styles.ticket}>
        <span className={styles.check}>□</span>
        <div>
          <b>Demo delivery question</b>
          <p>#DEMO-1042 · Taylor Reed · Northwind Demo</p>
        </div>
        <div>
          <b>Open</b>
          <p>Due 09 Oct 03:00 PM</p>
        </div>
        <span className={styles.owner}>AM</span>
      </article>
    </section>
  );
}

function ShellView({ focus }: { focus: string }) {
  const [overlay, setOverlay] = useState(
    focus.includes('search') ? 'search' : focus.includes('quick') ? 'quick' : ''
  );
  return (
    <div className={styles.shell}>
      <Header onSearch={() => setOverlay('search')} onQuick={() => setOverlay('quick')} />
      <Sidebar />
      <main>
        <TicketList />
      </main>
      {overlay && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-label={overlay === 'search' ? 'Global search' : 'Quick actions'}
        >
          <button
            className={styles.close}
            type="button"
            aria-label="Close overlay"
            onClick={() => setOverlay('')}
          >
            ×
          </button>
          <h2>{overlay === 'search' ? 'Search in Zoho Desk' : 'Add New'}</h2>
          {overlay === 'search' ? (
            <>
              <input
                autoFocus
                aria-label="Search query"
                placeholder="Search tickets, contacts and accounts"
              />
              <div className={styles.chips}>
                {['All modules', 'Tickets', 'Contacts'].map((x) => (
                  <button type="button" key={x}>
                    {x}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.actionGrid}>
              {['Ticket', 'Article', 'Contact', 'Task', 'Event', 'Report'].map((x) => (
                <button type="button" key={x}>
                  {x}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FilterView({ componentId }: { componentId: string }) {
  const [open, setOpen] = useState(true);
  const [notice, setNotice] = useState('');
  const options = componentId.includes('status')
    ? ['Open', 'On Hold', 'Escalated', 'Closed']
    : componentId.includes('date')
      ? [
          'Today',
          'Yesterday',
          'Current Week',
          'Current Month',
          'Last 7 days',
          'Last 30 days',
          'Custom',
        ]
      : [
          'Account Name',
          'Contact Name',
          'Status',
          'Ticket Owner',
          'Created Time',
          'Due Date',
          'Priority',
          'Channel',
        ];
  return (
    <div className={styles.composition}>
      <TicketList compact />
      <aside className={styles.panel}>
        <div className={styles.panelHead}>
          <h2>Filters</h2>
          <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? 'Collapse' : 'Expand'}
          </button>
        </div>
        {open && (
          <>
            <input aria-label="Find filter field" placeholder="Find a field" />
            {options.map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  onChange={() => setNotice('Filter changes stay inside this fictional fixture.')}
                />{' '}
                {item}
              </label>
            ))}
            <button
              className={styles.primary}
              type="button"
              onClick={() => setNotice('Applying filters is disabled in this fictional fixture.')}
            >
              Apply
            </button>
          </>
        )}
        {notice && <Guard>{notice}</Guard>}
      </aside>
    </div>
  );
}

function MenuView({ componentId, initialState }: { componentId: string; initialState: string }) {
  const definition = zohoDeskComponents.find((item) => item.id === componentId)!;
  const [open, setOpen] = useState(
    !initialState.toLowerCase().includes('closed') && initialState !== 'Collapsed'
  );
  const [notice, setNotice] = useState('');
  const options = menuOptions[componentId] ?? definition.states;
  return (
    <section className={styles.focus}>
      <h2>{definition.title}</h2>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? 'Close menu' : `Open ${definition.title}`}
      </button>
      {open && (
        <div className={styles.menu} role="menu">
          {componentId === 'zoho-desk-global-search' && (
            <input aria-label="Search query" placeholder="Search" />
          )}
          {options.map((item) => (
            <button
              role="menuitem"
              type="button"
              key={item}
              onClick={() =>
                setNotice(`${item} is shown for interaction only. No provider action was taken.`)
              }
            >
              {item}
            </button>
          ))}
        </div>
      )}
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

function FormView({ componentId }: { componentId: string }) {
  const [priority, setPriority] = useState('-None-');
  const [channel, setChannel] = useState('Phone');
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.form}>
      <div className={styles.pageHead}>
        <div>
          <small>Tickets / Add Ticket</small>
          <h2>
            {componentId === 'zoho-desk-description-editor'
              ? 'Description editor'
              : 'Add new Ticket'}
          </h2>
        </div>
      </div>
      <div className={styles.formGrid}>
        <label>
          Contact Name *<input placeholder="Search contact" />
        </label>
        <label>
          Subject *<input placeholder="Ticket subject" />
        </label>
        <label>
          Status *
          <select defaultValue="Open">
            <option>Open</option>
            <option>On Hold</option>
            <option>Escalated</option>
            <option>Closed</option>
          </select>
        </label>
        <label>
          Priority
          <select
            aria-label="Priority"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            {['-None-', 'High', 'Medium', 'Low'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Channel
          <select
            aria-label="Channel"
            value={channel}
            onChange={(event) => setChannel(event.target.value)}
          >
            {['Phone', 'Email', 'Web', 'Chat', 'Forums', 'Instagram'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Due Date
          <input placeholder="DD/MM/YYYY 12:00 PM" />
        </label>
        <label className={styles.wide}>
          Description
          <textarea rows={5} placeholder="Describe the request" />
        </label>
        <div className={`${styles.upload} ${styles.wide}`}>
          Drop files here or browse · 40 MB maximum
        </div>
      </div>
      <footer className={styles.formFooter}>
        <button
          type="button"
          onClick={() => setNotice('Cancel is simulated locally. No form data was sent.')}
        >
          Cancel
        </button>
        <button
          className={styles.primary}
          type="button"
          onClick={() => setNotice('Submission is disabled in this fictional fixture.')}
        >
          Submit
        </button>
      </footer>
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

function DetailView({ componentId }: { componentId: string }) {
  const [tab, setTab] = useState(
    componentId.includes('attachment') ? 'Attachment' : 'Conversation'
  );
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.detail}>
      <div className={styles.detailHead}>
        <div>
          <small>#DEMO-1042</small>
          <h2>Demo delivery question</h2>
        </div>
        <button
          type="button"
          onClick={() => setNotice('Ticket actions are disabled in this fictional fixture.')}
        >
          •••
        </button>
      </div>
      <div className={styles.detailGrid}>
        <aside className={styles.properties}>
          <h3>Ticket Properties</h3>
          <dl>
            <dt>Contact</dt>
            <dd>Taylor Reed</dd>
            <dt>Owner</dt>
            <dd>Alex Morgan</dd>
            <dt>Status</dt>
            <dd>Open</dd>
            <dt>Priority</dt>
            <dd>-None-</dd>
          </dl>
          <button type="button" disabled>
            Save
          </button>
        </aside>
        <main>
          <div className={styles.tabs} role="tablist">
            {['Conversation', 'Resolution', 'Time Entry', 'Attachment'].map((item) => (
              <button
                role="tab"
                aria-selected={tab === item}
                onClick={() => setTab(item)}
                type="button"
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          {tab === 'Conversation' ? (
            <article className={styles.message}>
              <b>Taylor Reed</b>
              <p>Fictional request used only to demonstrate the conversation layout.</p>
              <button
                type="button"
                onClick={() => setNotice('Replies are disabled in this fictional fixture.')}
              >
                Reply All⌄
              </button>
            </article>
          ) : tab === 'Attachment' ? (
            <EmptyCard
              title="No Attachments available"
              action="Browse Files"
              onAction={setNotice}
            />
          ) : (
            <EmptyCard title={`${tab} was not observed in this pass`} onAction={setNotice} />
          )}
        </main>
      </div>
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

function EmptyCard({
  title,
  action,
  onAction,
}: {
  title: string;
  action?: string;
  onAction: (message: string) => void;
}) {
  return (
    <div className={styles.empty}>
      <span>▱</span>
      <h2>{title}</h2>
      <p>This state contains fictional local data.</p>
      {action && (
        <button
          type="button"
          onClick={() => onAction(`${action} is disabled in this fictional fixture.`)}
        >
          {action}
        </button>
      )}
    </div>
  );
}

function EmptyView({ componentId }: { componentId: string }) {
  const definition = zohoDeskComponents.find((item) => item.id === componentId)!;
  const title = componentId.includes('attachment')
    ? 'No Attachments available'
    : componentId.includes('contact')
      ? 'No Contact chosen'
      : componentId.includes('template')
        ? 'No templates available'
        : 'No saved filters';
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.focus}>
      <h2>{definition.title}</h2>
      <EmptyCard
        title={title}
        action={
          componentId.includes('contact')
            ? 'Choose Contact'
            : componentId.includes('attachment')
              ? 'Browse Files'
              : undefined
        }
        onAction={setNotice}
      />
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

function KnowledgeView() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.product}>
      <aside className={styles.productNav}>
        {[
          'Dashboard',
          'Articles',
          'Northwind Demo',
          'Templates',
          'Manage KB',
          'Gallery',
          'Moderation',
          'Recycle Bin',
        ].map((item) => (
          <button type="button" key={item}>
            {item}
          </button>
        ))}
      </aside>
      <main className={styles.onboarding}>
        <small>KNOWLEDGE BASE</small>
        <h1>Start adding Articles</h1>
        <p>Provide self-service solutions to customers with a 24/7 knowledge base.</p>
        {[
          'Fine tune Articles with a user-friendly editor',
          'Optimize Articles for search engines',
          'Refine content using Article versioning',
          'Provide writers access to review',
          'Offer multilingual content',
        ].map((item) => (
          <p key={item}>✓ {item}</p>
        ))}
        <div>
          <button
            className={styles.primary}
            type="button"
            onClick={() => setNotice('Article creation is disabled in this fictional fixture.')}
          >
            Start writing
          </button>
          <button type="button">Learn more</button>
        </div>
        {notice && <Guard>{notice}</Guard>}
      </main>
    </section>
  );
}

function CommunityView() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.product}>
      <aside className={styles.productNav}>
        {['Dashboard', 'Forums', 'Northwind Demo', 'Moderation', 'Recycle Bin'].map((item) => (
          <button type="button" key={item}>
            {item}
          </button>
        ))}
      </aside>
      <main className={styles.productMain}>
        <div className={styles.toolbar}>
          <button type="button">Recents⌄</button>
          <button type="button">Type: All⌄</button>
          <button type="button">Status: All status⌄</button>
          <button type="button">Classic View⌄</button>
        </div>
        <input aria-label="Search community" placeholder="Search in recents" />
        <article className={styles.topic}>
          <span className={styles.avatar}>JL</span>
          <button
            type="button"
            onClick={() => setNotice('Topic navigation is disabled in this fictional fixture.')}
          >
            <b>Welcome to Northwind Community</b>
            <p>Share ideas, ask questions and discuss problems with other members.</p>
            <small>Jordan Lee · 45 minutes ago</small>
          </button>
          <span>
            0<br />
            <small>Views</small>
          </span>
          <span>
            0<br />
            <small>Comments</small>
          </span>
          <span>
            0<br />
            <small>Likes</small>
          </span>
        </article>
        {notice && <Guard>{notice}</Guard>}
      </main>
    </section>
  );
}

function CustomersView() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return (
    <section className={styles.product}>
      <aside className={styles.productNav}>
        <button type="button">Contact</button>
        <button type="button">Account</button>
      </aside>
      <main className={styles.productMain}>
        <div className={styles.toolbar}>
          <button type="button">★ All Contacts (All)⌄</button>
          <button type="button">Filter</button>
          <button type="button">Classic View⌄</button>
        </div>
        <article className={styles.contact}>
          <span className={styles.avatar}>TR</span>
          <div>
            <b>Taylor Reed</b>
            <p>Northwind Demo · taylor@example.test · +1 555 010 1042</p>
          </div>
        </article>
        <div className={styles.alphabet}>
          <button type="button">ALL</button>
          {alphabet.map((letter) => (
            <button type="button" key={letter}>
              {letter}
            </button>
          ))}
        </div>
      </main>
    </section>
  );
}

function AnalyticsView() {
  const cards = [
    ['Open Tickets', '6'],
    ['On Hold Tickets', '2'],
    ['Overdue Tickets', '1'],
    ['Due Today', '3'],
    ['Unassigned', '1'],
  ];
  return (
    <section className={styles.analytics}>
      <div className={styles.pageHead}>
        <h2>Overview Dashboard</h2>
        <button type="button">Last 24 Hours⌄</button>
      </div>
      <div className={styles.kpis}>
        {cards.map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <b>{value}</b>
          </article>
        ))}
      </div>
      <section className={styles.chart}>
        <h3>Tickets Stats</h3>
        <div className={styles.chartBars}>
          {[12, 20, 14, 32, 25, 44, 38, 62, 48, 70, 55, 82].map((height, index) => (
            <i key={index} style={{ height }} />
          ))}
        </div>
        <small>Fictional ticket activity over the last 24 hours</small>
      </section>
      <div className={styles.kpis}>
        <article>
          <span>Traffic Analysis</span>
          <b>Email</b>
        </article>
        <article>
          <span>Average Handling Time</span>
          <b>00:18</b>
        </article>
        <article>
          <span>Happiness Rate</span>
          <b>92%</b>
        </article>
      </div>
    </section>
  );
}

function ActivitiesView({ initialState }: { initialState: string }) {
  const [open, setOpen] = useState(initialState === 'Action menu');
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.product}>
      <aside className={styles.productNav}>
        {['Activities', 'Calls', 'Tasks', 'Events'].map((item) => (
          <button type="button" key={item}>
            {item}
          </button>
        ))}
      </aside>
      <main className={styles.productMain}>
        <div className={styles.toolbar}>
          <button type="button">★ All Activities⌄</button>
          <button type="button">Filter</button>
          <button type="button">Classic View⌄</button>
        </div>
        <div className={styles.empty}>
          <span>◴</span>
          <h2>No Activities available</h2>
          <p>Add a Call, Task, or Event to be completed.</p>
          <button
            className={styles.primary}
            type="button"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            Add Activity⌄
          </button>
          {open && (
            <div className={styles.menu}>
              {['Call', 'Task', 'Event'].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() =>
                    setNotice(`${item} creation is disabled in this fictional fixture.`)
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
        {notice && <Guard>{notice}</Guard>}
      </main>
    </section>
  );
}

function QueueView({ initialState }: { initialState: string }) {
  const team = initialState === 'Team queue';
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.queue}>
      <div className={styles.pageHead}>
        <h2>{team ? 'Team Queue' : 'Alex Morgan (01)'}</h2>
        <button type="button">Countdown Mode⌄</button>
      </div>
      <div className={styles.empty}>
        <span>◇</span>
        <h2>{team ? 'You haven’t added any teams yet.' : 'This agent queue is currently empty'}</h2>
        <p>
          {team
            ? 'Group agents into teams and assign tickets to them.'
            : 'There are currently no Tickets in this view'}
        </p>
        {team && (
          <button
            className={styles.primary}
            type="button"
            onClick={() => setNotice('Team creation is disabled in this fictional fixture.')}
          >
            Add New Team
          </button>
        )}
      </div>
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

function NotificationsView({ initialState }: { initialState: string }) {
  const [tab, setTab] = useState(initialState === 'Email failure' ? 'Email failure' : 'All');
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.notification}>
      <div className={styles.panelHead}>
        <h2>Notifications</h2>
        <button
          type="button"
          onClick={() => setNotice('Mark All As Read is disabled in this fictional fixture.')}
        >
          Mark All As Read
        </button>
        <button
          type="button"
          onClick={() => setNotice('Notification settings are disabled in this fictional fixture.')}
        >
          ⚙
        </button>
      </div>
      <div className={styles.tabs}>
        {['All', 'Email failure'].map((item) => (
          <button
            role="tab"
            aria-selected={tab === item}
            type="button"
            key={item}
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {tab === 'All' ? (
        <article className={styles.noticeRow}>
          <b>Ticket #DEMO-1042 was assigned to Alex Morgan</b>
          <small>09:15 AM</small>
        </article>
      ) : (
        <EmptyCard title="No email failures in this fictional fixture" onAction={setNotice} />
      )}
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

const remainingScreens: Record<
  string,
  { title: string; body: string; action?: string; items?: string[] }
> = {
  'zoho-desk-contracts-empty-state': {
    title: "You don't have any Contracts",
    body: 'Set a period of validity for the services you agreed to provide to customers.',
    action: 'Create Contract',
  },
  'zoho-desk-social-onboarding': {
    title: 'Streamline Social Media Support',
    body: 'Connect social channels and deliver support from a single screen.',
    action: 'Get Started',
    items: ['Facebook', 'X', 'Instagram'],
  },
  'zoho-desk-chat-onboarding': {
    title: 'Support your customers through Chat',
    body: 'Talk to customers in real time and answer support queries instantly.',
    action: 'Enable Chat',
  },
  'zoho-desk-im-onboarding': {
    title: 'The NEW way to reach Customers!',
    body: 'Engage customers through their preferred messaging channels.',
    action: 'Get Started',
    items: ['WhatsApp', 'Messenger', 'Telegram', 'LINE', 'WeChat', 'Instagram'],
  },
  'zoho-desk-tagged-tickets-empty': {
    title: 'No tickets were found for this tag',
    body: 'follow-up (0)',
    action: 'Edit tag',
  },
  'zoho-desk-scheduled-replies-empty': {
    title: 'There are no scheduled replies',
    body: 'Plan and send responses in advance for consistent and timely communication.',
    action: 'Enable Now',
  },
  'zoho-desk-contracts-list-toolbar': {
    title: 'All Contracts',
    body: 'Saved view · Filter · Refresh · Total Count',
    action: 'Filter',
  },
  'zoho-desk-contract-create-action': {
    title: 'Add new Contract',
    body: 'Create a service contract from the Contracts module.',
    action: 'Add new Contract',
  },
  'zoho-desk-social-connect-action': {
    title: 'Connect social support',
    body: 'Start brand and social-channel onboarding.',
    action: 'Get Started',
  },
  'zoho-desk-social-workflow-map': {
    title: 'How it works',
    body: 'Create or import a brand, link social accounts, then create posts, reply and convert conversations to tickets.',
    items: [
      'Create Brand',
      'Import Brand',
      'Link Accounts',
      'Create Posts',
      'Reply',
      'Convert Tickets',
    ],
  },
  'zoho-desk-chat-enable-action': {
    title: 'Enable Live Chat',
    body: 'Activate real-time customer support.',
    action: 'Enable Chat',
  },
  'zoho-desk-chat-credential-notice': {
    title: 'Authorization context',
    body: 'Chat-to-ticket operations use the authorization context of the person enabling the integration.',
  },
  'zoho-desk-im-channel-list': {
    title: 'Messaging channels',
    body: 'Connect supported customer messaging channels.',
    items: ['WhatsApp', 'Messenger', 'Telegram', 'LINE', 'WeChat', 'Instagram'],
  },
  'zoho-desk-im-onboarding-actions': {
    title: 'Start messaging support',
    body: 'Review the product or begin channel onboarding.',
    action: 'Get Started',
    items: ['Product Demo'],
  },
  'zoho-desk-tag-view-toolbar': {
    title: 'follow-up (0)',
    body: 'Filter · Edit · Classic View · Sort',
    action: 'Edit tag',
  },
  'zoho-desk-scheduled-replies-toolbar': {
    title: 'All Scheduled Replies',
    body: 'Filter · Sort',
    action: 'Filter',
  },
  'zoho-desk-scheduled-replies-enable-action': {
    title: 'Enable scheduled replies',
    body: 'Plan and send responses in advance.',
    action: 'Enable Now',
  },
};

function RemainingView({ componentId }: { componentId: string }) {
  const [notice, setNotice] = useState('');
  if (componentId.startsWith('zoho-desk-team-feed'))
    return (
      <section className={styles.feed}>
        <h2>Team Feeds</h2>
        <div className={styles.tabs}>
          {['All Feeds', 'Feeds - Open Tickets', 'Team Feed Posts'].map((item) => (
            <button type="button" key={item}>
              {item}
            </button>
          ))}
        </div>
        <button
          className={styles.composer}
          type="button"
          onClick={() => setNotice('Posting is disabled in this fictional fixture.')}
        >
          What’s on your mind right now?
        </button>
        <article className={styles.feedCard}>
          <b>Alex Morgan updated a Ticket from Taylor Reed · 09:15 AM</b>
          <p>#DEMO-1042 Demo delivery question</p>
          {['Reply', 'Comment', 'Close Ticket'].map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setNotice(`${item} is disabled in this fictional fixture.`)}
            >
              {item}
            </button>
          ))}
        </article>
        {notice && <Guard>{notice}</Guard>}
      </section>
    );
  const screen = remainingScreens[componentId];
  return (
    <section className={styles.moduleOnboarding}>
      <h1>{screen.title}</h1>
      <p>{screen.body}</p>
      {screen.items && (
        <div className={styles.channelCards}>
          {screen.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      )}
      {screen.action && (
        <button
          className={styles.primary}
          type="button"
          onClick={() => setNotice(`${screen.action} is disabled in this fictional fixture.`)}
        >
          {screen.action}
        </button>
      )}
      {componentId === 'zoho-desk-chat-onboarding' && (
        <p className={styles.credentialNotice}>
          Integration operations use the authorization context of the person enabling the
          connection.
        </p>
      )}
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

export function ZohoDeskPreview({
  componentId,
  initialState = '',
  disabled = false,
}: ZohoDeskPreviewProps) {
  const definition = zohoDeskComponents.find((item) => item.id === componentId);
  if (!definition) return <Guard>Unknown Zoho Desk fixture.</Guard>;
  if (disabled)
    return (
      <div className={styles.frame} aria-disabled="true">
        <Guard>This fictional fixture is disabled.</Guard>
      </div>
    );
  const views: Record<ZohoDeskKind, React.ReactNode> = {
    shell: <ShellView focus={`${componentId} ${initialState}`.toLowerCase()} />,
    list: (
      <div className={styles.frame}>
        <TicketList />
      </div>
    ),
    filter: (
      <div className={styles.frame}>
        <FilterView componentId={componentId} />
      </div>
    ),
    menu: (
      <div className={styles.frame}>
        <MenuView componentId={componentId} initialState={initialState} />
      </div>
    ),
    form: (
      <div className={styles.frame}>
        <FormView componentId={componentId} />
      </div>
    ),
    detail: (
      <div className={styles.frame}>
        <DetailView componentId={componentId} />
      </div>
    ),
    empty: (
      <div className={styles.frame}>
        <EmptyView componentId={componentId} />
      </div>
    ),
    knowledge: (
      <div className={styles.frame}>
        <KnowledgeView />
      </div>
    ),
    community: (
      <div className={styles.frame}>
        <CommunityView />
      </div>
    ),
    customers: (
      <div className={styles.frame}>
        <CustomersView />
      </div>
    ),
    analytics: (
      <div className={styles.frame}>
        <AnalyticsView />
      </div>
    ),
    activities: (
      <div className={styles.frame}>
        <ActivitiesView initialState={initialState} />
      </div>
    ),
    queue: (
      <div className={styles.frame}>
        <QueueView initialState={initialState} />
      </div>
    ),
    notifications: (
      <div className={styles.frame}>
        <NotificationsView initialState={initialState} />
      </div>
    ),
    remaining: (
      <div className={styles.frame}>
        <RemainingView componentId={componentId} />
      </div>
    ),
  };
  return definition.kind === 'shell' ? views.shell : views[definition.kind];
}

import { useMemo, useState } from 'react';
import styles from './freshchatOmni.module.css';

export type FreshchatOmniVariant =
  | 'application-shell'
  | 'channel-chooser'
  | 'product-switcher'
  | 'command-center'
  | 'ticket-view-selector'
  | 'admin-catalogue'
  | 'web-chat-customizer'
  | 'web-chat-configuration'
  | 'ai-agent-unavailable'
  | 'sample-dashboard'
  | 'contacts-list'
  | 'companies-list'
  | 'knowledge-base-onboarding'
  | 'forums-onboarding'
  | 'analytics-report-library'
  | 'freddy-insights-onboarding'
  | 'global-new-menu'
  | 'global-search'
  | 'help-menu'
  | 'apps-menu'
  | 'agents-management'
  | 'groups-onboarding'
  | 'roles-management'
  | 'business-hours'
  | 'canned-responses-onboarding'
  | 'ticket-fields-builder'
  | 'automations-empty'
  | 'sla-policies'
  | 'ticket-forms'
  | 'email-notifications'
  | 'ticket-templates'
  | 'scenario-automations'
  | 'tags-management'
  | 'contact-fields-builder'
  | 'company-fields-builder'
  | 'audit-log'
  | 'data-usage-reports'
  | 'account-exports'
  | 'scheduled-exports'
  | 'customer-satisfaction-surveys'
  | 'canned-forms'
  | 'skills-onboarding'
  | 'agent-shifts-onboarding'
  | 'agent-statuses'
  | 'quick-automations'
  | 'session-replay-onboarding'
  | 'average-handling-time'
  | 'custom-objects-error'
  | 'advanced-ticketing'
  | 'sandbox-onboarding'
  | 'freshservice-onboarding'
  | 'freshsales-suite-integration'
  | 'whatsapp-onboarding'
  | 'portals-overview'
  | 'support-email-setup'
  | 'mobile-chat-sdk'
  | 'facebook-onboarding'
  | 'feedback-form'
  | 'proactive-outreach-error'
  | 'omniroute'
  | 'threads-settings'
  | 'multiple-products'
  | 'apps-marketplace'
  | 'mcp-settings'
  | 'helpdesk-settings'
  | 'messenger-home'
  | 'faq-search'
  | 'faq-article';

export interface FreshchatOmniPreviewProps {
  variant: FreshchatOmniVariant;
  initialState?: string;
  disabled?: boolean;
}

const topics = [
  'Set up a website messenger',
  'Connect chat to your support inbox',
  'Choose channels for customer questions',
  'Understand conversation routing',
];

function Guard({ children }: { children: string }) {
  return (
    <p className={styles.guard} role="status">
      {children}
    </p>
  );
}

function WidgetFrame({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.widget} aria-label="Fictional Freshchat reconstruction">
      <header>
        <span className={styles.brandMark}>◆</span>
        <b>Freshworks</b>
        <button type="button" aria-label="Close fictional widget">
          ×
        </button>
      </header>
      {children}
      <footer>
        Powered by <b>Freshchat</b>
      </footer>
    </section>
  );
}

function MessengerHome() {
  const [notice, setNotice] = useState('');
  return (
    <WidgetFrame>
      <div className={styles.widgetBody}>
        <h2>Message us</h2>
        <button
          className={styles.messageCard}
          type="button"
          onClick={() => setNotice('No conversation was started.')}
        >
          Product walkthrough<small>Ask a fictional product question</small>
        </button>
        <button
          className={styles.messageCard}
          type="button"
          onClick={() => setNotice('No message was sent.')}
        >
          Talk to a specialist<small>Messaging stays disabled in this fixture</small>
        </button>
        <div className={styles.sectionTitle}>
          <h2>FAQs</h2>
          <button
            type="button"
            aria-label="Search fictional FAQs"
            onClick={() => setNotice('Open the FAQ Search fixture to inspect search.')}
          >
            ⌕
          </button>
        </div>
        {['Getting started', 'Messaging channels', 'Customer portal'].map((item) => (
          <button
            className={styles.topic}
            type="button"
            key={item}
            onClick={() => setNotice(`${item} was not opened.`)}
          >
            {item}
            <span>›</span>
          </button>
        ))}
        {notice && <Guard>{notice}</Guard>}
      </div>
    </WidgetFrame>
  );
}

function FaqSearch({ initialState }: { initialState?: string }) {
  const [query, setQuery] = useState(initialState === 'results' ? 'chat widget' : '');
  const filtered = useMemo(
    () =>
      query
        ? topics.filter((item) => item.toLowerCase().includes(query.toLowerCase().split(' ')[0]))
        : topics,
    [query]
  );
  return (
    <WidgetFrame>
      <div className={styles.widgetBody}>
        <button className={styles.back} type="button">
          ‹ Back
        </button>
        <label className={styles.searchLabel}>
          Search for answers
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search fictional help"
          />
        </label>
        <div className={styles.sectionTitle}>
          <h2>{query ? 'Search results' : 'Categories'}</h2>
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
              ×
            </button>
          )}
        </div>
        {(query ? filtered : ['Getting started', 'Channels', 'Automation', 'Reporting']).map(
          (item) => (
            <button className={styles.topic} type="button" key={item}>
              {item}
              <span>›</span>
            </button>
          )
        )}
        {query && filtered.length === 0 && <Guard>No fictional articles match this query.</Guard>}
      </div>
    </WidgetFrame>
  );
}

function FaqArticle() {
  const [notice, setNotice] = useState('');
  return (
    <WidgetFrame>
      <article className={styles.article}>
        <button className={styles.back} type="button">
          ‹ Search results
        </button>
        <small>Messaging channels</small>
        <h1>How does website chat connect to support?</h1>
        <p>
          A website messenger can bring questions, self-service content and ongoing conversations
          into one customer-facing surface.
        </p>
        <ol>
          <li>Keep conversations available between visits.</li>
          <li>Group questions by topic.</li>
          <li>Offer help content beside messaging.</li>
        </ol>
        <div className={styles.rating}>
          <span>Was this article useful?</span>
          <button type="button" onClick={() => setNotice('Article ratings were not submitted.')}>
            ♡
          </button>
          <button type="button" onClick={() => setNotice('Article ratings were not submitted.')}>
            ♢
          </button>
        </div>
        {notice && <Guard>{notice}</Guard>}
      </article>
    </WidgetFrame>
  );
}

function ProductSwitcher() {
  const [notice, setNotice] = useState('');
  return (
    <aside className={styles.switcher}>
      <header>
        <span className={styles.avatar}>AS</span>
        <div>
          <b>Alex Stone</b>
          <small>Fictional workspace member</small>
        </div>
        <button type="button">×</button>
      </header>
      <section>
        <b>Workspace controls</b>
        <div className={styles.controlRow}>
          {['People', 'Plans', 'Security'].map((item) => (
            <button type="button" key={item} onClick={() => setNotice(`${item} was not opened.`)}>
              {item}
            </button>
          ))}
        </div>
      </section>
      <h2>Accounts and portals</h2>
      <button
        className={styles.portal}
        type="button"
        onClick={() => setNotice('No portal navigation occurred.')}
      >
        <b>Sales workspace</b>
        <small>northstar.example/sales</small>
      </button>
      <button
        className={styles.portal}
        type="button"
        onClick={() => setNotice('No portal navigation occurred.')}
      >
        <b>Support workspace</b>
        <small>help.northstar.example</small>
      </button>
      <section>
        <b>Explore other products</b>
        <div className={styles.productGrid}>
          {['Desk', 'Service', 'Assets', 'CRM'].map((item) => (
            <button type="button" key={item}>
              {item}
            </button>
          ))}
        </div>
      </section>
      {notice && <Guard>{notice}</Guard>}
    </aside>
  );
}

function ChannelChooser({ initialState }: { initialState?: string }) {
  const [selected, setSelected] = useState(initialState === 'web-chat' ? 'Web Chat' : '');
  const [notice, setNotice] = useState('');
  const channels = [
    ['Email', 'Customer support mailbox'],
    ['Portal', 'Self-service requests'],
    ['Web Chat', 'Real-time website questions'],
    ['Instagram', 'Direct messages and comments'],
    ['WhatsApp', 'Messaging conversations'],
    ['Facebook', 'Messages, comments and posts'],
  ];
  return (
    <section className={styles.modal} aria-label="Fictional preferred channel chooser">
      <h1>Connect your preferred channel</h1>
      <p>Choose where fictional customer questions should arrive.</p>
      <div className={styles.channelGrid}>
        {channels.map(([name, description]) => (
          <button
            type="button"
            key={name}
            aria-pressed={selected === name}
            onClick={() => setSelected(name)}
          >
            <span className={styles.channelIcon}>{name[0]}</span>
            <span>
              <b>{name}</b>
              <small>{description}</small>
            </span>
          </button>
        ))}
      </div>
      <div className={styles.modalFooter}>
        <button
          type="button"
          onClick={() => {
            setSelected('');
            setNotice('Selection was cancelled.');
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          className={styles.primary}
          onClick={() => setNotice('Get started is disabled. No provider channel was created.')}
        >
          Get started
        </button>
      </div>
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

function ApplicationShell() {
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.shell}>
      <aside className={styles.rail}>
        <b>◉</b>
        {['✦', '◌', '▱', '♙', '▤', '▣', '⚙'].map((item, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setNotice('Navigation stays inside this fictional fixture.')}
          >
            {item}
          </button>
        ))}
      </aside>
      <header className={styles.topbar}>
        <strong>Quick start</strong>
        <span>Trial workspace</span>
        <button type="button">＋ New</button>
        <button type="button">⌕ Search</button>
        <button type="button">Apps</button>
      </header>
      <main className={styles.quickStart}>
        <h1>Set up your AI-powered helpdesk</h1>
        <div className={styles.progress}>
          <b>Start with the essentials</b>
          <span>0/3</span>
        </div>
        <div className={styles.setupGrid}>
          {[
            ['1', 'Build your AI Agent'],
            ['2', 'Connect support channels'],
            ['3', 'Explore Command Center'],
          ].map(([step, title]) => (
            <button type="button" key={step} onClick={() => setNotice(`${title} was not started.`)}>
              <small>Step {step}</small>
              <div className={styles.placeholder} />
              <b>{title}</b>
              <span>Inspect this setup pattern safely.</span>
            </button>
          ))}
        </div>
        {notice && <Guard>{notice}</Guard>}
      </main>
    </div>
  );
}

const fictionalTickets = [
  ['Checkout page not loading', 'Avery Morgan', 'Urgent', 'New'],
  ['Access code rejected', 'Jordan Lee', 'Urgent', 'New'],
  ['Monthly report question', 'Samira Patel', 'Low', 'Open'],
];

function CommandCenter() {
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.commandCenter}>
      <header>
        <button
          type="button"
          onClick={() => setNotice('Open the Ticket View Selector fixture to inspect views.')}
        >
          ▤
        </button>
        <b>New and my open tickets</b>
        <span>3</span>
        <em>Unsaved</em>
      </header>
      <div className={styles.commandLayout}>
        <main>
          <div className={styles.ticketToolbar}>
            <label>
              <input type="checkbox" disabled /> Select all
            </label>
            <span>Sort: Date created</span>
            <span>Layout: Card</span>
            <button type="button" onClick={() => setNotice('No export was started.')}>
              Export
            </button>
          </div>
          {fictionalTickets.map(([subject, requester, priority, status], index) => (
            <article className={styles.ticketCard} key={subject}>
              <input type="checkbox" disabled />
              <div className={styles.ticketAvatar}>{requester[0]}</div>
              <div>
                <small>{index < 2 ? 'New' : 'Agent responded'}</small>
                <b>
                  {subject} #{index + 101}
                </b>
                <span>{requester} · Northstar Example</span>
                <span>{index < 2 ? 'Created 12 minutes ago' : 'Resolution due in 5 days'}</span>
              </div>
              <div>
                <b>{priority}</b>
                <button type="button" onClick={() => setNotice('Assignment was not changed.')}>
                  Unassigned
                </button>
                <span>{status}</span>
              </div>
            </article>
          ))}
        </main>
        <aside className={styles.filters}>
          <b>Filters</b>
          {['Agents: Me, Unassigned', 'Status: Open', 'Created', 'Priority', 'Source', 'Tags'].map(
            (item) => (
              <button type="button" key={item}>
                {item}
                <span>⌄</span>
              </button>
            )
          )}
          <button type="button" disabled>
            Apply
          </button>
        </aside>
      </div>
      {notice && <Guard>{notice}</Guard>}
    </div>
  );
}

function TicketViewSelector() {
  const [selected, setSelected] = useState('New and my open tickets');
  const views = [
    'All tickets',
    'All undelivered messages',
    'All unresolved tickets',
    'New and my open tickets',
    'Tickets handled by AI Agent',
    'Tickets I raised',
    'Tickets I am mentioned in',
    'Tickets I am watching',
    'Archive',
    'Spam',
    'Trash',
  ];
  return (
    <aside className={styles.viewDrawer}>
      <h1>Ticket views</h1>
      <input aria-label="Search fictional views" placeholder="Search for a view" />
      <details>
        <summary>Shared</summary>
        <p>No shared fictional views</p>
      </details>
      <details open>
        <summary>Default</summary>
        {views.map((view) => (
          <button
            type="button"
            key={view}
            aria-current={selected === view ? 'page' : undefined}
            onClick={() => setSelected(view)}
          >
            {view}
          </button>
        ))}
      </details>
      <Guard>Selections remain inside this fictional fixture.</Guard>
    </aside>
  );
}

function AdminCatalogue() {
  const [notice, setNotice] = useState('');
  const groups = {
    Channels: [
      'Portals',
      'Email',
      'Web Chat',
      'Mobile Chat SDK',
      'WhatsApp',
      'Facebook',
      'Phone',
      'Feedback Form',
      'Instagram',
      'SMS',
    ],
    Workflows: ['Ticket fields', 'SLA policies', 'Automations', 'Omniroute', 'Quick automations'],
    'Agent productivity': [
      'Canned responses',
      'Ticket templates',
      'Scenario automations',
      'Threads',
    ],
  };
  return (
    <section className={styles.adminCatalogue}>
      <h1>Admin</h1>
      <input aria-label="Search fictional settings" placeholder="Search settings" />
      {Object.entries(groups).map(([group, items]) => (
        <section key={group}>
          <h2>
            {group}
            <small>Configured</small>
          </h2>
          <div>
            {items.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setNotice(`${item} was not opened or changed.`)}
              >
                <b>{item}</b>
                <span>Inspect this capability without changing provider settings.</span>
              </button>
            ))}
          </div>
        </section>
      ))}
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

function WebChatCustomizer() {
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.builder}>
      <ol className={styles.steps}>
        <li className={styles.activeStep}>1 Customize</li>
        <li>2 Preview</li>
        <li>3 Launch</li>
      </ol>
      <div className={styles.builderGrid}>
        <section>
          <h1>Customize your default widget</h1>
          <p>Match a fictional brand and preview the customer surface.</p>
          <label>
            Brand color
            <input value="#214B8F" readOnly />
          </label>
          <label>
            Button color
            <input value="#214B8F" readOnly />
          </label>
          <label>
            Widget launcher
            <input value="#214B8F" readOnly />
          </label>
          <label>
            Welcome message
            <input value="Hello" readOnly />
          </label>
          <label>
            Welcome sub-message
            <input value="Ask us anything" readOnly />
          </label>
          <button type="button" onClick={() => setNotice('No upload, edit or save was performed.')}>
            Save &amp; Next
          </button>
          <button
            type="button"
            onClick={() =>
              setNotice('Open the Widget Configuration fixture for advanced settings.')
            }
          >
            Advanced settings
          </button>
        </section>
        <MessengerMock />
      </div>
      {notice && <Guard>{notice}</Guard>}
    </div>
  );
}

function MessengerMock() {
  return (
    <aside className={styles.messengerMock}>
      <h2>Hello</h2>
      <p>Ask us anything</p>
      <div>
        <b>Topics</b>
        <span>Chat with us</span>
      </div>
      <footer>Powered by Helpdesk</footer>
    </aside>
  );
}

function WebChatConfiguration({ initialState }: { initialState?: string }) {
  const [tab, setTab] = useState(initialState || 'appearance');
  const panels: Record<string, string[]> = {
    appearance: [
      'Visual branding',
      'Titles',
      'Profile info',
      'Position and behaviour',
      'Custom CSS',
    ],
    content: ['Live Chat topics', 'Knowledge Base', 'Web Forms', 'Reorder sections'],
    preferences: [
      'Typing indicator: On',
      'Notification sound: On',
      'Attachments: On',
      'Privacy policy: Off',
      'Trusted domains: Off',
      'Resolved history: Visible',
      'Event tracking: On',
      'Captcha: Off',
    ],
  };
  return (
    <div className={styles.configuration}>
      <header>
        <span>Product: Example</span>
        <h1>Web Widget</h1>
      </header>
      <nav>
        {['appearance', 'content', 'preferences'].map((item) => (
          <button type="button" key={item} aria-pressed={tab === item} onClick={() => setTab(item)}>
            {item}
          </button>
        ))}
        <button type="button" disabled>
          Deploy code
        </button>
        <button type="button" disabled>
          User authentication
        </button>
      </nav>
      <div className={styles.configurationGrid}>
        <section>
          <h2>{tab[0].toUpperCase() + tab.slice(1)}</h2>
          {panels[tab].map((item) => (
            <button type="button" key={item}>
              {item}
              <span>›</span>
            </button>
          ))}
        </section>
        <MessengerMock />
      </div>
      <footer>
        <button type="button" disabled>
          Save
        </button>
        <button type="button" disabled>
          Discard changes
        </button>
        <button type="button">Go to widgets</button>
      </footer>
    </div>
  );
}

function AiAgentUnavailable() {
  return (
    <section className={styles.unavailable}>
      <div className={styles.unavailableArt}>◇</div>
      <h1>Not all those who wander are lost :)</h1>
      <p>
        The provider route returned a not-found state. Entitlement and intended behavior remain
        unverified.
      </p>
      <button type="button">Back to tickets</button>
    </section>
  );
}

const fictionalContacts = [
  ['Maya Chen', 'Support lead', 'Northstar Labs', 'maya@example.test', '555-0101'],
  ['Noah Williams', 'Operations manager', 'Pine & Co.', 'noah@example.test', '555-0102'],
  ['Iris Okafor', 'Finance director', 'Harbor Works', 'iris@example.test', '555-0103'],
  ['Luca Martin', 'Customer advocate', 'Cedar Systems', 'luca@example.test', '555-0104'],
  ['Priya Rao', 'Product manager', 'Orchid Digital', 'priya@example.test', '555-0105'],
];

function DirectoryShell({ kind }: { kind: 'contacts' | 'companies' }) {
  const [notice, setNotice] = useState('');
  const companies = [
    ['Northstar Labs', '3'],
    ['Pine & Co.', '6'],
    ['Harbor Works', '2'],
    ['Cedar Systems', '4'],
    ['Orchid Digital', '5'],
  ];
  return (
    <section className={styles.directory}>
      <header>
        <label>
          <input type="checkbox" disabled /> Select all
        </label>
        <input aria-label={`Search fictional ${kind}`} placeholder={`Search all ${kind}`} />
        <div>
          <button type="button" onClick={() => setNotice('No export was started.')}>
            Export
          </button>
          <button type="button" onClick={() => setNotice('No import was started.')}>
            Import
          </button>
          <button type="button" onClick={() => setNotice('No sync was started.')}>
            Sync
          </button>
        </div>
      </header>
      <div className={styles.directoryGrid}>
        <main>
          {kind === 'contacts' ? (
            <table>
              <thead>
                <tr>
                  <th>Contact</th>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Email address</th>
                  <th>Work phone</th>
                </tr>
              </thead>
              <tbody>
                {fictionalContacts.map(([name, title, company, email, phone]) => (
                  <tr key={name}>
                    <td>
                      <input type="checkbox" disabled /> <b>{name}</b>
                    </td>
                    <td>{title}</td>
                    <td>{company}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Contacts</th>
                  <th aria-label="Actions" />
                </tr>
              </thead>
              <tbody>
                {companies.map(([company, contacts]) => (
                  <tr key={company}>
                    <td>
                      <input type="checkbox" disabled /> <b>{company}</b>
                    </td>
                    <td>{contacts}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => setNotice('No company action was performed.')}
                      >
                        •••
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </main>
        <aside>
          <b>Filters</b>
          {(kind === 'contacts'
            ? ['Created: Any time', 'Time zone', 'Tags', 'Companies', 'Contact type: Contacts']
            : ['Created: Any time']
          ).map((filter) => (
            <button type="button" key={filter}>
              {filter}
              <span>⌄</span>
            </button>
          ))}
          <button type="button" disabled>
            Apply
          </button>
        </aside>
      </div>
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

function SampleDashboard() {
  return (
    <section className={styles.sampleDashboard}>
      <div className={styles.sampleNotice}>ⓘ This is a sample dashboard.</div>
      <div className={styles.dashboardMock}>
        <h1>Support overview</h1>
        <div>
          {['Open tickets', 'First response', 'Resolution time', 'Customer satisfaction'].map(
            (label, index) => (
              <article key={label}>
                <small>{label}</small>
                <b>{[28, '42m', '8h', '94%'][index]}</b>
                <span>Sample data</span>
              </article>
            )
          )}
        </div>
        <div className={styles.chartMock}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Guard>
          This reconstruction uses fictional values and does not represent live account data.
        </Guard>
      </div>
    </section>
  );
}

function KnowledgeBaseOnboarding() {
  const [notice, setNotice] = useState('');
  const suggestions = [
    'Install the desktop app',
    'Create a new user account',
    'Update notification settings',
    'Recover from an application crash',
    'Resolve sign-in problems',
  ];
  return (
    <section className={styles.onboarding}>
      <header>
        <h1>Knowledge Base</h1>
        <p>Help customers answer common questions with self-service articles.</p>
      </header>
      <div className={styles.onboardingPanel}>
        <h2>Let’s create your first solution article</h2>
        <p>Offer clear, step-by-step instructions for frequent questions.</p>
        <button type="button" onClick={() => setNotice('No article was created.')}>
          Create new
        </button>
        <span>or</span>
        <h2>Use our suggestions</h2>
        <p>Common fictional article ideas for a software team</p>
        {suggestions.map((item) => (
          <div className={styles.suggestion} key={item}>
            <span>▤</span>
            <b>{item}</b>
            <button type="button" onClick={() => setNotice('No provider preview was opened.')}>
              Preview
            </button>
          </div>
        ))}
        <button type="button" onClick={() => setNotice('No suggestions were imported.')}>
          Use suggestions
        </button>
      </div>
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

function ForumsOnboarding() {
  return (
    <section className={styles.forumEmpty}>
      <h1>Categories</h1>
      <div className={styles.forumSteps}>
        {[
          ['1', 'Create your first category', 'Organize related community conversations.'],
          ['2', 'Create your first forum', 'Add one or more forums under a category.'],
          ['3', 'Create your first topic', 'Start a discussion inside a forum.'],
        ].map(([step, title, copy]) => (
          <article key={step}>
            <span>{step}</span>
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
              {step === '1' && <button type="button">Create category</button>}
            </div>
          </article>
        ))}
      </div>
      <Guard>No category, forum or topic is created by this fixture.</Guard>
    </section>
  );
}

function AnalyticsReportLibrary() {
  const reports = [
    ['Support overview', 'Curated', 'System'],
    ['Chat assistant performance', 'Curated', 'System'],
    ['Helpdesk performance', 'Curated', 'System'],
    ['SLA review', 'Curated', 'System'],
  ];
  return (
    <section className={styles.analytics}>
      <aside>
        <h1>Analytics</h1>
        {[
          'Recent',
          'Favorites',
          'All reports',
          'Curated reports',
          'Shared reports',
          'My reports',
          'Trash',
          'Settings',
        ].map((item) => (
          <button
            type="button"
            key={item}
            aria-current={item === 'All reports' ? 'page' : undefined}
          >
            {item}
          </button>
        ))}
      </aside>
      <main>
        <header>
          <h2>All reports</h2>
          <input aria-label="Search fictional reports" placeholder="Search reports" />
          <button type="button">New report</button>
        </header>
        <div className={styles.reportToolbar}>Sort by: Last modified date</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Created by</th>
              <th>Last modified</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(([name, location, creator], index) => (
              <tr key={name}>
                <td>
                  <b>{name}</b>
                </td>
                <td>{location}</td>
                <td>{creator}</td>
                <td>{index + 1} days ago</td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer>Showing 4 per page</footer>
      </main>
    </section>
  );
}

function FreddyInsightsOnboarding() {
  const cards = [
    ['Stay on top of service desk data', 'Review key trends in one place.'],
    ['Discover what shapes your metrics', 'Spot patterns without building a report first.'],
    ['Get to the root of every trend', 'Explore possible drivers behind a change.'],
  ];
  return (
    <section className={styles.freddyOnboarding}>
      <div className={styles.freddyMark}>✦</div>
      <h1>Make smarter decisions with AI-driven Insights</h1>
      <div>
        {cards.map(([title, copy]) => (
          <article key={title}>
            <span>✦</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <p>Availability depends on analytics access and eligible ticket data.</p>
      <button type="button">Get started</button>
      <Guard>Activation and AI-generated insights were not exercised.</Guard>
    </section>
  );
}

function GlobalNewMenu() {
  return (
    <div className={styles.overlayStage}>
      <div className={styles.topAction}>
        <button type="button">＋ New</button>
        <div className={styles.popoverMenu}>
          {[
            'New ticket',
            'New email',
            'New message',
            'New contact',
            'New company',
            'New agent',
          ].map((item) => (
            <button type="button" key={item}>
              {item}
              <span>›</span>
            </button>
          ))}
        </div>
      </div>
      <Guard>Creation destinations are represented without opening or submitting forms.</Guard>
    </div>
  );
}

function GlobalSearch() {
  const [scope, setScope] = useState('All');
  return (
    <div className={styles.overlayStage}>
      <section className={styles.globalSearch}>
        <label>
          Search tickets, contacts, solutions and forums
          <input aria-label="Search fictional support data" placeholder="Search" />
        </label>
        <div>
          {['All', 'Tickets', 'Companies', 'Contacts', 'Solutions', 'Forums'].map((item) => (
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
        <button type="button">Search preferences</button>
      </section>
      <Guard>No provider search was submitted.</Guard>
    </div>
  );
}

function HelpMenu() {
  return (
    <div className={styles.overlayStage}>
      <aside className={styles.helpMenu}>
        <h2>Help and Support</h2>
        {[
          ['Product Updates', '5'],
          ['Help Center', ''],
          ['Freshworks Community', ''],
          ['Freshworks University', ''],
          ['Freshdesk Status', ''],
          ['Install mobile app', ''],
        ].map(([item, badge]) => (
          <button type="button" key={item}>
            <span>{item}</span>
            {badge && <b>{badge}</b>}
          </button>
        ))}
      </aside>
      <Guard>External destinations were not opened.</Guard>
    </div>
  );
}

function AppsMenu() {
  return (
    <div className={styles.overlayStage}>
      <aside className={styles.appsMenu}>
        <header>
          <h2>Apps</h2>
          <button type="button">Marketplace</button>
        </header>
        <p>Recommended apps for you</p>
        {['Project tracker', 'Custom fields helper', 'Issue sync', 'Field visibility'].map(
          (item) => (
            <button type="button" key={item}>
              <span className={styles.appIcon}>{item[0]}</span>
              <b>{item}</b>
              <small>Fictional marketplace suggestion</small>
            </button>
          )
        )}
        <footer>
          <button type="button">Manage apps</button>
          <button type="button">App management portal</button>
        </footer>
      </aside>
      <Guard>No marketplace or management destination was opened.</Guard>
    </div>
  );
}

function AgentsManagement() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Agents</h1>
          <span>
            Seats available <b>0</b>
          </span>
        </div>
        <div>
          <button type="button">Export</button>
          <button type="button">New agent</button>
        </div>
      </header>
      <input aria-label="Search fictional agents" placeholder="Search for agents" />
      <nav>
        {['Support agents', 'Collaborators', 'Deactivated agents'].map((item, index) => (
          <button type="button" key={item} aria-pressed={index === 0}>
            {item}
          </button>
        ))}
      </nav>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Add-on access</th>
            <th>Roles</th>
            <th>Groups</th>
            <th>Last seen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5}>No fictional agents in this fixture</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.infoGrid}>
        {[
          ['Agents', 'Daily members of the support team.'],
          ['Collaborators', 'Restricted participants who help resolve tickets.'],
          ['Roles and scope', 'Roles control features while scope controls ticket access.'],
          ['Groups', 'Groups organize agents for assignment, workflows and reporting.'],
        ].map(([title, copy]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function GroupsOnboarding() {
  const groups = [
    'Customer Support',
    'Customer Success',
    'Product Managers',
    'Sales',
    'Engineering',
    'Billing',
    'Escalations',
  ];
  return (
    <section className={styles.onboarding}>
      <header>
        <h1>Groups</h1>
        <p>Organize fictional agents by function for assignment and reporting.</p>
      </header>
      <div className={styles.onboardingPanel}>
        <h2>Let’s create your first group</h2>
        <p>Create groups based on your agents’ functions.</p>
        <button type="button">Create new</button>
        <span>or</span>
        <h2>Use suggested groups</h2>
        <div className={styles.groupSuggestions}>
          {groups.map((group) => (
            <span key={group}>{group}</span>
          ))}
        </div>
        <button type="button">Use suggestions</button>
      </div>
      <Guard>No group or suggestion was created.</Guard>
    </section>
  );
}

function RolesManagement() {
  const roles = [
    ['Account administrator', 'Full account and billing control', '1'],
    ['Administrator', 'All administrative features except account and billing', '0'],
    ['Supervisor', 'Agent activities, reports and unresolved tickets', '0'],
    ['Agent', 'Ticket and contact work', '0'],
    ['Ticket collaborator', 'Restricted private collaboration', '0'],
    ['Analytics collaborator', 'View analytics reports', '0'],
  ];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Agent roles</h1>
          <p>Provide or restrict access and privileges.</p>
        </div>
        <button type="button">New role</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Description</th>
            <th>Assigned agents</th>
            <th>Add-on access</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(([role, description, count]) => (
            <tr key={role}>
              <td>
                <b>{role}</b>
              </td>
              <td>{description}</td>
              <td>{count}</td>
              <td>—</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Guard>Role editing, assignment and privilege changes were not exercised.</Guard>
    </section>
  );
}

function BusinessHours() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Business hours</h1>
          <p>Map working schedules to ticket groups and SLA timing.</p>
        </div>
        <button type="button">New business hour</button>
      </header>
      <article className={styles.scheduleCard}>
        <div>
          <b>General working hours</b>
          <span>(GMT−05:00) Eastern Time</span>
        </div>
        <span>0 groups associated</span>
        <button type="button">•••</button>
      </article>
      <div className={styles.infoGrid}>
        {[
          ['Business hours', 'Due timers follow the selected working schedule.'],
          ['Holidays', 'Configured holidays are excluded from business time.'],
          ['Multiple schedules', 'Different groups can use different regional schedules.'],
        ].map(([title, copy]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <Guard>The schedule uses a fictional time zone and no provider setting was changed.</Guard>
    </section>
  );
}

function CannedResponsesOnboarding() {
  const suggestions = [
    'Demo request reply',
    'Account cancellation',
    'Plan change request',
    'Trial extension',
  ];
  return (
    <section className={styles.onboarding}>
      <header>
        <h1>Canned responses</h1>
        <p>Create reusable replies to common questions.</p>
      </header>
      <div className={styles.onboardingPanel}>
        <h2>Let’s create your first canned response</h2>
        <p>Insert templated messages to answer common customer questions.</p>
        <button type="button">Create new</button>
        <span>or</span>
        <h2>Use our suggestions</h2>
        {suggestions.map((item) => (
          <div className={styles.suggestion} key={item}>
            <span>▤</span>
            <b>{item}</b>
            <button type="button">Preview</button>
          </div>
        ))}
        <button type="button">Use suggestions</button>
      </div>
      <Guard>No response, preview or suggestion was created or imported.</Guard>
    </section>
  );
}

function TicketFieldsBuilder() {
  const palette = [
    'Single-line text',
    'Multi-line text',
    'Checkbox',
    'Dropdown',
    'Dependent field',
    'Date',
    'Number',
    'Decimal',
  ];
  const fields = [
    'Search a requester',
    'Subject',
    'Type',
    'Source',
    'Status',
    'Priority',
    'Group',
    'Agent',
    'Product',
    'Description',
    'Company',
    'Reference number',
  ];
  return (
    <section className={styles.fieldBuilder}>
      <aside>
        <h2>Drag and drop to create fields</h2>
        {palette.map((item) => (
          <button type="button" key={item}>
            {item}
          </button>
        ))}
      </aside>
      <main>
        <header>
          <button type="button">Filter: All fields</button>
          <input aria-label="Search fictional fields" placeholder="Search fields" />
        </header>
        {fields.map((field) => (
          <button className={styles.fieldRow} type="button" key={field}>
            <span>
              <b>{field}</b>
              <small>Default</small>
            </span>
            <span>Edit</span>
          </button>
        ))}
        <Guard>Drag, edit, section and persistence behavior were not exercised.</Guard>
      </main>
    </section>
  );
}

function AutomationsEmpty() {
  const [tab, setTab] = useState('Ticket creation');
  return (
    <section className={styles.automationPage}>
      <h1>Automations</h1>
      <nav>
        {['Ticket creation', 'Ticket updates', 'Hourly triggers'].map((item) => (
          <button type="button" key={item} aria-pressed={tab === item} onClick={() => setTab(item)}>
            {item}
          </button>
        ))}
      </nav>
      <aside>
        <h2>Quick automations for real-time channels</h2>
        <p>Run short follow-up and routing actions for live conversations.</p>
        <button type="button">Explore Quick Automations</button>
      </aside>
      <div className={styles.emptyPanel}>
        <span>◇</span>
        <h2>You haven’t created any rules yet</h2>
        <p>Automate routine tasks with conditions and actions.</p>
        <div>
          <button type="button">Create from scratch</button>
          <button type="button">Start with templates</button>
        </div>
      </div>
      <Guard>No rule, template or quick automation was created.</Guard>
    </section>
  );
}

function SlaPolicies() {
  const policies = [
    ['Default policy for real-time channels', 'Shorter targets for real-time conversations'],
    ['Default policy', 'Fallback targets for every ticket'],
  ];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>SLA policies</h1>
          <p>Set response and resolution targets for ticket conditions.</p>
        </div>
        <button type="button">Add policy</button>
      </header>
      <div className={styles.infoBanner}>The first matching SLA policy is applied.</div>
      {policies.map(([title, copy], index) => (
        <article className={styles.policyCard} key={title}>
          <b>{index + 1}.</b>
          <div>
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
          <span>Default</span>
          <span aria-label="Enabled">✓</span>
          <button type="button">•••</button>
        </article>
      ))}
      <div className={styles.infoGrid}>
        {[
          ['SLA policy', 'Targets can use calendar hours or defined business hours.'],
          ['Multiple policies', 'Higher policies are evaluated first.'],
          ['Reminders', 'Notifications can warn before or after a target breach.'],
        ].map(([title, copy]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <Guard>Policy ordering, editing, notifications and persistence were not exercised.</Guard>
    </section>
  );
}

function TicketForms() {
  const forms = [
    ['Report a problem', 'Default form · all customer-visible fields'],
    ['Contact support', 'Basic contact details and issue summary'],
    ['Ask a question', 'Question and contact information'],
    ['Check a request', 'Reference and status enquiry fields'],
  ];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Ticket forms</h1>
          <p>Offer customers the form that matches their request.</p>
        </div>
        <button type="button">New form</button>
      </header>
      <div className={styles.infoBanner}>Forms can be published to selected support portals.</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Created</th>
            <th>Last updated</th>
            <th>Portals</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {forms.map(([name, copy]) => (
            <tr key={name}>
              <td>
                <b>{name}</b>
                <small>{copy}</small>
              </td>
              <td>Recently</td>
              <td>Support admin</td>
              <td>Support portal</td>
              <td>
                <button type="button">•••</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Guard>No form, filter, portal association or row action was opened or changed.</Guard>
    </section>
  );
}

function EmailNotifications() {
  const [tab, setTab] = useState('Agent notifications');
  const events = [
    'New ticket created',
    'Ticket assigned to group',
    'Ticket assigned to agent',
    'Requester replies to ticket',
    'First response SLA reminder',
    'Resolution SLA violation',
  ];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Email notifications</h1>
          <p>Send automatic messages when ticket events occur.</p>
        </div>
        <button type="button">Learn more</button>
      </header>
      <nav className={styles.tabRow}>
        {['Agent notifications', 'Requester notifications', 'CC notifications', 'Templates'].map(
          (item) => (
            <button
              type="button"
              key={item}
              aria-pressed={tab === item}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          )
        )}
      </nav>
      <table>
        <tbody>
          {events.map((event) => (
            <tr key={event}>
              <td>
                <span className={styles.statusDot}>✓</span>
              </td>
              <td>
                <b>{event}</b>
              </td>
              <td>
                <button type="button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Guard>No notification, language, template, recipient or enabled state was changed.</Guard>
    </section>
  );
}

function TicketTemplates() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Ticket templates</h1>
          <p>Pre-fill common tickets and outbound emails.</p>
        </div>
        <button type="button">New template</button>
      </header>
      <article className={styles.listCard}>
        <div>
          <h2>Start a return</h2>
          <p>Pre-fills a normal-priority request with a standard return summary.</p>
        </div>
        <button type="button">Clone</button>
        <button type="button">Edit</button>
        <button type="button">•••</button>
      </article>
      <Guard>No template was created, cloned, edited or deleted.</Guard>
    </section>
  );
}

function ScenarioAutomations() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Scenario automations</h1>
          <p>Apply a recurring series of ticket updates with one action.</p>
        </div>
        <button type="button">New scenario</button>
      </header>
      <div className={styles.toolbarRow}>
        <input aria-label="Search fictional scenarios" placeholder="Search scenarios" />
        <button type="button">Showing: Shared</button>
      </div>
      <article className={styles.listCard}>
        <div>
          <h2>Follow up on overdue tickets</h2>
          <p>Add a note and notify a team lead for selected overdue tickets.</p>
        </div>
        <button type="button">Clone</button>
        <button type="button">Edit</button>
        <button type="button">•••</button>
      </article>
      <Guard>No scenario was searched, created, cloned, edited, run or deleted.</Guard>
    </section>
  );
}

function TagsManagement() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Manage tags</h1>
          <p>Review tags and their use across support content.</p>
        </div>
        <button type="button" disabled>
          Delete
        </button>
      </header>
      <div className={styles.toolbarRow}>
        <button type="button">Sorted by name</button>
        <input aria-label="Search fictional tags" placeholder="Search tags" />
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" aria-label="Select all fictional tags" />
            </th>
            <th>Tag</th>
            <th>Archived</th>
            <th>Tickets</th>
            <th>Contacts</th>
            <th>Articles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" aria-label="Select follow-up tag" />
            </td>
            <td>
              <b>follow-up</b>
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <Guard>No tag was added, selected, renamed, merged, opened or deleted.</Guard>
    </section>
  );
}

function EntityFieldsBuilder({ kind }: { kind: 'contact' | 'company' }) {
  const palette =
    kind === 'contact'
      ? [
          'Single-line text',
          'Multi-line text',
          'Checkbox',
          'Dropdown',
          'Date',
          'Number',
          'URL field',
        ]
      : [
          'Single-line text',
          'Multi-line text',
          'Checkbox',
          'Dropdown',
          'Date',
          'Phone number',
          'Number',
          'URL field',
        ];
  const fields =
    kind === 'contact'
      ? [
          'Full name',
          'Title',
          'Email',
          'Mobile phone',
          'Work phone',
          'Company',
          'Address',
          'Time zone',
          'Language',
          'Tags',
          'About',
          'External ID',
          'Social handle',
          'Contact lists',
        ]
      : [
          'Company name',
          'Description',
          'Notes',
          'Company domains',
          'Health score',
          'Account tier',
          'Renewal date',
          'Industry',
        ];
  return (
    <section className={styles.fieldBuilder}>
      <aside>
        <h2>Drag and drop to create fields</h2>
        {palette.map((item) => (
          <button type="button" key={item}>
            {item}
          </button>
        ))}
      </aside>
      <main>
        <header>
          <input aria-label={`Search fictional ${kind} fields`} placeholder="Search fields" />
          <label>
            <input type="checkbox" /> Include hidden fields
          </label>
          <button type="button">Customize widget</button>
        </header>
        {fields.map((field, index) => (
          <button className={styles.fieldRow} type="button" key={field}>
            <span>
              <b>{field}</b>
              <small>
                Default
                {index === 0 || (kind === 'contact' && [2, 3, 11, 12].includes(index))
                  ? ' · Unique'
                  : ''}
              </small>
            </span>
            <span>Edit</span>
          </button>
        ))}
        <Guard>No field, widget, visibility, order or validation setting was changed.</Guard>
      </main>
    </section>
  );
}

function AuditLog() {
  const rows = [
    ['Support admin', 'Created', 'Company', 'Northstar Labs'],
    ['System', 'Updated', 'Web widget', 'Topic translation'],
    ['System', 'Published', 'Survey state', 'Support survey'],
    ['Support admin', 'Updated', 'Agent', 'Signed in'],
  ];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Audit log</h1>
          <p>Review account configuration activity.</p>
        </div>
        <div>
          <button type="button">Export</button>
          <button type="button">Filters</button>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>Performed by</th>
            <th>Event</th>
            <th>What changed</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join('-')}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Guard>
        All rows are fictional. No provider actor, IP address, entity, filter or export was retained
        or opened.
      </Guard>
    </section>
  );
}

function DataUsageReports() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Data usage</h1>
          <p>The observed route opened a curated analytics report library.</p>
        </div>
        <input aria-label="Search fictional usage reports" placeholder="Search reports" />
      </header>
      <nav className={styles.sideTabs}>
        {[
          'Recent',
          'Favorites',
          'All reports',
          'My reports',
          'Curated reports',
          'Private reports',
          'Shared reports',
        ].map((item, index) => (
          <button type="button" key={item} aria-pressed={index === 2}>
            {item}
          </button>
        ))}
      </nav>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Created by</th>
            <th>Created date</th>
            <th>Last modified</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Integration usage overview</b> <span>Curated</span>
            </td>
            <td>System</td>
            <td>Recently</td>
            <td>Recently</td>
          </tr>
          <tr>
            <td>
              <b>API usage overview</b> <span>Curated</span>
            </td>
            <td>System</td>
            <td>Recently</td>
            <td>Recently</td>
          </tr>
        </tbody>
      </table>
      <Guard>No report, tour, search, sort, schedule or data export was opened.</Guard>
    </section>
  );
}

function AccountExports() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Account exports</h1>
          <p>Showing exports triggered in the last 30 days.</p>
        </div>
        <div>
          <button type="button">New export</button>
          <button type="button">Filters</button>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>Initiated by</th>
            <th>Initiated at</th>
            <th>Type</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Export file</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={7}>
              <div className={styles.emptyPanel}>
                <h2>No jobs found</h2>
                <p>There are no fictional jobs to display.</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Guard>No export or filter was created, opened, generated or downloaded.</Guard>
    </section>
  );
}

function ScheduledExports() {
  const exports = [
    ['Daily export of ticket activities', 'Ticket updates performed by people or automations'],
    [
      'Daily export of handling-time activities',
      'Handling-time stopwatch events for a selected day',
    ],
  ];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Scheduled exports</h1>
          <p>Configure one daily activity schedule for account reporting.</p>
        </div>
      </header>
      {exports.map(([title, copy]) => (
        <article className={styles.listCard} key={title}>
          <div>
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
          <button type="button">Configure</button>
        </article>
      ))}
      <Guard>
        No export schedule, delivery, file generation or download was configured or tested.
      </Guard>
    </section>
  );
}

function CustomerSatisfactionSurveys() {
  const surveys = ['Basic support survey', 'Detailed support survey', 'Quick support survey'];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Customer satisfaction surveys</h1>
          <p>Create and manage surveys for customer feedback.</p>
        </div>
        <div>
          <button type="button">Manage frequency</button>
          <button type="button">New survey</button>
        </div>
      </header>
      <div className={styles.toolbarRow}>
        <input aria-label="Search fictional surveys" placeholder="Search surveys" />
        <button type="button">Sort by: Created</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Active channels</th>
            <th>Languages</th>
            <th>Created</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((name) => (
            <tr key={name}>
              <td>
                <b>{name}</b>
              </td>
              <td>0</td>
              <td>English</td>
              <td>System · Recently</td>
              <td>
                <span className={styles.statusDot}>●</span> Active
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Guard>No survey, frequency, channel, language, filter or status was changed.</Guard>
    </section>
  );
}

function CannedForms() {
  return (
    <section className={styles.onboarding}>
      <header>
        <h1>Canned forms</h1>
        <p>Collect structured information inside a ticket reply.</p>
      </header>
      <div className={styles.onboardingPanel}>
        <h2>Create a reusable form</h2>
        <p>Agents can insert a form and record customer responses on the ticket.</p>
        <button type="button">Create new</button>
        <span>or</span>
        <h2>Start with a template</h2>
        <div className={styles.groupSuggestions}>
          <span>Delivery questions</span>
          <span>Device information</span>
        </div>
      </div>
      <Guard>No canned form or template was opened, created, inserted or submitted.</Guard>
    </section>
  );
}

function SkillsOnboarding() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Skills</h1>
          <p>Route requests to agents by expertise and priority.</p>
        </div>
        <button type="button">Create skill</button>
      </header>
      <nav className={styles.tabRow}>
        <button type="button" aria-pressed="true">
          Skill list
        </button>
        <button type="button">Agent list</button>
      </nav>
      <div className={styles.emptyPanel}>
        <span>✦</span>
        <h2>You have not created a skill yet</h2>
        <p>Use rules to associate ticket attributes with agent expertise.</p>
        <button type="button">Create skills</button>
      </div>
      <Guard>No skill, rule, priority or agent association was created or changed.</Guard>
    </section>
  );
}

function AgentShiftsOnboarding() {
  return (
    <section className={styles.onboarding}>
      <header>
        <h1>Agent shifts</h1>
        <p>Plan support schedules in one place.</p>
      </header>
      <div className={styles.onboardingPanel}>
        <h2>Take your first step away from spreadsheets</h2>
        <p>Create schedules that match team coverage needs.</p>
        <button type="button">Create shifts</button>
      </div>
      <Guard>No shift, schedule or agent assignment was created.</Guard>
    </section>
  );
}

function AgentStatuses() {
  const rows = [
    ['All channels', 'All queues', 'Available'],
    ['Email', 'Email queue', 'Available'],
    ['Messaging', 'Messaging queue', 'Available'],
    ['Idle', '—', 'Unavailable'],
    ['Focus time', '—', 'Unavailable'],
  ];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Agent statuses</h1>
          <p>Show availability for routing and workforce visibility.</p>
        </div>
        <button type="button">New agent status</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Status name</th>
            <th>Queues</th>
            <th>Type</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
              <td>
                <span className={styles.statusDot}>●</span> Enabled
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Guard>
        Rows are representative. No provider status, queue, availability or routing state was
        changed.
      </Guard>
    </section>
  );
}

function QuickAutomations() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Quick automations</h1>
          <p>Time-based actions for real-time support channels.</p>
        </div>
        <button type="button">New rule</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Source</th>
            <th>Enabled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Chat welcome rule</b>
            </td>
            <td>Representative follow-up for a fictional topic</td>
            <td>Web chat</td>
            <td>
              <span className={styles.statusDot}>●</span> Enabled
            </td>
          </tr>
        </tbody>
      </table>
      <article className={styles.infoBanner}>
        <h2>Available actions</h2>
        <p>
          Inform customers of delays, reassign work, route to fallback groups, follow up, reduce
          routing load, and track resolution delays.
        </p>
      </article>
      <Guard>
        The row is fictional. No rule, trigger, source, action or enabled state was changed.
      </Guard>
    </section>
  );
}

function SessionReplayOnboarding() {
  return (
    <section className={styles.onboarding}>
      <header>
        <h1>Session replay integration</h1>
        <p>Bring website interaction context into support.</p>
      </header>
      <div className={styles.onboardingPanel}>
        <h2>See where customers encountered an issue</h2>
        <p>Connect an external session-replay product with an API key.</p>
        <label>
          API key
          <input
            aria-label="Fictional session replay API key"
            placeholder="Not connected"
            disabled
          />
        </label>
        <button type="button">Integrate</button>
      </div>
      <Guard>
        No API key, account, recording or integration was entered, created or connected.
      </Guard>
    </section>
  );
}

function AverageHandlingTime() {
  const options = [
    ['Hide stopwatch from agents', 'Continue tracking while hiding the visible timer.'],
    ['Mark handling-time logs as billable', 'Classify the recorded handling time in reports.'],
    ['Include unassigned ticket view time', 'Count viewing time before assignment.'],
  ];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Average handling time</h1>
          <p>Track time agents spend viewing tickets.</p>
        </div>
        <button type="button">Enable</button>
      </header>
      {options.map(([title, copy]) => (
        <label className={styles.toggleRow} key={title}>
          <span>
            <b>{title}</b>
            <small>{copy}</small>
          </span>
          <input type="checkbox" />
        </label>
      ))}
      <div className={styles.toolbarRow}>
        <button type="button">Save</button>
        <button type="button">Cancel</button>
      </div>
      <Guard>No timer, billing, ticket-status or tracking setting was enabled or saved.</Guard>
    </section>
  );
}

function CustomObjectsError() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Custom objects</h1>
          <p>Create structured business data for support context.</p>
        </div>
      </header>
      <div className={styles.errorPanel} role="alert">
        <span>!</span>
        <div>
          <h2>Unable to load custom objects</h2>
          <p>
            The observed provider route reported too many requests and advised contacting an
            administrator or support.
          </p>
        </div>
        <button type="button">Retry</button>
      </div>
      <Guard>
        This reconstructs a transient observed error. No schema, field or object was created, and
        Retry is local only.
      </Guard>
    </section>
  );
}

function AdvancedTicketing() {
  const features = [
    ['Linked tickets', 'Link similar requests and share status updates together.'],
    ['Parent-child ticketing', 'Break a complex issue into work handled by separate teams.'],
    ['Shared ownership', 'Collaborate with another team while retaining visibility.'],
  ];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Advanced ticketing</h1>
          <p>Coordinate related work across teams.</p>
        </div>
      </header>
      <div className={styles.featureGrid}>
        {features.map(([title, copy]) => (
          <article className={styles.listCard} key={title}>
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
            <button type="button">Learn more</button>
          </article>
        ))}
      </div>
      <Guard>No ticket was linked, split, shared or updated.</Guard>
    </section>
  );
}

function SandboxOnboarding() {
  return (
    <section className={styles.onboarding}>
      <header>
        <h1>Sandbox</h1>
        <p>Test configurations in a replica before applying them.</p>
      </header>
      <div className={styles.onboardingPanel}>
        <h2>Build a test account</h2>
        <p>
          Configuration can be copied while confidential tickets and customer data remain excluded.
        </p>
        <button type="button">Build sandbox</button>
      </div>
      <Guard>No sandbox was built, activated, populated or synchronized.</Guard>
    </section>
  );
}

function FreshserviceOnboarding() {
  return (
    <section className={styles.onboarding}>
      <header>
        <h1>Freshservice</h1>
        <p>Connect customer support with internal service teams.</p>
      </header>
      <div className={styles.onboardingPanel}>
        <h2>Everything you need for IT support</h2>
        <div className={styles.groupSuggestions}>
          <span>Multi-channel support</span>
          <span>Asset management</span>
          <span>Mobile access</span>
          <span>Team collaboration</span>
        </div>
        <button type="button">Create account</button>
        <button type="button">Connect account</button>
      </div>
      <Guard>No account, trial, integration or authorization flow was opened.</Guard>
    </section>
  );
}

function FreshsalesSuiteIntegration() {
  const items = [
    'Unify sales, marketing and support context',
    'Collaborate through tasks and support tickets',
    'Share support visibility with sales agents',
    'Synchronize contacts and accounts',
  ];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Freshsales Suite</h1>
          <p>Connect CRM and conversational support.</p>
        </div>
        <button type="button">Learn more</button>
      </header>
      <div className={styles.featureGrid}>
        {items.map((item) => (
          <article className={styles.listCard} key={item}>
            <div>
              <h2>{item}</h2>
              <p>Integration capability described by the provider onboarding page.</p>
            </div>
          </article>
        ))}
      </div>
      <Guard>
        No CRM, contact, account, task or ticket synchronization was configured or tested.
      </Guard>
    </section>
  );
}

function WhatsAppOnboarding() {
  return (
    <section className={styles.onboarding}>
      <header>
        <h1>WhatsApp</h1>
        <p>Receive and reply to customer messages from the support inbox.</p>
      </header>
      <div className={styles.onboardingPanel}>
        <h2>Connect a WhatsApp Business number</h2>
        <p>
          Use real-time conversations and approved templates after connecting an authorized business
          account.
        </p>
        <button type="button">Connect number</button>
      </div>
      <Guard>
        No number, business account, template, campaign, chatbot or authorization was connected or
        opened.
      </Guard>
    </section>
  );
}

function PortalsOverview() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Portals</h1>
          <p>Offer a branded self-service destination for requests and help articles.</p>
        </div>
      </header>
      <article className={styles.listCard}>
        <div>
          <h2>Default portal</h2>
          <p>support.example.test</p>
        </div>
        <button type="button">Customize portal</button>
      </article>
      <article className={styles.infoBanner}>
        <h2>Your self-service portal is ready</h2>
        <p>Customers can raise and track support requests and browse help content.</p>
      </article>
      <Guard>
        The domain is fictional. No portal, theme, visibility or branding setting was opened or
        changed.
      </Guard>
    </section>
  );
}

function SupportEmailSetup() {
  const servers = ['Gmail', 'Microsoft 365', 'Custom server', 'Freshworks mail server'];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>New support email</h1>
          <p>Convert incoming support email into tickets.</p>
        </div>
      </header>
      <h2>Connect your support email</h2>
      <div className={styles.choiceGrid}>
        {servers.map((server) => (
          <button type="button" key={server}>
            {server}
          </button>
        ))}
      </div>
      <article className={styles.listCard}>
        <div>
          <h2>Starting from scratch?</h2>
          <p>support@help.example.test</p>
          <small>Share this fictional address to illustrate the ready-to-use path.</small>
        </div>
        <button type="button">Use this email</button>
      </article>
      <Guard>
        The address is fictional. No mailbox, forwarding, domain, server or verification flow was
        selected or configured.
      </Guard>
    </section>
  );
}

function MobileChatSdk() {
  return (
    <section className={styles.onboarding}>
      <header>
        <h1>Mobile Chat SDK</h1>
        <p>Bring chat support to iOS and Android apps.</p>
      </header>
      <div className={styles.onboardingPanel}>
        <h2>Select a widget to begin your SDK setup</h2>
        <label>
          Web widget
          <select defaultValue="sample">
            <option value="sample">Sample support widget</option>
          </select>
        </label>
        <button type="button">Create</button>
        <h2>Sample preview</h2>
        <p>A mobile messenger preview appears after a widget is selected.</p>
      </div>
      <Guard>
        The widget name is fictional. No SDK, app, widget, credential or platform configuration was
        created.
      </Guard>
    </section>
  );
}

function FacebookOnboarding() {
  return (
    <section className={styles.onboarding}>
      <header>
        <h1>Facebook</h1>
        <p>Bring page posts, comments and direct messages into the support inbox.</p>
      </header>
      <div className={styles.onboardingPanel}>
        <h2>Connect your Facebook page</h2>
        <p>Agents can respond to customer activity after an authorized page is connected.</p>
        <button type="button">Connect page</button>
        <div className={styles.groupSuggestions}>
          <span>Agent experience</span>
          <span>AI Agent setup</span>
        </div>
      </div>
      <Guard>
        No page, account, message, comment, post, AI Agent or authorization flow was opened or
        connected.
      </Guard>
    </section>
  );
}

function FeedbackForm() {
  const options = [
    'Attach a file',
    'Use HTTPS',
    'Search articles',
    'Enable CAPTCHA',
    'Attach screenshot',
  ];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Feedback form</h1>
          <p>Customize and embed a ticket form in a website or product.</p>
        </div>
      </header>
      <div className={styles.settingsGrid}>
        <label>
          Form heading
          <input defaultValue="Help and support" />
        </label>
        <label>
          Submit button
          <input defaultValue="Send feedback" />
        </label>
        <label>
          Confirmation message
          <input defaultValue="Thank you for your feedback" />
        </label>
        <label>
          Form height
          <input defaultValue="500 px" />
        </label>
      </div>
      <h2>Form options</h2>
      <div className={styles.choiceGrid}>
        {options.map((option) => (
          <label key={option}>
            <input type="checkbox" /> {option}
          </label>
        ))}
      </div>
      <label>
        Embed code
        <textarea
          aria-label="Fictional feedback form embed code"
          value="<!-- Generated after configuration -->"
          readOnly
        />
      </label>
      <Guard>
        Values are fictional. No option, field, CAPTCHA, code generation or provider setting was
        changed or copied.
      </Guard>
    </section>
  );
}

function ProactiveOutreachError() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Proactive outreach</h1>
          <p>Reach customers with updates or issue resolution.</p>
        </div>
      </header>
      <div className={styles.errorPanel} role="alert">
        <span>!</span>
        <div>
          <h2>Something went wrong</h2>
          <p>The observed provider route returned a generic error page.</p>
        </div>
        <button type="button">Go back</button>
      </div>
      <Guard>
        This is an observed error state. No outreach, audience, message, campaign or recovery action
        was opened.
      </Guard>
    </section>
  );
}

function Omniroute() {
  const tabs = ['Agent load settings', 'Queues', 'Assignment preferences', 'Group routing methods'];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Omniroute</h1>
          <p>Manage workloads and automatic ticket assignment across channels.</p>
        </div>
      </header>
      <nav className={styles.tabRow}>
        {tabs.map((item, index) => (
          <button type="button" aria-pressed={index === 0} key={item}>
            {item}
          </button>
        ))}
      </nav>
      <div className={styles.toolbarRow}>
        <button type="button">All groups</button>
        <input aria-label="Search fictional agents" placeholder="Search agents" />
        <button type="button">Default load</button>
      </div>
      <div className={styles.emptyPanel}>
        <h2>No agent entries</h2>
        <p>There are no fictional entries to display.</p>
      </div>
      <Guard>
        No load, queue, assignment priority, idle timeout, group routing or agent availability was
        changed.
      </Guard>
    </section>
  );
}

function ThreadsSettings() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Threads</h1>
          <p>Organize chat-like discussions around topics or tickets.</p>
        </div>
        <button type="button">Disable</button>
      </header>
      <article className={styles.infoBanner}>
        <h2>Collaborate without cluttering the conversation</h2>
        <p>Some automations and API integrations may require updates when Threads changes.</p>
      </article>
      <Guard>
        No thread, ticket, participant, automation, API behavior or enabled state was changed.
      </Guard>
    </section>
  );
}

function MultipleProducts() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Multiple products</h1>
          <p>Support separate products and branded portals from one account.</p>
        </div>
        <button type="button">New product</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Portal</th>
            <th>Support email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Example product</b>
              <small>Default</small>
            </td>
            <td>support.example.test</td>
            <td>help@example.test</td>
            <td>
              <button type="button">Customize portal</button> <button type="button">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Guard>
        All values are fictional. No product, email, portal, group queue, theme or record was opened
        or changed.
      </Guard>
    </section>
  );
}

function AppsMarketplace() {
  const categories = [
    'Data and analytics',
    'Chat and telephony',
    'CRM and sales',
    'Social engagement',
    'Knowledge management',
    'Security and compliance',
    'AI and bots',
  ];
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Apps</h1>
          <p>Get more done with support integrations.</p>
        </div>
        <button type="button">Manage apps</button>
      </header>
      <div className={styles.marketplaceLayout}>
        <aside>
          <input aria-label="Search fictional apps" placeholder="Search apps" />
          <button type="button">Sort by: Relevance</button>
          {categories.map((item) => (
            <label key={item}>
              <input type="checkbox" /> {item}
            </label>
          ))}
        </aside>
        <main>
          <h2>Recommended apps</h2>
          <div className={styles.appSkeletons}>
            {Array.from({ length: 6 }, (_, index) => (
              <span key={index} aria-label="Loading app card" />
            ))}
          </div>
          <h2>Popular apps</h2>
        </main>
      </div>
      <Guard>
        No app, filter, search, detail, installation, authorization or management action was opened.
      </Guard>
    </section>
  );
}

function McpSettings() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Model Context Protocol (MCP)</h1>
          <p>Govern how authorized external AI assistants interact with support data.</p>
        </div>
      </header>
      <article className={styles.listCard}>
        <div>
          <h2>MCP Server</h2>
          <p>Provide governed access to enabled tools and modules for authorized users.</p>
        </div>
        <label>
          <input type="checkbox" disabled /> Enable MCP Server
        </label>
      </article>
      <article className={styles.infoBanner}>
        <p>
          External agents may read approved support resources and take allowed actions according to
          account controls.
        </p>
      </article>
      <Guard>
        The provider enabled state was excluded. No server, module, tool, permission, authentication
        or access setting was changed.
      </Guard>
    </section>
  );
}

function HelpdeskSettings() {
  return (
    <section className={styles.managementPage}>
      <header>
        <div>
          <h1>Helpdesk settings</h1>
          <p>Configure account-wide language, ticket and portal preferences.</p>
        </div>
      </header>
      <div className={styles.settingsGrid}>
        <label>
          Primary language
          <select defaultValue="en">
            <option value="en">English</option>
          </select>
        </label>
        <label>
          Date format
          <select defaultValue="dmy">
            <option value="dmy">Day-month-year</option>
            <option value="mdy">Month-day-year</option>
          </select>
        </label>
        <label>
          Time zone
          <select defaultValue="utc">
            <option value="utc">UTC</option>
          </select>
        </label>
        <label>
          Conversation order
          <select defaultValue="oldest">
            <option value="oldest">Show oldest on top</option>
            <option value="newest">Show newest on top</option>
          </select>
        </label>
        <label>
          Ticket view layout
          <select defaultValue="choose">
            <option value="choose">Allow agents to choose</option>
            <option value="card">Card</option>
            <option value="table">Table</option>
          </select>
        </label>
        <label>
          Default font
          <select defaultValue="system">
            <option value="system">System</option>
          </select>
        </label>
      </div>
      <h2>Helpdesk restrictions</h2>
      <label>
        <input type="radio" name="fictional-domain-access" defaultChecked /> Users from any domain
      </label>
      <label>
        <input type="radio" name="fictional-domain-access" /> Users from approved domains
      </label>
      <div className={styles.toolbarRow}>
        <button type="button">Save</button>
        <button type="button">Cancel</button>
      </div>
      <Guard>
        Values are fictional. No account, language, time zone, ticket, portal, branding, restriction
        or font setting was changed or saved.
      </Guard>
    </section>
  );
}

export function FreshchatOmniPreview({
  variant,
  initialState,
  disabled = false,
}: FreshchatOmniPreviewProps) {
  return (
    <div className={styles.frame} aria-disabled={disabled}>
      {variant === 'application-shell' && <ApplicationShell />}
      {variant === 'channel-chooser' && <ChannelChooser initialState={initialState} />}
      {variant === 'product-switcher' && <ProductSwitcher />}
      {variant === 'command-center' && <CommandCenter />}
      {variant === 'ticket-view-selector' && <TicketViewSelector />}
      {variant === 'admin-catalogue' && <AdminCatalogue />}
      {variant === 'web-chat-customizer' && <WebChatCustomizer />}
      {variant === 'web-chat-configuration' && <WebChatConfiguration initialState={initialState} />}
      {variant === 'ai-agent-unavailable' && <AiAgentUnavailable />}
      {variant === 'sample-dashboard' && <SampleDashboard />}
      {variant === 'contacts-list' && <DirectoryShell kind="contacts" />}
      {variant === 'companies-list' && <DirectoryShell kind="companies" />}
      {variant === 'knowledge-base-onboarding' && <KnowledgeBaseOnboarding />}
      {variant === 'forums-onboarding' && <ForumsOnboarding />}
      {variant === 'analytics-report-library' && <AnalyticsReportLibrary />}
      {variant === 'freddy-insights-onboarding' && <FreddyInsightsOnboarding />}
      {variant === 'global-new-menu' && <GlobalNewMenu />}
      {variant === 'global-search' && <GlobalSearch />}
      {variant === 'help-menu' && <HelpMenu />}
      {variant === 'apps-menu' && <AppsMenu />}
      {variant === 'agents-management' && <AgentsManagement />}
      {variant === 'groups-onboarding' && <GroupsOnboarding />}
      {variant === 'roles-management' && <RolesManagement />}
      {variant === 'business-hours' && <BusinessHours />}
      {variant === 'canned-responses-onboarding' && <CannedResponsesOnboarding />}
      {variant === 'ticket-fields-builder' && <TicketFieldsBuilder />}
      {variant === 'automations-empty' && <AutomationsEmpty />}
      {variant === 'sla-policies' && <SlaPolicies />}
      {variant === 'ticket-forms' && <TicketForms />}
      {variant === 'email-notifications' && <EmailNotifications />}
      {variant === 'ticket-templates' && <TicketTemplates />}
      {variant === 'scenario-automations' && <ScenarioAutomations />}
      {variant === 'tags-management' && <TagsManagement />}
      {variant === 'contact-fields-builder' && <EntityFieldsBuilder kind="contact" />}
      {variant === 'company-fields-builder' && <EntityFieldsBuilder kind="company" />}
      {variant === 'audit-log' && <AuditLog />}
      {variant === 'data-usage-reports' && <DataUsageReports />}
      {variant === 'account-exports' && <AccountExports />}
      {variant === 'scheduled-exports' && <ScheduledExports />}
      {variant === 'customer-satisfaction-surveys' && <CustomerSatisfactionSurveys />}
      {variant === 'canned-forms' && <CannedForms />}
      {variant === 'skills-onboarding' && <SkillsOnboarding />}
      {variant === 'agent-shifts-onboarding' && <AgentShiftsOnboarding />}
      {variant === 'agent-statuses' && <AgentStatuses />}
      {variant === 'quick-automations' && <QuickAutomations />}
      {variant === 'session-replay-onboarding' && <SessionReplayOnboarding />}
      {variant === 'average-handling-time' && <AverageHandlingTime />}
      {variant === 'custom-objects-error' && <CustomObjectsError />}
      {variant === 'advanced-ticketing' && <AdvancedTicketing />}
      {variant === 'sandbox-onboarding' && <SandboxOnboarding />}
      {variant === 'freshservice-onboarding' && <FreshserviceOnboarding />}
      {variant === 'freshsales-suite-integration' && <FreshsalesSuiteIntegration />}
      {variant === 'whatsapp-onboarding' && <WhatsAppOnboarding />}
      {variant === 'portals-overview' && <PortalsOverview />}
      {variant === 'support-email-setup' && <SupportEmailSetup />}
      {variant === 'mobile-chat-sdk' && <MobileChatSdk />}
      {variant === 'facebook-onboarding' && <FacebookOnboarding />}
      {variant === 'feedback-form' && <FeedbackForm />}
      {variant === 'proactive-outreach-error' && <ProactiveOutreachError />}
      {variant === 'omniroute' && <Omniroute />}
      {variant === 'threads-settings' && <ThreadsSettings />}
      {variant === 'multiple-products' && <MultipleProducts />}
      {variant === 'apps-marketplace' && <AppsMarketplace />}
      {variant === 'mcp-settings' && <McpSettings />}
      {variant === 'helpdesk-settings' && <HelpdeskSettings />}
      {variant === 'messenger-home' && <MessengerHome />}
      {variant === 'faq-search' && <FaqSearch initialState={initialState} />}
      {variant === 'faq-article' && <FaqArticle />}
    </div>
  );
}

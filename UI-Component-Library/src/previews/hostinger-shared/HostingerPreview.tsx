import { useMemo, useState, type ReactNode } from 'react';
import styles from './HostingerPreview.module.css';

export type HostingerVariant =
  | 'hpanel-shell'
  | 'account-settings'
  | 'agent-memory'
  | 'home-dashboard'
  | 'service-marketplace-empty'
  | 'website-inventory-plan'
  | 'global-search'
  | 'account-menu'
  | 'todo-panel'
  | 'agent-panel'
  | 'website-filter'
  | 'plan-comparison'
  | 'domain-empty'
  | 'marketplace-grid'
  | 'profile-navigation'
  | 'memory-consent'
  | 'notification-matrix'
  | 'account-sharing';

export interface HostingerPreviewProps {
  variant: HostingerVariant;
  initialState?: string;
  disabled?: boolean;
}

const navItems = ['Home', 'Agent', 'Websites', 'Domains', 'Emails', 'More services'];
const profileItems = [
  'Account information',
  'Account sharing',
  'Security',
  'Account activity',
  'Notification settings',
  'AI memory',
];

function GuardNotice({ children }: { children: string }) {
  return (
    <p className={styles.notice} role="status">
      {children}
    </p>
  );
}

function Shell({ children, active = 'Home' }: { children: ReactNode; active?: string }) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <strong className={styles.logo}>HOSTINGER</strong>
        <div className={styles.headerActions}>
          <button type="button">Agent</button>
          <button type="button">Search</button>
          <button type="button">
            To-dos <span className={styles.badge}>1</span>
          </button>
          <button type="button">Account</button>
        </div>
      </header>
      <aside className={styles.sidebar} aria-label="Hostinger fixture navigation">
        {navItems.map((item) => (
          <button type="button" key={item} aria-current={item === active ? 'page' : undefined}>
            {item}
          </button>
        ))}
        <span>Hostinger apps</span>
        <button type="button">AI Builder</button>
        <button type="button">Ecommerce</button>
      </aside>
      <main className={styles.workspace}>{children}</main>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={styles.panel} aria-label={title}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ActionButton({
  children,
  onClick,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button className={styles.primary} type="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

function GlobalSearch({
  initialState = 'open',
  disabled = false,
}: Omit<HostingerPreviewProps, 'variant'>) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [query, setQuery] = useState(initialState === 'no-route' ? 'SEO' : '');
  const results = query.trim()
    ? []
    : ['Deploy OpenSEO on a new VPS', 'Deploy ExpenseOwl on a new VPS'];
  return (
    <div className={styles.standalone}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        Search
      </button>
      {open && (
        <div className={styles.dialog} role="dialog" aria-label="Global search">
          <div className={styles.searchRow}>
            <input
              aria-label="Search"
              value={query}
              disabled={disabled}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search hPanel"
            />
            <kbd>⌘ K</kbd>
          </div>
          <div className={styles.chips} aria-label="Search categories">
            <button type="button" aria-pressed="true">
              All
            </button>
            <button type="button" aria-pressed="false">
              VPS
            </button>
          </div>
          {results.map((result) => (
            <button className={styles.result} type="button" key={result}>
              {result}
              <span>VPS</span>
            </button>
          ))}
          {query.trim() && (
            <button className={styles.agentFallback} type="button">
              Ask Hostinger Agent about “{query}”
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function AccountMenu({ initialState = 'open' }: Omit<HostingerPreviewProps, 'variant'>) {
  const [open, setOpen] = useState(initialState !== 'closed');
  return (
    <div className={styles.standalone}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        Account
      </button>
      {open && (
        <div className={styles.accountMenu} role="dialog" aria-label="Account menu">
          <div className={styles.avatar}>AM</div>
          <strong>Alex Morgan</strong>
          <small>Fictional local fixture</small>
          <nav aria-label="Account destinations">
            {[
              'Account information',
              'Account sharing',
              'Billing',
              'Security',
              'Account activity',
              'Notification settings',
              'AI memory',
              'Language · English',
              'Learning Lab',
              'Hire an expert',
              'Dark mode',
              'Log out',
            ].map((item) => (
              <button type="button" key={item}>
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

function TodoPanel({ initialState = 'unread' }: Omit<HostingerPreviewProps, 'variant'>) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [read, setRead] = useState(initialState === 'read');
  return (
    <div className={styles.standalone}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        To-dos {!read && <span className={styles.badge}>1</span>}
      </button>
      {open && (
        <div className={styles.todoPanel} role="dialog" aria-label="Your to-dos">
          <div className={styles.panelHead}>
            <h2>Your to-dos</h2>
            <button type="button" onClick={() => setRead(true)}>
              Mark all as read
            </button>
          </div>
          {read ? (
            <p>All fictional tasks are marked as read locally.</p>
          ) : (
            <article>
              <strong>Complete your account profile</strong>
              <p>Add a recovery option to keep this fictional workspace current.</p>
              <ActionButton>Review profile</ActionButton>
            </article>
          )}
        </div>
      )}
    </div>
  );
}

function AgentPanel({ initialState = 'memory' }: Omit<HostingerPreviewProps, 'variant'>) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.standalone}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        Agent
      </button>
      {open && (
        <aside className={styles.agentPanel} role="dialog" aria-label="Hostinger Agent">
          <div className={styles.panelHead}>
            <h2>Agent</h2>
            <div>
              <button type="button">Full page</button>
              <button type="button" aria-label="Close Agent" onClick={() => setOpen(false)}>
                ×
              </button>
            </div>
          </div>
          <h3>Let Hostinger Agent remember your setup</h3>
          <ul>
            <li>Pick up where you left off</li>
            <li>Flag setup issues early</li>
            <li>Receive goal-aware guidance</li>
          </ul>
          <div className={styles.actions}>
            <ActionButton
              onClick={() => setNotice('AI memory was not enabled. This is a local fixture.')}
            >
              Turn on AI memory
            </ActionButton>
            <button
              type="button"
              onClick={() => setNotice('The panel remains local and no preference was sent.')}
            >
              Maybe later
            </button>
          </div>
          {notice && <GuardNotice>{notice}</GuardNotice>}
        </aside>
      )}
    </div>
  );
}

function WebsiteFilter({ initialState = 'ai-builder' }: Omit<HostingerPreviewProps, 'variant'>) {
  const [selected, setSelected] = useState(
    initialState === 'web-apps'
      ? 'Web Apps'
      : initialState === 'all'
        ? 'All websites'
        : 'AI Builder'
  );
  const filters = ['All websites', 'WordPress', 'AI Builder', 'Web Apps', 'PHP/HTML'];
  return (
    <Panel title="Websites">
      <div className={styles.filters} aria-label="Website type">
        {filters.map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={selected === item}
            onClick={() => setSelected(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.emptyCard}>
        <h3>
          {selected === 'Web Apps'
            ? 'Deploy your web app'
            : selected === 'AI Builder'
              ? 'Build a website with AI'
              : 'Your websites'}
        </h3>
        <p>
          {selected === 'Web Apps'
            ? 'Connect a coding agent or deploy from a fictional repository.'
            : 'No fictional websites are available for this filter.'}
        </p>
        <ActionButton>
          {selected === 'Web Apps' ? 'Connect coding agent' : 'Get started'}
        </ActionButton>
      </div>
    </Panel>
  );
}

const planData = [
  ['Single', '1 website', '$2.99'],
  ['Premium', '25 websites', '$3.99'],
  ['Business', '50 websites', '$4.99'],
  ['Cloud Startup', '100 websites', '$9.99'],
];

function PlanComparison({
  initialState = 'business',
  disabled = false,
}: Omit<HostingerPreviewProps, 'variant'>) {
  const [family, setFamily] = useState(
    initialState === 'cloud'
      ? 'Cloud'
      : initialState === 'agency'
        ? 'Agency'
        : 'Individual & Business'
  );
  const [notice, setNotice] = useState('');
  return (
    <Panel title="Choose a hosting plan">
      <div className={styles.tabs} role="tablist" aria-label="Plan family">
        {['Individual & Business', 'Cloud', 'Agency'].map((item) => (
          <button
            role="tab"
            aria-selected={family === item}
            type="button"
            key={item}
            onClick={() => setFamily(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <label className={styles.selectLabel}>
        Billing period
        <select disabled={disabled}>
          <option>48 months</option>
          <option>24 months</option>
          <option>12 months</option>
        </select>
      </label>
      <div className={styles.planGrid}>
        {planData.map(([name, sites, price]) => (
          <article className={styles.planCard} key={name}>
            <h3>{name}</h3>
            <strong>
              {price}
              <small>/month</small>
            </strong>
            <p>{sites} · fictional comparison data</p>
            <ActionButton
              disabled={disabled}
              onClick={() => setNotice('Plan selection is disabled in this fictional fixture.')}
            >
              Choose plan
            </ActionButton>
          </article>
        ))}
      </div>
      <details>
        <summary>Hostinger Website Builder</summary>
        <p>AI builder · drag and drop editor · templates · AI image and writing tools</p>
      </details>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </Panel>
  );
}

function DomainEmpty() {
  const [notice, setNotice] = useState('');
  return (
    <Panel title="Domain portfolio">
      <div className={styles.centerEmpty}>
        <div className={styles.illustration}>◎</div>
        <h3>No domains yet</h3>
        <p>Get a new domain or transfer an existing one into this fictional local portfolio.</p>
        <div className={styles.actions}>
          <ActionButton onClick={() => setNotice('Domain acquisition was not opened.')}>
            Get new domain
          </ActionButton>
          <button type="button" onClick={() => setNotice('Domain transfer was not opened.')}>
            Transfer domain
          </button>
        </div>
        {notice && <GuardNotice>{notice}</GuardNotice>}
      </div>
    </Panel>
  );
}

const offers = [
  ['AI Website Builder', 'Websites', 'Create a fictional website with guided AI setup.'],
  ['Professional Email', 'Email & marketing', 'Use a branded mailbox for a fictional team.'],
  ['Image Generator', 'AI & automation', 'Generate local placeholder visuals.'],
  ['VPS Hosting', 'Hosting & VPS', 'Explore compute plans without purchasing.'],
];

function MarketplaceGrid({
  initialState = 'all',
  disabled = false,
}: Omit<HostingerPreviewProps, 'variant'>) {
  const initialCategory = initialState === 'ai' ? 'AI & automation' : 'All';
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState(initialState === 'no-results' ? 'No such service' : '');
  const [notice, setNotice] = useState('');
  const filtered = useMemo(
    () =>
      offers.filter(
        ([name, group]) =>
          (category === 'All' || group === category) &&
          name.toLowerCase().includes(query.toLowerCase())
      ),
    [category, query]
  );
  return (
    <Panel title="More services">
      <label className={styles.searchLabel}>
        Search services
        <input
          value={query}
          disabled={disabled}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <div className={styles.filters}>
        {['All', 'Hosting & VPS', 'Websites', 'Email & marketing', 'AI & automation'].map(
          (item) => (
            <button
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              key={item}
            >
              {item}
            </button>
          )
        )}
      </div>
      <div className={styles.offerGrid}>
        {filtered.map(([name, group, body]) => (
          <article className={styles.offerCard} key={name}>
            <span>{group}</span>
            <h3>{name}</h3>
            <p>{body}</p>
            <button
              type="button"
              onClick={() => setNotice(`${name} was not opened. No provider request was sent.`)}
            >
              Explore offer
            </button>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className={styles.centerEmpty}>
          <h3>No services match</h3>
          <p>Clear the fictional search to see offers.</p>
        </div>
      )}
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </Panel>
  );
}

function ProfileNavigation({ initialState = 'AI memory' }: Omit<HostingerPreviewProps, 'variant'>) {
  const [active, setActive] = useState(
    initialState === 'sharing'
      ? 'Account sharing'
      : initialState === 'notifications'
        ? 'Notification settings'
        : 'AI memory'
  );
  return (
    <div className={styles.profile}>
      <nav aria-label="Profile settings">
        {profileItems.map((item) => (
          <button
            type="button"
            key={item}
            aria-current={item === active ? 'page' : undefined}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </nav>
      <section>
        <p className={styles.breadcrumb}>Profile / {active}</p>
        <h2>{active}</h2>
        <p>This fixture switches local settings content without changing a Hostinger account.</p>
      </section>
    </div>
  );
}

function MemoryConsent({
  initialState = 'off',
  disabled = false,
}: Omit<HostingerPreviewProps, 'variant'>) {
  const [notice, setNotice] = useState(
    initialState === 'guarded' ? 'Provider consent remains off.' : ''
  );
  return (
    <Panel title="AI memory">
      <div className={styles.consentCard}>
        <span className={styles.spark}>✦</span>
        <h3>Continue where you left off</h3>
        <p>
          Remember fictional project context, setup details, and local conversations across this
          preview.
        </p>
        <ul>
          <li>Project continuity</li>
          <li>Setup-aware help</li>
          <li>Cross-chat context</li>
        </ul>
        <ActionButton
          disabled={disabled}
          onClick={() =>
            setNotice('Memory was not enabled. This control is a fictional local guard.')
          }
        >
          Turn on memory
        </ActionButton>
        {notice && <GuardNotice>{notice}</GuardNotice>}
      </div>
    </Panel>
  );
}

const notificationRows = [
  ['Subscription updates', true, false, true],
  ['Security alerts', true, true, true],
  ['Service updates', false, true, true],
  ['Marketing tips', false, false, false],
] as const;

function NotificationMatrix({
  initialState = 'observed',
  disabled = false,
}: Omit<HostingerPreviewProps, 'variant'>) {
  const [notice, setNotice] = useState('');
  return (
    <Panel title="Notification settings">
      <table className={styles.matrix}>
        <thead>
          <tr>
            <th>Topic</th>
            <th>SMS</th>
            <th>WhatsApp</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {notificationRows.map(([topic, sms, wa, email]) => (
            <tr key={topic}>
              <th>{topic}</th>
              <td>
                <input
                  type="checkbox"
                  aria-label={`${topic} SMS`}
                  defaultChecked={sms}
                  disabled={disabled}
                  onChange={() => setNotice('Preference changed in local fixture only.')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  aria-label={`${topic} WhatsApp`}
                  defaultChecked={wa}
                  disabled={disabled}
                  onChange={() => setNotice('Preference changed in local fixture only.')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  aria-label={`${topic} Email`}
                  defaultChecked={email}
                  disabled={disabled || topic === 'Security alerts'}
                  onChange={() => setNotice('Preference changed in local fixture only.')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {initialState === 'mandatory' && (
        <p className={styles.hint}>
          Security email is mandatory in this fictional observed-pattern state.
        </p>
      )}
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </Panel>
  );
}

function AccountSharing({ initialState = 'request' }: Omit<HostingerPreviewProps, 'variant'>) {
  const [tab, setTab] = useState(initialState === 'give' ? 'Give access' : 'Request access');
  const [notice, setNotice] = useState('');
  return (
    <Panel title="Account sharing">
      <div className={styles.tabs} role="tablist" aria-label="Sharing direction">
        {['Request access', 'Give access'].map((item) => (
          <button
            type="button"
            role="tab"
            aria-selected={tab === item}
            onClick={() => setTab(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.sharingBody}>
        <h3>{tab}</h3>
        <p>
          {tab === 'Request access'
            ? 'Ask to manage a fictional account from one workspace.'
            : 'Invite a fictional collaborator with a defined access scope.'}
        </p>
        <ActionButton
          onClick={() => setNotice(`${tab} was not submitted. This is a local fixture.`)}
        >
          {tab === 'Request access' ? 'Request access' : 'Give access'}
        </ActionButton>
        <div className={styles.centerEmpty}>
          <strong>Nothing found</strong>
          <p>No fictional sharing records exist.</p>
        </div>
        {notice && <GuardNotice>{notice}</GuardNotice>}
      </div>
    </Panel>
  );
}

function HomeDashboard({ disabled = false }: Omit<HostingerPreviewProps, 'variant'>) {
  const [notice, setNotice] = useState('');
  return (
    <Shell>
      <div className={styles.hero}>
        <h1>What do you want to build?</h1>
        <textarea
          aria-label="Describe your goal"
          disabled={disabled}
          placeholder="Describe a fictional website or business goal"
        />
        <ActionButton disabled={disabled} onClick={() => setNotice('No Agent prompt was sent.')}>
          Send
        </ActionButton>
      </div>
      <h2>Recommended for you</h2>
      <div className={styles.offerGrid}>
        <article className={styles.offerCard}>
          <h3>Create a website</h3>
          <p>Build with AI, WordPress, or a coding workflow.</p>
          <button type="button">Get started</button>
        </article>
        <article className={styles.offerCard}>
          <h3>Grow with AI agents</h3>
          <p>Explore SEO, marketing, and sales assistance.</p>
          <button type="button">Get started</button>
        </article>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </Shell>
  );
}

function AccountSettings({
  initialState = 'overview',
  disabled = false,
}: Omit<HostingerPreviewProps, 'variant'>) {
  if (initialState === 'sharing')
    return (
      <Shell active="Home">
        <AccountSharing initialState="request" disabled={disabled} />
      </Shell>
    );
  if (initialState === 'notifications')
    return (
      <Shell active="Home">
        <NotificationMatrix disabled={disabled} />
      </Shell>
    );
  if (initialState === 'memory')
    return (
      <Shell active="Home">
        <MemoryConsent disabled={disabled} />
      </Shell>
    );
  return (
    <Shell>
      <ProfileNavigation initialState="AI memory" disabled={disabled} />
    </Shell>
  );
}

function HpanelShell({
  initialState = 'default',
  disabled = false,
}: Omit<HostingerPreviewProps, 'variant'>) {
  return (
    <Shell>
      {initialState === 'search' ? (
        <GlobalSearch disabled={disabled} />
      ) : initialState === 'account' ? (
        <AccountMenu disabled={disabled} />
      ) : initialState === 'agent' ? (
        <AgentPanel disabled={disabled} />
      ) : (
        <Panel title="Home">
          <p>Persistent header, grouped drawer, and route workspace.</p>
          <div className={styles.metricGrid}>
            <article>
              <strong>6</strong>
              <span>Primary destinations</span>
            </article>
            <article>
              <strong>4</strong>
              <span>Global utilities</span>
            </article>
          </div>
        </Panel>
      )}
    </Shell>
  );
}

export function HostingerPreview({
  variant,
  initialState,
  disabled = false,
}: HostingerPreviewProps) {
  const props = { initialState, disabled };
  switch (variant) {
    case 'hpanel-shell':
      return <HpanelShell {...props} />;
    case 'account-settings':
      return <AccountSettings {...props} />;
    case 'agent-memory':
      return (
        <Shell>
          <div className={styles.split}>
            <AgentPanel {...props} />
            <MemoryConsent {...props} />
          </div>
        </Shell>
      );
    case 'home-dashboard':
      return <HomeDashboard {...props} />;
    case 'service-marketplace-empty':
      return (
        <Shell active="More services">
          {initialState === 'domains' ? <DomainEmpty /> : <MarketplaceGrid {...props} />}
        </Shell>
      );
    case 'website-inventory-plan':
      return (
        <Shell active="Websites">
          {initialState === 'plan' ? <PlanComparison {...props} /> : <WebsiteFilter {...props} />}
        </Shell>
      );
    case 'global-search':
      return <GlobalSearch {...props} />;
    case 'account-menu':
      return <AccountMenu {...props} />;
    case 'todo-panel':
      return <TodoPanel {...props} />;
    case 'agent-panel':
      return <AgentPanel {...props} />;
    case 'website-filter':
      return <WebsiteFilter {...props} />;
    case 'plan-comparison':
      return <PlanComparison {...props} />;
    case 'domain-empty':
      return <DomainEmpty />;
    case 'marketplace-grid':
      return <MarketplaceGrid {...props} />;
    case 'profile-navigation':
      return <ProfileNavigation {...props} />;
    case 'memory-consent':
      return <MemoryConsent {...props} />;
    case 'notification-matrix':
      return <NotificationMatrix {...props} />;
    case 'account-sharing':
      return <AccountSharing {...props} />;
  }
}

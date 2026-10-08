import { useState } from 'react';
import {
  BarChart3,
  Bot,
  Boxes,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  GitBranch,
  Inbox,
  LayoutDashboard,
  MessageCircle,
  Plug,
  Settings,
  Sparkles,
  Users,
  WandSparkles,
} from 'lucide-react';
import styles from './tidio.module.css';

export const tidioVariants = [
  'application-shell',
  'getting-started-onboarding',
  'dashboard-overview',
  'inbox-empty-workspace',
  'lyro-setup-checklist',
  'flows-welcome',
  'customers-live-visitors-boundary',
  'analytics-overview',
  'help-center-onboarding',
  'integrations-catalogue',
  'widget-appearance-editor',
  'lyro-data-sources-empty',
  'lyro-suggestions-empty',
  'lyro-guidance',
  'lyro-handoff',
  'lyro-proactive-roles',
  'lyro-procedures-empty',
  'lyro-actions-mcps',
  'lyro-channels',
  'lyro-configure',
  'connection-loading-state',
  'provider-action-boundaries',
] as const;

export type TidioVariant = (typeof tidioVariants)[number];

const sections: Record<TidioVariant, string> = {
  'application-shell': 'Getting started',
  'getting-started-onboarding': 'Getting started',
  'dashboard-overview': 'Dashboard',
  'inbox-empty-workspace': 'Inbox',
  'lyro-setup-checklist': 'Lyro AI',
  'flows-welcome': 'Flows',
  'customers-live-visitors-boundary': 'Customers',
  'analytics-overview': 'Analytics',
  'help-center-onboarding': 'Help Center',
  'integrations-catalogue': 'Integrations',
  'widget-appearance-editor': 'Settings',
  'lyro-data-sources-empty': 'Lyro AI',
  'lyro-suggestions-empty': 'Lyro AI',
  'lyro-guidance': 'Lyro AI',
  'lyro-handoff': 'Lyro AI',
  'lyro-proactive-roles': 'Lyro AI',
  'lyro-procedures-empty': 'Lyro AI',
  'lyro-actions-mcps': 'Lyro AI',
  'lyro-channels': 'Lyro AI',
  'lyro-configure': 'Lyro AI',
  'connection-loading-state': 'System',
  'provider-action-boundaries': 'Action boundaries',
};

const nav = [
  ['Dashboard', LayoutDashboard],
  ['Inbox', Inbox],
  ['Lyro AI', Bot],
  ['Flows', GitBranch],
  ['Customers', Users],
  ['Analytics', BarChart3],
  ['Getting started', CheckCircle2],
  ['Help Center', CircleHelp],
  ['Integrations', Plug],
  ['Settings', Settings],
] as const;

function GuardedButton({ children, disabled = false }: { children: string; disabled?: boolean }) {
  const [notice, setNotice] = useState('');
  return (
    <span className={styles.actionWrap}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setNotice(`${children} stayed inside this fictional fixture.`)}
      >
        {children}
      </button>
      {notice && <small role="status">{notice}</small>}
    </span>
  );
}

function Shell({ variant, children }: { variant: TidioVariant; children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <aside className={styles.rail} aria-label="Fictional Tidio navigation">
        <div className={styles.brand}>t</div>
        {nav.map(([label, Icon]) => (
          <span
            key={label}
            title={label}
            aria-current={sections[variant] === label ? 'page' : undefined}
          >
            <Icon size={18} />
          </span>
        ))}
      </aside>
      <section className={styles.workspace}>
        <header className={styles.topbar}>
          <strong>{sections[variant]}</strong>
          <div className={styles.utility}>
            <span>Support</span>
            <span>Usage and plan</span>
            <span className={styles.trial}>Trial fixture</span>
            <button type="button" disabled>
              Upgrade
            </button>
          </div>
        </header>
        {children}
      </section>
    </div>
  );
}

function Header({ eyebrow, title, detail }: { eyebrow?: string; title: string; detail: string }) {
  return (
    <header className={styles.pageHeader}>
      {eyebrow && <span>{eyebrow}</span>}
      <h1>{title}</h1>
      <p>{detail}</p>
    </header>
  );
}

function Cards({ items }: { items: Array<[string, string, string?]> }) {
  return (
    <div className={styles.cards}>
      {items.map(([title, detail, badge]) => (
        <article key={title}>
          <div className={styles.cardIcon}>
            <Sparkles size={18} />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{detail}</p>
          </div>
          {badge && <b>{badge}</b>}
          <ChevronRight size={16} />
        </article>
      ))}
    </div>
  );
}

function EmptyState({ title, detail, action }: { title: string; detail: string; action?: string }) {
  return (
    <section className={styles.empty}>
      <div className={styles.orb}>
        <MessageCircle size={28} />
      </div>
      <h2>{title}</h2>
      <p>{detail}</p>
      {action && <GuardedButton>{action}</GuardedButton>}
    </section>
  );
}

function GettingStarted() {
  return (
    <main className={styles.page}>
      <Header
        title="Set up your customer support"
        detail="A fictional zero-progress onboarding state."
      />
      <div className={styles.banner}>
        <div>
          <b>Install the chat widget</b>
          <p>Preview installation guidance without touching a provider project.</p>
        </div>
        <GuardedButton>View installation guide</GuardedButton>
      </div>
      <Cards
        items={[
          ['Chat', 'Install a widget to meet website visitors.', 'Not connected'],
          ['Email', 'Bring a support mailbox into one queue.', 'Not connected'],
          ['Social', 'Connect supported social channels.', 'Not connected'],
        ]}
      />
      <section className={styles.checklist}>
        <div className={styles.sectionTitle}>
          <h2>Get started</h2>
          <span>0 of 5</span>
        </div>
        {[
          'Install or connect a channel',
          'Edit a Flow',
          'Explore Flow strategies',
          'Tour the Inbox',
          'Add Lyro knowledge',
        ].map((item) => (
          <div key={item}>
            <span className={styles.unchecked} />
            <b>{item}</b>
            <ChevronRight size={16} />
          </div>
        ))}
      </section>
    </main>
  );
}

function Dashboard() {
  const metrics = ['Interactions', 'Resolution', 'Sales', 'Leads'];
  return (
    <main className={styles.page}>
      <Header title="Good morning" detail="Project health and setup progress at a glance." />
      <div className={styles.dashboardGrid}>
        <section className={styles.progressCard}>
          <span>SETUP PROGRESS</span>
          <strong>0/5</strong>
          <div className={styles.progressTrack}>
            <i />
          </div>
          <GuardedButton>Finish setup</GuardedButton>
        </section>
        <section className={styles.metricPanel}>
          <div className={styles.sectionTitle}>
            <h2>Performance</h2>
            <span>Last 30 days</span>
          </div>
          <div className={styles.tabs}>
            {metrics.map((metric) => (
              <b key={metric}>{metric}</b>
            ))}
          </div>
          <div className={styles.kpis}>
            {metrics.map((metric) => (
              <article key={metric}>
                <small>{metric}</small>
                <strong>0</strong>
              </article>
            ))}
          </div>
          <div className={styles.chart}>
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </section>
      </div>
    </main>
  );
}

function InboxEmpty() {
  return (
    <div className={styles.inboxLayout}>
      <aside className={styles.subnav}>
        <h2>Inbox</h2>
        {[
          'Live conversations',
          'Unassigned',
          'My open',
          'Solved',
          'Tickets',
          'Mentions',
          'Lyro',
          'Spam',
          'Views',
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </aside>
      <aside className={styles.threadList}>
        <b>Live conversations</b>
        <p>No conversations</p>
      </aside>
      <main className={styles.inboxMain}>
        <EmptyState
          title="No active conversations"
          detail="Incoming conversations will appear here after a channel is connected."
          action="Simulate conversation"
        />
      </main>
    </div>
  );
}

const lyroNav = [
  'Setup',
  'Data sources',
  'Products',
  'Suggestions',
  'Guidance',
  'Handoff',
  'Proactive roles',
  'Procedures',
  'Actions & MCPs',
  'Playground',
  'Channels',
  'Configure',
];

function LyroFrame({ active, children }: { active: string; children: React.ReactNode }) {
  return (
    <div className={styles.productLayout}>
      <aside className={styles.subnav}>
        <h2>Lyro AI</h2>
        {lyroNav.map((item) => (
          <span key={item} aria-current={item === active ? 'page' : undefined}>
            {item}
          </span>
        ))}
      </aside>
      <main className={styles.page}>{children}</main>
    </div>
  );
}

function Lyro({ variant }: { variant: TidioVariant }) {
  if (variant === 'lyro-setup-checklist') {
    return (
      <LyroFrame active="Setup">
        <Header
          eyebrow="GET STARTED"
          title="Set up Lyro AI Agent"
          detail="Complete the foundations before activating a channel."
        />
        <Cards
          items={[
            ['Add knowledge', 'Teach the assistant from approved sources.', 'Required'],
            ['Add products', 'Connect a product catalogue.', 'Optional'],
            ['Choose a tone', 'Set the communication style.', 'Ready'],
            ['Test responses', 'Try a fictional prompt locally.', 'Locked'],
            ['Launch channels', 'Activate after knowledge exists.', 'Disabled'],
          ]}
        />
      </LyroFrame>
    );
  }
  if (variant === 'lyro-data-sources-empty') {
    return (
      <LyroFrame active="Data sources">
        <Header title="Knowledge" detail="Add approved sources before testing an assistant." />
        <Cards
          items={[
            ['Website URL', 'Import public help content.'],
            ['Add manually', 'Create a question and answer.'],
            ['Upload a file', 'CSV and PDF were listed.'],
            ['Sync products', 'Use a connected store catalogue.'],
          ]}
        />
        <EmptyState
          title="No questions and answers yet"
          detail="Knowledge sources will appear here."
          action="Add data source"
        />
      </LyroFrame>
    );
  }
  if (variant === 'lyro-suggestions-empty') {
    return (
      <LyroFrame active="Suggestions">
        <Header
          title="Suggestions"
          detail="Potential knowledge improvements appear after conversations generate evidence."
        />
        <div className={styles.info}>
          Suggestions help close knowledge gaps. Review every proposal before publishing.
        </div>
        <EmptyState title="No suggestions" detail="There are no knowledge suggestions to review." />
      </LyroFrame>
    );
  }
  if (variant === 'lyro-guidance') {
    return (
      <LyroFrame active="Guidance">
        <Header
          title="Guidance"
          detail="Shape communication style without changing the provider account."
        />
        <div className={styles.settingRow}>
          <div>
            <b>Use emojis</b>
            <p>Allow occasional emoji use in responses.</p>
          </div>
          <span className={styles.switchOn}>On</span>
        </div>
        <div className={styles.table}>
          <header>
            <span>Guidance</span>
            <span>Tone</span>
            <span>Audience</span>
          </header>
          <div>
            <b>Default communication style</b>
            <span>Neutral</span>
            <span>Everyone</span>
          </div>
        </div>
        <GuardedButton>Add guidance</GuardedButton>
      </LyroFrame>
    );
  }
  if (variant === 'lyro-handoff') {
    return (
      <LyroFrame active="Handoff">
        <Header title="Handoff" detail="Define when conversations should move to a human team." />
        <Cards
          items={[['Default handoff behavior', 'A base handoff path is present.', 'Default']]}
        />
        <EmptyState
          title="No handoff guidances"
          detail="Add scenario-specific routing guidance when it is safe to test."
          action="Add handoff guidance"
        />
      </LyroFrame>
    );
  }
  if (variant === 'lyro-proactive-roles') {
    return (
      <LyroFrame active="Proactive roles">
        <Header
          title="Proactive roles"
          detail="Start from a role template for a specific visitor context."
        />
        <Cards
          items={[
            ['Returning visitor', 'Recognize a returning visitor.'],
            ['Shopping assistant', 'Guide product discovery.'],
            ['Sales development', 'Qualify a fictional lead.'],
            ['Researcher', 'Collect structured feedback.'],
            ['Product page assistant', 'Support item-level questions.'],
            ['Collection assistant', 'Guide browsing across categories.'],
          ]}
        />
      </LyroFrame>
    );
  }
  if (variant === 'lyro-procedures-empty') {
    return (
      <LyroFrame active="Procedures">
        <Header
          title="Procedures"
          detail="Document multi-step service processes for an assistant."
        />
        <EmptyState
          title="No procedures"
          detail="A procedure can describe a repeatable support workflow."
          action="Create Procedure"
        />
      </LyroFrame>
    );
  }
  if (variant === 'lyro-actions-mcps') {
    return (
      <LyroFrame active="Actions & MCPs">
        <Header
          title="Actions & MCPs"
          detail="Connect assistant outcomes to external systems only after review."
        />
        <div className={styles.tabs}>
          <b>Actions</b>
          <span>MCPs · Beta</span>
        </div>
        <EmptyState
          title="No Actions configured"
          detail="Templates include scheduling, CRM contacts, mailing lists and product questions."
          action="Create Action"
        />
      </LyroFrame>
    );
  }
  if (variant === 'lyro-channels') {
    return (
      <LyroFrame active="Channels">
        <Header title="Channels" detail="Knowledge is required before activation and testing." />
        <div className={styles.warning}>
          Add knowledge before activating Lyro. Activation is disabled in this fixture.
        </div>
        <div className={styles.table}>
          <header>
            <span>Channel</span>
            <span>Status</span>
            <span>Availability</span>
          </header>
          {[
            ['Live Chat', 'On', 'Widget required'],
            ['Messenger', 'Not connected', 'Unavailable'],
            ['Instagram', 'Not connected', 'Unavailable'],
            ['WhatsApp', 'Not connected', 'Unavailable'],
          ].map((row) => (
            <div key={row[0]}>
              {row.map((cell) => (
                <span key={cell}>{cell}</span>
              ))}
            </div>
          ))}
        </div>
        <GuardedButton disabled>Activate Lyro</GuardedButton>
      </LyroFrame>
    );
  }
  return (
    <LyroFrame active="Configure">
      <Header title="Configure" detail="Identity, languages and contact-property access." />
      <div className={styles.tabs}>
        <b>General</b>
        <span>Audiences</span>
        <span>Copilot</span>
      </div>
      <div className={styles.formGrid}>
        <label>
          AI Agent name
          <input value="Lyro" readOnly />
        </label>
        <label>
          Company description
          <textarea placeholder="Describe the fictional business" readOnly />
        </label>
        <label>
          Default language
          <select value="English" disabled>
            <option>English</option>
          </select>
        </label>
        <label>
          Additional contact properties
          <select value="None selected" disabled>
            <option>None selected</option>
          </select>
        </label>
      </div>
    </LyroFrame>
  );
}

function Flows() {
  return (
    <div className={styles.productLayout}>
      <aside className={styles.subnav}>
        <h2>Flows</h2>
        {['Welcome', 'My Flows · 1', 'Strategies', 'Sales', 'Leads', 'Support'].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </aside>
      <main className={styles.page}>
        <Header
          eyebrow="AUTOMATION"
          title="Turn conversations into outcomes"
          detail="Start from a reusable strategy without publishing a provider flow."
        />
        <div className={styles.hero}>
          <div>
            <WandSparkles size={26} />
            <h2>Lead generation Flow</h2>
            <p>Ask focused questions and capture consented contact details.</p>
            <GuardedButton>Add Lead generation Flow</GuardedButton>
          </div>
        </div>
        <Cards
          items={[
            ['Lead generation bot', 'Collect qualified lead details.'],
            ['Request a phone call', 'Offer a scheduled follow-up.'],
            ['Book an appointment', 'Guide visitors to a time slot.'],
          ]}
        />
      </main>
    </div>
  );
}

function Customers() {
  return (
    <div className={styles.productLayout}>
      <aside className={styles.subnav}>
        <h2>Customers</h2>
        <span aria-current="page">Now live · 0</span>
        <span>All contacts</span>
        <span>Subscribers</span>
      </aside>
      <main className={styles.page}>
        <Header
          title="Now live"
          detail="Visitors appear after the fictional widget is installed."
        />
        <EmptyState
          title="Install the chat widget to see visitors"
          detail="No visitor or contact data exists in this fixture."
          action="Simulate visitor"
        />
      </main>
    </div>
  );
}

function Analytics() {
  return (
    <main className={styles.page}>
      <Header
        eyebrow="PAID FEATURE"
        title="Analytics overview"
        detail="A zero-data last-30-days state."
      />
      <div className={styles.tabs}>
        {['Overview', 'Human support', 'AI support', 'Sales', 'Leads'].map((item) => (
          <b key={item}>{item}</b>
        ))}
      </div>
      <div className={styles.kpis}>
        {['Interactions', 'Handled by humans', 'Handled by AI', 'Leads'].map((item) => (
          <article key={item}>
            <small>{item}</small>
            <strong>0</strong>
            <em>—</em>
          </article>
        ))}
      </div>
      <div className={styles.largeChart}>
        <span>No activity in this period</span>
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </main>
  );
}

function HelpCenter() {
  return (
    <main className={styles.page}>
      <Header
        eyebrow="BETA"
        title="Help Center"
        detail="Publish a structured self-service destination after review."
      />
      <EmptyState
        title="Create your first Help Center"
        detail="No Help Center is configured in this fictional fixture."
        action="Create Help Center"
      />
    </main>
  );
}

function Integrations() {
  return (
    <div className={styles.productLayout}>
      <aside className={styles.subnav}>
        <h2>Integrations</h2>
        {[
          'All',
          'BI & analytics',
          'Communication',
          'CRM',
          'Ecommerce',
          'Marketing automation',
          'Customer support',
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </aside>
      <main className={styles.page}>
        <Header
          title="Connect your tools"
          detail="Browse the catalogue without authorizing any external account."
        />
        <label className={styles.search}>
          Search integrations
          <input placeholder="Search" readOnly />
        </label>
        <Cards
          items={[
            ['Google Analytics', 'BI & analytics', 'Available'],
            ['Pipedrive', 'CRM', 'Available'],
            ['Zendesk', 'Customer support', 'Available'],
            ['Mailchimp', 'Marketing automation', 'Available'],
            ['Klaviyo', 'Marketing automation', 'Available'],
            ['Zapier', 'Automation', 'Available'],
          ]}
        />
      </main>
    </div>
  );
}

function WidgetEditor() {
  return (
    <div className={styles.productLayout}>
      <aside className={styles.subnav}>
        <h2>Settings</h2>
        {[
          'Appearance',
          'Notifications',
          'Operating hours',
          'Canned responses',
          'Contact properties',
          'Project settings',
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </aside>
      <main className={styles.editor}>
        <section>
          <Header title="Appearance" detail="Tune a fictional chat widget with no provider save." />
          <div className={styles.tabs}>
            <b>Home</b>
            <span>Chat</span>
            <span>Pre-chat</span>
            <span>Minimized</span>
          </div>
          <div className={styles.formGrid}>
            <label>
              Background color
              <input value="#111827" readOnly />
            </label>
            <label>
              Action color
              <input value="#315EF4" readOnly />
            </label>
            <label>
              Welcome message
              <textarea value="Hi! How can we help?" readOnly />
            </label>
            <label>
              Conversation starter
              <input value="I have a question" readOnly />
            </label>
          </div>
          <GuardedButton>Save appearance</GuardedButton>
        </section>
        <aside className={styles.widgetPreview}>
          <div className={styles.widgetHead}>
            <b>Welcome</b>
            <span>● Online</span>
          </div>
          <h3>How can we help?</h3>
          <button type="button">Start a conversation</button>
          <p>Replies usually arrive in a few minutes.</p>
        </aside>
      </main>
    </div>
  );
}

function LoadingState() {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingLogo}>t</div>
      <h1>connecting…</h1>
      <p>Preparing the fictional support workspace</p>
      <div className={styles.loadingDots}>
        <i />
        <i />
        <i />
      </div>
      <aside role="status">
        Transient connection warning recorded separately from the settled page.
      </aside>
    </div>
  );
}

function ActionBoundaries() {
  return (
    <main className={styles.page}>
      <Header
        eyebrow="LOCAL FIXTURE"
        title="Provider action boundaries"
        detail="Every control below is isolated from Tidio."
      />
      <div className={styles.boundaryGrid}>
        {[
          'Install widget',
          'Connect channel',
          'Create Flow',
          'Simulate conversation',
          'Activate Lyro',
          'Save settings',
        ].map((action, index) => (
          <article key={action}>
            <div className={styles.cardIcon}>
              {index < 2 ? <Plug size={18} /> : <Boxes size={18} />}
            </div>
            <h3>{action}</h3>
            <p>
              {index === 4
                ? 'Prerequisite state is disabled.'
                : 'Shows a local-only status notice.'}
            </p>
            <GuardedButton disabled={index === 4}>{action}</GuardedButton>
          </article>
        ))}
      </div>
    </main>
  );
}

function Screen({ variant }: { variant: TidioVariant }) {
  if (variant === 'application-shell' || variant === 'getting-started-onboarding')
    return <GettingStarted />;
  if (variant === 'dashboard-overview') return <Dashboard />;
  if (variant === 'inbox-empty-workspace') return <InboxEmpty />;
  if (variant.startsWith('lyro-')) return <Lyro variant={variant} />;
  if (variant === 'flows-welcome') return <Flows />;
  if (variant === 'customers-live-visitors-boundary') return <Customers />;
  if (variant === 'analytics-overview') return <Analytics />;
  if (variant === 'help-center-onboarding') return <HelpCenter />;
  if (variant === 'integrations-catalogue') return <Integrations />;
  if (variant === 'widget-appearance-editor') return <WidgetEditor />;
  if (variant === 'connection-loading-state') return <LoadingState />;
  return <ActionBoundaries />;
}

export function TidioPreview({ variant = 'application-shell' }: { variant?: TidioVariant }) {
  if (variant === 'connection-loading-state') return <Screen variant={variant} />;
  return (
    <Shell variant={variant}>
      <Screen variant={variant} />
    </Shell>
  );
}

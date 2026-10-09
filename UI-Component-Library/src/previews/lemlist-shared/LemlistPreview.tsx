import { useState } from 'react';
import styles from './lemlist.module.css';

export type LemlistVariant =
  | 'application-shell'
  | 'home-onboarding'
  | 'people-database'
  | 'enrichment-entry'
  | 'signal-agent-landing'
  | 'campaign-inventory'
  | 'campaign-status-filter'
  | 'task-workspace'
  | 'unified-inbox'
  | 'reports-overview'
  | 'deliverability-dashboard'
  | 'calls-upgrade'
  | 'meetings-onboarding'
  | 'contacts-empty'
  | 'companies-empty'
  | 'lemagent-workspace'
  | 'global-command-search'
  | 'settings-navigation'
  | 'account-security'
  | 'team-settings'
  | 'billing-plan-comparison'
  | 'ai-context-center'
  | 'data-management-waterfalls'
  | 'integrations-marketplace'
  | 'notification-matrix'
  | 'sending-limits'
  | 'rules-of-engagement'
  | 'unsubscribe-inventory'
  | 'logs-upgrade-gate'
  | 'template-catalogue'
  | 'template-empty-states'
  | 'account-sending-settings'
  | 'user-management'
  | 'domain-mailbox-catalogue'
  | 'phone-settings'
  | 'deliverability-outreach'
  | 'inbox-placement-tests'
  | 'deliverability-alerts'
  | 'deliverability-settings'
  | 'reports-campaigns'
  | 'reports-activity'
  | 'reports-team-performance';

export interface LemlistPreviewProps {
  variant: LemlistVariant;
  disabled?: boolean;
}

const nav = [
  'Home',
  'lemAgent',
  'People database',
  'Enrichment',
  'Signal agents',
  'Contacts',
  'Companies',
  'Campaigns',
  'Tasks',
  'Inbox',
  'Reports',
  'Deliverability',
  'Calls',
  'Meetings',
];
const names: Record<LemlistVariant, string> = {
  'application-shell': 'Workspace overview',
  'home-onboarding': 'Get started with outreach',
  'people-database': 'People database',
  'enrichment-entry': 'Enrichment',
  'signal-agent-landing': 'Signal agents',
  'campaign-inventory': 'Campaigns',
  'campaign-status-filter': 'Campaign status',
  'task-workspace': 'My tasks',
  'unified-inbox': 'Conversations',
  'reports-overview': 'Reports overview',
  'deliverability-dashboard': 'Deliverability',
  'calls-upgrade': 'Calls',
  'meetings-onboarding': 'Meetings',
  'contacts-empty': 'All contacts',
  'companies-empty': 'All companies',
  'lemagent-workspace': 'lemAgent',
  'global-command-search': 'Search for anything',
  'settings-navigation': 'Settings',
  'account-security': 'Account settings',
  'team-settings': 'Team settings',
  'billing-plan-comparison': 'Billing & users',
  'ai-context-center': 'AI Context Center',
  'data-management-waterfalls': 'Data management',
  'integrations-marketplace': 'Integrations',
  'notification-matrix': 'Notifications',
  'sending-limits': 'Sending limits',
  'rules-of-engagement': 'Rules of engagement',
  'unsubscribe-inventory': 'Unsubscribe',
  'logs-upgrade-gate': 'Logs',
  'template-catalogue': 'Templates',
  'template-empty-states': 'Template library',
  'account-sending-settings': 'Sending settings',
  'user-management': 'Users',
  'domain-mailbox-catalogue': 'Domains & emails',
  'phone-settings': 'Phone settings',
  'deliverability-outreach': 'Outreach deliverability',
  'inbox-placement-tests': 'Inbox placements',
  'deliverability-alerts': 'Deliverability alerts',
  'deliverability-settings': 'Mailbox settings',
  'reports-campaigns': 'Campaign reports',
  'reports-activity': 'Activity reports',
  'reports-team-performance': 'Team performance',
};

function Boundary({ children }: { children: string }) {
  return (
    <p className={styles.boundary} role="status">
      {children}
    </p>
  );
}
function Shell({ active = 'Home', children }: { active?: string; children: React.ReactNode }) {
  return (
    <div className={styles.app}>
      <aside>
        <b className={styles.logo}>lemlist</b>
        <input aria-label="Global search" placeholder="Search for anything" readOnly />
        {nav.map((item) => (
          <button key={item} type="button" aria-current={active === item ? 'page' : undefined}>
            {item}
          </button>
        ))}
      </aside>
      <section className={styles.stage}>
        <header>
          <span>Northstar workspace</span>
          <span className={styles.credit}>200 credits</span>
          <button type="button" aria-label="Fictional account">
            NS
          </button>
        </header>
        {children}
      </section>
    </div>
  );
}
function Page({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: string;
}) {
  return (
    <main>
      <div className={styles.pageHead}>
        <h1>{title}</h1>
        {action && (
          <button type="button" disabled>
            {action}
          </button>
        )}
      </div>
      {children}
    </main>
  );
}
function Empty({ title, body }: { title: string; body: string }) {
  return (
    <section className={styles.empty}>
      <div>◌ ✦ ◌</div>
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  );
}
function Metrics({ items }: { items: Array<[string, string]> }) {
  return (
    <div className={styles.metrics}>
      {items.map(([k, v]) => (
        <article key={k}>
          <span>{k}</span>
          <b>{v}</b>
        </article>
      ))}
    </div>
  );
}
function Table({ headers, empty = 'No items' }: { headers: string[]; empty?: string }) {
  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={headers.length}>{empty}</td>
          </tr>
        </tbody>
      </table>
      <footer>Rows per page 10　 1–0 of 0　 ‹　›</footer>
    </div>
  );
}
function Cards({ items }: { items: Array<[string, string]> }) {
  return (
    <div className={styles.cards}>
      {items.map(([t, b]) => (
        <article key={t}>
          <h2>{t}</h2>
          <p>{b}</p>
          <button type="button" disabled>
            Unavailable in fixture
          </button>
        </article>
      ))}
    </div>
  );
}

function Special({ variant }: { variant: LemlistVariant }) {
  const [tab, setTab] = useState('Emails');
  if (variant === 'people-database')
    return (
      <Page title="People database">
        <div className={styles.split}>
          <section className={styles.filters}>
            {[
              'Saved searches',
              'Personas',
              'Job title & experience',
              'Location',
              'Company information',
              'Company size & financials',
            ].map((x) => (
              <button type="button" key={x}>
                {x}
              </button>
            ))}
          </section>
          <section>
            <h2>Who are you searching for today?</h2>
            <div className={styles.suggestions}>
              {[
                'Operations leaders at growing software teams',
                'Founders of seed-stage companies',
                'Sales leaders hiring this quarter',
              ].map((x) => (
                <button type="button" key={x}>
                  {x}
                </button>
              ))}
            </div>
            <textarea aria-label="Fictional AI search" disabled />
          </section>
        </div>
        <Boundary>Search, AI submission, attachment and saving are disabled.</Boundary>
      </Page>
    );
  if (variant === 'campaign-inventory' || variant === 'campaign-status-filter')
    return (
      <Page title="Campaigns" action="Create">
        <div className={styles.toolbar}>
          <input aria-label="Campaign search" placeholder="Search a campaign" readOnly />
          {['Status: All', 'Sender: All', 'Tags: All', 'Creators: All'].map((x) => (
            <button key={x}>{x}</button>
          ))}
        </div>
        {variant === 'campaign-status-filter' && (
          <div className={styles.popover}>
            {[
              'Draft (0)',
              'In progress (0)',
              'Completed (0)',
              'Paused (0)',
              'In error (0)',
              'Archived (0)',
            ].map((x) => (
              <label key={x}>
                <input type="checkbox" />
                {x}
              </label>
            ))}
          </div>
        )}
        <Table
          headers={['Active', 'Name', 'Leads', 'Reply', 'Sender', 'Tags', 'Created']}
          empty="No campaigns found"
        />
        <Boundary>Creation, resume, tagging, launch and deletion are disabled.</Boundary>
      </Page>
    );
  if (variant === 'task-workspace')
    return (
      <Page title="My tasks" action="Create task">
        <Metrics
          items={[
            ['My tasks', '0'],
            ['Calls', '0'],
            ['To launch', '0'],
            ['Hot leads', '0'],
          ]}
        />
        <div className={styles.toolbar}>
          <input aria-label="Task search" placeholder="Search a task" readOnly />
          <button>Filters 2</button>
          <button>Manage columns</button>
        </div>
        <Table
          headers={['Task', 'Owner', 'Priority', 'Due']}
          empty="There is no task to display with this status"
        />
        <Boundary>
          Completion, ignore, reschedule, ownership and priority actions are disabled.
        </Boundary>
      </Page>
    );
  if (variant === 'unified-inbox')
    return (
      <Page title="Conversations">
        <div className={styles.inbox}>
          <aside>
            {[
              'Unread messages',
              'Favorite messages',
              'Interested',
              'Not interested',
              'To unsubscribe',
            ].map((x) => (
              <button key={x}>{x}</button>
            ))}
          </aside>
          <section>
            <Empty
              title="No conversation selected"
              body="Reply to fictional leads across supported channels."
            />
          </section>
        </div>
        <Boundary>Message delivery and conversation state cannot change.</Boundary>
      </Page>
    );
  if (variant === 'deliverability-dashboard')
    return (
      <Page title="Deliverability">
        <div className={styles.tabs}>
          {['Warm-up', 'Outreach', 'Inbox placements', 'Alerts', 'Settings'].map((x) => (
            <button key={x}>{x}</button>
          ))}
        </div>
        <Metrics
          items={[
            ['Warm-up score', '0.0'],
            ['Inbox rate', '0.0%'],
            ['Inbox count', '0'],
            ['Spam count', '0'],
          ]}
        />
        <Cards
          items={[
            ['Where are emails landing?', 'No trend data available'],
            ['Warm-up score by mailbox', 'No mailbox connected'],
            ['Warm-up score by domain', 'No domain connected'],
          ]}
        />
        <Table headers={['Mailbox', 'Domain', 'Provider', 'Avg score', 'Inbox', 'Spam']} />
        <Boundary>
          Mailbox connection, warm-up and analytics computation are not available.
        </Boundary>
      </Page>
    );
  if (variant === 'notification-matrix')
    return (
      <Page title="Notifications">
        <Table
          headers={["You'll receive emails about", 'Your account', 'Users on your team']}
          empty="Preference rows use fictional checked and disabled states"
        />
        <Cards
          items={[
            ['Email notifications', 'Weekly and immediate warning categories'],
            ['In-app notifications', 'Critical warm-up alerts'],
            ['Push notifications', 'Browser and task alerts'],
          ]}
        />
        <Boundary>Checkboxes and notification testing are disabled.</Boundary>
      </Page>
    );
  if (variant === 'template-empty-states')
    return (
      <Page title="Templates" action="Create new template">
        <div className={styles.tabs}>
          {['Emails', 'Schedules', 'Snippets', 'Images', 'Landing pages'].map((x) => (
            <button key={x} onClick={() => setTab(x)} aria-pressed={tab === x}>
              {x}
            </button>
          ))}
        </div>
        <input
          aria-label="Template search"
          placeholder={`Search ${tab.toLowerCase()} templates`}
          readOnly
        />
        <Empty
          title="Create your first template"
          body={`No fictional ${tab.toLowerCase()} templates found.`}
        />
        <Boundary>Only local tab state changes. Creation and upload are disabled.</Boundary>
      </Page>
    );
  return <Generic variant={variant} />;
}

const cardData: Partial<Record<LemlistVariant, Array<[string, string]>>> = {
  'home-onboarding': [
    ['Book a demo', 'Learn the product with a guided session'],
    ['Run lemlist from your AI assistant', 'Connect an assistant after explicit approval'],
    ['Get started', 'One of six fictional tasks completed'],
  ],
  'enrichment-entry': [
    ['CSV file', 'Import contacts from a file'],
    ['Campaign', 'Use contacts already in a campaign'],
    ['Contact list', 'Use an existing list'],
  ],
  'signal-agent-landing': [
    ['Scout', 'Recommend signals and filters'],
    ['Engage', 'Draft a multichannel sequence'],
    ['Optimize', 'Review results and suggest changes'],
  ],
  'calls-upgrade': [
    ['Buy local phone numbers', 'Establish a local presence'],
    ['Connect your own number', 'Use an existing number'],
    ['Call transcription', 'Capture searchable summaries'],
  ],
  'meetings-onboarding': [
    ['No more missed notes', 'Record and transcribe'],
    ['Close deals faster', 'Share important moments'],
    ['Save time', 'Prepare follow-ups and CRM notes'],
  ],
  'settings-navigation': [
    ['Account settings', 'Profile, sending, notifications and limits'],
    ['Team settings', 'Billing, rules, domains, calls and AI'],
    ['Data and compliance', 'Integrations, health, unsubscribe and logs'],
  ],
  'account-security': [
    ['Personal information', 'Fictional identity and contact variables'],
    ['Security', 'Google login, password and two-factor controls'],
    ['Appearance', 'Theme and language preferences'],
  ],
  'team-settings': [
    ['Team information', 'Fictional team identity'],
    ['Custom tracking domain', 'Not configured'],
    ['Team two-factor authentication', 'Not configured'],
  ],
  'ai-context-center': [
    ['Company context', 'Fictional positioning and product summary'],
    ['Personas', 'Audience context'],
    ['Buying committee', 'Role and approval context'],
  ],
  'data-management-waterfalls': [
    ['Default email waterfall', 'All fictional providers, shuffled'],
    ['Default phone waterfall', 'All fictional providers, shuffled'],
  ],
  'integrations-marketplace': [
    ['CRM integrations', 'Salesforce, Pipedrive and HubSpot patterns'],
    ['Workflow tools', 'Zapier, n8n and Make patterns'],
    ['AI tools', 'OpenAI, Claude and Gemini patterns'],
  ],
  'sending-limits': [
    ['Email limits', 'Mailbox selection is unavailable on the fictional trial'],
    ['LinkedIn limits', 'Disabled daily numeric controls and ramp-up'],
  ],
  'rules-of-engagement': [
    ['Schedule', 'Weekdays, hours, cadence and timezone'],
    ['Enrichment', 'Email, phone, profile and verification defaults'],
    ['Tracking and duplicates', 'Open, click, reply and duplicate rules'],
    ['Dynamic senders', 'Fictional sender inclusion'],
  ],
  'logs-upgrade-gate': [['Activity logs', 'Upgrade entitlement required']],
  'template-catalogue': [
    ['Community campaign', 'Multichannel card with fictional performance'],
    ['Email-only campaign', 'Searchable card with preview action'],
    ['Team templates', 'Ownership and language filters'],
  ],
  'application-shell': [
    ['Find & Manage', 'People, enrichment and company data'],
    ['Engage', 'Campaigns, tasks and inbox'],
    ['Analyze', 'Reports, deliverability, calls and meetings'],
  ],
  'global-command-search': [
    ['Account settings', 'Navigation result'],
    ['Team settings', 'Navigation result'],
    ['Templates', 'Navigation result'],
  ],
  'billing-plan-comparison': [
    ['Email', 'Unlimited users and email senders'],
    ['Multichannel', 'LinkedIn, SMS, calls and task management'],
    ['Enterprise', 'Permissions, SSO and onboarding'],
  ],
  'account-sending-settings': [
    ['Email senders', 'Connected-address inventory and signature controls'],
    ['LinkedIn', 'Extension-led account connection guidance'],
    ['Phone numbers', 'Connect or buy-number pathways and monthly minutes'],
  ],
  'user-management': [
    ['Users', 'Search, filters, roles and status inventory'],
    ['Shared signatures', 'Team-wide sender identity controls'],
    ['Bulk administration', 'Deactivation, warm-up and limit actions'],
  ],
  'domain-mailbox-catalogue': [
    ['Buy a domain', 'Managed registration, mailboxes and warm-up'],
    ['Connect a domain', 'Registrar remains external'],
    ['Transfer a domain', 'Ownership and portability pathway'],
  ],
  'phone-settings': [
    ['Connect a number', 'Existing fixed or mobile number'],
    ['Buy a number', 'Local presence and inbound-call handling'],
    ['Call settings', 'Statuses, dialer choice and notifications'],
  ],
  'deliverability-outreach': [
    ['Delivery overview', 'Sent, delivered, bounced and daily volume'],
    ['Provider performance', 'Sender-to-recipient provider matrix'],
    ['Mailbox and domain tables', 'Rate and activity breakdowns'],
  ],
  'inbox-placement-tests': [
    ['Placement score', 'Global and provider-specific trends'],
    ['Test history', 'Campaign, step, mailbox and source dimensions'],
    ['Scheduled tests', 'Frequency, next run, result and status'],
  ],
  'deliverability-alerts': [
    ['Warm-up alerts', 'Severity, metric, target and thresholds'],
    ['Outreach alerts', 'Parallel empty-state rule inventory'],
    ['Alert logs', 'Active and resolved history filters'],
  ],
  'deliverability-settings': [
    ['Mailbox inventory', 'Search, filters and connection status'],
    ['Technical audit', 'Readiness check entry point'],
    ['Bulk operations', 'Warm-up, daily limit and disconnect controls'],
  ],
  'reports-campaigns': [
    ['Campaign funnel', 'Conversion stages and channel selector'],
    ['Cohort breakdown', 'Entry-week conversion comparison'],
    ['Step performance', 'Cross-campaign ranking by reply rate'],
  ],
  'reports-activity': [
    ['Outreach KPI', 'Activity volume and lead-issue trends'],
    ['Sending capacity', 'Available channel throughput'],
    ['Channel activity', 'Email, social, messaging and calls'],
  ],
  'reports-team-performance': [
    ['Team leaderboard', 'Funnel and representative comparison'],
    ['Task and call performance', 'Workload and connection views'],
    ['Capacity and trends', 'Channel activity by representative'],
  ],
};

function Generic({ variant }: { variant: LemlistVariant }) {
  if (variant === 'contacts-empty' || variant === 'companies-empty')
    return (
      <Page
        title={names[variant]}
        action={`Import ${variant === 'contacts-empty' ? 'contacts' : 'companies'}`}
      >
        <Empty
          title={`You don't have any ${variant === 'contacts-empty' ? 'contacts' : 'companies'}`}
          body="Find fictional buyers or import fictional data."
        />
        <Table headers={['Name', 'Company', 'Status', 'Owner']} />
        <Boundary>Import, enrichment, editing and task creation are disabled.</Boundary>
      </Page>
    );
  if (variant === 'reports-overview')
    return (
      <Page title="Overview">
        <div className={styles.toolbar}>
          <button>Add tab</button>
          <button>Edit widgets</button>
          <button>Share</button>
        </div>
        <Empty title="Add widget" body="Build a fictional dashboard from local-only cards." />
        <Boundary>Dashboard changes and sharing are disabled.</Boundary>
      </Page>
    );
  if (variant === 'unsubscribe-inventory')
    return (
      <Page title="Unsubscribe" action="Add to unsubscribes">
        <div className={styles.toolbar}>
          <input
            aria-label="Suppression search"
            placeholder="name@example.invalid or @example.invalid"
            readOnly
          />
          <button>Exact match</button>
          <button>Filter by date</button>
        </div>
        <Table headers={['Unsubscribed variables', 'Details', 'Date & time']} />
        <Boundary>Add and remove actions are disabled.</Boundary>
      </Page>
    );
  if (variant === 'lemagent-workspace')
    return (
      <Page title="How can I help you?">
        <div className={styles.suggestions}>
          {['Find leads', 'Create campaign', 'Analyze my campaigns'].map((x) => (
            <button key={x}>{x}</button>
          ))}
        </div>
        <textarea aria-label="AI prompt" disabled />
        <Empty title="Workspace" body="Agent results will appear here." />
        <Boundary>Prompt, attachment and generated actions are disabled.</Boundary>
      </Page>
    );
  const data = cardData[variant] ?? [
    [names[variant], 'Observed authenticated structure reconstructed with fictional data.'],
  ];
  return (
    <Page
      title={names[variant]}
      action={
        ['calls-upgrade', 'logs-upgrade-gate', 'billing-plan-comparison'].includes(variant)
          ? 'Upgrade'
          : undefined
      }
    >
      <Cards items={data} />
      <Boundary>
        Fictional reconstruction. Provider writes, credentials, persistence and outcomes are
        unavailable.
      </Boundary>
    </Page>
  );
}

function activeFor(v: LemlistVariant) {
  if (v.includes('campaign') || v.includes('template') || v === 'rules-of-engagement')
    return 'Campaigns';
  if (v.includes('task')) return 'Tasks';
  if (
    v.includes('deliverability') ||
    v.includes('sending') ||
    v.includes('domain-mailbox') ||
    v === 'inbox-placement-tests'
  )
    return 'Deliverability';
  if (v.includes('inbox')) return 'Inbox';
  if (v.includes('report')) return 'Reports';
  if (v.includes('calls') || v.includes('phone')) return 'Calls';
  if (v.includes('meetings')) return 'Meetings';
  if (v.includes('people')) return 'People database';
  if (v.includes('enrichment') || v.includes('waterfall')) return 'Enrichment';
  if (v.includes('signal')) return 'Signal agents';
  if (v.includes('contacts')) return 'Contacts';
  if (v.includes('companies')) return 'Companies';
  if (v.includes('lemagent')) return 'lemAgent';
  return 'Home';
}
export function LemlistPreview({ variant }: LemlistPreviewProps) {
  return (
    <Shell active={activeFor(variant)}>
      <Special variant={variant} />
    </Shell>
  );
}

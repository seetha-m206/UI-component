import { useState, type ReactNode } from 'react';
import styles from './zoho-campaigns.module.css';

export type ZohoCampaignsVariant =
  | 'application-shell'
  | 'getting-started-dashboard'
  | 'home-dashboard'
  | 'analytics-channel-tabs'
  | 'email-campaign-starter'
  | 'whatsapp-setup-gate'
  | 'sms-gateway-selector'
  | 'contact-directory'
  | 'list-table'
  | 'segment-starter'
  | 'form-starter'
  | 'workflow-starter'
  | 'media-library-empty-state'
  | 'email-template-starter'
  | 'settings-directory'
  | 'notification-settings'
  | 'topics-settings'
  | 'contact-scoring'
  | 'field-management'
  | 'signup-lifecycle-directory'
  | 'utm-tracking'
  | 'frequency-capping'
  | 'integrations-catalogue'
  | 'webhooks-empty-state'
  | 'compliance-settings'
  | 'double-opt-in'
  | 'email-tracking'
  | 'sender-authentication'
  | 'bot-filtering'
  | 'organization-settings'
  | 'subscription-usage'
  | 'user-management'
  | 'roles-permissions'
  | 'workspace-management'
  | 'audit-log'
  | 'sms-preferences'
  | 'zia-usage-details'
  | 'global-create-menu'
  | 'notification-center'
  | 'account-help-panel'
  | 'contact-analytics'
  | 'ecommerce-analytics-gate'
  | 'zia-model-configuration';

export interface ZohoCampaignsPreviewProps {
  variant: ZohoCampaignsVariant;
  disabled?: boolean;
}

const modules = [
  'Getting Started',
  'Home',
  'Analytics',
  'Campaigns',
  'Audience',
  'Automation',
  'Library',
];

function Boundary({ children }: { children: ReactNode }) {
  return <p className={styles.boundary}>{children}</p>;
}

function Shell({ active, children }: { active: string; children: ReactNode }) {
  return (
    <div className={styles.app}>
      <aside className={styles.rail}>
        <b className={styles.mark}>ZC</b>
        {modules.map((module) => (
          <button key={module} type="button" aria-current={module === active ? 'page' : undefined}>
            <span>{module.slice(0, 1)}</span>
            {module}
          </button>
        ))}
      </aside>
      <section className={styles.stage}>
        <header className={styles.topbar}>
          <label>
            <span className="sr-only">Fixture search</span>
            <input placeholder="Search in this fictional workspace" disabled />
          </label>
          <div>
            <span className={styles.trial}>Trial workspace</span>
            <button type="button" disabled aria-label="Create">
              +
            </button>
            <button type="button" aria-label="Notifications">
              ◇
            </button>
            <button type="button" aria-label="Settings">
              ⚙
            </button>
            <button type="button" aria-label="Fictional account">
              AS
            </button>
          </div>
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
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <main className={styles.page}>
      <div className={styles.pageHead}>
        <div>
          <span className={styles.eyebrow}>FICTIONAL LOCAL PREVIEW</span>
          <h1>{title}</h1>
        </div>
        {action}
      </div>
      {children}
      <Boundary>
        Provider-changing actions are disabled. Nothing here contacts Zoho Campaigns.
      </Boundary>
    </main>
  );
}

function Cards({ items }: { items: Array<[string, string]> }) {
  return (
    <div className={styles.cards}>
      {items.map(([title, body]) => (
        <article key={title} className={styles.card}>
          <span className={styles.cardIcon}>{title.slice(0, 1)}</span>
          <h2>{title}</h2>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}

function Starter({
  title,
  label,
  choices,
}: {
  title: string;
  label: string;
  choices: Array<[string, string]>;
}) {
  const [choice, setChoice] = useState(choices[0][0]);
  return (
    <Page title={title}>
      <label className={styles.field}>
        {label} <b>*</b>
        <input placeholder={`Enter a fictional ${label.toLowerCase()}`} disabled />
      </label>
      <h2 className={styles.sectionTitle}>Choose a starting point</h2>
      <div className={styles.choiceGrid}>
        {choices.map(([name, body]) => (
          <button
            type="button"
            key={name}
            className={choice === name ? styles.selected : undefined}
            onClick={() => setChoice(name)}
          >
            <b>{name}</b>
            <span>{body}</span>
          </button>
        ))}
      </div>
      <button type="button" className={styles.primary} disabled>
        Continue
      </button>
    </Page>
  );
}

function Empty({ title, body }: { title: string; body: string }) {
  return (
    <section className={styles.empty}>
      <div>◌　◇　◫</div>
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  );
}

function GettingStarted() {
  return (
    <Page title="Welcome to Atlas Campaigns">
      <Cards
        items={[
          ['Send a campaign', 'Choose email, SMS or WhatsApp after the channel is configured.'],
          [
            'Bring your contacts',
            'Use a fictional sync catalogue, import boundary or signup form.',
          ],
          ['Setup your channels', 'Track email, WhatsApp and SMS readiness independently.'],
        ]}
      />
      <section className={styles.checklist}>
        <h2>Setup your channels</h2>
        {[
          ['Email', 33],
          ['WhatsApp', 0],
          ['SMS', 0],
        ].map(([name, value]) => (
          <div key={name}>
            <b>{name}</b>
            <progress value={Number(value)} max="100" />
            <span>{value}% complete</span>
          </div>
        ))}
      </section>
    </Page>
  );
}

function HomeDashboard() {
  return (
    <Page title="Good afternoon, Atlas Studio">
      <div className={styles.dashboard}>
        <article className={styles.wideCard}>
          <h2>Recent campaigns</h2>
          <Empty title="No recent campaigns" body="Fictional activity will appear here." />
        </article>
        <article className={styles.card}>
          <h2>Upcoming campaigns</h2>
          <p>No scheduled sends in this fixture.</p>
        </article>
        <article className={styles.wideCard}>
          <h2>Campaign performance</h2>
          <Empty title="No campaign activity" body="Choose a fictional channel and date range." />
        </article>
        <article className={styles.card}>
          <h2>Workflows</h2>
          <p>No active or paused workflows.</p>
        </article>
      </div>
    </Page>
  );
}

function Analytics() {
  const [tab, setTab] = useState('Email');
  return (
    <Page title={`${tab} analytics`}>
      <div className={styles.tabs} role="tablist" aria-label="Analytics channels">
        {['Email', 'WhatsApp', 'SMS', 'Contacts', 'E-Commerce'].map((item) => (
          <button
            type="button"
            role="tab"
            aria-selected={item === tab}
            key={item}
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.filters}>
        <button type="button">Last 30 days⌄</button>
        <button type="button">All {tab}⌄</button>
      </div>
      <Empty
        title="No data yet"
        body={`Fictional ${tab.toLowerCase()} performance will appear here.`}
      />
    </Page>
  );
}

function ChannelGate({ channel, points }: { channel: string; points: string[] }) {
  return (
    <Page title={`Set up ${channel} to get started`}>
      <p>Complete the visible prerequisites before creating campaigns.</p>
      <ul className={styles.prereqs}>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <button className={styles.primary} type="button" disabled>
        Connect {channel}
      </button>
    </Page>
  );
}

function SmsGate() {
  const [gateway, setGateway] = useState('Campaigns');
  return (
    <Page title="Set up SMS to get started">
      <h2 className={styles.sectionTitle}>Choose a gateway</h2>
      <div className={styles.choiceGrid}>
        {['Campaigns', 'Twilio', 'Vonage'].map((name) => (
          <button
            type="button"
            key={name}
            className={gateway === name ? styles.selected : undefined}
            onClick={() => setGateway(name)}
          >
            <b>{name}</b>
            <span>Fictional gateway choice for the local preview.</span>
          </button>
        ))}
      </div>
      <button className={styles.primary} type="button" disabled>
        Connect gateway
      </button>
    </Page>
  );
}

function ContactDirectory() {
  const [tab, setTab] = useState('Reachable');
  return (
    <Page
      title="Contacts"
      action={
        <button type="button" className={styles.primary} disabled>
          Import contacts
        </button>
      }
    >
      <div className={styles.tabs} role="tablist" aria-label="Contact states">
        {['Reachable', 'All', 'Suppressed', 'Excluded', 'Invalid'].map((item) => (
          <button
            type="button"
            role="tab"
            aria-selected={tab === item}
            key={item}
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alex Morgan</td>
            <td>alex@atlas.example</td>
            <td>{tab}</td>
          </tr>
          <tr>
            <td>Priya Chen</td>
            <td>priya@atlas.example</td>
            <td>{tab}</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}

function Lists() {
  return (
    <Page
      title="All lists"
      action={
        <button type="button" disabled className={styles.primary}>
          Create new
        </button>
      }
    >
      <div className={styles.filters}>
        <button type="button">All folders⌄</button>
        <button type="button">Filter</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>List name</th>
            <th>Contacts</th>
            <th>Last updated</th>
            <th>Updated by</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Newsletter prospects</td>
            <td>24</td>
            <td>October 2026</td>
            <td>Atlas Studio</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}

function FormStarter() {
  return (
    <Page title="Create a form">
      <div className={styles.formGrid}>
        <label className={styles.field}>
          Form name <b>*</b>
          <input placeholder="Newsletter signup" disabled />
        </label>
        <label className={styles.field}>
          List <b>*</b>
          <select disabled>
            <option>Choose a fictional list</option>
          </select>
        </label>
      </div>
      <button type="button" disabled className={styles.primary}>
        Create form
      </button>
    </Page>
  );
}

function MediaLibrary() {
  const [tab, setTab] = useState('All files');
  return (
    <Page title="Library">
      <div className={styles.tabs} role="tablist" aria-label="File types">
        {['All files', 'Images', 'Videos', 'PDF', 'GIF'].map((item) => (
          <button
            type="button"
            role="tab"
            aria-selected={tab === item}
            key={item}
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <Empty
        title={`No ${tab.toLowerCase()} available`}
        body="Upload is disabled in this fictional fixture."
      />
      <button type="button" disabled className={styles.primary}>
        Upload
      </button>
    </Page>
  );
}

function SettingsDirectory() {
  return (
    <Page title="All settings">
      <Cards
        items={[
          ['General', 'Organization, notifications and subscription'],
          ['Users and controls', 'Users, roles and workspaces'],
          ['Contacts', 'Topics, scoring, fields and signup content'],
          ['Email', 'Tracking, senders and bot filtering'],
          ['Consent and privacy', 'Compliance, double opt-in and audit logs'],
          ['Integrations', 'Apps and webhooks'],
          ['Zia', 'Supported AI model providers'],
        ]}
      />
    </Page>
  );
}

function Notifications() {
  const [instant, setInstant] = useState(false);
  const [summary, setSummary] = useState(false);
  return (
    <Page title="Contact notification">
      <label className={styles.toggleRow}>
        <span>
          <b>Contact subscription notification</b>
          <small>Get a fictional instant notification.</small>
        </span>
        <input
          type="checkbox"
          checked={instant}
          onChange={(event) => setInstant(event.target.checked)}
        />
      </label>
      <label className={styles.toggleRow}>
        <span>
          <b>Contact subscription summary</b>
          <small>Receive a fictional periodic digest.</small>
        </span>
        <input
          type="checkbox"
          checked={summary}
          onChange={(event) => setSummary(event.target.checked)}
        />
      </label>
      <button type="button" disabled className={styles.primary}>
        Save
      </button>
    </Page>
  );
}

function TopicsSettings() {
  return (
    <Page
      title="Topics"
      action={
        <button type="button" disabled className={styles.primary}>
          Add topic
        </button>
      }
    >
      <div className={styles.filters}>
        <button type="button" disabled>
          Group topics
        </button>
        <button type="button" disabled>
          Customize preference page
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Topic name</th>
            <th>Subscribed</th>
            <th>Unsubscribed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product updates</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}

function ContactScoring() {
  return (
    <Page title="Qualify contacts with scoring">
      <p>Score fictional contacts using engagement, campaign activity and profile fit.</p>
      <ul className={styles.prereqs}>
        <li>Measure engagement across email, SMS and WhatsApp.</li>
        <li>Assign scores for opens, clicks and replies.</li>
        <li>Combine activity with fictional contact details.</li>
        <li>Keep scores updated as engagement changes.</li>
      </ul>
      <button type="button" disabled className={styles.primary}>
        Enable contact scoring
      </button>
    </Page>
  );
}

function FieldManagement() {
  return (
    <Page
      title="Contact fields"
      action={
        <button type="button" disabled className={styles.primary}>
          Add contact field
        </button>
      }
    >
      <label className={styles.field}>
        Search fields
        <input placeholder="Search fictional fields" />
      </label>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Field label</th>
            <th>Field type</th>
            <th>Default merge value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contact email</td>
            <td>Email</td>
            <td>—</td>
          </tr>
          <tr>
            <td>First name</td>
            <td>Text</td>
            <td>Guest</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>Pick list</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Created time</td>
            <td>Date and time</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}

function SignupLifecycle() {
  return (
    <Page title="Signup pages and emails">
      <Cards
        items={[
          [
            'Update profile',
            'Landing page, confirmation page, email, form and update notification',
          ],
          ['Unsubscribe', 'Confirmation page, feedback page and confirmation email'],
          ['Resubscribe', 'Inactive notification, confirmation email and confirmation page'],
          ['Topics', 'Preference management page'],
          ['Tell a friend', 'Forwarding form and email'],
        ]}
      />
      <button type="button" disabled className={styles.primary}>
        Edit selected asset
      </button>
    </Page>
  );
}

function UtmTracking() {
  return (
    <Page title="UTM parameters">
      <label className={styles.toggleRow}>
        <span>
          <b>Enable UTM parameter tracking</b>
          <small>Append fictional tracking parameters to email, WhatsApp and SMS links.</small>
        </span>
        <input type="checkbox" disabled />
      </label>
      <button type="button" disabled className={styles.primary}>
        Save
      </button>
    </Page>
  );
}

function FrequencyCapping() {
  return (
    <Page title="Frequency capping">
      <p>Control how often fictional contacts receive messages.</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Daily</th>
            <th>Weekly</th>
            <th>Monthly</th>
            <th>Interval</th>
          </tr>
        </thead>
        <tbody>
          {['Email', 'WhatsApp', 'SMS'].map((channel) => (
            <tr key={channel}>
              <td>{channel}</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>0 days</td>
            </tr>
          ))}
        </tbody>
      </table>
      <label className={styles.toggleRow}>
        <span>
          <b>Apply to workflows</b>
          <small>Fictional local state only.</small>
        </span>
        <input type="checkbox" checked readOnly disabled />
      </label>
      <button type="button" disabled className={styles.primary}>
        Save
      </button>
    </Page>
  );
}

function IntegrationsCatalogue() {
  const [category, setCategory] = useState('Popular apps');
  return (
    <Page title="Apps">
      <div className={styles.tabs} role="tablist" aria-label="App catalogue">
        {['Popular apps', 'Zoho', 'Sales', 'Marketing', 'E-commerce', 'SMS gateways'].map(
          (item) => (
            <button
              type="button"
              role="tab"
              aria-selected={category === item}
              key={item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          )
        )}
      </div>
      <Cards
        items={[
          ['Zoho CRM', 'Synchronize fictional leads and contacts.'],
          ['Shopify', 'Use fictional customer and purchase data.'],
          ['Salesforce', 'Synchronize fictional campaign data.'],
          ['WhatsApp', 'Connect a fictional messaging channel.'],
        ]}
      />
      <p>Showing the {category.toLowerCase()} fixture.</p>
    </Page>
  );
}

function WebhooksEmptyState() {
  return (
    <Page title="Webhooks">
      <Empty
        title="No webhooks configured"
        body="Webhooks can send real-time event data to another application."
      />
      <button type="button" disabled className={styles.primary}>
        Create webhook
      </button>
    </Page>
  );
}

function ComplianceSettings() {
  return (
    <Page title="Compliances">
      <label className={styles.toggleRow}>
        <span>
          <b>GDPR compliance</b>
          <small>Govern how fictional customer personal data is handled.</small>
        </span>
        <input type="checkbox" disabled />
      </label>
      <label className={styles.toggleRow}>
        <span>
          <b>HIPAA settings</b>
          <small>Govern how fictional health-related contact data is handled.</small>
        </span>
        <input type="checkbox" disabled />
      </label>
    </Page>
  );
}

function DoubleOptIn() {
  const [tab, setTab] = useState('Email');
  return (
    <Page title="Double opt-in">
      <label className={styles.toggleRow}>
        <span>
          <b>Enable double opt-in</b>
          <small>Send a fictional confirmation email after form submission.</small>
        </span>
        <input type="checkbox" checked readOnly disabled />
      </label>
      <div className={styles.formGrid}>
        <label className={styles.field}>
          Sender address
          <input value="sender@atlas.example" readOnly />
        </label>
        <label className={styles.field}>
          Subject line
          <input value="Confirm your subscription" readOnly />
        </label>
      </div>
      <div className={styles.tabs} role="tablist" aria-label="Consent content">
        {['Email', 'Thank you'].map((item) => (
          <button
            type="button"
            role="tab"
            aria-selected={tab === item}
            key={item}
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <Empty title={`${tab} content`} body="A fictional consent-content preview is shown here." />
      <button type="button" disabled className={styles.primary}>
        Save
      </button>
    </Page>
  );
}

function EmailTracking() {
  return (
    <Page title="Email tracking">
      <Cards
        items={[
          ['Track opens', 'Complete tracking or campaign-level settings'],
          ['Track clicks', 'Complete tracking or campaign-level settings'],
          ['Track plain-text clicks', 'Optional trackable URL replacement'],
        ]}
      />
      <Boundary>All switches are represented as disabled local controls.</Boundary>
    </Page>
  );
}

function SenderAuthentication() {
  return (
    <Page
      title="Senders and authentication"
      action={
        <button type="button" disabled className={styles.primary}>
          Add sender
        </button>
      }
    >
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Domain</th>
            <th>SPF</th>
            <th>DKIM</th>
            <th>DMARC</th>
            <th>Return path</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>atlas.example</td>
            <td>Setup</td>
            <td>Setup</td>
            <td>At risk</td>
            <td>Setup</td>
          </tr>
        </tbody>
      </table>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Sender address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sender@atlas.example</td>
            <td>Verified</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}

function BotFiltering() {
  return (
    <Page title="Bot filter">
      <label className={styles.toggleRow}>
        <span>
          <b>Enable bot filter</b>
          <small>Exclude recognized bot activity from fictional reports.</small>
        </span>
        <input type="checkbox" checked readOnly disabled />
      </label>
      <label className={styles.toggleRow}>
        <span>
          <b>Exclude bot activity from segments</b>
          <small>Prevent fictional bot contacts from entering segments.</small>
        </span>
        <input type="checkbox" checked readOnly disabled />
      </label>
      <label className={styles.toggleRow}>
        <span>
          <b>Exclude bot activity from workflows</b>
          <small>Prevent fictional bot contacts from entering workflows.</small>
        </span>
        <input type="checkbox" checked readOnly disabled />
      </label>
    </Page>
  );
}

function OrganizationSettings() {
  return (
    <Page title="Organization">
      <h2 className={styles.sectionTitle}>Basic details</h2>
      <p>Company information can be reused in fictional campaign content.</p>
      <div className={styles.formGrid}>
        <label className={styles.field}>
          Organization logo
          <input value="atlas-logo.png" readOnly />
        </label>
        <label className={styles.field}>
          Company name
          <input value="Atlas Studio" readOnly />
        </label>
        <label className={styles.field}>
          Industry
          <input value="Creative services" readOnly />
        </label>
        <label className={styles.field}>
          Company domain
          <input value="atlas.example" readOnly />
        </label>
        <label className={styles.field}>
          Country
          <input value="Canada" readOnly />
        </label>
        <label className={styles.field}>
          Access URL
          <input value="campaigns.example/atlas" readOnly />
        </label>
      </div>
      <button type="button" disabled className={styles.primary}>
        Save
      </button>
    </Page>
  );
}

function SubscriptionUsage() {
  return (
    <Page title="Subscription">
      <Cards
        items={[
          ['Plan details', 'Fictional trial plan with a future review date'],
          ['Contacts imported', '320 of 2,000 fictional contacts'],
          ['Emails', '860 of 6,000 fictional sends'],
          ['Users added', '2 of 5 fictional seats'],
          ['AI credits', '420 fictional credits remaining'],
          ['Messaging credits', 'WhatsApp, SMS and long-code allocations'],
        ]}
      />
      <button type="button" disabled className={styles.primary}>
        Manage subscription
      </button>
    </Page>
  );
}

function UserManagement() {
  return (
    <Page
      title="All users"
      action={
        <button type="button" disabled className={styles.primary}>
          Add user
        </button>
      }
    >
      <table className={styles.table}>
        <thead>
          <tr>
            <th>User</th>
            <th>Status</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alex Morgan</td>
            <td>Active</td>
            <td>Workspace Admin</td>
          </tr>
          <tr>
            <td>Priya Chen</td>
            <td>Active</td>
            <td>Editor</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}

function RolesPermissions() {
  return (
    <Page
      title="User roles"
      action={
        <button type="button" disabled className={styles.primary}>
          Add new role
        </button>
      }
    >
      <Cards
        items={[
          ['Workspace Admin', 'All workspace actions, users, entities and permissions'],
          ['Manager', 'Create, edit and send campaigns and view reports'],
          ['Editor', 'Create, edit and delete campaigns and workflows'],
          ['Viewer', 'View modules and reports only'],
        ]}
      />
    </Page>
  );
}

function WorkspaceManagement() {
  return (
    <Page
      title="Workspaces"
      action={
        <button type="button" disabled className={styles.primary}>
          Create workspace
        </button>
      }
    >
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Users</th>
            <th>Contacts</th>
            <th>Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Atlas Campaigns</td>
            <td>Active</td>
            <td>2</td>
            <td>All contacts</td>
            <td>All topics</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}

function AuditLog() {
  return (
    <Page
      title="Activity logs"
      action={
        <button type="button" disabled className={styles.primary}>
          Export
        </button>
      }
    >
      <div className={styles.filters}>
        <button type="button">Last 7 days⌄</button>
        <button type="button">50 per page⌄</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Action</th>
            <th>User</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A fictional list was added</td>
            <td>Alex Morgan</td>
            <td>October 2026</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}

function SmsPreferences() {
  return (
    <Page title="SMS preferences">
      <label className={styles.toggleRow}>
        <span>
          <b>Enable unsubscribe link</b>
          <small>Compose a fictional prefix, unsubscribe URL and suffix.</small>
        </span>
        <input type="checkbox" checked readOnly disabled />
      </label>
      <div className={styles.formGrid}>
        <label className={styles.field}>
          URL prefix text
          <input value="Tap here" readOnly />
        </label>
        <label className={styles.field}>
          URL suffix text
          <input value="to unsubscribe" readOnly />
        </label>
      </div>
      <p className={styles.prereqs}>
        Preview: Tap here https://atlas.example/unsubscribe to unsubscribe
      </p>
      <label className={styles.toggleRow}>
        <span>
          <b>SMS click tracking</b>
          <small>Shorten and measure links in fictional SMS campaigns.</small>
        </span>
        <input type="checkbox" checked readOnly disabled />
      </label>
      <button type="button" disabled className={styles.primary}>
        Save
      </button>
    </Page>
  );
}

function ZiaUsageDetails() {
  return (
    <Page title="Zia usage details">
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Vendor</th>
            <th>Mode</th>
            <th>Model</th>
            <th>Tokens</th>
            <th>Credits</th>
            <th>Consumed by</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={7}>No usage records found.</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}

function GlobalCreateMenu() {
  return (
    <Page title="Quick create">
      <Cards
        items={[
          ['Campaigns', 'Email campaign, WhatsApp campaign and SMS campaign'],
          ['Audience', 'Add contacts, import contacts, list, segment and form'],
          ['Automation', 'Workflow'],
          ['Library', 'Email template and WhatsApp template'],
        ]}
      />
      <Boundary>Every quick-create destination remains disabled in this fixture.</Boundary>
    </Page>
  );
}

function NotificationCenter() {
  return (
    <Page
      title="Notifications"
      action={
        <button type="button" disabled className={styles.primary}>
          Mark all as read
        </button>
      }
    >
      <div className={styles.filters}>
        <button type="button">All⌄</button>
      </div>
      <Empty title="No notifications" body="New fictional notifications will appear here." />
    </Page>
  );
}

function AccountHelpPanel() {
  return (
    <Page title="Account and help">
      <Cards
        items={[
          ['Atlas Studio', 'Fictional account and organization summary'],
          ['Subscription', 'Fictional plan summary and upgrade boundary'],
          ['Themes', 'Dark, light and accent choices'],
          ['Get in touch', 'Email, call, chat and feedback resources'],
          ['Resources', 'Community, blogs, webinars and user guide'],
          ['Applications', 'Mobile application and social links'],
        ]}
      />
      <button type="button" disabled className={styles.primary}>
        Sign out
      </button>
    </Page>
  );
}

function ContactAnalytics() {
  const [mode, setMode] = useState('Timeline');
  return (
    <Page title="Contacts analytics">
      <Cards
        items={[
          ['Total contacts', '320 fictional contacts'],
          ['Reachable', '280 fictional contacts'],
          ['Excluded', '18 fictional contacts'],
          ['Suppressed', '22 fictional contacts'],
        ]}
      />
      <div className={styles.tabs} role="tablist" aria-label="Contact growth mode">
        {['Timeline', 'Cumulative'].map((item) => (
          <button
            type="button"
            role="tab"
            aria-selected={mode === item}
            key={item}
            onClick={() => setMode(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Analytics area</th>
            <th>Fictional state</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contact growth stats</td>
            <td>{mode} view across reachable, excluded and suppressed states</td>
          </tr>
          <tr>
            <td>Contact by source</td>
            <td>Manual, form and integration sources</td>
          </tr>
          <tr>
            <td>Engagement distribution</td>
            <td>Highly engaged, engaged, inactive and not reached</td>
          </tr>
          <tr>
            <td>Location breakdown</td>
            <td>Country performance</td>
          </tr>
        </tbody>
      </table>
    </Page>
  );
}

function EcommerceAnalyticsGate() {
  return (
    <Page title="E-Commerce analytics">
      <Empty
        title="Store not connected"
        body="Connect a store before commerce analytics become available."
      />
      <button type="button" disabled className={styles.primary}>
        Connect store
      </button>
    </Page>
  );
}

function ZiaModels() {
  return (
    <Page title="Model configuration">
      <p>Supported provider choices for AI-assisted campaign content.</p>
      <Cards
        items={[
          ['OpenAI', 'Cloud AI model provider'],
          ['Anthropic', 'Claude model provider'],
          ['Google Gemini', 'Enterprise AI model provider'],
          ['Cohere', 'NLP-focused AI model provider'],
        ]}
      />
      <ul className={styles.prereqs}>
        <li>Email subject, pre-header and body copy assistance</li>
        <li>WhatsApp marketing and utility template assistance</li>
        <li>SMS marketing copy assistance</li>
      </ul>
      <button type="button" disabled className={styles.primary}>
        Configure provider
      </button>
    </Page>
  );
}

function Content({ variant }: { variant: ZohoCampaignsVariant }) {
  switch (variant) {
    case 'application-shell':
      return (
        <Page title="Campaign workspace">
          <Cards items={modules.slice(1).map((x) => [x, `Open the ${x.toLowerCase()} area.`])} />
        </Page>
      );
    case 'getting-started-dashboard':
      return <GettingStarted />;
    case 'home-dashboard':
      return <HomeDashboard />;
    case 'analytics-channel-tabs':
      return <Analytics />;
    case 'email-campaign-starter':
      return (
        <Starter
          title="Start a new email campaign"
          label="Campaign name"
          choices={[
            ['Regular campaign', 'A one-time fictional email.'],
            ['RSS campaign', 'A fictional feed-triggered email.'],
          ]}
        />
      );
    case 'whatsapp-setup-gate':
      return (
        <ChannelGate
          channel="WhatsApp"
          points={['A Meta account', 'A WhatsApp Business account', 'A dedicated phone number']}
        />
      );
    case 'sms-gateway-selector':
      return <SmsGate />;
    case 'contact-directory':
      return <ContactDirectory />;
    case 'list-table':
      return <Lists />;
    case 'segment-starter':
      return (
        <Starter
          title="Create a segment"
          label="Segment name"
          choices={[
            ['Attribute segment', 'Group by fictional contact attributes.'],
            ['Behavior segment', 'Group by fictional engagement.'],
          ]}
        />
      );
    case 'form-starter':
      return <FormStarter />;
    case 'workflow-starter':
      return (
        <Starter
          title="Create a workflow"
          label="Workflow name"
          choices={[
            ['Simple follow-up', 'A fictional follow-up sequence.'],
            ['Basic welcome', 'A fictional onboarding sequence.'],
            ['Build your own', 'A blank local canvas.'],
          ]}
        />
      );
    case 'media-library-empty-state':
      return <MediaLibrary />;
    case 'email-template-starter':
      return (
        <Starter
          title="Create an email template"
          label="Template name"
          choices={[
            ['Gallery', 'Start from a fictional design.'],
            ['Layout', 'Start from structure.'],
            ['HTML editor', 'Start from local HTML.'],
          ]}
        />
      );
    case 'settings-directory':
      return <SettingsDirectory />;
    case 'notification-settings':
      return <Notifications />;
    case 'topics-settings':
      return <TopicsSettings />;
    case 'contact-scoring':
      return <ContactScoring />;
    case 'field-management':
      return <FieldManagement />;
    case 'signup-lifecycle-directory':
      return <SignupLifecycle />;
    case 'utm-tracking':
      return <UtmTracking />;
    case 'frequency-capping':
      return <FrequencyCapping />;
    case 'integrations-catalogue':
      return <IntegrationsCatalogue />;
    case 'webhooks-empty-state':
      return <WebhooksEmptyState />;
    case 'compliance-settings':
      return <ComplianceSettings />;
    case 'double-opt-in':
      return <DoubleOptIn />;
    case 'email-tracking':
      return <EmailTracking />;
    case 'sender-authentication':
      return <SenderAuthentication />;
    case 'bot-filtering':
      return <BotFiltering />;
    case 'organization-settings':
      return <OrganizationSettings />;
    case 'subscription-usage':
      return <SubscriptionUsage />;
    case 'user-management':
      return <UserManagement />;
    case 'roles-permissions':
      return <RolesPermissions />;
    case 'workspace-management':
      return <WorkspaceManagement />;
    case 'audit-log':
      return <AuditLog />;
    case 'sms-preferences':
      return <SmsPreferences />;
    case 'zia-usage-details':
      return <ZiaUsageDetails />;
    case 'global-create-menu':
      return <GlobalCreateMenu />;
    case 'notification-center':
      return <NotificationCenter />;
    case 'account-help-panel':
      return <AccountHelpPanel />;
    case 'contact-analytics':
      return <ContactAnalytics />;
    case 'ecommerce-analytics-gate':
      return <EcommerceAnalyticsGate />;
    case 'zia-model-configuration':
      return <ZiaModels />;
  }
}

const activeByVariant: Record<ZohoCampaignsVariant, string> = {
  'application-shell': 'Home',
  'getting-started-dashboard': 'Getting Started',
  'home-dashboard': 'Home',
  'analytics-channel-tabs': 'Analytics',
  'email-campaign-starter': 'Campaigns',
  'whatsapp-setup-gate': 'Campaigns',
  'sms-gateway-selector': 'Campaigns',
  'contact-directory': 'Audience',
  'list-table': 'Audience',
  'segment-starter': 'Audience',
  'form-starter': 'Audience',
  'workflow-starter': 'Automation',
  'media-library-empty-state': 'Library',
  'email-template-starter': 'Library',
  'settings-directory': 'Home',
  'notification-settings': 'Home',
  'topics-settings': 'Audience',
  'contact-scoring': 'Audience',
  'field-management': 'Audience',
  'signup-lifecycle-directory': 'Audience',
  'utm-tracking': 'Analytics',
  'frequency-capping': 'Analytics',
  'integrations-catalogue': 'Home',
  'webhooks-empty-state': 'Home',
  'compliance-settings': 'Home',
  'double-opt-in': 'Home',
  'email-tracking': 'Analytics',
  'sender-authentication': 'Home',
  'bot-filtering': 'Analytics',
  'organization-settings': 'Home',
  'subscription-usage': 'Home',
  'user-management': 'Home',
  'roles-permissions': 'Home',
  'workspace-management': 'Home',
  'audit-log': 'Home',
  'sms-preferences': 'Campaigns',
  'zia-usage-details': 'Home',
  'global-create-menu': 'Home',
  'notification-center': 'Home',
  'account-help-panel': 'Home',
  'contact-analytics': 'Analytics',
  'ecommerce-analytics-gate': 'Analytics',
  'zia-model-configuration': 'Home',
};

export function ZohoCampaignsPreview({ variant }: ZohoCampaignsPreviewProps) {
  return (
    <Shell active={activeByVariant[variant]}>
      <Content variant={variant} />
    </Shell>
  );
}

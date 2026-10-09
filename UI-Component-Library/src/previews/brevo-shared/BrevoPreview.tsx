import { useState } from 'react';
import styles from './brevo.module.css';

export type BrevoVariant =
  | 'application-shell'
  | 'home-dashboard'
  | 'calendar-planner'
  | 'onboarding-empty-states'
  | 'campaign-channel-selector'
  | 'landing-page-upgrade-popover'
  | 'forms-empty-state'
  | 'marketing-statistics'
  | 'template-empty-state'
  | 'contact-table'
  | 'list-table'
  | 'segment-empty-state'
  | 'company-empty-state'
  | 'sales-activation-gate'
  | 'custom-objects-upgrade-gate'
  | 'automation-onboarding'
  | 'transactional-configuration'
  | 'conversations-inbox'
  | 'commerce-integration-catalogue'
  | 'loyalty-upgrade-gate'
  | 'media-library-empty-state'
  | 'analytics-upgrade-gates'
  | 'usage-plan-popover'
  | 'help-panel'
  | 'notification-popover'
  | 'account-menu'
  | 'settings-navigation'
  | 'general-settings-form'
  | 'language-preferences'
  | 'user-management'
  | 'two-factor-authentication'
  | 'localization-upgrade-gate'
  | 'deliverability-center'
  | 'utm-tracking-settings'
  | 'custom-objects-settings-gate'
  | 'data-feeds-upgrade-gate'
  | 'contact-settings-catalogue'
  | 'company-settings-catalogue'
  | 'deal-settings-activation'
  | 'campaign-settings-catalogue'
  | 'conversation-queue-states'
  | 'visitors-online-table'
  | 'conversation-statistics'
  | 'meetings-onboarding'
  | 'notification-activity';

export interface BrevoPreviewProps {
  variant: BrevoVariant;
  disabled?: boolean;
}

const nav = [
  'Home',
  'CRM',
  'Marketing',
  'Automations',
  'Transactional',
  'Conversations',
  'Commerce',
  'Library',
  'Analytics',
];

function Boundary({ children }: { children: string }) {
  return (
    <p className={styles.boundary} role="status">
      {children}
    </p>
  );
}

function Topbar() {
  return (
    <header className={styles.topbar}>
      <span className={styles.crumb}>Research workspace</span>
      <div>
        <button type="button" disabled>
          ✦ Ask AI
        </button>
        <button type="button">⌁ Usage and plan</button>
        <button type="button" aria-label="Help">
          ?
        </button>
        <button type="button" aria-label="Settings">
          ⚙
        </button>
        <button type="button" aria-label="Notifications">
          ♧
        </button>
        <button type="button" aria-label="Fictional account">
          Atlas Studio⌄
        </button>
      </div>
    </header>
  );
}

function Sidebar({ active }: { active: string }) {
  return (
    <aside className={styles.sidebar}>
      <strong className={styles.logo}>Brevo</strong>
      {nav.map((item) => (
        <button type="button" key={item} aria-current={active === item ? 'page' : undefined}>
          <span>{item.slice(0, 1)}</span>
          {item}
        </button>
      ))}
    </aside>
  );
}

function Shell({ active = 'Home', children }: { active?: string; children: React.ReactNode }) {
  return (
    <div className={styles.app}>
      <Sidebar active={active} />
      <div className={styles.stage}>
        <Topbar />
        {children}
      </div>
    </div>
  );
}

function Empty({ title, body }: { title: string; body: string }) {
  return (
    <section className={styles.empty}>
      <div className={styles.illustration}>◯　✦　◒</div>
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  );
}

function Gate({
  eyebrow,
  title,
  body,
  action = 'Upgrade',
}: {
  eyebrow?: string;
  title: string;
  body: string;
  action?: string;
}) {
  return (
    <section className={styles.gate}>
      {eyebrow && <b>{eyebrow}</b>}
      <h1>{title}</h1>
      <p>{body}</p>
      <button type="button" disabled>
        {action}
      </button>
    </section>
  );
}

function Page({
  title,
  actions,
  children,
}: {
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <div className={styles.pageHead}>
        <h1>{title}</h1>
        {actions}
      </div>
      {children}
    </main>
  );
}

function HomeDashboard() {
  return (
    <Page title="Hello, Atlas">
      <div className={styles.homeGrid}>
        <section className={styles.calendar}>
          <b>October 2026</b>
          <div>
            {Array.from({ length: 35 }, (_, i) => (
              <span key={i}>{i < 4 ? '' : i - 3}</span>
            ))}
          </div>
        </section>
        <section className={styles.card}>
          <h2>Get started</h2>
          <p>Add contacts, create a campaign, or build an automation.</p>
          <button type="button" disabled>
            Create campaign
          </button>
        </section>
        <section className={styles.card}>
          <h2>Email deliverability score</h2>
          <p>No deliverability score yet.</p>
        </section>
        <section className={styles.card}>
          <h2>Your plan usage</h2>
          <b>300 emails left</b>
          <progress value="0" max="300" />
        </section>
      </div>
      <Boundary>
        All names, dates and usage values are fictional. Provider actions are disabled.
      </Boundary>
    </Page>
  );
}

function MarketingStatistics() {
  return (
    <Page title="Statistics">
      <button className={styles.dateButton} type="button">
        09/09/2026 – 09/10/2026　▣
      </button>
      <div className={styles.metricGrid}>
        {[
          'Sent',
          'Recipients',
          'Opens',
          'Bounces',
          'Replies',
          'Open rate',
          'Clicks',
          'Unsubscribes',
        ].map((x) => (
          <article key={x}>
            <span>{x}</span>
            <b>{x.includes('rate') || x === 'Open rate' ? '0%' : '0'}</b>
          </article>
        ))}
      </div>
      <Empty
        title="There are no items in this list yet"
        body="Campaign analytics appear here after eligible sends."
      />
      <Boundary>Exports and provider date changes are not available in this fixture.</Boundary>
    </Page>
  );
}

function FormsEmptyState() {
  const [tab, setTab] = useState('Sign-up');
  return (
    <Page
      title="Forms"
      actions={
        <button type="button" disabled>
          Create sign-up form
        </button>
      }
    >
      <div className={styles.tabs}>
        {['Sign-up', 'Unsubscribe', 'Profile update'].map((x) => (
          <button type="button" key={x} aria-pressed={tab === x} onClick={() => setTab(x)}>
            {x}
          </button>
        ))}
      </div>
      <Empty
        title={`${tab} forms`}
        body="Create and manage forms for a fictional contact audience."
      />
      <Boundary>Tabs are local. Form creation and publishing are disabled.</Boundary>
    </Page>
  );
}

function CampaignChannels() {
  return (
    <Page title="Campaigns">
      <section className={styles.hero}>
        <h2>Your clients have never been closer</h2>
        <p>Choose a channel for your next campaign.</p>
      </section>
      <div className={styles.channelGrid}>
        {['✦ Generate email with AI', '✉ Email', '▤ SMS', '◉ WhatsApp', '◈ Push', '▱ Pop-up'].map(
          (x) => (
            <button key={x} type="button" disabled>
              {x}
            </button>
          )
        )}
      </div>
      <Boundary>AI generation and every campaign-creation path are disabled.</Boundary>
    </Page>
  );
}

function SimpleTable({ kind }: { kind: 'contacts' | 'lists' }) {
  const headings =
    kind === 'contacts'
      ? ['CONTACT', 'SUBSCRIBED', 'BLOCKLISTED', 'OWNER']
      : ['LIST', 'ID', 'FOLDER', 'CONTACTS'];
  const values =
    kind === 'contacts'
      ? ['alex@atlas.example', 'Email', 'No', 'Research team']
      : ['Launch audience', '#7', 'Research lists', '12'];
  return (
    <Page
      title={kind === 'contacts' ? 'Contacts' : 'Lists'}
      actions={
        <button type="button" disabled>
          {kind === 'contacts' ? 'Import contacts' : 'Create a list'}
        </button>
      }
    >
      <div className={styles.toolbar}>
        <button type="button">Add filter⌄</button>
        <input aria-label={`Search ${kind}`} placeholder={`Search ${kind}`} />
      </div>
      <table>
        <thead>
          <tr>
            {headings.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {values.map((v) => (
              <td key={v}>{v}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className={styles.pagination}>20 rows per page　1–1 of 1　‹　›</div>
      <Boundary>
        Rows use fictional data. Import, creation, filtering and pagination do not contact Brevo.
      </Boundary>
    </Page>
  );
}

function Conversations() {
  return (
    <Page title="Conversations">
      <div className={styles.inbox}>
        <aside>
          <b>Open⌄</b>
          <button type="button" aria-current="page">
            Welcome Bot
            <br />
            <small>Welcome to the research inbox…</small>
          </button>
        </aside>
        <section>
          <header>
            <b>Welcome Bot</b>
            <span>● Online</span>
          </header>
          <article>
            <b>Welcome Bot</b>
            <p>
              This fictional message demonstrates the observed inbox layout and channel suggestions.
            </p>
            <div className={styles.channels}>Chat widget　Email　Facebook　Instagram　WhatsApp</div>
          </article>
          <textarea aria-label="Fictional reply" placeholder="Start typing to join" disabled />
          <button type="button" disabled>
            Send
          </button>
        </section>
      </div>
      <Boundary>
        Reply, comment, assignment, channel connection and message sending are disabled.
      </Boundary>
    </Page>
  );
}

function SettingsNavigation() {
  const groups = [
    'Personal settings',
    'Profile',
    'General',
    'Language',
    'Individual email',
    'Organization settings',
    'Users',
    'Senders, domains, IPs',
    'SMTP & API',
    'Aura AI control center',
    'Security',
    'Localization',
    'Deliverability Center',
    'UTM parameters',
    'Data Management',
    'Contacts',
    'Companies',
    'Deals',
    'Campaigns',
    'Inbox',
    'Meetings',
    'Automations',
    'Transactional emails',
    'E-commerce',
    'Conversions',
  ];
  return (
    <Page title="Settings">
      <div className={styles.settingsList}>
        {groups.map((x) => (
          <button type="button" key={x} disabled={/SMTP|AI|Security/.test(x)}>
            {x}
          </button>
        ))}
      </div>
      <Boundary>
        Settings navigation is reconstructed. Credential, security and write-shaped entries are
        disabled.
      </Boundary>
    </Page>
  );
}

function GeneralSettings() {
  return (
    <Page title="General">
      <form className={styles.form}>
        <h2>Date and Time</h2>
        <label>
          Time zone
          <select disabled defaultValue="Toronto">
            <option>Toronto</option>
          </select>
        </label>
        <fieldset disabled>
          <legend>Time format</legend>
          <label>
            <input type="radio" defaultChecked /> 24 hours
          </label>
          <label>
            <input type="radio" /> 12 hours
          </label>
        </fieldset>
        <fieldset disabled>
          <legend>Date format</legend>
          <label>
            <input type="radio" defaultChecked /> DD-MM-YYYY
          </label>
          <label>
            <input type="radio" /> MM-DD-YYYY
          </label>
        </fieldset>
        <h2>Notifications</h2>
        <label>
          <input type="checkbox" disabled /> Deactivate activity notifications
        </label>
        <label>
          <input type="checkbox" disabled /> Email me when credits are low
        </label>
        <h2>Account access</h2>
        <label>
          <input type="checkbox" disabled defaultChecked /> Allow support access
        </label>
        <button type="button" disabled>
          Save
        </button>
        <button className={styles.danger} type="button" disabled>
          Definitively close your account
        </button>
      </form>
      <Boundary>
        Observed values are fictionalized. Save and account deletion are disabled.
      </Boundary>
    </Page>
  );
}

function SettingsCards({
  title,
  items,
  boundary,
}: {
  title: string;
  items: Array<[string, string]>;
  boundary: string;
}) {
  return (
    <Page title={title}>
      <div className={styles.settingsCards}>
        {items.map(([heading, body]) => (
          <article key={heading}>
            <div>
              <h2>{heading}</h2>
              <p>{body}</p>
            </div>
            <button type="button" disabled>
              Configure
            </button>
          </article>
        ))}
      </div>
      <Boundary>{boundary}</Boundary>
    </Page>
  );
}

function LanguagePreferences() {
  return (
    <Page title="Select your language">
      <form className={styles.form}>
        {[
          'English (United States)',
          'English (United Kingdom)',
          'Français (France)',
          'Italiano (Italia)',
          'Español (España)',
          'Português (Brasil)',
          'Deutsch (Deutschland)',
        ].map((language, index) => (
          <label key={language}>
            <input type="radio" name="language" defaultChecked={index === 0} disabled /> {language}
          </label>
        ))}
        <h2>Select a timezone</h2>
        <select aria-label="Timezone" defaultValue="Toronto" disabled>
          <option>Toronto</option>
        </select>
        <button type="button" disabled>
          Save the preferences
        </button>
      </form>
      <Boundary>Language and timezone values are fictional. Saving is disabled.</Boundary>
    </Page>
  );
}

function ConversationQueues() {
  const [queue, setQueue] = useState('My messages');
  return (
    <Page title="Conversations">
      <div className={styles.tabs}>
        {['My messages', 'Unassigned', 'All messages'].map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={queue === item}
            onClick={() => setQueue(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.queuePanel}>
        <div>
          <button type="button">Open⌄</button>
          <button type="button">Sort oldest first</button>
        </div>
        <Empty title="All clear!" body={`${queue} has no fictional open conversations.`} />
      </div>
      <Boundary>
        Queue switching is local. Assignment, status changes and messaging are disabled.
      </Boundary>
    </Page>
  );
}

function VariantContent({ variant }: { variant: BrevoVariant }) {
  switch (variant) {
    case 'application-shell':
      return (
        <Page title="Brevo workspace">
          <Empty
            title="One shell, many work areas"
            body="Persistent navigation and global utilities frame every product surface."
          />
          <Boundary>Identity is fictional and provider controls are inert.</Boundary>
        </Page>
      );
    case 'home-dashboard':
    case 'calendar-planner':
    case 'onboarding-empty-states':
      return <HomeDashboard />;
    case 'campaign-channel-selector':
      return <CampaignChannels />;
    case 'landing-page-upgrade-popover':
      return (
        <Page title="Campaigns">
          <Gate
            eyebrow="Premium feature"
            title="Build landing pages that convert"
            body="Create customized landing pages to collect leads and promote content."
            action="Upgrade your plan"
          />
          <Boundary>Plan changes are disabled.</Boundary>
        </Page>
      );
    case 'forms-empty-state':
      return <FormsEmptyState />;
    case 'marketing-statistics':
      return <MarketingStatistics />;
    case 'template-empty-state':
      return (
        <Page
          title="Templates"
          actions={
            <>
              <button type="button" disabled>
                Create folder
              </button>
              <button type="button" disabled>
                Create template
              </button>
            </>
          }
        >
          <Empty
            title="You have not created any email templates"
            body="Newly created templates would appear here."
          />
          <Boundary>Folder and template creation are disabled.</Boundary>
        </Page>
      );
    case 'contact-table':
      return <SimpleTable kind="contacts" />;
    case 'list-table':
      return <SimpleTable kind="lists" />;
    case 'segment-empty-state':
      return (
        <Page
          title="Segments"
          actions={
            <button type="button" disabled>
              Create a segment
            </button>
          }
        >
          <div className={styles.toolbar}>
            <input aria-label="Search segments" placeholder="Search segments" />
            <button type="button">All folders (0 segments)⌄</button>
          </div>
          <Empty
            title="You don’t have segments in this folder yet"
            body="Add segments to enrich a fictional contact database."
          />
          <Boundary>Segment creation and provider filters are disabled.</Boundary>
        </Page>
      );
    case 'company-empty-state':
      return (
        <Page
          title="Companies"
          actions={
            <button type="button" disabled>
              Create company
            </button>
          }
        >
          <div className={styles.toolbar}>
            <button type="button">Add filter⌄</button>
            <input aria-label="Search companies" placeholder="Company name or domain" />
          </div>
          <Empty
            title="You don’t have any companies yet"
            body="Company records would appear here."
          />
          <Boundary>Company creation and import are disabled.</Boundary>
        </Page>
      );
    case 'sales-activation-gate':
      return (
        <Gate
          title="Boost your sales efficiency and grow your business"
          body="Create pipelines, automate repetitive tasks and track follow-ups."
          action="Start for free"
        />
      );
    case 'custom-objects-upgrade-gate':
      return (
        <Gate
          eyebrow="Professional feature"
          title="Upgrade to unlock custom objects"
          body="Model business data and activate it in campaigns and automations."
        />
      );
    case 'automation-onboarding':
      return (
        <Gate
          eyebrow="Get started with Automations"
          title="Easy automation for effortless growth"
          body="Draft workflows and discover automation patterns."
          action="Create your first automation"
        />
      );
    case 'transactional-configuration':
      return (
        <Page title="Configuration">
          <div className={styles.steps}>
            <b>① Configuration</b>
            <span>② Verification</span>
          </div>
          <div className={styles.tabs}>
            <button type="button" aria-pressed="true">
              SMTP settings
            </button>
            <button type="button">API Settings</button>
            <button type="button">Config with Postfix</button>
            <button type="button">Config with PHP</button>
          </div>
          <dl>
            <dt>SMTP server</dt>
            <dd>smtp.example.invalid</dd>
            <dt>Port</dt>
            <dd>587</dd>
            <dt>Login</dt>
            <dd>fictional-user@example.invalid</dd>
            <dt>Password</dt>
            <dd>Hidden</dd>
          </dl>
          <button type="button" disabled>
            Next
          </button>
          <Boundary>
            Credentials are fictional. Key access, verification and sending are disabled.
          </Boundary>
        </Page>
      );
    case 'conversations-inbox':
      return <Conversations />;
    case 'commerce-integration-catalogue':
      return (
        <Page title="Connect your store">
          <div className={styles.integrationGrid}>
            {[
              'WooCommerce',
              'Shopify',
              'PrestaShop',
              'Shopware',
              'Magento',
              'BigCommerce',
              'nopCommerce',
              'JTL-Shop',
            ].map((x) => (
              <article key={x}>
                <b>{x}</b>
                <button type="button" disabled>
                  Install plugin
                </button>
                <a href="#guide" onClick={(e) => e.preventDefault()}>
                  View setup guide
                </a>
              </article>
            ))}
          </div>
          <Boundary>Installation, connection and external navigation are disabled.</Boundary>
        </Page>
      );
    case 'loyalty-upgrade-gate':
      return (
        <Gate
          title="Keep customers coming back with Loyalty"
          body="Connect programs to campaigns, define earning rules and automate rewards."
          action="Upgrade to Enterprise"
        />
      );
    case 'media-library-empty-state':
      return (
        <Page
          title="Media"
          actions={
            <>
              <button type="button" disabled>
                Generate image
              </button>
              <button type="button" disabled>
                Add file⌄
              </button>
            </>
          }
        >
          <div className={styles.toolbar}>
            <input aria-label="Search media" placeholder="Search media" />
            <button type="button">Grid layout</button>
            <button type="button">List layout</button>
          </div>
          <Empty
            title="Your media library is empty"
            body="Store and organize campaign assets here."
          />
          <Boundary>Upload and AI image generation are disabled.</Boundary>
        </Page>
      );
    case 'analytics-upgrade-gates':
      return (
        <Gate
          eyebrow="Analytics Studio"
          title="Take full control of your analytics"
          body="Explore dashboards, uncover trends and ask questions in plain language."
        />
      );
    case 'usage-plan-popover':
      return (
        <Page title="Campaign usage and plan">
          <div className={styles.plan}>
            <b>Free plan</b>
            <p>300 emails left until 09/10/2026</p>
            <hr />
            <b>Email prepaid credits</b>
            <p>0 emails left</p>
            <b>SMS prepaid</b>
            <p>0 credits left</p>
            <button type="button" disabled>
              Manage your plan and credits
            </button>
          </div>
          <Boundary>Values are fictional and plan changes are disabled.</Boundary>
        </Page>
      );
    case 'help-panel':
      return (
        <Page title="Need help?">
          <input aria-label="Search help" placeholder="Search for help" />
          <div className={styles.linkList}>
            {[
              'Help Center',
              'Support and Tickets',
              'Live webinars',
              'Hire an agency',
              'API documentation',
              'Brevo Community',
            ].map((x) => (
              <button type="button" key={x}>
                {x}
              </button>
            ))}
          </div>
          <Boundary>Links stay within the fixture.</Boundary>
        </Page>
      );
    case 'notification-popover':
      return (
        <Page title="Notifications">
          <div className={styles.notice}>
            <b>A contact folder was added</b>
            <small>Today, 1:07 PM</small>
          </div>
          <div className={styles.notice}>
            <b>A contact list was added</b>
            <small>Today, 1:07 PM</small>
          </div>
          <button type="button">View all activity</button>
          <Boundary>Notification state cannot change.</Boundary>
        </Page>
      );
    case 'account-menu':
      return (
        <Page title="Account">
          <div className={styles.linkList}>
            {[
              'My profile',
              'My plan',
              'Aura control center',
              'Settings',
              'Integrations',
              'Carbon footprint',
            ].map((x) => (
              <button type="button" key={x}>
                {x}
              </button>
            ))}
            <button type="button" disabled>
              Log out
            </button>
          </div>
          <Boundary>Identity is fictional. Account switching and logout are disabled.</Boundary>
        </Page>
      );
    case 'settings-navigation':
      return <SettingsNavigation />;
    case 'general-settings-form':
      return <GeneralSettings />;
    case 'language-preferences':
      return <LanguagePreferences />;
    case 'user-management':
      return (
        <Page
          title="Users"
          actions={
            <button type="button" disabled>
              Add users
            </button>
          }
        >
          <div className={styles.tabs}>
            <button type="button" aria-pressed="true">
              Users
            </button>
            <button type="button">Partner user</button>
            <button type="button">Activity logs</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>USER</th>
                <th>ROLE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fictional teammate</td>
                <td>Member</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
          <Boundary>Rows are fictional. Seats, users and partner access cannot change.</Boundary>
        </Page>
      );
    case 'two-factor-authentication':
      return (
        <Gate
          eyebrow="Security"
          title="Two-factor authentication"
          body="Add an extra verification step when signing in."
          action="Enable two-factor authentication"
        />
      );
    case 'localization-upgrade-gate':
      return (
        <Gate
          eyebrow="Localization"
          title="Set up your languages"
          body="Create localized campaign experiences for multiple audiences."
          action="Upgrade to Professional"
        />
      );
    case 'deliverability-center':
      return (
        <SettingsCards
          title="Deliverability center"
          items={[
            ['Your account', 'A prominent account-status banner anchors the page.'],
            ['Deliverability', 'Breakdown and history views explain sending health.'],
          ]}
          boundary="The provider-specific account status is replaced by neutral fixture copy. Campaign creation is disabled."
        />
      );
    case 'utm-tracking-settings':
      return (
        <SettingsCards
          title="UTM parameters"
          items={[
            [
              'Activate UTM tracking',
              'Apply campaign tracking parameters from one organization setting.',
            ],
          ]}
          boundary="The activation control is disabled and no setting is persisted."
        />
      );
    case 'custom-objects-settings-gate':
      return (
        <Gate
          eyebrow="Custom objects settings"
          title="Leverage all your data with Custom Objects"
          body="Model business entities beyond contacts, companies and deals."
          action="Upgrade"
        />
      );
    case 'data-feeds-upgrade-gate':
      return (
        <Gate
          eyebrow="Data feeds"
          title="Personalize your messages with external data"
          body="Bring external data into eligible messaging experiences."
          action="Upgrade plan"
        />
      );
    case 'contact-settings-catalogue':
      return (
        <SettingsCards
          title="Contacts settings"
          items={[
            ['Contact attributes', 'Define information saved for contacts and transactions.'],
            ['Scores', 'Manage scores calculated for contacts.'],
            ['Webhooks', 'Choose events sent to another tool.'],
            ['Unengaged contacts', 'Identify contacts to exclude from campaigns.'],
            [
              'Apple MPP opens in segments',
              'Choose whether privacy-protected opens count in segments.',
            ],
            [
              'Per-contact pixel tracking consent',
              'Track opens and clicks only for consenting contacts.',
            ],
            ['Consent Groups', 'Organize communication consent for targeting and compliance.'],
          ]}
          boundary="Every configuration entry is disabled. No webhook, score, consent or tracking setting is changed."
        />
      );
    case 'company-settings-catalogue':
      return (
        <SettingsCards
          title="Companies settings"
          items={[
            ['Companies attributes', 'Define information saved for companies.'],
            [
              'Automated company management',
              'Create, associate and enrich companies from verified sources.',
            ],
          ]}
          boundary="Attribute editing, enrichment and automated company creation are disabled."
        />
      );
    case 'deal-settings-activation':
      return (
        <Gate
          eyebrow="Deals"
          title="Set up your sales workspace"
          body="Configure pipelines and deal properties before using Deals."
          action="Start setup"
        />
      );
    case 'campaign-settings-catalogue':
      return (
        <SettingsCards
          title="Campaign settings"
          items={[
            ['Default settings', 'Configure reusable campaign defaults.'],
            ['Test list', 'Set up a controlled test audience.'],
            ['Unsubscribe pages', 'Personalize subscriber exit pages.'],
            ['Google Analytics', 'Connect campaign measurement.'],
            ['Global calculated values', 'Manage reusable values.'],
            ['Webhooks', 'Choose campaign events sent externally.'],
            ['Senders & domains', 'Review sending identity configuration.'],
            ['Conversions', 'Open campaign conversion settings.'],
          ]}
          boundary="Setup, connection, purchase and identity controls are disabled."
        />
      );
    case 'conversation-queue-states':
      return <ConversationQueues />;
    case 'visitors-online-table':
      return (
        <Page title="Visitors in real time">
          <table>
            <thead>
              <tr>
                {[
                  'STATUS',
                  'LOCATION',
                  'PAGE',
                  'URL',
                  'TIME ON PAGE',
                  'REFERRER',
                  'GROUP',
                  'OS',
                ].map((x) => (
                  <th key={x}>{x}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8}>No fictional visitors online</td>
              </tr>
            </tbody>
          </table>
          <label className={styles.toggleRow}>
            <input type="checkbox" disabled /> Receive a notification for every visitor to the
            website
          </label>
          <Boundary>
            Visitor data is fictional. Package, notification and tracking changes are disabled.
          </Boundary>
        </Page>
      );
    case 'conversation-statistics':
      return (
        <SettingsCards
          title="Conversation statistics"
          items={[
            ['Satisfaction', 'Review customer satisfaction over a selected period.'],
            ['Conversations', 'Compare queue volume and response activity.'],
            ['Agents', 'Review team performance without exposing identities.'],
          ]}
          boundary="The observed report route is reconstructed with fictional zero-data summaries."
        />
      );
    case 'meetings-onboarding':
      return (
        <Gate
          eyebrow="Meetings"
          title="Let people book meetings with you when you're available."
          body="Offer 15, 30 or 60-minute meetings, connect meeting providers and share a booking link."
          action="Set up Meetings"
        />
      );
    case 'notification-activity':
      return (
        <Page title="Notifications">
          <h2>10/09/2026</h2>
          <div className={styles.notice}>
            <b>A fictional contact folder was added</b>
            <small>1:07 PM</small>
          </div>
          <div className={styles.notice}>
            <b>A fictional contact list was added</b>
            <small>1:07 PM</small>
          </div>
          <Boundary>Events and times are fictional. Notification state cannot change.</Boundary>
        </Page>
      );
  }
}

function activeFor(variant: BrevoVariant) {
  if (/campaign|landing|forms|marketing|template/.test(variant)) return 'Marketing';
  if (/contact|list-table|segment|company|sales|custom/.test(variant)) return 'CRM';
  if (/automation/.test(variant)) return 'Automations';
  if (/transactional/.test(variant)) return 'Transactional';
  if (/conversation|visitors|meetings/.test(variant)) return 'Conversations';
  if (/commerce|loyalty/.test(variant)) return 'Commerce';
  if (/media/.test(variant)) return 'Library';
  if (/analytics/.test(variant)) return 'Analytics';
  return 'Home';
}

export function BrevoPreview({ variant }: BrevoPreviewProps) {
  return (
    <Shell active={activeFor(variant)}>
      <VariantContent variant={variant} />
    </Shell>
  );
}

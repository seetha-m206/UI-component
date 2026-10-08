import { useState } from 'react';
import styles from './make.module.css';

export type MakeVariant =
  | 'application-shell'
  | 'organization-dashboard'
  | 'scenarios-empty'
  | 'template-catalogue'
  | 'template-canvas'
  | 'ai-agents-landing'
  | 'connections-list'
  | 'webhooks-empty'
  | 'mcp-toolboxes-empty'
  | 'teams-list'
  | 'users-table'
  | 'roles-catalogue'
  | 'role-permissions'
  | 'credit-usage'
  | 'installed-apps-empty'
  | 'organization-variables'
  | 'scenario-properties-gate'
  | 'audit-logs-gate'
  | 'event-subscriptions-gate'
  | 'notification-options'
  | 'data-stores-empty'
  | 'data-structures-empty'
  | 'devices-empty'
  | 'custom-apps-onboarding'
  | 'router-filter-builder'
  | 'mapping-schedule-panel'
  | 'run-history-inspector'
  | 'incomplete-executions-errors'
  | 'global-search-palette'
  | 'help-launcher'
  | 'notifications-empty'
  | 'account-menu'
  | 'workspace-picker'
  | 'private-space-dashboard'
  | 'profile-organizations'
  | 'profile-settings-dialog'
  | 'email-preferences'
  | 'timezone-options'
  | 'api-access-boundary'
  | 'two-factor-boundary'
  | 'affiliate-onboarding'
  | 'subscription-overview'
  | 'payments-empty'
  | 'organization-team-action-menus'
  | 'profile-security-actions';

export interface MakePreviewProps {
  variant: MakeVariant;
  disabled?: boolean;
}

const primaryNavigation = [
  'Org',
  'Scenarios',
  'AI Agents',
  'Credentials',
  'Webhooks',
  'MCP Toolboxes',
  'Templates',
  'Data stores',
  'Devices',
  'Data structures',
  'Custom Apps',
];

const organizationNavigation = [
  'Dashboard',
  'Teams',
  'Users',
  'User roles',
  'Subscription',
  'Credit usage',
  'Payments',
  'Installed apps',
  'Variables',
  'Scenario properties',
  'Audit logs',
  'Event subscriptions',
  'Notification options',
];

function Boundary({ children }: { children: string }) {
  return (
    <p className={styles.boundary} role="status">
      {children}
    </p>
  );
}

function EmptyState({
  icon,
  title,
  copy,
  action,
}: {
  icon: string;
  title: string;
  copy: string;
  action: string;
}) {
  return (
    <section className={styles.empty}>
      <span className={styles.emptyIcon}>{icon}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
      <button type="button" disabled>
        {action}
      </button>
    </section>
  );
}

function Dashboard() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1>What are we automating?</h1>
        <p>Describe an idea and the fictional assistant will outline a workflow.</p>
        <textarea aria-label="Fictional automation idea" placeholder="Describe an automation" />
        <button type="button" disabled>
          Send
        </button>
      </div>
      <h2>Start from scratch</h2>
      <div className={styles.cardGrid}>
        <article>
          <b>Create a scenario</b>
          <span>Build a custom workflow.</span>
        </article>
        <article>
          <b>Create an AI agent</b>
          <span>Let an agent decide and act.</span>
        </article>
        <article>
          <b>Build from an AI client</b>
          <span>Expose approved scenarios as tools.</span>
        </article>
      </div>
    </section>
  );
}

function ScenariosEmpty() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>All scenarios</h1>
        <button type="button" disabled>
          ＋ Create scenario
        </button>
      </header>
      <div className={styles.banner}>Build and run scenarios from an AI client</div>
      <EmptyState
        icon="⌘"
        title="Create your first scenario"
        copy="Save time by automating repetitive work."
        action="Create scenario"
      />
    </section>
  );
}

function TemplateCatalogue() {
  const [notice, setNotice] = useState('');
  const cards = [
    ['Generate content from spreadsheet rows', 'Spreadsheet · AI'],
    ['Respond to chat messages with AI', 'Messaging · AI'],
    ['Send webhook data to a spreadsheet', 'Webhook · Spreadsheet'],
    ['Create calendar events from database items', 'Database · Calendar'],
  ];
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Public templates</h1>
        <input aria-label="Search templates" placeholder="Search by apps or name" />
        <button type="button" disabled>
          ＋ New template
        </button>
      </header>
      <div className={styles.templateGrid}>
        {cards.map(([name, apps]) => (
          <button
            type="button"
            key={name}
            onClick={() => setNotice(`${name} opened only inside this fictional catalogue.`)}
          >
            <span className={styles.appDots}>● ●</span>
            <b>{name}</b>
            <small>{apps}</small>
          </button>
        ))}
      </div>
      {notice && <Boundary>{notice}</Boundary>}
    </section>
  );
}

function TemplateCanvas() {
  return (
    <section className={`${styles.page} ${styles.canvasPage}`}>
      <header className={styles.canvasHeader}>
        <h1>Generate content from spreadsheet rows</h1>
        <p>A predefined template with a read-only workflow preview.</p>
        <button type="button" disabled>
          Start guided setup
        </button>
        <button type="button" disabled>
          Create new scenario from template
        </button>
      </header>
      <div className={styles.canvas} aria-label="Fictional scenario canvas">
        <article>
          <span>1</span>
          <div className={styles.module}>S</div>
          <b>Watch new rows</b>
          <small>Get inputs</small>
        </article>
        <i>•••</i>
        <article>
          <span>2</span>
          <div className={styles.module}>AI</div>
          <b>Generate completion</b>
          <small>Transform data</small>
        </article>
        <i>•••</i>
        <article>
          <span>3</span>
          <div className={styles.module}>S</div>
          <b>Update a row</b>
          <small>Paste completion</small>
        </article>
      </div>
      <Boundary>This is a fictional reconstruction. No template was instantiated.</Boundary>
    </section>
  );
}

function AiAgentsLanding() {
  return (
    <section className={styles.page}>
      <div className={styles.featureHero}>
        <div className={styles.agentArt}>
          ✦<span>AI</span>
        </div>
        <div>
          <small>AI Agents · New</small>
          <h1>Build workflows that think and adapt</h1>
          <p>Turn complex inputs into decisions and actions on one canvas.</p>
          <button type="button" disabled>
            ＋ Create agentic scenario
          </button>
          <a href="#learn" onClick={(event) => event.preventDefault()}>
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

function ConnectionsList() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Connections</h1>
        <input aria-label="Search connections" placeholder="Search connections" />
        <button type="button" disabled>
          ＋ Connection
        </button>
      </header>
      <div className={styles.listCard}>
        <span className={styles.module}>AI</span>
        <div>
          <b>Built-in AI provider</b>
          <small>Fictional account identity omitted</small>
        </div>
        <span>0 shares</span>
        <span>0 uses</span>
        <button type="button" disabled>
          Verify
        </button>
        <button type="button" disabled>
          •••
        </button>
      </div>
    </section>
  );
}

function WebhooksEmpty() {
  return (
    <section className={styles.page}>
      <h1>Webhooks</h1>
      <EmptyState
        icon="⌁"
        title="Send data to trigger scenarios instantly"
        copy="Webhooks receive HTTP data and can trigger scenario execution."
        action="Open Scenario Builder"
      />
    </section>
  );
}

function McpToolboxesEmpty() {
  return (
    <section className={styles.page}>
      <h1>MCP Toolboxes</h1>
      <EmptyState
        icon="〽"
        title="No toolboxes yet"
        copy="Toolboxes let approved AI clients run selected Make scenarios as tools."
        action="＋ Create toolbox"
      />
    </section>
  );
}

function TeamsList() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Teams</h1>
        <button type="button" disabled>
          ＋ Add team
        </button>
      </header>
      <div className={styles.listCard}>
        <span className={styles.teamIcon}>◎</span>
        <div>
          <b>Automation Team</b>
          <small>0 fictional credits used</small>
        </div>
        <button type="button" disabled>
          •••
        </button>
      </div>
    </section>
  );
}

function UsersTable() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Users</h1>
        <button type="button" disabled>
          ＋ Invite user
        </button>
      </header>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Last login</th>
            <th>Role</th>
            <th>Teams</th>
            <th>Private space</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Alex Rivera<small>alex@example.test</small>
            </td>
            <td>Fictional date</td>
            <td>Owner</td>
            <td>Automation Team</td>
            <td>0 credits</td>
          </tr>
        </tbody>
      </table>
      <Boundary>Names, email addresses, IDs, and timestamps are fictional.</Boundary>
    </section>
  );
}

const roles = [
  ['Owner', 'Full organization access including ownership controls.'],
  ['Admin', 'Organization settings, users, and billing access.'],
  ['Member', 'Scenario execution plus personal connections and data.'],
  ['Accountant', 'Financial reports and billing information.'],
  ['App Developer', 'Developer tools for custom integrations.'],
  ['Guest', 'Read-only organization resources.'],
];

function RolesCatalogue() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>User roles</h1>
        <input aria-label="Search roles" placeholder="Search user roles" />
        <button type="button" disabled>
          ＋ Custom role
        </button>
      </header>
      <p>Organization and team roles define distinct access scopes.</p>
      <div className={styles.roleList}>
        {roles.map(([name, copy]) => (
          <article key={name}>
            <div>
              <b>{name}</b>
              <small>Default</small>
              <p>{copy}</p>
            </div>
            <button type="button">View</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function RolePermissions() {
  const groups = [
    ['Billing', ['Manage payments', 'Manage payment methods', 'View payments']],
    ['Members', ['Manage custom roles', 'Manage users', 'View all users']],
    ['Organization', ['View analytics', 'View credit details', 'View organization details']],
    ['Teams', ['Manage teams', 'View own private space', 'Manage team credit limits']],
  ];
  return (
    <section className={styles.page}>
      <h1>Member</h1>
      <p>10/41 permissions enabled in the observed default role.</p>
      <div className={styles.permissionGrid}>
        {groups.map(([group, permissions]) => (
          <article key={group as string}>
            <h2>{group}</h2>
            {(permissions as string[]).map((permission, index) => (
              <label key={permission}>
                <span>
                  <b>{permission}</b>
                  <small>Permission dependency text remains visible.</small>
                </span>
                <input
                  type="checkbox"
                  checked={index === permissions.length - 1}
                  readOnly
                  disabled
                />
              </label>
            ))}
          </article>
        ))}
      </div>
      <Boundary>Permission switches are read-only in this reconstruction.</Boundary>
    </section>
  );
}

function CreditUsage() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Credit Usage</h1>
        <input aria-label="Search usage events" placeholder="Search event" />
        <button type="button">Last 30 days</button>
        <button type="button">All events</button>
      </header>
      <div className={styles.metrics}>
        {['Scenarios', 'Assistant', 'Agents'].map((item) => (
          <article key={item}>
            <span>{item}</span>
            <b>0</b>
            <small>fictional credits</small>
          </article>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Team</th>
            <th>Credits</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4}>No usage events in this fictional fixture</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

function VariablesTable() {
  return (
    <section className={styles.page}>
      <h1>Org Variables</h1>
      <div className={styles.tabs}>
        <button type="button" aria-pressed="true">
          Org Variables
        </button>
        <button type="button">Team Variables</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Data type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['System', 'Data left', 'number', '500000000'],
            ['System', 'Organization name', 'text', 'Fictional Organization'],
            ['System', 'Operations left', 'number', '1000'],
            ['System', 'Zone domain', 'text', 'region.make.example'],
          ].map((row) => (
            <tr key={row[1]}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Boundary>Organization identifiers and live allowance values are excluded.</Boundary>
    </section>
  );
}

function ScenarioPropertiesGate() {
  return (
    <section className={styles.page}>
      <h1>Custom scenario properties</h1>
      <div className={styles.gate}>
        <h2>Scenario filtering</h2>
        <p>Custom properties can organize and filter a long scenario inventory.</p>
        <h2>Enhanced scenario information</h2>
        <p>Add business-specific context to the scenario list.</p>
        <button type="button" disabled>
          Talk to sales
        </button>
      </div>
      <Boundary>Enterprise feature wall observed. Entitlement was not changed.</Boundary>
    </section>
  );
}

function AuditLogsGate() {
  return (
    <section className={styles.page}>
      <h1>Audit logs</h1>
      <table>
        <thead>
          <tr>
            <th>Date and time</th>
            <th>Performed by</th>
            <th>Team</th>
            <th>Event</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {[
            ['Fictional date', 'Sample user', 'Core Team', 'Organization role updated'],
            ['Fictional date', 'Sample user', 'Ops Team', 'Private space deleted'],
            ['Fictional date', 'Sample user', 'Data Team', 'Team member added'],
          ].map((row) => (
            <tr key={row.join()}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
              <td>
                <button type="button" disabled>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.gate}>
        <h2>Unlock audit logs with Enterprise plan</h2>
        <p>Review organization events as they happen.</p>
        <button type="button" disabled>
          Contact sales
        </button>
      </div>
    </section>
  );
}

function EventSubscriptionsGate() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Event subscriptions</h1>
        <button type="button" disabled>
          ＋ Create event subscription
        </button>
      </header>
      <EmptyState
        icon="◎"
        title="Deliver events wherever you need them"
        copy="A higher plan is required to send change notifications automatically."
        action="Upgrade plan"
      />
    </section>
  );
}

function NotificationOptions() {
  const options = [
    ['Warning in scenario run', 'Warnings that need attention.'],
    ['Errors in scenario run', 'Errors that stop scenario execution.'],
    ['Scenario deactivation', 'Critical issues that deactivate a scenario.'],
    ['Credit limit reached', 'Team limits that pause scenarios.'],
    ['Connection and key activity', 'Use of a connection or key by someone else.'],
  ];
  return (
    <section className={styles.page}>
      <h1>Notification options</h1>
      <div className={styles.optionList}>
        {options.map(([name, copy]) => (
          <label key={name}>
            <span>
              <b>{name}</b>
              <small>{copy}</small>
            </span>
            <input type="checkbox" checked readOnly disabled />
          </label>
        ))}
      </div>
      <Boundary>Observed defaults are represented without changing provider settings.</Boundary>
    </section>
  );
}

function CustomAppsOnboarding() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Custom Apps</h1>
        <input aria-label="Search custom apps" placeholder="Search apps" />
        <button type="button" disabled>
          ＋ Create app
        </button>
      </header>
      <div className={styles.onboarding}>
        <h2>Create your first custom app</h2>
        <p>
          A custom app translates between Make and a third-party API and centralizes authentication,
          pagination, and error handling.
        </p>
        <button type="button" disabled>
          ＋ Create custom app
        </button>
        <div className={styles.cardGrid}>
          <article>
            <b>Use the HTTP app</b>
            <span>Best for a small number of direct API calls.</span>
          </article>
          <article>
            <b>Choose a custom app</b>
            <span>Best for reusable integrations across scenarios.</span>
          </article>
        </div>
      </div>
    </section>
  );
}

function RouterFilterBuilder() {
  const [route, setRoute] = useState('Priority route');
  return (
    <section className={`${styles.page} ${styles.builder}`}>
      <header>
        <h1>Scenario Builder</h1>
        <button type="button" disabled>
          Run once
        </button>
        <button type="button" disabled>
          Save
        </button>
      </header>
      <div className={styles.routeCanvas}>
        <div className={styles.module}>CRM</div>
        <i>•••</i>
        <div className={`${styles.module} ${styles.router}`}>◇</div>
        <button type="button" onClick={() => setRoute('Priority route')}>
          Priority
        </button>
        <button type="button" onClick={() => setRoute('Fallback route')}>
          Fallback
        </button>
        <div className={styles.module}>Chat</div>
        <div className={styles.module}>Mail</div>
      </div>
      <aside className={styles.panel}>
        <h2>{route}</h2>
        <label>
          Label
          <input value={route} readOnly />
        </label>
        <label>
          Condition
          <select aria-label="Filter operator" defaultValue="equals">
            <option value="equals">Equals</option>
            <option value="exists">Exists</option>
          </select>
        </label>
        <button type="button" disabled>
          Save filter
        </button>
      </aside>
      <Boundary>Router ordering and filter mechanics are source-reviewed, not exercised.</Boundary>
    </section>
  );
}

function MappingSchedulePanel() {
  const [panel, setPanel] = useState<'mapping' | 'schedule'>('mapping');
  return (
    <section className={`${styles.page} ${styles.builder}`}>
      <header>
        <h1>Scenario Builder</h1>
        <button type="button" onClick={() => setPanel('schedule')}>
          Every 15 minutes
        </button>
        <button type="button" disabled>
          Run once
        </button>
      </header>
      <div className={styles.routeCanvas}>
        <div className={styles.module}>Trigger</div>
        <i>•••</i>
        <div className={styles.module}>Action</div>
      </div>
      <aside className={styles.panel}>
        {panel === 'mapping' ? (
          <>
            <h2>Action module</h2>
            <label>
              Destination field
              <input placeholder="Map a value" />
            </label>
            <div className={styles.tokens}>
              <button type="button">1. Name</button>
              <button type="button">1. Email</button>
              <button type="button">Functions</button>
            </div>
            <button type="button" onClick={() => setPanel('schedule')}>
              Schedule settings
            </button>
          </>
        ) : (
          <>
            <h2>Schedule settings</h2>
            <label>
              Run scenario
              <select defaultValue="interval">
                <option value="interval">At regular intervals</option>
                <option value="daily">Daily</option>
                <option value="demand">On demand</option>
              </select>
            </label>
            <label>
              Interval
              <input value="15 minutes" readOnly />
            </label>
            <button type="button" onClick={() => setPanel('mapping')}>
              Back to mapping
            </button>
            <button type="button" disabled>
              Save schedule
            </button>
          </>
        )}
      </aside>
      <Boundary>Mapping and scheduling are local-only documentation fixtures.</Boundary>
    </section>
  );
}

function RunHistoryInspector() {
  const [selected, setSelected] = useState('Run 1042');
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>History</h1>
        <button type="button">Columns</button>
        <button type="button" disabled>
          Export CSV
        </button>
      </header>
      <div className={styles.split}>
        <table>
          <thead>
            <tr>
              <th>Run</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Credits</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {[
              ['Run 1042', 'Success', '8 s', '3'],
              ['Run 1041', 'Warning', '11 s', '2'],
              ['Run 1040', 'Error', '4 s', '1'],
            ].map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
                <td>
                  <button type="button" onClick={() => setSelected(row[0])}>
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <aside className={styles.inspector}>
          <h2>{selected}</h2>
          <p>General run information</p>
          <div className={styles.logLine}>1 · Trigger · 1 bundle</div>
          <div className={styles.logLine}>2 · Transform · 1 bundle</div>
          <div className={styles.logLine}>3 · Destination · 1 bundle</div>
          <button type="button" disabled>
            Replay run
          </button>
        </aside>
      </div>
      <Boundary>
        All run rows and bundle values are fictional. Provider history was not available.
      </Boundary>
    </section>
  );
}

function IncompleteExecutionsErrors() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Incomplete executions</h1>
        <button type="button" disabled>
          Retry selected
        </button>
        <button type="button" disabled>
          Delete selected
        </button>
      </header>
      <table>
        <thead>
          <tr>
            <th />
            <th>Status</th>
            <th>Scenario</th>
            <th>Error</th>
            <th>Scheduled</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {[
            ['Unresolved', 'Lead enrichment', 'ConnectionError', '—'],
            ['Scheduled', 'Daily digest', 'RateLimitError', 'In 5 minutes'],
            ['Resolved', 'Order routing', 'DataError', 'Completed'],
          ].map((row) => (
            <tr key={row[1]}>
              <td>
                <input type="checkbox" disabled />
              </td>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
              <td>
                <button type="button" disabled>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.callout}>
        <b>Safety boundary</b>
        <p>
          Retry, resolve, delete, and Run once can change provider or connected-app state. They
          remain disabled.
        </p>
      </div>
    </section>
  );
}

function GlobalSearchPalette() {
  return (
    <section className={styles.page}>
      <h1>Global command search</h1>
      <div className={styles.modalCard} role="dialog" aria-label="Global search">
        <input aria-label="Search Make" placeholder="Search" autoFocus />
        <small>Quick actions</small>
        <button type="button" disabled>
          <b>＋ Create a scenario</b>
          <span>Build and run a custom workflow.</span>
        </button>
        <button type="button" disabled>
          <b>✦ Create an AI agent</b>
          <span>Let AI decide and act for you.</span>
        </button>
      </div>
      <Boundary>Quick actions are visible but disabled in this fictional fixture.</Boundary>
    </section>
  );
}

function HelpLauncher() {
  return (
    <section className={styles.page}>
      <h1>Help launcher</h1>
      <div className={styles.modalCard} role="dialog" aria-label="Help launcher">
        <input aria-label="Search for help" placeholder="Search for help" />
        <small>Pinned resources</small>
        {[
          ['Help center', 'Product guidance and troubleshooting'],
          ['Contact support', 'Open the support entry point'],
          ['Tutorials', 'Quick videos to get started'],
          ['Make Community', 'Community questions and examples'],
          ['Share your ideas', 'Product feedback entry point'],
          ["What's new", 'Recent product updates'],
        ].map(([name, copy]) => (
          <button type="button" key={name} disabled>
            <b>{name}</b>
            <span>{copy}</span>
          </button>
        ))}
      </div>
      <Boundary>External help, support, feedback and community links were not opened.</Boundary>
    </section>
  );
}

function NotificationsEmpty() {
  return (
    <section className={styles.page}>
      <h1>Notifications</h1>
      <div className={styles.tabs}>
        <button type="button" aria-pressed="true">
          Zone US2
        </button>
      </div>
      <EmptyState
        icon="♢"
        title="No notifications"
        copy="There are no notifications in this fictional zone."
        action="Refresh"
      />
    </section>
  );
}

function AccountMenu() {
  return (
    <section className={styles.page}>
      <h1>Account menu</h1>
      <div className={styles.menuCard}>
        <b>Alex Rivera</b>
        <button type="button">Profile</button>
        <button type="button">Affiliate program</button>
        <small>Theme</small>
        <div className={styles.segmented}>
          <button type="button">System</button>
          <button type="button" aria-pressed="true">
            Light
          </button>
          <button type="button">Dark</button>
        </div>
        <button type="button" disabled>
          Sign out
        </button>
      </div>
      <Boundary>Identity is fictional. Theme controls affect only this preview.</Boundary>
    </section>
  );
}

function WorkspacePicker() {
  return (
    <section className={styles.page}>
      <h1>Workspace picker</h1>
      <div className={styles.menuCard}>
        <small>Organization</small>
        <b>Fictional Organization</b>
        <button type="button">Private space · New</button>
        <button type="button" aria-pressed="true">
          Automation Team · Selected
        </button>
      </div>
      <Boundary>Workspace selection updates only fictional local state.</Boundary>
    </section>
  );
}

function PrivateSpaceDashboard() {
  return (
    <section className={styles.page}>
      <div className={styles.banner}>Help us make private spaces better · Feedback</div>
      <div className={styles.hero}>
        <small>Private space</small>
        <h1>What are we automating?</h1>
        <p>Personal scenarios and credentials stay separated from shared team work.</p>
        <textarea
          aria-label="Fictional private automation idea"
          placeholder="Describe an automation"
        />
        <button type="button" disabled>
          Send
        </button>
      </div>
      <Boundary>No feedback, prompt or private-space change was submitted.</Boundary>
    </section>
  );
}

function ProfileOrganizations() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Organizations</h1>
        <button type="button" disabled>
          ＋ Create organization
        </button>
      </header>
      <div className={styles.listCard}>
        <span className={styles.teamIcon}>⌂</span>
        <div>
          <b>Fictional Organization</b>
          <small>Current organization</small>
        </div>
        <button type="button" disabled>
          •••
        </button>
      </div>
      <Boundary>Organization creation and deletion remain disabled.</Boundary>
    </section>
  );
}

function ProfileSettingsDialog() {
  return (
    <section className={styles.page}>
      <h1>Profile settings dialog</h1>
      <div className={styles.formCard} role="dialog" aria-label="Profile settings">
        <label>
          Name
          <input value="Alex Rivera" readOnly />
        </label>
        <label>
          Locale
          <select defaultValue="en-US" disabled>
            <option value="en-US">English (United States)</option>
          </select>
        </label>
        <label>
          Time zone
          <select defaultValue="utc" disabled>
            <option value="utc">UTC</option>
          </select>
        </label>
        <label>
          Country
          <select defaultValue="fictional" disabled>
            <option value="fictional">Fictional region</option>
          </select>
        </label>
        <div className={styles.actions}>
          <button type="button">Close</button>
          <button type="button" disabled>
            Save
          </button>
        </div>
      </div>
      <Boundary>Live name, locale, time zone and country are excluded.</Boundary>
    </section>
  );
}

const notificationPreferences = [
  'Errors in scenario run',
  'Warning in scenario run',
  'Scenario deactivation',
  'Credit limit reached',
  'Connection and key activity',
];

function EmailPreferences() {
  return (
    <section className={styles.page}>
      <h1>Email preferences</h1>
      {['Automation Team', 'Private space'].map((workspace) => (
        <div className={styles.optionList} key={workspace}>
          <h2>{workspace}</h2>
          {notificationPreferences.map((name) => (
            <label key={name}>
              <span>
                <b>{name}</b>
                <small>Workspace notification preference</small>
              </span>
              <input type="checkbox" checked readOnly disabled />
            </label>
          ))}
        </div>
      ))}
      <Boundary>No email preference was changed.</Boundary>
    </section>
  );
}

function TimezoneOptions() {
  return (
    <section className={styles.page}>
      <h1>Time zone options</h1>
      <div className={styles.cardGrid}>
        <article>
          <h2>Web</h2>
          <p>Controls dates and times displayed in the website.</p>
          <b>UTC</b>
          <button type="button" disabled>
            Edit
          </button>
        </article>
        <article>
          <h2>Scenarios</h2>
          <p>Controls parsing and formatting during scenario runs.</p>
          <b>UTC</b>
          <button type="button" disabled>
            Edit
          </button>
        </article>
      </div>
      <Boundary>Live user and organization time zones are excluded.</Boundary>
    </section>
  );
}

function ApiAccessBoundary() {
  return (
    <section className={styles.page}>
      <h1>API access</h1>
      <div className={styles.gate}>
        <h2>Sensitive credential surface</h2>
        <p>The authenticated navigation exposes an API access destination.</p>
        <button type="button" disabled>
          Create API token
        </button>
      </div>
      <Boundary>
        The destination was not opened. No token names, values or scopes were read.
      </Boundary>
    </section>
  );
}

function TwoFactorBoundary() {
  return (
    <section className={styles.page}>
      <h1>Two-factor authentication</h1>
      <div className={styles.gate}>
        <h2>Protect account access</h2>
        <p>The profile area provides an account-level two-factor authentication action.</p>
        <button type="button" disabled>
          Enable 2FA
        </button>
      </div>
      <Boundary>Security status and setup were not changed.</Boundary>
    </section>
  );
}

function AffiliateOnboarding() {
  return (
    <section className={styles.page}>
      <h1>Affiliate program</h1>
      <div className={styles.onboarding}>
        <h2>How does it work?</h2>
        <div className={styles.cardGrid}>
          <article>
            <b>Join the program</b>
            <span>Complete the application.</span>
          </article>
          <article>
            <b>Create content</b>
            <span>Share an approved referral link.</span>
          </article>
          <article>
            <b>Earn rewards</b>
            <span>Track eligible referrals.</span>
          </article>
        </div>
        <div className={styles.formCard}>
          <label>
            Affiliate code
            <input placeholder="fictional-code" disabled />
          </label>
          <label>
            Payout email
            <input placeholder="partner@example.test" disabled />
          </label>
          <label>
            Promotion method
            <select disabled>
              <option>Select one</option>
            </select>
          </label>
          <button type="button" disabled>
            Get affiliate link
          </button>
        </div>
      </div>
      <Boundary>No application fields, payout details or terms were submitted.</Boundary>
    </section>
  );
}

function SubscriptionOverview() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Subscription</h1>
        <button type="button" disabled>
          Change plan
        </button>
      </header>
      <div className={styles.metrics}>
        <article>
          <span>Current plan</span>
          <b>Free</b>
          <small>Fictional plan fixture</small>
        </article>
        <article>
          <span>Monthly credits</span>
          <b>1,000</b>
          <small>Fictional allowance</small>
        </article>
        <article>
          <span>Billing</span>
          <b>Monthly</b>
          <small>Details omitted</small>
        </article>
      </div>
      <h2>Compare plans</h2>
      <div className={styles.cardGrid}>
        {['Free', 'Make Plan', 'Enterprise'].map((plan) => (
          <article key={plan}>
            <b>{plan}</b>
            <span>Representative feature comparison</span>
            <button type="button" disabled>
              {plan === 'Free' ? 'Current plan' : 'Select plan'}
            </button>
          </article>
        ))}
      </div>
      <Boundary>Live billing identity, dates, prices and payment details are excluded.</Boundary>
    </section>
  );
}

function PaymentsEmpty() {
  return (
    <section className={styles.page}>
      <h1>Payments</h1>
      <EmptyState
        icon="¤"
        title="No payment items"
        copy="Invoices and payment history would appear here for an eligible paid plan."
        action="Compare plans"
      />
      <Boundary>No billing or purchase action was exercised.</Boundary>
    </section>
  );
}

function OrganizationTeamActionMenus() {
  return (
    <section className={styles.page}>
      <h1>Organization and team action menus</h1>
      <div className={styles.cardGrid}>
        <article>
          <b>Organization row</b>
          <button type="button" disabled>
            Delete organization
          </button>
        </article>
        <article>
          <b>Team row</b>
          <button type="button" disabled>
            Edit team
          </button>
          <button type="button" disabled>
            Delete team
          </button>
        </article>
      </div>
      <Boundary>Menus were opened read-only. Edit and delete actions were not selected.</Boundary>
    </section>
  );
}

function ProfileSecurityActions() {
  return (
    <section className={styles.page}>
      <h1>Profile security actions</h1>
      <div className={styles.menuCard}>
        {[
          'Enable Two Factor Auth',
          'Change password',
          'Change email',
          'Delete profile',
          'Affiliate settings',
          'Sign out',
        ].map((action) => (
          <button type="button" disabled key={action}>
            {action}
          </button>
        ))}
      </div>
      <Boundary>Account security, identity and deletion actions were not opened.</Boundary>
    </section>
  );
}

function MainContent({ variant }: { variant: MakeVariant }) {
  if (variant === 'application-shell' || variant === 'organization-dashboard') return <Dashboard />;
  if (variant === 'scenarios-empty') return <ScenariosEmpty />;
  if (variant === 'template-catalogue') return <TemplateCatalogue />;
  if (variant === 'template-canvas') return <TemplateCanvas />;
  if (variant === 'ai-agents-landing') return <AiAgentsLanding />;
  if (variant === 'connections-list') return <ConnectionsList />;
  if (variant === 'webhooks-empty') return <WebhooksEmpty />;
  if (variant === 'mcp-toolboxes-empty') return <McpToolboxesEmpty />;
  if (variant === 'teams-list') return <TeamsList />;
  if (variant === 'users-table') return <UsersTable />;
  if (variant === 'roles-catalogue') return <RolesCatalogue />;
  if (variant === 'role-permissions') return <RolePermissions />;
  if (variant === 'credit-usage') return <CreditUsage />;
  if (variant === 'installed-apps-empty')
    return (
      <section className={styles.page}>
        <h1>Installed apps</h1>
        <EmptyState
          icon="▦"
          title="No apps installed"
          copy="Installed organization apps appear here."
          action="Open app catalogue"
        />
      </section>
    );
  if (variant === 'organization-variables') return <VariablesTable />;
  if (variant === 'scenario-properties-gate') return <ScenarioPropertiesGate />;
  if (variant === 'audit-logs-gate') return <AuditLogsGate />;
  if (variant === 'event-subscriptions-gate') return <EventSubscriptionsGate />;
  if (variant === 'notification-options') return <NotificationOptions />;
  if (variant === 'data-stores-empty')
    return (
      <section className={styles.page}>
        <h1>Data stores</h1>
        <EmptyState
          icon="▤"
          title="Built-in data storage"
          copy="Store and read records within or across scenarios."
          action="＋ Add data store"
        />
      </section>
    );
  if (variant === 'data-structures-empty')
    return (
      <section className={styles.page}>
        <h1>Data structures</h1>
        <EmptyState
          icon="◇"
          title="Define data formats"
          copy="Describe JSON, XML, CSV, and other transferred structures."
          action="＋ Add data structure"
        />
      </section>
    );
  if (variant === 'devices-empty')
    return (
      <section className={styles.page}>
        <h1>Devices</h1>
        <EmptyState
          icon="▯"
          title="Access Make from mobile apps"
          copy="Add an iOS or Android device to the account."
          action="＋ Add device"
        />
      </section>
    );
  if (variant === 'custom-apps-onboarding') return <CustomAppsOnboarding />;
  if (variant === 'router-filter-builder') return <RouterFilterBuilder />;
  if (variant === 'mapping-schedule-panel') return <MappingSchedulePanel />;
  if (variant === 'run-history-inspector') return <RunHistoryInspector />;
  if (variant === 'incomplete-executions-errors') return <IncompleteExecutionsErrors />;
  if (variant === 'global-search-palette') return <GlobalSearchPalette />;
  if (variant === 'help-launcher') return <HelpLauncher />;
  if (variant === 'notifications-empty') return <NotificationsEmpty />;
  if (variant === 'account-menu') return <AccountMenu />;
  if (variant === 'workspace-picker') return <WorkspacePicker />;
  if (variant === 'private-space-dashboard') return <PrivateSpaceDashboard />;
  if (variant === 'profile-organizations') return <ProfileOrganizations />;
  if (variant === 'profile-settings-dialog') return <ProfileSettingsDialog />;
  if (variant === 'email-preferences') return <EmailPreferences />;
  if (variant === 'timezone-options') return <TimezoneOptions />;
  if (variant === 'api-access-boundary') return <ApiAccessBoundary />;
  if (variant === 'two-factor-boundary') return <TwoFactorBoundary />;
  if (variant === 'affiliate-onboarding') return <AffiliateOnboarding />;
  if (variant === 'subscription-overview') return <SubscriptionOverview />;
  if (variant === 'payments-empty') return <PaymentsEmpty />;
  if (variant === 'organization-team-action-menus') return <OrganizationTeamActionMenus />;
  return <ProfileSecurityActions />;
}

function activeItem(variant: MakeVariant) {
  if (variant.includes('template')) return 'Templates';
  if (variant.includes('agent')) return 'AI Agents';
  if (variant.includes('connection')) return 'Credentials';
  if (variant.includes('webhook')) return 'Webhooks';
  if (variant.includes('mcp')) return 'MCP Toolboxes';
  if (variant.includes('data-store')) return 'Data stores';
  if (variant.includes('data-structure')) return 'Data structures';
  if (variant.includes('device')) return 'Devices';
  if (variant.includes('custom-app')) return 'Custom Apps';
  if (variant.includes('private-space')) return 'Org';
  if (
    variant.includes('scenario') ||
    variant.includes('router') ||
    variant.includes('mapping') ||
    variant.includes('run-') ||
    variant.includes('incomplete')
  )
    return 'Scenarios';
  return 'Org';
}

function showOrganizationNav(variant: MakeVariant) {
  return [
    'application-shell',
    'organization-dashboard',
    'teams-list',
    'users-table',
    'roles-catalogue',
    'role-permissions',
    'credit-usage',
    'installed-apps-empty',
    'organization-variables',
    'scenario-properties-gate',
    'audit-logs-gate',
    'event-subscriptions-gate',
    'notification-options',
    'subscription-overview',
    'payments-empty',
    'organization-team-action-menus',
  ].includes(variant);
}

export function MakePreview({ variant }: MakePreviewProps) {
  const [notice, setNotice] = useState('');
  const active = activeItem(variant);
  return (
    <div className={styles.app}>
      <aside className={styles.rail} aria-label="Make fixture navigation">
        <b className={styles.logo}>M</b>
        {primaryNavigation.map((item) => (
          <button
            type="button"
            key={item}
            aria-current={active === item ? 'page' : undefined}
            onClick={() => setNotice(`${item} remained a fictional navigation state.`)}
          >
            {item}
          </button>
        ))}
      </aside>
      <header className={styles.topbar}>
        <button type="button" onClick={() => setNotice('Organization switcher stayed local.')}>
          Fictional Organization
          <br />
          <small>Automation Team</small>
        </button>
        <label>
          <span>⌕</span>
          <input aria-label="Global search" placeholder="Search" />
          <kbd>⌘ K</kbd>
        </label>
        <button type="button" onClick={() => setNotice('Help did not leave the fixture.')}>
          Help
        </button>
        <button type="button" aria-label="Fictional account">
          AR
        </button>
      </header>
      {showOrganizationNav(variant) && (
        <aside className={styles.subnav}>
          <b>Organization</b>
          {organizationNavigation.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setNotice(`${item} stayed inside this fictional organization menu.`)}
            >
              {item}
            </button>
          ))}
        </aside>
      )}
      <main className={showOrganizationNav(variant) ? styles.mainWithSubnav : styles.main}>
        <MainContent variant={variant} />
      </main>
      {notice && <Boundary>{notice}</Boundary>}
    </div>
  );
}

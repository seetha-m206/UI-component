import { useState } from 'react';
import styles from './n8n.module.css';

export type N8nVariant =
  | 'application-shell'
  | 'overview-onboarding'
  | 'global-create-menu'
  | 'personal-project-tabs'
  | 'workflows-empty'
  | 'agents-empty'
  | 'credentials-empty'
  | 'executions-empty'
  | 'variables-empty'
  | 'data-tables-empty'
  | 'assistant-onboarding'
  | 'insights-dashboard'
  | 'settings-navigation'
  | 'instance-mcp-settings'
  | 'enterprise-plan-gates'
  | 'security-policies'
  | 'cloud-admin-dashboard'
  | 'template-catalogue'
  | 'workflow-builder-boundary'
  | 'advanced-workflow-boundary'
  | 'ai-usage-controls'
  | 'gateway-credit-upgrade-gate'
  | 'ldap-enterprise-gate'
  | 'log-streaming-enterprise-gate'
  | 'community-nodes-inventory'
  | 'migration-report'
  | 'context-preferences'
  | 'chat-settings'
  | 'assistant-settings'
  | 'opentelemetry-settings'
  | 'trial-usage-banner'
  | 'primary-navigation-rail'
  | 'onboarding-choice-card'
  | 'project-tab-strip'
  | 'resource-empty-card'
  | 'assistant-prompt-composer'
  | 'assistant-suggestion-chip'
  | 'insights-filter-control'
  | 'insights-metric-card'
  | 'insights-chart'
  | 'insights-workflow-table'
  | 'settings-sidebar'
  | 'settings-nav-item'
  | 'setting-toggle-row'
  | 'enterprise-gate-card'
  | 'gateway-upgrade-modal'
  | 'community-node-row'
  | 'migration-tabs'
  | 'migration-issue-card'
  | 'context-empty-table'
  | 'assistant-permission-selector'
  | 'otel-field-row'
  | 'otel-trace-option'
  | 'template-search-filter'
  | 'template-card'
  | 'cloud-instance-card'
  | 'credit-summary-card'
  | 'mcp-enable-card';

export interface N8nPreviewProps {
  variant: N8nVariant;
  disabled?: boolean;
}

const mainNav = ['Assistant', 'Overview', 'Personal'];
const utilityNav = ['Admin Panel', 'Templates', 'Insights', 'Help', 'Settings'];
const projectTabs = [
  'Workflows',
  'Agents',
  'Credentials',
  'Executions',
  'Variables',
  'Data tables',
];

function Boundary({ children }: { children: string }) {
  return (
    <p className={styles.boundary} role="status">
      {children}
    </p>
  );
}

function AppShell({
  children,
  active = 'Overview',
}: {
  children: React.ReactNode;
  active?: string;
}) {
  return (
    <div className={styles.app}>
      <div className={styles.usage}>
        <span>ⓘ</span>
        <b>12 days left</b>
        <i />
        <span>24 / 1,000 executions</span>
        <button disabled>Upgrade now</button>
      </div>
      <aside className={styles.rail}>
        <div className={styles.brand}>
          <span>⌁</span> n8n{' '}
          <button aria-label="Add new item" disabled>
            ＋
          </button>
        </div>
        <nav aria-label="Primary">
          {mainNav.map((item) => (
            <button key={item} className={active === item ? styles.active : ''} disabled>
              {item}
              {item === 'Assistant' && <small>Preview</small>}
            </button>
          ))}
        </nav>
        <nav className={styles.bottom} aria-label="Utilities">
          {utilityNav.map((item) => (
            <button key={item} className={active === item ? styles.active : ''} disabled>
              {item}
            </button>
          ))}
        </nav>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

function EmptyState({
  title,
  copy,
  action,
  icon,
}: {
  title: string;
  copy: string;
  action: string;
  icon: string;
}) {
  return (
    <section className={styles.empty}>
      <span className={styles.emptyIcon}>{icon}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
      <button disabled>{action}</button>
    </section>
  );
}

function ProjectPage({ active, children }: { active: string; children: React.ReactNode }) {
  return (
    <AppShell active="Personal">
      <header className={styles.pageHeader}>
        <div>
          <h1>Personal</h1>
          <p>Workflows, credentials and data tables owned by you</p>
        </div>
        <button disabled>
          Create {active === 'Data tables' ? 'data table' : active.slice(0, -1).toLowerCase()}
        </button>
      </header>
      <div className={styles.tabs}>
        {projectTabs.map((tab) => (
          <button key={tab} className={tab === active ? styles.selected : ''} disabled>
            {tab}
            {tab === 'Agents' && <small>Preview</small>}
          </button>
        ))}
      </div>
      {children}
    </AppShell>
  );
}

const emptyByVariant: Partial<Record<N8nVariant, [string, string, string, string, string]>> = {
  'workflows-empty': [
    'Workflows',
    'Create your first automation',
    'Build multi-step automations connecting your apps and services',
    'Create workflow',
    '⌘',
  ],
  'agents-empty': [
    'Agents',
    'Create your first agent',
    'Agents automate tasks and answer questions using your connected tools and data',
    'Create agent',
    '▣',
  ],
  'credentials-empty': [
    'Credentials',
    'Create your first credential',
    'Credentials let workflows interact with your apps and services',
    'Create credential',
    '⚿',
  ],
  'executions-empty': [
    'Executions',
    'No executions yet',
    'Each run of a workflow is called an execution, and you will see them listed here',
    'Create workflow',
    '◷',
  ],
  'variables-empty': [
    'Variables',
    'Create your first variable',
    'Store values you can reference across all your workflows',
    'Create variable',
    '(x)',
  ],
  'data-tables-empty': [
    'Data tables',
    'Create your first data table',
    'Persist execution results, share data between workflows, and track evaluation metrics',
    'Create data table',
    '◫',
  ],
};

function Overview({ menu = false }: { menu?: boolean }) {
  return (
    <AppShell>
      <div className={styles.overview}>
        <h1>Let&apos;s build your first automation</h1>
        <div className={styles.choiceGrid}>
          {['Run live demo', 'Build an agent', 'Build a workflow'].map((x) => (
            <button key={x} disabled>
              <span>{x === 'Run live demo' ? 'ϟ' : x === 'Build an agent' ? '▣' : '⌘'}</span>
              {x}
            </button>
          ))}
        </div>
      </div>
      {menu && (
        <div className={styles.createMenu}>
          {[
            'New workflow',
            'New agent',
            'New credential',
            'New variable',
            'New data table',
            'New project',
            'New AI chat',
          ].map((x) => (
            <button key={x} disabled>
              {x}
            </button>
          ))}
        </div>
      )}
    </AppShell>
  );
}

function Assistant() {
  return (
    <AppShell active="Assistant">
      <section className={styles.assistant}>
        <div className={styles.chatTop}>◷ Chat history</div>
        <h1>✣ What do you want to automate?</h1>
        <div className={styles.prompt}>
          <textarea
            aria-label="Fictional automation request"
            placeholder="Tell me what to build or ask a question"
          />
          <div>
            <button disabled aria-label="Add context">
              ＋
            </button>
            <button disabled>Send</button>
          </div>
        </div>
        <div className={styles.chips}>
          {['Score my leads', 'Process invoices', 'Schedule social posts', 'Support agent'].map(
            (x) => (
              <button key={x} disabled>
                {x}
              </button>
            )
          )}
        </div>
      </section>
    </AppShell>
  );
}

function Insights() {
  const metrics = [
    ['Prod. executions', '24'],
    ['Failed prod. executions', '2'],
    ['Failure rate', '8%'],
    ['Time saved', '6h'],
    ['Run time (avg.)', '3.2s'],
  ];
  return (
    <AppShell active="Insights">
      <section className={styles.page}>
        <h1>Insights</h1>
        <div className={styles.filters}>
          <button disabled>All projects</button>
          <button disabled>1 Oct – 8 Oct, 2026</button>
        </div>
        <div className={styles.metrics}>
          {metrics.map(([name, value], i) => (
            <article key={name} className={i === 0 ? styles.metricActive : ''}>
              <span>{name}</span>
              <small>Last 7 days</small>
              <b>{value}</b>
            </article>
          ))}
        </div>
        <h2>Breakdown by day</h2>
        <div className={styles.chart}>
          <span>Successful</span>
          <i />
          <i />
          <i />
        </div>
        <h2>Breakdown by workflow</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Prod. executions</th>
              <th>Failed</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Customer triage</td>
              <td>18</td>
              <td>1</td>
              <td>Northstar</td>
            </tr>
          </tbody>
        </table>
      </section>
    </AppShell>
  );
}

const settingsItems = [
  'Personal',
  'Users',
  'AI usage',
  'Gateway credits',
  'Roles',
  'External secrets',
  'Environments',
  'SSO',
  'Security & policies',
  'LDAP',
  'Log streaming',
  'Community nodes',
  'Migration report',
  'Instance-level MCP',
  'Context',
  'Chat',
  'Assistant',
  'OpenTelemetry',
];

function SettingsShell({ active, children }: { active: string; children: React.ReactNode }) {
  return (
    <div className={styles.settings}>
      <aside>
        <h2>← Settings</h2>
        {settingsItems.map((x) => (
          <button key={x} className={x === active ? styles.active : ''} disabled>
            {x}
            {x === 'Roles' && <small>New</small>}
            {(x === 'Context' || x === 'Assistant') && <small>Preview</small>}
          </button>
        ))}
        <span>Version 2.42.5</span>
      </aside>
      <main>{children}</main>
    </div>
  );
}

function McpSettings() {
  return (
    <SettingsShell active="Instance-level MCP">
      <h1>Instance level MCP</h1>
      <p>
        Let AI assistants and IDEs connect to this instance over the Model Context Protocol, then
        control which tools and workflows they can use.
      </p>
      <section className={styles.gate}>
        <div className={styles.logoRow}>◩ ⌁ ◇</div>
        <h2>Connect AI assistants to build and run workflows</h2>
        <p>
          Let MCP clients build, run, and iterate on approved workflows in this fictional instance.
        </p>
        <button disabled>Enable MCP access</button>
      </section>
    </SettingsShell>
  );
}

function PlanGates() {
  return (
    <SettingsShell active="Roles">
      <h1>
        Roles <small>New</small>
      </h1>
      <p>
        Define granular access to workflows, credentials, project resources and instance settings.
      </p>
      <div className={styles.tabs}>
        <button className={styles.selected} disabled>
          Instance roles
        </button>
        <button disabled>Project roles</button>
      </div>
      <section className={styles.gate}>
        <div className={styles.logoRow}>⊘ ◈ ⚒</div>
        <h2>Upgrade to Enterprise</h2>
        <p>Unlock custom roles, external secrets, multiple environments and single sign-on.</p>
        <button disabled>View plans</button>
      </section>
    </SettingsShell>
  );
}

function Security() {
  const rows = [
    ['Two-factor authentication', 'Require two-factor authentication for password sign-ins.'],
    ['Data redaction', 'Set the minimum redaction level for execution data.'],
    ['Sharing workflows and credentials', 'Control sharing from personal spaces.'],
    ['Publishing workflows', 'Control publishing from personal spaces.'],
  ];
  return (
    <SettingsShell active="Security & policies">
      <h1>Security & policies</h1>
      <p>Manage security policies for this instance.</p>
      <div className={styles.policyList}>
        {rows.map(([title, copy]) => (
          <article key={title}>
            <div>
              <b>{title}</b>
              <small>Upgrade</small>
              <p>{copy}</p>
            </div>
            <button role="switch" aria-checked="false" disabled />
          </article>
        ))}
      </div>
    </SettingsShell>
  );
}

function ToggleRow({
  title,
  copy,
  checked = false,
  locked = false,
}: {
  title: string;
  copy: string;
  checked?: boolean;
  locked?: boolean;
}) {
  return (
    <article className={styles.toggleRow}>
      <div>
        <b>{title}</b>
        <p>{copy}</p>
      </div>
      <button
        className={checked ? styles.toggleOn : ''}
        role="switch"
        aria-checked={checked}
        aria-label={`${title}${locked ? ' locked' : ''}`}
        disabled
      />
    </article>
  );
}

function AiUsage() {
  return (
    <SettingsShell active="AI usage">
      <h1>AI usage</h1>
      <p>Control what this fictional workspace sends when using the AI Assistant.</p>
      <div className={styles.stack}>
        <ToggleRow
          title="Send field names and types (schema)"
          copy="Helps AI understand data structure without sending values. Required in this observed state."
          checked
          locked
        />
        <ToggleRow
          title="Send actual data values"
          copy="May include sensitive execution values. Turning this off reduces Assistant accuracy."
          checked
        />
      </div>
      <Boundary>Fictional controls only. No execution data is sent from this preview.</Boundary>
    </SettingsShell>
  );
}

function GatewayCredits() {
  return (
    <SettingsShell active="Gateway credits">
      <div className={styles.modalBackdrop}>
        <section className={styles.modalCard}>
          <span className={styles.kicker}>PLAN BOUNDARY</span>
          <h1>Upgrade your plan to top up</h1>
          <p>A paid plan is required to add gateway credits and configure automatic top-ups.</p>
          <div className={styles.providerCloud}>
            {[
              'OpenAI',
              'Anthropic',
              'Gemini',
              'Firecrawl',
              'Browserbase',
              'Brave',
              'PDF tools',
            ].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
          <div className={styles.modalActions}>
            <button disabled>Cancel</button>
            <button disabled>Upgrade</button>
          </div>
        </section>
      </div>
    </SettingsShell>
  );
}

function EnterpriseFeature({
  active,
  title,
  copy,
}: {
  active: string;
  title: string;
  copy: string;
}) {
  return (
    <SettingsShell active={active}>
      <h1>{title}</h1>
      <p>{copy}</p>
      <section className={styles.gate}>
        <span className={styles.kicker}>AVAILABLE ON ENTERPRISE</span>
        <h2>{title} is a paid feature</h2>
        <p>Review plan options to make this capability available.</p>
        <button disabled>See plans</button>
      </section>
    </SettingsShell>
  );
}

function CommunityNodes() {
  const packages = [
    ['@brave/n8n-nodes-brave-search', 'Brave Search', 'v1.1.8'],
    ['@llamaindex/n8n-nodes-llamacloud', 'LlamaParse Platform', 'v6.7.2'],
    ['@mendable/n8n-nodes-firecrawl', 'Firecrawl', 'v2.1.4'],
    ['@typesafe-ai/n8n-nodes-typesafe-ai', 'TypeSafe AI', 'v0.9.0'],
    ['n8n-nodes-browserbase', 'Browserbase', 'v1.4.0'],
    ['n8n-nodes-pdfco', 'PDF tools', 'v1.0.15'],
  ];
  return (
    <SettingsShell active="Community nodes">
      <h1>Community nodes</h1>
      <div className={styles.packageList}>
        {packages.map(([pkg, name, version]) => (
          <article key={pkg}>
            <span className={styles.packageIcon}>⬡</span>
            <div>
              <b>{pkg}</b>
              <small>1 node · {name}</small>
            </div>
            <code>{version}</code>
            <button aria-label={`Package action for ${name}`} disabled>
              •••
            </button>
          </article>
        ))}
      </div>
    </SettingsShell>
  );
}

function MigrationReport() {
  const issues = [
    ['Medium', 'SSRF protection blocks more IP ranges by default'],
    ['Low', 'Compression node limits are lowered'],
    ['Low', 'Task runner timeout default is reduced to 1 minute'],
    ['Low', 'Workflow import from URL is removed'],
  ];
  return (
    <SettingsShell active="Migration report">
      <h1>Migration report</h1>
      <p>Review compatibility before moving this fictional instance to version 3.0.0.</p>
      <div className={styles.tabs}>
        <button disabled>Workflow issues</button>
        <button className={styles.selected} disabled>
          Instance issues　4
        </button>
      </div>
      <div className={styles.issueList}>
        {issues.map(([level, title]) => (
          <article key={title}>
            <span>{level}</span>
            <b>{title}</b>
          </article>
        ))}
      </div>
    </SettingsShell>
  );
}

function ContextPreferences() {
  return (
    <SettingsShell active="Context">
      <span className={styles.kicker}>PREVIEW</span>
      <h1>Preferences</h1>
      <p>Share preferred communication style, nodes and ways of building workflows and agents.</p>
      <button className={styles.secondaryAction} disabled>
        Create preference
      </button>
      <div className={styles.emptyTable}>
        <div>
          Preference <span>Scope</span>
          <span>Source</span>
        </div>
        <h2>No preferences yet</h2>
        <p>Add guidance for how AI communicates and builds in this fictional workspace.</p>
      </div>
    </SettingsShell>
  );
}

function ChatSettings() {
  return (
    <SettingsShell active="Chat">
      <h1>Chat</h1>
      <ToggleRow
        title="Enable Chat"
        copy="When disabled, Chat is hidden across the app and its API endpoints are turned off."
      />
      <Boundary>Chat is currently disabled. Enable it to configure providers.</Boundary>
    </SettingsShell>
  );
}

function AssistantSettings() {
  const permissions = [
    'Workflows',
    'Nodes',
    'Folders',
    'Data tables',
    'Credentials',
    'System',
    'Web',
    'MCP tools',
    'Preferences',
  ];
  return (
    <SettingsShell active="Assistant">
      <span className={styles.kicker}>PREVIEW</span>
      <h1>Assistant</h1>
      <p>Control how the Assistant runs and which data and capabilities it can use.</p>
      <ToggleRow
        title="Enable n8n Assistant"
        copy="Available to everyone on this instance."
        checked
      />
      <h2>Capabilities</h2>
      <div className={styles.twoCol}>
        <ToggleRow title="Browser use" copy="View pages and automate browser tasks." checked />
        <ToggleRow
          title="Connect MCP servers"
          copy="Use approved tools from connected servers."
          checked
        />
      </div>
      <h2>Permissions</h2>
      <div className={styles.permissionGrid}>
        {permissions.map((name) => (
          <span key={name}>
            {name}
            <b>Default</b>
          </span>
        ))}
      </div>
    </SettingsShell>
  );
}

function OpenTelemetry() {
  return (
    <SettingsShell active="OpenTelemetry">
      <h1>OpenTelemetry</h1>
      <p>Export fictional workflow and node spans to an OTLP collector.</p>
      <ToggleRow title="Status" copy="Tracing is off. No traces leave this instance." />
      <h2>Collector connection</h2>
      <div className={styles.formGrid}>
        <label>
          Protocol
          <input value="HTTP (protobuf)" readOnly />
        </label>
        <label>
          OTLP endpoint
          <input value="http://localhost:4318" readOnly />
        </label>
        <label>
          Service name
          <input value="n8n" readOnly />
        </label>
        <label>
          Trace path
          <input value="/v1/traces" readOnly />
        </label>
        <label>
          Startup timeout
          <input value="2000 ms" readOnly />
        </label>
        <label>
          Trace sample rate
          <input value="1.00" readOnly />
        </label>
      </div>
      <div className={styles.traceOptions}>
        <span>✓ Include node spans</span>
        <span>✓ Inject outbound traceparent</span>
        <span>✓ Published workflows only</span>
      </div>
      <button className={styles.secondaryAction} disabled>
        Send test trace
      </button>
    </SettingsShell>
  );
}

function AtomicStage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={styles.atomicStage}>
      <span className={styles.atomicLabel}>INDIVIDUAL COMPONENT</span>
      <h1>{title}</h1>
      <div className={styles.atomicCanvas}>{children}</div>
      <Boundary>Fictional local fixture. Provider writes are disabled.</Boundary>
    </section>
  );
}

function AtomicComponent({ variant }: { variant: N8nVariant }) {
  const atomic = (title: string, content: React.ReactNode) => (
    <AtomicStage title={title}>{content}</AtomicStage>
  );
  switch (variant) {
    case 'trial-usage-banner':
      return atomic(
        'Trial usage banner',
        <div className={styles.atomicUsage}>
          <span>ⓘ</span>
          <b>12 days left</b>
          <i />
          <span>24 / 1,000 executions</span>
          <button disabled>Upgrade now</button>
        </div>
      );
    case 'primary-navigation-rail':
      return atomic(
        'Primary navigation rail',
        <nav className={styles.atomicRail} aria-label="Fictional primary navigation">
          <b>⌁ n8n</b>
          {[
            'Assistant · Preview',
            'Overview',
            'Personal',
            'Admin Panel',
            'Templates',
            'Insights',
            'Help',
            'Settings',
          ].map((x) => (
            <button key={x} disabled>
              {x}
            </button>
          ))}
        </nav>
      );
    case 'onboarding-choice-card':
      return atomic(
        'Onboarding choice card',
        <button className={styles.choiceCard} disabled>
          <span>⌘</span>
          <b>Build a workflow</b>
          <small>Connect apps in a multi-step automation</small>
        </button>
      );
    case 'project-tab-strip':
      return atomic(
        'Project tab strip',
        <div className={styles.atomicTabs}>
          {projectTabs.map((x, i) => (
            <button className={i === 0 ? styles.selected : ''} key={x} disabled>
              {x}
              {x === 'Agents' && <small>Preview</small>}
            </button>
          ))}
        </div>
      );
    case 'resource-empty-card':
      return atomic(
        'Resource empty card',
        <div className={styles.atomicEmpty}>
          <span>⌘</span>
          <h2>Create your first automation</h2>
          <p>Build multi-step workflows connecting your apps and services.</p>
          <button disabled>Create workflow</button>
        </div>
      );
    case 'assistant-prompt-composer':
      return atomic(
        'Assistant prompt composer',
        <div className={styles.atomicPrompt}>
          <textarea aria-label="Fictional prompt" placeholder="Tell me what to build" />
          <div>
            <button disabled>＋ Context</button>
            <button disabled>Send</button>
          </div>
        </div>
      );
    case 'assistant-suggestion-chip':
      return atomic(
        'Assistant suggestion chip',
        <button className={styles.atomicChip} disabled>
          Score new leads automatically
        </button>
      );
    case 'insights-filter-control':
      return atomic(
        'Insights filter control',
        <button className={styles.atomicFilter} disabled>
          All projects　⌄
        </button>
      );
    case 'insights-metric-card':
      return atomic(
        'Insights metric card',
        <article className={styles.atomicMetric}>
          <span>Prod. executions</span>
          <small>Last 7 days</small>
          <b>24</b>
        </article>
      );
    case 'insights-chart':
      return atomic(
        'Insights breakdown chart',
        <div className={styles.atomicChart}>
          <span>Successful</span>
          <i />
          <i />
          <i />
          <i />
        </div>
      );
    case 'insights-workflow-table':
      return atomic(
        'Insights workflow table',
        <table className={styles.atomicTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Prod. executions</th>
              <th>Failed</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Customer triage</td>
              <td>18</td>
              <td>1</td>
              <td>Northstar</td>
            </tr>
          </tbody>
        </table>
      );
    case 'settings-sidebar':
      return atomic(
        'Settings sidebar',
        <nav className={styles.atomicSettings}>
          {settingsItems.map((x) => (
            <button className={x === 'OpenTelemetry' ? styles.active : ''} key={x} disabled>
              {x}
              {x === 'Roles' && <small>New</small>}
            </button>
          ))}
          <span>Version 2.42.5</span>
        </nav>
      );
    case 'settings-nav-item':
      return atomic(
        'Settings navigation item',
        <button className={styles.atomicNavItem} disabled>
          <span>Assistant</span>
          <small>Preview</small>
        </button>
      );
    case 'setting-toggle-row':
      return atomic(
        'Setting toggle row',
        <ToggleRow
          title="Browser use"
          copy="Let the Assistant view pages and automate browser tasks."
          checked
        />
      );
    case 'enterprise-gate-card':
      return atomic(
        'Enterprise gate card',
        <div className={styles.atomicGate}>
          <span>AVAILABLE ON ENTERPRISE</span>
          <h2>Log streaming is a paid feature</h2>
          <p>Review plan options to make this capability available.</p>
          <button disabled>See plans</button>
        </div>
      );
    case 'gateway-upgrade-modal':
      return atomic(
        'Gateway upgrade modal',
        <div className={styles.atomicModal}>
          <span>PLAN BOUNDARY</span>
          <h2>Upgrade your plan to top up</h2>
          <p>A paid plan is required to add gateway credits and configure automatic top-ups.</p>
          <div>
            <button disabled>Cancel</button>
            <button disabled>Upgrade</button>
          </div>
        </div>
      );
    case 'community-node-row':
      return atomic(
        'Community node row',
        <article className={styles.atomicPackage}>
          <span>⬡</span>
          <div>
            <b>@example/n8n-nodes-search</b>
            <small>1 node · Example Search</small>
          </div>
          <code>v1.2.0</code>
          <button aria-label="Package action" disabled>
            •••
          </button>
        </article>
      );
    case 'migration-tabs':
      return atomic(
        'Migration issue tabs',
        <div className={styles.atomicTabs}>
          <button disabled>Workflow issues</button>
          <button className={styles.selected} disabled>
            Instance issues　4
          </button>
        </div>
      );
    case 'migration-issue-card':
      return atomic(
        'Migration issue card',
        <article className={styles.atomicIssue}>
          <span>Medium</span>
          <h2>SSRF protection blocks more IP ranges by default</h2>
          <p>Requests to newly protected address ranges can fail after the version upgrade.</p>
          <a aria-disabled="true">Documentation ↗</a>
        </article>
      );
    case 'context-empty-table':
      return atomic(
        'Context preference empty table',
        <div className={styles.atomicEmptyTable}>
          <header>
            Preference <span>Scope</span>
            <span>Source</span>
          </header>
          <h2>No preferences yet</h2>
          <p>Add guidance for how AI communicates and builds.</p>
          <button disabled>Create preference</button>
        </div>
      );
    case 'assistant-permission-selector':
      return atomic(
        'Assistant permission selector',
        <button className={styles.atomicPermission} disabled>
          <span>Workflows</span>
          <b>Default　⌄</b>
        </button>
      );
    case 'otel-field-row':
      return atomic(
        'OpenTelemetry field row',
        <label className={styles.atomicField}>
          <span>
            OTLP endpoint <small>ENV N8N_OTEL_EXPORTER_OTLP_ENDPOINT</small>
          </span>
          <p>The base URL of your fictional collector.</p>
          <input value="http://localhost:4318" readOnly />
        </label>
      );
    case 'otel-trace-option':
      return atomic(
        'OpenTelemetry trace option',
        <label className={styles.atomicTrace}>
          <input type="checkbox" checked readOnly />
          <span>
            <b>Include node spans</b>
            <small>One span per node, or workflow-level spans only.</small>
          </span>
        </label>
      );
    case 'template-search-filter':
      return atomic(
        'Template search and filter',
        <div className={styles.atomicSearch}>
          <input aria-label="Fictional template search" placeholder="Search templates" />
          <button disabled>IT Ops　⌄</button>
        </div>
      );
    case 'template-card':
      return atomic(
        'Template card',
        <button className={styles.atomicTemplate} disabled>
          <span>⌘　●　●</span>
          <b>Report workflow errors to chat</b>
          <small>n8n community</small>
        </button>
      );
    case 'cloud-instance-card':
      return atomic(
        'Cloud instance card',
        <article className={styles.atomicInstance}>
          <div>
            <h2>Northstar Automation</h2>
            <span>Online</span>
            <p>Running version n8n@2.42.5</p>
            <p>12 days left in your trial</p>
          </div>
          <button disabled>Open instance</button>
        </article>
      );
    case 'credit-summary-card':
      return atomic(
        'Credit summary card',
        <article className={styles.atomicCredit}>
          <span>Assistant credits</span>
          <b>800 credits</b>
          <small>Fictional balance</small>
        </article>
      );
    case 'mcp-enable-card':
      return atomic(
        'MCP enable card',
        <div className={styles.atomicGate}>
          <span>◩　⌁　◇</span>
          <h2>Connect AI assistants to build and run workflows</h2>
          <p>Control which tools and workflows approved clients can use.</p>
          <button disabled>Enable MCP access</button>
        </div>
      );
    default:
      return null;
  }
}

function CloudAdmin() {
  return (
    <div className={styles.cloud}>
      <header>
        <b>n8n.cloud</b>
        <nav>Dashboard　 Manage　 Help center</nav>
        <button disabled>Account</button>
      </header>
      <main>
        <h1>Dashboard</h1>
        <div className={styles.instanceCard}>
          <div>
            <h2>Northstar Automation</h2>
            <span className={styles.online}>Online</span>
            <p>Running version n8n@2.42.5</p>
            <p>12 days left in your free trial</p>
          </div>
          <button disabled>Open instance</button>
        </div>
        <div className={styles.creditGrid}>
          <article>
            <span>Assistant credits</span>
            <b>800 credits</b>
          </article>
          <article>
            <span>Gateway credits</span>
            <b>$2.00</b>
          </article>
          <article>
            <span>Executions this month</span>
            <b>24 / 1,000</b>
          </article>
        </div>
        <Boundary>Identity and live billing data are replaced with fictional values.</Boundary>
      </main>
    </div>
  );
}

function Templates() {
  const cards = [
    'Back up workflows to cloud storage',
    'Report workflow errors to chat',
    'Scrape a page into structured data',
    'Evaluate AI agent tool usage',
    'Track agent token costs',
    'Auto-heal failing workflows',
  ];
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.templates}>
      <header>
        <b>n8n</b>
        <nav>Product　 Use cases　 Docs　 Community　 Pricing</nav>
      </header>
      <main>
        <h1>Top IT Ops automation workflows</h1>
        <div className={styles.templateTools}>
          <input aria-label="Search fictional templates" placeholder="Search templates" />
          <button disabled>IT Ops</button>
        </div>
        <h2>Featured templates</h2>
        <div className={styles.templateGrid}>
          {cards.map((x) => (
            <button
              key={x}
              onClick={() => setNotice(`${x} opened only inside this fictional fixture.`)}
            >
              <span>⌘　●　●</span>
              <b>{x}</b>
              <small>n8n community</small>
            </button>
          ))}
        </div>
        {notice && <Boundary>{notice}</Boundary>}
      </main>
    </div>
  );
}

function Unobserved({ advanced = false }: { advanced?: boolean }) {
  return (
    <AppShell active="Personal">
      <section className={styles.unobserved}>
        <span>NEEDS VERIFICATION</span>
        <h1>
          {advanced
            ? 'Sub-workflows, evaluations and versions'
            : 'Workflow canvas, nodes and testing'}
        </h1>
        <p>
          {advanced
            ? 'A populated safe workflow and execution history are required to observe these states.'
            : 'The empty account does not expose the canvas, credential binding, test or error behavior safely.'}
        </p>
        <button disabled>Provider fixture required</button>
      </section>
    </AppShell>
  );
}

export function N8nPreview({ variant }: N8nPreviewProps) {
  const empty = emptyByVariant[variant];
  if (empty)
    return (
      <ProjectPage active={empty[0]}>
        <EmptyState title={empty[1]} copy={empty[2]} action={empty[3]} icon={empty[4]} />
      </ProjectPage>
    );
  switch (variant) {
    case 'application-shell':
      return (
        <AppShell>
          <section className={styles.page}>
            <h1>Automation overview</h1>
            <p>
              One fictional workspace for workflows, agents, credentials and operational insights.
            </p>
            <div className={styles.cardGrid}>
              <article>
                <b>Workflows</b>
                <span>4 active</span>
              </article>
              <article>
                <b>Executions</b>
                <span>24 this month</span>
              </article>
              <article>
                <b>Failure rate</b>
                <span>8%</span>
              </article>
            </div>
          </section>
        </AppShell>
      );
    case 'overview-onboarding':
      return <Overview />;
    case 'global-create-menu':
      return <Overview menu />;
    case 'personal-project-tabs':
      return (
        <ProjectPage active="Workflows">
          <div className={styles.cardGrid}>
            {projectTabs.map((x) => (
              <article key={x}>
                <b>{x}</b>
                <span>Fictional resource</span>
              </article>
            ))}
          </div>
        </ProjectPage>
      );
    case 'assistant-onboarding':
      return <Assistant />;
    case 'insights-dashboard':
      return <Insights />;
    case 'settings-navigation':
      return (
        <SettingsShell active="Personal">
          <h1>Settings</h1>
          <p>Manage personal preferences, access, security, observability and AI features.</p>
          <div className={styles.cardGrid}>
            <article>
              <b>Access</b>
              <span>Users, roles, SSO</span>
            </article>
            <article>
              <b>Security</b>
              <span>Policies and secrets</span>
            </article>
            <article>
              <b>AI</b>
              <span>Usage, MCP and context</span>
            </article>
          </div>
        </SettingsShell>
      );
    case 'instance-mcp-settings':
      return <McpSettings />;
    case 'enterprise-plan-gates':
      return <PlanGates />;
    case 'security-policies':
      return <Security />;
    case 'cloud-admin-dashboard':
      return <CloudAdmin />;
    case 'template-catalogue':
      return <Templates />;
    case 'workflow-builder-boundary':
      return <Unobserved />;
    case 'advanced-workflow-boundary':
      return <Unobserved advanced />;
    case 'ai-usage-controls':
      return <AiUsage />;
    case 'gateway-credit-upgrade-gate':
      return <GatewayCredits />;
    case 'ldap-enterprise-gate':
      return (
        <EnterpriseFeature
          active="LDAP"
          title="LDAP"
          copy="Authenticate with a centralized account through LDAP-compatible services."
        />
      );
    case 'log-streaming-enterprise-gate':
      return (
        <EnterpriseFeature
          active="Log streaming"
          title="Log streaming"
          copy="Send logs to external endpoints, a file or the console."
        />
      );
    case 'community-nodes-inventory':
      return <CommunityNodes />;
    case 'migration-report':
      return <MigrationReport />;
    case 'context-preferences':
      return <ContextPreferences />;
    case 'chat-settings':
      return <ChatSettings />;
    case 'assistant-settings':
      return <AssistantSettings />;
    case 'opentelemetry-settings':
      return <OpenTelemetry />;
    case 'trial-usage-banner':
    case 'primary-navigation-rail':
    case 'onboarding-choice-card':
    case 'project-tab-strip':
    case 'resource-empty-card':
    case 'assistant-prompt-composer':
    case 'assistant-suggestion-chip':
    case 'insights-filter-control':
    case 'insights-metric-card':
    case 'insights-chart':
    case 'insights-workflow-table':
    case 'settings-sidebar':
    case 'settings-nav-item':
    case 'setting-toggle-row':
    case 'enterprise-gate-card':
    case 'gateway-upgrade-modal':
    case 'community-node-row':
    case 'migration-tabs':
    case 'migration-issue-card':
    case 'context-empty-table':
    case 'assistant-permission-selector':
    case 'otel-field-row':
    case 'otel-trace-option':
    case 'template-search-filter':
    case 'template-card':
    case 'cloud-instance-card':
    case 'credit-summary-card':
    case 'mcp-enable-card':
      return <AtomicComponent variant={variant} />;
  }
}

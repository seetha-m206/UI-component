import { useState, type ReactNode } from 'react';
import styles from './pipedream.module.css';

export type PipedreamVariant =
  | 'application-shell'
  | 'projects-catalogue'
  | 'project-resources-empty'
  | 'project-create-menu'
  | 'file-store-plan-gate'
  | 'project-variables'
  | 'sources-empty-filters'
  | 'connected-accounts-onboarding'
  | 'oauth-clients'
  | 'data-stores-empty'
  | 'data-store-create-dialog'
  | 'event-history-plan-gate'
  | 'settings-navigation'
  | 'authentication-plan-gates'
  | 'environment-variables'
  | 'verified-domains'
  | 'workspace-networking'
  | 'billing-usage'
  | 'connect-shell'
  | 'connect-overview'
  | 'connect-project-configuration'
  | 'connect-users-onboarding'
  | 'connect-webhooks'
  | 'connect-api-clients'
  | 'connect-networking'
  | 'project-access-plan-gate'
  | 'project-settings-modal'
  | 'global-search-command-menu'
  | 'string-ai-builder'
  | 'user-account-security'
  | 'application-preferences'
  | 'experimental-features'
  | 'connect-global-users'
  | 'connect-global-accounts'
  | 'connect-global-triggers'
  | 'connect-logs-observability'
  | 'connect-configuration-picker'
  | 'connect-command-center'
  | 'connect-workspace-switcher'
  | 'connect-environment-switcher'
  | 'connect-workspace-general'
  | 'connect-team'
  | 'connect-workspace-api-clients'
  | 'connect-app-configs'
  | 'connect-workspace-networking'
  | 'connect-sign-in'
  | 'connect-billing'
  | 'connect-account-security';

export interface PipedreamPreviewProps {
  variant: PipedreamVariant;
}

const mainNavigation = [
  'Build with AI',
  'Projects',
  'Sources',
  'Accounts',
  'Data Stores',
  'Event History',
  'Settings',
];
const connectNavigation = ['Home', 'Users', 'Accounts', 'Triggers', 'Logs', 'Configuration'];

function Boundary({ children }: { children: ReactNode }) {
  return (
    <div className={styles.boundary} role="status">
      {children}
    </div>
  );
}

function MainShell({
  children,
  selected = 'Projects',
}: {
  children: ReactNode;
  selected?: string;
}) {
  return (
    <div className={styles.mainFrame}>
      <aside className={styles.mainSidebar}>
        <div className={styles.identity}>
          <span>C</span>
          <div>
            <b>Canvas Lab</b>
            <small>researcher@example.test</small>
          </div>
        </div>
        <button className={styles.search} type="button">
          ⌕ Search… <kbd>/</kbd>
        </button>
        <small className={styles.eyebrow}>Workspace</small>
        <nav aria-label="Fictional Pipedream navigation">
          {mainNavigation.map((item) => (
            <button className={selected === item ? styles.selected : ''} type="button" key={item}>
              {item === 'Build with AI' ? '✦ ' : '◇ '}
              {item}
              {item === 'Build with AI' && <em>alpha</em>}
            </button>
          ))}
        </nav>
        <div className={styles.planCard}>
          <b>Free</b>
          <span>Credits used</span>
          <strong>0 / 100</strong>
          <hr />
          <span>Active resources</span>
          <span>Data Stores　0</span>
          <button type="button">Upgrade</button>
        </div>
      </aside>
      <main className={styles.mainContent}>
        <div className={styles.retirement}>
          Workflows and String are shutting down on March 31, 2027{' '}
          <button type="button">Learn more →</button>
        </div>
        {children}
      </main>
    </div>
  );
}

function ConnectShell({ children, selected = 'Home' }: { children: ReactNode; selected?: string }) {
  return (
    <div className={styles.connectFrame}>
      <header>
        <b>
          <i>C</i> Canvas Lab <small>Free</small>
        </b>
        <span>/</span>
        <b>Default</b>
        <span>/</span>
        <b>● Production</b>
        <code>proj_demo</code>
        <em>Alpha</em>
        <button type="button">⌕ Search　⌘ K</button>
      </header>
      <aside>
        <small>All projects</small>
        <nav aria-label="Fictional Connect navigation">
          {connectNavigation.map((item) => (
            <button
              className={selected === item ? styles.connectSelected : ''}
              type="button"
              key={item}
            >
              {item}
            </button>
          ))}
        </nav>
        <hr />
        <small>Workspace</small>
        {['General', 'Team', 'API', 'App Configs', 'Networking', 'Sign-in', 'Billing'].map(
          (item) => (
            <button type="button" key={item}>
              {item}
            </button>
          )
        )}
        <a href="#open-main">↗ Open pipedream.com</a>
      </aside>
      <main>{children}</main>
    </div>
  );
}

function Header({ title, action }: { title: string; action?: string }) {
  return (
    <header className={styles.pageHeader}>
      <h1>{title}</h1>
      {action && <button type="button">＋ {action}</button>}
    </header>
  );
}

function ProjectsCatalogue() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.page}>
      <Header title="Projects" action="New project" />
      <div className={styles.tableHead}>
        <b>Name</b>
        <b>Owner</b>
        <b>Access</b>
        <b>Updated</b>
      </div>
      <button
        className={styles.projectRow}
        type="button"
        onClick={() => setNotice('The fictional project opened without provider access.')}
      >
        <b>◇ Default</b>
        <span>Demo owner</span>
        <span>Workspace</span>
        <span>Just now　•••</span>
      </button>
      {notice && <Boundary>{notice}</Boundary>}
    </section>
  );
}

function ProjectWorkspace({ menu = false }: { menu?: boolean }) {
  const [open, setOpen] = useState(menu);
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.projectPage}>
      <ProjectNav selected="Resources" />
      <div className={styles.projectCanvas}>
        <Header title="Default /" />
        <button
          className={styles.primary}
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ＋ New　⌄
        </button>
        {open && (
          <div className={styles.menu} role="menu">
            <button type="button" onClick={() => setNotice('No folder was created.')}>
              Folder <kbd>N then F</kbd>
            </button>
            <button type="button" onClick={() => setNotice('No workflow was created.')}>
              Workflow <kbd>N then W</kbd>
            </button>
          </div>
        )}
        <div className={styles.empty}>
          <b>▰</b>
          <h2>This project is empty.</h2>
          <p>Use the dropdown above to create folders, workflows, etc.</p>
        </div>
        {notice && <Boundary>{notice}</Boundary>}
      </div>
    </section>
  );
}

function ProjectNav({ selected }: { selected: string }) {
  return (
    <nav className={styles.projectNav}>
      {['Resources', 'File Store', 'Variables', 'Access', 'Connect', 'Settings'].map((item) => (
        <button className={item === selected ? styles.lightSelected : ''} type="button" key={item}>
          {item}
        </button>
      ))}
    </nav>
  );
}

function ProjectInfo({ kind }: { kind: 'files' | 'variables' }) {
  const file = kind === 'files';
  return (
    <section className={styles.projectPage}>
      <ProjectNav selected={file ? 'File Store' : 'Variables'} />
      <div className={styles.projectCanvas}>
        <div className={styles.heroCard}>
          <h1>{file ? 'Use the file store' : 'Use project variables'}</h1>
          <p>
            {file
              ? 'Save and retrieve files programmatically from workflows.'
              : 'Keep configuration and secrets safe and scoped to this project.'}
          </p>
          <button type="button" disabled={file}>
            {file ? 'Not available on your plan' : 'New Variable'}
          </button>
        </div>
        <div className={styles.featureGrid}>
          {(file
            ? [
                'Unblock advanced use cases',
                'Reference static templates and data',
                'No limits on file size',
              ]
            : ['Environment Variables', 'Secrets']
          ).map((x) => (
            <article key={x}>
              <h2>{x}</h2>
              <p>Fictional guidance only. No provider data is stored here.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sources() {
  const [filters, setFilters] = useState(false);
  return (
    <section className={styles.page}>
      <Header title="Sources" action="New source" />
      <div className={styles.toolbar}>
        <input aria-label="Search sources" />
        <button type="button" onClick={() => setFilters(!filters)}>
          Filter
        </button>
      </div>
      {filters && (
        <aside className={styles.filter}>
          <b>FILTERS</b>
          <label>
            <input type="checkbox" readOnly /> Active
          </label>
          <button type="button" onClick={() => setFilters(false)}>
            DONE
          </button>
        </aside>
      )}
      <div className={styles.empty}>
        <h2>You have no event sources yet</h2>
        <button type="button">Create one</button>
      </div>
    </section>
  );
}

function Accounts({ oauth = false }: { oauth?: boolean }) {
  const [chooser, setChooser] = useState(false);
  return (
    <section className={styles.page}>
      <div className={styles.tabs}>
        <button type="button">Connected Accounts</button>
        <button type="button">OAuth Clients</button>
      </div>
      <div className={styles.heroCard}>
        <h1>
          {oauth ? 'Create scoped OAuth clients' : 'Connect your account to 3,000+ integrated apps'}
        </h1>
        <p>
          {oauth
            ? 'Limit requested scopes and give IT control.'
            : 'Use managed authentication in workflows and API requests.'}
        </p>
        <button type="button" onClick={() => (oauth ? undefined : setChooser(true))}>
          {oauth ? 'New OAuth Client' : 'Connect an app'}
        </button>
      </div>
      <div className={styles.featureGrid}>
        {['Managed authentication', 'Secure and encrypted', 'Access controls'].map((x) => (
          <article key={x}>
            <h2>{x}</h2>
            <p>Fictional explanatory copy with no credentials.</p>
          </article>
        ))}
      </div>
      {chooser && (
        <div className={styles.modal} role="dialog" aria-label="Select an app">
          <h2>Select an app</h2>
          <input aria-label="Search apps" />
          <p>No matching apps</p>
          <button type="button" onClick={() => setChooser(false)}>
            Close
          </button>
        </div>
      )}
    </section>
  );
}

function DataStores({ dialog = false }: { dialog?: boolean }) {
  const [open, setOpen] = useState(dialog);
  return (
    <section className={styles.page}>
      <Header title="Data Stores" action="New data store" />
      <div className={styles.toolbar}>
        <input aria-label="Search data stores" />
        <button type="button" onClick={() => setOpen(true)}>
          ＋ New data store
        </button>
      </div>
      <div className={styles.empty}>
        <p>No results</p>
      </div>
      {open && (
        <div className={styles.modal} role="dialog" aria-label="New data store">
          <h2>New data store</h2>
          <input aria-label="Data store name" />
          <footer>
            <button type="button" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button type="button" onClick={() => setOpen(false)}>
              Create
            </button>
          </footer>
        </div>
      )}
    </section>
  );
}

function EventHistory() {
  const [status, setStatus] = useState(false);
  return (
    <section className={styles.page}>
      <Header title="Event History" />
      <div className={styles.toolbar}>
        <button type="button" onClick={() => setStatus(!status)}>
          Filter by status⌄
        </button>
        <button type="button">Select date range</button>
        <button type="button">Search for workflow⌄</button>
        <button type="button">Refresh</button>
      </div>
      {status && (
        <div className={styles.menu} role="menu">
          {['Success', 'Error', 'Paused'].map((x) => (
            <label key={x}>
              <input type="checkbox" readOnly />
              {x}
            </label>
          ))}
        </div>
      )}
      <div className={styles.info}>
        Connect usage is not shown here. Event History includes workflow executions only.
      </div>
      <div className={styles.empty}>
        <p>No results</p>
        <small>Extended event history isn't available on your plan.</small>
      </div>
    </section>
  );
}

function Settings({
  section,
}: {
  section: 'navigation' | 'auth' | 'env' | 'domains' | 'network' | 'billing';
}) {
  const title = {
    navigation: 'General',
    auth: 'Authentication',
    env: 'Environment Variables',
    domains: 'Verified Domains',
    network: 'Virtual Private Clouds',
    billing: 'Billing and Usage',
  }[section];
  return (
    <section className={styles.settingsPage}>
      <nav>
        {[
          'General',
          'Membership',
          'Authentication',
          'Environment Variables',
          'API',
          'Verified Domains',
          'Virtual Private Clouds',
          'Billing and Usage',
        ].map((x) => (
          <button className={x === title ? styles.lightSelected : ''} type="button" key={x}>
            {x}
          </button>
        ))}
      </nav>
      <div className={styles.settingsContent}>
        <Header title={title} />
        {section === 'navigation' && (
          <>
            <Field label="Workspace URL" value="canvas-lab" />
            <Field label="Notification email" value="alerts@example.test" />
            <div className={styles.gate}>Slack　Not available</div>
            <div className={styles.danger}>
              <h2>Danger Zone</h2>
              <button type="button">Delete Workspace</button>
            </div>
          </>
        )}
        {section === 'auth' && (
          <div className={styles.cardGrid}>
            {['Require 2FA', 'Enable SSO'].map((x) => (
              <article key={x}>
                <h2>{x}</h2>
                <span>Business</span>
                <button type="button" disabled>
                  Off
                </button>
              </article>
            ))}
            <article>
              <h2>Login method</h2>
              <button type="button">Any login method</button>
              <button type="button">SSO only</button>
            </article>
          </div>
        )}
        {section === 'env' && (
          <div className={styles.heroCard}>
            <h2>Use environment variables</h2>
            <p>Store static configuration and secrets for workflows.</p>
            <button type="button">New Variable</button>
          </div>
        )}
        {section === 'domains' && (
          <div className={styles.heroCard}>
            <h2>Verify domain ownership for SAML SSO</h2>
            <p>Google OAuth does not require this prerequisite.</p>
            <button type="button">New Domain</button>
          </div>
        )}
        {section === 'network' && (
          <div className={styles.heroCard}>
            <h2>Create your first VPC</h2>
            <p>Run workflows with isolated static-IP egress.</p>
            <button type="button">New VPC</button>
          </div>
        )}
        {section === 'billing' && <Billing />}
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className={styles.field}>
      {label}
      <input value={value} readOnly />
      <button type="button">Save</button>
    </label>
  );
}
function Billing() {
  return (
    <div>
      <div className={styles.kpis}>
        <article>
          <span>Subscription</span>
          <b>Free</b>
        </article>
        <article>
          <span>Monthly quota</span>
          <b>0 / 100 credits</b>
        </article>
        <article>
          <span>Monthly tokens</span>
          <b>1,000,000</b>
        </article>
      </div>
      <div className={styles.info}>
        Connect usage is tracked separately in the Connect dashboard or API.
      </div>
      <div className={styles.cardGrid}>
        <article>
          <h2>Purchase Tokens</h2>
          <p>Available for paid accounts.</p>
          <button type="button" disabled>
            Purchase
          </button>
        </article>
        <article>
          <h2>Auto Reload</h2>
          <p>Inactive</p>
          <button type="button">Configure</button>
        </article>
        <article>
          <h2>Compute Budget</h2>
          <p>Cap workflow compute daily or monthly.</p>
          <button type="button">Save</button>
        </article>
      </div>
    </div>
  );
}

function ConnectOverview() {
  return (
    <section className={styles.connectPage}>
      <div className={styles.connectHero}>
        ◇　　◇<h1>Add Connect to your codebase</h1>
        <p>Hand setup to your coding agent, or follow the quickstart.</p>
        <article>
          <b>Project</b>
          <span>Default</span>
          <b>Environment</b>
          <span>● Production</span>
        </article>
        <button type="button">Copy agent prompt</button>
        <button type="button">Follow the quickstart ↗</button>
      </div>
    </section>
  );
}

function ConnectConfiguration({
  mode,
}: {
  mode: 'project' | 'users' | 'webhooks' | 'api' | 'network';
}) {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.connectPage}>
      <nav className={styles.connectSubnav}>
        {['General', 'Appearance', 'Webhooks', 'API', 'Networking'].map((x) => (
          <button type="button" key={x}>
            {x}
          </button>
        ))}
      </nav>
      <div className={styles.connectBody}>
        {mode === 'project' && (
          <>
            <Header title="General" />
            <Field label="Project name" value="Default" />
            <div className={styles.danger}>
              <h2>Delete project</h2>
              <button type="button" onClick={() => setNotice('No project was deleted.')}>
                Delete project
              </button>
            </div>
          </>
        )}
        {mode === 'users' && (
          <div className={styles.connectHero}>
            <h1>Managed auth for 3,000+ APIs</h1>
            <p>
              Add tools and triggers, write custom code, or run multi-step workflows for fictional
              users.
            </p>
            <button type="button" onClick={() => setNotice('No account was connected.')}>
              Connect account
            </button>
          </div>
        )}
        {mode === 'webhooks' && (
          <>
            <Header title="Webhooks" />
            <p>Configure environment-specific webhook endpoints for deployed triggers.</p>
            <Field
              label="Production Webhook URL"
              value="https://your-app.test/webhooks/pipedream"
            />
          </>
        )}
        {mode === 'api' && (
          <>
            <Header title="API clients" />
            <p>These clients can only access this project.</p>
            <button type="button" onClick={() => setNotice('No API client was created.')}>
              New API client
            </button>
            <div className={styles.empty}>
              <p>No API clients</p>
            </div>
          </>
        )}
        {mode === 'network' && (
          <>
            <Header title="Networking" />
            <p>Requests use Pipedream's shared network pool by default.</p>
            <div className={styles.networkRow}>
              <span>Network</span>
              <b>Pipedream shared network pool</b>
            </div>
            <p>No VPCs in this workspace yet.</p>
            <button type="button" onClick={() => setNotice('No VPC was created.')}>
              Create VPC
            </button>
          </>
        )}
        {notice && <Boundary>{notice}</Boundary>}
      </div>
    </section>
  );
}

function ProjectDialog({ kind }: { kind: 'access' | 'settings' }) {
  return (
    <section className={styles.projectPage}>
      <ProjectNav selected={kind === 'access' ? 'Access' : 'Settings'} />
      <div className={styles.projectCanvas}>
        <div className={styles.empty}>
          <h2>Default project</h2>
          <p>Fictional project context remains visible behind the dialog.</p>
        </div>
        <div
          className={styles.modal}
          role="dialog"
          aria-label={kind === 'access' ? 'Manage access' : 'Project settings'}
        >
          {kind === 'access' ? (
            <>
              <h2>Manage Access</h2>
              <p>Configure which workspace members can access this project.</p>
              <label>
                <input type="checkbox" disabled /> Restrict access to this project
              </label>
              <div className={styles.gate}>Business plan required</div>
              <small>Workspace admins always have access.</small>
            </>
          ) : (
            <>
              <h2>Project Settings</h2>
              <Field label="Name" value="Default" />
              <Field label="Project ID" value="proj_demo" />
              <label>
                <input type="checkbox" readOnly /> Configure GitHub Sync
              </label>
              <label>
                <input type="checkbox" readOnly /> Give Pipedream Support Access
              </label>
              <footer>
                <button type="button">Update Project</button>
                <button type="button">Export Workflows</button>
              </footer>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function MainCommandMenu() {
  return (
    <section className={styles.page}>
      <Header title="Experimental Features" />
      <div className={styles.modal} role="dialog" aria-label="Search Pipedream">
        <input aria-label="Search commands" placeholder="Search…" />
        {[
          'Create a new workflow',
          'Create a new project',
          'Default  proj_demo',
          'Projects  /projects',
          'Sources  /sources',
          'Accounts  /accounts',
          'Explore  /explore',
          'Account Settings  /settings/account',
          'Billing and Usage  /settings/billing',
        ].map((item) => (
          <button type="button" key={item}>
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

function StringBuilder() {
  return (
    <div className={styles.stringFrame}>
      <aside>
        <b>
          string <small>alpha</small>
        </b>
        <button type="button">Start new chat</button>
        <h3>Recent Chats</h3>
        <small>Canvas Lab</small>
      </aside>
      <main>
        <div className={styles.info}>Pipedream has joined Workday</div>
        <h1>What do you want to automate?</h1>
        <p>Prompt, run, edit, and deploy AI agents in seconds</p>
        <textarea
          aria-label="AI agent prompt"
          placeholder="How can String help you today?"
          readOnly
        />
        <div className={styles.pills}>
          {[
            'Send email with Gmail',
            'Add a Google Sheet row',
            'Create an issue',
            'Brand monitoring',
            'Daily calendar summary',
            'Email categorization',
          ].map((x) => (
            <button type="button" key={x}>
              {x}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

function UserSettingsExtra({ kind }: { kind: 'account' | 'application' | 'experimental' }) {
  const title =
    kind === 'account'
      ? 'Account Settings'
      : kind === 'application'
        ? 'Application Settings'
        : 'Experimental Features';
  return (
    <section className={styles.settingsPage}>
      <nav>
        {['Account', 'Application', 'Alpha Features'].map((x) => (
          <button
            className={
              title.startsWith(x) || (x === 'Alpha Features' && kind === 'experimental')
                ? styles.lightSelected
                : ''
            }
            type="button"
            key={x}
          >
            {x}
          </button>
        ))}
      </nav>
      <div className={styles.settingsContent}>
        <Header title={title} />
        {kind === 'account' && (
          <div className={styles.cardGrid}>
            <article>
              <h2>Email and password</h2>
              <p>Credentials excluded from this fictional fixture.</p>
              <button type="button">Update password</button>
            </article>
            <article>
              <h2>Two-Factor Authentication</h2>
              <button type="button">Configure</button>
            </article>
            <article>
              <h2>API Key</h2>
              <code>••••••••••••</code>
              <button type="button">Regenerate API Key</button>
            </article>
            <article className={styles.danger}>
              <h2>Delete Account</h2>
              <button type="button">Delete this account</button>
            </article>
          </div>
        )}
        {kind === 'application' && (
          <div className={styles.cardGrid}>
            <article>
              <h2>Clock format</h2>
              <button type="button">12-hour⌄</button>
            </article>
            {[
              'Enable Vim Keyboard Shortcuts',
              'Enable Word Wrap',
              'Builder Auto-Collapse',
              'Builder Auto-Scroll',
            ].map((x) => (
              <label key={x}>
                <input type="checkbox" readOnly /> {x}
              </label>
            ))}
            <Field label="Tab Size" value="2" />
          </div>
        )}
        {kind === 'experimental' && (
          <article className={styles.heroCard}>
            <h2>AI Branching</h2>
            <label>
              <input type="checkbox" readOnly /> Off
            </label>
          </article>
        )}
      </div>
    </section>
  );
}

type ConnectExtraKind =
  | 'users'
  | 'accounts'
  | 'triggers'
  | 'logs'
  | 'configuration'
  | 'command'
  | 'workspace-switcher'
  | 'environment-switcher'
  | 'general'
  | 'team'
  | 'api'
  | 'app-configs'
  | 'networking'
  | 'sign-in'
  | 'billing'
  | 'account';

function ConnectInventory({ kind }: { kind: 'users' | 'accounts' | 'triggers' }) {
  const columns =
    kind === 'users'
      ? ['External ID', 'Connected apps', 'Created', 'Actions']
      : kind === 'accounts'
        ? ['App', 'Status', 'Created', 'User', 'Actions']
        : ['Component', 'Source', 'Status', 'Created', 'User', 'Actions'];
  return (
    <section className={styles.connectPage}>
      <div className={styles.connectBody}>
        <Header title={kind[0].toUpperCase() + kind.slice(1)} />
        <p>
          {kind === 'users'
            ? 'View end users and their authorized third-party app connections.'
            : kind === 'accounts'
              ? 'Inspect authorized accounts by app, age, and environment.'
              : 'Track deployed Connect triggers by source app and active state.'}
        </p>
        <div className={styles.toolbar}>
          <input
            aria-label={`Filter ${kind}`}
            placeholder={kind === 'triggers' ? 'Filter by name…' : ''}
          />
          <button type="button">Add filter</button>
        </div>
        <div className={styles.tableHead}>
          {columns.map((x) => (
            <b key={x}>{x}</b>
          ))}
        </div>
        <div className={styles.empty}>
          <p>No {kind} found.</p>
        </div>
      </div>
    </section>
  );
}

function ConnectExtra({ kind }: { kind: ConnectExtraKind }) {
  if (kind === 'users' || kind === 'accounts' || kind === 'triggers')
    return <ConnectInventory kind={kind} />;
  if (kind === 'logs')
    return (
      <section className={styles.connectPage}>
        <div className={styles.connectBody}>
          <Header title="Logs" />
          <p>Review Connect API requests and background executions.</p>
          <div className={styles.tabs}>
            <button type="button">24 hours</button>
            <button type="button">7 days</button>
            <button type="button">Volume</button>
            <button type="button">Credits</button>
          </div>
          <div className={styles.chart}>Volume chart · no data</div>
          <div className={styles.tabs}>
            <button type="button">Traces</button>
            <button type="button">Endpoints</button>
            <button type="button">Users</button>
          </div>
          <div className={styles.toolbar}>
            {['Apps', 'Endpoints', 'Users', 'Status'].map((x) => (
              <button type="button" key={x}>
                {x}⌄
              </button>
            ))}
          </div>
          <div className={styles.empty}>No traces match the selected filters.</div>
        </div>
      </section>
    );
  if (kind === 'configuration')
    return (
      <section className={styles.connectPage}>
        <nav className={styles.connectSubnav}>
          {['General', 'Appearance', 'Webhooks', 'API', 'Networking'].map((x) => (
            <button type="button" key={x}>
              {x}
            </button>
          ))}
        </nav>
        <div className={styles.empty}>
          <h2>Select a project</h2>
          <p>Choose a project above to configure</p>
        </div>
      </section>
    );
  if (kind === 'command')
    return (
      <section className={styles.connectPage}>
        <div className={styles.modal} role="dialog" aria-label="Connect command center">
          <input aria-label="Search commands" />
          {[
            'Recent projects · Default',
            'Go to · Overview',
            'Users',
            'Accounts',
            'Triggers',
            'Logs',
            'Context · Switch project',
            'All projects',
            'Configuration',
            'Settings',
            'Create · New project',
            'Copy workspace ID',
          ].map((x) => (
            <button type="button" key={x}>
              {x}
            </button>
          ))}
        </div>
      </section>
    );
  if (kind === 'workspace-switcher')
    return (
      <section className={styles.connectPage}>
        <div className={styles.menu} role="menu">
          <h2>Workspaces</h2>
          <input aria-label="Find a workspace" placeholder="Find a workspace" />
          <button type="button">Canvas Lab</button>
          <button type="button">Create workspace</button>
          <button type="button">Account settings</button>
          <button type="button">Sign out</button>
        </div>
      </section>
    );
  if (kind === 'environment-switcher')
    return (
      <section className={styles.connectPage}>
        <div className={styles.menu} role="menu">
          <h2>Environment</h2>
          <button type="button">● Production</button>
          <button type="button">○ Development</button>
        </div>
        <ConnectInventory kind="users" />
      </section>
    );

  const titles: Record<
    Exclude<
      ConnectExtraKind,
      | 'users'
      | 'accounts'
      | 'triggers'
      | 'logs'
      | 'configuration'
      | 'command'
      | 'workspace-switcher'
      | 'environment-switcher'
    >,
    string
  > = {
    general: 'General',
    team: 'Team',
    api: 'API clients',
    'app-configs': 'OAuth clients',
    networking: 'Networking',
    'sign-in': 'Sign-in',
    billing: 'Billing',
    account: 'Account',
  };
  return (
    <section className={styles.connectPage}>
      <div className={styles.connectBody}>
        <Header title={titles[kind]} />
        {kind === 'general' && (
          <>
            <p>Basic details for this workspace.</p>
            <Field label="Workspace name" value="Canvas Lab" />
            <div className={styles.danger}>
              <h2>Delete workspace</h2>
              <button type="button">Delete workspace</button>
            </div>
          </>
        )}
        {kind === 'team' && (
          <>
            <div className={styles.cardGrid}>
              <article>
                <h2>Invite team members</h2>
                <button type="button">Send invites</button>
              </article>
              <article>
                <h2>Invite links</h2>
                <button type="button">Create link</button>
              </article>
            </div>
            <h2>Members</h2>
            <p>Identity details excluded.</p>
          </>
        )}
        {kind === 'api' && (
          <>
            <p>Create and manage Pipedream API clients.</p>
            <div className={styles.toolbar}>
              <input aria-label="Search API clients" placeholder="Search by name…" />
              <button type="button">New API client</button>
            </div>
            <div className={styles.tableHead}>
              <b>Name</b>
              <b>Updated</b>
              <b>Client ID</b>
              <b>Actions</b>
            </div>
          </>
        )}
        {kind === 'app-configs' && (
          <div className={styles.heroCard}>
            <h2>No OAuth clients yet</h2>
            <p>Use your own scopes and branding instead of Pipedream's shared OAuth clients.</p>
            <button type="button">New OAuth client</button>
          </div>
        )}
        {kind === 'networking' && (
          <div className={styles.heroCard}>
            <h2>No VPCs yet</h2>
            <p>Create a dedicated network with a static outbound IP.</p>
            <button type="button">Create VPC</button>
          </div>
        )}
        {kind === 'sign-in' && (
          <div className={styles.cardGrid}>
            {['Single sign-on', 'Two-factor authentication', 'Verified domains'].map((x) => (
              <article key={x}>
                <h2>{x}</h2>
                <span>Business</span>
                <button type="button" disabled>
                  Off
                </button>
              </article>
            ))}
          </div>
        )}
        {kind === 'billing' && (
          <>
            <p>Free plan</p>
            <div className={styles.kpis}>
              {['0 Total credits', '0 Action runs', '0 Trigger emits', '0 Proxy requests'].map(
                (x) => (
                  <article key={x}>
                    <b>{x}</b>
                  </article>
                )
              )}
            </div>
            <button type="button">Manage billing</button>
          </>
        )}
        {kind === 'account' && (
          <div className={styles.cardGrid}>
            <article>
              <h2>Two-factor authentication</h2>
              <p>2FA is not enabled.</p>
              <button type="button">Configure 2FA</button>
            </article>
            <article className={styles.danger}>
              <h2>Delete account</h2>
              <button type="button">Delete account</button>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}

function AppShell() {
  return (
    <section className={styles.page}>
      <Header title="Projects" action="New workflow" />
      <div className={styles.empty}>
        <h2>Persistent workspace navigation</h2>
        <p>Projects, Sources, Accounts, Data Stores, Event History and Settings.</p>
      </div>
    </section>
  );
}

export function PipedreamPreview({ variant }: PipedreamPreviewProps) {
  if (variant === 'string-ai-builder') return <StringBuilder />;
  if (variant.startsWith('connect-')) {
    const content =
      variant === 'connect-overview' ? (
        <ConnectOverview />
      ) : variant === 'connect-project-configuration' ? (
        <ConnectConfiguration mode="project" />
      ) : variant === 'connect-users-onboarding' ? (
        <ConnectConfiguration mode="users" />
      ) : variant === 'connect-webhooks' ? (
        <ConnectConfiguration mode="webhooks" />
      ) : variant === 'connect-api-clients' ? (
        <ConnectConfiguration mode="api" />
      ) : variant === 'connect-networking' ? (
        <ConnectConfiguration mode="network" />
      ) : variant === 'connect-global-users' ? (
        <ConnectExtra kind="users" />
      ) : variant === 'connect-global-accounts' ? (
        <ConnectExtra kind="accounts" />
      ) : variant === 'connect-global-triggers' ? (
        <ConnectExtra kind="triggers" />
      ) : variant === 'connect-logs-observability' ? (
        <ConnectExtra kind="logs" />
      ) : variant === 'connect-configuration-picker' ? (
        <ConnectExtra kind="configuration" />
      ) : variant === 'connect-command-center' ? (
        <ConnectExtra kind="command" />
      ) : variant === 'connect-workspace-switcher' ? (
        <ConnectExtra kind="workspace-switcher" />
      ) : variant === 'connect-environment-switcher' ? (
        <ConnectExtra kind="environment-switcher" />
      ) : variant === 'connect-workspace-general' ? (
        <ConnectExtra kind="general" />
      ) : variant === 'connect-team' ? (
        <ConnectExtra kind="team" />
      ) : variant === 'connect-workspace-api-clients' ? (
        <ConnectExtra kind="api" />
      ) : variant === 'connect-app-configs' ? (
        <ConnectExtra kind="app-configs" />
      ) : variant === 'connect-workspace-networking' ? (
        <ConnectExtra kind="networking" />
      ) : variant === 'connect-sign-in' ? (
        <ConnectExtra kind="sign-in" />
      ) : variant === 'connect-billing' ? (
        <ConnectExtra kind="billing" />
      ) : variant === 'connect-account-security' ? (
        <ConnectExtra kind="account" />
      ) : (
        <section className={styles.connectPage}>
          <div className={styles.empty}>
            <h1>Pipedream Connect</h1>
            <p>Alpha workspace shell with project and environment context.</p>
          </div>
        </section>
      );
    return (
      <ConnectShell
        selected={
          variant === 'connect-shell'
            ? 'Home'
            : variant === 'connect-global-users'
              ? 'Users'
              : variant === 'connect-global-accounts'
                ? 'Accounts'
                : variant === 'connect-global-triggers'
                  ? 'Triggers'
                  : variant === 'connect-logs-observability'
                    ? 'Logs'
                    : 'Configuration'
        }
      >
        {content}
      </ConnectShell>
    );
  }
  const selected = variant.startsWith('source')
    ? 'Sources'
    : variant === 'user-account-security' ||
        variant === 'application-preferences' ||
        variant === 'experimental-features' ||
        variant === 'global-search-command-menu'
      ? 'Settings'
      : variant.includes('account') || variant === 'oauth-clients'
        ? 'Accounts'
        : variant.includes('data-store')
          ? 'Data Stores'
          : variant === 'event-history-plan-gate'
            ? 'Event History'
            : variant.includes('settings') ||
                variant.includes('authentication') ||
                variant.includes('environment') ||
                variant.includes('domains') ||
                variant.includes('networking') ||
                variant.includes('billing')
              ? 'Settings'
              : 'Projects';
  const content =
    variant === 'application-shell' ? (
      <AppShell />
    ) : variant === 'projects-catalogue' ? (
      <ProjectsCatalogue />
    ) : variant === 'project-resources-empty' ? (
      <ProjectWorkspace />
    ) : variant === 'project-create-menu' ? (
      <ProjectWorkspace menu />
    ) : variant === 'file-store-plan-gate' ? (
      <ProjectInfo kind="files" />
    ) : variant === 'project-variables' ? (
      <ProjectInfo kind="variables" />
    ) : variant === 'sources-empty-filters' ? (
      <Sources />
    ) : variant === 'connected-accounts-onboarding' ? (
      <Accounts />
    ) : variant === 'oauth-clients' ? (
      <Accounts oauth />
    ) : variant === 'data-stores-empty' ? (
      <DataStores />
    ) : variant === 'data-store-create-dialog' ? (
      <DataStores dialog />
    ) : variant === 'event-history-plan-gate' ? (
      <EventHistory />
    ) : variant === 'project-access-plan-gate' ? (
      <ProjectDialog kind="access" />
    ) : variant === 'project-settings-modal' ? (
      <ProjectDialog kind="settings" />
    ) : variant === 'global-search-command-menu' ? (
      <MainCommandMenu />
    ) : variant === 'user-account-security' ? (
      <UserSettingsExtra kind="account" />
    ) : variant === 'application-preferences' ? (
      <UserSettingsExtra kind="application" />
    ) : variant === 'experimental-features' ? (
      <UserSettingsExtra kind="experimental" />
    ) : variant === 'authentication-plan-gates' ? (
      <Settings section="auth" />
    ) : variant === 'environment-variables' ? (
      <Settings section="env" />
    ) : variant === 'verified-domains' ? (
      <Settings section="domains" />
    ) : variant === 'workspace-networking' ? (
      <Settings section="network" />
    ) : variant === 'billing-usage' ? (
      <Settings section="billing" />
    ) : (
      <Settings section="navigation" />
    );
  return <MainShell selected={selected}>{content}</MainShell>;
}

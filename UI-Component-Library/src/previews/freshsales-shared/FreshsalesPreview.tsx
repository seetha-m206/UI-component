import { useState } from 'react';
import styles from './freshsales.module.css';

export type FreshsalesVariant =
  | 'application-shell'
  | 'contacts-workspace'
  | 'filter-and-view-controls'
  | 'accounts-workspace'
  | 'deals-multi-view'
  | 'contact-record'
  | 'dashboard-sample-state'
  | 'analytics-report-library'
  | 'conversations-onboarding'
  | 'sales-sequences-onboarding'
  | 'workflow-template-library'
  | 'admin-settings-catalogue'
  | 'deal-record-detail'
  | 'account-record-overview'
  | 'deal-import-setup'
  | 'roles-and-permissions'
  | 'role-permission-matrix'
  | 'contact-scoring-setup'
  | 'freddy-ai-settings'
  | 'plan-boundary-states'
  | 'pipeline-stage'
  | 'deal-card'
  | 'loading-skeleton'
  | 'saved-view-menu'
  | 'filter-drawer'
  | 'table-toolbar'
  | 'record-action-bar'
  | 'field-group'
  | 'activity-card'
  | 'import-dropzone'
  | 'required-fields-popover'
  | 'duplicate-option'
  | 'license-banner'
  | 'role-row'
  | 'permission-row'
  | 'signal-chip'
  | 'feature-toggle'
  | 'screen-loading-state';

export interface FreshsalesPreviewProps {
  variant: FreshsalesVariant;
  initialState?: string;
  disabled?: boolean;
}

const people = [
  ['Avery Morgan', 'Northstar Works', 'Operations lead', 'Qualified'],
  ['Jordan Lee', 'Lakeshore Labs', 'Finance director', 'Contacted'],
  ['Samira Patel', 'Juniper Field', 'Growth lead', 'New'],
];

const accounts = [
  ['Northstar Works', '2', 'northstar.example', '51–200'],
  ['Lakeshore Labs', '1', 'lakeshore.example', '11–50'],
  ['Juniper Field', '3', 'juniper.example', '201–500'],
];

const deals = [
  ['Northstar rollout', '$5,600', 'New', 'Closes in Dec'],
  ['Lakeshore renewal', '$4,100', 'Qualification', 'Closes in Oct'],
  ['Juniper expansion', '$3,500', 'Discovery', 'Closes in Nov'],
];

function Guard({ message }: { message: string }) {
  return message ? (
    <div className={styles.guard} role="status">
      {message}
    </div>
  ) : null;
}

function Shell({ children, title }: { children: React.ReactNode; title: string }) {
  const [notice, setNotice] = useState('');
  const nav = [
    'Dashboards',
    'Contacts',
    'Accounts',
    'Deals',
    'Conversations',
    'Analytics',
    'Admin',
  ];
  return (
    <div className={styles.shell}>
      <aside className={styles.rail} aria-label="Primary navigation">
        <b className={styles.logo}>f</b>
        {nav.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setNotice(`${item} navigation stays inside this fictional fixture.`)}
          >
            {item.slice(0, 2)}
          </button>
        ))}
      </aside>
      <header className={styles.topbar}>
        <strong>{title}</strong>
        <span className={styles.trial}>Trial workspace</span>
        <input aria-label="Search fictional CRM" placeholder="Search your CRM" disabled />
        <button
          type="button"
          onClick={() => setNotice('Quick create did not open a provider form.')}
        >
          ＋
        </button>
        <button type="button" onClick={() => setNotice('No email composer was opened.')}>
          ✉
        </button>
        <span className={styles.avatar}>NR</span>
      </header>
      <main className={styles.main}>
        {children}
        <Guard message={notice} />
      </main>
    </div>
  );
}

function SetupGuide() {
  const [notice, setNotice] = useState('');
  return (
    <Shell title="Contacts">
      <section className={styles.setup}>
        <div>
          <b>Your Freshsales Suite setup guide</b>
          <button type="button" onClick={() => setNotice('Interactive tour was not started.')}>
            Take an interactive tour
          </button>
        </div>
        <div className={styles.setupCards}>
          {[
            'Personalize your CRM',
            'Import contacts',
            'Bring in website leads',
            'Invite your team',
          ].map((item) => (
            <button type="button" key={item} onClick={() => setNotice(`${item} was not started.`)}>
              {item}
            </button>
          ))}
        </div>
      </section>
      <Guard message={notice} />
    </Shell>
  );
}

function DataTable({ kind }: { kind: 'contacts' | 'accounts' }) {
  const [notice, setNotice] = useState('');
  const rows = kind === 'contacts' ? people : accounts;
  const headers =
    kind === 'contacts'
      ? ['Name', 'Account', 'Job title', 'Status']
      : ['Account', 'Related contacts', 'Website', 'Employees'];
  return (
    <Shell title={kind === 'contacts' ? 'Contacts' : 'Accounts'}>
      <div className={styles.toolbar}>
        <button type="button">All {kind}</button>
        <span className={styles.count}>{rows.length}</span>
        <button
          type="button"
          onClick={() => setNotice('Column changes are disabled in this fixture.')}
        >
          Customize table
        </button>
        <button type="button" onClick={() => setNotice(`No ${kind} import was started.`)}>
          Import {kind}
        </button>
        <button
          type="button"
          className={styles.primary}
          onClick={() => setNotice(`No ${kind.slice(0, -1)} form was opened.`)}
        >
          Add {kind.slice(0, -1)}
        </button>
      </div>
      <div className={styles.subtoolbar}>
        <button type="button">▦ Table</button>
        <button type="button">Bulk actions</button>
        <button type="button">Filter by</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}⌄</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td key={cell}>
                  <button
                    type="button"
                    className={index === 0 ? styles.linkButton : styles.cellButton}
                    onClick={() => setNotice('No record or external destination was opened.')}
                  >
                    {cell}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Guard message={notice} />
    </Shell>
  );
}

function FilterAndViews({ initialState = 'filter' }: { initialState?: string }) {
  const [mode, setMode] = useState(initialState);
  const [notice, setNotice] = useState('');
  const filters = [
    'Sales owner',
    'Territory',
    'Source',
    'Account',
    'Lifecycle stage',
    'Status',
    'Tags',
  ];
  const views = [
    'My contacts',
    'My territory contacts',
    'New contacts',
    'Recently modified',
    'Never contacted',
    'Needs follow-up',
  ];
  return (
    <div className={styles.stage}>
      <div className={styles.toolbar}>
        <button type="button" onClick={() => setMode('views')}>
          Saved views
        </button>
        <button type="button" onClick={() => setMode('filter')}>
          Filter by
        </button>
      </div>
      <aside
        className={styles.panel}
        aria-label={mode === 'filter' ? 'Filter builder' : 'Saved views'}
      >
        <h2>{mode === 'filter' ? 'Add filters' : 'Select a view'}</h2>
        <input
          aria-label={mode === 'filter' ? 'Add a field to filter' : 'Search views'}
          placeholder={mode === 'filter' ? 'Add a field to filter' : 'Search views'}
        />
        {(mode === 'filter' ? filters : views).map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => setNotice(`${item} was selected only in this fixture.`)}
          >
            {item}
          </button>
        ))}
        <button
          type="button"
          className={styles.primary}
          onClick={() => setNotice('No provider filter or view was saved.')}
        >
          {mode === 'filter' ? 'Apply' : 'Open view'}
        </button>
      </aside>
      <Guard message={notice} />
    </div>
  );
}

function Deals({ initialState = 'pipeline' }: { initialState?: string }) {
  const [view, setView] = useState(initialState);
  const [notice, setNotice] = useState('');
  return (
    <Shell title="Deals">
      <div className={styles.toolbar}>
        <div className={styles.segment}>
          {['pipeline', 'forecast', 'table'].map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={view === item}
              onClick={() => setView(item)}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
        <button type="button">Sort by Deal value</button>
        <button type="button">All deal owners</button>
        <button
          type="button"
          className={styles.primary}
          onClick={() => setNotice('No deal form was opened.')}
        >
          Add deal
        </button>
      </div>
      {view === 'pipeline' && (
        <div className={styles.board}>
          {['New', 'Qualification', 'Discovery', 'Demo'].map((stage, index) => (
            <section key={stage} className={styles.column}>
              <h3>
                {stage} <span>{index < 3 ? 1 : 0}</span>
              </h3>
              {index < 3 ? (
                <button
                  type="button"
                  className={styles.card}
                  onClick={() => setNotice('No deal was opened or moved.')}
                >
                  <b>{deals[index][0]}</b>
                  <strong>{deals[index][1]}</strong>
                  <small>{deals[index][3]}</small>
                </button>
              ) : (
                <p>Add deal</p>
              )}
            </section>
          ))}
        </div>
      )}
      {view === 'forecast' && (
        <div className={styles.board}>
          {['Jan 2027', 'Feb 2027', 'Mar 2027', 'Apr 2027'].map((month) => (
            <section key={month} className={styles.column}>
              <h3>
                {month} <span>0</span>
              </h3>
              <p className={styles.empty}>No forecast deals</p>
            </section>
          ))}
        </div>
      )}
      {view === 'table' && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Deal name</th>
              <th>Value</th>
              <th>Stage</th>
              <th>Expected close</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Guard message={notice} />
    </Shell>
  );
}

function ContactRecord({ initialState = 'overview' }: { initialState?: string }) {
  const [tab, setTab] = useState(initialState);
  const [notice, setNotice] = useState('');
  return (
    <Shell title="Contacts › Avery Morgan">
      <div className={styles.actionbar}>
        {['Email', 'Call', 'SMS', 'Task', 'Meeting', 'Sales activities', 'Add deal'].map((item) => (
          <button type="button" key={item} onClick={() => setNotice(`${item} was not started.`)}>
            {item}
          </button>
        ))}
      </div>
      <div className={styles.record}>
        <aside className={styles.recordNav}>
          <h2>Avery Morgan</h2>
          <p>Operations lead</p>
          {['overview', 'details', 'activities'].map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={tab === item}
              onClick={() => setTab(item)}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </aside>
        <section className={styles.recordBody}>
          {tab === 'overview' && (
            <>
              <h2>Overview</h2>
              <div className={styles.lifecycle}>
                <span>New</span>
                <span>Contacted</span>
                <span>Interested</span>
                <span>Qualified</span>
              </div>
              <div className={styles.summary}>
                <article>
                  <h3>Summary</h3>
                  <p>
                    <b>Lifecycle stage</b>
                    <br />
                    Sales Qualified Lead
                  </p>
                  <p>
                    <b>Account</b>
                    <br />
                    Northstar Works
                  </p>
                  <p>
                    <b>Sales owner</b>
                    <br />
                    Noah Rivera
                  </p>
                </article>
                <aside>
                  <button type="button" onClick={() => setNotice('No note was created.')}>
                    Add a note…
                  </button>
                  <p>Fictional follow-up context is shown here.</p>
                </aside>
              </div>
            </>
          )}
          {tab === 'details' && (
            <>
              <h2>Contact details</h2>
              <div className={styles.toolbar}>
                <input aria-label="Search fictional contact fields" placeholder="Search fields" />
                <label>
                  <input type="checkbox" /> Show empty fields
                </label>
              </div>
              <dl className={styles.details}>
                <div>
                  <dt>Email</dt>
                  <dd>avery@example.test</dd>
                </div>
                <div>
                  <dt>First name</dt>
                  <dd>Avery</dd>
                </div>
                <div>
                  <dt>Last name</dt>
                  <dd>Morgan</dd>
                </div>
                <div>
                  <dt>Account</dt>
                  <dd>Northstar Works</dd>
                </div>
                <div>
                  <dt>Job title</dt>
                  <dd>Operations lead</dd>
                </div>
              </dl>
            </>
          )}
          {tab === 'activities' && (
            <>
              <h2>Activity timeline</h2>
              <div className={styles.tabs}>
                <button type="button">All activities</button>
                <button type="button">Notes (1)</button>
                <button type="button">Tasks</button>
                <button type="button">Meetings</button>
              </div>
              <article className={styles.timeline}>
                <small>October 05, 2026</small>
                <button
                  type="button"
                  onClick={() => setNotice('No conversation or reply composer was opened.')}
                >
                  <b>Renewal planning notes</b>
                  <span>Replied · 2 days ago</span>
                </button>
              </article>
            </>
          )}
        </section>
      </div>
      <Guard message={notice} />
    </Shell>
  );
}

function DealRecord() {
  const [notice, setNotice] = useState('');
  return (
    <Shell title="Deals › Northstar rollout">
      <div className={styles.actionbar}>
        {['Email', 'Call', 'Note', 'Task', 'Meeting', 'Sales activities', 'Add product'].map(
          (item) => (
            <button type="button" key={item} onClick={() => setNotice(`${item} was not started.`)}>
              {item}
            </button>
          )
        )}
      </div>
      <section className={styles.recordDetail}>
        <header className={styles.recordHero}>
          <div>
            <small>DEAL</small>
            <h2>Northstar rollout</h2>
            <strong>$5,600 · Committed</strong>
          </div>
          <button type="button" onClick={() => setNotice('No deal field was edited.')}>
            See all details
          </button>
        </header>
        <div className={styles.lifecycle}>
          {['New', 'Qualification', 'Discovery', 'Demo', 'Negotiation'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className={styles.summary}>
          <article>
            <h3>Deal details</h3>
            <dl className={styles.details}>
              <div>
                <dt>Related account</dt>
                <dd>Northstar Works</dd>
              </div>
              <div>
                <dt>Currency</dt>
                <dd>USD</dd>
              </div>
              <div>
                <dt>Pipeline</dt>
                <dd>Default Pipeline</dd>
              </div>
              <div>
                <dt>Deal stage</dt>
                <dd>New</dd>
              </div>
              <div>
                <dt>Expected close</dt>
                <dd>Closes in December</dd>
              </div>
              <div>
                <dt>Sales owner</dt>
                <dd>Noah Rivera</dd>
              </div>
            </dl>
          </article>
          <aside>
            <h3>Related records</h3>
            <button type="button" onClick={() => setNotice('No related record was opened.')}>
              Avery Morgan
            </button>
            <button type="button" onClick={() => setNotice('No related record was opened.')}>
              Northstar Works
            </button>
          </aside>
        </div>
      </section>
      <Guard message={notice} />
    </Shell>
  );
}

function AccountRecord() {
  const [notice, setNotice] = useState('');
  return (
    <Shell title="Accounts › Northstar Works">
      <div className={styles.actionbar}>
        {['Call', 'Note', 'Task', 'Meeting', 'Sales activities', 'Add deal'].map((item) => (
          <button type="button" key={item} onClick={() => setNotice(`${item} was not started.`)}>
            {item}
          </button>
        ))}
      </div>
      <section className={styles.recordDetail}>
        <header className={styles.recordHero}>
          <div>
            <small>ACCOUNT</small>
            <h2>Northstar Works</h2>
            <span>northstar.example</span>
          </div>
          <button type="button" onClick={() => setNotice('No account field was edited.')}>
            See all details
          </button>
        </header>
        <h2>Overview</h2>
        <div className={styles.summary}>
          <article>
            <h3>Summary</h3>
            <dl className={styles.details}>
              <div>
                <dt>Sales owner</dt>
                <dd>Noah Rivera</dd>
              </div>
              <div>
                <dt>Industry</dt>
                <dd>Professional services</dd>
              </div>
              <div>
                <dt>Business type</dt>
                <dd>Customer</dd>
              </div>
              <div>
                <dt>Employees</dt>
                <dd>51–200</dd>
              </div>
              <div>
                <dt>Annual revenue</dt>
                <dd>$8.4M</dd>
              </div>
              <div>
                <dt>Last contacted</dt>
                <dd>Three days ago</dd>
              </div>
            </dl>
          </article>
          <aside>
            <h3>Activity rail</h3>
            <button type="button" onClick={() => setNotice('No note was created.')}>
              Add a note…
            </button>
            <p>Fictional relationship context appears here.</p>
          </aside>
        </div>
      </section>
      <Guard message={notice} />
    </Shell>
  );
}

function DealImport({ initialState = 'upload' }: { initialState?: string }) {
  const [state, setState] = useState(initialState);
  const [notice, setNotice] = useState('');
  return (
    <Shell title="Deals › Import">
      <section className={styles.modalCard} aria-label="Import deals step one">
        <header>
          <div>
            <small>IMPORT DEALS</small>
            <h2>Step 1 of 2</h2>
          </div>
          <button type="button" onClick={() => setNotice('Import setup was closed locally.')}>
            Close
          </button>
        </header>
        <p>Import deals using your own file, or start from a sample CSV.</p>
        <button
          type="button"
          className={styles.dropzone}
          onClick={() => setNotice('No file picker or upload was opened.')}
        >
          Drop or upload your file here
          <small>.csv and .xlsx · maximum 5 MB</small>
        </button>
        <div className={styles.segment}>
          <button
            type="button"
            aria-pressed={state === 'upload'}
            onClick={() => setState('upload')}
          >
            Import options
          </button>
          <button
            type="button"
            aria-pressed={state === 'required'}
            onClick={() => setState('required')}
          >
            Required fields
          </button>
          <button
            type="button"
            aria-pressed={state === 'duplicates'}
            onClick={() => setState('duplicates')}
          >
            Duplicate matching
          </button>
        </div>
        {state === 'upload' && (
          <div className={styles.optionCard}>
            <b>Create new deals</b>
            <span>Owner fallback: Noah Rivera</span>
          </div>
        )}
        {state === 'required' && (
          <div className={styles.optionCard}>
            <b>Fill all required fields</b>
            <span>Deal name</span>
            <span>Deal value</span>
          </div>
        )}
        {state === 'duplicates' && (
          <div className={styles.optionCard}>
            <b>Skip duplicates automatically</b>
            <span>Match using Freshsales ID</span>
            <small>Matching remains unavailable until a file is chosen.</small>
          </div>
        )}
        <footer className={styles.modalFooter}>
          <button type="button" onClick={() => setNotice('No import was started.')}>
            Cancel
          </button>
          <button type="button" disabled>
            Next
          </button>
        </footer>
      </section>
      <Guard message={notice} />
    </Shell>
  );
}

function RolesCatalogue() {
  const [notice, setNotice] = useState('');
  const roles = [
    ['Account Admin', '1', 'CPQ'],
    ['Administrator', '0', 'Standard'],
    ['Sales Manager', '3', 'Standard'],
    ['Sales User', '8', 'Standard'],
    ['Restricted User', '2', 'Standard'],
  ];
  return (
    <Shell title="Admin Settings › Roles">
      <div className={styles.toolbar}>
        <div>
          <h2>Roles and permissions</h2>
          <p>Control what a user can do and where.</p>
        </div>
        <button type="button" onClick={() => setNotice('No role was created.')}>
          Create role
        </button>
      </div>
      <p className={styles.info}>Fictional license usage: 1 used · 2 available</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Roles</th>
            <th>Licenses</th>
            <th>Users</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(([role, users, license]) => (
            <tr key={role}>
              <td>
                <button
                  type="button"
                  className={styles.linkButton}
                  onClick={() => setNotice('No role editor was opened.')}
                >
                  {role}
                </button>
              </td>
              <td>{license}</td>
              <td>{users}</td>
              <td>
                <button
                  type="button"
                  onClick={() => setNotice('No license or user assignment changed.')}
                >
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Guard message={notice} />
    </Shell>
  );
}

function PermissionMatrix({ initialState = 'modules' }: { initialState?: string }) {
  const [section, setSection] = useState(initialState);
  const [notice, setNotice] = useState('');
  const rows: Record<string, string[]> = {
    modules: ['Contacts', 'Accounts', 'Deals'],
    actions: ['Create records', 'Assign records', 'Merge records', 'Import records'],
    freddy: ['Access Proactive Insights', 'Access Freddy Slider', 'Access Freddy AI Agent'],
    admin: ['Access Admin Settings', 'Manage users', 'Manage roles', 'Manage webhooks'],
  };
  return (
    <Shell title="Admin Settings › Roles › Account Admin">
      <div className={styles.toolbar}>
        <div>
          <h2>Account Admin</h2>
          <p>Grant permissions, assign users and add record types.</p>
        </div>
        <button type="button" onClick={() => setNotice('No user was assigned.')}>
          Assign users
        </button>
      </div>
      <div className={styles.segment}>
        {Object.keys(rows).map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={section === item}
            onClick={() => setSection(item)}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
      <table className={styles.permissionTable}>
        <thead>
          <tr>
            <th>{section === 'modules' ? 'Modules' : 'Permissions'}</th>
            <th>View</th>
            <th>Create</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {rows[section].map((item) => (
            <tr key={item}>
              <td>{item}</td>
              {['View', 'Create', 'Edit', 'Delete'].map((permission) => (
                <td key={`${item}-${permission}`}>
                  <input
                    type="checkbox"
                    aria-label={`${item} ${permission}`}
                    checked
                    disabled
                    readOnly
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.modalFooter}>
        <button type="button" onClick={() => setNotice('No role changes were saved.')}>
          Cancel
        </button>
        <button type="button" onClick={() => setNotice('No role changes were saved.')}>
          Save
        </button>
      </div>
      <Guard message={notice} />
    </Shell>
  );
}

function ContactScoring() {
  const [notice, setNotice] = useState('');
  return (
    <Shell title="Admin Settings › Contact Scoring">
      <section className={styles.scoring}>
        <header>
          <h2>Contact Scoring</h2>
          <p>Prioritize contacts using positive and negative signals.</p>
        </header>
        <p className={styles.info}>Bring events from your website or product to score contacts.</p>
        <div className={styles.scoreGrid}>
          {['Positive signals', 'Negative signals'].map((title) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>You have not added any signals.</p>
              <div className={styles.chips}>
                {['Country', 'Industry type', 'Email'].map((item) => (
                  <button
                    type="button"
                    key={`${title}-${item}`}
                    onClick={() => setNotice('No scoring signal was added.')}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
        <article className={styles.automationCard}>
          <h3>Automation based on score</h3>
          <label>
            If score is greater than{' '}
            <input aria-label="Fictional scoring threshold" type="number" value="70" readOnly />
          </label>
          <p>Add a “Likely to buy” tag and change lifecycle stage.</p>
          <button type="button" disabled>
            Save settings
          </button>
        </article>
      </section>
      <Guard message={notice} />
    </Shell>
  );
}

function FreddySettings({ initialState = 'copilot' }: { initialState?: string }) {
  const [group, setGroup] = useState(initialState);
  const [notice, setNotice] = useState('');
  const features =
    group === 'self-service'
      ? [
          'Chatbot summarization',
          'Utterance suggestions',
          'Answer generation',
          'Bot content enhancer',
        ]
      : [
          'Freddy Slider',
          'Conversational Actions',
          'Conversational Knowledge Base',
          'Generate Email Body',
          'Expand text',
          'Rephrase text',
          'Enhance tone',
          'Generate SMS content',
        ];
  return (
    <Shell title="Admin Settings › Freddy">
      <p className={styles.betaBanner}>
        Important · Freddy AI Copilot is available in beta with complimentary access to AI Insights.
      </p>
      <div className={styles.segment}>
        <button
          type="button"
          aria-pressed={group === 'self-service'}
          onClick={() => setGroup('self-service')}
        >
          Freddy Self Service
        </button>
        <button
          type="button"
          aria-pressed={group === 'copilot'}
          onClick={() => setGroup('copilot')}
        >
          Freddy AI Copilot
        </button>
      </div>
      <section className={styles.featurePanel}>
        <h2>{group === 'self-service' ? 'Freddy Self Service' : 'Freddy AI Copilot'}</h2>
        <p>
          {group === 'self-service'
            ? 'Deflect and automate fictional support resolutions.'
            : 'Assist fictional agents and admins without submitting prompts.'}
        </p>
        {features.map((feature, index) => (
          <label key={feature} className={styles.featureToggle}>
            <span>
              <b>{feature}</b>
              <small>Observed configuration pattern. Provider outcome remains unverified.</small>
            </span>
            <input
              type="checkbox"
              checked={index !== features.length - 1}
              disabled={feature.startsWith('Conversational')}
              readOnly
              onClick={() => setNotice('No Freddy setting was changed.')}
            />
          </label>
        ))}
      </section>
      <Guard message={notice} />
    </Shell>
  );
}

function PlanBoundaries({ initialState = 'beta' }: { initialState?: string }) {
  const states: Record<string, [string, string]> = {
    beta: ['Beta access', 'This capability is available in beta with complimentary access.'],
    loading: ['Loading configuration', 'The settings surface is still loading.'],
    unavailable: ['Unavailable', 'This control is unavailable in the current context.'],
    upgrade: ['Plan boundary', 'Upgrade the fictional plan to continue.'],
  };
  const [state, setState] = useState(initialState);
  const [title, body] = states[state] ?? states.beta;
  return (
    <Shell title="Freshsales capability boundary">
      <div className={styles.segment}>
        {Object.keys(states).map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={state === item}
            onClick={() => setState(item)}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
      <section className={`${styles.boundaryCard} ${styles[state] ?? ''}`} role="status">
        <span aria-hidden="true">
          {state === 'loading' ? '◌' : state === 'unavailable' ? '!' : '◆'}
        </span>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
          {state === 'upgrade' && (
            <button type="button" disabled>
              Upgrade now
            </button>
          )}
        </div>
      </section>
    </Shell>
  );
}

function AtomicComponent({
  kind,
  initialState = 'default',
}: {
  kind: Exclude<
    FreshsalesVariant,
    | 'application-shell'
    | 'contacts-workspace'
    | 'filter-and-view-controls'
    | 'accounts-workspace'
    | 'deals-multi-view'
    | 'contact-record'
    | 'dashboard-sample-state'
    | 'analytics-report-library'
    | 'conversations-onboarding'
    | 'sales-sequences-onboarding'
    | 'workflow-template-library'
    | 'admin-settings-catalogue'
    | 'deal-record-detail'
    | 'account-record-overview'
    | 'deal-import-setup'
    | 'roles-and-permissions'
    | 'role-permission-matrix'
    | 'contact-scoring-setup'
    | 'freddy-ai-settings'
    | 'plan-boundary-states'
    | 'screen-loading-state'
  >;
  initialState?: string;
}) {
  const [notice, setNotice] = useState('');
  const [open, setOpen] = useState(initialState !== 'collapsed');

  let content: React.ReactNode;
  switch (kind) {
    case 'pipeline-stage':
      content = (
        <section className={styles.atomicColumn}>
          <header>
            <b>{initialState === 'empty' ? 'Demo' : 'Qualification'}</b>
            <span>{initialState === 'empty' ? 0 : 1}</span>
          </header>
          {initialState === 'empty' ? (
            <p>No deals in this stage</p>
          ) : (
            <button type="button" onClick={() => setNotice('No deal was opened or moved.')}>
              <b>Northstar rollout</b>
              <strong>$5,600</strong>
              <small>Closes in December</small>
            </button>
          )}
        </section>
      );
      break;
    case 'deal-card':
      content = (
        <button
          type="button"
          className={styles.atomicDealCard}
          onClick={() => setNotice('No deal record was opened.')}
        >
          <span>{initialState === 'without-product' ? 'No product' : 'CRM Growth plan'}</span>
          <b>Northstar rollout</b>
          <strong>$5,600</strong>
          <small>New · Closes in December</small>
        </button>
      );
      break;
    case 'loading-skeleton':
      content = (
        <div
          className={`${styles.atomicSkeleton} ${styles[initialState] ?? ''}`}
          aria-label={`${initialState} loading skeleton`}
        >
          <span />
          <span />
          <span />
          <span />
        </div>
      );
      break;
    case 'saved-view-menu':
      content = (
        <aside className={styles.atomicMenu}>
          <header>
            <b>Select a view</b>
            <button type="button" onClick={() => setNotice('No view was created.')}>
              Add new view
            </button>
          </header>
          <input aria-label="Search fictional views" placeholder="Search views" />
          {['All views', 'Default views', 'My views', 'Other views'].map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setNotice(`${item} changed only this fixture.`)}
            >
              {item}
            </button>
          ))}
        </aside>
      );
      break;
    case 'filter-drawer':
      content = (
        <aside className={styles.atomicMenu}>
          <header>
            <b>Add filters</b>
            <button type="button" onClick={() => setNotice('The filter drawer closed locally.')}>
              Close
            </button>
          </header>
          <input aria-label="Find fictional filter fields" placeholder="Add a field to filter" />
          {initialState === 'empty' ? (
            <p>Select a field to build a filter.</p>
          ) : (
            ['Sales owner', 'Territory', 'Lifecycle stage', 'Status', 'Tags'].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setNotice(`${item} was selected locally.`)}
              >
                {item}
              </button>
            ))
          )}
          <button type="button" disabled={initialState !== 'rule'}>
            Apply
          </button>
        </aside>
      );
      break;
    case 'table-toolbar':
      content = (
        <div className={styles.atomicToolbar}>
          <button type="button">Table</button>
          <button type="button" onClick={() => setNotice('No bulk action was started.')}>
            Bulk actions
          </button>
          <button type="button" onClick={() => setNotice('No provider filter changed.')}>
            {initialState === 'filtered' ? '1 filter applied' : 'Filter by'}
          </button>
          <button type="button">All owners</button>
        </div>
      );
      break;
    case 'record-action-bar':
      content = (
        <div className={styles.atomicToolbar}>
          {(initialState === 'account'
            ? ['Call', 'Note', 'Task', 'Meeting', 'Sales activities', 'Add deal']
            : initialState === 'deal'
              ? ['Email', 'Call', 'Note', 'Task', 'Meeting', 'Add product']
              : ['Email', 'Call', 'SMS', 'Task', 'Meeting', 'Add deal']
          ).map((item) => (
            <button type="button" key={item} onClick={() => setNotice(`${item} was not started.`)}>
              {item}
            </button>
          ))}
        </div>
      );
      break;
    case 'field-group':
      content = (
        <section className={styles.atomicFieldGroup}>
          <header>
            <b>Basic information</b>
            <label>
              <input type="checkbox" readOnly checked={initialState === 'empty'} /> Show empty
              fields
            </label>
          </header>
          {[
            ['Account', 'Northstar Works'],
            ['Owner', 'Noah Rivera'],
            ['Territory', initialState === 'empty' ? 'Click to add' : 'East'],
          ].map(([label, value]) => (
            <div key={label}>
              <small>{label}</small>
              <span>{value}</span>
            </div>
          ))}
        </section>
      );
      break;
    case 'activity-card':
      content = (
        <article className={styles.atomicActivity}>
          <small>October 05, 2026</small>
          <button
            type="button"
            onClick={() => setNotice('No conversation or composer was opened.')}
          >
            <b>Renewal planning notes</b>
            <span>
              {initialState === 'replied' ? 'Replied · two days ago' : 'Created · three days ago'}
            </span>
          </button>
        </article>
      );
      break;
    case 'import-dropzone':
      content = (
        <button
          type="button"
          className={styles.dropzone}
          disabled={initialState === 'disabled'}
          onClick={() => setNotice('No file picker or upload was opened.')}
        >
          Drop or upload your file here<small>.csv and .xlsx · maximum 5 MB</small>
        </button>
      );
      break;
    case 'required-fields-popover':
      content = (
        <div className={styles.atomicPopover}>
          <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
            Required fields
          </button>
          {open && (
            <div>
              <b>Fill all these required fields</b>
              <span>Deal name</span>
              <span>Deal value</span>
            </div>
          )}
        </div>
      );
      break;
    case 'duplicate-option':
      content = (
        <div className={styles.optionCard}>
          <label>
            <input type="checkbox" disabled readOnly /> Skip duplicates automatically
          </label>
          <span>Match using Freshsales ID</span>
          <small>Unavailable until a file is chosen.</small>
        </div>
      );
      break;
    case 'license-banner':
      content = (
        <div className={styles.atomicBanner} role="status">
          <b>License usage</b>
          <span>
            {initialState === 'exhausted'
              ? 'No CPQ licenses remain. Manage licenses before assigning another user.'
              : 'One CPQ license is available.'}
          </span>
          <button
            type="button"
            onClick={() => setNotice('No license or subscription action was opened.')}
          >
            Manage licenses
          </button>
        </div>
      );
      break;
    case 'role-row':
      content = (
        <div className={styles.atomicRow}>
          <button type="button" onClick={() => setNotice('No role editor was opened.')}>
            {initialState === 'unassigned' ? 'Sales Manager' : 'Account Admin'}
          </button>
          <span>{initialState === 'unassigned' ? 'Standard' : 'CPQ'}</span>
          <span>{initialState === 'unassigned' ? 'Assign users' : '1 user'}</span>
          <button type="button" onClick={() => setNotice('No role assignment changed.')}>
            Manage
          </button>
        </div>
      );
      break;
    case 'permission-row':
      content = (
        <div className={styles.atomicRow}>
          <b>{initialState === 'disabled' ? 'Access Freddy AI Agent' : 'Contacts'}</b>
          {['View', 'Create', 'Edit', 'Delete'].map((permission) => (
            <label key={permission}>
              <input type="checkbox" checked disabled readOnly />
              {permission}
            </label>
          ))}
        </div>
      );
      break;
    case 'signal-chip':
      content = (
        <button
          type="button"
          className={styles.atomicChip}
          onClick={() => setNotice('No scoring signal was added.')}
        >
          {initialState === 'negative' ? 'Email is invalid' : 'Industry type matches'}
        </button>
      );
      break;
    case 'feature-toggle':
      content = (
        <label className={styles.featureToggle}>
          <span>
            <b>
              {initialState === 'disabled'
                ? 'Conversational Actions'
                : initialState === 'off'
                  ? 'Generate SMS content'
                  : 'Freddy Slider'}
            </b>
            <small>Provider outcome remains unverified.</small>
          </span>
          <input
            type="checkbox"
            checked={initialState === 'on'}
            disabled={initialState === 'disabled'}
            readOnly
            onClick={() => setNotice('No Freddy setting was changed.')}
          />
        </label>
      );
      break;
    default:
      content = null;
  }

  return (
    <div className={styles.atomicStage}>
      {content}
      <Guard message={notice} />
    </div>
  );
}

function ScreenLoading({ screen = 'application-shell' }: { screen?: string }) {
  const titles: Record<string, string> = {
    'application-shell': 'Loading Freshsales Suite',
    analytics: 'Loading analytics',
    workflows: 'Loading workflow templates',
    deals: 'Loading deals',
    'contact-activity': 'Loading activity timeline',
    'deal-detail': 'Loading deal details',
  };
  return (
    <div className={styles.loadingScreen} role="status" aria-label={titles[screen] ?? 'Loading'}>
      <aside>
        <span />
        <span />
        <span />
        <span />
      </aside>
      <header>
        <span />
        <span />
      </header>
      <main>
        <h2>{titles[screen] ?? 'Loading'}</h2>
        <div className={styles.screenSkeleton}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </main>
    </div>
  );
}

function DashboardSample() {
  return (
    <Shell title="Dashboards">
      <div className={styles.dashboardTabs}>
        {['Sales essentials', 'Sales', 'Marketing', 'Activities'].map((item) => (
          <button type="button" key={item}>
            {item}
          </button>
        ))}
      </div>
      <div className={styles.dashboard}>
        <article>
          <b>Revenue won</b>
          <strong>$64.1K</strong>
        </article>
        <article>
          <b>Revenue lost</b>
          <strong>$36K</strong>
        </article>
        <article className={styles.chart}>
          <b>Open deal value by stage</b>
          <span>▾</span>
        </article>
        <article className={styles.chart}>
          <b>Contacts by sales owner</b>
          <span>▥</span>
        </article>
      </div>
      <div className={styles.sampleBanner}>
        This is a fictional reconstruction of the provider-labeled sample-image state.
      </div>
    </Shell>
  );
}

function AnalyticsLibrary() {
  const [notice, setNotice] = useState('');
  const reports = [
    'Ecommerce journey report',
    'Page visit analytics',
    'Sales essentials dashboard',
    'Marketing performance report',
  ];
  return (
    <Shell title="Analytics">
      <div className={styles.record}>
        <aside className={styles.recordNav}>
          {[
            'Recent',
            'Favorites',
            'All reports',
            'My reports',
            'Curated reports',
            'Private reports',
            'Shared reports',
          ].map((item) => (
            <button type="button" key={item}>
              {item}
            </button>
          ))}
        </aside>
        <section className={styles.recordBody}>
          <div className={styles.toolbar}>
            <h2>All reports</h2>
            <input aria-label="Search fictional reports" placeholder="Search" />
            <button
              type="button"
              className={styles.primary}
              onClick={() => setNotice('No report was created.')}
            >
              New Report
            </button>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Created by</th>
                <th>Modified</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((item) => (
                <tr key={item}>
                  <td>
                    <button
                      type="button"
                      className={styles.linkButton}
                      onClick={() => setNotice('No report was opened.')}
                    >
                      {item}
                    </button>{' '}
                    <small>Curated</small>
                  </td>
                  <td>System</td>
                  <td>2026-09-30</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
      <Guard message={notice} />
    </Shell>
  );
}

function Conversations() {
  const [notice, setNotice] = useState('');
  return (
    <Shell title="Conversations">
      <div className={styles.record}>
        <aside className={styles.recordNav}>
          <b>Email</b>
          {[
            'Awaiting response',
            'Team inbox',
            'Inbox',
            'Sent',
            'Scheduled',
            'Drafts',
            'Trash',
            'Email templates',
          ].map((item) => (
            <button type="button" key={item}>
              {item}
            </button>
          ))}
        </aside>
        <section className={styles.recordBody}>
          <h2>Connect your Inbox to Freshsales</h2>
          <p>
            Manage work email in a private inbox that stays synchronized with an email provider.
          </p>
          <div className={styles.providerGrid}>
            {['Gmail', 'Microsoft Outlook', 'Zoho', 'Others'].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setNotice('No mailbox connection or OAuth flow was started.')}
              >
                {item}
              </button>
            ))}
          </div>
        </section>
      </div>
      <Guard message={notice} />
    </Shell>
  );
}

function Sequences() {
  const [notice, setNotice] = useState('');
  const templates = [
    ['Reach out to new leads', '5 steps · 10 days'],
    ['Nurture inbound leads', '6 steps · 12 days'],
    ['Reconnect after an event', '6 steps · 10 days'],
  ];
  return (
    <Shell title="Sales Sequences">
      <section className={styles.hero}>
        <h2>Boost two-way engagement and build a high-quality pipeline</h2>
        <div className={styles.sequenceFlow}>
          <span>Lead enters CRM</span>
          <span>Email</span>
          <span>Task</span>
          <span>Phone call</span>
          <span>Lead qualified</span>
        </div>
        <button
          type="button"
          className={styles.primary}
          onClick={() => setNotice('No sequence was created.')}
        >
          Create sales sequence
        </button>
      </section>
      <h2>Start with templates</h2>
      <div className={styles.templateGrid}>
        {templates.map(([name, meta]) => (
          <button
            type="button"
            key={name}
            onClick={() => setNotice('No sequence template was selected.')}
          >
            <b>{name}</b>
            <small>{meta}</small>
          </button>
        ))}
      </div>
      <Guard message={notice} />
    </Shell>
  );
}

function WorkflowTemplates() {
  const [notice, setNotice] = useState('');
  const templates = [
    'Send welcome email to new leads',
    'Send connection request to new leads',
    'Add deal for qualified leads',
    'Follow up on new deals',
  ];
  return (
    <Shell title="Admin Settings › Workflows">
      <div className={styles.record}>
        <aside className={styles.recordNav}>
          {[
            'All templates 25',
            'Get started 6',
            'Qualify leads 12',
            'Close deals 10',
            'Increase productivity 7',
            'All workflows 0',
            'Active 0',
            'Inactive 0',
          ].map((item) => (
            <button type="button" key={item}>
              {item}
            </button>
          ))}
        </aside>
        <section className={styles.recordBody}>
          <p className={styles.info}>
            Your team has used 0 of 100 active workflows available in this fictional plan.
          </p>
          <h2>Start by selecting a workflow template</h2>
          <div className={styles.templateGrid}>
            {templates.map((item) => (
              <article key={item}>
                <b>{item}</b>
                <button
                  type="button"
                  onClick={() => setNotice('No workflow was created or activated.')}
                >
                  Use template
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
      <Guard message={notice} />
    </Shell>
  );
}

function AdminSettings({ initialState = 'people' }: { initialState?: string }) {
  const [section, setSection] = useState(initialState);
  const [notice, setNotice] = useState('');
  const sections: Record<string, string[]> = {
    people: [
      'Contacts',
      'Accounts',
      'Custom modules',
      'Lifecycle stages',
      'Contact scoring',
      'Web forms',
    ],
    deals: [
      'Deals',
      'Sales activities',
      'Pipelines',
      'Activity goals',
      'Quotas and forecasting',
      'Product catalog',
    ],
    teams: ['Workflows', 'Auto-assignment rules', 'Users', 'Roles', 'Territories', 'Sales teams'],
    data: [
      'Contacts import',
      'Accounts import',
      'Deals import',
      'Import history',
      'Salesforce migration',
      'HubSpot migration',
    ],
    channels: [
      'Email templates',
      'Team inbox',
      'Web chat',
      'Phone numbers',
      'Conversation routing',
      'Live translation',
    ],
    integrations: [
      'Marketplace apps',
      'API settings',
      'Tasks and tickets',
      'Conversation webhooks',
    ],
    account: [
      'CPQ settings',
      'Audit log',
      'CRM settings',
      'Plans and billing',
      'Freddy',
      'Battlecards',
    ],
  };
  return (
    <Shell title="Admin Settings">
      <div className={styles.record}>
        <aside className={styles.recordNav}>
          {Object.keys(sections).map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={section === item}
              onClick={() => setSection(item)}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </aside>
        <section className={styles.recordBody}>
          <input aria-label="Search fictional settings" placeholder="Search settings" />
          <h2>{section[0].toUpperCase() + section.slice(1)} settings</h2>
          <div className={styles.settingsGrid}>
            {sections[section].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setNotice(`${item} was not opened or changed.`)}
              >
                <b>{item}</b>
                <small>Inspect this capability without changing provider configuration.</small>
              </button>
            ))}
          </div>
        </section>
      </div>
      <Guard message={notice} />
    </Shell>
  );
}

export function FreshsalesPreview({
  variant,
  initialState,
  disabled = false,
}: FreshsalesPreviewProps) {
  return (
    <div className={styles.frame} aria-disabled={disabled}>
      {variant === 'application-shell' && <SetupGuide />}
      {variant === 'contacts-workspace' && <DataTable kind="contacts" />}
      {variant === 'filter-and-view-controls' && <FilterAndViews initialState={initialState} />}
      {variant === 'accounts-workspace' && <DataTable kind="accounts" />}
      {variant === 'deals-multi-view' && <Deals initialState={initialState} />}
      {variant === 'contact-record' && <ContactRecord initialState={initialState} />}
      {variant === 'dashboard-sample-state' && <DashboardSample />}
      {variant === 'analytics-report-library' && <AnalyticsLibrary />}
      {variant === 'conversations-onboarding' && <Conversations />}
      {variant === 'sales-sequences-onboarding' && <Sequences />}
      {variant === 'workflow-template-library' && <WorkflowTemplates />}
      {variant === 'admin-settings-catalogue' && <AdminSettings initialState={initialState} />}
      {variant === 'deal-record-detail' && <DealRecord />}
      {variant === 'account-record-overview' && <AccountRecord />}
      {variant === 'deal-import-setup' && <DealImport initialState={initialState} />}
      {variant === 'roles-and-permissions' && <RolesCatalogue />}
      {variant === 'role-permission-matrix' && <PermissionMatrix initialState={initialState} />}
      {variant === 'contact-scoring-setup' && <ContactScoring />}
      {variant === 'freddy-ai-settings' && <FreddySettings initialState={initialState} />}
      {variant === 'plan-boundary-states' && <PlanBoundaries initialState={initialState} />}
      {[
        'pipeline-stage',
        'deal-card',
        'loading-skeleton',
        'saved-view-menu',
        'filter-drawer',
        'table-toolbar',
        'record-action-bar',
        'field-group',
        'activity-card',
        'import-dropzone',
        'required-fields-popover',
        'duplicate-option',
        'license-banner',
        'role-row',
        'permission-row',
        'signal-chip',
        'feature-toggle',
      ].includes(variant) && (
        <AtomicComponent
          kind={variant as Parameters<typeof AtomicComponent>[0]['kind']}
          initialState={initialState}
        />
      )}
      {variant === 'screen-loading-state' && <ScreenLoading screen={initialState} />}
    </div>
  );
}

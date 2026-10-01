import { useId, useRef, useState } from 'react';
import { BookOpen, ChevronDown, Folder, Search, Settings, Workflow } from 'lucide-react';
import styles from './freshserviceMore.module.css';

export type MoreVariant =
  | 'sample-dashboard'
  | 'knowledge-workspace'
  | 'article-templates-empty'
  | 'analytics-catalogue'
  | 'report-sort-menu'
  | 'admin-settings-search'
  | 'workflow-inventory';
export interface MoreProps {
  variant?: MoreVariant;
  initialView?: string;
  initialExpanded?: boolean;
  compact?: boolean;
}
type Guard = (action: string) => void;
const knowledgeViews = ['All Articles', 'Article Templates', 'Approvals', 'Articles to review'];
const reportNames = [
  'AI Agent Performance Report',
  'Resource Analysis',
  'Freddy AI Copilot Value Report',
  'OS Analysis',
  'Device Analysis',
  'Journey Requests Overview',
  'Freddy AI Agent Overview',
  'Freddy AI Copilot Overview',
  'eSignature Usage',
  'Solutions Overview',
];
const folders = [
  'Enterprise Service Management',
  'IT Service Management',
  'IT Asset Management',
  'Automations and Admin',
];
const sortFields = [
  'Name',
  'Location',
  'Created By',
  'Created Date',
  'Last Modified by',
  'Last modified date',
];
const adminGroups: Record<string, string[][]> = {
  'Account Settings': [
    ['Account', 'Manage account information and related settings'],
    ['Manage Workspaces', 'Manage workspaces, members and configurations'],
    ['Portals', 'Customize portal settings for agents and requesters'],
    ['Audit Log', 'Keep track of actions and changes'],
  ],
  'User Management': [
    ['Agents', 'Manage service desk agents'],
    ['Roles', 'Manage agent permissions'],
    ['Agent Groups', 'Streamline ticket assignment'],
  ],
  'Service Management': [
    ['Business Hours', 'Define service desk working hours'],
    ['SLA and OLA Policies', 'Define service agreements'],
    ['Field Manager', 'Manage fields for forms and time entries'],
    ['Form Templates', 'Pre-fill repetitive forms'],
  ],
  'Automation & Productivity': [
    ['Workflow Automator', 'Automate processes using a drag-and-drop workflow builder'],
    ['Supervisor Rules', 'Run hourly checks on matching tickets'],
    ['Scenario Automations', 'Perform multiple actions on a ticket'],
    ['Canned Responses', 'Precreate replies for tickets'],
  ],
};

function Empty({
  title,
  detail,
  action,
  guard,
}: {
  title: string;
  detail?: string;
  action?: string;
  guard: Guard;
}) {
  return (
    <div className={styles.empty}>
      <BookOpen size={42} strokeWidth={1.25} aria-hidden="true" />
      <h3>{title}</h3>
      {detail && <p>{detail}</p>}
      {action && (
        <button className={styles.primary} onClick={() => guard(action)}>
          {action}
        </button>
      )}
    </div>
  );
}

function Knowledge({
  initialView,
  onlyTemplates,
  guard,
}: {
  initialView?: string;
  onlyTemplates?: boolean;
  guard: Guard;
}) {
  const [view, setView] = useState(
    initialView && knowledgeViews.includes(initialView)
      ? initialView
      : onlyTemplates
        ? 'Article Templates'
        : 'All Articles'
  );
  return (
    <>
      <header className={styles.header}>
        <BookOpen size={20} />
        <h2>Knowledge Base</h2>
      </header>
      <div className={styles.columns}>
        {!onlyTemplates && (
          <nav className={styles.nav} aria-label="Knowledge base views">
            {knowledgeViews.map((v) => (
              <button
                key={v}
                aria-current={v === view ? 'page' : undefined}
                onClick={() => setView(v)}
              >
                {v}
              </button>
            ))}
            <hr />
            <span>Categories</span>
            {['Default Category', 'IT', 'Trash'].map((v) => (
              <button key={v} onClick={() => guard(v)}>
                {v}
              </button>
            ))}
          </nav>
        )}
        <main className={styles.main}>
          {view === 'All Articles' && (
            <Empty
              title="Create your first article"
              detail="Build a comprehensive knowledge base for your service desk."
              action="Create an Article"
              guard={guard}
            />
          )}
          {view === 'Article Templates' && (
            <>
              <div className={styles.toolbar}>
                <div>
                  <h3>Article Templates</h3>
                  <p>Templates help your team create articles faster.</p>
                </div>
                <button onClick={() => guard('Create Template')}>Create Template</button>
              </div>
              <Empty title="No templates created yet" action="Create Template" guard={guard} />
            </>
          )}
          {view === 'Approvals' && <Empty title="No approvals found." guard={guard} />}
          {view === 'Articles to review' && (
            <>
              <div className={styles.toolbar}>
                <h3>Articles to review</h3>
                <button onClick={() => guard('New Article')}>New Article</button>
              </div>
              <Empty title="No articles to review" guard={guard} />
            </>
          )}
          {(view === 'All Articles' || view === 'Articles to review') && (
            <div className={styles.footer}>
              <button onClick={() => guard('Import articles')}>Import</button>
              {view === 'All Articles' && (
                <button onClick={() => guard('Get started with sample data')}>
                  Get started with sample data
                </button>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

function SortPicker({
  initialExpanded,
  onChange,
}: {
  initialExpanded?: boolean;
  onChange?: (field: string, direction: string) => void;
}) {
  const [open, setOpen] = useState(!!initialExpanded);
  const [field, setField] = useState('Last modified date');
  const [direction, setDirection] = useState('Descending');
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <div
      className={styles.sort}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <button ref={trigger} aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
        Sort by: {field} <ChevronDown size={14} />
      </button>
      {open && (
        <div id={id} className={styles.popover}>
          <fieldset>
            <legend>Sort field</legend>
            {sortFields.map((f) => (
              <label key={f}>
                <input
                  type="radio"
                  name={id + '-field'}
                  checked={field === f}
                  onChange={() => {
                    setField(f);
                    onChange?.(f, direction);
                  }}
                />
                {f}
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>Direction</legend>
            {['Ascending', 'Descending'].map((d) => (
              <label key={d}>
                <input
                  type="radio"
                  name={id + '-direction'}
                  checked={direction === d}
                  onChange={() => {
                    setDirection(d);
                    onChange?.(field, d);
                  }}
                />
                {d}
              </label>
            ))}
          </fieldset>
        </div>
      )}
    </div>
  );
}

function Analytics({ initialView, guard }: { initialView?: string; guard: Guard }) {
  const [view, setView] = useState(initialView === 'Folders' ? 'Folders' : 'Reports');
  const [order, setOrder] = useState({ field: 'Last modified date', direction: 'Descending' });
  const rows = [...(view === 'Folders' ? folders : reportNames)];
  if (order.field === 'Name')
    rows.sort((a, b) => a.localeCompare(b) * (order.direction === 'Ascending' ? 1 : -1));
  return (
    <>
      <header className={styles.header}>
        <h2>Analytics</h2>
        <button className={styles.primary} onClick={() => guard('New Report')}>
          New Report
        </button>
      </header>
      <div className={styles.columns}>
        <nav className={styles.nav} aria-label="Report collections">
          {[
            'Recent',
            'Favorites',
            'All reports',
            'Curated reports',
            'Shared reports',
            'My reports',
          ].map((v) => (
            <button
              key={v}
              aria-current={v === 'All reports' ? 'page' : undefined}
              onClick={() => guard(v)}
            >
              {v}
            </button>
          ))}
          <hr />
          <button onClick={() => guard('Create folder')}>+ Folder</button>
          <button onClick={() => guard('Settings')}>Settings</button>
        </nav>
        <main className={styles.main}>
          <h3>All reports</h3>
          <div className={styles.info}>
            Try using folders to organize your reports.
            <button onClick={() => guard('Create a folder')}>Create a folder</button>
          </div>
          <div className={styles.toolbar}>
            <div className={styles.segment}>
              {['Reports', 'Folders'].map((v) => (
                <button key={v} aria-pressed={v === view} onClick={() => setView(v)}>
                  {v}
                </button>
              ))}
            </div>
            <SortPicker onChange={(field, direction) => setOrder({ field, direction })} />
          </div>
          <p className={styles.caption}>
            Observed vendor catalogue names. Dates below are fictional fixture values. Only Name
            sorting is demonstrated locally.
          </p>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  {view === 'Reports' && <th>Location</th>}
                  <th>Created By</th>
                  <th>Created Date</th>
                  <th>Last Modified by</th>
                  <th>Last modified date</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((name) => (
                  <tr key={name}>
                    <td>
                      <button className={styles.textButton} onClick={() => guard(name)}>
                        {view === 'Folders' && <Folder size={15} />}
                        {name}
                      </button>
                    </td>
                    {view === 'Reports' && <td>Curated</td>}
                    <td>System</td>
                    <td>01 Jan 2026</td>
                    <td>System</td>
                    <td>01 Jan 2026</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.footer}>
            <span>{rows.length} catalogue entries</span>
            <button onClick={() => guard('Next report page')}>Next page</button>
          </div>
        </main>
      </div>
    </>
  );
}

function Admin({ guard }: { guard: Guard }) {
  const [query, setQuery] = useState('');
  const filtered = Object.entries(adminGroups)
    .map(
      ([group, items]) =>
        [
          group,
          items.filter((i) => i.join(' ').toLowerCase().includes(query.toLowerCase())),
        ] as const
    )
    .filter(([, items]) => items.length);
  return (
    <>
      <header className={styles.header}>
        <Settings size={20} />
        <h2>IT administration</h2>
      </header>
      <main className={styles.main}>
        <div className={styles.search}>
          <Search size={17} />
          <label className={styles.srOnly} htmlFor="freshservice-admin-query">
            Search admin settings
          </label>
          <input
            id="freshservice-admin-query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search admin settings"
          />
          <button onClick={() => setQuery('')}>Clear</button>
        </div>
        <p className={styles.caption}>
          Selected Care-relevant settings from the observed administration catalogue.
        </p>
        {filtered.length ? (
          filtered.map(([group, items]) => (
            <section key={group} className={styles.adminGroup}>
              <h3>{group}</h3>
              <div className={styles.grid}>
                {items.map(([name, description]) => (
                  <button key={name} className={styles.setting} onClick={() => guard(name)}>
                    <span className={styles.settingIcon}>
                      <Settings size={18} />
                    </span>
                    <span>
                      <strong>{name}</strong>
                      <small>{description}</small>
                    </span>
                  </button>
                ))}
              </div>
            </section>
          ))
        ) : (
          <Empty title="No matching settings in this local subset" guard={guard} />
        )}
      </main>
    </>
  );
}

function Workflows({ initialView, guard }: { initialView?: string; guard: Guard }) {
  const [view, setView] = useState(
    initialView === 'Event Based Workflows' ? initialView : 'Subflows'
  );
  return (
    <>
      <header className={styles.header}>
        <Workflow size={20} />
        <h2>Workflow Automator</h2>
        <button onClick={() => guard('Create workflow')}>Create</button>
      </header>
      <div className={styles.columns}>
        <nav className={styles.nav} aria-label="Workflow views">
          <strong>Tickets</strong>
          {['Event Based Workflows', 'Scheduled Workflows', 'Subflows'].map((v) => (
            <button
              key={v}
              aria-current={v === view ? 'page' : undefined}
              onClick={() =>
                v === 'Scheduled Workflows' ? guard('Scheduled workflow details') : setView(v)
              }
            >
              {v}
            </button>
          ))}
          <hr />
          {['Problems', 'Changes', 'Releases', 'Alerts', 'Tasks', 'Inventory', 'Trash'].map((v) => (
            <button key={v} onClick={() => guard(v)}>
              {v}
            </button>
          ))}
        </nav>
        <main className={styles.main}>
          <h3>Tickets - {view}</h3>
          {view === 'Subflows' ? (
            <Empty
              title="No subflows created yet."
              detail="Subflows are reusable workflow steps that you can create once and use across multiple workflows."
              action="Create subflow"
              guard={guard}
            />
          ) : (
            <>
              <p className={styles.caption}>
                Local subset with fictional authors. The provider showed nine inactive event
                workflows. No activation was tested.
              </p>
              {[
                'Promote the self service portal',
                'Multistage Approval',
                'Prioritize VIP tickets',
              ].map((name) => (
                <div className={styles.workflowRow} key={name}>
                  <div>
                    <button className={styles.textButton} onClick={() => guard(name)}>
                      {name}
                    </button>
                    <p>Updated by Example Admin · fictional fixture</p>
                  </div>
                  <button
                    role="switch"
                    aria-checked="false"
                    aria-label={'Activate ' + name}
                    onClick={() => guard('Activate ' + name)}
                  >
                    <span className={styles.switchTrack} />
                    Inactive
                  </button>
                </div>
              ))}
            </>
          )}
        </main>
      </div>
    </>
  );
}

export function FreshserviceMore({
  variant = 'knowledge-workspace',
  initialView,
  initialExpanded,
  compact = false,
}: MoreProps) {
  const [notice, setNotice] = useState(
    'Local reconstruction of observed Freshservice screens. No provider requests.'
  );
  const guard: Guard = (action) =>
    setNotice(action + ': local demonstration only. No request was sent.');
  return (
    <section className={styles.root} data-compact={compact}>
      <div className={styles.eyebrow}>FRESHSERVICE REFERENCE</div>
      {variant === 'sample-dashboard' && (
        <>
          <header className={styles.header}>
            <h2>Sample Dashboard</h2>
          </header>
          <div className={styles.info}>
            <span>This dashboard is built on sample data.</span>
            <button onClick={() => guard('How it works')}>How it works</button>
            <button onClick={() => guard('Dismiss sample dashboard')}>Dismiss</button>
          </div>
          <div
            className={styles.sample}
            role="img"
            aria-label="Fictional dashboard illustration, no operational metrics"
          >
            <div className={styles.skeletonCards}>
              {[0, 1, 2, 3].map((i) => (
                <div key={i}>
                  <span />
                  <strong>—</strong>
                </div>
              ))}
            </div>
            <div className={styles.chart}>
              {[35, 65, 45, 85, 55, 70, 40, 60].map((h, i) => (
                <div key={i} style={{ height: h + '%' }} />
              ))}
            </div>
            <p>Fictional illustration · The provider exposed a static Dashboard preview image.</p>
          </div>
        </>
      )}
      {(variant === 'knowledge-workspace' || variant === 'article-templates-empty') && (
        <Knowledge
          initialView={initialView}
          onlyTemplates={variant === 'article-templates-empty'}
          guard={guard}
        />
      )}
      {variant === 'analytics-catalogue' && <Analytics initialView={initialView} guard={guard} />}
      {variant === 'report-sort-menu' && (
        <main className={styles.sortDemo}>
          <h2>Report sorting</h2>
          <p>Observed options with local selection. Provider ordering was not changed.</p>
          <SortPicker initialExpanded={initialExpanded} />
        </main>
      )}
      {variant === 'admin-settings-search' && <Admin guard={guard} />}
      {variant === 'workflow-inventory' && <Workflows initialView={initialView} guard={guard} />}
      <div className={styles.notice} role="status">
        {notice}
      </div>
    </section>
  );
}

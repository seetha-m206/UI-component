import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  Search,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  BarChart3,
  FileText,
  Filter,
  RefreshCw,
  Maximize2,
  Workflow,
  Users,
  Sparkles,
  CalendarDays,
} from 'lucide-react';
import { salesforceRemainingComponents } from './remainingCatalogue';
import s from './SalesforceRemaining.module.css';

interface Props {
  variant: string;
  initialState?: string;
  disabled?: boolean;
}
type Guard = (action: string) => void;
const BoundaryMessage = createContext('');
const reportNames = [
  'Open Cases · Example',
  'Article Views · Example',
  'Closed Cases · Example',
  'Service Metrics · Example',
];
const connectors = [
  'Maple CRM',
  'Pine Books',
  'Northstar Issues',
  'Cedar Support',
  'Harbor Sheets',
  'Example AI',
];
const flowTypes = [
  'Record-Triggered Flow',
  'Screen Flow',
  'Schedule-Triggered Flow',
  'Autolaunched Flow (No Trigger)',
];
const actionTypes = [
  'All',
  'Standard Actions',
  'API',
  'Batch Generate Prompt Response',
  'External Connector',
  'Flows',
  'Generate Prompt Response',
  'Get Einstein Retriever Results',
  'Lwc Local Action',
  'Quick Actions',
  'Salesforce API Platform',
  'Send Notification (Beta)',
  'Slack Actions',
];
const accountTypes = [
  '--None--',
  'Analyst',
  'Competitor',
  'Customer',
  'Integrator',
  'Investor',
  'Partner',
  'Press',
  'Prospect',
  'Reseller',
  'Other',
];

function Button({
  children,
  onClick,
  primary = false,
  label,
  disabled = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  primary?: boolean;
  label?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      className={primary ? s.primary : undefined}
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className={s.field}>
      <span>{label}</span>
      {children}
    </label>
  );
}
function Select({
  label,
  options,
  value,
  change,
}: {
  label: string;
  options: readonly string[];
  value?: string;
  change?: (value: string) => void;
}) {
  return (
    <Field label={label}>
      <select
        aria-label={label.replace('*', '')}
        value={value}
        onChange={change ? (e) => change(e.target.value) : undefined}
        defaultValue={value === undefined ? options[0] : undefined}
      >
        {options.map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
    </Field>
  );
}
function Input({
  label,
  placeholder = '',
  type = 'text',
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <Field label={label}>
      <input aria-label={label.replace('*', '')} type={type} placeholder={placeholder} />
    </Field>
  );
}
function SearchField({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: (value: string) => void;
}) {
  return (
    <label className={s.search}>
      <Search size={16} aria-hidden="true" />
      <input
        aria-label={label}
        placeholder={label}
        value={value}
        onChange={(e) => change(e.target.value)}
      />
    </label>
  );
}
function Card({
  title,
  children,
  actions,
}: {
  title?: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className={s.card}>
      {title && (
        <header className={s.row}>
          <h3>{title}</h3>
          {actions && <div className={s.actions}>{actions}</div>}
        </header>
      )}
      {children}
    </section>
  );
}
function Sheet({
  title,
  close,
  children,
  footer,
}: {
  title: string;
  close: () => void;
  children: ReactNode;
  footer?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const boundaryMessage = useContext(BoundaryMessage);
  useEffect(() => {
    const prior = document.activeElement as HTMLElement | null;
    ref.current
      ?.querySelector<HTMLElement>(
        'button:not(:disabled),input:not(:disabled),select:not(:disabled)'
      )
      ?.focus();
    return () => prior?.focus();
  }, []);
  return (
    <div className={s.scrim}>
      <div
        className={s.sheet}
        role="dialog"
        aria-modal="true"
        aria-labelledby={id}
        ref={ref}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            close();
          }
          if (e.key === 'Tab') {
            const items = Array.from(ref.current?.querySelectorAll<HTMLElement>('*') ?? []).filter(
              (element) =>
                element.matches('button,input,select,textarea,a[href]') &&
                !element.matches(':disabled')
            );
            const first = items[0],
              last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last?.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first?.focus();
            }
          }
        }}
      >
        <header className={s.sheetHeader}>
          <h2 id={id}>{title}</h2>
          <Button label={`Close ${title}`} onClick={close}>
            <X size={18} />
          </Button>
        </header>
        <div className={s.sheetBody}>
          {boundaryMessage && (
            <p className={s.boundaryNotice} role="note">
              Local example only. This action does not contact Salesforce.
            </p>
          )}
          {children}
        </div>
        {footer && <footer className={s.footer}>{footer}</footer>}
      </div>
    </div>
  );
}
function Table({
  columns,
  rows = [],
  label,
  empty = 'No items to display.',
}: {
  columns: string[];
  rows?: ReactNode[][];
  label: string;
  empty?: string;
}) {
  return (
    <div className={s.tableWrap}>
      <table aria-label={label}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {rows.length === 0 && (
        <div className={s.empty}>
          <div className={s.emptyArt}>
            <FileText size={34} />
          </div>
          <h3>{empty}</h3>
          <p>The inspected view was empty.</p>
        </div>
      )}
    </div>
  );
}
function Menu({
  items,
  choose,
  title = 'Available actions',
}: {
  items: readonly string[];
  choose: (item: string) => void;
  title?: string;
}) {
  return (
    <div className={s.menu} role="group" aria-label={title}>
      {items.map((item) => (
        <button type="button" key={item} onClick={() => choose(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}
function ToggleTabs({
  items,
  value,
  change,
}: {
  items: string[];
  value: string;
  change: (value: string) => void;
}) {
  return (
    <div className={s.tabs} aria-label="Local view choices">
      {items.map((x) => (
        <button key={x} type="button" aria-pressed={x === value} onClick={() => change(x)}>
          {x}
        </button>
      ))}
    </div>
  );
}
function PageTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className={s.pageTitle}>
      <span className={s.objectIcon}>
        <BarChart3 size={25} />
      </span>
      <div>
        {eyebrow && <small>{eyebrow}</small>}
        <h2>{title}</h2>
      </div>
      <div className={s.actions}>{children}</div>
    </header>
  );
}

function Messaging({ variant, guard }: { variant: string; guard: Guard }) {
  const [picker, setPicker] = useState(variant === 'messaging-view-picker');
  const [query, setQuery] = useState('');
  return (
    <Card>
      <PageTitle eyebrow="Messaging Sessions" title="Recently Viewed">
        <Button label="Select messaging list view" onClick={() => setPicker(!picker)}>
          <ChevronDown size={17} />
        </Button>
      </PageTitle>
      {picker && (
        <div className={s.popover}>
          <SearchField label="Search lists" value={query} change={setQuery} />
          <Menu
            items={
              'Recently Viewed'.toLowerCase().includes(query.toLowerCase())
                ? ['✓ Recently Viewed']
                : []
            }
            choose={() => setPicker(false)}
            title="Messaging views"
          />
        </div>
      )}
      <div className={s.toolbar}>
        <span>0 items · Recently viewed sessions</span>
        <Button label="Refresh messaging" onClick={() => guard('Refresh')}>
          <RefreshCw size={15} />
        </Button>
        <Button disabled>Charts</Button>
        <Button disabled>Filters</Button>
      </div>
      <Table
        label="Messaging sessions"
        columns={[
          'Session Name',
          'Channel',
          'User',
          'Owner',
          'Platform',
          'Status',
          'Start Time',
          'End Time',
        ]}
        empty="Connect with customers across channels"
      />
    </Card>
  );
}

function Analytics({ variant, guard }: { variant: string; guard: Guard }) {
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('All Items');
  const [recent, setRecent] = useState('Recents');
  const [filter, setFilter] = useState(
    variant === 'analytics-creator-filter'
      ? 'creator'
      : variant === 'analytics-date-filter'
        ? 'date'
        : ''
  );
  const [creator, setCreator] = useState('Anybody');
  const [date, setDate] = useState('Any Date');
  const [menu, setMenu] = useState(
    variant === 'analytics-create-menu'
      ? 'create'
      : variant === 'analytics-asset-actions'
        ? 'asset'
        : variant === 'dashboard-actions'
          ? 'dashboard'
          : ''
  );
  const [dialog, setDialog] = useState(
    variant === 'report-type-chooser'
      ? 'report'
      : variant === 'dashboard-expanded-widget'
        ? 'widget'
        : ''
  );
  const [category, setCategory] = useState('All');
  const [reportType, setReportType] = useState('');
  const [drawer, setDrawer] = useState(variant === 'report-filter-drawer');
  const [cardOffset, setCardOffset] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const assets = reportNames.map((name, i) => ({
    name,
    type: i === 3 ? 'Dashboard' : 'Report',
    owner: i % 2 ? 'Jordan Lee' : 'Alex Morgan',
  }));
  const visibleAssets = assets.filter(
    (a) =>
      a.name.toLowerCase().includes(query.toLowerCase()) &&
      (tab === 'All Items' ||
        (tab === 'Reports' && a.type === 'Report') ||
        (tab === 'Dashboards' && a.type === 'Dashboard')) &&
      (creator === 'Anybody' ||
        (creator === 'Not Me' ? a.owner !== 'Alex Morgan' : a.owner === 'Alex Morgan'))
  );
  const create = (
    <Button onClick={() => setMenu(menu === 'create' ? '' : 'create')}>
      Create
      <ChevronDown size={14} />
    </Button>
  );
  const createMenu = menu === 'create' && (
    <Menu
      title="Create analytics asset"
      items={['Lightning Report', 'Lightning Folder', 'Lightning Dashboard']}
      choose={(x) => (x === 'Lightning Report' ? (setDialog('report'), setMenu('')) : guard(x))}
    />
  );
  const reportMenu = menu === 'asset' && (
    <Menu
      items={[
        'Share',
        'Add to Collections',
        'Edit',
        'Move',
        'Subscribe',
        'Export',
        'Delete',
        'Add To Dashboard',
        'Favorite',
        'Details',
      ]}
      choose={guard}
    />
  );
  const dashboardMenu = menu === 'dashboard' && (
    <Menu
      items={['Download', 'Save Dashboard As', 'New Dashboard', 'Change Owner', 'Delete Dashboard']}
      choose={guard}
    />
  );
  const filters = (
    <div className={s.toolbar}>
      <Button onClick={() => setFilter(filter === 'creator' ? '' : 'creator')}>
        Created By: {creator}
        <ChevronDown size={13} />
      </Button>
      <Button onClick={() => setFilter(filter === 'date' ? '' : 'date')}>
        Created On: {date}
        <ChevronDown size={13} />
      </Button>
      <Button onClick={() => guard('Last Modified By filter')}>
        Last Modified By
        <ChevronDown size={13} />
      </Button>
      <Button onClick={() => guard('Last Modified On filter')}>
        Last Modified On
        <ChevronDown size={13} />
      </Button>
    </div>
  );
  const filterPanel = filter && (
    <div className={s.popover}>
      {filter === 'creator' && (
        <SearchField label="Search creators" value={query} change={setQuery} />
      )}
      <Menu
        title={filter === 'creator' ? 'Creator choices' : 'Date choices'}
        items={
          filter === 'creator'
            ? ['Anybody', 'Not Me', 'Alex Morgan (Me)'].filter((x) =>
                x.toLowerCase().includes(query.toLowerCase())
              )
            : [
                'Any Date',
                'Last 7 Days',
                'Last 30 Days',
                'Last 90 Days',
                'Last 180 Days',
                'Custom Range',
              ]
        }
        choose={(x) => {
          if (filter === 'creator') setCreator(x);
          else if (x === 'Custom Range') {
            guard('Custom Range editor');
            return;
          } else setDate(x);
          setFilter('');
        }}
      />
    </div>
  );
  const recents = (
    <Card title="My Analytics">
      <ToggleTabs items={['Recents', 'Favorites']} value={recent} change={setRecent} />
      <Table
        label="My analytics"
        columns={['Title', 'Last Viewed', 'Last Modified By', 'Last Modified On']}
        rows={
          recent === 'Favorites'
            ? []
            : [
                [<strong key="today">Today</strong>, '', '', ''],
                ...assets.slice(0, 2).map((a) => [
                  <button
                    key={a.name}
                    type="button"
                    className={s.link}
                    onClick={() => guard('Open ' + a.name)}
                  >
                    {a.name}
                  </button>,
                  '9:00 am',
                  a.owner,
                  'Example date',
                ]),
                [<strong key="last-week">Last 7 days</strong>, '', '', ''],
                ...assets.slice(2).map((a) => [a.name, 'Example date', a.owner, 'Example date']),
              ]
        }
      />
    </Card>
  );
  const recommendation = (
    <Card
      title="For You"
      actions={
        <>
          <Button
            label="Previous recommendation"
            onClick={() => setCardOffset((cardOffset + 2) % 3)}
          >
            <ChevronLeft size={16} />
          </Button>
          <Button label="Next recommendation" onClick={() => setCardOffset((cardOffset + 1) % 3)}>
            <ChevronRight size={16} />
          </Button>
        </>
      }
    >
      <div className={s.threeCards}>
        {['Recently Updated', 'Shared With Me', 'Created By Me']
          .map((_, i, arr) => arr[(i + cardOffset) % 3])
          .map((label, i) => (
            <section className={s.miniCard} key={label}>
              <h3>{label}</h3>
              <small>{i === 0 ? 'New or changed in the last 7 days' : 'Fictional assets'}</small>
              {assets.slice(i === 0 ? 0 : 1, i === 0 ? 3 : 4).map((a) => (
                <div className={s.assetRow} key={a.name}>
                  <span className={s.reportIcon}>
                    <FileText size={18} />
                  </span>
                  <div>
                    <button
                      type="button"
                      className={s.link}
                      onClick={() => guard('Open ' + a.name)}
                    >
                      {a.name}
                    </button>
                    <small>Created on an example date</small>
                  </div>
                  <Button
                    key={a.name + 'actions'}
                    label={`Actions for ${a.name}`}
                    onClick={() => setMenu('asset')}
                  >
                    <ChevronDown size={12} />
                  </Button>
                </div>
              ))}
              <Button onClick={() => guard('View All recommendation assets')}>View All</Button>
            </section>
          ))}
      </div>
      {reportMenu}
    </Card>
  );
  const browser = (
    <Card>
      <PageTitle title="Browse">{create}</PageTitle>
      {createMenu}
      <SearchField label="Search reports, dashboards, and more" value={query} change={setQuery} />
      <ToggleTabs
        items={['All Items', 'Dashboards', 'Reports', 'Folders']}
        value={tab}
        change={setTab}
      />
      {filters}
      {filterPanel}
      <p>
        {selected.length} items selected · Limit 50 · {visibleAssets.length} fictional items
      </p>
      <Table
        label="Analytics assets"
        columns={['Select', 'Title', 'Type', 'Location', 'Created By', 'Created On', 'Actions']}
        rows={visibleAssets.map((a) => [
          <input
            key={a.name + 'select'}
            aria-label={`Select ${a.name}`}
            type="checkbox"
            checked={selected.includes(a.name)}
            onChange={(e) =>
              setSelected(
                e.target.checked ? [...selected, a.name] : selected.filter((x) => x !== a.name)
              )
            }
          />,
          a.name,
          a.type,
          'Example Service',
          a.owner,
          'Example date',
          <Button
            key={a.name + 'actions'}
            label={`Actions for ${a.name}`}
            onClick={() => setMenu('asset')}
          >
            <ChevronDown size={14} />
          </Button>,
        ])}
      />
      {reportMenu}
    </Card>
  );
  const widgets = [
    'Open Cases',
    'Cases Closed MTD',
    'Open Cases by Priority',
    'Average Age of Open Cases',
    'Average Handling Time',
    'Cases Closed MTD by Agent',
  ];
  const dashboard = (
    <Card>
      <PageTitle eyebrow="Dashboard" title="Service KPIs Dashboard">
        {['Share', 'Refresh', 'Edit', 'Subscribe'].map((a) => (
          <Button key={a} onClick={() => guard(a)}>
            {a}
          </Button>
        ))}
        <Button
          label="Dashboard more actions"
          onClick={() => setMenu(menu === 'dashboard' ? '' : 'dashboard')}
        >
          <MoreHorizontal size={18} />
        </Button>
      </PageTitle>
      {dashboardMenu}
      <p className={s.muted}>Viewing as Alex Morgan · Fictional local fixture</p>
      <div className={s.threeCards}>
        {widgets.map((w, i) => (
          <section className={s.widget} key={w}>
            <div className={s.row}>
              <h3>{w}</h3>
              <Button label={`Expand ${w}`} onClick={() => setDialog('widget')}>
                <Maximize2 size={14} />
              </Button>
            </div>
            {i < 2 ? (
              <div className={s.gauge}>
                <span>0</span>
              </div>
            ) : (
              <div className={s.chartEmpty}>
                <span>No data</span>
              </div>
            )}
            <Button onClick={() => guard('View Report')}>View Report</Button>
          </section>
        ))}
      </div>
    </Card>
  );
  const viewer = (
    <Card>
      <PageTitle eyebrow="Report: Cases" title="Closed Cases">
        <Button onClick={() => setDrawer(!drawer)}>
          Filters
          <Filter size={14} />
        </Button>
        {['Refresh', 'Edit'].map((a) => (
          <Button key={a} onClick={() => guard(a)}>
            {a}
          </Button>
        ))}
      </PageTitle>
      <div className={s.toolbar}>
        {['Add to Collections', 'Favorite', 'Share', 'Enable Field Editing', 'Add Chart'].map(
          (a) => (
            <Button key={a} onClick={() => guard(a)}>
              {a}
            </Button>
          )
        )}
      </div>
      <div className={s.split}>
        <div className={s.grow}>
          <p>Total Records</p>
          <div className={s.metric}>0</div>
          <div className={s.empty}>
            <h3>No Results</h3>
            <p>No records returned for the captured report.</p>
          </div>
          <div className={s.toolbar}>
            {['Row Counts', 'Detail Rows', 'Subtotals', 'Grand Total'].map((x, i) => (
              <label key={x}>
                <input type="checkbox" defaultChecked={i < 2} disabled={i > 1} />
                {x}
              </label>
            ))}
          </div>
        </div>
        {drawer && (
          <aside className={s.drawer}>
            <header className={s.row}>
              <h3>Filters</h3>
              <Button label="Close report filters" onClick={() => setDrawer(false)}>
                <X size={16} />
              </Button>
            </header>
            {[
              'Show Me: All cases',
              'Opened Date: All Time',
              'Units: Hours',
              'Status equals Closed',
            ].map((x) => (
              <button
                className={s.filterChip}
                key={x}
                type="button"
                onClick={() => guard('Edit ' + x)}
              >
                {x}
              </button>
            ))}
          </aside>
        )}
      </div>
    </Card>
  );
  let content: ReactNode;
  if (variant === 'analytics-workspace')
    content = (
      <div className={s.workspace}>
        <nav className={s.sidebar} aria-label="Analytics">
          <h3>Analytics</h3>
          {['Home', 'Browse', 'Favorites'].map((x) => (
            <button
              key={x}
              type="button"
              aria-current={
                recent === x || (x === 'Home' && recent === 'Recents') ? 'page' : undefined
              }
              onClick={() => setRecent(x)}
            >
              {x}
            </button>
          ))}
          <h3>Collections</h3>
          {['Sales', 'Service'].map((x) => (
            <Button key={x} onClick={() => guard('Open ' + x + ' collection')}>
              {x}
            </Button>
          ))}
        </nav>
        <div className={s.grow}>
          <Card title="Analytics" actions={create}>
            <SearchField
              label="Search reports, dashboards, and more"
              value={query}
              change={setQuery}
            />
            {createMenu}
          </Card>
          {recent === 'Browse' ? (
            browser
          ) : recent === 'Favorites' ? (
            <Card title="Favorites">
              <p>No fictional favorites.</p>
            </Card>
          ) : (
            <>
              {recommendation}
              {recents}
            </>
          )}
        </div>
      </div>
    );
  else if (variant === 'analytics-recommendations') content = recommendation;
  else if (variant === 'analytics-recents') content = recents;
  else if (variant === 'analytics-browser') content = browser;
  else if (variant === 'analytics-creator-filter' || variant === 'analytics-date-filter')
    content = (
      <Card title="Browse filters">
        {filters}
        {filterPanel}
        <p className={s.muted}>Selections are local fixture state.</p>
      </Card>
    );
  else if (variant === 'analytics-create-menu' || variant === 'report-type-chooser')
    content = (
      <Card title="Analytics" actions={create}>
        {createMenu}
        <p>Reports, dashboards and folders</p>
        <Button onClick={() => setDialog('report')}>Choose report type</Button>
      </Card>
    );
  else if (variant === 'analytics-asset-actions')
    content = (
      <Card title="Example report">
        <Button onClick={() => setMenu(menu ? '' : 'asset')}>
          Report actions
          <ChevronDown size={14} />
        </Button>
        {reportMenu}
      </Card>
    );
  else if (variant === 'service-collection')
    content = (
      <Card>
        <PageTitle title="Service collection">
          {['Pin', 'Share', 'Add', 'Collection Actions'].map((x) => (
            <Button key={x} onClick={() => guard(x)}>
              {x}
            </Button>
          ))}
        </PageTitle>
        <p>4 fictional items · Updated on an example date</p>
        <div className={s.threeCards}>
          {assets.map((a) => (
            <section className={s.miniCard} key={a.name}>
              <div className={s.thumbnail}>
                <BarChart3 size={46} />
              </div>
              <div className={s.row}>
                <h3>{a.name}</h3>
                <Button
                  key={a.name + 'actions'}
                  label={`Actions for ${a.name}`}
                  onClick={() => setMenu('asset')}
                >
                  <MoreHorizontal size={18} />
                </Button>
              </div>
              <small>Example Service Reports</small>
            </section>
          ))}
        </div>
        {reportMenu}
      </Card>
    );
  else if (variant === 'case-report-viewer' || variant === 'report-filter-drawer') content = viewer;
  else if (variant === 'dashboard-actions')
    content = (
      <Card title="Service KPIs Dashboard">
        <Button onClick={() => setMenu(menu ? '' : 'dashboard')}>
          More actions
          <ChevronDown size={14} />
        </Button>
        {dashboardMenu}
      </Card>
    );
  else content = dashboard;
  return (
    <>
      {variant === 'dashboard-expanded-widget' ? null : content}
      {dialog === 'report' && (
        <Sheet
          title="Choose Report Type"
          close={() => setDialog('')}
          footer={
            <>
              <Button onClick={() => setDialog('')}>Cancel</Button>
              <Button primary onClick={() => guard('Continue with report type')}>
                Continue
              </Button>
            </>
          }
        >
          <SearchField label="Search Report Types" value={query} change={setQuery} />
          <div className={s.split}>
            <nav className={s.typeNav} aria-label="Report categories">
              {[
                'All',
                'Data Cloud',
                'Accounts & Contacts',
                'Opportunities',
                'Customer Support Reports',
                'Leads',
                'Campaigns',
                'Activities',
                'Contracts and Orders',
                'Other',
              ].map((x) => (
                <button
                  key={x}
                  type="button"
                  aria-pressed={category === x}
                  onClick={() => setCategory(x)}
                >
                  {x}
                </button>
              ))}
            </nav>
            <div className={s.grow}>
              <h3>{category}</h3>
              {(category === 'Accounts & Contacts'
                ? ['Accounts', 'Contacts & Accounts']
                : [
                    'Cases',
                    'Case Lifecycle',
                    'Cases with Emails',
                    'Cases with Articles',
                    'Case History',
                    'Article Views',
                    'Article Votes',
                  ]
              )
                .filter((x) => x.toLowerCase().includes(query.toLowerCase()))
                .map((x) => (
                  <button
                    type="button"
                    className={s.typeRow}
                    key={x}
                    aria-pressed={reportType === x}
                    onClick={() => setReportType(x)}
                  >
                    <FileText size={20} />
                    {x}
                    <span>{reportType === x ? 'Selected locally' : ''}</span>
                  </button>
                ))}
            </div>
          </div>
        </Sheet>
      )}
      {dialog === 'widget' && (
        <Sheet
          title="Open Cases"
          close={() => setDialog('')}
          footer={
            <>
              <Button onClick={() => guard('Previous widget')}>Previous</Button>
              <Button onClick={() => guard('Next widget')}>Next</Button>
              <Button onClick={() => guard('Download Chart')}>Download Chart</Button>
              <Button onClick={() => setDialog('')}>Cancel</Button>
            </>
          }
        >
          <p>Record Count</p>
          <div className={s.largeGauge}>
            <span>0</span>
            <small>0% of 0</small>
          </div>
          <p className={s.muted}>Example timestamp · Viewing as Alex Morgan</p>
          <Button onClick={() => guard('View Report')}>View Report</Button>
        </Sheet>
      )}
    </>
  );
}

function Automation({ variant, guard }: { variant: string; guard: Guard }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');
  const [section, setSection] = useState(
    variant === 'action-parameter-tables' ? 'Parameters' : 'Usage'
  );
  const [drawer, setDrawer] = useState(variant === 'monitor-filter-drawer');
  const [modal, setModal] = useState(
    variant === 'connector-catalogue'
      ? 'connectors'
      : ['automation-type-chooser', 'triggered-automation-catalogue'].includes(variant)
        ? 'flow'
        : ''
  );
  const [category, setCategory] = useState(
    variant === 'triggered-automation-catalogue' ? 'Triggered' : 'Frequently Used'
  );
  const filteredConnectors = connectors.filter((x) =>
    x.toLowerCase().includes(query.toLowerCase())
  );
  const integrationCards = (
    <div className={s.connectorGrid}>
      {filteredConnectors.map((x, i) => (
        <button type="button" className={s.connector} key={x} onClick={() => guard('Connect ' + x)}>
          <span className={s.connectorIcon}>{x[0]}</span>
          <strong>{x}</strong>
          {i % 3 === 1 && <small className={s.badge}>Beta</small>}
          <p>Fictional connector for example records and workflows.</p>
        </button>
      ))}
    </div>
  );
  const actionRows = [
    ['Lookup Record', 'External Connector', 'Find a fictional record', 'Example.lookup'],
    ['Create Task', 'Standard Actions', 'Create an example task', 'Example.createTask'],
    ['Route Case', 'Flows', 'Example routing definition', 'Example.route'],
  ].filter(
    (r) =>
      r.join(' ').toLowerCase().includes(query.toLowerCase()) && (type === 'All' || type === r[1])
  );
  const actionSelector = (
    <Select label="Action Type" options={actionTypes} value={type} change={setType} />
  );
  let content: ReactNode;
  if (variant === 'automation-overview')
    content = (
      <>
        <div className={s.automationNav}>
          <Workflow />
          <strong>Automation</strong>
          {['Home', 'Flows', 'Integrations', 'Monitor', 'Action Hub'].map((x) => (
            <Button key={x} onClick={() => guard('Navigate to ' + x)}>
              {x}
            </Button>
          ))}
        </div>
        <section className={s.hero}>
          <span className={s.badge}>Automation</span>
          <h2>
            Accelerate your productivity
            <br />
            with integrations that work
          </h2>
          <p>Bring your tools together through reusable connections.</p>
          <Button primary onClick={() => guard('Get Started')}>
            Get Started
          </Button>
        </section>
        <Card title="Top Integrations">{integrationCards}</Card>
      </>
    );
  else if (variant === 'flow-inventory')
    content = (
      <Card>
        <PageTitle eyebrow="Flows" title="Recently Viewed">
          <Button onClick={() => setModal('flow')}>New</Button>
        </PageTitle>
        <div className={s.toolbar}>
          <span>0 items</span>
          <Button onClick={() => guard('List View Controls')}>List View Controls</Button>
          <Button disabled>Charts</Button>
          <Button disabled>Filters</Button>
        </div>
        <Table
          label="Flows"
          columns={['Name', 'Type', 'Status', 'Last Modified By', 'Last Modified Date']}
          empty="Nothing to see here"
        />
      </Card>
    );
  else if (['automation-type-chooser', 'triggered-automation-catalogue'].includes(variant))
    content = (
      <Card title="Flow Builder">
        <div className={s.toolbar}>
          {['Run', 'Debug', 'Activate', 'Save'].map((x) => (
            <Button key={x} disabled>
              {x}
            </Button>
          ))}
        </div>
        <Button onClick={() => setModal('flow')}>New Automation</Button>
      </Card>
    );
  else if (['integration-inventory', 'connector-catalogue'].includes(variant))
    content = (
      <>
        <Card title="Get Started with Connectors">
          {integrationCards}
          <Button onClick={() => setModal('connectors')}>View All Connectors</Button>
        </Card>
        <Card>
          <PageTitle eyebrow="Automation" title="All Connections">
            <Button onClick={() => guard('New Connection')}>New Connection</Button>
          </PageTitle>
          <p>0 items</p>
          <div className={s.empty}>
            <h3>Nothing to see here</h3>
            <p>There are no connections in this fictional inventory.</p>
          </div>
        </Card>
      </>
    );
  else if (['flow-monitor', 'monitor-filter-drawer'].includes(variant))
    content = (
      <Card>
        <PageTitle eyebrow="Flow Interviews" title="All Flow Interviews">
          <Button onClick={() => guard('Refresh interviews')}>
            <RefreshCw size={15} />
          </Button>
          <Button onClick={() => setDrawer(!drawer)}>Filters</Button>
        </PageTitle>
        <p>0 items · Sorted by Name · Filtered by All flow interviews</p>
        <div className={s.split}>
          <div className={s.grow}>
            <Table
              label="Flow interviews"
              columns={[
                'Name',
                'Last Modified By',
                'Modified Date',
                'Interview Status',
                'Flow API Name',
                'Version',
                'Type',
                'Error Details',
                'Pause Reason',
              ]}
            />
          </div>
          {drawer && (
            <aside className={s.drawer}>
              <header className={s.row}>
                <h3>Filters</h3>
                <Button label="Close monitor filters" onClick={() => setDrawer(false)}>
                  <X size={16} />
                </Button>
              </header>
              <p>Filter by Owner</p>
              <strong>All flow interviews</strong>
              <div className={s.toolbar}>
                <Button onClick={() => guard('Add Filter')}>Add Filter</Button>
                <Button onClick={() => guard('Remove All')}>Remove All</Button>
              </div>
            </aside>
          )}
        </div>
      </Card>
    );
  else if (variant === 'action-type-filter')
    content = (
      <Card title="Action Hub Beta">
        {actionSelector}
        <Menu title="Action type choices" items={actionTypes} choose={setType} />
        <p>Selected locally: {type}</p>
      </Card>
    );
  else if (variant === 'action-hub-inventory')
    content = (
      <Card>
        <PageTitle title="Action Hub">
          <span className={s.badge}>Beta</span>
          <Button onClick={() => guard('Refresh actions')}>Refresh</Button>
        </PageTitle>
        {actionSelector}
        <p className={s.info}>
          Actions shown depend on your permissions. Catalogue visibility does not verify execution
          permission.
        </p>
        <SearchField label="Search actions" value={query} change={setQuery} />
        <p>{actionRows.length} fictional items</p>
        <Table
          label="Action catalogue"
          columns={['Label', 'Type', 'Description', 'Name']}
          rows={actionRows.map((r) => [
            <button
              key={r[3]}
              type="button"
              className={s.link}
              onClick={() => guard('Open action definition')}
            >
              {r[0]}
            </button>,
            ...r.slice(1),
          ])}
        />
      </Card>
    );
  else
    content = (
      <>
        <Card>
          <PageTitle title="Example Record Lookup" />
          <div className={s.detailGrid}>
            {[
              ['Label', 'Example.lookup@1'],
              ['Type', 'External Connector'],
              ['Runs in Last 14 Days', '—'],
              ['REST API', '—'],
              ['Description', 'Fictional action definition'],
            ].map(([a, b]) => (
              <div key={a}>
                <strong>{a}</strong>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <ToggleTabs items={['Usage', 'Parameters']} value={section} change={setSection} />
          {section === 'Usage' ? (
            ['Flow Builder', 'Agentforce Builder', 'Prompt Builder'].map((x) => (
              <Card key={x} title={x}>
                <SearchField label={`Search ${x} references`} value={query} change={setQuery} />
                <div className={s.empty}>
                  <h3>Nothing to see here</h3>
                </div>
              </Card>
            ))
          ) : (
            <>
              <h3>Inputs</h3>
              <Table
                label="Action inputs"
                columns={['Label', 'Name', 'Data Type', 'Description', 'Required']}
                rows={[
                  ['Update Existing', 'updateExisting', 'boolean', 'Fictional schema', 'false'],
                  ['body', 'data', '—', '—', 'false'],
                  ['Connection', 'connection', 'id', '—', 'true'],
                ]}
              />
              <h3>Outputs</h3>
              <Table
                label="Action outputs"
                columns={['Label', 'Name', 'Data Type', 'Description', 'Required']}
                rows={[['Object Type', 'ObjectType', '—', '—', 'false']]}
              />
            </>
          )}
        </Card>
      </>
    );
  return (
    <>
      {variant === 'connector-catalogue' ? null : content}
      {modal === 'connectors' && (
        <Sheet
          title="Browse Connectors"
          close={() => setModal('')}
          footer={<Button onClick={() => setModal('')}>Close</Button>}
        >
          <SearchField label="Search Connectors" value={query} change={setQuery} />
          <p>{filteredConnectors.length} fictional connectors</p>
          {integrationCards}
          <p className={s.muted}>Connector setup is outside this local reconstruction.</p>
        </Sheet>
      )}
      {modal === 'flow' && (
        <Sheet
          title="New Automation"
          close={() => setModal('')}
          footer={<Button onClick={() => setModal('')}>Cancel</Button>}
        >
          <SearchField label="Search automations" value={query} change={setQuery} />
          <ToggleTabs
            items={['Frequently Used', 'Triggered', 'Scheduled', 'Screen', 'Autolaunched']}
            value={category}
            change={setCategory}
          />
          <h3>{category === 'Frequently Used' ? category : category + ' Automations'}</h3>
          {category === 'Triggered' && (
            <div className={s.toolbar}>
              {['Triggered', 'Scheduled', 'Screen', 'Autolaunched'].map((x) => (
                <label key={x}>
                  <input type="checkbox" checked={x === category} onChange={() => setCategory(x)} />
                  {x}
                </label>
              ))}
            </div>
          )}
          <div className={s.twoCards}>
            {(category === 'Triggered'
              ? [
                  'Record-Triggered Flow',
                  'Platform Event-Triggered Flow',
                  'Data Cloud-Triggered Flow',
                  'Automation Event-Triggered Flow',
                  'External System Change-Triggered Flow',
                ]
              : category === 'Frequently Used'
                ? flowTypes
                : flowTypes.filter((x) =>
                    x.startsWith(category === 'Scheduled' ? 'Schedule' : category)
                  )
            )
              .filter((x) => x.toLowerCase().includes(query.toLowerCase()))
              .map((x) => (
                <button
                  type="button"
                  className={s.flowCard}
                  key={x}
                  onClick={() => guard('Choose ' + x)}
                >
                  <Workflow size={28} />
                  <strong>{x}</strong>
                  <p>Choose an entry point for your automation.</p>
                </button>
              ))}
          </div>
          {category === 'Triggered' && (
            <>
              <h3>Templates</h3>
              <div className={s.twoCards}>
                {['Create an example contact', 'Update an example issue'].map((x) => (
                  <button key={x} type="button" className={s.flowCard} onClick={() => guard(x)}>
                    <strong>{x}</strong>
                    <small>Fictional template</small>
                  </button>
                ))}
              </div>
            </>
          )}
        </Sheet>
      )}
    </>
  );
}

function Address({ prefix }: { prefix: string }) {
  return (
    <fieldset className={s.address}>
      <legend>{prefix} Address</legend>
      <Select
        label={`${prefix} Country`}
        options={['--None--', 'Canada', 'United Kingdom', 'United States']}
      />
      <Field label={`${prefix} Street`}>
        <textarea aria-label={`${prefix} Street`} />
      </Field>
      <Input label={`${prefix} City`} />
      <div className={s.twoCards}>
        <Input label={`${prefix} Zip/Postal Code`} />
        <Select label={`${prefix} State/Province`} options={['--None--']} />
      </div>
      <small>Country-dependent states were not observed.</small>
    </fieldset>
  );
}
function ContactName() {
  return (
    <fieldset className={s.address}>
      <legend>*Name</legend>
      <Select
        label="Salutation"
        options={['--None--', 'Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.', 'Mx.']}
      />
      <div className={s.twoCards}>
        <Input label="First Name" />
        <Input label="*Last Name" />
      </div>
    </fieldset>
  );
}
function Records({ variant, guard }: { variant: string; guard: Guard }) {
  const contact = variant.startsWith('contact') || variant === 'new-contact-form';
  const [form, setForm] = useState(
    variant === 'new-contact-form' || variant === 'new-account-form'
  );
  const [query, setQuery] = useState('');
  const noun = contact ? 'Contact' : 'Account';
  const formContent = (
    <>
      <p className={s.required}>* = Required Information</p>
      <h3 className={s.sectionTitle}>About</h3>
      {contact ? (
        <>
          <ContactName />
          <Input label="*Account Name" placeholder="Search Accounts…" />
          <Input label="Title" />
          <Input label="Reports To" placeholder="Search Contacts…" />
        </>
      ) : (
        <>
          <Input label="*Account Name" />
          <Input label="Website" />
          <Select label="Type" options={accountTypes} />
        </>
      )}
      <Field label="Description">
        <textarea aria-label="Description" />
      </Field>
      {!contact && <Input label="Parent Account" placeholder="Search Accounts…" />}
      <p>
        <strong>{noun} Owner</strong>
        <br />
        Alex Morgan <small>· fictional</small>
      </p>
      <h3 className={s.sectionTitle}>Get in Touch</h3>
      <Input label="Phone" type="tel" />
      {contact && <Input label="Email" type="email" />}
      {contact ? (
        <Address prefix="Mailing" />
      ) : (
        <>
          <Address prefix="Billing" />
          <Address prefix="Shipping" />
        </>
      )}
    </>
  );
  if (variant === 'contact-salutation-picker')
    return (
      <Card title="Contact name">
        <ContactName />
        <Menu
          title="Salutation choices"
          items={['--None--', 'Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.', 'Mx.']}
          choose={(x) => guard('Salutation ' + x + ' preview option')}
        />
      </Card>
    );
  if (variant === 'contact-mailing-address')
    return (
      <Card title="Get in Touch">
        <Address prefix="Mailing" />
      </Card>
    );
  if (variant === 'account-type-picker')
    return (
      <Card title="Account type">
        <Select label="Type" options={accountTypes} />
        <p className={s.muted}>Choices remain in the local form.</p>
      </Card>
    );
  if (variant === 'account-address-groups')
    return (
      <Card title="Get in Touch">
        <div className={s.twoCards}>
          <Address prefix="Billing" />
          <Address prefix="Shipping" />
        </div>
      </Card>
    );
  return (
    <>
      {!['new-contact-form', 'new-account-form'].includes(variant) && (
        <Card>
          <PageTitle eyebrow={noun + 's'} title={'All ' + noun + 's'}>
            {(contact
              ? ['Import', 'Add to Campaign', 'Send Email']
              : ['Import', 'Assign Label']
            ).map((x) => (
              <Button key={x} onClick={() => guard(x)}>
                {x}
              </Button>
            ))}
            <Button onClick={() => setForm(true)}>New</Button>
          </PageTitle>
          <div className={s.toolbar}>
            <span>0 items · Filtered by all {noun.toLowerCase()}s</span>
            <SearchField label="Search this list" value={query} change={setQuery} />
            <Button onClick={() => guard('Filters')}>Filters</Button>
          </div>
          <Table
            label={noun + 's'}
            columns={
              contact
                ? ['Name', 'Account Name', 'Title', 'Phone', 'Email', 'Contact Owner Alias']
                : [
                    'Account Name',
                    'Phone',
                    'Website',
                    'Billing City',
                    'Billing State/Province',
                    'Account Owner Alias',
                  ]
            }
            empty={
              contact
                ? 'Top sellers add their contacts first'
                : 'Accounts show where your contacts work'
            }
          />
        </Card>
      )}
      {!form && ['new-contact-form', 'new-account-form'].includes(variant) && (
        <Button onClick={() => setForm(true)}>New {noun}</Button>
      )}
      {form && (
        <Sheet
          title={'New ' + noun}
          close={() => setForm(false)}
          footer={
            <>
              <Button onClick={() => setForm(false)}>Cancel</Button>
              <Button onClick={() => guard('Save & New')}>Save &amp; New</Button>
              <Button primary onClick={() => guard('Save')}>
                Save
              </Button>
            </>
          }
        >
          <form onSubmit={(e) => e.preventDefault()}>{formContent}</form>
        </Sheet>
      )}
    </>
  );
}

function DatePicker({ guard }: { guard: Guard }) {
  const [month, setMonth] = useState(9);
  const [year, setYear] = useState(2026);
  const [selected, setSelected] = useState('');
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const start = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  function shift(n: number) {
    const date = new Date(year, month + n, 1);
    setMonth(date.getMonth());
    setYear(date.getFullYear());
  }
  return (
    <div className={s.calendar}>
      <div className={s.row}>
        <Button label="Previous month" onClick={() => shift(-1)}>
          <ChevronLeft size={16} />
        </Button>
        <h3>
          {months[month]} {year}
        </h3>
        <Button label="Next month" onClick={() => shift(1)}>
          <ChevronRight size={16} />
        </Button>
      </div>
      <Select
        label="Year"
        options={Array.from({ length: 7 }, (_, i) => String(year - 3 + i))}
        value={String(year)}
        change={(v) => setYear(Number(v))}
      />
      <div className={s.calendarGrid}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((x) => (
          <strong key={x}>{x}</strong>
        ))}
        {Array.from({ length: start }, (_, i) => (
          <span key={'blank' + i} />
        ))}
        {Array.from({ length: days }, (_, i) => (
          <button
            type="button"
            key={i}
            aria-label={`${months[month]} ${i + 1}, ${year}`}
            aria-pressed={selected === `${year}-${month}-${i + 1}`}
            onClick={() => setSelected(`${year}-${month}-${i + 1}`)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <Button onClick={() => guard('Today')}>Today</Button>
      <p>{selected ? 'Date selected in the local fixture only.' : 'No due date selected.'}</p>
    </div>
  );
}
function Utility({ variant, guard }: { variant: string; guard: Guard }) {
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(variant === 'todo-filter-dialog');
  const [task, setTask] = useState(variant === 'new-task-composer');
  const [calendar, setCalendar] = useState(variant === 'task-date-picker');
  const [scope, setScope] = useState('All');
  const close = () => setOpen(false);
  if (!open)
    return (
      <Card title="Disclosure closed locally">
        <Button onClick={() => setOpen(true)}>Reopen panel</Button>
      </Card>
    );
  if (variant === 'global-search-panel')
    return (
      <Card>
        <header className={s.row}>
          <h2>Search</h2>
          <Button label="Close search" onClick={close}>
            <X size={18} />
          </Button>
        </header>
        <div className={s.searchRow}>
          <Select label="Search scope" options={['All']} value={scope} change={setScope} />
          <SearchField label="Search Knowledge and more" value={query} change={setQuery} />
        </div>
        <div className={s.split}>
          <div className={s.grow}>
            <h3>Suggested searches</h3>
            <Menu
              items={['my cases', 'recent cases', 'cases closed today'].filter((x) =>
                x.includes(query.toLowerCase())
              )}
              choose={() => guard('Search')}
            />
            <h3>Recent assets</h3>
            {reportNames.map((x) => (
              <p key={x}>
                <FileText size={15} /> {x}
              </p>
            ))}
          </div>
          <aside className={s.drawer}>
            <h3>Do more with Search!</h3>
            <p>Find records and use suggested queries.</p>
            <small>Search execution was not observed.</small>
          </aside>
        </div>
      </Card>
    );
  if (variant === 'object-navigation-menu')
    return (
      <Card title="Service navigation">
        <Button onClick={() => setOpen(false)}>
          Accounts <ChevronDown size={15} />
        </Button>
        <Menu
          items={[
            'New Account',
            'All Accounts',
            'My Accounts',
            'New This Week',
            'Open current list in New Tab',
          ]}
          choose={guard}
          title="Account shortcuts"
        />
      </Card>
    );
  if (variant === 'in-app-guidance')
    return (
      <div className={s.guidanceBackdrop}>
        <Card
          title="Explore your apps"
          actions={
            <Button label="Close guidance" onClick={close}>
              <X size={16} />
            </Button>
          }
        >
          <p>Quickly access a powerful suite of features.</p>
          <small>Step 1 of 3</small>
          <p>Press ⌘+F6 to go to in-app guidance</p>
          <div className={s.toolbar}>
            <Button onClick={close}>Skip</Button>
            <Button primary onClick={() => guard('Next guidance step')}>
              Next
            </Button>
          </div>
        </Card>
      </div>
    );
  if (variant === 'guidance-center')
    return (
      <aside className={s.utility}>
        <Card
          title="Guidance Center"
          actions={
            <Button label="Close guidance center" onClick={close}>
              <X size={16} />
            </Button>
          }
        >
          <div className={s.toolbar}>
            <Button onClick={() => guard('Unpin the Panel')}>Unpin</Button>
            <Button disabled>Home</Button>
          </div>
          <h3>Selected for You</h3>
          {[
            ['Get Started', '4 steps'],
            ['Set Up Pay Now', '3 steps'],
          ].map(([a, b]) => (
            <section className={s.miniCard} key={a}>
              <small>Guidance Set</small>
              <h3>{a}</h3>
              <p>{b}</p>
              <Button onClick={() => guard('Open ' + a)}>View guide</Button>
            </section>
          ))}
          <h3>Salesblazer</h3>
          <p>Example learning resource · ~9 mins</p>
          <h3>Related to This Page</h3>
          <p>Accounts List View · Trailhead</p>
          <Button onClick={() => guard('Open learning resource')}>Learn more</Button>
        </Card>
      </aside>
    );
  if (variant === 'help-agent-panel')
    return (
      <aside className={s.utility}>
        <Card
          title="How can Agentforce help?"
          actions={
            <Button label="Close help" onClick={close}>
              <X size={16} />
            </Button>
          }
        >
          <div className={s.agentAvatar}>
            <Sparkles size={30} />
          </div>
          <h3>Help</h3>
          <p>Ask a support question or explore a suggested topic.</p>
          <div className={s.stack}>
            {[
              'How do I set up a service agent?',
              'Create a custom field value',
              'How do I create a new lead?',
            ].map((x) => (
              <Button key={x} onClick={() => guard('Send suggested question')}>
                {x}
              </Button>
            ))}
          </div>
          <Field label="Ask Agentforce">
            <textarea value={query} onChange={(e) => setQuery(e.target.value)} />
          </Field>
          <Button disabled={!query.trim()} primary onClick={() => guard('Send message')}>
            Send message
          </Button>
        </Card>
      </aside>
    );
  if (variant === 'agentforce-enable-panel')
    return (
      <aside className={s.utility}>
        <Card
          title="Agentforce"
          actions={
            <Button label="Close Agentforce" onClick={close}>
              <X size={16} />
            </Button>
          }
        >
          <div className={s.agentAvatar}>
            <Sparkles size={32} />
          </div>
          <h2>Turn on Agentforce</h2>
          <p>AI tools can assist with tasks, content and data summaries.</p>
          <ul>
            <li>Conversational assistance</li>
            <li>Generated customer content</li>
            <li>Data summaries and insights</li>
          </ul>
          <p>Continuing would enable generative AI features in the provider.</p>
          <Button primary onClick={() => guard('Agree and Enable')}>
            Agree and Enable
          </Button>
          <p className={s.muted}>Provider enablement was not performed.</p>
        </Card>
      </aside>
    );
  const footer = (
    <>
      <Button onClick={() => setTask(false)}>Cancel</Button>
      <Button onClick={() => guard('Save & New')}>Save &amp; New</Button>
      <Button primary onClick={() => guard('Save task')}>
        Save
      </Button>
    </>
  );
  if (variant === 'task-date-picker')
    return (
      <Card title="Due Date">
        <Input label="Due Date" placeholder="DD/MM/YYYY" />
        <DatePicker guard={guard} />
      </Card>
    );
  return (
    <>
      {!(
        (variant === 'new-task-composer' && task) ||
        (variant === 'todo-filter-dialog' && filter)
      ) && (
        <aside className={s.utility}>
          <Card
            title="To Do List"
            actions={
              <>
                <Button label="Minimize To Do List" onClick={close}>
                  <X size={16} />
                </Button>
                <Button label="Pop-out To Do List" onClick={() => guard('Pop-out')}>
                  <Maximize2 size={16} />
                </Button>
              </>
            }
          >
            <div className={s.toolbar}>
              <Button onClick={() => guard('To Do navigation')}>☰</Button>
              <Button onClick={() => guard('All task views')}>
                All
                <ChevronDown size={14} />
              </Button>
              <Button label="Task search" onClick={() => guard('Task search')}>
                <Search size={16} />
              </Button>
              <Button onClick={() => guard('Sort tasks')}>Sort</Button>
              <Button onClick={() => setFilter(!filter)}>Filter</Button>
            </div>
            <p>0 items · Sort by: Created Date</p>
            <div className={s.empty}>
              <div className={s.emptyArt}>
                <Users size={30} />
              </div>
              <h3>Ahh, a clean slate</h3>
              <p>Organize what’s due next with tasks and labels.</p>
              <Button primary onClick={() => setTask(true)}>
                New Task
              </Button>
            </div>
          </Card>
        </aside>
      )}
      {filter && (
        <Sheet
          title="Filters"
          close={() => setFilter(false)}
          footer={
            <>
              <Button onClick={() => setFilter(false)}>Cancel</Button>
              <Button onClick={() => guard('Reset task filters')}>Reset</Button>
              <Button
                primary
                onClick={() => {
                  guard('Apply task filters');
                  setFilter(false);
                }}
              >
                Apply
              </Button>
            </>
          }
        >
          <h3>Apply to</h3>
          <label>
            <input type="checkbox" defaultChecked />
            Tasks
          </label>
          <h3>Common Filters</h3>
          <Select
            label="Related Record object type"
            options={['Select…', 'Accounts', 'Contacts']}
          />
          <Input label="Related Record" />
          <Select
            label="Related Target object type"
            options={['Select…', 'Accounts', 'Contacts']}
          />
          <Input label="Related Target" />
          <Select label="Due Date" options={['Show All']} />
          <fieldset className={s.address}>
            <legend>*Action Type</legend>
            <div className={s.toolbar}>
              {['Task', 'LinkedIn', 'Call', 'Email'].map((x) => (
                <label key={x}>
                  <input type="checkbox" defaultChecked />
                  {x}
                </label>
              ))}
            </div>
          </fieldset>
          <h3>Task Filters</h3>
          <Select label="Priority" options={['--None--']} />
          <Select label="Status" options={['--None--']} />
        </Sheet>
      )}
      {task && (
        <Sheet title="New Task" close={() => setTask(false)} footer={footer}>
          <form onSubmit={(e) => e.preventDefault()}>
            <h3 className={s.sectionTitle}>Task Information</h3>
            <Field label="*Assigned To">
              <div className={s.chip}>
                <Users size={14} />
                Alex Morgan · fictional
              </div>
            </Field>
            <Input label="Related To" placeholder="Search Accounts…" />
            <Input label="*Subject" />
            <Input label="Name" placeholder="Search Contacts…" />
            <Field label="Due Date">
              <div className={s.row}>
                <input placeholder="DD/MM/YYYY" />
                <Button label="Select a date for Due Date" onClick={() => setCalendar(!calendar)}>
                  <CalendarDays size={17} />
                </Button>
              </div>
            </Field>
            {calendar && <DatePicker guard={guard} />}
            <Field label="Comments">
              <textarea />
            </Field>
            <small>Tip: Command + period inserts quick text in the observed UI.</small>
            <h3 className={s.sectionTitle}>Additional Information</h3>
            <Select label="*Status" options={['Not Started']} />
            <Select label="*Priority" options={['Normal']} />
          </form>
        </Sheet>
      )}
    </>
  );
}

export function SalesforceRemaining({
  variant,
  initialState = 'default',
  disabled = false,
}: Props) {
  const entry = salesforceRemainingComponents.find((x) => x.variant === variant);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(initialState !== 'closed');
  const guard: Guard = (action) =>
    setMessage(
      `${action} is guarded. No provider request was sent. Provider outcome NOT OBSERVED.`
    );
  if (!entry) return <p role="alert">Unknown Salesforce component: {variant}</p>;
  return (
    <section
      className={s.root}
      aria-label="Salesforce fictional reconstruction"
      data-component={variant}
    >
      <div className={s.evidence}>
        RECONSTRUCTION · Fictional local data · Observed Salesforce trial structure, 2026-10-06 ·
        Provider outcomes remain unverified
      </div>
      <BoundaryMessage.Provider value={message}>
        <fieldset
          className={s.fixture}
          disabled={disabled}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false);
          }}
        >
          {!open ? (
            <Card title="Disclosure closed locally">
              <Button onClick={() => setOpen(true)}>Reopen component</Button>
            </Card>
          ) : entry.group === 'analytics' ? (
            <Analytics variant={variant} guard={guard} />
          ) : entry.group === 'automation' ? (
            <Automation variant={variant} guard={guard} />
          ) : entry.group === 'records' ? (
            <Records variant={variant} guard={guard} />
          ) : entry.group === 'messaging' ? (
            <Messaging variant={variant} guard={guard} />
          ) : (
            <Utility variant={variant} guard={guard} />
          )}
        </fieldset>
      </BoundaryMessage.Provider>
      <div className={s.status} role="status" aria-live="polite">
        {message || 'Local fixture · No provider request path'}
      </div>
    </section>
  );
}

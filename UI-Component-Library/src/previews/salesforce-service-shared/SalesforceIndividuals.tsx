import { useId, useState, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BarChart3,
  Check,
  ChevronDown,
  Copy,
  GripVertical,
  MoreHorizontal,
  Star,
} from 'lucide-react';
import { salesforceIndividualComponents } from './individualCatalogue';
import s from './SalesforceIndividuals.module.css';
interface Props {
  variant: string;
  initialState?: string;
  disabled?: boolean;
}
const chartTypes = ['Vertical Bar Chart', 'Horizontal Bar Chart', 'Donut Chart'];
const groupFields = [
  'Account Name',
  'Case',
  'Case ID',
  'Case Origin',
  'Case Owner',
  'Case Reason',
  'Clone Source',
  'Closed',
  'Contact Email',
  'Contact Fax',
  'Contact Mobile',
  'Contact Name',
  'Contact Phone',
  'Created By',
  'Deleted',
  'Escalated',
  'Last Modified By',
  'Parent Case',
  'Priority',
  'Status',
  'Subject',
  'Type',
];
const filterFields = [
  'Account Name',
  'Case Number',
  'Case Origin',
  'Case Owner',
  'Case Owner Alias',
  'Case Reason',
  'Closed',
  'Contact Account Name',
  'Contact Name',
  'Created By Alias',
  'Date/Time Closed',
  'Date/Time Opened',
  'Escalated',
  'First Name',
  'Last Modified By Alias',
  'Last Modified Date',
  'Last Name',
  'Owner First Name',
  'Owner Last Name',
  'Parent Case Number',
  'Priority',
  'Status',
  'Subject',
  'Type',
];
const operators = [
  'equals',
  'not equal to',
  'less than',
  'greater than',
  'less or equal',
  'greater or equal',
  'contains',
  'does not contain',
  'starts with',
];
const colors = [
  '#ff5d2d',
  '#fe9339',
  '#fcc003',
  '#45c65a',
  '#01c3b3',
  '#1ab9ff',
  '#1b96ff',
  '#5867e8',
  '#9050e9',
  '#cb65ff',
  '#ff538a',
  '#ea001e',
  '#001639',
];
function Button({
  children,
  onClick,
  disabled = false,
  primary = false,
  label,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  primary?: boolean;
  label?: string;
}) {
  return (
    <button
      className={primary ? s.primary : s.button}
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {children}
    </button>
  );
}
function Picker({
  label,
  options,
  initial,
  disabled = false,
}: {
  label: string;
  options: readonly string[];
  initial: string;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(true),
    [value, setValue] = useState(initial);
  const id = useId();
  return (
    <div className={s.picker}>
      <label id={id}>{label}</label>
      <button
        className={s.combo}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={id}
        onClick={() => setOpen(!open)}
        disabled={disabled}
      >
        <span>{value}</span>
        <ChevronDown size={17} />
      </button>
      {open && (
        <div className={s.options} role="listbox" aria-label={label}>
          {options.map((x) => (
            <button
              className={x === value ? s.selected : s.option}
              type="button"
              role="option"
              aria-selected={x === value}
              key={x}
              onClick={() => {
                setValue(x);
                setOpen(false);
              }}
            >
              {x === value ? <Check size={15} /> : <span className={s.blank} />}
              <span>{x}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
function Transfer() {
  const [left, setLeft] = useState(['Account Name', 'Case Origin', 'Case Owner', 'Case Reason']),
    [right, setRight] = useState(['Case Number', 'Contact Name', 'Subject', 'Status']),
    [choice, setChoice] = useState('Account Name'),
    [side, setSide] = useState<'left' | 'right'>('left');
  function move(toRight: boolean) {
    if (toRight && side === 'left') {
      setLeft(left.filter((x) => x !== choice));
      setRight([...right, choice]);
      setSide('right');
    } else if (!toRight && side === 'right') {
      setRight(right.filter((x) => x !== choice));
      setLeft([...left, choice]);
      setSide('left');
    }
  }
  function reorder(delta: number) {
    if (side !== 'right') return;
    const i = right.indexOf(choice),
      j = i + delta;
    if (j < 0 || j >= right.length) return;
    const next = [...right];
    [next[i], next[j]] = [next[j], next[i]];
    setRight(next);
  }
  return (
    <div className={s.transfer}>
      <div>
        <h3>Available Fields</h3>
        <div className={s.list} role="listbox" aria-label="Available Fields">
          {left.map((x) => (
            <button
              key={x}
              role="option"
              type="button"
              aria-selected={side === 'left' && choice === x}
              onClick={() => {
                setChoice(x);
                setSide('left');
              }}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <div className={s.vertical}>
        <Button
          label="Move to Visible Fields"
          disabled={side !== 'left'}
          onClick={() => move(true)}
        >
          <ArrowRight size={17} />
        </Button>
        <Button
          label="Move to Available Fields"
          disabled={side !== 'right'}
          onClick={() => move(false)}
        >
          <ArrowLeft size={17} />
        </Button>
      </div>
      <div>
        <h3>Visible Fields</h3>
        <div className={s.list} role="listbox" aria-label="Visible Fields">
          {right.map((x) => (
            <button
              key={x}
              role="option"
              type="button"
              aria-selected={side === 'right' && choice === x}
              onClick={() => {
                setChoice(x);
                setSide('right');
              }}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <div className={s.vertical}>
        <Button
          label="Move selected field up"
          disabled={side !== 'right' || right.indexOf(choice) === 0}
          onClick={() => reorder(-1)}
        >
          <ArrowUp size={17} />
        </Button>
        <Button
          label="Move selected field down"
          disabled={side !== 'right' || right.indexOf(choice) === right.length - 1}
          onClick={() => reorder(1)}
        >
          <ArrowDown size={17} />
        </Button>
      </div>
    </div>
  );
}
function Reorder() {
  const [items, setItems] = useState([
    'Cases',
    'Contacts',
    'Accounts',
    'Quick Text',
    'Messaging Sessions',
    'Analytics',
    'Knowledge',
  ]);
  function move(i: number, d: number) {
    const next = [...items];
    [next[i], next[i + d]] = [next[i + d], next[i]];
    setItems(next);
  }
  return (
    <div className={s.navRows} role="listbox" aria-label="Service navigation order">
      {items.map((x, i) => (
        <div className={s.navRow} role="option" aria-selected={false} key={x}>
          <GripVertical size={16} />
          <span className={s.navIcon}>{x.charAt(0)}</span>
          <span>{x}</span>
          <div className={s.rowEnd}>
            <Button label={`Move ${x} up`} disabled={i === 0} onClick={() => move(i, -1)}>
              <ArrowUp size={14} />
            </Button>
            <Button
              label={`Move ${x} down`}
              disabled={i === items.length - 1}
              onClick={() => move(i, 1)}
            >
              <ArrowDown size={14} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
function TypeTabs() {
  const [type, setType] = useState('All Items');
  return (
    <div>
      <div className={s.tabs} role="group" aria-label="Analytics asset type">
        {['All Items', 'Dashboards', 'Reports', 'Folders'].map((x) => (
          <Button primary={type === x} key={x} onClick={() => setType(x)}>
            {x}
          </Button>
        ))}
      </div>
      <p className={s.muted}>Local selection: {type}. Provider filtering was not exercised.</p>
    </div>
  );
}
function ResultRow({ guard }: { guard: (x: string) => void }) {
  const [checked, setChecked] = useState(false),
    [menu, setMenu] = useState(false);
  return (
    <div className={s.tableScroll}>
      <table className={s.table}>
        <thead>
          <tr>
            {[
              '',
              'Title',
              'Type',
              'Location',
              'Created By',
              'Created On',
              'Last Modified By',
              'Actions',
            ].map((x, i) => (
              <th key={i}>{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                aria-label="Select Case Library · Example"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            </td>
            <td>
              <BarChart3 size={20} />{' '}
              <Button onClick={() => guard('Open report')}>Case Library · Example</Button>
            </td>
            <td>Report</td>
            <td>Example Service Reports</td>
            <td>Alex Morgan</td>
            <td>5 Oct 2026</td>
            <td>Jordan Lee</td>
            <td>
              <Button label="Report row actions" onClick={() => setMenu(!menu)}>
                <MoreHorizontal size={17} />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      {menu && (
        <div className={s.inlineMenu}>
          <Button onClick={() => guard('Share report')}>Share</Button>
          <Button onClick={() => guard('Report details')}>Details</Button>
        </div>
      )}
    </div>
  );
}
function Bulk({ guard }: { guard: (x: string) => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const titles = [
    'Case Follow-up · Example',
    'Case Library · Example',
    'Case Resolution · Example',
  ];
  return (
    <div>
      <div className={s.bulkBar}>
        <b>{selected.length} Items Selected (Limit 50)</b>
        <Button onClick={() => guard('Bulk Actions')}>
          Bulk Actions <ChevronDown size={16} />
        </Button>
      </div>
      {titles.map((x) => (
        <label className={s.checkRow} key={x}>
          <input
            type="checkbox"
            checked={selected.includes(x)}
            onChange={(e) =>
              setSelected(e.target.checked ? [...selected, x] : selected.filter((y) => y !== x))
            }
          />
          {x}
        </label>
      ))}
    </div>
  );
}
function Collections({ guard }: { guard: (x: string) => void }) {
  const [shown, setShown] = useState(['Sales', 'Service']),
    [pinned, setPinned] = useState<string[]>([]);
  const toggle = (x: string, a: string[], f: (v: string[]) => void) =>
    f(a.includes(x) ? a.filter((y) => y !== x) : [...a, x]);
  return (
    <div>
      <table className={s.table} aria-label="Collection display controls">
        <thead>
          <tr>
            <th>Title</th>
            <th>Show</th>
            <th>Pin</th>
          </tr>
        </thead>
        <tbody>
          {['Sales', 'Service'].map((x) => (
            <tr key={x}>
              <td>
                <Star size={15} />
                {x}
              </td>
              <td>
                <input
                  aria-label={`Show ${x}`}
                  type="checkbox"
                  checked={shown.includes(x)}
                  onChange={() => toggle(x, shown, setShown)}
                />
              </td>
              <td>
                <input
                  aria-label={`Pin ${x}`}
                  type="checkbox"
                  checked={pinned.includes(x)}
                  onChange={() => toggle(x, pinned, setPinned)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={s.muted}>Visibility and pins change only in this preview.</p>
      <Button primary onClick={() => guard('Save collection preferences')}>
        Save
      </Button>
    </div>
  );
}
function Palette() {
  const [value, setValue] = useState('#1b96ff');
  return (
    <div>
      <h3>Default</h3>
      <div className={s.palette} role="group" aria-label="Collection colors">
        {colors.map((x) => (
          <button
            type="button"
            key={x}
            aria-label={x}
            aria-pressed={value === x}
            style={{ background: x }}
            onClick={() => setValue(x)}
          >
            {value === x && <Check size={20} />}
          </button>
        ))}
      </div>
      <p className={s.muted}>Selected local swatch: {value}</p>
    </div>
  );
}
function CopyLink({ guard }: { guard: (x: string) => void }) {
  return (
    <div className={s.copy}>
      <h3>Get URL</h3>
      <p>Only those with access to this Report can view this link.</p>
      <label>
        Report URL
        <input readOnly value="https://example.invalid/reports/fictional-case-library" />
      </label>
      <Button primary onClick={() => guard('Copy Link')}>
        <Copy size={15} /> Copy Link
      </Button>
    </div>
  );
}
function SortHeader() {
  const [order, setOrder] = useState<'Ascending' | 'Descending'>('Ascending');
  return (
    <div className={s.tableHead}>
      <Button onClick={() => setOrder(order === 'Ascending' ? 'Descending' : 'Ascending')}>
        Case Number {order === 'Ascending' ? '↑' : '↓'}
      </Button>
      <Button label="Case Number Column Actions">
        <ChevronDown size={17} />
      </Button>
      <p className={s.muted}>Local order: {order}. The inspected table had zero rows.</p>
    </div>
  );
}
function Resize() {
  const [width, setWidth] = useState(147);
  return (
    <div className={s.resize}>
      <div className={s.tableHead}>
        Case Number <ArrowUp size={15} />
      </div>
      <label>
        Case Number column width{' '}
        <input
          type="range"
          min="80"
          max="280"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
        <output>{width}px</output>
      </label>
      <p className={s.muted}>Width changes in this preview only.</p>
    </div>
  );
}
function SelectAll() {
  return (
    <div className={s.selectAll}>
      <label>
        <input type="checkbox" aria-label="Select All" disabled /> Select All
      </label>
      <span>0 items</span>
      <p className={s.muted}>
        The captured All Open Cases header checkbox was disabled with zero visible rows.
      </p>
    </div>
  );
}
function TaskState({ guard }: { guard: (x: string) => void }) {
  return (
    <div className={s.task}>
      <h3>Additional Information</h3>
      <div>
        <div className={s.stateField}>
          Status <span className={s.required}>*</span>
          <Button onClick={() => guard('Open Status options')}>
            Not Started <ChevronDown size={16} />
          </Button>
        </div>
        <div className={s.stateField}>
          Priority <span className={s.required}>*</span>
          <Button onClick={() => guard('Open Priority options')}>
            Normal <ChevronDown size={16} />
          </Button>
        </div>
      </div>
      <p className={s.muted}>Option lists and saved task behavior were not observed.</p>
    </div>
  );
}
export function SalesforceIndividuals({ variant, disabled = false }: Props) {
  const entry = salesforceIndividualComponents.find((x) => x.variant === variant);
  const [notice, setNotice] = useState('');
  const guard = (action: string) =>
    setNotice(`${action} is guarded. No provider request was sent. Provider outcome NOT OBSERVED.`);
  let node: ReactNode;
  if (variant === 'chart-type-picker')
    node = <Picker label="Chart Type" options={chartTypes} initial="Horizontal Bar Chart" />;
  else if (variant === 'chart-aggregate-picker')
    node = <Picker label="Aggregate Type" options={['Count']} initial="Count" />;
  else if (variant === 'chart-grouping-picker')
    node = <Picker label="Grouping Field" options={groupFields} initial="Account Name" />;
  else if (variant === 'filter-field-picker')
    node = <Picker label="Field" options={filterFields} initial="Account Name" />;
  else if (variant === 'filter-operator-picker')
    node = <Picker label="Operator" options={operators} initial="equals" />;
  else if (variant === 'visible-field-transfer') node = <Transfer />;
  else if (variant === 'navigation-reorder-item') node = <Reorder />;
  else if (variant === 'analytics-type-tabs') node = <TypeTabs />;
  else if (variant === 'analytics-report-row') node = <ResultRow guard={guard} />;
  else if (variant === 'analytics-bulk-selector') node = <Bulk guard={guard} />;
  else if (variant === 'collection-display-toggle') node = <Collections guard={guard} />;
  else if (variant === 'collection-color-swatch') node = <Palette />;
  else if (variant === 'report-copy-link') node = <CopyLink guard={guard} />;
  else if (variant === 'case-sort-header') node = <SortHeader />;
  else if (variant === 'case-column-resize') node = <Resize />;
  else if (variant === 'case-select-all') node = <SelectAll />;
  else node = <TaskState guard={guard} />;
  return (
    <div className={s.root} role="region" aria-label="Salesforce fictional reconstruction">
      <p className={s.evidence}>
        <b>RECONSTRUCTION · Fictional local data</b> · Individual control · Source reviewed 6 Oct
        2026
      </p>
      <header className={s.heading}>
        <span className={s.brand}>
          <BarChart3 size={23} />
        </span>
        <div>
          <span>SALESFORCE SERVICE / INDIVIDUAL COMPONENT</span>
          <h1>{entry?.title}</h1>
        </div>
      </header>
      <fieldset className={s.fixture} disabled={disabled}>
        <legend className={s.srOnly}>Fictional local controls</legend>
        <div className={s.card}>{node}</div>
      </fieldset>
      <p className={s.status} role="status" aria-live="polite">
        {notice || 'Local controls only. Provider writes and selected outcomes remain unverified.'}
      </p>
    </div>
  );
}

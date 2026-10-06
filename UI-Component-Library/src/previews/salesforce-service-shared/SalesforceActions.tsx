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
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  FileText,
  Folder,
  GripVertical,
  Plus,
  Search,
  Settings,
  Star,
  X,
} from 'lucide-react';
import { salesforceActionComponents } from './actionCatalogue';
import s from './SalesforceActions.module.css';

interface Props {
  variant: string;
  initialState?: string;
  disabled?: boolean;
}
type Guard = (action: string) => void;
const Notice = createContext('');
const navItems = [
  'Cases',
  'Contacts',
  'Accounts',
  'Quick Text',
  'Messaging Sessions',
  'Analytics',
  'Knowledge',
];
const visibleFields = [
  'Case Number',
  'Contact Name',
  'Subject',
  'Status',
  'Priority',
  'Date/Time Opened',
  'Case Owner Alias',
];
const availableFields = [
  'Account Name',
  'Case Origin',
  'Case Owner',
  'Case Reason',
  'Closed',
  'Contact Account Name',
  'Created By Alias',
  'Date/Time Closed',
  'Escalated',
  'First Name',
  'Last Modified By Alias',
  'Last Modified Date',
  'Last Name',
  'Owner First Name',
  'Owner Last Name',
  'Parent Case Number',
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
const palette = [
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
  label,
  primary = false,
  disabled = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  label?: string;
  primary?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={primary ? s.primary : s.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
function Input({
  label,
  value,
  onChange,
  required = false,
  disabled = false,
  readOnly = false,
}: {
  label: string;
  value: string;
  onChange?: (x: string) => void;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}) {
  const id = useId();
  return (
    <label className={s.field} htmlFor={id}>
      <span>
        {required && (
          <b aria-hidden="true" className={s.required}>
            *{' '}
          </b>
        )}
        {label}
      </span>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        readOnly={readOnly}
        aria-required={required}
      />
    </label>
  );
}
function Select({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value?: string;
  onChange?: (x: string) => void;
}) {
  return (
    <label className={s.field}>
      <span>{label}</span>
      <select value={value} onChange={(e) => onChange?.(e.target.value)}>
        {options.map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
    </label>
  );
}
function Dialog({
  title,
  children,
  onClose,
  footer,
  wide = false,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
  wide?: boolean;
}) {
  const box = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const notice = useContext(Notice);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const first = box.current?.querySelector<HTMLElement>(
      'button:not(:disabled),input:not(:disabled),select:not(:disabled)'
    );
    (first ?? box.current)?.focus();
    return () => previous?.focus();
  }, []);
  return (
    <div className={s.scrim}>
      <div
        className={`${s.dialog} ${wide ? s.wide : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        ref={box}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.stopPropagation();
            onClose();
          }
          if (e.key === 'Tab') {
            const items = Array.from(
              box.current?.querySelectorAll<HTMLElement>(
                'button,input,select,textarea,[tabindex]'
              ) ?? []
            ).filter(
              (el) => !el.closest('[inert]') && !el.matches(':disabled') && el.tabIndex >= 0
            );
            const first = items[0],
              last = items.at(-1);
            if (!first) {
              e.preventDefault();
              return;
            }
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last?.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }}
      >
        <header>
          <h2 id={titleId}>{title}</h2>
          <Button label={`Close ${title}`} onClick={onClose}>
            <X size={19} />
          </Button>
        </header>
        <div className={s.body}>
          {children}
          {notice && (
            <p className={s.notice} role="note">
              {notice}
            </p>
          )}
        </div>
        {footer && <footer>{footer}</footer>}
      </div>
    </div>
  );
}
function Footer({
  close,
  guard,
  label = 'Save',
  disabled = false,
}: {
  close: () => void;
  guard: Guard;
  label?: string;
  disabled?: boolean;
}) {
  return (
    <>
      <Button onClick={close}>Cancel</Button>
      <Button primary disabled={disabled} onClick={() => guard(label)}>
        {label}
      </Button>
    </>
  );
}
function Disclosure({
  title,
  children,
  initialState,
}: {
  title: string;
  children: (close: () => void) => ReactNode;
  initialState?: string;
}) {
  const [open, setOpen] = useState(initialState !== 'closed');
  return (
    <>
      <div className={s.opener}>
        <Button onClick={() => setOpen(true)}>Open {title}</Button>
      </div>
      {open && children(() => setOpen(false))}
    </>
  );
}
function Visibility({ value, onChange }: { value: string; onChange: (x: string) => void }) {
  const name = useId();
  return (
    <fieldset className={s.radios}>
      <legend>Who sees this list view?</legend>
      {['Only I can see this list view', 'All users can see this list view'].map((x) => (
        <label key={x}>
          <input type="radio" name={name} checked={value === x} onChange={() => onChange(x)} />
          {x}
        </label>
      ))}
    </fieldset>
  );
}
function ListView({
  mode,
  guard,
  initialState,
}: {
  mode: string;
  guard: Guard;
  initialState?: string;
}) {
  const rename = mode === 'rename-list-view',
    sharing = mode === 'list-sharing-dialog',
    clone = mode === 'clone-list-view';
  const title = sharing
    ? 'Sharing Settings'
    : rename
      ? 'Rename List View'
      : clone
        ? 'Clone List View'
        : 'New List View';
  const [name, setName] = useState(
    rename ? 'All Open Cases' : clone ? 'Copy of All Open Cases' : ''
  );
  const [api, setApi] = useState(rename ? 'AllOpenCases' : clone ? 'Copy_of_All_Open_Cases' : '');
  const [visibility, setVisibility] = useState(
    sharing ? 'All users can see this list view' : 'Only I can see this list view'
  );
  return (
    <Disclosure title={title} initialState={initialState}>
      {(close) => (
        <Dialog title={title} onClose={close} footer={<Footer close={close} guard={guard} />}>
          {!sharing && (
            <>
              <Input label="List Name" required value={name} onChange={setName} />
              <Input
                label="List API Name"
                required
                value={api}
                onChange={setApi}
                disabled={rename}
              />
            </>
          )}
          {rename ? (
            <Input
              label="Who sees this list view?"
              value="All users can see this list view"
              readOnly
            />
          ) : (
            <Visibility value={visibility} onChange={setVisibility} />
          )}
        </Dialog>
      )}
    </Disclosure>
  );
}
function Fields({ guard, initialState }: { guard: Guard; initialState?: string }) {
  const [left, setLeft] = useState<string[]>(availableFields),
    [right, setRight] = useState<string[]>(visibleFields),
    [a, setA] = useState<string[]>([]),
    [b, setB] = useState<string[]>([]);
  function move(toRight: boolean) {
    const picked = toRight ? a : b;
    if (toRight) {
      setRight([...right, ...picked]);
      setLeft(left.filter((x) => !picked.includes(x)));
      setA([]);
    } else {
      setLeft([...left, ...picked]);
      setRight(right.filter((x) => !picked.includes(x)));
      setB([]);
    }
  }
  function reorder(delta: number) {
    if (b.length !== 1) return;
    const i = right.indexOf(b[0]),
      j = i + delta;
    if (j < 0 || j >= right.length) return;
    const next = [...right];
    [next[i], next[j]] = [next[j], next[i]];
    setRight(next);
  }
  return (
    <Disclosure title="Select Fields to Display" initialState={initialState}>
      {(close) => (
        <Dialog
          title="Select Fields to Display"
          wide
          onClose={close}
          footer={<Footer close={close} guard={guard} />}
        >
          <div className={s.transfer}>
            <label>
              Available Fields
              <select
                aria-label="Available Fields"
                multiple
                size={9}
                value={a}
                onChange={(e) => setA(Array.from(e.target.selectedOptions, (x) => x.value))}
              >
                {left.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <div className={s.stack}>
              <Button
                label="Move to Visible Fields"
                disabled={!a.length}
                onClick={() => move(true)}
              >
                <ArrowRight size={18} />
              </Button>
              <Button
                label="Move to Available Fields"
                disabled={!b.length}
                onClick={() => move(false)}
              >
                <ArrowLeft size={18} />
              </Button>
            </div>
            <label>
              Visible Fields
              <select
                aria-label="Visible Fields"
                multiple
                size={9}
                value={b}
                onChange={(e) => setB(Array.from(e.target.selectedOptions, (x) => x.value))}
              >
                {right.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <div className={s.stack}>
              <Button
                label="Move field up"
                disabled={b.length !== 1 || right.indexOf(b[0]) === 0}
                onClick={() => reorder(-1)}
              >
                <ArrowUp size={18} />
              </Button>
              <Button
                label="Move field down"
                disabled={b.length !== 1 || right.indexOf(b[0]) === right.length - 1}
                onClick={() => reorder(1)}
              >
                <ArrowDown size={18} />
              </Button>
            </div>
          </div>
          <p className={s.hint}>
            Select fields, then use the arrow controls. Transfers and order changes stay in this
            local preview.
          </p>
        </Dialog>
      )}
    </Disclosure>
  );
}
function Chart({
  drawer,
  guard,
  initialState,
}: {
  drawer: boolean;
  guard: Guard;
  initialState?: string;
}) {
  const [form, setForm] = useState(!drawer),
    [name, setName] = useState(''),
    [type, setType] = useState('Horizontal Bar Chart'),
    [group, setGroup] = useState('Account Name'),
    [table, setTable] = useState(false);
  return (
    <Disclosure title={drawer ? 'Charts' : 'New Chart'} initialState={initialState}>
      {(close) => (
        <>
          {drawer && !form ? (
            <aside className={s.drawer}>
              <header>
                <h2>Charts</h2>
                <Button label="Close charts" onClick={close}>
                  <X size={18} />
                </Button>
              </header>
              <div className={s.empty}>
                <BarChart3 size={52} />
                <h3>This list doesn’t have any charts yet.</h3>
                <Button primary onClick={() => setForm(true)}>
                  New Chart
                </Button>
              </div>
              <label className={s.check}>
                <input
                  type="checkbox"
                  checked={table}
                  onChange={(e) => setTable(e.target.checked)}
                />
                Enable table equivalent for screen reader users
              </label>
              {table && <p className={s.hint}>List Chart data · No chart data in this fixture.</p>}
            </aside>
          ) : (
            <Dialog
              title="New Chart"
              onClose={() => (drawer ? setForm(false) : close())}
              footer={<Footer close={() => (drawer ? setForm(false) : close())} guard={guard} />}
            >
              <Input required label="Chart Name" value={name} onChange={setName} />
              <Select
                label="Chart Type"
                options={['Vertical Bar Chart', 'Horizontal Bar Chart', 'Donut Chart']}
                value={type}
                onChange={setType}
              />
              <Select label="Aggregate Type" options={['Count']} value="Count" />
              <Input label="Aggregate Field" value="Account Name" readOnly />
              <Select
                label="Grouping Field"
                options={groupFields}
                value={group}
                onChange={setGroup}
              />
            </Dialog>
          )}
        </>
      )}
    </Disclosure>
  );
}
function Filters({ mode, guard }: { mode: string; guard: Guard }) {
  const [draft, setDraft] = useState(true),
    [editor, setEditor] = useState(mode === 'case-filter-editor'),
    [logic, setLogic] = useState('1 AND 2'),
    [field, setField] = useState('Account Name'),
    [operator, setOperator] = useState('equals'),
    [value, setValue] = useState('');
  return (
    <div className={s.filterScene}>
      <div className={s.mockTable}>
        <h2>All Open Cases</h2>
        <p>0 items · Filtered by All cases</p>
        <div className={s.tableHead}>Case Number　 Contact Name　 Subject　 Status</div>
      </div>
      <aside className={s.drawer}>
        <header>
          <h2>Filters</h2>
          {draft && (
            <div className={s.row}>
              <Button
                onClick={() => {
                  setDraft(false);
                  setEditor(false);
                  setLogic('1 AND 2');
                  setValue('');
                }}
              >
                Cancel
              </Button>
              <Button primary onClick={() => guard('Save filters')}>
                Save
              </Button>
            </div>
          )}
        </header>
        <p>Filter by Owner</p>
        <div className={s.filterCard}>All cases</div>
        <p>Matching all of these filters</p>
        <div className={s.filterCard}>
          <b>1</b> Date/Time Opened equals LAST 30 DAYS
        </div>
        <div className={s.filterCard}>
          <b>2</b> Closed equals False
        </div>
        {draft && mode !== 'filter-logic-editor' && <div className={s.draft}>New Filter*</div>}
        {mode === 'filter-logic-editor' && draft ? (
          <>
            <Input label="Filter Logic" value={logic} onChange={setLogic} />
            <p className={s.hint}>Use AND and OR to combine numbered filters.</p>
            <Button onClick={() => setDraft(false)}>Remove</Button>
          </>
        ) : (
          <Button
            onClick={() => {
              setDraft(true);
              setEditor(true);
            }}
          >
            Add Filter
          </Button>
        )}
        {!draft && mode === 'filter-logic-editor' && (
          <Button onClick={() => setDraft(true)}>Add Filter Logic</Button>
        )}
        {draft && mode === 'filter-draft-actions' && (
          <Button label="More Filter Options" onClick={() => guard('More Filter Options')}>
            <ChevronDown size={16} />
          </Button>
        )}
      </aside>
      {editor && (
        <Dialog
          title="Edit Filter"
          onClose={() => setEditor(false)}
          footer={
            <>
              <Button onClick={() => setEditor(false)}>Cancel</Button>
              <Button
                primary
                onClick={() => {
                  setEditor(false);
                }}
              >
                Done
              </Button>
            </>
          }
        >
          <Select label="Field" options={filterFields} value={field} onChange={setField} />
          <Select label="Operator" options={operators} value={operator} onChange={setOperator} />
          <Input label="Value" value={value} onChange={setValue} />
          <p className={s.hint}>
            Done keeps a temporary local draft. Salesforce application was not observed.
          </p>
        </Dialog>
      )}
    </div>
  );
}
function NavigationEditor({
  catalogue,
  guard,
  initialState,
}: {
  catalogue: boolean;
  guard: Guard;
  initialState?: string;
}) {
  const [items, setItems] = useState<string[]>(navItems),
    [more, setMore] = useState(catalogue),
    [query, setQuery] = useState(''),
    [tab, setTab] = useState('All'),
    [selected, setSelected] = useState<string[]>([]),
    [dirty, setDirty] = useState(false);
  const examples = ['Assets', 'Campaigns', 'Cases', 'Contacts', 'Files', 'Reports', 'Tasks'];
  function shift(i: number, delta: number) {
    const next = [...items];
    [next[i], next[i + delta]] = [next[i + delta], next[i]];
    setItems(next);
    setDirty(true);
  }
  return (
    <Disclosure title={catalogue ? 'Add Items' : 'Service Navigation'} initialState={initialState}>
      {(close) => (
        <Dialog
          wide
          title={more ? 'Add Items' : 'Edit Service App Navigation Items'}
          onClose={close}
          footer={
            <Footer
              close={close}
              guard={guard}
              label={more ? 'Add Nav Items' : 'Save'}
              disabled={more ? !selected.length : !dirty}
            />
          }
        >
          {more ? (
            <>
              <div className={s.row}>
                {['Favorites', 'All'].map((x) => (
                  <Button key={x} primary={tab === x} onClick={() => setTab(x)}>
                    {x}
                  </Button>
                ))}
              </div>
              <Input label="Search available items" value={query} onChange={setQuery} />
              <p>{selected.length} items selected</p>
              <p className={s.hint}>Fictional subset of the observed object catalogue.</p>
              {(tab === 'Favorites' ? ['Reports'] : examples)
                .filter((x) => x.toLowerCase().includes(query.toLowerCase()))
                .map((x) => (
                  <label className={s.catalogueRow} key={x}>
                    <input
                      type="checkbox"
                      checked={selected.includes(x)}
                      onChange={(e) =>
                        setSelected(
                          e.target.checked ? [...selected, x] : selected.filter((y) => y !== x)
                        )
                      }
                    />
                    <FileText size={19} />
                    {x}
                  </label>
                ))}
              {!catalogue && <Button onClick={() => setMore(false)}>Back to navigation</Button>}
            </>
          ) : (
            <>
              <p>
                Personalize your nav bar for this app. Reorder items, and rename or remove items
                you’ve added.
              </p>
              <div className={s.rowBetween}>
                <span>NAVIGATION ITEMS ({items.length})</span>
                <Button onClick={() => setMore(true)}>Add More Items</Button>
              </div>
              <ol className={s.navList}>
                {items.map((x, i) => (
                  <li key={x}>
                    <GripVertical size={16} />
                    <span className={s.itemIcon}>
                      <FileText size={18} />
                    </span>
                    <span>{x}</span>
                    <div className={s.row}>
                      <Button
                        label={`Move ${x} up`}
                        disabled={i === 0}
                        onClick={() => shift(i, -1)}
                      >
                        <ArrowUp size={14} />
                      </Button>
                      <Button
                        label={`Move ${x} down`}
                        disabled={i === items.length - 1}
                        onClick={() => shift(i, 1)}
                      >
                        <ArrowDown size={14} />
                      </Button>
                    </div>
                  </li>
                ))}
              </ol>
              <Button
                onClick={() => {
                  setItems([...navItems]);
                  setDirty(false);
                }}
              >
                Reset Navigation to Default
              </Button>
              <p className={s.hint}>
                Local reordering only. Provider shortcuts and persistence are unverified.
              </p>
            </>
          )}
        </Dialog>
      )}
    </Disclosure>
  );
}
function ColorPicker({
  color,
  setColor,
  close,
}: {
  color: string;
  setColor: (x: string) => void;
  close: () => void;
}) {
  const [draft, setDraft] = useState(color);
  return (
    <Dialog
      title="Color"
      onClose={close}
      footer={
        <>
          <Button onClick={close}>Cancel</Button>
          <Button
            primary
            onClick={() => {
              setColor(draft);
              close();
            }}
          >
            Done
          </Button>
        </>
      }
    >
      <h3>Default</h3>
      <div className={s.palette} role="group" aria-label="Default colors">
        {palette.map((x) => (
          <button
            key={x}
            type="button"
            aria-label={x}
            aria-pressed={draft === x}
            style={{ background: x }}
            onClick={() => setDraft(x)}
          >
            {draft === x && <Check size={20} />}
          </button>
        ))}
      </div>
      <p className={s.hint}>Selected color: {draft}</p>
    </Dialog>
  );
}
function Collection({
  mode,
  guard,
  initialState,
}: {
  mode: string;
  guard: Guard;
  initialState?: string;
}) {
  const [name, setName] = useState(''),
    [description, setDescription] = useState(''),
    [color, setColor] = useState('#1b96ff'),
    [picker, setPicker] = useState(mode === 'collection-color-picker'),
    [query, setQuery] = useState(''),
    [selected, setSelected] = useState<string[]>([]),
    [shown, setShown] = useState(['Sales', 'Service']),
    [pinned, setPinned] = useState<string[]>([]);
  const manage = mode === 'manage-collections-dialog',
    membership = mode === 'add-to-collections-dialog';
  const title = manage
    ? 'Manage Collections'
    : membership
      ? 'Add to Collections'
      : 'New Collection';
  const toggle = (value: string, arr: string[], set: (x: string[]) => void) =>
    set(arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value]);
  return (
    <Disclosure
      title={mode === 'collection-color-picker' ? 'Color' : title}
      initialState={initialState}
    >
      {(close) => (
        <>
          {picker ? (
            <ColorPicker
              color={color}
              setColor={setColor}
              close={() => (mode === 'collection-color-picker' ? close() : setPicker(false))}
            />
          ) : (
            <Dialog
              title={title}
              onClose={close}
              footer={
                <Footer
                  close={close}
                  guard={guard}
                  disabled={!manage && !membership && !name.trim()}
                />
              }
            >
              {manage ? (
                <>
                  <p>Choose which collections to show in the sidebar and which to pin.</p>
                  <table className={s.table}>
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
                          <td>{x}</td>
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
                </>
              ) : membership ? (
                <>
                  <p>
                    Select collections for <b>Case Library · Example</b>
                  </p>
                  <Button onClick={() => guard('Create Collection')}>Create Collection</Button>
                  <Input label="Search for collections" value={query} onChange={setQuery} />
                  {['Sales', 'Service']
                    .filter((x) => x.toLowerCase().includes(query.toLowerCase()))
                    .map((x) => (
                      <div key={x} className={s.catalogueRow}>
                        <Folder size={20} />
                        <span>{x}</span>
                        <Button
                          label={`${selected.includes(x) ? 'Remove from' : 'Add to'} ${x}`}
                          onClick={() => toggle(x, selected, setSelected)}
                        >
                          {selected.includes(x) ? 'Added' : 'Add'}
                        </Button>
                      </div>
                    ))}
                </>
              ) : (
                <>
                  <Input label="Name" required value={name} onChange={setName} />
                  <label className={s.field}>
                    <span>Color</span>
                    <Button label="Choose color" onClick={() => setPicker(true)}>
                      <span className={s.swatch} style={{ background: color }} />
                      {color}
                    </Button>
                  </label>
                  <label className={s.field}>
                    Description
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </label>
                </>
              )}
            </Dialog>
          )}
        </>
      )}
    </Disclosure>
  );
}
function AnalyticsScreen({ favorites, guard }: { favorites: boolean; guard: Guard }) {
  const [query, setQuery] = useState(favorites ? '' : 'Case'),
    [submitted, setSubmitted] = useState(!favorites),
    [type, setType] = useState('All Items'),
    [selected, setSelected] = useState<string[]>([]);
  const reports = [
    'Case Follow-up · Example',
    'Case Resolution · Example',
    'Case Library · Example',
  ];
  const data =
    submitted && ['All Items', 'Reports'].includes(type)
      ? reports.filter((x) => x.toLowerCase().includes(query.toLowerCase()))
      : [];
  return (
    <div className={s.analytics}>
      <aside className={s.analyticsNav}>
        <h2>Analytics</h2>
        {['Home', 'Browse', 'Favorites'].map((x) => (
          <Button
            key={x}
            onClick={() => {
              if (x === 'Favorites') {
                setSubmitted(false);
                setQuery('');
              } else guard(`Open ${x}`);
            }}
          >
            {x}
          </Button>
        ))}
        <div className={s.rowBetween}>
          <h3>Collections</h3>
          <Settings size={16} />
          <Plus size={16} />
        </div>
        <p>
          <span className={s.dot} />
          Sales
        </p>
        <p>
          <span className={`${s.dot} ${s.pink}`} />
          Service
        </p>
      </aside>
      <div className={s.analyticsMain}>
        <section className={s.card}>
          <div className={s.rowBetween}>
            <h2>{submitted ? 'Favorites > Keyword Results' : 'Favorites'}</h2>
            <Button onClick={() => guard('Create analytics asset')}>Create</Button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(!!query.trim());
              setSelected([]);
            }}
            className={s.search}
          >
            <Search size={18} />
            <input
              aria-label="Search reports, dashboards, and more"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              label="Search analytics"
              onClick={() => {
                setSubmitted(!!query.trim());
                setSelected([]);
              }}
            >
              <ArrowRight size={18} />
            </Button>
          </form>
          <div className={s.tabs}>
            {['All Items', 'Dashboards', 'Reports', 'Folders'].map((x) => (
              <Button primary={type === x} key={x} onClick={() => setType(x)}>
                {x}
              </Button>
            ))}
          </div>
        </section>
        {submitted && (
          <div className={`${s.card} ${s.rowBetween}`}>
            <b>{selected.length} Items Selected (Limit 50)</b>
            <Button onClick={() => guard('Bulk Actions')}>
              Bulk Actions <ChevronDown size={15} />
            </Button>
          </div>
        )}
        {data.length ? (
          <div className={`${s.card} ${s.scroll}`}>
            <p>{data.length} Items · Sorted by Relevance (Descending)</p>
            <table className={s.table} aria-label="Analytics keyword results">
              <thead>
                <tr>
                  {[
                    'Select',
                    'Title',
                    'Type',
                    'Location',
                    'Created By',
                    'Created On',
                    'Last Modified By',
                    'Last Modified On',
                    'Actions',
                  ].map((x) => (
                    <th key={x}>{x}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((x, i) => (
                  <tr key={x}>
                    <td>
                      <input
                        type="checkbox"
                        aria-label={`Select ${x}`}
                        checked={selected.includes(x)}
                        onChange={(e) =>
                          setSelected(
                            e.target.checked ? [...selected, x] : selected.filter((y) => y !== x)
                          )
                        }
                      />
                    </td>
                    <td>
                      <Button onClick={() => guard(`Open ${x}`)}>
                        <FileText size={19} />
                        {x}
                      </Button>
                    </td>
                    <td>Report</td>
                    <td>Example Service Reports</td>
                    <td>Alex Morgan</td>
                    <td>5 Oct 2026</td>
                    <td>Jordan Lee</td>
                    <td>{4 + i} Oct 2026</td>
                    <td>
                      <Button label={`Actions for ${x}`} onClick={() => guard('Report actions')}>
                        <ChevronDown size={15} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <section className={`${s.card} ${s.empty}`}>
            <Star size={52} />
            <h3>No items to display.</h3>
            <p>Try different filters, create an item, or ask your admin about access.</p>
            <Button onClick={() => guard('Learn More')}>Learn More</Button>
          </section>
        )}
      </div>
    </div>
  );
}
function AssetDetails({ guard }: { guard: Guard }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Details</Button>
      {open && (
        <aside className={s.drawer}>
          <header>
            <h2>Details</h2>
            <Button label="Close Details" onClick={() => setOpen(false)}>
              <X size={18} />
            </Button>
          </header>
          <h3>Case Library · Example</h3>
          <dl className={s.metadata}>
            {[
              ['In folder', 'Example Service Reports'],
              ['Created By', 'Alex Morgan'],
              ['Created On', '5 Oct 2026'],
              ['Last Modified By', 'Jordan Lee'],
              ['Last Modified On', '6 Oct 2026'],
              ['Last Viewed', '6 Oct 2026'],
              ['Description', 'Example report about articles linked to fictional cases.'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>
                  {k === 'In folder' ? (
                    <Button onClick={() => guard('Open report folder')}>{v}</Button>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <h3>Source</h3>
          <p>Case Library · Example</p>
          <p className={s.hint}>Standard</p>
        </aside>
      )}
    </>
  );
}
function SmallAction({
  mode,
  guard,
  initialState,
}: {
  mode: string;
  guard: Guard;
  initialState?: string;
}) {
  const [clip, setClip] = useState('Clip text'),
    [open, setOpen] = useState(initialState !== 'closed');
  if (mode === 'bulk-selection-toast')
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Change Owner</Button>
        {open && (
          <div className={s.toast} role="alert">
            <b>!</b>
            <span>Select at least one record and try again.</span>
            <Button label="Dismiss selection warning" onClick={() => setOpen(false)}>
              <X size={18} />
            </Button>
          </div>
        )}
        <p className={s.hint}>0 records selected · Error notification</p>
      </div>
    );
  if (mode === 'report-url-dialog')
    return (
      <Disclosure title="Report Get URL" initialState={initialState}>
        {(close) => (
          <Dialog
            title="Case Library · Example"
            onClose={close}
            footer={<Button onClick={close}>Close</Button>}
          >
            <h3>Get URL</h3>
            <p>Only those with access to this Report can view this link.</p>
            <Input
              label="Report URL"
              value="https://example.invalid/reports/fictional-case-library"
              readOnly
            />
            <Button primary onClick={() => guard('Copy Link')}>
              Copy Link
            </Button>
          </Dialog>
        )}
      </Disclosure>
    );
  if (mode === 'analytics-bulk-guidance')
    return (
      <Disclosure title="Bulk Action Guidance" initialState={initialState}>
        {(close) => (
          <Dialog
            title="Perform actions on multiple assets simultaneously."
            onClose={close}
            footer={<Button onClick={close}>Close Dialog</Button>}
          >
            <p>Select up to 50 assets to change their owner or add them to collections.</p>
            <p className={s.hint}>
              The provider displayed this guidance. Execution and limit enforcement were not tested.
            </p>
            <Button onClick={() => guard('Learn More')}>Learn More</Button>
          </Dialog>
        )}
      </Disclosure>
    );
  if (mode === 'profile-popover')
    return (
      <Disclosure title="Profile" initialState={initialState}>
        {(close) => (
          <Dialog title="Profile" onClose={close}>
            <div className={s.avatar}>AM</div>
            <h2>Alex Morgan</h2>
            <p>example.invalid</p>
            <div className={s.row}>
              <Button onClick={() => guard('Settings')}>Settings</Button>
              <Button onClick={() => guard('Log Out')}>Log Out</Button>
            </div>
            <h3>Display Density</h3>
            <div className={s.row}>
              <Button disabled>Comfy ✓</Button>
              <Button onClick={() => guard('Compact density')}>Compact</Button>
            </div>
            <h3>OPTIONS</h3>
            <Button onClick={() => guard('Add Username')}>Add Username</Button>
          </Dialog>
        )}
      </Disclosure>
    );
  return (
    <div>
      <Button onClick={() => setOpen(!open)}>
        {mode === 'column-text-menu' ? 'Show Case Number Column Actions' : 'Show more actions'}{' '}
        <ChevronDown size={16} />
      </Button>
      {open && (
        <div
          className={s.menu}
          role="menu"
          aria-label={mode === 'column-text-menu' ? 'Column actions' : 'More actions'}
        >
          {mode === 'column-text-menu' ? (
            ['Wrap text', 'Clip text'].map((x) => (
              <button
                type="button"
                key={x}
                role="menuitemradio"
                aria-checked={clip === x}
                onClick={() => {
                  setClip(x);
                  setOpen(false);
                }}
              >
                <span>{clip === x ? '✓' : ''}</span>
                {x}
              </button>
            ))
          ) : (
            <button type="button" role="menuitem" onClick={() => guard('Assign Label')}>
              Assign Label
            </button>
          )}
        </div>
      )}
      <p className={s.hint}>
        {mode === 'column-text-menu'
          ? `Local text mode: ${clip}`
          : 'Label assignment was not invoked in Salesforce.'}
      </p>
    </div>
  );
}
export function SalesforceActions({ variant, initialState, disabled = false }: Props) {
  const entry = salesforceActionComponents.find((x) => x.variant === variant);
  const [notice, setNotice] = useState('');
  const guard: Guard = (action) =>
    setNotice(`${action} is guarded. No provider request was sent. Provider outcome NOT OBSERVED.`);
  let content: ReactNode;
  if (
    ['new-list-view', 'clone-list-view', 'rename-list-view', 'list-sharing-dialog'].includes(
      variant
    )
  )
    content = <ListView mode={variant} guard={guard} initialState={initialState} />;
  else if (variant === 'list-field-display')
    content = <Fields guard={guard} initialState={initialState} />;
  else if (['case-chart-drawer', 'list-chart-form'].includes(variant))
    content = (
      <Chart drawer={variant === 'case-chart-drawer'} guard={guard} initialState={initialState} />
    );
  else if (['case-filter-editor', 'filter-draft-actions', 'filter-logic-editor'].includes(variant))
    content = <Filters mode={variant} guard={guard} />;
  else if (['service-navigation-editor', 'navigation-item-catalogue'].includes(variant))
    content = (
      <NavigationEditor
        catalogue={variant === 'navigation-item-catalogue'}
        guard={guard}
        initialState={initialState}
      />
    );
  else if (
    [
      'manage-collections-dialog',
      'new-collection-dialog',
      'collection-color-picker',
      'add-to-collections-dialog',
    ].includes(variant)
  )
    content = <Collection mode={variant} guard={guard} initialState={initialState} />;
  else if (['analytics-favorites-screen', 'analytics-keyword-results'].includes(variant))
    content = (
      <AnalyticsScreen favorites={variant === 'analytics-favorites-screen'} guard={guard} />
    );
  else if (variant === 'analytics-asset-details') content = <AssetDetails guard={guard} />;
  else content = <SmallAction mode={variant} guard={guard} initialState={initialState} />;
  return (
    <Notice value={notice}>
      <div className={s.root} role="region" aria-label="Salesforce fictional reconstruction">
        <div className={s.evidence}>
          <b>RECONSTRUCTION · Fictional local data</b> · Salesforce Service trial observations · 6
          Oct 2026
        </div>
        <header className={s.heading}>
          <span className={s.brandIcon}>
            <BarChart3 size={24} />
          </span>
          <div>
            <span className={s.eyebrow}>
              {entry?.group.toUpperCase()} / SCREEN & ACTION LIBRARY
            </span>
            <h1>{entry?.title}</h1>
          </div>
        </header>
        <fieldset className={s.fixture} disabled={disabled}>
          <legend className={s.srOnly}>Fictional local controls</legend>
          {content}
        </fieldset>
        <p className={s.status} role="status" aria-live="polite">
          {notice || 'Local controls only. Provider writes and saved outcomes remain unverified.'}
        </p>
      </div>
    </Notice>
  );
}

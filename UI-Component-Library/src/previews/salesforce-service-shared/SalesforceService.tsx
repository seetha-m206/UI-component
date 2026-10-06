import { SalesforceIndividuals } from './SalesforceIndividuals';
import { salesforceIndividualComponents } from './individualCatalogue';
import { SalesforceActions } from './SalesforceActions';
import { salesforceActionComponents } from './actionCatalogue';
import { SalesforceRemaining } from './SalesforceRemaining';
import { salesforceRemainingComponents } from './remainingCatalogue';
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import {
  Bell,
  Settings,
  Search,
  ChevronDown,
  X,
  Home,
  Users,
  Heart,
  Briefcase,
  BookOpen,
  ListFilter,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CircleHelp,
  Compass,
} from 'lucide-react';
import s from './SalesforceService.module.css';

export type SalesforceVariant = string;
interface Props {
  variant: SalesforceVariant;
  initialState?: string;
  disabled?: boolean;
}
const views = [
  'All Open Cases',
  'My Cases',
  'My Open Cases',
  'Recently Viewed',
  'Recently Viewed Cases',
  'Unassigned',
];
const statuses = ['--None--', 'New', 'Working', 'Waiting on Customer', 'Escalated', 'Closed'];
const origins = ['--None--', 'Email', 'Phone', 'Web'];
const priorities = ['--None--', 'High', 'Medium', 'Low'];
const navItems = [
  'Cases',
  'Contacts',
  'Accounts',
  'Quick Text',
  'Messaging Sessions',
  'Analytics',
  'Knowledge',
];

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className={s.field}>
      <span>{label}</span>
      {children}
    </label>
  );
}
function Picker({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Field label={label}>
      <select
        aria-label={label.replace('*', '')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
    </Field>
  );
}
function Modal({
  title,
  children,
  close,
}: {
  title: string;
  children: ReactNode;
  close: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    ref.current?.querySelector<HTMLElement>('input,select,textarea,button')?.focus();
    return () => previous?.focus();
  }, []);
  return (
    <div className={s.scrim}>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={s.modal}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            close();
          }
          if (e.key === 'Tab') {
            const list = Array.from(
              ref.current?.querySelectorAll<HTMLElement>(
                'button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled)'
              ) ?? []
            );
            const first = list[0],
              last = list[list.length - 1];
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
        <header>
          <h2 id={titleId}>{title}</h2>
          <button type="button" aria-label="Cancel and close" onClick={close}>
            <X size={18} />
          </button>
        </header>
        {children}
      </div>
    </div>
  );
}

function SalesforceInitial({ variant, initialState = 'default', disabled = false }: Props) {
  const [open, setOpen] = useState(
    initialState === 'closed'
      ? ''
      : variant === 'main'
        ? 'filters'
        : ['views', 'controls', 'display', 'filters', 'notifications', 'settings'].includes(variant)
          ? variant
          : ''
  );
  const [form, setForm] = useState(
    ['case-form', 'knowledge-form', 'quick-form'].includes(variant) ? variant : ''
  );
  const [view, setView] = useState('All Open Cases');
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(initialState === 'missing' ? '--None--' : 'New');
  const [origin, setOrigin] = useState('--None--');
  const [priority, setPriority] = useState('Medium');
  const [notice, setNotice] = useState('');
  const [title, setTitle] = useState('');
  const [urlName, setUrlName] = useState('');
  const [message, setMessage] = useState('');
  const [selected, setSelected] = useState(['Email']);
  const [availablePick, setAvailablePick] = useState('');
  const [selectedPick, setSelectedPick] = useState('');
  const [module, setModule] = useState(
    variant === 'knowledge' ? 'Knowledge' : variant === 'quick-library' ? 'Quick Text' : 'Cases'
  );
  const trigger = useRef<HTMLButtonElement | null>(null);
  const allChannels = ['Event', 'Task', 'CaseComment', 'Knowledge', 'Email'];
  const available = allChannels.filter((x) => !selected.includes(x));
  const guard = (action: string) =>
    setNotice(`${action} is guarded in this fictional fixture. No request was sent.`);
  const dismiss = () => {
    setOpen('');
    trigger.current?.focus();
  };
  const toggle = (name: string, button: HTMLButtonElement) => {
    trigger.current = button;
    setOpen(open === name ? '' : name);
  };
  const closeForm = () => {
    setForm('');
    setNotice('Unsaved local example closed. No request was sent.');
    trigger.current?.focus();
  };
  const openForm = (kind: string, button: HTMLButtonElement) => {
    trigger.current = button;
    setForm(kind);
    setNotice('');
  };
  const actionButton = (label: string, kind: string) => (
    <button
      type="button"
      aria-expanded={open === kind}
      onClick={(e) => toggle(kind, e.currentTarget)}
    >
      {label}
      <ChevronDown size={13} />
    </button>
  );

  const trial = (
    <div className={s.trial}>
      <span>Explore your service workspace</span>
      <button type="button" onClick={() => guard('Buy Now')}>
        Buy Now
      </button>
      <span>
        Trial: <b>14 days</b> <small>fictional</small>
      </span>
    </div>
  );
  const header = (
    <div className={s.header}>
      <span className={s.cloud}>Service</span>
      <button type="button" className={s.search} onClick={() => guard('Global search')}>
        <Search size={15} />
        Search...
      </button>
      <button type="button" aria-label="Agentforce" onClick={() => guard('Agentforce')}>
        <Sparkles size={18} />
      </button>
      <button type="button" aria-label="Guidance Center" onClick={() => guard('Guidance Center')}>
        <Compass size={18} />
      </button>
      <button type="button" aria-label="Salesforce Help" onClick={() => guard('Salesforce Help')}>
        <CircleHelp size={18} />
      </button>
      <button
        type="button"
        aria-label="Notifications"
        onClick={(e) => toggle('notifications', e.currentTarget)}
      >
        <Bell size={18} />
      </button>
      <button
        type="button"
        aria-label="Quick Settings"
        onClick={(e) => toggle('settings', e.currentTarget)}
      >
        <Settings size={18} />
      </button>
      <button type="button" aria-label="View profile" onClick={() => guard('View profile')}>
        <span className={s.avatar} title="Fictional user">
          AM
        </span>
      </button>
    </div>
  );
  const navigation = (
    <nav className={s.tabs} aria-label="Service modules">
      {navItems.map((x) => (
        <button
          type="button"
          key={x}
          aria-current={module === x ? 'page' : undefined}
          onClick={() => {
            if (['Cases', 'Knowledge', 'Quick Text'].includes(x)) {
              setModule(x);
              setNotice('Local navigation only.');
            } else guard(x);
          }}
        >
          {x}
        </button>
      ))}
    </nav>
  );
  const rail = (
    <nav className={s.rail} aria-label="Product sidebar">
      {[
        ['Home', Home],
        ['Contacts', Users],
        ['Accounts', Briefcase],
        ['Sales', Briefcase],
        ['Service', Heart],
        ['Marketing', Users],
        ['Commerce', Briefcase],
        ['Your Account', Users],
        ['Automation', Settings],
        ['DevOps Center', Settings],
      ].map(([label, Icon]) => {
        const I = Icon as typeof Home;
        return (
          <button
            type="button"
            key={label as string}
            aria-current={label === 'Service' ? 'page' : undefined}
            onClick={() => guard(`${label} navigation`)}
          >
            <I size={20} />
            <small>{label as string}</small>
          </button>
        );
      })}
    </nav>
  );
  const newKind =
    module === 'Knowledge'
      ? 'knowledge-form'
      : module === 'Quick Text'
        ? 'quick-form'
        : 'case-form';
  const pageHeader = (
    <div className={s.pageHeader}>
      <div>
        <small>{module}</small>
        <h2>
          <span className={s.objectIcon}>
            {module === 'Knowledge' ? <BookOpen size={19} /> : <Briefcase size={19} />}
          </span>
          {module === 'Cases' ? view : 'Recently Viewed'}
          {module === 'Cases' && (
            <button
              type="button"
              aria-label="Select a List View: Cases"
              onClick={(e) => toggle('views', e.currentTarget)}
            >
              <ChevronDown size={17} />
            </button>
          )}
        </h2>
      </div>
      <div className={s.buttons}>
        <button type="button" onClick={(e) => openForm(newKind, e.currentTarget)}>
          New
        </button>
        {(module === 'Knowledge'
          ? ['Publish', 'Assign', 'Archive', 'Delete Article']
          : ['Change Owner', 'Merge Cases', 'Printable View', 'Add to an Actionable List']
        ).map((x) => (
          <button type="button" key={x} onClick={() => guard(x)}>
            {x}
          </button>
        ))}
      </div>
    </div>
  );
  const controls = (
    <div className={s.toolbar}>
      {actionButton('List View Controls', 'controls')}
      {actionButton('Display', 'display')}
      <button type="button" onClick={(e) => toggle('filters', e.currentTarget)}>
        <ListFilter size={15} />
        Filters
      </button>
      <Field label="Search this list">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search this list..."
        />
      </Field>
    </div>
  );
  const emptyTable = (
    <div className={s.tableWrap}>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" aria-label="Select all rows" disabled />
            </th>
            {(module === 'Knowledge'
              ? [
                  'Article Title',
                  'Summary',
                  'Article Number',
                  'Published Date',
                  'Publication Status',
                  'Validation Status',
                ]
              : [
                  'Case Number ↑',
                  'Contact Name',
                  'Subject',
                  'Status',
                  'Priority',
                  'Date/Time Opened',
                  'Case Owner Alias',
                ]
            ).map((x) => (
              <th key={x}>{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={8}>
              <div className={s.empty}>
                <span className={s.emptyIcon}>
                  {module === 'Knowledge' ? <BookOpen size={44} /> : <Heart size={44} />}
                </span>
                <h3>
                  {module === 'Knowledge'
                    ? 'Solve issues faster with Knowledge'
                    : 'Track customer support in one place'}
                </h3>
                <p>
                  {module === 'Knowledge'
                    ? 'Create a shared library of answers for your team.'
                    : 'Cases bring together questions, feedback, and issues from any channel.'}
                </p>
                <button
                  type="button"
                  className={s.primary}
                  onClick={(e) => openForm(newKind, e.currentTarget)}
                >
                  {module === 'Knowledge' ? 'Add an Article' : 'Add a Case'}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  const filters = (
    <aside className={s.drawer} aria-label="Filters">
      <h3>
        Filters
        <button type="button" aria-label="Close Filters" onClick={dismiss}>
          <X size={17} />
        </button>
      </h3>
      <div className={s.criterion}>
        <small>Filter by Owner</small>
        <p>All cases</p>
      </div>
      <p>Matching all of these filters</p>
      <div className={s.criterion}>
        Date/Time Opened<p>equals LAST 30 DAYS</p>
      </div>
      <div className={s.criterion}>
        Closed<p>equals False</p>
      </div>
      <div className={s.buttons}>
        {['Add Filter', 'Remove All', 'Add Filter Logic'].map((x) => (
          <button type="button" key={x} onClick={() => guard(x)}>
            {x}
          </button>
        ))}
      </div>
    </aside>
  );
  const popovers = (
    <>
      {open === 'views' && (
        <section className={s.popover} aria-label="Case views">
          <Field label="Search lists">
            <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} />
          </Field>
          <p>List Views</p>
          {views
            .filter((x) => x.toLowerCase().includes(query.toLowerCase()))
            .map((x) => (
              <button
                type="button"
                key={x}
                aria-pressed={view === x}
                onClick={() => {
                  setView(x);
                  setQuery('');
                  dismiss();
                  setNotice('View selection is a local reconstruction.');
                }}
              >
                {view === x ? '✓ ' : ''}
                {x}
              </button>
            ))}
          {views.every((x) => !x.toLowerCase().includes(query.toLowerCase())) && (
            <p>No local matches.</p>
          )}
        </section>
      )}
      {open === 'controls' && (
        <section className={s.popover} aria-label="List view controls">
          {[
            'New',
            'Clone',
            'Rename',
            'Sharing Settings',
            'Select Fields to Display',
            'Delete',
            'Reset Column Widths',
          ].map((x) => (
            <button
              type="button"
              key={x}
              disabled={x === 'Reset Column Widths'}
              onClick={() => guard(x)}
            >
              {x}
            </button>
          ))}
        </section>
      )}
      {open === 'display' && (
        <section className={s.popover} aria-label="List display">
          {['Table', 'Kanban', 'Split View'].map((x) => (
            <button
              type="button"
              key={x}
              aria-pressed={x === 'Table'}
              onClick={() => guard(`${x} layout`)}
            >
              {x === 'Table' ? '✓ ' : ''}
              {x}
            </button>
          ))}
        </section>
      )}
      {open === 'notifications' && (
        <section className={`${s.popover} ${s.right}`} aria-label="Notifications">
          <h3>
            Notifications
            <button type="button" aria-label="Close Notifications" onClick={dismiss}>
              <X size={17} />
            </button>
          </h3>
          <p>You don't have any notifications right now.</p>
        </section>
      )}
      {open === 'settings' && (
        <aside className={s.drawer} aria-label="Quick Settings">
          <h3>
            Quick Settings
            <button type="button" aria-label="Close settings" onClick={dismiss}>
              <X size={17} />
            </button>
          </h3>
          <button type="button" onClick={() => guard('Advanced Setup')}>
            Open Advanced Setup ↗
          </button>
          {[
            ['Customization', 'Fields', 'Sales Stages'],
            [
              'Company',
              'Users',
              'Business Details',
              'Fiscal Year',
              'Billing and Purchases',
              'Email Settings',
            ],
          ].map(([group, ...items]) => (
            <section key={group}>
              <h4>{group}</h4>
              {items.map((x) => (
                <button className={s.settingLink} type="button" key={x} onClick={() => guard(x)}>
                  {x} →
                </button>
              ))}
            </section>
          ))}
        </aside>
      )}
    </>
  );
  const description = (
    <div className={s.formFields}>
      <h3>Description Information</h3>
      <Field label="Subject">
        <input placeholder="Fictional subject" />
      </Field>
      <Field label="Description">
        <textarea placeholder="Describe a fictional support request" />
      </Field>
    </div>
  );
  const notification = (
    <label className={s.check}>
      <input type="checkbox" />
      Send notification email to contact
    </label>
  );
  const lookup = (
    <div className={s.columns}>
      <Field label="Contact Name">
        <input placeholder="Search Contacts..." onFocus={() => setOpen('lookup')} />
        {open === 'lookup' && (
          <button type="button" onClick={() => guard('Add New Contact')}>
            + New Contact
          </button>
        )}
      </Field>
      <Field label="Account Name">
        <input placeholder="Search Accounts..." />
      </Field>
    </div>
  );
  const visibility = (
    <div className={s.columns}>
      <div>
        <b>Visible In Internal App</b>
        <p>✓ True</p>
      </div>
      <label className={s.check}>
        <input type="checkbox" />
        Visible to Customer
      </label>
    </div>
  );
  const merge = (
    <div className={s.merge}>
      <b>Insert Merge Field</b>
      <div className={s.columns}>
        <Picker
          label="Related To"
          options={[
            'Choose...',
            'Account',
            'Case',
            'Contact',
            'Lead',
            'Opportunity',
            'Organization',
            'User',
          ]}
          value="Choose..."
          onChange={() => guard('Dependent fields')}
        />
        <Field label="Field">
          <select disabled>
            <option>Choose...</option>
          </select>
        </Field>
        <button type="button" disabled>
          Insert
        </button>
      </div>
    </div>
  );
  const channels = (
    <div>
      <h4>Channel</h4>
      <div className={s.transfer}>
        <Field label="Available">
          <select size={5} value={availablePick} onChange={(e) => setAvailablePick(e.target.value)}>
            {available.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </Field>
        <div className={s.arrows}>
          <button
            type="button"
            aria-label="Move to Selected"
            disabled={!availablePick}
            onClick={() => {
              setSelected([...selected, availablePick]);
              setAvailablePick('');
              setNotice('Fictional channel selection changed locally.');
            }}
          >
            <ArrowRight size={17} />
          </button>
          <button
            type="button"
            aria-label="Move to Available"
            disabled={!selectedPick}
            onClick={() => {
              setSelected(selected.filter((x) => x !== selectedPick));
              setSelectedPick('');
              setNotice('Fictional channel selection changed locally.');
            }}
          >
            <ArrowLeft size={17} />
          </button>
        </div>
        <Field label="Selected">
          <select size={5} value={selectedPick} onChange={(e) => setSelectedPick(e.target.value)}>
            {selected.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </Field>
      </div>
      <label className={s.check}>
        <input type="checkbox" defaultChecked />
        Include in selected channels
      </label>
      <small>
        Transfer behavior is a local reconstruction. Provider transfer was not exercised.
      </small>
    </div>
  );
  const formFields = (kind: string) =>
    kind === 'case-form' ? (
      <>
        <h3>Case Information</h3>
        <div className={s.columns}>
          <Picker label="*Status" options={statuses} value={status} onChange={setStatus} />
          <Picker label="Case Origin" options={origins} value={origin} onChange={setOrigin} />
          <Picker label="Priority" options={priorities} value={priority} onChange={setPriority} />
          <div>
            <b>Case Owner</b>
            <p>
              Alex Morgan <small>fictional</small>
            </p>
          </div>
        </div>
        <h3>Contact Information</h3>
        {lookup}
        {description}
      </>
    ) : kind === 'knowledge-form' ? (
      <>
        <h3>Information</h3>
        <Field label="*Title">
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Field>
        <Field label="*URL Name">
          <input value={urlName} onChange={(e) => setUrlName(e.target.value)} />
        </Field>
        <Field label="Article Body">
          <textarea placeholder="Fictional article content" />
        </Field>
        <h3>Visibility</h3>
        {visibility}
        <h3>Details</h3>
        <div className={s.columns}>
          {[
            'Article Created Date',
            'Created By',
            'Article Archived Date',
            'Last Modified By',
            'Article Total View Count',
            'Archived By',
          ].map((x) => (
            <span key={x}>
              {x}
              <p>—</p>
            </span>
          ))}
        </div>
      </>
    ) : (
      <>
        <Field label="*Quick Text Name">
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Field>
        <h4>*Message</h4>
        {merge}
        <textarea
          aria-label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter a fictional greeting, note, or answer..."
        />
        <Field label="Folder">
          <button type="button" onClick={() => guard('Select Folder')}>
            Select Folder
          </button>
        </Field>
        <Field label="Category">
          <select>
            <option>Greetings</option>
          </select>
        </Field>
        {channels}
      </>
    );
  const submit = (kind: string) => {
    if (
      (kind === 'case-form' && status === '--None--') ||
      (kind === 'knowledge-form' && (!title.trim() || !urlName.trim())) ||
      (kind === 'quick-form' && (!title.trim() || !message.trim()))
    ) {
      setNotice(
        'Local fixture validation: complete the required fields. Provider validation was not tested.'
      );
    } else guard('Save');
  };
  const modal = form && (
    <Modal
      title={
        form === 'case-form'
          ? 'New Case'
          : form === 'knowledge-form'
            ? 'New Knowledge'
            : 'New Quick Text'
      }
      close={closeForm}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(form);
        }}
      >
        <div className={s.formBody}>
          <small className={s.required}>* = Required Information</small>
          {formFields(form)}
        </div>
        <footer>
          {form === 'case-form' && notification}
          {form === 'quick-form' && (
            <button type="button" onClick={() => guard('Preview')}>
              Preview
            </button>
          )}
          <button type="button" onClick={closeForm}>
            Cancel
          </button>
          <button type="button" onClick={() => submit(form)}>
            Save &amp; New
          </button>
          <button className={s.primary} type="submit">
            Save
          </button>
        </footer>
        <p role="status" className={s.notice}>
          {notice || 'Fictional local form. No data is sent.'}
        </p>
      </form>
    </Modal>
  );
  const library = (
    <div className={s.library}>
      <aside>
        <h4>QUICK TEXT</h4>
        {[
          'Recent',
          'All Quick Text',
          'All Folders',
          'Created by Me',
          'Shared with Me',
          'All Favorites',
        ].map((x) => (
          <button type="button" key={x} onClick={() => guard(`${x} navigation`)}>
            {x}
          </button>
        ))}
      </aside>
      <section>
        <h2>
          Quick Text <small>Recent · 0 items</small>
        </h2>
        <div className={s.toolbar}>
          <input aria-label="Search recent quick text" placeholder="Search recent quick text..." />
          <button type="button" onClick={(e) => openForm('quick-form', e.currentTarget)}>
            New Quick Text
          </button>
          <button type="button" onClick={() => guard('New Folder')}>
            New Folder
          </button>
        </div>
        <div className={s.empty}>
          <BookOpen size={42} />
          <p>No recent quick text in this fictional library.</p>
        </div>
      </section>
    </div>
  );
  const list = (
    <>
      {pageHeader}
      <p className={s.summary}>
        0 items · {module === 'Cases' ? 'Sorted by Case Number · Filtered by All cases' : ''} ·
        Fictional fixture
      </p>
      {module === 'Cases' && controls}
      <div className={s.work}>
        {emptyTable}
        {open === 'filters' && filters}
      </div>
    </>
  );
  let content: ReactNode = list;
  if (variant === 'sidebar') content = rail;
  else if (variant === 'header') content = header;
  else if (variant === 'navigation') content = navigation;
  else if (variant === 'trial') content = trial;
  else if (variant === 'page-header') content = pageHeader;
  else if (variant === 'shell')
    content = (
      <div className={s.shell}>
        {rail}
        <div className={s.shellBody}>
          {trial}
          {header}
          {navigation}
          <div className={s.content}>{module === 'Quick Text' ? library : list}</div>
          <div className={s.utility}>☷ To Do List</div>
        </div>
      </div>
    );
  else if (variant === 'status')
    content = <Picker label="*Status" options={statuses} value={status} onChange={setStatus} />;
  else if (variant === 'origin')
    content = <Picker label="Case Origin" options={origins} value={origin} onChange={setOrigin} />;
  else if (variant === 'priority')
    content = (
      <Picker label="Priority" options={priorities} value={priority} onChange={setPriority} />
    );
  else if (variant === 'lookup') content = lookup;
  else if (variant === 'description') content = description;
  else if (variant === 'notification-option') content = notification;
  else if (variant === 'visibility') content = visibility;
  else if (variant === 'merge') content = merge;
  else if (variant === 'channels') content = channels;
  else if (variant === 'quick-library') content = library;
  else if (['case-form', 'knowledge-form', 'quick-form'].includes(variant))
    content = (
      <div className={s.formLauncher}>
        <h2>
          {variant === 'case-form'
            ? 'Cases'
            : variant === 'knowledge-form'
              ? 'Knowledge'
              : 'Quick Text'}
        </h2>
        <button type="button" onClick={(e) => openForm(variant, e.currentTarget)}>
          Open form
        </button>
      </div>
    );
  else if (variant === 'notifications' || variant === 'settings') content = header;
  return (
    <section
      className={s.root}
      aria-label="Salesforce fictional reconstruction"
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          e.preventDefault();
          dismiss();
        }
      }}
    >
      <div className={s.evidence}>
        RECONSTRUCTION · Fictional local data · Observed Service trial UI · Provider outcomes
        unverified
      </div>
      <fieldset disabled={disabled} className={s.fixture}>
        {content}
        {popovers}
        {modal}
      </fieldset>
      {!form && (
        <p className={s.notice} role="status">
          {notice || 'Safe local example. No provider connection.'}
        </p>
      )}
    </section>
  );
}

export function SalesforceService(props: Props) {
  if (salesforceIndividualComponents.some((entry) => entry.variant === props.variant))
    return <SalesforceIndividuals {...props} />;
  if (salesforceActionComponents.some((entry) => entry.variant === props.variant))
    return <SalesforceActions {...props} />;
  return salesforceRemainingComponents.some((entry) => entry.variant === props.variant) ? (
    <SalesforceRemaining {...props} />
  ) : (
    <SalesforceInitial {...props} />
  );
}

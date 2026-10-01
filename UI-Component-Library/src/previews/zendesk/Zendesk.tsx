import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import {
  ChevronDown,
  Search,
  Home,
  Inbox,
  Users,
  Building2,
  BookOpen,
  Bell,
  Plus,
  PanelLeftClose,
  PanelLeftOpen,
  X,
  MoreHorizontal,
  Filter,
  Paperclip,
  Bold,
  Link2,
  Smile,
  Check,
  LayoutGrid,
} from 'lucide-react';
import s from './zendesk.module.css';

export type ZendeskKind =
  | 'shell'
  | 'home'
  | 'ticket'
  | 'views'
  | 'customers'
  | 'organizations'
  | 'knowledge'
  | 'help-center'
  | 'switcher'
  | 'status-filter'
  | 'channel-filter'
  | 'sort-menu'
  | 'priority'
  | 'composer'
  | 'submission'
  | 'context'
  | 'filter-drawer'
  | 'selection'
  | 'customer-modal'
  | 'columns';
export interface ZendeskProps {
  kind?: ZendeskKind;
  empty?: boolean;
  disabled?: boolean;
  initialOpen?: boolean;
  initialSelected?: boolean;
}
type Guard = (action: string) => void;
const products = [
  'Support',
  'Knowledge',
  'Community',
  'Chat',
  'Voice',
  'Analytics',
  'Sales',
  'Workforce management',
  'Quality assurance',
  'AI agents',
  'Admin center',
];
const statuses = ['Open', 'In Progress', 'Pending'];
const channels = ['Web', 'Email', 'Messaging', 'Talk'];
const sorts = ['Recommended', 'Oldest updated', 'Newest updated'];
const priorities = ['Low', 'Normal', 'High', 'Urgent'];
const columns = [
  'Publication status',
  'Author',
  'Created',
  'Edited',
  'Edited by',
  'Article placement',
  'Archived by',
  'Archived',
];
const tickets = [
  {
    id: 101,
    subject: 'Help with our team subscription',
    name: 'Alex Morgan',
    status: 'Open',
    priority: 'Normal',
    channel: 'Email',
  },
];
const articles = [
  { title: 'Getting started with Northstar', status: 'Published' },
  { title: 'Manage a team subscription', status: 'Drafts' },
  { title: 'Update your workspace details', status: 'Drafts' },
];

function Button({
  children,
  onClick,
  primary = false,
  label,
}: {
  children: ReactNode;
  onClick?: () => void;
  primary?: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      className={primary ? s.primary : s.button}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
function Menu({
  label,
  options,
  selected,
  onSelect,
  multiple = false,
  clear,
  initialOpen = false,
}: {
  label: string;
  options: string[];
  selected: string[];
  onSelect: (v: string) => void;
  multiple?: boolean;
  clear?: () => void;
  initialOpen?: boolean;
}) {
  const [open, setOpen] = useState(initialOpen),
    id = useId(),
    trigger = useRef<HTMLButtonElement>(null),
    panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) panel.current?.querySelector<HTMLButtonElement>('button')?.focus();
  }, [open]);
  return (
    <div
      className={s.menuWrap}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        className={s.button}
        ref={trigger}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={id}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        {label}
        <ChevronDown size={14} />
      </button>
      {open && (
        <div
          className={s.menu}
          role="menu"
          aria-label={label}
          id={id}
          ref={panel}
          onKeyDown={(e) => {
            const items = Array.from(
              panel.current?.querySelectorAll<HTMLButtonElement>('button:not(:disabled)') ?? []
            );
            const current = items.indexOf(document.activeElement as HTMLButtonElement);
            if (e.key === 'Escape') {
              e.preventDefault();
              setOpen(false);
              trigger.current?.focus();
            }
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
              e.preventDefault();
              items[
                (current + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length
              ]?.focus();
            }
            if (e.key === 'Home' || e.key === 'End') {
              e.preventDefault();
              items[e.key === 'Home' ? 0 : items.length - 1]?.focus();
            }
          }}
        >
          {options.map((v) => (
            <button
              type="button"
              key={v}
              role={multiple ? 'menuitemcheckbox' : 'menuitemradio'}
              aria-checked={selected.includes(v)}
              onClick={() => {
                onSelect(v);
                if (!multiple) {
                  setOpen(false);
                  trigger.current?.focus();
                }
              }}
            >
              <span className={s.check}>{selected.includes(v) && <Check size={14} />}</span>
              <span>
                {v}
                {v === 'Recommended' && <small>Sort by urgency, active conversations on top</small>}
              </span>
            </button>
          ))}
          {clear && (
            <button type="button" role="menuitem" onClick={clear}>
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
function Dialog({
  title,
  onClose,
  children,
  drawer = false,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  drawer?: boolean;
}) {
  const id = useId(),
    ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    return () => previous?.focus();
  }, []);
  return (
    <div className={s.scrim}>
      <div
        className={drawer ? s.drawer : s.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={id}
        ref={ref}
        tabIndex={-1}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.preventDefault();
            onClose();
          }
          if (e.key === 'Tab') {
            const nodes = Array.from(
              ref.current?.querySelectorAll<HTMLElement>(
                'button,input,select,textarea,[tabindex="0"]'
              ) ?? []
            ).filter((node) => node.tabIndex >= 0 && !node.matches(':disabled'));
            const current = nodes.indexOf(document.activeElement as HTMLElement);
            const next =
              current < 0
                ? e.shiftKey
                  ? nodes.length - 1
                  : 0
                : (current + (e.shiftKey ? -1 : 1) + nodes.length) % nodes.length;
            e.preventDefault();
            nodes[next]?.focus();
          }
        }}
      >
        <header>
          <h3 id={id}>{title}</h3>
          <Button label={'Close ' + title} onClick={onClose}>
            <X size={16} />
          </Button>
        </header>
        {children}
      </div>
    </div>
  );
}
function StatusFilter({
  type = 'status',
  initialOpen = false,
  onChange,
}: {
  type?: 'status' | 'channel';
  initialOpen?: boolean;
  onChange?: (values: string[]) => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const set = (values: string[]) => {
    setSelected(values);
    onChange?.(values);
  };
  return (
    <Menu
      label={
        (type === 'status' ? 'Status' : 'Channel') + (selected.length ? ' ' + selected.length : '')
      }
      options={type === 'status' ? statuses : channels}
      selected={selected}
      multiple
      initialOpen={initialOpen}
      onSelect={(v) =>
        set(selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v])
      }
      clear={() => set([])}
    />
  );
}
function Sort({ initialOpen = false }: { initialOpen?: boolean }) {
  const [sort, setSort] = useState('Recommended');
  return (
    <Menu
      label={sort}
      options={sorts}
      selected={[sort]}
      onSelect={setSort}
      initialOpen={initialOpen}
    />
  );
}
function Priority({ initialOpen = false }: { initialOpen?: boolean }) {
  const [priority, setPriority] = useState('Normal');
  return (
    <div className={s.field}>
      <span>Priority</span>
      <Menu
        label={priority}
        options={priorities}
        selected={[priority]}
        onSelect={setPriority}
        initialOpen={initialOpen}
      />
    </div>
  );
}
function Switcher({ guard, initialOpen = false }: { guard: Guard; initialOpen?: boolean }) {
  return (
    <Menu
      label="Support"
      options={products}
      selected={['Support']}
      onSelect={guard}
      initialOpen={initialOpen}
    />
  );
}
function Header({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <header className={s.pageHeader}>
      <div>
        <span className={s.eyebrow}>NORTHSTAR · FICTIONAL WORKSPACE</span>
        <h2>{title}</h2>
      </div>
      <div className={s.tools}>{children}</div>
    </header>
  );
}
function Empty({ children = 'No tasks match your filters' }: { children?: ReactNode }) {
  return (
    <div className={s.empty}>
      <Inbox size={30} />
      <h3>{children}</h3>
      <p>Try a different view or clear your filters.</p>
    </div>
  );
}
function HomeScreen({
  empty,
  guard,
  openTicket,
}: {
  empty?: boolean;
  guard: Guard;
  openTicket: () => void;
}) {
  const [status, setStatus] = useState<string[]>([]),
    [channel, setChannel] = useState<string[]>([]);
  const has =
    !empty &&
    (!status.length || status.includes('Open')) &&
    (!channel.length || channel.includes('Email'));
  return (
    <>
      <Header title="Agent Home" />
      <div className={s.homeGrid}>
        <section>
          <div className={s.toolbar}>
            <strong>{has ? '1 ticket' : '0 tickets'}</strong>
            <div className={s.tools}>
              <StatusFilter onChange={setStatus} />
              <StatusFilter type="channel" onChange={setChannel} />
              <Sort />
            </div>
          </div>
          {has ? (
            <button type="button" className={s.ticketCard} onClick={openTicket}>
              <span className={s.avatar}>AM</span>
              <div>
                <small>Alex Morgan · Email</small>
                <h3>{tickets[0].subject}</h3>
                <p>
                  <span className={s.badge}>Open</span> Could you explain our team plan options?
                </p>
                <small>5 minutes ago · #101</small>
              </div>
              <ChevronDown size={16} />
            </button>
          ) : (
            <Empty />
          )}
        </section>
        <aside className={s.summary}>
          <h3>
            Setup guide <span className={s.muted}>AI agents</span>
          </h3>
          {[
            'Invite team',
            'Add content',
            'Name and tone of voice',
            'Test AI agent',
            'Connect email',
          ].map((v, i) => (
            <div className={s.setupRow} key={v}>
              <span>
                {i === 1 || i === 2 ? '✓' : '○'} {v}
              </span>
              <button type="button" className={s.textButton} onClick={() => guard(v)}>
                {i === 1 || i === 2 ? 'View' : 'Start'}
              </button>
            </div>
          ))}
          <Button onClick={() => guard('View all setup guides')}>View all setup guides</Button>
          <div className={s.metrics}>
            <div>
              <small>Solved this week</small>
              <strong>0</strong>
            </div>
            <div>
              <small>Open in your groups</small>
              <strong>1</strong>
            </div>
          </div>
          <h3>Updates</h3>
          <p className={s.muted}>No recent updates.</p>
        </aside>
      </div>
    </>
  );
}
function Composer({ guard }: { guard: Guard }) {
  const [mode, setMode] = useState('Public reply'),
    [draft, setDraft] = useState('');
  return (
    <section className={s.composer} aria-label="Message composer">
      <div className={s.tools}>
        <Menu
          label={mode}
          options={['Call', 'Public reply', 'Internal note']}
          selected={[mode]}
          onSelect={(v) => (v === 'Call' ? guard('Call') : setMode(v))}
        />
        <span className={s.muted}>
          {mode === 'Public reply' ? 'To Alex Morgan' : 'Visible to your team'}
        </span>
      </div>
      <textarea
        aria-label={mode + ' composer'}
        placeholder={mode === 'Public reply' ? 'Write a reply…' : 'Add an internal note…'}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        className={mode === 'Internal note' ? s.noteArea : ''}
      />
      <div className={s.tools}>
        {[
          [Bold, 'Format text'],
          [Smile, 'Insert emoji'],
          [Paperclip, 'Add attachment'],
          [Link2, 'Add link'],
        ].map(([Icon, label]) => {
          const I = Icon as typeof Bold;
          return (
            <Button key={String(label)} label={String(label)} onClick={() => guard(String(label))}>
              <I size={16} />
            </Button>
          );
        })}
        <span className={s.muted}>Draft stays in this preview</span>
      </div>
    </section>
  );
}
function SubmitControl({ guard, initialOpen = false }: { guard: Guard; initialOpen?: boolean }) {
  const [status, setStatus] = useState('Open');
  return (
    <div className={s.tools}>
      <Button primary onClick={() => guard('Submit as ' + status)}>
        Submit as {status}
      </Button>
      <Menu
        label="Submission status"
        options={['Open', 'In Progress', 'Pending', 'Solved']}
        selected={[status]}
        onSelect={setStatus}
        initialOpen={initialOpen}
      />
    </div>
  );
}
function Context({ guard }: { guard: Guard }) {
  const [view, setView] = useState('Customer context');
  const [query, setQuery] = useState('');
  const matches = articles.filter((a) => a.title.toLowerCase().includes(query.toLowerCase()));
  return (
    <aside className={s.context}>
      <div className={s.contextTabs} aria-label="Ticket resources">
        {['Customer context', 'Knowledge'].map((v) => (
          <button type="button" aria-pressed={view === v} key={v} onClick={() => setView(v)}>
            {v === 'Knowledge' ? <BookOpen size={16} /> : <Users size={16} />} {v}
          </button>
        ))}
      </div>
      <h3>{view}</h3>
      {view === 'Customer context' ? (
        <>
          <div className={s.person}>
            <span className={s.avatar}>AM</span>
            <strong>Alex Morgan</strong>
          </div>
          <dl>
            <dt>Email</dt>
            <dd>alex@northstar.example</dd>
            <dt>Language</dt>
            <dd>English (United States)</dd>
          </dl>
          <label className={s.field}>
            Notes
            <textarea placeholder="Add user notes" aria-label="Local customer notes" />
          </label>
          <h4>Interaction history</h4>
          <div className={s.history}>
            <span className={s.badge}>Open</span>
            <p>{tickets[0].subject}</p>
            <small>5 minutes ago</small>
          </div>
        </>
      ) : (
        <>
          <label className={s.search}>
            <Search size={16} />
            <input
              aria-label="Search knowledge"
              placeholder="Search knowledge"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <h4>Suggested content</h4>
          {matches.length === 0 && <p>No matching local articles</p>}
          {matches.map((a) => (
            <button
              type="button"
              className={s.article}
              key={a.title}
              onClick={() => guard('Open article')}
            >
              <strong>{a.title}</strong>
              <small>General → Getting started</small>
              <small>Last edited 5 min ago · en-us</small>
            </button>
          ))}
        </>
      )}
    </aside>
  );
}
function Ticket({ guard }: { guard: Guard }) {
  return (
    <>
      <div className={s.breadcrumb}>
        Northstar / Alex Morgan / <span className={s.badge}>Open</span> Ticket #101
      </div>
      <div className={s.ticketGrid}>
        <aside className={s.fields}>
          <h3>Ticket fields</h3>
          <label className={s.field}>
            Requester
            <input readOnly value="Alex Morgan" />
          </label>
          <label className={s.field}>
            Assignee*
            <select defaultValue="Support / Jordan Lee">
              <option>Support / Jordan Lee</option>
              <option>Unassigned</option>
            </select>
          </label>
          <label className={s.field}>
            Followers
            <input placeholder="Add followers locally" />
          </label>
          <hr />
          <label className={s.field}>
            Tags
            <input defaultValue="sample_ticket" />
          </label>
          <div className={s.field}>
            <span>Type</span>
            <select aria-label="Ticket type">
              <option>-</option>
              <option>Question</option>
              <option>Incident</option>
              <option>Problem</option>
              <option>Task</option>
            </select>
          </div>
          <Priority />
          <label className={s.field}>
            Summary
            <input disabled placeholder="No summary" />
          </label>
          <label className={s.field}>
            Sentiment
            <input readOnly value="Neutral" />
          </label>
          <label className={s.field}>
            Language
            <input readOnly value="English" />
          </label>
        </aside>
        <section className={s.conversation}>
          <h2>{tickets[0].subject}</h2>
          <small className={s.muted}>Via email · Topic: Subscription · Neutral</small>
          <div className={s.messages}>
            <article>
              <strong>Alex Morgan</strong>
              <small>via email · 5 minutes ago</small>
              <p>Could you explain the options for adding my team to a subscription?</p>
            </article>
            <article className={s.aiMessage}>
              <strong>System</strong>
              <small>Via API · 4 minutes ago</small>
              <p>
                Here is a fictional reply showing how source-linked assistance appears in a
                conversation.
              </p>
              <p className={s.muted}>AI-generated sample content</p>
              <button
                type="button"
                className={s.textButton}
                onClick={() => guard('Article citation')}
              >
                Getting started with Northstar
              </button>
            </article>
          </div>
          <Composer guard={guard} />
        </section>
        <Context guard={guard} />
      </div>
      <footer className={s.ticketFooter}>
        <Button onClick={() => guard('Apply macro')}>
          Apply macro <ChevronDown size={14} />
        </Button>
        <SubmitControl guard={guard} />
      </footer>
    </>
  );
}
function Filters({ onClose, onApply }: { onClose: () => void; onApply: () => void }) {
  return (
    <Dialog title="Filter" drawer onClose={onClose}>
      <div className={s.formBody}>
        {['Tags', 'Ticket status', 'Subject', 'Requester', 'Request date', 'Type', 'Priority'].map(
          (label) => (
            <label key={label} className={s.field}>
              {label}
              {label === 'Subject' ? (
                <input />
              ) : (
                <select defaultValue="Any">
                  <option>Any</option>
                  {(label === 'Priority'
                    ? priorities
                    : label === 'Ticket status'
                      ? statuses
                      : ['Sample option']
                  ).map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              )}
            </label>
          )
        )}
      </div>
      <footer>
        <Button onClick={onClose}>Cancel</Button>
        <Button primary onClick={onApply}>
          Apply filters
        </Button>
      </footer>
    </Dialog>
  );
}
function Selection({
  selected,
  setSelected,
  guard,
}: {
  selected: boolean;
  setSelected: (v: boolean) => void;
  guard: Guard;
}) {
  return (
    <div className={s.bulk}>
      <label>
        <input type="checkbox" checked={selected} onChange={(e) => setSelected(e.target.checked)} />{' '}
        Select ticket
      </label>
      {selected ? (
        <>
          <strong>1 ticket</strong>
          {['Edit', 'Merge', 'Mark as spam', 'Delete'].map((v) => (
            <Button key={v} onClick={() => guard(v)}>
              {v}
            </Button>
          ))}
          <Button onClick={() => setSelected(false)}>Cancel</Button>
        </>
      ) : (
        <span className={s.muted}>Select a ticket to show bulk actions</span>
      )}
    </div>
  );
}
function Views({
  guard,
  empty,
  initialSelected = false,
}: {
  guard: Guard;
  empty?: boolean;
  initialSelected?: boolean;
}) {
  const [view, setView] = useState('Your unsolved tickets'),
    [selected, setSelected] = useState(initialSelected),
    [filter, setFilter] = useState(false),
    [applied, setApplied] = useState(false);
  const has =
    !empty && ['Your unsolved tickets', 'All unsolved tickets'].includes(view) && !applied;
  return (
    <div className={s.withSidebar}>
      <aside className={s.subnav}>
        <h3>Views</h3>
        {[
          'Your unsolved tickets',
          'Unassigned tickets',
          'AI agent tickets',
          'All unsolved tickets',
          'Pending tickets',
        ].map((v) => (
          <button
            type="button"
            key={v}
            aria-current={view === v ? 'page' : undefined}
            onClick={() => {
              setView(v);
              setSelected(false);
              setApplied(false);
            }}
          >
            {v} <span>{v === 'Your unsolved tickets' || v === 'All unsolved tickets' ? 1 : 0}</span>
          </button>
        ))}
        <Button onClick={() => guard('Manage views')}>Manage views</Button>
      </aside>
      <section className={s.content}>
        <Header title={view}>
          <Button onClick={() => setFilter(true)}>
            <Filter size={15} />
            Filter
          </Button>
        </Header>
        <p className={s.muted}>{has ? '1 ticket' : '0 tickets'} · Last updated just now</p>
        {applied && <Button onClick={() => setApplied(false)}>Clear local filters</Button>}
        {has ? (
          <div className={s.tableScroll}>
            <table>
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      aria-label="Select all tickets"
                      checked={selected}
                      onChange={(e) => setSelected(e.target.checked)}
                    />
                  </th>
                  {['Ticket status', 'Subject', 'Requester', 'Requested', 'Type', 'Priority'].map(
                    (v) => (
                      <th key={v}>{v}</th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      aria-label="Select ticket 101"
                      checked={selected}
                      onChange={(e) => setSelected(e.target.checked)}
                    />
                  </td>
                  <td>
                    <span className={s.badge}>Open</span>
                  </td>
                  <td>{tickets[0].subject}</td>
                  <td>Alex Morgan</td>
                  <td>5 min ago</td>
                  <td>Ticket</td>
                  <td>Normal</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <Empty />
        )}
        {selected && <Selection selected={selected} setSelected={setSelected} guard={guard} />}
      </section>
      {filter && (
        <Filters
          onClose={() => setFilter(false)}
          onApply={() => {
            setApplied(true);
            setFilter(false);
            setSelected(false);
          }}
        />
      )}
    </div>
  );
}
function CustomerModal({ guard, onClose }: { guard: Guard; onClose: () => void }) {
  return (
    <Dialog title="Add new customer" onClose={onClose}>
      <div className={s.formBody}>
        <label className={s.field}>
          Name
          <input autoComplete="off" />
        </label>
        <label className={s.field}>
          Email
          <input type="email" autoComplete="off" />
        </label>
        <p className={s.muted}>
          Fictional preview. Add shows a local guard and creates no customer.
        </p>
      </div>
      <footer>
        <Button onClick={onClose}>Cancel</Button>
        <Button primary onClick={() => guard('Add customer')}>
          Add
        </Button>
      </footer>
    </Dialog>
  );
}
function Directory({
  type,
  guard,
  empty,
}: {
  type: 'customers' | 'organizations';
  guard: Guard;
  empty?: boolean;
}) {
  const [query, setQuery] = useState(''),
    [modal, setModal] = useState(false);
  const people = type === 'customers',
    name = people ? 'Alex Morgan' : 'Northstar',
    has = !empty && name.toLowerCase().includes(query.toLowerCase());
  return (
    <>
      <Header title={people ? 'Customers' : 'Organizations'}>
        <Button onClick={() => guard('Bulk import')}>Bulk import</Button>
        <Button primary onClick={() => (people ? setModal(true) : guard('Add organization'))}>
          Add {people ? 'customer' : 'organization'}
        </Button>
      </Header>
      <p className={s.muted}>Add, search, and manage your {type} in one place.</p>
      <label className={s.search}>
        <Search size={16} />
        <input
          aria-label={'Search ' + type}
          placeholder={'Search ' + type}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <Button label="Clear search" onClick={() => setQuery('')}>
            <X size={14} />
          </Button>
        )}
      </label>
      <p>
        {has ? '1' : '0'} {people ? 'customer' : 'organization'}
        {has ? '' : 's'}
      </p>
      {has ? (
        <div className={s.tableScroll}>
          <table>
            <thead>
              <tr>
                {[
                  'Name',
                  people ? 'Email' : 'Domain',
                  'Tags',
                  people ? 'Timezone' : 'Created at',
                  'Last updated',
                ].map((v) => (
                  <th key={v}>{v}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className={s.avatar}>{people ? 'AM' : 'N'}</span> {name}
                </td>
                <td>{people ? 'alex@northstar.example' : 'northstar.example'}</td>
                <td>—</td>
                <td>{people ? 'UTC' : 'Today'}</td>
                <td>5 minutes ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <Empty>No matching {type}</Empty>
      )}
      {modal && <CustomerModal guard={guard} onClose={() => setModal(false)} />}
    </>
  );
}
function Columns({
  initialOpen = false,
  onChange,
}: {
  initialOpen?: boolean;
  onChange?: (v: string[]) => void;
}) {
  const [selected, setSelected] = useState(['Edited']);
  return (
    <Menu
      label="Show and hide columns"
      options={columns}
      multiple
      selected={selected}
      initialOpen={initialOpen}
      onSelect={(v) => {
        const next = selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v];
        setSelected(next);
        onChange?.(next);
      }}
    />
  );
}
function Knowledge({ guard, empty }: { guard: Guard; empty?: boolean }) {
  const [view, setView] = useState('All articles'),
    [query, setQuery] = useState(''),
    [shown, setShown] = useState(['Edited']);
  const rows = empty
    ? []
    : articles.filter(
        (a) =>
          (view === 'All articles' || view === 'AI-generated' || a.status === view) &&
          a.title.toLowerCase().includes(query.toLowerCase())
      );
  return (
    <div className={s.withSidebar}>
      <aside className={s.subnav}>
        <h3>Content</h3>
        {['All articles', 'Published', 'Drafts', 'AI-generated', 'Archived'].map((v) => (
          <button
            type="button"
            key={v}
            aria-current={v === view ? 'page' : undefined}
            onClick={() => setView(v)}
          >
            {v} <span>{v === 'Archived' ? 0 : v === 'Published' ? 1 : v === 'Drafts' ? 2 : 3}</span>
          </button>
        ))}
        <h4>Content objects</h4>
        <Button onClick={() => guard('Procedures')}>Procedures</Button>
        <h4>External content</h4>
        <Button onClick={() => guard('Connections')}>Connections</Button>
      </aside>
      <section className={s.content}>
        <Header title={view}>
          <Button onClick={() => guard('Save search as list')}>Save search as list</Button>
        </Header>
        <div className={s.toolbar}>
          <label className={s.search}>
            <Search size={16} />
            <input
              aria-label="Search articles"
              placeholder="Search articles"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <Columns onChange={setShown} />
        </div>
        <p>{rows.length} results</p>
        {rows.length ? (
          <div className={s.tableScroll}>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  {shown.map((v) => (
                    <th key={v}>{v}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((a) => (
                  <tr key={a.title}>
                    <td>
                      <button
                        type="button"
                        className={s.textButton}
                        onClick={() => guard('Open article')}
                      >
                        {a.title}
                      </button>
                    </td>
                    {shown.map((v) => (
                      <td key={v}>
                        {v === 'Publication status'
                          ? a.status
                          : v === 'Edited'
                            ? '5 minutes ago'
                            : 'Fictional value'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Empty>There are currently no results</Empty>
        )}
      </section>
    </div>
  );
}
function HelpCenter({ guard, empty }: { guard: Guard; empty?: boolean }) {
  const [query, setQuery] = useState('');
  return (
    <div className={s.helpCenter}>
      <div className={s.toolbar}>
        <strong>Northstar Help Center</strong>
        <Button onClick={() => guard('Toggle help navigation')}>
          <MoreHorizontal size={18} />
        </Button>
      </div>
      <div className={s.hero}>
        <h2>Northstar</h2>
        <label className={s.search}>
          <Search size={20} />
          <input
            aria-label="Search help center"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className={s.categories}>
        {[
          'Customer Support',
          'Refund / Return Policy',
          'Order Process',
          'Product Guide',
          'Company overview',
        ]
          .filter((v) => !query || v.toLowerCase().includes(query.toLowerCase()))
          .map((v) => (
            <button type="button" key={v} onClick={() => guard(v)}>
              {v}
            </button>
          ))}
      </div>
      {empty ? (
        <Empty>No matching articles</Empty>
      ) : (
        <>
          <h3>Promoted articles</h3>
          <Button onClick={() => guard('About Northstar')}>About Northstar</Button>
          <hr />
          <h3>Community</h3>
          <Button onClick={() => guard('Join the conversation')}>Join the conversation</Button>
          <h3>Recent activity</h3>
          <p className={s.muted}>Getting started · Article created 5 minutes ago</p>
        </>
      )}
    </div>
  );
}
function Shell({ guard, empty }: { guard: Guard; empty?: boolean }) {
  const [screen, setScreen] = useState('Agent Home'),
    [collapsed, setCollapsed] = useState(false);
  const icons = [Home, Inbox, Users, Building2],
    names = ['Agent Home', 'Views', 'Customers', 'Organizations'];
  return (
    <>
      <div className={s.trial}>
        <span>Trial workspace · fictional account</span>
        <Button onClick={() => guard('Compare plans')}>Compare plans</Button>
      </div>
      <div className={s.globalHeader}>
        <strong className={s.logo}>Z</strong>
        <Switcher guard={guard} />
        <Button onClick={() => guard('Add')}>
          <Plus size={17} />
          Add
        </Button>
        <span className={s.spacer} />
        <Button label="Global search" onClick={() => guard('Global search')}>
          <Search size={17} />
        </Button>
        <Button label="Notifications" onClick={() => guard('Notifications')}>
          <Bell size={17} />
        </Button>
        <span className={s.avatar}>JL</span>
      </div>
      <div className={s.shellGrid}>
        <nav className={s.rail} aria-label="Primary navigation">
          {names.map((v, i) => {
            const I = icons[i];
            return (
              <button
                type="button"
                aria-label={v}
                title={v}
                aria-current={screen === v ? 'page' : undefined}
                key={v}
                onClick={() => setScreen(v)}
              >
                <I size={19} />
              </button>
            );
          })}
          <button
            type="button"
            aria-label="Toggle subnavigation"
            aria-expanded={!collapsed}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
        </nav>
        {!collapsed && (
          <aside className={s.subnav}>
            <h3>Get Started</h3>
            <small>Your work</small>
            <button type="button" onClick={() => setScreen('Agent Home')}>
              Tickets
            </button>
            <button type="button" onClick={() => guard('Auto assist')}>
              Auto assist
            </button>
            <small>Shared work</small>
            <button type="button" onClick={() => guard("CC'd")}>
              CC'd
            </button>
            <button type="button" onClick={() => guard('Following')}>
              Following
            </button>
            <small>Completed work</small>
            <button type="button" onClick={() => guard('Last 30 days')}>
              Last 30 days
            </button>
          </aside>
        )}
        <main className={s.content}>
          {screen === 'Agent Home' ? (
            <HomeScreen empty={empty} guard={guard} openTicket={() => setScreen('Ticket')} />
          ) : screen === 'Ticket' ? (
            <Ticket guard={guard} />
          ) : screen === 'Views' ? (
            <Views guard={guard} empty={empty} />
          ) : (
            <Directory
              type={screen === 'Customers' ? 'customers' : 'organizations'}
              guard={guard}
              empty={empty}
            />
          )}
        </main>
      </div>
    </>
  );
}
export function ZendeskPreview({
  kind = 'shell',
  empty = false,
  disabled = false,
  initialOpen = false,
  initialSelected = false,
}: ZendeskProps) {
  const [message, setMessage] = useState(''),
    [open, setOpen] = useState(initialOpen),
    [selected, setSelected] = useState(initialSelected),
    [showTicket, setShowTicket] = useState(false);
  const guard: Guard = (action) =>
    setMessage(action + ': local preview only. No provider request or saved change.');
  let body: ReactNode;
  switch (kind) {
    case 'shell':
      body = <Shell guard={guard} empty={empty} />;
      break;
    case 'home':
      body = showTicket ? (
        <>
          <Button onClick={() => setShowTicket(false)}>Back to Agent Home</Button>
          <Ticket guard={guard} />
        </>
      ) : (
        <HomeScreen empty={empty} guard={guard} openTicket={() => setShowTicket(true)} />
      );
      break;
    case 'ticket':
      body = <Ticket guard={guard} />;
      break;
    case 'views':
      body = <Views guard={guard} empty={empty} initialSelected={initialSelected} />;
      break;
    case 'customers':
    case 'organizations':
      body = <Directory type={kind} guard={guard} empty={empty} />;
      break;
    case 'knowledge':
      body = <Knowledge guard={guard} empty={empty} />;
      break;
    case 'help-center':
      body = <HelpCenter guard={guard} empty={empty} />;
      break;
    case 'switcher':
      body = <Switcher guard={guard} initialOpen={initialOpen} />;
      break;
    case 'status-filter':
      body = <StatusFilter initialOpen={initialOpen} />;
      break;
    case 'channel-filter':
      body = <StatusFilter type="channel" initialOpen={initialOpen} />;
      break;
    case 'sort-menu':
      body = <Sort initialOpen={initialOpen} />;
      break;
    case 'priority':
      body = <Priority initialOpen={initialOpen} />;
      break;
    case 'composer':
      body = <Composer guard={guard} />;
      break;
    case 'submission':
      body = <SubmitControl guard={guard} initialOpen={initialOpen} />;
      break;
    case 'context':
      body = <Context guard={guard} />;
      break;
    case 'columns':
      body = <Columns initialOpen={initialOpen} />;
      break;
    case 'selection':
      body = <Selection selected={selected} setSelected={setSelected} guard={guard} />;
      break;
    case 'filter-drawer':
      body = (
        <>
          <Button onClick={() => setOpen(true)}>
            <Filter size={16} />
            Filter
          </Button>
          {open && (
            <Filters
              onClose={() => setOpen(false)}
              onApply={() => {
                setOpen(false);
                setMessage('Local filters applied. Provider filter submission was not exercised.');
              }}
            />
          )}
        </>
      );
      break;
    case 'customer-modal':
      body = (
        <>
          <Button onClick={() => setOpen(true)}>Add customer</Button>
          {open && <CustomerModal guard={guard} onClose={() => setOpen(false)} />}
        </>
      );
      break;
  }
  const full = [
    'shell',
    'home',
    'ticket',
    'views',
    'customers',
    'organizations',
    'knowledge',
    'help-center',
  ].includes(kind);
  return (
    <section className={s.root} data-zendesk-kind={kind}>
      <div className={s.fixtureLabel}>
        <LayoutGrid size={12} /> Zendesk reference · Fictional data · Local interactions
      </div>
      <fieldset disabled={disabled} className={full ? s.scene : s.standalone}>
        {body}
      </fieldset>
      {message && (
        <div role="status" className={s.notice}>
          {message}
          <button type="button" aria-label="Dismiss local notice" onClick={() => setMessage('')}>
            <X size={14} />
          </button>
        </div>
      )}
    </section>
  );
}

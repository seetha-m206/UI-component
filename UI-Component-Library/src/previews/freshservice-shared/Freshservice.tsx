import { useId, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Circle,
  Grid2X2,
  HelpCircle,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Paperclip,
  Plus,
  Search,
  Settings,
  Ticket,
  Users,
  X,
  Zap,
} from 'lucide-react';
import styles from './freshservice.module.css';

export type FreshserviceVariant =
  | 'application-shell'
  | 'sidebar-navigation'
  | 'global-header'
  | 'trial-banner'
  | 'setup-checklist'
  | 'feature-accordion'
  | 'create-menu'
  | 'my-work-menu'
  | 'ticket-empty-state'
  | 'new-incident-form'
  | 'template-picker'
  | 'cc-disclosure'
  | 'status-priority-fields'
  | 'description-editor'
  | 'related-articles-empty'
  | 'attachment-zone';
export interface FreshserviceProps {
  variant?: FreshserviceVariant;
  initialExpanded?: boolean;
}
type Guard = (action: string) => void;

const setupSteps = [
  'Set up email',
  'Set up support portal',
  'Invite agents',
  'Customize agent portal',
];
const navigation = [
  'Reports and Insights',
  'Dashboard',
  'Tickets',
  'Journeys',
  'Problems',
  'Changes',
  'Releases',
  'Tasks',
  'Applications',
  'Assets',
  'AI Agent Studio',
  'Projects',
  'Workload',
  'Solutions',
  'Admin',
];
const featureGroups: Record<string, string[] | null> = {
  Ticketing: ['Create a ticket', 'Resolve a ticket', 'Summarize tickets using Freddy AI'],
  'Service Management': [
    'Create a solution article',
    'Create a workflow',
    'Customize ticket fields',
  ],
  'IT Operations Management': null,
  'Change Management': null,
  'IT Project Management': null,
  Workspaces: null,
};
const createActions = [
  ['Ticket', 'Report an issue'],
  ['Request', 'Request a service'],
  ['Problem', 'Report a problem'],
  ['Change', 'Request for change'],
  ['Release', 'Create a release'],
  ['Device', 'Create New Device'],
  ['Software', 'Create New Software'],
  ['Physical asset', 'Create New Physical Asset'],
  ['Contract', 'Create a contract'],
  ['Purchase Order', 'Create a purchase order'],
  ['Project', 'Create a project'],
  ['Offboarding Request', 'Offboard employees'],
  ['Journey Request', 'Initiate a journey request'],
  ['Agents', 'Invite your team'],
];

function Popover({
  label,
  children,
  initialOpen = false,
  icon,
}: {
  label: string;
  children: ReactNode;
  initialOpen?: boolean;
  icon?: ReactNode;
}) {
  const [open, setOpen] = useState(initialOpen);
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  function escape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      setOpen(false);
      trigger.current?.focus();
    }
  }
  return (
    <div className={styles.popoverWrap} onKeyDown={escape}>
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {icon}
        {label}
        <ChevronDown size={14} />
      </button>
      {open && (
        <div id={id} className={styles.popover} role="group" aria-label={label + ' options'}>
          {children}
        </div>
      )}
    </div>
  );
}

function Trial({ guard }: { guard: Guard }) {
  return (
    <div className={styles.trial}>
      <span>
        You have <strong>14 days</strong> left in your <strong>Freshservice Enterprise</strong> free
        trial
      </span>
      <button type="button" onClick={() => guard('Buy Freshservice')}>
        Buy Freshservice
      </button>
      <button type="button" onClick={() => guard('Request demo')}>
        Request demo
      </button>
      <span className={styles.spacer} />
      <button type="button" onClick={() => guard('Setup & Explore')}>
        Setup & Explore <span className={styles.progress} />
      </button>
    </div>
  );
}

function CreateMenu({ guard, initialExpanded }: { guard: Guard; initialExpanded?: boolean }) {
  return (
    <Popover label="Create" icon={<Plus size={16} />} initialOpen={initialExpanded}>
      <div className={styles.createGrid}>
        {createActions.map(([title, detail]) => (
          <button
            type="button"
            key={title}
            aria-label={`${title}: ${detail}`}
            onClick={() => guard(title)}
          >
            <strong>{title}</strong>
            <small>{detail}</small>
          </button>
        ))}
      </div>
    </Popover>
  );
}

function WorkMenu({ guard, initialExpanded }: { guard: Guard; initialExpanded?: boolean }) {
  return (
    <Popover label="My Work" icon={<CalendarDays size={16} />} initialOpen={initialExpanded}>
      {['Work Calendar', 'On-call Calendar'].map((label) => (
        <button key={label} type="button" className={styles.menuRow} onClick={() => guard(label)}>
          <CalendarDays size={16} />
          {label}
        </button>
      ))}
    </Popover>
  );
}

function Header({ guard }: { guard: Guard }) {
  return (
    <header className={styles.header}>
      <strong>Onboarding Guide</strong>
      <span className={styles.spacer} />
      <button type="button" onClick={() => guard('Chat with us')}>
        Chat with us
      </button>
      <label className={styles.search}>
        <Search size={15} />
        <input
          aria-label="Search local preview"
          placeholder="Search"
          onChange={() => guard('Global search')}
        />
        <kbd>/</kbd>
      </label>
      <CreateMenu guard={guard} />
      <WorkMenu guard={guard} />
      <button type="button" aria-label="Quick Help" onClick={() => guard('Quick Help')}>
        <HelpCircle size={17} />
      </button>
      <button type="button" aria-label="Notifications" onClick={() => guard('Notifications')}>
        <Bell size={17} />
      </button>
      <button type="button" aria-label="Marketplace Apps" onClick={() => guard('Marketplace Apps')}>
        <Grid2X2 size={17} />
      </button>
    </header>
  );
}

function Sidebar({ guard, initialExpanded = false }: { guard: Guard; initialExpanded?: boolean }) {
  const [expanded, setExpanded] = useState(initialExpanded);
  const [tickets, setTickets] = useState(true);
  const [active, setActive] = useState('Tickets');
  return (
    <aside
      className={`${styles.sidebar} ${expanded ? styles.sidebarWide : ''}`}
      aria-label="Preview sidebar"
    >
      <div className={styles.brand}>
        <Zap size={20} />
        {expanded && <strong>Example service desk</strong>}
      </div>
      <button
        type="button"
        aria-label={expanded ? 'Collapse navigation' : 'Expand navigation'}
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        <Menu size={18} />
      </button>
      <nav aria-label="Freshservice reference navigation">
        {navigation.map((name, i) => (
          <div key={name}>
            <button
              type="button"
              title={name}
              aria-label={name}
              aria-current={active === name ? 'page' : undefined}
              aria-expanded={name === 'Tickets' ? tickets : undefined}
              className={active === name ? styles.selected : ''}
              onClick={() => {
                setActive(name);
                if (name === 'Tickets') setTickets(!tickets);
                else guard(name);
              }}
            >
              {i === 1 ? (
                <LayoutDashboard size={17} />
              ) : name === 'Tickets' ? (
                <Ticket size={17} />
              ) : name === 'Admin' ? (
                <Settings size={17} />
              ) : (
                <Grid2X2 size={17} />
              )}{' '}
              {expanded && <span>{name}</span>}
              {expanded && name === 'Tickets' && <ChevronDown size={14} />}
            </button>
            {expanded && name === 'Tickets' && tickets && (
              <div className={styles.subnav}>
                {['List', 'Board'].map((item) => (
                  <button key={item} type="button" onClick={() => guard('Tickets ' + item)}>
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <button
        type="button"
        aria-label="Freshworks Switcher"
        onClick={() => guard('Freshworks Switcher')}
      >
        <Grid2X2 size={17} />
        {expanded && 'Freshworks Switcher'}
      </button>
    </aside>
  );
}

function Setup({ guard }: { guard: Guard }) {
  return (
    <section className={styles.setup} aria-label="Quick setup">
      <div className={styles.row}>
        <div>
          <h2>Quick setup</h2>
          <p>Let’s begin with some basics to get started with Freshservice</p>
        </div>
        <div className={styles.counter}>
          <strong>0/4</strong>
          <small>Completed</small>
        </div>
      </div>
      <div className={styles.setupSteps}>
        {setupSteps.map((step) => (
          <button key={step} type="button" onClick={() => guard(step)}>
            <Circle size={16} />
            {step}
          </button>
        ))}
      </div>
    </section>
  );
}

function Features({ guard, initialExpanded = false }: { guard: Guard; initialExpanded?: boolean }) {
  const [open, setOpen] = useState<string[]>(
    initialExpanded ? ['Ticketing', 'Service Management'] : ['Ticketing']
  );
  const base = useId();
  return (
    <section className={styles.card}>
      <div className={styles.cardHead}>
        <BookOpen size={22} />
        <div>
          <h2>Explore Freshservice</h2>
          <p>Discover features to help your service team get started.</p>
        </div>
      </div>
      {Object.entries(featureGroups).map(([name, actions], i) => (
        <div key={name} className={styles.feature}>
          <h3>
            <button
              type="button"
              aria-expanded={open.includes(name)}
              aria-controls={`${base}-${i}`}
              onClick={() =>
                setOpen(open.includes(name) ? open.filter((n) => n !== name) : [...open, name])
              }
            >
              <Ticket size={16} />
              <span>{name}</span>
              <ChevronDown size={16} />
            </button>
          </h3>
          {open.includes(name) && (
            <div
              role="region"
              aria-label={name}
              id={`${base}-${i}`}
              className={styles.featureActions}
            >
              {actions ? (
                actions.map((action) => (
                  <button key={action} type="button" onClick={() => guard(action)}>
                    <Circle size={16} />
                    {action}
                  </button>
                ))
              ) : (
                <p className={styles.boundary}>
                  This section’s contents were not inspected in the provider. No actions are
                  reconstructed.
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

function TicketEmpty({ guard, openForm }: { guard: Guard; openForm?: () => void }) {
  const paths = [
    ['Connect your support email', 'Convert your emails to service desk tickets'],
    ['Request from self-service portal', 'Raise a request for a service item'],
    ['Create tickets manually', 'Add using a ticket form'],
  ];
  return (
    <section className={styles.empty}>
      <div className={styles.emptyIcon}>
        <Ticket size={36} />
      </div>
      <h2>Create your first ticket</h2>
      <p>Create tickets in your service desk using the options below</p>
      <div className={styles.entryCards}>
        {paths.map(([title, desc], i) => (
          <button
            type="button"
            key={title}
            onClick={() => (i === 2 && openForm ? openForm() : guard(title))}
          >
            <strong>{title}</strong>
            <span>{desc}</span>
            <ArrowRight size={16} />
          </button>
        ))}
      </div>
      <button
        type="button"
        className={styles.linkButton}
        onClick={() => guard('Get started with sample data')}
      >
        or Get started with sample data
      </button>
    </section>
  );
}

function Template({ guard, initialExpanded }: { guard: Guard; initialExpanded?: boolean }) {
  return (
    <div className={styles.field}>
      <span>Select template</span>
      <Popover label="Search templates" initialOpen={initialExpanded}>
        <p>No template has been created</p>
        <button
          type="button"
          className={styles.linkButton}
          onClick={() => guard('Create new template')}
        >
          <Plus size={15} />
          Create new template
        </button>
      </Popover>
      <small>Fill your form in a click using predefined form values.</small>
    </div>
  );
}

function Requester({
  guard,
  initialExpanded = false,
}: {
  guard: Guard;
  initialExpanded?: boolean;
}) {
  const [cc, setCc] = useState(initialExpanded);
  return (
    <div className={styles.field}>
      <label>
        Requester <span className={styles.required}>*</span>
        <input
          name="requester"
          aria-label="Requester"
          placeholder="Search requesters (fictional preview)"
        />
      </label>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.linkButton}
          onClick={() => guard('Add new requester')}
        >
          <Users size={14} />
          Add new requester
        </button>
        <span className={styles.spacer} />
        <button type="button" aria-expanded={cc} onClick={() => setCc(!cc)}>
          {cc ? 'Hide Cc' : 'Add Cc'}
        </button>
      </div>
      {cc && (
        <label>
          Cc
          <input name="cc" aria-label="Cc" placeholder="Add fictional recipients" />
        </label>
      )}
    </div>
  );
}

function Choice({ label, options }: { label: string; options: string[] }) {
  const [value, setValue] = useState(options[0]);
  return (
    <label className={styles.field}>
      {label}
      {['Status', 'Priority'].includes(label) && <span className={styles.required}> *</span>}
      <select aria-label={label} value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function StatusFields() {
  return (
    <div className={styles.fieldGrid}>
      <Choice label="Status" options={['Open', 'Pending', 'Resolved', 'Closed']} />
      <Choice label="Priority" options={['Low', 'Medium', 'High', 'Urgent']} />
      <Choice label="Urgency" options={['Low']} />
      <Choice label="Impact" options={['Low']} />
    </div>
  );
}

function Editor({ guard }: { guard: Guard }) {
  const id = useId();
  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        Description <span className={styles.required}>*</span>
      </label>
      <div className={styles.editor}>
        <div className={styles.editorToolbar} role="group" aria-label="Description formatting">
          {[
            'Paragraph Format',
            'Bold',
            'Italic',
            'Underline',
            'Strikethrough',
            'Text Color',
            'Align',
            'Insert Link',
            'Insert Image',
          ].map((action) => (
            <button key={action} type="button" onClick={() => guard(action)}>
              {action}
            </button>
          ))}
          <button
            type="button"
            aria-label="More formatting"
            onClick={() => guard('More formatting')}
          >
            <MoreHorizontal size={16} />
          </button>
        </div>
        <textarea
          id={id}
          name="description"
          aria-label="Description"
          placeholder="Enter description"
        />
        <button
          type="button"
          className={styles.linkButton}
          onClick={() => guard('Insert Canned Response')}
        >
          Insert Canned Response
        </button>
      </div>
    </div>
  );
}

function Articles({ guard }: { guard: Guard }) {
  return (
    <aside className={styles.articles} aria-label="Related articles">
      <BookOpen size={22} />
      <h3>Related articles</h3>
      <p>Type in the “Subject” and we’ll find answers for you in our knowledge base</p>
      <button
        type="button"
        className={styles.linkButton}
        onClick={() => guard('Related article search')}
      >
        Preview evidence boundary
      </button>
    </aside>
  );
}

function Attachments({ guard }: { guard: Guard }) {
  return (
    <section className={styles.field} aria-label="Attachments">
      <div>
        Attachments <small>(File size &lt; 40 MB)</small>
      </div>
      <button type="button" className={styles.dropzone} onClick={() => guard('Attach files')}>
        <Paperclip size={20} />
        <strong>Attach files</strong>
        <span>or Drop files here</span>
      </button>
      <small>Preview only. Upload and file validation were not exercised.</small>
    </section>
  );
}

function Incident({ guard, onCancel }: { guard: Guard; onCancel?: () => void }) {
  return (
    <div className={styles.incidentLayout}>
      <form
        className={styles.incident}
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          guard('Submit incident');
        }}
      >
        <h2>New Incident</h2>
        <Template guard={guard} />
        <Requester guard={guard} />
        <label className={styles.field}>
          Subject <span className={styles.required}>*</span>
          <input aria-label="Subject" name="subject" />
        </label>
        <Choice label="Source" options={['Phone']} />
        <StatusFields />
        <div className={styles.fieldGrid}>
          <Choice label="Group" options={['--']} />
          <Choice label="Agent" options={['--']} />
          <Choice label="Department" options={['--']} />
          <Choice label="Category" options={['--']} />
        </div>
        <Editor guard={guard} />
        <div className={styles.fieldGrid}>
          <label className={styles.field}>
            Planned Start Date
            <input aria-label="Planned Start Date" placeholder="DD-MM-YYYY" />
          </label>
          <label className={styles.field}>
            Planned End Date
            <input aria-label="Planned End Date" placeholder="DD-MM-YYYY" />
          </label>
        </div>
        <label className={styles.field}>
          Planned Effort
          <input aria-label="Planned Effort" placeholder="Eg: 1h 10m" />
        </label>
        <label className={styles.field}>
          Tags
          <input aria-label="Tags" placeholder="Local tags" />
        </label>
        <button type="button" onClick={() => guard('Associate CIs')}>
          Associate CIs
        </button>
        <Attachments guard={guard} />
        <div className={styles.formFooter}>
          <button type="button" onClick={() => (onCancel ? onCancel() : guard('Cancel'))}>
            Cancel
          </button>
          <button type="submit" className={styles.primary}>
            Submit
          </button>
        </div>
      </form>
      <Articles guard={guard} />
    </div>
  );
}

export function Freshservice({
  variant = 'application-shell',
  initialExpanded = false,
}: FreshserviceProps) {
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const guard: Guard = (action) =>
    setMessage(
      `${action}: local demonstration only. No request was sent and no provider data was changed. Provider completion needs verification.`
    );
  const onboarding = (
    <div className={styles.onboarding}>
      <div>
        <Setup guard={guard} />
        <Features guard={guard} initialExpanded={initialExpanded} />
      </div>
      <section className={styles.articles}>
        <h3>Customized for You</h3>
        <button
          type="button"
          className={styles.integration}
          onClick={() => guard('Popular Integrations')}
        >
          <Grid2X2 size={22} />
          <strong>Popular Integrations</strong>
          <span>Extend your service desk with your favorite apps</span>
        </button>
      </section>
    </div>
  );
  const content: Record<FreshserviceVariant, () => ReactNode> = {
    'application-shell': () => (
      <>
        <Trial guard={guard} />
        <div className={styles.shell}>
          <Sidebar guard={guard} initialExpanded={initialExpanded} />
          <div className={styles.workspace}>
            <Header guard={guard} />
            {onboarding}
          </div>
        </div>
      </>
    ),
    'sidebar-navigation': () => (
      <div className={styles.sidebarStage}>
        <Sidebar guard={guard} initialExpanded={initialExpanded} />
        <div className={styles.navPlaceholder}>
          <h2>Workspace navigation</h2>
          <p>Expand the rail to expose labels and the Tickets subnavigation.</p>
          <p className={styles.boundary}>
            Local navigation states only. Destination screens are not loaded here.
          </p>
        </div>
      </div>
    ),
    'global-header': () => (
      <div className={styles.headerStage}>
        <Header guard={guard} />
        <p className={styles.boundary}>
          The search and utility actions are guarded. No provider search is simulated.
        </p>
      </div>
    ),
    'trial-banner': () => (
      <div className={styles.headerStage}>
        <Trial guard={guard} />
        <p className={styles.boundary}>
          Observed 14-day trial copy, not a current pricing or entitlement promise.
        </p>
      </div>
    ),
    'setup-checklist': () => <Setup guard={guard} />,
    'feature-accordion': () => <Features guard={guard} initialExpanded={initialExpanded} />,
    'create-menu': () => (
      <div className={styles.menuStage}>
        <CreateMenu guard={guard} initialExpanded={initialExpanded} />
      </div>
    ),
    'my-work-menu': () => (
      <div className={styles.menuStage}>
        <WorkMenu guard={guard} initialExpanded={initialExpanded} />
      </div>
    ),
    'ticket-empty-state': () =>
      showForm ? (
        <Incident guard={guard} onCancel={() => setShowForm(false)} />
      ) : (
        <TicketEmpty guard={guard} openForm={() => setShowForm(true)} />
      ),
    'new-incident-form': () => <Incident guard={guard} />,
    'template-picker': () => (
      <div className={styles.menuStage}>
        <Template guard={guard} initialExpanded={initialExpanded} />
      </div>
    ),
    'cc-disclosure': () => <Requester guard={guard} initialExpanded={initialExpanded} />,
    'status-priority-fields': () => <StatusFields />,
    'description-editor': () => <Editor guard={guard} />,
    'related-articles-empty': () => <Articles guard={guard} />,
    'attachment-zone': () => <Attachments guard={guard} />,
  };
  return (
    <div className={styles.root}>
      <div className={styles.evidenceLabel}>
        <span>FRESHSERVICE REFERENCE</span>
        <span>Fictional local preview · observed October 1, 2026</span>
      </div>
      {content[variant]()}
      <div className={styles.notice} role="status" aria-live="polite">
        {message ||
          'Reconstructed from observed Freshservice screens. Actions stay in this preview.'}
        {message && (
          <button type="button" aria-label="Dismiss preview notice" onClick={() => setMessage('')}>
            <X size={15} />
          </button>
        )}
      </div>
    </div>
  );
}

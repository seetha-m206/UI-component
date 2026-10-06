import { useState } from 'react';
import { Paperclip, Search, X } from 'lucide-react';
import styles from './freshserviceRemaining.module.css';

export type RemainingVariant =
  | 'problem-empty'
  | 'problem-form'
  | 'problem-classification'
  | 'ci-association'
  | 'change-empty'
  | 'change-form'
  | 'change-planning'
  | 'release-empty'
  | 'release-form'
  | 'release-type'
  | 'task-table'
  | 'task-filters'
  | 'task-columns'
  | 'alert-empty'
  | 'alert-filters';

export interface RemainingProps {
  variant?: RemainingVariant;
  initialNotice?: string;
}
type Guard = (action: string) => void;

const collections = {
  problem: {
    title: 'Report your first problem',
    body: 'Identify service interruptions, manage root causes, and prevent future incidents for enhanced service quality.',
    action: 'Report a Problem',
  },
  change: {
    title: 'Create your first change',
    body: 'Automate change approvals, set up Change Advisory Board (CAB) meetings, and track change lifecycle.',
    action: 'Create a Change',
  },
  release: {
    title: 'Create your first release',
    body: 'Plan, schedule, and manage releases for seamless and secure deployments.',
    action: 'Create a Release',
  },
  alert: {
    title: 'No alerts in this view',
    body: "You don't have anything to see in this view. Modify the filters or complete your monitoring tool setup to start seeing alerts.",
    action: 'Add monitoring tool',
  },
};

function Collection({ kind, guard }: { kind: keyof typeof collections; guard: Guard }) {
  const item = collections[kind];
  return (
    <main className={styles.collection}>
      <div className={styles.emptyIcon}>{kind.slice(0, 1).toUpperCase()}</div>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
      <div className={styles.actions}>
        <button className={styles.primary} onClick={() => guard(item.action)}>
          {item.action}
        </button>
        {kind !== 'alert' && (
          <button onClick={() => guard('Get started with sample data')}>
            Get started with sample data
          </button>
        )}
      </div>
    </main>
  );
}

const fieldOptions: Record<string, string[]> = {
  'Problem status': ['Open', 'Change Requested', 'Closed'],
  Priority: ['Low', 'Medium', 'High', 'Urgent'],
  Impact: ['Low', 'Medium', 'High'],
  'Change type': ['Minor', 'Standard', 'Major', 'Emergency'],
  Risk: ['Low', 'Medium', 'High', 'Very High'],
  'Release type': ['Minor', 'Standard', 'Major', 'Emergency'],
};

function SelectField({
  name,
  options,
  initial,
}: {
  name: string;
  options: string[];
  initial?: string;
}) {
  const [value, setValue] = useState(initial ?? options[0]);
  return (
    <label>
      {name}
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function Classification({ kind }: { kind: 'problem' | 'change' | 'release' }) {
  return (
    <main className={styles.card}>
      <h2>
        {kind === 'problem'
          ? 'Problem status, priority and impact'
          : kind === 'change'
            ? 'Change classification'
            : 'Release type'}
      </h2>
      <div className={styles.grid}>
        {kind === 'problem' ? (
          <>
            <SelectField name="Status" options={fieldOptions['Problem status']} />
            <SelectField name="Priority" options={fieldOptions.Priority} />
            <SelectField name="Impact" options={fieldOptions.Impact} />
          </>
        ) : kind === 'change' ? (
          <>
            <SelectField name="Change Type" options={fieldOptions['Change type']} />
            <SelectField name="Priority" options={fieldOptions.Priority} />
            <SelectField name="Impact" options={fieldOptions.Impact} />
            <SelectField name="Risk" options={fieldOptions.Risk} />
          </>
        ) : (
          <SelectField name="Release Type" options={fieldOptions['Release type']} />
        )}
      </div>
      <p className={styles.muted}>Selections update this local reconstruction only.</p>
    </main>
  );
}

function Planning({ guard }: { guard: Guard }) {
  const [open, setOpen] = useState('');
  const headings = ['Reason for Change', 'Impact', 'Rollout Plan', 'Backout Plan'];
  return (
    <main className={styles.card}>
      <h2>Planning</h2>
      <p className={styles.muted}>
        Each Add control opens a rich text editor and attachment entry. One editor is shown at a
        time.
      </p>
      {headings.map((heading) => (
        <section className={styles.planSection} key={heading}>
          <div>
            <h3>{heading}</h3>
            <button
              onClick={() => setOpen(open === heading ? '' : heading)}
              aria-expanded={open === heading}
            >
              {open === heading ? 'Close' : `Add ${heading}`}
            </button>
          </div>
          {open === heading && (
            <div className={styles.planEditor}>
              <div className={styles.toolbar}>Bold · Italic · Underline · Lists · Link · Image</div>
              <textarea aria-label={heading} placeholder={`Enter ${heading.toLowerCase()}`} />
              <button onClick={() => guard(`Attach ${heading} file`)}>
                <Paperclip size={15} /> Attach files under 40 MB
              </button>
            </div>
          )}
        </section>
      ))}
    </main>
  );
}

function WorkForm({ kind, guard }: { kind: 'problem' | 'change' | 'release'; guard: Guard }) {
  const [subject, setSubject] = useState('');
  return (
    <main className={styles.form}>
      <header>
        <div>
          <small>{kind.toUpperCase()}</small>
          <h2>New {kind}</h2>
        </div>
        <button onClick={() => guard('Cancel form')}>Cancel</button>
        <button className={styles.primary} onClick={() => guard('Submit form')}>
          Submit
        </button>
      </header>
      <div className={styles.formBody}>
        {kind === 'change' && (
          <label>
            Select template
            <input placeholder="Search" />
          </label>
        )}
        {kind !== 'release' && (
          <label>
            Requester
            <input placeholder="Search requester" />
          </label>
        )}
        <label>
          Subject
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject"
          />
        </label>
        <label>
          Description
          <div className={styles.toolbar}>Bold · Italic · Underline · Lists · Link · Image</div>
          <textarea placeholder="Enter description" />
        </label>
        <div className={styles.grid}>
          {kind === 'problem' && (
            <SelectField name="Status" options={fieldOptions['Problem status']} />
          )}
          {kind === 'change' && (
            <>
              <SelectField name="Change Type" options={fieldOptions['Change type']} />
              <label>
                Status
                <input value="Open" readOnly />
              </label>
            </>
          )}
          {kind === 'release' && (
            <>
              <SelectField name="Status" options={['Open']} />
              <SelectField name="Release Type" options={fieldOptions['Release type']} />
            </>
          )}
          <SelectField name="Priority" options={fieldOptions.Priority} />
          {kind !== 'release' && <SelectField name="Impact" options={fieldOptions.Impact} />}
          {kind === 'change' && <SelectField name="Risk" options={fieldOptions.Risk} />}
          <label>
            Group
            <input placeholder="Search group" />
          </label>
          <label>
            Agent
            <input placeholder="Select agent" />
          </label>
          <label>
            Department
            <input placeholder="Select department" />
          </label>
          <label>
            Category
            <input placeholder="Search category" />
          </label>
          <label>
            Planned Start Date
            <input type="date" />
          </label>
          <label>
            Planned End Date
            <input type="date" />
          </label>
          <label>
            Planned Effort
            <input type="number" min="0" />
          </label>
          {kind === 'change' && (
            <label>
              Maintenance Window
              <input placeholder="Select" />
            </label>
          )}
        </div>
        <div className={styles.actions}>
          <button onClick={() => guard('Associate CIs')}>Associate CIs</button>
          <button onClick={() => guard('Attach files')}>
            <Paperclip size={15} /> Attach files under 40 MB
          </button>
        </div>
        {kind === 'change' && <Planning guard={guard} />}
      </div>
    </main>
  );
}

function CiAssociation({ guard }: { guard: Guard }) {
  const [tab, setTab] = useState('Inventory');
  return (
    <main className={styles.drawerStage}>
      <aside className={styles.drawer}>
        <header>
          <h2>Associate items from CMDB</h2>
          <button aria-label="Close" onClick={() => guard('Close CMDB drawer')}>
            <X size={17} />
          </button>
        </header>
        <nav>
          {['Inventory', 'Services'].map((value) => (
            <button
              key={value}
              aria-current={tab === value ? 'page' : undefined}
              onClick={() => setTab(value)}
            >
              {value}
            </button>
          ))}
        </nav>
        {tab === 'Inventory' ? (
          <>
            <SelectField name="Asset class" options={['Devices']} />
            <div className={styles.empty}>
              <h3>No Devices found</h3>
              <p>
                Devices added manually, imported in bulk, or discovered through scans will appear
                here.
              </p>
            </div>
          </>
        ) : (
          <div className={styles.empty}>
            <h3>No Business services found.</h3>
            <p>Business services you add manually or import in bulk will appear here.</p>
          </div>
        )}
        <button onClick={() => guard('Import CMDB items')}>Import</button>
      </aside>
    </main>
  );
}

const fictionalTasks = [
  {
    title: 'Review service catalogue wording',
    owner: 'Example Agent',
    status: 'Yet to start',
    due: '20 Oct 2026',
    parent: 'Example Project',
  },
  {
    title: 'Prepare internal onboarding checklist',
    owner: 'Example Agent',
    status: 'Work in progress',
    due: '27 Oct 2026',
    parent: 'Example Project',
  },
  {
    title: 'Confirm knowledge article structure',
    owner: 'Example Agent',
    status: 'Completed',
    due: '03 Nov 2026',
    parent: 'Example Project',
  },
];

function TaskTable({ guard }: { guard: Guard }) {
  const [compact, setCompact] = useState(false);
  return (
    <main className={styles.card}>
      <header className={styles.tableHead}>
        <div>
          <h2>Tasks</h2>
          <small>Fictional rows based on the observed table structure</small>
        </div>
        <button onClick={() => setCompact(!compact)}>
          {compact ? 'Default view' : 'Compact view'}
        </button>
      </header>
      <div className={styles.tableScroll}>
        <table className={compact ? styles.compact : ''}>
          <thead>
            <tr>
              {['Title', 'Assigned To', 'Status', 'Due Date', 'Created Date', 'Parent'].map((v) => (
                <th key={v}>{v}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fictionalTasks.map((t) => (
              <tr key={t.title}>
                <td>
                  <button onClick={() => guard(`Open ${t.title}`)}>{t.title}</button>
                </td>
                <td>{t.owner}</td>
                <td>{t.status}</td>
                <td>{t.due}</td>
                <td>05 Oct 2026</td>
                <td>{t.parent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

function TaskFilters({ guard }: { guard: Guard }) {
  const [parent, setParent] = useState('All Parent Types');
  return (
    <main className={styles.card}>
      <h2>Task filters</h2>
      <div className={styles.grid}>
        <label>
          Parent type
          <select value={parent} onChange={(e) => setParent(e.target.value)}>
            {['All Parent Types', 'Ticket', 'Problem', 'Change', 'Release', 'Project Tasks'].map(
              (v) => (
                <option key={v}>{v}</option>
              )
            )}
          </select>
        </label>
        <SelectField
          name="Status"
          options={['All Unresolved', 'Open', 'In Progress', 'Completed']}
        />
        <label>
          Agents
          <input defaultValue="Me" />
        </label>
        <label>
          Groups
          <input placeholder="Select groups" />
        </label>
        <SelectField name="Created" options={['Last 6 months', 'Select a time period']} />
        <label>
          Due by
          <input placeholder="Select a time period" />
        </label>
        <label>
          Planned Start Date
          <input placeholder="Select a time period" />
        </label>
        <label>
          Planned End Date
          <input placeholder="Select a time period" />
        </label>
      </div>
      <button className={styles.primary} onClick={() => guard('Apply task filters')}>
        Apply
      </button>
    </main>
  );
}

function TaskColumns({ guard }: { guard: Guard }) {
  const names = [
    'Title',
    'Assigned To',
    'Status',
    'Due Date',
    'Created Date',
    'Parent',
    'Planned Start Date',
    'Planned End Date',
    'Planned Effort',
  ];
  const [selected, setSelected] = useState(names.slice(0, 6));
  const [density, setDensity] = useState('Default view');
  return (
    <main className={styles.card}>
      <h2>Customize columns</h2>
      <fieldset className={styles.radioRow}>
        <legend>Row density</legend>
        {['Default view', 'Compact view'].map((v) => (
          <label key={v}>
            <input type="radio" checked={density === v} onChange={() => setDensity(v)} />
            {v}
          </label>
        ))}
      </fieldset>
      <div className={styles.columns}>
        <section>
          <h3>Choose columns</h3>
          {names.map((v) => (
            <label key={v}>
              <input
                type="checkbox"
                checked={selected.includes(v)}
                disabled={v === 'Title'}
                onChange={() =>
                  setSelected((current) =>
                    current.includes(v) ? current.filter((x) => x !== v) : [...current, v]
                  )
                }
              />
              {v}
            </label>
          ))}
        </section>
        <section>
          <h3>Selected columns ({selected.length})</h3>
          {selected.map((v) => (
            <div key={v}>
              {v}
              {v !== 'Title' && (
                <button onClick={() => setSelected((current) => current.filter((x) => x !== v))}>
                  Remove
                </button>
              )}
            </div>
          ))}
        </section>
      </div>
      <div className={styles.actions}>
        <button onClick={() => guard('Cancel column changes')}>Cancel</button>
        <button className={styles.primary} onClick={() => guard('Update columns')}>
          Update
        </button>
      </div>
    </main>
  );
}

function AlertFilters({ guard }: { guard: Guard }) {
  return (
    <main className={styles.card}>
      <h2>Alert filters</h2>
      <div className={styles.grid}>
        <label>
          Search a form field
          <div className={styles.search}>
            <Search size={15} />
            <input placeholder="Search" />
          </div>
        </label>
        {[
          'Created on',
          'Updated on',
          'Alert Resource',
          'Tags',
          'Integration name',
          'Impacted Business Service',
          'Acknowledged by',
        ].map((v) => (
          <label key={v}>
            {v}
            <input placeholder="Select" />
          </label>
        ))}
        <SelectField name="Severity" options={['Select', 'ok', 'warning', 'error', 'critical']} />
        <SelectField name="Status" options={['Select', 'Open', 'Reopen', 'Resolved']} />
        <SelectField name="Ticket association" options={['Select', 'Associated', 'Unassociated']} />
        <SelectField name="Suppression status" options={['Select', 'Suppressed', 'Unsuppressed']} />
      </div>
      <button className={styles.primary} onClick={() => guard('Apply alert filters')}>
        Apply
      </button>
    </main>
  );
}

export function FreshserviceRemaining({
  variant = 'problem-empty',
  initialNotice,
}: RemainingProps) {
  const [notice, setNotice] = useState(
    initialNotice ?? 'Local reconstruction of observed Freshservice screens. No provider requests.'
  );
  const guard: Guard = (action) =>
    setNotice(`${action}: local demonstration only. No request was sent.`);
  const emptyKind = variant.endsWith('-empty')
    ? (variant.split('-')[0] as keyof typeof collections)
    : null;
  return (
    <section className={styles.root}>
      <div className={styles.eyebrow}>FRESHSERVICE REFERENCE</div>
      {emptyKind && <Collection kind={emptyKind} guard={guard} />}
      {variant === 'problem-form' && <WorkForm kind="problem" guard={guard} />}
      {variant === 'problem-classification' && <Classification kind="problem" />}
      {variant === 'ci-association' && <CiAssociation guard={guard} />}
      {variant === 'change-form' && <WorkForm kind="change" guard={guard} />}
      {variant === 'change-planning' && <Planning guard={guard} />}
      {variant === 'release-form' && <WorkForm kind="release" guard={guard} />}
      {variant === 'release-type' && <Classification kind="release" />}
      {variant === 'task-table' && <TaskTable guard={guard} />}
      {variant === 'task-filters' && <TaskFilters guard={guard} />}
      {variant === 'task-columns' && <TaskColumns guard={guard} />}
      {variant === 'alert-filters' && <AlertFilters guard={guard} />}
      <div className={styles.notice} role="status">
        {notice}
      </div>
    </section>
  );
}

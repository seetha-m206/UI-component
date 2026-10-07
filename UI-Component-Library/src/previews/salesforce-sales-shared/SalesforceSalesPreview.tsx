import { useState } from 'react';
import styles from './SalesforceSalesPreview.module.css';

export type SalesforceSalesVariant =
  | 'application-shell'
  | 'object-list-workspace'
  | 'new-lead-form'
  | 'new-contact-form'
  | 'new-account-form'
  | 'new-opportunity-form'
  | 'new-product-wizard'
  | 'new-event-form'
  | 'new-task-form'
  | 'opportunity-kanban'
  | 'calendar-week'
  | 'todo-utility'
  | 'analytics-collection'
  | 'performance-dashboard'
  | 'forecast-report'
  | 'quotes-access-boundary'
  | 'leads-import-flow'
  | 'invoice-list'
  | 'agentforce-enable-panel'
  | 'quick-settings';

export interface SalesforceSalesPreviewProps {
  variant: SalesforceSalesVariant;
  initialState?: string;
  disabled?: boolean;
}

function Notice({ children }: { children: string }) {
  return children ? (
    <div className={styles.notice} role="status">
      {children}
    </div>
  ) : null;
}

function Shell({
  children,
  onNotice,
}: {
  children: React.ReactNode;
  onNotice: (value: string) => void;
}) {
  const tabs = [
    'Leads',
    'Contacts',
    'Accounts',
    'Opportunities',
    'Products',
    'Price Books',
    'Calendar',
  ];
  return (
    <div className={styles.shell}>
      <aside className={styles.rail} aria-label="Fictional product navigation">
        <strong>☁</strong>
        {['Home', 'People', 'Accounts', 'Sales', 'Service'].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onNotice(`${item} stayed inside this fictional fixture.`)}
          >
            {item.slice(0, 1)}
          </button>
        ))}
      </aside>
      <div className={styles.workspace}>
        <div className={styles.trial}>
          RECONSTRUCTION · fictional local data · no provider writes
        </div>
        <header className={styles.header}>
          <b>Sales</b>
          <input aria-label="Search fictional Salesforce data" placeholder="Search…" disabled />
          <button type="button" onClick={() => onNotice('Agentforce was not enabled.')}>
            AI
          </button>
          <button
            type="button"
            onClick={() => onNotice('Quick Settings opened only in the dedicated fixture.')}
          >
            ⚙
          </button>
        </header>
        <nav className={styles.tabs} aria-label="Sales navigation">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => onNotice(`${tab} navigation is simulated locally.`)}
            >
              {tab}
            </button>
          ))}
          <button
            type="button"
            onClick={() =>
              onNotice(
                'More contains Analytics, Invoices and Video Calls in the observed workspace.'
              )
            }
          >
            More ▾
          </button>
        </nav>
        <main className={styles.main}>{children}</main>
        <footer className={styles.utility}>☷ To Do List</footer>
      </div>
    </div>
  );
}

function EmptyList({
  object = 'Leads',
  invoice = false,
  onNotice,
}: {
  object?: string;
  invoice?: boolean;
  onNotice: (value: string) => void;
}) {
  const columns = invoice
    ? [
        'Document Number',
        'Last Modified Date',
        'Last Modified By',
        'Billing Account',
        'Bill To Contact',
      ]
    : [
        'Name',
        'Company',
        'State/Province',
        'Phone',
        'Email',
        'Lead Status',
        'Created Date',
        'Owner Alias',
      ];
  return (
    <section>
      <div className={styles.titleRow}>
        <div>
          <small>{object}</small>
          <h1>{invoice ? 'Recently Viewed' : `All Open ${object}`}</h1>
        </div>
        <button
          type="button"
          onClick={() => onNotice(`No ${object.toLowerCase()} record was created.`)}
        >
          New
        </button>
      </div>
      <div className={styles.actions}>
        {!invoice && (
          <button
            type="button"
            onClick={() =>
              onNotice('Open the dedicated import fixture to inspect the observed steps.')
            }
          >
            Import
          </button>
        )}
        <button
          type="button"
          onClick={() => onNotice('List controls were demonstrated without saving changes.')}
        >
          List View Controls ▾
        </button>
        <button
          type="button"
          onClick={() => onNotice('Display choices are Table, Kanban and Split View.')}
        >
          Table ▾
        </button>
        <input aria-label={`Search fictional ${object}`} placeholder="Search this list…" />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}⌄</th>
            ))}
          </tr>
        </thead>
        <tbody />
      </table>
      <div className={styles.empty}>
        <b>{invoice ? 'No invoices yet' : 'Focus on the right leads'}</b>
        <span>
          {invoice
            ? 'Keep customer billing details together.'
            : 'This source view contained zero displayed records.'}
        </span>
      </div>
    </section>
  );
}

function LeadForm({ onNotice }: { onNotice: (value: string) => void }) {
  return (
    <section className={styles.modal}>
      <h2>New Lead</h2>
      <fieldset>
        <legend>About</legend>
        <label>
          First Name
          <input defaultValue="Mira" />
        </label>
        <label>
          Last Name *<input defaultValue="Chen" />
        </label>
        <label>
          Company *<input defaultValue="Northstar Works" />
        </label>
        <label>
          Lead Status
          <select defaultValue="New">
            <option>New</option>
          </select>
        </label>
      </fieldset>
      <fieldset>
        <legend>Get in Touch</legend>
        <label>
          Email
          <input defaultValue="mira@example.test" />
        </label>
        <label>
          Phone
          <input defaultValue="555-0104" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Segment</legend>
        <label>
          Industry
          <input defaultValue="Professional Services" />
        </label>
      </fieldset>
      <div className={styles.footerActions}>
        <button
          type="button"
          onClick={() => onNotice('Form reset locally. No provider form was opened.')}
        >
          Cancel
        </button>
        <button type="button" onClick={() => onNotice('Fictional lead was not saved.')}>
          Save
        </button>
      </div>
    </section>
  );
}

function RecordForm({
  kind,
  onNotice,
}: {
  kind: 'Contact' | 'Account' | 'Opportunity';
  onNotice: (value: string) => void;
}) {
  const fields =
    kind === 'Contact'
      ? [
          'First Name',
          'Last Name *',
          'Account Name',
          'Title',
          'Reports To',
          'Description',
          'Phone',
          'Email',
          'Country',
          'Street',
          'City',
          'Zip/Postal Code',
          'State/Province',
        ]
      : kind === 'Account'
        ? [
            'Account Name *',
            'Website',
            'Type',
            'Description',
            'Parent Account',
            'Phone',
            'Billing Country',
            'Billing Street',
            'Billing City',
            'Billing Zip/Postal Code',
            'Billing State/Province',
            'Shipping Country',
            'Shipping Street',
            'Shipping City',
            'Shipping Zip/Postal Code',
            'Shipping State/Province',
          ]
        : [
            'Opportunity Name *',
            'Account Name',
            'Close Date *',
            'Amount',
            'Description',
            'Next Step',
          ];
  return (
    <section className={styles.modal}>
      <h2>New {kind}</h2>
      <fieldset>
        <legend>About</legend>
        {fields.map((field) => (
          <label key={field}>
            {field}
            <input defaultValue={field.includes('Name') ? `Fictional ${kind}` : ''} />
          </label>
        ))}
      </fieldset>
      {kind === 'Opportunity' && (
        <fieldset>
          <legend>Status</legend>
          <label>
            Stage *
            <select defaultValue="Qualify">
              {[
                'Qualify',
                'Meet & Present',
                'Propose',
                'Negotiate',
                'Closed Won',
                'Closed Lost',
              ].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
          <label>
            Probability %<input type="number" defaultValue="10" />
          </label>
          <label>
            Forecast Category *
            <select defaultValue="Pipeline">
              {['Omitted', 'Pipeline', 'Best Case', 'Commit', 'Closed'].map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          </label>
        </fieldset>
      )}
      <div className={styles.footerActions}>
        <button
          type="button"
          onClick={() => onNotice(`The fictional ${kind.toLowerCase()} form closed locally.`)}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => onNotice(`Fictional ${kind.toLowerCase()} was not saved.`)}
        >
          Save
        </button>
      </div>
    </section>
  );
}

function ProductWizard({ onNotice }: { onNotice: (value: string) => void }) {
  return (
    <section className={styles.modal}>
      <h2>New Product</h2>
      <div className={styles.progress}>
        <b>New Product · Current Stage</b>
        <span>New Price Book Entry · Stage Not Started</span>
        <span>0%</span>
      </div>
      <fieldset>
        <legend>Product details</legend>
        <label>
          Product Name *<input defaultValue="Fictional Service Plan" />
        </label>
        <label>
          Product Family
          <select defaultValue="None">
            <option>None</option>
          </select>
        </label>
        <label>
          Product Code
          <input defaultValue="FIC-001" />
        </label>
        <label>
          Product SKU
          <input defaultValue="FIC-SKU-001" />
        </label>
        <label>
          <input type="checkbox" /> Active
        </label>
        <label>
          Product Description
          <input defaultValue="Fictional catalogue fixture" />
        </label>
      </fieldset>
      <div className={styles.footerActions}>
        <button
          type="button"
          onClick={() => onNotice('The fictional product wizard closed locally.')}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => onNotice('The reconstruction stops before the Price Book Entry step.')}
        >
          Next
        </button>
      </div>
    </section>
  );
}

function EventForm({ onNotice }: { onNotice: (value: string) => void }) {
  return (
    <section className={styles.modal}>
      <h2>New Event</h2>
      <fieldset>
        <legend>Event details</legend>
        <label>
          Subject *
          <select defaultValue="Meeting">
            {['Call', 'Email', 'Meeting', 'Send Letter/Quote', 'Other'].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label>
          Description
          <input defaultValue="Fictional discovery session" />
        </label>
        <label>
          Start Date
          <input defaultValue="2026-10-07" />
        </label>
        <label>
          Start Time
          <input defaultValue="6:00 pm" />
        </label>
        <label>
          End Date
          <input defaultValue="2026-10-07" />
        </label>
        <label>
          End Time
          <input defaultValue="7:00 pm" />
        </label>
        <label>
          Attendees
          <input defaultValue="Fictional attendee" />
        </label>
        <label>
          Related To
          <input defaultValue="Fictional account" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Additional Information</legend>
        <label>
          Location
          <input defaultValue="Fictional boardroom" />
        </label>
        <label>
          Show Time As
          <select defaultValue="Busy">
            <option>Busy</option>
          </select>
        </label>
        <label>
          <input type="checkbox" /> All-Day Event
        </label>
        <label>
          <input type="checkbox" /> Private
        </label>
      </fieldset>
      <div className={styles.footerActions}>
        <button type="button" onClick={() => onNotice('The fictional event form closed locally.')}>
          Cancel
        </button>
        <button type="button" onClick={() => onNotice('Fictional event was not saved.')}>
          Save
        </button>
      </div>
    </section>
  );
}

function TaskForm({ onNotice }: { onNotice: (value: string) => void }) {
  return (
    <section className={styles.modal}>
      <h2>New Task</h2>
      <fieldset>
        <legend>Task Information</legend>
        <label>
          Assigned To *<input defaultValue="Fictional owner" />
        </label>
        <label>
          Related To
          <input defaultValue="Fictional account" />
        </label>
        <label>
          Subject *
          <select defaultValue="Call">
            {['Call', 'Send Letter', 'Send Quote', 'Other'].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label>
          Name
          <input defaultValue="Fictional contact" />
        </label>
        <label>
          Due Date
          <input defaultValue="2026-10-08" />
        </label>
        <label>
          Comments
          <input defaultValue="Fictional follow-up" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Additional Information</legend>
        <label>
          Status *
          <select defaultValue="Not Started">
            {['Not Started', 'In Progress', 'Completed', 'Waiting on someone else', 'Deferred'].map(
              (value) => (
                <option key={value}>{value}</option>
              )
            )}
          </select>
        </label>
        <label>
          Priority *
          <select defaultValue="Normal">
            {['High', 'Normal', 'Low'].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
      </fieldset>
      <div className={styles.footerActions}>
        <button type="button" onClick={() => onNotice('The fictional task form closed locally.')}>
          Cancel
        </button>
        <button type="button" onClick={() => onNotice('Fictional task was not saved.')}>
          Save
        </button>
      </div>
    </section>
  );
}

function Kanban({ onNotice }: { onNotice: (value: string) => void }) {
  return (
    <section>
      <div className={styles.titleRow}>
        <div>
          <small>Opportunities</small>
          <h1>All Opportunities</h1>
        </div>
        <button type="button" onClick={() => onNotice('No opportunity was created.')}>
          New
        </button>
      </div>
      <div className={styles.actions}>
        <button type="button">Table</button>
        <button type="button" className={styles.active}>
          Kanban
        </button>
        <button type="button">Split View</button>
        <button
          type="button"
          onClick={() => onNotice('Filter changes stayed local and were not saved.')}
        >
          Filters
        </button>
      </div>
      <div className={styles.kanban}>
        {['Prospecting', 'Qualification', 'Proposal', 'Closed'].map((stage) => (
          <div key={stage}>
            <b>{stage}</b>
            <span>$0 · 0 records</span>
            <p>No opportunities</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Calendar({ onNotice }: { onNotice: (value: string) => void }) {
  const days = ['Sun 4', 'Mon 5', 'Tue 6', 'Wed 7', 'Thu 8', 'Fri 9', 'Sat 10'];
  return (
    <section>
      <div className={styles.titleRow}>
        <h1>Calendar</h1>
        <button type="button" onClick={() => onNotice('No event was created.')}>
          New Event
        </button>
      </div>
      <div className={styles.calendar}>
        <aside>
          <b>October 2026</b>
          <p>My Calendars</p>
          <label>
            <input type="checkbox" defaultChecked /> My Events
          </label>
        </aside>
        <div>
          <h2>4–10 October 2026</h2>
          <div className={styles.week}>
            {days.map((day) => (
              <div key={day}>
                <b>{day}</b>
                <span>GMT +5:30</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Todo({ onNotice }: { onNotice: (value: string) => void }) {
  return (
    <section className={styles.panel}>
      <div className={styles.titleRow}>
        <h2>To Do List</h2>
        <button type="button" onClick={() => onNotice('The utility was minimized locally.')}>
          Minimize
        </button>
      </div>
      <div className={styles.actions}>
        <button type="button">All</button>
        <button type="button">Search</button>
        <button type="button">Sort</button>
        <button type="button">Filter</button>
      </div>
      <div className={styles.empty}>
        <b>Ahh, a clean slate</b>
        <span>Use the To Do List to see what is due next.</span>
        <button type="button" onClick={() => onNotice('No task was created.')}>
          New Task
        </button>
      </div>
    </section>
  );
}

function Analytics({ onNotice }: { onNotice: (value: string) => void }) {
  const reports = [
    'My Forecast',
    'My Top Accounts',
    'My Sales Performance',
    'My Pipeline',
    'My Opportunities Won',
    'Sales Dashboard',
    'My Sales Dashboard',
    'Pipeline',
    'Opportunities Won',
    'Forecast',
    'Top Accounts',
    'Sales Performance',
  ];
  return (
    <section>
      <div className={styles.titleRow}>
        <h1>Sales Analytics</h1>
        <button type="button" onClick={() => onNotice('No collection item was added or shared.')}>
          Add
        </button>
      </div>
      <div className={styles.cardGrid}>
        {reports.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => onNotice(`${item} remained a local fixture.`)}
          >
            <b>{item}</b>
            <span>{item.includes('Dashboard') ? 'Dashboard' : 'Report'}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <section>
      <h1>Sales Dashboard</h1>
      <p>Monitor sales performance across the entire fictional company.</p>
      <div className={styles.metrics}>
        {[
          'Pipeline $0',
          'Forecast $0',
          'Revenue $0',
          'Days to Close —',
          'Win Rate 0%',
          'Top Accounts —',
          'Big Opportunities —',
        ].map((value) => (
          <div key={value}>{value}</div>
        ))}
      </div>
    </section>
  );
}

function Forecast({ onNotice }: { onNotice: (value: string) => void }) {
  return (
    <section>
      <div className={styles.titleRow}>
        <h1>Report: Opportunities Forecast</h1>
        <button type="button" onClick={() => onNotice('Report filters were not saved.')}>
          Filters
        </button>
      </div>
      <div className={styles.filterBar}>
        <span>All opportunities</span>
        <span>Close Date · All Time</span>
        <span>Status · Open</span>
        <span>Probability · All</span>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Opportunity Owner</th>
            <th>Opportunity Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody />
      </table>
      <div className={styles.empty}>
        <b>0 records</b>
        <span>Total Amount $0</span>
      </div>
    </section>
  );
}

function ImportFlow({ onNotice }: { onNotice: (value: string) => void }) {
  const [method, setMethod] = useState('');
  const steps = [
    'Choose How to Import leads',
    'Upload Your File',
    'Add to List',
    'Match Fields',
    'Import Started',
  ];
  return (
    <section className={styles.modal}>
      <h2>Import Leads</h2>
      <p>Bring in details about potential customers and deals.</p>
      <fieldset>
        <legend>Choose an import method</legend>
        <label>
          <input
            type="radio"
            name="method"
            checked={method === 'file'}
            onChange={() => setMethod('file')}
          />{' '}
          Import from File <small>Upload leads using a CSV file.</small>
        </label>
        <label>
          <input
            type="radio"
            name="method"
            checked={method === 'wizard'}
            onChange={() => setMethod('wizard')}
          />{' '}
          Import, Update, or Export <small>Use the Data Import Wizard for multiple objects.</small>
        </label>
      </fieldset>
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step} className={index === 0 ? styles.activeStep : ''}>
            {step}
          </li>
        ))}
      </ol>
      <button
        type="button"
        disabled={!method}
        onClick={() =>
          onNotice('The reconstruction stops before file selection or provider transmission.')
        }
      >
        Next
      </button>
    </section>
  );
}

function Agentforce({ onNotice }: { onNotice: (value: string) => void }) {
  return (
    <section className={styles.sidePanel}>
      <h2>Turn on Agentforce</h2>
      <p>AI tools can assist with tasks, generated content, summaries and insights.</p>
      <ul>
        <li>Conversational assistance</li>
        <li>Personalized draft content</li>
        <li>Data summaries and key insights</li>
      </ul>
      <button
        type="button"
        onClick={() => onNotice('Agree and Enable is intentionally blocked in this fixture.')}
      >
        Agree and Enable
      </button>
    </section>
  );
}

function QuickSettings({ onNotice }: { onNotice: (value: string) => void }) {
  const groups = {
    Customization: ['Fields', 'Sales Stages'],
    Company: [
      'Users',
      'Business Details',
      'Fiscal Year',
      'Billing and Purchases',
      'Email Settings',
    ],
  };
  return (
    <section className={styles.sidePanel}>
      <h2>Quick Settings</h2>
      {Object.entries(groups).map(([group, items]) => (
        <div key={group}>
          <h3>{group}</h3>
          {items.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => onNotice(`${item} was not opened or changed.`)}
            >
              {item}
            </button>
          ))}
        </div>
      ))}
    </section>
  );
}

export function SalesforceSalesPreview({ variant, disabled = false }: SalesforceSalesPreviewProps) {
  const [notice, setNotice] = useState('');
  const note = (value: string) => {
    if (!disabled) setNotice(value);
  };
  let content: React.ReactNode;
  switch (variant) {
    case 'object-list-workspace':
      content = <EmptyList onNotice={note} />;
      break;
    case 'new-lead-form':
      content = <LeadForm onNotice={note} />;
      break;
    case 'new-contact-form':
      content = <RecordForm kind="Contact" onNotice={note} />;
      break;
    case 'new-account-form':
      content = <RecordForm kind="Account" onNotice={note} />;
      break;
    case 'new-opportunity-form':
      content = <RecordForm kind="Opportunity" onNotice={note} />;
      break;
    case 'new-product-wizard':
      content = <ProductWizard onNotice={note} />;
      break;
    case 'new-event-form':
      content = <EventForm onNotice={note} />;
      break;
    case 'new-task-form':
      content = <TaskForm onNotice={note} />;
      break;
    case 'opportunity-kanban':
      content = <Kanban onNotice={note} />;
      break;
    case 'calendar-week':
      content = <Calendar onNotice={note} />;
      break;
    case 'todo-utility':
      content = <Todo onNotice={note} />;
      break;
    case 'analytics-collection':
      content = <Analytics onNotice={note} />;
      break;
    case 'performance-dashboard':
      content = <Dashboard />;
      break;
    case 'forecast-report':
      content = <Forecast onNotice={note} />;
      break;
    case 'quotes-access-boundary':
      content = (
        <section className={styles.permission}>
          <h2>Quotes unavailable</h2>
          <p>This list view is unavailable in Lightning Experience.</p>
          <p>The current account did not have access to the requested record.</p>
        </section>
      );
      break;
    case 'leads-import-flow':
      content = <ImportFlow onNotice={note} />;
      break;
    case 'invoice-list':
      content = <EmptyList object="Invoices" invoice onNotice={note} />;
      break;
    case 'agentforce-enable-panel':
      content = <Agentforce onNotice={note} />;
      break;
    case 'quick-settings':
      content = <QuickSettings onNotice={note} />;
      break;
    default:
      content = <EmptyList onNotice={note} />;
  }
  return (
    <div aria-disabled={disabled || undefined}>
      <Shell onNotice={note}>
        {content}
        <Notice>{notice}</Notice>
      </Shell>
    </div>
  );
}

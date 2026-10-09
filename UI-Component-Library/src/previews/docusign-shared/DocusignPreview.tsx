import { useState } from 'react';
import styles from './docusign.module.css';

export type DocusignVariant =
  | 'application-shell'
  | 'home-empty-state'
  | 'start-menu'
  | 'agreements-sidebar'
  | 'agreements-filters'
  | 'draft-envelope-table'
  | 'envelope-setup'
  | 'uploaded-document-card'
  | 'recipient-routing'
  | 'recipient-field-assignment'
  | 'templates-empty-state'
  | 'template-gallery'
  | 'template-editor'
  | 'field-palette'
  | 'editor-toolbar'
  | 'reports-dashboard'
  | 'tasks-empty-state'
  | 'admin-navigation'
  | 'admin-notifications'
  | 'users-table'
  | 'audit-log-table'
  | 'signing-settings'
  | 'reminders-expiration'
  | 'profile-menu'
  | 'help-menu'
  | 'table-pagination'
  | 'loading-state';

export interface DocusignPreviewProps {
  variant: DocusignVariant;
}

const topNav = ['Home', 'Agreements', 'Templates', 'Reports', 'Admin'];
const titles: Record<DocusignVariant, string> = {
  'application-shell': 'Agreement workspace',
  'home-empty-state': 'Send your first agreement',
  'start-menu': 'Start',
  'agreements-sidebar': 'All agreements',
  'agreements-filters': 'Agreement filters',
  'draft-envelope-table': 'Draft envelopes',
  'envelope-setup': 'Set up envelope',
  'uploaded-document-card': 'Uploaded document',
  'recipient-routing': 'Recipient routing',
  'recipient-field-assignment': 'Assign fields',
  'templates-empty-state': 'My templates',
  'template-gallery': 'Template gallery',
  'template-editor': 'Prepare template',
  'field-palette': 'Fields',
  'editor-toolbar': 'Formatting options',
  'reports-dashboard': 'Administrator dashboard',
  'tasks-empty-state': 'Tasks',
  'admin-navigation': 'Administration',
  'admin-notifications': 'Notifications',
  'users-table': 'Users',
  'audit-log-table': 'Audit logs',
  'signing-settings': 'Signing settings',
  'reminders-expiration': 'Reminders and expiration',
  'profile-menu': 'Profile',
  'help-menu': 'Help',
  'table-pagination': 'Table footer',
  'loading-state': 'Loading agreements',
};

function Boundary() {
  return (
    <p className={styles.boundary} role="status">
      Fictional local reconstruction. Provider-changing actions are disabled.
    </p>
  );
}

function Shell({ active = 'Home', children }: { active?: string; children: React.ReactNode }) {
  return (
    <div className={styles.app}>
      <header className={styles.topbar}>
        <strong className={styles.logo}>signflow</strong>
        <nav aria-label="Primary">
          {topNav.map((item) => (
            <button key={item} aria-current={active === item ? 'page' : undefined} type="button">
              {item}
            </button>
          ))}
        </nav>
        <span className={styles.trial}>Trial workspace</span>
        <button type="button" disabled>
          View plans
        </button>
        <span className={styles.avatar}>NL</span>
      </header>
      {children}
    </div>
  );
}

function Page({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className={styles.page}>
      <div className={styles.pageHead}>
        <div>
          <span className={styles.eyebrow}>FICTIONAL LOCAL PREVIEW</span>
          <h1>{title}</h1>
        </div>
      </div>
      {children}
      <Boundary />
    </main>
  );
}

function Empty({ title, body }: { title: string; body: string }) {
  return (
    <section className={styles.empty}>
      <div className={styles.illustration}>✦</div>
      <h2>{title}</h2>
      <p>{body}</p>
      <button type="button" disabled>
        Start disabled
      </button>
    </section>
  );
}

function DataTable({ kind }: { kind: 'users' | 'audit' }) {
  const headers =
    kind === 'users'
      ? ['Name', 'Added', 'Status', 'Permission profile', 'Groups', 'Actions']
      : ['Event date', 'User', 'Description', 'Field', 'Old value', 'New value'];
  const cells =
    kind === 'users'
      ? ['Nadia Lee', 'Oct 9', 'Active', 'Workspace admin', 'Everyone', '•••']
      : ['Oct 9, 10:00', 'System', 'Account setting change', 'Sample setting', 'Off', 'On'];
  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {cells.map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <footer>1–1 of 1　 ‹　›</footer>
    </div>
  );
}

function SettingsRows({ reminders = false }: { reminders?: boolean }) {
  const rows = reminders
    ? [
        'Allow senders to override defaults',
        'Send automatic reminders',
        'Days before first reminder',
        'Days before request expires',
      ]
    : [
        'Enable responsive signing',
        'Allow mobile signing',
        'Require a decline reason',
        'Attach documents to completion email',
        'Enable signing AI tools',
      ];
  return (
    <section className={styles.settings}>
      {rows.map((row, index) => (
        <label key={row}>
          <span>{row}</span>
          {index > 1 && reminders ? (
            <input value={index === 3 ? '120' : '0'} readOnly />
          ) : (
            <input type="checkbox" checked={index % 2 === 0} readOnly />
          )}
        </label>
      ))}
      <div className={styles.actions}>
        <button type="button" disabled>
          Save changes
        </button>
        <button type="button">Cancel</button>
      </div>
    </section>
  );
}

function AdminSide() {
  return (
    <aside className={styles.adminSide}>
      {[
        'Overview',
        'Plan and billing',
        'Account profile',
        'Security settings',
        'Users',
        'Permission profiles',
        'Signing settings',
        'Sending settings',
        'Reminders and expiration',
        'App center',
        'Apps and keys',
        'Audit logs',
      ].map((item) => (
        <button type="button" key={item}>
          {item}
        </button>
      ))}
    </aside>
  );
}

function Special({ variant }: { variant: DocusignVariant }) {
  const [filterOpen, setFilterOpen] = useState(variant === 'agreements-filters');
  const [profileOpen, setProfileOpen] = useState(variant === 'profile-menu');
  const [helpOpen, setHelpOpen] = useState(variant === 'help-menu');

  if (variant === 'home-empty-state' || variant === 'application-shell')
    return (
      <Shell>
        <section className={styles.hero}>
          <h1>Welcome, Nadia</h1>
          <div className={styles.heroActions}>
            <button type="button">Start⌄</button>
            <button type="button" disabled>
              Get signatures
            </button>
            <button type="button" disabled>
              Sign document
            </button>
            <button type="button" disabled>
              Use envelope template
            </button>
          </div>
        </section>
        <Page title={titles[variant]}>
          <Empty
            title="Send your first agreement for signature"
            body="Review the workflow without transmitting a document or recipient data."
          />
        </Page>
      </Shell>
    );

  if (variant === 'start-menu')
    return (
      <Shell>
        <Page title="Start menu">
          <div className={styles.popover}>
            <b>Agreements</b>
            <button type="button" disabled>
              Envelopes
            </button>
            <b>Templates</b>
            <button type="button" disabled>
              Envelope templates
            </button>
          </div>
        </Page>
      </Shell>
    );

  if (variant === 'agreements-sidebar' || variant === 'agreements-filters')
    return (
      <Shell active="Agreements">
        <div className={styles.twoCol}>
          <aside className={styles.side}>
            <button type="button" disabled>
              Start now
            </button>
            {[
              'All agreements',
              'Drafts',
              'In progress',
              'Completed',
              'Deleted',
              'Folders',
              'PowerForms',
              'Bulk send',
            ].map((item) => (
              <button type="button" key={item}>
                {item}
              </button>
            ))}
          </aside>
          <Page title="All agreements">
            <div className={styles.toolbar}>
              <input aria-label="Search agreements" placeholder="Search" readOnly />
              <button type="button" onClick={() => setFilterOpen(!filterOpen)}>
                1 filter applied
              </button>
            </div>
            {filterOpen && (
              <section className={styles.filterPanel}>
                <h2>Filters</h2>
                <input aria-label="Search filters" placeholder="Search for filters" readOnly />
                {['Date: Last 6 months', 'Status', 'Sender', 'Quick views', 'Advanced search'].map(
                  (item) => (
                    <label key={item}>
                      <input type="checkbox" checked={item.startsWith('Date')} readOnly />
                      {item}
                    </label>
                  )
                )}
                <button type="button" onClick={() => setFilterOpen(false)}>
                  Cancel
                </button>
                <button type="button" disabled>
                  Save
                </button>
              </section>
            )}
            <Empty
              title="Find everything here"
              body="Review sent and received agreements by changing safe local filters."
            />
          </Page>
        </div>
      </Shell>
    );

  if (variant === 'draft-envelope-table')
    return (
      <Shell active="Agreements">
        <Page title="Draft envelopes">
          <div className={styles.toolbar}>
            <input aria-label="Search drafts" placeholder="Search" readOnly />
            <button type="button">Date: Last 6 months</button>
          </div>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Recipients</th>
                  <th>Status</th>
                  <th>Last change</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fictional sample change order</td>
                  <td>Morgan Vale, Jordan Lee</td>
                  <td>Draft</td>
                  <td>Oct 9</td>
                  <td>
                    <button type="button" disabled>
                      Continue
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Fictional sample service approval</td>
                  <td>Avery Chen</td>
                  <td>Draft</td>
                  <td>Oct 9</td>
                  <td>
                    <button type="button" disabled>
                      Continue
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Page>
      </Shell>
    );

  if (
    variant === 'envelope-setup' ||
    variant === 'uploaded-document-card' ||
    variant === 'recipient-routing'
  )
    return (
      <div className={styles.setup}>
        <header>
          <button type="button">Save and close</button>
          <b>Set up envelope</b>
          <button type="button" disabled>
            Next: Add fields
          </button>
        </header>
        <main>
          <section>
            <h2>Add documents</h2>
            <div className={styles.uploadGrid}>
              <article className={styles.documentCard}>
                <div className={styles.documentPage}>FICTIONAL SAMPLE</div>
                <b>Cedar Lane sample change order.pdf</b>
                <span>1 page</span>
              </article>
              <button type="button" disabled>
                Upload disabled
              </button>
            </div>
          </section>
          <section>
            <h2>Add recipients</h2>
            <label className={styles.orderToggle}>
              <input type="checkbox" checked readOnly /> Set signing order
            </label>
            <div className={styles.recipientList}>
              {[
                ['1', 'Morgan Vale', 'morgan.vale@example.com'],
                ['2', 'Jordan Lee', 'jordan.lee@example.com'],
              ].map(([order, name, email]) => (
                <article key={email}>
                  <span className={styles.order}>{order}</span>
                  <div>
                    <b>{name}</b>
                    <span>{email}</span>
                  </div>
                  <button type="button">Needs to sign⌄</button>
                </article>
              ))}
            </div>
          </section>
          <section>
            <h2>Add message</h2>
            <input aria-label="Subject" value="Fictional sample change order" readOnly />
            <textarea
              aria-label="Message"
              value="Synthetic research fixture only. No legal effect. Do not send."
              readOnly
            />
          </section>
          <Boundary />
        </main>
      </div>
    );

  if (variant === 'recipient-field-assignment')
    return (
      <div className={styles.editor}>
        <header>
          <button type="button">Back</button>
          <b>Assign fields</b>
          <button type="button" disabled>
            Send disabled
          </button>
        </header>
        <aside>
          <h2>Fields</h2>
          <label>
            User type
            <select aria-label="User type" defaultValue="Jordan Lee">
              <option>Sender</option>
              <option>Morgan Vale</option>
              <option>Jordan Lee</option>
            </select>
          </label>
          {['Signature', 'Initial', 'Date signed', 'Name', 'Email', 'Text', 'Checkbox'].map(
            (field) => (
              <button type="button" key={field}>
                {field}
              </button>
            )
          )}
        </aside>
        <section className={styles.canvas}>
          <div className={styles.editorTools}>
            <b>Jordan Lee fields</b>
            <button type="button">Preview</button>
          </div>
          <article>
            <h1>Cedar Lane sample change order</h1>
            <p>Fictional sample content with recipient-specific field assignment.</p>
            <span className={styles.field}>Signature · Jordan Lee</span>
            <span className={styles.field}>Date signed · Jordan Lee</span>
          </article>
          <Boundary />
        </section>
      </div>
    );

  if (variant === 'templates-empty-state')
    return (
      <Shell active="Templates">
        <Page title="My templates">
          <div className={styles.toolbar}>
            <input aria-label="Search templates" placeholder="Search" readOnly />
            <button type="button">Date</button>
            <button type="button">Show or hide fields</button>
          </div>
          <Empty
            title="Resending the same envelopes?"
            body="Templates retain documents, placeholder recipients and fields for reuse."
          />
          <Pagination />
        </Page>
      </Shell>
    );

  if (variant === 'template-gallery')
    return (
      <Shell active="Templates">
        <Page title="Template gallery">
          <p>Browse prebuilt, customizable starter templates.</p>
          <div className={styles.cards}>
            {[
              'Lease agreement',
              'Invoice',
              'NDA',
              'Offer letter',
              'Purchase order',
              'Liability waiver',
            ].map((item) => (
              <article key={item}>
                <h2>{item}</h2>
                <p>Fictional category</p>
                <button type="button" disabled>
                  Open disabled
                </button>
              </article>
            ))}
          </div>
        </Page>
      </Shell>
    );

  if (variant === 'template-editor' || variant === 'field-palette' || variant === 'editor-toolbar')
    return (
      <div className={styles.editor}>
        <header>
          <button type="button">Back</button>
          <b>Research services agreement</b>
          <button type="button" disabled>
            Save and close
          </button>
        </header>
        <aside>
          <h2>Fields</h2>
          {[
            'Signature',
            'Initial',
            'Date signed',
            'Name',
            'Email',
            'Company',
            'Text',
            'Checkbox',
            'Dropdown',
            'Approve',
            'Decline',
            'Attachment',
          ].map((field) => (
            <button type="button" key={field}>
              {field}
            </button>
          ))}
        </aside>
        <section className={styles.canvas}>
          <div className={styles.editorTools}>
            <button type="button">Undo</button>
            <select aria-label="Text style" defaultValue="Body">
              <option>Body</option>
            </select>
            <select aria-label="Font" defaultValue="Inter">
              <option>Inter</option>
            </select>
            <button type="button">More</button>
          </div>
          <article>
            <h1>Research services agreement</h1>
            <p>This fictional agreement demonstrates placement without exposing a real document.</p>
            <span className={styles.field}>Signature</span>
            <span className={styles.field}>Date signed</span>
          </article>
          <Boundary />
        </section>
      </div>
    );

  if (variant === 'reports-dashboard')
    return (
      <Shell active="Reports">
        <Page title="Administrator dashboard">
          <div className={styles.metrics}>
            {['Envelope usage', 'Envelope success', 'Envelope turnaround'].map((metric) => (
              <article key={metric}>
                <h2>{metric}</h2>
                <button type="button">Last 30 days⌄</button>
                <p>No results. Adjust your filters.</p>
              </article>
            ))}
          </div>
        </Page>
      </Shell>
    );

  if (variant === 'tasks-empty-state')
    return (
      <Shell>
        <Page title="Tasks">
          <div className={styles.toolbar}>
            <input aria-label="Search tasks" placeholder="Search tasks" readOnly />
            <button type="button">2 filters applied</button>
            <button type="button">Refresh</button>
          </div>
          <Empty
            title="You're all caught up"
            body="No fictional tasks match the selected filters."
          />
        </Page>
      </Shell>
    );

  if (variant === 'admin-navigation')
    return (
      <Shell active="Admin">
        <div className={styles.twoCol}>
          <AdminSide />
          <Page title="Administration">
            <div className={styles.searchGrid}>
              <input placeholder="Find a setting" aria-label="Find a setting" readOnly />
              <input placeholder="Find a user" aria-label="Find a user" readOnly />
            </div>
          </Page>
        </div>
      </Shell>
    );

  if (variant === 'admin-notifications')
    return (
      <Shell active="Admin">
        <div className={styles.twoCol}>
          <AdminSide />
          <Page title="Notifications">
            <div className={styles.cards}>
              {['Admin release', 'Core release', 'Product update'].map((item) => (
                <article key={item}>
                  <span>Product update</span>
                  <h2>{item}</h2>
                  <p>Fictional release summary.</p>
                  <button type="button">Release notes</button>
                </article>
              ))}
            </div>
          </Page>
        </div>
      </Shell>
    );

  if (variant === 'users-table' || variant === 'audit-log-table')
    return (
      <Shell active="Admin">
        <div className={styles.twoCol}>
          <AdminSide />
          <Page title={titles[variant]}>
            <div className={styles.toolbar}>
              <input placeholder="Search" aria-label="Search table" readOnly />
              <button type="button">Filters</button>
              <button type="button" disabled>
                {variant === 'users-table' ? 'Add user' : 'Export CSV'}
              </button>
            </div>
            <DataTable kind={variant === 'users-table' ? 'users' : 'audit'} />
          </Page>
        </div>
      </Shell>
    );

  if (variant === 'signing-settings' || variant === 'reminders-expiration')
    return (
      <Shell active="Admin">
        <div className={styles.twoCol}>
          <AdminSide />
          <Page title={titles[variant]}>
            <p>
              {variant === 'signing-settings'
                ? 'Manage the fictional recipient signing experience.'
                : 'Set fictional envelope defaults without saving.'}
            </p>
            <SettingsRows reminders={variant === 'reminders-expiration'} />
          </Page>
        </div>
      </Shell>
    );

  if (variant === 'profile-menu')
    return (
      <Shell>
        <Page title="Profile menu">
          <button type="button" onClick={() => setProfileOpen(!profileOpen)}>
            NL Profile
          </button>
          {profileOpen && (
            <div className={styles.popover}>
              <b>Nadia Lee</b>
              <span>nadia@example.test</span>
              <button type="button">Manage profile</button>
              <button type="button">My preferences</button>
              <button type="button" disabled>
                Log out disabled
              </button>
            </div>
          )}
        </Page>
      </Shell>
    );

  if (variant === 'help-menu')
    return (
      <Shell>
        <Page title="Help menu">
          <button type="button" onClick={() => setHelpOpen(!helpOpen)}>
            Help
          </button>
          {helpOpen && (
            <div className={styles.popover}>
              <b>Get started</b>
              <progress value={25} max={100} />
              <span>25% complete</span>
              <button type="button">Support center</button>
              <button type="button" disabled>
                Share feedback
              </button>
              <button type="button">Integrations</button>
            </div>
          )}
        </Page>
      </Shell>
    );

  if (variant === 'table-pagination')
    return (
      <Shell>
        <Page title="Table footer">
          <DataTable kind="users" />
          <Pagination />
        </Page>
      </Shell>
    );
  return (
    <Shell>
      <Page title="Loading agreements">
        <div className={styles.loading} role="status">
          <span />
          <p>Loading…</p>
        </div>
      </Page>
    </Shell>
  );
}

function Pagination() {
  return (
    <footer className={styles.pagination}>
      <span>Results per page</span>
      <select aria-label="Results per page" defaultValue="25">
        <option>25</option>
      </select>
      <span>Page 1</span>
      <button type="button" disabled>
        Previous
      </button>
      <button type="button" disabled>
        Next
      </button>
    </footer>
  );
}

export function DocusignPreview({ variant }: DocusignPreviewProps) {
  return <Special variant={variant} />;
}

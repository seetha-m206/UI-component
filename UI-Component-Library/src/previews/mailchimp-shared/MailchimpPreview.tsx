import { useState } from 'react';
import styles from './mailchimp.module.css';

export type MailchimpVariant =
  | 'application-shell'
  | 'primary-navigation'
  | 'global-search-dialog'
  | 'quick-actions-menu'
  | 'notification-panel'
  | 'account-menu'
  | 'home-onboarding-checklist'
  | 'home-template-carousel'
  | 'popup-form-cards'
  | 'campaigns-inventory-controls'
  | 'campaigns-empty-state'
  | 'automation-onboarding'
  | 'automation-loading-state'
  | 'forms-type-cards'
  | 'contacts-import-empty-state'
  | 'contact-integration-suggestions'
  | 'tags-empty-state'
  | 'segments-empty-state'
  | 'prebuilt-segment-cards'
  | 'marketing-dashboard-plan-gate'
  | 'conversion-insights-connect-store'
  | 'custom-reports-plan-gate'
  | 'website-wix-handoff'
  | 'content-studio-empty-state'
  | 'content-pagination-controls'
  | 'integrations-directory'
  | 'integration-pagination'
  | 'email-template-tabs'
  | 'email-template-category-controls'
  | 'email-template-filter-toolbar'
  | 'email-template-gallery-card'
  | 'saved-template-empty-state'
  | 'recently-sent-empty-state'
  | 'flow-template-filter-toolbar'
  | 'flow-template-card'
  | 'transactional-plan-gate'
  | 'survey-template-card'
  | 'subscriber-preferences-empty-state'
  | 'inbox-onboarding-modal'
  | 'website-settings-empty-state'
  | 'website-reports-empty-state'
  | 'brand-kit-editor'
  | 'manage-integrations-card'
  | 'forms-system-forms-table'
  | 'forms-audience-defaults'
  | 'connected-sites-empty-state'
  | 'forms-popup-template-strip'
  | 'forms-integration-cards'
  | 'content-products-empty-state'
  | 'content-instagram-connect-state'
  | 'content-giphy-search'
  | 'content-canva-connect-state';

export interface MailchimpPreviewProps {
  variant: MailchimpVariant;
  disabled?: boolean;
}

const nav = [
  'Home',
  'Campaigns',
  'Automations',
  'Forms',
  'Audience',
  'Analytics',
  'Website',
  'Content',
  'Integrations',
];

function Boundary({ children }: { children: string }) {
  return <p className={styles.boundary}>{children}</p>;
}

function Shell({ active = 'Home', children }: { active?: string; children: React.ReactNode }) {
  return (
    <div className={styles.app}>
      <aside className={styles.sidebar} aria-label="Fictional Mailchimp navigation">
        <strong className={styles.logo}>mailchimp</strong>
        <button type="button" disabled className={styles.create}>
          Create
        </button>
        {nav.map((item) => (
          <button type="button" key={item} aria-current={active === item ? 'page' : undefined}>
            <span>{item.slice(0, 1)}</span>
            {item}
          </button>
        ))}
        <div className={styles.promo}>
          <b>Time sensitive</b>
          <span>Trial offer available</span>
          <button type="button" disabled>
            Review plans
          </button>
        </div>
      </aside>
      <section className={styles.stage}>
        <header className={styles.topbar}>
          <button type="button" aria-label="Search">
            ⌕ Search
          </button>
          <div>
            <button type="button" disabled>
              Live expert help
            </button>
            <button type="button" aria-label="Notifications">
              ●
            </button>
            <button type="button" aria-label="Fictional account">
              Atlas Studio⌄
            </button>
          </div>
        </header>
        {children}
      </section>
    </div>
  );
}

function Page({
  title,
  actions,
  children,
}: {
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <header className={styles.pageHead}>
        <h1>{title}</h1>
        <div>{actions}</div>
      </header>
      {children}
    </main>
  );
}

function Gate({ title, body, action }: { title: string; body: string; action: string }) {
  return (
    <section className={styles.gate}>
      <div className={styles.gateArt}>〽</div>
      <h2>{title}</h2>
      <p>{body}</p>
      <button type="button" disabled>
        {action}
      </button>
    </section>
  );
}

function Empty({ title, body }: { title: string; body: string }) {
  return (
    <section className={styles.empty}>
      <div className={styles.illustration}>✦　◡　✉</div>
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  );
}

function SearchDialog() {
  const [filters, setFilters] = useState<string[]>([]);
  const options = [
    'Contacts',
    'Campaigns',
    'Pages',
    'Quick actions',
    'Integrations',
    'Help articles',
  ];
  return (
    <Shell>
      <Page title="Global search">
        <section className={styles.dialog}>
          <h2>Search through your contacts, campaigns, and more</h2>
          <label>
            What can we help you find today?
            <input aria-label="What can we help you find today?" placeholder="Search Mailchimp" />
          </label>
          <button type="button">Search</button>
          <h3>Filter by</h3>
          <div className={styles.checks}>
            {options.map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={filters.includes(item)}
                  onChange={() =>
                    setFilters((current) =>
                      current.includes(item)
                        ? current.filter((x) => x !== item)
                        : [...current, item]
                    )
                  }
                />
                {item}
              </label>
            ))}
          </div>
          <div className={styles.results}>App Search Results</div>
        </section>
        <Boundary>
          No search is submitted to Mailchimp. Filters change fictional fixture state only.
        </Boundary>
      </Page>
    </Shell>
  );
}

function QuickActions() {
  return (
    <Shell>
      <Page title="Home">
        <div className={styles.anchor}>
          <button type="button" aria-expanded="true">
            Quick actions
          </button>
          <div className={styles.menu} role="menu">
            {[
              'Import contacts',
              'Add a single contact',
              'Connect integration',
              'Create automation',
            ].map((item) => (
              <button type="button" role="menuitem" disabled key={item}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <Boundary>All quick actions are disabled and never contact Mailchimp.</Boundary>
      </Page>
    </Shell>
  );
}

function NotificationPanel() {
  return (
    <Shell>
      <Page title="Notifications">
        <section className={styles.drawer}>
          <header>
            <h2>Notifications</h2>
            <button type="button" disabled>
              Mark all notifications as read
            </button>
          </header>
          <Empty
            title="No notifications right now"
            body="New account activity would appear here."
          />
          <button type="button" disabled>
            What's new
          </button>
        </section>
        <Boundary>Notification state is fictional and no provider item is marked as read.</Boundary>
      </Page>
    </Shell>
  );
}

function AccountMenu() {
  return (
    <Shell>
      <Page title="Account navigation">
        <section className={styles.account}>
          <div className={styles.avatar}>AS</div>
          <h2>Atlas Studio</h2>
          <p>Owner · Fictional workspace</p>
          {[
            'Profile',
            'Account & billing',
            'Pricing plans',
            'Hire an expert',
            'Support',
            'Region & language',
            'Log out',
          ].map((item) => (
            <button type="button" disabled key={item}>
              {item}
            </button>
          ))}
        </section>
        <Boundary>
          The observed identity was removed. Profile, billing, support, locale and logout actions
          are disabled.
        </Boundary>
      </Page>
    </Shell>
  );
}

function OnboardingChecklist() {
  const [open, setOpen] = useState('Add your contacts');
  const tasks = [
    'Brand imported',
    'Add your contacts',
    'Connect an app',
    'Authenticate your domain',
  ];
  return (
    <Shell>
      <Page title="Home">
        <section className={styles.progressCard}>
          <h2>You're 25% closer to best-in-class marketing campaigns</h2>
          <span>1/4 complete</span>
          <progress value="1" max="4" />
          {tasks.map((task) => (
            <div key={task}>
              <button type="button" aria-expanded={open === task} onClick={() => setOpen(task)}>
                {task}
                <span>{task === 'Brand imported' ? 'Complete' : '4 minutes'}</span>
              </button>
              {open === task && (
                <p>Review the next step with all provider-changing actions disabled.</p>
              )}
            </div>
          ))}
        </section>
        <Boundary>
          Checklist expansion is local. Skip, import, connect and authentication actions are not
          available.
        </Boundary>
      </Page>
    </Shell>
  );
}

function TemplateCarousel() {
  const [page, setPage] = useState(1);
  const titles = [
    'Professional newsletter',
    'Simple text email',
    'Product update',
    'Event invite',
    'Welcome note',
  ];
  return (
    <Shell>
      <Page title="Start with a template">
        <div className={styles.tabs}>
          <button type="button" aria-pressed="true">
            All
          </button>
          <button type="button">Email</button>
          <button type="button">Flows</button>
        </div>
        <section className={styles.cardGrid}>
          <article>
            <span>Paid</span>
            <h2>{titles[page - 1]}</h2>
            <p>Start with a fully designed fictional layout.</p>
            <button type="button" disabled>
              Preview
            </button>
          </article>
          <article>
            <span>Basic</span>
            <h2>Simple text email</h2>
            <p>Drop in your copy and send.</p>
            <button type="button" disabled>
              Create email
            </button>
          </article>
        </section>
        <nav className={styles.pager}>
          <button type="button" disabled={page === 1} onClick={() => setPage((x) => x - 1)}>
            Previous template
          </button>
          <span>{page} of 5</span>
          <button type="button" disabled={page === 5} onClick={() => setPage((x) => x + 1)}>
            Next template
          </button>
        </nav>
        <Boundary>Carousel paging is local. Preview and email creation are disabled.</Boundary>
      </Page>
    </Shell>
  );
}

function PopupCards() {
  const cards = [
    ['Discount popup', 'Offer a discount to new subscribers'],
    ['Newsletter popup', 'Stay in the know'],
    ['Free content popup', 'Download an e-book or guide'],
    ['Free consultation', 'Set up an initial meeting'],
  ];
  return (
    <Shell>
      <Page title="Grow your audience with custom popup forms">
        <p>Popups with incentives convert best. Choose a pattern to review.</p>
        <div className={styles.cardGrid}>
          {cards.map(([title, body]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{body}</p>
              <button type="button" disabled>
                See templates
              </button>
            </article>
          ))}
        </div>
        <Boundary>No template is opened, created or published.</Boundary>
      </Page>
    </Shell>
  );
}

function CampaignControls() {
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('All');
  return (
    <Shell active="Campaigns">
      <Page
        title="Campaigns"
        actions={
          <button type="button" disabled>
            Create
          </button>
        }
      >
        <div className={styles.toolbar}>
          <input aria-label="Search campaigns" placeholder="Search campaigns" />
          <label>
            Type:
            <select
              aria-label="Campaign type"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option>All</option>
              <option>Email</option>
              <option>Automation</option>
            </select>
          </label>
          <label>
            Status:
            <select
              aria-label="Campaign status"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option>All</option>
              <option>Draft</option>
              <option>Sent</option>
            </select>
          </label>
          <button type="button">Folder: All</button>
          <button type="button">Date: All</button>
          <button type="button" disabled>
            Clear all
          </button>
          <button type="button">Columns</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date edited</th>
              <th>Status</th>
              <th>Analytics</th>
              <th>Send to</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6}>
                <Empty
                  title="Start with a test email"
                  body="Send a ready-made email to see how it works."
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Boundary>
          Filter changes are local. Search, create, test-send and analytics actions do not contact
          Mailchimp.
        </Boundary>
      </Page>
    </Shell>
  );
}

function AutomationOnboarding({ loading = false }: { loading?: boolean }) {
  return (
    <Shell active="Automations">
      <Page
        title="Automations"
        actions={
          <>
            <button type="button" disabled>
              Build from scratch
            </button>
            <button type="button" disabled>
              Choose flow template
            </button>
          </>
        }
      >
        {loading ? (
          <section className={styles.skeleton} aria-label="Loading recommended templates">
            {Array.from({ length: 6 }, (_, i) => (
              <span key={i} />
            ))}
          </section>
        ) : (
          <>
            <section className={styles.hero}>
              <h2>Get your message out at the right moment</h2>
              <p>Trigger personalized messages based on actions contacts take—or do not take.</p>
              <ul>
                <li>Follow up with engaged contacts</li>
                <li>Organize contacts with tags</li>
                <li>Celebrate subscriber milestones</li>
              </ul>
            </section>
            <section className={styles.progressCard}>
              <h2>Get started with automation flows</h2>
              <span>0/5 tasks done</span>
              <progress value="0" max="5" />
              <button type="button" disabled>
                Use welcome flow template
              </button>
            </section>
          </>
        )}
        <Boundary>No flow, template, tag or message is created.</Boundary>
      </Page>
    </Shell>
  );
}

function FormsCards() {
  const [selected, setSelected] = useState('Popup form');
  const cards = [
    ['Popup form', 'Converts best', 'Launch a form that appears over your website.'],
    ['Embedded form', 'Always on', 'Blend a signup form into a page or footer.'],
    ['Signup landing page', 'Share anywhere', 'Build a dedicated signup page hosted by Mailchimp.'],
  ];
  return (
    <Shell active="Forms">
      <Page
        title="Forms"
        actions={
          <>
            <button type="button" disabled>
              Settings
            </button>
            <button type="button" disabled>
              Create form
            </button>
          </>
        }
      >
        <p>Create a form to grow your audience.</p>
        <div className={styles.cardGrid}>
          {cards.map(([title, badge, body]) => (
            <article className={selected === title ? styles.selected : ''} key={title}>
              <span>{badge}</span>
              <h2>{title}</h2>
              <p>{body}</p>
              <button type="button" onClick={() => setSelected(title)}>
                Review pattern
              </button>
            </article>
          ))}
        </div>
        <Boundary>
          Selection changes fixture emphasis only. Form creation, connection and publication are
          disabled.
        </Boundary>
      </Page>
    </Shell>
  );
}

function ContactsEmpty() {
  return (
    <Shell active="Audience">
      <Page
        title="Contacts"
        actions={
          <button type="button" disabled>
            Add contacts
          </button>
        }
      >
        <Empty
          title="Bring your contacts to Mailchimp"
          body="Upload a file or paste contacts directly to add them to your audience."
        />
        <div className={styles.dropzone}>
          Drop your file here<small>CSV, TXT or XLSX</small>
          <button type="button" disabled>
            Upload a file
          </button>
          <button type="button" disabled>
            Copy and paste
          </button>
        </div>
        <Boundary>No file chooser, import, paste or contact data is available.</Boundary>
      </Page>
    </Shell>
  );
}

function IntegrationSuggestions() {
  const items = [
    ['Zapier', 'Connect thousands of web services'],
    ['Canva', 'Access creative assets'],
    ['Make', 'Automate work with connected apps'],
    ['Meta Leads', 'Add advertising leads'],
  ];
  return (
    <Shell active="Audience">
      <Page title="Keep contacts up to date automatically">
        <div className={styles.cardGrid}>
          {items.map(([name, body]) => (
            <article key={name}>
              <div className={styles.appIcon}>{name.slice(0, 2)}</div>
              <h2>{name}</h2>
              <p>{body}</p>
              <button type="button" disabled>
                Connect
              </button>
            </article>
          ))}
        </div>
        <Boundary>
          Every integration action is disabled. No OAuth or provider connection starts.
        </Boundary>
      </Page>
    </Shell>
  );
}

function SimpleEmpty({ kind }: { kind: 'Tags' | 'Segments' }) {
  const tag = kind === 'Tags';
  return (
    <Shell active="Audience">
      <Page
        title={kind}
        actions={
          <button type="button" disabled>
            Create {tag ? 'new tag' : 'segment'}
          </button>
        }
      >
        <Empty
          title={`Create your first ${tag ? 'tag' : 'segment'}`}
          body={
            tag
              ? 'Tags are static labels used to organize contacts.'
              : 'Segments are dynamic sets of contacts based on location, engagement, behavior, and more.'
          }
        />
        <button type="button" disabled>
          Create {tag ? 'tag' : 'segment'}
        </button>
        <Boundary>No contact labels, filters or provider data are created.</Boundary>
      </Page>
    </Shell>
  );
}

function SegmentCards() {
  const items = [
    ['New subscribers', 'Signed up in the last 7 days'],
    ['Engaged subscribers', 'Opened recent emails'],
    ['Potential customers', 'Have not placed an order'],
  ];
  return (
    <Shell active="Audience">
      <Page title="Need help getting started?">
        <p>Choose a pre-built segment pattern based on common marketing practices.</p>
        <div className={styles.cardGrid}>
          {items.map(([title, body]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{body}</p>
              <button type="button" disabled>
                View segment details
              </button>
            </article>
          ))}
        </div>
        <Boundary>Segment details and audience evaluation remain NOT OBSERVED.</Boundary>
      </Page>
    </Shell>
  );
}

function ContentStudio({ paginationOnly = false }: { paginationOnly?: boolean }) {
  const [pageSize, setPageSize] = useState('25');
  return (
    <Shell active="Content">
      <Page title={paginationOnly ? 'Content pagination' : 'Content Studio'}>
        <div className={styles.tabs}>
          {['Uploads', 'My products', 'Instagram', 'Giphy', 'Canva'].map((item, index) => (
            <button type="button" aria-pressed={!index} key={item}>
              {item}
            </button>
          ))}
        </div>
        {!paginationOnly && (
          <Empty
            title="No files yet"
            body="Upload images and files to include in emails, SMS, or forms."
          />
        )}
        <nav className={styles.contentPager}>
          <label>
            Items per page
            <select
              aria-label="Items per page"
              value={pageSize}
              onChange={(event) => setPageSize(event.target.value)}
            >
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </label>
          <span>1 - 0 of 0</span>
          <button type="button" disabled>
            First
          </button>
          <button type="button" disabled>
            Previous
          </button>
          <label>
            Page
            <input aria-label="Page number" value="1" disabled readOnly />
          </label>
          <span>of 0</span>
          <button type="button" disabled>
            Next
          </button>
          <button type="button" disabled>
            Last
          </button>
        </nav>
        <Boundary>
          Tab and page-size changes are local. Uploads and provider paging are disabled.
        </Boundary>
      </Page>
    </Shell>
  );
}

function IntegrationDirectory({ paginationOnly = false }: { paginationOnly?: boolean }) {
  const [page, setPage] = useState(1);
  const cards =
    page === 1
      ? [
          ['Canva', 'Create custom designs'],
          ['Shopify', 'Unify store data'],
          ['Wix', 'Sync site subscribers'],
          ['Zapier', 'Connect thousands of apps'],
        ]
      : [
          ['WooCommerce', 'Connect commerce data'],
          ['Typeform', 'Sync form leads'],
          ['QuickBooks', 'Bring together invoice data'],
          ['Vimeo', 'Use video in marketing'],
        ];
  return (
    <Shell active="Integrations">
      <Page title={paginationOnly ? 'Integration pagination' : 'Discover apps & integrations'}>
        {!paginationOnly && (
          <>
            <input aria-label="Search integrations" placeholder="Search" />
            <div className={styles.chips}>
              {[
                'Popular',
                'New',
                'Advertising',
                'Analytics',
                'Contact Management',
                'Design',
                'E-commerce',
              ].map((item) => (
                <button type="button" key={item}>
                  {item}
                </button>
              ))}
            </div>
            <div className={styles.cardGrid}>
              {cards.map(([name, body]) => (
                <article key={name}>
                  <div className={styles.appIcon}>{name.slice(0, 2)}</div>
                  <h2>{name}</h2>
                  <p>{body}</p>
                  <button type="button" disabled>
                    Connect {name}
                  </button>
                </article>
              ))}
            </div>
          </>
        )}
        <nav className={styles.pager}>
          <button type="button" disabled={page === 1} onClick={() => setPage(1)}>
            First
          </button>
          <button type="button" disabled={page === 1} onClick={() => setPage(1)}>
            Previous
          </button>
          <span>{page === 1 ? '1 - 15 of 355' : '16 - 30 of 355'}</span>
          <button type="button" disabled={page === 2} onClick={() => setPage(2)}>
            Next
          </button>
          <button type="button" disabled={page === 2} onClick={() => setPage(2)}>
            Last
          </button>
        </nav>
        <Boundary>
          Pagination is fictional. No integration detail or connection flow is opened.
        </Boundary>
      </Page>
    </Shell>
  );
}

type DeepScreenConfig = {
  active: string;
  title: string;
  heading: string;
  body: string;
  items?: string[];
  action?: string;
  mode?: 'cards' | 'controls' | 'empty' | 'modal' | 'table' | 'editor';
  boundary: string;
};

const deepScreens: Partial<Record<MailchimpVariant, DeepScreenConfig>> = {
  'email-template-tabs': {
    active: 'Campaigns',
    title: 'Email Templates',
    heading: 'Template views',
    body: 'Move between Mailchimp templates, saved templates, and recently sent designs.',
    items: ['Mailchimp templates', 'Saved', 'Recently sent'],
    mode: 'controls',
    boundary: 'Tab selection is local and no template is opened or created.',
  },
  'email-template-category-controls': {
    active: 'Campaigns',
    title: 'Email Templates',
    heading: 'Template categories',
    body: 'Browse reusable message goals before choosing a design.',
    items: ['All', 'Announce', 'Newsletter', 'Sell products', 'Transactional', 'Welcome'],
    mode: 'controls',
    boundary: 'Category selection is fictional and does not load a provider template.',
  },
  'email-template-filter-toolbar': {
    active: 'Campaigns',
    title: 'Email Templates',
    heading: 'Find the right template',
    body: 'Search, format, type, advanced filters, theme, Brand Kit preview, and sort controls.',
    items: [
      'Search templates',
      'Format: All',
      'Template type: All',
      'All filters',
      'Sort: Recommended',
    ],
    mode: 'controls',
    boundary: 'Filters update the local fixture only and do not submit a provider search.',
  },
  'email-template-gallery-card': {
    active: 'Campaigns',
    title: 'Email Templates',
    heading: 'New seasonal drop',
    body: 'A visual template card pairs a rendered email preview with a title and channel label.',
    items: ['Email preview', 'Email', 'Preview unavailable in research fixture'],
    mode: 'cards',
    boundary:
      'The provider template preview is reconstructed with fictional copy and cannot be selected.',
  },
  'saved-template-empty-state': {
    active: 'Campaigns',
    title: 'Saved templates',
    heading: 'Save your first email template',
    body: 'Saved designs appear here after a template is created from a past email or a pre-designed layout.',
    action: 'Create a saved template',
    mode: 'empty',
    boundary: 'Template creation is disabled and no saved provider content is retained.',
  },
  'recently-sent-empty-state': {
    active: 'Campaigns',
    title: 'Recently sent',
    heading: 'Send your first email campaign',
    body: 'A copy of a sent email would appear in this view.',
    action: 'Create email',
    mode: 'empty',
    boundary: 'Email creation and sending are disabled.',
  },
  'flow-template-filter-toolbar': {
    active: 'Automations',
    title: 'Flow templates',
    heading: 'Explore automation flows',
    body: 'Search and narrow a large template library by channel, topic, connected app, and popularity.',
    items: [
      'Search templates',
      'Channels: All',
      'Topics: All',
      'Apps & integrations: All',
      'Sort: Popular',
    ],
    mode: 'controls',
    boundary: 'No template search, integration, or flow creation reaches Mailchimp.',
  },
  'flow-template-card': {
    active: 'Automations',
    title: 'Flow templates',
    heading: 'Welcome new contacts',
    body: 'A recommendation card combines channel coins, a popularity badge, task name, and outcome summary.',
    items: ['Email', 'Popular', 'Increase engagement with a personalized hello'],
    mode: 'cards',
    boundary: 'The card is fictional and cannot start an automation.',
  },
  'transactional-plan-gate': {
    active: 'Automations',
    title: 'Transactional',
    heading: 'Reach inboxes when it matters most',
    body: 'Developer-oriented transactional email is presented with a limited free-trial allowance and plan choices.',
    items: ['Pick a plan', 'Try for free'],
    mode: 'cards',
    boundary: 'Plan selection, domain verification, sending, and billing are disabled.',
  },
  'survey-template-card': {
    active: 'Audience',
    title: 'Surveys',
    heading: 'Start with a template',
    body: 'Survey cards pair a goal, question format, and concise description.',
    items: ['Satisfaction', 'Growth strategy', 'Marketing effectiveness', 'Post-event feedback'],
    mode: 'cards',
    boundary: 'No survey template is opened, edited, or published.',
  },
  'subscriber-preferences-empty-state': {
    active: 'Audience',
    title: 'Subscriber preferences',
    heading: 'Build your preferences center',
    body: 'Let contacts manage marketing preferences and organize interests with groups.',
    action: 'Build preferences center',
    mode: 'empty',
    boundary: 'Preference-center and group creation are disabled.',
  },
  'inbox-onboarding-modal': {
    active: 'Audience',
    title: 'Inbox',
    heading: 'Welcome to your Inbox',
    body: 'An onboarding dialog explains contact conversations, survey feedback, forwarding, and a guided tour.',
    items: ['Start tour', 'Skip tour', 'Close'],
    mode: 'modal',
    boundary: 'The tour is not started or dismissed, so provider onboarding state is unchanged.',
  },
  'website-settings-empty-state': {
    active: 'Website',
    title: 'Settings',
    heading: 'Set up your site first',
    body: 'Website settings become available after a site exists.',
    action: 'Create site',
    mode: 'empty',
    boundary: 'No site is created and no settings are changed.',
  },
  'website-reports-empty-state': {
    active: 'Website',
    title: 'Reports',
    heading: 'Reports become available after publication',
    body: 'Published-site reports explain visitor and page-interaction analysis.',
    action: 'Go to Website Dashboard',
    mode: 'empty',
    boundary: 'No site is published and no report data is inferred.',
  },
  'brand-kit-editor': {
    active: 'Content',
    title: 'Brand Kit',
    heading: 'Reusable brand controls',
    body: 'Logo, font, color, and button-style tiles centralize brand presentation.',
    items: [
      'Logo',
      'Primary and heading fonts',
      'Color palette',
      'Button style',
      'Reset brand data',
    ],
    mode: 'editor',
    boundary: 'All values are fictional. Editing and reset controls are disabled.',
  },
  'manage-integrations-card': {
    active: 'Integrations',
    title: 'Manage',
    heading: 'Recommended integrations',
    body: 'Recommendation cards combine app identity, a data-flow summary, and a connect boundary.',
    items: ['Canva', 'Shopify', 'Wix', 'Zapier', 'WooCommerce'],
    mode: 'cards',
    boundary: 'Every connect action is disabled and no OAuth flow starts.',
  },
  'forms-system-forms-table': {
    active: 'Forms',
    title: 'Forms Settings',
    heading: 'System forms',
    body: 'A status table lists subscribe, preference, unsubscribe, and combined form surfaces.',
    items: [
      'Basic subscribe form — Published',
      'Subscriber preferences — Published',
      'Unsubscribe — Published',
      'All system forms — Actions',
    ],
    mode: 'table',
    boundary: 'Edit, copy-link, and actions menus are disabled. Audience identifiers are omitted.',
  },
  'forms-audience-defaults': {
    active: 'Forms',
    title: 'Forms Settings',
    heading: 'Audience-wide defaults',
    body: 'Rows expose opt-in mode, GDPR fields, and reCAPTCHA state with edit or configuration controls.',
    items: ['Email opt-in — Single opt-in', 'GDPR fields — Disabled', 'reCAPTCHA — Disabled'],
    mode: 'table',
    boundary: 'Settings are fictional and no provider toggle or save is available.',
  },
  'connected-sites-empty-state': {
    active: 'Forms',
    title: 'Forms Settings',
    heading: 'No connected sites',
    body: 'A connected-sites table falls back to guidance when no publishing destination exists.',
    action: 'Connect site',
    mode: 'empty',
    boundary: 'Site connection and popup publication are disabled.',
  },
  'forms-popup-template-strip': {
    active: 'Forms',
    title: 'Forms',
    heading: 'Get started with a popup form template',
    body: 'A horizontal template strip offers visual starting points and an all-templates link.',
    items: ['Cool Rounded', 'Industrial', 'Warm Rounded', 'All templates'],
    mode: 'cards',
    boundary: 'No popup template is opened or selected.',
  },
  'forms-integration-cards': {
    active: 'Forms',
    title: 'Forms',
    heading: 'Form integrations',
    body: 'Cards separate existing-form integrations from direct site connection.',
    items: ['Integrate existing forms', 'Connect your site', 'Manage integrations'],
    mode: 'cards',
    boundary: 'No integration or site connection is started.',
  },
  'content-products-empty-state': {
    active: 'Content',
    title: 'My products',
    heading: 'No products yet',
    body: 'Product images become available after connecting an online store.',
    action: 'How to connect a store',
    mode: 'empty',
    boundary: 'No store connection is initiated.',
  },
  'content-instagram-connect-state': {
    active: 'Content',
    title: 'Instagram',
    heading: 'Sync Instagram posts',
    body: 'A connection state explains that a Facebook page integration is required.',
    action: 'Sync Instagram posts',
    mode: 'empty',
    boundary: 'No Facebook or Instagram authorization begins.',
  },
  'content-giphy-search': {
    active: 'Content',
    title: 'Giphy',
    heading: 'Search GIFs',
    body: 'A compact search control is paired with a public-link privacy warning and asset pagination.',
    items: ['Search', 'Items per page: 25', '1–25 of 25'],
    mode: 'controls',
    boundary: 'No query is submitted and no remote asset is selected.',
  },
  'content-canva-connect-state': {
    active: 'Content',
    title: 'Canva',
    heading: 'Design content with Canva images',
    body: 'A zero state explains how connected Canva images can be used in emails.',
    action: 'Connect to Canva',
    mode: 'empty',
    boundary: 'No Canva authorization or asset import starts.',
  },
};

function DeepScreen({ variant }: { variant: MailchimpVariant }) {
  const screen = deepScreens[variant];
  if (!screen) return null;
  const items = screen.items ?? [];
  return (
    <Shell active={screen.active}>
      <Page title={screen.title}>
        <section className={screen.mode === 'modal' ? styles.dialog : styles.hero}>
          <h2>{screen.heading}</h2>
          <p>{screen.body}</p>
          {screen.mode === 'controls' && (
            <div className={styles.toolbar}>
              {items.map((item) => (
                <button type="button" key={item}>
                  {item}
                </button>
              ))}
            </div>
          )}
          {(screen.mode === 'cards' || screen.mode === 'editor') && (
            <div className={styles.cardGrid}>
              {items.map((item) => (
                <article key={item}>
                  <h3>{item}</h3>
                  <p>Fictional fixture</p>
                  <button type="button" disabled>
                    Review
                  </button>
                </article>
              ))}
            </div>
          )}
          {screen.mode === 'table' && (
            <table>
              <tbody>
                {items.map((item) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>
                      <button type="button" disabled>
                        Action
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {screen.mode === 'modal' &&
            items.map((item) => (
              <button type="button" disabled key={item}>
                {item}
              </button>
            ))}
          {(screen.mode === 'empty' || screen.action) && (
            <button type="button" disabled>
              {screen.action ?? 'Continue'}
            </button>
          )}
        </section>
        <Boundary>{screen.boundary}</Boundary>
      </Page>
    </Shell>
  );
}

export function MailchimpPreview({ variant }: MailchimpPreviewProps) {
  if (deepScreens[variant]) return <DeepScreen variant={variant} />;
  switch (variant) {
    case 'global-search-dialog':
      return <SearchDialog />;
    case 'quick-actions-menu':
      return <QuickActions />;
    case 'notification-panel':
      return <NotificationPanel />;
    case 'account-menu':
      return <AccountMenu />;
    case 'home-onboarding-checklist':
      return <OnboardingChecklist />;
    case 'home-template-carousel':
      return <TemplateCarousel />;
    case 'popup-form-cards':
      return <PopupCards />;
    case 'campaigns-inventory-controls':
      return <CampaignControls />;
    case 'campaigns-empty-state':
      return (
        <Shell active="Campaigns">
          <Page title="Campaigns">
            <Empty
              title="Start with a test email"
              body="Send a ready-made email to see how it works."
            />
            <Boundary>Test and new email actions are disabled.</Boundary>
          </Page>
        </Shell>
      );
    case 'automation-onboarding':
      return <AutomationOnboarding />;
    case 'automation-loading-state':
      return <AutomationOnboarding loading />;
    case 'forms-type-cards':
      return <FormsCards />;
    case 'contacts-import-empty-state':
      return <ContactsEmpty />;
    case 'contact-integration-suggestions':
      return <IntegrationSuggestions />;
    case 'tags-empty-state':
      return <SimpleEmpty kind="Tags" />;
    case 'segments-empty-state':
      return <SimpleEmpty kind="Segments" />;
    case 'prebuilt-segment-cards':
      return <SegmentCards />;
    case 'marketing-dashboard-plan-gate':
      return (
        <Shell active="Analytics">
          <Page title="Marketing dashboard">
            <Gate
              title="Uncover trends in your marketing performance"
              body="Compare channel effectiveness and conversion metrics across your marketing."
              action="Upgrade now"
            />
            <Boundary>Plan selection and purchase are disabled.</Boundary>
          </Page>
        </Shell>
      );
    case 'conversion-insights-connect-store':
      return (
        <Shell active="Analytics">
          <Page title="Conversion insights">
            <Gate
              title="Connect a store to see the impact of your marketing"
              body="Store data is required before conversion insights can be calculated."
              action="Connect a store"
            />
            <Boundary>No store authorization or data sync starts.</Boundary>
          </Page>
        </Shell>
      );
    case 'custom-reports-plan-gate':
      return (
        <Shell active="Analytics">
          <Page title="Custom reports">
            <Gate
              title="Get the answers you need to grow your business"
              body="Build personalized reports for campaign trends, audience engagement and channel performance."
              action="Upgrade to Standard plan"
            />
            <Boundary>Report creation and plan changes are disabled.</Boundary>
          </Page>
        </Shell>
      );
    case 'website-wix-handoff':
      return (
        <Shell active="Website">
          <Page title="Website">
            <section className={styles.hero}>
              <h2>Elevate your business with a Wix website</h2>
              <p>Launch a site, sync subscribers and choose from website templates.</p>
              <ul>
                <li>Professional website builder</li>
                <li>Audience synchronization</li>
                <li>Email and SMS automation</li>
                <li>Template and AI-assisted options</li>
              </ul>
              <button type="button" disabled>
                Get started for free
              </button>
              <button type="button" disabled>
                Connect existing Wix site
              </button>
            </section>
            <Boundary>No external account creation, authorization or data sharing occurs.</Boundary>
          </Page>
        </Shell>
      );
    case 'content-studio-empty-state':
      return <ContentStudio />;
    case 'content-pagination-controls':
      return <ContentStudio paginationOnly />;
    case 'integrations-directory':
      return <IntegrationDirectory />;
    case 'integration-pagination':
      return <IntegrationDirectory paginationOnly />;
    case 'primary-navigation':
      return (
        <Shell active="Audience">
          <Page title="Primary navigation">
            <p>
              Expandable product groups keep major work areas visible while preserving secondary
              destinations.
            </p>
            <Boundary>Navigation buttons are inert in this fixture.</Boundary>
          </Page>
        </Shell>
      );
    default:
      return (
        <Shell>
          <Page title="Mailchimp application shell">
            <section className={styles.hero}>
              <h2>Atlas Studio marketing workspace</h2>
              <p>
                A reconstructed shell with persistent product navigation, global utilities and a
                bounded content stage.
              </p>
            </section>
            <Boundary>All names, offers, progress and business values are fictional.</Boundary>
          </Page>
        </Shell>
      );
  }
}

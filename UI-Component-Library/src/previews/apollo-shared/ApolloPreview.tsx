import { useState } from 'react';
import styles from './apollo.module.css';

export type ApolloVariant =
  | 'application-shell'
  | 'home-onboarding-dashboard'
  | 'mission-accordion'
  | 'onboarding-task-row'
  | 'layout-picker'
  | 'global-search-palette'
  | 'activity-notifications-panel'
  | 'ai-assistant-onboarding'
  | 'profile-menu'
  | 'people-discovery-empty-state'
  | 'people-filter-sidebar'
  | 'people-filter-catalogue-dialog'
  | 'people-job-title-filter'
  | 'people-quick-filters'
  | 'people-import-menu'
  | 'people-saved-empty-state'
  | 'people-sort-dialog'
  | 'companies-discovery-empty-state'
  | 'companies-filter-sidebar'
  | 'companies-filter-catalogue-dialog'
  | 'companies-saved-search-selector'
  | 'companies-search-settings-drawer'
  | 'companies-company-filter'
  | 'companies-location-filter'
  | 'companies-employee-filter'
  | 'companies-import-menu'
  | 'companies-website-visitors-prompt'
  | 'companies-saved-empty-state'
  | 'lists-empty-state'
  | 'data-health-center'
  | 'data-enrichment-tabs'
  | 'crm-enrichment-empty-state'
  | 'csv-enrichment-paywall'
  | 'job-change-alerts-paywall'
  | 'forms-overview'
  | 'sequences-empty-state'
  | 'sequence-analytics-empty-state'
  | 'sequence-diagnostics-empty-state'
  | 'emails-mailbox-onboarding'
  | 'calls-dialer-paywall'
  | 'calls-analytics-empty-state'
  | 'tasks-empty-state'
  | 'tasks-filter-sidebar'
  | 'tasks-sort-dialog'
  | 'tasks-view-options-drawer'
  | 'meetings-calendar-onboarding'
  | 'conversations-landing'
  | 'deals-empty-state'
  | 'deals-onboarding-popover'
  | 'deals-analytics-empty-state'
  | 'workflows-overview'
  | 'workflow-template-library'
  | 'analytics-overview'
  | 'website-visitors-onboarding'
  | 'saved-people-empty-state'
  | 'saved-companies-empty-state'
  | 'email-health-overview'
  | 'email-domains-empty-state'
  | 'email-mailboxes-empty-table'
  | 'sending-policies-settings'
  | 'workspace-settings-overview'
  | 'ai-assistant-page'
  | 'plan-overview'
  | 'product-add-ons'
  | 'billing-empty-state'
  | 'credit-usage-dashboard'
  | 'data-request-navigation'
  | 'ai-word-usage-empty-state'
  | 'users-table'
  | 'teams-plan-gate'
  | 'permission-profiles-plan-gate'
  | 'territories-plan-gate'
  | 'license-settings'
  | 'workspace-details'
  | 'team-sharing-defaults-empty-state'
  | 'system-activity-log'
  | 'support-access-settings'
  | 'integrations-catalogue'
  | 'mcp-clients-empty-state'
  | 'sequence-alert-thresholds'
  | 'tracking-subdomain-onboarding'
  | 'dialer-settings-plan-gate'
  | 'prospecting-configuration'
  | 'snippets-empty-state'
  | 'contact-stage-settings'
  | 'account-stage-settings'
  | 'deal-pipeline-settings'
  | 'global-picklists-plan-gate'
  | 'goals-plan-gate'
  | 'imports-exports-hub'
  | 'removal-requests-empty-state'
  | 'personas-settings'
  | 'buying-intent-topics'
  | 'website-tracking-installation'
  | 'signals-inventory'
  | 'scoring-models'
  | 'ai-context-review'
  | 'conversation-settings-redirect-gate'
  | 'team-meetings-onboarding';

export interface ApolloPreviewProps {
  variant: ApolloVariant;
  disabled?: boolean;
}

const groups = [
  ['Prospect and enrich', 'People, Companies, Lists, Data enrichment'],
  ['Engage', 'Sequences, Emails, Calls, Tasks'],
  ['Win deals', 'Meetings, Conversations, Deals'],
  ['Tools and automation', 'Workflows, Analytics'],
  ['Inbound', 'Website visitors, Forms'],
  ['Saved records', 'People, Companies'],
] as const;

const missions = [
  {
    title: 'Start reaching the right prospects',
    reward: 'Earn 300 credits',
    description: 'Find people and companies that match your ideal customer profile',
    tasks: [
      ['Save a contact to start building your pipeline', 'Save a prospect'],
      ['Save a mobile number to reach people by phone', 'Find numbers'],
      ['Create a list to keep your prospects organized', 'Create a list'],
      ['Save target companies to find the right people inside them', 'Save a company'],
      ['Save your search and get notified when new leads match your audience', 'Set up alert'],
      ['Download the browser extension for prospecting', 'Install extension'],
    ],
  },
  {
    title: 'Get your inbox ready to send',
    reward: 'Earn 150 credits',
    description: 'Make sure your emails land in the inbox',
    tasks: [
      ['Connect your email to send, track and manage outreach', 'Connect inbox'],
      ['Warm your inbox so emails land in the inbox', 'Start warmup'],
      ['Review your company profile for writing recommendations', 'Start setup'],
    ],
  },
  {
    title: 'Scale your outreach',
    reward: 'Earn 150 credits',
    description: 'Send personalized emails at scale',
    tasks: [
      ['Use AI to build a multi-step email sequence', 'Start with AI'],
      ['Add leads to your sequence', 'Add contacts'],
      ['Launch your sequence and put outreach on autopilot', 'Go to Sequence'],
    ],
  },
  {
    title: 'Turn activity into meetings',
    reward: 'Earn 100 credits',
    description: 'Make it easy for prospects to book time',
    tasks: [
      ['Set up your booking page', 'Set up scheduling'],
      ['Record and analyze calls', 'Set up Conversations'],
    ],
  },
] as const;

function Boundary({ children }: { children: string }) {
  return (
    <p className={styles.boundary} role="status">
      {children}
    </p>
  );
}

function Rail({ disabled }: { disabled?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <aside className={styles.rail} aria-label="Fictional Apollo navigation">
      <strong aria-label="Apollo-inspired fixture">✣</strong>
      <button type="button" aria-current="page" aria-label="Home">
        ⌂
      </button>
      <button type="button" aria-label="AI Assistant" disabled>
        ✦
      </button>
      <span className={styles.divider} />
      {groups.map(([label, items], index) => (
        <div className={styles.railGroup} key={label}>
          <button
            type="button"
            aria-label={label}
            aria-expanded={open === label}
            disabled={disabled}
            onClick={() => setOpen(open === label ? null : label)}
          >
            {['⌕', '▷', '$', '⌘', '↪', '♙'][index]}
          </button>
          {open === label && (
            <div className={styles.railMenu} role="menu" aria-label={label}>
              <b>{label}</b>
              {items.split(', ').map((item) => (
                <button type="button" role="menuitem" key={item} disabled>
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className={styles.railBottom}>
        <button type="button" aria-label="Onboarding hub" disabled>
          ▤
        </button>
        <button type="button" aria-label="Email setup and health" disabled>
          ⌁
        </button>
        <button type="button" aria-label="Admin Settings" disabled>
          ⚙
        </button>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className={styles.topbar}>
      <button type="button" disabled className={styles.searchTrigger}>
        ⌕ Search or ask a question in Apollo <kbd>⌘ K</kbd>
      </button>
      <div>
        <button type="button" disabled>
          80 credits
        </button>
        <button type="button" aria-label="AI Assistant" disabled>
          ✣
        </button>
        <button type="button" aria-label="Activity and notifications" disabled>
          ♧
        </button>
        <button type="button" aria-label="Fictional profile" disabled>
          AR
        </button>
      </div>
    </header>
  );
}

function Shell({ children, disabled }: { children: React.ReactNode; disabled?: boolean }) {
  return (
    <div className={styles.app}>
      <Rail disabled={disabled} />
      <div className={styles.stage}>
        <Topbar />
        {children}
      </div>
    </div>
  );
}

function TaskRow({ task, action, disabled }: { task: string; action: string; disabled?: boolean }) {
  return (
    <div className={styles.taskRow}>
      <span aria-hidden="true" className={styles.taskBox} />
      <span>{task}</span>
      <button type="button" disabled={disabled ?? true}>
        {action}
      </button>
    </div>
  );
}

function MissionCard({
  mission,
  open,
  onToggle,
  disabled,
}: {
  mission: (typeof missions)[number];
  open: boolean;
  onToggle: () => void;
  disabled?: boolean;
}) {
  return (
    <article className={styles.mission}>
      <button
        className={styles.missionHead}
        type="button"
        aria-expanded={open}
        disabled={disabled}
        onClick={onToggle}
      >
        <span>
          <b>{mission.title}</b>
          <small>{mission.reward}</small>
          <em>{mission.description}</em>
        </span>
        <span>
          0 of {mission.tasks.length} completed　{open ? '⌃' : '⌄'}
        </span>
      </button>
      {open && (
        <div>
          {mission.tasks.map(([task, action], index) => (
            <TaskRow
              key={task}
              task={task}
              action={action}
              disabled={disabled || mission.title !== missions[0].title || index > 0}
            />
          ))}
        </div>
      )}
    </article>
  );
}

function Home({ variant, disabled }: { variant: ApolloVariant; disabled?: boolean }) {
  const [openMissions, setOpenMissions] = useState<number[]>([0]);
  const visibleMissions = variant === 'mission-accordion' ? missions : missions.slice(0, 2);
  return (
    <main className={styles.main}>
      <div className={styles.pageTools}>
        <h1>Get started with Apollo</h1>
        <button type="button" disabled>
          ▦ Getting started⌄
        </button>
      </div>
      <p>
        Complete these tasks in your first 14 days to earn credits and start reaching prospects.
      </p>
      <progress aria-label="Onboarding progress" value={1} max={14} />
      <section className={styles.missions} aria-label="Onboarding missions">
        {visibleMissions.map((mission, index) => (
          <MissionCard
            key={mission.title}
            mission={mission}
            open={openMissions.includes(index)}
            disabled={disabled}
            onToggle={() =>
              setOpenMissions((current) =>
                current.includes(index)
                  ? current.filter((item) => item !== index)
                  : [...current, index]
              )
            }
          />
        ))}
      </section>
      {variant !== 'mission-accordion' && (
        <section className={styles.resources}>
          <h2>More resources to help you master Apollo</h2>
          <div>
            {['Learn with Apollo Academy', 'Watch a webinar', 'Go deeper with help docs'].map(
              (item) => (
                <article key={item}>
                  <span aria-hidden="true">✦</span>
                  <h3>{item}</h3>
                  <p>Fictional guidance card for a safe local fixture.</p>
                </article>
              )
            )}
          </div>
        </section>
      )}
      <Boundary>
        All identities, credits and task data are fictional. Provider actions remain disabled.
      </Boundary>
    </main>
  );
}

function LayoutPicker({ disabled }: { disabled?: boolean }) {
  const [tab, setTab] = useState('System');
  return (
    <main className={styles.main}>
      <div className={styles.pageTools}>
        <h1>Onboarding dashboard</h1>
        <button type="button" aria-expanded="true">
          ▦ Getting started⌃
        </button>
      </div>
      <section className={styles.picker} aria-label="Layout picker">
        <input aria-label="Search layouts" placeholder="Search layouts" disabled={disabled} />
        <div className={styles.tabs} role="tablist">
          {['System', 'Your layouts', 'Starred'].map((item) => (
            <button
              type="button"
              role="tab"
              aria-selected={tab === item}
              key={item}
              disabled={disabled}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {tab === 'System' ? (
          <>
            <p className={styles.callout}>ⓘ You are viewing the new layout of this page.</p>
            {['Getting started ✓', 'Generate Pipeline', 'Win & Close', 'Research pipeline'].map(
              (item) => (
                <button type="button" key={item} disabled>
                  ▦ {item}
                </button>
              )
            )}
          </>
        ) : (
          <p className={styles.empty}>No fictional layouts in this tab.</p>
        )}
        <button type="button" className={styles.primary} disabled>
          Create new
        </button>
      </section>
      <Boundary>
        Tab changes are local. Switching or creating provider layouts is disabled.
      </Boundary>
    </main>
  );
}

function SearchPalette() {
  return (
    <main className={styles.main}>
      <h1>Global search palette</h1>
      <section className={styles.palette} role="dialog" aria-label="Search or ask a question">
        <input
          aria-label="Search or ask a question in Apollo"
          placeholder="Search or ask a question"
        />
        <small>AI suggestions</small>
        {['Build your target audience', 'Build your TAM', 'Craft outbound sequence'].map((item) => (
          <button type="button" key={item} disabled>
            ✣ {item}　→
          </button>
        ))}
        <footer>↑ ↓ Navigate　 Esc Close　 ↵ Select</footer>
      </section>
      <Boundary>Typing stays local. Search, AI generation and navigation are disabled.</Boundary>
    </main>
  );
}

function ActivityPanel({ disabled }: { disabled?: boolean }) {
  const [tab, setTab] = useState('Activities');
  return (
    <main className={styles.main}>
      <h1>Activity and notifications</h1>
      <section className={styles.activityPanel} aria-label="Activity and notifications panel">
        <div className={styles.tabs} role="tablist">
          {['Activities', 'Notifications'].map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={tab === item}
              disabled={disabled}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          ))}
          <button type="button" aria-label="Refresh" disabled>
            ↻
          </button>
          <button type="button" aria-label="Close" disabled>
            ×
          </button>
        </div>
        <div className={styles.panelEmpty}>{tab === 'Activities' ? '' : 'No Notifications'}</div>
      </section>
      <Boundary>
        Refresh, read-state changes and provider notification actions are disabled.
      </Boundary>
    </main>
  );
}

function AiAssistant({ disabled }: { disabled?: boolean }) {
  const [choice, setChoice] = useState('Find ideal prospects');
  return (
    <main className={styles.splitMain}>
      <section className={styles.placeholderCard}>
        <h1>Onboarding dashboard</h1>
        <p>The underlying provider screen is represented only as a fictional placeholder.</p>
      </section>
      <aside className={styles.aiPanel} aria-label="AI Assistant onboarding">
        <span className={styles.aiMark}>✣</span>
        <h2>What can I do for you today?</h2>
        <p>Here are a few ways I can help you get started:</p>
        {[
          ['Find ideal prospects', 'Find your ICPs and add them to a list'],
          ['Build your TAM', 'Find companies for your product or service'],
          ['Create an outbound sequence', 'Craft an outreach campaign'],
        ].map(([title, body]) => (
          <label key={title} className={styles.aiChoice}>
            <input
              type="radio"
              name="assistant-choice"
              checked={choice === title}
              disabled={disabled}
              onChange={() => setChoice(title)}
            />
            <span>
              <b>{title}</b>
              <small>{body}</small>
            </span>
          </label>
        ))}
        <button type="button" className={styles.primary} disabled>
          Continue
        </button>
        <Boundary>Selection is local. Continue and every AI execution path are disabled.</Boundary>
      </aside>
    </main>
  );
}

function ProfileMenu() {
  return (
    <main className={styles.main}>
      <h1>Profile and workspace menu</h1>
      <section className={styles.profileMenu} role="menu" aria-label="Fictional profile menu">
        <header>
          <span>AR</span>
          <div>
            <b>Atlas Researcher</b>
            <small>researcher@atlas.example</small>
          </div>
        </header>
        {[
          'Your profile',
          'Theme',
          'Language · Beta',
          'Workspace: Atlas Research',
          'View credit usage',
          'Upgrade Plan',
          'Get the browser extension',
          'Workspace overview',
          'Log out',
        ].map((item) => (
          <button type="button" role="menuitem" key={item} disabled>
            {item}
          </button>
        ))}
      </section>
      <Boundary>
        Identity is fictional. Account, billing, preference and logout actions are disabled.
      </Boundary>
    </main>
  );
}

function TaskRowPreview() {
  return (
    <main className={styles.main}>
      <h1>Onboarding task rows</h1>
      <section className={styles.mission}>
        <TaskRow
          task="Save a fictional prospect to start building your pipeline"
          action="Save a prospect"
        />
        <TaskRow task="Warm your inbox after an inbox is connected" action="Start warmup" />
        <TaskRow task="Launch a fictional outreach sequence" action="Go to Sequence" />
      </section>
      <Boundary>
        Dependency, incomplete and action states are reconstructed. Every action is disabled.
      </Boundary>
    </main>
  );
}

const filterGroups = [
  [
    'Person Info',
    'Persona, Email Status, Name, Education, Awards & Certifications, Work URLs, Time Zone, Total Years of Experience, Job Change, Time in Current Role, Territories, Person Deleted',
  ],
  [
    'Company Info',
    'Company Lookalikes, # Employees, Market Segments, SIC and NAICS, Buying Intent, Technologies, # Employees by Dept., Headcount Growth, Revenue, Funding, Founded Year, Languages, Job Postings, News, Website Visitors',
  ],
  [
    'Engagement Activity',
    'Sequence, Workflows, Email Opened, Last Activity, Email Sent, Email Clicked, Email Replied, Email Meeting Set, Email Bounced, Email Unsubscribed, Email Spamblocked, Email Auto Responder, Call Restrictions, Conversation, Conversation Recording, Conversation Tracker Keywords',
  ],
  ['Created Source', 'Source, Contact CSV Import, Contact Data Request, Contact Created Date'],
  [
    'Misc.',
    'Phone Status/Confidence, Parent Companies, Lists, AI Filters, Scores, Owner, Stage, Custom Fields, Signals',
  ],
] as const;

function PeopleFilters({ variant, disabled }: { variant: ApolloVariant; disabled?: boolean }) {
  const [scope, setScope] = useState(
    variant === 'people-saved-empty-state' || variant === 'people-sort-dialog' ? 'Saved' : 'All'
  );
  return (
    <aside className={styles.peopleFilters} aria-label="People filters">
      <div className={styles.scopeTabs} role="radiogroup" aria-label="People scope">
        {[
          ['All', '120M'],
          ['Unsaved', '120M'],
          ['Saved', '0'],
        ].map(([label, count]) => (
          <button
            type="button"
            role="radio"
            aria-checked={scope === label}
            key={label}
            disabled={disabled}
            onClick={() => setScope(label)}
          >
            <b>{label}</b>
            <small>{count}</small>
          </button>
        ))}
      </div>
      {variant === 'people-job-title-filter' ? (
        <section className={styles.expandedFilter}>
          <h3>Job Titles</h3>
          <div className={styles.tabs}>
            <button type="button" aria-selected="true">
              Simple
            </button>
            <button type="button" disabled>
              Advanced
            </button>
          </div>
          <label>
            Include
            <input placeholder="Search for a job title" disabled={disabled} />
          </label>
          <p>Use “quotation marks” to return exact matches.</p>
          <label className={styles.inlineCheck}>
            <input type="checkbox" disabled={disabled} /> Include people with similar titles
          </label>
          <label>
            Exclude
            <input placeholder="Enter titles to exclude" disabled={disabled} />
          </label>
          {['Past job titles', 'Management Level', 'Departments & Job Function'].map((item) => (
            <button type="button" key={item} disabled>
              {item}⌄
            </button>
          ))}
          <button type="button" disabled>
            ＋ Create New Persona
          </button>
        </section>
      ) : (
        <>
          {['Job Titles', 'People Lookalikes', 'Company', 'Location', 'Industry & Keywords'].map(
            (item) => (
              <button type="button" className={styles.filterRow} key={item} disabled>
                {item}
                <span>{item === 'People Lookalikes' ? '♙' : '⌄'}</span>
              </button>
            )
          )}
          <button type="button" className={styles.addFilter} disabled>
            ＋ Filter
          </button>
        </>
      )}
      <div className={styles.filterFooter}>
        <button type="button" disabled>
          Save search
        </button>
        <button type="button" disabled>
          New search
        </button>
      </div>
    </aside>
  );
}

function QuickFilters() {
  return (
    <section className={styles.quickFilters}>
      <h3>Quick filters</h3>
      <div>
        <b>Locations</b>
        <span>United States</span>
        <span>Canada</span>
      </div>
      <div>
        <b>Email Status</b>
        <span>Verified</span>
        <span>Unverified</span>
        <span>Unavailable</span>
      </div>
      <div>
        <b>Job Titles</b>
        <span>founder</span>
        <span>sales manager</span>
        <span>marketing director</span>
      </div>
      <div>
        <b>Industry</b>
        <span>Information Technology & Services</span>
        <span>Marketing & Advertising</span>
        <span>Retail</span>
      </div>
      <footer>
        ♙ Unlock advanced filters:　$ Revenue　▤ Funding　♙ Company Lookalikes{' '}
        <button type="button" disabled>
          View plans
        </button>
      </footer>
    </section>
  );
}

function FilterCatalogue() {
  return (
    <section className={styles.filterDialog} role="dialog" aria-label="Filters">
      <header>
        <h2>Filters</h2>
        <button type="button" disabled aria-label="Close">
          ×
        </button>
      </header>
      <input aria-label="Search filters" placeholder="Search filters" />
      <div className={styles.filterDialogTools}>
        <button type="button" disabled>
          Type: All
        </button>
        <span>120,000,000 records found</span>
        <button type="button" disabled>
          Apply Filters
        </button>
      </div>
      <h3>Pinned Filters</h3>
      <div className={styles.filterChips}>
        {['Job Titles', 'People Lookalikes', 'Company', 'Location', 'Industry & Keywords'].map(
          (item) => (
            <span key={item}>{item}</span>
          )
        )}
      </div>
      {filterGroups.map(([title, items]) => (
        <section key={title}>
          <h3>{title}</h3>
          <div className={styles.filterChips}>
            {items.split(', ').map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}

function SavedPeopleEmpty({ sortOpen }: { sortOpen?: boolean }) {
  return (
    <section className={styles.peopleResults}>
      <div className={styles.resultToolbar}>
        <button type="button" disabled>
          ☷ Hide Filters
        </button>
        <button type="button" aria-expanded={Boolean(sortOpen)} disabled>
          ⇅ Relevance⌄
        </button>
        <input aria-label="Search people" placeholder="Search people" />
        <button type="button" disabled>
          ☆ Research with AI⌄
        </button>
        <button type="button" disabled>
          ϟ Create workflow⌄
        </button>
      </div>
      {sortOpen && (
        <section className={styles.sortDialog} role="dialog" aria-label="Sort by">
          <h3>Sort by</h3>
          <label>
            Field
            <select disabled>
              <option>Relevance</option>
            </select>
          </label>
          <label>
            Direction
            <select disabled>
              <option>Descending</option>
            </select>
          </label>
          <button type="button" disabled>
            Apply
          </button>
        </section>
      )}
      <div className={styles.peopleEmpty}>
        <span aria-hidden="true">⌕</span>
        <p>Try adjusting your search or filters to find what you are looking for.</p>
        <div>
          <button type="button" disabled>
            Reset filters
          </button>
          <button type="button" disabled>
            ✣ Search with AI
          </button>
        </div>
      </div>
    </section>
  );
}

function PeoplePage({ variant, disabled }: { variant: ApolloVariant; disabled?: boolean }) {
  const saved = variant === 'people-saved-empty-state' || variant === 'people-sort-dialog';
  return (
    <main className={styles.peoplePage}>
      <PeopleFilters variant={variant} disabled={disabled} />
      <section className={styles.peopleStage}>
        <header className={styles.peopleHead}>
          <h1>Find people</h1>
          <div className={styles.importWrap}>
            <button type="button" aria-expanded={variant === 'people-import-menu'} disabled>
              Import⌄
            </button>
            {variant === 'people-import-menu' && (
              <div role="menu">
                <button role="menuitem" type="button" disabled>
                  Single contact
                </button>
                <button role="menuitem" type="button" disabled>
                  CSV
                </button>
              </div>
            )}
          </div>
        </header>
        {saved ? (
          <SavedPeopleEmpty sortOpen={variant === 'people-sort-dialog'} />
        ) : (
          <section className={styles.discoveryEmpty}>
            <h2>Use Apollo AI to find the right prospects</h2>
            <input
              aria-label="AI people search"
              placeholder="Example: Find operations leaders at climate startups"
            />
            <QuickFilters />
          </section>
        )}
        {variant === 'people-filter-catalogue-dialog' && <FilterCatalogue />}
        <Boundary>
          Counts, identities and results are fictional. Search, AI, import, filtering, saving and
          workflow actions are disabled.
        </Boundary>
      </section>
    </main>
  );
}

const companyFilterGroups = [
  [
    'Company Info',
    '# Employees by Dept., Headcount Growth, Market Segments, SIC and NAICS, Buying Intent, Job Titles, Technologies, Revenue, Funding, Founded Year, Languages, Job Postings, Scores, News, Work URLs',
  ],
  ['Engagement Activity', 'Last Activity, Sequence, Workflows'],
  ['Created Source', 'Source, Account CSV Import, Account Created Date'],
  [
    'Misc.',
    'Parent Companies, Lists, Territories, AI Filters, Signals, Owner, Stage, Account Custom Fields',
  ],
] as const;

function CompaniesFilters({ variant, disabled }: { variant: ApolloVariant; disabled?: boolean }) {
  const [scope, setScope] = useState(variant === 'companies-saved-empty-state' ? 'Saved' : 'Total');
  const rows = [
    'Company',
    'Lookalikes',
    'Account Location',
    '# Employees',
    'Industry & Keywords',
    'Website Visitors',
  ];
  return (
    <aside className={styles.peopleFilters} aria-label="Companies filters">
      <div className={styles.scopeTabs} role="radiogroup" aria-label="Company scope">
        {[
          ['Total', '12M'],
          ['Net New', '12M'],
          ['Saved', '0'],
        ].map(([label, count]) => (
          <button
            type="button"
            role="radio"
            aria-checked={scope === label}
            key={label}
            disabled={disabled}
            onClick={() => setScope(label)}
          >
            <b>{label}</b>
            <small>{count}</small>
          </button>
        ))}
      </div>
      {rows.map((item) => {
        const expanded =
          (variant === 'companies-company-filter' && item === 'Company') ||
          (variant === 'companies-location-filter' && item === 'Account Location') ||
          (variant === 'companies-employee-filter' && item === '# Employees') ||
          (variant === 'companies-website-visitors-prompt' && item === 'Website Visitors');
        return (
          <section className={styles.companyFilterSection} key={item}>
            <button type="button" className={styles.filterRow} aria-expanded={expanded} disabled>
              {item}
              <span>{item === 'Lookalikes' ? '♙' : expanded ? '⌃' : '⌄'}</span>
            </button>
            {expanded && item === 'Company' && (
              <div className={styles.companyFilterBody}>
                <button type="button" disabled>
                  Is any of⌄
                </button>
                <input placeholder="Enter companies..." disabled />
                <span>Is not any of</span>
                <b>Domain exists</b>
                <div>
                  <button type="button" disabled>
                    Is known
                  </button>
                  <button type="button" disabled>
                    Is unknown
                  </button>
                </div>
                <span>Include or exclude a list of companies⌄</span>
              </div>
            )}
            {expanded && item === 'Account Location' && (
              <div className={styles.companyFilterBody}>
                <button type="button" disabled>
                  Select region⌄
                </button>
                <select aria-label="Location type" disabled>
                  <option>Headquarters</option>
                </select>
                <input placeholder="Enter locations..." disabled />
                <label className={styles.inlineCheck}>
                  <input type="checkbox" disabled /> Exclude locations
                </label>
                <button type="button" disabled>
                  Add location
                </button>
                <span>Select ZIP code radius · Headquarters only</span>
                <span>Filter by number of locations⌄</span>
              </div>
            )}
            {expanded && item === '# Employees' && (
              <div className={styles.companyFilterBody}>
                <div className={styles.tabs}>
                  <button type="button" aria-selected="true">
                    Predefined Range
                  </button>
                  <button type="button" disabled>
                    Custom Range
                  </button>
                </div>
                <div className={styles.employeeGrid}>
                  {[
                    '1-10',
                    '11-20',
                    '21-50',
                    '51-100',
                    '101-200',
                    '201-500',
                    '501-1000',
                    '1001+',
                  ].map((range) => (
                    <button type="button" key={range} disabled>
                      {range}
                    </button>
                  ))}
                </div>
                <label className={styles.inlineCheck}>
                  <input type="checkbox" disabled /> Employee count is unknown
                </label>
              </div>
            )}
            {expanded && item === 'Website Visitors' && (
              <div className={styles.visitorPrompt}>
                <span aria-hidden="true">◎</span>
                <b>Want to turn anonymous website visitors into leads?</b>
                <p>Connect your website to prioritize outreach using visit insights.</p>
                <button type="button" disabled>
                  Connect website
                </button>
              </div>
            )}
          </section>
        );
      })}
      <button type="button" className={styles.addFilter} disabled>
        View 30+ Filters
      </button>
    </aside>
  );
}

function CompanyQuickFilters() {
  return (
    <section className={styles.quickFilters}>
      <h3>Quick filters</h3>
      <div>
        <b>Locations</b>
        <span>United States</span>
        <span>Canada</span>
      </div>
      <div>
        <b>Employee Count</b>
        <span>1-10</span>
        <span>11-20</span>
        <span>21-50</span>
      </div>
      <div>
        <b>Industry</b>
        <span>Information Technology & Services</span>
        <span>Marketing & Advertising</span>
        <span>Retail</span>
      </div>
      <footer>
        ♙ Unlock advanced filters:　$ Revenue　▤ Funding　♙ Company Lookalikes{' '}
        <button type="button" disabled>
          View plans
        </button>
      </footer>
    </section>
  );
}

function CompanyFilterCatalogue() {
  return (
    <section className={styles.filterDialog} role="dialog" aria-label="Company filters">
      <header>
        <h2>Filters</h2>
        <button type="button" disabled aria-label="Close">
          ×
        </button>
      </header>
      <input aria-label="Search company filters" placeholder="Search filters" />
      <div className={styles.filterDialogTools}>
        <button type="button" disabled>
          Type: All
        </button>
        <button type="button" disabled>
          Apply Filters
        </button>
      </div>
      <h3>Pinned Filters</h3>
      <div className={styles.filterChips}>
        {[
          'Company',
          'Lookalikes',
          'Account Location',
          '# Employees',
          'Industry & Keywords',
          'Website Visitors',
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {companyFilterGroups.map(([title, items]) => (
        <section key={title}>
          <h3>{title}</h3>
          <div className={styles.filterChips}>
            {items.split(', ').map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}

function SavedSearchSelector() {
  return (
    <section
      className={styles.savedSearchSelector}
      role="dialog"
      aria-label="Saved search selector"
    >
      <input aria-label="Search saved searches" placeholder="Search..." />
      <div className={styles.tabs} role="tablist">
        {['All searches', 'Your searches', 'Starred', 'Assigned to you', 'Shared'].map(
          (item, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={index === 0}
              key={item}
              disabled={index > 0}
            >
              {item}
            </button>
          )
        )}
      </div>
      <button type="button" disabled>
        ▦ Default view <small>System</small>
      </button>
      <button type="button" disabled>
        Create saved search
      </button>
    </section>
  );
}

function SearchSettingsDrawer() {
  return (
    <aside className={styles.settingsDrawer} aria-label="Search settings">
      <header>
        <h2>Search settings</h2>
        <button type="button" disabled aria-label="Close drawer">
          ×
        </button>
      </header>
      <h3>Fields</h3>
      <button type="button" disabled>
        Fields <span>9</span>
      </button>
      <h3>Applied filters</h3>
      <button type="button" disabled>
        Filters <span>0</span>
      </button>
      <h3>More settings</h3>
      <button type="button" disabled>
        Visibility and sharing <span>Everyone</span>
      </button>
      <button type="button" disabled>
        Subscription and alerts <span>None</span>
      </button>
    </aside>
  );
}

function CompaniesPage({ variant, disabled }: { variant: ApolloVariant; disabled?: boolean }) {
  const saved = variant === 'companies-saved-empty-state';
  return (
    <main className={styles.peoplePage}>
      <CompaniesFilters variant={variant} disabled={disabled} />
      <section className={styles.peopleStage}>
        <header className={styles.peopleHead}>
          <h1>Find companies</h1>
          <div className={styles.importWrap}>
            <button type="button" aria-expanded={variant === 'companies-import-menu'} disabled>
              Import⌄
            </button>
            {variant === 'companies-import-menu' && (
              <div role="menu">
                <button role="menuitem" type="button" disabled>
                  Single account
                </button>
                <button role="menuitem" type="button" disabled>
                  CSV
                </button>
                <button role="menuitem" type="button" disabled>
                  Find local businesses · New
                </button>
              </div>
            )}
          </div>
        </header>
        <div className={styles.companyToolbar}>
          <button
            type="button"
            aria-expanded={variant === 'companies-saved-search-selector'}
            disabled
          >
            ▦ Default view⌄
          </button>
          <button type="button" disabled>
            ☷ Hide Filters
          </button>
          <input aria-label="Search companies" placeholder="Search companies" />
          <button type="button" disabled>
            ☆ Research with AI⌄
          </button>
          <button type="button" disabled>
            ϟ Create workflow⌄
          </button>
          <button type="button" disabled>
            Save as new search
          </button>
          <button type="button" disabled>
            ⇅ Companies Auto-Score⌄
          </button>
          <button type="button" disabled>
            ⚙ Search settings
          </button>
        </div>
        {variant === 'companies-saved-search-selector' && <SavedSearchSelector />}
        {variant === 'companies-search-settings-drawer' && <SearchSettingsDrawer />}
        {saved ? (
          <div className={styles.peopleEmpty}>
            <span aria-hidden="true">⌕</span>
            <p>Try adjusting your search or filters to find what you are looking for.</p>
            <div>
              <button type="button" disabled>
                Reset filters
              </button>
              <button type="button" disabled>
                ✣ Search with AI
              </button>
            </div>
          </div>
        ) : (
          <section className={styles.discoveryEmpty}>
            <h2>Use Apollo AI to find the right prospects</h2>
            <input
              aria-label="AI company search"
              placeholder="Example: Find fictional climate software companies"
            />
            <CompanyQuickFilters />
          </section>
        )}
        {variant === 'companies-filter-catalogue-dialog' && <CompanyFilterCatalogue />}
        <Boundary>
          Counts, companies and results are fictional. Search, AI, import, filtering, saving,
          scoring, website connection and workflow actions are disabled.
        </Boundary>
      </section>
    </main>
  );
}

type SurfaceConfig = {
  title: string;
  subtitle: string;
  tabs?: string[];
  notice?: string;
  actions?: string[];
  cards?: Array<[string, string]>;
  metrics?: string[];
};

const remainingSurfaces: Partial<Record<ApolloVariant, SurfaceConfig>> = {
  'lists-empty-state': {
    title: 'My lists',
    subtitle: 'Welcome to your lists',
    actions: ['Create a people list', 'Create a company list'],
    cards: [['Organize prospects', 'Use lists to prepare targeted campaigns.']],
  },
  'data-health-center': {
    title: 'Data enrichment',
    subtitle: 'Build your data health center dashboard',
    tabs: ['Data health center', 'CRM · New', 'CSV', 'Job change alerts', 'Form enrichment'],
    actions: ['View scheduled jobs', 'Automate Enrichment', 'Connect CRM', 'Save contacts'],
    cards: [
      ['Discover enrichable data', 'Review missing fields and job changes.'],
      ['Detect and merge duplicates', 'Keep records clean and streamlined.'],
      ['Track enrichment activities', 'Monitor fictional jobs and credit usage.'],
    ],
  },
  'data-enrichment-tabs': {
    title: 'Data enrichment',
    subtitle: 'Choose an enrichment source',
    tabs: ['Data health center', 'CRM · New', 'CSV', 'Job change alerts', 'Form enrichment'],
    cards: [['Bounded navigation', 'Tabs change local fixture state only.']],
  },
  'crm-enrichment-empty-state': {
    title: 'Data enrichment',
    subtitle: 'Enrich existing records across your CRM systems',
    tabs: ['Data health center', 'CRM · New', 'CSV', 'Job change alerts', 'Form enrichment'],
    actions: ['Connect Salesforce', 'Connect HubSpot'],
    cards: [
      ['Enhance customer connections', 'Use accurate fictional data fields.'],
      ['Save time', 'Streamline manual enrichment work.'],
      ['Ensure consistency', 'Keep connected records aligned.'],
    ],
  },
  'csv-enrichment-paywall': {
    title: 'Data enrichment',
    subtitle: 'Fill data gaps in any list from verified contacts',
    tabs: ['Data health center', 'CRM · New', 'CSV', 'Job change alerts', 'Form enrichment'],
    notice: 'CSV enrichment is unavailable in this fictional plan state.',
    actions: ['Import CSV', 'Upgrade to use CSV enrichment'],
    cards: [
      [
        'Illustrated preview',
        'Synthetic rows demonstrate name, company, email and phone columns without provider data.',
      ],
    ],
  },
  'job-change-alerts-paywall': {
    title: 'Data enrichment',
    subtitle: 'Get Job Change Alerts',
    tabs: ['Data health center', 'CRM · New', 'CSV', 'Job change alerts', 'Form enrichment'],
    notice: 'Upgrade is required to monitor job changes for saved people.',
    actions: ['Upgrade plan', 'Automate Enrichment'],
  },
  'forms-overview': {
    title: 'Forms',
    subtitle: 'Capture more qualified leads with form building and enrichment',
    actions: ['Enrich existing website form', 'Create new website form'],
    cards: [
      ['Form Enrichment', 'Autofill known fields and enrich submissions.'],
      ['Form builder', 'Create a branded drag-and-drop contact form.'],
    ],
  },
  'sequences-empty-state': {
    title: 'Sequences',
    subtitle: 'Create your first sequence',
    tabs: ['All Sequences', 'Analytics', 'Diagnostics'],
    notice: 'Bounce Guard is on. No mailbox is linked in this fictional fixture.',
    actions: ['Create sequence', 'Create with AI', 'Create manually', 'More create options'],
    cards: [
      ['Built step by step', 'Combine email, call and task steps.'],
      ['Sends on your schedule', 'Configure delays and sending windows.'],
      ['Pauses on reply', 'Remove contacts after replies or meetings.'],
    ],
  },
  'sequence-analytics-empty-state': {
    title: 'Sequences',
    subtitle: 'Sequence analytics',
    tabs: ['All Sequences', 'Analytics', 'Diagnostics'],
    actions: ['Select timeframe', 'Add filter', 'Go to Analytics'],
    metrics: [
      'Emails replied · 0%',
      'Positive sentiment · 0%',
      'Negative sentiment · 0%',
      'Unsubscribed · 0%',
    ],
    cards: [
      ['Highest Performing Sequences', 'No fictional data yet.'],
      ['Sequence Step Success Rates', 'No fictional data yet.'],
    ],
  },
  'sequence-diagnostics-empty-state': {
    title: 'Sequences',
    subtitle: 'Unverified contacts',
    tabs: ['All Sequences', 'Analytics', 'Diagnostics'],
    notice: 'No sequences found.',
    cards: [
      [
        'Sequences with the Most Unverified Emails',
        'Select a sequence to review unverified contacts.',
      ],
    ],
  },
  'emails-mailbox-onboarding': {
    title: 'Emails',
    subtitle: 'Elevate your email strategy for the long haul',
    actions: ['Add a mailbox'],
    cards: [
      ['Mailbox workspace', 'Organize multiple fictional mailboxes.'],
      ['Sequence tracking', 'Review deals, sequences and sentiment.'],
    ],
  },
  'calls-dialer-paywall': {
    title: 'Calls',
    subtitle: 'Call contacts directly to book more meetings',
    tabs: ['All Calls', 'Analytics'],
    notice: 'The dialer is unavailable in this fictional plan state.',
    actions: ['Upgrade to use the dialer'],
  },
  'calls-analytics-empty-state': {
    title: 'Calls',
    subtitle: 'Dialer performance',
    tabs: ['All Calls', 'Analytics'],
    actions: ['Last 30 days', 'Add filter', 'Rep performance', 'Account performance'],
    metrics: [
      'Dials · 0',
      'Inbound calls · 0',
      'Connected · 0',
      'Conversations · 0',
      'Meetings · 0',
    ],
    cards: [
      ['Rep performance table', 'No fictional data yet.'],
      ['Performance funnel', 'No fictional data available.'],
    ],
  },
  'tasks-empty-state': {
    title: 'Tasks',
    subtitle: 'You have no assigned tasks',
    tabs: ['All tasks', 'Call tasks', 'Email tasks', 'LinkedIn tasks', 'Overdue tasks'],
    actions: ['Start call session', 'Create task', 'View all team tasks', 'New task'],
  },
  'tasks-filter-sidebar': {
    title: 'Tasks',
    subtitle: 'Task filters',
    tabs: ['All tasks', 'Call tasks', 'Email tasks', 'LinkedIn tasks', 'Overdue tasks'],
    actions: ['Hide Filters', 'Clear filters', 'View 36+ Filters'],
    cards: [
      [
        'Pinned filters',
        'Task status, assignee, type, due date, priority, sequence, workflow, location and stage.',
      ],
    ],
  },
  'tasks-sort-dialog': {
    title: 'Tasks',
    subtitle: 'Sort by',
    tabs: ['All tasks', 'Call tasks', 'Email tasks', 'LinkedIn tasks', 'Overdue tasks'],
    actions: ['Due date', 'Ascending', 'Add sort', 'Clear all', 'Apply'],
  },
  'tasks-view-options-drawer': {
    title: 'Tasks',
    subtitle: 'View options',
    actions: ['Table', 'Group by · None', 'Fields · 8', 'Filters · 1'],
  },
  'meetings-calendar-onboarding': {
    title: 'Meetings',
    subtitle: 'Simplify scheduling and run more effective meetings',
    notice: 'No mailbox is linked in this fictional fixture.',
    actions: ['Connect calendar'],
    cards: [
      ['Conferencing apps', 'Zoom, Google Meet and Microsoft Teams.'],
      ['Booking links', 'Let prospects book fictional meetings.'],
      ['Meeting insights', 'Prepare with AI-powered context.'],
    ],
  },
  'conversations-landing': {
    title: 'Conversations',
    subtitle: 'Record, transcribe and analyze video meetings',
    actions: ['Get started now', 'Explore a live demo'],
    cards: [
      ['Recording', 'Generate fictional recordings and transcripts.'],
      ['AI summaries', 'Produce actionable meeting insights.'],
      ['Follow-up tasks', 'Create post-meeting work items.'],
    ],
  },
  'deals-empty-state': {
    title: 'Deals',
    subtitle: 'Let us start winning more deals',
    tabs: ['Overview', 'Analytics · New'],
    actions: [
      'Import CSV',
      'Create deal',
      'Show Filters',
      'Save as new view',
      'Created date',
      'View options',
    ],
    cards: [
      [
        'Empty pipeline',
        'Create a fictional deal to track activities, contacts and conversations.',
      ],
    ],
  },
  'deals-onboarding-popover': {
    title: 'Deals',
    subtitle: 'Deal management made easy',
    actions: ['Begin setup', 'Maybe later', 'Close'],
    cards: [
      ['Actionable insights', 'Move fictional deals forward.'],
      ['Connected tools', 'Use deals with other Apollo-inspired fixtures.'],
      ['Automation', 'Reduce manual follow-up work.'],
    ],
  },
  'deals-analytics-empty-state': {
    title: 'Deals',
    subtitle: 'Deals analytics',
    tabs: ['Overview', 'Analytics · New'],
    actions: ['Select timeframe', 'Add filter', 'Follow-up timeframe'],
    metrics: [
      'Win rate · 0%',
      'Deals · 0',
      'Won amount · $0',
      'Weighted forecast · $0',
      'Sales cycle · 0 days',
    ],
    cards: [
      ['Pipeline', 'No fictional pipeline data.'],
      ['Revenue trends', 'No fictional revenue data.'],
      ['Deals for follow-up', 'All fictional deals are up to date.'],
    ],
  },
  'workflows-overview': {
    title: 'Workflows',
    subtitle: 'Automate key revenue-driving activities',
    tabs: ['Workflows', 'Templates'],
    actions: [
      'Outbound Copilot',
      'Create workflow',
      'View all templates',
      'Show Filters',
      'Sort',
      'View options',
    ],
    cards: [
      ['Convert ideal customers', 'Enroll matching fictional contacts in a sequence.'],
      ['Target website visitors', 'Identify fictional companies showing intent.'],
      ['Engage researched categories', 'Trigger fictional AI-drafted outreach.'],
    ],
  },
  'workflow-template-library': {
    title: 'Workflows',
    subtitle: 'All templates',
    tabs: ['Workflows', 'Templates'],
    actions: ['Search templates', 'Preview template'],
    cards: [
      ['Generate pipeline', 'Representative fictional outbound templates.'],
      ['Data enrichment', 'Representative form and job-change templates.'],
      ['Website Visitor', 'Representative identification and list templates.'],
      ['Multi-branch', 'Representative conditional workflows.'],
      ['Integrations', 'Representative spreadsheet export.'],
    ],
  },
  'analytics-overview': {
    title: 'Analytics',
    subtitle: 'Sell smarter with advanced analytics',
    tabs: ['Overview', 'Dashboards', 'Reports'],
    actions: [
      'Create',
      'Create dashboard',
      'Create report',
      'Create goal',
      'Select a dashboard',
      'Star',
      'Open dashboard',
    ],
    cards: [
      ['Recent dashboards', 'Synthetic sequence, dialer and deal dashboards.'],
      ['Recent reports', 'Synthetic email and call reports.'],
    ],
  },
  'website-visitors-onboarding': {
    title: 'Website visitors',
    subtitle: 'Turn website visitors into pipeline',
    actions: ['Add website'],
    cards: [
      [
        'High-intent discovery',
        'Identify fictional people and companies visiting a connected site.',
      ],
    ],
  },
  'saved-people-empty-state': {
    title: 'People',
    subtitle: '0 fictional records',
    actions: [
      'Import',
      'Create person',
      'My saved people',
      'Show Filters',
      'Search people',
      'Create workflow',
      'Save as new view',
      'Sort',
      'View options',
      'Reset filters',
    ],
    notice: 'Try adjusting your search or filters.',
  },
  'saved-companies-empty-state': {
    title: 'Companies',
    subtitle: '0 fictional records',
    actions: [
      'Import',
      'Create company',
      'My saved companies',
      'Show Filters',
      'Search companies',
      'Create workflow',
      'Save as new view',
      'Sort',
      'View options',
      'Reset filters',
    ],
    notice: 'Try adjusting your search or filters.',
  },
  'email-health-overview': {
    title: 'Email setup and health',
    subtitle: 'Deliverability overview',
    tabs: ['Overview', 'Domains', 'Mailboxes', 'Sending policies'],
    notice: 'Link a fictional mailbox to view recommendations.',
    actions: ['Add', 'Select mailbox', 'Manage mailboxes', 'View completed recommendations'],
    metrics: ['Delivered · 0', 'Bounced · 0', 'Opened · 0', 'Clicked · 0', 'Replies · 0'],
    cards: [
      ['Delivery performance', 'No fictional data available.'],
      ['Inbox interactions', 'No fictional data available.'],
      ['Recommendations', 'Nothing to act on yet.'],
    ],
  },
  'email-domains-empty-state': {
    title: 'Email setup and health',
    subtitle: 'Link your domain to get started',
    tabs: ['Overview', 'Domains', 'Mailboxes', 'Sending policies'],
    actions: ['Add domain'],
  },
  'email-mailboxes-empty-table': {
    title: 'Email setup and health',
    subtitle: 'Mailbox setup status',
    tabs: ['Overview', 'Domains', 'Mailboxes', 'Sending policies'],
    actions: ['Show Filters', 'Search mailboxes', 'Link mailbox', 'Sort', 'View options'],
    metrics: ['Ready · 0 of 0', 'Warmup · 0 of 0', 'Delivered · 0'],
    cards: [
      [
        'Mailboxes table',
        'Mailbox, type, status, setup, warmup, limits, deliverability, user and sync columns.',
      ],
    ],
  },
  'sending-policies-settings': {
    title: 'Email setup and health',
    subtitle: 'Sending policies',
    tabs: ['Overview', 'Domains', 'Mailboxes', 'Sending policies'],
    notice: 'Catch-all protection and Bounce Guard are shown with synthetic settings.',
    actions: [
      'Enable catch-all protection',
      'Add allowlisted domain',
      'Enable Bounce Guard',
      'Save changes',
    ],
    cards: [
      ['Catch-all protection', 'Protect sender reputation and reduce bounces.'],
      ['Bounce Guard', 'Warn and pause fictional sequences when risk is high.'],
    ],
  },
  'workspace-settings-overview': {
    title: 'Workspace settings',
    subtitle: 'Settings overview',
    cards: [
      ['Plan & billing', 'Plan overview, add-ons and billing.'],
      ['Credits & activity', 'Usage, data requests and AI word usage.'],
      ['Users & teams', 'Users, permissions, teams and workspace details.'],
      ['Integrations', 'Connected tools, MCP and API boundaries.'],
      ['Outbound', 'Deliverability, sequences, tracking and snippets.'],
      ['Data management', 'Fields, stages, goals, imports and removal requests.'],
      ['Ideal customer profile', 'Personas, intent, visitors, signals and scoring.'],
      ['Meetings & conversations', 'Recording, permissions, trackers and scorecards.'],
    ],
  },
  'ai-assistant-page': {
    title: 'AI Assistant',
    subtitle: 'What can I help you do?',
    actions: [
      'Start new chat',
      'Channels',
      'Context center',
      'Memory',
      'Add attachment',
      'Context',
      'Ask',
      'Connect Slack',
    ],
    cards: [
      ['Prospecting', 'Find fictional prospects.'],
      ['Research', 'Research fictional companies.'],
      ['Sequencing', 'Draft fictional outreach.'],
      ['Analytics', 'Summarize fictional performance.'],
    ],
  },
  'plan-overview': {
    title: 'Plan overview',
    subtitle: 'Usage and plan allowances',
    actions: ['Purchase plan', 'Add teammates', 'Add credits'],
    cards: [
      ['Plan allowance', 'Synthetic seats and credit allowance.'],
      ['Usage renewal', 'Fictional renewal timing.'],
      ['Conversation usage', 'Synthetic recorded-meeting allowance.'],
    ],
  },
  'product-add-ons': {
    title: 'Product add-ons',
    subtitle: 'Expand the revenue workspace',
    actions: ['View plans and pricing', 'Learn more'],
    cards: [
      ['Advanced dialer', 'International, parallel and local-presence calling.'],
      ['Inbound', 'Visitor identification, routing and forms.'],
    ],
  },
  'billing-empty-state': {
    title: 'Billing',
    subtitle: 'Payment and invoice settings',
    notice: 'No fictional payment method, billing address or invoices are stored.',
    actions: ['Update credit card', 'Update billing information', 'Save invoice information'],
  },
  'credit-usage-dashboard': {
    title: 'Credit usage',
    subtitle: 'Overview and usage details',
    actions: [
      'Download report',
      'Features',
      'Surfaces',
      'Team members',
      'Upgrade plan',
      'Invite friends',
    ],
    metrics: ['Available credits · 80', 'Credits used · 0', 'Invited teammates · 0'],
  },
  'data-request-navigation': {
    title: 'Data requests',
    subtitle: 'Request history by resource and automation mode',
    tabs: [
      'Email',
      'Job change',
      'Mobile number',
      'Enrichment requests',
      'AI word usage',
      'Dialer',
    ],
    notice: 'No fictional request history.',
    actions: ['Manual', 'Automated'],
  },
  'ai-word-usage-empty-state': {
    title: 'AI word usage',
    subtitle: 'Team AI-generated word usage',
    notice: 'No fictional history found.',
    actions: ['Request upgrade', 'Select date range'],
    metrics: ['Words used · 0', 'Fictional allowance · 5,000'],
  },
  'users-table': {
    title: 'Users',
    subtitle: 'Workspace user administration',
    tabs: ['Current users', 'Suggested users', 'User fields', 'Pending users'],
    actions: ['New user', 'Export to CSV', 'Add teammates', 'Show filters', 'Sort'],
    cards: [['Fictional user row', 'Atlas Researcher · Admin · No credit limit.']],
  },
  'teams-plan-gate': {
    title: 'Teams',
    subtitle: 'Group users by region, department or manager',
    actions: ['Upgrade to Organization'],
  },
  'permission-profiles-plan-gate': {
    title: 'Permission profiles',
    subtitle: 'Give each role the right level of access',
    actions: ['Upgrade to Organization'],
  },
  'territories-plan-gate': {
    title: 'Territories',
    subtitle: 'Organize prospecting ownership',
    actions: ['Upgrade to Organization'],
  },
  'license-settings': {
    title: 'License settings',
    subtitle: 'Workspace joining and seat rules',
    actions: ['Create invite link', 'Manage permission profiles', 'Request domain change'],
    cards: [
      ['Domain management', 'Synthetic auto-join state.'],
      ['Seat management', 'Synthetic auto-purchase state.'],
      ['Default permission', 'Fictional non-admin profile.'],
    ],
  },
  'workspace-details': {
    title: 'Workspace overview',
    subtitle: 'Workspace details and discovery',
    actions: ['Search workspaces', 'Filter plans'],
    cards: [
      ['Atlas Research', 'Fictional plan and user summary.'],
      ['Find other workspaces', 'No fictional matches.'],
    ],
  },
  'team-sharing-defaults-empty-state': {
    title: 'Team sharing and defaults',
    subtitle: 'Shared search administration',
    tabs: ['People searches', 'Company searches'],
    notice: 'No fictional shared searches.',
    actions: ['Share a saved search'],
  },
  'system-activity-log': {
    title: 'Activity log',
    subtitle: 'Workspace administration events',
    actions: ['Select user'],
    cards: [
      ['Synthetic activity', 'A website tracker was added.'],
      ['Synthetic signup', 'A workspace user joined.'],
    ],
  },
  'support-access-settings': {
    title: 'Support access',
    subtitle: 'Troubleshooting access control',
    notice: 'Fictional access state. Provider access was not changed.',
    actions: ['Revoke support access'],
  },
  'integrations-catalogue': {
    title: 'Integrations',
    subtitle: 'Available connection catalogue',
    tabs: ['All', 'Conferencing', 'CRM', 'Data enrichment', 'Messaging', 'Email'],
    actions: ['Connect', 'Connect sandbox', 'Upgrade plan'],
    cards: [
      ['Conferencing', 'Zoom, Meet and Teams.'],
      ['CRM', 'Salesforce, HubSpot and other CRM connectors.'],
      ['Messaging and email', 'Slack and email delivery providers.'],
    ],
  },
  'mcp-clients-empty-state': {
    title: 'Model Context Protocol',
    subtitle: 'Connect an AI client',
    tabs: ['Connected clients', 'Contact limits'],
    notice: 'No fictional MCP applications are connected.',
    actions: ['Claude', 'ChatGPT', 'Perplexity', 'Replit', 'Cursor', 'Read setup docs'],
  },
  'sequence-alert-thresholds': {
    title: 'Sequence alerts',
    subtitle: 'Performance threshold settings',
    tabs: ['Priority settings', 'Schedules', 'Best times', 'Threshold settings'],
    actions: ['Reset to default', 'Save'],
    cards: [
      ['Open-rate benchmark', 'Synthetic warning threshold.'],
      ['Reply-rate benchmark', 'Synthetic warning threshold.'],
      ['Interest benchmark', 'Synthetic warning threshold.'],
    ],
  },
  'tracking-subdomain-onboarding': {
    title: 'Tracking',
    subtitle: 'Boost deliverability with a tracking subdomain',
    actions: ['Create subdomain', 'Play setup video', 'Learn more'],
    cards: [['Deliverability', 'Use a dedicated fictional tracking domain.']],
  },
  'dialer-settings-plan-gate': {
    title: 'Dialer',
    subtitle: 'Call contacts from Apollo',
    actions: ['Upgrade to Basic'],
  },
  'prospecting-configuration': {
    title: 'Prospecting configuration',
    subtitle: 'Workspace data and compliance defaults',
    actions: [
      'Accept default settings',
      'Save privacy rules',
      'Save duplicate handling',
      'Save sync rules',
    ],
    cards: [
      ['Privacy safeguards', 'Synthetic regional prospecting and tracking rules.'],
      ['Duplicate handling', 'Synthetic account mapping behavior.'],
      ['Sync defaults', 'Synthetic verified-data settings.'],
    ],
  },
  'snippets-empty-state': {
    title: 'Snippets',
    subtitle: 'Reusable email text',
    notice: 'No fictional snippets.',
    actions: ['Create new snippet'],
  },
  'contact-stage-settings': {
    title: 'Contact fields and stages',
    subtitle: 'Contact lifecycle configuration',
    tabs: ['Stages', 'Contact roles', 'Triggers', 'Fields'],
    actions: ['Add stage'],
    cards: [
      ['Prospecting stages', 'Cold, approaching, replied and interested.'],
      ['Outcome stages', 'Unresponsive, do not contact, bad data and changed job.'],
    ],
  },
  'account-stage-settings': {
    title: 'Account fields and stages',
    subtitle: 'Account lifecycle configuration',
    tabs: ['Stages', 'Triggers', 'Fields'],
    actions: ['Add stage'],
    cards: [
      ['Account stages', 'Cold, current client, active opportunity and other synthetic states.'],
    ],
  },
  'deal-pipeline-settings': {
    title: 'Deal fields and stages',
    subtitle: 'Pipeline administration',
    tabs: ['Pipelines', 'Deal roles', 'Fields', 'Currency'],
    actions: ['Create pipeline'],
    cards: [['Fictional pipeline', 'One synthetic pipeline with seven stages.']],
  },
  'global-picklists-plan-gate': {
    title: 'Global picklists',
    subtitle: 'Shared field options',
    actions: ['Upgrade to Professional'],
  },
  'goals-plan-gate': {
    title: 'Goals',
    subtitle: 'Team performance targets',
    actions: ['Upgrade to Professional'],
  },
  'imports-exports-hub': {
    title: 'Imports and exports',
    subtitle: 'CSV transfer history',
    tabs: [
      'Contact imports',
      'Account imports',
      'Deal imports',
      'CSV exports',
      'Enriched CSVs',
      'Export settings',
    ],
    notice: 'No fictional transfer history.',
    actions: ['Import contacts'],
  },
  'removal-requests-empty-state': {
    title: 'Removal requests',
    subtitle: 'Data-subject request ledger',
    notice: 'No fictional fulfilled removal requests.',
    actions: ['Export CSV'],
    metrics: ['Entries · 0'],
  },
  'personas-settings': {
    title: 'Personas',
    subtitle: 'Target group configuration',
    actions: ['Add persona', 'Generate personas using AI'],
    cards: [['Persona definition', 'Synthetic titles, seniorities and departments.']],
  },
  'buying-intent-topics': {
    title: 'Buying intent',
    subtitle: 'Intent topic settings',
    actions: ['Save intent topics'],
    cards: [
      ['Topic catalogue', 'Synthetic business, technology and service topics.'],
      ['Selected topics', 'One fictional topic selected.'],
    ],
  },
  'website-tracking-installation': {
    title: 'Website visitors',
    subtitle: 'Install the Apollo-inspired tracking script',
    actions: [
      'Copy code',
      'How to install',
      'Send script to email',
      'Test connection',
      'Add new domain',
    ],
    cards: [
      ['Synthetic script', 'Placeholder code without provider application identifiers.'],
      ['Website domains', 'No fictional domains configured.'],
    ],
  },
  'signals-inventory': {
    title: 'Signals',
    subtitle: 'Track insight and activity conditions',
    tabs: ['All signals', 'Signal groups'],
    actions: ['Create signal', 'Show filters'],
    cards: [['Synthetic signals', 'Job changes, intent, engagement and growth examples.']],
  },
  'scoring-models': {
    title: 'Scores',
    subtitle: 'Scoring model inventory',
    actions: ['Upgrade', 'Create new score', 'Show filters', 'Sort', 'Copy', 'Score actions'],
    cards: [
      ['People Auto-Score', 'Synthetic primary model.'],
      ['Companies Auto-Score', 'Synthetic primary model.'],
    ],
  },
  'ai-context-review': {
    title: 'AI Context Center',
    subtitle: 'Review company and product context',
    actions: ['How does it work', 'View comparison', 'Add product', 'Reset', 'Approve and save'],
    cards: [
      ['Fictional company profile', 'Atlas Research provides synthetic business software.'],
      ['Fictional products', 'Research Hub, Atlas Drive and Atlas Sign.'],
    ],
  },
  'conversation-settings-redirect-gate': {
    title: 'Conversation settings',
    subtitle: 'Configuration requires Conversations setup',
    notice:
      'Recording, permissions, trackers, scorecards and prompt routes redirected to onboarding in the observed workspace.',
    actions: ['Get started now', 'Explore live demo'],
  },
  'team-meetings-onboarding': {
    title: 'Team meetings',
    subtitle: 'Scheduling administration',
    tabs: ['Inbound routers', 'Team meetings', 'Intake forms'],
    actions: ['Connect calendar'],
    cards: [
      ['Conferencing apps', 'Zoom, Meet and Teams.'],
      ['Booking links', 'Synthetic scheduling links.'],
      ['Meeting history', 'Link fictional meetings to records.'],
    ],
  },
};

function RemainingSurface({ variant }: { variant: ApolloVariant }) {
  const config = remainingSurfaces[variant];
  if (!config) return null;
  return (
    <main className={styles.surfacePage}>
      <header className={styles.surfaceHead}>
        <div>
          <h1>{config.title}</h1>
          <p>{config.subtitle}</p>
        </div>
        <div className={styles.surfaceActions}>
          {config.actions?.slice(0, 3).map((action) => (
            <button type="button" key={action} disabled>
              {action}
            </button>
          ))}
        </div>
      </header>
      {config.tabs && (
        <div className={styles.surfaceTabs} role="tablist">
          {config.tabs.map((item, index) => (
            <button type="button" role="tab" aria-selected={index === 0} key={item} disabled>
              {item}
            </button>
          ))}
        </div>
      )}
      {config.notice && (
        <div className={styles.surfaceNotice} role="status">
          ⓘ {config.notice}
        </div>
      )}
      {config.metrics && (
        <section className={styles.metricGrid} aria-label="Fictional metrics">
          {config.metrics.map((metric) => (
            <article key={metric}>{metric}</article>
          ))}
        </section>
      )}
      {config.cards && (
        <section className={styles.surfaceCards}>
          {config.cards.map(([title, body]) => (
            <article key={title}>
              <span aria-hidden="true">✦</span>
              <div>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </section>
      )}
      {config.actions && config.actions.length > 3 && (
        <section className={styles.surfaceActionGrid} aria-label="Observed action boundaries">
          {config.actions.slice(3).map((action) => (
            <button type="button" key={action} disabled>
              {action}
            </button>
          ))}
        </section>
      )}
      {!config.cards && !config.metrics && (
        <div className={styles.surfaceEmpty}>
          <span aria-hidden="true">⌕</span>
          <p>{config.notice ?? 'No fictional data yet.'}</p>
        </div>
      )}
      <Boundary>
        All names, records, metrics, thresholds and settings are fictional. Provider creation,
        connection, import, send, upgrade, AI and settings actions are disabled.
      </Boundary>
    </main>
  );
}

function VariantContent({ variant, disabled }: ApolloPreviewProps) {
  switch (variant) {
    case 'application-shell':
    case 'home-onboarding-dashboard':
    case 'mission-accordion':
      return <Home variant={variant} disabled={disabled} />;
    case 'onboarding-task-row':
      return <TaskRowPreview />;
    case 'layout-picker':
      return <LayoutPicker disabled={disabled} />;
    case 'global-search-palette':
      return <SearchPalette />;
    case 'activity-notifications-panel':
      return <ActivityPanel disabled={disabled} />;
    case 'ai-assistant-onboarding':
      return <AiAssistant disabled={disabled} />;
    case 'profile-menu':
      return <ProfileMenu />;
    case 'people-discovery-empty-state':
    case 'people-filter-sidebar':
    case 'people-filter-catalogue-dialog':
    case 'people-job-title-filter':
    case 'people-quick-filters':
    case 'people-import-menu':
    case 'people-saved-empty-state':
    case 'people-sort-dialog':
      return <PeoplePage variant={variant} disabled={disabled} />;
    case 'companies-discovery-empty-state':
    case 'companies-filter-sidebar':
    case 'companies-filter-catalogue-dialog':
    case 'companies-saved-search-selector':
    case 'companies-search-settings-drawer':
    case 'companies-company-filter':
    case 'companies-location-filter':
    case 'companies-employee-filter':
    case 'companies-import-menu':
    case 'companies-website-visitors-prompt':
    case 'companies-saved-empty-state':
      return <CompaniesPage variant={variant} disabled={disabled} />;
    case 'lists-empty-state':
    case 'data-health-center':
    case 'data-enrichment-tabs':
    case 'crm-enrichment-empty-state':
    case 'csv-enrichment-paywall':
    case 'job-change-alerts-paywall':
    case 'forms-overview':
    case 'sequences-empty-state':
    case 'sequence-analytics-empty-state':
    case 'sequence-diagnostics-empty-state':
    case 'emails-mailbox-onboarding':
    case 'calls-dialer-paywall':
    case 'calls-analytics-empty-state':
    case 'tasks-empty-state':
    case 'tasks-filter-sidebar':
    case 'tasks-sort-dialog':
    case 'tasks-view-options-drawer':
    case 'meetings-calendar-onboarding':
    case 'conversations-landing':
    case 'deals-empty-state':
    case 'deals-onboarding-popover':
    case 'deals-analytics-empty-state':
    case 'workflows-overview':
    case 'workflow-template-library':
    case 'analytics-overview':
    case 'website-visitors-onboarding':
    case 'saved-people-empty-state':
    case 'saved-companies-empty-state':
    case 'email-health-overview':
    case 'email-domains-empty-state':
    case 'email-mailboxes-empty-table':
    case 'sending-policies-settings':
    case 'workspace-settings-overview':
    case 'ai-assistant-page':
    case 'plan-overview':
    case 'product-add-ons':
    case 'billing-empty-state':
    case 'credit-usage-dashboard':
    case 'data-request-navigation':
    case 'ai-word-usage-empty-state':
    case 'users-table':
    case 'teams-plan-gate':
    case 'permission-profiles-plan-gate':
    case 'territories-plan-gate':
    case 'license-settings':
    case 'workspace-details':
    case 'team-sharing-defaults-empty-state':
    case 'system-activity-log':
    case 'support-access-settings':
    case 'integrations-catalogue':
    case 'mcp-clients-empty-state':
    case 'sequence-alert-thresholds':
    case 'tracking-subdomain-onboarding':
    case 'dialer-settings-plan-gate':
    case 'prospecting-configuration':
    case 'snippets-empty-state':
    case 'contact-stage-settings':
    case 'account-stage-settings':
    case 'deal-pipeline-settings':
    case 'global-picklists-plan-gate':
    case 'goals-plan-gate':
    case 'imports-exports-hub':
    case 'removal-requests-empty-state':
    case 'personas-settings':
    case 'buying-intent-topics':
    case 'website-tracking-installation':
    case 'signals-inventory':
    case 'scoring-models':
    case 'ai-context-review':
    case 'conversation-settings-redirect-gate':
    case 'team-meetings-onboarding':
      return <RemainingSurface variant={variant} />;
  }
}

export function ApolloPreview({ variant, disabled }: ApolloPreviewProps) {
  return (
    <Shell disabled={disabled}>
      <VariantContent variant={variant} disabled={disabled} />
    </Shell>
  );
}

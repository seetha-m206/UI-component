import { useState } from 'react';
import styles from './pipedrive.module.css';

export type PipedriveVariant =
  | 'application-shell'
  | 'setup-guide-hero'
  | 'setup-task-group'
  | 'setup-task-row'
  | 'more-menu'
  | 'quick-add-menu'
  | 'notifications-drawer'
  | 'quick-help-drawer'
  | 'sales-assistant-panel'
  | 'avatar-coachmark'
  | 'deals-navigation'
  | 'import-banner'
  | 'pipeline-toolbar'
  | 'pipeline-selector'
  | 'deals-filter-menu'
  | 'deals-actions-menu'
  | 'deals-sort-menu'
  | 'pipeline-stage'
  | 'deal-card'
  | 'pipeline-onboarding-tooltip'
  | 'deal-detail-header'
  | 'deal-stage-progress'
  | 'deal-summary-panel'
  | 'deal-history-timeline'
  | 'contacts-navigation'
  | 'contacts-toolbar'
  | 'contacts-people-list'
  | 'organizations-list'
  | 'contacts-timeline'
  | 'contacts-column-customizer'
  | 'activities-toolbar'
  | 'activities-type-filter'
  | 'activities-list'
  | 'activity-calendar'
  | 'activities-disclosure-menu'
  | 'deals-list'
  | 'deals-forecast'
  | 'deals-archive-empty-state'
  | 'nova-landing'
  | 'projects-board'
  | 'projects-templates'
  | 'projects-archive'
  | 'projects-tasks'
  | 'campaigns-feature-wall'
  | 'products-empty-state'
  | 'marketplace-catalog'
  | 'pulse-feed'
  | 'pulse-scores-onboarding'
  | 'pulse-sequences-onboarding'
  | 'data-enrichment-feature-wall'
  | 'automations-landing'
  | 'automatic-assignment-landing'
  | 'documents-landing'
  | 'import-data-landing'
  | 'export-data-landing'
  | 'restore-data-landing'
  | 'ai-settings'
  | 'phone-calls-settings'
  | 'products-settings'
  | 'webhooks-empty-state'
  | 'merge-duplicates-empty-state'
  | 'installed-apps-empty-state'
  | 'leads-navigation'
  | 'leads-empty-state'
  | 'leadbooster-navigation'
  | 'leads-add-toolbar'
  | 'insights-navigation'
  | 'insights-create-menu'
  | 'insights-empty-state'
  | 'insights-report-actions'
  | 'sales-inbox-navigation'
  | 'sales-inbox-onboarding'
  | 'sales-inbox-feature-grid'
  | 'sales-inbox-faq';

export interface PipedrivePreviewProps {
  variant: PipedriveVariant;
  initialState?: string;
  disabled?: boolean;
}

const primaryNav = [
  'Nova',
  'Setup guide',
  'Contacts',
  'Activities',
  'Deals',
  'Leads',
  'Insights',
  'Sales Inbox',
];
const moreItems = [
  'Projects',
  'Campaigns',
  'Products',
  'Marketplace',
  'Automations',
  'Pulse Beta',
  'Automatic assignment',
  'Sequences',
  'Documents',
  'Import data',
  'Export data',
  'Restore data',
];
const quickItems = [
  'Person',
  'Organization',
  'Activity',
  'Deal',
  'Lead',
  'Note',
  'Product',
  'Project',
];
const setupTasks = [
  [
    'Build your pipeline stages',
    '4-5 min',
    'Map your sales process so you can track deal progress and forecast accurately.',
  ],
  [
    'Set up custom fields',
    '1-2 min',
    'Capture the details your team needs to qualify, prioritize and close deals.',
  ],
  ['Import your sales data', '4-6 min', 'Bring fictional demo data from a spreadsheet or CRM.'],
];

function GuardNotice({ children }: { children: string }) {
  return (
    <div className={styles.guard} role="status">
      {children}
    </div>
  );
}

function Toolbar({ onGuard }: { onGuard: (message: string) => void }) {
  return (
    <header className={styles.toolbar}>
      <strong>Setup guide</strong>
      <label className={styles.search}>
        <span className="sr-only">Search fictional workspace</span>
        <input placeholder="Search Pipedrive" disabled />
      </label>
      <button
        type="button"
        onClick={() => onGuard('Quick add is represented by its own local fixture.')}
      >
        ＋
      </button>
      <button
        type="button"
        onClick={() => onGuard('Sales Assistant is represented by its own local fixture.')}
      >
        ✦
      </button>
      <button type="button" onClick={() => onGuard('Marketplace navigation was not activated.')}>
        ▱
      </button>
      <button
        type="button"
        onClick={() => onGuard('Quick Help is represented by its own local fixture.')}
      >
        ?
      </button>
      <button
        type="button"
        onClick={() => onGuard('Notifications are represented by their own local fixture.')}
      >
        ♧
      </button>
      <span className={styles.avatar}>JD</span>
    </header>
  );
}

function ApplicationShell() {
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.shell}>
      <aside className={styles.rail} aria-label="Primary navigation">
        <b className={styles.mark}>p</b>
        {primaryNav.map((item) => (
          <button
            type="button"
            className={item === 'Setup guide' ? styles.active : ''}
            key={item}
            onClick={() => setNotice(`${item} navigation is disabled in this fictional fixture.`)}
          >
            {item}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setNotice('More navigation is represented by its own local fixture.')}
        >
          More
        </button>
      </aside>
      <Toolbar onGuard={setNotice} />
      <main className={styles.main}>
        <SetupGuideHero />
        <SetupTaskGroup />
        {notice && <GuardNotice>{notice}</GuardNotice>}
      </main>
    </div>
  );
}

function SetupGuideHero() {
  return (
    <section className={styles.hero}>
      <div>
        <h2>Hi, Jordan! Let&apos;s get you set up</h2>
        <p>
          Connect Northstar Demo with Pipedrive. Follow these milestones to customize your
          workspace.
        </p>
        <div className={styles.progress}>
          <span />
        </div>
        <small>1/16 suggested tasks completed</small>
      </div>
      <div className={styles.heroArt} aria-hidden="true">
        ★
      </div>
    </section>
  );
}

function SetupTaskRow({
  task = setupTasks[0],
  onGuard,
}: {
  task?: string[];
  onGuard?: (message: string) => void;
}) {
  const [localNotice, setLocalNotice] = useState('');
  const guard = onGuard ?? setLocalNotice;
  return (
    <article className={styles.taskRow}>
      <span className={styles.taskIcon}>◇</span>
      <div>
        <strong>{task[0]}</strong> <small>{task[1]}</small>
        <p>{task[2]}</p>
        <button
          type="button"
          onClick={() => guard(`${task[0]} was not started. No provider request was sent.`)}
        >
          {task[0].startsWith('Import') ? 'Import data' : 'Open task'}
        </button>
      </div>
      <button
        type="button"
        className={styles.video}
        onClick={() => guard('No help article or video was opened.')}
      >
        ▶ Watch video
      </button>
      {localNotice && <GuardNotice>{localNotice}</GuardNotice>}
    </article>
  );
}

function SetupTaskGroup({ initialState = 'open' }: { initialState?: string }) {
  const [expanded, setExpanded] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.group}>
      <button
        type="button"
        className={styles.groupHead}
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        <span>Set up your sales process</span>
        <span>0 of 3 tasks {expanded ? '⌃' : '⌄'}</span>
      </button>
      {expanded && (
        <div>
          {setupTasks.map((task) => (
            <SetupTaskRow key={task[0]} task={task} onGuard={setNotice} />
          ))}
        </div>
      )}
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function DisclosureMenu({
  kind,
  initialState = 'open',
}: {
  kind: 'more' | 'quick';
  initialState?: string;
}) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  const items = kind === 'more' ? moreItems : quickItems;
  const label = kind === 'more' ? 'More' : 'Quick add';
  return (
    <div className={styles.stage}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {label} {kind === 'quick' ? '＋' : '•••'}
      </button>
      {open && (
        <div
          className={kind === 'more' ? styles.sideMenu : styles.quickMenu}
          aria-label={`${label} menu`}
        >
          {items.map((item, index) => (
            <button
              type="button"
              key={item}
              onClick={() =>
                setNotice(
                  `${item} was not opened. This fictional fixture performs no provider navigation.`
                )
              }
            >
              <span>
                {kind === 'more' ? '◇' : '▣'} {item}
              </span>
              {kind === 'quick' && <kbd>{['P', 'O', 'A', 'D', 'L', 'N', 'R', 'E'][index]}</kbd>}
            </button>
          ))}
        </div>
      )}
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </div>
  );
}

function NotificationsDrawer({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  if (!open)
    return (
      <button type="button" onClick={() => setOpen(true)}>
        Open Notifications
      </button>
    );
  return (
    <aside className={styles.drawer} aria-label="Notifications">
      <div className={styles.drawerHead}>
        <h2>Notifications</h2>
        <button type="button" aria-label="Close notifications" onClick={() => setOpen(false)}>
          ×
        </button>
      </div>
      <section className={styles.progressCard}>
        <b>Your progress</b>
        <h3>Daily progress</h3>
        <div className={styles.metricRow}>
          {['0 calls', '0 meetings', '0 activities'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p>Fictional metrics only</p>
      </section>
      <div className={styles.empty}>
        <span>♧</span>
        <h3>No new notifications</h3>
      </div>
      <button type="button" disabled>
        All notifications
      </button>
    </aside>
  );
}

function QuickHelpDrawer({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  if (!open)
    return (
      <button type="button" onClick={() => setOpen(true)}>
        Open Quick Help
      </button>
    );
  return (
    <aside className={styles.drawer} aria-label="Quick Help">
      <div className={styles.drawerHead}>
        <h2>Quick Help</h2>
        <button type="button" aria-label="Close Quick Help" onClick={() => setOpen(false)}>
          ×
        </button>
      </div>
      <label>
        Search help
        <input placeholder="Search Pipedrive help" />
      </label>
      <h3>Quick links</h3>
      <div className={styles.helpCard}>
        <b>Admin toolkit</b>
        <p>Learn fictional workspace essentials without leaving this local fixture.</p>
        <button type="button" onClick={() => setNotice('No toolkit was downloaded.')}>
          Download the toolkit
        </button>
      </div>
      {['Knowledge Base', 'Academy training videos', 'Chat with Pipedrive'].map((item) => (
        <button type="button" key={item} onClick={() => setNotice(`${item} was not opened.`)}>
          {item}
        </button>
      ))}
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </aside>
  );
}

function SalesAssistant({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [message, setMessage] = useState('');
  const [notice, setNotice] = useState('');
  if (!open)
    return (
      <button type="button" onClick={() => setOpen(true)}>
        Open Sales Assistant
      </button>
    );
  return (
    <aside className={styles.assistant} aria-label="Sales Assistant Beta">
      <div className={styles.drawerHead}>
        <h2>
          ✦ Sales Assistant <small>Beta</small>
        </h2>
        <button type="button" aria-label="Close Sales Assistant" onClick={() => setOpen(false)}>
          ×
        </button>
      </div>
      <div className={styles.assistantIntro}>
        <span>✦</span>
        <h3>Ask about your fictional deals, data or settings</h3>
      </div>
      <label>
        Ask a question
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Ask a question"
        />
      </label>
      <button
        type="button"
        disabled={!message.trim()}
        onClick={() =>
          setNotice('No AI prompt was sent. The typed text remains inside this local fixture.')
        }
      >
        Send
      </button>
      {[
        'What is the difference between a deal and a lead?',
        'How do I start exploring Pipedrive?',
        'How do I bring sales data into Pipedrive?',
      ].map((item) => (
        <button
          type="button"
          key={item}
          onClick={() => setNotice('Suggested questions are display-only. No AI prompt was sent.')}
        >
          {item}
        </button>
      ))}
      {notice && <GuardNotice>{notice}</GuardNotice>}
      <small>AI-generated results may be inaccurate.</small>
    </aside>
  );
}

function AvatarCoachmark() {
  const [open, setOpen] = useState(true);
  return (
    <div className={styles.stage}>
      <button
        type="button"
        className={styles.avatar}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        JD
      </button>
      {open && (
        <div className={styles.coachmark} role="note">
          <b>Access settings and tools</b>
          <p>You can find account and personal settings and tools under the avatar menu.</p>
          <button type="button" onClick={() => setOpen(false)}>
            Got it
          </button>
        </div>
      )}
    </div>
  );
}

const pipelineStages = [
  'Qualified',
  'Demo Scheduled',
  'Proposal Made',
  'Negotiations',
  'Contract Signed',
];

function DealCard() {
  const [notice, setNotice] = useState('');
  return (
    <article className={styles.dealCard} draggable>
      <button
        type="button"
        onClick={() =>
          setNotice('Deal detail navigation was not executed in this pipeline fixture.')
        }
      >
        Maple Cloud Readiness
      </button>
      <p>Lakeshore Labs · Avery Morgan</p>
      <strong>$42,000</strong>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </article>
  );
}

function PipelineStage() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.stageColumn}>
      <header>
        <div>
          <b>Proposal Made</b>
          <span>$42,000 · 1 deal</span>
        </div>
        <button
          type="button"
          aria-label="Add deal to Proposal Made"
          onClick={() => setNotice('No deal form was opened.')}
        >
          ＋
        </button>
      </header>
      <DealCard />
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function DealsNavigation() {
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.pipelineStage}>
      <nav className={styles.viewTabs} aria-label="Deals views">
        {['Pipeline', 'List', 'Forecast', 'Archive'].map((item) => (
          <button
            type="button"
            aria-current={item === 'Pipeline' ? 'page' : undefined}
            key={item}
            onClick={() => setNotice(`${item} navigation was not executed in this local fixture.`)}
          >
            {item}
          </button>
        ))}
      </nav>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </div>
  );
}

function ImportBanner() {
  const [open, setOpen] = useState(true);
  const [notice, setNotice] = useState('');
  if (!open)
    return (
      <button type="button" onClick={() => setOpen(true)}>
        Show import banner
      </button>
    );
  return (
    <section className={styles.importBanner}>
      <div>
        <b>Import your contact and sales data</b>
        <p>Bring in fictional data to explore the local layout.</p>
      </div>
      <button type="button" onClick={() => setNotice('No import flow was opened.')}>
        Import data
      </button>
      <button type="button" aria-label="Dismiss import banner" onClick={() => setOpen(false)}>
        ×
      </button>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function PipelineToolbar() {
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.pipelineStage}>
      <div className={styles.pipelineToolbar}>
        <button type="button" onClick={() => setNotice('No deal form was opened.')}>
          ＋ Deal
        </button>
        <button
          type="button"
          onClick={() => setNotice('Pipeline selection is represented separately.')}
        >
          Sales pipeline ▾
        </button>
        <button type="button" onClick={() => setNotice('Filter changes were not applied.')}>
          Filter ▾
        </button>
        <button type="button" onClick={() => setNotice('Actions are represented separately.')}>
          •••
        </button>
      </div>
      <div className={styles.filterBar}>
        <span>Status is Open</span>
        <button type="button" onClick={() => setNotice('No condition was added.')}>
          Add condition
        </button>
        <button type="button" disabled>
          Save
        </button>
        <button type="button" onClick={() => setNotice('Closed deals were not requested.')}>
          Show closed deals
        </button>
        <button type="button" onClick={() => setNotice('Stage order was not changed.')}>
          Change order
        </button>
        <button type="button" onClick={() => setNotice('Sorting is represented separately.')}>
          Sort by: Next activity ▾
        </button>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </div>
  );
}

function PipelineSelector({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  const items = [
    'Sales pipeline',
    'Onboarding pipeline',
    'Reorder pipelines',
    'Pipeline visibility',
    'Customize deal cards',
    'Pipeline layout settings',
    'New pipeline',
  ];
  return (
    <div className={styles.pipelineStage}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        Sales pipeline ▾
      </button>
      {open && (
        <div className={styles.pipelineMenu}>
          <p>
            <b>Tailored for your industry</b>
            <br />
            Make suggested stages your own when authorized.
          </p>
          {items.map((item) => (
            <button type="button" key={item} onClick={() => setNotice(`${item} was not opened.`)}>
              {item}
            </button>
          ))}
        </div>
      )}
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </div>
  );
}

function FilterMenu({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.pipelineStage}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        Filter ▾
      </button>
      {open && (
        <div className={styles.pipelineMenu}>
          <input aria-label="Search filters" placeholder="Search" />
          {['Favorites', 'Owners', 'Filters'].map((heading) => (
            <b key={heading}>{heading}</b>
          ))}
          <button type="button" onClick={() => setNotice('Owner filtering was not applied.')}>
            Everyone
          </button>
          <button type="button" onClick={() => setNotice('Filter creation was not started.')}>
            Add new filter
          </button>
        </div>
      )}
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </div>
  );
}

function ActionsMenu({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.pipelineStage}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        Actions
      </button>
      {open && (
        <div className={styles.pipelineMenu}>
          {['Import data', 'Open data cleanup', 'Restore data'].map((item) => (
            <button type="button" key={item} onClick={() => setNotice(`${item} was not opened.`)}>
              {item}
            </button>
          ))}
        </div>
      )}
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </div>
  );
}

function SortMenu({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  const options = [
    'Next activity',
    'Deal title',
    'Deal value',
    'Linked person',
    'Linked organization',
    'Expected close date',
    'Deal created',
    'Deal update time',
    'Done activities',
    'Activities to do',
    'Number of products',
    'Owner name',
    'Last email sent',
    'Last email received',
  ];
  return (
    <div className={styles.pipelineStage}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        Sort by: Next activity ▾
      </button>
      {open && (
        <div className={styles.pipelineMenu} role="listbox" aria-label="Sort deals">
          {options.map((item) => (
            <button
              role="option"
              aria-selected={item === 'Next activity'}
              type="button"
              key={item}
              onClick={() => setNotice('Sort order was not changed.')}
            >
              {item}
              {item === 'Next activity' ? ' (default)' : ''}
            </button>
          ))}
        </div>
      )}
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </div>
  );
}

function PipelineBoard() {
  return (
    <div className={styles.pipelineBoard} aria-label="Sales pipeline board">
      {pipelineStages.map((stage) => (
        <section className={styles.stageColumn} key={stage}>
          <header>
            <div>
              <b>{stage}</b>
              <span>{stage === 'Proposal Made' ? '$42,000 · 1 deal' : '$0'}</span>
            </div>
            <button type="button" aria-label={`Add deal to ${stage}`} disabled>
              ＋
            </button>
          </header>
          {stage === 'Proposal Made' && <DealCard />}
        </section>
      ))}
    </div>
  );
}

function PipelineOnboardingTooltip() {
  const [open, setOpen] = useState(true);
  return (
    <div className={styles.pipelineStage}>
      <PipelineBoard />
      {open && (
        <aside className={styles.onboardingTip} role="note">
          <div className={styles.tipArt}>▥</div>
          <h3>Your pipelines are ready!</h3>
          <p>Suggested stages can be adjusted later to reflect your sales process.</p>
          <button type="button" onClick={() => setOpen(false)}>
            Dismiss locally
          </button>
        </aside>
      )}
    </div>
  );
}

function DealDetailHeader() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.detailSurface}>
      <div className={styles.titleRow}>
        <div>
          <small>Deal</small>
          <h2>Northstar Platform Renewal</h2>
          <p>Owner · Jordan Lee · 1 follower</p>
        </div>
        <div className={styles.actionRow}>
          {['Won', 'Options', 'Lost'].map((item) => (
            <button key={item} type="button" onClick={() => setNotice(`${item} was not applied.`)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function DealStageProgress() {
  const [notice, setNotice] = useState('');
  const stages = [
    'Qualified',
    'Demo Scheduled',
    'Demo Completed',
    'Proposal Made',
    'Negotiations',
    'Contract Signed',
  ];
  return (
    <section className={styles.detailSurface}>
      <div className={styles.stageTrack} aria-label="Deal stages">
        {stages.map((stage) => (
          <button
            type="button"
            key={stage}
            aria-current={stage === 'Proposal Made' ? 'step' : undefined}
            onClick={() => setNotice('The deal stage was not changed.')}
          >
            <span>0d</span>
            {stage}
          </button>
        ))}
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function DealSummaryPanel() {
  const [section, setSection] = useState('Summary');
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.detailSurface}>
      <div className={styles.summaryCard}>
        <nav aria-label="Deal detail sections">
          {[
            'Summary',
            'Details',
            'Source',
            'Person',
            'Participants',
            'Organization',
            'Products',
          ].map((item) => (
            <button
              key={item}
              type="button"
              aria-current={section === item ? 'page' : undefined}
              onClick={() => setSection(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className={styles.summaryBody}>
          <h3>{section}</h3>
          {section === 'Summary' ? (
            <>
              <strong>$64,000</strong>
              <p>Lakeshore Analytics · Avery Morgan</p>
              <p>Expected close · October 30, 2026</p>
            </>
          ) : (
            <p>This local disclosure contains fictional placeholders only.</p>
          )}
          <button type="button" onClick={() => setNotice('No record field was edited.')}>
            Edit section
          </button>
        </div>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function DealHistoryTimeline() {
  const [tab, setTab] = useState('All');
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.detailSurface}>
      <div className={styles.composerTabs}>
        {[
          'Activity',
          'Notes',
          'Meeting scheduler',
          'Call',
          'WhatsApp',
          'Email',
          'Files',
          'Documents',
        ].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setNotice(`${item} composer was not opened.`)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.historyTabs} aria-label="Deal history filters">
        {['All', 'Activities (3)', 'Notes (1)', 'Emails', 'Files', 'Changelog'].map((item) => (
          <button key={item} type="button" aria-pressed={tab === item} onClick={() => setTab(item)}>
            {item}
          </button>
        ))}
      </div>
      <article className={styles.timelineItem}>
        <small>Today · Jordan Lee</small>
        <b>Cloud readiness workshop completed</b>
        <p>Fictional discovery note with no provider or customer data.</p>
      </article>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

const people = [
  ['Avery Morgan', 'Lakeshore Analytics', 'avery@example.test', '+1 416 555 0148'],
  ['Priya Shah', 'Northstar Health', 'priya@example.test', '+1 647 555 0182'],
];

function ContactsNavigation() {
  const [notice, setNotice] = useState('');
  return (
    <ModuleNav
      title="Contacts"
      items={['People', 'Organizations', 'Contacts timeline', 'Merge duplicates']}
      active="People"
      onGuard={setNotice}
      notice={notice}
    />
  );
}

function ContactsToolbar() {
  return <TableToolbar primary="Person" count="2 people" actions={['Filter', 'Actions']} />;
}

function ContactsPeopleList() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.listSurface}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person[0]}>
              {person.map((value) => (
                <td key={value}>
                  <button
                    type="button"
                    onClick={() => setNotice('No contact record or communication app was opened.')}
                  >
                    {value}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

const organizations = [
  ['Lakeshore Analytics', 'Avery Morgan', '1', '0'],
  ['Northstar Health', 'Priya Shah', '1', '0'],
];

function OrganizationsList() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.listSurface}>
      <TableToolbar
        primary="Organization"
        count="2 organizations"
        actions={['Filter', 'Actions']}
      />
      <table>
        <thead>
          <tr>
            <th>Organization</th>
            <th>Contact person</th>
            <th>Open deals</th>
            <th>Closed deals</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((organization) => (
            <tr key={organization[0]}>
              {organization.map((value) => (
                <td key={value}>
                  <button
                    type="button"
                    onClick={() => setNotice('No organization or contact record was opened.')}
                  >
                    {value}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ContactsTimeline() {
  const [notice, setNotice] = useState('');
  const rows = [
    ['Avery Morgan', 'Lakeshore Analytics'],
    ['Priya Shah', 'Northstar Health'],
  ];
  return (
    <section className={styles.timelineSurface}>
      <div className={styles.timelineToolbar}>
        <button type="button" onClick={() => setNotice('No person form was opened.')}>
          ＋ Person
        </button>
        <button type="button" onClick={() => setNotice('No group email composer was opened.')}>
          Send group email
        </button>
        <span>2 people · No frequency set</span>
        <button type="button" onClick={() => setNotice('The timeline range was not changed.')}>
          3 months back
        </button>
      </div>
      <div className={styles.filterPills}>
        {[
          'All',
          'Deals',
          'Emails',
          'Notes',
          'Call',
          'Meeting',
          'Task',
          'Deadline',
          'Email',
          'Lunch',
        ].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setNotice('Timeline filtering stayed local.')}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.timelineMonths} aria-label="Three month contact timeline">
        <b>Persons</b>
        {['July', 'August', 'September', 'October'].map((month) => (
          <span key={month}>{month}</span>
        ))}
        {rows.map(([person, organization]) => (
          <article key={person}>
            <button type="button" onClick={() => setNotice('No contact record was opened.')}>
              {person}
            </button>
            <small>New · {organization}</small>
            <div className={styles.timelineRule} />
          </article>
        ))}
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ContactsColumnCustomizer() {
  const [open, setOpen] = useState(true);
  const [notice, setNotice] = useState('');
  const fields = [
    'Name',
    'Organization',
    'Email',
    'Phone',
    'Closed deals',
    'Open deals',
    'Next activity date',
    'Owner',
  ];
  if (!open)
    return (
      <button type="button" onClick={() => setOpen(true)}>
        Customize columns
      </button>
    );
  return (
    <section className={styles.modalCard} role="dialog" aria-label="Customize columns">
      <h2>Customize columns</h2>
      <input aria-label="Search columns" placeholder="Search columns" />
      <h3>Visible (8/200)</h3>
      {fields.map((field) => (
        <label key={field}>
          <input type="checkbox" defaultChecked /> {field}
        </label>
      ))}
      <p>These columns are saved with the filter</p>
      <div className={styles.actionRow}>
        <button type="button" onClick={() => setOpen(false)}>
          Cancel
        </button>
        <button type="button" onClick={() => setNotice('Column changes were not saved.')}>
          Save
        </button>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ActivitiesToolbar() {
  return (
    <TableToolbar
      primary="Activity"
      count="2 activities"
      actions={['Meeting scheduler', 'Filter', 'More actions']}
    />
  );
}

function ActivitiesTypeFilter() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.listSurface}>
      <div className={styles.filterPills}>
        {['All', 'Call', 'Meeting', 'Task', 'Deadline', 'Email', 'Lunch'].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setNotice('Activity filtering was not applied.')}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.filterPills}>
        {['To-do', 'Overdue', 'Today', 'Tomorrow', 'This week', 'Next week', 'Select period'].map(
          (item) => (
            <button
              key={item}
              type="button"
              onClick={() => setNotice('Date filtering was not applied.')}
            >
              {item}
            </button>
          )
        )}
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ActivitiesList() {
  const [notice, setNotice] = useState('');
  const rows = [
    ['Platform decision workshop', 'Northstar Platform Renewal', 'Avery Morgan'],
    ['Security review follow-up', 'Managed Service Pilot', 'Priya Shah'],
  ];
  return (
    <section className={styles.listSurface}>
      <table>
        <thead>
          <tr>
            <th>Done</th>
            <th>Activity</th>
            <th>Deal</th>
            <th>Person</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              <td>
                <input
                  type="checkbox"
                  aria-label={`Complete ${row[0]}`}
                  onChange={() => setNotice('Activity completion was not persisted.')}
                />
              </td>
              {row.map((value) => (
                <td key={value}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ActivityCalendar() {
  const [notice, setNotice] = useState('');
  const days = ['Sun 4', 'Mon 5', 'Tue 6', 'Wed 7', 'Thu 8', 'Fri 9', 'Sat 10'];
  const events = [
    ['Sun 4', 'Priority response review', 'done'],
    ['Sun 4', 'Architecture workshop', 'done'],
    ['Thu 8', 'Renewal decision', 'open'],
    ['Fri 9', 'Platform roadmap', 'open'],
  ];
  return (
    <section className={styles.calendarSurface}>
      <div className={styles.timelineToolbar}>
        <button type="button" onClick={() => setNotice('No activity form was opened.')}>
          ＋ Activity
        </button>
        <button type="button" onClick={() => setNotice('The scheduler was not opened.')}>
          Meeting scheduler
        </button>
        <span>Oct 4 – 10, 2026</span>
        <button type="button" onClick={() => setNotice('The calendar week was not changed.')}>
          Today
        </button>
      </div>
      <div className={styles.calendarNotice}>
        <strong>Set up calendar sync to never miss an important event.</strong>
        <span>External calendar sync is not connected in this fixture.</span>
        <button type="button" onClick={() => setNotice('Calendar sync was not opened or enabled.')}>
          Open calendar sync
        </button>
      </div>
      <div className={styles.calendarGrid}>
        {days.map((day) => (
          <div key={day}>
            <b>{day}</b>
            {events
              .filter(([eventDay]) => eventDay === day)
              .map(([, title, state]) => (
                <button
                  type="button"
                  key={title}
                  onClick={() => setNotice('No activity record or completion state was changed.')}
                >
                  {title} · {state}
                </button>
              ))}
          </div>
        ))}
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

const deals = [
  ['Northstar Platform Renewal', 'CA$42,000', 'Lakeshore Analytics', 'Avery Morgan', 'Oct 28'],
  ['Managed Service Pilot', 'CA$18,500', 'Northstar Health', 'Priya Shah', 'Oct 21'],
];

function DealsList() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.listSurface}>
      <TableToolbar
        primary="Deal"
        count="2 deals"
        actions={['Sync', 'All pipelines', 'Filter', 'Actions']}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Organization</th>
            <th>Contact person</th>
            <th>Expected close</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal[0]}>
              {deal.map((value) => (
                <td key={value}>
                  <button
                    type="button"
                    onClick={() => setNotice('No deal or related record was opened.')}
                  >
                    {value}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function DealsForecast() {
  const [notice, setNotice] = useState('');
  const months = ['October', 'November', 'December 2026', 'January 2027'];
  return (
    <section className={styles.forecastSurface}>
      <div className={styles.timelineToolbar}>
        <button type="button" onClick={() => setNotice('The forecast range was not changed.')}>
          Today
        </button>
        <button type="button" onClick={() => setNotice('The pipeline selection was not changed.')}>
          Sales pipeline
        </button>
        <button type="button" onClick={() => setNotice('No forecast filter was applied.')}>
          Filter
        </button>
      </div>
      <div className={styles.forecastGrid}>
        {months.map((month, monthIndex) => (
          <section key={month}>
            <h3>{month}</h3>
            <strong>{monthIndex === 0 ? 'CA$60,500' : 'CA$0'}</strong>
            {monthIndex === 0 &&
              deals.map((deal) => (
                <button
                  key={deal[0]}
                  type="button"
                  onClick={() => setNotice('No deal was opened or moved.')}
                >
                  <b>{deal[0]}</b>
                  <span>
                    {deal[2]} · {deal[1]}
                  </span>
                </button>
              ))}
          </section>
        ))}
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function DealsArchiveEmptyState() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.archiveSurface}>
      <TableToolbar
        primary="Send group email"
        count="0 archived deals"
        actions={['Sync', 'Filter', 'Actions']}
      />
      <div className={styles.emptyModule}>
        <div className={styles.emptyIcon}>▤</div>
        <h2>No archived deals found to match your criteria</h2>
        <p>Try resetting your filters or return to the active deals list.</p>
        <button
          type="button"
          onClick={() => setNotice('Filters were not reset and no provider route was opened.')}
        >
          View active deals
        </button>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ProjectsNavigation({ active }: { active: string }) {
  return (
    <nav className={styles.projectsNav} aria-label="Projects navigation">
      {['Projects', 'Templates', 'Archive', 'Tasks'].map((item) => (
        <span key={item} aria-current={item === active ? 'page' : undefined}>
          {item}
        </span>
      ))}
    </nav>
  );
}

function NovaLanding() {
  const [notice, setNotice] = useState('');
  const [openFaq, setOpenFaq] = useState('CRM data control');
  const assurances = [
    ['You’re always in control', 'CRM changes require review and approval.'],
    ['Private by design', 'Client data is represented only with fictional local content.'],
    ['Protected workspace', 'Security details remain provider claims, not locally verified.'],
  ];
  const faqs = [
    [
      'CRM data control',
      'The observed page says Nova does not change existing CRM data without approval.',
    ],
    ['Meeting platforms', 'The page lists Google Meet, Zoom and Microsoft Teams.'],
    [
      'Recording consent',
      'Meeting organizers remain responsible for applicable consent requirements.',
    ],
  ];
  return (
    <section className={styles.novaLanding}>
      <span className={styles.betaPill}>NOVA</span>
      <h2>Meeting intelligence powered by your CRM data</h2>
      <p>
        Prepare for fictional meetings, capture structured notes and review proposed CRM updates.
      </p>
      <div className={styles.actionRow}>
        <button type="button" onClick={() => setNotice('Nova access was not managed or changed.')}>
          Manage Nova access
        </button>
        <button type="button" onClick={() => setNotice('No demo video was opened.')}>
          Watch 1-minute demo
        </button>
      </div>
      <div className={styles.featureColumns}>
        {assurances.map(([title, body]) => (
          <article key={title}>
            <span>◇</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <div className={styles.faqList}>
        <h3>Frequently asked questions</h3>
        {faqs.map(([title, body]) => (
          <div key={title}>
            <button
              type="button"
              aria-expanded={openFaq === title}
              onClick={() => setOpenFaq(openFaq === title ? '' : title)}
            >
              {title}
            </button>
            {openFaq === title && <p>{body}</p>}
          </div>
        ))}
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ProjectsBoard() {
  const [notice, setNotice] = useState('');
  const stages = ['Kick-off', 'Setup', 'Configuration', 'Testing', 'Go-Live', 'Support'];
  return (
    <section className={styles.projectsSurface}>
      <nav aria-label="Projects navigation">
        {['Projects', 'Templates', 'Archive', 'Tasks'].map((item) => (
          <button key={item} type="button" onClick={() => setNotice(`${item} was not opened.`)}>
            {item}
          </button>
        ))}
      </nav>
      <div className={styles.timelineToolbar}>
        <button type="button" onClick={() => setNotice('No project form was opened.')}>
          ＋ Project
        </button>
        <button type="button" onClick={() => setNotice('The project board was not edited.')}>
          Delivery
        </button>
        <button type="button" onClick={() => setNotice('No project filter was applied.')}>
          Filter
        </button>
      </div>
      <div className={styles.projectColumns}>
        {stages.map((stage) => (
          <section key={stage}>
            <h3>{stage}</h3>
            <span>0 projects</span>
            <button type="button" onClick={() => setNotice('No project form was opened.')}>
              ＋
            </button>
          </section>
        ))}
      </div>
      <div className={styles.welcomeCard} role="dialog" aria-label="Welcome to Projects">
        <h2>Welcome to Projects!</h2>
        <p>Manage fictional delivery work in the same CRM workspace.</p>
        <button type="button" onClick={() => setNotice('Project setup was not started.')}>
          Get started
        </button>
        <button type="button" onClick={() => setNotice('No video was opened.')}>
          Watch video
        </button>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ProjectsTemplates() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.projectsSubSurface}>
      <ProjectsNavigation active="Templates" />
      <div className={styles.tableToolbar}>
        <button type="button" onClick={() => setNotice('No project template was created.')}>
          ＋ Template
        </button>
      </div>
      <div className={styles.emptyModule}>
        <div className={styles.emptyIcon}>▧</div>
        <h2>No project templates added yet</h2>
        <p>Add templates for similar projects to outline repeatable work.</p>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ProjectsArchive() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.projectsSubSurface}>
      <ProjectsNavigation active="Archive" />
      <div className={styles.tableToolbar}>
        <button type="button" onClick={() => setNotice('No archive filter was applied.')}>
          Filter
        </button>
        <button type="button" onClick={() => setNotice('No archived project action was opened.')}>
          Actions
        </button>
      </div>
      <div className={styles.emptyModule}>
        <div className={styles.emptyIcon}>▤</div>
        <h2>No archived projects found</h2>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ProjectsTasks() {
  const [notice, setNotice] = useState('');
  const tasks = [
    ['Draft launch checklist', 'Harbor CRM Rollout', 'Kick-off'],
    ['Review onboarding map', 'Harbor CRM Rollout', 'Kick-off'],
    ['Validate handoff notes', 'Harbor CRM Rollout', 'Kick-off'],
    ['Prepare support plan', 'Harbor CRM Rollout', 'Kick-off'],
  ];
  return (
    <section className={styles.projectsSubSurface}>
      <ProjectsNavigation active="Tasks" />
      <div className={styles.tableToolbar}>
        <button type="button" onClick={() => setNotice('No project task was created.')}>
          ＋ Task
        </button>
        <span>4 fictional tasks</span>
        {['To-do', 'All priorities', 'All assignees', 'All phases', 'Open projects'].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setNotice('Task filters were not changed.')}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.listSurface}>
        <table>
          <thead>
            <tr>
              <th>Done</th>
              <th>Subject</th>
              <th>Project</th>
              <th>Phase</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(([subject, project, phase]) => (
              <tr key={subject}>
                <td>
                  <button
                    type="button"
                    aria-label={`Complete ${subject}`}
                    onClick={() => setNotice('Task completion was not persisted.')}
                  >
                    ○
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => setNotice('No project task was opened.')}>
                    {subject}
                  </button>
                </td>
                <td>{project}</td>
                <td>{phase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function CampaignsFeatureWall() {
  const [notice, setNotice] = useState('');
  const features = [
    ['Create polished emails', 'Use reusable email layouts for fictional campaigns.'],
    ['Nurture contacts', 'Represent timed follow-ups without sending a message.'],
    ['Review performance', 'Compare fictional engagement summaries.'],
  ];
  return (
    <section className={styles.featureWall}>
      <span className={styles.betaPill}>NEW</span>
      <h2>Send email marketing campaigns that get clicks</h2>
      <p>Bring marketing and sales together with the Campaigns add-on.</p>
      <button
        type="button"
        onClick={() => setNotice('No trial, add-on or billing flow was started.')}
      >
        Get started for free
      </button>
      <div className={styles.featureColumns}>
        {features.map(([title, body]) => (
          <article key={title}>
            <span>◇</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ProductsEmptyState() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.emptyModule}>
      <div className={styles.emptyIcon}>▦</div>
      <h2>Add your first product</h2>
      <p>
        Create a product list so pricing stays consistent and revenue reports reflect what you sell.
      </p>
      <div className={styles.actionRow}>
        <button type="button" onClick={() => setNotice('No product form was opened.')}>
          Add product
        </button>
        <button type="button" onClick={() => setNotice('No product import was started.')}>
          Import products
        </button>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function MarketplaceCatalog() {
  const [notice, setNotice] = useState('');
  const apps = ['Nova', 'Zapier', 'Google Meet', 'PandaDoc', 'Surfe', 'Dedupely'];
  const goals = [
    'Attract new leads',
    'Qualify leads',
    'Nurture leads',
    'Manage contracts',
    'Manage projects',
    'Support customers',
  ];
  return (
    <section className={styles.marketplaceSurface}>
      <h2>Search and connect your favorite apps</h2>
      <div className={styles.marketSearch}>
        <input
          aria-label="Search fictional marketplace"
          placeholder="Enter app name, keyword or description"
        />
        <button type="button" onClick={() => setNotice('No marketplace search request was sent.')}>
          Search
        </button>
      </div>
      <h3>Recommended apps for you</h3>
      <div className={styles.appGrid}>
        {apps.map((app) => (
          <button
            key={app}
            type="button"
            onClick={() => setNotice('No app detail or installation flow was opened.')}
          >
            {app}
          </button>
        ))}
      </div>
      <h3>Explore apps by goals</h3>
      <div className={styles.appGrid}>
        {goals.map((goal) => (
          <button
            key={goal}
            type="button"
            onClick={() => setNotice('No marketplace category was opened.')}
          >
            {goal}
          </button>
        ))}
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function PulseNavigation({ active }: { active: string }) {
  return (
    <nav className={styles.pulseNav} aria-label="Pulse navigation">
      {['Feed', 'Scores', 'Sequences', 'Data enrichment'].map((item) => (
        <span key={item} aria-current={item === active ? 'page' : undefined}>
          {item}
        </span>
      ))}
    </nav>
  );
}

function PulseFeed() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.pulseSurface}>
      <PulseNavigation active="Feed" />
      <div className={styles.pulseBody}>
        <span className={styles.betaPill}>BETA</span>
        <h2>Pulse feed</h2>
        <p>Your one-stop workspace for fictional priorities and follow-ups.</p>
        <div className={styles.filterPills}>
          {['Follow-ups', 'Overlooked deals', 'Opportunities', 'Filter'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setNotice('The Pulse feed was not filtered or changed.')}
            >
              {item}
            </button>
          ))}
        </div>
        <h3>No actions for today</h3>
        <p>The reconstructed feed contains no provider prospects.</p>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function PulseOnboarding({ kind }: { kind: 'scores' | 'sequences' }) {
  const [notice, setNotice] = useState('');
  const isScores = kind === 'scores';
  return (
    <section className={styles.pulseSurface}>
      <PulseNavigation active={isScores ? 'Scores' : 'Sequences'} />
      <div className={styles.pulseBody}>
        <span className={styles.betaPill}>BETA</span>
        <h2>{isScores ? 'Scores' : 'Sequences'}</h2>
        <p>
          {isScores
            ? 'Set up custom scores to qualify and prioritize fictional prospects.'
            : 'Stay on top of fictional leads and deals with timely follow-ups.'}
        </p>
        <h3>
          {isScores
            ? 'Forget manual deal prioritization'
            : 'Automate follow-ups using Sequences. Close more deals'}
        </h3>
        <div className={styles.featureColumns}>
          {(isScores
            ? ['Define scoring rules', 'Focus on winning deals', 'Close the right deals faster']
            : ['Personalize follow-ups', 'Keep timing consistent', 'Review every step']
          ).map((item) => (
            <article key={item}>
              <span>✓</span>
              <h4>{item}</h4>
            </article>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setNotice(`${isScores ? 'Score' : 'Sequence'} setup was not started.`)}
        >
          {isScores ? 'Get started' : 'Start from template'}
        </button>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function DataEnrichmentFeatureWall() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.featureWall}>
      <span className={styles.betaPill}>BETA</span>
      <h2>Find missing data in seconds with data enrichment</h2>
      <p>
        Represent organization and contact enrichment without requesting or revealing provider data.
      </p>
      <button type="button" onClick={() => setNotice('No pricing or purchase flow was opened.')}>
        View pricing
      </button>
      <div className={styles.featureColumns}>
        {[
          ['Unlock actionable data', 'Skip manual research in the fictional fixture.'],
          ['Improve outreach', 'Model complete contact fields without real people.'],
          ['Enrich in bulk', 'Bulk changes are documented but disabled locally.'],
        ].map(([title, body]) => (
          <article key={title}>
            <span>◇</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function AutomationsLanding() {
  const [notice, setNotice] = useState('');
  const automations = [
    'Schedule follow-ups when deals move stage',
    'Create the first activity for every new deal',
    'Update a deal field when another one changes',
    'Schedule the next activity after one is completed',
    'Send an email when a deal moves stage',
    'Send an email when a new deal is added',
  ];
  return (
    <section className={styles.toolsSurface}>
      <div className={styles.titleRow}>
        <div>
          <h2>Work smarter, not harder with Automations</h2>
          <p>Turn routine fictional tasks into guarded examples.</p>
        </div>
        <button type="button" onClick={() => setNotice('No automation was created.')}>
          ＋ Automation
        </button>
      </div>
      <h3>Popular automations</h3>
      <div className={styles.automationGrid}>
        {automations.map((item) => (
          <article key={item}>
            <span>Popular pattern</span>
            <h4>{item}</h4>
            <button
              type="button"
              onClick={() => setNotice('No automation detail or template was opened.')}
            >
              View details
            </button>
          </article>
        ))}
      </div>
      <div className={styles.actionRow}>
        <button type="button" onClick={() => setNotice('No automation builder was opened.')}>
          Start from scratch
        </button>
        <button type="button" onClick={() => setNotice('No template library was opened.')}>
          Browse templates
        </button>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function AutomaticAssignmentLanding() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.toolsSurface}>
      <div className={styles.noticeBanner}>
        <div>
          <h2>Automate your lead routing</h2>
          <p>Set up rules that assign fictional leads and deals to the right people.</p>
        </div>
        <button type="button" onClick={() => setNotice('No video was opened.')}>
          Watch video (00:35)
        </button>
      </div>
      <div className={styles.tableToolbar}>
        <button type="button" onClick={() => setNotice('No assignment rule was created.')}>
          ＋ Rule
        </button>
        <button type="button" onClick={() => setNotice('No support article was opened.')}>
          Learn more
        </button>
      </div>
      <div className={styles.historyTabs}>
        <button type="button" aria-pressed="true">
          Rules
        </button>
        <button type="button" onClick={() => setNotice('Assignment history was not opened.')}>
          History
        </button>
      </div>
      <div className={styles.emptyModule}>
        <div className={styles.emptyIcon}>⇢</div>
        <h3>No assignment rules in this fictional fixture</h3>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function DocumentsLanding() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.toolsSurface}>
      <span className={styles.betaPill}>SMART DOCS</span>
      <h2>Make light work of quotes, proposals and contracts</h2>
      <p>Create documents from fictional CRM data and review follow-up timing.</p>
      <div className={styles.actionRow}>
        <button type="button" onClick={() => setNotice('No Smart Docs video was opened.')}>
          Watch video (09:14)
        </button>
        <button type="button" onClick={() => setNotice('No support or terms page was opened.')}>
          Learn more
        </button>
      </div>
      <div className={styles.historyTabs}>
        {['My accounts', 'Company settings', 'Customization'].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setNotice('Document settings were not changed.')}
          >
            {item}
          </button>
        ))}
      </div>
      <h3>Even more powerful with cloud storage</h3>
      <ul>
        <li>Create editable documents</li>
        <li>Autofill documents with fictional CRM data</li>
        <li>Set up shared templates</li>
      </ul>
      <button type="button" onClick={() => setNotice('No cloud storage connection was started.')}>
        Connect cloud storage
      </button>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ImportDataLanding() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.toolsSurface}>
      <h2>Import data</h2>
      <p>Choose how to import people, organizations, deals, leads, notes and activities.</p>
      <div className={styles.historyTabs}>
        <button type="button" aria-pressed="true">
          New import
        </button>
        <button type="button" onClick={() => setNotice('Import history was not opened.')}>
          Import history
        </button>
      </div>
      <div className={styles.importCards}>
        <article>
          <h3>Import from spreadsheet</h3>
          <p>Spreadsheet upload and drag-and-drop remain disabled in this fixture.</p>
          <button type="button" onClick={() => setNotice('No file chooser or import was started.')}>
            Get started
          </button>
        </article>
        <article>
          <h3>Import from other software</h3>
          <p>Third-party migration was observed but not opened.</p>
          <button type="button" onClick={() => setNotice('No third-party importer was opened.')}>
            Import from other software
          </button>
        </article>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ExportDataLanding() {
  const [notice, setNotice] = useState('');
  const guarded = (message: string) => setNotice(message);
  return (
    <section className={styles.toolsSurface}>
      <h2>Export data</h2>
      <h3>Select export data type</h3>
      <div className={styles.filterPills}>
        {[
          'Leads',
          'Deals',
          'Organizations',
          'People',
          'Products',
          'Activities',
          'Projects',
          'Notes',
          'Files',
        ].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => guarded('The export data type was not changed.')}
          >
            {item}
          </button>
        ))}
      </div>
      <h3>Archive status</h3>
      <div className={styles.filterPills}>
        {['Not archived', 'Archived', 'All (archived or not)'].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => guarded('The archive status was not changed.')}
          >
            {item}
          </button>
        ))}
      </div>
      <h3>Export format</h3>
      <div className={styles.actionRow}>
        <button type="button" onClick={() => guarded('The export format was not changed.')}>
          Excel
        </button>
        <button type="button" onClick={() => guarded('The export format was not changed.')}>
          CSV
        </button>
        <button type="button" onClick={() => guarded('No export file was generated.')}>
          Export
        </button>
      </div>
      <div className={styles.emptyModule}>
        <h3>No exports found</h3>
        <p>No fictional export files have been generated.</p>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function RestoreDataLanding() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.toolsSurface}>
      <span className={styles.betaPill}>NEW</span>
      <h2>Restore data</h2>
      <p>Review recovery options without restoring or changing provider records.</p>
      <div className={styles.historyTabs}>
        {['Deleted items', 'Bulk edits', 'Bulk conversions'].map((item, index) => (
          <button
            key={item}
            type="button"
            aria-pressed={index === 0}
            onClick={() => setNotice('The recovery category was not changed.')}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.filterPills}>
        {[
          'Leads',
          'Deals',
          'People',
          'Organizations',
          'Activities',
          'Products',
          'Projects',
          'Tasks',
        ].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setNotice('The restore entity was not changed.')}
          >
            {item} (0)
          </button>
        ))}
        <button type="button" onClick={() => setNotice('No restore filter was applied.')}>
          Filter
        </button>
      </div>
      <div className={styles.listSurface}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Deleted by</th>
              <th>Deletion time</th>
              <th>Deletion type</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5}>0 fictional items available to restore</td>
            </tr>
          </tbody>
        </table>
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

type ToolsSettingsKind = 'ai' | 'phone' | 'products' | 'webhooks' | 'duplicates' | 'apps';

function ToolsSettingsLanding({ kind }: { kind: ToolsSettingsKind }) {
  const [notice, setNotice] = useState('');
  if (kind === 'ai') {
    return (
      <section className={styles.toolsSurface}>
        <h2>Pipedrive AI</h2>
        <p>Review and manage AI features for your fictional company workspace.</p>
        <button type="button" onClick={() => setNotice('The Beta program was not opened.')}>
          Beta program page
        </button>
        <div className={styles.emptyModule}>
          <h3>Released features</h3>
          <p>Fictional AI feature controls remain read-only in this reconstruction.</p>
        </div>
        {notice && <GuardNotice>{notice}</GuardNotice>}
      </section>
    );
  }
  if (kind === 'phone') {
    return (
      <section className={styles.toolsSurface}>
        <h2>Phone calls</h2>
        <p>Choose a default calling method without initiating a call.</p>
        <label>
          Default calling app
          <select
            defaultValue="callto"
            onChange={() => setNotice('The calling app was not changed.')}
          >
            <option value="callto">Default callto handler</option>
          </select>
        </label>
        <label>
          Calling URI
          <input value="callto:[fictional-number]" readOnly />
        </label>
        <button type="button" onClick={() => setNotice('Calling settings were not saved.')}>
          Save settings
        </button>
        {notice && <GuardNotice>{notice}</GuardNotice>}
      </section>
    );
  }
  if (kind === 'products') {
    return (
      <section className={styles.toolsSurface}>
        <h2>Products</h2>
        <label>
          <input type="checkbox" checked readOnly /> Enable Products
        </label>
        <ul>
          <li>Create fictional products in multiple currencies</li>
          <li>Link products to fictional deals</li>
          <li>Calculate fictional deal values</li>
        </ul>
        <label>
          Default tax setting
          <select
            defaultValue="inclusive"
            onChange={() => setNotice('The tax setting was not changed.')}
          >
            <option value="inclusive">Tax inclusive</option>
          </select>
        </label>
        <button type="button" onClick={() => setNotice('Product settings were not saved.')}>
          Save
        </button>
        {notice && <GuardNotice>{notice}</GuardNotice>}
      </section>
    );
  }
  if (kind === 'webhooks') {
    return (
      <section className={styles.toolsSurface}>
        <h2>Webhooks</h2>
        <div className={styles.historyTabs}>
          <button type="button" aria-pressed="true">
            Webhooks
          </button>
          <button type="button" onClick={() => setNotice('Automated webhooks were not opened.')}>
            Automated webhooks
          </button>
        </div>
        <div className={styles.emptyModule}>
          <h3>Get started by adding a webhook</h3>
          <p>No endpoint or secret is stored in this fictional fixture.</p>
          <button type="button" onClick={() => setNotice('No webhook was created.')}>
            Add a webhook
          </button>
        </div>
        {notice && <GuardNotice>{notice}</GuardNotice>}
      </section>
    );
  }
  if (kind === 'duplicates') {
    return (
      <section className={styles.toolsSurface}>
        <h2>Merge Duplicates</h2>
        <button type="button" onClick={() => setNotice('Matching rules were not edited.')}>
          Edit matching rules
        </button>
        <div className={styles.historyTabs}>
          <button type="button" aria-pressed="true">
            People
          </button>
          <button type="button" onClick={() => setNotice('Organizations were not loaded.')}>
            Organizations
          </button>
        </div>
        <div className={styles.emptyModule}>
          <h3>What a beautiful sight!</h3>
          <p>You have no duplicate people in this fictional fixture.</p>
        </div>
        {notice && <GuardNotice>{notice}</GuardNotice>}
      </section>
    );
  }
  return (
    <section className={styles.toolsSurface}>
      <h2>Marketplace apps</h2>
      <p>All of your installed Marketplace apps at a glance.</p>
      <div className={styles.emptyModule}>
        <h3>No apps installed yet</h3>
        <p>Fictional recommendations are shown without opening an app detail.</p>
      </div>
      <div className={styles.importCards}>
        {['Workflow Bridge', 'Meeting Link', 'Proposal Studio'].map((app) => (
          <article key={app}>
            <h3>{app}</h3>
            <p>Fictional Marketplace recommendation</p>
            <button
              type="button"
              onClick={() => setNotice('No app detail or installation was opened.')}
            >
              View {app}
            </button>
          </article>
        ))}
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ActivitiesDisclosureMenu({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.detailSurface}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        More actions
      </button>
      {open && (
        <div className={styles.pipelineMenu}>
          {[
            'Export filter results',
            'Data import',
            'Open data cleanup',
            'Activity settings',
            'Restore data',
            'Open details in full screen',
          ].map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setNotice(`${item} was not opened or changed.`)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function LeadsNavigation() {
  const [notice, setNotice] = useState('');
  return (
    <ModuleNav
      title="Leads"
      items={[
        'Leads Inbox',
        'Live Chat',
        'Chatbot',
        'Web Forms',
        'Prospector',
        'Web Visitors',
        'LinkedIn',
      ]}
      active="Leads Inbox"
      onGuard={setNotice}
      notice={notice}
    />
  );
}

function LeadsEmptyState() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.emptyModule}>
      <div className={styles.emptyIcon}>◎</div>
      <h2>Add your first lead</h2>
      <p>
        Organize and qualify incoming opportunities here, then convert the right ones into deals.
      </p>
      <button type="button" onClick={() => setNotice('No lead form was opened.')}>
        ＋ Lead
      </button>
      <button type="button" onClick={() => setNotice('No import flow was opened.')}>
        Import leads
      </button>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function ModuleNav({
  title,
  items,
  active,
  onGuard,
  notice,
}: {
  title: string;
  items: string[];
  active: string;
  onGuard: (message: string) => void;
  notice: string;
}) {
  return (
    <section className={styles.moduleShell}>
      <aside>
        <h2>{title}</h2>
        {items.map((item) => (
          <button
            key={item}
            type="button"
            aria-current={item === active ? 'page' : undefined}
            onClick={() => onGuard(`${item} navigation was not executed.`)}
          >
            {item}
          </button>
        ))}
      </aside>
      <main>
        <h2>{active}</h2>
        <p>Fictional local module preview</p>
        {notice && <GuardNotice>{notice}</GuardNotice>}
      </main>
    </section>
  );
}

function TableToolbar({
  primary,
  count,
  actions,
}: {
  primary: string;
  count: string;
  actions: string[];
}) {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.detailSurface}>
      <div className={styles.tableToolbar}>
        <button
          type="button"
          onClick={() => setNotice(`No ${primary.toLowerCase()} form was opened.`)}
        >
          ＋ {primary}
        </button>
        <span>{count}</span>
        {actions.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setNotice(`${item} is represented as a separate local state.`)}
          >
            {item}
          </button>
        ))}
      </div>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function InsightsNavigation() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.moduleShell}>
      <aside>
        <h2>Insights</h2>
        {['Dashboards', 'Goals', 'Reports 0/250'].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setNotice(`${item} navigation was not executed.`)}
          >
            {item}
          </button>
        ))}
      </aside>
      <main>
        <h2>My dashboards</h2>
        <p>No dashboards</p>
        <h3>My reports</h3>
        <p>No reports</p>
        {notice && <GuardNotice>{notice}</GuardNotice>}
      </main>
    </section>
  );
}

function InsightsCreateMenu({ initialState = 'open' }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState !== 'closed');
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.detailSurface}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        ＋ Create
      </button>
      {open && (
        <div className={styles.pipelineMenu}>
          {['Generate report AI', 'Report', 'Goal', 'Dashboard'].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setNotice(`${item} creation was not started.`)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function InsightsEmptyState() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.emptyModule}>
      <div className={styles.emptyIcon}>▥</div>
      <h2>Identify growth opportunities. Take action.</h2>
      <p>
        Set up a personalized reporting dashboard to track fictional sales activity and explore the
        layout.
      </p>
      <button type="button" onClick={() => setNotice('Dashboard creation was not started.')}>
        Create dashboard
      </button>
      <button type="button" onClick={() => setNotice('No AI report request was sent.')}>
        Generate report AI
      </button>
      <button type="button" onClick={() => setNotice('No video was opened.')}>
        Watch video
      </button>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function SalesInboxNavigation() {
  return (
    <section className={styles.moduleShell}>
      <aside>
        <h2>Sales Inbox</h2>
        {['New email', 'Inbox', 'Drafts', 'Outbox', 'Sent', 'Archive'].map((item) => (
          <button key={item} type="button" disabled>
            {item}
          </button>
        ))}
        <h3>Integrations</h3>
        <button type="button" disabled>
          WhatsApp
        </button>
      </aside>
      <main>
        <h2>Email tools are unavailable until setup</h2>
        <p>The local reconstruction does not connect an inbox.</p>
      </main>
    </section>
  );
}

function SalesInboxOnboarding() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.onboardingPage}>
      <h2>Close deals faster with better email</h2>
      <p>Smart, secure and configurable Sales Inbox.</p>
      <input aria-label="Fictional email address" value="you@example.test" readOnly />
      <div className={styles.actionRow}>
        <button
          type="button"
          onClick={() => setNotice('No mailbox setup or external connection was started.')}
        >
          Get started
        </button>
        <button type="button" onClick={() => setNotice('No video was opened.')}>
          Watch video
        </button>
      </div>
      <small>Plan availability was observed. Billing behavior was not exercised.</small>
      {notice && <GuardNotice>{notice}</GuardNotice>}
    </section>
  );
}

function SalesInboxFeatureGrid() {
  const features = [
    ['Powerful features', 'Link messages to fictional deals and leads.'],
    ['Enhanced tools', 'AI writing and summaries were described but not used.'],
    ['Team Inbox', 'Collaborative inbox assignment.'],
    ['Secure and private', 'Conversation visibility controls.'],
  ];
  return (
    <section className={styles.featureGrid}>
      {features.map(([title, body]) => (
        <article key={title}>
          <span>◇</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </article>
      ))}
    </section>
  );
}

function SalesInboxFaq() {
  const [open, setOpen] = useState('Email sync');
  const items = [
    ['Email sync', 'Connected conversations can appear in both inboxes.'],
    ['Privacy controls', 'Choose private, shared or per-conversation visibility.'],
    ['Email security', 'Security details require primary documentation.'],
    ['Automatic linking', 'Relationship matching was described but not exercised.'],
  ];
  return (
    <section className={styles.faqList}>
      <h2>Frequently asked questions</h2>
      {items.map(([title, body]) => (
        <div key={title}>
          <button
            type="button"
            aria-expanded={open === title}
            onClick={() => setOpen(open === title ? '' : title)}
          >
            {title}
          </button>
          {open === title && <p>{body}</p>}
        </div>
      ))}
    </section>
  );
}

export function PipedrivePreview({ variant, initialState, disabled }: PipedrivePreviewProps) {
  return (
    <div className={styles.frame} aria-disabled={disabled || undefined}>
      {variant === 'application-shell' && <ApplicationShell />}
      {variant === 'setup-guide-hero' && (
        <div className={styles.main}>
          <SetupGuideHero />
        </div>
      )}
      {variant === 'setup-task-group' && (
        <div className={styles.main}>
          <SetupTaskGroup initialState={initialState} />
        </div>
      )}
      {variant === 'setup-task-row' && (
        <div className={styles.main}>
          <SetupTaskRow />
        </div>
      )}
      {variant === 'more-menu' && <DisclosureMenu kind="more" initialState={initialState} />}
      {variant === 'quick-add-menu' && <DisclosureMenu kind="quick" initialState={initialState} />}
      {variant === 'notifications-drawer' && <NotificationsDrawer initialState={initialState} />}
      {variant === 'quick-help-drawer' && <QuickHelpDrawer initialState={initialState} />}
      {variant === 'sales-assistant-panel' && <SalesAssistant initialState={initialState} />}
      {variant === 'avatar-coachmark' && <AvatarCoachmark />}
      {variant === 'deals-navigation' && <DealsNavigation />}
      {variant === 'import-banner' && <ImportBanner />}
      {variant === 'pipeline-toolbar' && <PipelineToolbar />}
      {variant === 'pipeline-selector' && <PipelineSelector initialState={initialState} />}
      {variant === 'deals-filter-menu' && <FilterMenu initialState={initialState} />}
      {variant === 'deals-actions-menu' && <ActionsMenu initialState={initialState} />}
      {variant === 'deals-sort-menu' && <SortMenu initialState={initialState} />}
      {variant === 'pipeline-stage' && <PipelineStage />}
      {variant === 'deal-card' && (
        <div className={styles.pipelineStage}>
          <DealCard />
        </div>
      )}
      {variant === 'pipeline-onboarding-tooltip' && <PipelineOnboardingTooltip />}
      {variant === 'deal-detail-header' && <DealDetailHeader />}
      {variant === 'deal-stage-progress' && <DealStageProgress />}
      {variant === 'deal-summary-panel' && <DealSummaryPanel />}
      {variant === 'deal-history-timeline' && <DealHistoryTimeline />}
      {variant === 'contacts-navigation' && <ContactsNavigation />}
      {variant === 'contacts-toolbar' && <ContactsToolbar />}
      {variant === 'contacts-people-list' && <ContactsPeopleList />}
      {variant === 'organizations-list' && <OrganizationsList />}
      {variant === 'contacts-timeline' && <ContactsTimeline />}
      {variant === 'contacts-column-customizer' && <ContactsColumnCustomizer />}
      {variant === 'activities-toolbar' && <ActivitiesToolbar />}
      {variant === 'activities-type-filter' && <ActivitiesTypeFilter />}
      {variant === 'activities-list' && <ActivitiesList />}
      {variant === 'activity-calendar' && <ActivityCalendar />}
      {variant === 'activities-disclosure-menu' && (
        <ActivitiesDisclosureMenu initialState={initialState} />
      )}
      {variant === 'deals-list' && <DealsList />}
      {variant === 'deals-forecast' && <DealsForecast />}
      {variant === 'deals-archive-empty-state' && <DealsArchiveEmptyState />}
      {variant === 'nova-landing' && <NovaLanding />}
      {variant === 'projects-board' && <ProjectsBoard />}
      {variant === 'projects-templates' && <ProjectsTemplates />}
      {variant === 'projects-archive' && <ProjectsArchive />}
      {variant === 'projects-tasks' && <ProjectsTasks />}
      {variant === 'campaigns-feature-wall' && <CampaignsFeatureWall />}
      {variant === 'products-empty-state' && <ProductsEmptyState />}
      {variant === 'marketplace-catalog' && <MarketplaceCatalog />}
      {variant === 'pulse-feed' && <PulseFeed />}
      {variant === 'pulse-scores-onboarding' && <PulseOnboarding kind="scores" />}
      {variant === 'pulse-sequences-onboarding' && <PulseOnboarding kind="sequences" />}
      {variant === 'data-enrichment-feature-wall' && <DataEnrichmentFeatureWall />}
      {variant === 'automations-landing' && <AutomationsLanding />}
      {variant === 'automatic-assignment-landing' && <AutomaticAssignmentLanding />}
      {variant === 'documents-landing' && <DocumentsLanding />}
      {variant === 'import-data-landing' && <ImportDataLanding />}
      {variant === 'export-data-landing' && <ExportDataLanding />}
      {variant === 'restore-data-landing' && <RestoreDataLanding />}
      {variant === 'ai-settings' && <ToolsSettingsLanding kind="ai" />}
      {variant === 'phone-calls-settings' && <ToolsSettingsLanding kind="phone" />}
      {variant === 'products-settings' && <ToolsSettingsLanding kind="products" />}
      {variant === 'webhooks-empty-state' && <ToolsSettingsLanding kind="webhooks" />}
      {variant === 'merge-duplicates-empty-state' && <ToolsSettingsLanding kind="duplicates" />}
      {variant === 'installed-apps-empty-state' && <ToolsSettingsLanding kind="apps" />}
      {variant === 'leads-navigation' && <LeadsNavigation />}
      {variant === 'leads-empty-state' && <LeadsEmptyState />}
      {variant === 'leadbooster-navigation' && <LeadsNavigation />}
      {variant === 'leads-add-toolbar' && (
        <TableToolbar primary="Lead" count="0 leads" actions={['Import leads']} />
      )}
      {variant === 'insights-navigation' && <InsightsNavigation />}
      {variant === 'insights-create-menu' && <InsightsCreateMenu initialState={initialState} />}
      {variant === 'insights-empty-state' && <InsightsEmptyState />}
      {variant === 'insights-report-actions' && (
        <TableToolbar
          primary="Create"
          count="0 reports"
          actions={['Generate report AI', 'Goal', 'Dashboard']}
        />
      )}
      {variant === 'sales-inbox-navigation' && <SalesInboxNavigation />}
      {variant === 'sales-inbox-onboarding' && <SalesInboxOnboarding />}
      {variant === 'sales-inbox-feature-grid' && <SalesInboxFeatureGrid />}
      {variant === 'sales-inbox-faq' && <SalesInboxFaq />}
    </div>
  );
}

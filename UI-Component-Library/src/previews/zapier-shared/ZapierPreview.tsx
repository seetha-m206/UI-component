import { useState } from 'react';
import styles from './zapier.module.css';

export type ZapierVariant =
  | 'application-shell'
  | 'home-copilot'
  | 'automations-workspace'
  | 'creation-menu'
  | 'guided-templates'
  | 'zap-editor-canvas'
  | 'trigger-action-picker'
  | 'ai-action-palette'
  | 'app-connection-boundary'
  | 'data-mapping-testing'
  | 'flow-controls-approvals'
  | 'zap-history-failures'
  | 'task-usage-plan-gates'
  | 'settings-catalogue'
  | 'interactive-onboarding-tour'
  | 'template-recommendation-carousel'
  | 'ai-category-tabs'
  | 'human-in-loop-ai-actions'
  | 'editor-linked-assets'
  | 'editor-notes'
  | 'editor-change-history'
  | 'editor-run-test-panel'
  | 'editor-status'
  | 'editor-advanced-settings'
  | 'editor-versions'
  | 'history-status-filter'
  | 'autoreplay-help'
  | 'usage-empty-report'
  | 'connection-management-states';

export interface ZapierPreviewProps {
  variant: ZapierVariant;
  initialState?: string;
  disabled?: boolean;
}

const navigation = [
  'Home',
  'Automations',
  'Folders',
  'Favorites',
  'Templates',
  'App connections',
  'MCP servers',
  'Zap history',
];
const products = [
  ['Zaps', 'Automated workflows'],
  ['Tables', 'Automated data storage'],
  ['Forms', 'Forms connected to workflows'],
  ['Canvas', 'Process visualization'],
  ['Chatbots', 'AI-powered chatbot'],
  ['Agents', 'AI assistants'],
  ['MCP servers', 'Secure AI tool integrations'],
];

function Guard({ children }: { children: string }) {
  return (
    <p className={styles.guard} role="status">
      {children}
    </p>
  );
}

function TrialBanner() {
  return (
    <div className={styles.trial}>
      <b>Professional trial</b>
      <span>Fictional time remaining</span>
      <button type="button" disabled>
        Upgrade
      </button>
    </div>
  );
}

function AppShell({ variant, children }: { variant: ZapierVariant; children: React.ReactNode }) {
  const [createOpen, setCreateOpen] = useState(variant === 'creation-menu');
  const [notice, setNotice] = useState('');
  const active =
    variant.includes('history') || variant.includes('usage')
      ? 'Zap history'
      : variant === 'guided-templates'
        ? 'Templates'
        : variant.includes('connection')
          ? 'App connections'
          : variant === 'home-copilot' || variant === 'application-shell'
            ? 'Home'
            : 'Automations';

  return (
    <div className={styles.app}>
      <TrialBanner />
      <header className={styles.topbar}>
        <span className={styles.brand} aria-label="Fictional Zapier mark">
          _*
        </span>
        <label className={styles.search}>
          <span>⌕</span>
          <input
            aria-label="Search assets, apps, templates, and more"
            placeholder="Search assets, apps, templates, and more"
          />
          <kbd>⌘ K</kbd>
        </label>
        <button
          type="button"
          onClick={() => setNotice('Help stayed inside this fictional fixture.')}
        >
          Help
        </button>
        <button type="button" onClick={() => setNotice('No plan page was opened.')}>
          Upgrade
        </button>
        <button
          type="button"
          aria-label="Fictional account settings"
          onClick={() => setNotice('Account identity is intentionally omitted.')}
        >
          SL
        </button>
      </header>
      <aside className={styles.sidebar}>
        <button
          type="button"
          className={styles.create}
          aria-expanded={createOpen}
          onClick={() => setCreateOpen((value) => !value)}
        >
          ＋ Create <span>⌄</span>
        </button>
        <nav aria-label="Zapier fixture navigation">
          {navigation.map((item) => (
            <button
              type="button"
              key={item}
              aria-current={active === item ? 'page' : undefined}
              onClick={() => setNotice(`${item} remained a fictional navigation state.`)}
            >
              {item === 'MCP servers' ? 'MCP servers  NEW' : item}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className={styles.more}
          onClick={() =>
            setNotice(
              'Functions, Lead Router, Developer Platform and Custom Actions were not opened.'
            )
          }
        >
          ••• More
        </button>
      </aside>
      {createOpen && (
        <section className={styles.createMenu} aria-label="Fictional creation menu">
          {products.map(([name, copy]) => (
            <button
              type="button"
              key={name}
              onClick={() => setNotice(`${name} creation was not started.`)}
            >
              <b>{name}</b>
              <span>{copy}</span>
            </button>
          ))}
        </section>
      )}
      <main className={styles.main}>{children}</main>
      {notice && <Guard>{notice}</Guard>}
    </div>
  );
}

function HomeCopilot() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <span className={styles.spark}>✦</span>
        <h1>What would you like to automate?</h1>
        <div className={styles.prompt}>
          <textarea aria-label="Fictional Copilot prompt" placeholder="Describe a workflow" />
          <button type="button" disabled>
            Send
          </button>
        </div>
        <small>Copilot is AI and can make mistakes. Double-check responses.</small>
      </div>
      <h2>Start from scratch</h2>
      <div className={styles.cardGrid}>
        {products.slice(0, 5).map(([name, copy]) => (
          <button
            type="button"
            key={name}
            onClick={() => setNotice(`${name} stayed inside the fictional fixture.`)}
          >
            <span className={styles.cardIcon}>{name.slice(0, 1)}</span>
            <b>{name}</b>
            <small>{copy}</small>
          </button>
        ))}
      </div>
      <h2>Recommended for you</h2>
      <div className={styles.templateRow}>
        {[
          'Route new leads for review',
          'Summarize support requests',
          'Notify a team after approval',
        ].map((item, index) => (
          <article key={item}>
            <span>{index + 2} steps</span>
            <b>{item}</b>
            <small>Fictional template</small>
          </article>
        ))}
      </div>
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

function AutomationsWorkspace() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <div>
          <small>Automations</small>
          <h1>Zaps</h1>
        </div>
        <button type="button" onClick={() => setNotice('No Zap was created.')}>
          ＋ Create
        </button>
      </header>
      <div className={styles.productTabs}>
        {['Zaps', 'Tables', 'Forms', 'Chatbots', 'Canvases', 'Agents'].map((item) => (
          <button type="button" key={item} aria-pressed={item === 'Zaps'}>
            {item}
          </button>
        ))}
      </div>
      <div className={styles.filters}>
        <span>Owner is Me</span>
        <input
          aria-label="Search by name, ID, or webhook"
          placeholder="Search by name, ID, or webhook"
        />
        <button type="button" onClick={() => setNotice('Filters did not change.')}>
          Filters
        </button>
        <button type="button" onClick={() => setNotice('No default view was saved.')}>
          Save as default view
        </button>
      </div>
      <div className={styles.empty}>
        <div className={styles.flowMini}>
          <i />
          <span>Trigger</span>
          <i />
          <span>Action</span>
        </div>
        <h2>Start an automation</h2>
        <p>Connect a trigger and an action, then test before publishing.</p>
        <button
          type="button"
          onClick={() => setNotice('The editor was not opened from this fixture.')}
        >
          Create Zap
        </button>
      </div>
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

function GuidedTemplates() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <div>
          <small>Templates</small>
          <h1>Guided templates</h1>
        </div>
      </header>
      <div className={styles.empty}>
        <span className={styles.largeIcon}>▤</span>
        <h2>Create reusable automation templates</h2>
        <p>
          Define repeatable Zap setups that teams can configure without rebuilding from scratch.
        </p>
        <button type="button">Learn more</button>
        <Guard>No provider template was created or saved.</Guard>
      </div>
    </section>
  );
}

function EditorShell({ children, notice }: { children: React.ReactNode; notice?: string }) {
  return (
    <div className={styles.editor}>
      <header>
        <span className={styles.brand}>_*</span>
        <a href="#fixture">Zaps</a>
        <div>
          <b>Fictional onboarding Zap</b>
          <small>Draft</small>
        </div>
        <button type="button" disabled>
          Turn Zap on
        </button>
      </header>
      <aside aria-label="Editor sidebar">
        {[
          'Linked assets',
          'Recent Zaps',
          'Zap details',
          'Notes',
          'Change history',
          'Zap runs',
          'Status',
          'Advanced settings',
          'Versions',
          'Copilot',
        ].map((item) => (
          <button type="button" key={item}>
            {item.slice(0, 1)}
          </button>
        ))}
      </aside>
      <main>{children}</main>
      {notice && <Guard>{notice}</Guard>}
    </div>
  );
}

function ZapEditorCanvas() {
  const [notice, setNotice] = useState('');
  return (
    <EditorShell notice={notice}>
      <div className={styles.copilot}>
        <b>Copilot</b>
        <textarea
          aria-label="Fictional editor Copilot prompt"
          placeholder="Describe the Zap you want to build"
        />
        <button type="button" disabled>
          Start building
        </button>
        <small>AI output was not requested.</small>
      </div>
      <div className={styles.canvas}>
        <button type="button" onClick={() => setNotice('Trigger selection stayed fictional.')}>
          <span>1</span>
          <b>Trigger</b>
          <small>Select the event that starts your Zap</small>
        </button>
        <i />
        <button type="button" onClick={() => setNotice('Action selection stayed fictional.')}>
          <span>2</span>
          <b>Action</b>
          <small>Select the event for your Zap to run</small>
        </button>
        <button type="button" onClick={() => setNotice('No step was added.')}>
          ＋ Add step
        </button>
      </div>
      <footer>
        {['Apps', 'Zapier products', 'Built-in tools', 'Search for an app'].map((item) => (
          <button type="button" key={item}>
            {item}
          </button>
        ))}
      </footer>
    </EditorShell>
  );
}

function TriggerActionPicker() {
  const [mode, setMode] = useState<'Trigger' | 'Action'>('Trigger');
  const trigger = [
    ['Human in the Loop', 'Complete a manual action during a Zap run.'],
    ['Schedule', 'Schedule recurring tasks at intervals.'],
    ['Sub-Zap', 'Build reusable Zap components.'],
  ];
  const action = [
    ['Delay', 'Hold actions for a set time.'],
    ['Filter', 'Proceed only when a condition is met.'],
    ['Human in the Loop', 'Pause for review or intervention.'],
    ['Looping', 'Repeat all following steps.'],
    ['Paths', 'Build different steps for different rules.'],
    ['Sub-Zap', 'Call reusable Zap components.'],
  ];
  const unavailable = mode === 'Trigger' ? ['Delay', 'Filter', 'Looping', 'Paths'] : ['Schedule'];
  return (
    <EditorShell>
      <section className={styles.picker}>
        <header>
          <div>
            <small>Step type</small>
            <h1>{mode} app picker</h1>
          </div>
          <div className={styles.segment}>
            <button
              type="button"
              aria-pressed={mode === 'Trigger'}
              onClick={() => setMode('Trigger')}
            >
              Trigger
            </button>
            <button
              type="button"
              aria-pressed={mode === 'Action'}
              onClick={() => setMode('Action')}
            >
              Action
            </button>
          </div>
        </header>
        <div className={styles.pickerLayout}>
          <nav>
            {['Home', 'Apps', 'AI', 'Flow controls', 'Utilities', 'Products', 'Custom apps'].map(
              (item) => (
                <button
                  type="button"
                  key={item}
                  aria-current={item === 'Flow controls' ? 'page' : undefined}
                >
                  {item}
                </button>
              )
            )}
          </nav>
          <div>
            <input aria-label="Search apps" placeholder="Search apps" />
            <h2>Flow controls</h2>
            <div className={styles.optionGrid}>
              {(mode === 'Trigger' ? trigger : action).map(([name, copy]) => (
                <button type="button" key={name}>
                  <b>{name}</b>
                  <small>{copy}</small>
                </button>
              ))}
              {unavailable.map((name) => (
                <button type="button" disabled key={name}>
                  <b>{name}</b>
                  <small>No {mode.toLowerCase()} available.</small>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </EditorShell>
  );
}

function AiActionPalette() {
  const [notice, setNotice] = useState('');
  return (
    <EditorShell notice={notice}>
      <section className={styles.picker}>
        <header>
          <div>
            <small>Action step</small>
            <h1>AI actions</h1>
          </div>
        </header>
        <div className={styles.aiFilters}>
          {[
            'All',
            'Popular',
            'AI by Zapier',
            'Human in the Loop',
            'Productivity',
            'Chatbots & Agents',
          ].map((item, index) => (
            <button type="button" key={item} aria-pressed={index === 0}>
              {item}
            </button>
          ))}
        </div>
        <h2>Generate a prompt from scratch</h2>
        <button
          className={styles.aiHero}
          type="button"
          onClick={() => setNotice('No AI prompt was configured.')}
        >
          <span>✦</span>
          <b>Custom prompt</b>
          <small>Start from a blank instruction</small>
        </button>
        <h2>Start with a quick action</h2>
        <div className={styles.actionGrid}>
          {[
            'Extract',
            'Summarize',
            'Classify',
            'Write',
            'Translate',
            'Analyze',
            'Transcribe',
            'Search',
          ].map((item) => (
            <button type="button" key={item} onClick={() => setNotice(`${item} was not added.`)}>
              <span>✦</span>
              <b>{item}</b>
            </button>
          ))}
        </div>
      </section>
    </EditorShell>
  );
}

function Connections() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <div>
          <small>Assets</small>
          <h1>Connections</h1>
        </div>
        <button type="button" onClick={() => setNotice('No authorization flow was started.')}>
          ＋ Create connection
        </button>
      </header>
      <div className={styles.filters}>
        <button type="button">View by: Connections⌄</button>
        <input
          aria-label="Search connection or app name"
          placeholder="Search connection or app name"
        />
        <button type="button">Filters</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" aria-label="Select all fictional connections" />
            </th>
            <th>Name</th>
            <th>App</th>
            <th>Status</th>
            <th>Zaps</th>
            <th>Last modified</th>
            <th>People with access</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {['CRM review account', 'Support triage account', 'Spreadsheet sandbox'].map(
            (item, index) => (
              <tr key={item}>
                <td>
                  <input type="checkbox" aria-label={`Select ${item}`} />
                </td>
                <td>
                  <b>{item}</b>
                </td>
                <td>{['CRM', 'Inbox', 'Sheets'][index]}</td>
                <td>
                  <span className={styles.status}>Healthy</span>
                </td>
                <td>{index}</td>
                <td>Fictional date</td>
                <td>1</td>
                <td>
                  <button
                    type="button"
                    onClick={() => setNotice('Connection options were not opened.')}
                  >
                    •••
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

function MappingTesting() {
  const [tab, setTab] = useState('Configure');
  const [notice, setNotice] = useState('');
  return (
    <EditorShell notice={notice}>
      <section className={styles.stepPanel}>
        <header>
          <span className={styles.stepNumber}>2</span>
          <div>
            <small>Action</small>
            <h1>Create review record</h1>
          </div>
        </header>
        <div className={styles.stepTabs}>
          {['Setup', 'Configure', 'Test', 'Data out'].map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={tab === item}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {tab === 'Configure' ? (
          <div className={styles.form}>
            <label>
              Request title<div className={styles.mapped}>1. Intake form　→　Request title</div>
            </label>
            <label>
              Priority<div className={styles.static}>Normal</div>
            </label>
            <label>
              Full step context<div className={styles.mapped}>1. Step Output</div>
            </label>
            <button type="button" onClick={() => setNotice('No mapping was changed.')}>
              ＋ Map field
            </button>
          </div>
        ) : tab === 'Test' ? (
          <div className={styles.warning}>
            <h2>Testing can create data in a connected app</h2>
            <p>This fictional fixture never sends a test.</p>
            <button type="button" disabled>
              Test step
            </button>
          </div>
        ) : (
          <div className={styles.sourcePanel}>
            <h2>{tab}</h2>
            <p>Source-reviewed structure only. No provider data is loaded.</p>
          </div>
        )}
        <Guard>Mapping and testing are SOURCE REVIEWED, not exercised.</Guard>
      </section>
    </EditorShell>
  );
}

function FlowControls() {
  const [selected, setSelected] = useState('Paths');
  const controls: Record<string, string> = {
    Filter: 'Continue only when a condition matches.',
    Paths: 'Route records through different rule-based branches.',
    Delay: 'Hold later actions until a time condition is met.',
    Looping: 'Repeat following steps for each item.',
    'Human in the Loop': 'Pause and request review before continuing.',
    'Sub-Zap': 'Call a reusable automation component.',
  };
  return (
    <EditorShell>
      <section className={styles.flowPage}>
        <header>
          <small>Built-in tools</small>
          <h1>Flow controls and approvals</h1>
        </header>
        <div className={styles.flowLayout}>
          <nav>
            {Object.keys(controls).map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={selected === item}
                onClick={() => setSelected(item)}
              >
                {item}
              </button>
            ))}
          </nav>
          <article>
            <span className={styles.largeIcon}>{selected === 'Human in the Loop' ? '✓' : '⑂'}</span>
            <h2>{selected}</h2>
            <p>{controls[selected]}</p>
            {selected === 'Human in the Loop' ? (
              <>
                <label>
                  Approval message
                  <input value="Review this fictional request" readOnly />
                </label>
                <label>
                  Reviewer
                  <select disabled>
                    <option>Fictional reviewer</option>
                  </select>
                </label>
                <button type="button" disabled>
                  Send approval request
                </button>
              </>
            ) : (
              <>
                <div className={styles.rule}>
                  <span>IF</span>
                  <b>Priority</b>
                  <span>is</span>
                  <b>High</b>
                </div>
                <button type="button" disabled>
                  Save rule
                </button>
              </>
            )}
          </article>
        </div>
        <Guard>
          Configuration, notifications, runtime decisions and plan enforcement were not exercised.
        </Guard>
      </section>
    </EditorShell>
  );
}

function ZapHistory() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <div>
          <small>Operations</small>
          <h1>Zap history</h1>
        </div>
        <button type="button">Notification settings</button>
      </header>
      <div className={styles.productTabs}>
        <button type="button" aria-pressed>
          Zap runs
        </button>
        <button type="button">Task usage</button>
      </div>
      <div className={styles.filters}>
        <button type="button">Last 30 days⌄</button>
        <input aria-label="Zap search" placeholder="Zap search" />
        <input aria-label="App search" placeholder="App search" />
        <button type="button" onClick={() => setNotice('History data was not refreshed.')}>
          ↻
        </button>
      </div>
      <div className={styles.historyBar}>
        <select aria-label="Run status">
          <option>All run statuses</option>
        </select>
        <label>
          Autoreplay <input type="checkbox" disabled />
        </label>
      </div>
      <div className={styles.empty}>
        <span className={styles.largeIcon}>⌁</span>
        <h2>No results found</h2>
        <p>Adjust filters and try again.</p>
        <button type="button" onClick={() => setNotice('No filters were changed.')}>
          Clear filters
        </button>
      </div>
      <div className={styles.statusLegend}>
        {['Errored', 'Safely halted', 'On hold', 'Handled error', 'Scheduled'].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
}

const observedDetails: Record<
  string,
  { eyebrow: string; title: string; description: string; items: string[]; note: string }
> = {
  'interactive-onboarding-tour': {
    eyebrow: 'Onboarding · interactive tour',
    title: 'Meet the product',
    description:
      'A short guided tour introduces the automation model before any workflow is created.',
    items: [
      'Connect a trigger and an action',
      'Build faster with Copilot',
      'Add if/then branches with Paths',
      'Delegate tasks to AI steps',
      'Collect data with forms and interfaces',
      'Store workflow data in Tables',
    ],
    note: 'The final provider call to action was not selected.',
  },
  'template-recommendation-carousel': {
    eyebrow: 'Templates · recommendations',
    title: 'Templates for you',
    description: 'Scrollable recommendations expose an automation title, app mix and step count.',
    items: [
      'Route new submissions to the review queue · 3 steps',
      'Summarize incoming support requests · 4 steps',
      'Notify a team after a record changes · 2 steps',
    ],
    note: 'Save for later and Dismiss were visible but not used.',
  },
  'ai-category-tabs': {
    eyebrow: 'Builder · AI categories',
    title: 'Browse AI actions by category',
    description:
      'The action picker separates first-party AI, human review, productivity and agent tools.',
    items: [
      'All',
      'Popular',
      'AI by Zapier',
      'Human in the Loop',
      'Productivity',
      'Chatbots & Agents',
    ],
    note: 'No AI action, prompt or provider was selected.',
  },
  'human-in-loop-ai-actions': {
    eyebrow: 'Builder · human review',
    title: 'Human in the Loop actions',
    description:
      'The AI catalogue distinguishes an approval trigger from actions that request review or collect data.',
    items: [
      'New approval requested · trigger',
      'Request approval · action',
      'Collect data · action',
    ],
    note: 'No reviewer, request, notification or response was configured.',
  },
  'editor-linked-assets': {
    eyebrow: 'Editor panel',
    title: 'Linked assets',
    description: 'Tables and Forms referenced by the Zap appear in one supporting-assets panel.',
    items: ['Create Table', 'Create Form', 'No linked assets in the blank draft'],
    note: 'No asset was created.',
  },
  'editor-notes': {
    eyebrow: 'Editor panel',
    title: 'Notes',
    description: 'Zap-wide notes, AI-assisted note generation and step notes share one panel.',
    items: [
      'Zap notes · 0 / 5,000 characters',
      'Generate with AI · beta',
      'Step notes · select an app first',
    ],
    note: 'No text was entered and no AI generation was requested.',
  },
  'editor-change-history': {
    eyebrow: 'Editor panel',
    title: 'Change history',
    description:
      'The panel explains that changes become available only after the workflow has been saved.',
    items: ['Log of changes applied to this Zap', 'Unavailable for unsaved workflows'],
    note: 'The blank draft had no change entries.',
  },
  'editor-run-test-panel': {
    eyebrow: 'Editor panel',
    title: 'Zap runs and test',
    description: 'Run history and test selection are adjacent tabs inside the editor.',
    items: [
      'Run history · no runs for this period',
      'Test Zap · select a row to test',
      'Test run · disabled',
    ],
    note: 'The draft was incomplete and no test was executed.',
  },
  'editor-status': {
    eyebrow: 'Editor panel',
    title: 'Status',
    description: 'A compact diagnostic panel collects step errors, warnings and information.',
    items: ['This Zap has no issues', 'Errors', 'Warnings', 'Information'],
    note: 'No configured steps existed to validate.',
  },
  'editor-advanced-settings': {
    eyebrow: 'Editor panel',
    title: 'Advanced settings',
    description:
      'Per-Zap error behavior can override account-level defaults after the Zap is configured.',
    items: [
      'Autoreplay override · use account setting',
      'Turn off if errors occur · recommended',
      'Keep running if errors occur',
    ],
    note: 'All settings were disabled in the unsaved draft and none were changed.',
  },
  'editor-versions': {
    eyebrow: 'Editor panel',
    title: 'Versions',
    description: 'Editing and republishing a Zap creates a new version.',
    items: ['No versions in the blank draft', 'Republish to create a later version'],
    note: 'The Zap was not published or republished.',
  },
  'history-status-filter': {
    eyebrow: 'Operations · history filter',
    title: 'Run status taxonomy',
    description: 'History exposes ten selectable run states in one multiselect filter.',
    items: [
      'Errored',
      'Handled error',
      'Needs review',
      'On hold',
      'Safely halted',
      'Filtered',
      'Successful',
      'Delayed',
      'Scheduled',
      'Running',
    ],
    note: 'No status filter was applied.',
  },
  'autoreplay-help': {
    eyebrow: 'Operations · recovery',
    title: 'Autoreplay disabled',
    description:
      'The help disclosure explains that eligible failed runs can be replayed automatically.',
    items: [
      'Press to toggle Autoreplay on',
      'Per-Zap overrides are available',
      'Account setting remains unchanged',
    ],
    note: 'Autoreplay was not enabled or changed.',
  },
  'usage-empty-report': {
    eyebrow: 'Operations · usage',
    title: 'Task usage report',
    description:
      'The report counts tasks only for Zaps the current user can access in the selected period.',
    items: ['Last 30 days', 'Filter by Zap', 'Zap name', 'Tasks used', 'No results found'],
    note: 'Dates, billing and plan settings were not changed.',
  },
};

function ObservedDetail({ variant }: { variant: ZapierVariant }) {
  const spec = observedDetails[variant];
  const [notice, setNotice] = useState('');
  if (!spec) return null;
  const inEditor =
    variant.startsWith('editor-') || variant.includes('ai-') || variant.includes('human-in');
  const content = (
    <section className={styles.detailPage}>
      <header>
        <small>{spec.eyebrow}</small>
        <h1>{spec.title}</h1>
        <p>{spec.description}</p>
      </header>
      <div className={styles.detailGrid}>
        {spec.items.map((item, index) => (
          <button
            type="button"
            key={item}
            onClick={() => setNotice(`${item} changed only this fictional fixture.`)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <b>{item}</b>
          </button>
        ))}
      </div>
      <p className={styles.detailNote}>{spec.note}</p>
      {notice && <Guard>{notice}</Guard>}
    </section>
  );
  return inEditor ? (
    <EditorShell>{content}</EditorShell>
  ) : (
    <AppShell variant={variant}>{content}</AppShell>
  );
}

function ConnectionManagementStates() {
  const [view, setView] = useState<'Connections' | 'Apps'>('Connections');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [notice, setNotice] = useState('');
  return (
    <AppShell variant="connection-management-states">
      <section className={styles.detailPage}>
        <header className={styles.pageHeader}>
          <div>
            <small>Assets · connections</small>
            <h1>Connection management</h1>
            <p>Empty inventory, grouping, filters and the authorization boundary.</p>
          </div>
          <button type="button" onClick={() => setDialogOpen(true)}>
            Create connection
          </button>
        </header>
        <div className={styles.pillRow}>
          {(['Connections', 'Apps'] as const).map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={view === item}
              onClick={() => setView(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.detailGrid}>
          {(view === 'Connections'
            ? ['Owned by me', 'Shared with me', 'Shared by me', 'Status', 'Owner', 'App', 'Access']
            : ['Version · latest public', 'Search app name', 'No connected apps']
          ).map((item) => (
            <button type="button" key={item} onClick={() => setNotice(`${item} stayed local.`)}>
              <span>○</span>
              <b>{item}</b>
            </button>
          ))}
        </div>
        <div className={styles.empty}>
          <h2>You haven’t added a connection yet</h2>
          <p>Add a connection to start automating.</p>
        </div>
        {dialogOpen && (
          <div className={styles.modalCard} role="dialog" aria-label="Fictional add connection">
            <button
              type="button"
              aria-label="Close fictional connection dialog"
              onClick={() => setDialogOpen(false)}
            >
              ×
            </button>
            <h2>Add new connection</h2>
            <label>
              App
              <input value="Example spreadsheet app" readOnly />
            </label>
            <button type="button" disabled>
              Continue to authorization
            </button>
            <Guard>No app was selected and no authorization flow was started.</Guard>
          </div>
        )}
        {notice && <Guard>{notice}</Guard>}
      </section>
    </AppShell>
  );
}

function Usage() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHeader}>
        <div>
          <small>Operations</small>
          <h1>Task usage</h1>
        </div>
        <button type="button" disabled>
          Manage plan
        </button>
      </header>
      <div className={styles.planMeter}>
        <div>
          <b>Plan tasks</b>
          <span>Across Zaps, MCP and Lead Router</span>
        </div>
        <strong>0 / 1,000</strong>
        <div className={styles.meter}>
          <i />
        </div>
        <small>Fictional Pro trial</small>
      </div>
      <div className={styles.filters}>
        <button type="button">Last 30 days⌄</button>
        <input aria-label="Zap search" placeholder="Zap search" />
        <button type="button">↻ Refresh</button>
      </div>
      <section className={styles.chart}>
        <header>
          <div>
            <small>Zaps that ran</small>
            <b>0</b>
          </div>
          <div>
            <small>Billable Zap tasks</small>
            <b>0</b>
          </div>
        </header>
        <div className={styles.bars}>
          {[18, 34, 24, 42, 30, 54, 22].map((value, index) => (
            <i key={index} style={{ height: `${value}%` }} />
          ))}
        </div>
      </section>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Zap name</th>
            <th>Tasks used</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>No task usage in this fictional period.</td>
          </tr>
        </tbody>
      </table>
      <Guard>Counts, dates, prices and billing behavior are fictional or unverified.</Guard>
    </section>
  );
}

function SettingsCatalogue() {
  const [section, setSection] = useState('My profile');
  const items = [
    'My profile',
    'Notifications',
    'Security and data',
    'Billing and usage',
    'Members',
    'Advanced security',
    'Audit log',
  ];
  return (
    <div className={styles.settings}>
      <aside>
        <span className={styles.brand}>_*</span>
        <h2>Settings</h2>
        {items.map((item) => (
          <button
            type="button"
            key={item}
            aria-current={section === item ? 'page' : undefined}
            onClick={() => setSection(item)}
          >
            {item}
          </button>
        ))}
      </aside>
      <main>
        <small>Account values omitted</small>
        <h1>{section}</h1>
        {section === 'My profile' ? (
          <div className={styles.form}>
            <label>
              First name
              <input value="Fictional" readOnly />
            </label>
            <label>
              Last name
              <input value="Researcher" readOnly />
            </label>
            <label>
              Company
              <input value="Example Studio" readOnly />
            </label>
            <label>
              Role
              <select disabled>
                <option>Operations</option>
              </select>
            </label>
            <label>
              Timezone
              <select disabled>
                <option>Fictional timezone</option>
              </select>
            </label>
            <button type="button" disabled>
              Save changes
            </button>
          </div>
        ) : (
          <div className={styles.sourcePanel}>
            <span className={styles.largeIcon}>⌘</span>
            <h2>{section}</h2>
            <p>This sensitive settings area was not opened or retained.</p>
          </div>
        )}
        <Guard>Billing, security, member, audit and account changes were not exercised.</Guard>
      </main>
    </div>
  );
}

export function ZapierPreview({ variant }: ZapierPreviewProps) {
  if (variant === 'connection-management-states') return <ConnectionManagementStates />;
  if (observedDetails[variant]) return <ObservedDetail variant={variant} />;
  if (variant === 'zap-editor-canvas') return <ZapEditorCanvas />;
  if (variant === 'trigger-action-picker') return <TriggerActionPicker />;
  if (variant === 'ai-action-palette') return <AiActionPalette />;
  if (variant === 'data-mapping-testing') return <MappingTesting />;
  if (variant === 'flow-controls-approvals') return <FlowControls />;
  if (variant === 'settings-catalogue') return <SettingsCatalogue />;
  const content =
    variant === 'automations-workspace' ? (
      <AutomationsWorkspace />
    ) : variant === 'guided-templates' ? (
      <GuidedTemplates />
    ) : variant === 'app-connection-boundary' ? (
      <Connections />
    ) : variant === 'zap-history-failures' ? (
      <ZapHistory />
    ) : variant === 'task-usage-plan-gates' ? (
      <Usage />
    ) : (
      <HomeCopilot />
    );
  return <AppShell variant={variant}>{content}</AppShell>;
}

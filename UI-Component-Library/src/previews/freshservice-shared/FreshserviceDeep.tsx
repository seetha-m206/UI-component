import { useState } from 'react';
import { ChevronDown, FileDown, Paperclip, Sparkles, X } from 'lucide-react';
import styles from './freshserviceDeep.module.css';

export type DeepVariant =
  | 'article-editor'
  | 'article-ai-prompt'
  | 'article-formatting-toolbar'
  | 'article-location-picker'
  | 'article-metadata'
  | 'article-review-calendar'
  | 'subflow-create-drawer'
  | 'workflow-canvas'
  | 'workflow-execution-filters'
  | 'report-detail'
  | 'report-export-settings'
  | 'report-filter-panel';

export interface DeepProps {
  variant?: DeepVariant;
  initialExpanded?: boolean;
  initialTab?: string;
}

type Guard = (action: string) => void;

const editorTools = [
  'Paragraph Format',
  'Font Family',
  'Font Size',
  'Bold',
  'Italic',
  'Underline',
  'Text Color',
  'Background Color',
  'Align',
  'Decrease Indent',
  'Increase Indent',
  'Ordered List',
  'Unordered List',
  'Insert Link',
  'Insert Image',
  'Insert Video',
  'Insert Table',
  'Insert Code',
  'Quote',
  'Code View',
  'Clear Formatting',
  'Freddy writing assistant',
];

function ArticleEditor({ guard }: { guard: Guard }) {
  const [articleType, setArticleType] = useState('Permanent');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  return (
    <>
      <header className={styles.header}>
        <div>
          <small>Knowledge Base</small>
          <h2>New Article</h2>
        </div>
        <button onClick={() => guard('Cancel article')}>Cancel</button>
        <button className={styles.primary} onClick={() => guard('Save article')}>
          Save
        </button>
      </header>
      <div className={styles.editorGrid}>
        <main className={styles.main}>
          <label>
            Title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
            />
          </label>
          <FormattingToolbar guard={guard} compact />
          <label>
            Description
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write Article"
            />
          </label>
          <button className={styles.attach} onClick={() => guard('Attach files')}>
            <Paperclip size={16} />
            Attach files <small>Maximum 40 MB</small>
          </button>
        </main>
        <aside className={styles.metadata}>
          <button onClick={() => guard('Select article location')}>
            Article Location <strong>Select</strong>
          </button>
          <label>
            Type
            <select value={articleType} onChange={(e) => setArticleType(e.target.value)}>
              <option>Permanent</option>
              <option>Workaround</option>
            </select>
          </label>
          <label>
            Author
            <input value="Example Author" readOnly />
          </label>
          <label>
            Review date
            <input placeholder="DD-MM-YYYY" />
          </label>
          <label>
            Tags
            <input placeholder="Add tags" />
          </label>
          <label>
            Keywords
            <input placeholder="Add keywords" />
          </label>
        </aside>
      </div>
    </>
  );
}

function AiPrompt({ guard }: { guard: Guard }) {
  const [value, setValue] = useState('');
  return (
    <main className={styles.focus}>
      <div className={styles.aiPrompt}>
        <Sparkles size={22} />
        <label>
          Generate Solution article for
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter a few keywords or key phrases about the article"
          />
        </label>
        <p>Example topics: Forgot password, Best practices for password management</p>
        <button onClick={() => guard('Generate article')}>Generate</button>
      </div>
    </main>
  );
}

function FormattingToolbar({
  guard,
  compact = false,
  initialExpanded,
}: {
  guard: Guard;
  compact?: boolean;
  initialExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(initialExpanded ?? !compact);
  const visible = expanded ? editorTools : editorTools.slice(0, 12);
  return (
    <div className={styles.formatWrap} aria-label="Article formatting tools">
      <div className={styles.formatTools}>
        {visible.map((tool) => (
          <button key={tool} aria-pressed="false" onClick={() => guard(tool)}>
            {tool}
          </button>
        ))}
        {compact && (
          <button aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Less' : 'More'}
          </button>
        )}
      </div>
    </div>
  );
}

function LocationPicker({ guard }: { guard: Guard }) {
  const [category, setCategory] = useState('');
  const [step, setStep] = useState<'category' | 'folder'>('category');
  return (
    <main className={styles.focus}>
      <div className={styles.dialog} role="dialog" aria-label="Folder Location">
        <header>
          <h2>Folder Location</h2>
          <button onClick={() => guard('Close location picker')} aria-label="Close">
            <X size={17} />
          </button>
        </header>
        <div className={styles.breadcrumb}>
          Categories{' '}
          {category && (
            <>
              › <strong>{category}</strong>
            </>
          )}
        </div>
        {step === 'category' ? (
          <div className={styles.choiceList}>
            {['Default Category', 'IT'].map((item) => (
              <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>
                {item}
                <ChevronDown size={15} />
              </button>
            ))}
          </div>
        ) : (
          <div className={styles.emptyFolder}>No folder was observed in this empty workspace.</div>
        )}
        <footer>
          <button onClick={() => guard('Cancel location')}>Cancel</button>
          {step === 'category' ? (
            <button disabled={!category} onClick={() => setStep('folder')}>
              Next
            </button>
          ) : (
            <button className={styles.primary} onClick={() => guard('Confirm article location')}>
              Confirm
            </button>
          )}
        </footer>
      </div>
    </main>
  );
}

function ArticleMetadata({ guard }: { guard: Guard }) {
  const [type, setType] = useState('Permanent');
  return (
    <main className={styles.focus}>
      <section className={styles.metadataCard}>
        <h2>Article metadata</h2>
        <button onClick={() => guard('Select article location')}>
          Article Location <strong>Select</strong>
        </button>
        <label>
          Type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>Permanent</option>
            <option>Workaround</option>
          </select>
        </label>
        <label>
          Author
          <input readOnly value="Example Author" />
        </label>
        <label>
          Review date
          <input placeholder="DD-MM-YYYY" />
        </label>
        <label>
          Tags
          <input placeholder="Add tags" />
        </label>
        <label>
          Keywords
          <input placeholder="Add keywords" />
        </label>
      </section>
    </main>
  );
}

function ReviewCalendar({ guard }: { guard: Guard }) {
  const [selected, setSelected] = useState<number | null>(null);
  const days = Array.from({ length: 35 }, (_, i) => i - 2);
  return (
    <main className={styles.focus}>
      <section className={styles.calendar}>
        <header>
          <button disabled>Previous month</button>
          <h2>October 2026</h2>
          <button onClick={() => guard('Next month')}>Next month</button>
        </header>
        <div className={styles.week}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
            <strong key={d + i}>{d}</strong>
          ))}
        </div>
        <div className={styles.days}>
          {days.map((d, i) => (
            <button
              key={i}
              disabled={d < 1 || d > 31}
              aria-pressed={selected === d}
              onClick={() => setSelected(d)}
            >
              {d >= 1 && d <= 31 ? d : ''}
            </button>
          ))}
        </div>
        <p>{selected ? `Local selection: ${selected} October 2026` : 'No review date selected'}</p>
      </section>
    </main>
  );
}

function SubflowDrawer({ guard }: { guard: Guard }) {
  const [description, setDescription] = useState(false);
  const [module, setModule] = useState('Tickets');
  return (
    <main className={styles.drawerStage}>
      <aside className={styles.drawer}>
        <header>
          <h2>Create subflow</h2>
          <button onClick={() => guard('Close subflow drawer')} aria-label="Close">
            <X size={17} />
          </button>
        </header>
        <p>Subflows are reusable workflow steps that can be used across multiple workflows.</p>
        <label>
          Title *<input placeholder="Subflow title" />
        </label>
        {description ? (
          <label>
            Description
            <textarea placeholder="Describe this subflow" />
          </label>
        ) : (
          <button onClick={() => setDescription(true)}>+ Add description</button>
        )}
        <label>
          Module *
          <select value={module} onChange={(e) => setModule(e.target.value)}>
            {['Tickets', 'Problems', 'Changes', 'Releases', 'Alerts', 'Tasks', 'Inventory'].map(
              (v) => (
                <option key={v}>{v}</option>
              )
            )}
          </select>
        </label>
        <button className={styles.primary} onClick={() => guard('Create subflow')}>
          Create
        </button>
      </aside>
    </main>
  );
}

function WorkflowCanvas({ guard }: { guard: Guard }) {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h2>Prioritize VIP tickets</h2>
          <span className={styles.inactive}>Inactive</span>
        </div>
        <button onClick={() => guard('View execution logs')}>View execution logs</button>
        <button onClick={() => guard('Edit as Draft')}>Edit as Draft</button>
        <button className={styles.primary} onClick={() => guard('Activate workflow')}>
          Activate
        </button>
      </header>
      <main className={styles.canvas}>
        <p>Tickets from a VIP requester will be assigned a higher priority</p>
        <div className={styles.flow}>
          <div className={styles.trigger}>New ticket is created</div>
          <span>→</span>
          <div className={styles.condition}>If user is a VIP</div>
          <span>YES →</span>
          <div className={styles.branch}>
            <div>Incident → Set Priority as High</div>
            <div>Service Request → Set Priority as Urgent</div>
          </div>
        </div>
        <div className={styles.miniMap} aria-label="Workflow minimap">
          <i />
          <i />
          <i />
          <i />
        </div>
      </main>
    </>
  );
}

function ExecutionFilters({ guard }: { guard: Guard }) {
  const [sourceType, setSourceType] = useState('Ticket');
  return (
    <main className={styles.main}>
      <h2>Execution Logs</h2>
      <div className={styles.filterGrid}>
        <label>
          Time
          <select>
            <option>-Select-</option>
            <option>Today</option>
            <option>Yesterday</option>
            <option>This Week</option>
            <option>Select Time Period</option>
          </select>
        </label>
        <label>
          Status
          <select>
            <option>-Select-</option>
            <option>Success</option>
            <option>Failed</option>
            <option>Complete with errors</option>
          </select>
        </label>
        <label>
          Source Type
          <select value={sourceType} onChange={(e) => setSourceType(e.target.value)}>
            {[
              'Ticket',
              'Problem',
              'Change',
              'Release',
              'Asset',
              'Task',
              'Software Users',
              'Alert',
            ].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <label>
          Node Type
          <select>
            <option>-Select-</option>
            <option>App</option>
            <option>Web Request</option>
            <option>Expression Builder</option>
            <option>Condition</option>
            <option>Timer</option>
          </select>
        </label>
        {['Source', 'Job ID', 'Workflow ID', 'Workflow Title', 'Node details', 'Node Label'].map(
          (v) => (
            <label key={v}>
              {v}
              <input defaultValue={v === 'Workflow Title' ? 'Prioritize VIP tickets' : ''} />
            </label>
          )
        )}
      </div>
      <div className={styles.actions}>
        <button onClick={() => guard('Reset log filters')}>Reset Filters</button>
        <button className={styles.primary} onClick={() => guard('Apply log filters')}>
          Apply Filters
        </button>
        <button onClick={() => guard('Refresh logs')}>Refresh</button>
      </div>
      <div className={styles.noTransactions}>No Transactions Found</div>
    </main>
  );
}

function ReportDetail({ guard, initialTab }: { guard: Guard; initialTab?: string }) {
  const pages = ['Overview', 'Article Insights', 'Action Needed'];
  const [page, setPage] = useState(pages.includes(initialTab ?? '') ? initialTab! : 'Overview');
  return (
    <>
      <header className={styles.header}>
        <div>
          <small>IT Service Management</small>
          <h2>
            Solutions Overview <span className={styles.curated}>Curated</span>
          </h2>
          <p>Data Updated: 05 Oct 2026 02:59:07 AM</p>
        </div>
        <button onClick={() => guard('Export report')}>
          <FileDown size={16} />
          Export report
        </button>
        <button onClick={() => guard('Present report')}>Present</button>
        <button onClick={() => guard('Edit report')}>Edit</button>
      </header>
      <main className={styles.report}>
        <nav>
          {['Overview', 'Article Insights', 'Action Needed'].map((v) => (
            <button
              key={v}
              aria-current={page === v ? 'page' : undefined}
              onClick={() => setPage(v)}
            >
              {v}
            </button>
          ))}
        </nav>
        <div className={styles.metricGrid}>
          <section>
            <h3>Performance Trend</h3>
            <p>No data!</p>
          </section>
          <section>
            <h3>Total Views</h3>
            <strong>0</strong>
          </section>
          <section>
            <h3>Total Marked as helpful</h3>
            <strong>0</strong>
          </section>
          <section>
            <h3>Total Marked as not helpful</h3>
            <strong>0</strong>
          </section>
          <section>
            <h3>Articles Created</h3>
            <p>No data!</p>
          </section>
          <section>
            <h3>Total Articles inserted into Tickets</h3>
            <strong>0</strong>
          </section>
        </div>
        <div className={styles.reportFilters}>
          <button onClick={() => guard('Author filter')}>
            Author <ChevronDown size={14} />
          </button>
          <button onClick={() => guard('Folder filter')}>
            Folder <ChevronDown size={14} />
          </button>
          <button onClick={() => guard('Category filter')}>
            Category <ChevronDown size={14} />
          </button>
          <button onClick={() => guard('Date range')}>
            Last 30 Days <ChevronDown size={14} />
          </button>
        </div>
      </main>
    </>
  );
}

function ExportSettings({ guard, initialTab }: { guard: Guard; initialTab?: string }) {
  const tabs = ['Send email', 'Schedule email', 'Download file'];
  const [tab, setTab] = useState(tabs.includes(initialTab ?? '') ? initialTab! : 'Download file');
  const [pages, setPages] = useState(['Overview']);
  function toggle(page: string) {
    setPages((current) =>
      current.includes(page) ? current.filter((p) => p !== page) : [...current, page]
    );
  }
  return (
    <main className={styles.focus}>
      <section className={styles.exportCard}>
        <header>
          <h2>Export report: Solutions Overview</h2>
          <button onClick={() => guard('Close export')} aria-label="Close">
            <X size={17} />
          </button>
        </header>
        <nav>
          {['Send email', 'Schedule email', 'Download file'].map((v) => (
            <button key={v} aria-current={tab === v ? 'page' : undefined} onClick={() => setTab(v)}>
              {v}
            </button>
          ))}
        </nav>
        <label>
          File type
          <select>
            <option>PDF</option>
          </select>
        </label>
        <fieldset>
          <legend>Select pages</legend>
          {['Overview', 'Article Insights', 'Action Needed'].map((v) => (
            <label key={v}>
              <input type="checkbox" checked={pages.includes(v)} onChange={() => toggle(v)} />
              {v}
            </label>
          ))}
        </fieldset>
        <label>
          <input type="checkbox" /> View applied filters in PDF
        </label>
        <button disabled={!pages.length} className={styles.primary} onClick={() => guard(tab)}>
          {tab}
        </button>
        <p>No file is generated and no email address is included in this fixture.</p>
      </section>
    </main>
  );
}

function ReportFilterPanel({ guard }: { guard: Guard }) {
  const [match, setMatch] = useState('ALL');
  return (
    <main className={styles.filterPanel}>
      <header>
        <h2>Filters</h2>
        <button onClick={() => guard('Close filters')} aria-label="Close">
          <X size={17} />
        </button>
      </header>
      <p>Page filters</p>
      <label>
        Match{' '}
        <select value={match} onChange={(e) => setMatch(e.target.value)}>
          <option>ALL</option>
          <option>ANY</option>
        </select>{' '}
        filters
      </label>
      {['Author', 'Folder', 'Category'].map((v) => (
        <label key={v}>
          {v}
          <select>
            <option>is anything</option>
          </select>
        </label>
      ))}
      <label>
        Date Range
        <div className={styles.range}>
          <span>in the last</span>
          <input type="number" defaultValue="30" />
          <span>Days</span>
        </div>
      </label>
      <hr />
      <p>Report filters</p>
      <label>
        Date Range
        <div className={styles.range}>
          <span>in the last</span>
          <input type="number" defaultValue="365" />
          <span>Days</span>
        </div>
      </label>
      <button className={styles.primary} onClick={() => guard('Apply report filters')}>
        Apply
      </button>
    </main>
  );
}

export function FreshserviceDeep({
  variant = 'article-editor',
  initialExpanded,
  initialTab,
}: DeepProps) {
  const [notice, setNotice] = useState(
    'Local reconstruction of observed Freshservice screens and controls. No provider requests.'
  );
  const guard: Guard = (action) =>
    setNotice(`${action}: local demonstration only. No request was sent.`);
  return (
    <section className={styles.root}>
      <div className={styles.eyebrow}>
        <span>FRESHSERVICE REFERENCE</span>
        <span> · DEEP CAPTURE</span>
      </div>
      {variant === 'article-editor' && <ArticleEditor guard={guard} />}
      {variant === 'article-ai-prompt' && <AiPrompt guard={guard} />}
      {variant === 'article-formatting-toolbar' && (
        <main className={styles.focus}>
          <FormattingToolbar guard={guard} compact initialExpanded={initialExpanded} />
        </main>
      )}
      {variant === 'article-location-picker' && <LocationPicker guard={guard} />}
      {variant === 'article-metadata' && <ArticleMetadata guard={guard} />}
      {variant === 'article-review-calendar' && <ReviewCalendar guard={guard} />}
      {variant === 'subflow-create-drawer' && <SubflowDrawer guard={guard} />}
      {variant === 'workflow-canvas' && <WorkflowCanvas guard={guard} />}
      {variant === 'workflow-execution-filters' && <ExecutionFilters guard={guard} />}
      {variant === 'report-detail' && <ReportDetail guard={guard} initialTab={initialTab} />}
      {variant === 'report-export-settings' && (
        <ExportSettings guard={guard} initialTab={initialTab} />
      )}
      {variant === 'report-filter-panel' && <ReportFilterPanel guard={guard} />}
      <div className={styles.notice} role="status">
        {notice}
      </div>
    </section>
  );
}

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import s from './remaining.module.css';

export interface RemainingProps {
  initialState?: string;
}
type Guard = (action: string) => void;
const terms = ['ceramic mugs', 'travel cups', 'tea tins'];
const scopes = ['Domain', 'URL'];
const labels = [
  'AI Keyword Overview',
  'Bulk Analysis',
  'AI Prompt Ideas',
  'Keyword Lists',
  'Site Audit',
  'Rank Tracking',
  'AI Search Visibility',
  'Traffic Overview',
  'Keywords by Traffic',
  'Top Pages by Traffic',
  'Content Ideas',
  'Backlinks Overview',
  'Backlink Opportunity',
  'All Content',
  'Apps & Integrations',
];
function Button({
  children,
  onClick,
  disabled,
  primary = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  primary?: boolean;
}) {
  return (
    <button
      type="button"
      className={primary ? s.primary : s.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
function Select({
  label,
  options,
  initial,
  onChange,
}: {
  label: string;
  options: string[];
  initial?: string;
  onChange?: (v: string) => void;
}) {
  const id = useId();
  return (
    <label className={s.field} htmlFor={id}>
      <span>{label}</span>
      <select
        id={id}
        defaultValue={initial || options[0]}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options.map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
    </label>
  );
}
function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  const titleId = useId();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prior = document.activeElement as HTMLElement;
    const target = ref.current;
    target?.focus();
    return () => {
      prior?.focus();
    };
  }, []);
  return (
    <div className={s.scrim}>
      <div
        ref={ref}
        tabIndex={-1}
        className={s.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.stopPropagation();
            onClose();
          }
          if (e.key === 'Tab') {
            const items = [
              ...(ref.current?.querySelectorAll<HTMLElement>(
                'button,input,select,textarea,[tabindex]'
              ) || []),
            ].filter((item) => !item.hasAttribute('disabled') && item.tabIndex >= 0);
            const first = items[0],
              last = items.at(-1);
            if (!items.includes(document.activeElement as HTMLElement)) {
              e.preventDefault();
              (e.shiftKey ? last : first)?.focus();
            } else if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last?.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first?.focus();
            }
          }
        }}
      >
        <div className={s.modalHead}>
          <h2 id={titleId}>{title}</h2>
          <Button onClick={onClose}>Close</Button>
        </div>
        {children}
      </div>
    </div>
  );
}
function Upgrade({
  reason,
  onClose,
  guard,
}: {
  reason: string;
  onClose: () => void;
  guard: Guard;
}) {
  return (
    <Modal title={reason} onClose={onClose}>
      <p>This feature requires an upgraded plan.</p>
      <ul className={s.benefits}>
        <li>More keywords and projects</li>
        <li>More daily searches and page scans</li>
        <li>Additional users and locations</li>
      </ul>
      <div className={s.actions}>
        <Button primary onClick={() => guard('Upgrade')}>
          Upgrade Now
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </Modal>
  );
}
function Art({ title }: { title: string }) {
  return (
    <div className={s.art} role="img" aria-label={`${title} illustration, fictional artwork`}>
      <div className={s.artBar} />
      <div className={s.artColumns}>
        {[38, 65, 48, 83, 58, 93].map((v, i) => (
          <i key={i} style={{ height: `${v}%` }} />
        ))}
      </div>
      <div className={s.artRows}>
        {[0, 1, 2].map((i) => (
          <span key={i} />
        ))}
      </div>
      <small>Illustration</small>
    </div>
  );
}
function Intro({
  title,
  subtitle,
  bullets = [],
}: {
  title: string;
  subtitle: string;
  bullets?: string[];
}) {
  return (
    <div className={s.intro}>
      <section>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <ul className={s.benefits}>
          {bullets.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>
      <Art title={title} />
    </div>
  );
}
function Locale({ combined = false }: { combined?: boolean }) {
  return combined ? (
    <Select
      label="Language / Country *"
      options={[
        'English / Canada',
        'English / United States',
        'English / Australia',
        'French / Canada',
      ]}
    />
  ) : (
    <>
      <Select label="Language *" options={['English', 'French', 'Spanish']} />
      <Select label="Location *" options={['Canada', 'United States', 'United Kingdom']} />
    </>
  );
}
export function TokenEditor({
  limit = 50,
  overflow = false,
  initial = [],
  onChange,
}: {
  limit?: number;
  overflow?: boolean;
  initial?: string[];
  onChange?: (v: string[]) => void;
}) {
  const [tokens, setTokens] = useState(initial);
  const [draft, setDraft] = useState('');
  const [capped, setCapped] = useState(false);
  const update = (v: string[]) => {
    setTokens(v);
    onChange?.(v);
  };
  const add = (text: string) => {
    const parts = text
      .split(/[,\n]+/)
      .map((x) => x.trim())
      .filter(Boolean);
    const all = [...tokens, ...parts];
    setCapped(!overflow && all.length > limit);
    update(overflow ? all : all.slice(0, limit));
    setDraft('');
  };
  return (
    <div className={s.tokenBlock}>
      <div className={s.tokens}>
        {tokens.map((x, i) => (
          <span className={s.chip} key={`${x}-${i}`}>
            {x}
            <button
              type="button"
              aria-label={`Remove ${x}`}
              onClick={() => {
                update(tokens.filter((_, index) => index !== i));
                setCapped(false);
              }}
            >
              ×
            </button>
          </span>
        ))}
        <textarea
          aria-label="Add keywords or competitors"
          placeholder="Enter terms separated by commas or lines"
          value={draft}
          onChange={(e) => {
            if (/[,\n]/.test(e.target.value)) add(e.target.value);
            else setDraft(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && draft.trim()) {
              e.preventDefault();
              add(draft);
            }
          }}
        />
      </div>
      <div className={s.row}>
        <small>
          {tokens.length}/{limit}
        </small>
        {tokens.length > 0 && (
          <Button
            onClick={() => {
              update([]);
              setCapped(false);
            }}
          >
            Clear All
          </Button>
        )}
      </div>
      {overflow && tokens.length > limit && (
        <p role="alert" className={s.warning}>
          You’ve reached your keyword limit, only the first {limit} keywords will be analyzed.
          Reduce your list or upgrade your account.
        </p>
      )}
      {capped && (
        <p role="alert" className={s.warning}>
          You have reached the {limit} competitor maximum
        </p>
      )}
    </div>
  );
}
function Bulk({
  state,
  guard,
  compact = false,
}: {
  state: string;
  guard: Guard;
  compact?: boolean;
}) {
  const initial =
    state === 'overflow'
      ? Array.from({ length: 51 }, (_, i) => `sample term ${i + 1}`)
      : state === 'filled'
        ? terms
        : [];
  const [count, setCount] = useState(initial.length);
  const [gate, setGate] = useState(state === 'upgrade');
  return (
    <>
      {!compact && (
        <>
          <h1>Keyword Bulk Analysis</h1>
          <p>Analyze hundreds of keywords in one go.</p>
        </>
      )}
      <section className={s.panel}>
        <div className={s.row}>
          <strong>Add keywords or copy and paste</strong>
          <small className={s.badge}>TRY KEYWORD BULK ANALYSIS FOR FREE ONCE</small>
        </div>
        <TokenEditor initial={initial} overflow onChange={(v) => setCount(v.length)} />
        <p>You can track {Math.max(0, 50 - count)} more keywords</p>
        <div className={s.formRow}>
          <Locale />
          <Button primary disabled={!count} onClick={() => guard('Analyze keywords')}>
            {count > 50 ? 'Analyze 50 Keywords' : 'Analyze Keywords'}
          </Button>
        </div>
        <label className={s.check}>
          <input type="checkbox" role="switch" checked={false} onChange={() => setGate(true)} />
          Upload CSV File
        </label>
      </section>
      {!compact && (
        <Intro
          title="Expert Time Saver"
          subtitle="Get key insights like search volume and keyword difficulty at scale."
          bullets={['Optimize campaigns efficiently', 'Prioritize keywords for SEO and PPC']}
        />
      )}{' '}
      {gate && (
        <Upgrade
          reason="Upgrade to add keywords by CSV"
          onClose={() => setGate(false)}
          guard={guard}
        />
      )}
    </>
  );
}
const research: Record<
  string,
  {
    title: string;
    label: string;
    subtitle: string;
    keyword?: boolean;
    ai?: boolean;
    scope?: boolean;
    backlink?: boolean;
    bullets: string[];
    disabledEmpty?: boolean;
  }
> = {
  'ai-overview': {
    title: 'AI-powered keyword research',
    label: 'Enter a keyword',
    subtitle: 'Find secret SEO gems',
    keyword: true,
    ai: true,
    disabledEmpty: true,
    bullets: [
      'Research AI prompts and responses',
      'Optimize for search intent',
      'Master local search',
    ],
  },
  'ai-prompt': {
    title: 'AI-First SEO Strategy',
    label: 'Keyword',
    subtitle: 'Research AI prompts and responses',
    keyword: true,
    ai: true,
    disabledEmpty: true,
    bullets: [
      'Identify competitors',
      'See which prompts drive AI recommendations',
      'Decode users’ intent',
    ],
  },
  audit: {
    title: 'Site Audit',
    label: 'Discover the SEO issues affecting your site or page URL',
    subtitle: 'Find the SEO Issues On Your Site',
    scope: true,
    bullets: [
      'Get an overview of your SEO health',
      'Uncover the issues impacting traffic',
      'Check site speed',
    ],
  },
  traffic: {
    title: 'Traffic Analyzer',
    label: 'Get a detailed SEO overview of a site or page URL',
    subtitle: 'Uncover your competitors’ most successful keywords and pages.',
    scope: true,
    bullets: ['Traffic over time', 'Top Keywords', 'Top Pages'],
  },
  coverage: {
    title: 'Keyword Coverage',
    label: 'Find the keywords driving traffic to a site or page URL',
    subtitle: 'See which keywords drive traffic',
    scope: true,
    disabledEmpty: true,
    bullets: [
      'Track keyword coverage over time',
      'Spy on competitor keywords',
      'Filter by volume, position and difficulty',
    ],
  },
  pages: {
    title: 'Top Pages by Traffic',
    label: 'Find the pages driving traffic to a site',
    subtitle: 'Find the exact content that attracts SEO traffic.',
    bullets: ['Topic ideas', 'Keywords', 'Visits'],
  },
  content: {
    title: 'Content Ideas',
    label: 'Discover the most popular content on the Web',
    subtitle: 'Identify the winning content that generates traffic.',
    keyword: true,
    disabledEmpty: true,
    bullets: ['Topic ideas', 'Keywords', 'Visits'],
  },
  backlinks: {
    title: 'Backlink Discovery Tool',
    label: 'Evaluate the link profile of a site or page URL',
    subtitle: 'Analyze the backlinks behind your competitors’ rankings.',
    scope: true,
    backlink: true,
    bullets: ['Backlinks', 'Referring domains', 'Link history'],
  },
};
function Research({ kind, state, guard }: { kind: string; state: string; guard: Guard }) {
  const d = research[kind];
  const [q, setQ] = useState(
    state === 'filled' ? (d.keyword ? 'ceramic mugs' : 'example.com') : ''
  );
  const [touched, setTouched] = useState(state === 'invalid');
  return (
    <>
      {kind === 'audit' && <h1>Site Audit</h1>}
      <section className={s.panel}>
        <div className={s.formRow}>
          <label className={`${s.field} ${s.grow}`}>
            <span>{d.label}</span>
            <input
              value={q}
              placeholder={d.keyword ? 'Enter a keyword' : 'Enter a domain or URL'}
              onChange={(e) => setQ(e.target.value)}
              onBlur={() => setTouched(true)}
            />
            {d.ai && touched && !q && (
              <small role="alert" className={s.warning}>
                Please enter a keyword
              </small>
            )}
          </label>
          {d.scope && (
            <Select label="Type" options={scopes} initial={state === 'url' ? 'URL' : 'Domain'} />
          )}{' '}
          {d.ai ? <Locale /> : !d.backlink && kind !== 'audit' ? <Locale combined /> : null}
          <Button
            primary
            disabled={d.disabledEmpty && !q.trim()}
            onClick={() => guard(d.ai ? 'AI Search' : 'Search')}
          >
            {d.ai ? '✦ AI Search' : 'Search'}
          </Button>
        </div>
        {d.backlink && (
          <label className={s.check}>
            <input type="checkbox" defaultChecked={state === 'excluded'} />
            Exclude subdomains
          </label>
        )}
        {kind === 'audit' && <p className={s.muted}>You’re using a free version of Ubersuggest.</p>}
      </section>
      <div className={s.hint}>
        Get started: enter {d.keyword ? 'a keyword' : 'a domain or page URL'} to begin.
      </div>
      <Intro title={d.title} subtitle={d.subtitle} bullets={d.bullets} />
    </>
  );
}
function ListDialog({ onClose, guard }: { onClose: () => void; guard: Guard }) {
  const [name, setName] = useState('');
  return (
    <Modal title="Create new list" onClose={onClose}>
      <label className={s.field}>
        List name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <div className={s.actions}>
        <Button onClick={onClose}>Cancel</Button>
        <Button primary onClick={() => guard('Create list')}>
          Create list
        </Button>
      </div>
    </Modal>
  );
}
function Lists({
  state,
  guard,
  dialogOnly = false,
}: {
  state: string;
  guard: Guard;
  dialogOnly?: boolean;
}) {
  const [open, setOpen] = useState(dialogOnly || state === 'dialog');
  return (
    <>
      <div className={s.row}>
        <h1>
          Keyword Lists <small>[0/3]</small>
        </h1>
        <Button primary onClick={() => setOpen(true)}>
          Create new list
        </Button>
      </div>
      {!dialogOnly && (
        <section className={s.empty}>
          <div className={s.emptyIcon}>☷</div>
          <h2>Save and organize keywords</h2>
          <p>Track the keywords you care about, grouped by topic.</p>
          <p>See volume, CPC and difficulty at a glance.</p>
          <Button primary onClick={() => setOpen(true)}>
            Create new list
          </Button>
        </section>
      )}
      {open && <ListDialog onClose={() => setOpen(false)} guard={guard} />}
    </>
  );
}
const filterOptions: Record<string, string[]> = {
  Position: ['1 - 3', '4 - 10', '11 - 50', '51 - 100'],
  Change: ['Keywords Moved Up', 'Keywords Moved Down', 'Keywords Unchanged'],
  'Search Intent': ['informational', 'navigational', 'transactional', 'commercial'],
  Volume: ['Under 1,000', '1,001 - 10,000', '10,001 - 100,000', 'More than 100,000'],
  'SEO Difficulty': ['Easy 0 - 35', 'Medium 36 - 69', 'Hard 70 - 100'],
};
function Filter({ name, onClose }: { name: string; onClose: () => void }) {
  const [chosen, setChosen] = useState<string[]>([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const multi = name === 'Change' || name === 'Search Intent';
  return (
    <div
      role="dialog"
      aria-label={`${name} filter`}
      className={s.popover}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
      }}
    >
      <strong>{name}</strong>
      {filterOptions[name].map((x) => (
        <label className={s.check} key={x}>
          <input
            type={multi ? 'checkbox' : 'radio'}
            name={`filter-${name}`}
            checked={chosen.includes(x)}
            onChange={() =>
              setChosen(
                multi ? (chosen.includes(x) ? chosen.filter((v) => v !== x) : [...chosen, x]) : [x]
              )
            }
          />
          {x}
        </label>
      ))}
      {!multi && (
        <>
          <label className={s.check}>
            <input
              type="radio"
              name={`filter-${name}`}
              checked={chosen.includes('Custom range')}
              onChange={() => setChosen(['Custom range'])}
            />
            Custom range
          </label>
          <div className={s.formRow}>
            <label className={s.field}>
              From
              <input
                type="number"
                value={from}
                onChange={(e) => {
                  setFrom(e.target.value);
                  setChosen(['Custom range']);
                }}
              />
            </label>
            <label className={s.field}>
              To
              <input
                type="number"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                  setChosen(['Custom range']);
                }}
              />
            </label>
          </div>
        </>
      )}
      <div className={s.actions}>
        <Button
          disabled={!chosen.length}
          onClick={() => {
            setChosen([]);
            setFrom('');
            setTo('');
          }}
        >
          Clear All
        </Button>
        <Button primary disabled={!chosen.length} onClick={onClose}>
          Apply
        </Button>
      </div>
      <small className={s.muted}>
        Local filter draft. No populated provider report was tested.
      </small>
    </div>
  );
}
function Filters({ state }: { state: string }) {
  const [active, setActive] = useState(Object.keys(filterOptions).includes(state) ? state : '');
  return (
    <div className={s.filters}>
      {Object.keys(filterOptions).map((name) => (
        <div key={name} className={s.anchor}>
          <Button onClick={() => setActive(active === name ? '' : name)}>{name}</Button>
          {active === name && <Filter name={name} onClose={() => setActive('')} />}
        </div>
      ))}
    </div>
  );
}
const datePresets = [
  'Last 2 weeks',
  'Last 30 days',
  'Last 3 months',
  'Last 6 months',
  'Last 12 months',
  'All time',
];
function Dates({ state }: { state: string }) {
  const [open, setOpen] = useState(state === 'open' || state === 'custom');
  const [custom, setCustom] = useState(state === 'custom');
  const [value, setValue] = useState('Last 30 days');
  const [range, setRange] = useState(['', '']);
  return (
    <div className={s.anchor}>
      <Button onClick={() => setOpen(!open)}>{value}</Button>
      {open && (
        <div
          role="dialog"
          aria-label="Date range"
          className={`${s.popover} ${custom ? s.calendarPanel : ''}`}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false);
          }}
        >
          {!custom ? (
            <>
              {datePresets.map((x) => (
                <Button
                  key={x}
                  onClick={() => {
                    setValue(x);
                    setOpen(false);
                  }}
                >
                  {x}
                </Button>
              ))}
              <label className={s.check}>
                <input
                  type="checkbox"
                  role="switch"
                  checked={custom}
                  onChange={() => setCustom(true)}
                />
                Custom range
              </label>
            </>
          ) : (
            <>
              <div className={s.calendars}>
                {['August', 'September'].map((month, index) => (
                  <div key={month}>
                    <strong>{month} 2026</strong>
                    <div className={s.calendar}>
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((x, i) => (
                        <small key={i}>{x}</small>
                      ))}
                      {Array.from({ length: index ? 2 : 6 }, (_, i) => (
                        <span key={`blank-${i}`} aria-hidden="true" />
                      ))}
                      {Array.from({ length: index ? 30 : 31 }, (_, i) => (
                        <button
                          key={i}
                          aria-label={`${month} ${i + 1}, 2026`}
                          onClick={() =>
                            setRange(
                              range[0] && !range[1]
                                ? [
                                    range[0],
                                    `2026-${index ? '09' : '08'}-${String(i + 1).padStart(2, '0')}`,
                                  ]
                                : [
                                    `2026-${index ? '09' : '08'}-${String(i + 1).padStart(2, '0')}`,
                                    '',
                                  ]
                            )
                          }
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className={s.formRow}>
                {['From date', 'To date'].map((label, i) => (
                  <label key={label} className={s.field}>
                    {label}
                    <input
                      type="date"
                      max="2026-09-30"
                      value={range[i]}
                      onChange={(e) =>
                        setRange(range.map((v, j) => (i === j ? e.target.value : v)))
                      }
                    />
                  </label>
                ))}
              </div>
              <div className={s.actions}>
                <Button onClick={() => setCustom(false)}>Cancel</Button>
                <Button
                  primary
                  disabled={!range[0] || !range[1]}
                  onClick={() => {
                    setValue('Custom range');
                    setOpen(false);
                  }}
                >
                  Apply
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
function BulkMenu({ state }: { state: string }) {
  const [open, setOpen] = useState(state === 'copy' ? 'Copy' : state === 'export' ? 'Export' : '');
  return (
    <div className={`${s.row} ${s.bulkMenu}`}>
      {['Export', 'Copy'].map((x) => (
        <div className={s.anchor} key={x}>
          <Button onClick={() => setOpen(open === x ? '' : x)}>{x}</Button>
          {open === x && (
            <div
              role="menu"
              aria-label={x}
              className={s.popover}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setOpen('');
              }}
            >
              {['All', 'Selected'].map((v) => (
                <button role="menuitem" disabled key={v}>
                  {x} {v}
                  {x === 'Export' ? ' to CSV' : ''}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
      <Button disabled>Update</Button>
      <Button disabled>Remove Selected</Button>
    </div>
  );
}
function TrackingDialog({
  state,
  onClose,
  guard,
}: {
  state: string;
  onClose: () => void;
  guard: Guard;
}) {
  const [tab, setTab] = useState(state === 'bulk' || state === 'csv' ? 'Bulk Import' : 'Add New');
  const [csv, setCsv] = useState(state === 'csv');
  return (
    <Modal title="Add keywords" onClose={onClose}>
      <div role="tablist" aria-label="Keyword entry method" className={s.tabs}>
        {['Add New', 'Bulk Import'].map((x) => (
          <button role="tab" aria-selected={tab === x} key={x} onClick={() => setTab(x)}>
            {x}
          </button>
        ))}
      </div>
      {tab === 'Add New' ? (
        <>
          <div className={s.tableWrap}>
            <table>
              <thead>
                <tr>
                  {['Keywords', 'Search Volume', 'SEO Difficulty', 'Market'].map((x) => (
                    <th key={x}>{x}</th>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
          <label className={s.field}>
            New keyword
            <input placeholder="Type a new keyword and press ENTER" />
          </label>
          <h3>Keyword Suggestions</h3>
          <p className={s.muted}>No suggestions available</p>
        </>
      ) : (
        <>
          <Select label="Location" options={['All Locations']} />
          <label className={s.check}>
            <input
              type="checkbox"
              role="switch"
              checked={csv}
              onChange={(e) => setCsv(e.target.checked)}
            />
            Upload CSV File
          </label>
          {csv && (
            <div className={s.upload}>
              <Button onClick={() => guard('Download CSV template')}>CSV Template</Button>
              <p>Select a file</p>
              <Button onClick={() => guard('Upload CSV file')}>Upload</Button>
            </div>
          )}
          <TokenEditor initial={state === 'bulk' ? terms.slice(0, 2) : []} limit={50} overflow />
        </>
      )}
      <div className={s.actions}>
        <Button onClick={onClose}>Cancel</Button>
        <Button primary disabled>
          Start Tracking
        </Button>
      </div>
      <small className={s.muted}>
        Start Tracking remained disabled in the observed no-project account.
      </small>
    </Modal>
  );
}
function Tracking({
  state,
  guard,
  dialogOnly = false,
}: {
  state: string;
  guard: Guard;
  dialogOnly?: boolean;
}) {
  const [dialog, setDialog] = useState(dialogOnly || ['add', 'bulk', 'csv'].includes(state));
  const [gate, setGate] = useState(state === 'upgrade');
  return (
    <>
      <div className={s.row}>
        <div>
          <h1>Rank Tracking</h1>
          <small className={s.muted}>Updating Today</small>
        </div>
        <Button onClick={() => guard('Export all')}>Export All</Button>
      </div>
      <div className={s.toolbar}>
        <Button primary onClick={() => setDialog(true)}>
          ＋ Add keywords
        </Button>
        <Select
          label="Devices"
          options={['Desktop', 'Mobile · Upgrade']}
          onChange={(v) => {
            if (v.startsWith('Mobile')) setGate(true);
          }}
        />
        <Select label="Locations" options={['All Locations']} />
        <Dates state={state} />
      </div>
      {!dialogOnly && (
        <>
          <p className={s.muted}>Aug 31, 2026 – Sep 30, 2026</p>
          <div className={s.stats}>
            {[
              'Keywords Moved Up',
              'Keywords Moved Down',
              'Keywords Unchanged',
              'Keywords Tracked / Plan Limit',
            ].map((x, i) => (
              <article key={x}>
                <strong>{x}</strong>
                <p>{i === 3 ? '0' : 'No data yet'}</p>
              </article>
            ))}
          </div>
          <section className={s.chart}>
            <h3>Average Position</h3>
            <div className={s.chartLines} />
            <div className={s.chartEmpty}>
              <strong>No position data yet</strong>
              <p>Add keywords to start tracking your average ranking over time.</p>
            </div>
          </section>
          <h2>Tracked Keywords</h2>
          <p>A summary of how your tracked keywords are ranking in Google.</p>
          <Filters state={state} />
          <div className={s.toolbar}>
            <input aria-label="Keyword and URL" placeholder="Keyword and URL" />
            <small>0 of 0 Selected</small>
            <BulkMenu state={state} />
          </div>
          <div className={s.tableWrap}>
            <table>
              <thead>
                <tr>
                  {[
                    'Keyword',
                    'Position',
                    'Change',
                    'Search Intent',
                    'Volume',
                    'SEO Difficulty',
                    'URL',
                  ].map((x) => (
                    <th key={x}>
                      <button onClick={() => guard(`Sort empty table by ${x}`)}>{x} ↕</button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={7}>
                    <div className={s.empty}>
                      <h3>No tracked keywords yet</h3>
                      <p>Add your first keyword to start tracking your Google rankings.</p>
                      <Button onClick={() => setDialog(true)}>Add keywords</Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      {dialog && <TrackingDialog state={state} onClose={() => setDialog(false)} guard={guard} />}{' '}
      {gate && (
        <Upgrade
          reason="Upgrade to Turn on Mobile Rank Tracking"
          onClose={() => setGate(false)}
          guard={guard}
        />
      )}
    </>
  );
}
function Project({ state, guard }: { state: string; guard: Guard }) {
  const [q, setQ] = useState(
    state === 'filled' ? 'example.com' : state === 'invalid' ? 'not a domain' : ''
  );
  return (
    <section className={s.project}>
      <small>New Project</small>
      <h1>
        Your path to grow on
        <br />
        <span>Search</span> starts here
      </h1>
      <p>Uncover what’s holding back your rankings and what to fix first, all in one place.</p>
      <label className={s.field}>
        Enter your Website URL
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="website.com" />
      </label>
      <Button primary disabled={!q.trim()} onClick={() => guard('Start Analysis')}>
        Start Analysis
      </Button>
    </section>
  );
}
function Visibility({
  state,
  guard,
  compact = false,
}: {
  state: string;
  guard: Guard;
  compact?: boolean;
}) {
  const [topics, setTopics] = useState(state === 'added' ? ['ceramic mugs', ''] : ['']);
  return (
    <>
      {!compact && (
        <>
          <small className={s.badge}>AI Search Visibility</small>
          <h1>Check how you rank in ChatGPT</h1>
          <p>Track and find opportunities in AI results.</p>
        </>
      )}
      <section className={s.panel}>
        <div className={s.formRow}>
          <label className={s.field}>
            Website *
            <input
              placeholder="example.com"
              defaultValue={state === 'added' ? 'example.com' : ''}
            />
          </label>
          <label className={s.field}>
            Your brand *
            <input
              placeholder="Your brand"
              defaultValue={state === 'added' ? 'Ceramic Workshop' : ''}
            />
          </label>
        </div>
        {topics.map((x, i) => (
          <div key={i} className={s.formRow}>
            <label className={`${s.field} ${s.grow}`}>
              Topic *
              <input
                value={x}
                onChange={(e) => setTopics(topics.map((v, j) => (i === j ? e.target.value : v)))}
              />
            </label>
            <Button
              disabled={topics.length === 1}
              onClick={() => setTopics(topics.filter((_, j) => i !== j))}
            >
              Remove topic {i + 1}
            </Button>
          </div>
        ))}
        <div className={s.actions}>
          <Button onClick={() => setTopics([...topics, ''])}>Add Topic</Button>
          <Button primary disabled onClick={() => guard('Search AI')}>
            Search AI
          </Button>
        </div>
      </section>
      {!compact && (
        <>
          <Intro
            title="Visibility in AI Matters"
            subtitle="Understand your brand’s presence in AI results."
            bullets={['AI That Understands AI', 'Years of SEO expertise applied to AI']}
          />
          <h2>Questions answered!</h2>
          {[
            'What is an AI Search Visibility Tool?',
            'How do AI SEO tools differ from traditional SEO tools?',
            'Can Ubersuggest fully replace a human SEO expert?',
          ].map((x, i) => (
            <details key={x} open={state === 'faq' && i === 0}>
              <summary>{x}</summary>
              <p>
                Provider help explains the relationship between AI visibility data and human SEO
                strategy. This is a shortened local reconstruction.
              </p>
            </details>
          ))}
        </>
      )}
    </>
  );
}
function Opportunity({
  state,
  guard,
  compact = false,
}: {
  state: string;
  guard: Guard;
  compact?: boolean;
}) {
  return (
    <>
      <section className={s.panel}>
        {!compact && (
          <>
            <div className={s.formRow}>
              <label className={`${s.field} ${s.grow}`}>
                Enter your domain or a URL from your site
                <input placeholder="example.com" />
              </label>
              <Select label="Your scope" options={scopes} />
            </div>
            <label className={s.check}>
              <input type="checkbox" />
              Exclude subdomains
            </label>
          </>
        )}
        <strong>Enter a competitor domain or a URL from their site</strong>
        <TokenEditor
          limit={5}
          initial={
            state === 'limit'
              ? [
                  'alpha.example',
                  'beta.example',
                  'gamma.example',
                  'delta.example',
                  'epsilon.example',
                ]
              : state === 'filled'
                ? ['alpha.example', 'beta.example']
                : []
          }
        />
        <div className={s.formRow}>
          <Select label="Competitor scope" options={scopes} />
          <label className={s.check}>
            <input type="checkbox" />
            Exclude competitor subdomains
          </label>
          <Button primary onClick={() => guard('Search backlink opportunities')}>
            Search
          </Button>
        </div>
      </section>
      {!compact && (
        <Intro
          title="Backlink Opportunities"
          subtitle="Find who links to your competitors and doesn’t link to you."
          bullets={['Domain-level opportunities', 'URL-specific backlinks', 'Domain Authority']}
        />
      )}
    </>
  );
}
function Chat({ state, guard }: { state: string; guard: Guard }) {
  const [q, setQ] = useState(
    state === 'draft' ? 'Find keyword opportunities for ceramic mugs' : ''
  );
  const [history, setHistory] = useState(state !== 'draft');
  return (
    <div className={s.chat}>
      <div className={s.row}>
        <Button onClick={() => setHistory(!history)}>
          {history ? 'Hide' : 'Show'} chat history
        </Button>
        <Button onClick={() => setQ('')}>New chat</Button>
      </div>
      {history && <aside className={s.chatHistory}>Your conversations appear here.</aside>}
      <div className={s.chatBody}>
        <div className={s.emptyIcon}>✦</div>
        <h2>Ubersuggest AI</h2>
        <p>Ask anything about SEO — keywords, backlinks, competitors, site audits.</p>
        <div className={s.suggestions}>
          {[
            'Find organic keywords',
            'Show backlinks',
            'Find content ideas',
            'Compare two websites',
          ].map((x) => (
            <Button key={x} onClick={() => guard('Suggested prompt')}>
              {x}
            </Button>
          ))}
        </div>
        <textarea
          aria-label="Message"
          placeholder="Ask about SEO…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className={s.actions}>
          <Button primary disabled={!q.trim()} onClick={() => guard('Send message')}>
            Send
          </Button>
        </div>
        <small>AI responses can be inaccurate. Verify numbers before acting on them.</small>
      </div>
    </div>
  );
}
const integrationNames = [
  'Ubersuggest AI Chat',
  'Ubersuggest for ChatGPT',
  'Ubersuggest for Claude',
  'Ubersuggest MCP Server',
  'Ubersuggest Chrome Extension',
  'GoHighLevel',
  'Ubersuggest AI Writer',
  'AnswerThePublic',
  'AnswerThePublic’s Content Studio',
  'Ubersuggest WordPress Plugin',
  'NP Digital',
  'REBL House',
];
const clients = ['Claude', 'Claude Code', 'Cursor', 'Codex', 'Windsurf', 'Other'];
function SetupTabs({ state, guard }: { state: string; guard: Guard }) {
  const [tab, setTab] = useState(clients.includes(state) ? state : 'Claude');
  const [mode, setMode] = useState('Official connector');
  return (
    <section className={s.panel}>
      <h2>Getting Started</h2>
      <p>Choose your AI client.</p>
      <div className={s.tabs} role="tablist" aria-label="AI client">
        {clients.map((x) => (
          <button key={x} role="tab" aria-selected={tab === x} onClick={() => setTab(x)}>
            {x}
          </button>
        ))}
      </div>
      <div className={s.instructions} role="tabpanel" aria-label={tab}>
        {tab === 'Claude' && (
          <div className={s.actions}>
            {['Official connector', 'Config file'].map((x) => (
              <Button key={x} onClick={() => setMode(x)}>
                {x}
              </Button>
            ))}
          </div>
        )}
        <ol>
          <li>Open {tab} and its connector settings.</li>
          <li>
            {tab === 'Claude' && mode === 'Official connector'
              ? 'Use the official Ubersuggest connector.'
              : 'Add the Ubersuggest MCP server using the client’s supported setup flow.'}
          </li>
          <li>Sign in with your Ubersuggest account.</li>
        </ol>
        <small>
          Instruction panel only. No client was configured or authenticated in this research.
        </small>
        <Button onClick={() => guard('Connect integration')}>Open setup destination</Button>
      </div>
    </section>
  );
}
function IntegrationGuides({ state, guard }: { state: string; guard: Guard }) {
  const [variant, setVariant] = useState(state === 'default' ? 'Claude' : state);
  const guideTitles: Record<string, string> = {
    Claude: 'Turn Claude into an SEO consultant',
    ChatGPT: 'Ubersuggest is Now Available Inside ChatGPT',
    WordPress: 'Fix Your Site’s SEO Without Leaving WordPress',
    Chrome: 'Chrome Extension',
  };
  return (
    <>
      <div className={s.tabs} aria-label="Observed landing pages">
        {Object.keys(guideTitles).map((x) => (
          <Button key={x} onClick={() => setVariant(x)}>
            {x}
          </Button>
        ))}
      </div>
      <section className={s.project}>
        <small>Integration instructions</small>
        <h1>{guideTitles[variant] || guideTitles.Claude}</h1>
        <p>Bring SEO research into your existing workflow.</p>
        <Button primary onClick={() => guard('Install or connect')}>
          {variant === 'WordPress'
            ? 'Get the Plugin'
            : variant === 'Chrome'
              ? 'Add to Chrome'
              : 'Open integration'}
        </Button>
      </section>
      <Intro
        title="How It Works"
        subtitle="Read the setup steps and connect using your own account."
        bullets={['Install or open the integration', 'Connect your account', 'Access SEO tools']}
      />
      <details open={state === 'faq'}>
        <summary>Do I need a paid Ubersuggest plan?</summary>
        <p>
          The observed provider FAQ says free accounts are supported. Limits depend on the plan.
        </p>
      </details>
    </>
  );
}
function Account({ state, guard }: { state: string; guard: Guard }) {
  const [open, setOpen] = useState(state === 'open');
  return (
    <div className={s.anchor}>
      <Button onClick={() => setOpen(!open)}>A · Account</Button>
      {open && (
        <div role="menu" aria-label="Account" className={s.popover}>
          <p>Free</p>
          <p>account@example.invalid</p>
          {[
            'Manage Account',
            'Plans & Pricing',
            'Consulting Services',
            'Suggest a Feature',
            'Sign Out',
          ].map((x) => (
            <button key={x} role="menuitem" onClick={() => guard(x)}>
              {x}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
function ReportHeaderActions({ state, guard }: { state: string; guard: Guard }) {
  const [feedbackAttempted, setFeedbackAttempted] = useState(state === 'feedback-attempted');
  return (
    <section className={s.panel} aria-label="Rank Tracking header actions">
      <div>
        <small>Updating Today</small>
        <h2>Rank Tracking</h2>
      </div>
      <div className={s.row}>
        <Button onClick={() => guard('Export All')}>Export All</Button>
        <Button onClick={() => guard('Open project settings')}>Settings</Button>
        <Button onClick={() => setFeedbackAttempted(true)}>Send Feedback</Button>
        <Button primary onClick={() => guard('Add keywords')}>
          ＋ Add keywords
        </Button>
      </div>
      {feedbackAttempted && (
        <p role="status" className={s.muted}>
          Source observation: one Send Feedback activation produced no visible dialog, menu, or
          navigation. This records the visible boundary only and does not prove the feedback service
          is unavailable.
        </p>
      )}
    </section>
  );
}
export function Remaining({ kind, initialState = 'default' }: RemainingProps & { kind: string }) {
  const [notice, setNotice] = useState('');
  const [mobile, setMobile] = useState(false);
  const guard: Guard = (a) =>
    setNotice(`Local preview: ${a} was not submitted. No provider data changed.`);
  const control = kind.startsWith('control-');
  let body: ReactNode;
  if (research[kind]) body = <Research kind={kind} state={initialState} guard={guard} />;
  else
    switch (kind) {
      case 'bulk':
      case 'control-bulk':
        body = <Bulk compact={control} state={initialState} guard={guard} />;
        break;
      case 'lists':
      case 'control-list':
        body = <Lists dialogOnly={control} state={initialState} guard={guard} />;
        break;
      case 'tracking':
      case 'control-tracking-dialog':
        body = <Tracking dialogOnly={control} state={initialState} guard={guard} />;
        break;
      case 'control-filters':
        body = <Filters state={initialState} />;
        break;
      case 'control-dates':
        body = <Dates state={initialState} />;
        break;
      case 'control-bulk-menu':
        body = <BulkMenu state={initialState} />;
        break;
      case 'control-scope':
        body = (
          <div className={s.panel}>
            <Select
              label="Type"
              options={scopes}
              initial={initialState === 'url' ? 'URL' : 'Domain'}
            />
            <label className={s.check}>
              <input type="checkbox" defaultChecked={initialState === 'excluded'} />
              Exclude subdomains
            </label>
          </div>
        );
        break;
      case 'project':
        body = <Project state={initialState} guard={guard} />;
        break;
      case 'visibility':
      case 'control-topics':
        body = <Visibility compact={control} state={initialState} guard={guard} />;
        break;
      case 'opportunity':
      case 'control-competitors':
        body = <Opportunity compact={control} state={initialState} guard={guard} />;
        break;
      case 'chat':
        body = <Chat state={initialState} guard={guard} />;
        break;
      case 'studio':
        body = (
          <section className={s.empty}>
            <div className={s.emptyIcon}>✦</div>
            <h2>You don’t have a project yet</h2>
            <p>Create your first project to start drafting AI-assisted articles.</p>
            <Button primary onClick={() => guard('Create a project')}>
              ✦ Create a project
            </Button>
          </section>
        );
        break;
      case 'pixel':
        body = (
          <>
            <h1>
              Pixel Rank Tracking <small className={s.badge}>BETA</small>
            </h1>
            <p>Measures how far down the page your result actually appears.</p>
            <div className={s.gated}>
              <div aria-hidden="true" className={s.blurred}>
                <Art title="Locked illustrative report" />
              </div>
              <section className={s.gateCard}>
                <h2>Pixel Rank Tracking</h2>
                <p>
                  Pixel rank tracking is an Enterprise feature. Upgrade your plan to see how visible
                  your results really are.
                </p>
                <Button primary onClick={() => guard('View plans')}>
                  View plans
                </Button>
              </section>
            </div>
          </>
        );
        break;
      case 'apps':
        body = (
          <>
            <h1>Apps & Integrations</h1>
            <p>Browse apps, connectors and partner services.</p>
            <div className={s.cards}>
              {integrationNames.map((x, i) => (
                <article key={x}>
                  <span className={s.emptyIcon}>{['✦', '◎', '⌘', '↗'][i % 4]}</span>
                  <h3>{x}</h3>
                  <p>Explore the observed integration or service landing page.</p>
                  <Button onClick={() => guard(`Open ${x}`)}>Learn More</Button>
                </article>
              ))}
            </div>
          </>
        );
        break;
      case 'guides':
        body = <IntegrationGuides state={initialState} guard={guard} />;
        break;
      case 'mcp':
      case 'control-setup-tabs':
        body = (
          <>
            {!control && (
              <>
                <h1>Ubersuggest Now Connects Directly to Your AI Assistant</h1>
                <p>Model Context Protocol</p>
                <Intro
                  title="What You Can Do"
                  subtitle="Access SEO tools from compatible AI clients."
                  bullets={['Domain analysis', 'Keyword research', 'Backlinks', 'Site audit']}
                />
              </>
            )}
            <SetupTabs state={initialState} guard={guard} />
          </>
        );
        break;
      case 'control-upgrade':
        body = (
          <Upgrade
            reason={
              initialState === 'mobile'
                ? 'Upgrade to Turn on Mobile Rank Tracking'
                : 'Upgrade to add keywords by CSV'
            }
            onClose={() => setNotice('Upgrade dialog dismissed locally.')}
            guard={guard}
          />
        );
        break;
      case 'control-account':
        body = <Account state={initialState} guard={guard} />;
        break;
      case 'control-report-header':
        body = <ReportHeaderActions state={initialState} guard={guard} />;
        break;
      default:
        body = null;
    }
  return (
    <div className={s.root} data-ubersuggest-remaining={kind}>
      {control ? (
        <div className={s.control}>
          {kind === 'control-upgrade' && notice === 'Upgrade dialog dismissed locally.' ? (
            <Button onClick={() => setNotice('')}>Open upgrade dialog</Button>
          ) : (
            body
          )}
        </div>
      ) : (
        <div className={s.shell}>
          <header>
            <strong>
              Ubersuggest <small>by NP digital</small>
            </strong>
            <span>Apps & Integrations</span>
            <Button onClick={() => setMobile(!mobile)}>Menu ☰</Button>
          </header>
          <div className={s.workspace}>
            <aside className={mobile ? s.mobileNav : undefined}>
              <Button primary onClick={() => guard('Add project')}>
                ＋ Add Project
              </Button>
              {labels.map((x) => (
                <Button key={x} onClick={() => guard(`Navigate to ${x}`)}>
                  {x}
                </Button>
              ))}
            </aside>
            <main>
              <div className={s.offer}>
                <strong>SEO tools for your next opportunity</strong>
                <small>Fictional preview workspace</small>
              </div>
              {body}
            </main>
          </div>
        </div>
      )}
      {notice && (
        <div role="status" className={s.notice}>
          {notice}
        </div>
      )}
      <p className={s.evidence}>
        Observed UI states · fictional input values · local reconstruction · no provider submissions
      </p>
    </div>
  );
}

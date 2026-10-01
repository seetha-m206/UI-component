import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import styles from './ubersuggest.module.css';

export type UbersuggestKind =
  | 'dashboard'
  | 'keywords'
  | 'navigation'
  | 'mobile'
  | 'help'
  | 'language'
  | 'website'
  | 'offer'
  | 'feature'
  | 'mode'
  | 'chips'
  | 'locale'
  | 'search'
  | 'services'
  | 'account';
export interface UbersuggestProps {
  initialState?: string;
  disabled?: boolean;
}
type Guard = (action: string) => void;
const researchLinks = [
  'AI Keyword Overview',
  'Bulk Analysis',
  'Keyword Ideas',
  'AI Prompt Ideas',
  'Keyword Lists',
];
const analyzeLinks = [
  'AI Chat',
  'Dashboard',
  'Site Audit',
  'Next Actions',
  'Rank Tracking',
  'Competitor Analysis',
  'Pixel Rank Tracking',
  'Project Settings',
];
const navGroups = [
  'Analyze and Audit',
  'AI Search Visibility',
  'Research Topics',
  'Competitive Research',
  'Content Creation',
  'Link Building',
  'Apps & Integrations',
];
const languages = [
  'Afrikaans',
  'Akan',
  'Albanian',
  'Amharic',
  'Arabic',
  'Armenian',
  'Azerbaijani',
  'Balinese',
  'Baltic',
  'Basque',
  'Bengali',
  'English',
];
const locations = [
  'All Locations',
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Angola',
  'Anguilla',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Canada',
  'Abbotsford,British Columbia,Canada',
];

function Action({
  children,
  onClick,
  disabled,
  primary = false,
  ...rest
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  primary?: boolean;
  'aria-label'?: string;
}) {
  return (
    <button
      type="button"
      className={primary ? styles.primary : styles.button}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
function Illustration({ title = 'Dashboard preview' }: { title?: string }) {
  return (
    <div className={styles.illustration} role="img" aria-label={`${title}, fictional illustration`}>
      <div className={styles.mockTop}>
        Ubersuggest <span>FICTIONAL PREVIEW</span>
      </div>
      <div className={styles.mockMetrics}>
        {['Score', 'Traffic', 'Keywords', 'Links'].map((m, i) => (
          <div key={m}>
            <small>{m}</small>
            <strong>{[84, 240, 36, 120][i]}</strong>
          </div>
        ))}
      </div>
      <div className={styles.mockChart}>
        {[22, 44, 31, 65, 49, 80, 68, 96].map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
      <small>Illustration only · no live table or report</small>
    </div>
  );
}
function Menu({
  label,
  children,
  disabled,
  initialOpen = false,
}: {
  label: string;
  children: (close: () => void) => ReactNode;
  disabled?: boolean;
  initialOpen?: boolean;
}) {
  const [open, setOpen] = useState(initialOpen);
  const trigger = useRef<HTMLButtonElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const id = useId();
  const wasOpen = useRef(false);
  const close = () => setOpen(false);
  useEffect(() => {
    if (open) box.current?.querySelector<HTMLElement>('[role="menuitem"]:not(:disabled)')?.focus();
    else if (wasOpen.current) trigger.current?.focus();
    wasOpen.current = open;
  }, [open]);
  function keys(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) {
      e.preventDefault();
      const items = [
        ...(box.current?.querySelectorAll<HTMLElement>('[role="menuitem"]:not(:disabled)') ?? []),
      ];
      const at = items.indexOf(document.activeElement as HTMLElement);
      const next =
        e.key === 'Home'
          ? 0
          : e.key === 'End'
            ? items.length - 1
            : (at + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items[next]?.focus();
    }
  }
  return (
    <div className={styles.menuAnchor} onKeyDown={keys}>
      <button
        ref={trigger}
        type="button"
        className={styles.button}
        disabled={disabled}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {label} <span aria-hidden="true">⌄</span>
      </button>
      {open && !disabled && (
        <div ref={box} id={id} className={styles.menu} role="menu" aria-label={label}>
          {children(close)}
        </div>
      )}
    </div>
  );
}
function HelpMenu({
  disabled,
  guard,
  initialOpen,
}: {
  disabled?: boolean;
  guard: Guard;
  initialOpen?: boolean;
}) {
  return (
    <Menu label="Need Help?" disabled={disabled} initialOpen={initialOpen}>
      {(close) => (
        <>
          <strong>Need a hand?</strong>
          <p>Choose the best option for you:</p>
          {['Help docs & tutorials', 'Contact support'].map((t) => (
            <button
              key={t}
              role="menuitem"
              type="button"
              onClick={() => {
                guard(t);
                close();
              }}
            >
              {t}
              {t.startsWith('Help') && <small>Guides, videos, API reference</small>}
            </button>
          ))}
        </>
      )}
    </Menu>
  );
}
function LanguageMenu({
  disabled,
  guard,
  initialOpen,
}: {
  disabled?: boolean;
  guard: Guard;
  initialOpen?: boolean;
}) {
  return (
    <Menu label="EN" disabled={disabled} initialOpen={initialOpen}>
      {(close) => (
        <>
          <strong>Language</strong>
          {[
            'English (EN)',
            'Português (BR)',
            'Deutsch (DE)',
            'Español (ES)',
            'Italiano (IT)',
            'French (FR)',
            'Dutch (NL)',
            '日本語 (JP)',
            '简体中文 (CN)',
          ].map((t, i) => (
            <button
              key={t}
              role="menuitem"
              disabled={i === 0}
              type="button"
              onClick={() => {
                guard(`Language change to ${t}`);
                close();
              }}
            >
              {t}
            </button>
          ))}
        </>
      )}
    </Menu>
  );
}
function ServicesMenu({
  disabled,
  guard,
  initialOpen,
}: {
  disabled?: boolean;
  guard: Guard;
  initialOpen?: boolean;
}) {
  return (
    <Menu label="Services" disabled={disabled} initialOpen={initialOpen}>
      {(close) => (
        <>
          <strong>NP Digital</strong>
          <small>Observed initial category: Data Analytics</small>
          {['Data Analytics', 'Earned Media', 'Paid Media', 'Creative', 'Technology'].map((t) => (
            <button
              key={t}
              role="menuitem"
              type="button"
              onClick={() => guard(`${t} category content`)}
            >
              {t}
            </button>
          ))}
          <hr />
          <strong>Focus Areas</strong>
          {[
            'Data Analytics & Insights',
            'User Experience (UX)',
            'Dashboard Development',
            'Conversion Rate Optimization',
            'Ad Operations',
            'Front End Development',
            'Book a call',
          ].map((t) => (
            <button
              key={t}
              role="menuitem"
              type="button"
              onClick={() => {
                guard(t);
                close();
              }}
            >
              {t}
            </button>
          ))}
        </>
      )}
    </Menu>
  );
}
function Navigation({
  disabled,
  guard,
  expanded = false,
}: {
  disabled?: boolean;
  guard: Guard;
  expanded?: boolean;
}) {
  const [open, setOpen] = useState<string[]>(
    expanded ? ['Analyze and Audit', 'Research Topics'] : ['Analyze and Audit']
  );
  const base = useId();
  return (
    <nav aria-label="Ubersuggest products" className={styles.nav}>
      <Action primary disabled={disabled} onClick={() => guard('Add Project')}>
        ＋ Add Project
      </Action>
      {navGroups.map((g, i) => {
        const links =
          g === 'Analyze and Audit'
            ? analyzeLinks
            : g === 'Research Topics'
              ? researchLinks
              : g === 'AI Search Visibility'
                ? ['Setup AI Search Visibility']
                : [];
        return (
          <div key={g}>
            <button
              type="button"
              disabled={disabled}
              className={styles.navGroup}
              aria-expanded={open.includes(g)}
              aria-controls={`${base}-${i}`}
              onClick={() => {
                if (links.length)
                  setOpen(open.includes(g) ? open.filter((v) => v !== g) : [...open, g]);
                else guard(`${g} navigation contents`);
              }}
            >
              {g}
              <span aria-hidden="true">{open.includes(g) ? '⌄' : '›'}</span>
            </button>
            {open.includes(g) && (
              <div id={`${base}-${i}`} className={styles.navLinks}>
                {links.map((l) => (
                  <button
                    type="button"
                    disabled={disabled}
                    key={l}
                    className={l === 'Dashboard' ? styles.active : ''}
                    onClick={() => guard(`${l} navigation`)}
                  >
                    {l}
                    {['Dashboard', 'Next Actions'].includes(l) && <small>NEW!</small>}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
      <Action disabled={disabled} onClick={() => guard('Suggest a Feature')}>
        Suggest a Feature
      </Action>
      <div className={styles.trial}>
        <strong>Free trial available</strong>
        <Action disabled={disabled} onClick={() => guard('Start a 7-Day Trial')}>
          Start a 7-Day Trial
        </Action>
      </div>
    </nav>
  );
}
function MobileNavigation({
  disabled,
  guard,
  initialOpen = false,
}: {
  disabled?: boolean;
  guard: Guard;
  initialOpen?: boolean;
}) {
  const [open, setOpen] = useState(initialOpen);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  useEffect(() => {
    if (open) panel.current?.querySelector<HTMLElement>('button')?.focus();
  }, [open]);
  function keys(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    }
    if (e.key === 'Tab') {
      const items = [
        ...(panel.current?.querySelectorAll<HTMLElement>('button:not(:disabled)') ?? []),
      ];
      if (!items.length) return;
      const first = items[0],
        last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
  return (
    <>
      <button
        ref={trigger}
        type="button"
        className={styles.button}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        Menu ☰
      </button>
      {open && !disabled && (
        <div className={styles.backdrop}>
          <div
            ref={panel}
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Sidebar"
            onKeyDown={keys}
          >
            <strong>Sidebar</strong>
            <p>24 credits · fictional account</p>
            <Navigation disabled={disabled} guard={guard} expanded />
            {['Account & Billing', 'Notifications', 'Plans & Pricing', 'Sign Out'].map((t) => (
              <Action key={t} disabled={disabled} onClick={() => guard(t)}>
                {t}
              </Action>
            ))}
            <Action onClick={close}>Close menu</Action>
            <small>Reconstruction: explicit close and focus trap added.</small>
          </div>
        </div>
      )}
    </>
  );
}
function Offer({
  disabled,
  guard,
  dismissed = false,
}: {
  disabled?: boolean;
  guard: Guard;
  dismissed?: boolean;
}) {
  const [visible, setVisible] = useState(!dismissed);
  return visible ? (
    <div className={styles.offer} role="region" aria-label="Promotional offer">
      <div>
        <small>ILLUSTRATIVE OFFER</small>
        <strong>Special offer</strong>
      </div>
      <p>
        Explore a plan for your next stage.<small>Fictional copy · static countdown</small>
      </p>
      <Action primary disabled={disabled} onClick={() => guard('Claim offer')}>
        Claim offer
      </Action>
      <span className={styles.countdown}>
        02 : 06 : 30 <small>DAYS · HR · MIN</small>
      </span>
      <Action disabled={disabled} aria-label="Close banner" onClick={() => setVisible(false)}>
        ×
      </Action>
    </div>
  ) : (
    <p className={styles.note}>
      Banner dismissed locally. Provider dismissal persistence is NOT OBSERVED.
    </p>
  );
}
function WebsiteEntry({
  disabled,
  guard,
  filled = false,
}: {
  disabled?: boolean;
  guard: Guard;
  filled?: boolean;
}) {
  const [value, setValue] = useState(filled ? 'atlas.example' : '');
  const [invalid, setInvalid] = useState(false);
  const id = useId();
  return (
    <form
      className={styles.website}
      onSubmit={(e) => {
        e.preventDefault();
        if (disabled) return;
        if (!value.trim()) {
          setInvalid(true);
          return;
        }
        setInvalid(false);
        guard('Add Website');
      }}
    >
      <label className={styles.field}>
        <span>Enter your website</span>
        <input
          aria-label="Enter your website"
          aria-invalid={invalid}
          aria-describedby={invalid ? id : undefined}
          placeholder="Enter your website"
          disabled={disabled}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setInvalid(false);
          }}
        />
      </label>
      <button disabled={disabled} className={styles.primary} type="submit">
        Add Website
      </button>
      {invalid && (
        <p id={id} className={styles.error} role="alert">
          RECONSTRUCTION: enter a fictional website. Live validation NOT OBSERVED.
        </p>
      )}
    </form>
  );
}
function FeatureCard({
  disabled,
  guard,
  title = 'SEO opportunities',
}: {
  disabled?: boolean;
  guard: Guard;
  title?: string;
}) {
  return (
    <article className={styles.feature}>
      <h3>{title}</h3>
      <p>
        {title === 'SEO opportunities'
          ? 'Find SEO issues, keyword wins, and content opportunities.'
          : title === 'Metrics'
            ? 'Monitor your website metrics in one view.'
            : title === 'Keywords Ranking'
              ? 'Track keyword trends and changes.'
              : 'Compare estimated organic traffic.'}
      </p>
      <Action disabled={disabled} onClick={() => guard(`${title}: Add Website`)}>
        Add Website
      </Action>
      <Illustration title={title} />
    </article>
  );
}
function AccountToolbar({ disabled, guard }: { disabled?: boolean; guard: Guard }) {
  return (
    <div className={styles.account}>
      <span className={styles.creditBar} aria-hidden="true" />
      <small>
        24 Credits left <em>(fictional)</em>
      </small>
      {['Start Free Trial', 'Notifications', 'Account menu'].map((t, i) => (
        <Action key={t} aria-label={t} disabled={disabled} onClick={() => guard(t)}>
          {i === 1 ? '♧' : i === 2 ? 'A ⌄' : t}
        </Action>
      ))}
    </div>
  );
}
function ModeSwitch({
  mode,
  setMode,
  disabled,
}: {
  mode: string;
  setMode: (value: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className={styles.modes} aria-label="Keyword search mode">
      {['Keywords', 'Website'].map((t) => (
        <button
          key={t}
          type="button"
          disabled={disabled}
          aria-pressed={mode === t}
          onClick={() => setMode(t)}
        >
          Search by {t}
        </button>
      ))}
    </div>
  );
}
function ChipInput({
  chips,
  setChips,
  disabled,
}: {
  chips: string[];
  setChips: (v: string[]) => void;
  disabled?: boolean;
}) {
  const [draft, setDraft] = useState('');
  const id = useId();
  function change(value: string) {
    const parts = value.split(',');
    if (parts.length > 1) {
      setChips(
        [
          ...chips,
          ...parts
            .slice(0, -1)
            .map((v) => v.trim())
            .filter(Boolean),
        ].slice(0, 3)
      );
      setDraft(parts.at(-1) ?? '');
    } else setDraft(value);
  }
  return (
    <div className={styles.chipField}>
      <label htmlFor={id}>Discover new keywords ({chips.length}/3 Keywords Added)</label>
      <div className={styles.chipBox}>
        {chips.map((c, i) => (
          <span className={styles.chip} key={`${c}-${i}`}>
            {c}
            <button
              type="button"
              aria-label={`Remove ${c}`}
              disabled={disabled}
              onClick={() => setChips(chips.filter((_, j) => i !== j))}
            >
              ×
            </button>
          </span>
        ))}
        <input
          id={id}
          aria-label="Add up to 3 keywords"
          placeholder={chips.length ? '' : 'Add up to 3 keywords, separated by commas'}
          disabled={disabled}
          value={draft}
          onChange={(e) => change(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              change(`${draft},`);
            }
          }}
        />
      </div>
      <small>Comma entry and the three-chip cap observed. Enter support is reconstructed.</small>
    </div>
  );
}
function LocaleSelector({
  label,
  options,
  initialValue,
  initialState,
  disabled,
}: {
  label: string;
  options: string[];
  initialValue: string;
  initialState?: string;
  disabled?: boolean;
}) {
  const [value, setValue] = useState(initialValue);
  const [query, setQuery] = useState(initialState === 'empty' ? 'zzzz-no-language' : '');
  const [open, setOpen] = useState(initialState === 'open' || initialState === 'empty');
  const [active, setActive] = useState(0);
  const id = useId();
  const filtered = options.filter((x) => x.toLowerCase().includes(query.toLowerCase()));
  function select(item: string) {
    setValue(item);
    setQuery('');
    setOpen(false);
    setActive(0);
  }
  return (
    <div className={styles.locale}>
      <label htmlFor={id}>{label} *</label>
      <div className={styles.comboRow}>
        <input
          id={id}
          role="combobox"
          aria-label={`${label} *`}
          aria-expanded={open}
          aria-controls={`${id}-options`}
          aria-autocomplete="list"
          aria-activedescendant={open && filtered[active] ? `${id}-option-${active}` : undefined}
          disabled={disabled}
          value={open ? query : value}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActive(0);
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
              e.preventDefault();
              if (!open) {
                setOpen(true);
                setActive(0);
              } else
                setActive(
                  (active + (e.key === 'ArrowDown' ? 1 : -1) + Math.max(1, filtered.length)) %
                    Math.max(1, filtered.length)
                );
            }
            if (e.key === 'Enter' && open) {
              e.preventDefault();
              if (filtered[active]) select(filtered[active]);
            }
            if (e.key === 'Tab' && open) {
              if (filtered[active]) select(filtered[active]);
              else setOpen(false);
            }
            if (e.key === 'Escape') {
              e.preventDefault();
              setOpen(false);
              setQuery('');
            }
          }}
        />
        <button
          type="button"
          aria-label={`Open ${label.toLowerCase()} options`}
          disabled={disabled}
          onClick={() => {
            setOpen(!open);
            setQuery('');
          }}
        >
          ⌄
        </button>
      </div>
      {open && !disabled && (
        <ul
          id={`${id}-options`}
          className={styles.options}
          role="listbox"
          aria-label={`${label} *`}
        >
          {label === 'Location' && (
            <li role="presentation">
              <small>Search cities or countries</small>
            </li>
          )}
          {filtered.length ? (
            filtered.map((item, i) => (
              <li
                key={item}
                id={`${id}-option-${i}`}
                role="option"
                aria-selected={value === item}
                className={i === active ? styles.optionActive : ''}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => select(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li role="presentation">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}
function ResearchForm({
  disabled,
  guard,
  initialState = 'default',
  part,
}: {
  disabled?: boolean;
  guard: Guard;
  initialState?: string;
  part?: string;
}) {
  const [mode, setMode] = useState(initialState === 'website' ? 'Website' : 'Keywords');
  const [chips, setChips] = useState<string[]>(
    initialState === 'filled'
      ? ['ceramic mugs', 'travel cups']
      : initialState === 'limit'
        ? ['ceramic mugs', 'travel cups', 'tea tins']
        : []
  );
  const [website, setWebsite] = useState('');
  const ready = mode === 'Keywords' ? chips.length > 0 : website.trim().length > 0;
  const selectors = (
    <div className={styles.selectors}>
      <LocaleSelector
        label="Language"
        options={languages}
        initialValue="English"
        initialState={initialState}
        disabled={disabled}
      />
      <LocaleSelector
        label="Location"
        options={locations}
        initialValue="All Locations"
        disabled={disabled}
      />
    </div>
  );
  if (part === 'mode')
    return (
      <>
        <ModeSwitch mode={mode} setMode={setMode} disabled={disabled} />
        <p className={styles.note}>
          {mode === 'Keywords'
            ? 'Keyword chips are shown in this mode.'
            : 'The website combobox replaces keyword entry.'}
        </p>
      </>
    );
  if (part === 'chips') return <ChipInput chips={chips} setChips={setChips} disabled={disabled} />;
  if (part === 'locale') return selectors;
  return (
    <form
      className={styles.researchForm}
      onSubmit={(e) => {
        e.preventDefault();
        if (ready && !disabled) guard('Search');
      }}
    >
      <ModeSwitch mode={mode} setMode={setMode} disabled={disabled} />
      <div className={styles.queryRow}>
        {mode === 'Keywords' ? (
          <ChipInput chips={chips} setChips={setChips} disabled={disabled} />
        ) : (
          <label className={styles.field}>
            Your Website
            <input
              role="combobox"
              aria-expanded="false"
              placeholder="atlas.example"
              disabled={disabled}
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
        )}
        {selectors}
        <button type="submit" className={styles.primary} disabled={!ready || disabled}>
          Search
        </button>
      </div>
      <p className={styles.note}>Fictional query form · Search never sends a request.</p>
    </form>
  );
}
function KeywordIntro() {
  return (
    <section className={styles.keywordIntro}>
      <div>
        <h2>Keyword Discovery Tool</h2>
        <p>Find profitable SEO keywords that are easy to win.</p>
        <ul>
          <li>Traffic volume — understand demand</li>
          <li>Trends — see changes over time</li>
          <li>Difficulty — compare opportunities</li>
        </ul>
      </div>
      <Illustration title="Keyword discovery" />
    </section>
  );
}
function Dashboard({
  disabled,
  guard,
  initialState,
}: {
  disabled?: boolean;
  guard: Guard;
  initialState?: string;
}) {
  return (
    <>
      <section className={styles.hero}>
        <small className={styles.badge}>Dashboard</small>
        <h1>Add your domain to start growing your traffic</h1>
        <p>Stop guessing. Grow your traffic today.</p>
        <WebsiteEntry disabled={disabled} guard={guard} />
        <div className={styles.heroDetails}>
          <ol>
            {['Add your website', 'Add keywords', 'Add competitors'].map((t, i) => (
              <li key={t}>
                <span>{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>
                    {
                      [
                        'Unlock free SEO tips and quick wins',
                        'Track what is working',
                        'Compare your search presence',
                      ][i]
                    }
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Illustration />
        </div>
      </section>
      <div className={styles.featureGrid}>
        {['SEO opportunities', 'Metrics', 'Keywords Ranking', 'Competitors Analysis'].map((t) => (
          <FeatureCard key={t} title={t} guard={guard} disabled={disabled} />
        ))}
      </div>
      <section className={styles.footerCta}>
        <h2>Add your domain to start growing your traffic today</h2>
        <WebsiteEntry disabled={disabled} guard={guard} filled={initialState === 'filled'} />
      </section>
    </>
  );
}
export function UbersuggestPreview({
  kind,
  initialState = 'default',
  disabled = false,
}: UbersuggestProps & { kind: UbersuggestKind }) {
  const [status, setStatus] = useState('');
  const [retry, setRetry] = useState(false);
  const guard: Guard = (action) => {
    if (!disabled)
      setStatus(`Local preview: ${action} was not submitted. Provider outcome NEEDS VERIFICATION.`);
  };
  const screen = kind === 'dashboard' || kind === 'keywords';
  let body: ReactNode;
  if (screen)
    body = (
      <div className={styles.screen}>
        <header className={styles.header}>
          <strong className={styles.logo}>
            Ubersuggest<span> by NP digital</span>
          </strong>
          <div className={styles.desktopHeader}>
            <Action disabled={disabled} onClick={() => guard('Plans & Pricing')}>
              Plans & Pricing
            </Action>
            <ServicesMenu guard={guard} disabled={disabled} />
            <HelpMenu guard={guard} disabled={disabled} />
          </div>
          <LanguageMenu guard={guard} disabled={disabled} />
          <div className={styles.mobileTrigger}>
            <MobileNavigation guard={guard} disabled={disabled} />
          </div>
          <div className={styles.desktopAccount}>
            <AccountToolbar guard={guard} disabled={disabled} />
          </div>
        </header>
        <div className={styles.workspace}>
          <aside>
            <Navigation guard={guard} disabled={disabled} expanded={kind === 'keywords'} />
          </aside>
          <div className={styles.main}>
            <Offer guard={guard} disabled={disabled} dismissed={initialState === 'dismissed'} />
            {initialState === 'loading' && !retry ? (
              <div className={styles.loading} aria-busy="true">
                <span className={styles.loader} />
                <h2>Your SEO Tip of the Day</h2>
                <p>
                  RECONSTRUCTION of an observed loading interstitial. Timing and tips are fictional.
                </p>
                <Action onClick={() => setRetry(true)} disabled={disabled}>
                  Show settled screen
                </Action>
              </div>
            ) : initialState === 'error' && !retry ? (
              <div className={styles.error} role="alert">
                <h2>Synthetic error state</h2>
                <p>Provider errors NOT OBSERVED. This fixture demonstrates local recovery only.</p>
                <Action onClick={() => setRetry(true)} disabled={disabled}>
                  Retry locally
                </Action>
              </div>
            ) : kind === 'dashboard' ? (
              <Dashboard guard={guard} disabled={disabled} initialState={initialState} />
            ) : (
              <>
                <ResearchForm guard={guard} disabled={disabled} initialState={initialState} />
                <KeywordIntro />
              </>
            )}
          </div>
        </div>
      </div>
    );
  else if (kind === 'navigation')
    body = <Navigation guard={guard} disabled={disabled} expanded={initialState === 'expanded'} />;
  else if (kind === 'mobile')
    body = (
      <MobileNavigation guard={guard} disabled={disabled} initialOpen={initialState === 'open'} />
    );
  else if (kind === 'help')
    body = <HelpMenu guard={guard} disabled={disabled} initialOpen={initialState === 'open'} />;
  else if (kind === 'language')
    body = <LanguageMenu guard={guard} disabled={disabled} initialOpen={initialState === 'open'} />;
  else if (kind === 'services')
    body = <ServicesMenu guard={guard} disabled={disabled} initialOpen={initialState === 'open'} />;
  else if (kind === 'website')
    body = <WebsiteEntry guard={guard} disabled={disabled} filled={initialState === 'filled'} />;
  else if (kind === 'offer')
    body = <Offer guard={guard} disabled={disabled} dismissed={initialState === 'dismissed'} />;
  else if (kind === 'feature')
    body = (
      <FeatureCard
        guard={guard}
        disabled={disabled}
        title={initialState === 'metrics' ? 'Metrics' : 'SEO opportunities'}
      />
    );
  else if (kind === 'account') body = <AccountToolbar guard={guard} disabled={disabled} />;
  else
    body = (
      <ResearchForm guard={guard} disabled={disabled} initialState={initialState} part={kind} />
    );
  return (
    <section className={styles.root} aria-label={`Ubersuggest ${kind} reconstruction`}>
      <p className={styles.evidence}>
        RECONSTRUCTION · observed structure · fictional data · local actions only
      </p>
      <div className={screen ? '' : styles.stage}>{body}</div>
      <p role="status" aria-live="polite" className={styles.status}>
        {status || 'No provider action has been submitted.'}
      </p>
    </section>
  );
}

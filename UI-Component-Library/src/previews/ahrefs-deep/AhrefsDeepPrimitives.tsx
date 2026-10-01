import { useState } from 'react';
import styles from './ahrefs-deep.module.css';

export interface AhrefsDeepPrimitiveProps {
  disabled?: boolean;
}

function Status({ value }: { value: string }) {
  return value ? (
    <p className={styles.status} role="status">
      {value}
    </p>
  ) : null;
}

function useLocalGuard(disabled = false) {
  const [status, setStatus] = useState('');
  return {
    status,
    guard: (action: string) =>
      !disabled &&
      setStatus(`${action} needs live verification. No Ahrefs account action was run.`),
  };
}

const products = [
  'Dashboard',
  'Brand Radar',
  'AI Content Helper',
  'SMM',
  'Site Explorer',
  'Keywords Explorer',
];

export function AhrefsProductNavigation({ disabled = false }: AhrefsDeepPrimitiveProps) {
  const [active, setActive] = useState('Dashboard');
  const { status, guard } = useLocalGuard(disabled);
  return (
    <section className={styles.stage}>
      <nav className={styles.productNav} aria-label="Ahrefs products">
        <strong className={styles.logo}>ahrefs</strong>
        <button type="button" disabled={disabled} onClick={() => guard('All tools menu')}>
          ▦ All tools
        </button>
        {products.map((product) => (
          <button
            type="button"
            key={product}
            aria-current={active === product ? 'page' : undefined}
            disabled={disabled}
            onClick={() => setActive(product)}
          >
            {product}
          </button>
        ))}
        <button type="button" disabled={disabled} onClick={() => guard('More menu')}>
          More⌄
        </button>
      </nav>
      <p className={styles.selection}>Selected product: {active}</p>
      <Status value={status} />
    </section>
  );
}

export function AhrefsWorkspaceMenuTrigger({ disabled = false }: AhrefsDeepPrimitiveProps) {
  const { status, guard } = useLocalGuard(disabled);
  return (
    <section className={styles.stage}>
      <button
        className={styles.workspaceTrigger}
        type="button"
        disabled={disabled}
        aria-haspopup="menu"
        aria-expanded="false"
        onClick={() => guard('Workspace menu')}
      >
        Atlas workspace⌄
      </button>
      <Status value={status} />
    </section>
  );
}

export function AhrefsProductUpdatePanel({ disabled = false }: AhrefsDeepPrimitiveProps) {
  const [visible, setVisible] = useState(true);
  const { status, guard } = useLocalGuard(disabled);
  return (
    <section className={styles.stage}>
      {visible ? (
        <aside className={styles.updatePanel} role="dialog" aria-label="Product update">
          <button
            className={styles.close}
            type="button"
            aria-label="Dismiss product update"
            disabled={disabled}
            onClick={() => setVisible(false)}
          >
            ×
          </button>
          <div className={styles.updateVisual}>
            <span>BOT ANALYTICS</span>
            <strong>Vercel · CloudFront · Fastly</strong>
          </div>
          <small>29 SEPTEMBER</small>
          <h2>Bot Analytics platform integrations</h2>
          <p>Connect supported platforms to understand how bots crawl your pages.</p>
          <div className={styles.actions}>
            <button type="button" disabled={disabled} onClick={() => guard('Try now navigation')}>
              Try now
            </button>
            <button
              type="button"
              disabled={disabled}
              onClick={() => guard('Learn more navigation')}
            >
              Learn more
            </button>
          </div>
        </aside>
      ) : (
        <button type="button" disabled={disabled} onClick={() => setVisible(true)}>
          Open product update
        </button>
      )}
      <Status value={status} />
    </section>
  );
}

const collections = ['Projects', 'Portfolios', 'Reports', 'Alerts'];
export function AhrefsCollectionNavigationRail({ disabled = false }: AhrefsDeepPrimitiveProps) {
  const [active, setActive] = useState('Projects');
  const [query, setQuery] = useState('');
  const filtered = collections.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  return (
    <section className={styles.stage}>
      <aside className={styles.collectionRail} aria-label="Workspace collections">
        <div className={styles.railActions}>
          <button type="button" disabled={disabled}>
            ＋ Create⌄
          </button>
          <button type="button" aria-label="Workspace settings" disabled={disabled}>
            ⚙
          </button>
          <button type="button" aria-label="Collapse workspace navigation" disabled={disabled}>
            ☰
          </button>
        </div>
        <label className={styles.search}>
          <span aria-hidden="true">⌕</span>
          <span className={styles.srOnly}>Search workspace collections</span>
          <input
            value={query}
            placeholder="Search"
            disabled={disabled}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <nav aria-label="Saved work">
          {filtered.map((item) => (
            <button
              type="button"
              key={item}
              aria-current={active === item ? 'page' : undefined}
              disabled={disabled}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className={styles.folderHeading}>
          <strong>Folders</strong>
          <button type="button" aria-label="Add folder" disabled={disabled}>
            ＋
          </button>
        </div>
        <span className={styles.muted}>No folders</span>
      </aside>
      <p className={styles.selection}>Collection: {active}</p>
    </section>
  );
}

export function AhrefsWelcomeLearningPanel({ disabled = false }: AhrefsDeepPrimitiveProps) {
  const [visible, setVisible] = useState(true);
  const { status, guard } = useLocalGuard(disabled);
  return (
    <section className={styles.stage}>
      {visible ? (
        <section className={styles.welcomePanel} aria-label="Welcome and learning resources">
          <button
            className={styles.close}
            type="button"
            aria-label="Dismiss welcome resources"
            disabled={disabled}
            onClick={() => setVisible(false)}
          >
            ×
          </button>
          <div>
            <strong>★ Welcome to Ahrefs!</strong>
            <span>Watch a 4-minute tour</span>
          </div>
          <button type="button" disabled={disabled} onClick={() => guard('Welcome video playback')}>
            ▶ Intro to AWT
          </button>
          <button type="button" disabled={disabled} onClick={() => guard('SEO hub navigation')}>
            Learn SEO · Ahrefs SEO hub ›
          </button>
          <button type="button" disabled={disabled} onClick={() => guard('Academy navigation')}>
            Take a course · Ahrefs Academy ›
          </button>
          <button type="button" disabled={disabled} onClick={() => guard('Tutorial navigation')}>
            Watch tutorials · Ahrefs TV ›
          </button>
        </section>
      ) : (
        <button type="button" disabled={disabled} onClick={() => setVisible(true)}>
          Show learning resources
        </button>
      )}
      <Status value={status} />
    </section>
  );
}

export function AhrefsDismissibleNoticeBanner({ disabled = false }: AhrefsDeepPrimitiveProps) {
  const [visible, setVisible] = useState(true);
  return (
    <section className={styles.stage}>
      {visible ? (
        <section className={styles.notice} aria-label="SERP data notice">
          <span aria-hidden="true">ⓘ</span>
          <p>
            <strong>29 Sep</strong> We’re seeing changes in how Google serves search results, which
            may cause inconsistencies in some SERP data.
          </p>
          <button
            type="button"
            aria-label="Dismiss SERP data notice"
            disabled={disabled}
            onClick={() => setVisible(false)}
          >
            ×
          </button>
        </section>
      ) : (
        <button type="button" disabled={disabled} onClick={() => setVisible(true)}>
          Show SERP data notice
        </button>
      )}
    </section>
  );
}

export function AhrefsTutorialVideoCard({ disabled = false }: AhrefsDeepPrimitiveProps) {
  const { status, guard } = useLocalGuard(disabled);
  return (
    <section className={styles.stage}>
      <button
        className={styles.videoCard}
        type="button"
        disabled={disabled}
        onClick={() => guard('Projects tutorial playback')}
        aria-label="Play Projects tutorial"
      >
        <span>PROJECT SETUP</span>
        <i>▶</i>
        <small>Scope · Ownership · Site Audit · Rank Tracker</small>
      </button>
      <Status value={status} />
    </section>
  );
}

export function AhrefsBrandSetupMode({ disabled = false }: AhrefsDeepPrimitiveProps) {
  const [manual, setManual] = useState(false);
  const { status, guard } = useLocalGuard(disabled);
  return (
    <section className={styles.stage}>
      <div className={styles.formCard} aria-label="Brand analysis setup">
        {!manual ? (
          <>
            <label>
              Enter your website or brand name
              <input disabled={disabled} placeholder="e.g. atlas.example or Atlas" />
            </label>
            <button type="button" disabled={disabled} onClick={() => setManual(true)}>
              Add brand and competitors manually
            </button>
          </>
        ) : (
          <>
            <label>
              Your brand
              <input disabled={disabled} placeholder="Atlas" />
            </label>
            <label>
              Competitors
              <input disabled={disabled} placeholder="Competitor names" />
            </label>
            <button type="button" disabled={disabled} onClick={() => setManual(false)}>
              Use website instead
            </button>
          </>
        )}
        <button
          className={styles.primary}
          type="button"
          disabled={disabled}
          onClick={() => guard('Brand analysis')}
        >
          ⌕ Analyze
        </button>
      </div>
      <Status value={status} />
    </section>
  );
}

export function AhrefsContentDocumentSetup({ disabled = false }: AhrefsDeepPrimitiveProps) {
  const [competitors, setCompetitors] = useState(1);
  const { status, guard } = useLocalGuard(disabled);
  return (
    <section className={styles.stage}>
      <form
        className={styles.formCard}
        aria-label="Document setup"
        onSubmit={(event) => {
          event.preventDefault();
          guard('Document creation');
        }}
      >
        <label>
          Target keyword
          <input disabled={disabled} placeholder="Enter keyword you want to rank for" />
        </label>
        <label>
          Article URL
          <input disabled={disabled} placeholder="Enter URL you want to import content from" />
        </label>
        <div className={styles.twoColumns}>
          <label>
            Location
            <select disabled={disabled} defaultValue="United States">
              <option>United States</option>
            </select>
          </label>
          <label>
            Brand kit
            <select disabled={disabled} defaultValue="Not selected">
              <option>Not selected</option>
            </select>
          </label>
        </div>
        {Array.from({ length: competitors }, (_, index) => (
          <label key={index}>
            Competitor {index + 1}
            <input disabled={disabled} placeholder="Enter URL you want to compete with" />
          </label>
        ))}
        <button
          type="button"
          disabled={disabled || competitors === 3}
          onClick={() => setCompetitors((value) => Math.min(3, value + 1))}
        >
          ＋ Add competitor
        </button>
        <button className={styles.primary} type="submit" disabled={disabled}>
          Create document
        </button>
      </form>
      <Status value={status} />
    </section>
  );
}

export function AhrefsContentHelperTabs({ disabled = false }: AhrefsDeepPrimitiveProps) {
  const [tab, setTab] = useState<'documents' | 'brand-kits'>('documents');
  return (
    <section className={styles.stage}>
      <div className={styles.tabs} role="tablist" aria-label="Content Helper sections">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'documents'}
          disabled={disabled}
          onClick={() => setTab('documents')}
        >
          Documents
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'brand-kits'}
          disabled={disabled}
          onClick={() => setTab('brand-kits')}
        >
          Brand kits <small>Beta</small>
        </button>
      </div>
      <section className={styles.emptyPanel} role="tabpanel">
        <span aria-hidden="true">▤</span>
        <h2>{tab === 'documents' ? 'Add your first document' : 'Add your first brand kit'}</h2>
        <p>
          {tab === 'documents'
            ? 'Align your content with search intent and analyze competitors.'
            : 'Create reusable voice and brand context for future documents.'}
        </p>
      </section>
    </section>
  );
}

import { useMemo, useState } from 'react';
import styles from './livechat.module.css';
import { LivechatDeepPreview, type LivechatDeepVariant } from './LivechatDeepPreview';
import { isLivechatExtendedVariant } from './LivechatExtendedData';

export type LivechatVariant =
  | LivechatDeepVariant
  | 'application-shell'
  | 'home-onboarding'
  | 'trial-banner'
  | 'installation-gate'
  | 'developer-invite'
  | 'integration-accordion'
  | 'global-search'
  | 'text-access-blocked';

export interface LivechatPreviewProps {
  variant: LivechatVariant;
  initialState?: string;
  disabled?: boolean;
}

const navigation = [
  'Home',
  'Chats',
  'Engage',
  'Automate',
  'Archives',
  'Team',
  'Reports',
  'Apps',
  'HelpDesk',
  'Billing',
  'Settings',
];

const setupItems = [
  'Try out your chat workspace in a sample chat',
  'Preview and customize your chat widget',
  'Test your chatbot’s knowledge',
  'Chat with Copilot, your AI assistant',
  'Invite teammates',
  'Connect LiveChat to your site',
  'Drive more chats with automated campaigns',
  'Add more channels',
];

const integrations = [
  'WordPress',
  'Shopify',
  'WooCommerce',
  'BigCommerce',
  'Ecwid',
  'Adobe Commerce',
  'Square Online',
  'Squarespace',
  'Wix',
  'Webflow',
  'Weebly',
  'Joomla',
  'Drupal',
  'Segment',
];

function Boundary({ children }: { children: string }) {
  return (
    <p className={styles.boundary} role="status">
      {children}
    </p>
  );
}

function TrialBanner() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.trial} aria-label="Fictional trial banner">
      <strong>14 days left in your trial.</strong>
      <button type="button" onClick={() => setNotice('Upgrade was not opened.')}>
        Upgrade now
      </button>
      {notice && <Boundary>{notice}</Boundary>}
    </section>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  const [notice, setNotice] = useState('');
  return (
    <div className={styles.shell}>
      <aside className={styles.rail} aria-label="Primary navigation">
        <b className={styles.logo}>▣</b>
        {navigation.map((item) => (
          <button
            type="button"
            key={item}
            aria-label={item}
            onClick={() => setNotice(`${item} navigation stayed inside this fictional fixture.`)}
          >
            {item.slice(0, 1)}
          </button>
        ))}
      </aside>
      <div className={styles.workspace}>
        <TrialBanner />
        <header className={styles.topbar}>
          <button
            type="button"
            onClick={() => setNotice('Open the Global Search fixture to inspect search.')}
          >
            ⌕ Search <kbd>⌘ K</kbd>
          </button>
          <span className={styles.presence}>S</span>
          <button type="button" onClick={() => setNotice('No invitation was sent.')}>
            ＋ Invite
          </button>
          <button type="button" onClick={() => setNotice('No Copilot prompt was submitted.')}>
            ◐ Copilot
          </button>
        </header>
        {children}
        {notice && <Boundary>{notice}</Boundary>}
      </div>
    </div>
  );
}

function HomeOnboarding() {
  const [selected, setSelected] = useState(0);
  const [notice, setNotice] = useState('');
  return (
    <main className={styles.home}>
      <section className={styles.checklist}>
        <p className={styles.eyebrow}>Fictional trial workspace</p>
        <h1>Let’s get you started with LiveChat</h1>
        {setupItems.map((item, index) => (
          <button
            type="button"
            key={item}
            aria-current={selected === index ? 'step' : undefined}
            onClick={() => setSelected(index)}
          >
            <span className={styles.ring} aria-hidden="true" />
            <b>{item}</b>
            <span>›</span>
          </button>
        ))}
      </section>
      <section className={styles.hero} aria-label="Selected setup task">
        <div className={styles.chatMock}>
          <b>Sample conversation</b>
          <p>How can we help today?</p>
          <p className={styles.reply}>I have a question about a fictional order.</p>
          <button
            type="button"
            onClick={() => setNotice('No sample chat or provider action was started.')}
          >
            Inspect locally
          </button>
        </div>
        <h2>{setupItems[selected]}</h2>
        <p>This reconstruction changes only local preview state.</p>
        {notice && <Boundary>{notice}</Boundary>}
      </section>
    </main>
  );
}

function InstallationGate({ initialState }: { initialState?: string }) {
  const [open, setOpen] = useState(initialState === 'integrations');
  const [notice, setNotice] = useState('');
  return (
    <main className={styles.install}>
      <h1>Start using LiveChat on your website now</h1>
      <article className={styles.installCard}>
        <div className={styles.illustration}>⌁</div>
        <h2>Add the code manually</h2>
        <p>Paste the generated code before the closing body tag on every page.</p>
        <pre aria-label="Sanitized installation code">{`<script>\n  window.__lc = { license: '[REDACTED]' };\n  // fictional non-working example\n</script>`}</pre>
        <div className={styles.actions}>
          <button type="button" onClick={() => setNotice('No code was copied.')}>
            Copy code
          </button>
          <button
            type="button"
            onClick={() => setNotice('Open the Developer Invite fixture to inspect this form.')}
          >
            Invite your developer
          </button>
          <button type="button" onClick={() => setNotice('The provider guide was not opened.')}>
            Install guide
          </button>
        </div>
      </article>
      <button
        className={styles.accordion}
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        More integrations <span>{open ? '−' : '+'}</span>
      </button>
      {open && <IntegrationGrid />}
      <button
        className={styles.secondary}
        type="button"
        onClick={() => setNotice('The provider onboarding skip was not exercised.')}
      >
        I don’t want to chat yet
      </button>
      {notice && <Boundary>{notice}</Boundary>}
    </main>
  );
}

function DeveloperInvite() {
  const [email, setEmail] = useState('');
  const [notice, setNotice] = useState('');
  return (
    <main className={styles.inviteForm}>
      <p className={styles.eyebrow}>Observed transient form · fictional data</p>
      <h1>Invite the developer to connect LiveChat for you.</h1>
      <label>
        Developer email
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="developer@example.invalid"
        />
      </label>
      <button type="button" disabled={!email} onClick={() => setNotice('No invitation was sent.')}>
        Send invite
      </button>
      <div className={styles.fakeLink} aria-label="Sanitized fictional invite link">
        https://example.invalid/invite/[redacted]
      </div>
      <button type="button" onClick={() => setNotice('No invitation link was copied.')}>
        Copy invite link
      </button>
      <button
        type="button"
        className={styles.secondary}
        onClick={() => setNotice('Skip did not change provider onboarding.')}
      >
        Skip
      </button>
      {notice && <Boundary>{notice}</Boundary>}
    </main>
  );
}

function IntegrationGrid() {
  const [notice, setNotice] = useState('');
  return (
    <section className={styles.integrationGrid} aria-label="Website integrations">
      {integrations.map((item) => (
        <button
          type="button"
          key={item}
          aria-label={`Connect with ${item}`}
          onClick={() => setNotice(`${item} was not connected.`)}
        >
          <span>{item.slice(0, 1)}</span>
          Connect with {item}
        </button>
      ))}
      {notice && <Boundary>{notice}</Boundary>}
    </section>
  );
}

function IntegrationAccordion() {
  const [tagManagerOpen, setTagManagerOpen] = useState(true);
  const [integrationsOpen, setIntegrationsOpen] = useState(false);
  const [notice, setNotice] = useState('');
  return (
    <main className={styles.integrations}>
      <button
        type="button"
        className={styles.accordion}
        aria-expanded={tagManagerOpen}
        onClick={() => setTagManagerOpen((value) => !value)}
      >
        Connect with Google Tag Manager <span>{tagManagerOpen ? '−' : '+'}</span>
      </button>
      {tagManagerOpen && (
        <div className={styles.accordionBody}>
          <button type="button" onClick={() => setNotice('No tag manager connection was started.')}>
            Connect
          </button>
          <button type="button" onClick={() => setNotice('The installation guide was not opened.')}>
            Install guide
          </button>
        </div>
      )}
      <button
        type="button"
        className={styles.accordion}
        aria-expanded={integrationsOpen}
        onClick={() => setIntegrationsOpen((value) => !value)}
      >
        More integrations <span>{integrationsOpen ? '−' : '+'}</span>
      </button>
      {integrationsOpen && <IntegrationGrid />}
      {notice && <Boundary>{notice}</Boundary>}
    </main>
  );
}

function GlobalSearch({ initialState }: { initialState?: string }) {
  const [query, setQuery] = useState(initialState === 'results' ? 'Reports' : '');
  const results = useMemo(
    () =>
      query
        ? [
            'Reports — Navigate',
            'Ask Copilot — your AI assistant',
            'Search in Archives — chats and customers',
          ]
        : [],
    [query]
  );
  return (
    <main className={styles.searchOverlay}>
      <label>
        Search LiveChat
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search"
        />
      </label>
      <kbd>Esc</kbd>
      {results.map((result) => (
        <button type="button" key={result}>
          {result}
        </button>
      ))}
      {!query && <p>Start typing to find navigation, Copilot, and archive search actions.</p>}
      <Boundary>No result opens a provider route in this fixture.</Boundary>
    </main>
  );
}

function TextAccessBlocked() {
  const [notice, setNotice] = useState('');
  return (
    <main className={styles.accessBlocked}>
      <div className={styles.textMark}>T</div>
      <h1>Want to switch to Text?</h1>
      <p>Talk to a Product Expert and they’ll set you up so Text runs the way you need.</p>
      <button
        type="button"
        onClick={() => setNotice('No Product Expert conversation was started.')}
      >
        Chat with Product Expert
      </button>
      <span>or Log in to your products</span>
      <button
        type="button"
        className={styles.secondary}
        onClick={() => setNotice('No account navigation occurred.')}
      >
        LiveChat
      </button>
      {notice && <Boundary>{notice}</Boundary>}
    </main>
  );
}

export function LivechatPreview({ variant, initialState, disabled = false }: LivechatPreviewProps) {
  const deepVariants: LivechatDeepVariant[] = [
    'sample-chat-workspace',
    'chat-action-menu',
    'engage-traffic',
    'campaigns-list',
    'goals-empty',
    'automate-overview',
    'canned-responses',
    'routing-rules',
    'workflows-gallery',
    'archives-empty',
    'team-directory',
    'reports-summary',
    'total-chats-report',
    'apps-marketplace',
    'helpdesk-boundary',
    'settings-catalogue',
    'widget-customization',
  ];
  const content =
    isLivechatExtendedVariant(variant) || deepVariants.includes(variant as LivechatDeepVariant) ? (
      <LivechatDeepPreview variant={variant as LivechatDeepVariant} />
    ) : variant === 'home-onboarding' ? (
      <HomeOnboarding />
    ) : variant === 'trial-banner' ? (
      <TrialBanner />
    ) : variant === 'installation-gate' ? (
      <InstallationGate initialState={initialState} />
    ) : variant === 'developer-invite' ? (
      <DeveloperInvite />
    ) : variant === 'integration-accordion' ? (
      <IntegrationAccordion />
    ) : variant === 'global-search' ? (
      <GlobalSearch initialState={initialState} />
    ) : variant === 'text-access-blocked' ? (
      <TextAccessBlocked />
    ) : (
      <Shell>
        <HomeOnboarding />
      </Shell>
    );
  return (
    <div className={styles.frame} aria-disabled={disabled}>
      {content}
    </div>
  );
}

import { useState } from 'react';
import styles from './livechat.module.css';
import {
  isLivechatExtendedVariant,
  livechatExtendedSection,
  type LivechatExtendedVariant,
} from './LivechatExtendedData';
import { LivechatExtendedPreview } from './LivechatExtendedPreview';

type LivechatBaseDeepVariant =
  | 'sample-chat-workspace'
  | 'chat-action-menu'
  | 'engage-traffic'
  | 'campaigns-list'
  | 'goals-empty'
  | 'automate-overview'
  | 'canned-responses'
  | 'routing-rules'
  | 'workflows-gallery'
  | 'archives-empty'
  | 'team-directory'
  | 'reports-summary'
  | 'total-chats-report'
  | 'apps-marketplace'
  | 'helpdesk-boundary'
  | 'settings-catalogue'
  | 'widget-customization';

export type LivechatDeepVariant = LivechatBaseDeepVariant | LivechatExtendedVariant;

const sections: Record<LivechatBaseDeepVariant, string> = {
  'sample-chat-workspace': 'Chats',
  'chat-action-menu': 'Chats',
  'engage-traffic': 'Engage',
  'campaigns-list': 'Engage',
  'goals-empty': 'Engage',
  'automate-overview': 'Automate',
  'canned-responses': 'Automate',
  'routing-rules': 'Automate',
  'workflows-gallery': 'Automate',
  'archives-empty': 'Archives',
  'team-directory': 'Team',
  'reports-summary': 'Reports',
  'total-chats-report': 'Reports',
  'apps-marketplace': 'Apps',
  'helpdesk-boundary': 'HelpDesk',
  'settings-catalogue': 'Settings',
  'widget-customization': 'Settings',
};

function sectionForVariant(variant: LivechatDeepVariant): string {
  return isLivechatExtendedVariant(variant) ? livechatExtendedSection(variant) : sections[variant];
}

function GuardedButton({ children }: { children: string }) {
  const [notice, setNotice] = useState('');
  return (
    <>
      <button type="button" onClick={() => setNotice(`${children} stayed inside this fixture.`)}>
        {children}
      </button>
      {notice && <span className={styles.inlineNotice}>{notice}</span>}
    </>
  );
}

function DeepShell({
  variant,
  children,
}: {
  variant: LivechatDeepVariant;
  children: React.ReactNode;
}) {
  const activeSection = sectionForVariant(variant);
  return (
    <div className={styles.deepShell}>
      <aside className={styles.deepRail} aria-label="Fictional LiveChat navigation">
        <b>▣</b>
        {['Home', 'Chats', 'Engage', 'Automate', 'Archives', 'Team', 'Reports', 'Apps'].map(
          (item) => (
            <span key={item} aria-current={activeSection === item ? 'page' : undefined}>
              {item.slice(0, 1)}
            </span>
          )
        )}
      </aside>
      <section className={styles.deepWorkspace}>
        <header className={styles.deepTopbar}>
          <strong>{activeSection}</strong>
          <span>⌕ Search</span>
          <span className={styles.deepAvatar}>F</span>
          <span>Invite</span>
          <span>Copilot</span>
        </header>
        {children}
      </section>
    </div>
  );
}

function SampleChat({ menu = false }: { menu?: boolean }) {
  const [mode, setMode] = useState<'Message' | 'Note'>('Message');
  return (
    <div className={styles.chatLayout}>
      <aside className={styles.chatList}>
        <h2>Chats</h2>
        <b>My chats (1)</b>
        <article>
          <strong>Example Customer</strong>
          <small>Thanks!</small>
        </article>
      </aside>
      <main className={styles.chatFeed}>
        <header>
          <h2>Sample chat</h2>
          {menu && (
            <div className={styles.popover} role="menu">
              <span aria-disabled="true">Transfer to…</span>
              <span aria-disabled="true">Create HelpDesk ticket</span>
              <span aria-disabled="true">Ban this customer</span>
              <GuardedButton>End sample chat</GuardedButton>
            </div>
          )}
        </header>
        <p className={styles.sampleNotice}>
          Provider-supplied practice chat · fictionalized locally
        </p>
        <div className={styles.bubble}>Which fictional plan would fit a small support team?</div>
        <div className={`${styles.bubble} ${styles.customer}`}>
          We need chat coverage on weekdays.
        </div>
        <div className={styles.bubble}>The starter plan is a practical place to begin.</div>
        <div className={styles.composer}>
          <button type="button" onClick={() => setMode(mode === 'Message' ? 'Note' : 'Message')}>
            {mode}
          </button>
          <input aria-label="Fictional message" placeholder="Write a message…" readOnly />
          <button type="button" disabled>
            Send
          </button>
        </div>
      </main>
      <aside className={styles.detailsRail}>
        <h3>Example Customer</h3>
        <small>customer@example.invalid</small>
        <h4>Additional info</h4>
        <p>Group: General</p>
        <h4>Reply suggestions</h4>
        <p>Import public sources to receive suggestions.</p>
      </aside>
    </div>
  );
}

const campaigns = [
  'Exit intent campaign',
  'Checkout help',
  'Pricing page assistance',
  'Welcome returning visitors',
  'Welcome new visitors',
];

const workflowTemplates = [
  'Welcome new chat visitors',
  'Ticket when chat starts',
  'Tag order issue chats',
  'Route chats by product interest',
  'Handle after-hours chats',
  'Create a ticket with summary',
];

function Engage({ variant }: { variant: LivechatDeepVariant }) {
  return (
    <div className={styles.productLayout}>
      <nav className={styles.subnav}>
        <b>Engage</b>
        <span>Traffic · 0 customers</span>
        <span>Campaigns · 5 active</span>
        <span>Goals · 0 active</span>
      </nav>
      <main className={styles.deepContent}>
        {variant === 'engage-traffic' ? (
          <section className={styles.emptyState}>
            <div className={styles.emptyIcon}>◎</div>
            <h1>Install chat widget to see visitors</h1>
            <p>Connect with visitors browsing your site after installation.</p>
            <GuardedButton>Install chat widget</GuardedButton>
          </section>
        ) : variant === 'campaigns-list' ? (
          <>
            <header className={styles.pageHeading}>
              <h1>Campaigns</h1>
              <GuardedButton>New campaign</GuardedButton>
            </header>
            <div className={styles.segmented}>
              <b>Recurring</b>
              <span>One-time</span>
            </div>
            <div className={styles.dataTable}>
              <header>
                <span>Name</span>
                <span>Status</span>
              </header>
              {campaigns.map((name) => (
                <div key={name}>
                  <span>{name}</span>
                  <b>Active</b>
                </div>
              ))}
            </div>
          </>
        ) : (
          <section className={styles.emptyState}>
            <div className={styles.emptyIcon}>◇</div>
            <h1>Measure chat effectiveness</h1>
            <p>Track how many chats become leads, sales, or resolved cases.</p>
            <GuardedButton>Create goal</GuardedButton>
          </section>
        )}
      </main>
    </div>
  );
}

function Automate({ variant }: { variant: LivechatDeepVariant }) {
  const cards =
    variant === 'workflows-gallery'
      ? workflowTemplates
      : [
          'Chat with Copilot',
          'Canned response suggestions',
          'Reply suggestions',
          'Route your chats',
        ];
  return (
    <div className={styles.productLayout}>
      <nav className={styles.subnav}>
        <b>Automate</b>
        {[
          'Overview',
          'Chatbots',
          'Knowledge hub',
          'Canned responses',
          'Routing rules',
          'Workflows · Beta',
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>
      <main className={styles.deepContent}>
        {variant === 'canned-responses' ? (
          <>
            <header className={styles.pageHeading}>
              <h1>Canned responses</h1>
              <GuardedButton>New canned response</GuardedButton>
            </header>
            <div className={styles.segmented}>
              <b>All</b>
              <span>Shared</span>
              <span>Private</span>
            </div>
            <p>23 provider-supplied responses</p>
            <div className={styles.responseList}>
              {['transfer', 'product', 'feedback'].map((tag) => (
                <article key={tag}>
                  <b>#{tag}</b>
                  <p>Fictional reusable reply for the selected topic.</p>
                  <small>Added by LiveChat</small>
                </article>
              ))}
            </div>
          </>
        ) : variant === 'routing-rules' ? (
          <section className={styles.emptyState}>
            <div className={styles.emptyIcon}>↗</div>
            <h1>Set up routing rules</h1>
            <p>Route visitors from specific pages or locations to the right team.</p>
            <GuardedButton>Add new rule</GuardedButton>
            <div className={styles.selectMock}>
              Route customers to <b>General</b>
            </div>
          </section>
        ) : (
          <>
            <p className={styles.eyebrow}>
              {variant === 'workflows-gallery' ? 'BETA TEMPLATE GALLERY' : 'AUTOMATION OVERVIEW'}
            </p>
            <h1>
              {variant === 'workflows-gallery' ? 'Welcome to Workflows' : 'Speed up chatting'}
            </h1>
            <p>
              {variant === 'workflows-gallery'
                ? 'Start from scratch or choose a provider template.'
                : 'Use assisted tools for replies, routine tasks, and routing.'}
            </p>
            <div className={styles.cardGrid}>
              {cards.map((card) => (
                <article key={card}>
                  <span>✦</span>
                  <h3>{card}</h3>
                  <GuardedButton>Inspect locally</GuardedButton>
                </article>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function Archives() {
  return (
    <section className={styles.emptyState}>
      <div className={styles.emptyIcon}>▤</div>
      <h1>Nothing in your Archives yet</h1>
      <p>Archives organize and hold finished chats.</p>
      <GuardedButton>Install LiveChat</GuardedButton>
    </section>
  );
}

function TeamDirectory() {
  return (
    <main className={styles.deepContent}>
      <header className={styles.pageHeading}>
        <h1>Team</h1>
        <GuardedButton>Invite agents</GuardedButton>
      </header>
      <div className={styles.segmented}>
        <b>Agents</b>
        <span>Chatbots</span>
        <span>Groups</span>
        <span>Suspended agents</span>
      </div>
      <div className={styles.splitPanel}>
        <div className={styles.dataTable}>
          <header>
            <span>Name</span>
            <span>Status</span>
          </header>
          <div>
            <span>
              Fictional Owner
              <br />
              <small>owner@example.invalid</small>
            </span>
            <b>Accepting chats</b>
          </div>
        </div>
        <aside>
          <h3>Agent details</h3>
          <p>Role: Owner</p>
          <p>Group: General</p>
          <p>Chat limit: 6</p>
          <h4>Working hours</h4>
          <p>Plan upgrade boundary</p>
        </aside>
      </div>
    </main>
  );
}

function Reports({ detailed = false }: { detailed?: boolean }) {
  const days = ['02 Oct', '03 Oct', '04 Oct', '05 Oct', '06 Oct', '07 Oct', '08 Oct'];
  return (
    <div className={styles.productLayout}>
      <nav className={styles.subnav}>
        <b>Reports</b>
        {[
          'Summary',
          'Chats',
          'Agents',
          'Customers',
          'Insights',
          'Ecommerce',
          'Export raw data',
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>
      <main className={styles.deepContent}>
        <p className={styles.eyebrow}>LAST 7 DAYS</p>
        <h1>{detailed ? 'Total chats' : 'Reports summary'}</h1>
        {detailed ? (
          <>
            <div className={styles.metricRow}>
              <article>
                <small>Total chats</small>
                <strong>0</strong>
              </article>
              <article>
                <small>Benchmark</small>
                <strong>—</strong>
              </article>
            </div>
            <div className={styles.dataTable}>
              <header>
                <span>Series</span>
                <span>Total</span>
              </header>
              {days.map((day) => (
                <div key={day}>
                  <span>{day}</span>
                  <b>0</b>
                </div>
              ))}
            </div>
            <GuardedButton>Export CSV</GuardedButton>
          </>
        ) : (
          <>
            <div className={styles.metricRow}>
              <article>
                <small>Total chats</small>
                <strong>0</strong>
              </article>
              <article>
                <small>Queued visitors</small>
                <strong>0</strong>
              </article>
              <article>
                <small>Chat satisfaction</small>
                <strong>—</strong>
              </article>
            </div>
            <section className={styles.emptyState}>
              <h2>No chats yet</h2>
              <p>Report cards retain empty metrics until conversations are received.</p>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

function AppsMarketplace() {
  return (
    <main className={styles.deepContent}>
      <header className={styles.pageHeading}>
        <h1>Explore apps</h1>
        <GuardedButton>Go to Cart</GuardedButton>
      </header>
      <div className={styles.filterRow}>
        <GuardedButton>Categories: all</GuardedButton>
        <GuardedButton>Payment type: all</GuardedButton>
        <GuardedButton>Placement: all</GuardedButton>
        <GuardedButton>Recommended</GuardedButton>
      </div>
      <div className={styles.cardGrid}>
        {[
          'ChatBot',
          'Knowledge Base',
          'WhatsApp Business',
          'HelpDesk',
          'Analytics report',
          'Facebook Messenger',
          'WordPress',
          'Mailchimp',
        ].map((app) => (
          <article key={app}>
            <div className={styles.appIcon}>{app.slice(0, 1)}</div>
            <h3>{app}</h3>
            <small>Marketplace listing</small>
            <GuardedButton>{`View ${app}`}</GuardedButton>
          </article>
        ))}
      </div>
    </main>
  );
}

function HelpdeskBoundary() {
  return (
    <section className={styles.promo}>
      <div>
        <p className={styles.eyebrow}>PRODUCT BOUNDARY</p>
        <h1>Turn chats and emails into tickets</h1>
        <p>Keep support cases organized in a connected ticketing workspace.</p>
        <GuardedButton>Add HelpDesk ticketing system</GuardedButton>
      </div>
      <div className={styles.promoArt}>✓</div>
    </section>
  );
}

const settingsGroups = [
  ['Channels', 'Install LiveChat · OFF', 'Email by HelpDesk · OFF', 'Facebook Messenger · OFF'],
  ['Website widget', 'Customization', 'Language', 'Availability', 'Welcome screen'],
  ['Forms', 'Pre-chat form', 'Ask for email', 'Post-chat form', 'Ticket form'],
  ['Engagement', 'Eye-catcher', 'Chat buttons', 'Quality showcase'],
  [
    'Chat settings',
    'Chat assignment',
    'Transcript forwarding',
    'File sharing',
    'Inactivity timeouts',
  ],
  ['Security', 'Trusted domains', 'Banned customers', 'Credit card masking', 'Login settings'],
];

function SettingsCatalogue() {
  return (
    <main className={styles.settingsPage}>
      <aside>
        {settingsGroups.map(([group, ...items]) => (
          <section key={group}>
            <b>{group}</b>
            {items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </section>
        ))}
      </aside>
      <section className={styles.emptyState}>
        <div className={styles.emptyIcon}>⌁</div>
        <h1>Install website widget</h1>
        <p>Choose a platform integration or install the sanitized example manually.</p>
        <GuardedButton>Show more ways</GuardedButton>
      </section>
    </main>
  );
}

function WidgetCustomization() {
  const [tab, setTab] = useState<'Appearance' | 'Position'>('Appearance');
  return (
    <main className={styles.customizer}>
      <section>
        <p className={styles.eyebrow}>WIDGET CUSTOMIZATION</p>
        <h1>Customize your chat widget</h1>
        <div className={styles.segmented}>
          <button type="button" onClick={() => setTab('Appearance')}>
            Appearance
          </button>
          <button type="button" onClick={() => setTab('Position')}>
            Position
          </button>
        </div>
        {tab === 'Appearance' ? (
          <div className={styles.controlCard}>
            <h3>Theme and colors</h3>
            <label>
              <input type="radio" defaultChecked readOnly /> Light
            </label>
            <label>
              <input type="radio" readOnly /> Dark
            </label>
            <div className={styles.swatches}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        ) : (
          <div className={styles.controlCard}>
            <h3>Widget position</h3>
            <p>
              Align to: <b>Right</b>
            </p>
            <p>
              Side spacing: <b>0 px</b>
            </p>
            <p>
              Bottom spacing: <b>0 px</b>
            </p>
            <label>
              <input type="radio" defaultChecked readOnly /> Always visible
            </label>
          </div>
        )}
      </section>
      <aside className={styles.widgetPreview}>
        <header>Fictional Agent</header>
        <div>
          <p>Hello. How may I help you?</p>
          <p className={styles.customer}>I’d like to ask something.</p>
        </div>
        <input aria-label="Preview message" placeholder="Write a message…" readOnly />
      </aside>
    </main>
  );
}

export function LivechatDeepPreview({ variant }: { variant: LivechatDeepVariant }) {
  const content = isLivechatExtendedVariant(variant) ? (
    <LivechatExtendedPreview variant={variant} />
  ) : variant === 'sample-chat-workspace' ? (
    <SampleChat />
  ) : variant === 'chat-action-menu' ? (
    <SampleChat menu />
  ) : ['engage-traffic', 'campaigns-list', 'goals-empty'].includes(variant) ? (
    <Engage variant={variant} />
  ) : ['automate-overview', 'canned-responses', 'routing-rules', 'workflows-gallery'].includes(
      variant
    ) ? (
    <Automate variant={variant} />
  ) : variant === 'archives-empty' ? (
    <Archives />
  ) : variant === 'team-directory' ? (
    <TeamDirectory />
  ) : variant === 'reports-summary' ? (
    <Reports />
  ) : variant === 'total-chats-report' ? (
    <Reports detailed />
  ) : variant === 'apps-marketplace' ? (
    <AppsMarketplace />
  ) : variant === 'helpdesk-boundary' ? (
    <HelpdeskBoundary />
  ) : variant === 'settings-catalogue' ? (
    <SettingsCatalogue />
  ) : (
    <WidgetCustomization />
  );
  return <DeepShell variant={variant}>{content}</DeepShell>;
}

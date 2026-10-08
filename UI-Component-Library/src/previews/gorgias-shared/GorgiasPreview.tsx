import { useState } from 'react';
import styles from './gorgias.module.css';

export type GorgiasVariant =
  | 'application-shell'
  | 'inbox-empty'
  | 'workspace-switcher'
  | 'global-search'
  | 'settings-catalogue'
  | 'app-marketplace'
  | 'chat-channel-empty'
  | 'ai-agent-boundary'
  | 'rules-onboarding'
  | 'macro-library'
  | 'analytics-overview'
  | 'inbox-controls'
  | 'gaia-assistant'
  | 'convert-overview'
  | 'workflow-controls'
  | 'analytics-suite'
  | 'channel-settings';

export interface GorgiasPreviewProps {
  variant: GorgiasVariant;
  initialState?: string;
  disabled?: boolean;
}

const workspaces = ['Gaia', 'Inbox', 'AI Agent', 'Convert', 'Analytics', 'Workflows', 'Settings', 'Customers'];
const defaultViews = [
  ['Assigned to me', '0'],
  ['Unassigned', '1'],
  ['All', '1'],
];

function Boundary({ children }: { children: string }) {
  return <p className={styles.boundary} role="status">{children}</p>;
}

function Shell({ variant, children }: { variant: GorgiasVariant; children: React.ReactNode }) {
  const [switcherOpen, setSwitcherOpen] = useState(variant === 'workspace-switcher');
  const [searchOpen, setSearchOpen] = useState(variant === 'global-search');
  const [notice, setNotice] = useState('');
  const active = variant.startsWith('settings') || variant.includes('marketplace') || variant.includes('chat-channel') || variant.includes('channel-settings')
    ? 'Settings'
    : variant.includes('ai-agent')
      ? 'AI Agent'
      : variant.includes('convert')
        ? 'Convert'
      : variant.includes('rules') || variant.includes('macro') || variant.includes('workflow-controls')
        ? 'Workflows'
        : variant.includes('analytics')
          ? 'Analytics'
          : 'Inbox';

  return (
    <div className={styles.frame} data-disabled={variant && undefined}>
      <aside className={styles.sidebar}>
        <div className={styles.topActions}>
          <button type="button" aria-expanded={switcherOpen} onClick={() => setSwitcherOpen((value) => !value)}>
            <span className={styles.logo}>G</span><b>{active}</b><span>⌄</span>
          </button>
          <button type="button" aria-label="Notifications" onClick={() => setNotice('No notifications were changed.')}>♧</button>
          <button type="button" aria-label="Open fictional search" onClick={() => setSearchOpen(true)}>⌕</button>
        </div>
        {active === 'Inbox' && <InboxNavigation onBoundary={setNotice} />}
        {active === 'Settings' && <SettingsNavigation onBoundary={setNotice} />}
        {active === 'Workflows' && <WorkflowNavigation onBoundary={setNotice} />}
        {active === 'Analytics' && <AnalyticsNavigation onBoundary={setNotice} />}
        <div className={styles.sidebarFooter}>
          <button type="button" onClick={() => setNotice('Gaia was not prompted.')}>Ask Gaia <kbd>⌘ G</kbd></button>
          <button type="button" aria-label="Fictional available profile" onClick={() => setNotice('Availability was not changed.')}>S<span className={styles.online} /></button>
        </div>
      </aside>
      <main className={styles.main}>{children}{notice && <Boundary>{notice}</Boundary>}</main>
      {switcherOpen && <WorkspaceSwitcher onClose={() => setSwitcherOpen(false)} onBoundary={setNotice} />}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  );
}

function InboxNavigation({ onBoundary }: { onBoundary: (value: string) => void }) {
  return (
    <nav className={styles.nav} aria-label="Inbox navigation">
      <button type="button" className={styles.primary} onClick={() => onBoundary('No ticket was created.')}>＋ New ticket</button>
      <small>Default views</small>
      {defaultViews.map(([label, count], index) => (
        <button key={label} type="button" className={index === 0 ? styles.selected : ''} onClick={() => onBoundary(`${label} stayed inside this fictional fixture.`)}>
          <span>{index === 0 ? '♧' : index === 1 ? '▭' : '⌑'} {label}</span><b>{count}</b>
        </button>
      ))}
      <button type="button" onClick={() => onBoundary('More views were not opened.')}>••• More</button>
      <small>Shared views</small>
      <button type="button" onClick={() => onBoundary('AI Agent view stayed local.')}>✨ AI Agent <span>⌄</span></button>
      <small>Private views</small>
    </nav>
  );
}

function SettingsNavigation({ onBoundary }: { onBoundary: (value: string) => void }) {
  const groups = [
    ['Apps', 'Installed apps', 'App store'],
    ['Workspace', 'Store', 'Business and holiday hours'],
    ['Channels', 'Help Center', 'Phone numbers', 'Email', 'Voice', 'SMS', 'Chat', 'Contact form'],
    ['Account', 'Users', 'Teams', 'Agent unavailability', 'Access management', 'Billing and usage', 'Labs', 'HTTP integration', 'REST API', 'Audit logs', 'Imports', 'Password & 2FA', 'Notifications'],
  ];
  return <nav className={styles.nav} aria-label="Settings navigation">{groups.map(([group, ...items]) => <section key={group}><b>{group}⌃</b>{items.map((item) => <button type="button" key={item} onClick={() => onBoundary(`${item} navigation stayed local.`)}>{item}</button>)}</section>)}</nav>;
}

function WorkflowNavigation({ onBoundary }: { onBoundary: (value: string) => void }) {
  return <nav className={styles.nav} aria-label="Workflow navigation"><small>Tools</small>{['Rules', 'Macros', 'Ticket assignment', 'Auto-merge', 'CSAT', 'SLAs'].map((item) => <button type="button" key={item} onClick={() => onBoundary(`${item} was not changed.`)}>{item}</button>)}<small>Fields and tags</small>{['Ticket fields', 'Customer fields', 'Field conditions', 'Tags'].map((item) => <button type="button" key={item} onClick={() => onBoundary(`${item} was not changed.`)}>{item}</button>)}</nav>;
}

function AnalyticsNavigation({ onBoundary }: { onBoundary: (value: string) => void }) {
  return <nav className={styles.nav} aria-label="Analytics navigation">{['Real-time monitoring', 'Dashboards', 'AI & automation', 'Quality', 'Support performance', 'Insights', 'Voice'].map((item) => <button type="button" key={item} onClick={() => onBoundary(`${item} remained a fictional navigation state.`)}>{item}<span>⌃</span></button>)}</nav>;
}

function WorkspaceSwitcher({ onClose, onBoundary }: { onClose: () => void; onBoundary: (value: string) => void }) {
  return <div className={styles.switcher} role="dialog" aria-label="Fictional workspace switcher"><button className={styles.close} type="button" onClick={onClose}>×</button>{workspaces.map((item) => <button type="button" key={item} onClick={() => onBoundary(`${item} was not opened from the fictional switcher.`)}>{item}<span>›</span></button>)}</div>;
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [scope, setScope] = useState('All');
  return <div className={styles.overlay}><section className={styles.searchDialog} role="dialog" aria-label="Fictional global search"><button className={styles.close} type="button" onClick={onClose}>×</button><label><span>⌕</span><input placeholder="Search for anything" aria-label="Search for anything" /></label><div className={styles.pills}>{['All', 'Customers', 'Tickets'].map((item) => <button type="button" key={item} aria-pressed={scope === item} onClick={() => setScope(item)}>{item}</button>)}</div><div className={styles.emptySearch}><b>Recently accessed customers</b><p>No recently accessed customers</p><b>Recently accessed tickets</b><p>No recently accessed tickets</p></div><footer>↑ ↓ Select　↩ Open　⌘ + ↩ Open in a new tab</footer></section></div>;
}

function InboxEmpty() {
  const [notice, setNotice] = useState('');
  return <section className={styles.page}><header><h1>Assigned to me</h1><button type="button" onClick={() => setNotice('The fictional table layout was not changed.')}>▥ Edit table</button><button className={styles.primary} type="button" onClick={() => setNotice('No ticket was created.')}>Create ticket</button></header><div className={styles.empty}><h2>No open tickets</h2><p>You’ve closed all your tickets!</p></div><footer className={styles.pagination}><span>20⌄ items/page</span><button type="button" disabled>‹</button><button type="button" disabled>›</button></footer>{notice && <Boundary>{notice}</Boundary>}</section>;
}

function SettingsCatalogue({ marketplace = false }: { marketplace?: boolean }) {
  const [notice, setNotice] = useState('');
  if (marketplace) {
    const groups = [['Featured', 'WhatsApp', 'BigCommerce'], ['Chat', 'Ada', 'AgentsOnly'], ['Phone', 'Aircall', 'AgentsOnly'], ['Social media', 'WhatsApp', 'Facebook, Messenger & Instagram'], ['Ecommerce', 'Shopify', 'BigCommerce'], ['Returns & exchanges', 'AfterShip Returns Center', 'AI phone support']];
    return <section className={styles.page}><header><h1>All apps</h1><input placeholder="Search for an app" /></header><div className={styles.categoryRow}>{['All categories', 'Featured', 'Chat', 'Phone', 'SMS', 'Social media', 'Ecommerce'].map((item) => <button type="button" key={item} onClick={() => setNotice(`${item} filter changed only this fictional fixture.`)}>{item}</button>)}</div>{groups.map(([group, ...apps]) => <section key={group} className={styles.market}><h2>{group}</h2><div>{apps.map((app) => <button type="button" key={app} onClick={() => setNotice(`${app} was not connected.`)}><b>{app}</b><span>Fictional catalogue card</span></button>)}</div></section>)}{notice && <Boundary>{notice}</Boundary>}</section>;
  }
  return <section className={styles.page}><header><h1>My apps</h1></header><div className={styles.empty}><div className={styles.illustration}>▦</div><h2>You don’t have any apps installed</h2><p>Discover integrations to extend the fictional helpdesk.</p><button className={styles.primary} type="button" onClick={() => setNotice('The app marketplace was not opened.')}>Explore App Store</button></div>{notice && <Boundary>{notice}</Boundary>}</section>;
}

function ChatChannelEmpty() {
  const [notice, setNotice] = useState('');
  return <section className={styles.page}><header><h1>Chat</h1><button className={styles.primary} type="button" onClick={() => setNotice('No chat channel was created.')}>＋ New chat</button></header><div className={styles.infoCard}>Chat with customers by adding a chat widget on your website. Every new conversation opens a helpdesk ticket.</div><div className={styles.empty}><h2>No chat integration</h2><p>You have no integration of this type in this fictional fixture.</p></div>{notice && <Boundary>{notice}</Boundary>}</section>;
}

function AiBoundary() {
  return <section className={`${styles.page} ${styles.hero}`}><div className={styles.aiOrb}>✦</div><h1>Meet AI Agent</h1><p>Trained on your policies, catalog, and tone.</p><p>Test and preview fictional scenarios before it goes live.</p><p>Gaia coaches it from setup onward.</p><button type="button" disabled>Start setup</button><small>AI Agent requires a connected commerce store.</small></section>;
}

function RulesOnboarding() {
  return <section className={styles.page}><header><h1>Rules</h1><input placeholder="Search rules…" /></header><div className={styles.learning}><div className={styles.video}>▶</div><h2>Automate tasks to streamline support with rules.</h2><p>Documentation, guided video, and academy learning remain read-only in this fictional fixture.</p><button type="button">How to set up rules</button></div></section>;
}

function MacroLibrary() {
  const [notice, setNotice] = useState('');
  return <section className={styles.page}><header><h1>Macros</h1><input placeholder="Search macros…" /><button type="button" onClick={() => setNotice('No macro was created.')}>Create macro</button></header><p>Pre-made responses can personalize replies and pair them with ticket actions.</p><table><thead><tr><th>Macro</th><th>Tags</th><th>Language</th><th>Usage count</th><th /></tr></thead><tbody>{['Generic: How can I help?', 'Generic: Sign off'].map((item) => <tr key={item}><td>{item}</td><td>—</td><td>English</td><td>0</td><td><button type="button" onClick={() => setNotice('Macro actions were not opened.')}>•••</button></td></tr>)}</tbody></table>{notice && <Boundary>{notice}</Boundary>}</section>;
}

function AnalyticsOverview() {
  const cards = [['Agents online', '1'], ['Agents offline', '0'], ['Assigned open tickets', '0'], ['Unassigned open tickets', '1']];
  return <section className={styles.page}><header><h1>Live overview</h1><button type="button">All channels⌄</button><button type="button">All agents⌄</button></header><div className={styles.notice}>A new analytics experience is coming. Early-access opt-in is not exercised.</div><div className={styles.kpis}>{cards.map(([label, value]) => <article key={label}><span>{label}</span><b>{value}</b></article>)}</div><section className={styles.chart}><h2>Support volume</h2><div className={styles.legend}><span>● Ticket created</span><span>● Ticket replied</span><span>● Ticket closed</span></div><svg viewBox="0 0 500 150" role="img" aria-label="Fictional empty support volume chart"><path d="M10 120 C120 80 180 115 260 65 S410 105 490 35" fill="none" stroke="currentColor" strokeWidth="3" /></svg></section></section>;
}

function InboxControls() {
  const [notice, setNotice] = useState('');
  return <section className={styles.page}><header><h1>Assigned to me</h1><button type="button" onClick={() => setNotice('The fictional filter stayed unchanged.')}>Filter views⌄</button><button type="button" onClick={() => setNotice('No columns were changed.')}>▥ Edit table</button></header><div className={styles.controlGrid}><article><h2>Default views</h2>{['Assigned to me', 'Unassigned', 'All', 'Snoozed', 'Closed', 'Trash', 'Spam'].map((item) => <label key={item}><input type="checkbox" defaultChecked readOnly />{item}</label>)}<small>Visible to all users in the fictional account.</small></article><article><h2>Edit view</h2><label>View name<input value="Inbox" disabled readOnly /></label><div className={styles.ruleRow}><span>Assignee user</span><b>Me</b></div><div className={styles.ruleRow}><span>Status</span><b>Open</b></div><button type="button" onClick={() => setNotice('No filter was added.')}>＋ Add filter</button><small>This view cannot be saved.</small></article><article><h2>Table settings</h2>{['Tags', 'Customer', 'Last message'].map((item) => <label key={item}><input type="checkbox" defaultChecked readOnly />{item}</label>)}{['Subject', 'Integration', 'Assignee', 'Status', 'Channel', 'Priority'].map((item) => <label key={item}><input type="checkbox" readOnly />{item}</label>)}</article></div><div className={styles.drawer}><b>Notifications</b><button type="button" onClick={() => setNotice('No notifications were marked as read.')}>Mark all as read</button><p>No notifications</p></div>{notice && <Boundary>{notice}</Boundary>}</section>;
}

function GaiaAssistant() {
  const [notice, setNotice] = useState('');
  return <section className={styles.page}><div className={styles.splitHero}><div className={styles.empty}><div className={styles.aiOrb}>✦</div><h1>Ask Gaia</h1><p>AI assistance opens beside the workspace without replacing the active queue.</p></div><aside className={styles.assistant}><small>MEET GAIA · EARLY ACCESS</small><h2>How can I help you?</h2><button type="button" onClick={() => setNotice('The fictional triage action was not run.')}>Triage and tag recent tickets</button><button type="button" onClick={() => setNotice('No queue summary was generated.')}>Summarize the top issues in my queue</button><textarea aria-label="Message Gaia" placeholder="Message" /><footer><button type="button" onClick={() => setNotice('No file was attached.')}>Attach</button><span>Ask first⌄</span><button type="button" disabled>Send</button></footer></aside></div>{notice && <Boundary>{notice}</Boundary>}</section>;
}

function ConvertOverview() {
  const steps = [
    ['Proactively educate shoppers', 'Guide visitors before they need support.'],
    ['Pre-sales assistance', 'Make conversation available during product discovery.'],
    ['Cart-abandonment targeting', 'Offer timely help without exercising a campaign.'],
    ['Grow and re-engage', 'Collect consent through provider-configured experiences.'],
  ];
  return <section className={styles.page}><header><h1>Welcome to Convert</h1><span className={styles.badge}>Education</span></header><p className={styles.lead}>A guided overview introduces four stages of proactive shopper engagement.</p><div className={styles.timeline}>{steps.map(([title, copy], index) => <article key={title}><span>{index + 1}</span><div><h2>{title}</h2><p>{copy}</p></div><button type="button" disabled>Learn</button></article>)}</div><Boundary>Provider marketing claims and activation consequences are not verified.</Boundary></section>;
}

function WorkflowControls() {
  const [section, setSection] = useState('Assignment');
  const [notice, setNotice] = useState('');
  const panels: Record<string, React.ReactNode> = {
    Assignment: <><h2>Ticket assignment</h2><p>No teams are configured in this fictional fixture.</p><label><input type="checkbox" defaultChecked readOnly />Unassign on reply</label><label><input type="checkbox" readOnly />Unassign chat tickets when the agent is unavailable</label><button type="button" onClick={() => setNotice('No team was created.')}>Create team</button></>,
    'Auto-merge': <><h2>Auto-merge</h2><label><input type="checkbox" readOnly />Auto-merge tickets from the same customer</label><label>Maximum date difference<input value="5 days" disabled readOnly /></label><button type="button" disabled>Save</button></>,
    CSAT: <><h2>Satisfaction survey</h2><label><input type="checkbox" defaultChecked readOnly />Email</label><label><input type="checkbox" defaultChecked readOnly />Chat</label><div className={styles.survey}>How would you rate the help our team provided? <b>☆ ☆ ☆ ☆ ☆</b></div><small>Send two hours after tickets are closed.</small></>,
    SLAs: <><h2>Service level agreements</h2><p>Create from a template for Voice, Chat, Email, or Social media.</p><button type="button" onClick={() => setNotice('No SLA was created.')}>Create SLA</button></>,
    Fields: <><h2>Fields and tags</h2><p>Ticket fields, customer fields, field conditions, and tags share search, active or archived states, and row actions.</p><table><thead><tr><th>Item</th><th>State</th><th /></tr></thead><tbody>{['Managed sentiment', 'Contact reason', 'Customer type', 'Call status condition'].map((item) => <tr key={item}><td>{item}</td><td>Active</td><td>•••</td></tr>)}</tbody></table></>,
  };
  return <section className={styles.page}><header><h1>Workflow controls</h1></header><div className={styles.tabRow}>{Object.keys(panels).map((item) => <button type="button" key={item} aria-pressed={section === item} onClick={() => setSection(item)}>{item}</button>)}</div><article className={styles.controlPanel}>{panels[section]}</article>{notice && <Boundary>{notice}</Boundary>}</section>;
}

function AnalyticsSuite() {
  const reports = ['Automation', 'Auto QA', 'Satisfaction', 'Support performance', 'Busiest times', 'Channels', 'Revenue', 'Help Center', 'SLAs', 'Ticket Fields', 'Tags', 'Macros', 'Intents'];
  return <section className={styles.page}><header><h1>Analytics suite</h1><button type="button">Date⌄</button><button type="button">＋ Add filter</button><button type="button" disabled>Download data</button></header><div className={styles.tabRow}>{reports.map((item, index) => <button type="button" key={item} aria-pressed={index === 0}>{item}</button>)}</div><div className={styles.kpis}><article><span>Automation rate</span><b>—</b></article><article><span>Quality score</span><b>—</b></article><article><span>Satisfaction</span><b>—</b></article><article><span>Revenue</span><b>—</b></article></div><section className={styles.chart}><h2>Report canvas</h2><p>Filters, saved filters, aggregation controls, tips, exports, and report-specific tables were visible. Workspace values are intentionally omitted.</p><div className={styles.metricRows}>{['Overview metric', 'Channel breakdown', 'Trend over time'].map((item) => <div key={item}><span>{item}</span><i /></div>)}</div></section><label className={styles.searchLine}>Metrics glossary<input placeholder="Search metrics" /></label></section>;
}

function ChannelSettings() {
  const [notice, setNotice] = useState('');
  const channels = [
    ['Help Center', 'Create and manage self-service articles.'],
    ['Phone numbers', 'Search, filter, and connect Voice or SMS capabilities.'],
    ['Email', 'One fictional verified default inbox with no store connected.'],
    ['Voice', 'Calls, voicemail, forwarding, IVR, and call-record tickets.'],
    ['SMS', 'Text and multimedia support with escalation to calls or email.'],
    ['Contact Form', 'Create, customize, and embed a support request form.'],
  ];
  return <section className={styles.page}><header><h1>Channel settings</h1><button type="button" onClick={() => setNotice('No channel was added.')}>Add channel</button></header><div className={styles.channelGrid}>{channels.map(([title, copy]) => <article key={title}><div className={styles.channelIcon}>{title.slice(0, 1)}</div><h2>{title}</h2><p>{copy}</p><button type="button" onClick={() => setNotice(`${title} stayed inside this fictional fixture.`)}>View setup</button></article>)}</div>{notice && <Boundary>{notice}</Boundary>}</section>;
}

export function GorgiasPreview({ variant }: GorgiasPreviewProps) {
  const content = variant === 'settings-catalogue' ? <SettingsCatalogue />
    : variant === 'app-marketplace' ? <SettingsCatalogue marketplace />
      : variant === 'chat-channel-empty' ? <ChatChannelEmpty />
        : variant === 'ai-agent-boundary' ? <AiBoundary />
          : variant === 'rules-onboarding' ? <RulesOnboarding />
            : variant === 'macro-library' ? <MacroLibrary />
              : variant === 'analytics-overview' ? <AnalyticsOverview />
                : variant === 'inbox-controls' ? <InboxControls />
                  : variant === 'gaia-assistant' ? <GaiaAssistant />
                    : variant === 'convert-overview' ? <ConvertOverview />
                      : variant === 'workflow-controls' ? <WorkflowControls />
                        : variant === 'analytics-suite' ? <AnalyticsSuite />
                          : variant === 'channel-settings' ? <ChannelSettings />
                : <InboxEmpty />;
  return <Shell variant={variant}>{content}</Shell>;
}

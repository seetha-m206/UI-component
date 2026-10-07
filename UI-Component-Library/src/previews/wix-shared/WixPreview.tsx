import { useMemo, useState } from 'react';
import styles from './wix.module.css';

export type WixVariant =
  | 'realtime-analytics'
  | 'traffic-overview'
  | 'analytics-date-range'
  | 'seo-geo-overview'
  | 'seo-help-menu'
  | 'contacts-workspace'
  | 'contact-create-menu'
  | 'manage-apps'
  | 'installed-app-actions'
  | 'behavior-overview'
  | 'marketing-overview'
  | 'session-recordings'
  | 'insights-benchmarks'
  | 'home-dashboard'
  | 'inbox'
  | 'automations'
  | 'forms-submissions'
  | 'website-overview'
  | 'site-speed'
  | 'uptime-security'
  | 'mobile-app'
  | 'symphony'
  | 'design-agent'
  | 'getting-paid'
  | 'payments'
  | 'receipts'
  | 'point-of-sale'
  | 'settings-overview'
  | 'app-market'
  | 'loading-shell'
  | 'setup-checklist'
  | 'quick-actions'
  | 'analytics-highlights'
  | 'ai-site-design'
  | 'template-gallery'
  | 'pos-checkout'
  | 'business-email';

interface WixPreviewProps {
  variant: WixVariant;
  initialState?: string;
  disabled?: boolean;
}

const primaryNav = ['Setup', 'Home', 'AI Agents', 'Getting Paid', 'Sales', 'Portfolio', 'Apps', 'Site & Mobile App', 'Marketing', 'Inbox', 'Customers & Leads', 'Analytics', 'Automations', 'Settings'];

type PrimaryScreenDefinition = {
  active: string;
  title: string;
  description: string;
  badge?: string;
  tabs?: string[];
  cards: Array<{ title: string; body: string; action?: string; tone?: 'gate' | 'empty' }>;
};

const primaryScreens: Partial<Record<WixVariant, PrimaryScreenDefinition>> = {
  'behavior-overview': { active: 'Analytics', title: 'Behavior Overview', description: 'Discover how visitors engage with your site’s pages.', tabs: ['Visits', 'Button clicks', 'Avg time on page', 'Exit rate'], cards: [
    { title: 'Top pages by', body: 'No page activity in this period.', action: 'View Report', tone: 'empty' },
    { title: 'Top clicks', body: 'Clicks on page elements will appear here.', action: 'View Report', tone: 'empty' },
    { title: 'Top navigation flows', body: 'See the first four steps visitors take.', action: 'Start Session Recordings', tone: 'gate' },
    { title: 'Form submissions', body: 'No forms were submitted in this period.', action: 'Manage', tone: 'empty' },
    { title: 'Leads', body: 'No leads in this period.', tone: 'empty' },
    { title: 'Traffic sources', body: 'No sessions in this period.', tone: 'empty' },
  ] },
  'marketing-overview': { active: 'Analytics', title: 'Marketing Overview', description: 'Track, analyze and optimize the performance of all your marketing activities.', tabs: ['Sessions', 'Leads'], cards: [
    { title: 'Sessions over time', body: 'No sessions in this period.', action: 'View Report', tone: 'empty' },
    { title: 'Organic search', body: 'Connect your site to see search performance.', action: 'Go to SEO Dashboard' },
    { title: 'Connect your site to Google', body: 'Connect Google Search Console to see search results.', action: 'Connect to Google', tone: 'gate' },
    { title: 'AI platforms', body: 'ChatGPT · Gemini · Perplexity. No user queries.', action: 'Go to AI Visibility Overview' },
    { title: 'Social media posts by Wix', body: 'Upgrade your plan to unlock social performance insights.', action: 'Upgrade Plan', tone: 'gate' },
    { title: 'Paid ad campaigns', body: 'Coming soon. Spend, clicks, orders and cost per purchase will appear here.' },
  ] },
  'session-recordings': { active: 'Analytics', title: 'Analyze recorded sessions to improve visitor experience', description: 'Watch real visitor journeys, identify pain points and focus on the use cases that interest you most.', badge: 'PLAN GATE', cards: [
    { title: 'Session Recordings', body: 'This free-plan site displayed an upgrade gate before any recordings were available.', action: 'Upgrade to Get Session Recordings', tone: 'gate' },
    { title: 'What you can learn', body: 'Visitor journeys · pain points · focused use cases', action: 'Learn more' },
  ] },
  'insights-benchmarks': { active: 'Analytics', title: 'Insights & Benchmarks', description: 'Get actionable insights into site performance over the last 30 days and compare with others.', tabs: ['Insights', 'Benchmarks'], cards: [
    { title: 'Analyzing your site…', body: 'It will take a few seconds.', tone: 'empty' },
  ] },
  'home-dashboard': { active: 'Home', title: 'Welcome to your Dashboard', description: 'Free plan · fictional local site', cards: [
    { title: 'Website', body: 'Not published · Free plan', action: 'Design Site', tone: 'gate' },
    { title: 'Marketing', body: 'Email, social posts, ads, referrals and Google Business Profile.', action: 'Add' },
    { title: 'Customers & Leads', body: 'Capture leads, manage relationships and organize sales.', action: 'Add' },
    { title: 'Getting Paid', body: 'Invoices, pay links, payments and receipts.', action: 'Add', tone: 'gate' },
  ] },
  inbox: { active: 'Inbox', title: 'Inbox', description: 'View and reply to messages from connected channels.', tabs: ['All conversations'], cards: [
    { title: 'Set up your Inbox', body: 'Connect with people through Inbox. Choose a contact to start a conversation.', action: 'New Message', tone: 'gate' },
    { title: 'New spam filter', body: 'View conversations marked as spam and manage automatic filtering.', action: 'View Spam' },
  ] },
  automations: { active: 'Automations', title: 'Automations', description: 'Automate emails and other workflows to save time and streamline your business.', tabs: ['Suggested for you', 'Your automations', 'Review Pending Approvals'], cards: [
    { title: 'Custom automations', body: 'Create an automation for your site or business. No code needed.', action: 'Create Automation', tone: 'gate' },
    { title: 'App automations', body: 'No results found.', action: 'Filter', tone: 'empty' },
    { title: 'Usage', body: 'Review the available automation quota.', action: 'Manage Quotas' },
  ] },
  'forms-submissions': { active: 'Customers & Leads', title: 'Forms and Submissions', description: 'Create forms, collect submissions and get the info you need.', badge: '0/4 FORMS', tabs: ['Forms', 'Submissions'], cards: [
    { title: 'Create a form', body: 'Add a form to get subscribers, capture leads or collect visitor info.', action: 'Create Website Form', tone: 'gate' },
    { title: 'Standalone form', body: 'Create a form that is shared independently.', action: 'Create Standalone Form', tone: 'gate' },
    { title: 'Plan limit', body: 'The observed plan allowed up to four forms.', action: 'Compare plans', tone: 'gate' },
  ] },
  'website-overview': { active: 'Site & Mobile App', title: 'Website Overview', description: 'Manage your website, domains, SEO and more.', badge: 'NOT PUBLISHED', cards: [
    { title: 'Website', body: 'Not published · Free plan · no business email.', action: 'Site Actions' },
    { title: 'Site Performance', body: 'Publish the site in the Editor to see speed and uptime.', action: 'Design Site', tone: 'gate' },
    { title: 'Accessibility', body: 'Scan your site to find and fix accessibility issues.', action: 'Fix Issues', tone: 'gate' },
    { title: 'Domain', body: 'A custom domain is not connected.', action: 'Connect Domain', tone: 'gate' },
  ] },
  'site-speed': { active: 'Site & Mobile App', title: 'Site Speed', description: 'Check loading metrics over the last 30 days.', tabs: ['Mobile', 'Desktop'], cards: [
    { title: 'Analyzing your site speed…', body: 'It will take a few seconds.', tone: 'empty' },
  ] },
  'uptime-security': { active: 'Site & Mobile App', title: 'Uptime & Security', description: 'Track site availability and learn how Wix provides business continuity.', badge: 'PUBLISH REQUIRED', cards: [
    { title: 'Publish your site', body: 'Uptime status appears after the site is published.', action: 'Publish site', tone: 'gate' },
  ] },
  'mobile-app': { active: 'Site & Mobile App', title: 'Mobile App', description: 'Manage your mobile presence and use tools to boost engagement.', badge: '0/3 SETUP', tabs: ['All', 'Boost app traffic', 'Engage with members'], cards: [
    { title: 'Spaces by Wix app', body: 'The site is live in the companion app with no app members yet.', action: 'View on Mobile' },
    { title: 'Edit your app', body: 'Theme color, app preferences and elements.', action: 'Edit App', tone: 'gate' },
    { title: 'Push notifications', body: 'Send deals, reminders and other notifications.', action: 'Create Notification', tone: 'gate' },
    { title: 'Email campaigns', body: 'Invite people to join through an email campaign.', action: 'Send Campaign', tone: 'gate' },
    { title: 'Own mobile app', body: 'Create an app for the App Store and Google Play.', action: 'Let’s Go', tone: 'gate' },
  ] },
  symphony: { active: 'AI Agents', title: 'Grow your business with a team of AI agents', description: 'Manage and scale your business with a personalized AI team.', cards: [
    { title: 'Smart from day one', body: 'Built on patterns from Wix businesses across industries.' },
    { title: 'Connects to your tools', body: 'Calendar, Inbox, CRM and the site can work together.', tone: 'gate' },
    { title: 'You’re always in control', body: 'Agents flag actions and require approval before acting.' },
    { title: 'Continue with Symphony', body: 'The observed screen offered web and mobile entry points.', action: 'Continue on the Web app', tone: 'gate' },
  ] },
  'design-agent': { active: 'AI Agents', title: 'What are you creating today?', description: 'Wixel is an AI design platform for social posts, images, videos and presentations.', cards: [
    { title: 'Create with AI', body: 'Promo Video · Instagram Post · Logo · Presentation', action: 'Create with AI', tone: 'gate' },
    { title: 'Generate an Image', body: 'Start an AI image workflow.', action: 'Generate an Image', tone: 'gate' },
    { title: 'Brand Kit', body: 'Manage reusable brand assets.', action: 'Brand Kit', tone: 'gate' },
  ] },
  'getting-paid': { active: 'Getting Paid', title: 'Getting Paid', description: 'Grow revenue and collect payments using the tools that suit your business.', badge: 'PAYMENT SETUP', cards: [
    { title: 'Start accepting payments', body: 'Connect a payment method before collecting money.', action: 'Connect Payment Method', tone: 'gate' },
    { title: 'Request payments', body: 'Share Pay Links or send Invoices.', action: 'New Invoice', tone: 'gate' },
    { title: 'Win more clients', body: 'Use Price Quotes, Proposals and automatic invoicing.', action: 'New Price Quote', tone: 'gate' },
    { title: 'Sell in person', body: 'Accept payments through Point of Sale.', action: 'Get Started', tone: 'gate' },
  ] },
  payments: { active: 'Sales', title: 'Payments', description: 'Keep track of payments from your customers.', badge: 'PLAN GATE', cards: [
    { title: 'Upgrade required', body: 'A Business and eCommerce plan is required to accept online payments.', action: 'Upgrade Now', tone: 'gate' },
    { title: 'Payment activity', body: 'No payment rows were visible on the observed free-plan screen.', tone: 'empty' },
  ] },
  receipts: { active: 'Sales', title: 'Receipts', description: 'Manage receipts issued to customers.', tabs: ['Receipts'], cards: [
    { title: 'No receipts yet', body: 'Once created, receipts can be managed here.', action: 'Set Up Automated Receipts', tone: 'empty' },
    { title: 'Receipt settings', body: 'Configure when receipts are sent and how they appear.', action: 'Receipt Settings', tone: 'gate' },
  ] },
  'point-of-sale': { active: 'Sales', title: 'Wix Point of Sale', description: 'Everything you sell online, now sold in person.', badge: 'SETUP REQUIRED', cards: [
    { title: 'Take payments anywhere', body: 'Cards, contactless, cash and gift cards.' },
    { title: 'One connected catalog', body: 'Products, services, inventory, customers and loyalty stay in sync.' },
    { title: 'See the whole business', body: 'Track sales, staff and cash drawers across locations.' },
    { title: 'Start selling in person', body: 'Set up hardware, Tap to Pay or a card reader.', action: 'Set Up Point of Sale', tone: 'gate' },
  ] },
  'settings-overview': { active: 'Settings', title: 'Settings', description: 'Configure finance, business solutions, site, communications and integrations.', cards: [
    { title: 'Finance & payments', body: 'Accept payments · Getting paid · Receipts · Tax', action: 'Open section' },
    { title: 'Business solutions', body: 'Checkout · Point of Sale · AI Marketing Settings', action: 'Open section' },
    { title: 'Site, domain & SEO', body: 'SEO settings · Domains · Manage plan · Business email · Performance · Members · Privacy', action: 'Open section' },
    { title: 'General', body: 'Roles & permissions · Business info · AI integrations · Mobile app · Language · Storage', action: 'Open section' },
    { title: 'Communications & notifications', body: 'Inbox · Channels · Notifications received and sent', action: 'Open section' },
    { title: 'Development & integrations', body: 'Custom code · Headless settings · Marketing integrations', action: 'Open section' },
  ] },
  'app-market': { active: 'Apps', title: 'App Market', description: 'Discover tools and extensions for your site.', cards: [
    { title: 'Turn ideas into stunning visuals with Wixel', body: 'A featured design-tool promotion was visible.', action: 'View App', tone: 'gate' },
    { title: 'Create custom solutions with Base44', body: 'A featured custom-solution promotion was visible.', action: 'View App', tone: 'gate' },
  ] },
  'setup-checklist': { active: 'Setup', title: 'Let’s set up your business', description: '1/6 completed', badge: 'FREE PLAN', cards: [
    { title: 'Update site type', body: 'Completed onboarding step.' },
    { title: 'Connect custom domain', body: 'Enter a domain and continue.', action: 'Let’s Go', tone: 'gate' },
    { title: 'Get business email', body: 'Connect a professional mailbox.', action: 'Get business email', tone: 'gate' },
    { title: 'Add project to portfolio', body: 'Create the first portfolio project.', action: 'Add project', tone: 'gate' },
    { title: 'Design your website', body: 'Open the website design workflow.', action: 'Design Site', tone: 'gate' },
    { title: 'Get found on Google', body: 'Start the SEO setup workflow.', action: 'Start SEO Setup', tone: 'gate' },
  ] },
  'quick-actions': { active: 'Home', title: 'Quick Actions', description: 'Find and start actions across installed Wix tools.', tabs: ['All categories'], cards: [
    { title: 'Digital media', body: 'Upload media · Create video · Manage files', action: 'Open action', tone: 'gate' },
    { title: 'Business tools', body: 'Invoice · Pricing Plan · Automation · Collaborator', action: 'Open action', tone: 'gate' },
    { title: 'Commerce', body: 'Product · Coupon · Booking · Event', action: 'Open action', tone: 'gate' },
    { title: 'Customers & marketing', body: 'Contact · Campaign · Lead workflow', action: 'Open action', tone: 'gate' },
  ] },
  'analytics-highlights': { active: 'Analytics', title: 'Analytics Highlights', description: 'Review site, engagement and marketing performance.', badge: 'ZERO DATA', cards: [
    { title: 'Live visitors', body: '0 visitors are on the site now.', action: 'Go to Real-time Analytics' },
    { title: 'Sessions over time', body: 'Publish the site to begin collecting data.', tone: 'empty' },
    { title: 'Engagement', body: 'Pages, duration, bounce rate, click tracking and recordings.', action: 'View Report' },
    { title: 'Marketing', body: 'Google, email, paid ads and AI visibility setup.', action: 'Connect', tone: 'gate' },
  ] },
  'ai-site-design': { active: 'Site & Mobile App', title: 'Design your site with Aria', description: 'Your prompt is ready.', cards: [
    { title: 'Portfolio prompt', body: 'Create a professional portfolio that showcases skills and creative work.', action: 'Generate Site', tone: 'gate' },
    { title: 'Create from URL', body: 'Import a source URL into the generation workflow.', action: 'Create from URL', tone: 'gate' },
    { title: 'Recommended templates', body: 'Browse alternative template-based starting points.', action: 'View Templates' },
  ] },
  'template-gallery': { active: 'Site & Mobile App', title: 'Start designing your site from a template', description: 'Portfolio templates with reversible desktop and mobile previews.', tabs: ['Desktop', 'Mobile'], cards: [
    { title: 'Graphic Designer Portfolio', body: 'Preview and edit actions were visible.', action: 'View' },
    { title: 'Designer Portfolio', body: 'Preview and edit actions were visible.', action: 'View' },
    { title: 'Creative CV', body: 'Preview and edit actions were visible.', action: 'View' },
    { title: 'Template Preview', body: 'Desktop and mobile viewport controls with Edit Site.', action: 'Edit Site', tone: 'gate' },
  ] },
  'pos-checkout': { active: 'Sales', title: 'Wix Point of Sale', description: 'Take payments in person and sync with your store.', badge: 'SETUP REQUIRED', cards: [
    { title: 'Connected catalog', body: 'Sell in person and online from one catalog.' },
    { title: 'Fast payments', body: 'Accept payments with Tap to Pay or a Wix card reader.' },
    { title: 'Live synchronization', body: 'Inventory, orders and customers sync across locations.' },
    { title: 'Start checkout', body: 'POS setup is required before a checkout can run.', action: 'Set up Point of Sale', tone: 'gate' },
  ] },
  'business-email': { active: 'Customers & Leads', title: 'Business Email', description: 'Build trust with a professional address at your custom domain.', badge: 'DOMAIN REQUIRED', cards: [
    { title: 'Professional email', body: 'Suggested addresses included info, support and name at your domain.', action: 'Connect a Domain', tone: 'gate' },
    { title: 'Google Workspace', body: 'Gmail, Docs, meetings, presentations and AI-assisted work.' },
    { title: 'Limited-time offer', body: 'The observed screen promoted 30% off select plans.', action: 'View Plans', tone: 'gate' },
  ] },
};

const loadingScreenLabels: Record<string, { active: string; title: string }> = {
  'marketing-agent': { active: 'AI Agents', title: 'Marketing Agent' },
  'portfolio-projects': { active: 'Portfolio', title: 'Portfolio Projects' },
  'portfolio-collections': { active: 'Portfolio', title: 'Portfolio Collections' },
  'portfolio-integrations': { active: 'Portfolio', title: 'Portfolio Integrations' },
  'logo-brand': { active: 'Site & Mobile App', title: 'Logo & Brand' },
  hopp: { active: 'Site & Mobile App', title: 'Hopp - Link in Bio' },
  'all-reports': { active: 'Analytics', title: 'All Reports' },
  'sales-overview': { active: 'Sales', title: 'Sales Overview' },
  catalog: { active: 'Sales', title: 'Catalog' },
};

function Guard({ children }: { children: string }) {
  return <div className={styles.guard} role="status">{children}</div>;
}

function Shell({ active, children }: { active: string; children: React.ReactNode }) {
  return <div className={styles.shell}>
    <header className={styles.topbar}><b className={styles.logo}>WIX</b><button type="button">My Demo Site⌄</button><button type="button">Explore⌄</button><span>Help⌄</span><button className={styles.upgrade} type="button">Upgrade</button><input aria-label="Search Wix" placeholder="Search…" /><button type="button">AI</button></header>
    <aside className={styles.sidebar}><button className={styles.quick} type="button">▦ Quick Actions</button><div className={styles.progress}><b>Let&apos;s set up your business</b><span>1/6 completed</span></div>{primaryNav.map(item => <button className={item === active ? styles.active : ''} type="button" key={item}>{item}<span>{['Apps','Marketing','Customers & Leads','Analytics'].includes(item) ? '›' : ''}</span></button>)}<div className={styles.sidebarBottom}><button type="button">＋ Add More Tools</button><button type="button">✎ Design Site</button></div></aside>
    <main className={styles.workspace}>{children}</main>
  </div>;
}

function EmptyChart({ label = 'No data in this period' }: { label?: string }) {
  return <div className={styles.emptyChart} role="img" aria-label={label}><div className={styles.map}>◌</div><p>{label}</p></div>;
}

function RealtimeAnalytics({ initialTab = 'recent' }: { initialTab?: 'recent' | 'live' }) {
  const [tab, setTab] = useState<'recent' | 'live'>(initialTab);
  return <Shell active="Analytics"><div className={styles.pageHead}><div><h1>Real-time Analytics</h1><p>See how visitors interact with your site in real time.</p></div></div><div className={styles.realtimeGrid}><section className={styles.card}><div className={styles.metricTabs} role="tablist"><button role="tab" aria-selected={tab === 'recent'} onClick={() => setTab('recent')}>Visitors in the last 30 minutes <b>0</b></button><button role="tab" aria-selected={tab === 'live'} onClick={() => setTab('live')}>Live visitors <b>0</b></button></div><EmptyChart label={tab === 'recent' ? 'No visitors in the last 30 minutes' : 'No live visitors'} /><div className={styles.miniStats}><span>Page views —</span><span>Traffic source —</span><span>Device · Mobile 0% · Desktop 0%</span></div></section><aside><section className={styles.card}><h2>Recent visitors</h2><h3>No visitors were active in the last 24 hours</h3><p>Session details will appear here.</p></section><section className={styles.card}><h2>Live activity</h2><h3>No activity in the last 24 hours</h3><p>Browsing and product activity will appear here.</p></section></aside></div></Shell>;
}

const presets = ['Custom', 'Today', 'Yesterday', 'Last 7 days', 'Last 14 days', 'Last 30 days', 'Last 90 days', 'Last 365 days', 'This month', 'This year'];

function DateRange({ standalone = false }: { standalone?: boolean }) {
  const [open, setOpen] = useState(true);
  const [notice, setNotice] = useState('');
  const picker = open && <div className={styles.datePopover} role="dialog" aria-label="Analytics date range"><div className={styles.presetList}>{presets.map(item => <button className={item === 'Last 30 days' ? styles.selected : ''} type="button" key={item}>{item}</button>)}</div><div className={styles.calendar}><div className={styles.calendarHead}><button type="button">‹</button><b>September 2026</b><button type="button">›</button></div><div className={styles.weekdays}>{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(day => <span key={day}>{day}</span>)}</div><div className={styles.days}>{Array.from({length:35},(_,i) => <button type="button" className={i >= 7 && i <= 29 ? styles.inRange : ''} key={i}>{(i % 30) + 1}</button>)}</div></div><footer><span>Sep 8, 2026 – Oct 7, 2026</span><button type="button" onClick={() => setOpen(false)}>Cancel</button><button className={styles.dark} type="button" onClick={() => setNotice('No analytics range was applied. This fixture stays local.')}>Apply</button></footer></div>;
  if (standalone) return <Shell active="Analytics"><div className={styles.stage}><button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>▣ Last 30 days (Sep 8 – Today)</button>{picker}{notice && <Guard>{notice}</Guard>}</div></Shell>;
  return <>{picker}{notice && <Guard>{notice}</Guard>}</>;
}

function TrafficOverview({ dateOpen = false }: { dateOpen?: boolean }) {
  const [open, setOpen] = useState(dateOpen);
  const [notice, setNotice] = useState('');
  return <Shell active="Analytics"><div className={styles.pageHead}><div><h1>Traffic Overview</h1><p>Track your site&apos;s traffic trends and get to know your visitors.</p></div></div><div className={styles.rangeWrap}><button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>▣ Last 30 days (Sep 8 – Today)</button><span>compared to previous period</span>{open && <DateRange />}</div><section className={styles.aiBar}><input aria-label="Ask a question about your stats" placeholder="Ask a question about your stats" /><button type="button" onClick={() => setNotice('No analytics question was sent.')}>Ask AI</button><button type="button" onClick={() => setNotice('No AI summary was generated.')}>Summarize your data</button></section>{notice && <Guard>{notice}</Guard>}<div className={styles.kpis}><article><span>Site sessions</span><b>0</b></article><article><span>Unique visitors</span><b>0</b></article></div><div className={styles.analyticsGrid}>{['Sessions over time','New vs returning visitors','Sessions by device','Sessions by country','Traffic insights'].map(label => <section className={styles.card} key={label}><h2>{label}</h2><EmptyChart label={label === 'Traffic insights' ? 'No insights at the moment' : 'No sessions in this period'} /><button type="button" disabled>View Report</button></section>)}</div></Shell>;
}

function SeoGeo({ helpOpen = false }: { helpOpen?: boolean }) {
  const [help, setHelp] = useState(helpOpen);
  const [notice, setNotice] = useState('');
  const tools = ['Get Your Site Ready','SEO Settings','Site Inspection','URL Redirect Manager','Site Verification','Sitemaps','Robots.txt Editor','llms.txt','NLWeb','Google Business Profile'];
  return <Shell active="Marketing"><div className={styles.pageHead}><div><h1>SEO &amp; GEO <span>(Generative Engine Optimization)</span></h1><p>Optimize this site for search engines and LLMs like ChatGPT.</p></div><div className={styles.menuAnchor}><button type="button" aria-expanded={help} onClick={() => setHelp(!help)}>Need Help?⌄</button>{help && <div className={styles.menu} role="menu">{['SEO Learning Hub','Wix Help Center','Hire an expert'].map(item => <button role="menuitem" type="button" onClick={() => setNotice(`${item} was not opened. This action remains local.`)} key={item}>{item}</button>)}</div>}</div></div>{notice && <Guard>{notice}</Guard>}<section className={styles.card}><div className={styles.cardHead}><div><h2>SEO Assistant</h2><p>Fix issues and follow recommendations to improve search and GEO performance.</p></div><button type="button" onClick={() => setNotice('The SEO task list was not opened.')}>View all tasks</button></div><div className={styles.seoTasks}><button type="button">Get your site ready</button><button type="button">4 Issues</button><button type="button">3 Recommendations</button><button type="button">6 Completed tasks</button></div></section><div className={styles.seoGrid}><section className={styles.card}><h2>Site performance on Google</h2><EmptyChart label="Connect to see clicks and impressions" /><button type="button" onClick={() => setNotice('Google was not connected.')}>Connect to Google</button></section><section className={styles.card}><h2>Gen AI Visibility</h2><p>ChatGPT — · Gemini — · Perplexity — · Claude —</p><p>0 user queries on AI in this period</p><button type="button" onClick={() => setNotice('AI Visibility was not opened.')}>Go to AI Visibility Overview</button></section></div><h2>Tools and settings</h2><div className={styles.tools}>{tools.map(tool => <button type="button" onClick={() => setNotice(`${tool} was not opened.`)} key={tool}><b>{tool}</b><span>Open tool →</span></button>)}</div></Shell>;
}

function Contacts({ menuOpen = false }: { menuOpen?: boolean }) {
  const [menu, setMenu] = useState(menuOpen);
  const [search, setSearch] = useState('');
  const [notice, setNotice] = useState('');
  const visible = useMemo(() => 'Ava Morgan'.toLowerCase().includes(search.toLowerCase()), [search]);
  return <Shell active="Customers & Leads"><div className={styles.pageHead}><div><h1>Contacts</h1><p>Manage and track your customers, leads and site members.</p></div><div className={styles.splitButton}><button type="button" onClick={() => setNotice('Contact creation is disabled in this fictional fixture.')}>Create New</button><button type="button" aria-label="Open Create New menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>⌄</button>{menu && <div className={styles.menu} role="menu">{['Manually','Import','Create with AI · BETA'].map(item => <button role="menuitem" type="button" onClick={() => setNotice(`${item} was not started. No provider request was sent.`)} key={item}>{item}</button>)}</div>}</div></div>{notice && <Guard>{notice}</Guard>}<section className={styles.card}><h2>Overview</h2><div className={styles.segmentTabs}><button type="button">Grow contacts list</button><button type="button">Track &amp; engage audiences</button></div><div className={styles.contactCards}>{['Turn site visitors into leads','Import contacts · 0','Wix Forms · 0','Wix Members Area'].map(item => <button type="button" onClick={() => setNotice(`${item} was not opened.`)} key={item}>{item}</button>)}</div></section><section className={styles.card}><div className={styles.tableTools}><button type="button">All contacts (1)⌄</button><button type="button">Manage View⌄</button><button type="button">Filter</button><input aria-label="Search contacts" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…" /><button type="button" onClick={() => setNotice('Import and export are disabled in this fictional fixture.')}>Import / Export⌄</button></div><table><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Member status</th></tr></thead><tbody>{visible && <tr><td>Ava Morgan</td><td>ava.morgan@example.invalid</td><td>—</td><td><span className={styles.badge}>SITE MEMBER</span></td></tr>}</tbody></table>{!visible && <p className={styles.emptyText}>No fictional contacts match this search.</p>}</section></Shell>;
}

function ManageApps({ drawerOpen = false }: { drawerOpen?: boolean }) {
  const [drawer, setDrawer] = useState(drawerOpen);
  const [notice, setNotice] = useState('');
  const recommendations = [['Social Media Icons','4.5'],['Social Feed','4.0'],['Store Location Map','4.2'],['Slider – Image & Video','4.1']];
  return <Shell active="Apps"><div className={styles.pageHead}><div><h1>Manage apps <span>1</span></h1><p>Manage the apps on your site or go to the App Market to add new ones.</p></div><button type="button" onClick={() => setNotice('The App Market was not opened.')}>Get More Apps</button></div>{notice && <Guard>{notice}</Guard>}<section className={styles.card}><h2>Manage apps and tools</h2><div className={styles.appRow}><span className={styles.appIcon}>▣</span><b>Wix Portfolio</b><span className={styles.warning}>Editor setup required</span><button type="button" onClick={() => setNotice('Editor setup was not started.')}>Complete Setup</button><button type="button" aria-label="More app actions" aria-expanded={drawer} onClick={() => setDrawer(!drawer)}>•••</button></div></section><h2>Recommended for you</h2><div className={styles.appCards}>{recommendations.map(([name,rating]) => <article className={styles.card} key={name}><span>Verified by Wix</span><h3>{name}</h3><p>Fictional local recommendation copy.</p><b>★ {rating}</b><button type="button" onClick={() => setNotice(`${name} was not opened.`)}>View App</button></article>)}</div>{drawer && <aside className={styles.drawer} aria-label="Wix Portfolio actions"><button className={styles.close} aria-label="Close app actions" type="button" onClick={() => setDrawer(false)}>×</button><h2>Wix Portfolio</h2><p>Showcase your work in a beautiful portfolio</p><div className={styles.warningBox}><b>Setup required</b><p>Finish setting up this app in the Editor.</p><button type="button" onClick={() => setNotice('Editor setup was not started.')}>Complete Setup</button></div><h3>Quick actions</h3>{['Open Dashboard','Open in Editor'].map(item => <button type="button" onClick={() => setNotice(`${item} was not opened.`)} key={item}>{item}</button>)}<h3>Manage</h3>{['View app info','Rate and review','Contact Customer Care','Delete app'].map(item => <button type="button" onClick={() => setNotice(`${item} was not executed. No provider request was sent.`)} key={item}>{item}</button>)}</aside>}</Shell>;
}

function PrimaryScreen({ variant }: { variant: WixVariant }) {
  const definition = primaryScreens[variant];
  const [notice, setNotice] = useState('');
  if (!definition) return null;
  return <Shell active={definition.active}>
    <div className={styles.pageHead}>
      <div><h1>{definition.title}</h1><p>{definition.description}</p></div>
      {definition.badge && <span className={styles.stateBadge}>{definition.badge}</span>}
    </div>
    {definition.tabs && <div className={styles.screenTabs} role="tablist">{definition.tabs.map((tab, index) => <button role="tab" aria-selected={index === 0} type="button" key={tab}>{tab}</button>)}</div>}
    {notice && <Guard>{notice}</Guard>}
    <div className={styles.primaryGrid}>{definition.cards.map(card => <section className={`${styles.card} ${card.tone === 'gate' ? styles.gateCard : ''}`} key={card.title}>
      <h2>{card.title}</h2>
      <p>{card.body}</p>
      {card.action && <button type="button" onClick={() => setNotice(`${card.action} was not executed. This reconstructed fixture sends no Wix request.`)}>{card.action}</button>}
    </section>)}</div>
  </Shell>;
}

function LoadingShell({ screen }: { screen?: string }) {
  const definition = loadingScreenLabels[screen || ''] || { active: 'Home', title: 'Dashboard screen' };
  return <Shell active={definition.active}><div className={styles.pageHead}><div><h1>{definition.title}</h1><p>Primary route shell observed before content resolved.</p></div><span className={styles.stateBadge}>LOADING STATE</span></div><section className={styles.card}><h2>Loading your dashboard…</h2><p>The authenticated provider route was reached, but no stable primary content was exposed during the bounded observation window.</p><Guard>No behavior beyond this loading state is claimed by the fixture.</Guard></section></Shell>;
}

export function WixPreview({ variant, initialState, disabled = false }: WixPreviewProps) {
  const content = variant === 'realtime-analytics' ? <RealtimeAnalytics initialTab={initialState === 'live' ? 'live' : 'recent'} />
    : variant === 'traffic-overview' ? <TrafficOverview dateOpen={initialState === 'date-open'} />
    : variant === 'analytics-date-range' ? <DateRange standalone />
    : variant === 'seo-geo-overview' ? <SeoGeo helpOpen={initialState === 'help-open'} />
    : variant === 'seo-help-menu' ? <SeoGeo helpOpen />
    : variant === 'contacts-workspace' ? <Contacts menuOpen={initialState === 'create-open'} />
    : variant === 'contact-create-menu' ? <Contacts menuOpen />
    : variant === 'manage-apps' ? <ManageApps drawerOpen={initialState === 'drawer-open'} />
    : variant === 'installed-app-actions' ? <ManageApps drawerOpen />
    : variant === 'loading-shell' ? <LoadingShell screen={initialState} />
    : <PrimaryScreen variant={variant} />;
  return <div className={disabled ? styles.disabled : ''} aria-disabled={disabled || undefined}>{content}</div>;
}

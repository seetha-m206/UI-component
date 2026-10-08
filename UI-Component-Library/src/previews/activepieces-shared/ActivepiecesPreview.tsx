import { useState } from 'react';
import styles from './activepieces.module.css';
import type { IndividualActivepiecesVariant } from './individualVariants';

type BaseActivepiecesVariant =
  | 'application-shell'
  | 'chat-onboarding'
  | 'mcp-connect'
  | 'mcp-tool-permissions'
  | 'mcp-connections-empty'
  | 'mcp-activity-empty'
  | 'agents-onboarding'
  | 'template-catalogue'
  | 'human-approval-template'
  | 'impact-analytics'
  | 'impact-details-empty'
  | 'project-automation-start'
  | 'runs-empty'
  | 'connections-empty'
  | 'variables-empty'
  | 'platform-admin-navigation'
  | 'projects-catalogue'
  | 'users-table'
  | 'role-access-gate'
  | 'pieces-catalogue'
  | 'sso-plan-gate'
  | 'workers-health'
  | 'system-health'
  | 'trigger-health'
  | 'general-settings'
  | 'billing-subscription'
  | 'usage-dashboard'
  | 'account-settings'
  | 'run-date-range-picker'
  | 'run-queue-status-dialog'
  | 'template-workflow-canvas'
  | 'flow-builder-boundary'
  | 'table-builder-boundary'
  | 'approval-boundary';

export type ActivepiecesVariant = BaseActivepiecesVariant | IndividualActivepiecesVariant;

export interface ActivepiecesPreviewProps {
  variant: ActivepiecesVariant;
  disabled?: boolean;
}

type Spec = {
  eyebrow: string;
  title: string;
  description: string;
  kind: 'cards' | 'empty' | 'table' | 'metrics' | 'settings' | 'gate';
  items: string[];
  action?: string;
};

const individualSpecs = {
  'application-command-palette': { eyebrow: 'Global search', title: 'Find anything', description: 'A grouped command palette keeps recent and suggested destinations close.', kind: 'cards', items: ['Today', 'Suggested', 'Projects', 'Settings'] },
  'project-tabs': { eyebrow: 'Project navigation', title: 'Project workspace tabs', description: 'Automations, Runs, Connections and Variables stay scoped to one project.', kind: 'cards', items: ['Automations', 'Runs', 'Connections', 'Variables'] },
  'project-header-actions': { eyebrow: 'Project header', title: 'Members and project actions', description: 'Member management and project settings remain distinct actions.', kind: 'cards', items: ['Add members', 'Project menu'] },
  'project-creation-card': { eyebrow: 'Create', title: 'Choose what to build', description: 'One reusable card pattern supports Flow, Table and Agent creation.', kind: 'cards', items: ['Flow', 'Table', 'Agent'], action: 'Start from scratch' },
  'flow-import-dialog': { eyebrow: 'Import flow', title: 'Import a flow file', description: 'File selection and destination folder precede an explicit import boundary.', kind: 'settings', items: ['Flow file', 'Destination folder'], action: 'Import' },
  'project-settings-navigation': { eyebrow: 'Project settings', title: 'Settings sections', description: 'Project, Alert Emails, Pieces and Environment remain independently navigable.', kind: 'cards', items: ['Project', 'Alert Emails', 'Pieces', 'Environment'] },
  'project-alert-email-switch': { eyebrow: 'Alert emails', title: 'Personal alert delivery', description: 'A single preference controls whether personal alert emails are delivered.', kind: 'settings', items: ['Personal alert emails'] },
  'project-environment-gate': { eyebrow: 'Environment', title: 'Environments require an upgrade', description: 'The unavailable environment capability is stated before the entitlement boundary.', kind: 'gate', items: ['Development', 'Staging', 'Production'], action: 'Upgrade' },
  'mcp-tab-navigation': { eyebrow: 'MCP', title: 'MCP workspace tabs', description: 'Connect, Tools, Connections and Activity separate setup, authority and evidence.', kind: 'cards', items: ['Connect', 'Tools', 'Connections', 'Activity'] },
  'mcp-endpoint-copy-control': { eyebrow: 'MCP endpoint', title: 'Project-scoped connection link', description: 'A masked fictional endpoint and copy control preserve the credential boundary.', kind: 'settings', items: ['Endpoint ·••••••••'], action: 'Copy' },
  'mcp-client-card': { eyebrow: 'MCP clients', title: 'Set up a client', description: 'Client cards open instructions without authorizing anything.', kind: 'cards', items: ['Terminal', 'Editor', 'Chat app'] },
  'mcp-client-browser': { eyebrow: 'All clients', title: 'Choose your MCP client', description: 'Search and grouped categories cover terminal, editors, chat apps and generic clients.', kind: 'cards', items: ['Terminal', 'Editors', 'Chat Apps', 'Anything Else'] },
  'mcp-client-instructions': { eyebrow: 'Client setup', title: 'Install, authenticate, check', description: 'A fictional command block and copy controls precede three setup steps.', kind: 'settings', items: ['Install command', 'Authentication', 'Connection check'], action: 'Copy config' },
  'mcp-built-in-pieces-tabs': { eyebrow: 'MCP tools', title: 'Built-in and piece tools', description: 'Tool sources are separated before permissions are reviewed.', kind: 'cards', items: ['Built-in', 'Pieces'] },
  'mcp-project-scope-selector': { eyebrow: 'Project reach', title: 'Choose MCP project scope', description: 'The selected project defines the client reach boundary.', kind: 'settings', items: ['Project · Northstar Lab'] },
  'mcp-tool-inventory-dialog': { eyebrow: 'View tools', title: '19 built-in view tools', description: 'Tool name, identifier and description are enumerated in a read-only dialog.', kind: 'table', items: ['Tool', 'Identifier', 'Description'] },
  'mcp-piece-permission-card': { eyebrow: 'Piece permissions', title: 'Mail workspace', description: 'Action and destructive counts summarize consequence before expansion.', kind: 'metrics', items: ['Actions · 18', 'Destructive · 3'] },
  'mcp-piece-action-disclosure': { eyebrow: 'Piece actions', title: 'Grouped action permissions', description: 'Read, Search and Write group actions by consequence.', kind: 'cards', items: ['Read', 'Search', 'Write'] },
  'agent-prompt-composer': { eyebrow: 'Agents', title: 'What should your agent do?', description: 'A plain-language composer starts agent creation without hiding the provider-write boundary.', kind: 'settings', items: ['Agent task'], action: 'Create agent' },
  'agent-starter-card': { eyebrow: 'Popular starting point', title: 'Research analyst', description: 'Reusable starter cards present one role-oriented outcome.', kind: 'cards', items: ['Research analyst', 'Support triage', 'Lead enrichment'] },
  'template-detail-header': { eyebrow: 'Template detail', title: 'Human-approved outreach', description: 'Back, share, use, setup and value controls frame the template.', kind: 'cards', items: ['All Templates', 'Share', 'Use Template', 'Setup guide'] },
  'template-used-pieces-list': { eyebrow: 'Used pieces', title: 'Connected app summary', description: 'A compact list identifies the pieces referenced by a template.', kind: 'cards', items: ['CRM', 'AI', 'Chat', 'Email'] },
  'template-workflow-step-node': { eyebrow: 'Workflow node', title: 'Summarize the lead', description: 'A read-only node exposes type, piece and action label.', kind: 'cards', items: ['Action', 'AI piece', 'Summarize record'] },
  'template-workflow-branch-connector': { eyebrow: 'Router', title: 'Two visible outcomes', description: 'Branch connectors communicate approved and needs-review paths.', kind: 'cards', items: ['Approved', 'Needs review'] },
  'template-canvas-controls': { eyebrow: 'Canvas controls', title: 'Navigate the workflow', description: 'Zoom and viewport controls remain separate from step editing.', kind: 'cards', items: ['Zoom in', 'Zoom out', 'Fit view'] },
  'impact-filter-controls': { eyebrow: 'Impact filters', title: 'Scope automation impact', description: 'Date and project selectors determine the visible analytics window.', kind: 'settings', items: ['Date range', 'Project'] },
  'impact-freshness-indicator': { eyebrow: 'Data freshness', title: 'Refreshes daily', description: 'A stable fictional freshness label avoids retaining a live timestamp.', kind: 'metrics', items: ['Last update · Recent', 'Cadence · Daily'] },
  'impact-metric-card': { eyebrow: 'Impact metric', title: 'Time saved', description: 'A single KPI card supports unavailable, zero and populated values.', kind: 'metrics', items: ['Time saved · N/A'] },
  'impact-empty-chart': { eyebrow: 'Impact trend', title: 'No automation data yet', description: 'The chart frame remains legible without inventing a trend.', kind: 'empty', items: ['Time axis', 'Value axis'] },
  'impact-details-filter-bar': { eyebrow: 'Impact details', title: 'Filter flow impact', description: 'Flow, owner and time-saved controls precede the detail table.', kind: 'settings', items: ['Flow', 'Owner', 'Time saved'] },
  'sortable-table-header': { eyebrow: 'Data table', title: 'Sortable column headers', description: 'Column labels expose a stable sorting affordance.', kind: 'table', items: ['Name ↕', 'Owner ↕', 'Created ↕'] },
  'disabled-download-action': { eyebrow: 'Export', title: 'Download unavailable', description: 'The export boundary remains visible when no rows are available.', kind: 'gate', items: ['No rows to export'], action: 'Download' },
  'automatic-personal-project-switch': { eyebrow: 'Project policy', title: 'Automatic personal projects', description: 'The platform policy is visible without changing its state.', kind: 'settings', items: ['Create a personal project for each member'] },
  'platform-project-filter-bar': { eyebrow: 'Projects', title: 'Filter platform projects', description: 'Name and type filters remain separate from project creation.', kind: 'settings', items: ['Name', 'Type'] },
  'platform-members-table': { eyebrow: 'Members', title: 'Platform member inventory', description: 'Identity values are fictional while role, activity and status structure is preserved.', kind: 'table', items: ['Identity', 'Name', 'Role', 'Created', 'Last active', 'Status'] },
  'platform-piece-management-toolbar': { eyebrow: 'Pieces', title: 'Manage the piece catalogue', description: 'Search, selector, report and installation actions share one toolbar.', kind: 'cards', items: ['Piece name', 'Customize selector', 'Download report', 'Install piece'] },
  'platform-piece-row': { eyebrow: 'Piece row', title: 'Mail workspace', description: 'Icon, display name, package and version identify one catalogue row.', kind: 'table', items: ['Name', 'Package', 'Version'] },
  'platform-connections-table': { eyebrow: 'Platform connections', title: 'Connections across projects', description: 'Global inventory structure is preserved without credential or identity values.', kind: 'table', items: ['Name', 'Status', 'Project', 'Scope', 'Owner', 'Connected at'] },
  'api-keys-empty-state': { eyebrow: 'API keys', title: 'No API keys yet', description: 'The empty credential inventory retains a clearly bounded creation action.', kind: 'empty', items: ['Name', 'Created', 'Last used'], action: 'New API key' },
  'template-library-plan-gate': { eyebrow: 'Templates', title: 'Unlock Templates', description: 'Platform template management requires Enterprise.', kind: 'gate', items: ['Template governance'], action: 'Upgrade to Enterprise' },
  'ai-center-plan-gate': { eyebrow: 'AI Center', title: 'Unlock AI Center', description: 'Central AI administration requires Plus.', kind: 'gate', items: ['AI providers', 'Models'], action: 'Upgrade to Plus' },
  'secret-manager-plan-gate': { eyebrow: 'Secret managers', title: 'Enable Secret Managers', description: 'External secret management requires Enterprise.', kind: 'gate', items: ['Secret providers'], action: 'Upgrade to Enterprise' },
  'audit-log-plan-gate': { eyebrow: 'Audit logs', title: 'Unlock Audit Logs', description: 'Platform audit events require Enterprise.', kind: 'gate', items: ['Audit events'], action: 'Upgrade to Enterprise' },
  'embedding-plan-gate': { eyebrow: 'Embedding', title: 'Unlock Embedding Through JS SDK', description: 'JavaScript SDK embedding requires Enterprise.', kind: 'gate', items: ['SDK configuration'], action: 'Upgrade to Enterprise' },
  'global-connections-plan-gate': { eyebrow: 'Global connections', title: 'Enable Global Connections', description: 'Cross-project connection scope requires Team.', kind: 'gate', items: ['Shared connection scope'], action: 'Upgrade to Team' },
  'event-streaming-plan-gate': { eyebrow: 'Event streaming', title: 'Unlock Event Streaming', description: 'OTLP, webhook and flow destinations require Enterprise.', kind: 'gate', items: ['OTLP', 'Webhook', 'Flow'], action: 'Upgrade to Enterprise' },
  'runs-health-dashboard': { eyebrow: 'Health · Runs', title: 'Monthly job health', description: 'Completion, success rate, outcomes and internal-error impact share one view.', kind: 'metrics', items: ['Jobs done · 0', 'Success rate · —', 'Internal errors · 0'] },
  'queue-health-dashboard': { eyebrow: 'Health · Queue', title: 'Queue health', description: 'Running, queued and stuck-job signals remain independently visible.', kind: 'metrics', items: ['Running · 0', 'Queued · 0', 'Stuck jobs · 0'] },
  'dedicated-workers-upsell': { eyebrow: 'Workers', title: 'Dedicated worker capacity', description: 'The upgrade path is separated from shared worker monitoring.', kind: 'gate', items: ['Dedicated workers'], action: 'Upgrade' },
  'worker-health-card': { eyebrow: 'Shared worker', title: 'Worker online', description: 'Pool type, status, disclosures, resources and freshness share one card.', kind: 'metrics', items: ['Status · Online', 'Version · Current', 'Freshness · Recent'] },
  'worker-resource-meter': { eyebrow: 'Worker resources', title: 'Runtime capacity', description: 'Fictional CPU, RAM and disk values preserve the meter pattern.', kind: 'metrics', items: ['CPU · 24%', 'RAM · 38%', 'Disk · 42%'] },
  'branding-asset-fields': { eyebrow: 'Brand assets', title: 'Logo, icon and favicon', description: 'One grouped field pattern captures platform asset URLs.', kind: 'settings', items: ['Logo URL', 'Icon URL', 'Favicon URL'] },
  'semantic-color-row': { eyebrow: 'Semantic color', title: 'Primary color token', description: 'Token name, value, reset and picker controls form one reusable row.', kind: 'settings', items: ['Primary · #6E56CF', 'Reset', 'Color picker'] },
  'settings-save-bar': { eyebrow: 'Settings actions', title: 'Review before saving', description: 'Cancel and Save are paired at the end of settings forms.', kind: 'cards', items: ['Cancel', 'Save'] },
  'health-requirement-card': { eyebrow: 'Runtime requirements', title: 'App requirements', description: 'Disk, RAM and CPU checks remain grouped by runtime layer.', kind: 'metrics', items: ['Disk · Passed', 'RAM · Passed', 'CPU · Passed'] },
  'billing-plan-summary': { eyebrow: 'Billing', title: 'Current plan · Free', description: 'Plan identity and available plan actions remain separate from credit allowance.', kind: 'metrics', items: ['Plan · Free', 'Status · Active'], action: 'Explore plans' },
  'trial-key-entry': { eyebrow: 'Trial key', title: 'Activate a trial', description: 'A key input and activation action create a clear entitlement boundary.', kind: 'settings', items: ['Trial key'], action: 'Activate' },
  'usage-limit-card': { eyebrow: 'Plan limit', title: 'Credits', description: 'Used, limit and progress context fit one reusable resource card.', kind: 'metrics', items: ['Used · 0', 'Limit · 1,000', 'Progress · 0%'] },
  'usage-period-selector': { eyebrow: 'Usage period', title: 'Reporting window', description: 'A standalone selector changes only the visible usage period.', kind: 'settings', items: ['Period · Current month'] },
  'project-usage-table': { eyebrow: 'Project usage', title: 'No project usage yet', description: 'Project attribution remains structured without retaining project identifiers.', kind: 'table', items: ['Project', 'Credits used', 'Share'] },
} as const satisfies Record<IndividualActivepiecesVariant, Spec>;

const specs: Record<ActivepiecesVariant, Spec> = {
  'application-shell': { eyebrow: 'Workspace', title: 'Automation command center', description: 'Chat, MCP, Agents, Explore and Impact share one persistent project-aware shell.', kind: 'cards', items: ['Chat', 'MCP', 'Agents', 'Explore', 'Impact', 'Platform Admin'] },
  'chat-onboarding': { eyebrow: 'New chat', title: 'Who am I teaming up with?', description: 'A role and company prompt personalizes plain-language automation ideas.', kind: 'settings', items: ['Role', 'Company', 'Describe the work you want gone'], action: 'Let’s go' },
  'mcp-connect': { eyebrow: 'MCP · Connect', title: 'One link for every AI client', description: 'A project-scoped endpoint is paired with setup paths and the available piece catalogue.', kind: 'cards', items: ['Copy link', 'Claude Code', 'Cursor', 'Claude', 'See all clients'], action: 'Copy link' },
  'mcp-tool-permissions': { eyebrow: 'MCP · Tools', title: 'Tool permission groups', description: 'View is always on while editing, publish/run and delete are independently controlled.', kind: 'settings', items: ['View · 19 tools · always on', 'Edit flows · 12 tools', 'Publish and run · 10 tools', 'Delete · 4 tools'] },
  'mcp-connections-empty': { eyebrow: 'MCP · Connections', title: 'Nothing has connected yet', description: 'Connected clients appear with the project scope they can reach.', kind: 'empty', items: ['Client', 'Reach', 'Last connected'], action: 'Set it up in your client' },
  'mcp-activity-empty': { eyebrow: 'MCP · Activity', title: 'Nothing has run yet', description: 'Activity stays distinct from connection state so sign-in does not imply tool use.', kind: 'empty', items: ['Client', 'Tool', 'Result'], action: 'See who is connected' },
  'agents-onboarding': { eyebrow: 'Agents', title: 'Create your first agent', description: 'Instructions and connected apps are introduced through role-based starting points.', kind: 'cards', items: ['Research analyst', 'Support triage', 'Lead enrichment', 'SEO writer'], action: 'Start from scratch' },
  'template-catalogue': { eyebrow: 'Explore', title: 'Templates for everyday work', description: 'Search, function categories, app badges and estimated annual value organize the catalogue.', kind: 'cards', items: ['Daily briefing', 'Sync databases', 'Customer replies', 'AI outreach'], action: 'Start from scratch' },
  'human-approval-template': { eyebrow: 'Template', title: 'Human-approved outreach', description: 'AI prepares context, a person approves in chat, and delivery follows only after approval.', kind: 'cards', items: ['CRM lead', 'AI summary', 'Approval request', 'Email delivery'], action: 'Use template' },
  'impact-analytics': { eyebrow: 'Impact · Analytics', title: 'Automation impact', description: 'Time saved, active flows, active users and run trends share one date-filtered dashboard.', kind: 'metrics', items: ['Time saved · N/A', 'Active flows · 0', 'Active users · 1', 'Automation runs · 0'] },
  'impact-details-empty': { eyebrow: 'Impact · Details', title: 'No flows found', description: 'A sortable details table exposes flow owner, time saved and project columns.', kind: 'table', items: ['Flow name', 'Owner', 'Time saved per run', 'Total time saved', 'Project'] },
  'project-automation-start': { eyebrow: 'Personal project', title: 'Get started with automation', description: 'Flow, table and agent creation are separate project entry cards.', kind: 'cards', items: ['Build a Flow', 'Create a Table', 'Build an Agent'], action: 'Start from scratch' },
  'runs-empty': { eyebrow: 'Project · Runs', title: 'No flow runs found', description: 'Flow, status, error and date filters sit above the empty execution table.', kind: 'table', items: ['Flow', 'Status', 'Started at', 'Duration', 'Failure'] },
  'connections-empty': { eyebrow: 'Project · Connections', title: 'No connections found', description: 'Connection inventory separates status, piece, owner and replacement controls.', kind: 'table', items: ['Name', 'Status', 'Connected at', 'Flows', 'Owner'], action: 'New connection' },
  'variables-empty': { eyebrow: 'Project · Variables', title: 'No variables yet', description: 'Variables are presented as reusable values referenced from step inputs.', kind: 'table', items: ['Name', 'Last updated', 'Owner'], action: 'New variable' },
  'platform-admin-navigation': { eyebrow: 'Platform admin', title: 'Admin information architecture', description: 'Platform, catalogue, security, developer, operations and account settings form a dense secondary shell.', kind: 'cards', items: ['Projects & Users', 'Pieces & Templates', 'Security', 'Developers', 'Operations', 'Account'] },
  'projects-catalogue': { eyebrow: 'Platform · Projects', title: 'Manage automation projects', description: 'Personal-project automation, type filters and activity columns frame an empty team-project list.', kind: 'table', items: ['Name', 'Active users', 'Active flows', 'Created'], action: 'New project' },
  'users-table': { eyebrow: 'Platform · Users', title: 'Member management', description: 'Identity, role, creation time, activity and status are visible without opening member actions.', kind: 'table', items: ['Identity', 'Name', 'Role', 'Created', 'Last active', 'Status'], action: 'Invite' },
  'role-access-gate': { eyebrow: 'Roles & access', title: 'Custom roles require Team', description: 'Project and platform roles preview permission totals before the plan upgrade boundary.', kind: 'gate', items: ['Project roles', 'Platform roles', 'Permission totals'], action: 'Upgrade to Team' },
  'pieces-catalogue': { eyebrow: 'Catalogue · Pieces', title: 'Available integration pieces', description: 'Piece name, package and version are browseable while visibility changes remain plan-gated.', kind: 'table', items: ['Name', 'Package name', 'Version'], action: 'Install piece' },
  'sso-plan-gate': { eyebrow: 'Security · SSO', title: 'Single sign-on controls', description: 'Allowed domains, Google, SAML and email login appear before the Team plan boundary.', kind: 'gate', items: ['Allowed domains', 'Google SSO', 'SAML 2.0', 'Email login'], action: 'Upgrade to Team' },
  'workers-health': { eyebrow: 'Operations · Workers', title: 'Shared worker health', description: 'Worker cards combine pool type, online state, CPU, RAM, disk and version signals.', kind: 'metrics', items: ['Shared · online', 'CPU · healthy', 'RAM · healthy', 'Disk · healthy'] },
  'system-health': { eyebrow: 'Operations · Health', title: 'Platform component health', description: 'App and worker requirements are checked independently with daily job health below.', kind: 'metrics', items: ['App disk · Passed', 'App RAM · Passed', 'App CPU · Passed', 'Worker RAM · Passed', 'Worker CPU · Passed'] },
  'trigger-health': { eyebrow: 'Operations · Triggers', title: 'Trigger health status', description: 'Piece-level totals and rolling 24-hour, 7-day and 14-day result windows support operations review.', kind: 'table', items: ['Piece', 'Total runs', 'Last result', '24H', '7D', '14D'] },
  'general-settings': { eyebrow: 'Account · General', title: 'Branding and platform settings', description: 'Platform name, asset URLs and semantic colors sit above a separated danger zone.', kind: 'settings', items: ['Platform name', 'Logo', 'Icon', 'Favicon', 'Primary', 'Danger', 'Warning', 'Success'], action: 'Save' },
  'billing-subscription': { eyebrow: 'Billing', title: 'Free plan and credits', description: 'Current plan, included credits, remaining balance and trial-key activation are separate blocks.', kind: 'metrics', items: ['Current plan · Free', 'Included credits · 1,000', 'Remaining · 1,000', 'Trial keys'], action: 'Explore plans' },
  'usage-dashboard': { eyebrow: 'Usage', title: 'Workspace plan limits', description: 'Credits, users and team projects show used, limit and progress before project attribution.', kind: 'metrics', items: ['Credits · 0 / 1,000', 'Users · 1 / 5', 'Team projects · 0 / 0'] },
  'account-settings': { eyebrow: 'Account settings', title: 'Personal display preferences', description: 'Profile identity is paired with theme and language selectors in a compact modal.', kind: 'settings', items: ['Theme · Light', 'Language · English', 'Translation help'] },
  'run-date-range-picker': { eyebrow: 'Project · Runs', title: 'Run date range', description: 'A rolling calendar range filters the execution table without changing provider records.', kind: 'settings', items: ['Previous month', 'Selected 7-day range', 'Next month'] },
  'run-queue-status-dialog': { eyebrow: 'Current queue status', title: 'No runs in the queue', description: 'Queue monitoring is available independently from populated execution history.', kind: 'metrics', items: ['Total runs · 0', 'Queued · 0', 'Running · 0'] },
  'template-workflow-canvas': { eyebrow: 'Template · Read-only canvas', title: 'Human-approved outreach topology', description: 'A disabled canvas shows a trigger, enrichment, AI summary, approval and two router outcomes.', kind: 'cards', items: ['Salesforce trigger', 'Find lead', 'AI summary', 'Slack approval', 'Router', 'Send or draft email'], action: 'Use template' },
  'flow-builder-boundary': { eyebrow: 'Needs verification', title: 'Editable flow builder and testing', description: 'Template topology is observed, but editable field mapping, test output, error handling and publish behavior remain unavailable in the empty workspace.', kind: 'gate', items: ['Field mapping', 'Test step', 'Test output', 'Error state', 'Publish flow'], action: 'Provider fixture required' },
  'table-builder-boundary': { eyebrow: 'Needs verification', title: 'Table schema and records', description: 'Creation, import, fields, records, filters and destructive table actions remain unobserved.', kind: 'gate', items: ['Create table', 'Import', 'Fields', 'Records', 'Delete'], action: 'Provider fixture required' },
  'approval-boundary': { eyebrow: 'Needs verification', title: 'Human approval execution', description: 'Template copy established an approval step, but request, approve, reject, timeout and resume states were not exercised.', kind: 'gate', items: ['Request', 'Approve', 'Reject', 'Timeout', 'Resume'], action: 'Provider fixture required' },
  ...individualSpecs,
};

function Content({ spec }: { spec: Spec }) {
  const [notice, setNotice] = useState('');
  if (spec.kind === 'empty' || spec.kind === 'gate') {
    return <section className={styles.empty}><span className={styles.orb}>{spec.kind === 'gate' ? '◇' : '○'}</span><h2>{spec.title}</h2><p>{spec.description}</p><div className={styles.chips}>{spec.items.map((item) => <span key={item}>{item}</span>)}</div>{spec.action && <button type="button" disabled>{spec.action}</button>}</section>;
  }
  if (spec.kind === 'metrics') {
    return <section className={styles.content}><header><small>{spec.eyebrow}</small><h2>{spec.title}</h2><p>{spec.description}</p></header><div className={styles.metrics}>{spec.items.map((item) => { const [label, value='—'] = item.split(' · '); return <article key={item}><span>{label}</span><b>{value}</b><i /></article>; })}</div>{spec.action && <button type="button" disabled>{spec.action}</button>}</section>;
  }
  if (spec.kind === 'table') {
    return <section className={styles.content}><header><small>{spec.eyebrow}</small><h2>{spec.title}</h2><p>{spec.description}</p></header><div className={styles.toolbar}><button onClick={() => setNotice('Fictional filter opened locally.')} type="button">Filter</button>{spec.action && <button type="button" disabled>{spec.action}</button>}</div><div className={styles.table} role="table"><div role="row">{spec.items.map((item) => <b role="columnheader" key={item}>{item}</b>)}</div><p>No fictional records</p></div>{notice && <p className={styles.notice} role="status">{notice}</p>}</section>;
  }
  if (spec.kind === 'settings') {
    return <section className={styles.content}><header><small>{spec.eyebrow}</small><h2>{spec.title}</h2><p>{spec.description}</p></header><div className={styles.settings}>{spec.items.map((item, index) => <label key={item}><span>{item}</span><input aria-label={item} value={index ? 'Fictional value' : 'Northstar'} readOnly /></label>)}</div>{spec.action && <button type="button" disabled>{spec.action}</button>}</section>;
  }
  return <section className={styles.content}><header><small>{spec.eyebrow}</small><h2>{spec.title}</h2><p>{spec.description}</p></header><div className={styles.cards}>{spec.items.map((item) => <button type="button" key={item} onClick={() => setNotice(`${item} opened only in this fictional fixture.`)}><span>◆</span><b>{item}</b><small>Local preview</small></button>)}</div>{spec.action && <button type="button" disabled>{spec.action}</button>}{notice && <p className={styles.notice} role="status">{notice}</p>}</section>;
}

export function ActivepiecesPreview({ variant, disabled = false }: ActivepiecesPreviewProps) {
  const spec = specs[variant];
  return (
    <div className={styles.frame} data-disabled={disabled || undefined}>
      <aside><div className={styles.brand}>AP</div><nav aria-label="Fictional Activepieces navigation">{['Chat', 'MCP', 'Agents', 'Explore', 'Impact'].map((item) => <button type="button" key={item}>{item}</button>)}</nav><div className={styles.project}><small>PROJECT</small><b>Northstar Lab</b></div><div className={styles.credit}><b>1,000 credits</b><span>0% used</span><i /></div></aside>
      <main><div className={styles.topbar}><span>Northstar Lab</span><div><button type="button">⌕</button><button type="button">?</button><button type="button">NL</button></div></div><Content spec={spec} /><p className={styles.boundary}>Fictional local reconstruction. No Activepieces request is sent.</p></main>
    </div>
  );
}

import type { PreviewConfig, PreviewRegistry } from '../types';
import { ActivepiecesPreview, type ActivepiecesVariant } from './ActivepiecesPreview';
import { activepiecesIndividualVariants } from './individualVariants';

const config: PreviewConfig = {
  viewports: [{ id: 'desktop', label: 'Desktop', width: 1180 }, { id: 'narrow', label: 'Narrow', width: 390 }],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

export const activepiecesEntries: Array<[string, ActivepiecesVariant, string]> = [
  ['activepieces-application-shell','application-shell','Authenticated application shell'],
  ['activepieces-chat-onboarding','chat-onboarding','Plain-language chat onboarding'],
  ['activepieces-mcp-connect','mcp-connect','MCP connection setup'],
  ['activepieces-mcp-tool-permissions','mcp-tool-permissions','MCP tool permission groups'],
  ['activepieces-mcp-connections-empty','mcp-connections-empty','MCP clients empty state'],
  ['activepieces-mcp-activity-empty','mcp-activity-empty','MCP activity empty state'],
  ['activepieces-agents-onboarding','agents-onboarding','Agent creation onboarding'],
  ['activepieces-template-catalogue','template-catalogue','Automation template catalogue'],
  ['activepieces-human-approval-template','human-approval-template','Human approval template pattern'],
  ['activepieces-impact-analytics','impact-analytics','Automation impact analytics'],
  ['activepieces-impact-details-empty','impact-details-empty','Impact details empty state'],
  ['activepieces-project-automation-start','project-automation-start','Project automation start screen'],
  ['activepieces-runs-empty','runs-empty','Flow runs empty state'],
  ['activepieces-connections-empty','connections-empty','Project connections empty state'],
  ['activepieces-variables-empty','variables-empty','Project variables empty state'],
  ['activepieces-platform-admin-navigation','platform-admin-navigation','Platform administration navigation'],
  ['activepieces-projects-catalogue','projects-catalogue','Team projects catalogue'],
  ['activepieces-users-table','users-table','Platform users table'],
  ['activepieces-role-access-gate','role-access-gate','Custom roles plan gate'],
  ['activepieces-pieces-catalogue','pieces-catalogue','Pieces catalogue'],
  ['activepieces-sso-plan-gate','sso-plan-gate','Single sign-on plan gate'],
  ['activepieces-workers-health','workers-health','Worker pool health cards'],
  ['activepieces-system-health','system-health','Platform system health'],
  ['activepieces-trigger-health','trigger-health','Trigger health table'],
  ['activepieces-general-settings','general-settings','General platform settings'],
  ['activepieces-billing-subscription','billing-subscription','Billing and subscription'],
  ['activepieces-usage-dashboard','usage-dashboard','Workspace usage dashboard'],
  ['activepieces-account-settings','account-settings','Personal account settings'],
  ['activepieces-template-search-filters','template-catalogue','Template search and category filters'],
  ['activepieces-project-create-actions','project-automation-start','Flow, table and agent creation actions'],
  ['activepieces-run-filter-bar','runs-empty','Run history filter action bar'],
  ['activepieces-run-date-range-picker','run-date-range-picker','Run history date range picker'],
  ['activepieces-run-queue-status-dialog','run-queue-status-dialog','Current run queue status dialog'],
  ['activepieces-connection-filter-bar','connections-empty','Connection filters and new-connection action'],
  ['activepieces-mcp-tool-group-switch','mcp-tool-permissions','MCP permission group switch'],
  ['activepieces-plan-upgrade-badge','role-access-gate','Plan-gated navigation badge and upgrade action'],
  ['activepieces-credit-progress-meter','billing-subscription','Credit allowance progress meter'],
  ['activepieces-empty-table-pagination','impact-details-empty','Empty-table pagination controls'],
  ['activepieces-danger-zone-action','general-settings','Separated destructive platform action'],
  ['activepieces-preference-selectors','account-settings','Theme and language selectors'],
  ['activepieces-template-workflow-canvas','template-workflow-canvas','Read-only template workflow topology'],
  ['activepieces-flow-builder-boundary','flow-builder-boundary','Unobserved flow builder boundary'],
  ['activepieces-table-builder-boundary','table-builder-boundary','Unobserved table builder boundary'],
  ['activepieces-approval-boundary','approval-boundary','Unobserved human approval execution boundary'],
  ...activepiecesIndividualVariants.map((variant) => [
    `activepieces-${variant}`,
    variant,
    variant.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join(' '),
  ] as [string, ActivepiecesVariant, string]),
];

export const activepiecesIds = activepiecesEntries.map(([id]) => id);
export const activepiecesPreviews: PreviewRegistry = Object.fromEntries(activepiecesEntries.map(([id,variant,description]) => [id, {
  type: 'reconstructed' as const,
  Component: ActivepiecesPreview,
  label: 'Authenticated-source reconstruction',
  runtimeVerified: true,
  evidence: 'Authenticated read-only Activepieces Cloud observation on 2026-10-08. Account names, email, platform and project identifiers, endpoint values, worker addresses and live timestamps are excluded. No flow, table, agent, connection, MCP client, invite, permission, billing, execution, test, publish, delete or provider write was exercised.',
  fixtures: [{ id: 'default', title: description, props: { variant } }],
  config,
  propsSchema: [{ name: 'variant', type: 'ActivepiecesVariant', required: true, description }, { name: 'disabled', type: 'boolean', required: false, description: 'Disables the fictional fixture without contacting Activepieces.' }],
} ]));

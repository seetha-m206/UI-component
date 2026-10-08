import type { PreviewConfig, PreviewRegistry } from '../types';
import { N8nPreview, type N8nVariant } from './N8nPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

export const n8nEntries: Array<[string, N8nVariant, string]> = [
  ['n8n-application-shell', 'application-shell', 'Authenticated application shell'],
  ['n8n-overview-onboarding', 'overview-onboarding', 'First automation onboarding'],
  ['n8n-global-create-menu', 'global-create-menu', 'Global creation menu'],
  ['n8n-personal-project-tabs', 'personal-project-tabs', 'Personal project workspace'],
  ['n8n-workflows-empty', 'workflows-empty', 'Workflow inventory empty state'],
  ['n8n-agents-empty', 'agents-empty', 'Agent inventory empty state'],
  ['n8n-credentials-empty', 'credentials-empty', 'Credential inventory boundary'],
  ['n8n-executions-empty', 'executions-empty', 'Execution history empty state'],
  ['n8n-variables-empty', 'variables-empty', 'Variable registry empty state'],
  ['n8n-data-tables-empty', 'data-tables-empty', 'Data tables empty state'],
  ['n8n-assistant-onboarding', 'assistant-onboarding', 'Assistant prompt onboarding'],
  ['n8n-insights-dashboard', 'insights-dashboard', 'Insights dashboard'],
  ['n8n-settings-navigation', 'settings-navigation', 'Settings navigation'],
  ['n8n-instance-mcp-settings', 'instance-mcp-settings', 'Instance-level MCP boundary'],
  ['n8n-enterprise-plan-gates', 'enterprise-plan-gates', 'Enterprise plan gates'],
  ['n8n-security-policies', 'security-policies', 'Security policy controls'],
  ['n8n-cloud-admin-dashboard', 'cloud-admin-dashboard', 'Cloud administration dashboard'],
  ['n8n-template-catalogue', 'template-catalogue', 'Official workflow template catalogue'],
  [
    'n8n-workflow-builder-boundary',
    'workflow-builder-boundary',
    'Unobserved workflow builder boundary',
  ],
  [
    'n8n-advanced-workflow-boundary',
    'advanced-workflow-boundary',
    'Unobserved advanced workflow boundary',
  ],
  ['n8n-ai-usage-controls', 'ai-usage-controls', 'AI data-sharing controls'],
  ['n8n-gateway-credit-upgrade-gate', 'gateway-credit-upgrade-gate', 'Gateway credit plan gate'],
  ['n8n-ldap-enterprise-gate', 'ldap-enterprise-gate', 'LDAP Enterprise plan gate'],
  [
    'n8n-log-streaming-enterprise-gate',
    'log-streaming-enterprise-gate',
    'Log streaming Enterprise plan gate',
  ],
  [
    'n8n-community-nodes-inventory',
    'community-nodes-inventory',
    'Installed community-node inventory',
  ],
  ['n8n-migration-report', 'migration-report', 'Version compatibility report'],
  ['n8n-context-preferences', 'context-preferences', 'Context preferences empty state'],
  ['n8n-chat-settings', 'chat-settings', 'Chat availability settings'],
  ['n8n-assistant-settings', 'assistant-settings', 'Assistant capabilities and permissions'],
  ['n8n-opentelemetry-settings', 'opentelemetry-settings', 'OpenTelemetry collector settings'],
  ['n8n-trial-usage-banner', 'trial-usage-banner', 'Trial and execution usage banner'],
  ['n8n-primary-navigation-rail', 'primary-navigation-rail', 'Primary product navigation rail'],
  ['n8n-onboarding-choice-card', 'onboarding-choice-card', 'First-use start option card'],
  ['n8n-project-tab-strip', 'project-tab-strip', 'Project resource tab strip'],
  ['n8n-resource-empty-card', 'resource-empty-card', 'Reusable resource empty-state card'],
  ['n8n-assistant-prompt-composer', 'assistant-prompt-composer', 'Assistant prompt composer'],
  ['n8n-assistant-suggestion-chip', 'assistant-suggestion-chip', 'Assistant suggested-prompt chip'],
  ['n8n-insights-filter-control', 'insights-filter-control', 'Insights scope filter'],
  ['n8n-insights-metric-card', 'insights-metric-card', 'Insights KPI metric card'],
  ['n8n-insights-chart', 'insights-chart', 'Insights daily breakdown chart'],
  ['n8n-insights-workflow-table', 'insights-workflow-table', 'Insights workflow breakdown table'],
  ['n8n-settings-sidebar', 'settings-sidebar', 'Settings navigation sidebar'],
  ['n8n-settings-nav-item', 'settings-nav-item', 'Settings navigation item'],
  ['n8n-setting-toggle-row', 'setting-toggle-row', 'Labelled settings switch row'],
  ['n8n-enterprise-gate-card', 'enterprise-gate-card', 'Enterprise entitlement gate card'],
  ['n8n-gateway-upgrade-modal', 'gateway-upgrade-modal', 'Gateway credits upgrade modal'],
  ['n8n-community-node-row', 'community-node-row', 'Installed community package row'],
  ['n8n-migration-tabs', 'migration-tabs', 'Migration issue tab control'],
  ['n8n-migration-issue-card', 'migration-issue-card', 'Migration compatibility notice'],
  ['n8n-context-empty-table', 'context-empty-table', 'Context preferences empty table'],
  [
    'n8n-assistant-permission-selector',
    'assistant-permission-selector',
    'Assistant permission group selector',
  ],
  ['n8n-otel-field-row', 'otel-field-row', 'Environment-backed telemetry field'],
  ['n8n-otel-trace-option', 'otel-trace-option', 'Telemetry trace option checkbox'],
  ['n8n-template-search-filter', 'template-search-filter', 'Template search and category filter'],
  ['n8n-template-card', 'template-card', 'Workflow template catalogue card'],
  ['n8n-cloud-instance-card', 'cloud-instance-card', 'Cloud instance summary card'],
  ['n8n-credit-summary-card', 'credit-summary-card', 'Cloud credit summary tile'],
  ['n8n-mcp-enable-card', 'mcp-enable-card', 'Instance MCP enable gate card'],
];

export const n8nIds = n8nEntries.map(([id]) => id);
export const n8nPreviews: PreviewRegistry = Object.fromEntries(
  n8nEntries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: N8nPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated read-only n8n Cloud observation on 2026-10-08. Account identity, email, instance and project identifiers, transient sign-in parameters, credentials, credit balances and live timestamps are excluded. No workflow, node, credential, variable, table, agent, prompt, execution, test, retry, publish, MCP access, invite, permission, security policy, payment, deletion or provider write was exercised.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [
        { name: 'variant', type: 'N8nVariant', required: true, description },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables the fictional fixture without contacting n8n.',
        },
      ],
    },
  ])
);

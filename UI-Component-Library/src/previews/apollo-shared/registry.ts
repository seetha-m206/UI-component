import type { PreviewConfig, PreviewRegistry } from '../types';
import { ApolloPreview, type ApolloVariant } from './ApolloPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, ApolloVariant, string]> = [
  ['apollo-application-shell', 'application-shell', 'Authenticated Apollo application shell'],
  [
    'apollo-home-onboarding-dashboard',
    'home-onboarding-dashboard',
    'Getting started onboarding dashboard',
  ],
  ['apollo-mission-accordion', 'mission-accordion', 'Expandable onboarding mission groups'],
  ['apollo-onboarding-task-row', 'onboarding-task-row', 'Dependency-aware onboarding task rows'],
  ['apollo-layout-picker', 'layout-picker', 'Searchable dashboard layout picker'],
  ['apollo-global-search-palette', 'global-search-palette', 'Global search and AI suggestions'],
  [
    'apollo-activity-notifications-panel',
    'activity-notifications-panel',
    'Activity and notifications panel with empty state',
  ],
  ['apollo-ai-assistant-onboarding', 'ai-assistant-onboarding', 'AI assistant onboarding drawer'],
  ['apollo-profile-menu', 'profile-menu', 'Profile and workspace action menu'],
  [
    'apollo-people-discovery-empty-state',
    'people-discovery-empty-state',
    'AI-assisted people discovery empty state',
  ],
  [
    'apollo-people-filter-sidebar',
    'people-filter-sidebar',
    'People scope and pinned filter sidebar',
  ],
  [
    'apollo-people-filter-catalogue-dialog',
    'people-filter-catalogue-dialog',
    'Searchable people filter catalogue',
  ],
  [
    'apollo-people-job-title-filter',
    'people-job-title-filter',
    'Job-title include and exclude filter',
  ],
  [
    'apollo-people-quick-filters',
    'people-quick-filters',
    'People discovery quick-filter suggestions',
  ],
  ['apollo-people-import-menu', 'people-import-menu', 'Single-contact and CSV import menu'],
  ['apollo-people-saved-empty-state', 'people-saved-empty-state', 'Saved-people zero-result state'],
  ['apollo-people-sort-dialog', 'people-sort-dialog', 'People result field and direction sorting'],
  [
    'apollo-companies-discovery-empty-state',
    'companies-discovery-empty-state',
    'AI-assisted company discovery empty state',
  ],
  [
    'apollo-companies-filter-sidebar',
    'companies-filter-sidebar',
    'Company scope and pinned filter sidebar',
  ],
  [
    'apollo-companies-filter-catalogue-dialog',
    'companies-filter-catalogue-dialog',
    'Searchable company filter catalogue',
  ],
  [
    'apollo-companies-saved-search-selector',
    'companies-saved-search-selector',
    'Saved-search view selector',
  ],
  [
    'apollo-companies-search-settings-drawer',
    'companies-search-settings-drawer',
    'Company search settings drawer',
  ],
  [
    'apollo-companies-company-filter',
    'companies-company-filter',
    'Company include and domain filter',
  ],
  ['apollo-companies-location-filter', 'companies-location-filter', 'Account location filter'],
  ['apollo-companies-employee-filter', 'companies-employee-filter', 'Employee range filter'],
  ['apollo-companies-import-menu', 'companies-import-menu', 'Account import menu'],
  [
    'apollo-companies-website-visitors-prompt',
    'companies-website-visitors-prompt',
    'Website visitor connection prompt',
  ],
  [
    'apollo-companies-saved-empty-state',
    'companies-saved-empty-state',
    'Saved-company zero-result state',
  ],
  ['apollo-lists-empty-state', 'lists-empty-state', 'Lists onboarding empty state'],
  ['apollo-data-health-center', 'data-health-center', 'Data health center onboarding'],
  ['apollo-data-enrichment-tabs', 'data-enrichment-tabs', 'Data enrichment navigation tabs'],
  [
    'apollo-crm-enrichment-empty-state',
    'crm-enrichment-empty-state',
    'CRM enrichment connection state',
  ],
  ['apollo-csv-enrichment-paywall', 'csv-enrichment-paywall', 'CSV enrichment plan gate'],
  ['apollo-job-change-alerts-paywall', 'job-change-alerts-paywall', 'Job-change alert plan gate'],
  ['apollo-forms-overview', 'forms-overview', 'Form enrichment and builder overview'],
  ['apollo-sequences-empty-state', 'sequences-empty-state', 'Sequence onboarding empty state'],
  [
    'apollo-sequence-analytics-empty-state',
    'sequence-analytics-empty-state',
    'Sequence analytics zero state',
  ],
  [
    'apollo-sequence-diagnostics-empty-state',
    'sequence-diagnostics-empty-state',
    'Sequence diagnostics zero state',
  ],
  ['apollo-emails-mailbox-onboarding', 'emails-mailbox-onboarding', 'Email mailbox onboarding'],
  ['apollo-calls-dialer-paywall', 'calls-dialer-paywall', 'Dialer plan gate'],
  [
    'apollo-calls-analytics-empty-state',
    'calls-analytics-empty-state',
    'Call analytics zero state',
  ],
  ['apollo-tasks-empty-state', 'tasks-empty-state', 'Assigned tasks empty state'],
  ['apollo-tasks-filter-sidebar', 'tasks-filter-sidebar', 'Task filter catalogue'],
  ['apollo-tasks-sort-dialog', 'tasks-sort-dialog', 'Task multi-sort dialog'],
  ['apollo-tasks-view-options-drawer', 'tasks-view-options-drawer', 'Task view options drawer'],
  [
    'apollo-meetings-calendar-onboarding',
    'meetings-calendar-onboarding',
    'Meeting calendar onboarding',
  ],
  ['apollo-conversations-landing', 'conversations-landing', 'Conversations product landing'],
  ['apollo-deals-empty-state', 'deals-empty-state', 'Deal pipeline empty state'],
  ['apollo-deals-onboarding-popover', 'deals-onboarding-popover', 'Deal onboarding popover'],
  [
    'apollo-deals-analytics-empty-state',
    'deals-analytics-empty-state',
    'Deal analytics zero state',
  ],
  ['apollo-workflows-overview', 'workflows-overview', 'Workflow onboarding and featured templates'],
  ['apollo-workflow-template-library', 'workflow-template-library', 'Workflow template library'],
  ['apollo-analytics-overview', 'analytics-overview', 'Analytics overview and recent content'],
  [
    'apollo-website-visitors-onboarding',
    'website-visitors-onboarding',
    'Website visitor onboarding',
  ],
  [
    'apollo-saved-people-empty-state',
    'saved-people-empty-state',
    'Saved people workspace empty state',
  ],
  [
    'apollo-saved-companies-empty-state',
    'saved-companies-empty-state',
    'Saved companies workspace empty state',
  ],
  ['apollo-email-health-overview', 'email-health-overview', 'Email deliverability overview'],
  ['apollo-email-domains-empty-state', 'email-domains-empty-state', 'Email domain onboarding'],
  [
    'apollo-email-mailboxes-empty-table',
    'email-mailboxes-empty-table',
    'Mailbox setup empty table',
  ],
  ['apollo-sending-policies-settings', 'sending-policies-settings', 'Sending protection settings'],
  [
    'apollo-workspace-settings-overview',
    'workspace-settings-overview',
    'Workspace settings overview',
  ],
  ['apollo-ai-assistant-page', 'ai-assistant-page', 'Standalone AI assistant workspace'],
  [
    'apollo-plan-overview',
    'plan-overview',
    'Plan summary with usage regions and purchase or upgrade boundaries.',
  ],
  [
    'apollo-product-add-ons',
    'product-add-ons',
    'Add-on catalogue with dialer and inbound plan cards.',
  ],
  [
    'apollo-billing-empty-state',
    'billing-empty-state',
    'Billing workspace with missing payment, address and invoice-history states.',
  ],
  [
    'apollo-credit-usage-dashboard',
    'credit-usage-dashboard',
    'Credit dashboard with feature, surface and team-member breakdowns.',
  ],
  [
    'apollo-data-request-navigation',
    'data-request-navigation',
    'Data-request history navigation across enrichment resource types.',
  ],
  [
    'apollo-ai-word-usage-empty-state',
    'ai-word-usage-empty-state',
    'AI word allowance and history zero state.',
  ],
  [
    'apollo-users-table',
    'users-table',
    'User inventory with filters, export and invitation boundaries.',
  ],
  [
    'apollo-teams-plan-gate',
    'teams-plan-gate',
    'Organization-plan gate for team grouping and analytics filters.',
  ],
  [
    'apollo-permission-profiles-plan-gate',
    'permission-profiles-plan-gate',
    'Organization-plan gate for role-based permissions.',
  ],
  [
    'apollo-territories-plan-gate',
    'territories-plan-gate',
    'Organization-plan gate for prospecting territories.',
  ],
  [
    'apollo-license-settings',
    'license-settings',
    'Domain, seat, invite-link and default-permission controls.',
  ],
  [
    'apollo-workspace-details',
    'workspace-details',
    'Workspace details card with matching-domain discovery.',
  ],
  [
    'apollo-team-sharing-defaults-empty-state',
    'team-sharing-defaults-empty-state',
    'Empty state for shared people and company searches.',
  ],
  [
    'apollo-system-activity-log',
    'system-activity-log',
    'System activity feed with user filtering.',
  ],
  [
    'apollo-support-access-settings',
    'support-access-settings',
    'Support-access status and revocation boundary.',
  ],
  [
    'apollo-integrations-catalogue',
    'integrations-catalogue',
    'Integration catalogue grouped by conferencing, CRM, data and messaging.',
  ],
  [
    'apollo-mcp-clients-empty-state',
    'mcp-clients-empty-state',
    'MCP connection setup with supported-client tabs and empty connected state.',
  ],
  [
    'apollo-sequence-alert-thresholds',
    'sequence-alert-thresholds',
    'Sequence alert thresholds with benchmark guidance and save boundaries.',
  ],
  [
    'apollo-tracking-subdomain-onboarding',
    'tracking-subdomain-onboarding',
    'Tracking-subdomain onboarding with video guidance.',
  ],
  [
    'apollo-dialer-settings-plan-gate',
    'dialer-settings-plan-gate',
    'Settings-level dialer plan gate.',
  ],
  [
    'apollo-prospecting-configuration',
    'prospecting-configuration',
    'Prospecting configuration for privacy, duplicate mapping, syncing and mobile defaults.',
  ],
  [
    'apollo-snippets-empty-state',
    'snippets-empty-state',
    'Empty snippet workspace with a creation boundary.',
  ],
  [
    'apollo-contact-stage-settings',
    'contact-stage-settings',
    'Contact-stage inventory with roles, triggers and fields navigation.',
  ],
  [
    'apollo-account-stage-settings',
    'account-stage-settings',
    'Account-stage inventory with triggers and fields navigation.',
  ],
  [
    'apollo-deal-pipeline-settings',
    'deal-pipeline-settings',
    'Deal pipeline list with roles, fields and currency navigation.',
  ],
  [
    'apollo-global-picklists-plan-gate',
    'global-picklists-plan-gate',
    'Professional-plan gate for reusable field option lists.',
  ],
  [
    'apollo-goals-plan-gate',
    'goals-plan-gate',
    'Professional-plan gate for email, call and revenue goals.',
  ],
  [
    'apollo-imports-exports-hub',
    'imports-exports-hub',
    'Tabbed hub for contact, account and deal imports plus exports.',
  ],
  [
    'apollo-removal-requests-empty-state',
    'removal-requests-empty-state',
    'Rolling removal-request ledger with export boundary and zero state.',
  ],
  [
    'apollo-personas-settings',
    'personas-settings',
    'Persona configuration overview with manual and AI creation boundaries.',
  ],
  [
    'apollo-buying-intent-topics',
    'buying-intent-topics',
    'Selectable buying-intent topic catalogue.',
  ],
  [
    'apollo-website-tracking-installation',
    'website-tracking-installation',
    'Website tracking installation and domain-management boundaries.',
  ],
  [
    'apollo-signals-inventory',
    'signals-inventory',
    'Signals inventory with groups, filters and creation boundary.',
  ],
  [
    'apollo-scoring-models',
    'scoring-models',
    'People and company scoring models with filters and creation boundary.',
  ],
  [
    'apollo-ai-context-review',
    'ai-context-review',
    'AI context review with profile, product and approval boundaries.',
  ],
  [
    'apollo-conversation-settings-redirect-gate',
    'conversation-settings-redirect-gate',
    'Redirect gate from conversation administration routes to product onboarding.',
  ],
  [
    'apollo-team-meetings-onboarding',
    'team-meetings-onboarding',
    'Team meeting administration with routers, forms and calendar onboarding.',
  ],
];

export const apolloIds = entries.map(([id]) => id);

export const apolloPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: ApolloPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated read-only Apollo Home, product navigation and passive settings observation on 2026-10-09. Account identity, provider example contacts, private dashboard names, website profile content, contact and company data, live counts and thresholds, object IDs, scripts, query strings, payloads and provider screenshots are omitted or fictionalized. No search, AI execution, filter application, contact reveal, import, creation, connection, send, call, meeting, deal, workflow, website connection, scoring, extension, layout, refresh, profile, preference, billing, purchase, settings change, logout, commit, push or deployment action was exercised.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [
        { name: 'variant', type: 'ApolloVariant', required: true, description },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables local fixture interactions without contacting Apollo.',
        },
      ],
    },
  ])
);

import type { PreviewConfig, PreviewRegistry } from '../types';
import { MakePreview, type MakeVariant } from './MakePreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, MakeVariant, string]> = [
  ['make-application-shell', 'application-shell', 'Authenticated Make application shell'],
  ['make-organization-dashboard', 'organization-dashboard', 'Organization dashboard and AI entry'],
  ['make-scenarios-empty', 'scenarios-empty', 'Scenario inventory empty state'],
  ['make-template-catalogue', 'template-catalogue', 'Public template catalogue'],
  ['make-template-canvas', 'template-canvas', 'Read-only template canvas preview'],
  ['make-ai-agents-landing', 'ai-agents-landing', 'AI Agents onboarding boundary'],
  ['make-connections-list', 'connections-list', 'Connection inventory boundary'],
  ['make-webhooks-empty', 'webhooks-empty', 'Webhooks empty state'],
  ['make-mcp-toolboxes-empty', 'mcp-toolboxes-empty', 'MCP Toolboxes empty state'],
  ['make-teams-list', 'teams-list', 'Organization team list'],
  ['make-users-table', 'users-table', 'Organization users table'],
  ['make-roles-catalogue', 'roles-catalogue', 'Default role catalogue'],
  ['make-role-permissions', 'role-permissions', 'Role permission matrix'],
  ['make-credit-usage', 'credit-usage', 'Credit usage controls and metrics'],
  ['make-installed-apps-empty', 'installed-apps-empty', 'Installed apps empty state'],
  [
    'make-organization-variables',
    'organization-variables',
    'System and organization variables table',
  ],
  [
    'make-scenario-properties-gate',
    'scenario-properties-gate',
    'Scenario properties plan boundary',
  ],
  ['make-audit-logs-gate', 'audit-logs-gate', 'Audit log plan boundary'],
  [
    'make-event-subscriptions-gate',
    'event-subscriptions-gate',
    'Event subscriptions plan boundary',
  ],
  ['make-notification-options', 'notification-options', 'Scenario notification defaults'],
  ['make-data-stores-empty', 'data-stores-empty', 'Data stores empty state'],
  ['make-data-structures-empty', 'data-structures-empty', 'Data structures empty state'],
  ['make-devices-empty', 'devices-empty', 'Devices empty state'],
  ['make-custom-apps-onboarding', 'custom-apps-onboarding', 'Custom Apps onboarding'],
  ['make-router-filter-builder', 'router-filter-builder', 'Router and filter builder boundary'],
  ['make-mapping-schedule-panel', 'mapping-schedule-panel', 'Mapping and scheduling panels'],
  ['make-run-history-inspector', 'run-history-inspector', 'Scenario history and run inspector'],
  [
    'make-incomplete-executions-errors',
    'incomplete-executions-errors',
    'Incomplete execution recovery boundary',
  ],
  ['make-global-search-palette', 'global-search-palette', 'Global command search palette'],
  ['make-help-launcher', 'help-launcher', 'Help and support launcher'],
  ['make-notifications-empty', 'notifications-empty', 'Zone notifications empty state'],
  ['make-account-menu', 'account-menu', 'Account and theme menu'],
  ['make-workspace-picker', 'workspace-picker', 'Organization and workspace picker'],
  ['make-private-space-dashboard', 'private-space-dashboard', 'Private-space dashboard state'],
  ['make-profile-organizations', 'profile-organizations', 'Profile organization catalogue'],
  ['make-profile-settings-dialog', 'profile-settings-dialog', 'Profile settings dialog'],
  ['make-email-preferences', 'email-preferences', 'Workspace email preferences'],
  ['make-timezone-options', 'timezone-options', 'Web and scenario time-zone settings'],
  ['make-api-access-boundary', 'api-access-boundary', 'Sensitive API access boundary'],
  ['make-two-factor-boundary', 'two-factor-boundary', 'Two-factor authentication boundary'],
  ['make-affiliate-onboarding', 'affiliate-onboarding', 'Affiliate program onboarding form'],
  ['make-subscription-overview', 'subscription-overview', 'Plan and subscription overview'],
  ['make-payments-empty', 'payments-empty', 'Payments empty state'],
  [
    'make-organization-team-action-menus',
    'organization-team-action-menus',
    'Organization and team row action menus',
  ],
  ['make-profile-security-actions', 'profile-security-actions', 'Profile security action menu'],
];

export const makeIds = entries.map(([id]) => id);

export const makePreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: MakePreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated read-only Make observation on 2026-10-08 plus explicitly labelled official Make Help Center review. Account names, emails, organization and team IDs, connection identities, usage values, billing data and live execution data are excluded. No connection, scenario, schedule, run, replay, retry, deletion, invite, permission, notification, AI prompt, template instantiation, app installation or provider write was exercised.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [
        { name: 'variant', type: 'MakeVariant', required: true, description },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Marks the fictional fixture disabled without contacting Make.',
        },
      ],
    },
  ])
);

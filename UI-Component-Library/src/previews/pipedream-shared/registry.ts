import type { PreviewConfig, PreviewRegistry } from '../types';
import { PipedreamPreview, type PipedreamVariant } from './PipedreamPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, PipedreamVariant, string]> = [
  ['pipedream-application-shell', 'application-shell', 'Authenticated Pipedream workspace shell'],
  ['pipedream-projects-catalogue', 'projects-catalogue', 'Projects catalogue'],
  ['pipedream-project-resources-empty', 'project-resources-empty', 'Empty project resources'],
  ['pipedream-project-create-menu', 'project-create-menu', 'Project create menu'],
  ['pipedream-file-store-plan-gate', 'file-store-plan-gate', 'File Store plan gate'],
  ['pipedream-project-variables', 'project-variables', 'Project variables'],
  ['pipedream-sources-empty-filters', 'sources-empty-filters', 'Sources empty state and filters'],
  [
    'pipedream-connected-accounts-onboarding',
    'connected-accounts-onboarding',
    'Connected accounts onboarding',
  ],
  ['pipedream-oauth-clients', 'oauth-clients', 'OAuth clients onboarding'],
  ['pipedream-data-stores-empty', 'data-stores-empty', 'Data Stores empty state'],
  ['pipedream-data-store-create-dialog', 'data-store-create-dialog', 'Data Store create dialog'],
  ['pipedream-event-history-plan-gate', 'event-history-plan-gate', 'Event History and plan gate'],
  ['pipedream-settings-navigation', 'settings-navigation', 'Workspace settings navigation'],
  ['pipedream-authentication-plan-gates', 'authentication-plan-gates', 'Authentication plan gates'],
  ['pipedream-environment-variables', 'environment-variables', 'Environment variables onboarding'],
  ['pipedream-verified-domains', 'verified-domains', 'Verified domains onboarding'],
  ['pipedream-workspace-networking', 'workspace-networking', 'Workspace VPC onboarding'],
  ['pipedream-billing-usage', 'billing-usage', 'Billing and usage dashboard'],
  ['pipedream-connect-shell', 'connect-shell', 'Pipedream Connect alpha shell'],
  ['pipedream-connect-overview', 'connect-overview', 'Connect overview onboarding'],
  [
    'pipedream-connect-project-configuration',
    'connect-project-configuration',
    'Connect project configuration',
  ],
  ['pipedream-connect-users-onboarding', 'connect-users-onboarding', 'Connect users onboarding'],
  ['pipedream-connect-webhooks', 'connect-webhooks', 'Connect webhooks'],
  ['pipedream-connect-api-clients', 'connect-api-clients', 'Connect API clients'],
  ['pipedream-connect-networking', 'connect-networking', 'Connect networking'],
  ['pipedream-project-access-plan-gate', 'project-access-plan-gate', 'Project access plan gate'],
  ['pipedream-project-settings-modal', 'project-settings-modal', 'Project settings modal'],
  ['pipedream-global-search-command-menu', 'global-search-command-menu', 'Global command search'],
  ['pipedream-string-ai-builder', 'string-ai-builder', 'String AI builder landing'],
  ['pipedream-user-account-security', 'user-account-security', 'User account security'],
  ['pipedream-application-preferences', 'application-preferences', 'Application preferences'],
  ['pipedream-experimental-features', 'experimental-features', 'Experimental features'],
  ['pipedream-connect-global-users', 'connect-global-users', 'Connect global users'],
  ['pipedream-connect-global-accounts', 'connect-global-accounts', 'Connect global accounts'],
  ['pipedream-connect-global-triggers', 'connect-global-triggers', 'Connect global triggers'],
  [
    'pipedream-connect-logs-observability',
    'connect-logs-observability',
    'Connect logs observability',
  ],
  [
    'pipedream-connect-configuration-picker',
    'connect-configuration-picker',
    'Connect configuration project picker',
  ],
  ['pipedream-connect-command-center', 'connect-command-center', 'Connect command center'],
  [
    'pipedream-connect-workspace-switcher',
    'connect-workspace-switcher',
    'Connect workspace switcher',
  ],
  [
    'pipedream-connect-environment-switcher',
    'connect-environment-switcher',
    'Connect environment switcher',
  ],
  [
    'pipedream-connect-workspace-general',
    'connect-workspace-general',
    'Connect workspace general settings',
  ],
  ['pipedream-connect-team', 'connect-team', 'Connect team settings'],
  [
    'pipedream-connect-workspace-api-clients',
    'connect-workspace-api-clients',
    'Connect workspace API clients',
  ],
  ['pipedream-connect-app-configs', 'connect-app-configs', 'Connect OAuth app configurations'],
  [
    'pipedream-connect-workspace-networking',
    'connect-workspace-networking',
    'Connect workspace networking',
  ],
  ['pipedream-connect-sign-in', 'connect-sign-in', 'Connect sign-in settings'],
  ['pipedream-connect-billing', 'connect-billing', 'Connect billing and usage'],
  ['pipedream-connect-account-security', 'connect-account-security', 'Connect account security'],
];

export const pipedreamIds = entries.map(([id]) => id);
export const pipedreamPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: PipedreamPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated read-only Pipedream and Pipedream Connect observation on 2026-10-08. Workspace identity, user identity, email, project IDs, invite links, API values, tokens and opaque identifiers are omitted or fictionalized. No workflow, source, account, data store, variable, domain, OAuth client, API client, VPC, webhook, invite, billing setting, purchase, upload, deletion, execution or deployment was exercised.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [{ name: 'variant', type: 'PipedreamVariant', required: true, description }],
    },
  ])
);

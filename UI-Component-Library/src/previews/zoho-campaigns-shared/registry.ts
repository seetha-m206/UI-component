import type { PreviewConfig, PreviewRegistry } from '../types';
import { ZohoCampaignsPreview, type ZohoCampaignsVariant } from './ZohoCampaignsPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [
    { id: 'disabled', label: 'Provider actions', onLabel: 'Disabled', offLabel: 'Fixture only' },
  ],
};

const entries: Array<[string, ZohoCampaignsVariant, string]> = [
  [
    'zoho-campaigns-application-shell',
    'application-shell',
    'Authenticated global application shell',
  ],
  [
    'zoho-campaigns-getting-started-dashboard',
    'getting-started-dashboard',
    'Getting Started setup dashboard',
  ],
  ['zoho-campaigns-home-dashboard', 'home-dashboard', 'Home analytics and activity dashboard'],
  [
    'zoho-campaigns-analytics-channel-tabs',
    'analytics-channel-tabs',
    'Channel analytics tabs and empty states',
  ],
  [
    'zoho-campaigns-email-campaign-starter',
    'email-campaign-starter',
    'Email campaign creation gate',
  ],
  [
    'zoho-campaigns-whatsapp-setup-gate',
    'whatsapp-setup-gate',
    'WhatsApp connection prerequisites',
  ],
  ['zoho-campaigns-sms-gateway-selector', 'sms-gateway-selector', 'SMS gateway selection'],
  [
    'zoho-campaigns-contact-directory',
    'contact-directory',
    'Contact status tabs and fictional table',
  ],
  ['zoho-campaigns-list-table', 'list-table', 'Audience lists table'],
  ['zoho-campaigns-segment-starter', 'segment-starter', 'Segment creation gate'],
  ['zoho-campaigns-form-starter', 'form-starter', 'Signup form creation gate'],
  ['zoho-campaigns-workflow-starter', 'workflow-starter', 'Workflow template selection'],
  [
    'zoho-campaigns-media-library-empty-state',
    'media-library-empty-state',
    'File library empty state',
  ],
  [
    'zoho-campaigns-email-template-starter',
    'email-template-starter',
    'Email template creation gate',
  ],
  ['zoho-campaigns-settings-directory', 'settings-directory', 'Settings category directory'],
  [
    'zoho-campaigns-notification-settings',
    'notification-settings',
    'Contact notification preferences',
  ],
  ['zoho-campaigns-topics-settings', 'topics-settings', 'Topic management table'],
  ['zoho-campaigns-contact-scoring', 'contact-scoring', 'Contact-scoring setup boundary'],
  ['zoho-campaigns-field-management', 'field-management', 'Standard contact-field table'],
  [
    'zoho-campaigns-signup-lifecycle-directory',
    'signup-lifecycle-directory',
    'Signup lifecycle asset directory',
  ],
  ['zoho-campaigns-utm-tracking', 'utm-tracking', 'Cross-channel UTM tracking control'],
  ['zoho-campaigns-frequency-capping', 'frequency-capping', 'Channel frequency-capping matrix'],
  [
    'zoho-campaigns-integrations-catalogue',
    'integrations-catalogue',
    'Application integration catalogue',
  ],
  ['zoho-campaigns-webhooks-empty-state', 'webhooks-empty-state', 'Webhooks empty state'],
  ['zoho-campaigns-compliance-settings', 'compliance-settings', 'GDPR and HIPAA controls'],
  ['zoho-campaigns-double-opt-in', 'double-opt-in', 'Double opt-in consent content'],
  ['zoho-campaigns-email-tracking', 'email-tracking', 'Email tracking controls'],
  [
    'zoho-campaigns-sender-authentication',
    'sender-authentication',
    'Sender and domain authentication status',
  ],
  ['zoho-campaigns-bot-filtering', 'bot-filtering', 'Bot activity exclusion controls'],
  [
    'zoho-campaigns-organization-settings',
    'organization-settings',
    'Organization profile settings',
  ],
  ['zoho-campaigns-subscription-usage', 'subscription-usage', 'Plan and allocation usage'],
  ['zoho-campaigns-user-management', 'user-management', 'User administration table'],
  ['zoho-campaigns-roles-permissions', 'roles-permissions', 'Role permission summaries'],
  ['zoho-campaigns-workspace-management', 'workspace-management', 'Workspace administration table'],
  ['zoho-campaigns-audit-log', 'audit-log', 'Activity log controls and table'],
  ['zoho-campaigns-sms-preferences', 'sms-preferences', 'SMS preference controls'],
  ['zoho-campaigns-zia-usage-details', 'zia-usage-details', 'Zia usage modal table'],
  ['zoho-campaigns-global-create-menu', 'global-create-menu', 'Global quick-create menu'],
  ['zoho-campaigns-notification-center', 'notification-center', 'Notification panel'],
  ['zoho-campaigns-account-help-panel', 'account-help-panel', 'Account and help panel'],
  ['zoho-campaigns-contact-analytics', 'contact-analytics', 'Contact analytics dashboard'],
  [
    'zoho-campaigns-ecommerce-analytics-gate',
    'ecommerce-analytics-gate',
    'E-commerce connection gate',
  ],
  [
    'zoho-campaigns-zia-model-configuration',
    'zia-model-configuration',
    'Zia AI provider configuration',
  ],
];

export const zohoCampaignsIds = entries.map(([id]) => id);
export const zohoCampaignsPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: ZohoCampaignsPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated read-only Zoho Campaigns observation on 2026-10-09. Account identity, organization and object identifiers, exact dates, counts, list names, query strings, payloads and credentials are omitted or fictionalized. No campaign, contact, message, workflow, form, upload, integration, AI, setting, billing, purchase or delete action was exercised.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [
        { name: 'variant', type: 'ZohoCampaignsVariant', required: true, description },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Keeps provider-changing controls inert.',
        },
      ],
    },
  ])
) as PreviewRegistry;

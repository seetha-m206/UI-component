import type { PreviewConfig, PreviewRegistry } from '../types';
import { BrevoPreview, type BrevoVariant } from './BrevoPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, BrevoVariant, string]> = [
  ['brevo-application-shell', 'application-shell', 'Authenticated global application shell'],
  ['brevo-home-dashboard', 'home-dashboard', 'Home dashboard and onboarding overview'],
  ['brevo-calendar-planner', 'calendar-planner', 'Homepage calendar planner'],
  [
    'brevo-onboarding-empty-states',
    'onboarding-empty-states',
    'Homepage onboarding and empty states',
  ],
  ['brevo-campaign-channel-selector', 'campaign-channel-selector', 'Campaign channel selector'],
  ['brevo-landing-page-upgrade-popover', 'landing-page-upgrade-popover', 'Landing page plan gate'],
  ['brevo-forms-empty-state', 'forms-empty-state', 'Forms tabs and empty state'],
  ['brevo-marketing-statistics', 'marketing-statistics', 'Marketing statistics summary'],
  ['brevo-template-empty-state', 'template-empty-state', 'Email templates empty state'],
  ['brevo-contact-table', 'contact-table', 'Contact table controls and pagination'],
  ['brevo-list-table', 'list-table', 'List inventory table'],
  ['brevo-segment-empty-state', 'segment-empty-state', 'Segment inventory empty state'],
  ['brevo-company-empty-state', 'company-empty-state', 'Company inventory empty state'],
  ['brevo-sales-activation-gate', 'sales-activation-gate', 'Deals and Tasks activation gate'],
  [
    'brevo-custom-objects-upgrade-gate',
    'custom-objects-upgrade-gate',
    'Custom Objects upgrade gate',
  ],
  ['brevo-automation-onboarding', 'automation-onboarding', 'Automation onboarding state'],
  [
    'brevo-transactional-configuration',
    'transactional-configuration',
    'Transactional configuration and verification gate',
  ],
  ['brevo-conversations-inbox', 'conversations-inbox', 'Conversations inbox and guarded composer'],
  [
    'brevo-commerce-integration-catalogue',
    'commerce-integration-catalogue',
    'E-commerce integration catalogue',
  ],
  ['brevo-loyalty-upgrade-gate', 'loyalty-upgrade-gate', 'Loyalty enterprise gate'],
  ['brevo-media-library-empty-state', 'media-library-empty-state', 'Media library empty state'],
  [
    'brevo-analytics-upgrade-gates',
    'analytics-upgrade-gates',
    'Conversions and Analytics Studio gates',
  ],
  ['brevo-usage-plan-popover', 'usage-plan-popover', 'Usage and plan popover'],
  ['brevo-help-panel', 'help-panel', 'Help resource panel'],
  ['brevo-notification-popover', 'notification-popover', 'Notification popover'],
  ['brevo-account-menu', 'account-menu', 'Account navigation menu'],
  ['brevo-settings-navigation', 'settings-navigation', 'Settings navigation tree'],
  [
    'brevo-general-settings-form',
    'general-settings-form',
    'General settings form and destructive boundary',
  ],
  ['brevo-language-preferences', 'language-preferences', 'Language and timezone preferences'],
  ['brevo-user-management', 'user-management', 'Users, partner users and activity navigation'],
  [
    'brevo-two-factor-authentication',
    'two-factor-authentication',
    'Two-factor authentication setup gate',
  ],
  [
    'brevo-localization-upgrade-gate',
    'localization-upgrade-gate',
    'Localization professional-plan gate',
  ],
  [
    'brevo-deliverability-center',
    'deliverability-center',
    'Deliverability account state and history',
  ],
  ['brevo-utm-tracking-settings', 'utm-tracking-settings', 'Organization UTM tracking setting'],
  [
    'brevo-custom-objects-settings-gate',
    'custom-objects-settings-gate',
    'Custom Objects settings plan gate',
  ],
  ['brevo-data-feeds-upgrade-gate', 'data-feeds-upgrade-gate', 'External data feeds plan gate'],
  [
    'brevo-contact-settings-catalogue',
    'contact-settings-catalogue',
    'Contact data and consent settings catalogue',
  ],
  [
    'brevo-company-settings-catalogue',
    'company-settings-catalogue',
    'Company attributes and automation settings',
  ],
  ['brevo-deal-settings-activation', 'deal-settings-activation', 'Deals settings activation gate'],
  [
    'brevo-campaign-settings-catalogue',
    'campaign-settings-catalogue',
    'Campaign configuration catalogue',
  ],
  [
    'brevo-conversation-queue-states',
    'conversation-queue-states',
    'Conversation queue tabs and zero state',
  ],
  [
    'brevo-visitors-online-table',
    'visitors-online-table',
    'Real-time visitor table and notification setting',
  ],
  ['brevo-conversation-statistics', 'conversation-statistics', 'Conversation reporting categories'],
  ['brevo-meetings-onboarding', 'meetings-onboarding', 'Meetings product onboarding'],
  ['brevo-notification-activity', 'notification-activity', 'Full notification activity page'],
];

export const brevoIds = entries.map(([id]) => id);
export const brevoPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: BrevoPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated read-only Brevo observation on 2026-10-09. Account identity, email addresses, SMTP identifiers, object IDs, query strings, payloads, provider status details and provider screenshots are omitted or fictionalized. No campaign, contact, form, automation, message, integration, upload, AI, settings, billing, purchase, delete, commit, push or deployment action was exercised.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [
        { name: 'variant', type: 'BrevoVariant', required: true, description },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables fixture controls without contacting Brevo.',
        },
      ],
    },
  ])
) as PreviewRegistry;

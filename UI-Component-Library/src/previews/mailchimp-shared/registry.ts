import type { PreviewConfig, PreviewRegistry } from '../types';
import { MailchimpPreview, type MailchimpVariant } from './MailchimpPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, MailchimpVariant, string]> = [
  ['mailchimp-application-shell', 'application-shell', 'Authenticated application shell'],
  ['mailchimp-primary-navigation', 'primary-navigation', 'Expandable primary product navigation'],
  [
    'mailchimp-global-search-dialog',
    'global-search-dialog',
    'Cross-product search dialog and filters',
  ],
  ['mailchimp-quick-actions-menu', 'quick-actions-menu', 'Global quick actions menu'],
  ['mailchimp-notification-panel', 'notification-panel', 'Notification empty panel'],
  ['mailchimp-account-menu', 'account-menu', 'Account and settings navigation menu'],
  ['mailchimp-home-onboarding-checklist', 'home-onboarding-checklist', 'Home onboarding checklist'],
  ['mailchimp-home-template-carousel', 'home-template-carousel', 'Template carousel and paging'],
  ['mailchimp-popup-form-cards', 'popup-form-cards', 'Popup form pattern cards'],
  [
    'mailchimp-campaigns-inventory-controls',
    'campaigns-inventory-controls',
    'Campaign inventory filters and table',
  ],
  ['mailchimp-campaigns-empty-state', 'campaigns-empty-state', 'Campaign inventory empty state'],
  [
    'mailchimp-automation-onboarding',
    'automation-onboarding',
    'Automation onboarding and task list',
  ],
  [
    'mailchimp-automation-loading-state',
    'automation-loading-state',
    'Recommended-template loading state',
  ],
  ['mailchimp-forms-type-cards', 'forms-type-cards', 'Form type catalogue'],
  [
    'mailchimp-contacts-import-empty-state',
    'contacts-import-empty-state',
    'Contact import empty state',
  ],
  [
    'mailchimp-contact-integration-suggestions',
    'contact-integration-suggestions',
    'Contact sync integration suggestions',
  ],
  ['mailchimp-tags-empty-state', 'tags-empty-state', 'Tags zero state'],
  ['mailchimp-segments-empty-state', 'segments-empty-state', 'Segments zero state'],
  [
    'mailchimp-prebuilt-segment-cards',
    'prebuilt-segment-cards',
    'Prebuilt segment suggestion cards',
  ],
  [
    'mailchimp-marketing-dashboard-plan-gate',
    'marketing-dashboard-plan-gate',
    'Marketing dashboard plan gate',
  ],
  [
    'mailchimp-conversion-insights-connect-store',
    'conversion-insights-connect-store',
    'Conversion store-connection gate',
  ],
  ['mailchimp-custom-reports-plan-gate', 'custom-reports-plan-gate', 'Custom reports plan gate'],
  ['mailchimp-website-wix-handoff', 'website-wix-handoff', 'Website partner handoff'],
  [
    'mailchimp-content-studio-empty-state',
    'content-studio-empty-state',
    'Content Studio tabs and zero state',
  ],
  [
    'mailchimp-content-pagination-controls',
    'content-pagination-controls',
    'Content pagination controls',
  ],
  [
    'mailchimp-integrations-directory',
    'integrations-directory',
    'Integration search, filters and cards',
  ],
  [
    'mailchimp-integration-pagination',
    'integration-pagination',
    'Integration directory pagination',
  ],
  ['mailchimp-email-template-tabs', 'email-template-tabs', 'Email template tab navigation'],
  [
    'mailchimp-email-template-category-controls',
    'email-template-category-controls',
    'Template goal categories',
  ],
  [
    'mailchimp-email-template-filter-toolbar',
    'email-template-filter-toolbar',
    'Template search, filters and sort',
  ],
  [
    'mailchimp-email-template-gallery-card',
    'email-template-gallery-card',
    'Email template preview card',
  ],
  [
    'mailchimp-saved-template-empty-state',
    'saved-template-empty-state',
    'Saved template zero state',
  ],
  ['mailchimp-recently-sent-empty-state', 'recently-sent-empty-state', 'Recently sent zero state'],
  [
    'mailchimp-flow-template-filter-toolbar',
    'flow-template-filter-toolbar',
    'Flow template search and filters',
  ],
  ['mailchimp-flow-template-card', 'flow-template-card', 'Automation flow recommendation card'],
  ['mailchimp-transactional-plan-gate', 'transactional-plan-gate', 'Transactional email plan gate'],
  ['mailchimp-survey-template-card', 'survey-template-card', 'Survey starter template card'],
  [
    'mailchimp-subscriber-preferences-empty-state',
    'subscriber-preferences-empty-state',
    'Subscriber preferences setup state',
  ],
  [
    'mailchimp-inbox-onboarding-modal',
    'inbox-onboarding-modal',
    'Audience inbox onboarding dialog',
  ],
  [
    'mailchimp-website-settings-empty-state',
    'website-settings-empty-state',
    'Website settings prerequisite state',
  ],
  [
    'mailchimp-website-reports-empty-state',
    'website-reports-empty-state',
    'Website reports prerequisite state',
  ],
  ['mailchimp-brand-kit-editor', 'brand-kit-editor', 'Brand Kit control tiles'],
  [
    'mailchimp-manage-integrations-card',
    'manage-integrations-card',
    'Managed integration recommendation card',
  ],
  ['mailchimp-forms-system-forms-table', 'forms-system-forms-table', 'System forms status table'],
  ['mailchimp-forms-audience-defaults', 'forms-audience-defaults', 'Audience-wide forms defaults'],
  [
    'mailchimp-connected-sites-empty-state',
    'connected-sites-empty-state',
    'Connected-sites zero state',
  ],
  [
    'mailchimp-forms-popup-template-strip',
    'forms-popup-template-strip',
    'Popup form template strip',
  ],
  ['mailchimp-forms-integration-cards', 'forms-integration-cards', 'Form integration cards'],
  [
    'mailchimp-content-products-empty-state',
    'content-products-empty-state',
    'Products content zero state',
  ],
  [
    'mailchimp-content-instagram-connect-state',
    'content-instagram-connect-state',
    'Instagram connection state',
  ],
  ['mailchimp-content-giphy-search', 'content-giphy-search', 'Giphy search and privacy notice'],
  [
    'mailchimp-content-canva-connect-state',
    'content-canva-connect-state',
    'Canva connection state',
  ],
];

export const mailchimpIds = entries.map(([id]) => id);
export const mailchimpPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: MailchimpPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated read-only Mailchimp observation on 2026-10-09. Account identity, audience IDs, CSRF values, analytics session identifiers, opaque integration IDs and provider screenshots are omitted. No campaign, contact, form, automation, message, integration, upload, AI, settings, billing, purchase, delete, commit, push or deployment action was exercised.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [
        { name: 'variant', type: 'MailchimpVariant', required: true, description },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables fixture controls without contacting Mailchimp.',
        },
      ],
    },
  ])
) as PreviewRegistry;

import type { PreviewConfig, PreviewRegistry } from '../types';
import { FreshchatOmniPreview, type FreshchatOmniVariant } from './FreshchatOmniPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, FreshchatOmniVariant, string, Array<[string, string, string?]>]> = [
  [
    'freshdesk-omni-application-shell',
    'application-shell',
    'Freshdesk Omni application shell',
    [['default', 'Quick start shell']],
  ],
  [
    'freshdesk-omni-channel-chooser',
    'channel-chooser',
    'Preferred channel chooser',
    [
      ['default', 'Default chooser'],
      ['web-chat', 'Web Chat selected', 'web-chat'],
    ],
  ],
  [
    'freshdesk-omni-product-switcher',
    'product-switcher',
    'Freshworks product switcher',
    [['open', 'Open switcher']],
  ],
  [
    'freshdesk-omni-command-center',
    'command-center',
    'Command Center ticket workspace',
    [['populated', 'Populated ticket cards']],
  ],
  [
    'freshdesk-omni-ticket-view-selector',
    'ticket-view-selector',
    'Ticket view selector drawer',
    [['open', 'Open view drawer']],
  ],
  [
    'freshdesk-omni-admin-catalogue',
    'admin-catalogue',
    'Admin settings catalogue',
    [['channels', 'Chat and channel settings']],
  ],
  [
    'freshdesk-omni-web-chat-customizer',
    'web-chat-customizer',
    'Web Chat customization entry',
    [['customize', 'Customize step']],
  ],
  [
    'freshdesk-omni-web-chat-configuration',
    'web-chat-configuration',
    'Web Chat detailed settings',
    [
      ['appearance', 'Appearance', 'appearance'],
      ['content', 'Content', 'content'],
      ['preferences', 'Preferences', 'preferences'],
    ],
  ],
  [
    'freshdesk-omni-ai-agent-studio-unavailable',
    'ai-agent-unavailable',
    'AI Agent Studio unavailable route',
    [['not-found', 'Provider not-found state']],
  ],
  [
    'freshdesk-omni-sample-dashboard',
    'sample-dashboard',
    'Sample dashboard state',
    [['sample', 'Sample metrics dashboard']],
  ],
  [
    'freshdesk-omni-contacts-list',
    'contacts-list',
    'Contact directory and filters',
    [['populated', 'Fictional contact directory']],
  ],
  [
    'freshdesk-omni-companies-list',
    'companies-list',
    'Company directory and filters',
    [['populated', 'Fictional company directory']],
  ],
  [
    'freshdesk-omni-knowledge-base-onboarding',
    'knowledge-base-onboarding',
    'Knowledge Base onboarding',
    [['empty', 'First article onboarding']],
  ],
  [
    'freshdesk-omni-forums-onboarding',
    'forums-onboarding',
    'Forums onboarding',
    [['empty', 'First category onboarding']],
  ],
  [
    'freshdesk-omni-analytics-report-library',
    'analytics-report-library',
    'Analytics report library',
    [['all-reports', 'All reports library']],
  ],
  [
    'freshdesk-omni-freddy-insights-onboarding',
    'freddy-insights-onboarding',
    'Freddy AI Insights onboarding',
    [['intro', 'Insights introduction']],
  ],
  [
    'freshdesk-omni-global-new-menu',
    'global-new-menu',
    'Global creation menu',
    [['open', 'Open menu']],
  ],
  [
    'freshdesk-omni-global-search',
    'global-search',
    'Global search overlay',
    [['open', 'Open search']],
  ],
  ['freshdesk-omni-help-menu', 'help-menu', 'Help and support menu', [['open', 'Open menu']]],
  ['freshdesk-omni-apps-menu', 'apps-menu', 'Apps and marketplace menu', [['open', 'Open menu']]],
  [
    'freshdesk-omni-agents-management',
    'agents-management',
    'Agent management list',
    [['empty', 'No listed agents']],
  ],
  [
    'freshdesk-omni-groups-onboarding',
    'groups-onboarding',
    'Groups onboarding',
    [['empty', 'Suggested groups']],
  ],
  [
    'freshdesk-omni-roles-management',
    'roles-management',
    'Agent roles management',
    [['default', 'Standard roles']],
  ],
  [
    'freshdesk-omni-business-hours',
    'business-hours',
    'Business hours settings',
    [['default', 'Default schedule']],
  ],
  [
    'freshdesk-omni-canned-responses-onboarding',
    'canned-responses-onboarding',
    'Canned response onboarding',
    [['empty', 'Suggested replies']],
  ],
  [
    'freshdesk-omni-ticket-fields-builder',
    'ticket-fields-builder',
    'Ticket fields builder',
    [['default', 'Default fields']],
  ],
  [
    'freshdesk-omni-automations-empty',
    'automations-empty',
    'Automation rules onboarding',
    [['empty', 'No rules']],
  ],
  [
    'freshdesk-omni-sla-policies',
    'sla-policies',
    'SLA policy list',
    [['default', 'Default policies']],
  ],
  [
    'freshdesk-omni-ticket-forms',
    'ticket-forms',
    'Ticket form inventory',
    [['default', 'Fictional forms']],
  ],
  [
    'freshdesk-omni-email-notifications',
    'email-notifications',
    'Email notification settings',
    [['agent', 'Agent notifications']],
  ],
  [
    'freshdesk-omni-ticket-templates',
    'ticket-templates',
    'Ticket template inventory',
    [['default', 'Fictional template']],
  ],
  [
    'freshdesk-omni-scenario-automations',
    'scenario-automations',
    'Scenario automation inventory',
    [['shared', 'Shared scenarios']],
  ],
  [
    'freshdesk-omni-tags-management',
    'tags-management',
    'Tag management table',
    [['default', 'Fictional tag']],
  ],
  [
    'freshdesk-omni-contact-fields-builder',
    'contact-fields-builder',
    'Contact field builder',
    [['default', 'Default contact fields']],
  ],
  [
    'freshdesk-omni-company-fields-builder',
    'company-fields-builder',
    'Company field builder',
    [['default', 'Default company fields']],
  ],
  [
    'freshdesk-omni-audit-log',
    'audit-log',
    'Account audit log',
    [['default', 'Fictional audit rows']],
  ],
  [
    'freshdesk-omni-data-usage-reports',
    'data-usage-reports',
    'Data usage report library',
    [['curated', 'Curated usage reports']],
  ],
  [
    'freshdesk-omni-account-exports',
    'account-exports',
    'Account export jobs',
    [['empty', 'No export jobs']],
  ],
  [
    'freshdesk-omni-scheduled-exports',
    'scheduled-exports',
    'Scheduled activity exports',
    [['default', 'Export schedule types']],
  ],
  [
    'freshdesk-omni-customer-satisfaction-surveys',
    'customer-satisfaction-surveys',
    'Customer satisfaction survey inventory',
    [['default', 'Fictional surveys']],
  ],
  [
    'freshdesk-omni-canned-forms',
    'canned-forms',
    'Canned form onboarding',
    [['intro', 'Form templates']],
  ],
  [
    'freshdesk-omni-skills-onboarding',
    'skills-onboarding',
    'Skills onboarding',
    [['empty', 'No skills']],
  ],
  [
    'freshdesk-omni-agent-shifts-onboarding',
    'agent-shifts-onboarding',
    'Agent shifts onboarding',
    [['empty', 'No shifts']],
  ],
  [
    'freshdesk-omni-agent-statuses',
    'agent-statuses',
    'Agent status inventory',
    [['default', 'Representative statuses']],
  ],
  [
    'freshdesk-omni-quick-automations',
    'quick-automations',
    'Quick automation inventory',
    [['default', 'Fictional rule']],
  ],
  [
    'freshdesk-omni-session-replay-onboarding',
    'session-replay-onboarding',
    'Session replay integration',
    [['disconnected', 'Disconnected']],
  ],
  [
    'freshdesk-omni-average-handling-time',
    'average-handling-time',
    'Average handling time settings',
    [['disabled', 'Disabled settings']],
  ],
  [
    'freshdesk-omni-custom-objects-error',
    'custom-objects-error',
    'Custom objects throttling state',
    [['error', 'Too many requests']],
  ],
  [
    'freshdesk-omni-advanced-ticketing',
    'advanced-ticketing',
    'Advanced ticketing capabilities',
    [['overview', 'Capability overview']],
  ],
  [
    'freshdesk-omni-sandbox-onboarding',
    'sandbox-onboarding',
    'Sandbox onboarding',
    [['inactive', 'Not built']],
  ],
  [
    'freshdesk-omni-freshservice-onboarding',
    'freshservice-onboarding',
    'Freshservice integration onboarding',
    [['disconnected', 'Disconnected']],
  ],
  [
    'freshdesk-omni-freshsales-suite-integration',
    'freshsales-suite-integration',
    'Freshsales Suite integration',
    [['overview', 'Capability overview']],
  ],
  [
    'freshdesk-omni-whatsapp-onboarding',
    'whatsapp-onboarding',
    'WhatsApp onboarding',
    [['disconnected', 'Disconnected']],
  ],
  [
    'freshdesk-omni-portals-overview',
    'portals-overview',
    'Self-service portals',
    [['default', 'Default portal']],
  ],
  [
    'freshdesk-omni-support-email-setup',
    'support-email-setup',
    'Support email setup',
    [['new', 'New support email']],
  ],
  [
    'freshdesk-omni-mobile-chat-sdk',
    'mobile-chat-sdk',
    'Mobile Chat SDK setup',
    [['start', 'Widget selection']],
  ],
  [
    'freshdesk-omni-facebook-onboarding',
    'facebook-onboarding',
    'Facebook integration onboarding',
    [['disconnected', 'Disconnected']],
  ],
  [
    'freshdesk-omni-feedback-form',
    'feedback-form',
    'Embedded feedback form settings',
    [['default', 'Fictional settings']],
  ],
  [
    'freshdesk-omni-proactive-outreach-error',
    'proactive-outreach-error',
    'Proactive outreach error',
    [['error', 'Provider error']],
  ],
  [
    'freshdesk-omni-omniroute',
    'omniroute',
    'Omniroute workload settings',
    [['empty', 'No agent entries']],
  ],
  [
    'freshdesk-omni-threads-settings',
    'threads-settings',
    'Threads settings',
    [['enabled', 'Feature overview']],
  ],
  [
    'freshdesk-omni-multiple-products',
    'multiple-products',
    'Multiple products inventory',
    [['default', 'Fictional product']],
  ],
  [
    'freshdesk-omni-apps-marketplace',
    'apps-marketplace',
    'Apps marketplace',
    [['loading', 'Catalogue loading']],
  ],
  [
    'freshdesk-omni-mcp-settings',
    'mcp-settings',
    'MCP server settings',
    [['sanitized', 'Sanitized status']],
  ],
  [
    'freshdesk-omni-helpdesk-settings',
    'helpdesk-settings',
    'Helpdesk account settings',
    [['sanitized', 'Fictional preferences']],
  ],
  [
    'freshchat-messenger-home',
    'messenger-home',
    'Freshchat customer widget home',
    [['open', 'Open widget']],
  ],
  [
    'freshchat-faq-search',
    'faq-search',
    'Freshchat FAQ search',
    [
      ['categories', 'Category state'],
      ['results', 'Populated results', 'results'],
    ],
  ],
  [
    'freshchat-faq-article',
    'faq-article',
    'Freshchat FAQ article detail',
    [['article', 'Article detail']],
  ],
];

export const freshchatOmniIds = entries.map(([id]) => id);

export const freshchatOmniPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description, states]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: FreshchatOmniPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated Freshdesk Omni and embedded Freshchat observation on 2026-10-08. Fixture identities and content are fictional. Messaging, ratings, channel creation, persistence and provider writes were not exercised.',
      fixtures: states.map(([stateId, title, initialState]) => ({
        id: stateId,
        title,
        props: { variant, initialState },
      })),
      config,
      propsSchema: [
        { name: 'variant', type: 'FreshchatOmniVariant', required: true, description },
        {
          name: 'initialState',
          type: 'string',
          required: false,
          description: 'Selects a documented fictional state.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Marks the fixture disabled without contacting Freshworks.',
        },
      ],
    },
  ])
);

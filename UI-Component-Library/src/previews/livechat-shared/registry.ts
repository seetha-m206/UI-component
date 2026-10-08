import type { PreviewConfig, PreviewRegistry } from '../types';
import { LivechatPreview, type LivechatVariant } from './LivechatPreview';
import { livechatExtendedEntries } from './LivechatExtendedData';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, LivechatVariant, string, Array<[string, string, string?]>]> = [
  [
    'livechat-application-shell',
    'application-shell',
    'LiveChat application shell',
    [['default', 'Observed shell with fictional identity']],
  ],
  [
    'livechat-home-onboarding',
    'home-onboarding',
    'LiveChat Home onboarding workspace',
    [['default', 'Setup checklist']],
  ],
  [
    'livechat-trial-banner',
    'trial-banner',
    'LiveChat trial banner',
    [['default', 'Trial boundary']],
  ],
  [
    'livechat-installation-gate',
    'installation-gate',
    'LiveChat installation gate',
    [
      ['default', 'Manual code card'],
      ['integrations', 'Integrations expanded', 'integrations'],
    ],
  ],
  [
    'livechat-developer-invite',
    'developer-invite',
    'LiveChat developer invitation form',
    [['default', 'Empty unsubmitted form']],
  ],
  [
    'livechat-integration-accordion',
    'integration-accordion',
    'LiveChat website integration accordion',
    [['default', 'Tag Manager entry expanded']],
  ],
  [
    'livechat-global-search',
    'global-search',
    'LiveChat global search overlay',
    [
      ['empty', 'Empty search'],
      ['results', 'Navigation results', 'results'],
    ],
  ],
  [
    'text-access-blocked',
    'text-access-blocked',
    'Text migration access boundary',
    [['default', 'Switch-to-Text boundary']],
  ],
  [
    'livechat-sample-chat-workspace',
    'sample-chat-workspace',
    'LiveChat sample chat workspace',
    [['default', 'Provider practice chat with fictionalized content']],
  ],
  [
    'livechat-chat-action-menu',
    'chat-action-menu',
    'LiveChat sample chat action menu',
    [['default', 'Disabled actions and guarded end action']],
  ],
  [
    'livechat-engage-traffic-empty',
    'engage-traffic',
    'LiveChat Engage traffic empty state',
    [['default', 'Widget installation boundary']],
  ],
  [
    'livechat-campaigns-list',
    'campaigns-list',
    'LiveChat recurring campaigns table',
    [['default', 'Five provider-created campaign rows']],
  ],
  [
    'livechat-goals-empty',
    'goals-empty',
    'LiveChat goals empty state',
    [['default', 'No goals configured']],
  ],
  [
    'livechat-automate-overview',
    'automate-overview',
    'LiveChat automation overview',
    [['default', 'Assisted-work catalogue']],
  ],
  [
    'livechat-canned-responses-list',
    'canned-responses',
    'LiveChat canned responses list',
    [['default', 'Sanitized response inventory']],
  ],
  [
    'livechat-routing-rules-empty',
    'routing-rules',
    'LiveChat routing rules empty state',
    [['default', 'Default General group destination']],
  ],
  [
    'livechat-workflows-gallery',
    'workflows-gallery',
    'LiveChat workflows template gallery',
    [['default', 'Representative template categories']],
  ],
  [
    'livechat-archives-empty',
    'archives-empty',
    'LiveChat Archives empty state',
    [['default', 'No finished chats']],
  ],
  [
    'livechat-team-directory',
    'team-directory',
    'LiveChat Team directory',
    [['default', 'Fictional owner and group details']],
  ],
  [
    'livechat-reports-summary',
    'reports-summary',
    'LiveChat reports summary',
    [['default', 'Zero-data seven-day summary']],
  ],
  [
    'livechat-total-chats-report',
    'total-chats-report',
    'LiveChat total chats report',
    [['default', 'Seven-day zero-data breakdown']],
  ],
  [
    'livechat-apps-marketplace',
    'apps-marketplace',
    'LiveChat Apps marketplace',
    [['default', 'Marketplace filters and sample listings']],
  ],
  [
    'livechat-helpdesk-boundary',
    'helpdesk-boundary',
    'LiveChat HelpDesk product boundary',
    [['default', 'Ticketing product promotion']],
  ],
  [
    'livechat-settings-catalogue',
    'settings-catalogue',
    'LiveChat Settings catalogue',
    [['default', 'Expanded category navigation']],
  ],
  [
    'livechat-widget-customization',
    'widget-customization',
    'LiveChat widget customization',
    [['default', 'Appearance and position controls']],
  ],
  ...livechatExtendedEntries,
];

export const livechatIds = entries.map(([id]) => id);

export const livechatPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description, states]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: LivechatPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated LiveChat and Text observation on 2026-10-08. Identities, installation values, invitation links and message content are sanitized or fictional. The user-authorized onboarding continuation was used to reach read-only routes. No invitation, integration connection, chat send, Copilot prompt, purchase or settings change was exercised.',
      fixtures: states.map(([stateId, title, initialState]) => ({
        id: stateId,
        title,
        props: { variant, initialState },
      })),
      config,
      propsSchema: [
        { name: 'variant', type: 'LivechatVariant', required: true, description },
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
          description: 'Marks the fixture disabled without contacting the provider.',
        },
      ],
    },
  ])
);

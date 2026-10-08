import type { PreviewConfig, PreviewRegistry } from '../types';
import { ZapierPreview, type ZapierVariant } from './ZapierPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, ZapierVariant, string]> = [
  ['zapier-application-shell', 'application-shell', 'Authenticated application shell'],
  ['zapier-home-copilot', 'home-copilot', 'Home Copilot creation surface'],
  ['zapier-automations-workspace', 'automations-workspace', 'Automation inventory and empty state'],
  ['zapier-creation-menu', 'creation-menu', 'Cross-product creation menu'],
  ['zapier-guided-templates', 'guided-templates', 'Reusable guided-template boundary'],
  ['zapier-zap-editor-canvas', 'zap-editor-canvas', 'Blank draft editor canvas'],
  ['zapier-trigger-action-picker', 'trigger-action-picker', 'Trigger and action app picker'],
  ['zapier-ai-action-palette', 'ai-action-palette', 'AI prompt and quick-action palette'],
  [
    'zapier-app-connection-boundary',
    'app-connection-boundary',
    'App connection inventory boundary',
  ],
  [
    'zapier-data-mapping-testing',
    'data-mapping-testing',
    'Source-reviewed mapping and testing boundary',
  ],
  [
    'zapier-flow-controls-approvals',
    'flow-controls-approvals',
    'Filters, Paths and approval controls',
  ],
  ['zapier-zap-history-failures', 'zap-history-failures', 'Run history and failure recovery'],
  ['zapier-task-usage-plan-gates', 'task-usage-plan-gates', 'Task usage and plan gates'],
  ['zapier-settings-catalogue', 'settings-catalogue', 'Non-sensitive settings catalogue'],
  [
    'zapier-interactive-onboarding-tour',
    'interactive-onboarding-tour',
    'Interactive product onboarding tour',
  ],
  [
    'zapier-template-recommendation-carousel',
    'template-recommendation-carousel',
    'Recommended automation templates',
  ],
  ['zapier-ai-category-tabs', 'ai-category-tabs', 'AI action category navigation'],
  [
    'zapier-human-in-loop-ai-actions',
    'human-in-loop-ai-actions',
    'Human review trigger and action choices',
  ],
  ['zapier-editor-linked-assets', 'editor-linked-assets', 'Linked Tables and Forms panel'],
  ['zapier-editor-notes', 'editor-notes', 'Zap and step notes panel'],
  ['zapier-editor-change-history', 'editor-change-history', 'Unsaved workflow change history'],
  ['zapier-editor-run-test-panel', 'editor-run-test-panel', 'Run history and test tabs'],
  ['zapier-editor-status', 'editor-status', 'Editor issue status panel'],
  [
    'zapier-editor-advanced-settings',
    'editor-advanced-settings',
    'Per-Zap error handling settings',
  ],
  ['zapier-editor-versions', 'editor-versions', 'Empty Zap version history'],
  ['zapier-history-status-filter', 'history-status-filter', 'Ten-state run history filter'],
  ['zapier-autoreplay-help', 'autoreplay-help', 'Autoreplay disabled guidance'],
  ['zapier-usage-empty-report', 'usage-empty-report', 'Task usage empty report'],
  [
    'zapier-connection-management-states',
    'connection-management-states',
    'Connection views, filters and add boundary',
  ],
];

export const zapierIds = entries.map(([id]) => id);

export const zapierPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: ZapierPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated read-only Zapier observation on 2026-10-08 plus explicitly labelled official-documentation review. Account names, email addresses, account IDs, query identifiers, connection identities, customer data, billing details and security settings are excluded. No app connection, AI prompt, note, field mapping, live test, replay, approval request, template change, advanced-setting change, publish or activation was exercised.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [
        { name: 'variant', type: 'ZapierVariant', required: true, description },
        {
          name: 'initialState',
          type: 'string',
          required: false,
          description: 'Reserved for documented fictional states.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Marks the fixture disabled without contacting Zapier.',
        },
      ],
    },
  ])
);

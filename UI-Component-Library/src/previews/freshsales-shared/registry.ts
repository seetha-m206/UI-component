import type { PreviewConfig, PreviewRegistry } from '../types';
import { FreshsalesPreview, type FreshsalesVariant } from './FreshsalesPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, FreshsalesVariant, string, Array<[string, string, string?]>]> = [
  [
    'freshsales-application-shell',
    'application-shell',
    'Shared CRM shell and setup guide',
    [['default', 'Observed shell']],
  ],
  [
    'freshsales-contacts-workspace',
    'contacts-workspace',
    'Contacts list workspace',
    [['populated', 'Fictional populated table']],
  ],
  [
    'freshsales-filter-and-view-controls',
    'filter-and-view-controls',
    'Filter builder and saved-view selector',
    [
      ['filters', 'Observed filter builder', 'filter'],
      ['views', 'Observed saved views', 'views'],
    ],
  ],
  [
    'freshsales-accounts-workspace',
    'accounts-workspace',
    'Accounts list workspace',
    [['populated', 'Fictional populated table']],
  ],
  [
    'freshsales-deals-multi-view',
    'deals-multi-view',
    'Deals pipeline, forecast and table',
    [
      ['pipeline', 'Observed pipeline', 'pipeline'],
      ['forecast', 'Observed forecast', 'forecast'],
      ['table', 'Observed table', 'table'],
    ],
  ],
  [
    'freshsales-contact-record',
    'contact-record',
    'Contact overview, details and activity timeline',
    [
      ['overview', 'Observed overview', 'overview'],
      ['details', 'Observed field details', 'details'],
      ['activities', 'Observed timeline', 'activities'],
    ],
  ],
  [
    'freshsales-dashboard-sample-state',
    'dashboard-sample-state',
    'Provider-labeled sample dashboard state',
    [['sample', 'Reconstructed sample-image state']],
  ],
  [
    'freshsales-analytics-report-library',
    'analytics-report-library',
    'Analytics report catalogue',
    [['all', 'Observed report list']],
  ],
  [
    'freshsales-conversations-onboarding',
    'conversations-onboarding',
    'Mailbox connection onboarding',
    [['provider', 'Observed provider chooser']],
  ],
  [
    'freshsales-sales-sequences-onboarding',
    'sales-sequences-onboarding',
    'Sales sequence templates',
    [['templates', 'Observed onboarding templates']],
  ],
  [
    'freshsales-workflow-template-library',
    'workflow-template-library',
    'Workflow template catalogue',
    [['templates', 'Observed empty-account template state']],
  ],
  [
    'freshsales-admin-settings-catalogue',
    'admin-settings-catalogue',
    'Admin settings catalogue',
    [
      ['people', 'People settings', 'people'],
      ['deals', 'Deal settings', 'deals'],
      ['teams', 'Teams and permissions', 'teams'],
      ['data', 'Data and import', 'data'],
      ['channels', 'Channels', 'channels'],
      ['integrations', 'Integrations', 'integrations'],
      ['account', 'Account settings', 'account'],
    ],
  ],
  [
    'freshsales-deal-record-detail',
    'deal-record-detail',
    'Deal record detail drawer',
    [['overview', 'Observed deal detail pattern']],
  ],
  [
    'freshsales-account-record-overview',
    'account-record-overview',
    'Account record overview drawer',
    [['overview', 'Observed account overview pattern']],
  ],
  [
    'freshsales-deal-import-setup',
    'deal-import-setup',
    'Deal import step-one boundary',
    [
      ['upload', 'Upload entry state', 'upload'],
      ['required', 'Required fields disclosure', 'required'],
      ['duplicates', 'Duplicate matching boundary', 'duplicates'],
    ],
  ],
  [
    'freshsales-roles-and-permissions',
    'roles-and-permissions',
    'Roles catalogue and license summary',
    [['catalogue', 'Observed roles catalogue']],
  ],
  [
    'freshsales-role-permission-matrix',
    'role-permission-matrix',
    'Role permission matrix',
    [
      ['modules', 'Module permissions', 'modules'],
      ['actions', 'Record actions', 'actions'],
      ['freddy', 'Freddy permissions', 'freddy'],
      ['admin', 'Admin permissions', 'admin'],
    ],
  ],
  [
    'freshsales-contact-scoring-setup',
    'contact-scoring-setup',
    'Contact scoring setup',
    [['empty', 'Observed empty-signal setup']],
  ],
  [
    'freshsales-freddy-ai-settings',
    'freddy-ai-settings',
    'Freddy AI settings catalogue',
    [
      ['self-service', 'Self Service features', 'self-service'],
      ['copilot', 'AI Copilot features', 'copilot'],
    ],
  ],
  [
    'freshsales-plan-boundary-states',
    'plan-boundary-states',
    'Beta, loading, unavailable and upgrade boundaries',
    [
      ['beta', 'Beta access', 'beta'],
      ['loading', 'Loading', 'loading'],
      ['unavailable', 'Unavailable', 'unavailable'],
      ['upgrade', 'Upgrade boundary', 'upgrade'],
    ],
  ],
  [
    'freshsales-pipeline-stage',
    'pipeline-stage',
    'Independent pipeline stage column',
    [
      ['populated', 'Populated stage', 'populated'],
      ['empty', 'Empty stage', 'empty'],
    ],
  ],
  [
    'freshsales-deal-card',
    'deal-card',
    'Independent pipeline deal card',
    [
      ['with-product', 'Deal with product', 'with-product'],
      ['without-product', 'Deal without product', 'without-product'],
    ],
  ],
  [
    'freshsales-loading-skeleton',
    'loading-skeleton',
    'Independent loading skeleton',
    [
      ['table', 'Table skeleton', 'table'],
      ['drawer', 'Drawer skeleton', 'drawer'],
      ['timeline', 'Timeline skeleton', 'timeline'],
    ],
  ],
  [
    'freshsales-saved-view-menu',
    'saved-view-menu',
    'Independent saved-view menu',
    [['open', 'Expanded saved-view menu', 'open']],
  ],
  [
    'freshsales-filter-drawer',
    'filter-drawer',
    'Independent filter drawer',
    [
      ['empty', 'Empty guidance', 'empty'],
      ['fields', 'Field chooser', 'fields'],
      ['rule', 'Rule ready to apply', 'rule'],
    ],
  ],
  [
    'freshsales-table-toolbar',
    'table-toolbar',
    'Independent list-table toolbar',
    [
      ['default', 'Default toolbar', 'default'],
      ['filtered', 'Filter-applied toolbar', 'filtered'],
    ],
  ],
  [
    'freshsales-record-action-bar',
    'record-action-bar',
    'Independent record action bar',
    [
      ['contact', 'Contact actions', 'contact'],
      ['deal', 'Deal actions', 'deal'],
      ['account', 'Account actions', 'account'],
    ],
  ],
  [
    'freshsales-field-group',
    'field-group',
    'Independent grouped record fields',
    [
      ['populated', 'Populated fields', 'populated'],
      ['empty', 'Show empty fields', 'empty'],
    ],
  ],
  [
    'freshsales-activity-card',
    'activity-card',
    'Independent activity timeline card',
    [
      ['created', 'Created activity', 'created'],
      ['replied', 'Replied activity', 'replied'],
    ],
  ],
  [
    'freshsales-import-dropzone',
    'import-dropzone',
    'Independent import dropzone',
    [
      ['idle', 'Idle dropzone', 'idle'],
      ['disabled', 'Disabled dropzone', 'disabled'],
    ],
  ],
  [
    'freshsales-required-fields-popover',
    'required-fields-popover',
    'Independent required-fields disclosure',
    [
      ['collapsed', 'Collapsed disclosure', 'collapsed'],
      ['expanded', 'Expanded disclosure', 'expanded'],
    ],
  ],
  [
    'freshsales-duplicate-option',
    'duplicate-option',
    'Independent duplicate-matching option',
    [['unavailable', 'Unavailable before upload', 'unavailable']],
  ],
  [
    'freshsales-license-banner',
    'license-banner',
    'Independent license-usage banner',
    [
      ['available', 'License available', 'available'],
      ['exhausted', 'License exhausted', 'exhausted'],
    ],
  ],
  [
    'freshsales-role-row',
    'role-row',
    'Independent role table row',
    [
      ['assigned', 'Assigned role', 'assigned'],
      ['unassigned', 'Unassigned role', 'unassigned'],
    ],
  ],
  [
    'freshsales-permission-row',
    'permission-row',
    'Independent permission matrix row',
    [
      ['enabled', 'Enabled default permission', 'enabled'],
      ['disabled', 'Disabled capability permission', 'disabled'],
    ],
  ],
  [
    'freshsales-signal-chip',
    'signal-chip',
    'Independent scoring signal chip',
    [
      ['positive', 'Positive signal', 'positive'],
      ['negative', 'Negative signal', 'negative'],
    ],
  ],
  [
    'freshsales-feature-toggle',
    'feature-toggle',
    'Independent Freddy feature toggle',
    [
      ['on', 'Enabled feature', 'on'],
      ['off', 'Disabled-by-choice feature', 'off'],
      ['disabled', 'Unavailable feature', 'disabled'],
    ],
  ],
  [
    'freshsales-application-shell-loading',
    'screen-loading-state',
    'Application-shell loading screen',
    [['loading', 'Application shell loading', 'application-shell']],
  ],
  [
    'freshsales-analytics-loading',
    'screen-loading-state',
    'Analytics loading screen',
    [['loading', 'Analytics loading', 'analytics']],
  ],
  [
    'freshsales-workflow-loading',
    'screen-loading-state',
    'Workflow-library loading screen',
    [['loading', 'Workflow templates loading', 'workflows']],
  ],
  [
    'freshsales-deals-loading',
    'screen-loading-state',
    'Deals loading screen',
    [['loading', 'Deals loading', 'deals']],
  ],
  [
    'freshsales-contact-activity-loading',
    'screen-loading-state',
    'Contact activity loading screen',
    [['loading', 'Contact activity loading', 'contact-activity']],
  ],
  [
    'freshsales-deal-detail-loading',
    'screen-loading-state',
    'Deal-detail loading screen',
    [['loading', 'Deal detail loading', 'deal-detail']],
  ],
];

export const freshsalesPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description, states]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: FreshsalesPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated Freshsales source review on 2026-10-07. All fixture identities and values are fictional. Provider writes, persistence, permissions, network contracts and consequential outcomes were not exercised.',
      fixtures: states.map(([stateId, title, initialState]) => ({
        id: stateId,
        title,
        props: { variant, initialState },
      })),
      config,
      propsSchema: [
        { name: 'variant', type: 'FreshsalesVariant', required: true, description },
        {
          name: 'initialState',
          type: 'string',
          required: false,
          description: 'Selects a documented local state.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Marks the fixture disabled without contacting Freshsales.',
        },
      ],
    },
  ])
);

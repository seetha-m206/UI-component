import type { PreviewConfig, PreviewRegistry } from '../types';
import { PipedrivePreview, type PipedriveVariant } from './PipedrivePreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1120 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, PipedriveVariant, string, Array<[string, string, string?]>]> = [
  [
    'pipedrive-application-shell',
    'application-shell',
    'Shared application shell',
    [['default', 'Observed shell']],
  ],
  [
    'pipedrive-setup-guide-hero',
    'setup-guide-hero',
    'Setup Guide progress hero',
    [['default', 'Observed hero']],
  ],
  [
    'pipedrive-setup-guide-task-group',
    'setup-task-group',
    'Expandable Setup Guide task group',
    [
      ['expanded', 'Observed expanded group', 'open'],
      ['collapsed', 'Local collapsed state', 'closed'],
    ],
  ],
  [
    'pipedrive-setup-guide-task-row',
    'setup-task-row',
    'Setup Guide task row',
    [['default', 'Observed row pattern']],
  ],
  [
    'pipedrive-more-menu',
    'more-menu',
    'Primary navigation More menu',
    [
      ['open', 'Observed menu open', 'open'],
      ['closed', 'Closed locally', 'closed'],
    ],
  ],
  [
    'pipedrive-quick-add-menu',
    'quick-add-menu',
    'Global Quick Add menu',
    [
      ['open', 'Observed menu open', 'open'],
      ['closed', 'Closed locally', 'closed'],
    ],
  ],
  [
    'pipedrive-notifications-drawer',
    'notifications-drawer',
    'Notifications empty-state drawer',
    [
      ['open', 'Observed drawer', 'open'],
      ['closed', 'Closed locally', 'closed'],
    ],
  ],
  [
    'pipedrive-quick-help-drawer',
    'quick-help-drawer',
    'Contextual Quick Help drawer',
    [
      ['open', 'Observed drawer', 'open'],
      ['closed', 'Closed locally', 'closed'],
    ],
  ],
  [
    'pipedrive-sales-assistant-panel',
    'sales-assistant-panel',
    'Sales Assistant Beta empty composer',
    [
      ['open', 'Observed panel', 'open'],
      ['closed', 'Closed locally', 'closed'],
    ],
  ],
  [
    'pipedrive-avatar-coachmark',
    'avatar-coachmark',
    'Avatar settings coachmark',
    [['open', 'Observed coachmark']],
  ],
  [
    'pipedrive-deals-navigation',
    'deals-navigation',
    'Deals workspace navigation',
    [['pipeline', 'Observed Pipeline tab']],
  ],
  [
    'pipedrive-import-banner',
    'import-banner',
    'Deals import guidance banner',
    [
      ['open', 'Observed banner', 'open'],
      ['closed', 'Closed locally', 'closed'],
    ],
  ],
  [
    'pipedrive-pipeline-toolbar',
    'pipeline-toolbar',
    'Pipeline controls and quick filter',
    [['default', 'Observed controls']],
  ],
  [
    'pipedrive-pipeline-selector',
    'pipeline-selector',
    'Pipeline selector and settings',
    [
      ['open', 'Observed selector', 'open'],
      ['closed', 'Closed locally', 'closed'],
    ],
  ],
  [
    'pipedrive-deals-filter-menu',
    'deals-filter-menu',
    'Deals owner and filter menu',
    [
      ['open', 'Observed menu', 'open'],
      ['closed', 'Closed locally', 'closed'],
    ],
  ],
  [
    'pipedrive-deals-actions-menu',
    'deals-actions-menu',
    'Deals actions menu',
    [
      ['open', 'Observed menu', 'open'],
      ['closed', 'Closed locally', 'closed'],
    ],
  ],
  [
    'pipedrive-deals-sort-menu',
    'deals-sort-menu',
    'Deals sorting menu',
    [
      ['open', 'Observed menu', 'open'],
      ['closed', 'Closed locally', 'closed'],
    ],
  ],
  [
    'pipedrive-pipeline-stage-column',
    'pipeline-stage',
    'Pipeline stage column',
    [['populated', 'Fictional populated stage']],
  ],
  [
    'pipedrive-deal-card',
    'deal-card',
    'Pipeline deal card',
    [['populated', 'Fictional deal card']],
  ],
  [
    'pipedrive-pipeline-onboarding-tooltip',
    'pipeline-onboarding-tooltip',
    'Industry pipeline onboarding tooltip',
    [['open', 'Observed tooltip']],
  ],
  [
    'pipedrive-deal-detail-header',
    'deal-detail-header',
    'Deal detail header and outcome actions',
    [['default', 'Observed structure with fictional data']],
  ],
  [
    'pipedrive-deal-stage-progress',
    'deal-stage-progress',
    'Deal stage progress track',
    [['default', 'Observed Proposal Made state']],
  ],
  [
    'pipedrive-deal-summary-panel',
    'deal-summary-panel',
    'Deal summary and detail sections',
    [['summary', 'Fictional summary state']],
  ],
  [
    'pipedrive-deal-history-timeline',
    'deal-history-timeline',
    'Deal activity composer and history timeline',
    [['all', 'Fictional history state']],
  ],
  [
    'pipedrive-contacts-navigation',
    'contacts-navigation',
    'Contacts module navigation',
    [['people', 'Observed People section']],
  ],
  [
    'pipedrive-contacts-toolbar',
    'contacts-toolbar',
    'Contacts list toolbar',
    [['default', 'Observed toolbar']],
  ],
  [
    'pipedrive-contacts-people-list',
    'contacts-people-list',
    'Contacts people table',
    [['populated', 'Fictional populated table']],
  ],
  [
    'pipedrive-contacts-column-customizer',
    'contacts-column-customizer',
    'Contacts column customizer',
    [['open', 'Observed disclosure state']],
  ],
  [
    'pipedrive-organizations-list',
    'organizations-list',
    'Organizations table',
    [['populated', 'Fictional onboarding organizations']],
  ],
  [
    'pipedrive-contacts-timeline',
    'contacts-timeline',
    'Contacts timeline matrix',
    [['three-months', 'Fictional three-month timeline']],
  ],
  [
    'pipedrive-activities-toolbar',
    'activities-toolbar',
    'Activities list toolbar',
    [['default', 'Observed toolbar']],
  ],
  [
    'pipedrive-activities-type-filter',
    'activities-type-filter',
    'Activity type and date filters',
    [['default', 'Observed filter groups']],
  ],
  [
    'pipedrive-activities-list',
    'activities-list',
    'Activities list table',
    [['populated', 'Fictional populated table']],
  ],
  [
    'pipedrive-activities-disclosure-menu',
    'activities-disclosure-menu',
    'Activities actions disclosure',
    [
      ['open', 'Observed actions menu', 'open'],
      ['closed', 'Closed locally', 'closed'],
    ],
  ],
  [
    'pipedrive-activity-calendar',
    'activity-calendar',
    'Weekly activity calendar',
    [['week', 'Fictional weekly calendar']],
  ],
  [
    'pipedrive-deals-list',
    'deals-list',
    'Deals tabular list',
    [['populated', 'Fictional populated deal list']],
  ],
  [
    'pipedrive-deals-forecast',
    'deals-forecast',
    'Deals monthly forecast',
    [['four-months', 'Fictional four-month forecast']],
  ],
  [
    'pipedrive-deals-archive-empty-state',
    'deals-archive-empty-state',
    'Archived deals empty state',
    [['empty', 'Observed empty state']],
  ],
  [
    'pipedrive-nova-landing',
    'nova-landing',
    'Nova meeting intelligence landing',
    [['landing', 'Observed feature and privacy landing']],
  ],
  [
    'pipedrive-projects-board',
    'projects-board',
    'Projects delivery board',
    [['empty', 'Fictional empty board with welcome overlay']],
  ],
  [
    'pipedrive-projects-templates',
    'projects-templates',
    'Projects templates empty state',
    [['empty', 'Observed no-templates state']],
  ],
  [
    'pipedrive-projects-archive',
    'projects-archive',
    'Projects archive empty state',
    [['empty', 'Observed no-archived-projects state']],
  ],
  [
    'pipedrive-projects-tasks',
    'projects-tasks',
    'Projects tasks table',
    [['populated', 'Fictional task table matching observed structure']],
  ],
  [
    'pipedrive-campaigns-feature-wall',
    'campaigns-feature-wall',
    'Campaigns add-on feature wall',
    [['onboarding', 'Observed add-on introduction']],
  ],
  [
    'pipedrive-products-empty-state',
    'products-empty-state',
    'Products first-item empty state',
    [['empty', 'Observed empty product catalogue']],
  ],
  [
    'pipedrive-marketplace-catalog',
    'marketplace-catalog',
    'Marketplace app catalogue',
    [['catalog', 'Fictional app catalogue']],
  ],
  [
    'pipedrive-pulse-feed',
    'pulse-feed',
    'Pulse daily feed',
    [['empty-today', 'Observed no-actions state']],
  ],
  [
    'pipedrive-pulse-scores-onboarding',
    'pulse-scores-onboarding',
    'Pulse Scores onboarding',
    [['onboarding', 'Observed scoring introduction']],
  ],
  [
    'pipedrive-pulse-sequences-onboarding',
    'pulse-sequences-onboarding',
    'Pulse Sequences onboarding',
    [['onboarding', 'Observed sequence introduction']],
  ],
  [
    'pipedrive-data-enrichment-feature-wall',
    'data-enrichment-feature-wall',
    'Data enrichment feature wall',
    [['onboarding', 'Observed enrichment introduction']],
  ],
  [
    'pipedrive-automations-landing',
    'automations-landing',
    'Automations landing and popular patterns',
    [['landing', 'Observed popular-automations landing']],
  ],
  [
    'pipedrive-automatic-assignment-landing',
    'automatic-assignment-landing',
    'Automatic assignment landing',
    [['landing', 'Observed rules and history landing']],
  ],
  [
    'pipedrive-documents-landing',
    'documents-landing',
    'Smart Docs connection landing',
    [['unconnected', 'Observed unconnected Smart Docs state']],
  ],
  [
    'pipedrive-import-data-landing',
    'import-data-landing',
    'Import data source chooser',
    [['new-import', 'Observed new-import landing']],
  ],
  [
    'pipedrive-export-data-landing',
    'export-data-landing',
    'Export data configuration',
    [['empty', 'Observed no-exports state']],
  ],
  [
    'pipedrive-restore-data-landing',
    'restore-data-landing',
    'Restore data review table',
    [['empty', 'Observed zero-item restore state']],
  ],
  [
    'pipedrive-ai-settings',
    'ai-settings',
    'Pipedrive AI administration',
    [['released', 'Observed released-features landing']],
  ],
  [
    'pipedrive-phone-calls-settings',
    'phone-calls-settings',
    'Phone call preferences',
    [['personal', 'Observed personal calling settings']],
  ],
  [
    'pipedrive-products-settings',
    'products-settings',
    'Products and default tax settings',
    [['enabled', 'Observed enabled Products state']],
  ],
  [
    'pipedrive-webhooks-empty-state',
    'webhooks-empty-state',
    'Webhooks empty state',
    [['empty', 'Observed no-webhooks state']],
  ],
  [
    'pipedrive-merge-duplicates-empty-state',
    'merge-duplicates-empty-state',
    'Merge duplicates empty state',
    [['people-empty', 'Observed no-duplicate-people state']],
  ],
  [
    'pipedrive-installed-apps-empty-state',
    'installed-apps-empty-state',
    'Installed Marketplace apps',
    [['empty', 'Observed no-installed-apps state']],
  ],
  [
    'pipedrive-leads-navigation',
    'leads-navigation',
    'Leads module navigation',
    [['inbox', 'Observed Leads Inbox']],
  ],
  [
    'pipedrive-leads-empty-state',
    'leads-empty-state',
    'Leads Inbox empty state',
    [['empty', 'Observed empty state']],
  ],
  [
    'pipedrive-leadbooster-navigation',
    'leadbooster-navigation',
    'LeadBooster navigation group',
    [['default', 'Observed navigation group']],
  ],
  [
    'pipedrive-leads-add-toolbar',
    'leads-add-toolbar',
    'Leads add and import toolbar',
    [['default', 'Observed controls']],
  ],
  [
    'pipedrive-insights-navigation',
    'insights-navigation',
    'Insights dashboard, goal and report navigation',
    [['empty', 'Observed empty navigation']],
  ],
  [
    'pipedrive-insights-create-menu',
    'insights-create-menu',
    'Insights Create disclosure',
    [
      ['open', 'Observed menu', 'open'],
      ['closed', 'Closed locally', 'closed'],
    ],
  ],
  [
    'pipedrive-insights-empty-state',
    'insights-empty-state',
    'Insights first-dashboard empty state',
    [['empty', 'Observed empty state']],
  ],
  [
    'pipedrive-insights-report-actions',
    'insights-report-actions',
    'Insights report creation controls',
    [['default', 'Observed controls']],
  ],
  [
    'pipedrive-sales-inbox-navigation',
    'sales-inbox-navigation',
    'Sales Inbox disabled mailbox navigation',
    [['unconfigured', 'Observed unconfigured state']],
  ],
  [
    'pipedrive-sales-inbox-onboarding',
    'sales-inbox-onboarding',
    'Sales Inbox setup hero',
    [['unconfigured', 'Fictional email fixture']],
  ],
  [
    'pipedrive-sales-inbox-feature-grid',
    'sales-inbox-feature-grid',
    'Sales Inbox feature grid',
    [['default', 'Observed feature groups']],
  ],
  [
    'pipedrive-sales-inbox-faq',
    'sales-inbox-faq',
    'Sales Inbox FAQ accordion',
    [['expanded', 'Observed disclosure state']],
  ],
];

export const pipedrivePreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, label, states]) => [
    id,
    {
      type: 'reconstructed',
      Component: PipedrivePreview,
      label: 'Authenticated observation reconstructed with fictional local data',
      evidence:
        'Authenticated Pipedrive Setup Guide, Deals pipeline, List, Forecast and Archive, Deal details, Contacts People, Organizations and Timeline, Activities List and Calendar, Nova, Projects Board, Templates, Archive and Tasks, Campaigns, Products, Marketplace, Pulse Feed, Scores, Sequences, Data enrichment, Automations, Automatic assignment, Documents, Import data, Export data, Restore data, Pipedrive AI, Phone calls, Products settings, Webhooks, Merge duplicates, Installed apps, Leads Inbox, Insights, Sales Inbox and shared-shell disclosures observed 2026-10-07. Fixtures are local-only. Creation, file upload, export generation, restore execution, record edits, stage changes, mailbox or storage connection, app installation, webhook creation, matching changes, settings, support, AI submission, billing, permissions and persistence remain unverified.',
      runtimeVerified: false,
      fixtures: states.map(([stateId, title, initialState]) => ({
        id: stateId,
        title,
        props: { variant, ...(initialState ? { initialState } : {}) },
      })),
      config,
      propsSchema: [
        {
          name: 'variant',
          type: 'PipedriveVariant',
          required: true,
          description: `Selects the ${label.toLowerCase()} reconstruction.`,
        },
        {
          name: 'initialState',
          type: 'string',
          required: false,
          description: 'Starts the fictional fixture in one documented or explicitly local state.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables the fictional fixture without affecting Pipedrive.',
        },
      ],
    },
  ])
);

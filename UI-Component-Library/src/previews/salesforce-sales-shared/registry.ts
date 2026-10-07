import type { PreviewConfig, PreviewRegistry } from '../types';
import { SalesforceSalesPreview, type SalesforceSalesVariant } from './SalesforceSalesPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, SalesforceSalesVariant, string]> = [
  ['salesforce-sales-application-shell', 'application-shell', 'Sales application shell'],
  ['salesforce-sales-object-list-workspace', 'object-list-workspace', 'Reusable Sales object list'],
  ['salesforce-sales-new-lead-form', 'new-lead-form', 'New Lead record modal'],
  ['salesforce-sales-new-contact-form', 'new-contact-form', 'New Contact record modal'],
  ['salesforce-sales-new-account-form', 'new-account-form', 'New Account record modal'],
  ['salesforce-sales-new-opportunity-form', 'new-opportunity-form', 'New Opportunity record modal'],
  ['salesforce-sales-new-product-wizard', 'new-product-wizard', 'Two-stage Product wizard'],
  ['salesforce-sales-new-event-form', 'new-event-form', 'New Event record modal'],
  ['salesforce-sales-new-task-form', 'new-task-form', 'New Task utility modal'],
  [
    'salesforce-sales-opportunity-kanban',
    'opportunity-kanban',
    'Opportunity display and filter states',
  ],
  ['salesforce-sales-calendar-week', 'calendar-week', 'Week calendar'],
  ['salesforce-sales-todo-utility', 'todo-utility', 'To Do utility panel'],
  ['salesforce-sales-analytics-collection', 'analytics-collection', 'Sales analytics collection'],
  ['salesforce-sales-performance-dashboard', 'performance-dashboard', 'Sales dashboard'],
  ['salesforce-sales-forecast-report', 'forecast-report', 'Forecast report and filters'],
  [
    'salesforce-sales-quotes-access-boundary',
    'quotes-access-boundary',
    'Quotes permission boundary',
  ],
  [
    'salesforce-sales-leads-import-flow',
    'leads-import-flow',
    'Lead import method and progress model',
  ],
  ['salesforce-sales-invoice-list', 'invoice-list', 'Invoice object list'],
  [
    'salesforce-sales-agentforce-enable-panel',
    'agentforce-enable-panel',
    'Agentforce enablement gate',
  ],
  ['salesforce-sales-quick-settings', 'quick-settings', 'Sales Quick Settings panel'],
];

export const salesforceSalesPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: SalesforceSalesPreview,
      label: 'Authenticated-source reconstruction with fictional local data',
      runtimeVerified: true,
      evidence:
        'Authenticated Salesforce Lightning Sales observation on 2026-10-07. Provider writes, imports, uploads, enablement, settings changes, communications and durable outcomes were not exercised. All identities and values in the preview are fictional.',
      fixtures: [{ id: 'default', title: 'RECONSTRUCTION · local fixture', props: { variant } }],
      config,
      propsSchema: [
        { name: 'variant', type: 'SalesforceSalesVariant', required: true, description },
        {
          name: 'initialState',
          type: 'string',
          required: false,
          description: 'Reserved for documented local-only states.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables local fixture interactions.',
        },
      ],
    },
  ])
);

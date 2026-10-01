import type { PreviewConfig, PreviewRegistry } from '../types';
import { OtterlyExtracted, type OtterlyVariant } from './OtterlyExtracted';
import { OtterlyRemaining, type OtterlyRemainingVariant } from './OtterlyRemaining';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 880 },
    { id: 'mobile', label: 'Mobile', width: 390 },
  ],
  toggles: [],
};

const entries: Array<[string, OtterlyVariant, string]> = [
  ['application-shell', 'shell', 'Workspace and product navigation'],
  ['competitor-editor', 'competitors', 'Editable onboarding competitor rows'],
  ['prompt-selection', 'selection', 'Onboarding prompt checklist'],
  ['report-filters', 'filters', 'Date, tag, engine, and country controls'],
  ['report-processing', 'processing', 'Pending report and disabled export'],
  ['prompt-report-table', 'prompt-table', 'Report prompt table and search'],
  ['prompt-detail-panel', 'detail', 'Prompt overview, responses, and citations'],
  ['brand-coverage-ranking', 'coverage', 'Completed coverage chart and brand ranking'],
  ['report-overview-screen', 'overview-screen', 'Completed Brand Report screen composition'],
  ['top-prompts-summary', 'top-prompts', 'Compact prompt ranking with full-report action'],
  ['domain-source-categories', 'source-categories', 'Selectable categories and scoped domain table'],
  ['citation-trend-status', 'citation-trends', 'Winners and losers pending while citations populate'],
  ['brand-visibility-index', 'visibility', 'Coverage versus likelihood chart'],
  ['citation-changes', 'citation-changes', 'Citation change scopes and table'],
  ['domain-sources', 'domain-sources', 'Cited source categories and domains'],
  ['citations-table', 'citations', 'Cited URL evidence table'],
  ['recommendations-processing', 'recommendations', 'Pending recommendation analysis'],
  ['agent-analytics-gate', 'agents', 'Data source connection entry'],
  ['prompt-research-modes', 'research', 'Three research intake modes'],
  ['search-prompts-inventory', 'inventory', 'Managed prompt table and row actions'],
  ['crawlability-audit-entry', 'audit', 'Empty crawlability audit entry'],
  ['content-audit-advanced', 'advanced-audit', 'Crawler identity disclosure'],
  ['query-fanout-entry', 'fanout', 'Empty query expansion entry'],
];

export const otterlyPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, label]) => [
    id,
    {
      type: 'reconstructed',
      Component: OtterlyExtracted,
      label: 'Observed interface with fictional local behavior',
      evidence:
        'Authenticated OtterlyAI screen observed 2026-10-01. Fixture values are fictional. Live submissions, persistence, result generation, and error paths need verification.',
      runtimeVerified: false,
      fixtures: [
        { id: 'default', title: label, props: { variant } },
        ...(['prompt-table', 'inventory'].includes(variant)
          ? [{ id: 'empty', title: 'Empty local fixture', props: { variant, initialState: 'empty' as const } }]
          : []),
      ],
      config,
      propsSchema: [
        { name: 'variant', type: 'OtterlyVariant', required: true, description: 'Chooses one independent observed component pattern.' },
        { name: 'initialState', type: 'default | empty | loading', required: false, description: 'Local-only fixture state.' },
      ],
    },
  ]),
);

const remainingEntries: Array<[string, OtterlyRemainingVariant, string]> = [
  ['report-date-range-picker', 'date-range', 'Preset dates and dual-calendar state'],
  ['tag-management-empty', 'tags-empty', 'Empty tag inventory and create entry'],
  ['tag-create-dialog', 'tag-dialog', 'Name and color tag form'],
  ['add-prompts-form', 'prompt-create', 'Multiple prompt entry and import affordance'],
  ['data-source-entry', 'data-source', 'Logs provider connection entry'],
  ['workspace-usage-allocation', 'workspace-usage', 'Quota and allocation overview'],
  ['workspace-create-entry', 'workspace-create', 'New workspace first step'],
  ['team-invite-dialog', 'team-invite', 'Team invite fields and disabled send'],
  ['api-keys-empty', 'api-keys-empty', 'No-key state and creation entry'],
];

Object.assign(otterlyPreviews, Object.fromEntries(remainingEntries.map(([id, variant, label]) => [id, {
  type: 'reconstructed',
  Component: OtterlyRemaining,
  label: 'Observed interface with fictional local behavior',
  evidence: 'Authenticated OtterlyAI screen observed 2026-10-01. No live mutation was submitted. Provider completion and sensitive actions remain unverified.',
  runtimeVerified: false,
  fixtures: [{ id: 'default', title: label, props: { variant } }],
  config,
  propsSchema: [{ name: 'variant', type: 'OtterlyRemainingVariant', required: true, description: 'Chooses one observed entry or empty-state pattern.' }],
}])));

import type { PreviewConfig, PreviewRegistry } from '../types';
import { FreshsalesDeepAuditPreview } from './FreshsalesDeepAuditPreview';
import { freshsalesDeepAuditRecords } from './generated';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [
    { id: 'disabled', label: 'Fixture controls', onLabel: 'Disabled', offLabel: 'Enabled' },
  ],
};

export { freshsalesDeepAuditIds, freshsalesDeepAuditRecords } from './generated';

export const freshsalesDeepAuditPreviews: PreviewRegistry = Object.fromEntries(
  freshsalesDeepAuditRecords.map((record) => [
    record.id,
    {
      type: 'reconstructed',
      Component: FreshsalesDeepAuditPreview,
      label: 'Independent Freshsales deep-audit component with fictional local fixtures',
      evidence: record.observed
        ? 'Authenticated read-only provider structure observed on 2026-10-08. Fixture interactions remain local.'
        : 'The provider state was not directly observed. This preview is an explicit fictional reconstruction linked to the observed parent workflow.',
      runtimeVerified: record.observed,
      fixtures: [
        {
          id: 'evidence',
          title: record.observed ? 'Observed evidence state' : 'Documented reconstruction boundary',
          props: { record, mode: 'evidence' },
        },
        {
          id: 'boundary',
          title: 'Guarded local interaction state',
          props: { record, mode: 'boundary' },
        },
      ],
      config,
      propsSchema: [
        {
          name: 'record',
          type: 'FreshsalesAuditRecord',
          required: true,
          description: 'Independent component linked to one audited Freshsales workflow.',
        },
        {
          name: 'mode',
          type: 'evidence | boundary',
          required: false,
          description: 'Shows evidence or the guarded local interaction boundary.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables all fictional local controls.',
        },
      ],
    },
  ])
);

import type { PreviewConfig, PreviewRegistry } from '../types';
import { HubspotDeepAuditPreview } from './HubspotDeepAuditPreview';
import { hubspotDeepAuditRecords } from './generated';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [
    { id: 'disabled', label: 'Fixture controls', onLabel: 'Disabled', offLabel: 'Enabled' },
  ],
};

export { hubspotDeepAuditIds, hubspotDeepAuditRecords } from './generated';

export const hubspotDeepAuditPreviews: PreviewRegistry = Object.fromEntries(
  hubspotDeepAuditRecords.map((record) => [
    record.id,
    {
      type: 'reconstructed',
      Component: HubspotDeepAuditPreview,
      label: 'Independent HubSpot deep-audit component with fictional local fixtures',
      evidence: record.observed
        ? 'Source-reviewed parent workflow evidence. Fixture interactions remain local.'
        : 'The parent workflow did not directly observe this component state. Preview is an explicit local reconstruction.',
      runtimeVerified: true,
      fixtures: [
        {
          id: 'evidence',
          title: record.observed
            ? 'Source-reviewed evidence state'
            : 'Documented evidence boundary',
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
          type: 'DeepAuditRecord',
          required: true,
          description: 'Independent component record linked to its parent HubSpot workflow.',
        },
        {
          name: 'mode',
          type: 'evidence | boundary',
          required: false,
          description: 'Selects the evidence view or the explicit provider-action boundary.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables every local fixture control.',
        },
      ],
    },
  ])
);

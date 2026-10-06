import type { PreviewRegistry } from '../types';
import { SalesforceService } from './SalesforceService';
import { salesforceComponents } from './catalogue';
export const salesforcePreviews: PreviewRegistry = Object.fromEntries(
  salesforceComponents.map((entry) => [
    entry.id,
    {
      type: 'reconstructed',
      Component: SalesforceService,
      label: 'Fictional reconstruction of an observed Salesforce Service trial interface',
      evidence:
        'Observed 2026-10-06: Service shell, Cases, Knowledge, Quick Text, Messaging, Analytics, Contacts, Accounts, Automation and safe utilities. Exact edition, provider writes, submission validation and populated case/message results remain unverified. All interactive examples are local-only.',
      runtimeVerified: false,
      fixtures: [
        {
          id: 'default',
          title: 'Observed structure · fictional local reconstruction',
          props: { variant: entry.variant },
        },
        ...(['views', 'controls', 'display', 'filters', 'notifications', 'settings'].includes(
          entry.variant
        )
          ? [
              {
                id: 'closed',
                title: 'Disclosure closed locally',
                props: { variant: entry.variant, initialState: 'closed' },
              },
            ]
          : []),
        ...(entry.variant === 'case-form'
          ? [
              {
                id: 'missing',
                title: 'Local validation example · provider NOT OBSERVED',
                props: { variant: entry.variant, initialState: 'missing' },
              },
            ]
          : []),
      ],
      config: {
        viewports: [
          { id: 'desktop', label: 'Desktop', width: 1120 },
          { id: 'narrow', label: 'Narrow', width: 390 },
        ],
        toggles: [
          { id: 'disabled', label: 'Fixture controls', onLabel: 'Disabled', offLabel: 'Enabled' },
        ],
      },
      propsSchema: [
        {
          name: 'variant',
          type: 'string',
          required: true,
          description: 'Selects the independently documented component.',
        },
        {
          name: 'initialState',
          type: 'string',
          required: false,
          description:
            'Local disclosure or validation fixture state, not provider outcome evidence.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disable local controls.',
        },
      ],
    },
  ])
);

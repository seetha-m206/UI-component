import { createElement } from 'react';
import type { PreviewConfig, PreviewRegistry, PropSchemaField } from '../types';
import { sourceRegistry } from '../sourceRegistry';
import { ZendeskPreview, type ZendeskProps } from './Zendesk';
import { catalogue } from './catalogue';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1100 },
    { id: 'tablet', label: 'Tablet', width: 760 },
    { id: 'mobile', label: 'Mobile', width: 390 },
  ],
  toggles: [
    {
      id: 'disabled',
      label: 'Local disabled state',
      onLabel: 'Disabled (simulated)',
      offLabel: 'Enabled',
    },
  ],
};
const propsSchema: PropSchemaField[] = [
  {
    name: 'empty',
    type: 'boolean',
    required: false,
    description:
      'Illustrative empty data. Agent Home filtered-empty and Knowledge archived-empty were observed. Other empty results are local simulations.',
  },
  {
    name: 'initialOpen',
    type: 'boolean',
    required: false,
    description: 'Open the documented menu or dialog on mount.',
  },
  {
    name: 'initialSelected',
    type: 'boolean',
    required: false,
    description: 'Start with a fictional selected ticket.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Disable controls locally. This is not a provider permission or disabled-state claim.',
  },
];
export const zendeskPreviews: PreviewRegistry = Object.fromEntries(
  catalogue.map((item) => [
    item.id,
    {
      type: 'reconstructed',
      Component: (props: ZendeskProps) =>
        createElement(ZendeskPreview, { ...props, kind: item.kind }),
      label: 'Observed Zendesk structure · fictional local reconstruction',
      evidence:
        '2026-10-01 authenticated UI inspection. Local preview only. Provider submissions, persistence, permissions, failures and unexercised actions need verification.',
      runtimeVerified: false,
      fixtures: item.fixtures,
      config,
      propsSchema,
    },
  ])
);
for (const item of catalogue) {
  sourceRegistry[item.id] = {
    files: (sourceRegistry.zendesk?.files ?? [])
      .filter((f) => f.fileName !== 'registry.ts')
      .map((f) => ({ ...f, fileName: '../zendesk/' + f.fileName })),
  };
}

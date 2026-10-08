import type { PreviewConfig, PreviewRegistry } from '../types';
import { TidioPreview, type TidioVariant, tidioVariants } from './TidioPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, TidioVariant, string]> = tidioVariants.map((variant) => [
  `tidio-${variant}`,
  variant,
  variant
    .split('-')
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' '),
]);

export const tidioIds = entries.map(([id]) => id);

export const tidioPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: TidioPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated read-only Tidio observation on 2026-10-08. Routes, labels and visible states are sanitized. Identities, provider demo content and opaque payloads are excluded. All preview content is fictional and local. No message, simulation, connection, flow, action, activation, upload, save, purchase, invitation or permission change was exercised.',
      fixtures: [
        { id: 'default', title: 'Observed pattern with fictional content', props: { variant } },
      ],
      config,
      propsSchema: [
        { name: 'variant', type: 'TidioVariant', required: true, description },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Marks the local fixture disabled without contacting the provider.',
        },
      ],
    },
  ])
);

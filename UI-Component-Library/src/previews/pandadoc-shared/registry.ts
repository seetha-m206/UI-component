import type { PreviewConfig, PreviewRegistry } from '../types';
import { PandaDocPreview, pandadocCatalogue, type PandaDocVariant } from './PandaDocPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

export const pandadocIds = pandadocCatalogue.map((entry) => entry.id);

export const pandadocPreviews: PreviewRegistry = Object.fromEntries(
  pandadocCatalogue.map((entry) => [
    entry.id,
    {
      type: 'reconstructed' as const,
      Component: PandaDocPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated read-only PandaDoc observation on 2026-10-09. Routes, labels, state structure and safe reversible disclosures were observed. The local preview uses fictional content and cannot contact PandaDoc. Account identity, provider sample content, private contacts, billing values, opaque identifiers, payloads and provider screenshots are excluded. No upload, recipient addition, send, publish, invitation, save, settings change, purchase, deletion or provider write was exercised.',
      fixtures: [
        {
          id: 'default',
          title: 'Observed pattern with fictional content',
          props: { variant: entry.variant as PandaDocVariant },
        },
      ],
      config,
      propsSchema: [
        { name: 'variant', type: 'PandaDocVariant', required: true, description: entry.title },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables local controls without contacting the provider.',
        },
      ],
    },
  ])
);

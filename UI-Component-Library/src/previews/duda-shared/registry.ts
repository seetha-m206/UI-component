import type { PreviewRegistry } from '../types';
import { DudaPreview } from './DudaPreview';
import { dudaDefinitions } from './catalogue';

export const dudaPreviews: PreviewRegistry = Object.fromEntries(
  dudaDefinitions.map((def) => [
    def.id,
    {
      type: 'reconstructed',
      Component: DudaPreview,
      label: 'Duda structure reconstructed with fictional local fixtures',
      evidence: `Local runtime verified across 56 routes and 169 fixture states. Provider outcomes remain unverified beyond the dated source receipts. Observed Duda structure on 2026-10-07: ${def.evidence.map((e) => e.screenshot).join(', ')}. Fixtures preserve state provenance. All rendering and interactions are local reconstruction. No authenticated account content, Duda requests or provider writes. Unobserved local states are explicitly labelled RECONSTRUCTION.`,
      runtimeVerified: true,
      fixtures: [...def.states]
        .sort((a, b) => Number(b.id === 'default') - Number(a.id === 'default'))
        .map((s) => ({
          id: s.id,
          title: s.title,
          props: { componentId: def.id, initialState: s.id, disabled: s.id === 'disabled' },
        })),
      config: {
        viewports: [
          { id: 'desktop', label: 'Desktop', width: 1105 },
          { id: 'narrow', label: 'Narrow', width: 720 },
          { id: 'mobile', label: 'Mobile', width: 390 },
        ],
        toggles: [{ id: 'disabled', label: 'Controls', onLabel: 'Disabled', offLabel: 'Enabled' }],
      },
      propsSchema: [
        {
          name: 'componentId',
          type: 'string',
          required: true,
          description:
            'Selects this component-specific Duda definition, controls and source references.',
        },
        {
          name: 'initialState',
          type: 'string',
          required: false,
          description: `Fixture states: ${def.states.map((s) => s.id).join(', ')}. State provenance and screenshot references are in catalogue.ts.`,
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description:
            'Disables local interactive controls. This is a reconstructed harness state, not provider permission evidence.',
        },
      ],
    },
  ])
);

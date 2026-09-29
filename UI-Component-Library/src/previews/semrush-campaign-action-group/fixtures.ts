import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushCampaignActionGroupProps } from './SemrushCampaignActionGroup';
export const propsSchema: PropSchemaField[] = [
  { name: 'compact', type: 'boolean', required: false, description: 'Uses compact action labels for dense headers.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables every action.' },
];
export const fixtures: PreviewFixture<SemrushCampaignActionGroupProps>[] = [
  { id: 'full', title: 'Full labels', props: {} },
  { id: 'compact', title: 'Compact header', props: { compact: true } },
  { id: 'disabled', title: 'Disabled', props: { disabled: true } },
];

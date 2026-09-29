import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsRankTrackerPlanGateProps } from './AhrefsRankTrackerPlanGate';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsRankTrackerPlanGateProps>[] = [
  { id: 'default', title: 'Rank Tracker plan gate', props: {} },
];

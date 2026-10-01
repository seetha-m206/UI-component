import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushPositionTrackingDateRangeProps } from './SemrushPositionTrackingDateRange';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'loading',
    type: 'boolean',
    required: false,
    description: 'Shows the observed loading hierarchy where supported.',
  },
];
export const fixtures: PreviewFixture<SemrushPositionTrackingDateRangeProps>[] = [
  { id: 'default', title: 'Observed default', props: {} },
  { id: 'loading', title: 'Loading', props: { loading: true } },
];

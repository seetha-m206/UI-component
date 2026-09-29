import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushAiVisibilityDashboardProps } from './SemrushAiVisibilityDashboard';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialMetric',
    type: "'main' | 'audience' | 'visibility'",
    required: false,
    description: 'Initial trend metric tab.',
  },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables report controls.' },
];
export const fixtures: PreviewFixture<SemrushAiVisibilityDashboardProps>[] = [
  { id: 'main', title: 'Main metrics', props: {} },
  { id: 'audience', title: 'Monthly audience', props: { initialMetric: 'audience' } },
];

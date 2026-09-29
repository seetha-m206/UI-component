import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushPerceptionAnalysisProps } from './SemrushPerceptionAnalysis';
export const propsSchema: PropSchemaField[] = [
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables pagination.' },
  {
    name: 'startLoading',
    type: 'boolean',
    required: false,
    description: 'Starts in AI overview loading state.',
  },
];
export const fixtures: PreviewFixture<SemrushPerceptionAnalysisProps>[] = [
  { id: 'loaded', title: 'Loaded analysis', props: {} },
  { id: 'loading', title: 'Loading overview', props: { startLoading: true } },
];

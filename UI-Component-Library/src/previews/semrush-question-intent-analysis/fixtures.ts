import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushQuestionIntentAnalysisProps } from './SemrushQuestionIntentAnalysis';
export const propsSchema: PropSchemaField[] = [
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables topic controls.' },
  {
    name: 'compact',
    type: 'boolean',
    required: false,
    description: 'Shows a reduced intent list.',
  },
];
export const fixtures: PreviewFixture<SemrushQuestionIntentAnalysisProps>[] = [
  { id: 'full', title: 'Full analysis', props: {} },
  { id: 'compact', title: 'Compact', props: { compact: true } },
];

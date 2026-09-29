import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushPromptResearchEntryProps } from './SemrushPromptResearchEntry';
export const propsSchema: PropSchemaField[] = [
  { name: 'initialTopic', type: 'string', required: false, description: 'Initial research topic.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables topic entry.' },
  {
    name: 'onAnalyze',
    type: '(topic) => void',
    required: false,
    description: 'Called by the local demo action.',
  },
];
export const fixtures: PreviewFixture<SemrushPromptResearchEntryProps>[] = [
  { id: 'empty', title: 'Empty topic', props: {} },
  { id: 'topic', title: 'Topic entered', props: { initialTopic: 'customer support software' } },
];

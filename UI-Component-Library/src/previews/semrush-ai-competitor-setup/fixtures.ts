import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushAiCompetitorSetupProps } from './SemrushAiCompetitorSetup';
export const propsSchema: PropSchemaField[] = [
  { name: 'ownDomain', type: 'string', required: false, description: 'Read-only source domain.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables comparison setup.' },
  {
    name: 'onAnalyze',
    type: '(competitors) => void',
    required: false,
    description: 'Receives locally submitted competitor values.',
  },
];
export const fixtures: PreviewFixture<SemrushAiCompetitorSetupProps>[] = [
  { id: 'empty', title: 'Empty setup', props: {} },
  { id: 'disabled', title: 'Disabled setup', props: { disabled: true } },
];

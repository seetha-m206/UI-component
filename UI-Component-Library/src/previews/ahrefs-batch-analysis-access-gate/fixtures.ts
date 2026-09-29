import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsBatchAnalysisAccessGateProps } from './AhrefsBatchAnalysisAccessGate';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every local control.',
  },
];
export const fixtures: PreviewFixture<AhrefsBatchAnalysisAccessGateProps>[] = [
  { id: 'default', title: 'Batch Analysis gate', props: {} },
];

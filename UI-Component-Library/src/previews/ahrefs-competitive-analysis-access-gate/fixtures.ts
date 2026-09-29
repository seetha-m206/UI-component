import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsCompetitiveAnalysisAccessGateProps } from './AhrefsCompetitiveAnalysisAccessGate';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every local control.',
  },
];
export const fixtures: PreviewFixture<AhrefsCompetitiveAnalysisAccessGateProps>[] = [
  { id: 'default', title: 'Competitive Analysis gate', props: {} },
];

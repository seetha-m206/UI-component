import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsAiContentGraderPlanGateProps } from './AhrefsAiContentGraderPlanGate';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every local control.',
  },
];
export const fixtures: PreviewFixture<AhrefsAiContentGraderPlanGateProps>[] = [
  { id: 'default', title: 'AI Content Grader gate', props: {} },
];

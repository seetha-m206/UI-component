import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsProjectStepperProps } from './AhrefsProjectStepper';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialStep',
    type: '1 | 2 | 3 | 4',
    required: false,
    description: 'Current project-setup step.',
  },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables step changes.' },
];
export const fixtures: PreviewFixture<AhrefsProjectStepperProps>[] = [
  { id: 'scope', title: 'Scope', props: { initialStep: 1 } },
  { id: 'ownership', title: 'Ownership', props: { initialStep: 3 } },
];

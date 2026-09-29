import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsProjectScopeFormProps } from './AhrefsProjectScopeForm';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'default' | 'filled' | 'access-modal'",
    required: false,
    description: 'Starts empty, with fictional values, or with the access modal open.',
  },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables every control.' },
];
export const fixtures: PreviewFixture<AhrefsProjectScopeFormProps>[] = [
  { id: 'default', title: 'Empty scope', props: { initialState: 'default' } },
  { id: 'filled', title: 'Filled scope', props: { initialState: 'filled' } },
  { id: 'access-modal', title: 'Access modal', props: { initialState: 'access-modal' } },
];

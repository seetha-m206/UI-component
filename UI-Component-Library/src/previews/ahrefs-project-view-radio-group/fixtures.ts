import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsProjectViewRadioGroupProps } from './AhrefsProjectViewRadioGroup';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsProjectViewRadioGroupProps>[] = [
  { id: 'default', title: 'Project view radio group', props: {} },
];

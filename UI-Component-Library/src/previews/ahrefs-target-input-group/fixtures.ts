import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsTargetInputGroupProps } from './AhrefsTargetInputGroup';
export const propsSchema: PropSchemaField[] = [
  { name: 'initialValue', type: 'string', required: false, description: 'Synthetic target value.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables every control.' },
];
export const fixtures: PreviewFixture<AhrefsTargetInputGroupProps>[] = [
  { id: 'empty', title: 'Empty', props: {} },
  { id: 'filled', title: 'Filled', props: { initialValue: 'atlas.example' } },
];

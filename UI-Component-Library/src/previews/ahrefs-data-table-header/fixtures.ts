import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsDataTableHeaderProps } from './AhrefsDataTableHeader';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsDataTableHeaderProps>[] = [
  { id: 'default', title: 'Data table header', props: {} },
];

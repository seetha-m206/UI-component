import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsDateRangeFilterProps } from './AhrefsDateRangeFilter';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsDateRangeFilterProps>[] = [
  { id: 'default', title: 'Date range filter', props: {} },
];

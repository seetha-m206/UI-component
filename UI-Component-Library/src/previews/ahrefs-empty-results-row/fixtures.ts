import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsEmptyResultsRowProps } from './AhrefsEmptyResultsRow';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsEmptyResultsRowProps>[] = [
  { id: 'default', title: 'Empty results row', props: {} },
];

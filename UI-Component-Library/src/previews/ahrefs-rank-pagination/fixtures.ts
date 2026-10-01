import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsRankPaginationProps } from './AhrefsRankPagination';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsRankPaginationProps>[] = [
  { id: 'default', title: 'Rank pagination', props: {} },
];

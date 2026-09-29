import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsRankTableProps } from './AhrefsRankTable';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsRankTableProps>[] = [
  { id: 'default', title: 'Ahrefs Rank table', props: {} },
];

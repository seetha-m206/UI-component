import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushRankingsOverviewTableProps } from './SemrushRankingsOverviewTable';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'loading',
    type: 'boolean',
    required: false,
    description: 'Shows the observed loading hierarchy where supported.',
  },
];
export const fixtures: PreviewFixture<SemrushRankingsOverviewTableProps>[] = [
  { id: 'default', title: 'Observed default', props: {} },
  { id: 'loading', title: 'Loading', props: { loading: true } },
];

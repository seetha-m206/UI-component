import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushTargetTypeFilterProps } from './SemrushTargetTypeFilter';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'loading',
    type: 'boolean',
    required: false,
    description: 'Shows the observed loading hierarchy where supported.',
  },
];
export const fixtures: PreviewFixture<SemrushTargetTypeFilterProps>[] = [
  { id: 'default', title: 'Observed default', props: {} },
  { id: 'loading', title: 'Loading', props: { loading: true } },
];

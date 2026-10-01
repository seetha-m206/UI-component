import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsRankToolbarProps } from './AhrefsRankToolbar';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsRankToolbarProps>[] = [
  { id: 'default', title: 'Rank toolbar', props: {} },
];

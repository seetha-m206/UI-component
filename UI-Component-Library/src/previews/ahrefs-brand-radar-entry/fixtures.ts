import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsBrandRadarEntryProps } from './AhrefsBrandRadarEntry';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'default' | 'manual'",
    required: false,
    description: 'Starts with website entry or the local manual setup.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every local control.',
  },
];
export const fixtures: PreviewFixture<AhrefsBrandRadarEntryProps>[] = [
  { id: 'default', title: 'Brand entry', props: { initialState: 'default' } },
  { id: 'manual', title: 'Manual setup', props: { initialState: 'manual' } },
];

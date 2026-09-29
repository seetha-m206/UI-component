import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsSiteExplorerEntryProps } from './AhrefsSiteExplorerEntry';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'default' | 'target-filled' | 'notice-dismissed' | 'update-dismissed'",
    required: false,
    description: 'Starts the reconstruction in an observed or explicitly synthetic local state.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every local control.',
  },
];

export const fixtures: PreviewFixture<AhrefsSiteExplorerEntryProps>[] = [
  { id: 'default', title: 'Explorer entry', props: { initialState: 'default' } },
  { id: 'target-filled', title: 'Target filled', props: { initialState: 'target-filled' } },
  {
    id: 'notice-dismissed',
    title: 'Notice dismissed',
    props: { initialState: 'notice-dismissed' },
  },
  {
    id: 'update-dismissed',
    title: 'Update dismissed',
    props: { initialState: 'update-dismissed' },
  },
];

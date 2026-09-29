import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsContentExplorerAccessGateProps } from './AhrefsContentExplorerAccessGate';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'default' | 'video-playing'",
    required: false,
    description: 'Starts the reconstruction in the observed landing or synthetic play state.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every local control.',
  },
];

export const fixtures: PreviewFixture<AhrefsContentExplorerAccessGateProps>[] = [
  { id: 'default', title: 'Access gate', props: { initialState: 'default' } },
  { id: 'video-playing', title: 'Tutorial playing', props: { initialState: 'video-playing' } },
];

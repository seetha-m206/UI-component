import type { PreviewFixture, PropSchemaField } from '../types';
import type { SimilarwebProgressActionProps } from './SimilarwebProgressAction';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'empty' | 'enabled-action'",
    required: false,
    description: 'Shows the observed disabled state or a guarded synthetic enabled state.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every local control.',
  },
];

export const fixtures: PreviewFixture<SimilarwebProgressActionProps>[] = [
  { id: 'disabled', title: 'Observed disabled Next', props: { initialState: 'empty' } },
  {
    id: 'enabled',
    title: 'Enabled · needs verification',
    props: { initialState: 'enabled-action' },
  },
];

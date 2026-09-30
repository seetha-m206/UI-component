import type { PreviewFixture, PropSchemaField } from '../types';
import type { SimilarwebOnboardingWorkspaceProps } from './SimilarwebOnboardingWorkspace';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'empty' | 'open' | 'filtered' | 'enabled-action'",
    required: false,
    description: 'Starts the local reconstruction in an observed or synthetic state.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every local control.',
  },
];

export const fixtures: PreviewFixture<SimilarwebOnboardingWorkspaceProps>[] = [
  { id: 'empty', title: 'Observed empty gate', props: { initialState: 'empty' } },
  { id: 'open', title: 'Observed open selector', props: { initialState: 'open' } },
  { id: 'filtered', title: 'Observed Marketing results', props: { initialState: 'filtered' } },
  { id: 'disabled', title: 'Disabled', props: { initialState: 'empty', disabled: true } },
];

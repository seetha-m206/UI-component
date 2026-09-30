import type { PreviewFixture, PropSchemaField } from '../types';
import type { SimilarwebJobTitleComboboxProps } from './SimilarwebJobTitleCombobox';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'empty' | 'open' | 'filtered' | 'enabled-action'",
    required: false,
    description: 'Starts the combobox in a documented state.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables the local combobox controls.',
  },
];

export const fixtures: PreviewFixture<SimilarwebJobTitleComboboxProps>[] = [
  { id: 'closed', title: 'Observed closed', props: { initialState: 'empty' } },
  { id: 'open', title: 'Observed open hint', props: { initialState: 'open' } },
  { id: 'filtered', title: 'Observed filtered results', props: { initialState: 'filtered' } },
  { id: 'disabled', title: 'Disabled', props: { initialState: 'empty', disabled: true } },
];

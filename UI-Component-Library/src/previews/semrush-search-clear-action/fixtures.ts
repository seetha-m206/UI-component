import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushSearchClearActionProps } from './SemrushSearchClearAction';
export const propsSchema: PropSchemaField[] = [
  { name: 'initialState', type: "'empty' | 'populated' | 'no-results'", required: false, description: 'Initial query and result state.' },
  { name: 'placeholder', type: 'string', required: false, description: 'Search purpose hint.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables the input and submit action.' },
];
export const fixtures: PreviewFixture<SemrushSearchClearActionProps>[] = [
  { id: 'empty', title: 'Empty', props: { initialState: 'empty' } },
  { id: 'populated', title: 'Populated', props: { initialState: 'populated' } },
  { id: 'no-results', title: 'No results', props: { initialState: 'no-results' } },
];

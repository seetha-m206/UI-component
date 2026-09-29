import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushEntityCreationModalProps } from './SemrushEntityCreationModal';
export const propsSchema: PropSchemaField[] = [
  { name: 'initialState', type: "'default' | 'website-menu' | 'validation-error'", required: false, description: 'Initial modal state.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables editable controls.' },
];
export const fixtures: PreviewFixture<SemrushEntityCreationModalProps>[] = [
  { id: 'default', title: 'Create modal', props: { initialState: 'default' } },
  { id: 'website-menu', title: 'Website options', props: { initialState: 'website-menu' } },
  { id: 'validation-error', title: 'Validation error', props: { initialState: 'validation-error' } },
];

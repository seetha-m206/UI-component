import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushActionButtonProps } from './SemrushActionButton';
export const propsSchema: PropSchemaField[] = [
  { name: 'label', type: 'string', required: false, description: 'Visible action label.' },
  { name: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'icon' | 'danger'", required: false, description: 'Visual and semantic action hierarchy.' },
  { name: 'initialState', type: "'default' | 'loading' | 'success' | 'guarded'", required: false, description: 'Initial interaction state.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables activation.' },
];
export const fixtures: PreviewFixture<SemrushActionButtonProps>[] = [
  { id: 'primary', title: 'Primary', props: { label: 'Analyze', variant: 'primary' } },
  { id: 'secondary', title: 'Secondary', props: { label: 'Export', variant: 'secondary' } },
  { id: 'ghost', title: 'Ghost', props: { label: 'Clear all', variant: 'ghost' } },
  { id: 'icon', title: 'Icon action', props: { label: 'Open settings', variant: 'icon' } },
  { id: 'danger', title: 'Guarded danger', props: { label: 'Delete', variant: 'danger', initialState: 'guarded' } },
  { id: 'loading', title: 'Loading', props: { label: 'Analyze', variant: 'primary', initialState: 'loading' } },
  { id: 'disabled', title: 'Disabled', props: { label: 'Create', variant: 'primary', disabled: true } },
];

import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushBulkSelectionActionBarProps } from './SemrushBulkSelectionActionBar';
export const propsSchema: PropSchemaField[] = [
  { name: 'initialCount', type: 'number', required: false, description: 'Selected row count.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables reversible controls.' },
];
export const fixtures: PreviewFixture<SemrushBulkSelectionActionBarProps>[] = [
  { id: 'one', title: 'One selected', props: { initialCount: 1 } },
  { id: 'many', title: 'Multiple selected', props: { initialCount: 4 } },
];

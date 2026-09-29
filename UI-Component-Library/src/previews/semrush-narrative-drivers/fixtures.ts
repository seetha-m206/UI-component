import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushNarrativeDriversProps } from './SemrushNarrativeDrivers';
export const propsSchema: PropSchemaField[] = [
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables view selectors.' },
  {
    name: 'startEmpty',
    type: 'boolean',
    required: false,
    description: 'Shows the empty-result status.',
  },
];
export const fixtures: PreviewFixture<SemrushNarrativeDriversProps>[] = [
  { id: 'default', title: 'Narrative analysis', props: {} },
  { id: 'empty', title: 'Empty result', props: { startEmpty: true } },
];

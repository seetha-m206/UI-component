import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushProjectSelectorProps } from './SemrushProjectSelector';
export const propsSchema: PropSchemaField[] = [
  { name: 'initialOpen', type: 'boolean', required: false, description: 'Starts the project list expanded.' },
  { name: 'initialProject', type: 'string', required: false, description: 'Initial synthetic project label.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables selection.' },
];
export const fixtures: PreviewFixture<SemrushProjectSelectorProps>[] = [
  { id: 'closed', title: 'Closed', props: {} },
  { id: 'open', title: 'Project list', props: { initialOpen: true } },
  { id: 'alternate', title: 'Alternate selected', props: { initialProject: 'Harbor Research' } },
];

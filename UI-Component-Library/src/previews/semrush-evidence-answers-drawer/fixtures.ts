import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushEvidenceAnswersDrawerProps } from './SemrushEvidenceAnswersDrawer';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables the drawer trigger.',
  },
  {
    name: 'initialOpen',
    type: 'boolean',
    required: false,
    description: 'Starts with evidence drawer open.',
  },
];
export const fixtures: PreviewFixture<SemrushEvidenceAnswersDrawerProps>[] = [
  { id: 'closed', title: 'Closed', props: {} },
  { id: 'open', title: 'Open', props: { initialOpen: true } },
];

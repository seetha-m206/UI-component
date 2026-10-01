import type { PreviewFixture, PropSchemaField } from '../types';
type Props = { score?: number; disabled?: boolean };
export const fixtures: PreviewFixture<Props>[] = [
  { id: 'observed', title: 'Observed Health Score 80', props: { score: 80 } },
  { id: 'disabled', title: 'Synthetic disabled review', props: { score: 80, disabled: true } },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'score',
    type: 'number',
    required: false,
    description: 'Displays the observed or supplied score.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables the local Review issues action.',
  },
];

import type { PreviewFixture, PropSchemaField } from '../types';
type Props = { initiallyOpen?: '' | 'engine' | 'range' };
export const fixtures: PreviewFixture<Props>[] = [
  { id: 'closed', title: 'Observed closed filters', props: {} },
  { id: 'engine', title: 'Observed search-engine menu', props: { initiallyOpen: 'engine' } },
  { id: 'range', title: 'Observed date-range menu', props: { initiallyOpen: 'range' } },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initiallyOpen',
    type: "'' | 'engine' | 'range'",
    required: false,
    description: 'Starts one local filter menu open.',
  },
];

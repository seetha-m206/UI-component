import type { PreviewFixture, PropSchemaField } from '../types';
import type { RemainingProps } from '../ubersuggest-remaining/Remaining';
export const fixtures: PreviewFixture<RemainingProps>[] = [
  {
    id: 'state-0',
    title: 'Observed export state \u00b7 fictional values',
    props: {
      initialState: 'export',
    },
  },
  {
    id: 'state-1',
    title: 'Observed copy state \u00b7 fictional values',
    props: {
      initialState: 'copy',
    },
  },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: 'string',
    required: false,
    description: 'Observed opening state with fictional values. No provider request is possible.',
  },
];

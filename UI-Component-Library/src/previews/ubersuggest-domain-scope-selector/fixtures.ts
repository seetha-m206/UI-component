import type { PreviewFixture, PropSchemaField } from '../types';
import type { RemainingProps } from '../ubersuggest-remaining/Remaining';
export const fixtures: PreviewFixture<RemainingProps>[] = [
  {
    id: 'state-0',
    title: 'Observed default state \u00b7 fictional values',
    props: {
      initialState: 'default',
    },
  },
  {
    id: 'state-1',
    title: 'Observed url state \u00b7 fictional values',
    props: {
      initialState: 'url',
    },
  },
  {
    id: 'state-2',
    title: 'Observed excluded state \u00b7 fictional values',
    props: {
      initialState: 'excluded',
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

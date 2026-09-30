import type { PreviewFixture, PropSchemaField } from '../types';
import type { RemainingProps } from '../ubersuggest-remaining/Remaining';
export const fixtures: PreviewFixture<RemainingProps>[] = [
  {
    id: 'state-0',
    title: 'Observed add state \u00b7 fictional values',
    props: {
      initialState: 'add',
    },
  },
  {
    id: 'state-1',
    title: 'Observed bulk state \u00b7 fictional values',
    props: {
      initialState: 'bulk',
    },
  },
  {
    id: 'state-2',
    title: 'Observed csv state \u00b7 fictional values',
    props: {
      initialState: 'csv',
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

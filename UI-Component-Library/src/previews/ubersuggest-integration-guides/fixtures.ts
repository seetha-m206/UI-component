import type { PreviewFixture, PropSchemaField } from '../types';
import type { RemainingProps } from '../ubersuggest-remaining/Remaining';
export const fixtures: PreviewFixture<RemainingProps>[] = [
  {
    id: 'state-0',
    title: 'Observed Claude state \u00b7 fictional values',
    props: {
      initialState: 'Claude',
    },
  },
  {
    id: 'state-1',
    title: 'Observed ChatGPT state \u00b7 fictional values',
    props: {
      initialState: 'ChatGPT',
    },
  },
  {
    id: 'state-2',
    title: 'Observed WordPress state \u00b7 fictional values',
    props: {
      initialState: 'WordPress',
    },
  },
  {
    id: 'state-3',
    title: 'Observed Chrome state \u00b7 fictional values',
    props: {
      initialState: 'Chrome',
    },
  },
  {
    id: 'state-4',
    title: 'Observed faq state \u00b7 fictional values',
    props: {
      initialState: 'faq',
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

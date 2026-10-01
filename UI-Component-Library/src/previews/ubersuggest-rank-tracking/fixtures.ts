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
    title: 'Observed Position state \u00b7 fictional values',
    props: {
      initialState: 'Position',
    },
  },
  {
    id: 'state-2',
    title: 'Observed Change state \u00b7 fictional values',
    props: {
      initialState: 'Change',
    },
  },
  {
    id: 'state-3',
    title: 'Observed Search Intent state \u00b7 fictional values',
    props: {
      initialState: 'Search Intent',
    },
  },
  {
    id: 'state-4',
    title: 'Observed Volume state \u00b7 fictional values',
    props: {
      initialState: 'Volume',
    },
  },
  {
    id: 'state-5',
    title: 'Observed SEO Difficulty state \u00b7 fictional values',
    props: {
      initialState: 'SEO Difficulty',
    },
  },
  {
    id: 'state-6',
    title: 'Observed open state \u00b7 fictional values',
    props: {
      initialState: 'open',
    },
  },
  {
    id: 'state-7',
    title: 'Observed custom state \u00b7 fictional values',
    props: {
      initialState: 'custom',
    },
  },
  {
    id: 'state-8',
    title: 'Observed add state \u00b7 fictional values',
    props: {
      initialState: 'add',
    },
  },
  {
    id: 'state-9',
    title: 'Observed bulk state \u00b7 fictional values',
    props: {
      initialState: 'bulk',
    },
  },
  {
    id: 'state-10',
    title: 'Observed csv state \u00b7 fictional values',
    props: {
      initialState: 'csv',
    },
  },
  {
    id: 'state-11',
    title: 'Observed export state \u00b7 fictional values',
    props: {
      initialState: 'export',
    },
  },
  {
    id: 'state-12',
    title: 'Observed copy state \u00b7 fictional values',
    props: {
      initialState: 'copy',
    },
  },
  {
    id: 'state-13',
    title: 'Observed upgrade state \u00b7 fictional values',
    props: {
      initialState: 'upgrade',
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

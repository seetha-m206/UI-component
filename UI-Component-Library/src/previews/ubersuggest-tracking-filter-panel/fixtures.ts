import type { PreviewFixture, PropSchemaField } from '../types';
import type { RemainingProps } from '../ubersuggest-remaining/Remaining';
export const fixtures: PreviewFixture<RemainingProps>[] = [
  {
    id: 'state-0',
    title: 'Observed Position state \u00b7 fictional values',
    props: {
      initialState: 'Position',
    },
  },
  {
    id: 'state-1',
    title: 'Observed Change state \u00b7 fictional values',
    props: {
      initialState: 'Change',
    },
  },
  {
    id: 'state-2',
    title: 'Observed Search Intent state \u00b7 fictional values',
    props: {
      initialState: 'Search Intent',
    },
  },
  {
    id: 'state-3',
    title: 'Observed Volume state \u00b7 fictional values',
    props: {
      initialState: 'Volume',
    },
  },
  {
    id: 'state-4',
    title: 'Observed SEO Difficulty state \u00b7 fictional values',
    props: {
      initialState: 'SEO Difficulty',
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

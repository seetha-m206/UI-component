import type { PreviewFixture, PropSchemaField } from '../types';
import type { UbersuggestProps } from '../ubersuggest-shared/Ubersuggest';
export const fixtures: PreviewFixture<UbersuggestProps>[] = [
  {
    id: 'default',
    title: 'Observed structure · fictional data',
    props: {
      initialState: 'default',
    },
  },
  {
    id: 'website',
    title: 'Website · reconstruction',
    props: {
      initialState: 'website',
    },
  },
  {
    id: 'filled',
    title: 'Fictional populated input',
    props: {
      initialState: 'filled',
    },
  },
  {
    id: 'limit',
    title: 'Observed three-keyword cap',
    props: {
      initialState: 'limit',
    },
  },
  {
    id: 'empty',
    title: 'Observed no-results pattern',
    props: {
      initialState: 'empty',
    },
  },
  {
    id: 'loading',
    title: 'Observed loading · reconstructed timing',
    props: {
      initialState: 'loading',
    },
  },
  {
    id: 'error',
    title: 'Synthetic error · NOT OBSERVED',
    props: {
      initialState: 'error',
    },
  },
  {
    id: 'disabled',
    title: 'Synthetic disabled state',
    props: {
      disabled: true,
    },
  },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: 'string',
    required: false,
    description:
      'Named observed-pattern or explicitly synthetic fixture. Provider outcome is never implied.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Synthetic disabled state for every control.',
  },
];

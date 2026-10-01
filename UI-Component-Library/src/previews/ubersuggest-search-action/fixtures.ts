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
    id: 'filled',
    title: 'Fictional populated input',
    props: {
      initialState: 'filled',
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

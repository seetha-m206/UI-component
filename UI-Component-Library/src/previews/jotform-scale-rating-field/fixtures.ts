import type { PreviewFixture, PropSchemaField } from '../types';
import type { JotformScaleRatingFieldProps } from './JotformScaleRatingField';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'value',
    type: 'number | null',
    required: true,
    description: 'Current selection, or null if unanswered. Native radio semantics — no deselect path exists.',
  },
  {
    name: 'onChange',
    type: '(value: RatingValue) => void',
    required: false,
    description: 'Called with the selected point on click.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
  {
    name: 'label',
    type: 'string',
    required: false,
    description:
      'The shared question text. Confirmed wired as every option\'s aria-labelledby, which overrides each option\'s own correctly-associated native <label for> in accessible-name computation.',
  },
  {
    name: 'min',
    type: 'number',
    required: false,
    description: 'Lower bound of the scale. Confirmed builder-configurable (default 1) in the source.',
  },
  {
    name: 'max',
    type: 'number',
    required: false,
    description: 'Upper bound of the scale. Confirmed builder-configurable (default 5) in the source.',
  },
];

export const fixtures: PreviewFixture<JotformScaleRatingFieldProps>[] = [
  {
    id: 'unanswered',
    title: 'Unanswered',
    props: {
      value: null,
      disabled: false,
    },
  },
  {
    id: 'answered',
    title: '3 of 5 selected — field block highlighted',
    props: {
      value: 3,
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    props: {
      value: 2,
      disabled: true,
    },
  },
];

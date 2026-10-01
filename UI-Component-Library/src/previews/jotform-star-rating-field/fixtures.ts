import type { PreviewFixture, PropSchemaField } from '../types';
import type { JotformStarRatingFieldProps } from './JotformStarRatingField';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'value',
    type: 'number | null',
    required: true,
    description:
      'Current rating, or null if unanswered. Confirmed: re-clicking the already-selected star decrements the value by one rather than no-op or deselect (see Second-Pass Flags in the source record).',
  },
  {
    name: 'onChange',
    type: '(value: RatingValue) => void',
    required: false,
    description: 'Called with the new rating on click or arrow-key commit.',
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
    description: 'Visible question text, wired as the radiogroup\'s aria-label.',
  },
  {
    name: 'maxValue',
    type: 'number',
    required: false,
    description: 'Number of stars shown. Confirmed builder-configurable (default 5) in the source.',
  },
];

export const fixtures: PreviewFixture<JotformStarRatingFieldProps>[] = [
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
    title: '3 of 5 selected',
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

import type { PreviewFixture, PropSchemaField } from '../types';
import type { RatingStarFieldProps } from './RatingStarField';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'value',
    type: 'number | null',
    required: true,
    description: 'Current rating (1-5), or null if unanswered.',
  },
  {
    name: 'onChange',
    type: '(value: RatingValue) => void',
    required: false,
    description:
      'Called with the new rating on selection; clicking the current boundary star again calls it with null (observed toggle-off behavior).',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
  {
    name: 'required',
    type: 'boolean',
    required: false,
    description:
      'Marks the field required and enables the live validation error. Defaults to false.',
  },
  {
    name: 'label',
    type: 'string',
    required: true,
    description: 'The question text shown above the star row.',
  },
  {
    name: 'description',
    type: 'string',
    required: false,
    description: 'Optional helper text shown below the label.',
  },
  {
    name: 'error',
    type: 'string',
    required: false,
    description: 'Validation error message, announced via role="alert".',
  },
];

/**
 * Deterministic synthetic data only — no real form/entry content. Each
 * fixture is a starting point for the interactive preview harness, not a
 * frozen snapshot: value/disabled/required can still be changed live via the
 * preview controls once a fixture is selected.
 */
export const fixtures: PreviewFixture<RatingStarFieldProps>[] = [
  {
    id: 'full-rating',
    title: 'Full 5-star rating',
    props: {
      value: 5,
      label: 'How would you rate our support team?',
      disabled: false,
      required: false,
    },
  },
  {
    id: 'partial-rating',
    title: 'Partial (2 of 5)',
    props: {
      value: 2,
      label: 'How likely are you to recommend us to a friend?',
      disabled: false,
      required: false,
    },
  },
  {
    id: 'unselected',
    title: 'Unselected',
    props: {
      value: null,
      label: 'Rate your overall experience.',
      disabled: false,
      required: false,
    },
  },
  {
    id: 'required-error',
    title: 'Required validation error',
    props: {
      value: null,
      label: 'How satisfied are you with this product?',
      description: 'This rating must be provided before submitting.',
      disabled: false,
      required: true,
      error: 'This field is required.',
    },
  },
  {
    id: 'disabled',
    title: 'Disabled by default',
    props: {
      value: 4,
      label: 'Average rating from previous responses',
      disabled: true,
      required: false,
    },
  },
  {
    id: 'long-label',
    title: 'Long label',
    props: {
      value: null,
      label:
        'Taking into account both the speed of our response and the quality of the resolution provided, how would you rate your overall experience with our customer support team during this interaction?',
      disabled: false,
      required: false,
    },
  },
];

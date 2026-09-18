import type { PreviewFixture, PropSchemaField } from '../types';
import type { RatingFieldProps } from './RatingField';

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
      "Called with the new rating on selection. Confirmed one-way behavior: re-clicking the already-selected icon does NOT call this — there is no deselect, matching Typeform's Yes/No field.",
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction, including hover-preview, when true. Defaults to false.',
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
    description: 'The question text shown above the icon row.',
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
 * preview controls once a fixture is selected. State naming follows
 * rating-star-field's convention, adapted to drop "toggle-off" framing since
 * this component confirms no deselect exists.
 */
export const fixtures: PreviewFixture<RatingFieldProps>[] = [
  {
    id: 'mid-rating',
    title: '3 of 5 selected',
    props: {
      value: 3,
      label: 'How would you rate our support team?',
      disabled: false,
      required: false,
    },
  },
  {
    id: 'full-rating',
    title: 'Full 5 of 5 selected',
    props: {
      value: 5,
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

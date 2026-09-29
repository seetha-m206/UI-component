import type { PreviewFixture, PropSchemaField } from '../types';
import type { PaperformRatingFieldProps } from './PaperformRatingField';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'value',
    type: 'number | null',
    required: true,
    description: 'Current rating, or null if unanswered. Confirmed: re-clicking the selected star does not clear it.',
  },
  {
    name: 'onChange',
    type: '(value: RatingValue) => void',
    required: false,
    description: 'Called with the new rating on selection.',
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
    description: 'Marks the field required and enables the live validation error. Defaults to false.',
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
  {
    name: 'maxRating',
    type: 'number',
    required: false,
    description:
      'Number of stars shown. Confirmed builder-configurable range is 1-10 (default 5) in the source.',
  },
];

/**
 * Deterministic synthetic data only — no real form/entry content.
 */
export const fixtures: PreviewFixture<PaperformRatingFieldProps>[] = [
  {
    id: 'unselected',
    title: 'Unselected — try hovering the stars',
    props: {
      value: null,
      label: 'Q4 Rate us',
      disabled: false,
      required: false,
    },
  },
  {
    id: 'partial-rating',
    title: 'Partial (3 of 5) — hover to see max(hovered, selected)',
    props: {
      value: 3,
      label: 'Q4 Rate us',
      disabled: false,
      required: false,
    },
  },
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
    id: 'ten-star-scale',
    title: 'Configured to a 10-point scale',
    props: {
      value: 7,
      label: 'On a scale of 1-10, how likely are you to recommend us?',
      maxRating: 10,
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
];

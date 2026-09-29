import type { PreviewFixture, PropSchemaField } from '../types';
import type { GoogleFormsRatingFieldProps } from './GoogleFormsRatingField';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'value',
    type: 'number | null',
    required: true,
    description:
      'Current rating, or null if unanswered. Confirmed: clicking the already-selected icon deselects back to null.',
  },
  {
    name: 'onChange',
    type: '(value: RatingValue) => void',
    required: false,
    description: 'Called with the new rating on select/deselect, and on arrow-key commit.',
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
      'Visible question text. Confirmed NOT wired to the icon group via aria-labelledby — the source has no group-level accessible name at all.',
  },
  {
    name: 'maxValue',
    type: 'number',
    required: false,
    description: 'Number of icons shown. Confirmed builder-configurable range is 3-10 (default 5) in the source.',
  },
  {
    name: 'iconStyle',
    type: "'star' | 'heart' | 'thumbs-up'",
    required: false,
    description: 'Icon shape. Confirmed builder-configurable 3-item picker in the source.',
  },
];

/**
 * Deterministic synthetic data only — no real form/response content.
 */
export const fixtures: PreviewFixture<GoogleFormsRatingFieldProps>[] = [
  {
    id: 'unselected',
    title: 'Unselected — try Tab, then Left/Right arrows',
    props: {
      value: null,
      label: 'Rate your experience',
      maxValue: 5,
      iconStyle: 'star',
      disabled: false,
    },
  },
  {
    id: 'partial-rating',
    title: 'Partial (3 of 5) — cumulative fill, click icon 3 again to deselect',
    props: {
      value: 3,
      label: 'Rate your experience',
      maxValue: 5,
      iconStyle: 'star',
      disabled: false,
    },
  },
  {
    id: 'thumbs-up-scale',
    title: 'Thumbs-up icon style, configured to a 10-point scale',
    props: {
      value: 7,
      label: 'How likely are you to recommend us?',
      maxValue: 10,
      iconStyle: 'thumbs-up',
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    props: {
      value: 4,
      label: 'Rate your experience',
      maxValue: 5,
      iconStyle: 'heart',
      disabled: true,
    },
  },
];

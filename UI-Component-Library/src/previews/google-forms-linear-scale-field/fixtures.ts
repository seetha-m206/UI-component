import type { PreviewFixture, PropSchemaField } from '../types';
import type { GoogleFormsLinearScaleFieldProps } from './GoogleFormsLinearScaleField';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'value',
    type: 'number | null',
    required: true,
    description:
      'Currently visually-selected option, or null if unanswered. Confirmed: a second click on the already-selected option leaves this unchanged (no-op) but makes aria-checked go stale — see the debug readout in the preview.',
  },
  {
    name: 'onChange',
    type: '(value: LinearScaleValue) => void',
    required: false,
    description: 'Called only on a genuine selection change (not on the confirmed no-op re-click).',
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
      'Visible question text. Confirmed correctly wired to the radiogroup via aria-labelledby — the opposite of the sibling google-forms-rating-field, which has no group name at all.',
  },
  {
    name: 'min',
    type: 'number',
    required: false,
    description: 'Confirmed builder-configurable to 0 or 1 only in the source. Defaults to 1.',
  },
  {
    name: 'max',
    type: 'number',
    required: false,
    description: 'Confirmed builder-configurable 2-10 in the source. Defaults to 5.',
  },
  {
    name: 'minLabel',
    type: 'string',
    required: false,
    description: 'Optional endpoint caption at the minimum value. Confirmed: only the two endpoints can be labeled.',
  },
  {
    name: 'maxLabel',
    type: 'string',
    required: false,
    description: 'Optional endpoint caption at the maximum value.',
  },
];

/**
 * Deterministic synthetic data only — no real form/response content.
 */
export const fixtures: PreviewFixture<GoogleFormsLinearScaleFieldProps>[] = [
  {
    id: 'unselected',
    title: 'Unselected — 1 to 5 with endpoint labels',
    props: {
      value: null,
      label: 'How likely are you to recommend us',
      min: 1,
      max: 5,
      minLabel: 'Not likely',
      maxLabel: 'Very likely',
      disabled: false,
    },
  },
  {
    id: 'selected-demonstrate-bug',
    title: 'Option 3 selected — click it again to reproduce the confirmed stale-ARIA bug',
    props: {
      value: 3,
      label: 'How likely are you to recommend us',
      min: 1,
      max: 5,
      minLabel: 'Not likely',
      maxLabel: 'Very likely',
      disabled: false,
    },
  },
  {
    id: 'zero-based-wide-range',
    title: 'Configured 0-10, no endpoint labels',
    props: {
      value: 7,
      label: 'How satisfied are you with this product?',
      min: 0,
      max: 10,
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    props: {
      value: 4,
      label: 'How likely are you to recommend us',
      min: 1,
      max: 5,
      minLabel: 'Not likely',
      maxLabel: 'Very likely',
      disabled: true,
    },
  },
];

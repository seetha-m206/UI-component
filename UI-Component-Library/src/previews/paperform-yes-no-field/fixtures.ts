import type { PreviewFixture, PropSchemaField } from '../types';
import type { PaperformYesNoFieldProps } from './PaperformYesNoField';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'value',
    type: "'yes' | 'no' | null",
    required: true,
    description: 'Currently selected option, or null if unanswered.',
  },
  {
    name: 'onChange',
    type: '(value: PaperformYesNoValue) => void',
    required: false,
    description:
      'Called with the new value on selection. Re-clicking the already-selected option is a confirmed no-op and never calls onChange with null — there is no deselect path in the source at all, not even via keyboard.',
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
    description: 'The question text shown above the option pair.',
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
    name: 'activeColor',
    type: 'string',
    required: false,
    description:
      'Stands in for the record\'s "theme Active color" — the fill color the selected option uses, wired as a CSS custom property rather than a hardcoded value. Defaults to "#1b1b1c", the exact value observed in the tested theme.',
  },
];

/**
 * Deterministic synthetic data only — no real form/entry content. Each
 * fixture is a starting point for the interactive preview harness, not a
 * frozen snapshot: value/disabled/required can still be changed live via the
 * preview controls once a fixture is selected.
 */
export const fixtures: PreviewFixture<PaperformYesNoFieldProps>[] = [
  {
    id: 'yes-selected',
    title: 'Yes selected',
    props: {
      value: 'yes',
      label: 'Q1 Do you like forms?',
      disabled: false,
      required: true,
    },
  },
  {
    id: 'no-selected',
    title: 'No selected',
    props: {
      value: 'no',
      label: 'Would you like to receive marketing emails?',
      disabled: false,
      required: false,
    },
  },
  {
    id: 'unselected',
    title: 'Unselected',
    props: {
      value: null,
      label: 'Have you visited this location before?',
      disabled: false,
      required: false,
    },
  },
  {
    id: 'required-error',
    title: 'Required validation error',
    props: {
      value: null,
      label: 'Do you consent to data processing?',
      description: 'This question must be answered.',
      disabled: false,
      required: true,
      error: 'This field is required.',
    },
  },
  {
    id: 'disabled',
    title: 'Disabled by default',
    props: {
      value: 'yes',
      label: 'Is this field locked by a previous answer?',
      disabled: true,
      required: false,
    },
  },
  {
    id: 'custom-theme-color',
    title: 'Custom theme Active color',
    props: {
      value: 'yes',
      label: 'Would you recommend us to a friend?',
      disabled: false,
      required: false,
      activeColor: '#7c3aed',
    },
  },
];

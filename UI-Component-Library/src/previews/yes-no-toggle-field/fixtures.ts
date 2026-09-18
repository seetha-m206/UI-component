import type { PreviewFixture, PropSchemaField } from '../types';
import type { YesNoToggleFieldProps } from './YesNoToggleField';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'value',
    type: "'yes' | 'no' | null",
    required: true,
    description: 'Currently selected option, or null if unanswered.',
  },
  {
    name: 'onChange',
    type: '(value: YesNoValue) => void',
    required: false,
    description:
      'Called with the new value on selection; clicking the already-selected option calls it with null (observed toggle-off behavior).',
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
];

/**
 * Deterministic synthetic data only — no real form/entry content. Each
 * fixture is a starting point for the interactive preview harness, not a
 * frozen snapshot: value/disabled/required can still be changed live via the
 * preview controls once a fixture is selected.
 */
export const fixtures: PreviewFixture<YesNoToggleFieldProps>[] = [
  {
    id: 'yes-selected',
    title: 'Yes selected',
    props: {
      value: 'yes',
      label: 'Do you agree to the terms and conditions?',
      description: 'Required before the form can be submitted.',
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
    id: 'long-label',
    title: 'Long label',
    props: {
      value: null,
      label:
        'Given the information provided above about our data retention and processing practices, do you consent to us storing your response for the purposes described in section 4 of the privacy notice?',
      disabled: false,
      required: false,
    },
  },
];

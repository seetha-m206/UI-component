import type { PreviewFixture, PropSchemaField } from '../types';
import type {
  RepeatableSubformInlineProps,
  SubformFieldDef,
  SubformRow,
} from './RepeatableSubformInline';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'label',
    type: 'string',
    required: true,
    description: 'The subform panel title (matches the "Subform" title in the builder header).',
  },
  {
    name: 'description',
    type: 'string',
    required: false,
    description: 'Optional helper text shown below the label.',
  },
  {
    name: 'fields',
    type: 'SubformFieldDef[]',
    required: true,
    description:
      'Child field definitions repeated in every row (the subform\'s "columns"), each with a key and label.',
  },
  {
    name: 'rows',
    type: 'SubformRow[]',
    required: true,
    description:
      'Current row data. The source record confirms live Preview mode always renders with exactly one populated row already present — a true zero-row state was not observed.',
  },
  {
    name: 'onChange',
    type: '(rows: SubformRow[]) => void',
    required: false,
    description:
      'Called with the updated row array on add, remove, or any field edit within a row.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Prevents any interaction (field edits, add, remove) when true. Defaults to false.',
  },
  {
    name: 'required',
    type: 'boolean',
    required: false,
    description:
      'Marks the subform required and enables the live validation error. Defaults to false.',
  },
  {
    name: 'error',
    type: 'string',
    required: false,
    description: 'Validation error message, announced via role="alert".',
  },
  {
    name: 'maxEntries',
    type: 'number',
    required: false,
    description:
      'Optional cap on row count. NOT confirmed in the source — the record\'s own "Open question (untested)" flags a max-entries setting as the leading hypothesis for why Add Entry could not be triggered in testing. Undefined (unlimited) unless explicitly set.',
  },
];

const nameFields: SubformFieldDef[] = [
  { key: 'firstName', label: 'First Name', placeholder: 'e.g. Jordan' },
  { key: 'lastName', label: 'Last Name', placeholder: 'e.g. Alvarez' },
];

function row(id: string, values: Record<string, string>): SubformRow {
  return { id, values };
}

/**
 * Deterministic synthetic data only — no real form/entry content. Each
 * fixture is a starting point for the interactive preview harness, not a
 * frozen snapshot: rows/disabled/required can still be changed live via the
 * preview controls once a fixture is selected.
 */
export const fixtures: PreviewFixture<RepeatableSubformInlineProps>[] = [
  {
    id: 'single-row',
    title: 'Single row (observed Preview default)',
    props: {
      label: 'Attendees',
      description: 'Add one row per person attending.',
      fields: nameFields,
      rows: [row('row-1', { firstName: 'Jordan', lastName: 'Alvarez' })],
      disabled: false,
      required: false,
    },
  },
  {
    id: 'multiple-rows',
    title: 'Multiple rows',
    props: {
      label: 'Attendees',
      description: 'Add one row per person attending.',
      fields: nameFields,
      rows: [
        row('row-1', { firstName: 'Jordan', lastName: 'Alvarez' }),
        row('row-2', { firstName: 'Priya', lastName: 'Natarajan' }),
        row('row-3', { firstName: 'Wei', lastName: 'Chen' }),
      ],
      disabled: false,
      required: false,
    },
  },
  {
    id: 'blank-row',
    title: 'Blank row awaiting input',
    props: {
      label: 'Emergency contacts',
      fields: nameFields,
      rows: [row('row-1', { firstName: '', lastName: '' })],
      disabled: false,
      required: false,
    },
  },
  {
    id: 'required-error',
    title: 'Required validation error',
    props: {
      label: 'Dependents',
      description: 'List every dependent covered by this policy.',
      fields: nameFields,
      rows: [row('row-1', { firstName: '', lastName: '' })],
      disabled: false,
      required: true,
      error: 'At least one complete row is required.',
    },
  },
  {
    id: 'max-entries',
    title: 'Row limit reached (assumed maxEntries gating)',
    props: {
      label: 'Team members (max 2)',
      description:
        'Demonstrates the unconfirmed "max entries" hypothesis from the source record: Add row is disabled once the limit is reached.',
      fields: nameFields,
      rows: [
        row('row-1', { firstName: 'Jordan', lastName: 'Alvarez' }),
        row('row-2', { firstName: 'Priya', lastName: 'Natarajan' }),
      ],
      disabled: false,
      required: false,
      maxEntries: 2,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled by default',
    props: {
      label: 'Attendees',
      fields: nameFields,
      rows: [
        row('row-1', { firstName: 'Jordan', lastName: 'Alvarez' }),
        row('row-2', { firstName: 'Priya', lastName: 'Natarajan' }),
      ],
      disabled: true,
      required: false,
    },
  },
];

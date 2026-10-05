import type { PreviewFixture, PropSchemaField } from '../types';
import type { JotformInputTableFieldProps } from './JotformInputTableField';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'rows',
    type: 'string[]',
    required: false,
    description: 'Row labels. Defaults to the confirmed real pre-populated template.',
  },
  {
    name: 'columns',
    type: 'string[]',
    required: false,
    description: 'Column labels. Defaults to the confirmed real pre-populated template.',
  },
  {
    name: 'columnTypes',
    type: "('radio' | 'text')[]",
    required: false,
    description:
      "Per-column cell type. Defaults to 'radio' for every column, reproducing the confirmed real default-template mismatch (the \"Any thoughts?\" column renders as radios until manually switched).",
  },
  {
    name: 'requiredMode',
    type: "'none' | 'every-row'",
    required: false,
    description:
      "Mirrors the real GENERAL tab's Required dropdown. Only 'every-row' is wired to visible validation — the only mode directly tested end-to-end in the source.",
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
    description: "The table's accessible name, wired as aria-labelledby on the <table>.",
  },
];

export const fixtures: PreviewFixture<JotformInputTableFieldProps>[] = [
  {
    id: 'default-template',
    title: 'Default template (unanswered)',
    props: {
      disabled: false,
    },
  },
  {
    id: 'required-every-row',
    title: 'Required: every row — try Submit',
    props: {
      requiredMode: 'every-row',
      disabled: false,
    },
  },
  {
    id: 'multi-type-columns',
    title: 'Multi-type columns (last column switched to text)',
    props: {
      columnTypes: ['radio', 'radio', 'radio', 'text'],
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    props: {
      disabled: true,
    },
  },
];

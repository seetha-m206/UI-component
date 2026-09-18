import type { PreviewFixture, PropSchemaField } from '../types';
import type { MatrixChoicesFieldProps } from './MatrixChoicesField';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'rowLabels',
    type: 'string[]',
    required: true,
    description:
      "Row (question) labels, top to bottom. A row's position in this array is its identity — see the README for why index strings, not generated ids, are used to key `value`.",
  },
  {
    name: 'columnLabels',
    type: 'string[]',
    required: true,
    description:
      'Column (answer option) labels, left to right. Same index-is-identity note as rowLabels.',
  },
  {
    name: 'onRowLabelsChange',
    type: '(next: string[]) => void',
    required: false,
    description:
      "Called with the full next array on add, remove, or relabel of a row via the Properties panel — mirrors choices-list-editor's whole-array onChange contract rather than separate onAddRow/onRemoveRow callbacks.",
  },
  {
    name: 'onColumnLabelsChange',
    type: '(next: string[]) => void',
    required: false,
    description: 'Same contract as onRowLabelsChange, for columns.',
  },
  {
    name: 'value',
    type: 'Record<string, string>',
    required: false,
    description:
      'Selection map keyed by stringified row index -> stringified selected column index, e.g. { "0": "1" }. A row absent from the map has no selection. Rows are fully independent (confirmed in the source: selecting in one row never clears another row\'s selection).',
  },
  {
    name: 'onChange',
    type: '(value: Record<string, string>) => void',
    required: false,
    description:
      'Called with the full next selection map whenever a grid cell is clicked (or reached via keyboard and activated).',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Prevents all interaction (typing, add/remove, cell selection) when true. Defaults to false.',
  },
  {
    name: 'maxRows',
    type: 'number',
    required: false,
    description:
      'Optional row-count ceiling. Undefined (no limit) by default — the source record found no confirmed client-side cap (tested to at least 8 rows); the real ceiling is server-enforced and unconfirmed.',
  },
  {
    name: 'maxColumns',
    type: 'number',
    required: false,
    description: 'Same as maxRows, for columns. Undefined (no limit) by default.',
  },
  {
    name: 'minRows',
    type: 'number',
    required: false,
    description:
      "Floor below which the per-row remove control disables itself. Not documented in the source (no minimum was observed) — a deliberate addition so the grid can never shrink to zero rows, for consistency with choices-list-editor's minChoices guard. Defaults to 1.",
  },
  {
    name: 'minColumns',
    type: 'number',
    required: false,
    description: 'Same as minRows, for columns. Defaults to 1.',
  },
  {
    name: 'label',
    type: 'string',
    required: false,
    description: 'Heading text above the whole component. Defaults to "Matrix Choices".',
  },
];

/**
 * Deterministic synthetic data only — no real form/entry content. Fixtures
 * are starting points for the interactive preview harness (cell selection
 * is always live via internal handlers); row/column add-remove-relabel is
 * only meaningfully interactive through this component's own dedicated
 * Controlled wrapper in MatrixChoicesField.test.tsx — see this folder's
 * README ("Fitting into the shared harness").
 */
export const fixtures: PreviewFixture<MatrixChoicesFieldProps>[] = [
  {
    id: 'default-3x3',
    title: 'Default 3×3 grid, no selection',
    props: {
      rowLabels: ['First Question', 'Second Question', 'Third Question'],
      columnLabels: ['Answer A', 'Answer B', 'Answer C'],
      value: {},
      disabled: false,
    },
  },
  {
    id: 'row-independence',
    title: 'Row independence (two rows selected)',
    props: {
      rowLabels: ['First Question', 'Second Question', 'Third Question'],
      columnLabels: ['Answer A', 'Answer B', 'Answer C'],
      // First Question -> Answer B, Second Question -> Answer A, Third
      // Question untouched: confirms both selections co-exist and neither
      // row affects the other (Behavior & States, directly confirmed).
      value: { '0': '1', '1': '0' },
      disabled: false,
    },
  },
  {
    id: 'larger-grid',
    title: 'Larger grid (5 rows x 4 columns) — scales beyond the 3x3 default',
    props: {
      rowLabels: [
        'How satisfied are you with support?',
        'How satisfied are you with pricing?',
        'How satisfied are you with onboarding?',
        'How satisfied are you with reliability?',
        'How satisfied are you with documentation?',
      ],
      columnLabels: ['Very Unsatisfied', 'Unsatisfied', 'Satisfied', 'Very Satisfied'],
      value: { '0': '2', '2': '3', '4': '1' },
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    props: {
      rowLabels: ['First Question', 'Second Question', 'Third Question'],
      columnLabels: ['Answer A', 'Answer B', 'Answer C'],
      value: { '0': '0' },
      disabled: true,
    },
  },
  {
    id: 'at-row-column-limit',
    title: 'maxRows/maxColumns reached (add controls disabled)',
    props: {
      rowLabels: ['First Question', 'Second Question'],
      columnLabels: ['Answer A', 'Answer B'],
      value: {},
      disabled: false,
      maxRows: 2,
      maxColumns: 2,
    },
  },
];

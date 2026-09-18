import type { PreviewFixture, PropSchemaField } from '../types';
import type { EntriesFilterPanelProps, FilterFieldDef } from './EntriesFilterPanel';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'fields',
    type: 'FilterFieldDef[]',
    required: true,
    description:
      "Selectable form fields (id/label/datatype). Datatype drives the operator set offered for each row (text/number/date), per the source record's confirmed datatype-aware operators.",
  },
  {
    name: 'initialFilters',
    type: 'FilterCriteriaRow[]',
    required: false,
    description:
      'Starting set of criteria rows. Defaults to a single row against fields[0] with the first operator for its datatype and an empty value.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Prevents any interaction (field/operator/value edits, add/remove, Search/Clear) when true. Defaults to false.',
  },
  {
    name: 'forceValidation',
    type: 'boolean',
    required: false,
    description:
      'Seeds the panel already showing validation state, as if Search had already been clicked once with incomplete criteria. Defaults to false.',
  },
  {
    name: 'label',
    type: 'string',
    required: false,
    description: 'Heading text above the filter rows. Defaults to "Filter Entries".',
  },
  {
    name: 'onApply',
    type: '(filters: FilterCriteriaRow[]) => void',
    required: false,
    description:
      'Called with the current filters when Search is clicked and every row validates (observed: an invalid row blocks this entirely, matching ZFReportLive.searchView() never sending a request for invalid criteria).',
  },
  {
    name: 'onClear',
    type: '() => void',
    required: false,
    description: 'Called when Clear is clicked, after all rows are removed.',
  },
  {
    name: 'onChange',
    type: '(filters: FilterCriteriaRow[]) => void',
    required: false,
    description:
      'Called on every row add/remove/field/operator/value change with the full current filter list.',
  },
];

/** Deterministic synthetic field list — not real form/entry content. */
const FIELDS: FilterFieldDef[] = [
  { id: 'name', label: 'Name', datatype: 'text' },
  { id: 'email', label: 'Email', datatype: 'text' },
  { id: 'status', label: 'Status', datatype: 'text' },
  { id: 'rating', label: 'Rating', datatype: 'number' },
  { id: 'createdDate', label: 'Created Date', datatype: 'date' },
];

/**
 * Deterministic synthetic data only — no real form/entry content. Each
 * fixture is a starting point for the interactive preview harness, not a
 * frozen snapshot: rows can still be added/removed/edited live via the
 * component once a fixture is selected.
 */
export const fixtures: PreviewFixture<EntriesFilterPanelProps>[] = [
  {
    id: 'single-default-row',
    title: 'Single default row',
    props: {
      fields: FIELDS,
      initialFilters: [{ id: 'row-name', fieldId: 'name', operator: 'Is', value: '' }],
      disabled: false,
    },
  },
  {
    id: 'text-filter-filled',
    title: 'Text filter, filled in',
    props: {
      fields: FIELDS,
      initialFilters: [{ id: 'row-name', fieldId: 'name', operator: 'Contains', value: 'Acme' }],
      disabled: false,
    },
  },
  {
    id: 'multiple-rows',
    title: 'Multiple rows (text + number + date)',
    props: {
      fields: FIELDS,
      initialFilters: [
        { id: 'row-name', fieldId: 'name', operator: 'Contains', value: 'Acme' },
        { id: 'row-rating', fieldId: 'rating', operator: 'Is Greater Than', value: '3' },
        {
          id: 'row-date',
          fieldId: 'createdDate',
          operator: 'Is',
          value: '01-Jan-2026 00:00:00',
        },
      ],
      disabled: false,
    },
  },
  {
    id: 'valueless-operator',
    title: 'Valueless operator (Is Empty / date preset)',
    props: {
      fields: FIELDS,
      initialFilters: [
        { id: 'row-email', fieldId: 'email', operator: 'Is Empty', value: '' },
        { id: 'row-date', fieldId: 'createdDate', operator: 'Last 7 Days', value: '' },
      ],
      disabled: false,
    },
  },
  {
    id: 'validation-error',
    title: 'Validation error (empty value on Search)',
    props: {
      fields: FIELDS,
      initialFilters: [
        { id: 'row-name', fieldId: 'name', operator: 'Contains', value: 'Acme' },
        { id: 'row-status', fieldId: 'status', operator: 'Is', value: '' },
      ],
      disabled: false,
      forceValidation: true,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled panel',
    props: {
      fields: FIELDS,
      initialFilters: [{ id: 'row-rating', fieldId: 'rating', operator: 'Is Between', value: '2' }],
      disabled: true,
    },
  },
];

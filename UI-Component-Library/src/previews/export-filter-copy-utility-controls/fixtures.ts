import type { PreviewFixture, PropSchemaField } from '../types';
import type { ExportFilterCopyUtilityControlsProps } from './ExportFilterCopyUtilityControls';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'formName',
    type: 'string',
    required: false,
    description:
      'Name of the form the Export/CSV modal acts on; also seeds the CSV modal\'s pre-filled File Name (`<FormName>_Report`).',
  },
  {
    name: 'entryCount',
    type: 'number',
    required: false,
    description: "Shown in the CSV modal's info panel as the selected-entry count.",
  },
  {
    name: 'dailyExportLimitNote',
    type: 'string',
    required: false,
    description:
      'Shown in the CSV modal\'s info panel. The record confirms this note exists but not its exact wording — the default text here is a placeholder, not a captured string.',
  },
  {
    name: 'permalink',
    type: 'string',
    required: false,
    description: 'The readonly permalink text shown/copied by the copy-to-clipboard field.',
  },
  {
    name: 'initialStatus',
    type: "'all' | 'enabled' | 'disabled'",
    required: false,
    description: "Starting selected status filter. Defaults to 'all'.",
  },
  {
    name: 'initialExportMenuOpen',
    type: 'boolean',
    required: false,
    description: 'Seeds the Export menu already open.',
  },
  {
    name: 'initialCsvModalOpen',
    type: 'boolean',
    required: false,
    description: 'Seeds the CSV export modal already open.',
  },
  {
    name: 'initialStatusMenuOpen',
    type: 'boolean',
    required: false,
    description: 'Seeds the status filter dropdown already open.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Disables all three controls. Not documented in the source — included for harness/fixture consistency with other previews in this repo.',
  },
  {
    name: 'onExportCsv',
    type: '(details: { fileName: string; passwordProtected: boolean }) => void',
    required: false,
    description:
      'Fired when the CSV export modal\'s "Done" is clicked. No real export/download is implemented — the source itself never clicked "Done" (safety constraint).',
  },
  {
    name: 'onExportPdf',
    type: '() => void',
    required: false,
    description:
      'Fired when "Export as PDF" is selected. The source only captured this item\'s function name, not its modal structure, so this is a callback only — no rebuilt modal.',
  },
  {
    name: 'onStatusChange',
    type: "(status: 'all' | 'enabled' | 'disabled') => void",
    required: false,
    description:
      'Fired when a status filter option is chosen. The real product performs a server round-trip on this action (confirmed via network capture); this reconstruction only updates local UI state.',
  },
  {
    name: 'onCopy',
    type: '(text: string) => void',
    required: false,
    description: 'Fired with the copied text once the copy action completes.',
  },
];

/**
 * Deterministic synthetic data only — no real form/entry/account content.
 * Each fixture is a starting point for the interactive preview harness.
 */
export const fixtures: PreviewFixture<ExportFilterCopyUtilityControlsProps>[] = [
  {
    id: 'default',
    title: 'Default (all controls closed)',
    props: {
      formName: 'Customer Feedback Form',
      entryCount: 42,
      initialStatus: 'all',
    },
  },
  {
    id: 'export-menu-open',
    title: 'Export menu open (CSV / PDF)',
    props: {
      formName: 'Customer Feedback Form',
      initialExportMenuOpen: true,
    },
  },
  {
    id: 'csv-modal-open',
    title: 'Export as CSV modal open',
    props: {
      formName: 'Customer Feedback Form',
      entryCount: 128,
      initialCsvModalOpen: true,
    },
  },
  {
    id: 'status-menu-open',
    title: 'Status filter open, "Active Forms" currently selected',
    props: {
      initialStatus: 'enabled',
      initialStatusMenuOpen: true,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled (all three controls inert)',
    props: {
      disabled: true,
    },
  },
];

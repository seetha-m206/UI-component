import type { PreviewFixture, PropSchemaField } from '../types';
import type { SmartScanAiFieldProps } from './SmartScanAiField';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'mode',
    type: "'builder' | 'live'",
    required: true,
    description:
      'Which documented surface to render: the builder\'s "Configure Smart Scan" modal, or the canvas/live-form upload control (visually identical on canvas and on the published form, per the record).',
  },
  {
    name: 'initialBuilderState',
    type: "'empty' | 'sample-selected' | 'extracted'",
    required: false,
    description:
      'Builder mode only. Starting state on mount. Defaults to "empty" (no sample image selected yet).',
  },
  {
    name: 'sampleImageName',
    type: 'string',
    required: false,
    description:
      'Builder mode. Filename shown once a sample image is selected. Defaults to "sample-test-form.png".',
  },
  {
    name: 'sampleExtractionResult',
    type: 'SmartScanExtractedField[]',
    required: false,
    description:
      'Builder mode. The canned key-value result "Extract data" produces — simulated, not real OCR/AI. Defaults to a 5-field demo set (Name/Email/Phone/Company/City) mirroring the record\'s own tested sample image.',
  },
  {
    name: 'targetFields',
    type: 'string[]',
    required: false,
    description:
      "Builder mode. Dropdown options for the Field Mapping table's target-field column.",
  },
  {
    name: 'initialMappings',
    type: 'SmartScanMappingRow[]',
    required: false,
    description:
      'Builder mode. Starting Field Mapping rows once in the "extracted" state. Defaults to one empty row.',
  },
  {
    name: 'onExtract',
    type: '(result: SmartScanExtractedField[]) => void',
    required: false,
    description: 'Builder mode. Called with the canned result whenever "Extract data" completes.',
  },
  {
    name: 'initialLiveState',
    type: "'empty' | 'uploaded-scan-failed' | 'uploaded-scan-failed-dismissed'",
    required: false,
    description:
      'Live mode only. Starting state on mount. Defaults to "empty". Uploading a NEW file while in "empty" always reproduces the confirmed scan-failure bug — this is not a togglable outcome.',
  },
  {
    name: 'uploadedFileName',
    type: 'string',
    required: false,
    description:
      'Live mode. Uploaded file display name for the thumbnail. Defaults to "sample-test-form.png".',
  },
  {
    name: 'uploadedFileSize',
    type: 'string',
    required: false,
    description: 'Live mode. Uploaded file display size for the thumbnail. Defaults to "184 KB".',
  },
];

/**
 * Deterministic synthetic data only — no real personal data, matching the
 * record's own note that only a synthetic placeholder test image was ever
 * used. The 5-field extraction result and target fields mirror the
 * record's actual tested values (Name → Jane Doe, mapped to "Single
 * Line").
 */
export const fixtures: PreviewFixture<SmartScanAiFieldProps>[] = [
  {
    id: 'builder-before-extraction',
    title: 'Builder — before extraction',
    props: {
      mode: 'builder',
      initialBuilderState: 'empty',
    },
  },
  {
    id: 'builder-sample-selected',
    title: 'Builder — sample image selected, not yet extracted',
    props: {
      mode: 'builder',
      initialBuilderState: 'sample-selected',
      sampleImageName: 'sample-test-form.png',
    },
  },
  {
    id: 'builder-after-extraction',
    title: 'Builder — after successful extraction',
    props: {
      mode: 'builder',
      initialBuilderState: 'extracted',
      sampleImageName: 'sample-test-form.png',
      initialMappings: [
        { id: 'row-1', extractedKey: 'Name', targetField: 'Single Line' },
        { id: 'row-2', extractedKey: '', targetField: '' },
      ],
    },
  },
  {
    id: 'live-before-upload',
    title: 'Live form — before upload',
    props: {
      mode: 'live',
      initialLiveState: 'empty',
    },
  },
  {
    id: 'live-scan-failure',
    title: 'Live form — scan fails (confirmed bug)',
    props: {
      mode: 'live',
      initialLiveState: 'uploaded-scan-failed',
      uploadedFileName: 'sample-test-form.png',
      uploadedFileSize: '184 KB',
    },
  },
  {
    id: 'live-scan-failure-dismissed',
    title: 'Live form — error dismissed, file still retained',
    props: {
      mode: 'live',
      initialLiveState: 'uploaded-scan-failed-dismissed',
      uploadedFileName: 'sample-test-form.png',
      uploadedFileSize: '184 KB',
    },
  },
];

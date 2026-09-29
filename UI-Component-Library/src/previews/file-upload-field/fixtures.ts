import type { PreviewFixture, PropSchemaField } from '../types';
import type { FileUploadFieldProps } from './FileUploadField';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'view',
    type: "'respondent' | 'entries'",
    required: false,
    description:
      "Which documented surface to render: the respondent-facing published form field, or the Entries-table hover/lightbox interaction. Defaults to 'respondent'.",
  },
  {
    name: 'label',
    type: 'string',
    required: false,
    description: 'Field label shown above the widget in respondent view.',
  },
  {
    name: 'allowedExtensions',
    type: 'string[]',
    required: false,
    description:
      'Allowed file extensions (lowercase, no dot), e.g. [\'pdf\']. An empty array means "all file types accepted" — the record\'s own documented default. Drives the exact confirmed error copy: "The following file types are supported: <ext>."',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables the widget/Submit in respondent view. Not documented in the source.',
  },
  {
    name: 'initialStatus',
    type: "'empty' | 'uploaded' | 'invalid'",
    required: false,
    description: "Respondent view. Starting upload status on mount. Defaults to 'empty'.",
  },
  {
    name: 'initialFile',
    type: '{ name: string; size: string }',
    required: false,
    description: "Respondent view. File shown when initialStatus is 'uploaded'.",
  },
  {
    name: 'initialRejectedFileName',
    type: 'string',
    required: false,
    description: "Respondent view. File name shown in the error row when initialStatus is 'invalid'.",
  },
  {
    name: 'onFileUploaded',
    type: '(file: { name: string; size: string }) => void',
    required: false,
    description: 'Respondent view. Fired once a valid file is accepted and the "uploaded" row appears.',
  },
  {
    name: 'onInvalidFileRejected',
    type: '(fileName: string) => void',
    required: false,
    description: 'Respondent view. Fired when a selected file fails the allowed-extensions check.',
  },
  {
    name: 'onFileRemoved',
    type: '() => void',
    required: false,
    description: 'Respondent view. Fired when the uploaded/error row\'s "×" remove control is used.',
  },
  {
    name: 'onSubmit',
    type: '() => void',
    required: false,
    description:
      'Respondent view. Fired when Submit is clicked while status is \'uploaded\' or \'empty\'. NEVER fired while status is \'invalid\' — confirmed genuinely blocking in the source record, not cosmetic.',
  },
  {
    name: 'entriesFile',
    type: '{ name: string; size: string }',
    required: false,
    description: 'Entries view. The single completed-upload row shown.',
  },
  {
    name: 'initialLightboxOpen',
    type: 'boolean',
    required: false,
    description: 'Entries view. Seeds the lightbox already open on mount.',
  },
  {
    name: 'onDownload',
    type: '() => void',
    required: false,
    description: "Entries view. Fired when the row's or the lightbox's download control is used.",
  },
];

/**
 * Deterministic synthetic data only — no real form/entry content.
 */
export const fixtures: PreviewFixture<FileUploadFieldProps>[] = [
  {
    id: 'respondent-empty',
    title: 'Respondent — empty (dashed "Choose File" box)',
    props: {
      view: 'respondent',
      label: 'Attach your resume',
      allowedExtensions: ['pdf'],
      initialStatus: 'empty',
    },
  },
  {
    id: 'respondent-uploaded',
    title: 'Respondent — valid file uploaded (no progress bar)',
    props: {
      view: 'respondent',
      label: 'Attach your resume',
      allowedExtensions: ['pdf'],
      initialStatus: 'uploaded',
      initialFile: { name: 'resume-final.pdf', size: '212 KB' },
    },
  },
  {
    id: 'respondent-invalid',
    title: 'Respondent — invalid file type (blocking error, Submit is a no-op)',
    props: {
      view: 'respondent',
      label: 'Attach your resume',
      allowedExtensions: ['pdf'],
      initialStatus: 'invalid',
      initialRejectedFileName: 'photo.png',
    },
  },
  {
    id: 'respondent-disabled',
    title: 'Respondent — disabled',
    props: {
      view: 'respondent',
      label: 'Attach your resume',
      allowedExtensions: ['pdf'],
      disabled: true,
    },
  },
  {
    id: 'entries-default',
    title: 'Entries — hover to reveal preview/download icons',
    props: {
      view: 'entries',
      entriesFile: { name: 'invoice_march.pdf', size: '184 KB' },
    },
  },
  {
    id: 'entries-lightbox-open',
    title: 'Entries — lightbox open (filename, zoom, filmstrip)',
    props: {
      view: 'entries',
      entriesFile: { name: 'invoice_march.pdf', size: '184 KB' },
      initialLightboxOpen: true,
    },
  },
];

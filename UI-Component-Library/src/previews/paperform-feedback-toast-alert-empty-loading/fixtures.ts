import type { PreviewFixture, PropSchemaField } from '../types';
import type { PaperformFeedbackToastAlertEmptyLoadingProps } from './PaperformFeedbackToastAlertEmptyLoading';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
  {
    name: 'onRestoreForm',
    type: '() => void',
    required: false,
    description: 'Called when a trashed form is restored — the one confirmed trigger for the "Restored form" toast.',
  },
  {
    name: 'onExportSubmissions',
    type: '() => void',
    required: false,
    description: 'Called when exporting submissions — fires the export toast (the export itself is a signed-URL click, not a fetch, per the source).',
  },
  {
    name: 'onDeleteSubmission',
    type: '() => void',
    required: false,
    description: 'Called when the MUI-style "Delete Submission" dialog is confirmed.',
  },
  {
    name: 'onDeleteForm',
    type: '() => void',
    required: false,
    description: 'Called when the bespoke form-delete dialog is confirmed — confirmed to give zero post-confirm feedback.',
  },
];

export const fixtures: PreviewFixture<PaperformFeedbackToastAlertEmptyLoadingProps>[] = [
  {
    id: 'default',
    title: 'Default — all triggers available',
    props: {
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

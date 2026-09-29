import type { PreviewFixture, PropSchemaField } from '../types';
import type { GoogleFormsFeedbackPatternsProps } from './GoogleFormsFeedbackPatterns';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
  {
    name: 'onDeleteQuestion',
    type: '() => void',
    required: false,
    description: 'Called when the trash-can icon deletes a question (no modal — straight to the toast).',
  },
  {
    name: 'onDeleteForm',
    type: '() => void',
    required: false,
    description: 'Called when the dashboard "Move to trash" modal is confirmed.',
  },
  {
    name: 'onDeleteSection',
    type: '() => void',
    required: false,
    description: 'Called when the "Delete questions and section?" modal is confirmed.',
  },
  {
    name: 'onUnlinkForm',
    type: '() => void',
    required: false,
    description: 'Called when unlinking the response spreadsheet — confirmed to give no toast/banner feedback.',
  },
];

export const fixtures: PreviewFixture<GoogleFormsFeedbackPatternsProps>[] = [
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

import type { PreviewFixture, PropSchemaField } from '../types';
import type { TypeformFeedbackPatternsProps } from './TypeformFeedbackPatterns';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
  {
    name: 'onDeleteForm',
    type: '() => void',
    required: false,
    description: 'Called when the whole-form delete modal is confirmed — gives no post-confirm toast, per the confirmed finding.',
  },
  {
    name: 'onDeleteQuestion',
    type: '() => void',
    required: false,
    description: 'Called when a single question is deleted — no modal precedes this call, and no toast follows it.',
  },
  {
    name: 'onSaveWebhook',
    type: '(url: string) => void',
    required: false,
    description: 'Called whenever a webhook save is attempted, including the confirmed silent-failure case (an unreachable-looking URL that never actually persists).',
  },
];

export const fixtures: PreviewFixture<TypeformFeedbackPatternsProps>[] = [
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

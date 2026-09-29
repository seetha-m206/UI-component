import type { PreviewFixture, PropSchemaField } from '../types';
import type {
  NotificationSettingsEditorProps,
  NotificationTemplate,
  RecipientChip,
} from './NotificationSettingsEditor';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialActiveTrigger',
    type: "'new-record' | 'updated-record'",
    required: false,
    description:
      "Which of the two fixed trigger tabs is active at mount. Defaults to 'new-record'.",
  },
  {
    name: 'initialTemplates',
    type: 'Record<NotificationTrigger, NotificationTemplate[]>',
    required: false,
    description:
      'Starting templates per trigger tab. Defaults to both tabs empty — the true source empty state ("Configure emails to be sent when a response is added").',
  },
  {
    name: 'fromAddress',
    type: 'string',
    required: false,
    description:
      'Fixed, verified sender address shown read-only in the editor\'s "From" field (only "From Name" is editable, per the source).',
  },
  {
    name: 'initialEditorOpen',
    type: 'boolean',
    required: false,
    description: 'Mounts with the template editor modal already open. Defaults to false.',
  },
  {
    name: 'initialEditorDraft',
    type: 'Partial<TemplateDraft>',
    required: false,
    description:
      'Seeds the editor draft when initialEditorOpen is true, e.g. to show an already-invalid recipient chip.',
  },
  {
    name: 'initialFieldLabelsOpen',
    type: 'boolean',
    required: false,
    description:
      'Mounts with the read-only "Field Labels" reference popup already open (only meaningful alongside initialEditorOpen).',
  },
  {
    name: 'onSaveTemplate',
    type: '(trigger: NotificationTrigger, template: NotificationTemplate) => void',
    required: false,
    description:
      'Fired when Save persists a new template. No real POST is made — matches the source\'s single confirmed `POST .../notifications/email` call being reduced to a callback in this static preview.',
  },
];

function chip(value: string, valid = true): RecipientChip {
  return { id: `chip-${value}`, value, valid };
}

const SAMPLE_TEMPLATES: NotificationTemplate[] = [
  {
    id: 'tmpl-1',
    fromName: 'Customer Satisfaction Survey',
    to: [chip('team@example.com')],
    cc: '',
    bcc: '',
    subject: 'New response received',
    body: 'A new response was just submitted.',
    enabled: true,
  },
  {
    id: 'tmpl-2',
    fromName: 'Customer Satisfaction Survey',
    to: [chip('archive@example.com')],
    cc: '',
    bcc: '',
    subject: 'Archive copy',
    body: 'Archival copy of the submission.',
    enabled: false,
  },
];

export const fixtures: PreviewFixture<NotificationSettingsEditorProps>[] = [
  {
    id: 'empty',
    title: 'Empty state (no rule configured)',
    props: {},
  },
  {
    id: 'new-record-populated',
    title: 'New Record tab — 2 templates (1 enabled, 1 disabled)',
    props: {
      initialActiveTrigger: 'new-record',
      initialTemplates: { 'new-record': SAMPLE_TEMPLATES, 'updated-record': [] },
    },
  },
  {
    id: 'updated-record-empty-tab',
    title: 'Updated Record tab active, but empty (New Record has templates)',
    props: {
      initialActiveTrigger: 'updated-record',
      initialTemplates: { 'new-record': SAMPLE_TEMPLATES, 'updated-record': [] },
    },
  },
  {
    id: 'editor-open-invalid-chip',
    title: 'Template editor open — one invalid recipient chip',
    props: {
      initialActiveTrigger: 'new-record',
      initialTemplates: { 'new-record': [], 'updated-record': [] },
      initialEditorOpen: true,
      initialEditorDraft: {
        fromName: 'Customer Satisfaction Survey',
        to: [chip('valid@example.com', true), chip('not-an-email', false)],
        subject: 'Thanks for your response',
      },
    },
  },
  {
    id: 'editor-open-field-labels',
    title: 'Template editor open — Field Labels popup open',
    props: {
      initialActiveTrigger: 'new-record',
      initialTemplates: { 'new-record': [], 'updated-record': [] },
      initialEditorOpen: true,
      initialFieldLabelsOpen: true,
      initialEditorDraft: {
        subject: 'Thanks for your response, ',
      },
    },
  },
];

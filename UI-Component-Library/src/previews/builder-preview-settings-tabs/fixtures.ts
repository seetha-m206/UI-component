import type { PreviewFixture, PropSchemaField } from '../types';
import type { BuilderPreviewSettingsTabsProps, BuilderNavItem } from './BuilderPreviewSettingsTabs';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'items',
    type: 'BuilderNavItem[]',
    required: true,
    description:
      'Ordered list of the 9 left-rail sections ({ id, label }): Builder, Rules, Settings, Themes, Share, Integrations, Approvals, Analytics, Audit, matching the source\'s bare <ul><li><a href> list.',
  },
  {
    name: 'value',
    type: 'string',
    required: true,
    description: 'id of the currently active left-rail item (the source\'s class="select" item).',
  },
  {
    name: 'onChange',
    type: '(id: string) => void',
    required: false,
    description:
      'Called with the clicked item\'s id on every click, including the already-active item (no deselect/no-op guard, matching a plain <a href>). In the real product this click causes a full page reload, which this reconstruction cannot reproduce — only the resulting visual active-item swap is simulated.',
  },
  {
    name: 'fieldLabels',
    type: 'string[]',
    required: true,
    description:
      'Field labels on the current form. Drives only the Preview overlay\'s empty-state ("This form is empty!") vs. populated rendering — never disables the left rail or the Preview button, per the record\'s direct refutation of a "Preview disabled until >=1 field" hypothesis.',
  },
  {
    name: 'formTitle',
    type: 'string',
    required: false,
    description: 'Display-only form title shown in the top bar and inside the preview overlay.',
  },
  {
    name: 'initialPreviewOpen',
    type: 'boolean',
    required: false,
    description: 'Whether the Preview overlay starts open. Defaults to false.',
  },
  {
    name: 'onPreviewOpenChange',
    type: '(open: boolean) => void',
    required: false,
    description: 'Fired whenever the Preview overlay opens or closes.',
  },
];

const NAV_ITEMS: BuilderNavItem[] = [
  { id: 'builder', label: 'Builder' },
  { id: 'rules', label: 'Rules' },
  { id: 'settings', label: 'Settings' },
  { id: 'themes', label: 'Themes' },
  { id: 'share', label: 'Share' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'approvals', label: 'Approvals' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'audit', label: 'Audit' },
];

const SAMPLE_FIELD_LABELS = ['Full Name', 'Email Address', 'How can we help?', 'Satisfaction Rating'];

export const fixtures: PreviewFixture<BuilderPreviewSettingsTabsProps>[] = [
  {
    id: 'builder-active-populated',
    title: 'Builder active (populated form)',
    props: {
      items: NAV_ITEMS,
      value: 'builder',
      fieldLabels: SAMPLE_FIELD_LABELS,
      formTitle: 'Customer Satisfaction Survey',
    },
  },
  {
    id: 'settings-active',
    title: 'Settings active',
    props: {
      items: NAV_ITEMS,
      value: 'settings',
      fieldLabels: SAMPLE_FIELD_LABELS,
      formTitle: 'Customer Satisfaction Survey',
    },
  },
  {
    id: 'audit-active',
    title: 'Audit active (last item)',
    props: {
      items: NAV_ITEMS,
      value: 'audit',
      fieldLabels: SAMPLE_FIELD_LABELS,
      formTitle: 'Customer Satisfaction Survey',
    },
  },
  {
    id: 'zero-field-form',
    title: 'Zero-field form (all 9 items still enabled)',
    props: {
      items: NAV_ITEMS,
      value: 'builder',
      fieldLabels: [],
      formTitle: 'Untitled Form',
    },
  },
  {
    id: 'preview-open-populated',
    title: 'Preview overlay open (populated form)',
    props: {
      items: NAV_ITEMS,
      value: 'builder',
      fieldLabels: SAMPLE_FIELD_LABELS,
      formTitle: 'Customer Satisfaction Survey',
      initialPreviewOpen: true,
    },
  },
  {
    id: 'preview-open-empty',
    title: 'Preview overlay open — "This form is empty!"',
    props: {
      items: NAV_ITEMS,
      value: 'builder',
      fieldLabels: [],
      formTitle: 'Untitled Form',
      initialPreviewOpen: true,
    },
  },
];

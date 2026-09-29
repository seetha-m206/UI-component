import type { PreviewFixture, PropSchemaField } from '../types';
import type { JotformAppShellBuilderProps } from './JotformAppShellBuilder';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
  {
    name: 'onModeChange',
    type: "(mode: 'build' | 'settings' | 'publish') => void",
    required: false,
    description: 'Called when the BUILD/SETTINGS/PUBLISH mode-tab bar is used.',
  },
  {
    name: 'onFieldSelect',
    type: '(fieldId: string | null) => void',
    required: false,
    description: 'Called when a canvas field is selected/deselected — drives the right-pane AI-copilot-vs-Properties-panel swap.',
  },
];

export const fixtures: PreviewFixture<JotformAppShellBuilderProps>[] = [
  {
    id: 'default',
    title: 'Default — BUILD mode, AI copilot in the right pane',
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

import type { PreviewFixture, PropSchemaField } from '../types';
import type { JotformSignBuilderProps } from './JotformSignBuilder';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
  {
    name: 'onModeChange',
    type: "(mode: 'build' | 'settings' | 'send') => void",
    required: false,
    description: 'Called when the BUILD/SETTINGS/SEND mode-tab bar is used.',
  },
  {
    name: 'onSendAttempt',
    type: '() => void',
    required: false,
    description:
      'Called when "Send to Sign" is clicked. The component never sends anything itself — this is only a hook for the host to observe the attempt.',
  },
];

export const fixtures: PreviewFixture<JotformSignBuilderProps>[] = [
  {
    id: 'default',
    title: 'BUILD tab, default template',
    props: {
      disabled: false,
    },
  },
  {
    id: 'send-tab',
    title: 'SEND tab, signers configured',
    props: {
      disabled: false,
    },
  },
  {
    id: 'settings-tab',
    title: 'SETTINGS tab',
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

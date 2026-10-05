import type { PreviewFixture, PropSchemaField } from '../types';
import type { JotformAiAgentsProps } from './JotformAiAgents';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialStep',
    type: "'prompt' | 'generating' | 'built'",
    required: false,
    description: 'Which step the component starts on. Defaults to "prompt".',
  },
  {
    name: 'initialTab',
    type: "'build' | 'train' | 'publish'",
    required: false,
    description: 'Which BUILD/TRAIN/PUBLISH tab is active once built. Defaults to "build".',
  },
  {
    name: 'initialTrainSection',
    type: "'knowledge' | 'forms' | 'workflows'",
    required: false,
    description: 'Which TRAIN left-rail section is active. Defaults to "knowledge".',
  },
  {
    name: 'stepDelayMs',
    type: 'number',
    required: false,
    description:
      'How long each of the two generation steps takes, in milliseconds. Defaults to 500.',
  },
  {
    name: 'onAgentGenerated',
    type: '(prompt: string) => void',
    required: false,
    description: 'Called once the two-step generation sequence completes and BUILD is shown.',
  },
  {
    name: 'onBuyNumber',
    type: '() => void',
    required: false,
    description: '"Buy Number" clicked on PUBLISH. No real purchase is made.',
  },
  {
    name: 'onTestCall',
    type: '() => void',
    required: false,
    description: '"Make a Test Call" clicked on PUBLISH. No real call is placed.',
  },
];

export const fixtures: PreviewFixture<JotformAiAgentsProps>[] = [
  {
    id: 'prompt',
    title: 'Prompt entry',
    props: {
      initialStep: 'prompt',
    },
  },
  {
    id: 'generating',
    title: 'Generating (frozen)',
    props: {
      initialStep: 'generating',
    },
  },
  {
    id: 'build-generated-agent',
    title: 'BUILD — generated agent',
    props: {
      initialStep: 'built',
      initialTab: 'build',
    },
  },
  {
    id: 'publish-phone-agent',
    title: 'PUBLISH — Phone Agent',
    props: {
      initialStep: 'built',
      initialTab: 'publish',
    },
  },
];

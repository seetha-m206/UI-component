import type { PreviewFixture, PropSchemaField } from '../types';
import type { TypeformAiChatToCreateProps } from './TypeformAiChatToCreate';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialStep',
    type: "'closed' | 'generating' | 'result'",
    required: false,
    description:
      "Which step the component mounts showing. Defaults to 'closed' (just the persistent trigger input). This component owns its own step/conversation state from then on via internal useState, per the same self-managed pattern as new-form-chooser. A fixture-driven mount into 'generating'/'result' is a frozen snapshot — no timer is scheduled unless a real in-preview submission triggers it.",
  },
  {
    name: 'initialActiveTab',
    type: "'suggested-changes' | 'preview'",
    required: false,
    description:
      "Which right-pane view is active when step is 'result'. Defaults to 'suggested-changes'.",
  },
  {
    name: 'initialPrompt',
    type: 'string',
    required: false,
    description:
      "The user's prompt text. Prefills the trigger input when initialStep is 'closed', and is shown as the first conversation bubble when mounted directly into 'generating'/'result'. Defaults to the record's own tested prompt: \"Create a customer feedback survey with 3 questions\".",
  },
  {
    name: 'generationDelayMs',
    type: 'number',
    required: false,
    description:
      "How long the simulated \"generating\" phase lasts after a real in-preview submission, in milliseconds. Kept short and deterministic (default 600ms) rather than the record's actual ~5–7s, so tests can use vi.useFakeTimers() to assert on both the interim and final states.",
  },
  {
    name: 'onCreateForm',
    type: '() => void',
    required: false,
    description:
      'Fired when "Create form" is clicked. Closes the modal and resets to \'closed\'. No real form is created.',
  },
  {
    name: 'onDiscard',
    type: '() => void',
    required: false,
    description:
      'Fired when the discard-confirmation dialog\'s "Discard suggestions" is confirmed. Closes the modal and resets to \'closed\'.',
  },
];

export const fixtures: PreviewFixture<TypeformAiChatToCreateProps>[] = [
  {
    id: 'closed',
    title: 'Closed (trigger input only)',
    props: {
      initialStep: 'closed',
      initialPrompt: '',
    },
  },
  {
    id: 'generating',
    title: 'Modal open — generating',
    props: {
      initialStep: 'generating',
    },
  },
  {
    id: 'result-suggested-changes',
    title: 'Modal open — result (Suggested changes tab)',
    props: {
      initialStep: 'result',
      initialActiveTab: 'suggested-changes',
    },
  },
  {
    id: 'result-preview',
    title: 'Modal open — result (Preview tab active)',
    props: {
      initialStep: 'result',
      initialActiveTab: 'preview',
    },
  },
];

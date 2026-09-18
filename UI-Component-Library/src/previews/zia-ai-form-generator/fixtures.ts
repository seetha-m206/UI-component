import type { PreviewFixture, PropSchemaField } from '../types';
import type { ZiaAiFormGeneratorProps } from './ZiaAiFormGenerator';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialStep',
    type: "'closed' | 'prompt' | 'generating' | 'result'",
    required: false,
    description:
      "Which step the component mounts showing. Defaults to 'closed' (just the trigger). This component owns its own step state from then on via internal useState, the same self-managed pattern as typeform-ai-chat-to-create. A fixture-driven direct mount into 'generating'/'result' is a frozen snapshot — no timer is scheduled unless a real in-preview Generate/Regenerate click triggers one.",
  },
  {
    name: 'initialPrompt',
    type: 'string',
    required: false,
    description:
      'Prefills the description textarea (prompt step) and, when mounted directly into \'generating\'/\'result\', is treated as the prompt that was "already submitted." Defaults to a tested-style customer-feedback-survey prompt.',
  },
  {
    name: 'generationDelayMs',
    type: 'number',
    required: false,
    description:
      'How long the simulated "generating" phase lasts after a real in-preview Generate/Regenerate click, in milliseconds, split evenly across the 4 status-ladder lines. Kept short and deterministic (default 500ms) for testability.',
  },
  {
    name: 'onCreateForm',
    type: '() => void',
    required: false,
    description:
      'Fired when "Create Form" is clicked. Closes/resets the modal. No real form is ever created — this is the only action in the whole flow that "counts."',
  },
  {
    name: 'onRegenerate',
    type: '() => void',
    required: false,
    description:
      'Fired once a Regenerate cycle completes (i.e. once the replacement field list is ready), not at the moment Regenerate is clicked.',
  },
];

/**
 * Deterministic synthetic data only — no real account/form content. Each
 * fixture is a starting point for the interactive preview harness; the
 * modal can still be driven live (typing, chip clicks, Generate,
 * Regenerate, Create Form) once a fixture is selected.
 */
export const fixtures: PreviewFixture<ZiaAiFormGeneratorProps>[] = [
  {
    id: 'closed',
    title: 'Closed (trigger only)',
    props: {
      initialStep: 'closed',
    },
  },
  {
    id: 'prompt-empty',
    title: 'Prompt modal — empty',
    props: {
      initialStep: 'prompt',
      initialPrompt: '',
    },
  },
  {
    id: 'prompt-filled',
    title: 'Prompt modal — description filled',
    props: {
      initialStep: 'prompt',
      initialPrompt:
        'Create a customer feedback survey with a satisfaction rating and space for comments.',
    },
  },
  {
    id: 'generating',
    title: 'Generating (frozen status ladder)',
    props: {
      initialStep: 'generating',
    },
  },
  {
    id: 'result',
    title: 'Result — generated form ready',
    props: {
      initialStep: 'result',
    },
  },
];

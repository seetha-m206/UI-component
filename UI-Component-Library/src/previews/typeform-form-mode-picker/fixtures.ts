import type { PreviewFixture, PropSchemaField } from '../types';
import type { FormQuestion, TypeformFormModePickerProps } from './TypeformFormModePicker';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialQuestions',
    type: 'FormQuestion[]',
    required: false,
    description:
      'Starting questions shown in the normal Universal-mode editing canvas. Defaults to a 4-question set mirroring the source record\'s own test form ("Customer Feedback Survey").',
  },
  {
    name: 'initialEndingName',
    type: 'string',
    required: false,
    description:
      'Starting Workflow-tab ending name shown in the canvas footer, used to demonstrate the record\'s confirmed round-trip check (4 questions + 1 outcome ending, all intact after switching Universal -> Lead qualification -> Universal). Defaults to "Thank you screen".',
  },
  {
    name: 'initialMode',
    type: "'universal' | 'lead_qualification' | 'knowledge_quiz' | 'match_quiz'",
    required: false,
    description: 'Which mode the picker starts on. Defaults to \'universal\'.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables the picker trigger entirely. Defaults to false.',
  },
  {
    name: 'onModeChange',
    type: '(mode: FormMode) => void',
    required: false,
    description:
      'Fired whenever a mode is actually switched to. Never fired for a click on a locked/paywalled option (Knowledge quiz / Match quiz), which is a confirmed no-op on the tested plan.',
  },
];

const QUESTIONS: FormQuestion[] = [
  { id: 'q1', title: 'What is your full name?', type: 'Short text' },
  { id: 'q2', title: 'How satisfied are you with our product?', type: 'Rating' },
  { id: 'q3', title: 'Would you recommend us to a friend?', type: 'Yes/No' },
  { id: 'q4', title: 'Any other comments?', type: 'Long text' },
];

/**
 * Deterministic synthetic data only — no real form content. Question and
 * ending text match the shape of the source record's own test form (4
 * questions + 1 outcome ending). Each fixture is a starting point for the
 * interactive harness: the mode picker can still be operated live once a
 * fixture is selected, including the confirmed
 * Universal -> Lead qualification -> Universal round trip.
 */
export const fixtures: PreviewFixture<TypeformFormModePickerProps>[] = [
  {
    id: 'universal',
    title: 'Universal mode (default builder canvas)',
    props: {
      initialMode: 'universal',
      initialQuestions: QUESTIONS,
      initialEndingName: 'Thank you screen',
    },
  },
  {
    id: 'lead-qualification',
    title: 'Lead qualification — AI-drafted "Review your form" canvas',
    props: {
      initialMode: 'lead_qualification',
      initialQuestions: QUESTIONS,
      initialEndingName: 'Thank you screen',
    },
  },
  {
    id: 'round-trip-start',
    title: 'Round-trip demo — start on Universal, then switch modes',
    props: {
      initialMode: 'universal',
      initialQuestions: QUESTIONS,
      initialEndingName: 'Thank you screen',
    },
  },
  {
    id: 'disabled',
    title: 'Disabled picker',
    props: {
      initialMode: 'universal',
      initialQuestions: QUESTIONS,
      disabled: true,
    },
  },
];

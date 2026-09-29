import type { PreviewFixture, PropSchemaField } from '../types';
import type {
  MockQuestion,
  RespondentRuntimeGuidedVsStandardProps,
} from './RespondentRuntimeGuidedVsStandard';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialMode',
    type: "'guided' | 'standard'",
    required: false,
    description:
      "Which of the two respondent layout modes the component starts in. Both render the SAME underlying mock document — reconstructing the record's central finding that this is one document with two renderers, not two separate form schemas. Defaults to 'guided'.",
  },
  {
    name: 'questions',
    type: 'MockQuestion[]',
    required: false,
    description:
      'The shared mock document content rendered by both modes. Defaults to a 4-question set with one prose block, mirroring the source record\'s own 4-question test form.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables the mode switch and all question controls. Defaults to false.',
  },
  {
    name: 'onModeChange',
    type: '(mode: RuntimeMode) => void',
    required: false,
    description: 'Fired whenever the Form Experience mode switch is changed.',
  },
  {
    name: 'onSubmit',
    type: '(answers: Record<string, string>) => void',
    required: false,
    description:
      "Fired once, when the last guided-mode screen's advance button (relabeled to Submit) is clicked, or the single end-of-page Submit is clicked in standard mode.",
  },
];

const QUESTIONS: MockQuestion[] = [
  { id: 'q1', title: 'Excited to get started?', type: 'yes_no' },
  {
    id: 'q2',
    precedingProse: "Great! Let's collect a few more details before we begin.",
    title: 'What should we call you?',
    type: 'short_text',
  },
  { id: 'q3', title: 'Do you agree to the terms and conditions?', type: 'yes_no' },
  { id: 'q4', title: 'Any other comments?', type: 'short_text' },
];

/**
 * Deterministic synthetic data only — no real form/entry content. Both
 * fixtures below use the exact SAME `questions` array, demonstrating the
 * record's confirmed finding that guided and standard are two renderers
 * over one document, not two schemas. Each fixture is a starting point for
 * the interactive harness: the mode switch, answers, and progress can still
 * be operated live once a fixture is selected.
 */
export const fixtures: PreviewFixture<RespondentRuntimeGuidedVsStandardProps>[] = [
  {
    id: 'guided',
    title: 'Guided (One-at-a-time)',
    props: {
      initialMode: 'guided',
      questions: QUESTIONS,
    },
  },
  {
    id: 'standard',
    title: 'Standard (Classic)',
    props: {
      initialMode: 'standard',
      questions: QUESTIONS,
    },
  },
  {
    id: 'disabled-guided',
    title: 'Disabled — Guided mode read-only',
    props: {
      initialMode: 'guided',
      questions: QUESTIONS,
      disabled: true,
    },
  },
];

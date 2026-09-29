import type { PreviewFixture, PropSchemaField } from '../types';
import type {
  OutcomeEnding,
  QuizChoice,
  ScoringRule,
  TypeformScoringOutcomeQuizEditorProps,
} from './TypeformScoringOutcomeQuizEditor';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialTab',
    type: "'logic' | 'scoring' | 'tagging' | 'outcome_quiz'",
    required: false,
    description:
      "Which Workflow sub-nav tab is active. Defaults to 'logic' (the mock canvas backdrop, no modal open).",
  },
  {
    name: 'choices',
    type: 'QuizChoice[]',
    required: false,
    description:
      'The single rating-style question\'s answer choices shared by both modals, matching the source record\'s own "a 1-5 rating: A=1...E=5" example.',
  },
  {
    name: 'initialScoringRules',
    type: 'ScoringRule[]',
    required: false,
    description:
      'Starting per-choice scores for the Scoring modal. Defaults to every choice at 0.',
  },
  {
    name: 'initialEndings',
    type: 'OutcomeEnding[]',
    required: false,
    description: 'Starting endings list for the Outcome quiz modal. Defaults to none.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every control in both modals and the sub-nav. Defaults to false.',
  },
  {
    name: 'onSave',
    type: "(tab: 'scoring' | 'outcome_quiz') => void",
    required: false,
    description:
      'Fired when either modal\'s Save is clicked, after the "Edits are always autosaved." toast is scheduled. No network call is simulated — the source record found no HTTP mutation for either action.',
  },
];

const CHOICES: QuizChoice[] = [
  { id: 'choice-1', label: '1' },
  { id: 'choice-2', label: '2' },
  { id: 'choice-3', label: '3' },
  { id: 'choice-4', label: '4' },
  { id: 'choice-5', label: '5' },
];

const SCORING_RULES: ScoringRule[] = [
  { choiceId: 'choice-1', score: 1 },
  { choiceId: 'choice-2', score: 2 },
  { choiceId: 'choice-3', score: 3 },
  { choiceId: 'choice-4', score: 4 },
  { choiceId: 'choice-5', score: 5 },
];

const ENDINGS: OutcomeEnding[] = [
  // Matches the source record's own single captured chip example
  // ("1 · 5 x") — question 1, choice value 5 selected.
  { id: 'ending-1', name: 'New Ending (1)', answerChoiceIds: ['choice-5'] },
];

/**
 * Deterministic synthetic data only. Choice labels (A-E, a 1-5 rating) and
 * the "New Ending (1)" naming match the source record's own captured
 * example. Each fixture is a starting point for the interactive harness:
 * tabs, modals, scores, and endings can still be operated live once a
 * fixture is selected.
 */
export const fixtures: PreviewFixture<TypeformScoringOutcomeQuizEditorProps>[] = [
  {
    id: 'logic-backdrop',
    title: 'Logic tab (no modal open — the mock canvas backdrop)',
    props: {
      initialTab: 'logic',
      choices: CHOICES,
    },
  },
  {
    id: 'scoring-modal',
    title: 'Scoring modal — per-choice Score inputs',
    props: {
      initialTab: 'scoring',
      choices: CHOICES,
      initialScoringRules: SCORING_RULES,
    },
  },
  {
    id: 'outcome-quiz-modal',
    title: 'Outcome quiz modal — one ending wired to answer value 5 ("1 · 5" chip)',
    props: {
      initialTab: 'outcome_quiz',
      choices: CHOICES,
      initialEndings: ENDINGS,
    },
  },
  {
    id: 'outcome-quiz-empty',
    title: 'Outcome quiz modal — no endings yet',
    props: {
      initialTab: 'outcome_quiz',
      choices: CHOICES,
      initialEndings: [],
    },
  },
  {
    id: 'disabled-scoring',
    title: 'Disabled — Scoring modal read-only',
    props: {
      initialTab: 'scoring',
      choices: CHOICES,
      initialScoringRules: SCORING_RULES,
      disabled: true,
    },
  },
];

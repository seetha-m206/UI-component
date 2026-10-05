import type { PreviewFixture, PropSchemaField } from '../types';
import type { JotformAiFormGenerationProps } from './JotformAiFormGeneration';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialPhase',
    type: "'intro' | 'builder'",
    required: false,
    description:
      "Which screen the preview starts on. 'intro' shows the \"Describe your form\" box; 'builder' requires initialForm to also be set.",
  },
  {
    name: 'initialForm',
    type: 'GeneratedFormState | null',
    required: false,
    description: 'Pre-seeded generated form (title, fields, submit label) for fixtures that start mid-conversation.',
  },
  {
    name: 'initialTurns',
    type: 'ChatTurn[]',
    required: false,
    description: 'Pre-seeded Form Copilot chat history matching initialForm.',
  },
  {
    name: 'initialCopilotOpen',
    type: 'boolean',
    required: false,
    description: 'Whether the Form Copilot panel starts expanded. Defaults to true.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true.',
  },
];

export const fixtures: PreviewFixture<JotformAiFormGenerationProps>[] = [
  {
    id: 'empty-before-prompt',
    title: 'Empty / before first prompt',
    props: {
      initialPhase: 'intro',
    },
  },
  {
    id: 'generated-with-chat-history',
    title: 'Generated form with chat history',
    props: {
      initialPhase: 'builder',
      initialForm: {
        title: 'Coffee Shop Feedback Form',
        submitLabel: 'Submit Feedback',
        fields: [
          {
            id: 'seed-field-1',
            type: 'radio',
            label: 'How often do you visit?',
            options: ['Daily', 'Weekly', 'Monthly', 'Rarely'],
          },
          { id: 'seed-field-2', type: 'short-text', label: "What's your favorite drink?" },
          { id: 'seed-field-3', type: 'star-rating', label: 'Rate your overall experience' },
          { id: 'seed-field-4', type: 'email', label: 'Email Address', required: true },
        ],
      },
      initialTurns: [
        {
          id: 'seed-turn-1',
          role: 'user',
          text: 'Create a customer feedback form for a coffee shop, asking about visit frequency, favorite drink, and a 5-star rating.',
        },
        {
          id: 'seed-turn-2',
          role: 'assistant',
          text: 'I\'ve created "Coffee Shop Feedback Form" with the fields you asked for, including a 5-star rating.',
          kind: 'generation',
          addedFieldIds: ['seed-field-1', 'seed-field-2', 'seed-field-3'],
        },
        {
          id: 'seed-turn-3',
          role: 'user',
          text: 'Add a field asking for the customer\'s email address so we can follow up',
        },
        {
          id: 'seed-turn-4',
          role: 'assistant',
          text: "I've added an email address field to the form so you can collect replies for follow-up.",
          kind: 'free-edit',
          addedFieldIds: ['seed-field-4'],
        },
      ],
    },
  },
  {
    id: 'suggested-questions-checklist-open',
    title: 'Suggested-questions checklist open',
    props: {
      initialPhase: 'builder',
      initialForm: {
        title: 'Coffee Shop Feedback Form',
        submitLabel: 'Submit Feedback',
        fields: [
          {
            id: 'seed-field-1',
            type: 'radio',
            label: 'How often do you visit?',
            options: ['Daily', 'Weekly', 'Monthly', 'Rarely'],
          },
          { id: 'seed-field-2', type: 'short-text', label: "What's your favorite drink?" },
          { id: 'seed-field-3', type: 'star-rating', label: 'Rate your overall experience' },
        ],
      },
      initialTurns: [
        {
          id: 'seed-turn-1',
          role: 'user',
          text: 'Create a customer feedback form for a coffee shop, asking about visit frequency, favorite drink, and a 5-star rating.',
        },
        {
          id: 'seed-turn-2',
          role: 'assistant',
          text: 'I\'ve created "Coffee Shop Feedback Form" with the fields you asked for, including a 5-star rating.',
          kind: 'generation',
          addedFieldIds: ['seed-field-1', 'seed-field-2', 'seed-field-3'],
        },
        {
          id: 'seed-turn-3',
          role: 'user',
          text: 'Suggest new questions',
          kind: 'suggestion-prompt',
        },
        {
          id: 'seed-turn-4',
          role: 'assistant',
          text: 'You can select from the questions below to add to your form.',
          kind: 'suggestion-checklist',
          checklist: [
            { id: 'seed-opt-1', label: 'What did you like most about your visit?', checked: false },
            { id: 'seed-opt-2', label: 'What could we improve?', checked: false },
            { id: 'seed-opt-3', label: 'Which location did you visit?', checked: false },
          ],
        },
      ],
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    props: {
      initialPhase: 'intro',
      disabled: true,
    },
  },
];

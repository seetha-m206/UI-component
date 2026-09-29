import type { PreviewFixture, PropSchemaField } from '../types';
import type { PaperformCalculationFieldAiHelperProps } from './PaperformCalculationFieldAiHelper';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialFormula',
    type: 'string',
    required: false,
    description: 'Starting formula text in the code pane. Defaults to empty.',
  },
  {
    name: 'initialTab',
    type: "'calculation' | 'how-to-use'",
    required: false,
    description: "Which Calculation Editor tab is active on mount. Defaults to 'calculation'.",
  },
  {
    name: 'sampleValues',
    type: 'Record<string, number>',
    required: false,
    description:
      'Sample field values Live Preview evaluates against (matching the source record\'s N1 Quantity/N2 Unit price test fields, both sampled as 12345 for the Number type).',
  },
];

export const fixtures: PreviewFixture<PaperformCalculationFieldAiHelperProps>[] = [
  {
    id: 'empty',
    title: 'Empty — start typing a formula',
    props: {
      initialFormula: '',
    },
  },
  {
    id: 'broken-try-fix',
    title: 'Formula with a parse error — click Fix',
    props: {
      initialFormula: '/{{cmlfb}} * {{17gdk}}',
    },
  },
  {
    id: 'correct-formula',
    title: 'Correct formula (evaluates to 152399025)',
    props: {
      initialFormula: '{{cmlfb}} * {{17gdk}};',
    },
  },
  {
    id: 'ask-for-discount',
    title: 'Empty — ask AI: "add a 10% discount if the quantity is over 5"',
    props: {
      initialFormula: '',
    },
  },
  {
    id: 'how-to-use',
    title: 'HOW TO USE reference tab',
    props: {
      initialTab: 'how-to-use',
    },
  },
];

import type { PreviewFixture, PropSchemaField } from '../types';
import type { ConditionRule, JotformConditionalLogicProps } from './JotformConditionalLogic';

const SHOW_DRINK_IF_VISITS: ConditionRule = {
  id: 'fixture-rule-1',
  ifFieldId: 'source',
  operator: 'Is Equal To',
  value: 'Yes',
  action: 'Show',
  targetFieldId: 'target',
};

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialRules',
    type: 'ConditionRule[]',
    required: false,
    description:
      'Saved rules the Conditions list starts with. Defaults to an empty array ("No conditions yet.").',
  },
  {
    name: 'initialSourceFieldDeleted',
    type: 'boolean',
    required: false,
    description:
      'Demo-only starting state for the confirmed silent-dependency-breakage finding: starts with the source field already deleted, so any rule referencing it renders the real "MISSING FIELD" error immediately.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
];

export const fixtures: PreviewFixture<JotformConditionalLogicProps>[] = [
  {
    id: 'no-rules',
    title: 'No rules configured',
    props: {
      initialRules: [],
      disabled: false,
    },
  },
  {
    id: 'rule-configured',
    title: 'Rule configured — toggle to test',
    props: {
      initialRules: [SHOW_DRINK_IF_VISITS],
      disabled: false,
    },
  },
  {
    id: 'broken-rule',
    title: 'Broken rule — deleted field',
    props: {
      initialRules: [SHOW_DRINK_IF_VISITS],
      initialSourceFieldDeleted: true,
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    props: {
      initialRules: [SHOW_DRINK_IF_VISITS],
      disabled: true,
    },
  },
];

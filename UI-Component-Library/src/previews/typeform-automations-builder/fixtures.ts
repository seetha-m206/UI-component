import type { PreviewFixture, PropSchemaField } from '../types';
import type { AutomationBlock, TypeformAutomationsBuilderProps } from './TypeformAutomationsBuilder';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialStep',
    type: "'trigger-picker' | 'canvas'",
    required: false,
    description:
      "Which screen the component mounts showing. Defaults to 'trigger-picker' — the trigger-selection step happens once per automation, before the chain canvas, and is modeled as this component's own first internal step (self-managed, like new-form-chooser). Once past it, this component owns step/chain state itself via internal useState.",
  },
  {
    name: 'initialTriggerType',
    type: "'form_submission' | 'contact_activity' | 'scheduled'",
    required: false,
    description:
      "Which trigger the default [trigger, end] skeleton is built for when initialStep is 'canvas' and initialBlocks is omitted. Defaults to 'form_submission' — the only trigger type the source record traced past the picker; the other two lead to the same generic canvas with generically-worded trigger summaries.",
  },
  {
    name: 'initialBlocks',
    type: 'AutomationBlock[]',
    required: false,
    description:
      'Full starting chain (trigger block .. end block) for fixtures that want to show a chain mid-way through construction rather than only the freshly-built two-block skeleton. When omitted, a default skeleton is built from initialTriggerType.',
  },
  {
    name: 'automationName',
    type: 'string',
    required: false,
    description:
      'Starting text in the editable automation-name field next to the Draft/Activated badge. Defaults to "Untitled automation" — the source record confirms the name is editable but not an exact default string.',
  },
  {
    name: 'initialActivated',
    type: 'boolean',
    required: false,
    description:
      'Starts the automation already "Activated" (badge flipped, Activate button disabled), for fixtures showing that end state without a click. Defaults to false (Draft).',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Disables trigger selection, "+" insertion, block removal, name editing, and Activate. Not documented in the source (no disabled state was observed) — included for harness/fixture consistency with other previews.',
  },
  {
    name: 'onTriggerSelected',
    type: '(triggerType: TriggerType) => void',
    required: false,
    description: 'Fired when a trigger card is chosen on the trigger-picker step.',
  },
  {
    name: 'onActivate',
    type: '() => void',
    required: false,
    description:
      'Fired when "Activate" is clicked. No real activation network call is implemented — see README.',
  },
  {
    name: 'onBlockInserted',
    type: '(block: AutomationBlock, connectorIndex: number) => void',
    required: false,
    description:
      'Fired when a block is inserted via a connector\'s "+" menu, with the new block and the connector index (between blocks[connectorIndex] and what was previously blocks[connectorIndex + 1]) it was spliced into.',
  },
  {
    name: 'onBlockRemoved',
    type: '(blockId: string) => void',
    required: false,
    description:
      'Fired when an inserted action/rule block is removed. Never fired for the trigger or "End automation" blocks, which cannot be removed. Removal itself is a flagged, reasonable addition beyond the confirmed record — see README.',
  },
  {
    name: 'onNameChange',
    type: '(name: string) => void',
    required: false,
    description: 'Fired on every keystroke in the automation-name field with the new value.',
  },
];

const SEND_EMAIL_BLOCK: AutomationBlock = {
  id: 'inserted-send-email-1',
  type: 'send_email',
  summary: 'To: [Respondent] / Subject: [Welcome]',
};

const TIME_DELAY_BLOCK: AutomationBlock = {
  id: 'inserted-time-delay-1',
  type: 'time_delay',
  summary: 'Wait [1 hour]',
};

const WEBHOOK_BLOCK: AutomationBlock = {
  id: 'inserted-webhook-1',
  type: 'webhook',
  summary: 'POST to configured URL',
};

const TRIGGER_BLOCK: AutomationBlock = {
  id: 'trigger',
  type: 'trigger',
  summary: 'Start automation when [New form] is [Completed]',
};

const END_BLOCK: AutomationBlock = { id: 'end', type: 'end', summary: '' };

/**
 * Fixtures walk through the documented stages: the trigger-picker itself,
 * a freshly-picked trigger with just the default skeleton, a chain with the
 * record's own one-inserted-action example (Send email), and a longer
 * chain that inserts an action between two other already-inserted blocks
 * to demonstrate mid-chain insertion/re-flow — not just appending at
 * the end. Two more fixtures cover the Draft/Activated badge swap and the
 * disabled (read-only) state.
 */
export const fixtures: PreviewFixture<TypeformAutomationsBuilderProps>[] = [
  {
    id: 'trigger-picker',
    title: 'Trigger picker (initial screen, before any chain exists)',
    props: {
      initialStep: 'trigger-picker',
    },
  },
  {
    id: 'fresh-skeleton',
    title: 'Trigger chosen — default skeleton (Trigger → End automation)',
    props: {
      initialStep: 'canvas',
      initialTriggerType: 'form_submission',
    },
  },
  {
    id: 'one-action-inserted',
    title: 'One action inserted — Send email (the record’s own example)',
    props: {
      initialStep: 'canvas',
      initialBlocks: [TRIGGER_BLOCK, SEND_EMAIL_BLOCK, END_BLOCK],
    },
  },
  {
    id: 'longer-chain-mid-insertion',
    title: 'Longer chain — Time delay inserted between Trigger and Send email',
    props: {
      initialStep: 'canvas',
      initialBlocks: [TRIGGER_BLOCK, TIME_DELAY_BLOCK, SEND_EMAIL_BLOCK, WEBHOOK_BLOCK, END_BLOCK],
    },
  },
  {
    id: 'scheduled-trigger',
    title: 'Scheduled trigger — generic trigger-block wording',
    props: {
      initialStep: 'canvas',
      initialTriggerType: 'scheduled',
    },
  },
  {
    id: 'activated',
    title: 'Activated automation',
    props: {
      initialStep: 'canvas',
      initialBlocks: [TRIGGER_BLOCK, SEND_EMAIL_BLOCK, END_BLOCK],
      initialActivated: true,
      automationName: 'Welcome email sequence',
    },
  },
  {
    id: 'disabled-canvas',
    title: 'Disabled (read-only chain)',
    props: {
      initialStep: 'canvas',
      initialBlocks: [TRIGGER_BLOCK, SEND_EMAIL_BLOCK, END_BLOCK],
      disabled: true,
    },
  },
];

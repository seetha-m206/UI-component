import type { PreviewFixture, PropSchemaField } from '../types';
import type { JotformWorkflowsWorkflowBuilderProps } from './JotformWorkflowsWorkflowBuilder';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
  {
    name: 'initialStage',
    type: "'start-point' | 'form-settings' | 'canvas'",
    required: false,
    description: "Which screen the preview opens on. Defaults to 'start-point', matching BUILD always opening on the Start Point modal.",
  },
  {
    name: 'initialTrigger',
    type: "'form' | 'schedule' | 'integrations' | 'email' | 'webhook'",
    required: false,
    description: "Pre-selected trigger type, used when initialStage is 'form-settings' or 'canvas'.",
  },
  {
    name: 'initialFormName',
    type: 'string | null',
    required: false,
    description: "Pre-bound form name shown on the START POINT node, used when initialStage is 'canvas' with a Form trigger.",
  },
  {
    name: 'initialCondition',
    type: 'string | null',
    required: false,
    description: 'Pre-selected "when" condition (e.g. "For every submission"), shown alongside the bound form.',
  },
  {
    name: 'initialSteps',
    type: 'WorkflowElementType[]',
    required: false,
    description: "Pre-chained Workflow Elements beneath the START POINT node, used when initialStage is 'canvas'.",
  },
  {
    name: 'onModeChange',
    type: "(mode: 'build' | 'settings' | 'publish') => void",
    required: false,
    description: 'Called when the BUILD/SETTINGS/PUBLISH mode-tab bar is used.',
  },
  {
    name: 'onTriggerConfirm',
    type: '(info: { trigger, formName, condition }) => void',
    required: false,
    description: 'Called when the Start Point (non-Form trigger) or Form start settings step is confirmed and the canvas opens.',
  },
  {
    name: 'onElementAdd',
    type: '(element: WorkflowElementType) => void',
    required: false,
    description: 'Called each time a Workflow Element is added via "+ Add Element Here".',
  },
];

export const fixtures: PreviewFixture<JotformWorkflowsWorkflowBuilderProps>[] = [
  {
    id: 'start-point',
    title: 'Start Point modal',
    props: {
      disabled: false,
      initialStage: 'start-point',
    },
  },
  {
    id: 'form-trigger-configured',
    title: 'Form trigger configured',
    props: {
      disabled: false,
      initialStage: 'canvas',
      initialTrigger: 'form',
      initialFormName: 'Coffee Club Signup',
      initialCondition: 'For every submission',
    },
  },
  {
    id: 'canvas-chained-steps',
    title: 'Canvas with 2 chained steps',
    props: {
      disabled: false,
      initialStage: 'canvas',
      initialTrigger: 'form',
      initialFormName: 'Coffee Club Signup',
      initialCondition: 'For every submission',
      initialSteps: ['Approval', 'Email'],
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    props: {
      disabled: true,
      initialStage: 'start-point',
    },
  },
];

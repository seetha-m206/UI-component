import type { PreviewFixture, PropSchemaField } from '../types';
import type { PaperformQuestionVisibilityLogicProps } from './PaperformQuestionVisibilityLogic';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialTab',
    type: "'builder' | 'live-preview' | 'edge-cases'",
    required: false,
    description: "Which view the preview mounts showing. Defaults to 'builder'.",
  },
  {
    name: 'onDone',
    type: '() => void',
    required: false,
    description: 'Fired when the rule modal\'s "Done" button is clicked.',
  },
];

export const fixtures: PreviewFixture<PaperformQuestionVisibilityLogicProps>[] = [
  {
    id: 'builder-modal',
    title: 'Builder — rule modal open with the confirmed real condition',
    props: {
      initialTab: 'builder',
    },
  },
  {
    id: 'live-preview',
    title: 'Live Preview — Classic (DOM unmount) vs. Guided (screen skip)',
    props: {
      initialTab: 'live-preview',
    },
  },
  {
    id: 'edge-cases',
    title: 'Edge Cases — silent orphaning on type change / delete',
    props: {
      initialTab: 'edge-cases',
    },
  },
];

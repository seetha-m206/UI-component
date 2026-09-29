import type { PreviewFixture, PropSchemaField } from '../types';
import type { PaperformSignaturePapersignProps } from './PaperformSignaturePapersign';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialTab',
    type: "'signature-field' | 'papersign-handoff'",
    required: false,
    description: "Which view the preview mounts showing. Defaults to 'signature-field'.",
  },
  {
    name: 'onSubmit',
    type: '() => void',
    required: false,
    description: 'Fired when Submit is clicked on the Signature Field tab with a confirmed signature.',
  },
];

export const fixtures: PreviewFixture<PaperformSignaturePapersignProps>[] = [
  {
    id: 'signature-field',
    title: 'Signature Field — draw, confirm, and required-field validation',
    props: {
      initialTab: 'signature-field',
    },
  },
  {
    id: 'papersign-handoff',
    title: 'Papersign Hand-off — field mapping and the no-sandbox Send Test gate',
    props: {
      initialTab: 'papersign-handoff',
    },
  },
  {
    id: 'papersign-handoff-with-callback',
    title: 'Papersign Hand-off — with an onSubmit callback wired (demo of the Submit action)',
    props: {
      initialTab: 'signature-field',
      onSubmit: () => {},
    },
  },
];

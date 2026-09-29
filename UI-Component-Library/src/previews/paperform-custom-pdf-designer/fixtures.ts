import type { PreviewFixture, PropSchemaField } from '../types';
import type { PaperformCustomPdfDesignerProps } from './PaperformCustomPdfDesigner';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialView',
    type: "'list' | 'designer'",
    required: false,
    description: "Which screen the preview mounts showing. Defaults to 'list' (the empty Custom PDFs table).",
  },
  {
    name: 'initialSlashAttempted',
    type: 'boolean',
    required: false,
    description:
      'Pre-fills the slash-menu demo input with "/" to show the confirmed no-op result without requiring a keystroke.',
  },
  {
    name: 'onAddPdf',
    type: '() => void',
    required: false,
    description: 'Fired when "Add PDF +" is clicked.',
  },
  {
    name: 'onDownloadSample',
    type: '() => void',
    required: false,
    description:
      'Fired when "Download sample" is clicked. No real file is produced -- the source record deliberately never clicked the real button either, since it triggers an actual download.',
  },
];

export const fixtures: PreviewFixture<PaperformCustomPdfDesignerProps>[] = [
  {
    id: 'empty-list',
    title: 'Custom PDFs — empty list',
    props: {
      initialView: 'list',
    },
  },
  {
    id: 'designer-starter',
    title: 'PDF designer — starter template',
    props: {
      initialView: 'designer',
    },
  },
  {
    id: 'designer-slash',
    title: 'PDF designer — "/" confirmed absent (no slash menu here)',
    props: {
      initialView: 'designer',
      initialSlashAttempted: true,
    },
  },
];

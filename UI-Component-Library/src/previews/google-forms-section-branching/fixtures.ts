import type { PreviewFixture, PropSchemaField } from '../types';
import type { GoogleFormsSectionBranchingProps } from './GoogleFormsSectionBranching';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialTab',
    type: "'respondent' | 'editor'",
    required: false,
    description: "Which view the preview mounts showing. Defaults to 'respondent'.",
  },
  {
    name: 'onSubmit',
    type: '() => void',
    required: false,
    description: 'Fired when the respondent-view Submit button is clicked on Section 3.',
  },
];

export const fixtures: PreviewFixture<GoogleFormsSectionBranchingProps>[] = [
  {
    id: 'respondent-view',
    title: 'Respondent View — pick an answer to drive the skip/no-skip branch',
    props: {
      initialTab: 'respondent',
    },
  },
  {
    id: 'editor-view',
    title: 'Editor — per-option destination dropdowns',
    props: {
      initialTab: 'editor',
    },
  },
];

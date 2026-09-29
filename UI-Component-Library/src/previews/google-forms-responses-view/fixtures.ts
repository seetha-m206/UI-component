import type { PreviewFixture, PropSchemaField } from '../types';
import type { GoogleFormsResponsesViewProps } from './GoogleFormsResponsesView';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialTab',
    type: "'summary' | 'question' | 'individual'",
    required: false,
    description: "Which sub-view the preview mounts showing. Defaults to 'summary'.",
  },
  {
    name: 'reproduceNetworkLog',
    type: 'boolean',
    required: false,
    description:
      'Logs the confirmed distinct on-demand fetch each sub-view fires (aggregatestatistics / getresponseclusters / getsingleresponse). Defaults to true.',
  },
];

export const fixtures: PreviewFixture<GoogleFormsResponsesViewProps>[] = [
  {
    id: 'summary',
    title: 'Summary — per-question chart types + the per-question-answered count quirk',
    props: {
      initialTab: 'summary',
    },
  },
  {
    id: 'question',
    title: 'Question — per-question drill-down',
    props: {
      initialTab: 'question',
    },
  },
  {
    id: 'individual',
    title: 'Individual — graded, read-only response with jump-to-N paging',
    props: {
      initialTab: 'individual',
    },
  },
];

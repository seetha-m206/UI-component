import type { PreviewFixture, PropSchemaField } from '../types';
import type { MoreProps } from '../freshservice-shared/FreshserviceMore';
export const fixtures: PreviewFixture<Omit<MoreProps, 'variant'>>[] = [
  {
    id: 'default',
    title: 'Observed structure with local behavior',
    props: {},
  },
  {
    id: 'article-templates',
    title: 'Article Templates empty state',
    props: {
      initialView: 'Article Templates',
    },
  },
  {
    id: 'approvals',
    title: 'Approvals empty state',
    props: {
      initialView: 'Approvals',
    },
  },
  {
    id: 'articles-to-review',
    title: 'Articles to review empty state',
    props: {
      initialView: 'Articles to review',
    },
  },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialNotice',
    type: 'string',
    required: false,
    description:
      'Initial local collection view when supported. Does not persist or query Freshservice.',
  },
];

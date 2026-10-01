import type { PreviewFixture, PropSchemaField } from '../types';
import type { MoreProps } from '../freshservice-shared/FreshserviceMore';
export const fixtures: PreviewFixture<Omit<MoreProps, 'variant'>>[] = [
  {
    id: 'default',
    title: 'Observed structure with local behavior',
    props: {},
  },
  {
    id: 'events',
    title: 'Inactive event workflow subset',
    props: {
      initialView: 'Event Based Workflows',
    },
  },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialView',
    type: 'string',
    required: false,
    description:
      'Initial local collection view when supported. Does not persist or query Freshservice.',
  },
];

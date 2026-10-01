import type { PreviewFixture, PropSchemaField } from '../types';
import type { MoreProps } from '../freshservice-shared/FreshserviceMore';
export const fixtures: PreviewFixture<Omit<MoreProps, 'variant'>>[] = [
  {
    id: 'default',
    title: 'Observed structure with local behavior',
    props: {},
  },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'compact',
    type: 'boolean',
    required: false,
    description: 'Reduce local content spacing for compact presentations.',
  },
];

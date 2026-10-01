import type { PreviewFixture, PropSchemaField } from '../types';
import type { MoreProps } from '../freshservice-shared/FreshserviceMore';
export const fixtures: PreviewFixture<Omit<MoreProps, 'variant'>>[] = [
  {
    id: 'default',
    title: 'Observed structure with local behavior',
    props: {
      initialExpanded: true,
    },
  },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialExpanded',
    type: 'boolean',
    required: false,
    description: 'Initial local popover state.',
  },
];

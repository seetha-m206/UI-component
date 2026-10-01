import type { PreviewFixture, PropSchemaField } from '../types';
import type { FreshserviceProps } from '../freshservice-shared/Freshservice';
export const fixtures: PreviewFixture<Omit<FreshserviceProps, 'variant'>>[] = [
  {
    id: 'default',
    title: 'Observed structure with local behavior',
    props: {},
  },
  {
    id: 'expanded',
    title: 'Expanded local fixture',
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
    description: 'Initial local disclosure state. Does not persist or change provider settings.',
  },
];

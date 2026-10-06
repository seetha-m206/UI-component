import type { PreviewFixture, PropSchemaField } from '../types';
import type { DeepProps } from '../freshservice-shared/FreshserviceDeep';
export const fixtures: PreviewFixture<Omit<DeepProps, 'variant'>>[] = [
  { id: 'default', title: 'Observed structure with local behavior', props: {} },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialTab',
    type: 'string',
    required: false,
    description: 'Reserved local display input. No provider request is made.',
  },
];

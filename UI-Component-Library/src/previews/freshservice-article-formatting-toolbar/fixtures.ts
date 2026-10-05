import type { PreviewFixture, PropSchemaField } from '../types';
import type { DeepProps } from '../freshservice-shared/FreshserviceDeep';
export const fixtures: PreviewFixture<Omit<DeepProps, 'variant'>>[] = [
  { id: 'default', title: 'Observed structure with local behavior', props: {} },
  { id: 'collapsed', title: 'Collapsed toolbar', props: { initialExpanded: false } },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialExpanded',
    type: 'boolean',
    required: false,
    description: 'Sets the initial local toolbar disclosure state.',
  },
];

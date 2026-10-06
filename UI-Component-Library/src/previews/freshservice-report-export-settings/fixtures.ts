import type { PreviewFixture, PropSchemaField } from '../types';
import type { DeepProps } from '../freshservice-shared/FreshserviceDeep';
export const fixtures: PreviewFixture<Omit<DeepProps, 'variant'>>[] = [
  { id: 'default', title: 'Observed structure with local behavior', props: {} },
  { id: 'send-email', title: 'Send email tab', props: { initialTab: 'Send email' } },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialTab',
    type: 'string',
    required: false,
    description: 'Sets the initial local export tab. No delivery occurs.',
  },
];

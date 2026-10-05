import type { PreviewFixture, PropSchemaField } from '../types';
import type { RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export const fixtures: PreviewFixture<Omit<RemainingProps, 'variant'>>[] = [
  { id: 'default', title: 'Observed structure with local behavior', props: {} },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialNotice',
    type: 'string',
    required: false,
    description: 'Optional initial local boundary notice.',
  },
];

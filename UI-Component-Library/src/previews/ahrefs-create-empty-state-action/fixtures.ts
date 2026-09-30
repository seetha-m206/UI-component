import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsCreateEmptyStateActionProps } from './AhrefsCreateEmptyStateAction';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsCreateEmptyStateActionProps>[] = [
  { id: 'default', title: 'Create empty-state action', props: {} },
];

import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsBotAnalyticsEmptyStateProps } from './AhrefsBotAnalyticsEmptyState';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsBotAnalyticsEmptyStateProps>[] = [
  { id: 'default', title: 'Bot Analytics empty state', props: {} },
];

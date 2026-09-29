import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsPortfolioEmptyStateProps } from './AhrefsPortfolioEmptyState';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsPortfolioEmptyStateProps>[] = [
  { id: 'default', title: 'Portfolio empty state', props: {} },
];

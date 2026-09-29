import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsReportBuilderEmptyStateProps } from './AhrefsReportBuilderEmptyState';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsReportBuilderEmptyStateProps>[] = [
  { id: 'default', title: 'Report Builder empty state', props: {} },
];

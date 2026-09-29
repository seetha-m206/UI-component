import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsSiteAuditEmptyStateProps } from './AhrefsSiteAuditEmptyState';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'default' | 'update-dismissed'",
    required: false,
    description:
      'Starts in the observed empty state or a synthetic locally dismissed update state.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every local control.',
  },
];

export const fixtures: PreviewFixture<AhrefsSiteAuditEmptyStateProps>[] = [
  { id: 'default', title: 'First project', props: { initialState: 'default' } },
  {
    id: 'update-dismissed',
    title: 'Update dismissed',
    props: { initialState: 'update-dismissed' },
  },
];

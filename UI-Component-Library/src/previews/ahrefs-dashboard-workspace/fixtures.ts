import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsDashboardWorkspaceProps } from './AhrefsDashboardWorkspace';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'default' | 'target-focused' | 'project-search' | 'welcome-dismissed' | 'update-dismissed'",
    required: false,
    description:
      'Starts the dashboard reconstruction in an observed or explicitly synthetic state.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables every local control.',
  },
];

export const fixtures: PreviewFixture<AhrefsDashboardWorkspaceProps>[] = [
  { id: 'default', title: 'Empty dashboard', props: { initialState: 'default' } },
  { id: 'target-focused', title: 'Target focused', props: { initialState: 'target-focused' } },
  { id: 'project-search', title: 'Project search', props: { initialState: 'project-search' } },
  {
    id: 'welcome-dismissed',
    title: 'Welcome dismissed',
    props: { initialState: 'welcome-dismissed' },
  },
  {
    id: 'update-dismissed',
    title: 'Update dismissed',
    props: { initialState: 'update-dismissed' },
  },
];

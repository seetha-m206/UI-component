import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushSiteAuditProjectsProps } from './SemrushSiteAuditProjects';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'default' | 'searching' | 'no-results' | 'sort-toggled' | 'row-actions' | 'crawl-limit' | 'create-modal' | 'page-size-menu'",
    required: false,
    description: 'Starts the project-list reconstruction in a captured state.',
  },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables local controls.' },
];

export const fixtures: PreviewFixture<SemrushSiteAuditProjectsProps>[] = [
  { id: 'default', title: 'Projects list', props: { initialState: 'default' } },
  { id: 'searching', title: 'Filtered projects', props: { initialState: 'searching' } },
  { id: 'no-results', title: 'Nothing found', props: { initialState: 'no-results' } },
  { id: 'sort-toggled', title: 'Sort toggled', props: { initialState: 'sort-toggled' } },
  { id: 'row-actions', title: 'Audit settings menu', props: { initialState: 'row-actions' } },
  { id: 'crawl-limit', title: 'Crawl-limit warning', props: { initialState: 'crawl-limit' } },
  { id: 'create-modal', title: 'Create project modal', props: { initialState: 'create-modal' } },
  { id: 'page-size-menu', title: 'Page-size menu', props: { initialState: 'page-size-menu' } },
];

import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushSiteAuditIssueDetailProps } from './SemrushSiteAuditIssueDetail';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'default' | 'how-to-fix' | 'hidden-loading' | 'hidden-empty' | 'search-empty' | 'advanced-filters' | 'filter-two' | 'selected-row' | 'project-menu' | 'page-size-menu'",
    required: false,
    description: 'Starts the issue-detail reconstruction in a captured state.',
  },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables local controls.' },
];

export const fixtures: PreviewFixture<SemrushSiteAuditIssueDetailProps>[] = [
  { id: 'default', title: 'Issue detail', props: { initialState: 'default' } },
  { id: 'how-to-fix', title: 'How to fix', props: { initialState: 'how-to-fix' } },
  { id: 'hidden-loading', title: 'Hidden loading', props: { initialState: 'hidden-loading' } },
  { id: 'hidden-empty', title: 'No hidden issues', props: { initialState: 'hidden-empty' } },
  { id: 'search-empty', title: 'Search empty', props: { initialState: 'search-empty' } },
  { id: 'advanced-filters', title: 'Advanced filters', props: { initialState: 'advanced-filters' } },
  { id: 'filter-two', title: 'Two conditions', props: { initialState: 'filter-two' } },
  { id: 'selected-row', title: 'Selected row', props: { initialState: 'selected-row' } },
  { id: 'project-menu', title: 'Project menu', props: { initialState: 'project-menu' } },
  { id: 'page-size-menu', title: 'Page-size menu', props: { initialState: 'page-size-menu' } },
];

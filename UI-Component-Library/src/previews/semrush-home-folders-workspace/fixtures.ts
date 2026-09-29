import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushHomeFoldersWorkspaceProps } from './SemrushHomeFoldersWorkspace';

export const propsSchema: PropSchemaField[] = [
  { name: 'initialState', type: "'cards' | 'search-empty' | 'ownership-menu' | 'tags-empty' | 'seo-table-loading' | 'seo-table' | 'settings-menu' | 'create-folder' | 'filters-hidden'", required: false, description: 'Starts the workspace in a captured state.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables local controls.' },
];

export const fixtures: PreviewFixture<SemrushHomeFoldersWorkspaceProps>[] = [
  { id: 'cards', title: 'Folder cards', props: { initialState: 'cards' } },
  { id: 'search-empty', title: 'Search empty', props: { initialState: 'search-empty' } },
  { id: 'ownership-menu', title: 'Ownership menu', props: { initialState: 'ownership-menu' } },
  { id: 'tags-empty', title: 'No tags', props: { initialState: 'tags-empty' } },
  { id: 'seo-table-loading', title: 'Table loading', props: { initialState: 'seo-table-loading' } },
  { id: 'seo-table', title: 'SEO table', props: { initialState: 'seo-table' } },
  { id: 'settings-menu', title: 'Folder settings', props: { initialState: 'settings-menu' } },
  { id: 'create-folder', title: 'Create folder', props: { initialState: 'create-folder' } },
  { id: 'filters-hidden', title: 'Filters hidden', props: { initialState: 'filters-hidden' } },
];

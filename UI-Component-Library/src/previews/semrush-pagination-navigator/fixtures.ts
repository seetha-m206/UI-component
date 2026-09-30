import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushPaginationNavigatorProps } from './SemrushPaginationNavigator';

export const propsSchema: PropSchemaField[] = [
  { name: 'initialPage', type: 'number', required: false, description: 'Initially selected page.' },
  { name: 'totalPages', type: 'number', required: false, description: 'Number of available pages.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables every pagination action.' },
];

export const fixtures: PreviewFixture<SemrushPaginationNavigatorProps>[] = [
  { id: 'single-page', title: 'Observed single page', props: { totalPages: 1 } },
  { id: 'first-page', title: 'First page · needs verification', props: { initialPage: 1, totalPages: 5 } },
  { id: 'middle-page', title: 'Middle page · needs verification', props: { initialPage: 3, totalPages: 5 } },
  { id: 'last-page', title: 'Last page · needs verification', props: { initialPage: 5, totalPages: 5 } },
  { id: 'disabled', title: 'Disabled', props: { initialPage: 2, totalPages: 5, disabled: true } },
];

import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushAsyncStatusStateProps } from './SemrushAsyncStatusState';
export const propsSchema: PropSchemaField[] = [
  { name: 'state', type: "'loading' | 'loaded' | 'error'", required: false, description: 'Asynchronous surface state.' },
  { name: 'surface', type: "'table' | 'chart' | 'card'", required: false, description: 'Context represented by the state.' },
];
export const fixtures: PreviewFixture<SemrushAsyncStatusStateProps>[] = [
  { id: 'table-loading', title: 'Table loading', props: { state: 'loading', surface: 'table' } },
  { id: 'chart-loading', title: 'Chart loading', props: { state: 'loading', surface: 'chart' } },
  { id: 'card-loaded', title: 'Loaded', props: { state: 'loaded', surface: 'card' } },
  { id: 'synthetic-error', title: 'Error · synthetic', props: { state: 'error', surface: 'table' } },
];

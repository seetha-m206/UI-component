import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushReportControlClusterProps } from './SemrushReportControlCluster';
export const propsSchema: PropSchemaField[] = [{ name: 'loading', type: 'boolean', required: false, description: 'Shows a loading fixture where supported.' }, { name: 'error', type: 'boolean', required: false, description: 'Shows the observed recoverable error where supported.' }];
export const fixtures: PreviewFixture<SemrushReportControlClusterProps>[] = [{ id: 'default', title: 'Filter cluster', props: {} }, { id: 'loading', title: 'Loading', props: { loading: true } }];

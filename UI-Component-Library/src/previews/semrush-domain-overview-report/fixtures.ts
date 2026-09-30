import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushDomainOverviewReportProps } from './SemrushDomainOverviewReport';
export const propsSchema: PropSchemaField[] = [{ name: 'loading', type: 'boolean', required: false, description: 'Shows a loading fixture where supported.' }, { name: 'error', type: 'boolean', required: false, description: 'Shows the observed recoverable error where supported.' }];
export const fixtures: PreviewFixture<SemrushDomainOverviewReportProps>[] = [{ id: 'default', title: 'Report', props: {} }, { id: 'loading', title: 'Loading', props: { loading: true } }, { id: 'error', title: 'Error', props: { error: true } }];

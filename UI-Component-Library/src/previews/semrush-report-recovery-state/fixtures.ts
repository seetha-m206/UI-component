import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushReportRecoveryStateProps } from './SemrushReportRecoveryState';
export const propsSchema: PropSchemaField[] = [{ name: 'loading', type: 'boolean', required: false, description: 'Shows a loading fixture where supported.' }, { name: 'error', type: 'boolean', required: false, description: 'Shows the observed recoverable error where supported.' }];
export const fixtures: PreviewFixture<SemrushReportRecoveryStateProps>[] = [{ id: 'default', title: 'Recovery', props: {} }, { id: 'loading', title: 'Loading', props: { loading: true } }];

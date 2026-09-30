import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushDomainOverviewEntryProps } from './SemrushDomainOverviewEntry';
export const propsSchema: PropSchemaField[] = [{ name: 'loading', type: 'boolean', required: false, description: 'Shows a loading fixture where supported.' }, { name: 'error', type: 'boolean', required: false, description: 'Shows the observed recoverable error where supported.' }];
export const fixtures: PreviewFixture<SemrushDomainOverviewEntryProps>[] = [{ id: 'default', title: 'Entry', props: {} }, { id: 'loading', title: 'Loading', props: { loading: true } }];

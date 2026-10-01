import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushSearchTrendControlsProps } from './SemrushSearchTrendControls';
export const propsSchema: PropSchemaField[] = [{ name: 'loading', type: 'boolean', required: false, description: 'Shows a loading fixture where supported.' }, { name: 'error', type: 'boolean', required: false, description: 'Shows the observed recoverable error where supported.' }];
export const fixtures: PreviewFixture<SemrushSearchTrendControlsProps>[] = [{ id: 'default', title: 'Trend controls', props: {} }, { id: 'loading', title: 'Loading', props: { loading: true } }];

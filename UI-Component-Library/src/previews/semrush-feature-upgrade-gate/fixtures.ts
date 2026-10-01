import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushFeatureUpgradeGateProps } from './SemrushFeatureUpgradeGate';
export const propsSchema: PropSchemaField[] = [{ name: 'loading', type: 'boolean', required: false, description: 'Shows a loading fixture where supported.' }, { name: 'error', type: 'boolean', required: false, description: 'Shows the observed recoverable error where supported.' }];
export const fixtures: PreviewFixture<SemrushFeatureUpgradeGateProps>[] = [{ id: 'default', title: 'Upgrade gate', props: {} }, { id: 'loading', title: 'Loading', props: { loading: true } }];

import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsGbpMonitorAccessGateProps } from './AhrefsGbpMonitorAccessGate';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsGbpMonitorAccessGateProps>[] = [
  { id: 'default', title: 'GBP Monitor access gate', props: {} },
];

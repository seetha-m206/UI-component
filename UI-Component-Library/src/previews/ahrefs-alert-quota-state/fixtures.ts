import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsAlertQuotaStateProps } from './AhrefsAlertQuotaState';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsAlertQuotaStateProps>[] = [
  { id: 'default', title: 'Alert quota state', props: {} },
];

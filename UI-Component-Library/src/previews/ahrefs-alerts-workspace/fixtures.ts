import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsAlertsWorkspaceProps } from './AhrefsAlertsWorkspace';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsAlertsWorkspaceProps>[] = [
  { id: 'default', title: 'Alerts workspace', props: {} },
];

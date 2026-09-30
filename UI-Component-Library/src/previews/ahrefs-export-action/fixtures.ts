import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsExportActionProps } from './AhrefsExportAction';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsExportActionProps>[] = [
  { id: 'default', title: 'Export action', props: {} },
];

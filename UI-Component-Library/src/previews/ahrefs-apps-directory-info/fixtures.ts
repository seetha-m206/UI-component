import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsAppsDirectoryInfoProps } from './AhrefsAppsDirectoryInfo';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsAppsDirectoryInfoProps>[] = [
  { id: 'default', title: 'Apps directory information', props: {} },
];

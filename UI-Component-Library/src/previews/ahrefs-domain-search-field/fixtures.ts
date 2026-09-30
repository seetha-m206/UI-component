import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsDomainSearchFieldProps } from './AhrefsDomainSearchField';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables local preview controls.',
  },
];
export const fixtures: PreviewFixture<AhrefsDomainSearchFieldProps>[] = [
  { id: 'default', title: 'Domain search field', props: {} },
];

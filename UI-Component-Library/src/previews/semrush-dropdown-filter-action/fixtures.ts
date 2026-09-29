import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushDropdownFilterActionProps } from './SemrushDropdownFilterAction';
export const propsSchema: PropSchemaField[] = [
  { name: 'variant', type: "'ownership' | 'tags-empty' | 'advanced'", required: false, description: 'Filter content pattern.' },
  { name: 'initiallyOpen', type: 'boolean', required: false, description: 'Starts the filter surface expanded.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables the trigger.' },
];
export const fixtures: PreviewFixture<SemrushDropdownFilterActionProps>[] = [
  { id: 'closed', title: 'Closed', props: { variant: 'ownership' } },
  { id: 'ownership', title: 'Ownership options', props: { variant: 'ownership', initiallyOpen: true } },
  { id: 'tags-empty', title: 'Tags empty', props: { variant: 'tags-empty', initiallyOpen: true } },
  { id: 'advanced', title: 'Advanced filter', props: { variant: 'advanced', initiallyOpen: true } },
];

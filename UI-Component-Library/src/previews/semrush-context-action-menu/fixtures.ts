import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushContextActionMenuProps } from './SemrushContextActionMenu';
export const propsSchema: PropSchemaField[] = [
  { name: 'initiallyOpen', type: 'boolean', required: false, description: 'Starts the menu expanded.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables the menu trigger.' },
];
export const fixtures: PreviewFixture<SemrushContextActionMenuProps>[] = [
  { id: 'closed', title: 'Closed', props: {} },
  { id: 'open', title: 'Open menu', props: { initiallyOpen: true } },
];

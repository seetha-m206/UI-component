import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushPageSizeControlProps } from './SemrushPageSizeControl';
export const propsSchema: PropSchemaField[] = [
  { name: 'initialSize', type: '10 | 20 | 50 | 100', required: false, description: 'Selected rows-per-page value.' },
  { name: 'initiallyOpen', type: 'boolean', required: false, description: 'Starts the size list expanded.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables page-size changes.' },
];
export const fixtures: PreviewFixture<SemrushPageSizeControlProps>[] = [
  { id: 'closed', title: 'Closed', props: { initialSize: 10 } },
  { id: 'open', title: 'Size options', props: { initialSize: 10, initiallyOpen: true } },
  { id: 'fifty', title: 'Fifty rows', props: { initialSize: 50 } },
];

import type { PreviewFixture, PropSchemaField } from '../types';
import type { AhrefsActionButtonProps } from './AhrefsActionButton';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'ghost'",
    required: false,
    description: 'Observed Ahrefs action hierarchy.',
  },
  { name: 'label', type: 'string', required: false, description: 'Visible action label.' },
  {
    name: 'loading',
    type: 'boolean',
    required: false,
    description: 'Synthetic guarded loading state.',
  },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables the control.' },
];
export const fixtures: PreviewFixture<AhrefsActionButtonProps>[] = [
  { id: 'primary', title: 'Primary', props: { variant: 'primary', label: 'Continue' } },
  { id: 'secondary', title: 'Secondary', props: { variant: 'secondary', label: 'Manage access' } },
  { id: 'ghost', title: 'Ghost', props: { variant: 'ghost', label: 'Cancel' } },
  { id: 'loading', title: 'Loading', props: { loading: true } },
];

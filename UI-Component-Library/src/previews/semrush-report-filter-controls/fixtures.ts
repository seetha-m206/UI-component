import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushReportFilterControlsProps } from './SemrushReportFilterControls';
export const propsSchema: PropSchemaField[] = [
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables form controls.' },
  {
    name: 'quotaFull',
    type: 'boolean',
    required: false,
    description: 'Shows the captured profile-limit error.',
  },
  {
    name: 'initialState',
    type: "'default' | 'brand-menu' | 'target-dialog' | 'platform-menu' | 'date-menu' | 'target-tip' | 'date-tip' | 'data-dialog' | 'quota-dialog'",
    required: false,
    description: 'Starts the preview in a documented interaction state.',
  },
];
export const fixtures: PreviewFixture<SemrushReportFilterControlsProps>[] = [
  { id: 'default', title: 'Default controls', props: { quotaFull: true } },
  { id: 'brand-menu', title: 'Brand menu', props: { quotaFull: true, initialState: 'brand-menu' } },
  { id: 'target-dialog', title: 'Target editor', props: { quotaFull: true, initialState: 'target-dialog' } },
  { id: 'platform-menu', title: 'Platform menu', props: { quotaFull: true, initialState: 'platform-menu' } },
  { id: 'date-menu', title: 'Historical dates', props: { quotaFull: true, initialState: 'date-menu' } },
  { id: 'target-tip', title: 'Target help', props: { quotaFull: true, initialState: 'target-tip' } },
  { id: 'date-tip', title: 'Update help', props: { quotaFull: true, initialState: 'date-tip' } },
  { id: 'data-dialog', title: 'Data methodology', props: { quotaFull: true, initialState: 'data-dialog' } },
  { id: 'quota-dialog', title: 'Profile limit', props: { quotaFull: true, initialState: 'quota-dialog' } },
  { id: 'available', title: 'Capacity available', props: { quotaFull: false } },
];

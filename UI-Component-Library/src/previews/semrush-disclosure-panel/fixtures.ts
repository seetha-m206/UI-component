import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushDisclosurePanelProps } from './SemrushDisclosurePanel';
export const propsSchema: PropSchemaField[] = [
  { name: 'variant', type: "'faq' | 'remediation' | 'recommendations'", required: false, description: 'Observed disclosure family.' },
  { name: 'initialOpen', type: 'string[]', required: false, description: 'Initially expanded disclosure ids.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables disclosure toggles.' },
];
export const fixtures: PreviewFixture<SemrushDisclosurePanelProps>[] = [
  { id: 'faq-closed', title: 'FAQ closed', props: { variant: 'faq' } },
  { id: 'faq-multiple', title: 'FAQ multiple open', props: { variant: 'faq', initialOpen: ['coverage', 'updates'] } },
  { id: 'remediation', title: 'How to fix open', props: { variant: 'remediation', initialOpen: ['fix'] } },
  { id: 'recommendations', title: 'Recommendations open', props: { variant: 'recommendations', initialOpen: ['recommendations'] } },
];

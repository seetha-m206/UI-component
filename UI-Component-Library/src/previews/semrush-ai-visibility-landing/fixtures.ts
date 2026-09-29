import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushAiVisibilityLandingProps } from './SemrushAiVisibilityLanding';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'default' | 'filled' | 'faq-one' | 'faq-multiple' | 'coming-soon' | 'guarded-action'",
    required: false,
    description: 'Starts the reconstruction in a documented visual or interaction state.',
  },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables local controls.' },
];

export const fixtures: PreviewFixture<SemrushAiVisibilityLandingProps>[] = [
  { id: 'default', title: 'Landing default', props: { initialState: 'default' } },
  { id: 'filled', title: 'Domain entered', props: { initialState: 'filled' } },
  { id: 'faq-one', title: 'One FAQ open', props: { initialState: 'faq-one' } },
  { id: 'faq-multiple', title: 'Multiple FAQs', props: { initialState: 'faq-multiple' } },
  { id: 'coming-soon', title: 'Coming soon', props: { initialState: 'coming-soon' } },
  { id: 'guarded-action', title: 'Guarded CTA', props: { initialState: 'guarded-action' } },
];

import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushToastBannerProps } from './SemrushToastBanner';

export const propsSchema: PropSchemaField[] = [
  { name: 'initialKind', type: "'success' | 'info' | 'warning' | 'error'", required: false, description: 'Feedback severity.' },
  { name: 'surface', type: "'toast' | 'banner'", required: false, description: 'Floating toast or inline banner presentation.' },
  { name: 'initiallyVisible', type: 'boolean', required: false, description: 'Initial visibility.' },
];

export const fixtures: PreviewFixture<SemrushToastBannerProps>[] = [
  { id: 'success-toast', title: 'Success toast', props: {} },
  { id: 'information-banner', title: 'Information banner', props: { initialKind: 'info', surface: 'banner' } },
  { id: 'warning-banner', title: 'Warning banner', props: { initialKind: 'warning', surface: 'banner' } },
  { id: 'synthetic-error', title: 'Synthetic error toast', props: { initialKind: 'error' } },
  { id: 'dismissed', title: 'Dismissed', props: { initiallyVisible: false } },
];

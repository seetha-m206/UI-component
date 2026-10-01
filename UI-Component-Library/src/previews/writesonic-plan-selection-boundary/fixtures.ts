import type { PreviewFixture } from '../types';
export const fixtures: PreviewFixture<{ disabled?: boolean }>[] = [
  { id: 'boundary', title: 'Observed boundary · fictional plans', props: {} },
  { id: 'disabled', title: 'Disabled · local simulation only', props: { disabled: true } },
];

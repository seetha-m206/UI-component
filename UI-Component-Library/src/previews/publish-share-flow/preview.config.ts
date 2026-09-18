import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1024 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * This component owns its own section/sub-item/enabled state internally
   * (see PublishShareFlow.tsx) rather than a scalar value/onChange pair —
   * the meaningful states (enabled/disabled, which card/sub-item, the
   * confirm dialog) are reached via fixture selection, the same accepted
   * pattern typeform-ai-chat-to-create and analytics-deep-insights-dropoff
   * use for non-scalar-shaped components. No genuine scalar
   * disabled/required toggle was documented for this component, so no
   * toggles are declared here.
   */
  toggles: [],
};

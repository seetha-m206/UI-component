import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * This component owns its own view/selection state internally (see
   * TypeformContactsModule.tsx and README) rather than a scalar
   * value/onChange pair — the meaningful states (empty, populated list,
   * add-panel open, detail view open, not-enriched banner) are reached via
   * fixture selection, the same accepted pattern `new-form-chooser` and
   * `analytics-deep-insights-dropoff` use for non-scalar-shaped
   * components. No genuine scalar disabled/required toggle was documented
   * for this component, so no toggles are declared here.
   */
  toggles: [],
};

import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1024 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * This component owns its own tab/date-range/view-mode state internally
   * (see TypeformAnalyticsDashboard.tsx) rather than a scalar value/onChange
   * pair — the meaningful states (which tab, which date range, table vs.
   * chart view) are reached via fixture selection, the same accepted
   * pattern the analytics-dashboard-kpi-bar-map and analytics-deep-
   * insights-dropoff sibling previews use for dashboard-shaped components.
   * No genuine scalar disabled/required toggle was documented for this
   * component, so no toggles are declared here.
   */
  toggles: [],
};

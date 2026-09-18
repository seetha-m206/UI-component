import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * A read-mostly dashboard doesn't have a meaningful "required"/"disabled"
   * pair the way a form field does, so this only carries the one toggle that
   * corresponds to a real observed gating state: Advanced Metrics
   * enabled/locked (the "Starts" KPI card blur+lock). Empty-state and
   * region-distribution variation are covered via fixtures instead, since
   * they change the whole data shape rather than a single boolean.
   */
  toggles: [
    {
      id: 'advancedMetricsEnabled',
      label: 'Advanced Metrics',
      onLabel: 'Unlocked',
      offLabel: 'Locked',
    },
  ],
};

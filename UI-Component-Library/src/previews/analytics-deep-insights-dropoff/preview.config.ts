import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * No toggle is declared here on purpose. The shared
   * ReconstructedPreviewPanel harness only special-cases a toggle literally
   * id'd "disabled" (wired to a real `disabled` prop) and otherwise routes
   * any other toggle through its `required`-shaped override plumbing (see
   * ReconstructedPreviewPanel.tsx's FixtureStage) — neither concept applies
   * to this read-mostly, tab-based analytics surface. Unlike
   * analytics-dashboard-kpi-bar-map (which has one genuine two-state gate,
   * Advanced Metrics locked/unlocked, rendered differently by the
   * component itself), every state this component needs to demonstrate
   * (populated data, freshly-enabled zeros, single-page empty state, high
   * attrition) changes the whole data shape rather than a single boolean,
   * so it's covered entirely via fixtures instead — see README.
   */
  toggles: [],
};

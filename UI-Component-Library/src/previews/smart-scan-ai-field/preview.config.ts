import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 720 },
    { id: 'tablet', label: 'Tablet', width: 600 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * No toggle is declared here. The shared ReconstructedPreviewPanel
   * harness only special-cases a toggle literally id'd "disabled" (wired
   * to a real `disabled` prop) and otherwise routes any other toggle
   * through its `required`-shaped override plumbing (see
   * ReconstructedPreviewPanel.tsx's FixtureStage) — neither concept
   * applies to this component. Its real state dimension is `mode`
   * (builder/live) plus a multi-step flow state within each mode, which
   * can't be expressed as a single disabled/required-shaped boolean —
   * every meaningful state (before/after extraction, before/after the
   * confirmed scan failure, dismissed) is covered via dedicated fixtures
   * instead. See README.
   */
  toggles: [],
};

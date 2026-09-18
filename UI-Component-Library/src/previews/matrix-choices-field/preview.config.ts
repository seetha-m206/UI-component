import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * Only `disabled` is a genuine scalar boolean the generic harness can
   * forward meaningfully. rowLabels/columnLabels/value are all non-scalar
   * (arrays/maps), so — same accepted limitation documented in
   * choices-list-editor's README — they aren't auto-wired by the shared
   * ReconstructedPreviewPanel harness. Fixture selection covers the
   * meaningful states instead (empty vs. partially-selected vs. larger grid
   * vs. at-limit); see this folder's README.
   */
  toggles: [{ id: 'disabled', label: 'State', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

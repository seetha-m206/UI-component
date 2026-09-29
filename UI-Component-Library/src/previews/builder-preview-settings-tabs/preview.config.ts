import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * No toggles declared: the record explicitly confirms neither control has
   * a genuine disabled state — all 9 left-rail items and the Preview button
   * stay fully enabled on both a populated and a zero-field form. Rather
   * than expose a fake "disabled" axis the source never observed, the
   * zero-field vs. populated contrast is reached via the `fieldLabels`
   * fixture variations instead (see fixtures.ts).
   */
  toggles: [],
};

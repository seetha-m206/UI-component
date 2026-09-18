import type { PreviewConfig } from '../types';

/**
 * This is a screen-level shell, not a single form field: "required"
 * doesn't apply, and there's no observed disabled/loading state in the
 * source record, so the toggle set stays deliberately minimal (empty) —
 * the meaningful state changes here (color, font, collapsed) are already
 * exercised through the fixture picker and the live config controls
 * themselves, per this folder's README.
 */
export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  toggles: [],
};

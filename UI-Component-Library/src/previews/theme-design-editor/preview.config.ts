import type { PreviewConfig } from '../types';

/**
 * A screen-level design editor, not a single form field: "required" doesn't
 * apply here. The source record explicitly states "Disabled/loading/error
 * states: not observed," so `disabled` is included only as a flagged
 * assumption (see fixtures.ts / README) rather than a confirmed behavior —
 * still surfaced as a toggle since it is a genuinely useful control to
 * exercise, unlike a "required" concept that simply doesn't fit this
 * component. The meaningful state changes that ARE observed (font, color,
 * size, dirty/Revert, close-with-unsaved-changes) are already exercised
 * through the fixture picker and the live popover controls themselves.
 */
export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  toggles: [{ id: 'disabled', label: 'State', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

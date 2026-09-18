import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  // No 'required' toggle: the source record never shows this pattern with
  // required-field / validation semantics (it's a navigation/selection
  // control, not a form-answer field), so that axis is intentionally
  // omitted rather than carried over from the other two previews.
  toggles: [{ id: 'disabled', label: 'State', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

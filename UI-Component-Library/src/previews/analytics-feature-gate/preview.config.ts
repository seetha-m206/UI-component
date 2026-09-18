import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  // Only a disabled/enabled toggle is carried over from the form-field
  // previews — "required" has no meaning for a feature gate. The
  // locked/unlocked and free-toggle/paywall axes are deliberately NOT
  // exposed as toggles here: they're the two dimensions the fixture list
  // above already varies independently (locked-free-toggle,
  // locked-paywall, unlocked, unlocked-paywall), which is the more
  // illustrative way to demonstrate that the same blur+lock visual can
  // mean either "one click away, free" or "needs a plan upgrade" — see
  // README.
  toggles: [{ id: 'disabled', label: 'State', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

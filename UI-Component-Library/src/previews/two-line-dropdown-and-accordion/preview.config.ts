import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  // The two-line dropdown's `disabled` prop is a genuine scalar axis (the
  // component names it `disabled` specifically so this harness toggle can
  // drive it) — no disabled/required state was documented for the
  // accordion, so only this one toggle is declared.
  toggles: [{ id: 'disabled', label: 'Dropdown state', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

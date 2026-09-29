import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * This component owns its own open/closed state internally (see
   * DestructiveConfirmModalComparison.tsx) rather than a scalar value, so
   * the meaningful states are reached via fixture selection (closed / Modal
   * 1 open / Modal 2 open) — same accepted pattern as new-form-chooser.
   * `disabled` is the one genuine scalar toggle this component exposes.
   */
  toggles: [{ id: 'disabled', label: 'State', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

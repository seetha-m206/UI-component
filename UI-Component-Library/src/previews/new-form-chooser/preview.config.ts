import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * This component owns its own step/selection state internally (see
   * NewFormChooser.tsx and README) rather than taking a scalar
   * value/onChange pair, so the shared harness's generic value plumbing
   * doesn't apply here — the meaningful states are reached via fixture
   * selection (closed / chooser open / sub-dialog with each form type),
   * same accepted pattern as choices-list-editor and
   * matrix-choices-field for a non-scalar-shaped component. `disabled` is
   * the one genuine scalar toggle this component exposes.
   */
  toggles: [{ id: 'disabled', label: 'State', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

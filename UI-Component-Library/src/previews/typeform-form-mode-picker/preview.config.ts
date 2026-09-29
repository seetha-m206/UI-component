import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * This component owns its own mode/menu state internally (see
   * TypeformFormModePicker.tsx), rather than a scalar value/onChange pair —
   * same accepted pattern as typeform-automations-builder and
   * entries-kanban-view for a screen-level component. `disabled` is the one
   * genuine scalar toggle it exposes.
   */
  toggles: [{ id: 'disabled', label: 'State', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

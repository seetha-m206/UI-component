import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * This component owns its own shell/tab/panel state internally, same
   * accepted pattern as google-forms-app-shell and document-canvas-editor-shell
   * for a screen-level component. `disabled` is the one genuine scalar
   * toggle it exposes.
   */
  toggles: [{ id: 'disabled', label: 'State', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

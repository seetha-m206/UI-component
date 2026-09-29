import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * This component owns its own surface/selection/publish state internally
   * via useState (an Atomic-shaped commerce field pair + a settings screen,
   * not a scalar value/onChange field) — same accepted pattern as
   * document-canvas-editor-shell and typeform-automations-builder. No
   * disabled/required scalar toggle was documented for this component.
   */
  toggles: [],
};

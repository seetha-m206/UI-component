import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * Self-managed screen-level state (formula/transcript/proposal), the same
   * accepted pattern as typeform-ai-chat-to-create and
   * document-canvas-editor-shell. No scalar disabled/required toggle was
   * documented for this component.
   */
  toggles: [],
};

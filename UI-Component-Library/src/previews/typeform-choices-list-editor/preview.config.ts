import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  // Only "disabled" is declared — the one toggle the shared
  // ReconstructedPreviewPanel harness actually wires to a real prop (see
  // ReconstructedPreviewPanel.tsx's FixtureStage: any toggle id other than
  // "disabled" is routed through the harness's `required`-shaped override
  // plumbing instead, which this component has no use for since it has no
  // required/validation concept — unlike Zoho's choices-list-editor, which
  // added a second toggle only because it genuinely implements a
  // `required` prop of its own).
  toggles: [{ id: 'disabled', label: 'State', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

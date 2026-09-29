import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * This component owns its own trigger-tab/template/modal state
   * internally (see NotificationSettingsEditor.tsx) rather than a scalar
   * value/onChange pair — the meaningful states (empty, populated per tab,
   * editor open with a validation error, editor open with Field Labels
   * open) are reached via fixture selection, the same accepted pattern
   * `new-form-chooser` and `typeform-ai-chat-to-create` use for non-
   * scalar-shaped components. No genuine scalar disabled/required toggle
   * was documented for this component, so no toggles are declared here.
   */
  toggles: [],
};

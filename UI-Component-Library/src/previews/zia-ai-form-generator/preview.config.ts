import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * This component owns its own step state internally (see
   * ZiaAiFormGenerator.tsx) rather than a scalar value/onChange pair — the
   * meaningful states (closed, prompt, generating, result) are reached via
   * fixture selection, the same accepted pattern typeform-ai-chat-to-create
   * and new-form-chooser use for non-scalar-shaped components. No genuine
   * scalar disabled/required toggle was documented for this component, so
   * no toggles are declared here.
   */
  toggles: [],
};

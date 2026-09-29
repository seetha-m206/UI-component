import type { PreviewConfig } from '../types';
export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1100 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Topics', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

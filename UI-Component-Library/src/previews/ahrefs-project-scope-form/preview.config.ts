import type { PreviewConfig } from '../types';
export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1120 },
    { id: 'tablet', label: 'Tablet', width: 820 },
    { id: 'mobile', label: 'Mobile', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'State', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

import type { PreviewConfig } from '../types';
export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1120 },
    { id: 'mobile', label: 'Mobile', width: 390 },
  ],
  toggles: [{ id: 'loading', label: 'Data', onLabel: 'Loading', offLabel: 'Ready' }],
};

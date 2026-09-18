import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  // Only one state axis genuinely applies to a screen-level board view: a
  // read-only/disabled Kanban (move controls inert). "Required" has no
  // meaning for an entries board, so it's deliberately omitted rather than
  // forced in to match other previews' two-toggle shape.
  toggles: [{ id: 'disabled', label: 'State', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

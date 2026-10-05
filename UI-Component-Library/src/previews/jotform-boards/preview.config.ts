import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  // The one state axis that matters for this component — generic board
  // vs. workflow-scoped board — is already its own in-preview mode
  // switcher (the central finding this preview exists to demonstrate),
  // not a disabled/required toggle. Neither of the harness's standard
  // toggles ("Disabled"/"Required") applies to a screen-level board
  // identity switch, so both are omitted rather than forced in.
  toggles: [],
};

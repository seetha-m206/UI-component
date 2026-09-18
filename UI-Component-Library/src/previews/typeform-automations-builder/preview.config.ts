import type { PreviewConfig } from '../types';

export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 768 },
    { id: 'mobile', label: 'Mobile', width: 375 },
  ],
  /*
   * This component owns its own step/chain state internally (see
   * TypeformAutomationsBuilder.tsx and README) rather than taking a scalar
   * value/onChange pair, so the shared harness's generic value plumbing
   * doesn't apply — the meaningful states are reached via fixture
   * selection (trigger picker / fresh skeleton / chains with inserted
   * blocks / activated / disabled), same accepted pattern as
   * new-form-chooser and entries-kanban-view for a non-scalar-shaped,
   * screen-level component. `disabled` is the one genuine scalar toggle
   * this component exposes.
   */
  toggles: [{ id: 'disabled', label: 'State', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

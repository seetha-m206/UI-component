import { SemrushPositionTrackingBatch } from '../semrush-position-tracking-batch/SemrushPositionTrackingBatch';
export interface SemrushTargetTypeFilterProps {
  loading?: boolean;
}
export function SemrushTargetTypeFilter(props: SemrushTargetTypeFilterProps) {
  return <SemrushPositionTrackingBatch specimen="target-filter" {...props} />;
}

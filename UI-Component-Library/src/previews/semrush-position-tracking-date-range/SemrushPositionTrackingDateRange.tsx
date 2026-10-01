import { SemrushPositionTrackingBatch } from '../semrush-position-tracking-batch/SemrushPositionTrackingBatch';
export interface SemrushPositionTrackingDateRangeProps {
  loading?: boolean;
}
export function SemrushPositionTrackingDateRange(props: SemrushPositionTrackingDateRangeProps) {
  return <SemrushPositionTrackingBatch specimen="date-range" {...props} />;
}

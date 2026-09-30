import { SemrushPositionTrackingBatch } from '../semrush-position-tracking-batch/SemrushPositionTrackingBatch';
export interface SemrushRankingsOverviewTableProps {
  loading?: boolean;
}
export function SemrushRankingsOverviewTable(props: SemrushRankingsOverviewTableProps) {
  return <SemrushPositionTrackingBatch specimen="rankings-table" {...props} />;
}

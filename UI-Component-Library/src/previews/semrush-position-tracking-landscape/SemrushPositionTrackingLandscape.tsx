import { SemrushPositionTrackingBatch } from '../semrush-position-tracking-batch/SemrushPositionTrackingBatch';
export interface SemrushPositionTrackingLandscapeProps {
  loading?: boolean;
}
export function SemrushPositionTrackingLandscape(props: SemrushPositionTrackingLandscapeProps) {
  return <SemrushPositionTrackingBatch specimen="landscape" {...props} />;
}

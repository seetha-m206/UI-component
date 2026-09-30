import { SemrushPositionTrackingBatch } from '../semrush-position-tracking-batch/SemrushPositionTrackingBatch';
export interface SemrushPositionTrackingProjectsProps {
  loading?: boolean;
}
export function SemrushPositionTrackingProjects(props: SemrushPositionTrackingProjectsProps) {
  return <SemrushPositionTrackingBatch specimen="projects" {...props} />;
}

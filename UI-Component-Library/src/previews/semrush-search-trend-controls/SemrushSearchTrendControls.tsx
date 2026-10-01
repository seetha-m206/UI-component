import { SemrushDomainOverviewBatch } from '../semrush-domain-overview-batch/SemrushDomainOverviewBatch';
export interface SemrushSearchTrendControlsProps { loading?: boolean; error?: boolean; }
export function SemrushSearchTrendControls(props: SemrushSearchTrendControlsProps) { return <SemrushDomainOverviewBatch specimen="trend-controls" {...props} />; }

import { SemrushDomainOverviewBatch } from '../semrush-domain-overview-batch/SemrushDomainOverviewBatch';
export interface SemrushReportRecoveryStateProps { loading?: boolean; error?: boolean; }
export function SemrushReportRecoveryState(props: SemrushReportRecoveryStateProps) { return <SemrushDomainOverviewBatch specimen="recovery" {...props} />; }

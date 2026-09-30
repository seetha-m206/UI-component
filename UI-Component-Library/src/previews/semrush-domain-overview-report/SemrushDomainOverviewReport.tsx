import { SemrushDomainOverviewBatch } from '../semrush-domain-overview-batch/SemrushDomainOverviewBatch';
export interface SemrushDomainOverviewReportProps { loading?: boolean; error?: boolean; }
export function SemrushDomainOverviewReport(props: SemrushDomainOverviewReportProps) { return <SemrushDomainOverviewBatch specimen="report" {...props} />; }

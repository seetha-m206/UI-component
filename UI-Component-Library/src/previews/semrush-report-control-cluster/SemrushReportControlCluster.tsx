import { SemrushDomainOverviewBatch } from '../semrush-domain-overview-batch/SemrushDomainOverviewBatch';
export interface SemrushReportControlClusterProps { loading?: boolean; error?: boolean; }
export function SemrushReportControlCluster(props: SemrushReportControlClusterProps) { return <SemrushDomainOverviewBatch specimen="filter-cluster" {...props} />; }

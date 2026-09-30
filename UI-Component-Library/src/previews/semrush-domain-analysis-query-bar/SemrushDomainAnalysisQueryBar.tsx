import { SemrushDomainOverviewBatch } from '../semrush-domain-overview-batch/SemrushDomainOverviewBatch';
export interface SemrushDomainAnalysisQueryBarProps { loading?: boolean; error?: boolean; }
export function SemrushDomainAnalysisQueryBar(props: SemrushDomainAnalysisQueryBarProps) { return <SemrushDomainOverviewBatch specimen="query-bar" {...props} />; }

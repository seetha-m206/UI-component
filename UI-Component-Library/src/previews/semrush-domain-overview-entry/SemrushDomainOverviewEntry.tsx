import { SemrushDomainOverviewBatch } from '../semrush-domain-overview-batch/SemrushDomainOverviewBatch';
export interface SemrushDomainOverviewEntryProps { loading?: boolean; error?: boolean; }
export function SemrushDomainOverviewEntry(props: SemrushDomainOverviewEntryProps) { return <SemrushDomainOverviewBatch specimen="entry" {...props} />; }

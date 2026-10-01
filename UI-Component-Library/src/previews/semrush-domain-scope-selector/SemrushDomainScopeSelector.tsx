import { SemrushDomainOverviewBatch } from '../semrush-domain-overview-batch/SemrushDomainOverviewBatch';
export interface SemrushDomainScopeSelectorProps { loading?: boolean; error?: boolean; }
export function SemrushDomainScopeSelector(props: SemrushDomainScopeSelectorProps) { return <SemrushDomainOverviewBatch specimen="scope-selector" {...props} />; }

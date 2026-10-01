import { SemrushDomainOverviewBatch } from '../semrush-domain-overview-batch/SemrushDomainOverviewBatch';
export interface SemrushFeatureUpgradeGateProps { loading?: boolean; error?: boolean; }
export function SemrushFeatureUpgradeGate(props: SemrushFeatureUpgradeGateProps) { return <SemrushDomainOverviewBatch specimen="upgrade-gate" {...props} />; }

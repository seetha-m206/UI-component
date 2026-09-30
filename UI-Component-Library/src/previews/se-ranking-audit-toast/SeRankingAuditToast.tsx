import { SeRanking } from '../se-ranking/SeRanking';

export interface SeRankingAuditToastProps {
  initiallyOpen?: boolean;
}

export function SeRankingAuditToast({ initiallyOpen = true }: SeRankingAuditToastProps) {
  return <SeRanking view="toast" toastInitiallyOpen={initiallyOpen} />;
}

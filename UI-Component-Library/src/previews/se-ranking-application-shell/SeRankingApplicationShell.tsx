import { SeRanking, type SeRankingProps } from '../se-ranking/SeRanking';
export type SeRankingApplicationShellProps = Pick<SeRankingProps, 'initialState' | 'disabled'>;
export function SeRankingApplicationShell(props: SeRankingApplicationShellProps) { return <SeRanking {...props} view="shell" />; }

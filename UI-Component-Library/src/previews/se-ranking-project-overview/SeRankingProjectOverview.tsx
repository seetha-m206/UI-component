import { SeRanking, type SeRankingProps } from '../se-ranking/SeRanking';
export type SeRankingProjectOverviewProps = Pick<SeRankingProps, 'initialState'>;
export function SeRankingProjectOverview(props: SeRankingProjectOverviewProps) { return <SeRanking {...props} view="overview" />; }

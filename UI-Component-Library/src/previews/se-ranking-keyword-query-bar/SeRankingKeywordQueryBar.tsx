import { SeRanking, type SeRankingProps } from '../se-ranking/SeRanking';
export type SeRankingKeywordQueryBarProps = Pick<SeRankingProps, 'initialState' | 'disabled'>;
export function SeRankingKeywordQueryBar(props: SeRankingKeywordQueryBarProps) { return <SeRanking {...props} view="query" />; }

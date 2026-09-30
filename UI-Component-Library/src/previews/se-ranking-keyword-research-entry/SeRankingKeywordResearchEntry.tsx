import { SeRanking, type SeRankingProps } from '../se-ranking/SeRanking';
export type SeRankingKeywordResearchEntryProps = Pick<SeRankingProps, 'initialState' | 'disabled'>;
export function SeRankingKeywordResearchEntry(props: SeRankingKeywordResearchEntryProps) { return <SeRanking {...props} view="keyword" />; }

import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicCompetitorRankingTable(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="competitors" />;
}

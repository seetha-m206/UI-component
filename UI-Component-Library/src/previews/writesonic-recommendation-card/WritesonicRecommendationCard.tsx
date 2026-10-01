import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicRecommendationCard(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="recommendation" />;
}

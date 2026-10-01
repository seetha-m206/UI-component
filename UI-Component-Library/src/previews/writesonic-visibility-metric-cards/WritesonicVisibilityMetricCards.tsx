import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicVisibilityMetricCards(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="metrics" />;
}

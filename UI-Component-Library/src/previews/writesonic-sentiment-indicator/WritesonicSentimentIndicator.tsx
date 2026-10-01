import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicSentimentIndicator(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="sentiment" />;
}

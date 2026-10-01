import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicAnswerCard(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="answer" />;
}

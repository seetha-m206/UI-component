import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicAnswersReport(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="answers" />;
}

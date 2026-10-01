import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicAnswerDisclosure(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="disclosure" />;
}

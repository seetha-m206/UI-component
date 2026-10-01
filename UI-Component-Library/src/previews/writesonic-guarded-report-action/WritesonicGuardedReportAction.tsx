import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicGuardedReportAction(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="gate" />;
}

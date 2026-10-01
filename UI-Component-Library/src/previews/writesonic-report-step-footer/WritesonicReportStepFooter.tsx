import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicReportStepFooter(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="footer" />;
}

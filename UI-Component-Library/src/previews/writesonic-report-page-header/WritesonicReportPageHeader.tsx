import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicReportPageHeader(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="header" />;
}

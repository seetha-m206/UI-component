import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicReportTabs(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="tabs" />;
}

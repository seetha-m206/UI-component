import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicCitationsReport(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="citations" />;
}

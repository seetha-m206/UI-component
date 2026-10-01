import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicCitationSourceRow(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="source" />;
}

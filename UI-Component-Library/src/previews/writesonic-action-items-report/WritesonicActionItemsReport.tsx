import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicActionItemsReport(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="actions" />;
}

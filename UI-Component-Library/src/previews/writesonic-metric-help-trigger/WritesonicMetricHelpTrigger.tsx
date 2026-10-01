import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicMetricHelpTrigger(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="help" />;
}

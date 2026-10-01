import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicOnboardingReportShell(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="shell" />;
}

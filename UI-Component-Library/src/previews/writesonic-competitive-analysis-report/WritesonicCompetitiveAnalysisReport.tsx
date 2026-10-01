import { WritesonicPreview, type WritesonicProps } from '../writesonic-shared/Writesonic';
export function WritesonicCompetitiveAnalysisReport(props: WritesonicProps) {
  return <WritesonicPreview {...props} kind="competitive" />;
}

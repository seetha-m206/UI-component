import { SeRanking } from '../se-ranking/SeRanking';

export interface SeRankingSurveyDialogProps {
  initiallyOpen?: boolean;
}

export function SeRankingSurveyDialog({ initiallyOpen = true }: SeRankingSurveyDialogProps) {
  return <SeRanking view="survey" surveyInitiallyOpen={initiallyOpen} />;
}

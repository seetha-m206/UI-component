import {
  SimilarwebOnboarding,
  type SimilarwebOnboardingProps,
} from '../similarweb-onboarding/SimilarwebOnboarding';

export type SimilarwebOnboardingWorkspaceProps = Omit<SimilarwebOnboardingProps, 'focus'>;

export function SimilarwebOnboardingWorkspace(props: SimilarwebOnboardingWorkspaceProps) {
  return <SimilarwebOnboarding {...props} focus="workspace" />;
}

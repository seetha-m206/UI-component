import {
  SimilarwebOnboarding,
  type SimilarwebOnboardingProps,
} from '../similarweb-onboarding/SimilarwebOnboarding';

export type SimilarwebProgressActionProps = Omit<SimilarwebOnboardingProps, 'focus'>;

export function SimilarwebProgressAction(props: SimilarwebProgressActionProps) {
  return <SimilarwebOnboarding {...props} focus="progress-action" />;
}

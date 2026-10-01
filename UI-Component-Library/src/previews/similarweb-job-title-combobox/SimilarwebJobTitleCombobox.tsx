import {
  SimilarwebOnboarding,
  type SimilarwebOnboardingProps,
} from '../similarweb-onboarding/SimilarwebOnboarding';

export type SimilarwebJobTitleComboboxProps = Omit<SimilarwebOnboardingProps, 'focus'>;

export function SimilarwebJobTitleCombobox(props: SimilarwebJobTitleComboboxProps) {
  return <SimilarwebOnboarding {...props} focus="combobox" />;
}

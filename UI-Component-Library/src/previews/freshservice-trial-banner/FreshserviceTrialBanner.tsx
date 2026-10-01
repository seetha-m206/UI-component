import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceTrialBanner(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="trial-banner" />;
}

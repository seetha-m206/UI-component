import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceReleaseForm(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="release-form" />;
}

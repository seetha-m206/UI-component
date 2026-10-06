import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceReleaseType(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="release-type" />;
}

import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceReleaseEmpty(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="release-empty" />;
}

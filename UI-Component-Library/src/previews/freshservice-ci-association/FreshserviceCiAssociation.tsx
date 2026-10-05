import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceCiAssociation(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="ci-association" />;
}

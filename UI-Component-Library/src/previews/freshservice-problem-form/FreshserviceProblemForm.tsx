import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceProblemForm(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="problem-form" />;
}

import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceProblemEmpty(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="problem-empty" />;
}

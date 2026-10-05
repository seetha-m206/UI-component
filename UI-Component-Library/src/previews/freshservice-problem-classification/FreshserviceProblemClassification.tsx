import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceProblemClassification(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="problem-classification" />;
}

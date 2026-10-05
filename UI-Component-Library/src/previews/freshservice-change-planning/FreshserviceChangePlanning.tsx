import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceChangePlanning(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="change-planning" />;
}

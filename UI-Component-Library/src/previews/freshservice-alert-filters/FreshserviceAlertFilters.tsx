import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceAlertFilters(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="alert-filters" />;
}

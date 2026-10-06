import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceAlertEmpty(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="alert-empty" />;
}

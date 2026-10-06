import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceChangeForm(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="change-form" />;
}

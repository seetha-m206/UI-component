import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceChangeEmpty(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="change-empty" />;
}

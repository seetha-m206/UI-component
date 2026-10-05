import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceTaskColumns(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="task-columns" />;
}

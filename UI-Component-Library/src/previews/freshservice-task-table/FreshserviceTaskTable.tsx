import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceTaskTable(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="task-table" />;
}

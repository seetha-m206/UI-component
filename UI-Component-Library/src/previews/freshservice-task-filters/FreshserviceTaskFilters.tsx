import { FreshserviceRemaining, type RemainingProps } from '../freshservice-shared/FreshserviceRemaining';
export function FreshserviceTaskFilters(props: Omit<RemainingProps, 'variant'>) {
  return <FreshserviceRemaining {...props} variant="task-filters" />;
}

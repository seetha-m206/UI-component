import { Freshservice, type FreshserviceProps } from '../freshservice-shared/Freshservice';
export function FreshserviceStatusPriorityFields(props: Omit<FreshserviceProps, 'variant'>) {
  return <Freshservice {...props} variant="status-priority-fields" />;
}

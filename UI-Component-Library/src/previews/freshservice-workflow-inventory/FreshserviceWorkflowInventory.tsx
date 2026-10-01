import { FreshserviceMore, type MoreProps } from '../freshservice-shared/FreshserviceMore';
export function FreshserviceWorkflowInventory(props: Omit<MoreProps, 'variant'>) {
  return <FreshserviceMore {...props} variant="workflow-inventory" />;
}

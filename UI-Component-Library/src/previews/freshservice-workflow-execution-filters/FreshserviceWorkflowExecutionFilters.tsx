import { FreshserviceDeep, type DeepProps } from '../freshservice-shared/FreshserviceDeep';
export function FreshserviceWorkflowExecutionFilters(props: Omit<DeepProps, 'variant'>) {
  return <FreshserviceDeep {...props} variant="workflow-execution-filters" />;
}

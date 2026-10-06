import { FreshserviceDeep, type DeepProps } from '../freshservice-shared/FreshserviceDeep';
export function FreshserviceWorkflowCanvas(props: Omit<DeepProps, 'variant'>) {
  return <FreshserviceDeep {...props} variant="workflow-canvas" />;
}

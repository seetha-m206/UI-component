import { FreshserviceMore, type MoreProps } from '../freshservice-shared/FreshserviceMore';
export function FreshserviceKnowledgeWorkspace(props: Omit<MoreProps, 'variant'>) {
  return <FreshserviceMore {...props} variant="knowledge-workspace" />;
}

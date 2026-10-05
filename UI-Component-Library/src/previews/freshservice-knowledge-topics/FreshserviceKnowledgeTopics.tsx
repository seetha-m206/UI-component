import { FreshserviceAdminKnowledge, type AdminKnowledgeProps } from '../freshservice-shared/FreshserviceAdminKnowledge';
export function FreshserviceKnowledgeTopics(props: Omit<AdminKnowledgeProps, 'variant'>) {
  return <FreshserviceAdminKnowledge {...props} variant="knowledge-topics" />;
}

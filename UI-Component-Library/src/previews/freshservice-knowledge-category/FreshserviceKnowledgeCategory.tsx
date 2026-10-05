import { FreshserviceAdminKnowledge, type AdminKnowledgeProps } from '../freshservice-shared/FreshserviceAdminKnowledge';
export function FreshserviceKnowledgeCategory(props: Omit<AdminKnowledgeProps, 'variant'>) {
  return <FreshserviceAdminKnowledge {...props} variant="knowledge-category" />;
}

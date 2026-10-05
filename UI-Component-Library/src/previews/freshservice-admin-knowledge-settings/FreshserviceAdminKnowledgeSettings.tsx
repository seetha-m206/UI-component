import { FreshserviceAdminKnowledge, type AdminKnowledgeProps } from '../freshservice-shared/FreshserviceAdminKnowledge';
export function FreshserviceAdminKnowledgeSettings(props: Omit<AdminKnowledgeProps, 'variant'>) {
  return <FreshserviceAdminKnowledge {...props} variant="admin-knowledge-settings" />;
}

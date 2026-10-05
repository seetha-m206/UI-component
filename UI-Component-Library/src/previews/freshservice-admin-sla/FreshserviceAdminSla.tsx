import { FreshserviceAdminKnowledge, type AdminKnowledgeProps } from '../freshservice-shared/FreshserviceAdminKnowledge';
export function FreshserviceAdminSla(props: Omit<AdminKnowledgeProps, 'variant'>) {
  return <FreshserviceAdminKnowledge {...props} variant="admin-sla" />;
}

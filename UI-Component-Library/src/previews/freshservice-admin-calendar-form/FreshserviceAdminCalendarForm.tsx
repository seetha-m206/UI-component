import { FreshserviceAdminKnowledge, type AdminKnowledgeProps } from '../freshservice-shared/FreshserviceAdminKnowledge';
export function FreshserviceAdminCalendarForm(props: Omit<AdminKnowledgeProps, 'variant'>) {
  return <FreshserviceAdminKnowledge {...props} variant="admin-calendar-form" />;
}

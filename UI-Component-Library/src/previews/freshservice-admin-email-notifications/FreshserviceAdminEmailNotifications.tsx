import { FreshserviceAdminKnowledge, type AdminKnowledgeProps } from '../freshservice-shared/FreshserviceAdminKnowledge';
export function FreshserviceAdminEmailNotifications(props: Omit<AdminKnowledgeProps, 'variant'>) { return <FreshserviceAdminKnowledge {...props} variant="admin-email-notifications" />; }

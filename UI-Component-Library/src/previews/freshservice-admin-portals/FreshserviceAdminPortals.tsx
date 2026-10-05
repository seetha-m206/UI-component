import { FreshserviceAdminKnowledge, type AdminKnowledgeProps } from '../freshservice-shared/FreshserviceAdminKnowledge';
export function FreshserviceAdminPortals(props: Omit<AdminKnowledgeProps, 'variant'>) { return <FreshserviceAdminKnowledge {...props} variant="admin-portals" />; }

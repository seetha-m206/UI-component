import { FreshserviceAdminKnowledge, type AdminKnowledgeProps } from '../freshservice-shared/FreshserviceAdminKnowledge';
export function FreshserviceAdminAgents(props: Omit<AdminKnowledgeProps, 'variant'>) { return <FreshserviceAdminKnowledge {...props} variant="admin-agents" />; }

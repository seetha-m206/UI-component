import { FreshserviceAdminKnowledge, type AdminKnowledgeProps } from '../freshservice-shared/FreshserviceAdminKnowledge';
export function FreshserviceAdminAgentGroups(props: Omit<AdminKnowledgeProps, 'variant'>) { return <FreshserviceAdminKnowledge {...props} variant="admin-agent-groups" />; }

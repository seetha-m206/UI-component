import type { PreviewFixture, PropSchemaField } from '../types';
import type { AdminKnowledgeProps } from '../freshservice-shared/FreshserviceAdminKnowledge';
export const fixtures: PreviewFixture<Omit<AdminKnowledgeProps, 'variant'>>[] = [{ id: 'default', title: 'Observed structure with local behavior', props: {} }];
export const propsSchema: PropSchemaField[] = [{ name: 'initialNotice', type: 'string', required: false, description: 'Local boundary notice. No provider request is made.' }];

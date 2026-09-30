import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushBacklinkAuditProjectsProps } from './SemrushBacklinkAuditProjects';
export const propsSchema: PropSchemaField[] = [{ name: 'loading', type: 'boolean', required: false, description: 'Shows the observed table skeleton state.' }, { name: 'empty', type: 'boolean', required: false, description: 'Shows a reconstructed empty collection.' }];
export const fixtures: PreviewFixture<SemrushBacklinkAuditProjectsProps>[] = [{ id: 'ready', title: 'Ready', props: {} }, { id: 'loading', title: 'Loading', props: { loading: true } }, { id: 'empty', title: 'Empty · needs verification', props: { empty: true } }];

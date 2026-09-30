import type { PreviewFixture, PropSchemaField } from '../types';
type Props = { disabled?: boolean };
export const fixtures: PreviewFixture<Props>[] = [{ id: 'default', title: 'Observed setup actions', props: {} }, { id: 'disabled', title: 'Synthetic disabled actions', props: { disabled: true } }];
export const propsSchema: PropSchemaField[] = [{ name: 'disabled', type: 'boolean', required: false, description: 'Disables every local setup action.' }];

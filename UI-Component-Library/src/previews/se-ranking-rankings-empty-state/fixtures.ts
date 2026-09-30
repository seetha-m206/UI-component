import type { PreviewFixture, PropSchemaField } from '../types';
type Props = { disabled?: boolean };
export const fixtures: PreviewFixture<Props>[] = [{ id: 'empty', title: 'Observed rankings empty state', props: {} }, { id: 'disabled', title: 'Synthetic disabled action', props: { disabled: true } }];
export const propsSchema: PropSchemaField[] = [{ name: 'disabled', type: 'boolean', required: false, description: 'Disables the local Add keywords action.' }];

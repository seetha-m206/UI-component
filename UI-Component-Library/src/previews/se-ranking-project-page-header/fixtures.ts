import type { PreviewFixture, PropSchemaField } from '../types';
type Props = { initialMenuOpen?: boolean };
export const fixtures: PreviewFixture<Props>[] = [{ id: 'closed', title: 'Observed page header', props: {} }, { id: 'open', title: 'Reconstructed Widgets menu', props: { initialMenuOpen: true } }];
export const propsSchema: PropSchemaField[] = [{ name: 'initialMenuOpen', type: 'boolean', required: false, description: 'Starts the reconstructed Widgets menu open.' }];

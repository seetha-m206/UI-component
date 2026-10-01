import type { PreviewFixture, PropSchemaField } from '../types';
type Props = { initiallyOpen?: boolean };
export const fixtures: PreviewFixture<Props>[] = [{ id: 'open', title: 'Observed workshop banner', props: { initiallyOpen: true } }, { id: 'dismissed', title: 'Reconstructed dismissed state', props: { initiallyOpen: false } }];
export const propsSchema: PropSchemaField[] = [{ name: 'initiallyOpen', type: 'boolean', required: false, description: 'Starts the local banner open or dismissed.' }];

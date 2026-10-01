import type { PreviewFixture, PropSchemaField } from '../types';
type Props = { initialPage?: number };
export const fixtures: PreviewFixture<Props>[] = [{ id: 'page-1', title: 'Observed first pair', props: { initialPage: 0 } }, { id: 'page-2', title: 'Reconstructed second pair', props: { initialPage: 1 } }];
export const propsSchema: PropSchemaField[] = [{ name: 'initialPage', type: 'number', required: false, description: 'Starts the local two-page carousel.' }];

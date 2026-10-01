import type { PreviewFixture, PropSchemaField } from '../types';
type Props = { initialPage?: number };
export const fixtures: PreviewFixture<Props>[] = [{ id: 'page-1', title: 'Observed 1–2 of 4', props: { initialPage: 0 } }, { id: 'page-2', title: 'Observed 3–4 of 4', props: { initialPage: 1 } }];
export const propsSchema: PropSchemaField[] = [{ name: 'initialPage', type: 'number', required: false, description: 'Starts the local two-page carousel.' }];

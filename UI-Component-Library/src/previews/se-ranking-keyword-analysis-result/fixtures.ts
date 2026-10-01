import type { PreviewFixture, PropSchemaField } from '../types';
type Props = { loading?: boolean };
export const fixtures: PreviewFixture<Props>[] = [{ id: 'zero-result', title: 'Observed analyzed zero-result report', props: {} }, { id: 'loading', title: 'Observed collection-in-progress message', props: { loading: true } }];
export const propsSchema: PropSchemaField[] = [{ name: 'loading', type: 'boolean', required: false, description: 'Shows the observed loading message that preceded the zero-result state.' }];

import type { PreviewFixture, PropSchemaField } from '../types';
type Props = { guideOpen?: boolean };
export const fixtures: PreviewFixture<Props>[] = [{ id: 'detailed', title: 'Observed detailed rankings report', props: {} }, { id: 'guide', title: 'Observed rankings table guide · 1 of 5', props: { guideOpen: true } }];
export const propsSchema: PropSchemaField[] = [{ name: 'guideOpen', type: 'boolean', required: false, description: 'Shows the observed first-run Rankings table guide.' }];

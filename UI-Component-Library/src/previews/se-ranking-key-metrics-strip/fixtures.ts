import type { PreviewFixture, PropSchemaField } from '../types';
import type { MetricsState } from '../se-ranking-states/SeRankingStates';
type Props = { initialState?: MetricsState };
export const fixtures: PreviewFixture<Props>[] = [
  { id: 'observed', title: 'Observed metric values', props: { initialState: 'observed' } },
  { id: 'settings-open', title: 'Observed metric settings menu', props: { initialState: 'settings-open' } },
  { id: 'loading', title: 'Reconstructed loading', props: { initialState: 'loading' } },
  { id: 'unavailable', title: 'Synthetic unavailable', props: { initialState: 'unavailable' } },
];
export const propsSchema: PropSchemaField[] = [{ name: 'initialState', type: "'observed' | 'settings-open' | 'loading' | 'unavailable'", required: false, description: 'Selects the metric display state.' }];

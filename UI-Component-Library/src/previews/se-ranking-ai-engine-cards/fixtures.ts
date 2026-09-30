import type { PreviewFixture, PropSchemaField } from '../types';
import type { EngineState } from '../se-ranking-states/SeRankingStates';
type Props = { initialState?: EngineState };
export const fixtures: PreviewFixture<Props>[] = [
  { id: 'observed', title: 'Observed engine summary', props: { initialState: 'observed' } },
  { id: 'selected', title: 'Reconstructed selected engine', props: { initialState: 'selected' } },
  { id: 'no-data', title: 'Synthetic no-data set', props: { initialState: 'no-data' } },
];
export const propsSchema: PropSchemaField[] = [{ name: 'initialState', type: "'observed' | 'selected' | 'no-data'", required: false, description: 'Sets mention and local-selection state.' }];

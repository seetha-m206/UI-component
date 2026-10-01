import type { PreviewFixture, PropSchemaField } from '../types';
import type { EngineState } from '../se-ranking-states/SeRankingStates';
type Props = { initialState?: EngineState };
export const fixtures: PreviewFixture<Props>[] = [
  { id: 'observed', title: 'Observed engine summary', props: { initialState: 'observed' } },
  { id: 'detail-open', title: 'Observed AI Overview drill-down', props: { initialState: 'detail-open' } },
  { id: 'no-data', title: 'Synthetic no-data set', props: { initialState: 'no-data' } },
];
export const propsSchema: PropSchemaField[] = [{ name: 'initialState', type: "'observed' | 'detail-open' | 'no-data'", required: false, description: 'Sets summary and observed drill-down state.' }];

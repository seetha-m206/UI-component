import type { PreviewFixture, PropSchemaField } from '../types';
import type { AuditLoadingState } from '../se-ranking-controls/SeRankingControls';
type Props = { initialState?: AuditLoadingState };
export const fixtures: PreviewFixture<Props>[] = [
  { id: 'launch', title: 'Observed launch confirmation', props: { initialState: 'launch' } },
  { id: 'progress', title: 'Observed audit progress', props: { initialState: 'progress' } },
  {
    id: 'retry-unavailable',
    title: 'Observed Retry boundary',
    props: { initialState: 'retry-unavailable' },
  },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'launch' | 'progress' | 'retry-unavailable'",
    required: false,
    description: 'Shows an observed manual-audit launch, progress, or Retry boundary state.',
  },
];

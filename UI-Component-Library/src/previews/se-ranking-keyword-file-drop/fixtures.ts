import type { PreviewFixture, PropSchemaField } from '../types';
import type { DropState } from '../se-ranking-controls/SeRankingControls';
type Props = { initialState?: DropState };
export const fixtures: PreviewFixture<Props>[] = [
  { id: 'empty', title: 'Observed empty upload', props: {} },
  { id: 'selected', title: 'Observed selected file', props: { initialState: 'selected' } },
  { id: 'success', title: 'Observed import success', props: { initialState: 'success' } },
  {
    id: 'duplicate',
    title: 'Observed duplicate confirmation',
    props: { initialState: 'duplicate' },
  },
  {
    id: 'invalid-type',
    title: 'Observed accepted-file restriction',
    props: { initialState: 'invalid-type' },
  },
  { id: 'disabled', title: 'Disabled controls', props: { initialState: 'disabled' } },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: "'empty' | 'selected' | 'success' | 'duplicate' | 'invalid-type' | 'disabled'",
    required: false,
    description: 'Starts the upload form in a live-observed or disabled fixture state.',
  },
];

import type { PreviewFixture, PropSchemaField } from '../types';
import type { SeRankingKeywordResearchEntryProps } from './SeRankingKeywordResearchEntry';
export const fixtures: PreviewFixture<SeRankingKeywordResearchEntryProps>[] = [
  { id: 'default', title: 'Observed keyword research entry', props: { initialState: 'default' } },
  { id: 'survey', title: 'Observed entry with survey dialog', props: { initialState: 'survey-open' } },
  { id: 'toast', title: 'Observed entry with audit toast', props: { initialState: 'toast-open' } },
  { id: 'disabled', title: 'Synthetic disabled controls', props: { initialState: 'disabled', disabled: true } },
];
export const propsSchema: PropSchemaField[] = [
  { name: 'initialState', type: "'default' | 'survey-open' | 'toast-open' | 'disabled'", required: false, description: 'Starts the local screen in an observed or clearly synthetic state.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables local keyword controls.' },
];

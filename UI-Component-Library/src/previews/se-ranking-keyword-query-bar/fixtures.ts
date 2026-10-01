import type { PreviewFixture, PropSchemaField } from '../types';
import type { SeRankingKeywordQueryBarProps } from './SeRankingKeywordQueryBar';
export const fixtures: PreviewFixture<SeRankingKeywordQueryBarProps>[] = [
  { id: 'empty', title: 'Observed empty query', props: { initialState: 'default' } },
  { id: 'dropdown', title: 'Reconstructed database dropdown · needs verification', props: { initialState: 'dropdown-open' } },
  { id: 'disabled', title: 'Synthetic disabled control', props: { initialState: 'disabled', disabled: true } },
];
export const propsSchema: PropSchemaField[] = [
  { name: 'initialState', type: "'default' | 'dropdown-open' | 'disabled'", required: false, description: 'Starts the control in an observed or reconstructed state.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables the local control.' },
];

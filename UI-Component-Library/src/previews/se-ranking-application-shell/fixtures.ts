import type { PreviewFixture, PropSchemaField } from '../types';
import type { SeRankingApplicationShellProps } from './SeRankingApplicationShell';
export const fixtures: PreviewFixture<SeRankingApplicationShellProps>[] = [
  { id: 'default', title: 'Observed authenticated shell', props: { initialState: 'default' } },
  { id: 'toast', title: 'Observed shell with audit toast', props: { initialState: 'toast-open' } },
];
export const propsSchema: PropSchemaField[] = [{ name: 'initialState', type: "'default' | 'toast-open'", required: false, description: 'Selects an observed shell state.' }];

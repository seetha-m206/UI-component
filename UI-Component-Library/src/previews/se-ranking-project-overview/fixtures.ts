import type { PreviewFixture, PropSchemaField } from '../types';
import type { SeRankingProjectOverviewProps } from './SeRankingProjectOverview';
export const fixtures: PreviewFixture<SeRankingProjectOverviewProps>[] = [
  { id: 'default', title: 'Observed project overview', props: { initialState: 'default' } },
  { id: 'loading', title: 'Observed website-audit loading state', props: { initialState: 'loading' } },
  { id: 'toast', title: 'Observed audit-complete notification', props: { initialState: 'toast-open' } },
];
export const propsSchema: PropSchemaField[] = [{ name: 'initialState', type: "'default' | 'loading' | 'toast-open'", required: false, description: 'Starts the workspace in an observed overview state.' }];

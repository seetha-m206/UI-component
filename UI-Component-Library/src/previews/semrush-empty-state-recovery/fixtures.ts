import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushEmptyStateRecoveryProps } from './SemrushEmptyStateRecovery';
export const propsSchema: PropSchemaField[] = [
  { name: 'variant', type: "'search' | 'hidden' | 'country'", required: false, description: 'Observed empty-state context.' },
  { name: 'query', type: 'string', required: false, description: 'Synthetic query echoed in search state.' },
  { name: 'recoverable', type: 'boolean', required: false, description: 'Shows a reversible recovery action.' },
];
export const fixtures: PreviewFixture<SemrushEmptyStateRecoveryProps>[] = [
  { id: 'search', title: 'Search no results', props: { variant: 'search' } },
  { id: 'hidden', title: 'No hidden issues', props: { variant: 'hidden' } },
  { id: 'country', title: 'Country no data', props: { variant: 'country' } },
  { id: 'no-action', title: 'Informational only', props: { variant: 'hidden', recoverable: false } },
];

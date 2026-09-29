import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushReportTabsProps } from './SemrushReportTabs';
export const propsSchema: PropSchemaField[] = [
  { name: 'kind', type: "'site-audit' | 'visibility' | 'metric'", required: false, description: 'Observed tab family.' },
  { name: 'initialTab', type: 'string', required: false, description: 'Initially selected tab.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables tab changes.' },
];
export const fixtures: PreviewFixture<SemrushReportTabsProps>[] = [
  { id: 'site-audit', title: 'Site Audit reports', props: { kind: 'site-audit', initialTab: 'Issues' } },
  { id: 'visibility', title: 'Visibility datasets', props: { kind: 'visibility' } },
  { id: 'metric', title: 'Metric tabs', props: { kind: 'metric' } },
];

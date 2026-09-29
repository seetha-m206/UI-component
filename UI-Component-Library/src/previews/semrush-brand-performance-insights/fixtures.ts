import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushBrandPerformanceInsightsProps } from './SemrushBrandPerformanceInsights';
export const propsSchema: PropSchemaField[] = [
  { name: 'brandName', type: 'string', required: false, description: 'Synthetic brand label.' },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables report controls.' },
];
export const fixtures: PreviewFixture<SemrushBrandPerformanceInsightsProps>[] = [
  { id: 'default', title: 'Brand report', props: {} },
  { id: 'alternate', title: 'Alternate brand', props: { brandName: 'Harbor' } },
];

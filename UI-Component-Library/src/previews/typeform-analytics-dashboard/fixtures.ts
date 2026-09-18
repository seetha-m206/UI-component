import type { PreviewFixture, PropSchemaField } from '../types';
import { DEFAULT_KPI_DATA, type TypeformAnalyticsDashboardProps } from './TypeformAnalyticsDashboard';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialTab',
    type: "'smart-insights' | 'form-performance' | 'response-summary' | 'responses'",
    required: false,
    description: "Which of the 4 tabs starts active. Defaults to 'form-performance'.",
  },
  {
    name: 'initialDateRange',
    type: "'all-time' | 'today' | 'last-week' | 'last-month' | 'last-year'",
    required: false,
    description: "Which date-range preset starts selected. Defaults to 'all-time'.",
  },
  {
    name: 'kpiData',
    type: 'Record<DateRangeId, KpiRangeData>',
    required: false,
    description:
      'Per-date-range KPI figures (views/starts/submissions/completionRate/timeToComplete). Defaults to the real captured 8/5/2/40%/00:16 figures for all-time/last-week/last-month/last-year, zeroed for today. Switching ranges re-reads this map synchronously client-side — no network round-trip, no loading state.',
  },
  {
    name: 'initialResponseView',
    type: "'table' | 'horizontal' | 'vertical'",
    required: false,
    description: "Which view mode the Response summary tab's chart starts in. Defaults to 'table'.",
  },
];

/**
 * Deterministic synthetic data only — no real account/form content. Each
 * fixture is a starting point for the interactive preview harness; tabs,
 * the date-range control, and the response-summary view toggle can all
 * still be driven live once a fixture is selected.
 */
export const fixtures: PreviewFixture<TypeformAnalyticsDashboardProps>[] = [
  {
    id: 'form-performance-default',
    title: 'Form performance — All time (default)',
    props: {
      initialTab: 'form-performance',
      initialDateRange: 'all-time',
    },
  },
  {
    id: 'form-performance-today',
    title: 'Form performance — Today (zero activity)',
    props: {
      initialTab: 'form-performance',
      initialDateRange: 'today',
    },
  },
  {
    id: 'response-summary-table',
    title: 'Response summary — Table view',
    props: {
      initialTab: 'response-summary',
      initialResponseView: 'table',
    },
  },
  {
    id: 'response-summary-chart',
    title: 'Response summary — Chart view (vertical)',
    props: {
      initialTab: 'response-summary',
      initialResponseView: 'vertical',
    },
  },
  {
    id: 'smart-insights',
    title: 'Smart Insights (paywalled)',
    props: {
      initialTab: 'smart-insights',
    },
  },
];

export { DEFAULT_KPI_DATA };

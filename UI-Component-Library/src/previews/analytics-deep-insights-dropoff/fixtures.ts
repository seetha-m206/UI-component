import type { PreviewFixture, PropSchemaField } from '../types';
import type { AnalyticsDeepInsightsDropoffProps } from './AnalyticsDeepInsightsDropoff';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'fields',
    type: 'FieldMetricDatum[]',
    required: true,
    description:
      'Every field on the form: { id, label, clicks, starts, dropoffs }. Drives both the Field Metrics tab (clicks/starts bars) and the Drop-off Count tab (dropoffs bar, pink/red-tinted rows).',
  },
  {
    name: 'pages',
    type: 'PageMetricDatum[]',
    required: false,
    description:
      'Per-page view counts: { id, label, views }. Drives the Page Metrics tab. Omit (or pass []) for a single-page form.',
  },
  {
    name: 'isSinglePage',
    type: 'boolean',
    required: false,
    description:
      'Forces the documented "No data available." empty state on Page Metrics. If omitted, derived from `pages`: true when `pages` is missing or empty.',
  },
  {
    name: 'periodLabel',
    type: 'string',
    required: false,
    description:
      'Display-only period label in the shared selector, e.g. "Sep 2026". Defaults to "Sep 2026".',
  },
  {
    name: 'onPeriodChange',
    type: "(direction: 'prev' | 'next') => void",
    required: false,
    description:
      'Called when the prev/next period control is used. No live data source backs this reconstruction, so this is a decorative/no-op hook by default — see README.',
  },
];

function fields(
  rows: Array<[string, number, number, number]>
): AnalyticsDeepInsightsDropoffProps['fields'] {
  return rows.map(([label, clicks, starts, dropoffs], i) => ({
    id: `field-${i}`,
    label,
    clicks,
    starts,
    dropoffs,
  }));
}

function pages(
  rows: Array<[string, number]>
): NonNullable<AnalyticsDeepInsightsDropoffProps['pages']> {
  return rows.map(([label, views], i) => ({ id: `page-${i}`, label, views }));
}

/**
 * Deterministic synthetic data only — no real form/account content. The
 * seven-field list mirrors the record's own tested form (Single Line,
 * Decision Box, Dropdown, Rating, File Upload, Yes/No, Subform).
 */
export const fixtures: PreviewFixture<AnalyticsDeepInsightsDropoffProps>[] = [
  {
    id: 'populated',
    title: 'Populated (multi-field data)',
    props: {
      periodLabel: 'Sep 2026',
      fields: fields([
        ['Single Line', 142, 98, 12],
        ['Decision Box', 88, 61, 9],
        ['Dropdown', 76, 52, 6],
        ['Rating', 54, 40, 4],
        ['File Upload', 39, 22, 15],
        ['Yes/No', 31, 25, 2],
        ['Subform', 18, 10, 8],
      ]),
      pages: pages([
        ['Page 1', 120],
        ['Page 2', 88],
        ['Page 3', 61],
      ]),
      isSinglePage: false,
    },
  },
  {
    id: 'freshly-enabled-zeros',
    title: 'Freshly enabled (all zeros, no backfill)',
    props: {
      periodLabel: 'Sep 2026',
      fields: fields([
        ['Single Line', 0, 0, 0],
        ['Decision Box', 0, 0, 0],
        ['Dropdown', 0, 0, 0],
        ['Rating', 0, 0, 0],
        ['File Upload', 0, 0, 0],
        ['Yes/No', 0, 0, 0],
        ['Subform', 0, 0, 0],
      ]),
      pages: pages([['Page 1', 0]]),
      isSinglePage: false,
    },
  },
  {
    id: 'single-page-form',
    title: 'Single-page form (Page Metrics empty state)',
    props: {
      periodLabel: 'Sep 2026',
      fields: fields([
        ['Single Line', 45, 30, 5],
        ['Email', 40, 28, 3],
        ['Submit Button', 25, 25, 0],
      ]),
      pages: [],
      isSinglePage: true,
    },
  },
  {
    id: 'high-attrition',
    title: 'High attrition (Drop-off Count heavy)',
    props: {
      periodLabel: 'Oct 2026',
      fields: fields([
        ['Single Line', 210, 205, 8],
        ['File Upload', 190, 150, 96],
        ['Long Address Block', 160, 120, 74],
        ['Payment Details', 140, 90, 88],
        ['Submit Button', 40, 38, 1],
      ]),
      pages: pages([
        ['Page 1', 210],
        ['Page 2', 150],
        ['Page 3', 60],
      ]),
      isSinglePage: false,
    },
  },
];

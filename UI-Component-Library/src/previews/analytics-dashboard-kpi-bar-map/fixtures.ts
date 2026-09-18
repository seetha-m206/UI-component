import type { PreviewFixture, PropSchemaField } from '../types';
import type { AnalyticsDashboardKpiBarMapProps } from './AnalyticsDashboardKpiBarMap';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'data',
    type: 'AnalyticsDashboardData',
    required: true,
    description:
      'periodLabel, kpis (formViews/starts/submissions/errorScore/conversionRate), a sparse days array ({day, count}, only nonzero days need to be present), daysInPeriod (dense grid size the bar chart renders), and a regions array ({region, label, count, percent}).',
  },
  {
    name: 'advancedMetricsEnabled',
    type: 'boolean',
    required: false,
    description:
      'When false (default), the "Starts" KPI card is blurred with a lock overlay, matching the observed Advanced-Metrics gate. When true, the real value is shown.',
  },
  {
    name: 'isEmpty',
    type: 'boolean',
    required: false,
    description:
      'Forces the documented empty state (bar chart markup swapped for a "No data available" placeholder). If omitted, it is derived from the data: true when formViews is 0 and every day count is 0.',
  },
];

/**
 * Deterministic synthetic data only — no real form/account content. Day
 * counts are intentionally sparse (only nonzero days listed) to exercise the
 * documented client-side dense-grid fill; daysInPeriod is kept small (7-10)
 * for a readable preview rather than a full calendar month.
 */
export const fixtures: PreviewFixture<AnalyticsDashboardKpiBarMapProps>[] = [
  {
    id: 'normal',
    title: 'Populated dashboard',
    props: {
      data: {
        periodLabel: 'Sep 2026',
        kpis: {
          formViews: 142,
          starts: 98,
          submissions: 61,
          errorScore: 4.2,
          conversionRate: 43.0,
        },
        daysInPeriod: 10,
        days: [
          { day: 1, count: 6 },
          { day: 2, count: 9 },
          { day: 3, count: 4 },
          { day: 5, count: 10 },
          { day: 6, count: 7 },
          { day: 8, count: 3 },
          { day: 9, count: 8 },
          { day: 10, count: 5 },
        ],
        regions: [
          { region: 'asia', label: 'Asia', count: 71, percent: 50.0 },
          { region: 'north_america', label: 'North America', count: 43, percent: 30.3 },
          { region: 'europe', label: 'Europe', count: 18, percent: 12.7 },
          { region: 'south_america', label: 'South America', count: 6, percent: 4.2 },
          { region: 'oceania', label: 'Oceania', count: 3, percent: 2.1 },
          { region: 'africa', label: 'Africa', count: 1, percent: 0.7 },
          { region: 'others', label: 'Others', count: 0, percent: 0.0 },
        ],
      },
      advancedMetricsEnabled: false,
    },
  },
  {
    id: 'zero-activity',
    title: 'Zero-activity period (empty state)',
    props: {
      data: {
        periodLabel: 'Aug 2026',
        kpis: {
          formViews: 0,
          starts: 0,
          submissions: 0,
          errorScore: 0,
          conversionRate: 0,
        },
        daysInPeriod: 10,
        days: [],
        regions: [
          { region: 'asia', label: 'Asia', count: 0, percent: 0 },
          { region: 'north_america', label: 'North America', count: 0, percent: 0 },
          { region: 'europe', label: 'Europe', count: 0, percent: 0 },
          { region: 'south_america', label: 'South America', count: 0, percent: 0 },
          { region: 'oceania', label: 'Oceania', count: 0, percent: 0 },
          { region: 'africa', label: 'Africa', count: 0, percent: 0 },
          { region: 'others', label: 'Others', count: 0, percent: 0 },
        ],
      },
      advancedMetricsEnabled: false,
    },
  },
  {
    id: 'advanced-metrics-locked',
    title: 'Advanced Metrics locked (Starts blurred)',
    props: {
      data: {
        periodLabel: 'Sep 2026',
        kpis: {
          formViews: 58,
          starts: 40,
          submissions: 12,
          errorScore: 9.8,
          conversionRate: 20.7,
        },
        daysInPeriod: 7,
        days: [
          { day: 1, count: 2 },
          { day: 3, count: 5 },
          { day: 4, count: 1 },
          { day: 7, count: 3 },
        ],
        regions: [
          { region: 'europe', label: 'Europe', count: 30, percent: 51.7 },
          { region: 'north_america', label: 'North America', count: 20, percent: 34.5 },
          { region: 'asia', label: 'Asia', count: 8, percent: 13.8 },
        ],
      },
      advancedMetricsEnabled: false,
    },
  },
  {
    id: 'advanced-metrics-unlocked',
    title: 'Advanced Metrics unlocked (Starts visible)',
    props: {
      data: {
        periodLabel: 'Sep 2026',
        kpis: {
          formViews: 58,
          starts: 40,
          submissions: 12,
          errorScore: 9.8,
          conversionRate: 20.7,
        },
        daysInPeriod: 7,
        days: [
          { day: 1, count: 2 },
          { day: 3, count: 5 },
          { day: 4, count: 1 },
          { day: 7, count: 3 },
        ],
        regions: [
          { region: 'europe', label: 'Europe', count: 30, percent: 51.7 },
          { region: 'north_america', label: 'North America', count: 20, percent: 34.5 },
          { region: 'asia', label: 'Asia', count: 8, percent: 13.8 },
        ],
      },
      advancedMetricsEnabled: true,
    },
  },
  {
    id: 'different-region-distribution',
    title: 'Different region distribution (Americas-heavy)',
    props: {
      data: {
        periodLabel: 'Oct 2026',
        kpis: {
          formViews: 310,
          starts: 240,
          submissions: 205,
          errorScore: 1.6,
          conversionRate: 66.1,
        },
        daysInPeriod: 9,
        days: [
          { day: 1, count: 10 },
          { day: 2, count: 10 },
          { day: 3, count: 9 },
          { day: 4, count: 10 },
          { day: 5, count: 8 },
          { day: 6, count: 10 },
          { day: 7, count: 9 },
          { day: 8, count: 10 },
          { day: 9, count: 7 },
        ],
        regions: [
          { region: 'north_america', label: 'North America', count: 186, percent: 60.0 },
          { region: 'south_america', label: 'South America', count: 68, percent: 21.9 },
          { region: 'europe', label: 'Europe', count: 34, percent: 11.0 },
          { region: 'asia', label: 'Asia', count: 15, percent: 4.8 },
          { region: 'oceania', label: 'Oceania', count: 5, percent: 1.6 },
          { region: 'africa', label: 'Africa', count: 2, percent: 0.7 },
        ],
      },
      advancedMetricsEnabled: true,
    },
  },
  {
    id: 'high-volume',
    title: 'High-volume day (bar scaling above the default axis)',
    props: {
      data: {
        periodLabel: 'Nov 2026',
        kpis: {
          formViews: 512,
          starts: 470,
          submissions: 398,
          errorScore: 0.9,
          conversionRate: 77.7,
        },
        daysInPeriod: 8,
        days: [
          { day: 1, count: 3 },
          { day: 2, count: 6 },
          { day: 3, count: 14 },
          { day: 4, count: 9 },
          { day: 5, count: 2 },
          { day: 6, count: 18 },
          { day: 7, count: 4 },
        ],
        regions: [
          { region: 'asia', label: 'Asia', count: 300, percent: 58.6 },
          { region: 'north_america', label: 'North America', count: 150, percent: 29.3 },
          { region: 'europe', label: 'Europe', count: 62, percent: 12.1 },
        ],
      },
      advancedMetricsEnabled: true,
    },
  },
];

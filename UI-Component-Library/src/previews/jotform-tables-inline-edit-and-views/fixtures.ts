import type { PreviewFixture, PropSchemaField } from '../types';
import type { JotformTablesInlineEditAndViewsProps } from './JotformTablesInlineEditAndViews';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialView',
    type: "'table' | 'calendar' | 'boards'",
    required: false,
    description: 'Which view tab is active on first render. Defaults to \'table\'.',
  },
  {
    name: 'rows',
    type: 'TableRowData[]',
    required: false,
    description:
      'Row data. Defaults to the 3 real confirmed test-submission rows from the source record (Cappuccino/Espresso/Iced Latte).',
  },
  {
    name: 'label',
    type: 'string',
    required: false,
    description: "The workspace's accessible label.",
  },
];

export const fixtures: PreviewFixture<JotformTablesInlineEditAndViewsProps>[] = [
  {
    id: 'table-view',
    title: 'Table view (default)',
    props: {
      initialView: 'table',
    },
  },
  {
    id: 'calendar-view',
    title: 'Calendar view',
    props: {
      initialView: 'calendar',
    },
  },
  {
    id: 'boards-view',
    title: 'Boards view (grouped by Visit Frequency)',
    props: {
      initialView: 'boards',
    },
  },
];

import type { PreviewFixture, PropSchemaField } from '../types';
import type { EntriesKanbanViewProps, KanbanColumn } from './EntriesKanbanView';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'columns',
    type: 'KanbanColumn[]',
    required: true,
    description:
      'One column per option of the grouping field chosen in the setup modal (e.g. "First Choice"/"Second Choice"/"Third Choice"), each with a colorIndex (1-3) cycling through the header palette.',
  },
  {
    name: 'cards',
    type: 'KanbanCard[]',
    required: true,
    description:
      "Entries rendered as cards, each assigned to a columnId. title reconstructs the grouping field's own value text (em.kanbanCardName); fields holds the up-to-4 extra fields configured to show on the card.",
  },
  {
    name: 'onMoveCard',
    type: '(cardId: string, newColumnId: string) => void',
    required: false,
    description:
      'Called when a card is regrouped via its "Move to…" control — the accessible substitute for the source\'s unverified drag-and-drop (see README).',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Disables every card\'s "Move to…" control, e.g. for a read-only Kanban view. Defaults to false.',
  },
];

const STANDARD_COLUMNS: KanbanColumn[] = [
  { id: 'first-choice', name: 'First Choice', colorIndex: 1 },
  { id: 'second-choice', name: 'Second Choice', colorIndex: 2 },
  { id: 'third-choice', name: 'Third Choice', colorIndex: 3 },
];

/**
 * Deterministic synthetic data only — no real entry content. Grouping field
 * and column names ("First Choice"/"Second Choice"/"Third Choice") match the
 * source record's own test-form example. Each fixture is a starting point
 * for the interactive preview harness: cards can still be moved live via
 * each card's "Move to…" control once a fixture is selected.
 */
export const fixtures: PreviewFixture<EntriesKanbanViewProps>[] = [
  {
    id: 'spread',
    title: 'Default — cards spread across columns',
    props: {
      columns: STANDARD_COLUMNS,
      cards: [
        {
          id: 'entry-1',
          columnId: 'first-choice',
          title: 'First Choice',
          fields: [{ label: 'Single Line', value: 'Ananya Rao' }],
        },
        {
          id: 'entry-2',
          columnId: 'second-choice',
          title: 'Second Choice',
          fields: [{ label: 'Single Line', value: 'Devesh Patel' }],
        },
        {
          id: 'entry-3',
          columnId: 'third-choice',
          title: 'Third Choice',
          fields: [{ label: 'Single Line', value: 'Meera Iyer' }],
        },
      ],
      disabled: false,
    },
  },
  {
    id: 'empty-column',
    title: 'One column empty ("No Entries" placeholder)',
    props: {
      columns: STANDARD_COLUMNS,
      cards: [
        {
          id: 'entry-1',
          columnId: 'first-choice',
          title: 'First Choice',
          fields: [{ label: 'Single Line', value: 'Ananya Rao' }],
        },
        {
          id: 'entry-2',
          columnId: 'first-choice',
          title: 'First Choice',
          fields: [{ label: 'Single Line', value: 'Karthik Nair' }],
        },
        {
          id: 'entry-3',
          columnId: 'third-choice',
          title: 'Third Choice',
          fields: [{ label: 'Single Line', value: 'Meera Iyer' }],
        },
      ],
      disabled: false,
    },
  },
  {
    id: 'all-empty',
    title: 'Fresh Kanban — no entries yet',
    props: {
      columns: STANDARD_COLUMNS,
      cards: [],
      disabled: false,
    },
  },
  {
    id: 'single-column-full',
    title: 'One column full, others empty',
    props: {
      columns: STANDARD_COLUMNS,
      cards: [
        {
          id: 'entry-1',
          columnId: 'first-choice',
          title: 'First Choice',
          fields: [{ label: 'Single Line', value: 'Ananya Rao' }],
        },
        {
          id: 'entry-2',
          columnId: 'first-choice',
          title: 'First Choice',
          fields: [{ label: 'Single Line', value: 'Karthik Nair' }],
        },
        {
          id: 'entry-3',
          columnId: 'first-choice',
          title: 'First Choice',
          fields: [{ label: 'Single Line', value: 'Meera Iyer' }],
        },
      ],
      disabled: false,
    },
  },
  {
    id: 'multi-field-card',
    title: 'Card with multiple configured fields',
    props: {
      columns: STANDARD_COLUMNS,
      cards: [
        {
          id: 'entry-1',
          columnId: 'second-choice',
          title: 'Second Choice',
          fields: [
            { label: 'Single Line', value: 'Devesh Patel' },
            { label: 'Email', value: 'devesh.patel@example.com' },
            { label: 'Phone', value: '+91 98765 43210' },
            { label: 'Department', value: 'Customer Success' },
          ],
        },
      ],
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled — read-only Kanban',
    props: {
      columns: STANDARD_COLUMNS,
      cards: [
        {
          id: 'entry-1',
          columnId: 'first-choice',
          title: 'First Choice',
          fields: [{ label: 'Single Line', value: 'Ananya Rao' }],
        },
        {
          id: 'entry-2',
          columnId: 'second-choice',
          title: 'Second Choice',
          fields: [{ label: 'Single Line', value: 'Devesh Patel' }],
        },
      ],
      disabled: true,
    },
  },
];

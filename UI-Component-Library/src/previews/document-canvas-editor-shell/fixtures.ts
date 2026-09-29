import type { PreviewFixture, PropSchemaField } from '../types';
import type { DocumentBlock, DocumentCanvasEditorShellProps } from './DocumentCanvasEditorShell';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialBlocks',
    type: 'DocumentBlock[]',
    required: false,
    description:
      'Starting document content as a flat list of prose/card/placeholder/pagebreak blocks. Defaults to a short 2-block welcome document.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Disables every control: typing, the "/" and "+" insert menus, card editing, reordering, and deletion. Defaults to false.',
  },
  {
    name: 'onBlocksChange',
    type: '(blocks: DocumentBlock[]) => void',
    required: false,
    description: 'Fired with the full block list on every change (edit, insert, reorder, delete).',
  },
];

function proseBlock(id: string, text: string): DocumentBlock {
  return { id, kind: 'prose', text };
}

function cardBlock(id: string, questionType: string, title: string, helpText = ''): DocumentBlock {
  return { id, kind: 'card', questionType, title, helpText };
}

/**
 * Deterministic synthetic data only — no real form content. Each fixture is
 * a starting point for the interactive harness: typing "/", inserting via
 * the "+" gutter, reordering, editing, and deleting can all still be
 * operated live once a fixture is selected.
 */
export const fixtures: PreviewFixture<DocumentCanvasEditorShellProps>[] = [
  {
    id: 'empty-document',
    title: 'Empty document — try typing "/" on the blank line',
    props: {
      initialBlocks: [
        proseBlock('fx-empty-prose-1', 'Welcome! A few quick questions before we start.'),
        proseBlock('fx-empty-prose-2', ''),
      ],
    },
  },
  {
    id: 'mixed-document',
    title: 'Mixed document — prose, question cards, and a page break',
    props: {
      initialBlocks: [
        proseBlock('fx-mixed-prose-1', 'Thanks for stopping by! Let’s get started.'),
        cardBlock('fx-mixed-card-1', 'Yes/No', 'Excited to get started?'),
        proseBlock('fx-mixed-prose-2', 'Great! Now a couple of details.'),
        cardBlock('fx-mixed-card-2', 'Text', 'What should we call you?', 'First name is fine.'),
        { id: 'fx-mixed-break-1', kind: 'pagebreak' },
        cardBlock('fx-mixed-card-3', 'Rating', 'How would you rate this so far?'),
        proseBlock('fx-mixed-prose-3', ''),
      ],
    },
  },
  {
    id: 'reorder-demo',
    title: 'Reorder demo — three cards, ready for Move up/down',
    props: {
      initialBlocks: [
        cardBlock('fx-reorder-card-1', 'Text', 'Question one'),
        cardBlock('fx-reorder-card-2', 'Text', 'Question two'),
        cardBlock('fx-reorder-card-3', 'Text', 'Question three'),
      ],
    },
  },
  {
    id: 'save-status-bug-demo',
    title: 'Save-status bug demo — insert a card, watch the misleading label',
    props: {
      initialBlocks: [
        proseBlock('fx-bug-prose-1', 'This fixture demonstrates the confirmed save-status bug.'),
        proseBlock('fx-bug-prose-2', ''),
      ],
    },
  },
  {
    id: 'disabled',
    title: 'Disabled — read-only document',
    props: {
      initialBlocks: [
        proseBlock('fx-disabled-prose-1', 'This document is read-only.'),
        cardBlock('fx-disabled-card-1', 'Yes/No', 'Can you edit this?'),
      ],
      disabled: true,
    },
  },
];

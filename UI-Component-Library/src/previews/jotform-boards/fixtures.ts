import type { PreviewFixture, PropSchemaField } from '../types';
import type { JotformBoardsProps } from './JotformBoards';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialMode',
    type: '"create" | "workflow"',
    required: false,
    description:
      'Which entry point this preview starts on: "create" reconstructs "+ CREATE → Board → Start from scratch" (a generic 4-column task board); "workflow" reconstructs the Workflow Builder\'s mode-switcher "Boards" entry (an auto-scoped, single-column run tracker). Defaults to "create". The preview is self-contained/uncontrolled after mount — the in-preview toggle switches modes locally regardless of this starting value.',
  },
];

/**
 * Deterministic synthetic data only — no real JotForm board content. The
 * generic board's columns (Backlog/Waiting/In Progress/Done) and the
 * workflow board's single "Completed" column plus "0 runs" counter match
 * the source record's own confirmed structure (Behavior & States finding
 * 3). Demo task cards are illustrative stand-ins for the record's
 * "onboarding-tip cards" — not a transcription of their exact text.
 */
export const fixtures: PreviewFixture<JotformBoardsProps>[] = [
  {
    id: 'generic-create',
    title: 'Generic board (+ CREATE)',
    props: {
      initialMode: 'create',
    },
  },
  {
    id: 'workflow-scoped',
    title: 'Workflow-scoped board (mode-switcher)',
    props: {
      initialMode: 'workflow',
    },
  },
];

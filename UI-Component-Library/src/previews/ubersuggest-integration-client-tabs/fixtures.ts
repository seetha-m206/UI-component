import type { PreviewFixture, PropSchemaField } from '../types';
import type { RemainingProps } from '../ubersuggest-remaining/Remaining';
export const fixtures: PreviewFixture<RemainingProps>[] = [
  {
    id: 'state-0',
    title: 'Observed Claude state \u00b7 fictional values',
    props: {
      initialState: 'Claude',
    },
  },
  {
    id: 'state-1',
    title: 'Observed Claude Code state \u00b7 fictional values',
    props: {
      initialState: 'Claude Code',
    },
  },
  {
    id: 'state-2',
    title: 'Observed Cursor state \u00b7 fictional values',
    props: {
      initialState: 'Cursor',
    },
  },
  {
    id: 'state-3',
    title: 'Observed Codex state \u00b7 fictional values',
    props: {
      initialState: 'Codex',
    },
  },
  {
    id: 'state-4',
    title: 'Observed Windsurf state \u00b7 fictional values',
    props: {
      initialState: 'Windsurf',
    },
  },
  {
    id: 'state-5',
    title: 'Observed Other state \u00b7 fictional values',
    props: {
      initialState: 'Other',
    },
  },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialState',
    type: 'string',
    required: false,
    description: 'Observed opening state with fictional values. No provider request is possible.',
  },
];

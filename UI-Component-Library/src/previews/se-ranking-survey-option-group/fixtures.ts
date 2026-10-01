import type { PreviewFixture, PropSchemaField } from '../types';
type Props = { initialSelection?: string; disabled?: boolean };
export const fixtures: PreviewFixture<Props>[] = [
  { id: 'empty', title: 'Observed no selection', props: {} },
  { id: 'selected', title: 'Observed selected option', props: { initialSelection: 'Other' } },
  { id: 'disabled', title: 'Disabled group', props: { disabled: true } },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialSelection',
    type: 'string',
    required: false,
    description: 'Sets a local option to a live-observed selection.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables all local options.',
  },
];

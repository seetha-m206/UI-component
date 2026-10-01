import type { PreviewFixture, PropSchemaField } from '../types';
type Props = { hasSelection?: boolean; disabled?: boolean; persistedDismissal?: boolean };
export const fixtures: PreviewFixture<Props>[] = [
  { id: 'observed', title: 'Observed action state', props: {} },
  { id: 'selected', title: 'Observed selected-response actions', props: { hasSelection: true } },
  {
    id: 'persisted',
    title: 'Observed persisted completion boundary',
    props: { persistedDismissal: true },
  },
  { id: 'disabled', title: 'Disabled actions', props: { disabled: true } },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'hasSelection',
    type: 'boolean',
    required: false,
    description: 'Shows the live-observed selected-response copy.',
  },
  {
    name: 'persistedDismissal',
    type: 'boolean',
    required: false,
    description: 'Shows that the completed survey remained unavailable after reload.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables both local actions.',
  },
];

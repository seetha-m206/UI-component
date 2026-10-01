import type { PreviewFixture, PropSchemaField } from '../types';

type Props = {
  initialScope?: 'Current' | 'Fixed' | 'New' | 'All tracked' | 'Turned off';
};

export const fixtures: PreviewFixture<Props>[] = [
  { id: 'observed', title: 'Observed issue report', props: {} },
  { id: 'new', title: 'New issue scope', props: { initialScope: 'New' } },
];

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialScope',
    type: "'Current' | 'Fixed' | 'New' | 'All tracked' | 'Turned off'",
    required: false,
    description: 'Starts the local report with one observed issue-scope tab selected.',
  },
];

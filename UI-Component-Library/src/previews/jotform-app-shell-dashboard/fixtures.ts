import type { PreviewFixture, PropSchemaField } from '../types';
import type { JotformAppShellDashboardProps } from './JotformAppShellDashboard';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
  {
    name: 'onSectionChange',
    type: "(section: 'all' | 'shared' | 'assigned' | 'sent' | 'continue') => void",
    required: false,
    description: 'Called when a sidebar nav item is selected.',
  },
  {
    name: 'onCreateOpen',
    type: '() => void',
    required: false,
    description: 'Called when the "+ CREATE" button or the Products nav item is used.',
  },
  {
    name: 'onSelectionChange',
    type: '(selected: boolean) => void',
    required: false,
    description: 'Called whenever the selection set changes from empty to non-empty or back — drives the toolbar-to-selection-bar swap.',
  },
];

export const fixtures: PreviewFixture<JotformAppShellDashboardProps>[] = [
  {
    id: 'default',
    title: 'Default — toolbar row, no selection',
    props: {
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled',
    props: {
      disabled: true,
    },
  },
];

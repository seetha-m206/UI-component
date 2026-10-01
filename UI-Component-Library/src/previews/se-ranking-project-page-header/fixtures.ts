import type { PreviewFixture, PropSchemaField } from '../types';
type Props = {
  initialMenuOpen?: boolean;
  initialWidgetOrder?: 'default' | 'content-before-insights';
};
export const fixtures: PreviewFixture<Props>[] = [
  { id: 'closed', title: 'Observed page header', props: {} },
  { id: 'open', title: 'Observed Widgets menu', props: { initialMenuOpen: true } },
  {
    id: 'reordered',
    title: 'Observed persisted reorder',
    props: { initialMenuOpen: true, initialWidgetOrder: 'content-before-insights' },
  },
];
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialMenuOpen',
    type: 'boolean',
    required: false,
    description: 'Starts the live-observed Widgets menu open.',
  },
  {
    name: 'initialWidgetOrder',
    type: "'default' | 'content-before-insights'",
    required: false,
    description: 'Starts with the live-observed persisted widget reorder state.',
  },
];

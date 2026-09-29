import type { PreviewFixture, PropSchemaField } from '../types';
import type { PaperformTooltipProps } from './PaperformTooltip';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
];

export const fixtures: PreviewFixture<PaperformTooltipProps>[] = [
  {
    id: 'default',
    title: 'Default — click either ⓘ icon to reveal its popover',
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

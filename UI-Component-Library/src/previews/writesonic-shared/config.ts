import type { PreviewConfig, PropSchemaField } from '../types';
export const previewConfig: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 960 },
    { id: 'tablet', label: 'Tablet', width: 680 },
    { id: 'mobile', label: 'Mobile', width: 390 },
  ],
  toggles: [
    {
      id: 'disabled',
      label: 'Local action state',
      onLabel: 'Disabled (simulated)',
      offLabel: 'Enabled',
    },
  ],
};
export const propsSchema: PropSchemaField[] = [
  {
    name: 'state',
    type: 'default | loading | empty | error | disabled',
    required: false,
    description: 'All non-default states are local simulations, not provider evidence.',
  },
  {
    name: 'initialPanel',
    type: 'Competitive analysis | Citations | Action items | Answers',
    required: false,
    description: 'Report step selected at mount.',
  },
  {
    name: 'initialExpanded',
    type: 'boolean',
    required: false,
    description: 'Starts the fictional answer expanded.',
  },
  {
    name: 'initialHelpOpen',
    type: 'boolean',
    required: false,
    description: 'Local explanatory tooltip. Provider open state unverified.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables navigation and guarded action controls locally.',
  },
];

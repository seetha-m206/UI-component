import type { PreviewFixture, PropSchemaField } from '../types';
import type { SemrushAiVisibilityShellProps } from './SemrushAiVisibilityShell';
export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialSection',
    type: "'overview' | 'competitors' | 'prompts' | 'brand'",
    required: false,
    description: 'Initial AI Toolkit workspace.',
  },
  { name: 'disabled', type: 'boolean', required: false, description: 'Disables shell controls.' },
  {
    name: 'onSectionChange',
    type: '(section) => void',
    required: false,
    description: 'Called after local section navigation.',
  },
];
export const fixtures: PreviewFixture<SemrushAiVisibilityShellProps>[] = [
  { id: 'overview', title: 'Visibility Overview', props: { initialSection: 'overview' } },
  { id: 'brand', title: 'Brand Performance', props: { initialSection: 'brand' } },
];

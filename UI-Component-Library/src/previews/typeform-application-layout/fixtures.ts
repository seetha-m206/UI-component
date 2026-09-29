import type { PreviewFixture, PropSchemaField } from '../types';
import type { TypeformApplicationLayoutProps } from './TypeformApplicationLayout';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialShell',
    type: "'workspace' | 'builder'",
    required: false,
    description:
      "Which of the two captured shells is shown first. Defaults to 'workspace'. Confirmed: the workspace and builder share only a top banner and the floating AI input — no single shell is reused across both.",
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
  {
    name: 'onShellChange',
    type: "(shell: 'workspace' | 'builder') => void",
    required: false,
    description: 'Called when navigating between the workspace and the form builder.',
  },
  {
    name: 'onWorkspaceTabChange',
    type: "(tab: 'forms' | 'contacts' | 'automations') => void",
    required: false,
    description:
      "Called when switching the workspace's primary tab bar. Each tab renders a genuinely different sidebar, confirmed live.",
  },
  {
    name: 'onBuilderTabChange',
    type: "(tab: 'content' | 'workflow' | 'connect') => void",
    required: false,
    description:
      'Called when switching the builder tab strip (real page navigation in the source, reproduced here as a state swap).',
  },
];

/**
 * Deterministic synthetic data only — the tab names, sidebar item labels,
 * and page names reuse the exact values captured in the source record's
 * live pass, not invented content.
 */
export const fixtures: PreviewFixture<TypeformApplicationLayoutProps>[] = [
  {
    id: 'workspace-forms',
    title: 'Workspace — Forms tab sidebar',
    props: {
      initialShell: 'workspace',
      disabled: false,
    },
  },
  {
    id: 'builder-content',
    title: 'Builder — Content tab, Pages rail + canvas + settings panel',
    props: {
      initialShell: 'builder',
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled shell',
    props: {
      initialShell: 'workspace',
      disabled: true,
    },
  },
];

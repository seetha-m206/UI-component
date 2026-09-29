import type { PreviewFixture, PropSchemaField } from '../types';
import type { GoogleFormsAppShellProps } from './GoogleFormsAppShell';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialScreen',
    type: "'dashboard' | 'builder'",
    required: false,
    description:
      "Which of the two captured screens is shown first. Defaults to 'dashboard'. Confirmed: the two screens ship genuinely distinct top bars, not one shell reused across both.",
  },
  {
    name: 'initialPublished',
    type: 'boolean',
    required: false,
    description:
      "Whether the form starts published — drives the builder header's conditional row-3 banner ('This form isn't accepting responses'). Defaults to true.",
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevents any interaction when true. Defaults to false.',
  },
  {
    name: 'onScreenChange',
    type: "(screen: 'dashboard' | 'builder') => void",
    required: false,
    description: 'Called when navigating between the dashboard and the builder.',
  },
  {
    name: 'onTabChange',
    type: "(tab: 'questions' | 'responses' | 'settings') => void",
    required: false,
    description:
      "Called when switching the builder's Questions/Responses/Settings tab strip (row 2 of the sticky header).",
  },
  {
    name: 'onPublishedChange',
    type: '(published: boolean) => void',
    required: false,
    description: 'Called when the Published/Unpublished pill or the banner\'s "Manage" link is used.',
  },
];

/**
 * Deterministic synthetic data only — the form titles, question copy, and
 * response count reuse the exact values captured in the source record's
 * live pass (5 responses, "Total points: 0" always visible regardless of
 * tab), not invented content.
 */
export const fixtures: PreviewFixture<GoogleFormsAppShellProps>[] = [
  {
    id: 'dashboard-default',
    title: 'Dashboard — no sidebar, flat template + Recent forms grid',
    props: {
      initialScreen: 'dashboard',
      initialPublished: true,
      disabled: false,
    },
  },
  {
    id: 'builder-published-questions',
    title: 'Builder — Questions tab, published',
    props: {
      initialScreen: 'builder',
      initialPublished: true,
      disabled: false,
    },
  },
  {
    id: 'builder-unpublished-banner',
    title: 'Builder — unpublished, row-3 banner visible',
    props: {
      initialScreen: 'builder',
      initialPublished: false,
      disabled: false,
    },
  },
  {
    id: 'builder-responses-tab',
    title: 'Builder — Responses tab, count badge',
    props: {
      initialScreen: 'builder',
      initialPublished: true,
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled shell',
    props: {
      initialScreen: 'builder',
      initialPublished: true,
      disabled: true,
    },
  },
];

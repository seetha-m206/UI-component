import type { PreviewConfig, PreviewRegistry } from '../types';
import { ClickupPreview, type ClickupVariant } from './ClickupPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, ClickupVariant, string]> = [
  ['clickup-application-shell', 'application-shell', 'Authenticated ClickUp application shell'],
  ['clickup-space-overview', 'space-overview', 'Space overview'],
  ['clickup-overview-card-grid', 'overview-card-grid', 'Overview card grid'],
  ['clickup-space-list', 'space-list', 'Empty Space list'],
  ['clickup-grouping-menu', 'grouping-menu', 'List grouping menu'],
  ['clickup-filter-builder', 'filter-builder', 'List filter builder'],
  ['clickup-space-board-empty', 'space-board-empty', 'Empty Space board'],
  ['clickup-timezone-suggestion', 'timezone-suggestion', 'Timezone suggestion dialog'],
  ['clickup-planner-onboarding', 'planner-onboarding', 'Planner onboarding'],
  ['clickup-my-tasks-dashboard', 'my-tasks-dashboard', 'My Tasks dashboard'],
  ['clickup-my-work-tabs', 'my-work-tabs', 'My Work tab states'],
  ['clickup-assigned-to-me-table', 'assigned-to-me-table', 'Assigned to me table'],
  ['clickup-inbox', 'inbox', 'Inbox states'],
  ['clickup-inbox-filter-menu', 'inbox-filter-menu', 'Inbox filter menu'],
  ['clickup-replies-center', 'replies-center', 'Replies center'],
  ['clickup-assigned-comments', 'assigned-comments', 'Assigned Comments'],
  ['clickup-all-tasks-list', 'all-tasks-list', 'All Tasks list'],
  ['clickup-all-tasks-board', 'all-tasks-board', 'All Tasks board'],
  ['clickup-all-tasks-calendar', 'all-tasks-calendar', 'All Tasks calendar'],
  ['clickup-global-search', 'global-search', 'Global search overlay'],
  ['clickup-teams-hub', 'teams-hub', 'Teams hub'],
  ['clickup-people-directory', 'people-directory', 'People directory'],
  ['clickup-ai-onboarding', 'ai-onboarding', 'AI onboarding boundary'],
  ['clickup-meetings-hub', 'meetings-hub', 'Meetings hub'],
];

export const clickupIds = entries.map(([id]) => id);
export const clickupPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: ClickupPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated read-only ClickUp observation on 2026-10-08. Workspace identity, user identity, object identifiers, provider content and screenshots are omitted or fictionalized. No create, edit, invite, connect, export, prompt submission, upload, settings, billing, permission or destructive action was exercised.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [
        { name: 'variant', type: 'ClickupVariant', required: true, description },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Marks provider-shaped actions disabled.',
        },
      ],
    },
  ])
) as PreviewRegistry;

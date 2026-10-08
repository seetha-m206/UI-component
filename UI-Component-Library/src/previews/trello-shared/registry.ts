import type { PreviewConfig, PreviewRegistry } from '../types';
import { TrelloPreview, type TrelloVariant } from './TrelloPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, TrelloVariant, string]> = [
  ['trello-application-shell', 'application-shell', 'Authenticated Trello application shell'],
  ['trello-boards-home', 'boards-home', 'Boards home and recent work'],
  ['trello-workspace-overview', 'workspace-overview', 'Workspace overview and board inventory'],
  [
    'trello-workspace-collaborators',
    'workspace-collaborators',
    'Workspace collaborators and guest tabs',
  ],
  ['trello-workspace-settings', 'workspace-settings', 'Workspace policy settings'],
  ['trello-board-workspace', 'board-workspace', 'Inbox and kanban board workspace'],
  ['trello-board-views-menu', 'board-views-menu', 'Premium board view selector'],
  ['trello-board-filter-panel', 'board-filter-panel', 'Board filter controls'],
  ['trello-board-menu-and-settings', 'board-menu-and-settings', 'Board menu and settings'],
  [
    'trello-list-actions-menu',
    'list-actions-menu',
    'List actions, color and automation boundaries',
  ],
  ['trello-card-detail-dialog', 'card-detail-dialog', 'Existing card detail dialog'],
  ['trello-card-action-menus', 'card-action-menus', 'Card actions and add-to-card menus'],
  ['trello-board-switcher', 'board-switcher', 'Searchable board switcher'],
  ['trello-inbox-controls', 'inbox-controls', 'Inbox filter, menu and sort controls'],
  ['trello-planner-agenda', 'planner-agenda', 'Planner agenda and calendar boundary'],
  ['trello-planner-controls', 'planner-controls', 'Planner range and due-card filters'],
  ['trello-templates-gallery', 'templates-gallery', 'Template gallery and category discovery'],
  ['trello-template-category', 'template-category', 'Template category results'],
  ['trello-template-detail', 'template-detail', 'Template detail and copy boundary'],
  ['trello-home-onboarding', 'home-onboarding', 'Empty Home onboarding state'],
  ['trello-global-create-menu', 'global-create-menu', 'Global create disclosure'],
  ['trello-app-switcher', 'app-switcher', 'Atlassian app switcher'],
  ['trello-information-menu', 'information-menu', 'Information and help links'],
  ['trello-global-search', 'global-search', 'Global recent-board search'],
  ['trello-advanced-search', 'advanced-search', 'Advanced card search and operators'],
  ['trello-feedback-dialog', 'feedback-dialog', 'Feedback form boundary'],
  ['trello-notifications-panel', 'notifications-panel', 'Notifications and settings entry'],
  ['trello-account-settings', 'account-settings', 'Personal notification and account settings'],
  ['trello-ai-settings', 'ai-settings', 'AI scheduling preferences and rule boundary'],
  ['trello-labs', 'labs', 'Experimental Labs feature settings'],
  ['trello-personal-cards', 'personal-cards', 'Personal card aggregation empty state'],
  ['trello-personal-activity', 'personal-activity', 'Personal activity stream'],
  ['trello-profile-visibility', 'profile-visibility', 'Public profile visibility settings'],
  ['trello-workspace-power-ups', 'workspace-power-ups', 'Workspace Power-Ups empty state'],
  ['trello-workspace-export', 'workspace-export', 'Premium workspace export boundary'],
  ['trello-closed-boards', 'closed-boards', 'Closed boards empty state'],
  ['trello-account-menu', 'account-menu', 'Account navigation and theme disclosure'],
];

export const trelloIds = entries.map(([id]) => id);

export const trelloPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: TrelloPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated read-only Trello observation on 2026-10-08. Workspace, member, board and card identities, object IDs, query strings, payloads, provider screenshots and account data are omitted or fictionalized. No create, edit, move, complete, comment, invite, share, connect, automate, upload, export, publish, purchase, delete, permission, billing or AI action was exercised.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [
        { name: 'variant', type: 'TrelloVariant', required: true, description },
        {
          name: 'initialState',
          type: 'string',
          required: false,
          description: 'Reserved for documented fictional states.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables fixture controls without contacting Trello.',
        },
      ],
    },
  ])
);

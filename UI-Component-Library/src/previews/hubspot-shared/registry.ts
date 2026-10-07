import type { PreviewConfig, PreviewRegistry } from '../types';
import { HubspotServicePreview, type HubspotVariant } from './HubspotServicePreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1120 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, HubspotVariant, string, Array<[string, string, string?]>]> = [
  ['hubspot-application-shell', 'application-shell', 'Shared application shell', [['default', 'Observed shell'], ['notifications', 'Notifications open', 'notifications']]],
  ['hubspot-inbox-empty-state', 'inbox-empty', 'Inbox channel empty state', [['default', 'Observed empty state'], ['more', 'More views open', 'more']]],
  ['hubspot-inbox-view-and-actions', 'inbox-actions', 'Inbox view and actions disclosures', [['actions', 'Actions open', 'actions'], ['more', 'More views open', 'more']]],
  ['hubspot-tickets-empty-board', 'tickets-empty-board', 'First-ticket empty board', [['default', 'Observed empty board']]],
  ['hubspot-tickets-filtered-empty', 'tickets-filtered-empty', 'Filtered table empty state', [['default', 'Observed filtered empty']]],
  ['hubspot-ticket-object-and-add-menus', 'ticket-object-add', 'Ticket object and add menus', [['objects', 'Object selector open', 'objects'], ['add', 'Add menu open', 'add']]],
  ['hubspot-ticket-view-settings', 'ticket-view-settings', 'Ticket view settings drawer', [['open', 'Observed drawer', 'open'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-ticket-filter-controls', 'ticket-filters', 'Ticket filter controls', [['advanced', 'Advanced filters', 'advanced'], ['priority', 'Priority values', 'priority'], ['date', 'Date operators', 'date'], ['pipeline', 'Pipeline selector', 'pipeline']]],
  ['hubspot-ticket-automation-drawer', 'ticket-automation', 'Ticket automation access drawer', [['open', 'Observed gated drawer', 'open'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-unassigned-ticket-view', 'unassigned-view', 'Unassigned ticket layouts', [['board', 'Observed board', 'board'], ['table', 'Observed table', 'table']]],
  ['hubspot-notifications-drawer', 'notifications', 'Shared notification drawer', [['unread', 'Observed unread empty', 'unread'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-global-create-menu', 'global-create', 'Global create menu', [['open', 'Observed menu open', 'open'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-contextual-help-center', 'contextual-help', 'Contextual Help Center', [['open', 'Observed help panel', 'open'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-marketplace-menu', 'marketplace-menu', 'Marketplace menu', [['open', 'Observed menu open', 'open'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-breeze-assistant', 'breeze-assistant', 'Breeze Assistant empty state', [['open', 'Observed empty assistant', 'open'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-calling-access-gate', 'calling-gate', 'Calling access gate', [['open', 'Observed access gate', 'open'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-ticket-collapsible-header', 'ticket-collapsible-header', 'Collapsible Tickets header', [['expanded', 'Observed expanded header', 'expanded'], ['collapsed', 'Observed collapsed header', 'collapsed']]],
  ['hubspot-ticket-compact-view-selector', 'ticket-compact-view-selector', 'Compact saved-view selector', [['open', 'Observed selector open', 'open'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-navigation-manager-guide', 'navigation-manager', 'Navigation manager guide', [['open', 'Observed guide open', 'open'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-ticket-status-details-panel', 'ticket-status-details', 'Ticket status details panel', [['open', 'Observed untouched panel', 'open'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-ticket-views-manager', 'ticket-views-manager', 'Ticket views management', [['all', 'Observed All Views', 'all'], ['defaults', 'Observed default views', 'defaults']]],
  ['hubspot-ticket-object-setup', 'ticket-object-setup', 'Ticket object setup', [['setup', 'Observed object setup']]],
  ['hubspot-ticket-pipeline-settings', 'ticket-pipeline-settings', 'Ticket pipeline settings', [['overview', 'Observed pipeline overview', 'overview'], ['configure', 'Observed stage configuration', 'configure']]],
  ['hubspot-ticket-pipeline-actions-menu', 'ticket-pipeline-actions', 'Ticket pipeline action menu', [['open', 'Observed disabled Delete action', 'open'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-ticket-stage-type-menu', 'ticket-stage-type-menu', 'Ticket stage type menu', [['open', 'Observed Open and Closed choices', 'open'], ['closed', 'Closed locally', 'closed']]],
  ['hubspot-ticket-record-customization', 'ticket-record-customization', 'Ticket record customization', [['views', 'Observed view inventory']]],
  ['hubspot-ticket-preview-customization', 'ticket-preview-customization', 'Ticket preview customization', [['views', 'Observed view inventory', 'views'], ['cards', 'Observed preview cards', 'cards']]],
  ['hubspot-ticket-index-customization', 'ticket-index-customization', 'Ticket index customization', [['landing', 'Observed index destinations', 'landing'], ['defaults', 'Observed default views', 'defaults']]],
  ['hubspot-ticket-customization-view-actions', 'ticket-customization-view-actions', 'Ticket customization view actions', [['record', 'Observed record-view actions', 'record'], ['preview', 'Observed preview-view actions', 'preview']]],
  ['hubspot-ticket-record-layout-editor', 'ticket-record-layout-editor', 'Ticket record layout editor', [['actions', 'Observed card actions', 'actions'], ['layout', 'Observed layout', 'layout']]],
];

export const hubspotPreviews: PreviewRegistry = Object.fromEntries(entries.map(([id, variant, label, states]) => [id, {
  type: 'reconstructed',
  Component: HubspotServicePreview,
  label: 'Authenticated observation reconstructed with fictional local data',
  evidence: 'Authenticated HubSpot Service Hub interface observed 2026-10-05 and 2026-10-06. Fixtures are local-only. Provider creation, import, export, support, assistant execution, calling, marketplace navigation, filter changes, automation, invitations, settings writes, and paid-plan behavior remain unverified.',
  runtimeVerified: true,
  fixtures: states.map(([stateId, title, initialState]) => ({ id: stateId, title, props: { variant, ...(initialState ? { initialState } : {}) } })),
  config,
  propsSchema: [
    { name: 'variant', type: 'HubspotVariant', required: true, description: `Selects the ${label.toLowerCase()} reconstruction.` },
    { name: 'initialState', type: 'string', required: false, description: 'Starts the local fixture in one documented or explicitly local state.' },
    { name: 'disabled', type: 'boolean', required: false, description: 'Disables the fictional fixture without affecting HubSpot.' },
  ],
}]));

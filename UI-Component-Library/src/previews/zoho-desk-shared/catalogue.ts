export type ZohoDeskKind =
  | 'shell'
  | 'list'
  | 'filter'
  | 'menu'
  | 'form'
  | 'detail'
  | 'empty'
  | 'knowledge'
  | 'community'
  | 'customers'
  | 'analytics'
  | 'activities'
  | 'queue'
  | 'notifications'
  | 'remaining';

export interface ZohoDeskComponentDefinition {
  id: string;
  title: string;
  kind: ZohoDeskKind;
  states: string[];
}

export const zohoDeskComponents: ZohoDeskComponentDefinition[] = [
  {
    id: 'zoho-desk-application-shell',
    title: 'Application Shell',
    kind: 'shell',
    states: ['Ticket list', 'Blank ticket form', 'Ticket detail'],
  },
  {
    id: 'zoho-desk-ticket-sidebar',
    title: 'Ticket Sidebar',
    kind: 'shell',
    states: ['Views active', 'Filter panel'],
  },
  {
    id: 'zoho-desk-global-header',
    title: 'Global Header',
    kind: 'shell',
    states: ['Normal header', 'Quick Action', 'Search overlay'],
  },
  {
    id: 'zoho-desk-main-content-area',
    title: 'Main Content Area',
    kind: 'shell',
    states: ['List', 'Form', 'Detail'],
  },
  {
    id: 'zoho-desk-ticket-page-header',
    title: 'Ticket Page Header',
    kind: 'list',
    states: ['List title', 'Form breadcrumb'],
  },
  {
    id: 'zoho-desk-ticket-list-row',
    title: 'Ticket List Row',
    kind: 'list',
    states: ['Populated row'],
  },
  {
    id: 'zoho-desk-ticket-view-picker',
    title: 'Ticket View Picker',
    kind: 'menu',
    states: ['Collapsed', 'Starred expanded'],
  },
  {
    id: 'zoho-desk-ticket-filter-panel',
    title: 'Ticket Filter Panel',
    kind: 'filter',
    states: ['Expanded', 'Collapsed'],
  },
  {
    id: 'zoho-desk-status-filter',
    title: 'Status Filter',
    kind: 'filter',
    states: ['Unselected', 'Options open'],
  },
  {
    id: 'zoho-desk-date-filter-presets',
    title: 'Date Filter Presets',
    kind: 'filter',
    states: ['Unselected', 'Preset menu'],
  },
  {
    id: 'zoho-desk-saved-filter-empty',
    title: 'Saved Filter Empty State',
    kind: 'empty',
    states: ['Empty', 'Closed'],
  },
  {
    id: 'zoho-desk-ticket-layout-menu',
    title: 'Ticket Layout Menu',
    kind: 'menu',
    states: ['Classic selected', 'Menu expanded'],
  },
  {
    id: 'zoho-desk-ticket-sort-menu',
    title: 'Ticket Sort Menu',
    kind: 'menu',
    states: ['Recent Thread', 'Menu expanded'],
  },
  {
    id: 'zoho-desk-quick-action-menu',
    title: 'Quick Action Menu',
    kind: 'menu',
    states: ['Collapsed', 'Expanded'],
  },
  {
    id: 'zoho-desk-global-search',
    title: 'Global Search',
    kind: 'menu',
    states: ['Focused search', 'Scope expanded'],
  },
  {
    id: 'zoho-desk-ticket-form',
    title: 'Ticket Form',
    kind: 'form',
    states: ['Pristine', 'Editor expanded'],
  },
  {
    id: 'zoho-desk-template-picker-empty',
    title: 'Template Picker Empty State',
    kind: 'empty',
    states: ['Empty', 'Closed'],
  },
  {
    id: 'zoho-desk-description-editor',
    title: 'Description Editor',
    kind: 'form',
    states: ['Compact', 'Expanded'],
  },
  {
    id: 'zoho-desk-editor-insert-menu',
    title: 'Editor Insert Menu',
    kind: 'menu',
    states: ['Expanded', 'Closed'],
  },
  {
    id: 'zoho-desk-priority-select',
    title: 'Priority Select',
    kind: 'form',
    states: ['Unset', 'Options open'],
  },
  {
    id: 'zoho-desk-channel-select',
    title: 'Channel Select',
    kind: 'form',
    states: ['Phone selected', 'Menu open'],
  },
  {
    id: 'zoho-desk-due-date-picker',
    title: 'Due Date Picker',
    kind: 'form',
    states: ['Placeholder', 'Picker expanded'],
  },
  {
    id: 'zoho-desk-attachment-upload',
    title: 'Attachment Upload',
    kind: 'empty',
    states: ['Empty upload surface'],
  },
  {
    id: 'zoho-desk-contact-context-empty',
    title: 'Contact Context Empty State',
    kind: 'empty',
    states: ['No contact', 'Selector open'],
  },
  {
    id: 'zoho-desk-contact-picker',
    title: 'Contact Picker',
    kind: 'menu',
    states: ['Populated selector', 'Closed'],
  },
  {
    id: 'zoho-desk-form-action-footer',
    title: 'Form Action Footer',
    kind: 'form',
    states: ['Pristine footer', 'Cancelled'],
  },
  {
    id: 'zoho-desk-ticket-detail-workspace',
    title: 'Ticket Detail Workspace',
    kind: 'detail',
    states: ['Conversation', 'Attachment'],
  },
  {
    id: 'zoho-desk-ticket-properties-panel',
    title: 'Ticket Properties Panel',
    kind: 'detail',
    states: ['Grouped properties'],
  },
  {
    id: 'zoho-desk-ticket-detail-tabs',
    title: 'Ticket Detail Tabs',
    kind: 'detail',
    states: ['Conversation', 'Attachment'],
  },
  {
    id: 'zoho-desk-reply-action-menu',
    title: 'Reply Action Menu',
    kind: 'menu',
    states: ['Reply All', 'Options expanded'],
  },
  {
    id: 'zoho-desk-ticket-action-menu',
    title: 'Ticket Action Menu',
    kind: 'menu',
    states: ['Closed', 'Expanded'],
  },
  {
    id: 'zoho-desk-ticket-attachment-empty',
    title: 'Ticket Attachment Empty State',
    kind: 'empty',
    states: ['Empty attachment subview'],
  },
  {
    id: 'zoho-desk-knowledge-base-onboarding',
    title: 'Knowledge Base Onboarding',
    kind: 'knowledge',
    states: ['Empty onboarding'],
  },
  {
    id: 'zoho-desk-community-topic-list',
    title: 'Community Topic List',
    kind: 'community',
    states: ['Populated list'],
  },
  {
    id: 'zoho-desk-customer-contact-list',
    title: 'Customer Contact List',
    kind: 'customers',
    states: ['All contacts'],
  },
  {
    id: 'zoho-desk-analytics-overview-dashboard',
    title: 'Analytics Overview Dashboard',
    kind: 'analytics',
    states: ['Overview dashboard'],
  },
  {
    id: 'zoho-desk-activities-empty-state',
    title: 'Activities Empty State',
    kind: 'activities',
    states: ['Empty', 'Action menu'],
  },
  {
    id: 'zoho-desk-ticket-queue-empty-states',
    title: 'Ticket Queue Empty States',
    kind: 'queue',
    states: ['Agent queue', 'Team queue'],
  },
  {
    id: 'zoho-desk-notifications-drawer',
    title: 'Notifications Drawer',
    kind: 'notifications',
    states: ['All', 'Email failure'],
  },
  {
    id: 'zoho-desk-contracts-empty-state',
    title: 'Contracts Empty State',
    kind: 'remaining',
    states: ['Empty'],
  },
  {
    id: 'zoho-desk-social-onboarding',
    title: 'Social Onboarding',
    kind: 'remaining',
    states: ['Getting started'],
  },
  {
    id: 'zoho-desk-chat-onboarding',
    title: 'Chat Onboarding',
    kind: 'remaining',
    states: ['Disabled'],
  },
  {
    id: 'zoho-desk-im-onboarding',
    title: 'Instant Messaging Onboarding',
    kind: 'remaining',
    states: ['Getting started'],
  },
  { id: 'zoho-desk-team-feeds', title: 'Team Feeds', kind: 'remaining', states: ['All feeds'] },
  {
    id: 'zoho-desk-tagged-tickets-empty',
    title: 'Tagged Tickets Empty State',
    kind: 'remaining',
    states: ['Empty tag'],
  },
  {
    id: 'zoho-desk-scheduled-replies-empty',
    title: 'Scheduled Replies Empty State',
    kind: 'remaining',
    states: ['Empty'],
  },
  {
    id: 'zoho-desk-contracts-list-toolbar',
    title: 'Contracts List Toolbar',
    kind: 'remaining',
    states: ['Default'],
  },
  {
    id: 'zoho-desk-contract-create-action',
    title: 'Contract Create Action',
    kind: 'remaining',
    states: ['Guarded'],
  },
  {
    id: 'zoho-desk-social-connect-action',
    title: 'Social Connect Action',
    kind: 'remaining',
    states: ['Guarded'],
  },
  {
    id: 'zoho-desk-social-workflow-map',
    title: 'Social Workflow Map',
    kind: 'remaining',
    states: ['Overview'],
  },
  {
    id: 'zoho-desk-chat-enable-action',
    title: 'Chat Enable Action',
    kind: 'remaining',
    states: ['Guarded'],
  },
  {
    id: 'zoho-desk-chat-credential-notice',
    title: 'Chat Credential Notice',
    kind: 'remaining',
    states: ['Visible'],
  },
  {
    id: 'zoho-desk-im-channel-list',
    title: 'Messaging Channel List',
    kind: 'remaining',
    states: ['Supported channels'],
  },
  {
    id: 'zoho-desk-im-onboarding-actions',
    title: 'Messaging Onboarding Actions',
    kind: 'remaining',
    states: ['Guarded'],
  },
  {
    id: 'zoho-desk-team-feed-tabs',
    title: 'Team Feed Tabs',
    kind: 'remaining',
    states: ['All feeds'],
  },
  {
    id: 'zoho-desk-team-feed-composer',
    title: 'Team Feed Composer',
    kind: 'remaining',
    states: ['Pristine'],
  },
  {
    id: 'zoho-desk-team-feed-ticket-actions',
    title: 'Team Feed Ticket Actions',
    kind: 'remaining',
    states: ['Guarded'],
  },
  {
    id: 'zoho-desk-tag-view-toolbar',
    title: 'Tag View Toolbar',
    kind: 'remaining',
    states: ['Empty tag'],
  },
  {
    id: 'zoho-desk-scheduled-replies-toolbar',
    title: 'Scheduled Replies Toolbar',
    kind: 'remaining',
    states: ['Default'],
  },
  {
    id: 'zoho-desk-scheduled-replies-enable-action',
    title: 'Scheduled Replies Enable Action',
    kind: 'remaining',
    states: ['Guarded'],
  },
];

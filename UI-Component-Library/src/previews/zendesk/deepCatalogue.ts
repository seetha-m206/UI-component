import type { PreviewFixture } from '../types';
import type { DeepKind, DeepProps } from './ZendeskDeep';
export const deepCatalogue: {
  id: string;
  kind: DeepKind;
  title: string;
  summary: string;
  fixtures: PreviewFixture<DeepProps>[];
}[] = [
  {
    id: 'zendesk-global-search',
    kind: 'global-search',
    title: 'Zendesk Global Search',
    summary: 'Search dialog with product filters, ticket facets, recent items and grouped results.',
    fixtures: [
      {
        id: 'observed-empty',
        title: 'Observed empty dialog · fictional data',
        props: { initialOpen: true },
      },
      { id: 'observed-query', title: 'Search entry · fictional data', props: {} },
    ],
  },
  {
    id: 'zendesk-ticket-actions',
    kind: 'ticket-actions',
    title: 'Zendesk Ticket Actions Menu',
    summary: 'Ticket actions menu with consequential entries displayed but locally guarded.',
    fixtures: [{ id: 'observed-menu', title: 'Observed menu', props: { initialOpen: true } }],
  },
  {
    id: 'zendesk-conversation-filter',
    kind: 'conversation-filter',
    title: 'Zendesk Conversation Filter',
    summary: 'All, public message and internal note filtering with the observed empty note state.',
    fixtures: [
      { id: 'observed-default', title: 'Observed all state · fictional data', props: {} },
      { id: 'observed-menu', title: 'Observed menu', props: { initialOpen: true } },
    ],
  },
  {
    id: 'zendesk-ticket-events',
    kind: 'ticket-events',
    title: 'Zendesk Ticket Event Timeline',
    summary: 'Chronological field and notification activity shown in the ticket event view.',
    fixtures: [
      { id: 'observed-layout', title: 'Observed structure · fictional events', props: {} },
    ],
  },
  {
    id: 'zendesk-ticket-resource-rail',
    kind: 'ticket-resources',
    title: 'Zendesk Ticket Resource Rail',
    summary: 'Related tickets, side conversations, approvals, tasks and apps in the ticket rail.',
    fixtures: [{ id: 'observed-empty', title: 'Observed empty rail states', props: {} }],
  },
  {
    id: 'zendesk-approval-request',
    kind: 'approval-request',
    title: 'Zendesk Approval Request Form',
    summary: 'Empty approval state opens approver, subject and description fields.',
    fixtures: [
      { id: 'observed-empty', title: 'Observed empty state', props: {} },
      { id: 'observed-form', title: 'Observed approval form', props: { initialOpen: true } },
    ],
  },
  {
    id: 'zendesk-notifications-drawer',
    kind: 'notifications',
    title: 'Zendesk Notifications Drawer',
    summary: 'Notification settings, mute duration menu and 30-day empty state.',
    fixtures: [{ id: 'observed-empty', title: 'Observed drawer', props: { initialOpen: true } }],
  },
  {
    id: 'zendesk-agent-auto-assist',
    kind: 'auto-assist',
    title: 'Zendesk Auto Assist Queue',
    summary: 'Agent Home Auto Assist queue and its observed no-work state.',
    fixtures: [{ id: 'observed-empty', title: 'Observed empty queue', props: {} }],
  },
  {
    id: 'zendesk-admin-macro-list',
    kind: 'admin-macro-list',
    title: 'Zendesk Admin Macro Inventory',
    summary: 'Macro inventory with search, filters, sort and column controls.',
    fixtures: [
      { id: 'observed-list', title: 'Observed structure · fictional macros', props: {} },
      { id: 'observed-columns', title: 'Column menu opens locally', props: { initialOpen: true } },
    ],
  },
  {
    id: 'zendesk-admin-macro-editor',
    kind: 'admin-macro-editor',
    title: 'Zendesk Admin Macro Editor',
    summary: 'Existing and new macro forms with availability, action rows and unsaved warning.',
    fixtures: [
      { id: 'observed-existing', title: 'Observed editor · fictional macro', props: {} },
      { id: 'observed-new', title: 'Observed blank creation form', props: { empty: true } },
    ],
  },
];

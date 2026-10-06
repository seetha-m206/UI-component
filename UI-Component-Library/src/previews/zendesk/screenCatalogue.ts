import type { PreviewFixture } from '../types';
import type { ScreenKind, ScreenProps } from './ZendeskScreens';
export const screenCatalogue: {
  id: string;
  kind: ScreenKind;
  title: string;
  summary: string;
  fixtures: PreviewFixture<ScreenProps>[];
}[] = [
  {
    id: 'zendesk-ticket-search-results',
    kind: 'search-results',
    title: 'Zendesk Ticket Search Results',
    summary: 'Ticket search page with category rail, results, filters and column drawer.',
    fixtures: [
      { id: 'observed-list', title: 'Observed structure · fictional ticket', props: {} },
      { id: 'observed-filters', title: 'Observed filter drawer', props: { initialOpen: true } },
      { id: 'observed-empty', title: 'Illustrative empty result', props: { empty: true } },
    ],
  },
  {
    id: 'zendesk-agent-work-queues',
    kind: 'work-queues',
    title: 'Zendesk Agent Work Queues',
    summary: 'CC’d, Following and Last 30 days queue empty screens.',
    fixtures: [{ id: 'observed-empty-queues', title: 'Observed queue empties', props: {} }],
  },
  {
    id: 'zendesk-knowledge-history',
    kind: 'knowledge-history',
    title: 'Zendesk Knowledge History',
    summary: 'Knowledge content activity chronology and revision entry points.',
    fixtures: [
      { id: 'observed-history', title: 'Observed structure · fictional activity', props: {} },
    ],
  },
  {
    id: 'zendesk-arrange-articles',
    kind: 'arrange-articles',
    title: 'Zendesk Arrange Articles',
    summary: 'Category ordering screen in Knowledge.',
    fixtures: [
      {
        id: 'observed-categories',
        title: 'Observed category structure · fictional label',
        props: {},
      },
    ],
  },
  {
    id: 'zendesk-knowledge-themes',
    kind: 'themes',
    title: 'Zendesk Knowledge Themes',
    summary: 'Live theme and theme library workbench.',
    fixtures: [
      { id: 'observed-workbench', title: 'Observed workbench · fictional theme', props: {} },
    ],
  },
  {
    id: 'zendesk-help-center-settings',
    kind: 'help-center-settings',
    title: 'Zendesk Help Center Settings',
    summary: 'Settings groups for content, security, requests and integrations.',
    fixtures: [{ id: 'observed-groups', title: 'Observed settings groups', props: {} }],
  },
  {
    id: 'zendesk-admin-team-members',
    kind: 'team-members',
    title: 'Zendesk Admin Team Members',
    summary: 'Team roster with seat summary, search, filter and actions.',
    fixtures: [
      { id: 'observed-roster', title: 'Observed structure · fictional member', props: {} },
    ],
  },
  {
    id: 'zendesk-messaging-channels',
    kind: 'messaging-channels',
    title: 'Zendesk Messaging Channels',
    summary: 'Messaging channel inventory with settings and add-channel entry points.',
    fixtures: [
      { id: 'observed-inventory', title: 'Observed structure · fictional channel', props: {} },
    ],
  },
  {
    id: 'zendesk-admin-ai-agents',
    kind: 'ai-agents',
    title: 'Zendesk Admin AI Agents',
    summary: 'AI agent inventory with automation potential and creation entry points.',
    fixtures: [{ id: 'observed-agents', title: 'Observed structure · fictional agent', props: {} }],
  },
  {
    id: 'zendesk-admin-agent-workspace',
    kind: 'agent-workspace',
    title: 'Zendesk Admin Agent Workspace',
    summary: 'Agent Workspace status and configuration overview.',
    fixtures: [{ id: 'observed-on', title: 'Observed on status', props: {} }],
  },
  {
    id: 'zendesk-admin-ticket-forms',
    kind: 'ticket-forms',
    title: 'Zendesk Admin Ticket Forms',
    summary: 'Ticket forms destination inside Objects and rules.',
    fixtures: [
      { id: 'observed-destination', title: 'Observed structure · fictional form', props: {} },
    ],
  },
  {
    id: 'zendesk-admin-support-apps',
    kind: 'support-apps',
    title: 'Zendesk Admin Support Apps',
    summary: 'Support app management destination and surrounding integrations navigation.',
    fixtures: [
      { id: 'observed-destination', title: 'Observed structure · fictional app', props: {} },
    ],
  },
  {
    id: 'zendesk-admin-it-assets',
    kind: 'it-assets',
    title: 'Zendesk Admin IT Assets',
    summary: 'IT asset management overview and inactive state.',
    fixtures: [{ id: 'observed-inactive', title: 'Observed inactive state', props: {} }],
  },
  {
    id: 'zendesk-admin-launchpad',
    kind: 'admin-launchpad',
    title: 'Zendesk Admin Launchpad',
    summary: 'Plan essentials checklist and admin setup launchpad.',
    fixtures: [
      { id: 'observed-checklist', title: 'Observed structure · fictional checklist', props: {} },
    ],
  },
  {
    id: 'zendesk-admin-home',
    kind: 'admin-home',
    title: 'Zendesk Admin Home',
    summary: 'Admin Center home with setup and product entry points.',
    fixtures: [{ id: 'observed-home', title: 'Observed structure · fictional cards', props: {} }],
  },
  {
    id: 'zendesk-account-subscription',
    kind: 'account-subscription',
    title: 'Zendesk Account Subscription',
    summary: 'Subscription and trial overview inside Admin Center.',
    fixtures: [
      {
        id: 'observed-subscription',
        title: 'Observed structure · fictional plan details',
        props: {},
      },
    ],
  },
];

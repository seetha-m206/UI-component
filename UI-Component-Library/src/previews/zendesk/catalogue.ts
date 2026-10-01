import type { ZendeskKind } from './Zendesk';
import type { PreviewFixture } from '../types';
import type { ZendeskProps } from './Zendesk';
export const catalogue: {
  id: string;
  kind: ZendeskKind;
  title: string;
  summary: string;
  fixtures: PreviewFixture<ZendeskProps>[];
}[] = [
  {
    id: 'zendesk-application-shell',
    kind: 'shell',
    title: 'Zendesk Application Shell',
    summary:
      'Two-level agent navigation keeps the workspace header, icon rail and secondary work list around the current screen.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          empty: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-agent-home',
    kind: 'home',
    title: 'Zendesk Agent Home',
    summary:
      'A personal ticket queue combines filters, ticket cards, setup guidance and workload statistics.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          empty: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-ticket-workspace',
    kind: 'ticket',
    title: 'Zendesk Ticket Workspace',
    summary:
      'The ticket workspace keeps editable fields, conversation and customer context in separate panes with a persistent action footer.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-views-workspace',
    kind: 'views',
    title: 'Zendesk Views Workspace',
    summary:
      'Saved ticket views pair a navigation list with a selectable ticket table and a filter drawer.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          initialSelected: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-customer-directory',
    kind: 'customers',
    title: 'Zendesk Customer Directory',
    summary:
      'A customer list presents search, identity columns, selection and an add-customer entry point.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          empty: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-organization-directory',
    kind: 'organizations',
    title: 'Zendesk Organization Directory',
    summary:
      'The organization directory groups company records by name, domain, tags and update dates.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          empty: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-knowledge-inventory',
    kind: 'knowledge',
    title: 'Zendesk Knowledge Inventory',
    summary:
      'Knowledge administration provides article lifecycle lists, search and optional table columns.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          empty: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-help-center',
    kind: 'help-center',
    title: 'Zendesk Help Center',
    summary:
      'A customer-facing help center organizes search, category cards, promoted articles and community activity.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          empty: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-product-switcher',
    kind: 'switcher',
    title: 'Zendesk Product Switcher',
    summary: 'A compact product menu lets agents move among Zendesk product areas.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          initialOpen: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-status-filter',
    kind: 'status-filter',
    title: 'Zendesk Status Filter',
    summary: 'A count-bearing multi-select status menu narrows the personal ticket queue.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          initialOpen: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-channel-filter',
    kind: 'channel-filter',
    title: 'Zendesk Channel Filter',
    summary: 'A channel filter exposes the support channels available for narrowing a queue.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          initialOpen: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-sort-menu',
    kind: 'sort-menu',
    title: 'Zendesk Queue Sort Menu',
    summary: 'A queue sort menu explains recommended ordering and offers update-time alternatives.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          initialOpen: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-ticket-priority',
    kind: 'priority',
    title: 'Zendesk Ticket Priority',
    summary: 'A priority selector uses a compact combobox with an explicit current value.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          initialOpen: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-reply-composer',
    kind: 'composer',
    title: 'Zendesk Reply Composer',
    summary:
      'Reply mode, recipients and rich-text tools share a draft area beneath the conversation.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-submission-control',
    kind: 'submission',
    title: 'Zendesk Ticket Submission Control',
    summary: 'A primary submission action is paired with a separate status-choice menu.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          initialOpen: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-context-panel',
    kind: 'context',
    title: 'Zendesk Ticket Context Panel',
    summary:
      'A context rail switches between customer essentials and suggested knowledge beside the conversation.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-views-filter-drawer',
    kind: 'filter-drawer',
    title: 'Zendesk Views Filter Drawer',
    summary: 'A side drawer collects ticket-view constraints before applying them.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {
          initialOpen: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-row-selection-bar',
    kind: 'selection',
    title: 'Zendesk Ticket Selection Bar',
    summary: 'Selecting tickets replaces passive table tools with a count and bulk actions.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {
          initialSelected: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-add-customer-modal',
    kind: 'customer-modal',
    title: 'Zendesk Add Customer Modal',
    summary: 'A small customer-creation modal exposes name and email before a guarded add action.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {
          initialOpen: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
  {
    id: 'zendesk-knowledge-column-picker',
    kind: 'columns',
    title: 'Zendesk Knowledge Column Picker',
    summary: 'A checkbox menu lists optional metadata columns for the knowledge table.',
    fixtures: [
      {
        id: 'observed-layout',
        title: 'Observed structure \u00b7 fictional data',
        props: {},
      },
      {
        id: 'alternate',
        title: 'Alternate state \u00b7 see evidence limitations',
        props: {
          initialOpen: true,
        },
      },
      {
        id: 'disabled',
        title: 'Disabled controls \u00b7 local simulation',
        props: {
          disabled: true,
        },
      },
    ],
  },
];

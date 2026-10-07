import type { PreviewConfig, PreviewRegistry } from '../types';
import { HostingerPreview, type HostingerVariant } from './HostingerPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [
    { id: 'disabled', label: 'Fixture controls', onLabel: 'Disabled', offLabel: 'Enabled' },
  ],
};

type FixtureTuple = [id: string, title: string, initialState?: string];
type EntryTuple = [id: string, variant: HostingerVariant, label: string, fixtures: FixtureTuple[]];

export const hostingerEntries: EntryTuple[] = [
  [
    'hostinger-hpanel-application-shell',
    'hpanel-shell',
    'hPanel application shell',
    [
      ['default', 'Observed shell structure'],
      ['search', 'Search overlay open', 'search'],
      ['account', 'Account menu open', 'account'],
      ['agent', 'Agent panel open', 'agent'],
    ],
  ],
  [
    'hostinger-account-settings-and-permissions',
    'account-settings',
    'Account settings and permissions group',
    [
      ['overview', 'Profile navigation overview'],
      ['sharing', 'Account sharing state', 'sharing'],
      ['notifications', 'Notification matrix', 'notifications'],
      ['memory', 'AI memory off state', 'memory'],
    ],
  ],
  [
    'hostinger-agent-and-ai-memory',
    'agent-memory',
    'Agent and AI memory group',
    [
      ['memory-prompt', 'Observed Agent memory prompt', 'memory'],
      ['closed', 'Agent closed locally', 'closed'],
    ],
  ],
  [
    'hostinger-ai-first-home-dashboard',
    'home-dashboard',
    'AI-first Home dashboard',
    [['default', 'Observed zero-service dashboard']],
  ],
  [
    'hostinger-service-marketplace-and-empty-states',
    'service-marketplace-empty',
    'Service marketplace and empty states group',
    [
      ['marketplace', 'Observed marketplace'],
      ['domains', 'Observed domain empty state', 'domains'],
      ['no-results', 'Local marketplace no-results state', 'no-results'],
    ],
  ],
  [
    'hostinger-website-inventory-and-plan-gate',
    'website-inventory-plan',
    'Website inventory and plan gate group',
    [
      ['ai-builder', 'Observed AI Builder inventory', 'ai-builder'],
      ['web-apps', 'Observed Web Apps inventory', 'web-apps'],
      ['plan', 'Observed plan gate', 'plan'],
    ],
  ],
  [
    'hostinger-global-search-command-palette',
    'global-search',
    'Global search command palette',
    [
      ['open', 'Observed default palette', 'open'],
      ['no-route', 'Observed SEO Agent fallback', 'no-route'],
      ['closed', 'Palette closed locally', 'closed'],
    ],
  ],
  [
    'hostinger-account-menu',
    'account-menu',
    'Account destination menu',
    [
      ['open', 'Observed menu open', 'open'],
      ['closed', 'Menu closed locally', 'closed'],
    ],
  ],
  [
    'hostinger-todo-notification-panel',
    'todo-panel',
    'To-do notification panel',
    [
      ['unread', 'Observed unread task', 'unread'],
      ['read', 'Local read state', 'read'],
      ['closed', 'Panel closed locally', 'closed'],
    ],
  ],
  [
    'hostinger-agent-intro-panel',
    'agent-panel',
    'Agent intro and memory panel',
    [
      ['memory', 'Observed memory prompt', 'memory'],
      ['closed', 'Panel closed locally', 'closed'],
    ],
  ],
  [
    'hostinger-website-type-filter',
    'website-filter',
    'Website inventory type filter',
    [
      ['all', 'All websites', 'all'],
      ['ai-builder', 'Observed AI Builder filter', 'ai-builder'],
      ['web-apps', 'Observed Web Apps filter', 'web-apps'],
    ],
  ],
  [
    'hostinger-hosting-plan-comparison',
    'plan-comparison',
    'Hosting plan comparison',
    [
      ['business', 'Observed Individual and Business plans', 'business'],
      ['cloud', 'Cloud plan-family tab', 'cloud'],
      ['agency', 'Agency plan-family tab', 'agency'],
    ],
  ],
  [
    'hostinger-domain-empty-state',
    'domain-empty',
    'Domain portfolio empty state',
    [['empty', 'Observed empty portfolio']],
  ],
  [
    'hostinger-service-marketplace-filters-and-cards',
    'marketplace-grid',
    'Service marketplace filters and cards',
    [
      ['all', 'Observed offer grid'],
      ['ai', 'AI and automation category', 'ai'],
      ['no-results', 'Local no-results fixture', 'no-results'],
    ],
  ],
  [
    'hostinger-profile-settings-navigation',
    'profile-navigation',
    'Profile settings secondary navigation',
    [
      ['memory', 'AI memory destination', 'memory'],
      ['sharing', 'Account sharing destination', 'sharing'],
      ['notifications', 'Notification settings destination', 'notifications'],
    ],
  ],
  [
    'hostinger-ai-memory-consent-card',
    'memory-consent',
    'AI memory consent card',
    [
      ['off', 'Observed memory off state', 'off'],
      ['guarded', 'Local guarded action state', 'guarded'],
    ],
  ],
  [
    'hostinger-notification-permission-matrix',
    'notification-matrix',
    'Notification permission matrix',
    [
      ['observed', 'Observed channel matrix', 'observed'],
      ['mandatory', 'Mandatory Email explanation', 'mandatory'],
    ],
  ],
  [
    'hostinger-account-sharing-tabs',
    'account-sharing',
    'Account sharing direction tabs',
    [
      ['request', 'Observed Request access tab', 'request'],
      ['give', 'Observed Give access tab', 'give'],
    ],
  ],
];

export const hostingerPreviews: PreviewRegistry = Object.fromEntries(
  hostingerEntries.map(([id, variant, label, fixtures]) => [
    id,
    {
      type: 'reconstructed',
      Component: HostingerPreview,
      label: 'Authenticated observation reconstructed with fictional local data',
      evidence:
        'Authenticated Hostinger hPanel observed 2026-10-07. Fixtures use fictional data and send no Hostinger request. Provider source, internal JavaScript, network contracts, backend validation, authorization enforcement, purchases, permission changes, messaging, publication, domain operations, and post-entitlement editor behavior remain unverified.',
      runtimeVerified: true,
      fixtures: fixtures.map(([fixtureId, title, initialState]) => ({
        id: fixtureId,
        title,
        props: { variant, ...(initialState ? { initialState } : {}) },
      })),
      config,
      propsSchema: [
        {
          name: 'variant',
          type: 'HostingerVariant',
          required: true,
          description: `Selects the ${label.toLowerCase()} reconstruction.`,
        },
        {
          name: 'initialState',
          type: 'string',
          required: false,
          description: 'Starts the fixture in an observed or explicitly local state.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          required: false,
          description: 'Disables local fixture controls without affecting Hostinger.',
        },
      ],
    },
  ])
);

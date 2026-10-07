import type { PreviewRegistry } from '../types';
import { FramerRemaining } from './FramerRemaining';
export const framerRemainingPreviews: PreviewRegistry = {
  'framer-project-skills-workspace': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'skills', initialState: 'default' },
      },
      {
        id: 'detail',
        title: 'OBSERVED structure: detail',
        props: { kind: 'skills', initialState: 'detail' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'skills', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-site-usage-workspace': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'usage', initialState: 'default' },
      },
      {
        id: 'credits',
        title: 'OBSERVED structure: credits',
        props: { kind: 'usage', initialState: 'credits' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'usage', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-hosting-headers-table': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'headers', initialState: 'default' },
      },
      {
        id: 'information',
        title: 'RECONSTRUCTION: information',
        props: { kind: 'headers', initialState: 'information' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'headers', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-multisite-rewrite-table': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'multisite', initialState: 'default' },
      },
      {
        id: 'information',
        title: 'RECONSTRUCTION: information',
        props: { kind: 'multisite', initialState: 'information' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'multisite', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-redirects-plan-boundary': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'redirects', initialState: 'default' },
      },
      {
        id: 'information',
        title: 'RECONSTRUCTION: information',
        props: { kind: 'redirects', initialState: 'information' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'redirects', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-firewall-plan-boundary': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'firewall', initialState: 'default' },
      },
      {
        id: 'information',
        title: 'RECONSTRUCTION: information',
        props: { kind: 'firewall', initialState: 'information' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'firewall', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-hosted-files-plan-boundary': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'files', initialState: 'default' },
      },
      {
        id: 'information',
        title: 'RECONSTRUCTION: information',
        props: { kind: 'files', initialState: 'information' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'files', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-site-plan-comparison': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'plans', initialState: 'default' },
      },
      {
        id: 'monthly',
        title: 'OBSERVED structure: monthly',
        props: { kind: 'plans', initialState: 'monthly' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'plans', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-plugin-browser-palette': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'plugins', initialState: 'default' },
      },
      {
        id: 'empty',
        title: 'OBSERVED structure: empty',
        props: { kind: 'plugins', initialState: 'empty' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'plugins', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-quick-actions-palette': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'commands', initialState: 'default' },
      },
      {
        id: 'empty',
        title: 'OBSERVED structure: empty',
        props: { kind: 'commands', initialState: 'empty' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'commands', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-branch-access-panel': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'branches', initialState: 'default' },
      },
      {
        id: 'closed',
        title: 'OBSERVED structure: closed',
        props: { kind: 'branches', initialState: 'closed' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'branches', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-fill-color-popover': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'color', initialState: 'default' },
      },
      {
        id: 'gradient',
        title: 'RECONSTRUCTION: gradient',
        props: { kind: 'color', initialState: 'gradient' },
      },
      {
        id: 'closed',
        title: 'OBSERVED structure: closed',
        props: { kind: 'color', initialState: 'closed' },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-skill-formatting-toolbar': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'toolbar', initialState: 'default' },
      },
      {
        id: 'bold',
        title: 'RECONSTRUCTION: bold',
        props: { kind: 'toolbar', initialState: 'bold' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'toolbar', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-usage-period-selector': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'period', initialState: 'default' },
      },
      {
        id: 'previous',
        title: 'RECONSTRUCTION: previous',
        props: { kind: 'period', initialState: 'previous' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'period', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-plan-billing-interval': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'interval', initialState: 'default' },
      },
      {
        id: 'monthly',
        title: 'OBSERVED structure: monthly',
        props: { kind: 'interval', initialState: 'monthly' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'interval', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-hosting-summary-row': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'row', initialState: 'default' },
      },
      {
        id: 'information',
        title: 'RECONSTRUCTION: information',
        props: { kind: 'row', initialState: 'information' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'row', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
  'framer-upgrade-information-cta': {
    type: 'reconstructed',
    Component: FramerRemaining,
    label: 'Fictional local Framer fixture',
    evidence:
      'Authenticated structural reference observed 2026-10-07. Rendering and actions are local reconstructions. Durable provider screenshots and consequential outcomes remain unverified. Runtime verification covers fictional local fixtures only.',
    runtimeVerified: true,
    fixtures: [
      {
        id: 'default',
        title: 'OBSERVED structure: default',
        props: { kind: 'upgrade', initialState: 'default' },
      },
      {
        id: 'information',
        title: 'RECONSTRUCTION: information',
        props: { kind: 'upgrade', initialState: 'information' },
      },
      {
        id: 'disabled',
        title: 'RECONSTRUCTION: disabled',
        props: { kind: 'upgrade', initialState: 'disabled', disabled: true },
      },
    ],
    config: {
      viewports: [
        { id: 'desktop', label: 'Desktop', width: 900 },
        { id: 'narrow', label: 'Narrow', width: 390 },
      ],
      toggles: [{ id: 'disabled', label: 'Interaction', onLabel: 'Disabled', offLabel: 'Enabled' }],
    },
    propsSchema: [
      {
        name: 'kind',
        type: 'RemainingKind',
        required: true,
        description: 'Observed screen or independent control structure.',
      },
      {
        name: 'initialState',
        type: 'string',
        required: false,
        description: 'Labelled observed-structure or reconstructed fixture state.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Disables fictional local controls.',
      },
    ],
  },
};

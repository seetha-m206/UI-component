import type { PreviewFixture, PropSchemaField } from '../types';
import type { PublishShareFlowProps } from './PublishShareFlow';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'initialEnabled',
    type: 'boolean',
    required: false,
    description:
      'Whether public sharing starts enabled. Defaults to true. This is the one and only "publish" mechanism in the real product — there is no separate Publish button.',
  },
  {
    name: 'initialSection',
    type: "'share-with' | 'embed' | 'email' | 'utm' | 'gtm'",
    required: false,
    description: "Which left-hand sharing-method card starts selected. Defaults to 'share-with'.",
  },
  {
    name: 'initialConfirmOpen',
    type: 'boolean',
    required: false,
    description:
      'Seeds the disable-confirmation dialog open, for a fixture that shows that exact state directly. Only meaningful together with initialEnabled: true and initialSection: \'share-with\', since the dialog is only reachable from the enabled Public panel.',
  },
  {
    name: 'onToggle',
    type: '(enabled: boolean) => void',
    required: false,
    description:
      "Called whenever public sharing's enabled state actually changes — after the confirm dialog is accepted (Enabled -> Disabled) or immediately (Disabled -> Enabled, the observed ungated direction).",
  },
];

/**
 * Deterministic synthetic data only — no real account/form content. Each
 * fixture is a starting point for the interactive preview harness; the
 * full flow (navigating cards, toggling, confirming, switching embed
 * types) can still be driven live once a fixture is selected.
 */
export const fixtures: PreviewFixture<PublishShareFlowProps>[] = [
  {
    id: 'enabled-public',
    title: 'Enabled — Public panel',
    props: {
      initialEnabled: true,
      initialSection: 'share-with',
    },
  },
  {
    id: 'disabled-public',
    title: 'Disabled — Public panel (locked)',
    props: {
      initialEnabled: false,
      initialSection: 'share-with',
    },
  },
  {
    id: 'confirm-dialog-open',
    title: 'Disable confirmation dialog open',
    props: {
      initialEnabled: true,
      initialSection: 'share-with',
      initialConfirmOpen: true,
    },
  },
  {
    id: 'embed-iframe',
    title: 'Embed — iframe code',
    props: {
      initialEnabled: true,
      initialSection: 'embed',
    },
  },
  {
    id: 'embed-locked',
    title: 'Embed — locked while sharing is disabled',
    props: {
      initialEnabled: false,
      initialSection: 'embed',
    },
  },
];

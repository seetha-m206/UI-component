import type { PreviewFixture, PropSchemaField } from '../types';
import type { PublishToggleSwitchProps } from './PublishToggleSwitch';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'status',
    type: "'enabled' | 'disabled'",
    required: true,
    description: 'Whether public sharing is currently on ("enabled") or off ("disabled").',
  },
  {
    name: 'onChange',
    type: '(status: PublishStatus) => void',
    required: false,
    description:
      'Called with the new status once a change actually takes effect. On the Enabled -> Disabled direction this only fires after the user confirms the warning dialog (observed asymmetric gate); on Disabled -> Enabled it fires immediately on click (observed ungated direction).',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Locks the control entirely (no click/keyboard interaction). Defaults to false.',
  },
  {
    name: 'label',
    type: 'string',
    required: true,
    description: 'Accessible name for the switch, e.g. "Share Publicly".',
  },
  {
    name: 'description',
    type: 'string',
    required: false,
    description:
      'Optional helper/status text shown below the label, e.g. the persistent status-banner copy observed alongside the second instance of this control.',
  },
];

/**
 * Deterministic synthetic data only — no real form/entry content. Each
 * fixture is a starting point for the interactive preview harness, not a
 * frozen snapshot: status/disabled can still be changed live via the
 * preview controls once a fixture is selected.
 */
export const fixtures: PreviewFixture<PublishToggleSwitchProps>[] = [
  {
    id: 'enabled-share-screen',
    title: 'Enabled (Share screen)',
    props: {
      status: 'enabled',
      label: 'Share Publicly',
      description: 'Anyone with the link can view and submit this form.',
      disabled: false,
    },
  },
  {
    id: 'enabled-status-banner',
    title: 'Enabled (status banner)',
    props: {
      status: 'enabled',
      label: 'Public access',
      description: 'Public users can access this form and submit responses.',
      disabled: false,
    },
  },
  {
    id: 'disabled-status',
    title: 'Disabled (public sharing off)',
    props: {
      status: 'disabled',
      label: 'Share Publicly',
      description: 'This form is not publicly accessible.',
      disabled: false,
    },
  },
  {
    id: 'locked-enabled',
    title: 'Locked while Enabled',
    props: {
      status: 'enabled',
      label: 'Share Publicly',
      description: 'Only the form owner can change this setting.',
      disabled: true,
    },
  },
  {
    id: 'locked-disabled',
    title: 'Locked while Disabled',
    props: {
      status: 'disabled',
      label: 'Share Publicly',
      disabled: true,
    },
  },
  {
    id: 'long-label',
    title: 'Long label',
    props: {
      status: 'enabled',
      label: 'Allow public users to view and submit this form via its Permalink URL',
      description: 'Disabling this will also disable any embeds of this form on external websites.',
      disabled: false,
    },
  },
];

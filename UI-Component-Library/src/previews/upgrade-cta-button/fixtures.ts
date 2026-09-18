import type { PreviewFixture, PropSchemaField } from '../types';
import type { UpgradeCtaButtonProps } from './UpgradeCtaButton';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'label',
    type: 'string',
    required: false,
    description:
      'Button text. Defaults to "Upgrade Now" — the literal captured DOM text on the Auto-Trash paywall. The source record notes the same `.upgradeButton` class/pattern appears on other gated features (e.g. Double Opt-In, Form Encryption) but their exact copy was not individually re-verified.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Disables the button. Not observed in the source ("Disabled state: not observed") — included for API completeness as a flagged assumption. Defaults to false.',
  },
  {
    name: 'onClick',
    type: '(event: React.MouseEvent<HTMLButtonElement>) => void',
    required: false,
    description:
      'Called on click. In production this triggers ZFUtil.upgradeAndshowReloadPopup, which opens an external Zoho Store URL in a new tab. This preview performs no real navigation — see README.',
  },
];

/**
 * Deterministic synthetic data only. The "default" fixture reproduces the
 * exact captured copy ("Upgrade Now"); the remaining fixtures use clearly
 * synthetic labels to exercise layout at different text lengths and to
 * illustrate the documented reuse of this same button across other gated
 * features — none of those alternate strings were themselves captured from
 * a live page, and are not presented as such.
 */
export const fixtures: PreviewFixture<UpgradeCtaButtonProps>[] = [
  {
    id: 'default',
    title: 'Default (Auto-Trash paywall)',
    props: {
      label: 'Upgrade Now',
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled (assumption — not observed)',
    props: {
      label: 'Upgrade Now',
      disabled: true,
    },
  },
  {
    id: 'long-label',
    title: 'Long label (synthetic layout test)',
    props: {
      label: 'Upgrade to the Premium Plan to Unlock This Feature',
      disabled: false,
    },
  },
  {
    id: 'short-label',
    title: 'Short label (synthetic layout test)',
    props: {
      label: 'Upgrade',
      disabled: false,
    },
  },
  {
    id: 'other-gated-feature',
    title: 'Alternate copy (synthetic — same class/pattern on other gated features)',
    props: {
      label: 'Unlock Premium',
      disabled: false,
    },
  },
];

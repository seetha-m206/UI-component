import type { PreviewFixture, PropSchemaField } from '../types';
import type { AnalyticsFeatureGateProps } from './AnalyticsFeatureGate';

export const propsSchema: PropSchemaField[] = [
  {
    name: 'locked',
    type: 'boolean',
    required: true,
    description:
      'Whether the gated content is currently hidden behind the blur+lock overlay. This component never changes it itself — the caller flips it in response to onUnlock.',
  },
  {
    name: 'gateType',
    type: "'free-toggle' | 'paywall'",
    required: true,
    description:
      'Which real gate mechanism this instance represents. Both share the exact same blur+lock visual in the source product (a documented ambiguity, not a simplification): "free-toggle" opens a confirmation modal before calling onUnlock; "paywall" calls onUnlock immediately but never unlocks the content by itself.',
  },
  {
    name: 'onUnlock',
    type: '(gateType: GateType) => void',
    required: false,
    description:
      'Called when the free-toggle modal is confirmed, or when the paywall CTA is clicked. The component never sets its own locked state — the caller decides what a completed gate action means.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'Disables the CTA button. Not observed in the source ("Loading/error/disabled states: not observed") — included for API completeness as a flagged assumption. Defaults to false.',
  },
  {
    name: 'label',
    type: 'string',
    required: true,
    description: 'Feature name shown in the gate overlay, e.g. "Advanced Metrics".',
  },
  {
    name: 'description',
    type: 'string',
    required: true,
    description: 'Helper copy shown under the label, describing what unlocking provides.',
  },
];

/**
 * Deterministic synthetic data only — no real account/form content. Each
 * fixture is a starting point for the interactive preview harness: clicking
 * through a fixture's gate flow (confirm modal / paywall CTA) exercises the
 * real interaction, it isn't a frozen screenshot.
 */
export const fixtures: PreviewFixture<AnalyticsFeatureGateProps>[] = [
  {
    id: 'locked-free-toggle',
    title: 'Locked — free opt-in',
    props: {
      locked: true,
      gateType: 'free-toggle',
      label: 'Advanced Metrics',
      description:
        'Track submission counts by device and how long users take to complete your form.',
      disabled: false,
    },
  },
  {
    id: 'locked-paywall',
    title: 'Locked — paywall',
    props: {
      locked: true,
      gateType: 'paywall',
      label: 'AI-Powered Drop-off Insights',
      description:
        'Identify exactly where respondents abandon your form with AI-generated recommendations.',
      disabled: false,
    },
  },
  {
    id: 'unlocked',
    title: 'Unlocked',
    props: {
      locked: false,
      gateType: 'free-toggle',
      label: 'Advanced Metrics',
      description:
        'Track submission counts by device and how long users take to complete your form.',
      disabled: false,
    },
  },
  {
    id: 'unlocked-paywall',
    title: 'Unlocked (post-upgrade)',
    props: {
      locked: false,
      gateType: 'paywall',
      label: 'AI-Powered Drop-off Insights',
      description:
        'Identify exactly where respondents abandon your form with AI-generated recommendations.',
      disabled: false,
    },
  },
  {
    id: 'disabled',
    title: 'Disabled (assumption — not observed)',
    props: {
      locked: true,
      gateType: 'free-toggle',
      label: 'Advanced Metrics',
      description: 'Unavailable while this form is in read-only mode.',
      disabled: true,
    },
  },
  {
    id: 'long-label',
    title: 'Long label/description',
    props: {
      locked: true,
      gateType: 'paywall',
      label: 'Cross-Form Benchmarking & Historical Trend Analysis',
      description:
        "Compare this form's completion rate, average time-to-complete, and field-level drop-off against every other form in your account, going back up to 24 months, with exportable trend charts for each metric.",
      disabled: false,
    },
  },
];

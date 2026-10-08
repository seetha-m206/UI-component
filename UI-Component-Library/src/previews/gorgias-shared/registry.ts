import type { PreviewConfig, PreviewRegistry } from '../types';
import { GorgiasPreview, type GorgiasVariant } from './GorgiasPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [{ id: 'disabled', label: 'Fixture', onLabel: 'Disabled', offLabel: 'Enabled' }],
};

const entries: Array<[string, GorgiasVariant, string]> = [
  ['gorgias-application-shell', 'application-shell', 'Authenticated Gorgias application shell'],
  ['gorgias-inbox-empty-queue', 'inbox-empty', 'Assigned-to-me empty queue'],
  ['gorgias-workspace-switcher', 'workspace-switcher', 'Product workspace switcher'],
  ['gorgias-global-search', 'global-search', 'Global search overlay'],
  ['gorgias-settings-catalogue', 'settings-catalogue', 'Settings navigation catalogue'],
  ['gorgias-app-marketplace', 'app-marketplace', 'App marketplace taxonomy'],
  ['gorgias-chat-channel-empty', 'chat-channel-empty', 'Chat-channel empty state'],
  ['gorgias-ai-agent-setup-boundary', 'ai-agent-boundary', 'AI Agent setup prerequisite'],
  ['gorgias-rules-onboarding', 'rules-onboarding', 'Rules onboarding surface'],
  ['gorgias-macro-library', 'macro-library', 'Macro inventory table'],
  ['gorgias-analytics-live-overview', 'analytics-overview', 'Analytics live overview'],
  ['gorgias-inbox-controls', 'inbox-controls', 'Inbox view, table and notification controls'],
  ['gorgias-gaia-assistant', 'gaia-assistant', 'Gaia assistant entry boundary'],
  ['gorgias-convert-overview', 'convert-overview', 'Convert educational overview'],
  ['gorgias-workflow-controls', 'workflow-controls', 'Workflow configuration suite'],
  ['gorgias-analytics-suite', 'analytics-suite', 'Secondary analytics information architecture'],
  ['gorgias-channel-settings', 'channel-settings', 'Non-sensitive channel settings catalogue'],
];

export const gorgiasIds = entries.map(([id]) => id);

export const gorgiasPreviews: PreviewRegistry = Object.fromEntries(entries.map(([id, variant, description]) => [id, {
  type: 'reconstructed' as const,
  Component: GorgiasPreview,
  label: 'Authenticated-source reconstruction',
  runtimeVerified: true,
  evidence: 'Authenticated read-only Gorgias observation on 2026-10-08. Workspace identity, user identity, ticket content, email addresses, phone numbers, object IDs, dates, business hours, timezone and request payloads are omitted or fictionalized. No ticket, message, rule, macro, integration, channel, AI prompt, AI setup, settings change, export or analytics opt-in was exercised.',
  fixtures: [{ id: 'default', title: description, props: { variant } }],
  config,
  propsSchema: [
    { name: 'variant', type: 'GorgiasVariant', required: true, description },
    { name: 'initialState', type: 'string', required: false, description: 'Reserved for documented fictional states.' },
    { name: 'disabled', type: 'boolean', required: false, description: 'Marks the fixture disabled without contacting Gorgias.' },
  ],
}]));

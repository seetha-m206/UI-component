import type { PreviewConfig, PreviewRegistry } from '../types';
import { LemlistPreview, type LemlistVariant } from './LemlistPreview';

const config: PreviewConfig = {
  viewports: [
    { id: 'desktop', label: 'Desktop', width: 1180 },
    { id: 'narrow', label: 'Narrow', width: 390 },
  ],
  toggles: [],
};
const entries: Array<[string, LemlistVariant, string]> = [
  ['lemlist-application-shell', 'application-shell', 'Authenticated application shell'],
  ['lemlist-home-onboarding', 'home-onboarding', 'Home onboarding and progress'],
  ['lemlist-people-database', 'people-database', 'Faceted prospect database'],
  ['lemlist-enrichment-entry', 'enrichment-entry', 'Enrichment source selector'],
  ['lemlist-signal-agent-landing', 'signal-agent-landing', 'Signal Agent activation'],
  ['lemlist-campaign-inventory', 'campaign-inventory', 'Campaign inventory'],
  ['lemlist-campaign-status-filter', 'campaign-status-filter', 'Campaign status menu'],
  ['lemlist-task-workspace', 'task-workspace', 'Task queue and bulk actions'],
  ['lemlist-unified-inbox', 'unified-inbox', 'Shared inbox empty state'],
  ['lemlist-reports-overview', 'reports-overview', 'Reports dashboard builder'],
  ['lemlist-deliverability-dashboard', 'deliverability-dashboard', 'Deliverability analytics'],
  ['lemlist-calls-upgrade', 'calls-upgrade', 'Calls plan gate'],
  ['lemlist-meetings-onboarding', 'meetings-onboarding', 'Meetings onboarding'],
  ['lemlist-contacts-empty', 'contacts-empty', 'Contacts empty inventory'],
  ['lemlist-companies-empty', 'companies-empty', 'Companies empty inventory'],
  ['lemlist-lemagent-workspace', 'lemagent-workspace', 'AI assistant workspace'],
  ['lemlist-global-command-search', 'global-command-search', 'Global command search'],
  ['lemlist-settings-navigation', 'settings-navigation', 'Settings navigation'],
  ['lemlist-account-security', 'account-security', 'Account and security settings'],
  ['lemlist-team-settings', 'team-settings', 'Team settings'],
  ['lemlist-billing-plan-comparison', 'billing-plan-comparison', 'Billing plan comparison'],
  ['lemlist-ai-context-center', 'ai-context-center', 'AI context organization'],
  ['lemlist-data-management-waterfalls', 'data-management-waterfalls', 'Enrichment waterfalls'],
  ['lemlist-integrations-marketplace', 'integrations-marketplace', 'Integration marketplace'],
  ['lemlist-notification-matrix', 'notification-matrix', 'Notification preference matrix'],
  ['lemlist-sending-limits', 'sending-limits', 'Sending safety limits'],
  ['lemlist-rules-of-engagement', 'rules-of-engagement', 'Campaign defaults'],
  ['lemlist-unsubscribe-inventory', 'unsubscribe-inventory', 'Unsubscribe inventory'],
  ['lemlist-logs-upgrade-gate', 'logs-upgrade-gate', 'Activity logs gate'],
  ['lemlist-template-catalogue', 'template-catalogue', 'Campaign template catalogue'],
  ['lemlist-template-empty-states', 'template-empty-states', 'Template empty states'],
  ['lemlist-account-sending-settings', 'account-sending-settings', 'Account sender connections'],
  ['lemlist-user-management', 'user-management', 'Team user management'],
  ['lemlist-domain-mailbox-catalogue', 'domain-mailbox-catalogue', 'Domain and mailbox catalogue'],
  ['lemlist-phone-settings', 'phone-settings', 'Phone and dialer settings'],
  [
    'lemlist-deliverability-outreach',
    'deliverability-outreach',
    'Outreach deliverability analytics',
  ],
  ['lemlist-inbox-placement-tests', 'inbox-placement-tests', 'Inbox placement tests'],
  ['lemlist-deliverability-alerts', 'deliverability-alerts', 'Deliverability alerts'],
  ['lemlist-deliverability-settings', 'deliverability-settings', 'Mailbox operations'],
  ['lemlist-reports-campaigns', 'reports-campaigns', 'Campaign performance reports'],
  ['lemlist-reports-activity', 'reports-activity', 'Activity performance reports'],
  ['lemlist-reports-team-performance', 'reports-team-performance', 'Team performance reports'],
];
export const lemlistIds = entries.map(([id]) => id);
export const lemlistPreviews: PreviewRegistry = Object.fromEntries(
  entries.map(([id, variant, description]) => [
    id,
    {
      type: 'reconstructed' as const,
      Component: LemlistPreview,
      label: 'Authenticated-source reconstruction',
      runtimeVerified: true,
      evidence:
        'Authenticated navigation-only lemlist observation on 2026-10-09. Identity, team and campaign identifiers, emails, private company context, tokens, payloads and provider screenshots are omitted or fictionalized. One earlier Create-entry click unexpectedly persisted an empty draft and remains disclosed in the acceptance ledger. The resumed pass used navigation-only controls.',
      fixtures: [{ id: 'default', title: description, props: { variant } }],
      config,
      propsSchema: [{ name: 'variant', type: 'LemlistVariant', required: true, description }],
    },
  ])
) as PreviewRegistry;

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { LemlistPreview, type LemlistVariant } from './LemlistPreview';
import { lemlistIds } from './registry';

const variants: LemlistVariant[] = [
  'application-shell',
  'home-onboarding',
  'people-database',
  'enrichment-entry',
  'signal-agent-landing',
  'campaign-inventory',
  'campaign-status-filter',
  'task-workspace',
  'unified-inbox',
  'reports-overview',
  'deliverability-dashboard',
  'calls-upgrade',
  'meetings-onboarding',
  'contacts-empty',
  'companies-empty',
  'lemagent-workspace',
  'global-command-search',
  'settings-navigation',
  'account-security',
  'team-settings',
  'billing-plan-comparison',
  'ai-context-center',
  'data-management-waterfalls',
  'integrations-marketplace',
  'notification-matrix',
  'sending-limits',
  'rules-of-engagement',
  'unsubscribe-inventory',
  'logs-upgrade-gate',
  'template-catalogue',
  'template-empty-states',
  'account-sending-settings',
  'user-management',
  'domain-mailbox-catalogue',
  'phone-settings',
  'deliverability-outreach',
  'inbox-placement-tests',
  'deliverability-alerts',
  'deliverability-settings',
  'reports-campaigns',
  'reports-activity',
  'reports-team-performance',
];
describe('LemlistPreview', () => {
  it('registers and renders every lemlist variant', () => {
    expect(lemlistIds).toHaveLength(variants.length);
    for (const variant of variants) {
      const { container } = render(<LemlistPreview variant={variant} />);
      expect(container.querySelector('main')).toBeInTheDocument();
      cleanup();
    }
  });
  it('disables campaign creation', () => {
    render(<LemlistPreview variant="campaign-inventory" />);
    expect(screen.getByRole('button', { name: 'Create' })).toBeDisabled();
  });
  it('disables AI submission', () => {
    render(<LemlistPreview variant="lemagent-workspace" />);
    expect(screen.getByLabelText('AI prompt')).toBeDisabled();
  });
  it('uses fictional identity and email data', () => {
    render(<LemlistPreview variant="account-security" />);
    expect(screen.getByText('Northstar workspace')).toBeInTheDocument();
    expect(screen.queryByText(/real account holder|production email/i)).not.toBeInTheDocument();
  });
  it('switches template tabs locally', async () => {
    const user = userEvent.setup();
    render(<LemlistPreview variant="template-empty-states" />);
    await user.click(screen.getByRole('button', { name: 'Images' }));
    expect(screen.getByPlaceholderText('Search images templates')).toBeInTheDocument();
  });
});

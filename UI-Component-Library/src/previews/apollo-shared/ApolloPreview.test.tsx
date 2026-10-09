import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ApolloPreview, type ApolloVariant } from './ApolloPreview';

const variants: ApolloVariant[] = [
  'application-shell',
  'home-onboarding-dashboard',
  'mission-accordion',
  'onboarding-task-row',
  'layout-picker',
  'global-search-palette',
  'activity-notifications-panel',
  'ai-assistant-onboarding',
  'profile-menu',
  'people-discovery-empty-state',
  'people-filter-sidebar',
  'people-filter-catalogue-dialog',
  'people-job-title-filter',
  'people-quick-filters',
  'people-import-menu',
  'people-saved-empty-state',
  'people-sort-dialog',
  'companies-discovery-empty-state',
  'companies-filter-sidebar',
  'companies-filter-catalogue-dialog',
  'companies-saved-search-selector',
  'companies-search-settings-drawer',
  'companies-company-filter',
  'companies-location-filter',
  'companies-employee-filter',
  'companies-import-menu',
  'companies-website-visitors-prompt',
  'companies-saved-empty-state',
  'lists-empty-state',
  'data-health-center',
  'data-enrichment-tabs',
  'crm-enrichment-empty-state',
  'csv-enrichment-paywall',
  'job-change-alerts-paywall',
  'forms-overview',
  'sequences-empty-state',
  'sequence-analytics-empty-state',
  'sequence-diagnostics-empty-state',
  'emails-mailbox-onboarding',
  'calls-dialer-paywall',
  'calls-analytics-empty-state',
  'tasks-empty-state',
  'tasks-filter-sidebar',
  'tasks-sort-dialog',
  'tasks-view-options-drawer',
  'meetings-calendar-onboarding',
  'conversations-landing',
  'deals-empty-state',
  'deals-onboarding-popover',
  'deals-analytics-empty-state',
  'workflows-overview',
  'workflow-template-library',
  'analytics-overview',
  'website-visitors-onboarding',
  'saved-people-empty-state',
  'saved-companies-empty-state',
  'email-health-overview',
  'email-domains-empty-state',
  'email-mailboxes-empty-table',
  'sending-policies-settings',
  'workspace-settings-overview',
  'ai-assistant-page',
  'plan-overview',
  'product-add-ons',
  'billing-empty-state',
  'credit-usage-dashboard',
  'data-request-navigation',
  'ai-word-usage-empty-state',
  'users-table',
  'teams-plan-gate',
  'permission-profiles-plan-gate',
  'territories-plan-gate',
  'license-settings',
  'workspace-details',
  'team-sharing-defaults-empty-state',
  'system-activity-log',
  'support-access-settings',
  'integrations-catalogue',
  'mcp-clients-empty-state',
  'sequence-alert-thresholds',
  'tracking-subdomain-onboarding',
  'dialer-settings-plan-gate',
  'prospecting-configuration',
  'snippets-empty-state',
  'contact-stage-settings',
  'account-stage-settings',
  'deal-pipeline-settings',
  'global-picklists-plan-gate',
  'goals-plan-gate',
  'imports-exports-hub',
  'removal-requests-empty-state',
  'personas-settings',
  'buying-intent-topics',
  'website-tracking-installation',
  'signals-inventory',
  'scoring-models',
  'ai-context-review',
  'conversation-settings-redirect-gate',
  'team-meetings-onboarding',
];

describe('ApolloPreview', () => {
  it('renders every Apollo variant inside the reconstructed shell', () => {
    for (const variant of variants) {
      const { container } = render(<ApolloPreview variant={variant} />);
      expect(container.querySelector('[class*="app"]')).toBeInTheDocument();
      cleanup();
    }
  });

  it('expands missions locally while keeping provider actions disabled', async () => {
    const user = userEvent.setup();
    render(<ApolloPreview variant="mission-accordion" />);
    await user.click(screen.getByRole('button', { name: /Get your inbox ready to send/ }));
    expect(screen.getByText('Connect your email to send, track and manage outreach')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Connect inbox' })).toBeDisabled();
  });

  it('switches local layout and notification tabs', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<ApolloPreview variant="layout-picker" />);
    await user.click(screen.getByRole('tab', { name: 'Starred' }));
    expect(screen.getByText('No fictional layouts in this tab.')).toBeVisible();
    rerender(<ApolloPreview variant="activity-notifications-panel" />);
    await user.click(screen.getByRole('tab', { name: 'Notifications' }));
    expect(screen.getByText('No Notifications')).toBeVisible();
  });

  it('keeps search, AI, account and provider-writing actions inert', () => {
    const { rerender } = render(<ApolloPreview variant="global-search-palette" />);
    expect(screen.getByRole('button', { name: /Build your target audience/ })).toBeDisabled();
    rerender(<ApolloPreview variant="ai-assistant-onboarding" />);
    expect(screen.getByRole('button', { name: 'Continue' })).toBeDisabled();
    rerender(<ApolloPreview variant="profile-menu" />);
    expect(screen.getByRole('menuitem', { name: 'Log out' })).toBeDisabled();
  });

  it('uses only fictional identity and credit values', () => {
    render(<ApolloPreview variant="profile-menu" />);
    expect(screen.getByText('Atlas Researcher')).toBeVisible();
    expect(screen.getByText('researcher@atlas.example')).toBeVisible();
    expect(screen.getByRole('button', { name: '80 credits' })).toBeDisabled();
  });

  it('switches people scopes locally without exposing provider records', async () => {
    const user = userEvent.setup();
    render(<ApolloPreview variant="people-filter-sidebar" />);
    await user.click(screen.getByRole('radio', { name: /Saved/ }));
    expect(screen.getByRole('radio', { name: /Saved/ })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getAllByText('120M')).toHaveLength(2);
  });

  it('keeps people search, import, filters and workflows disabled', () => {
    const { rerender } = render(<ApolloPreview variant="people-filter-catalogue-dialog" />);
    expect(screen.getByRole('button', { name: 'Apply Filters' })).toBeDisabled();
    rerender(<ApolloPreview variant="people-import-menu" />);
    expect(screen.getByRole('menuitem', { name: 'Single contact' })).toBeDisabled();
    expect(screen.getByRole('menuitem', { name: 'CSV' })).toBeDisabled();
    rerender(<ApolloPreview variant="people-saved-empty-state" />);
    expect(screen.getByRole('button', { name: /Research with AI/ })).toBeDisabled();
    expect(screen.getByRole('button', { name: /Create workflow/ })).toBeDisabled();
  });

  it('switches company scopes locally without exposing provider records', async () => {
    const user = userEvent.setup();
    render(<ApolloPreview variant="companies-filter-sidebar" />);
    await user.click(screen.getByRole('radio', { name: /Saved/ }));
    expect(screen.getByRole('radio', { name: /Saved/ })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getAllByText('12M')).toHaveLength(2);
  });

  it('keeps company import, filters, website connection and search actions disabled', () => {
    const { rerender } = render(<ApolloPreview variant="companies-filter-catalogue-dialog" />);
    expect(screen.getByRole('button', { name: 'Apply Filters' })).toBeDisabled();
    rerender(<ApolloPreview variant="companies-import-menu" />);
    expect(screen.getByRole('menuitem', { name: 'Single account' })).toBeDisabled();
    expect(screen.getByRole('menuitem', { name: 'Find local businesses · New' })).toBeDisabled();
    rerender(<ApolloPreview variant="companies-website-visitors-prompt" />);
    expect(screen.getByRole('button', { name: 'Connect website' })).toBeDisabled();
    rerender(<ApolloPreview variant="companies-saved-empty-state" />);
    expect(screen.getByRole('button', { name: /Save as new search/ })).toBeDisabled();
    expect(screen.getByRole('button', { name: /Companies Auto-Score/ })).toBeDisabled();
  });

  it('keeps remaining creation, connection, upgrade and automation actions disabled', () => {
    const { rerender } = render(<ApolloPreview variant="lists-empty-state" />);
    expect(screen.getByRole('button', { name: 'Create a people list' })).toBeDisabled();
    rerender(<ApolloPreview variant="crm-enrichment-empty-state" />);
    expect(screen.getByRole('button', { name: 'Connect Salesforce' })).toBeDisabled();
    rerender(<ApolloPreview variant="csv-enrichment-paywall" />);
    expect(screen.getByRole('button', { name: 'Import CSV' })).toBeDisabled();
    rerender(<ApolloPreview variant="sequences-empty-state" />);
    expect(screen.getByRole('button', { name: 'Create with AI' })).toBeDisabled();
    rerender(<ApolloPreview variant="calls-dialer-paywall" />);
    expect(screen.getByRole('button', { name: 'Upgrade to use the dialer' })).toBeDisabled();
  });

  it('keeps deal, workflow, website, settings and assistant writes disabled', () => {
    const { rerender } = render(<ApolloPreview variant="deals-empty-state" />);
    expect(screen.getByRole('button', { name: 'Create deal' })).toBeDisabled();
    rerender(<ApolloPreview variant="workflows-overview" />);
    expect(screen.getByRole('button', { name: 'Create workflow' })).toBeDisabled();
    rerender(<ApolloPreview variant="website-visitors-onboarding" />);
    expect(screen.getByRole('button', { name: 'Add website' })).toBeDisabled();
    rerender(<ApolloPreview variant="sending-policies-settings" />);
    expect(screen.getByRole('button', { name: 'Save changes' })).toBeDisabled();
    rerender(<ApolloPreview variant="ai-assistant-page" />);
    expect(screen.getByRole('button', { name: 'Ask' })).toBeDisabled();
  });

  it('uses synthetic remaining-screen content without provider identities', () => {
    const { rerender } = render(<ApolloPreview variant="csv-enrichment-paywall" />);
    expect(screen.getByText(/Synthetic rows/)).toBeVisible();
    rerender(<ApolloPreview variant="deals-analytics-empty-state" />);
    expect(screen.getByText('Deals · 0')).toBeVisible();
    expect(screen.queryByText(/opaque provider identifier/i)).not.toBeInTheDocument();
    rerender(<ApolloPreview variant="workspace-settings-overview" />);
    expect(screen.getByText('Users & teams')).toBeVisible();
  });

  it('keeps every passive settings action disabled', () => {
    const { rerender } = render(<ApolloPreview variant="billing-empty-state" />);
    expect(screen.getByRole('button', { name: 'Update credit card' })).toBeDisabled();
    rerender(<ApolloPreview variant="users-table" />);
    expect(screen.getByRole('button', { name: 'New user' })).toBeDisabled();
    rerender(<ApolloPreview variant="integrations-catalogue" />);
    expect(screen.getByRole('button', { name: 'Connect' })).toBeDisabled();
    rerender(<ApolloPreview variant="prospecting-configuration" />);
    expect(screen.getByRole('button', { name: 'Save privacy rules' })).toBeDisabled();
    rerender(<ApolloPreview variant="website-tracking-installation" />);
    expect(screen.getByRole('button', { name: 'Copy code' })).toBeDisabled();
    rerender(<ApolloPreview variant="ai-context-review" />);
    expect(screen.getByRole('button', { name: 'Approve and save' })).toBeDisabled();
  });

  it('uses fictional settings values and omits provider identifiers', () => {
    const { rerender } = render(<ApolloPreview variant="workspace-details" />);
    expect(screen.getByText('Atlas Research')).toBeVisible();
    rerender(<ApolloPreview variant="website-tracking-installation" />);
    expect(
      screen.getByText(/Placeholder code without provider application identifiers/)
    ).toBeVisible();
    rerender(<ApolloPreview variant="ai-context-review" />);
    expect(screen.getByText(/Atlas Research provides synthetic business software/)).toBeVisible();
  });
});

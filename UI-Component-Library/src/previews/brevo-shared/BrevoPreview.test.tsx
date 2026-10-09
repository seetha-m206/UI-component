import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { BrevoPreview, type BrevoVariant } from './BrevoPreview';

const variants: BrevoVariant[] = [
  'application-shell',
  'home-dashboard',
  'calendar-planner',
  'onboarding-empty-states',
  'campaign-channel-selector',
  'landing-page-upgrade-popover',
  'forms-empty-state',
  'marketing-statistics',
  'template-empty-state',
  'contact-table',
  'list-table',
  'segment-empty-state',
  'company-empty-state',
  'sales-activation-gate',
  'custom-objects-upgrade-gate',
  'automation-onboarding',
  'transactional-configuration',
  'conversations-inbox',
  'commerce-integration-catalogue',
  'loyalty-upgrade-gate',
  'media-library-empty-state',
  'analytics-upgrade-gates',
  'usage-plan-popover',
  'help-panel',
  'notification-popover',
  'account-menu',
  'settings-navigation',
  'general-settings-form',
  'language-preferences',
  'user-management',
  'two-factor-authentication',
  'localization-upgrade-gate',
  'deliverability-center',
  'utm-tracking-settings',
  'custom-objects-settings-gate',
  'data-feeds-upgrade-gate',
  'contact-settings-catalogue',
  'company-settings-catalogue',
  'deal-settings-activation',
  'campaign-settings-catalogue',
  'conversation-queue-states',
  'visitors-online-table',
  'conversation-statistics',
  'meetings-onboarding',
  'notification-activity',
];

describe('BrevoPreview', () => {
  it('renders every Brevo variant inside the reconstructed shell', () => {
    for (const variant of variants) {
      const { container } = render(<BrevoPreview variant={variant} />);
      expect(container.querySelector('[class*="app"]')).toBeInTheDocument();
      cleanup();
    }
  });

  it('keeps campaign generation disabled', () => {
    render(<BrevoPreview variant="campaign-channel-selector" />);
    expect(screen.getByRole('button', { name: /Generate email with AI/ })).toBeDisabled();
    expect(screen.getByRole('button', { name: /✉ Email/ })).toBeDisabled();
  });

  it('uses fictional contact data', () => {
    render(<BrevoPreview variant="contact-table" />);
    expect(screen.getByText('alex@atlas.example')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Import contacts' })).toBeDisabled();
  });

  it('switches form tabs locally', async () => {
    const user = userEvent.setup();
    render(<BrevoPreview variant="forms-empty-state" />);
    await user.click(screen.getByRole('button', { name: 'Unsubscribe' }));
    expect(screen.getByRole('heading', { name: 'Unsubscribe forms' })).toBeInTheDocument();
  });

  it('disables conversation sending', () => {
    render(<BrevoPreview variant="conversations-inbox" />);
    expect(screen.getByRole('button', { name: 'Send' })).toBeDisabled();
    expect(screen.getByLabelText('Fictional reply')).toBeDisabled();
  });

  it('disables transactional credential actions', () => {
    render(<BrevoPreview variant="transactional-configuration" />);
    expect(screen.getByText('fictional-user@example.invalid')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
  });

  it('disables settings persistence and deletion', () => {
    render(<BrevoPreview variant="general-settings-form" />);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Definitively close your account' })).toBeDisabled();
  });

  it('switches conversation queues locally', async () => {
    const user = userEvent.setup();
    render(<BrevoPreview variant="conversation-queue-states" />);
    await user.click(screen.getByRole('button', { name: 'Unassigned' }));
    expect(screen.getByText('Unassigned has no fictional open conversations.')).toBeInTheDocument();
  });

  it('keeps continuation settings inert', () => {
    render(<BrevoPreview variant="language-preferences" />);
    expect(screen.getByRole('button', { name: 'Save the preferences' })).toBeDisabled();
    expect(screen.getByLabelText('Timezone')).toBeDisabled();
  });
});

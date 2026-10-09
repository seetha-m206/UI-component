import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ZohoCampaignsPreview, type ZohoCampaignsVariant } from './ZohoCampaignsPreview';

const variants: ZohoCampaignsVariant[] = [
  'application-shell',
  'getting-started-dashboard',
  'home-dashboard',
  'analytics-channel-tabs',
  'email-campaign-starter',
  'whatsapp-setup-gate',
  'sms-gateway-selector',
  'contact-directory',
  'list-table',
  'segment-starter',
  'form-starter',
  'workflow-starter',
  'media-library-empty-state',
  'email-template-starter',
  'settings-directory',
  'notification-settings',
  'topics-settings',
  'contact-scoring',
  'field-management',
  'signup-lifecycle-directory',
  'utm-tracking',
  'frequency-capping',
  'integrations-catalogue',
  'webhooks-empty-state',
  'compliance-settings',
  'double-opt-in',
  'email-tracking',
  'sender-authentication',
  'bot-filtering',
  'organization-settings',
  'subscription-usage',
  'user-management',
  'roles-permissions',
  'workspace-management',
  'audit-log',
  'sms-preferences',
  'zia-usage-details',
  'global-create-menu',
  'notification-center',
  'account-help-panel',
  'contact-analytics',
  'ecommerce-analytics-gate',
  'zia-model-configuration',
];

describe('ZohoCampaignsPreview', () => {
  it('renders every observed variant in the fictional shell', () => {
    for (const variant of variants) {
      const { container } = render(<ZohoCampaignsPreview variant={variant} />);
      expect(container.querySelector('[class*="app"]')).toBeInTheDocument();
      cleanup();
    }
  });

  it('keeps consequential campaign actions disabled', () => {
    render(<ZohoCampaignsPreview variant="email-campaign-starter" />);
    expect(screen.getByRole('button', { name: 'Continue' })).toBeDisabled();
  });

  it('uses fictional contact data', () => {
    render(<ZohoCampaignsPreview variant="contact-directory" />);
    expect(screen.getByText('alex@atlas.example')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Import contacts' })).toBeDisabled();
  });

  it('switches analytics tabs locally', async () => {
    const user = userEvent.setup();
    render(<ZohoCampaignsPreview variant="analytics-channel-tabs" />);
    await user.click(screen.getByRole('tab', { name: 'SMS' }));
    expect(screen.getByRole('heading', { name: 'SMS analytics' })).toBeInTheDocument();
  });

  it('switches notification fixtures without saving', async () => {
    const user = userEvent.setup();
    render(<ZohoCampaignsPreview variant="notification-settings" />);
    await user.click(screen.getByRole('checkbox', { name: /Contact subscription notification/ }));
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
  });

  it('keeps AI provider configuration disabled', () => {
    render(<ZohoCampaignsPreview variant="zia-model-configuration" />);
    expect(screen.getByRole('button', { name: 'Configure provider' })).toBeDisabled();
  });

  it('keeps continued settings actions disabled and fictional', () => {
    render(<ZohoCampaignsPreview variant="sender-authentication" />);
    expect(screen.getByText('sender@atlas.example')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add sender' })).toBeDisabled();
  });

  it('keeps remaining-screen actions disabled and locally interactive', async () => {
    const user = userEvent.setup();
    render(<ZohoCampaignsPreview variant="contact-analytics" />);
    await user.click(screen.getByRole('tab', { name: 'Cumulative' }));
    expect(screen.getByText(/Cumulative view/)).toBeInTheDocument();
    cleanup();
    render(<ZohoCampaignsPreview variant="ecommerce-analytics-gate" />);
    expect(screen.getByRole('button', { name: 'Connect store' })).toBeDisabled();
  });
});

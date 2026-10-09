import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { MailchimpPreview, type MailchimpVariant } from './MailchimpPreview';

const variants: MailchimpVariant[] = [
  'application-shell',
  'primary-navigation',
  'global-search-dialog',
  'quick-actions-menu',
  'notification-panel',
  'account-menu',
  'home-onboarding-checklist',
  'home-template-carousel',
  'popup-form-cards',
  'campaigns-inventory-controls',
  'campaigns-empty-state',
  'automation-onboarding',
  'automation-loading-state',
  'forms-type-cards',
  'contacts-import-empty-state',
  'contact-integration-suggestions',
  'tags-empty-state',
  'segments-empty-state',
  'prebuilt-segment-cards',
  'marketing-dashboard-plan-gate',
  'conversion-insights-connect-store',
  'custom-reports-plan-gate',
  'website-wix-handoff',
  'content-studio-empty-state',
  'content-pagination-controls',
  'integrations-directory',
  'integration-pagination',
  'email-template-tabs',
  'email-template-category-controls',
  'email-template-filter-toolbar',
  'email-template-gallery-card',
  'saved-template-empty-state',
  'recently-sent-empty-state',
  'flow-template-filter-toolbar',
  'flow-template-card',
  'transactional-plan-gate',
  'survey-template-card',
  'subscriber-preferences-empty-state',
  'inbox-onboarding-modal',
  'website-settings-empty-state',
  'website-reports-empty-state',
  'brand-kit-editor',
  'manage-integrations-card',
  'forms-system-forms-table',
  'forms-audience-defaults',
  'connected-sites-empty-state',
  'forms-popup-template-strip',
  'forms-integration-cards',
  'content-products-empty-state',
  'content-instagram-connect-state',
  'content-giphy-search',
  'content-canva-connect-state',
];

describe('MailchimpPreview', () => {
  it('renders every registered variant', () => {
    for (const variant of variants) {
      const { container } = render(<MailchimpPreview variant={variant} />);
      expect(container.querySelector('[class*="app"]')).toBeInTheDocument();
      cleanup();
    }
  });
  it('uses fictional account data', () => {
    render(<MailchimpPreview variant="account-menu" />);
    expect(screen.getByText('Atlas Studio')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log out' })).toBeDisabled();
  });
  it('keeps campaign creation and sending disabled', () => {
    render(<MailchimpPreview variant="campaigns-inventory-controls" />);
    expect(
      screen
        .getAllByRole('button', { name: 'Create' })
        .every((button) => button.hasAttribute('disabled'))
    ).toBe(true);
    expect(screen.getByRole('button', { name: 'Clear all' })).toBeDisabled();
  });
  it('changes onboarding disclosure locally', async () => {
    const user = userEvent.setup();
    render(<MailchimpPreview variant="home-onboarding-checklist" />);
    await user.click(screen.getByRole('button', { name: /Connect an app/ }));
    expect(screen.getByRole('button', { name: /Connect an app/ })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });
  it('pages the template carousel locally', async () => {
    const user = userEvent.setup();
    render(<MailchimpPreview variant="home-template-carousel" />);
    await user.click(screen.getByRole('button', { name: 'Next template' }));
    expect(screen.getByText('2 of 5')).toBeInTheDocument();
  });
  it('changes integration paging locally', async () => {
    const user = userEvent.setup();
    render(<MailchimpPreview variant="integrations-directory" />);
    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('16 - 30 of 355')).toBeInTheDocument();
    expect(screen.getByText('WooCommerce')).toBeInTheDocument();
  });
  it('keeps import and integration actions disabled', () => {
    render(<MailchimpPreview variant="contacts-import-empty-state" />);
    expect(screen.getByRole('button', { name: 'Upload a file' })).toBeDisabled();
    cleanup();
    render(<MailchimpPreview variant="contact-integration-suggestions" />);
    expect(
      screen
        .getAllByRole('button', { name: 'Connect' })
        .every((button) => button.hasAttribute('disabled'))
    ).toBe(true);
  });
  it('keeps provider gates disabled', () => {
    render(<MailchimpPreview variant="conversion-insights-connect-store" />);
    expect(screen.getByRole('button', { name: 'Connect a store' })).toBeDisabled();
    cleanup();
    render(<MailchimpPreview variant="custom-reports-plan-gate" />);
    expect(screen.getByRole('button', { name: 'Upgrade to Standard plan' })).toBeDisabled();
  });
  it('keeps newly audited connection and settings boundaries disabled', () => {
    render(<MailchimpPreview variant="content-canva-connect-state" />);
    expect(screen.getByRole('button', { name: 'Connect to Canva' })).toBeDisabled();
    cleanup();
    render(<MailchimpPreview variant="brand-kit-editor" />);
    expect(
      screen
        .getAllByRole('button', { name: 'Review' })
        .every((button) => button.hasAttribute('disabled'))
    ).toBe(true);
  });
  it('preserves the undismissed Inbox onboarding boundary', () => {
    render(<MailchimpPreview variant="inbox-onboarding-modal" />);
    expect(screen.getByRole('button', { name: 'Start tour' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Skip tour' })).toBeDisabled();
  });
});

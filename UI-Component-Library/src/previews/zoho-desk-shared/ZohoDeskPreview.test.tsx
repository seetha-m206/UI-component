import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ZohoDeskPreview } from './ZohoDeskPreview';
import { zohoDeskComponents } from './catalogue';
import { zohoDeskPreviews } from './registry';

describe('ZohoDeskPreview', () => {
  it('registers every documented Zoho Desk component with a props schema', () => {
    expect(Object.keys(zohoDeskPreviews)).toHaveLength(60);
    for (const component of zohoDeskComponents) {
      const entry = zohoDeskPreviews[component.id];
      expect(entry?.type).toBe('reconstructed');
      if (entry?.type === 'reconstructed') expect(entry.propsSchema.length).toBeGreaterThan(0);
    }
  });

  it('mounts every documented fixture state without a missing-component fallback', () => {
    for (const entry of Object.values(zohoDeskPreviews)) {
      expect(entry.type).toBe('reconstructed');
      if (entry.type !== 'reconstructed') continue;
      for (const fixture of entry.fixtures) {
        const { container, unmount } = render(<entry.Component {...fixture.props} />);
        expect(container).not.toHaveTextContent('Unknown Zoho Desk fixture');
        unmount();
      }
      cleanup();
    }
  });

  it('guards ticket submission inside the fictional form', async () => {
    const user = userEvent.setup();
    render(<ZohoDeskPreview componentId="zoho-desk-ticket-form" initialState="Pristine" />);
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByRole('status')).toHaveTextContent('Submission is disabled');
  });

  it('switches detail tabs without sending a reply', async () => {
    const user = userEvent.setup();
    render(
      <ZohoDeskPreview componentId="zoho-desk-ticket-detail-tabs" initialState="Conversation" />
    );
    await user.click(screen.getByRole('tab', { name: 'Attachment' }));
    expect(screen.getByText('No Attachments available')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Browse Files' }));
    expect(screen.getByRole('status')).toHaveTextContent('disabled');
  });

  it('opens and closes the fictional global search overlay', async () => {
    const user = userEvent.setup();
    render(<ZohoDeskPreview componentId="zoho-desk-global-header" initialState="Normal header" />);
    await user.click(screen.getByRole('button', { name: 'Open global search' }));
    expect(screen.getByRole('dialog', { name: 'Global search' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Close overlay' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('guards activity and notification mutations', async () => {
    const user = userEvent.setup();
    const activity = render(
      <ZohoDeskPreview componentId="zoho-desk-activities-empty-state" initialState="Action menu" />
    );
    await user.click(screen.getByRole('button', { name: 'Task' }));
    expect(screen.getByRole('status')).toHaveTextContent('Task creation is disabled');
    activity.unmount();
    render(<ZohoDeskPreview componentId="zoho-desk-notifications-drawer" initialState="All" />);
    await user.click(screen.getByRole('button', { name: 'Mark All As Read' }));
    expect(screen.getByRole('status')).toHaveTextContent('disabled');
  });

  it('guards remaining module activation and feed actions', async () => {
    const user = userEvent.setup();
    const social = render(<ZohoDeskPreview componentId="zoho-desk-social-onboarding" />);
    await user.click(screen.getByRole('button', { name: 'Get Started' }));
    expect(screen.getByRole('status')).toHaveTextContent('disabled');
    social.unmount();
    render(<ZohoDeskPreview componentId="zoho-desk-team-feeds" />);
    await user.click(screen.getByRole('button', { name: 'Close Ticket' }));
    expect(screen.getByRole('status')).toHaveTextContent('disabled');
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { PipedreamPreview } from './PipedreamPreview';
import { pipedreamPreviews } from './registry';

describe('PipedreamPreview', () => {
  it('renders every registered fictional state', () => {
    for (const preview of Object.values(pipedreamPreviews)) {
      if (preview.type !== 'reconstructed') continue;
      for (const fixture of preview.fixtures) {
        const { unmount } = render(<preview.Component {...fixture.props} />);
        unmount();
      }
    }
  });

  it('renders the authenticated workspace shell without provider identifiers', () => {
    const { container } = render(<PipedreamPreview variant="application-shell" />);
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
    expect(container).not.toHaveTextContent('centilio');
    expect(container).toHaveTextContent('researcher@example.test');
  });

  it('guards workflow creation inside the fictional project menu', async () => {
    const user = userEvent.setup();
    render(<PipedreamPreview variant="project-create-menu" />);
    await user.click(screen.getByRole('button', { name: /workflow/i }));
    expect(screen.getByRole('status')).toHaveTextContent('No workflow was created.');
  });

  it('opens and cancels the fictional data-store dialog', async () => {
    const user = userEvent.setup();
    render(<PipedreamPreview variant="data-stores-empty" />);
    await user.click(screen.getAllByRole('button', { name: /new data store/i }).at(-1)!);
    expect(screen.getByRole('dialog', { name: 'New data store' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('dialog', { name: 'New data store' })).not.toBeInTheDocument();
  });

  it('exposes the observed event status filters without execution data', async () => {
    const user = userEvent.setup();
    render(<PipedreamPreview variant="event-history-plan-gate" />);
    await user.click(screen.getByRole('button', { name: /filter by status/i }));
    expect(screen.getByRole('menu')).toHaveTextContent('Success');
    expect(screen.getByRole('menu')).toHaveTextContent('Error');
    expect(screen.getByRole('menu')).toHaveTextContent('Paused');
  });

  it('keeps Connect API-client creation local', async () => {
    const user = userEvent.setup();
    render(<PipedreamPreview variant="connect-api-clients" />);
    await user.click(screen.getByRole('button', { name: 'New API client' }));
    expect(screen.getByRole('status')).toHaveTextContent('No API client was created.');
  });

  it('keeps Connect user onboarding disconnected from provider accounts', async () => {
    const user = userEvent.setup();
    render(<PipedreamPreview variant="connect-users-onboarding" />);
    await user.click(screen.getByRole('button', { name: 'Connect account' }));
    expect(screen.getByRole('status')).toHaveTextContent('No account was connected.');
  });
});

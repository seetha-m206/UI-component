import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ZendeskScreensPreview } from './ZendeskScreens';

describe('Zendesk screen reconstructions', () => {
  it('opens observed search drawers and changes columns only in local state', async () => {
    const user = userEvent.setup();
    render(<ZendeskScreensPreview kind="search-results" />);
    expect(screen.getByRole('table', { name: 'Fictional ticket results' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Filters' }));
    expect(within(screen.getByRole('dialog', { name: 'Filters' })).getByLabelText('Support type')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    await user.click(screen.getByRole('button', { name: 'Customize columns' }));
    const dialog = screen.getByRole('dialog', { name: 'Manage columns' });
    expect(within(dialog).getByText('2 of 10 columns remaining')).toBeInTheDocument();
    await user.click(within(dialog).getByRole('button', { name: 'Remove Group' }));
    expect(within(dialog).getByText('3 of 10 columns remaining')).toBeInTheDocument();
  });
  it('switches among the three observed empty work queues', async () => {
    const user = userEvent.setup();
    render(<ZendeskScreensPreview kind="work-queues" />);
    expect(screen.getByText("No CC'd work")).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Following' }));
    expect(screen.getByText('No work to follow')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Last 30 days' }));
    expect(screen.getByText('No completed work')).toBeInTheDocument();
  });
  it('keeps theme and member actions local', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<ZendeskScreensPreview kind="themes" />);
    await user.click(screen.getByRole('button', { name: 'Theme library' }));
    expect(screen.getByRole('button', { name: 'Theme library' })).toHaveAttribute('aria-pressed', 'true');
    rerender(<ZendeskScreensPreview kind="team-members" />);
    await user.click(screen.getByRole('button', { name: 'Add team member' }));
    expect(screen.getByRole('status')).toHaveTextContent('No Zendesk change was made');
  });
});

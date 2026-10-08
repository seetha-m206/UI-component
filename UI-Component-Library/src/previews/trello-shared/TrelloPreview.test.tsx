import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TrelloPreview, type TrelloVariant } from './TrelloPreview';

describe('TrelloPreview', () => {
  it('renders the fictional workspace identity', () => {
    render(<TrelloPreview variant="workspace-overview" />);
    expect(screen.getByRole('heading', { name: 'Atlas Studio' })).toBeInTheDocument();
  });

  it('opens and closes fictional global search without submitting', async () => {
    const user = userEvent.setup();
    render(<TrelloPreview variant="application-shell" />);
    await user.click(screen.getByRole('button', { name: /Search/i }));
    expect(screen.getByRole('dialog', { name: 'Fictional Trello search' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(
      screen.queryByRole('dialog', { name: 'Fictional Trello search' })
    ).not.toBeInTheDocument();
  });

  it('filters fictional boards in the board switcher', async () => {
    const user = userEvent.setup();
    render(<TrelloPreview variant="board-switcher" />);
    const search = screen.getByLabelText('Search fictional boards');
    await user.type(search, 'Editorial');
    expect(screen.getByRole('button', { name: /Editorial roadmap/ })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Atlas launch/ })).not.toBeInTheDocument();
  });

  it('opens board settings from the board menu without changing values', async () => {
    const user = userEvent.setup();
    render(<TrelloPreview variant="board-menu-and-settings" />);
    await user.click(screen.getByRole('button', { name: 'Settings' }));
    expect(screen.getByRole('dialog', { name: 'Settings' })).toBeInTheDocument();
    expect(screen.getByLabelText('Card covers enabled')).toBeChecked();
  });

  it('collapses and restores fictional cards locally', async () => {
    const user = userEvent.setup();
    render(<TrelloPreview variant="board-workspace" />);
    expect(screen.getByRole('button', { name: /Shape launch brief/ })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Launch guide/ }));
    expect(screen.queryByRole('button', { name: /Shape launch brief/ })).not.toBeInTheDocument();
  });

  it('keeps provider-changing controls disabled in card detail', () => {
    render(<TrelloPreview variant="card-detail-dialog" />);
    expect(screen.getByRole('dialog', { name: 'Fictional card detail' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Write a comment…' })).toBeDisabled();
  });

  it('renders the observed planner view options with Agenda selected', () => {
    render(<TrelloPreview variant="planner-controls" />);
    expect(screen.getByRole('dialog', { name: 'Change view' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Agenda' })).toBeChecked();
    expect(screen.getByRole('button', { name: 'Connect an account' })).toBeDisabled();
  });

  it('keeps workspace policy changes disabled', () => {
    render(<TrelloPreview variant="workspace-settings" />);
    expect(screen.getByLabelText('AI active')).toBeChecked();
    for (const button of screen.getAllByRole('button', { name: 'Change' })) {
      expect(button).toBeDisabled();
    }
  });

  it('renders every dashboard continuation fixture', () => {
    const variants = [
      'templates-gallery',
      'template-category',
      'template-detail',
      'home-onboarding',
      'global-create-menu',
      'app-switcher',
      'information-menu',
      'global-search',
      'advanced-search',
      'feedback-dialog',
      'notifications-panel',
      'account-settings',
      'ai-settings',
      'labs',
      'personal-cards',
      'personal-activity',
      'profile-visibility',
      'workspace-power-ups',
      'workspace-export',
      'closed-boards',
      'account-menu',
    ] satisfies TrelloVariant[];
    for (const variant of variants) {
      const { container } = render(<TrelloPreview variant={variant} />);
      expect(container.querySelector('[class*="app"]')).toBeInTheDocument();
      cleanup();
    }
  });

  it('keeps export generation disabled', () => {
    render(<TrelloPreview variant="workspace-export" />);
    expect(screen.getByRole('button', { name: 'Create new export' })).toBeDisabled();
  });

  it('shows advanced search operators without submitting a query', () => {
    render(<TrelloPreview variant="advanced-search" />);
    expect(screen.getByText('board:keyword')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your search keyword here')).toHaveValue('');
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { MondayPreview } from './MondayPreview';
import { mondayLeafEntries, mondayLeafFixtures } from './leafFixtures';
import { mondayIds } from './registry';

describe('MondayPreview', () => {
  it('renders the fictional application shell without provider identity', () => {
    const { container } = render(<MondayPreview variant="application-shell" />);
    expect(screen.getByRole('heading', { name: 'Acme Studio' })).toBeInTheDocument();
    expect(container).not.toHaveTextContent('Seetha');
  });

  it('opens and closes the fictional global search', async () => {
    const user = userEvent.setup();
    render(<MondayPreview variant="application-shell" />);
    await user.click(screen.getByRole('button', { name: /search for anything/i }));
    expect(screen.getByRole('dialog', { name: 'Fictional global search' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(
      screen.queryByRole('dialog', { name: 'Fictional global search' })
    ).not.toBeInTheDocument();
  });

  it('collapses the fictional board without editing tasks', async () => {
    const user = userEvent.setup();
    render(<MondayPreview variant="board-table" />);
    expect(screen.getByRole('cell', { name: /Define launch brief/ })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /To-Do/ }));
    expect(screen.queryByRole('cell', { name: /Define launch brief/ })).not.toBeInTheDocument();
  });

  it('opens a board control panel without enabling persistence', () => {
    render(<MondayPreview variant="board-controls" />);
    expect(screen.getByRole('heading', { name: 'Quick filters' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Save as new view' })).toBeDisabled();
  });

  it('opens a fictional dashboard filter while apply stays disabled', async () => {
    const user = userEvent.setup();
    render(<MondayPreview variant="dashboard-reporting" />);
    await user.click(screen.getByRole('button', { name: 'Filter' }));
    expect(screen.getByRole('heading', { name: 'Advanced filters' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Apply' })).toBeDisabled();
  });

  it('keeps workflow continuation disabled', () => {
    render(<MondayPreview variant="ai-workflows-onboarding" />);
    expect(screen.getByRole('button', { name: 'Got it' })).toBeDisabled();
  });

  it('keeps the agent prompt empty and unsubmitted', () => {
    render(<MondayPreview variant="agent-directory" />);
    expect(screen.getByLabelText('Describe a fictional agent')).toHaveValue('');
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
  });

  it('switches a Vibe theme locally', async () => {
    const user = userEvent.setup();
    render(<MondayPreview variant="vibe-app-builder" />);
    await user.click(screen.getByRole('button', { name: /Monochrome/ }));
    expect(screen.getByRole('button', { name: /Monochrome/ })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
  });

  it('keeps Notetaker demo disabled', () => {
    render(<MondayPreview variant="notetaker-onboarding" />);
    expect(screen.getByRole('button', { name: 'Watch a demo' })).toBeDisabled();
    expect(screen.getByText(/No meeting or calendar access/i)).toBeInTheDocument();
  });

  it('registers every expanded leaf component exactly once', () => {
    expect(mondayLeafEntries).toHaveLength(48);
    expect(new Set(mondayLeafEntries.map(({ id }) => id)).size).toBe(48);
    expect(mondayIds).toHaveLength(58);
  });

  it('renders AI governance as individually selectable fictional components', async () => {
    const user = userEvent.setup();
    render(<MondayPreview variant="ai-permissions" />);
    expect(screen.getByRole('heading', { name: 'AI Permissions' })).toBeInTheDocument();
    const roleSelector = screen.getByRole('button', { name: /role selector/i });
    await user.click(roleSelector);
    expect(roleSelector).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('heading', { name: 'role selector' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Continue in provider' })).toBeDisabled();
  });

  it('records the exercised and canceled AI suggestion preview boundary', () => {
    render(<MondayPreview variant="ai-suggestions-preview" />);
    expect(screen.getByText(/provider computation ran automatically/i)).toBeInTheDocument();
    expect(screen.getByText(/no column was added/i)).toBeInTheDocument();
  });

  it('keeps all expanded fixtures free of retained provider identity', () => {
    const text = JSON.stringify(mondayLeafFixtures);
    expect(text).not.toMatch(/Seetha|centi704560|5031794564/i);
  });
});

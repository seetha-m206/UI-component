import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { OtterlyRemaining } from './OtterlyRemaining';

describe('OtterlyAI remaining fictional previews', () => {
  it('changes a date preset locally without loading a report', async () => {
    const user = userEvent.setup();
    render(<OtterlyRemaining variant="date-range" />);
    await user.click(screen.getByRole('button', { name: 'Last 30 days' }));
    expect(screen.getByRole('button', { name: /Last 30 days/ })).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens the tag dialog and keeps creation guarded until fields are filled', async () => {
    const user = userEvent.setup();
    render(<OtterlyRemaining variant="tags-empty" />);
    await user.click(screen.getByRole('button', { name: 'Create Tag' }));
    expect(screen.getByRole('dialog', { name: 'Create tag' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Create$/ })).toBeDisabled();
    await user.type(screen.getByRole('textbox', { name: 'Tag name' }), 'Editorial');
    await user.selectOptions(screen.getByRole('combobox', { name: 'Tag color' }), 'Blue');
    expect(screen.getByRole('button', { name: /^Create$/ })).toBeEnabled();
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('dialog', { name: 'Create tag' })).not.toBeInTheDocument();
  });

  it('adds an unsaved prompt row and leaves submission local', async () => {
    const user = userEvent.setup();
    render(<OtterlyRemaining variant="prompt-create" />);
    expect(screen.getByRole('button', { name: 'Save prompts' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'Add another prompt' }));
    expect(screen.getByRole('textbox', { name: 'Prompt 2' })).toBeInTheDocument();
    await user.type(screen.getByRole('textbox', { name: 'Prompt 1' }), 'Fictional prompt');
    await user.click(screen.getByRole('button', { name: 'Save prompts' }));
    expect(screen.getByRole('status')).toHaveTextContent('fictional local preview only');
  });

  it('keeps the sensitive invite and data-source actions unavailable', () => {
    const { unmount } = render(<OtterlyRemaining variant="team-invite" />);
    expect(screen.getByRole('button', { name: 'Send invite' })).toBeDisabled();
    unmount();
    render(<OtterlyRemaining variant="data-source" />);
    expect(screen.getByRole('combobox', { name: 'Logs provider' })).toBeDisabled();
  });
});

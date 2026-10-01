import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingProjectPageHeader } from './SeRankingProjectPageHeader';
describe('SeRankingProjectPageHeader', () => {
  it('opens the observed widget menu and toggles visibility locally', async () => {
    const user = userEvent.setup();
    render(<SeRankingProjectPageHeader />);
    await user.click(screen.getByRole('button', { name: /widgets/i }));
    const insights = screen.getByRole('checkbox', { name: 'Insights' });
    expect(insights).toBeChecked();
    await user.click(insights);
    expect(insights).not.toBeChecked();
    expect(screen.getByRole('status')).toHaveTextContent(/Insights visibility changed/i);
  });

  it('replays the observed widget reorder action locally', async () => {
    const user = userEvent.setup();
    render(<SeRankingProjectPageHeader initialMenuOpen />);
    await user.click(screen.getByRole('button', { name: 'Move Content up' }));
    expect(screen.getByRole('status')).toHaveTextContent(/drag ordering and reload persistence/i);
    const controls = screen.getAllByRole('checkbox');
    expect(controls.at(-2)).toHaveAccessibleName('Content');
    expect(controls.at(-1)).toHaveAccessibleName('Insights');
  });
});

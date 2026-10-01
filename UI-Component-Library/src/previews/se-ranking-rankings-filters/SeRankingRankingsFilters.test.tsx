import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingRankingsFilters } from './SeRankingRankingsFilters';
describe('SeRankingRankingsFilters', () => {
  it('renders the observed ranges and changes local filter state', async () => {
    const user = userEvent.setup();
    render(<SeRankingRankingsFilters initiallyOpen="range" />);
    expect(screen.getByRole('menuitem', { name: 'Past 6 months' })).toBeInTheDocument();
    await user.click(screen.getByRole('menuitem', { name: 'Past 7 days' }));
    expect(screen.getByRole('button', { name: /Past 7 days/i })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(/loading transition/i);
  });
});

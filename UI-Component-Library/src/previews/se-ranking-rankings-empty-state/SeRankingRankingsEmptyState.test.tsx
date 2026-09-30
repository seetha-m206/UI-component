import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingRankingsEmptyState } from './SeRankingRankingsEmptyState';
describe('SeRankingRankingsEmptyState', () => { it('guards the provider action locally', async () => { const user = userEvent.setup(); render(<SeRankingRankingsEmptyState />); await user.click(screen.getByRole('button', { name: 'Add keywords' })); expect(screen.getByRole('status')).toHaveTextContent(/No project change was sent/i); }); });

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingAiEngineCards } from './SeRankingAiEngineCards';
describe('SeRankingAiEngineCards', () => { it('shows the observed drill-down state', async () => { const user = userEvent.setup(); render(<SeRankingAiEngineCards />); const overview = screen.getByRole('button', { name: /AI Overview/i }); await user.click(overview); expect(overview).toHaveAttribute('aria-pressed', 'true'); expect(screen.getByText(/Overall Presence 0.06%/i)).toBeInTheDocument(); expect(screen.getByRole('status')).toHaveTextContent(/observed in a new tab/i); }); });

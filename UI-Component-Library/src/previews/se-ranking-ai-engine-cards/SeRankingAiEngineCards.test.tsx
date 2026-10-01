import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingAiEngineCards } from './SeRankingAiEngineCards';
describe('SeRankingAiEngineCards', () => { it('changes only local selected state', async () => { const user = userEvent.setup(); render(<SeRankingAiEngineCards />); const chatgpt = screen.getByRole('button', { name: /ChatGPT/i }); await user.click(chatgpt); expect(chatgpt).toHaveAttribute('aria-pressed', 'true'); expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i); }); });

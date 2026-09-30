import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingKeywordQueryBar } from './SeRankingKeywordQueryBar';
describe('SeRankingKeywordQueryBar', () => { it('guards Analyze until a local query exists', async () => { const user = userEvent.setup(); render(<SeRankingKeywordQueryBar />); const analyze = screen.getByRole('button', { name: /analyze/i }); expect(analyze).toBeDisabled(); await user.type(screen.getByPlaceholderText(/enter keywords/i), 'seo software'); expect(analyze).toBeEnabled(); await user.click(analyze); expect(screen.getByRole('status')).toHaveTextContent(/no SE Ranking request/i); }); it('labels the unobserved dropdown state', () => { render(<SeRankingKeywordQueryBar initialState="dropdown-open" />); expect(screen.getByText(/needs verification/i)).toBeInTheDocument(); }); });

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingSetupActions } from './SeRankingSetupActions';
describe('SeRankingSetupActions', () => { it('guards every setup action locally', async () => { const user = userEvent.setup(); render(<SeRankingSetupActions />); await user.click(screen.getByRole('button', { name: 'Set up AI tracking' })); expect(screen.getByRole('status')).toHaveTextContent(/No provider setup was started/i); await user.click(screen.getByRole('button', { name: 'Connect analytics' })); expect(screen.getByRole('status')).toHaveTextContent(/Analytics is guarded locally/i); }); });
describe('observed setup screens', () => { it('renders the AI setup destination', () => { render(<SeRankingSetupActions initialState="ai-setup" />); expect(screen.getByRole('heading', { name: 'Set up search engines' })).toBeInTheDocument(); expect(screen.getByText('Google India')).toBeInTheDocument(); }); });

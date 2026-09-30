import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingSetupActions } from './SeRankingSetupActions';
describe('SeRankingSetupActions', () => { it('guards every setup action locally', async () => { const user = userEvent.setup(); render(<SeRankingSetupActions />); await user.click(screen.getByRole('button', { name: 'Set up AI tracking' })); expect(screen.getByRole('status')).toHaveTextContent(/No provider setup was started/i); await user.click(screen.getByRole('button', { name: 'Connect analytics' })); expect(screen.getByRole('status')).toHaveTextContent(/Analytics is guarded locally/i); }); });

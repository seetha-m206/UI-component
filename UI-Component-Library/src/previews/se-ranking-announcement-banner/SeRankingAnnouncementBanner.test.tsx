import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingAnnouncementBanner } from './SeRankingAnnouncementBanner';
describe('SeRankingAnnouncementBanner', () => { it('guards registration and dismisses locally', async () => { const user = userEvent.setup(); render(<SeRankingAnnouncementBanner />); await user.click(screen.getByRole('button', { name: 'Register' })); expect(screen.getByRole('status')).toHaveTextContent(/No registration request was sent/i); await user.click(screen.getByRole('button', { name: /close banner/i })); expect(screen.queryByRole('region', { name: /workshop announcement/i })).not.toBeInTheDocument(); }); });

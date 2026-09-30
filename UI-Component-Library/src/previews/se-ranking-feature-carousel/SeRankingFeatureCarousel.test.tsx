import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingFeatureCarousel } from './SeRankingFeatureCarousel';
describe('SeRankingFeatureCarousel', () => { it('moves between local feature pages', async () => { const user = userEvent.setup(); render(<SeRankingFeatureCarousel />); expect(screen.getByText('Difficulty score')).toBeInTheDocument(); await user.click(screen.getByRole('button', { name: /next feature page/i })); expect(screen.getByText('Global Volume')).toBeInTheDocument(); expect(screen.getByRole('button', { name: /next feature page/i })).toBeDisabled(); }); });

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SeRankingRankingsDetailReport } from './SeRankingRankingsDetailReport';
describe('SeRankingRankingsDetailReport', () => { it('renders the observed keyword row and guide', () => { render(<SeRankingRankingsDetailReport guideOpen />); expect(screen.getByText('centilio upload evidence 2026-10-01')).toBeInTheDocument(); expect(screen.getByRole('dialog')).toHaveTextContent('1 of 5'); expect(screen.getByText('Keyword limits: 1 / 750')).toBeInTheDocument(); }); });

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SeRankingKeyMetricsStrip } from './SeRankingKeyMetricsStrip';
describe('SeRankingKeyMetricsStrip', () => { it('renders the observed account metrics', () => { render(<SeRankingKeyMetricsStrip />); expect(screen.getByText('0.06%')).toBeInTheDocument(); expect(screen.getByText('516')).toBeInTheDocument(); expect(screen.getByText('82')).toBeInTheDocument(); }); it('labels the synthetic unavailable state', () => { render(<SeRankingKeyMetricsStrip initialState="unavailable" />); expect(screen.getByText(/needs verification/i)).toBeInTheDocument(); }); });

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SeRankingKeywordAnalysisResult } from './SeRankingKeywordAnalysisResult';
describe('SeRankingKeywordAnalysisResult', () => { it('renders the observed centilio zero-result report', () => { render(<SeRankingKeywordAnalysisResult />); expect(screen.getByDisplayValue('centilio')).toBeInTheDocument(); expect(screen.getByRole('status')).toHaveTextContent('No results found'); expect(screen.getByText('1 / 10 account limit')).toBeInTheDocument(); }); });

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SeRankingKeywordResearchEntry } from './SeRankingKeywordResearchEntry';
describe('SeRankingKeywordResearchEntry', () => { it('renders the observed entry copy and feature cards', () => { render(<SeRankingKeywordResearchEntry />); expect(screen.getByRole('heading', { name: 'Keyword Research' })).toBeInTheDocument(); expect(screen.getByText('Difficulty score')).toBeInTheDocument(); expect(screen.getByText('Bulk keyword analysis')).toBeInTheDocument(); }); });

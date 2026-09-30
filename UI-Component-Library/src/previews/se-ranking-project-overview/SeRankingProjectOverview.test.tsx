import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SeRankingProjectOverview } from './SeRankingProjectOverview';
describe('SeRankingProjectOverview', () => { it('renders observed project metrics and setup states', () => { render(<SeRankingProjectOverview />); expect(screen.getByText('AI Presence')).toBeInTheDocument(); expect(screen.getByText('Organic Keywords')).toBeInTheDocument(); expect(screen.getByText('No tracked keywords')).toBeInTheDocument(); }); });

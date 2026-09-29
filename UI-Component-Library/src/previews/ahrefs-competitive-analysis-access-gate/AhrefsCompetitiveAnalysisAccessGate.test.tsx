import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsCompetitiveAnalysisAccessGate } from './AhrefsCompetitiveAnalysisAccessGate';
describe('AhrefsCompetitiveAnalysisAccessGate', () => {
  it('renders the observed gate', () => {
    render(<AhrefsCompetitiveAnalysisAccessGate />);
    expect(screen.getByRole('heading', { name: 'Competitive Analysis' })).toBeInTheDocument();
  });
  it('guards pricing navigation', async () => {
    render(<AhrefsCompetitiveAnalysisAccessGate />);
    await userEvent.click(screen.getByRole('button', { name: 'See pricing' }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsBatchAnalysisAccessGate } from './AhrefsBatchAnalysisAccessGate';
describe('AhrefsBatchAnalysisAccessGate', () => {
  it('renders the observed gate', () => {
    render(<AhrefsBatchAnalysisAccessGate />);
    expect(screen.getByRole('heading', { name: 'Batch Analysis' })).toBeInTheDocument();
  });
  it('guards pricing navigation', async () => {
    render(<AhrefsBatchAnalysisAccessGate />);
    await userEvent.click(screen.getByRole('button', { name: 'See pricing' }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
});

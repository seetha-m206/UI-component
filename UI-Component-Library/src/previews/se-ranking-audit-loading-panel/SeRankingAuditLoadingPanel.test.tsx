import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingAuditLoadingPanel } from './SeRankingAuditLoadingPanel';
describe('SeRankingAuditLoadingPanel', () => {
  it('renders the observed launch confirmation', async () => {
    const user = userEvent.setup();
    render(<SeRankingAuditLoadingPanel initialState="launch" />);
    await user.click(screen.getByRole('button', { name: 'Launch Audit' }));
    expect(screen.getByRole('status')).toHaveTextContent(/verified separately/i);
  });

  it('documents why a failure Retry fixture is unavailable', () => {
    render(<SeRankingAuditLoadingPanel initialState="retry-unavailable" />);
    expect(screen.getByText('Retry state unavailable')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(/Launch website audit/i);
  });
});

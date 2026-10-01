import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingAuditIssueReport } from './SeRankingAuditIssueReport';

describe('SeRankingAuditIssueReport', () => {
  it('renders observed issue scopes and changes the local scope', async () => {
    const user = userEvent.setup();
    render(<SeRankingAuditIssueReport />);
    expect(screen.getByText('4XX HTTP Status Codes')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Fixed 0' }));
    expect(screen.getByRole('status')).toHaveTextContent('Fixed issue scope selected');
  });
});

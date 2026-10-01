import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SeRankingAuditToast } from './SeRankingAuditToast';
describe('SeRankingAuditToast', () => {
  it('renders and locally dismisses the observed notification', async () => {
    const user = userEvent.setup();
    render(<SeRankingAuditToast />);
    expect(screen.getByText('Audit Completed!')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /close notification/i }));
    expect(screen.queryByText('Audit Completed!')).not.toBeInTheDocument();
  });
});

describe('SeRankingAuditToast dismissed fixture', () => {
  it('can start dismissed and reopen locally', async () => {
    const user = userEvent.setup();
    render(<SeRankingAuditToast initiallyOpen={false} />);

    expect(screen.queryByText('Audit Completed!')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Show audit notification' }));
    expect(screen.getByText('Audit Completed!')).toBeInTheDocument();
  });
});

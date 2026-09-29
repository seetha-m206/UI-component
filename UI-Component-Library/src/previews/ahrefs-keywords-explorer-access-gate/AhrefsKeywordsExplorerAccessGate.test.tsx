import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsKeywordsExplorerAccessGate } from './AhrefsKeywordsExplorerAccessGate';

describe('AhrefsKeywordsExplorerAccessGate', () => {
  it('renders the observed access-gated Keywords Explorer landing', () => {
    render(<AhrefsKeywordsExplorerAccessGate />);
    expect(screen.getByRole('heading', { name: 'Keywords Explorer' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'See pricing' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Keywords Explorer tutorial' })).toBeInTheDocument();
    expect(screen.getByText('4:10', { exact: false })).toBeInTheDocument();
  });

  it('guards pricing navigation locally', async () => {
    render(<AhrefsKeywordsExplorerAccessGate />);
    await userEvent.click(screen.getByRole('button', { name: 'See pricing' }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });

  it('plays and pauses only the synthetic tutorial state', async () => {
    render(<AhrefsKeywordsExplorerAccessGate />);
    await userEvent.click(screen.getByRole('button', { name: 'Play Keywords Explorer tutorial' }));
    expect(screen.getByRole('status')).toHaveTextContent(/playing locally/i);
    await userEvent.click(screen.getByRole('button', { name: 'Pause Keywords Explorer tutorial' }));
    expect(screen.getByRole('status')).toHaveTextContent(/paused locally/i);
  });

  it('marks unverified account navigation', async () => {
    render(<AhrefsKeywordsExplorerAccessGate />);
    await userEvent.click(screen.getByRole('button', { name: /Atlas workspace/ }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
});

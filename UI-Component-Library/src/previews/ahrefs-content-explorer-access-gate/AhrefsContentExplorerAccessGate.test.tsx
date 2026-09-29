import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsContentExplorerAccessGate } from './AhrefsContentExplorerAccessGate';

describe('AhrefsContentExplorerAccessGate', () => {
  it('renders the observed Content Explorer access gate', () => {
    render(<AhrefsContentExplorerAccessGate />);
    expect(screen.getByRole('heading', { name: 'Content Explorer' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'See pricing' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Content Explorer tutorial' })).toBeInTheDocument();
    expect(screen.getByText('0:00 / 2:56')).toBeInTheDocument();
  });

  it('guards pricing navigation locally', async () => {
    render(<AhrefsContentExplorerAccessGate />);
    await userEvent.click(screen.getByRole('button', { name: 'See pricing' }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });

  it('uses a synthetic local tutorial state', async () => {
    render(<AhrefsContentExplorerAccessGate />);
    await userEvent.click(screen.getByRole('button', { name: 'Play Content Explorer tutorial' }));
    expect(screen.getByRole('status')).toHaveTextContent(/playing locally/i);
    expect(
      screen.getByRole('button', { name: 'Pause Content Explorer tutorial' })
    ).toBeInTheDocument();
  });

  it('marks unverified product navigation', async () => {
    render(<AhrefsContentExplorerAccessGate />);
    await userEvent.click(screen.getByRole('button', { name: /All tools/ }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
});

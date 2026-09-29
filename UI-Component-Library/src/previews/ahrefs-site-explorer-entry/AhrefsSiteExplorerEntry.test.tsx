import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsSiteExplorerEntry } from './AhrefsSiteExplorerEntry';

describe('AhrefsSiteExplorerEntry', () => {
  it('renders the observed navigation, notice, heading, and target form', () => {
    render(<AhrefsSiteExplorerEntry />);
    expect(screen.getByRole('navigation', { name: 'Ahrefs products' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'SERP data notice' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Site Explorer' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Domain or URL' })).toBeInTheDocument();
  });

  it('guards analysis locally', async () => {
    render(<AhrefsSiteExplorerEntry />);
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Domain or URL' }),
      'northstar.example'
    );
    await userEvent.click(screen.getByRole('button', { name: 'Run Site Explorer analysis' }));
    expect(screen.getByRole('status')).toHaveTextContent(
      'No Site Explorer analysis was submitted for northstar.example'
    );
  });

  it('dismisses the local notice and update surfaces', async () => {
    render(<AhrefsSiteExplorerEntry />);
    await userEvent.click(screen.getByRole('button', { name: 'Dismiss SERP data notice' }));
    expect(screen.queryByRole('region', { name: 'SERP data notice' })).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Dismiss product update' }));
    expect(screen.queryByRole('dialog', { name: 'Product update' })).not.toBeInTheDocument();
  });

  it('marks unverified controls instead of inventing a live menu', async () => {
    render(<AhrefsSiteExplorerEntry />);
    await userEvent.click(screen.getByRole('button', { name: /http \+ https/ }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
});

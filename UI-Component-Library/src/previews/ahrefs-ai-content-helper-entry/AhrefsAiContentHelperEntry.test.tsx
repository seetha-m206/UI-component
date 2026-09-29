import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsAiContentHelperEntry } from './AhrefsAiContentHelperEntry';
describe('AhrefsAiContentHelperEntry', () => {
  it('renders the observed setup and allowance', () => {
    render(<AhrefsAiContentHelperEntry />);
    expect(screen.getByRole('heading', { name: 'AI Content Helper' })).toBeInTheDocument();
    expect(screen.getByText('1 / 1 document available this month')).toBeInTheDocument();
  });
  it('guards document creation locally', async () => {
    render(<AhrefsAiContentHelperEntry />);
    await userEvent.click(screen.getByRole('button', { name: 'Create document' }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
  it('switches the local section', async () => {
    render(<AhrefsAiContentHelperEntry />);
    await userEvent.click(screen.getByRole('tab', { name: /Brand kits/ }));
    expect(screen.getByRole('heading', { name: 'Add your first brand kit' })).toBeInTheDocument();
  });
});

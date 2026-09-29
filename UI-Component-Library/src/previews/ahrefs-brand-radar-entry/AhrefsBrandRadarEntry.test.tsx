import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { AhrefsBrandRadarEntry } from './AhrefsBrandRadarEntry';

describe('AhrefsBrandRadarEntry', () => {
  it('renders the observed entry and empty reports state', () => {
    render(<AhrefsBrandRadarEntry />);
    expect(screen.getByRole('heading', { name: 'Brand Radar 2.0' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Add your first report' })).toBeInTheDocument();
  });
  it('guards analysis locally', async () => {
    render(<AhrefsBrandRadarEntry />);
    await userEvent.click(screen.getByRole('button', { name: /Analyze/ }));
    expect(screen.getByRole('status')).toHaveTextContent(/needs verification/i);
  });
  it('supports the local manual setup fixture', async () => {
    render(<AhrefsBrandRadarEntry />);
    await userEvent.click(screen.getByRole('button', { name: /add your brand/i }));
    expect(screen.getByLabelText('Your brand')).toBeInTheDocument();
  });
});

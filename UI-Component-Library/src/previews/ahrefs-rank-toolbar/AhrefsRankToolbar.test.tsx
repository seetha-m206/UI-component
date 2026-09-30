import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsRankToolbar } from './AhrefsRankToolbar';
describe('AhrefsRankToolbar', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsRankToolbar />);
    expect(screen.getByText('1,000,001 domains', { exact: false })).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('Search domains'), { target: { value: 'atlas' } });
    expect(screen.getByText('Query: atlas')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Export/ }));
    expect(screen.getByRole('status')).toHaveTextContent('needs live verification');
  });
});

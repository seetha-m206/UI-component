import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsRankPagination } from './AhrefsRankPagination';
describe('AhrefsRankPagination', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsRankPagination />);
    expect(screen.getByText('Page 1', { exact: false })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    expect(screen.getByRole('status')).toHaveTextContent('Page 3');
  });
});

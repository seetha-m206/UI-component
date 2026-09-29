import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsPortfolioEmptyState } from './AhrefsPortfolioEmptyState';
describe('AhrefsPortfolioEmptyState', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsPortfolioEmptyState />);
    expect(screen.getByText('Add your first portfolio', { exact: false })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Create portfolio' }));
    expect(screen.getByRole('status')).toHaveTextContent('needs verification');
  });
});

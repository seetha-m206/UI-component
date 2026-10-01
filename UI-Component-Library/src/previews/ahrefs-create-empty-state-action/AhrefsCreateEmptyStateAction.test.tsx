import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsCreateEmptyStateAction } from './AhrefsCreateEmptyStateAction';
describe('AhrefsCreateEmptyStateAction', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsCreateEmptyStateAction />);
    expect(screen.getByText('Create portfolio', { exact: false })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Report' }));
    fireEvent.click(screen.getByRole('button', { name: /Create report/i }));
    expect(screen.getByRole('status')).toHaveTextContent('needs live verification');
  });
});

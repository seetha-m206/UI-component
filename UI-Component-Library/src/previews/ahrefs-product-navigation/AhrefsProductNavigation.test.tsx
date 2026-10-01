import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsProductNavigation } from './AhrefsProductNavigation';
describe('AhrefsProductNavigation', () => {
  it('switches the locally selected product', () => {
    render(<AhrefsProductNavigation />);
    fireEvent.click(screen.getByRole('button', { name: 'Site Explorer' }));
    expect(screen.getByText('Selected product: Site Explorer')).toBeInTheDocument();
  });
});

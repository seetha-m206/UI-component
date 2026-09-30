import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsDomainSearchField } from './AhrefsDomainSearchField';
describe('AhrefsDomainSearchField', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsDomainSearchField />);
    expect(screen.getByText('All domains', { exact: false })).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('Search domains'), { target: { value: 'atlas' } });
    expect(screen.getByRole('status')).toHaveTextContent('Filtering for atlas');
  });
});

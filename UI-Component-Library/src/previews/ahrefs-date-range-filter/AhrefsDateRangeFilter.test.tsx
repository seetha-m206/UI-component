import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsDateRangeFilter } from './AhrefsDateRangeFilter';
describe('AhrefsDateRangeFilter', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsDateRangeFilter />);
    expect(screen.getByText('Changes: Last 3 months', { exact: false })).toBeInTheDocument();
  });
});

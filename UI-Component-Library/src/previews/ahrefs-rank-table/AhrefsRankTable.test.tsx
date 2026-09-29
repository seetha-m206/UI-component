import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsRankTable } from './AhrefsRankTable';
describe('AhrefsRankTable', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsRankTable />);
    expect(screen.getByText('1,000,001 domains', { exact: false })).toBeInTheDocument();
  });
});

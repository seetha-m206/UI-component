import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsEmptyResultsRow } from './AhrefsEmptyResultsRow';
describe('AhrefsEmptyResultsRow', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsEmptyResultsRow />);
    expect(screen.getByText('No results found', { exact: false })).toBeInTheDocument();
  });
});

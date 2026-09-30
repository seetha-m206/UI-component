import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsDataTableHeader } from './AhrefsDataTableHeader';
describe('AhrefsDataTableHeader', () => {
  it('renders the observed Ahrefs state', () => {
    render(<AhrefsDataTableHeader />);
    expect(screen.getByText('atlas.example', { exact: false })).toBeInTheDocument();
  });
});

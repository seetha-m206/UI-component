import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AhrefsCollectionNavigationRail } from './AhrefsCollectionNavigationRail';
describe('AhrefsCollectionNavigationRail', () => {
  it('filters and selects saved work locally', () => {
    render(<AhrefsCollectionNavigationRail />);
    fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: 'report' } });
    expect(screen.queryByRole('button', { name: 'Projects' })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Reports' }));
    expect(screen.getByText('Collection: Reports')).toBeInTheDocument();
  });
});
